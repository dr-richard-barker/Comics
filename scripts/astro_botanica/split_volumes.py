#!/usr/bin/env python3
"""
Split the ASTRO-BOTANICA source transcript into per-volume scripts and build
structured series data.

Inputs
  docs/astro-botanica/source/turns.json        (from extract_conversation.py)
  data/astro_botanica/osdr_live_plants.json    (optional; live OSDR reconciliation)

Outputs
  docs/astro-botanica/volumes/vol-NN-osd-XXX.md   verbatim script + front matter
  docs/astro-botanica/PROMPT_TEMPLATE.md          master showrunner prompt
  docs/astro-botanica/ROSTER.md                   volume roster table
  docs/astro-botanica/QA_REPORT.md                completeness / consistency report
  data/astro_botanica/series_index.json           per-volume metadata + QA
  data/astro_botanica/series_bible.json           merged SERIES_BIBLE deltas
  data/astro_botanica/osdr_plant_studies.json     accession master list

Usage
  python3 scripts/astro_botanica/split_volumes.py [--verify]
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from collections import OrderedDict, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "docs/astro-botanica/source/turns.json"
DOCS = ROOT / "docs/astro-botanica"
VOL_DIR = DOCS / "volumes"
DATA = ROOT / "data/astro_botanica"
LIVE = DATA / "osdr_live_plants.json"

SERIES_TITLE = "ASTRO-BOTANICA: ZERO-G ROOTS"
PAGES_PER_VOLUME = 32
# OSDR itself lists the same gamma/HZE dataset under two accessions.
KNOWN_DUPLICATE_DATA = {("OSD-46", "OSD-320")}

ACC_RE = re.compile(r"OSD-(\d+)")
DOI_RE = re.compile(r"10\.\d{4,9}/[^\s`)\]|,;*]+")
OSDR_DOI_PREFIXES = ("10.25966/", "10.26030/")
EMAIL_RE = re.compile(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}")


# ----------------------------------------------------------------------------
# Text helpers
# ----------------------------------------------------------------------------
def strip_md(s: str) -> str:
    s = re.sub(r"[`*_]", "", s)
    return re.sub(r"\s+", " ", s).strip(" -—:|")


def header_block(text: str) -> str:
    """Section 1 (metadata header) of a volume response."""
    m = re.search(r"##\s*2\.", text)
    return text[: m.start()] if m else text[:6000]


def labeled(header: str, *labels: str) -> str | None:
    """Value of a '- **Label:** value' bullet in the header."""
    for lab in labels:
        m = re.search(rf"^\s*-?\s*\*\*[^*\n]*{lab}[^*\n]*:?\*\*:?\s*(.+)$", header, re.M | re.I)
        if m:
            return m.group(1).strip()
    return None


def acc_num(acc: str) -> int:
    return int(acc.split("-")[1])


# ----------------------------------------------------------------------------
# JSON (SERIES_BIBLE_DELTA)
# ----------------------------------------------------------------------------
def repair_json(s: str) -> str:
    s = s.replace("\u201c", '"').replace("\u201d", '"').replace("\u2019", "'")
    s = re.sub(r",(\s*[}\]])", r"\1", s)
    return s


def last_json_block(text: str):
    blocks = re.findall(r"```[a-zA-Z]*\n(.*?)```", text, re.S)
    for raw in reversed(blocks):
        raw = raw.strip()
        if not raw.startswith(("{", "[")):
            continue
        for candidate in (raw, repair_json(raw)):
            try:
                return json.loads(candidate), "ok" if candidate is raw else "repaired"
            except json.JSONDecodeError:
                continue
        return None, "unparseable"
    return None, "missing"


def walk(obj, path=()):
    if isinstance(obj, dict):
        for k, v in obj.items():
            yield from walk(v, path + (str(k).lower(),))
    elif isinstance(obj, list):
        for v in obj:
            yield from walk(v, path)
    yield path, obj


def as_strings(v) -> list[str]:
    if isinstance(v, str):
        return [v]
    if isinstance(v, list):
        out = []
        for x in v:
            if isinstance(x, str):
                out.append(x)
            elif isinstance(x, dict):
                name = x.get("name") or x.get("hardware") or x.get("id") or x.get("label")
                if isinstance(name, str):
                    out.append(name)
        return out
    return []


# ----------------------------------------------------------------------------
# Page coverage
# ----------------------------------------------------------------------------
PAGE_HEAD = re.compile(
    r"^(?:#{2,4}\s*|\*\*)\s*Pages?\s+(\d+)(?:\s*(?:[–—-]|to|&|and)\s*(\d+))?", re.M | re.I)


def page_coverage(text: str) -> dict:
    covered: set[int] = set()
    ranges = []
    headings = 0
    for m in PAGE_HEAD.finditer(text):
        a = int(m.group(1))
        b = int(m.group(2)) if m.group(2) else a
        if not (1 <= a <= PAGES_PER_VOLUME) or b < a or b > PAGES_PER_VOLUME:
            continue
        headings += 1
        covered.update(range(a, b + 1))
        # 2-page spans are normal double-page spreads; longer spans are condensed.
        if b - a >= 2:
            ranges.append(f"{a}-{b}")
    panels = len(re.findall(r"\*\*Panel\s*\d+", text, re.I))
    spreads = len(re.findall(r"double[- ]page spread", text, re.I))
    return {
        "page_headings": headings,
        "pages_covered": len(covered),
        "missing_pages": [p for p in range(1, PAGES_PER_VOLUME + 1) if p not in covered],
        "condensed_ranges": ranges,
        "panels": panels,
        "double_page_spreads_mentioned": spreads,
        "has_mission_debrief": bool(re.search(r"Mission Debrief", text, re.I)),
    }


# ----------------------------------------------------------------------------
# Volume detection & parsing
# ----------------------------------------------------------------------------
def is_volume_turn(text: str) -> bool:
    return bool(re.search(r"## 1\. Volume Metadata Header|## 4\. Mission Debrief", text))


def parse_volume_number(header: str) -> int | None:
    patterns = [
        r"-\s*\*\*Volume:?\*\*:?\s*`?(?:Vol\.\s*)?(\d+)",
        r"-\s*\*\*Series\s*&\s*Volume:?\*\*:?[^\n]*?Volume\s*(\d+)",
        r"-\s*\*\*Series\s*/\s*Volume:?\*\*:?[^\n]*?Volume\s*(\d+)",
        r"-\s*\*\*Series:?\*\*:?[^\n]*?Volume\s*(\d+)",
        r"-\s*\*\*Volume\s*Title:?\*\*:?\s*\*?Vol\.\s*(\d+)",
        r"Vol\.\s*(\d+)\s*[—–-]",
        r"Volume\s+(\d+)\b",
    ]
    for pat in patterns:
        m = re.search(pat, header, re.I)
        if m:
            return int(m.group(1))
    return None


def parse_title(header: str) -> str | None:
    for lab in ("Chapter Title", "Title"):
        v = labeled(header, lab)
        if v:
            return strip_md(v)
    v = labeled(header, "Volume")
    if v:
        m = re.search(r"(?:Vol\.\s*)?\d+\s*[—–-]+\s*(.+)", strip_md(v))
        if m:
            return m.group(1).strip()
    return None


def parse_accession(header: str, bible, text: str) -> str | None:
    # 1. Direct label in header
    v = labeled(header, "Accession")
    if v and ACC_RE.search(v):
        return "OSD-" + ACC_RE.search(v).group(1)
    # 2. Check Study Specification / parameters table (e.g. Turn 107 / OSD-581)
    m_spec = re.search(r"Study Specification \(`(OSD-\d+)`\)", text)
    if m_spec:
        return m_spec.group(1)
    # 3. SERIES_BIBLE JSON
    if isinstance(bible, dict):
        for path, val in walk(bible):
            if path and path[-1] == "accession" and len(path) <= 2 and isinstance(val, str) and ACC_RE.search(val):
                return "OSD-" + ACC_RE.search(val).group(1)
    # 4. Search header then text
    m = ACC_RE.search(header) or ACC_RE.search(text)
    return "OSD-" + m.group(1) if m else None


def parse_publication(header: str) -> dict:
    v = labeled(header, "Primary Publication", "Publication") or ""
    dois = [d.rstrip(".") for d in DOI_RE.findall(v)]
    paper = [d for d in dois if not d.startswith(OSDR_DOI_PREFIXES)]
    pmid = re.search(r"PMID:?\s*`?(\d{6,9})", v)
    return {"citation": strip_md(v)[:400] or None,
            "doi": paper[0] if paper else None,
            "pmid": pmid.group(1) if pmid else None}


def parse_osdr_doi(header: str) -> str | None:
    for d in DOI_RE.findall(header):
        if d.startswith(OSDR_DOI_PREFIXES):
            return d.rstrip(".")
    return None


def bible_lists(bible) -> dict:
    out = defaultdict(list)
    if not isinstance(bible, (dict, list)):
        return out
    for path, val in walk(bible):
        if not path:
            continue
        key = path[-1]
        if "hardware" in key:
            out["hardware"] += as_strings(val)
        elif any(k in key for k in ("ecotype", "mutant", "genotype", "squad")):
            out["genotypes"] += as_strings(val)
        elif "hook" in key:
            out["hooks"] += as_strings(val)
        elif "skipped" in key:
            out["skipped"] += as_strings(val)
        if isinstance(val, dict) and "gene_symbol" in val:
            out["genes"].append(val)
        if isinstance(val, dict) and "next" in key and isinstance(val.get("accession"), str):
            out["next"].append(val["accession"])
        elif "next" in key and isinstance(val, str) and ACC_RE.search(val) and "accession" in key:
            out["next"].append("OSD-" + ACC_RE.search(val).group(1))
    return out


def gene_key(symbol: str) -> str:
    s = strip_md(symbol)
    s = re.split(r"\s*[(/]", s)[0].strip()
    return s.upper() or symbol.strip().upper()


# ----------------------------------------------------------------------------
# Master list (from Gemini's OSDR table) + optional live reconciliation
# ----------------------------------------------------------------------------
def parse_master_table(turns: list[dict]) -> list[dict]:
    for t in turns:
        if t["role"] == "gemini" and "76 plant studies" in t["text"]:
            rows = []
            for line in t["text"].splitlines():
                cells = [c.strip() for c in line.strip().strip("|").split("|")]
                if len(cells) >= 4 and ACC_RE.search(cells[1] or ""):
                    rows.append({
                        "accession": "OSD-" + ACC_RE.search(cells[1]).group(1),
                        "title": strip_md(cells[2]),
                        "organisms": [strip_md(x) for x in cells[3].split(",") if strip_md(x)],
                    })
            return rows
    return []


# ----------------------------------------------------------------------------
# Main build
# ----------------------------------------------------------------------------
def build(verify: bool) -> int:
    turns = json.loads(SRC.read_text(encoding="utf-8"))
    errors: list[str] = []
    notes: list[str] = []

    prompt = next(t["text"] for t in turns if t["role"] == "user")
    master = parse_master_table(turns)
    master_by_acc = {m["accession"]: m for m in master}

    # --- collect volume turns -------------------------------------------------
    volumes: list[dict] = []
    overrides_dir = DOCS / "overrides"
    for t in turns:
        if t["role"] != "gemini" or not is_volume_turn(t["text"]):
            continue
        text = t["text"]
        
        # Check if an override volume exists (e.g. completed Vol 49)
        vol_acc_guess = parse_accession("", None, text)
        if vol_acc_guess and overrides_dir.exists():
            candidate_files = list(overrides_dir.glob(f"*-{vol_acc_guess.lower()}.md"))
            if candidate_files:
                text = candidate_files[0].read_text(encoding="utf-8")

        header = header_block(text)
        bible, bible_status = last_json_block(text)
        has_header = "Volume Metadata Header" in text
        vol = {
            "source_turn": t["index"],
            "text": text,
            "has_header": has_header,
            "parsed_volume": parse_volume_number(header) if has_header else None,
            "title": parse_title(header) if has_header else None,
            "accession": parse_accession(header if has_header else "", bible, text),
            "bible": bible,
            "bible_status": bible_status,
            "header": header if has_header else "",
        }
        volumes.append(vol)

    # Check for additional post-turn volumes written to VOL_DIR (e.g. Vol 63+)
    for vol_file in sorted(VOL_DIR.glob("vol-*.md")):
        m = re.match(r"vol-(\d+)-(osd-\d+)\.md", vol_file.name)
        if not m:
            continue
        v_num = int(m.group(1))
        v_acc = m.group(2).upper()
        if any(v["accession"] == v_acc for v in volumes):
            continue  # Already in volumes from turns
        raw_file_text = vol_file.read_text(encoding="utf-8")
        text = raw_file_text
        if text.startswith("---"):
            parts = text.split("---", 2)
            if len(parts) >= 3:
                text = parts[2].lstrip()
        header = header_block(text)
        bible, bible_status = last_json_block(text)
        has_header = "Volume Metadata Header" in text
        volumes.append({
            "source_turn": 9999,  # Generated volume
            "text": text,
            "has_header": has_header,
            "parsed_volume": parse_volume_number(header) if has_header else v_num,
            "title": parse_title(header) if has_header else None,
            "accession": parse_accession(header if has_header else "", bible, text) or v_acc,
            "bible": bible,
            "bible_status": bible_status,
            "header": header if has_header else "",
        })

    # --- assign sequential numbers & cross-check -----------------------------
    index_entries = []
    gene_reg: "OrderedDict[str, dict]" = OrderedDict()
    hardware_reg: "OrderedDict[str, dict]" = OrderedDict()
    geno_reg: "OrderedDict[str, dict]" = OrderedDict()
    hooks_reg = []
    skipped_reg = []
    VOL_DIR.mkdir(parents=True, exist_ok=True)
    for old in VOL_DIR.glob("vol-*.md"):
        old.unlink()

    for n, v in enumerate(volumes, start=1):
        if v["parsed_volume"] is not None and v["parsed_volume"] != n:
            errors.append(f"Vol {n}: header says volume {v['parsed_volume']} (turn {v['source_turn']})")
        acc = v["accession"]
        if not acc:
            errors.append(f"Vol {n}: no accession found (turn {v['source_turn']})")
            acc = "OSD-UNKNOWN"
        header = v["header"]
        cov = page_coverage(v["text"])
        lists = bible_lists(v["bible"])
        pub = parse_publication(header)
        organism = labeled(header, "Organism")
        hardware = labeled(header, "Flight Hardware", "Hardware", "Setting")

        status = "complete"
        if not v["has_header"]:
            status = "fragment"
        elif cov["pages_covered"] < PAGES_PER_VOLUME or cov["condensed_ranges"]:
            status = "condensed" if cov["page_headings"] <= 12 else "partial"

        title = v["title"] or (master_by_acc.get(acc, {}).get("title") if status == "fragment" else None)
        slug = f"vol-{n:02d}-{acc.lower()}"
        rel = f"docs/astro-botanica/volumes/{slug}.md"

        entry = {
            "volume": n,
            "title": title,
            "accession": acc,
            "osdr_url": f"https://osdr.nasa.gov/bio/repo/data/studies/{acc}" if acc != "OSD-UNKNOWN" else None,
            "osdr_doi": parse_osdr_doi(header),
            "organism": strip_md(organism)[:300] if organism else
                        (", ".join(master_by_acc[acc]["organisms"]) if acc in master_by_acc else None),
            "hardware_and_conditions": strip_md(hardware)[:500] if hardware else None,
            "publication": pub,
            "in_gemini_master_list": acc in master_by_acc,
            "file": rel,
            "source_turn": v["source_turn"],
            "qa": {
                "script_status": status,
                **cov,
                "bible_json": v["bible_status"],
                "science_verification": "unverified",
            },
            "bible_summary": {
                "hardware": sorted(set(lists["hardware"])),
                "genotypes": sorted(set(lists["genotypes"])),
                "molecular_characters": [strip_md(g.get("gene_symbol", "")) for g in lists["genes"]],
            },
        }
        index_entries.append(entry)

        # --- bible merge ---
        for h in lists["hardware"]:
            k = strip_md(h)
            hardware_reg.setdefault(k, {"name": k, "first_volume": n, "volumes": []})["volumes"].append(n)
        for g in lists["genotypes"]:
            k = strip_md(g)
            geno_reg.setdefault(k, {"name": k, "first_volume": n, "volumes": []})["volumes"].append(n)
        for g in lists["genes"]:
            sym = g.get("gene_symbol") or ""
            k = gene_key(sym)
            rec = gene_reg.setdefault(k, {"gene": k, "symbols_seen": [], "first_volume": n,
                                          "role_archetypes": [], "visual_motifs": [], "appearances": []})
            if sym not in rec["symbols_seen"]:
                rec["symbols_seen"].append(sym)
            for field, bucket in (("role_archetype", "role_archetypes"), ("visual_motif", "visual_motifs")):
                val = g.get(field)
                if isinstance(val, str) and val and val not in rec[bucket]:
                    rec[bucket].append(val)
            rec["appearances"].append({"volume": n, "accession": acc,
                                       "direction": g.get("direction_in_this_study")})
        hooks_reg += [{"volume": n, "hook": h} for h in lists["hooks"]]
        skipped_reg += [{"after_volume": n, "note": s} for s in lists["skipped"]]

        # --- volume file ---
        fm = [
            "---",
            f"series: \"{SERIES_TITLE}\"",
            f"volume: {n}",
            f"title: {json.dumps(title, ensure_ascii=False)}",
            f"accession: {acc}",
            f"script_status: {status}",
            f"pages_covered: {cov['pages_covered']}/{PAGES_PER_VOLUME}",
            "science_verification: unverified",
            f"source: docs/astro-botanica/source/conversation.md (turn {v['source_turn']})",
            "---",
            "",
        ]
        if status == "fragment":
            fm += ["> [!WARNING]",
                   "> Generation was interrupted (Gemini error). Only the closing caption, Mission Debrief",
                   "> and Series Bible JSON were produced; the page script must be regenerated.", ""]
        elif status != "complete":
            fm += ["> [!NOTE]",
                   f"> Script status **{status}**: {cov['pages_covered']}/{PAGES_PER_VOLUME} pages have their own"
                   " heading" + (f"; condensed ranges: {', '.join(cov['condensed_ranges'])}" if cov['condensed_ranges'] else "") + ".", ""]
        (ROOT / rel).write_text("\n".join(fm) + v["text"].rstrip() + "\n", encoding="utf-8")

    # --- master list with scripted flags ---------------------------------------
    scripted = {e["accession"]: e["volume"] for e in index_entries}
    live = json.loads(LIVE.read_text()) if LIVE.exists() else None
    live_by_acc = {r["accession"]: r for r in (live or {}).get("studies", [])}
    all_accs = set(master_by_acc) | set(scripted) | set(live_by_acc)
    studies = []
    for acc in sorted(all_accs, key=acc_num):
        m = master_by_acc.get(acc, {})
        lv = live_by_acc.get(acc, {})
        studies.append({
            "accession": acc,
            "title": lv.get("title") or m.get("title") or next((e["title"] for e in index_entries if e["accession"] == acc), None),
            "organisms": lv.get("organisms") or m.get("organisms") or [],
            "in_gemini_master_list": acc in master_by_acc,
            "in_live_osdr_plant_list": (acc in live_by_acc) if live else None,
            "scripted_volume": scripted.get(acc),
        })
    last_scripted = max((acc_num(a) for a in scripted if a != "OSD-UNKNOWN"), default=0)
    remaining = [s["accession"] for s in studies if s["scripted_volume"] is None
                 and (s["in_live_osdr_plant_list"] if live else True)]
    queue_after = [a for a in remaining if acc_num(a) > last_scripted]
    gaps_before = [a for a in remaining if acc_num(a) < last_scripted]

    next_q = None
    last_lists = bible_lists(volumes[-1]["bible"]) if volumes else {}
    if last_lists.get("next"):
        next_q = last_lists["next"][-1]

    # --- invariants ------------------------------------------------------------
    accs = [e["accession"] for e in index_entries]
    dups = sorted({a for a in accs if accs.count(a) > 1})
    if dups:
        errors.append(f"duplicate accessions: {dups}")
    unsorted = [(a, b) for a, b in zip(accs, accs[1:]) if acc_num(a) >= acc_num(b)]
    if unsorted:
        errors.append(f"accessions not strictly ascending: {unsorted}")
    for e in index_entries:
        if e["qa"]["bible_json"] in ("missing", "unparseable"):
            notes.append(f"Vol {e['volume']} ({e['accession']}): SERIES_BIBLE JSON {e['qa']['bible_json']}")

    # --- write data ------------------------------------------------------------
    DATA.mkdir(parents=True, exist_ok=True)
    status_counts = defaultdict(int)
    for e in index_entries:
        status_counts[e["qa"]["script_status"]] += 1
    index = {
        "series_title": SERIES_TITLE,
        "series_aliases": ["Roots in Orbit: The NASA OSDR Plant Chronicles (name used by Gemini from ~Vol 19)"],
        "format": "32-page hard sci-fi seinen manga volume per NASA OSDR plant accession",
        "source": "Gemini showrunner session saved 2026-11-22 (docs/astro-botanica/source/)",
        "total_volumes": len(index_entries),
        "script_status_counts": dict(status_counts),
        "next_queued_accession": next_q,
        "remaining_after_last_volume": queue_after,
        "unscripted_gaps_before_last_volume": gaps_before,
        "live_osdr_reconciled": bool(live),
        "volumes": index_entries,
    }
    (DATA / "series_index.json").write_text(json.dumps(index, ensure_ascii=False, indent=2), encoding="utf-8")

    bible_out = {
        "series_title": SERIES_TITLE,
        "built_from_volumes": len(index_entries),
        "hardware": list(hardware_reg.values()),
        "genotype_squads": list(geno_reg.values()),
        "molecular_characters": list(gene_reg.values()),
        "continuity_hooks": hooks_reg,
        "skipped_accession_notes": skipped_reg,
        "consistency_flags": [
            {"gene": r["gene"], "issue": "multiple visual motifs", "count": len(r["visual_motifs"])}
            for r in gene_reg.values() if len(r["visual_motifs"]) > 1
        ],
    }
    (DATA / "series_bible.json").write_text(json.dumps(bible_out, ensure_ascii=False, indent=2), encoding="utf-8")
    (DATA / "osdr_plant_studies.json").write_text(json.dumps({
        "source": "Gemini in-page OSDR filter (76 studies)" + (" + live OSDR API" if live else ""),
        "live_fetched_at": (live or {}).get("fetched_at"),
        "studies": studies}, ensure_ascii=False, indent=2), encoding="utf-8")

    # --- docs ------------------------------------------------------------------
    write_prompt_template(prompt, index)
    write_roster(index)
    write_qa(index, bible_out, errors, notes)

    # --- privacy guard -----------------------------------------------------------
    for p in list(VOL_DIR.glob("*.md")) + list(DATA.glob("*.json")) + list(DOCS.glob("*.md")) + list((DOCS / "source").glob("*")):
        if EMAIL_RE.search(p.read_text(encoding="utf-8", errors="ignore")):
            errors.append(f"email address found in {p.relative_to(ROOT)}")

    print(f"volumes={len(index_entries)} status={dict(status_counts)} genes={len(gene_reg)} "
          f"hardware={len(hardware_reg)} next={next_q} remaining={len(queue_after)}", file=sys.stderr)
    for n_ in notes:
        print("NOTE:", n_, file=sys.stderr)
    for e in errors:
        print("ERROR:", e, file=sys.stderr)
    if verify and errors:
        return 1
    return 0


# ----------------------------------------------------------------------------
# Generated docs
# ----------------------------------------------------------------------------
def write_prompt_template(prompt: str, index: dict) -> None:
    last = index["volumes"][-1]
    text = f"""# ASTRO-BOTANICA — Master Showrunner Prompt

