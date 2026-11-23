#!/usr/bin/env python3
"""
Compiles all 68 ASTRO-BOTANICA: ZERO-G ROOTS volume scripts, metadata, and
character registries into a browser-ready, zero-CORS data bundle:
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
    s = re.sub(r"[`*_]", "", s)
    return re.sub(r"\s+", " ", s).strip()


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
    # 1. Volume Metadata Header
    m_head = re.search(r"## 1\. Volume Metadata Header(.*?)(?=## 2\.|\Z)", body, re.S)
    head_txt = m_head.group(1) if m_head else ""
    
    # 2. Dramatis Personae
    m_pers = re.search(r"## 2\. Dramatis Personae(.*?)(?=## 3\.|\Z)", body, re.S)
    pers_txt = m_pers.group(1) if m_pers else ""
    
    # 3. Chapter Script
    m_script = re.search(r"## 3\. 32-Page Chapter Script(.*?)(?=## 4\.|\Z)", body, re.S)
    script_txt = m_script.group(1) if m_script else ""
    
    # 4. Mission Debrief
    m_debrief = re.search(r"## 4\. Mission Debrief(.*?)(?=## 5\.|\Z)", body, re.S)
    debrief_txt = m_debrief.group(1) if m_debrief else ""

    # Parse Header details
    def get_labeled(label_pattern, text):
        m = re.search(rf"-\s*\*\*([^*:\n]*{label_pattern}[^*:\n]*):?\*\*:?\s*(.+)$", text, re.M | re.I)
        return m.group(2).strip() if m else None

    organism = get_labeled("Organism", head_txt)
    hardware = get_labeled("Setting|Hardware", head_txt)
    publication = get_labeled("Publication|Reference", head_txt)
    chapter_title = get_labeled("Chapter Title|Title", head_txt) or title

    # Parse Pages from Chapter Script
    pages = []
    # Match pages: **Page X**, ### Page X, ## Page X
    page_blocks = re.split(r"(?:^|\n)(?:#{2,4}\s*|\*\*)\s*Pages?\s+(\d+(?:[–—-]\d+)?)(?:\*\*)?", script_txt, flags=re.I)
    if len(page_blocks) > 1:
        # page_blocks has [preamble, page_id_1, text_1, page_id_2, text_2, ...]
        for i in range(1, len(page_blocks), 2):
            p_id = page_blocks[i].strip()
            p_body = page_blocks[i+1].strip()
            
            # Extract Act if specified in surrounding lines
            act_m = re.search(r"###?\s*(Act\s+[I|V|X]+[^\n]*)", p_body)
            act_title = act_m.group(1).strip() if act_m else "Manga Sequence"
            
            # Extract Panels
            panels = []
            panel_matches = re.split(r"(?:^|\n)-\s*\*\*Panel\s*(\d+)[^:]*\*\*:?", p_body)
            if len(panel_matches) > 1:
                for pj in range(1, len(panel_matches), 2):
                    pan_num = panel_matches[pj].strip()
                    pan_desc = panel_matches[pj+1].strip().split("\n- ")[0]
                    panels.append({
                        "panel_number": int(pan_num) if pan_num.isdigit() else pj,
                        "description": clean_text(pan_desc)
                    })
            
            # Extract Dialog / Caption / SFX
            captions = re.findall(r"\*(?:Caption|NARRATION):\*\s*\*([^*]+)\*", p_body)
            sfx = re.findall(r"\*SFX:\*\s*\*?([^*\n]+)\*?", p_body)
            dialogs = re.findall(r'"([^"\n]{10,250})"', p_body)
            
            pages.append({
                "page_label": p_id,
                "act": act_title,
                "panels_count": len(panels),
                "panels": panels[:4],
                "caption": clean_text(captions[0]) if captions else (clean_text(dialogs[0]) if dialogs else "Orbital experimental investigation underway."),
                "sfx": clean_text(sfx[0]) if sfx else None,
                "dialogue": [clean_text(d) for d in dialogs[:3]],
                "summary": clean_text(p_body[:300])
            })

    # If no explicit pages parsed, create default acts summary
    if not pages:
        pages.append({
            "page_label": "1-32",
            "act": "Act I–III Complete Mission Arc",
            "panels_count": 6,
            "panels": [{"panel_number": 1, "description": clean_text(body[:300])}],
            "caption": f"NASA OSDR Study {accession} Investigation",
            "sfx": "RESEARCH",
            "dialogue": ["Analyzing orbital biological telemetry."],
            "summary": clean_text(body[:400])
        })

    # Extract Mission Debrief tables
    debrief_tables = []
    table_matches = re.findall(r"(\|.+?\|\n\|[-:| ]+\|\n(?:\|.+?\|\n)+)", debrief_txt)
    for t_str in table_matches:
        rows = []
        for line in t_str.strip().splitlines():
            cells = [clean_text(c) for c in line.strip().strip("|").split("|")]
            if cells and not all(c == "" or re.match(r"^[-:]+$", c) for c in cells):
                rows.append(cells)
        if len(rows) >= 2:
            debrief_tables.append({"headers": rows[0], "rows": rows[1:]})

    # Categorize Mission / World / Ecosystem
    world = "ISS"
    acc_lower = accession.lower()
    org_clean = clean_text(organism or "")
    if any(k in org_clean.lower() or k in title.lower() for k in ["lunar", "apollo", "moon", "taurus", "descartes", "fra mauro"]):
        world = "Moon"
    elif any(k in org_clean.lower() or k in title.lower() for k in ["mars", "martian", "regolith", "mojave", "mms-1"]):
        world = "Mars"
    elif any(k in org_clean.lower() or k in title.lower() for k in ["antarctica", "eden iss", "polar", "neumayer"]):
        world = "Polar Analog"
    elif any(k in org_clean.lower() or k in title.lower() for k in ["suborbital", "virgin", "blue origin", "kft"]):
        world = "Suborbital"

    plant_family = "Brassicaceae (Arabidopsis/Mustard)"
    if "lactuca" in org_clean.lower() or "lettuce" in org_clean.lower():
        plant_family = "Asteraceae (Lettuce)"
    elif "solanum" in org_clean.lower() or "tomato" in org_clean.lower() or "potato" in org_clean.lower():
        plant_family = "Solanaceae (Tomato/Potato)"
    elif "poaceae" in org_clean.lower() or "ryegrass" in org_clean.lower() or "brachypodium" in org_clean.lower() or "wheat" in org_clean.lower():
        plant_family = "Poaceae (Cereals/Grasses)"
    elif "marchantia" in org_clean.lower() or "liverwort" in org_clean.lower():
        plant_family = "Bryophytes (Liverworts)"
    elif "glycine" in org_clean.lower() or "soybean" in org_clean.lower():
        plant_family = "Fabaceae (Legumes)"

    return {
        "volume": vol_num,
        "accession": accession,
        "osdr_url": f"https://osdr.nasa.gov/bio/repo/data/studies/{accession}",
        "title": clean_text(chapter_title or title),
        "organism": org_clean,
        "plant_family": plant_family,
        "world": world,
        "hardware": clean_text(hardware or "Flight Hardware"),
        "publication": clean_text(publication or "NASA OSDR Biological Archive"),
        "pages_count": len(pages),
        "pages": pages,
        "debrief_tables": debrief_tables,
        "dramatis_personae": pers_txt.strip(),
        "script_markdown": script_txt.strip(),
        "raw_script_path": f"docs/astro-botanica/volumes/{path.name}"
    }


def build(verify: bool) -> int:
    vol_files = sorted(VOL_DIR.glob("vol-*.md"), key=lambda p: int(re.search(r"vol-(\d+)", p.name).group(1)))
    print(f"Found {len(vol_files)} volume markdown files in {VOL_DIR.relative_to(ROOT)}", file=sys.stderr)

    compiled_volumes = []
    for vf in vol_files:
        vol_data = parse_volume_markdown(vf)
        compiled_volumes.append(vol_data)

    compiled_corpus = {
        "anthology_title": SERIES_TITLE,
        "anthology_subtitle": SERIES_SUBTITLE,
        "total_volumes": len(compiled_volumes),
        "total_pages_cataloged": sum(v["pages_count"] for v in compiled_volumes),
        "worlds": ["ISS", "Moon", "Mars", "Polar Analog", "Suborbital", "Ground Analog"],
        "plant_families": [
            "Brassicaceae (Arabidopsis/Mustard)",
            "Asteraceae (Lettuce)",
            "Solanaceae (Tomato/Potato)",
            "Poaceae (Cereals/Grasses)",
            "Fabaceae (Legumes)",
            "Bryophytes (Liverworts)"
        ],
        "volumes": compiled_volumes
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
