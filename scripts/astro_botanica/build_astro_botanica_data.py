#!/usr/bin/env python3
"""
Compiles all 90 ASTRO-BOTANICA: ZERO-G ROOTS volume scripts, metadata,
molecular character rosters, debrief ledgers, and K-12 educational briefings
into a browser-ready, zero-CORS data bundle:
  - data/astro_botanica/astro_botanica.json
  - data/astro_botanica/astro_botanica.js (window.ASTRO_BOTANICA_DATA)

Usage:
  python3 scripts/astro_botanica/build_astro_botanica_data.py [--verify]
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DOCS_DIR = ROOT / "docs/astro-botanica"
VOL_DIR = DOCS_DIR / "volumes"
DATA_DIR = ROOT / "data/astro_botanica"

SERIES_TITLE = "ASTRO-BOTANICA: ZERO-G ROOTS"
SERIES_SUBTITLE = "The Complete NASA Open Science Data Repository (OSDR) Plant Biology Manga Archive"


def clean_text(s: str) -> str:
    s = re.sub(r"[`*_]", "", s or "")
    return re.sub(r"\s+", " ", s).strip()


def smart_truncate(s: str, max_len: int = 220) -> str:
    s = clean_text(s)
    if len(s) <= max_len:
        return s
    cut = s[:max_len].rsplit(" ", 1)[0].rstrip(",;:- ")
    return cut + "…"


def first_sentence(s: str, max_len: int = 220) -> str:
    s = clean_text(s)
    if not s:
        return ""
    m = re.match(r"^(.+?[.!?])(?:\s|$)", s)
    if m and len(m.group(1)) <= max_len:
        return m.group(1)
    return smart_truncate(s, max_len)


def infer_hardware_short(hw_full: str) -> str:
    low = (hw_full or "").lower()
    known = [
        (r"advanced plant habitat|\baph\b", "Advanced Plant Habitat (APH)"),
        (r"\bveggie\b|\bvps/veggie\b", "ISS Veggie Facility"),
        (r"advanced biological research system|\babrs\b", "ABRS + GFP Imaging System"),
        (r"european modular cultivation|\bemcs\b", "EMCS Centrifuge (ISS)"),
        (r"\bbric-led\b", "BRIC-LED Flight Hardware"),
        (r"\bbric\b", "BRIC Flight Canisters"),
        (r"\bcbef\b", "Kibo CBEF Centrifuge"),
        (r"eden iss", "EDEN ISS Antarctic Greenhouse"),
        (r"starfighter", "F-104 Starfighter (Suborbital)"),
        (r"\bc-9\b", "NASA C-9 Parabolic Aircraft"),
        (r"parabolic", "Parabolic Microgravity Flight"),
        (r"sj-10", "SJ-10 Recoverable Satellite"),
        (r"sck cen", "SCK CEN Gamma Irradiation Facility"),
        (r"low pressure growth chamber|\blpgc\b", "Low-Pressure Chambers (LPGC)"),
        (r"lunar receiving lab|apollo \d+", "Apollo Lunar Receiving Lab"),
        (r"glovebox", "Class-III Regolith Glovebox"),
        (r"clinostat", "2D/3D Clinostat Microgravity Sim"),
        (r"random positioning|\brpm\b", "Random Positioning Machine (RPM)"),
        (r"blue origin", "Blue Origin New Shepard"),
        (r"virgin galactic", "Virgin Galactic Suborbital"),
        (r"\blada\b", "LADA Greenhouse (ISS)"),
        (r"biotube", "BioTube / MAGNET Flight Rig"),
        (r"\btropi\b", "TROPI EMCS Phototropism Rig"),
        (r"\bapex[-\s]?\d", "APEX ISS Growth Chambers"),
        (r"fixation tube|\bkft\b", "KSC Fixation Tubes (KFT)"),
    ]
    for pattern, label in known:
        if re.search(pattern, low):
            return label
    if hw_full and hw_full.lower() != "flight hardware":
        short = re.split(r"[.;(—–]", clean_text(hw_full))[0].strip()
        if 4 <= len(short) <= 44:
            return short
        return smart_truncate(hw_full, 42)
    return "ISS Orbital Flight Hardware"


def parse_dramatis_personae(pers_txt: str) -> list[dict]:
    cast = []
    seen = set()
    for line in (pers_txt or "").splitlines():
        m = re.match(r"^\s*-\s*\*\*([^*:\n]+?):?\*\*:?\s*(.+)$", line)
        if not m:
            continue
        raw_name = clean_text(m.group(1)).rstrip(":")
        desc = clean_text(m.group(2))
        if not raw_name or len(raw_name) < 2 or raw_name.lower() in seen:
            continue
        seen.add(raw_name.lower())

        # Extract gene/protein symbol if present in backticks or parens
        raw_line_head = m.group(1)
        sym_m = re.search(r"`([^`]+)`", raw_line_head)
        if not sym_m:
            sym_m = re.search(r"\b([A-Z][A-Z0-9]{1,7}(?:::[A-Z0-9]+)?)\b", raw_name)
        if sym_m:
            symbol = sym_m.group(1)
        elif raw_name.lower().startswith("dr."):
            parts_n = [p for p in raw_name.replace("&", " ").split() if p]
            symbol = f"Dr. {parts_n[2]}" if len(parts_n) >= 3 else smart_truncate(raw_name, 14)
        elif raw_name.lower().startswith("squad "):
            symbol = smart_truncate(raw_name[6:].split("(")[0].strip(), 14)
        else:
            symbol = smart_truncate(raw_name.split("(")[0].strip(), 14)

        # Classify role & expression trend
        low = (raw_name + " " + desc).lower()
        direction = "neutral"
        if any(k in low for k in ["upregulated", "induced", "surge", "elevated", "activated", "hyper-", "fold up", "spiking"]):
            direction = "up"
        elif any(k in low for k in ["downregulated", "repressed", "suppressed", "depleted", "dim", "lost", "stunted", "blind"]):
            direction = "down"
        elif any(k in low for k in ["dual", "mixed", "remodel", "oscillat", "bridge", "switch"]):
            direction = "dual"

        role = "Molecular Actor"
        if any(k in low for k in ["dr.", "biologist", "architect", "scientist", "astronaut", "ensemble", "cartographer"]):
            role = "Researcher / Crew"
        elif any(k in low for k in ["mutant", "squad", "col-0", "ws", "wild-type", "cultivar", "seedling", "line"]):
            role = "Plant / Mutant Line"
        elif any(k in low for k in ["transcription", "commander", "regulator", "factor", "checkpoint", "repressor"]):
            role = "Master Regulator"
        elif any(k in low for k in ["enzyme", "synthase", "transferase", "kinase", "peroxidase", "methyl"]):
            role = "Enzyme / Remodeler"
        elif any(k in low for k in ["hormone", "auxin", "ethylene", "gas", "reporter", "gfp", "statolith", "calcium"]):
            role = "Signal / Sensor"

        cast.append({
            "name": raw_name,
            "symbol": symbol,
            "role": role,
            "direction": direction,
            "description": smart_truncate(desc, 220),
        })
        if len(cast) >= 8:
            break
    return cast


def extract_key_metrics(debrief_tables: list[dict], molecular_cast: list[dict]) -> list[dict]:
    metrics = []
    for tbl in debrief_tables:
        headers = tbl.get("headers", [])
        for row in tbl.get("rows", [])[:5]:
            if len(row) < 2:
                continue
            label = smart_truncate(row[0], 34)
            val = smart_truncate(row[1], 46)
            detail = smart_truncate(row[-1], 90) if len(row) > 2 else val
            low = " ".join(row).lower()
            trend = "neutral"
            score = 62
            # Try to parse a numeric fold-change / percentage for visual bar scaling
            num_m = re.search(r"([+-]?\d+(?:\.\d+)?)\s*(%|x|fold|log2|mgy|gy|kpa|ppb|nmol)", low)
            if num_m:
                try:
                    n_val = abs(float(num_m.group(1)))
                    if "%" in num_m.group(2):
                        score = max(25, min(98, int(n_val if n_val <= 100 else 95)))
                    elif "fold" in num_m.group(2) or "x" in num_m.group(2):
                        score = max(30, min(96, int(25 + n_val * 14)))
                    else:
                        score = max(35, min(92, int(45 + (n_val % 45))))
                except ValueError:
                    pass
            if any(k in low for k in ["up", "+", "surge", "high", "elevat", "increas", "100%", "normal", "robust", "rescued"]):
                trend = "up"
                score = max(score, 72)
            elif any(k in low for k in ["down", "-", "reduct", "repress", "loss", "stunt", "drop", "deplet", "low", "deregul"]):
                trend = "down"
                score = min(score, 48)
            metrics.append({
                "label": label,
                "value": val,
                "detail": detail,
                "trend": trend,
                "score": score,
                "col_header": headers[1] if len(headers) > 1 else "Finding",
            })
            if len(metrics) >= 5:
                break
        if len(metrics) >= 5:
            break

    # Fallback to molecular cast if no debrief table rows
    if not metrics and molecular_cast:
        for idx, c in enumerate(molecular_cast[:4]):
            trend = c["direction"]
            score = 84 if trend == "up" else (36 if trend == "down" else 64)
            metrics.append({
                "label": smart_truncate(c["symbol"], 24),
                "value": c["role"],
                "detail": smart_truncate(c["description"], 85),
                "trend": trend,
                "score": score,
                "col_header": "Role",
            })
    return metrics


def classify_domain(title: str, hardware: str, organism: str, body_sample: str) -> str:
    txt = f"{title} {hardware} {organism} {body_sample}".lower()
    if any(k in txt for k in ["radiation", "gamma", "sog1", "double-strand", "atm ", "cesium", "ionizing", "myb3r"]):
        return "Radiation & DNA Repair"
    if any(k in txt for k in ["methyl", "epigenet", "bisulfite", "chromatin", "wgbs", "histone", "epiallele"]):
        return "Epigenetics & Methylome"
    if any(k in txt for k in ["lunar", "apollo", "regolith", "martian", "mars ", "simulant"]):
        return "Lunar & Martian Regolith"
    if any(k in txt for k in ["ethylene", "hormone", "auxin", "jasmonate", "polyamine", "putrescine", "spermidine"]):
        return "Hormones & Metabolic Defense"
    if any(k in txt for k in ["hypobar", "pressure", "kpa", "anoxia", "hypoxia", "submerged", "oxygen"]):
        return "Atmosphere & Hypobaria"
    if any(k in txt for k in ["phytochrome", "red light", "blue light", "phototrop", "led", "spectral", "wavelength"]):
        return "Light & Phototropism"
    if any(k in txt for k in ["cell wall", "xyloglucan", "cellulose", "tubulin", "cytoskeleton", "tch4"]):
        return "Cell Wall & Cytoskeleton"
    if any(k in txt for k in ["lettuce", "mizuna", "tomato", "wheat", "harvest", "biomass", "eden iss", "crop", "nutrition"]):
        return "Space Crops & Nutrition"
    return "Microgravity & Gravitropism"


def parse_volume_markdown(path: Path) -> dict:
    raw = path.read_text(encoding="utf-8")
    frontmatter = {}
    body = raw
    if raw.startswith("---"):
        parts = raw.split("---", 2)
        if len(parts) >= 3:
            fm_text = parts[1]
            body = parts[2].lstrip()
            for line in fm_text.splitlines():
                if ":" in line:
                    k, v = line.split(":", 1)
                    frontmatter[k.strip()] = v.strip().strip('"').strip("'")

    vol_num = int(frontmatter.get("volume", re.search(r"vol-(\d+)", path.name).group(1)))
    accession = frontmatter.get("accession", "OSD-UNKNOWN")
    title = frontmatter.get("title", "")

    # Parse Sections
    m_head = re.search(r"## 1\. Volume Metadata Header(.*?)(?=## 2\.|\Z)", body, re.S)
    head_txt = m_head.group(1) if m_head else ""

    m_pers = re.search(r"## 2\. Dramatis Personae[^\n]*(.*?)(?=## 3\.|\Z)", body, re.S)
    pers_txt = m_pers.group(1) if m_pers else ""

    m_script = re.search(r"## 3\. 32-Page Chapter Script(.*?)(?=## 4\.|\Z)", body, re.S)
    script_txt = m_script.group(1) if m_script else ""

    m_debrief = re.search(r"## 4\. Mission Debrief[^\n]*(.*?)(?=## 5\.|\Z)", body, re.S)
    debrief_txt = m_debrief.group(1) if m_debrief else ""

    # Parse Header details (fixed alternation precedence!)
    def get_labeled(label_pattern: str, text: str) -> str | None:
        m = re.search(
            rf"-\s*\*\*[^*:\n]*(?:{label_pattern})[^*:\n]*:?\*\*:?\s*(.+)$",
            text,
            re.M | re.I,
        )
        return m.group(1).strip() if m else None

    organism = get_labeled("Organism|Species|Genotype", head_txt)
    hardware = get_labeled("Flight Hardware|Setting|Hardware|Payload|Facility", head_txt)
    publication = get_labeled("Publication|Reference", head_txt)
    chapter_title = get_labeled("Chapter Title", head_txt) or title
    # Clean chapter title if it has "Vol. X — " prefix
    chapter_title = re.sub(r"^Vol\.?\s*\d+\s*[—–-]\s*", "", clean_text(chapter_title)).strip() or clean_text(title)

    # Parse Series Bible JSON if present for extra hardware/assays fallback
    bible_json = {}
    json_blocks = re.findall(r"```json\s*(\{.*?\})\s*```", body, re.S)
    if json_blocks:
        try:
            bible_json = json.loads(json_blocks[-1])
        except Exception:
            bible_json = {}
    delta = bible_json.get("SERIES_BIBLE_DELTA", bible_json) if isinstance(bible_json, dict) else {}
    if not hardware and isinstance(delta, dict):
        hw_b = delta.get("hardware_and_environment")
        if isinstance(hw_b, dict):
            hardware = hw_b.get("platform") or hw_b.get("hardware")
        elif isinstance(hw_b, str):
            hardware = hw_b

    # Parse Pages from Chapter Script while tracking current Act sequentially
    pages = []
    # Split keeping Act headers and Page headers in sequence
    token_re = re.compile(
        r"(?:^|\n)(?:"
        r"(?P<act>#{2,4}\s*Act\s+[IVX]+[^\n]*)"
        r"|"
        r"(?P<page>(?:#{2,4}\s*|\*\*\s*)Pages?\s+\d+(?:[–—-]\d+)?[^\n]*)"
        r")",
        re.I,
    )
    matches = list(token_re.finditer(script_txt))
    current_act = "Act I — Launch & Environmental Shift"
    current_act_num = 1

    for idx, m in enumerate(matches):
        if m.group("act"):
            act_raw = clean_text(re.sub(r"^#+\s*", "", m.group("act")))
            current_act = act_raw
            if re.search(r"\bAct\s+III\b", act_raw, re.I):
                current_act_num = 3
            elif re.search(r"\bAct\s+II\b", act_raw, re.I):
                current_act_num = 2
            else:
                current_act_num = 1
            continue

        page_head_raw = m.group("page").strip()
        start_pos = m.end()
        end_pos = matches[idx + 1].start() if idx + 1 < len(matches) else len(script_txt)
        p_body = script_txt[start_pos:end_pos].strip()

        # Extract page label & optional inline act/subtitle
        pm = re.match(
            r"(?:#{2,4}\s*|\*\*\s*)Pages?\s+(\d+(?:[–—-]\d+)?)(?:\*\*)?\s*(.*)$",
            page_head_raw,
            re.I,
        )
        p_id = pm.group(1).strip() if pm else str(len(pages) + 1)
        head_rest = clean_text(pm.group(2)) if pm else ""

        page_act = current_act
        page_act_num = current_act_num
        page_title = ""

        if head_rest:
            act_inline = re.search(r"\(?\s*(Act\s+[IVX]+[^)]*)\)?", head_rest, re.I)
            if act_inline:
                page_act = clean_text(act_inline.group(1))
                if re.search(r"\bAct\s+III\b", page_act, re.I):
                    page_act_num = 3
                elif re.search(r"\bAct\s+II\b", page_act, re.I):
                    page_act_num = 2
                else:
                    page_act_num = 1
                # Any remaining title outside parens
                rem = clean_text(re.sub(r"\(?\s*Act\s+[IVX]+[^)]*\)?", "", head_rest, flags=re.I)).strip("—–-: ")
                if rem:
                    page_title = rem
            else:
                page_title = head_rest.strip("—–-: ")

        # Infer act_num from page number if still Act I on late pages
        first_p_num_m = re.match(r"(\d+)", p_id)
        if first_p_num_m:
            fp = int(first_p_num_m.group(1))
            if fp >= 23 and page_act_num == 1:
                page_act_num = 3
                if page_act == "Act I — Launch & Environmental Shift":
                    page_act = "Act III — Fixation & Data Epilogue"
            elif fp >= 10 and page_act_num == 1:
                page_act_num = 2
                if page_act == "Act I — Launch & Environmental Shift":
                    page_act = "Act II — The Molecular Battle"

        # Extract Panels (supports both **Panel N ...:** and *Panel N ...:*)
        panels = []
        panel_re = re.compile(
            r"(?:^|\n)\s*-\s*(?:\*\*|\*)\s*Panel\s*(\d+)\s*(?:\[([^\]]+)\]|\(([^)]+)\))?\s*:?(?:\*\*|\*):?\s*(.+?)(?=\n\s*-\s*(?:\*\*|\*)\s*(?:Panel|NARRATION|Caption|DIALOGUE|SFX)|\n\n|\Z)",
            re.S | re.I,
        )
        for pm_item in panel_re.finditer(p_body):
            p_num = int(pm_item.group(1))
            shot = clean_text(pm_item.group(2) or pm_item.group(3) or "")
            raw_desc = pm_item.group(4)
            # Strip nested sub-bullets (NARRATION/DIALOGUE/SFX) from panel visual description
            desc_only = re.split(r"\n\s*-\s*(?:\*\*|\*)(?:NARRATION|Caption|DIALOGUE|SFX)", raw_desc, flags=re.I)[0]
            panels.append({
                "panel_number": p_num,
                "shot": shot or ("Establishing Shot" if p_num == 1 else "Dynamic Beat"),
                "description": clean_text(desc_only),
            })

        # Extract Captions / Narration (supports **NARRATION:**, **Caption:**, *Caption:*)
        captions = []
        for cm in re.finditer(
            r"(?:^|\n)\s*-\s*(?:\*\*|\*)\s*(?:NARRATION|Caption)(?:\s*\([^)]*\))?\s*:?(?:\*\*|\*):?\s*(.+)$",
            p_body,
            re.M | re.I,
        ):
            cap_val = clean_text(cm.group(1)).strip('"\'“” ')
            if cap_val:
                captions.append(cap_val)

        # Extract SFX
        sfx_list = []
        for sm in re.finditer(
            r"(?:^|\n)\s*-\s*(?:\*\*|\*)\s*SFX\s*:?(?:\*\*|\*):?\s*(.+)$",
            p_body,
            re.M | re.I,
        ):
            s_val = clean_text(sm.group(1)).strip('"\' ')
            if s_val:
                sfx_list.append(s_val)

        # Extract Speaker-Attributed Dialogue
        dialogue = []
        for dm in re.finditer(
            r"(?:^|\n)\s*-\s*(?:\*\*|\*)\s*DIALOGUE(?:\s*\(([^)]+)\))?\s*:?(?:\*\*|\*):?\s*(.+)$",
            p_body,
            re.M | re.I,
        ):
            spk = clean_text(dm.group(1) or "Mission Scientist")
            txt = clean_text(dm.group(2)).strip('"\'“” ')
            if txt:
                dialogue.append({"speaker": spk, "text": txt})

        # Fallback: capture quoted lines if no explicit DIALOGUE marker
        if not dialogue:
            for qm in re.finditer(r'(?:^|\n)[^"\n]*?:\s*"([^"\n]{12,260})"', p_body):
                txt = clean_text(qm.group(1))
                if txt and (not captions or txt != captions[0]):
                    dialogue.append({"speaker": "Research Team", "text": txt})
                if len(dialogue) >= 2:
                    break

        # Build clean non-truncated scene summary
        if panels:
            summary = panels[0]["description"]
            if len(panels) > 1 and len(summary) < 160:
                summary = f"{summary} {panels[1]['description']}"
            summary = smart_truncate(summary, 280)
        else:
            # Strip bullet markers cleanly for condensed act-range pages
            plain_lines = [clean_text(re.sub(r"^\s*[-*•]\s*", "", ln)) for ln in p_body.splitlines() if ln.strip()]
            summary = smart_truncate(" ".join(plain_lines), 280)

        caption_final = (
            captions[0]
            if captions
            else (
                first_sentence(summary, 185)
                if summary
                else f"NASA OSDR {accession}: orbital plant biology telemetry in progress."
            )
        )

        pages.append({
            "page_label": p_id,
            "page_title": page_title,
            "act": page_act,
            "act_num": page_act_num,
            "panels_count": len(panels) if panels else max(2, len(p_body.splitlines())),
            "panels": panels[:4],
            "caption": caption_final,
            "sfx": sfx_list[0] if sfx_list else None,
            "dialogue": dialogue[:3],
            "summary": summary,
        })

    # Fallback if no pages parsed
    if not pages:
        pages.append({
            "page_label": "1–32",
            "page_title": chapter_title,
            "act": "Act I–III Complete Mission Arc",
            "act_num": 1,
            "panels_count": 4,
            "panels": [{"panel_number": 1, "shot": "Wide Establishing", "description": smart_truncate(body, 280)}],
            "caption": f"NASA OSDR Study {accession} Investigation",
            "sfx": "GOGOGO",
            "dialogue": [{"speaker": "Mission Control", "text": "Analyzing orbital biological telemetry."}],
            "summary": smart_truncate(body, 280),
        })

    # Extract Mission Debrief tables (match full lines greedily so every column & row is captured)
    debrief_tables = []
    table_matches = re.findall(r"(\|[^\n]+\|\n\|[-:| ]+\|\n(?:\|[^\n]+\|\n?)+)", debrief_txt)
    for t_str in table_matches:
        rows = []
        for line in t_str.strip().splitlines():
            cells = [clean_text(c) for c in line.strip().strip("|").split("|")]
            if cells and not all(c == "" or re.match(r"^[-:]+$", c) for c in cells):
                rows.append(cells)
        if len(rows) >= 2:
            debrief_tables.append({"headers": rows[0], "rows": rows[1:]})

    # Structured Molecular Cast & Key Metrics
    molecular_cast = parse_dramatis_personae(pers_txt)
    key_metrics = extract_key_metrics(debrief_tables, molecular_cast)

    # Categorize Mission / World / Ecosystem
    org_clean = clean_text(organism or "Arabidopsis thaliana")
    hw_clean = clean_text(hardware or "ISS Flight Hardware")
    hw_short = infer_hardware_short(hw_clean)

    search_blob = f"{org_clean} {chapter_title} {hw_clean}".lower()
    world = "ISS"
    if any(k in search_blob for k in ["sck cen", "irradiation facility", "gamma irradiation", "low pressure growth", "lpgc", "clinostat", "ground study"]):
        world = "Ground Analog"
    elif any(k in search_blob for k in ["lunar", "apollo", "moon", "taurus", "descartes", "fra mauro"]):
        world = "Moon"
    elif any(k in search_blob for k in ["martian", "mars simulant", "mojave", "mms-1", "jsc mars", "mars regolith"]):
        world = "Mars"
    elif any(k in search_blob for k in ["antarctica", "eden iss", "polar", "neumayer"]):
        world = "Polar Analog"
    elif any(k in search_blob for k in ["suborbital", "virgin", "blue origin", "starfighter", "c-9", "parabolic"]):
        world = "Suborbital"

    plant_family = "Brassicaceae (Arabidopsis/Mustard)"
    if any(k in org_clean.lower() for k in ["lactuca", "lettuce"]):
        plant_family = "Asteraceae (Lettuce)"
    elif any(k in org_clean.lower() for k in ["solanum", "tomato", "potato"]):
        plant_family = "Solanaceae (Tomato/Potato)"
    elif any(k in org_clean.lower() for k in ["poaceae", "ryegrass", "brachypodium", "wheat", "triticum", "oryza", "rice", "grass", "ceratopteris"]):
        plant_family = "Poaceae (Cereals/Grasses)"
    elif any(k in org_clean.lower() for k in ["marchantia", "liverwort", "physcomitrella", "moss"]):
        plant_family = "Bryophytes (Liverworts)"
    elif any(k in org_clean.lower() for k in ["glycine", "soybean", "medicago", "pisum", "pea", "bean"]):
        plant_family = "Fabaceae (Legumes)"

    study_domain = classify_domain(chapter_title, hw_clean, org_clean, pers_txt[:400])

    # Build authentic K-5 / 6-8 / 9-12 Educational Briefing grounded in this exact study
    lead_actor = molecular_cast[0]["symbol"] if molecular_cast else "Spaceflight Genes"
    lead_finding = (
        f"{key_metrics[0]['label']}: {key_metrics[0]['detail']}"
        if key_metrics
        else first_sentence(pages[0]["caption"], 180)
    )
    organism_short = smart_truncate(re.split(r"[—–(]", org_clean)[0].strip() or org_clean, 48)

    edu = {
        "k5_mystery": f"How does {organism_short} survive and grow inside {hw_short} without normal Earth conditions?",
        "k5_discovery": f"Scientists discovered that helper genes like {lead_actor} switch on to protect the plant! Key clue: {smart_truncate(lead_finding, 145)}",
        "ms_experiment": f"NASA study {accession} tested {organism_short} inside {hw_short} ({world}), comparing space/stress conditions against matched terrestrial controls.",
        "ms_mechanism": f"Focus pathway: {study_domain}. {smart_truncate(lead_finding, 175)}",
        "hs_methods": smart_truncate(f"{org_clean} | Platform: {hw_clean}", 240),
    }

    return {
        "volume": vol_num,
        "accession": accession,
        "osdr_url": f"https://osdr.nasa.gov/bio/repo/data/studies/{accession}",
        "title": chapter_title,
        "organism": org_clean,
        "organism_short": organism_short,
        "plant_family": plant_family,
        "world": world,
        "study_domain": study_domain,
        "hardware": hw_clean,
        "hardware_short": hw_short,
        "publication": clean_text(publication or "NASA OSDR Biological Archive"),
        "pages_count": len(pages),
        "pages": pages,
        "molecular_cast": molecular_cast,
        "key_metrics": key_metrics,
        "edu": edu,
        "debrief_tables": debrief_tables,
        "dramatis_personae": pers_txt.strip(),
        "script_markdown": script_txt.strip(),
        "raw_script_path": f"docs/astro-botanica/volumes/{path.name}",
    }


def build(verify: bool) -> int:
    vol_files = sorted(VOL_DIR.glob("vol-*.md"), key=lambda p: int(re.search(r"vol-(\d+)", p.name).group(1)))
    print(f"Found {len(vol_files)} volume markdown files in {VOL_DIR.relative_to(ROOT)}", file=sys.stderr)

    manifest_path = ROOT / "data" / "astro_botanica_covers_manifest.json"
    covers_manifest = {}
    if manifest_path.exists():
        try:
            covers_manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
        except Exception:
            covers_manifest = {}

    compiled_volumes = []
    raster_cover_count = 0
    for vf in vol_files:
        vol_data = parse_volume_markdown(vf)
        v_num_str = str(vol_data["volume"])
        cover_info = covers_manifest.get(v_num_str)
        if cover_info and (ROOT / cover_info["path"]).exists():
            vol_data["cover"] = {
                "has_raster": True,
                "path": cover_info["path"],
                "width": cover_info.get("width", 900),
                "height": cover_info.get("height", 1200),
            }
            raster_cover_count += 1
        else:
            vol_data["cover"] = {
                "has_raster": False,
                "path": f"assets/astro_botanica/covers/vol-{vol_data['volume']:02d}.webp",
                "width": 900,
                "height": 1200,
            }
        compiled_volumes.append(vol_data)

    compiled_corpus = {
        "anthology_title": SERIES_TITLE,
        "anthology_subtitle": SERIES_SUBTITLE,
        "total_volumes": len(compiled_volumes),
        "total_pages_cataloged": sum(v["pages_count"] for v in compiled_volumes),
        "raster_cover_count": raster_cover_count,
        "vector_cover_count": len(compiled_volumes) - raster_cover_count,
        "worlds": ["ISS", "Moon", "Mars", "Polar Analog", "Suborbital", "Ground Analog"],
        "plant_families": [
            "Brassicaceae (Arabidopsis/Mustard)",
            "Asteraceae (Lettuce)",
            "Solanaceae (Tomato/Potato)",
            "Poaceae (Cereals/Grasses)",
            "Fabaceae (Legumes)",
            "Bryophytes (Liverworts)",
        ],
        "volumes": compiled_volumes,
    }

    # Write JSON
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    json_path = DATA_DIR / "astro_botanica.json"
    json_path.write_text(json.dumps(compiled_corpus, ensure_ascii=False, indent=2), encoding="utf-8")

    # Write JavaScript bundle (window.ASTRO_BOTANICA_DATA)
    js_path = DATA_DIR / "astro_botanica.js"
    js_content = f"/* Auto-generated by scripts/astro_botanica/build_astro_botanica_data.py */\nwindow.ASTRO_BOTANICA_DATA = {json.dumps(compiled_corpus, ensure_ascii=False, indent=2)};\n"
    js_path.write_text(js_content, encoding="utf-8")

    print(f"Compiled {len(compiled_volumes)} volumes into {json_path.relative_to(ROOT)} and {js_path.relative_to(ROOT)}", file=sys.stderr)
    print(f"  ({raster_cover_count} AI-illustrated WebP covers + {len(compiled_volumes) - raster_cover_count} Vector Art Studio covers)", file=sys.stderr)

    if verify:
        if len(compiled_volumes) != 90:
            print(f"ERROR: Expected 90 volumes, found {len(compiled_volumes)}", file=sys.stderr)
            return 1
        for i, v in enumerate(compiled_volumes, start=1):
            if v["volume"] != i:
                print(f"ERROR: Volume indexing mismatch at position {i}: found volume {v['volume']}", file=sys.stderr)
                return 1

    return 0


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--verify", action="store_true", help="Assert complete 90-volume dataset")
    raise SystemExit(build(ap.parse_args().verify))