> Recovered verbatim from the first prompt of the Gemini session. Use it to continue the series
> in any model. Generated by `scripts/astro_botanica/split_volumes.py`.

## How to continue the run

Fill the placeholders for the next volume:

| Placeholder | Next value |
|---|---|
| `{{{{VOLUME_NUMBER}}}}` | `{last['volume'] + 1}` |
| `{{{{OSD_ACCESSION}}}}` | `{index['next_queued_accession'] or '(see series_index.json → remaining_after_last_volume)'}` |
| `{{{{PREVIOUS_VOLUMES_JSON_OR_SUMMARY}}}}` | `data/astro_botanica/series_bible.json` (or the last volume's SERIES_BIBLE_DELTA) |
| `{{{{OSDR_API_JSON_AND_DEG_TABLE}}}}` | OSDR study metadata + DEG table for that accession |

> Series name: use **{SERIES_TITLE}** (the run drifted to "Roots in Orbit" from ~Vol 19, which
> collides with Series 4 of the CoSE archive).

---

## Original prompt (verbatim)

{prompt}
"""
    (DOCS / "PROMPT_TEMPLATE.md").write_text(text, encoding="utf-8")


def write_roster(index: dict) -> None:
    lines = [f"# {SERIES_TITLE} — Volume Roster", "",
             "> Generated by `scripts/astro_botanica/split_volumes.py`. Status: ✅ complete · 🟡 partial · 🟠 condensed · 🔴 fragment.",
             "", "| Vol | Accession | Title | Organism | Pages | Status |", "|---:|---|---|---|---:|:---:|"]
    icon = {"complete": "✅", "partial": "🟡", "condensed": "🟠", "fragment": "🔴"}
    for e in index["volumes"]:
        org = (e["organism"] or "").split(" — ")[0][:60]
        title = (e["title"] or "—").replace("|", "\\|")
        lines.append(f"| {e['volume']} | [{e['accession']}]({e['osdr_url']}) | [{title}](volumes/{Path(e['file']).name}) "
                     f"| {org.replace('|', '/')} | {e['qa']['pages_covered']}/32 | {icon[e['qa']['script_status']]} |")
    lines += ["", f"**Next queued:** `{index['next_queued_accession']}` · "
              f"**Remaining after last volume:** {len(index['remaining_after_last_volume'])} accessions", ""]
    (DOCS / "ROSTER.md").write_text("\n".join(lines), encoding="utf-8")


def write_qa(index: dict, bible: dict, errors: list[str], notes: list[str]) -> None:
    vols = index["volumes"]
    def rows(pred):
        return [e for e in vols if pred(e)]
    frag = rows(lambda e: e["qa"]["script_status"] == "fragment")
    cond = rows(lambda e: e["qa"]["script_status"] == "condensed")
    part = rows(lambda e: e["qa"]["script_status"] == "partial")
    off_list = rows(lambda e: not e["in_gemini_master_list"])
    no_doi = rows(lambda e: not e["publication"]["doi"])
    L = [f"# {SERIES_TITLE} — QA Report", "",
         "> Generated by `scripts/astro_botanica/split_volumes.py`. Do not edit by hand.", "",
         "## Summary", "",
         f"- Volumes ingested: **{len(vols)}** ({', '.join(f'{k}: {v}' for k, v in index['script_status_counts'].items())})",
         f"- Science verification: **0 / {len(vols)} verified** (all `unverified` — Phase B)",
         f"- Molecular characters in merged bible: **{len(bible['molecular_characters'])}**; hardware entries: **{len(bible['hardware'])}**",
         f"- Next queued accession: `{index['next_queued_accession']}`",
         f"- Live OSDR reconciliation: {'yes' if index['live_osdr_reconciled'] else 'not yet run'}", ""]
    def table(title, items, extra):
        L.extend([f"## {title} ({len(items)})", ""])
        if not items:
            L.extend(["None.", ""])
            return
        L.extend(["| Vol | Accession | Title | Detail |", "|---:|---|---|---|"])
        for e in items:
            L.append(f"| {e['volume']} | {e['accession']} | {(e['title'] or '—').replace('|', '/')} | {extra(e)} |")
        L.append("")
    table("Fragments — script must be regenerated", frag, lambda e: "interrupted generation; debrief + bible only")
    table("Condensed volumes — pages merged into ranges", cond,
          lambda e: f"{e['qa']['page_headings']} page headings; ranges {', '.join(e['qa']['condensed_ranges']) or '—'}")
    table("Partial volumes — some pages lack their own heading", part,
          lambda e: f"{e['qa']['pages_covered']}/32 pages; missing {e['qa']['missing_pages'][:8]}{'…' if len(e['qa']['missing_pages']) > 8 else ''}")
    table("Accessions not in Gemini's 76-study master list", off_list, lambda e: "found later in the run; verify against live OSDR")
    table("No primary-paper DOI parsed from header", no_doi, lambda e: "check citation manually")
    L += ["## Data duplicates", "",
          "- `OSD-46` and `OSD-320` are the same gamma/HZE dataset listed twice in OSDR; both were scripted (Vols "
          + ", ".join(str(e["volume"]) for e in vols if e["accession"] in ("OSD-46", "OSD-320")) + ").", ""]
    flags = bible["consistency_flags"]
    L += [f"## Continuity flags — genes with more than one visual motif ({len(flags)})", ""]
    L += [", ".join(f"`{f['gene']}` ({f['count']})" for f in flags[:80]) or "None.", ""]
    L += ["## Series naming", "", "- Vols 1–18 use *ASTRO-BOTANICA: ZERO-G ROOTS*; later volumes use *Roots in Orbit: The NASA OSDR "
          "Plant Chronicles*, which collides with Series 4 of the CoSE archive. Standardised to ASTRO-BOTANICA in all metadata; "
          "script text left verbatim.", ""]
    if notes or errors:
        L += ["## Build notes", ""] + [f"- {x}" for x in notes] + [f"- ❌ {x}" for x in errors] + [""]
    (DOCS / "QA_REPORT.md").write_text("\n".join(L), encoding="utf-8")


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--verify", action="store_true", help="exit non-zero on invariant violations")
    raise SystemExit(build(ap.parse_args().verify))
