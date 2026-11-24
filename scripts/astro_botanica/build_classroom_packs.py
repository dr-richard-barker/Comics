#!/usr/bin/env python3
"""
Automated Classroom Arc Curriculum Pack & Printable PDF Generator (TODO-5).

Compiles 5 standalone, print-optimized Educator & Student Curriculum Packs
(one per ASTRO-BOTANICA Story Arc) under docs/astro-botanica/classroom_packs/,
complete with verified NASA OSDR dossiers, K-5 / 6-8 / 9-12 learning guides,
molecular character rosters, debrief ledgers, NGSS standards, and printable
classroom quiz worksheets + teacher answer keys.

Optionally renders publication-ready .pdf files via headless Chrome (--pdf).

Usage:
  python3 scripts/astro_botanica/build_classroom_packs.py [--pdf] [--verify]
"""
from __future__ import annotations

import argparse
import html
import json
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CORPUS_PATH = ROOT / "data" / "astro_botanica" / "astro_botanica.json"
OUT_DIR = ROOT / "docs" / "astro-botanica" / "classroom_packs"

CHROME_CANDIDATES = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    shutil.which("google-chrome") or "",
    shutil.which("chromium") or "",
]

ARCS = [
    {
        "id": "arc-1-foundations",
        "filename": "AstroBotanica_Arc1_Foundations_Vols01-15",
        "title": "Arc I: Orbital Foundations & Gravitropism",
        "range": (1, 15),
        "ngss": "MS-LS1-8 · HS-LS1-2 · MS-PS2-2 (Gravity Sensing, Statoliths & Root Transcriptomics)",
        "summary": "From Space Shuttle STS-131 BRIC and ABRS experiments to early ISS transcriptomics: how plants sense the loss of gravity without a nervous system.",
    },
    {
        "id": "arc-2-deep-space-ag",
        "filename": "AstroBotanica_Arc2_DeepSpaceAg_Vols16-35",
        "title": "Arc II: Deep Space Agriculture, Hypobaria & Regolith",
        "range": (16, 35),
        "ngss": "MS-LS1-5 · HS-LS2-4 · MS-ESS3-3 (Low Atmospheric Pressure, Methylation & Space Crops)",
        "summary": "Investigating hypobaric growth chambers, early orbital epigenomes, unfolded protein stress, and germinating Earth crops in extraterrestrial environments.",
    },
    {
        "id": "arc-3-multi-omics",
        "filename": "AstroBotanica_Arc3_MultiOmics_Vols36-50",
        "title": "Arc III: Multi-Omics, Microbiomes & Epigenetics",
        "range": (36, 50),
        "ngss": "HS-LS1-1 · HS-LS3-1 · MS-LS2-2 (Space Crop Microbiomes, Chromatin Marks & Cereals)",
        "summary": "Red Romaine lettuce and mizuna food safety, Brachypodium grasses, automated nucleic acid extraction, and chromatin marks guiding root architecture.",
    },
    {
        "id": "arc-4-frontier-climax",
        "filename": "AstroBotanica_Arc4_Frontier_Vols51-68",
        "title": "Arc IV: Lunar Regolith, Polar Analogs & Polyamine Climax",
        "range": (51, 68),
        "ngss": "HS-LS2-6 · HS-ETS1-2 · HS-LS3-2 (Apollo Lunar Fines, EDEN ISS Antarctica & Putrescine Engineering)",
        "summary": "Cell wall remodeling, Apollo 11–17 lunar soil assays, Antarctic EDEN ISS overwinter harvests, culminating in Vol. 68 putrescine spaceflight attenuation.",
    },
    {
        "id": "arc-5-special-chronicles",
        "filename": "AstroBotanica_Arc5_SpecialChronicles_Vols69-90",
        "title": "Arc V: Special Chronicles — Starfighters, SOG1 & Ethylene Finale",
        "range": (69, 90),
        "ngss": "HS-LS3-2 · HS-PS4-4 · HS-LS1-3 (Parabolic 0g Flights, SOG1 DNA Repair, WGBS Methylomes & Ethylene)",
        "summary": "The 22 Special Chronicles completing 100% NASA OSDR plant coverage: F-104 Starfighter parabolas, SOG1 radiation checkpoints, APEX04-EPEX bisulfite methylomes, and the Vol. 90 ethylene finale.",
    },
]


def esc(s: str) -> str:
    return html.escape(str(s or ""), quote=True)


def render_arc_pack_html(arc: dict, vols: list[dict]) -> str:
    v_start, v_end = arc["range"]
    total_samples = sum(v.get("sample_count", 0) for v in vols)
    verified_cnt = sum(1 for v in vols if v.get("osdr_verified") == "live")

    roster_rows = []
    vol_sections = []
    quiz_blocks = []
    answer_keys = []

    for v in vols:
        vnum = v["volume"]
        acc = v["accession"]
        samples_str = f"n={v['sample_count']}" if v.get("sample_count") else "Archive"
        roster_rows.append(
            f"<tr><td><strong>Vol {vnum:02d}</strong></td><td><code>{esc(acc)}</code></td>"
            f"<td>{esc(v['title'])}</td><td>{esc(v['world'])}</td>"
            f"<td>{esc(v['hardware_short'])}</td><td>{samples_str}</td></tr>"
        )

        cast_pills = " ".join(
            f"<span class='chip'>{esc(c['symbol'])} ({esc(c['role'])})</span>"
            for c in (v.get("molecular_cast") or [])[:5]
        )
        factors_str = ", ".join(v.get("factors") or []) or "Spaceflight vs. Ground Control"
        edu = v.get("edu") or {}

        metrics_li = "".join(
            f"<li><strong>{esc(m['label'])}:</strong> {esc(m['value'])} — {esc(m['detail'])}</li>"
            for m in (v.get("key_metrics") or [])[:3]
        )

        vol_sections.append(f"""
        <article class="vol-card">
          <div class="vol-head">
            <div>
              <span class="vol-badge">VOL {vnum:02d} · {esc(acc)}</span>
              <span class="vol-domain">{esc(v.get('study_domain', 'Spaceflight Botany'))}</span>
              <span class="vol-meta">{esc(v['world'])} · {esc(v['hardware_short'])}{f" · 🧪 {v['sample_count']} samples" if v.get('sample_count') else ""}</span>
            </div>
            <span class="verified-tag">{'✅ LIVE OSDR VERIFIED' if v.get('osdr_verified') == 'live' else '📚 ARCHIVE'}</span>
          </div>
          <h3>{esc(v['title'])}</h3>
          <p class="official-line"><strong>Official NASA OSDR Study:</strong> {esc(v.get('official_title') or v['title'])}</p>
          <div class="edu-trio">
            <div><strong>🌱 K–5 Mystery:</strong> {esc(edu.get('k5_mystery', ''))}</div>
            <div><strong>🔬 6–8 Mechanism:</strong> {esc(edu.get('ms_mechanism', ''))}</div>
            <div><strong>🚀 9–12 Factors:</strong> {esc(factors_str)}</div>
          </div>
          {f"<div class='cast-row'><strong>Molecular Cast:</strong> {cast_pills}</div>" if cast_pills else ""}
          {f"<ul class='findings-list'>{metrics_li}</ul>" if metrics_li else ""}
          <p class="citation-line"><strong>Verified Reference:</strong> {esc(v['publication'])} · <a href="{esc(v['osdr_url'])}">{esc(v['osdr_url'])}</a></p>
        </article>
        """)

        # Include Q1 from each volume in the Arc Classroom Assessment Bank (up to 10 selected questions)
        qs = v.get("quiz") or []
        if qs and len(quiz_blocks) < 10:
            q0 = qs[0]
            q_idx = len(quiz_blocks) + 1
            opts = "".join(
                f"<span>☐ {chr(65 + oi)}. {esc(opt)}</span>"
                for oi, opt in enumerate(q0["options"])
            )
            quiz_blocks.append(f"""
            <div class="quiz-item">
              <p><strong>Q{q_idx} (Vol {vnum:02d} · {esc(acc)}):</strong> {esc(q0['question'])}</p>
              <div class="quiz-opts">{opts}</div>
            </div>
            """)
            answer_keys.append(
                f"<li><strong>Q{q_idx} ({esc(acc)}): {chr(65 + q0['answer_index'])}</strong> — {esc(q0['explanation'])}</li>"
            )

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ASTRO-BOTANICA Classroom Pack — {esc(arc['title'])}</title>
  <style>
    @page {{ size: letter portrait; margin: 0.5in; }}
    * {{ box-sizing: border-box; }}
    body {{ margin: 0; font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; color: #0f172a; background: #ffffff; line-height: 1.45; }}
    .toolbar {{ position: sticky; top: 0; z-index: 20; display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; background: #09090b; color: #f8fafc; }}
    .btn-print {{ background: #059669; color: #ffffff; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 800; cursor: pointer; }}
    .wrap {{ max-width: 920px; margin: 0 auto; padding: 24px 28px; }}
    .cover {{ background: #09090b; color: #f8fafc; border-radius: 14px; padding: 28px 32px; margin-bottom: 22px; border-left: 8px solid #10b981; }}
    .eyebrow {{ font-family: monospace; font-size: 0.78rem; color: #34d399; letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 6px; }}
    .cover h1 {{ margin: 0 0 10px; font-size: 1.85rem; line-height: 1.2; }}
    .cover p {{ margin: 6px 0; color: #cbd5e1; font-size: 0.92rem; }}
    .stats-row {{ display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }}
    .stat {{ background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); padding: 4px 10px; border-radius: 999px; font-size: 0.78rem; font-weight: 700; color: #ecfdf5; }}
    h2 {{ font-size: 1.2rem; color: #065f46; border-bottom: 2px solid #0f172a; padding-bottom: 5px; margin: 22px 0 12px; }}
    table {{ width: 100%; border-collapse: collapse; font-size: 0.78rem; margin-bottom: 18px; }}
    th {{ background: #0f172a; color: #ffffff; padding: 6px 8px; text-align: left; }}
    td {{ padding: 5px 8px; border-bottom: 1px solid #e2e8f0; }}
    .vol-card {{ border: 1.5px solid #cbd5e1; border-radius: 10px; padding: 12px 15px; margin-bottom: 12px; break-inside: avoid; page-break-inside: avoid; background: #ffffff; }}
    .vol-head {{ display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 6px; margin-bottom: 5px; }}
    .vol-badge {{ background: #09090b; color: #34d399; font-family: monospace; font-size: 0.74rem; font-weight: 900; padding: 2px 7px; border-radius: 4px; }}
    .vol-domain {{ background: #ede9fe; color: #5b21b6; font-size: 0.72rem; font-weight: 800; padding: 2px 7px; border-radius: 4px; }}
    .vol-meta {{ font-size: 0.74rem; color: #475569; font-weight: 600; }}
    .verified-tag {{ font-family: monospace; font-size: 0.68rem; font-weight: 900; color: #047857; background: #d1fae5; padding: 2px 7px; border-radius: 999px; }}
    .vol-card h3 {{ margin: 3px 0 5px; font-size: 1rem; color: #0f172a; }}
    .official-line {{ margin: 0 0 7px; font-size: 0.78rem; color: #334155; }}
    .edu-trio {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 7px 9px; font-size: 0.74rem; margin-bottom: 7px; }}
    .cast-row {{ font-size: 0.74rem; margin-bottom: 6px; display: flex; flex-wrap: wrap; gap: 4px; align-items: center; }}
    .chip {{ background: #e0f2fe; color: #0369a1; padding: 1px 6px; border-radius: 4px; font-weight: 700; font-family: monospace; font-size: 0.7rem; }}
    .findings-list {{ margin: 4px 0 6px; padding-left: 18px; font-size: 0.75rem; color: #1e293b; }}
    .citation-line {{ margin: 0; font-size: 0.71rem; color: #64748b; }}
    .citation-line a {{ color: #0284c7; text-decoration: none; }}
    .quiz-section {{ page-break-before: always; break-before: page; }}
    .quiz-item {{ border: 1px solid #cbd5e1; border-radius: 8px; padding: 9px 12px; margin-bottom: 8px; break-inside: avoid; font-size: 0.8rem; background: #fffbeb; }}
    .quiz-item p {{ margin: 0 0 5px; }}
    .quiz-opts {{ display: grid; grid-template-columns: 1fr 1fr; gap: 4px 12px; font-size: 0.76rem; }}
    .answer-box {{ page-break-before: always; break-before: page; background: #f0fdf4; border: 1.5px solid #10b981; border-radius: 10px; padding: 14px 18px; }}
    .answer-box ol, .answer-box ul {{ margin: 6px 0 0; padding-left: 18px; font-size: 0.78rem; line-height: 1.5; }}
    @media print {{
      .toolbar {{ display: none !important; }}
      .wrap {{ padding: 0; max-width: none; }}
    }}
  </style>
</head>
<body>
  <div class="toolbar">
    <div><strong>🌱 ASTRO-BOTANICA Classroom Curriculum Pack</strong> · {esc(arc['title'])} (Vols {v_start:02d}–{v_end:02d})</div>
    <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
  </div>
  <div class="wrap">
    <header class="cover">
      <p class="eyebrow">CoSE Science Comics · NASA Open Science Data Repository (OSDR) Educator Pack</p>
      <h1>{esc(arc['title'])}</h1>
      <p>{esc(arc['summary'])}</p>
      <p><strong>NGSS Alignment:</strong> {esc(arc['ngss'])}</p>
      <div class="stats-row">
        <span class="stat">📚 Volumes {v_start:02d}–{v_end:02d} ({len(vols)} Missions)</span>
        <span class="stat">✅ {verified_cnt}/{len(vols)} Live NASA OSDR Verified</span>
        <span class="stat">🧪 {total_samples:,} Verified Biological Samples</span>
        <span class="stat">🎓 K–5 · 6–8 · 9–12 Differentiated Guides</span>
      </div>
    </header>

    <h2>📋 Arc Mission Roster &amp; NASA OSDR Index</h2>
    <table>
      <thead><tr><th>Vol</th><th>Accession</th><th>Manga Title</th><th>World</th><th>Hardware</th><th>Samples</th></tr></thead>
      <tbody>{"".join(roster_rows)}</tbody>
    </table>

    <h2>🔬 Verified Mission Study Sheets (Vols {v_start:02d}–{v_end:02d})</h2>
    {"".join(vol_sections)}

    <section class="quiz-section">
      <h2>🧪 Student Classroom Assessment Worksheet — {esc(arc['title'])}</h2>
      <p style="font-size:0.84rem; margin-bottom:12px;"><strong>Name:</strong> _____________________________________ &nbsp;&nbsp; <strong>Class / Period:</strong> _______________ &nbsp;&nbsp; <strong>Date:</strong> ____________</p>
      {"".join(quiz_blocks)}
    </section>

    <section class="answer-box">
      <h2 style="margin-top:0;">👩‍🏫 Teacher Answer Key &amp; Scientific Explanations</h2>
      <ul>{"".join(answer_keys)}</ul>
    </section>
  </div>
</body>
</html>
"""


def find_chrome() -> str | None:
    for c in CHROME_CANDIDATES:
        if c and Path(c).exists():
            return c
    return None


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--pdf", action="store_true", help="Also render PDF files via local headless Chrome")
    ap.add_argument("--verify", action="store_true", help="Assert all 5 classroom packs exist and are non-empty")
    args = ap.parse_args()

    corpus = json.loads(CORPUS_PATH.read_text(encoding="utf-8"))
    volumes = corpus["volumes"]
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    chrome_bin = find_chrome() if args.pdf else None
    manifest = []

    for arc in ARCS:
        v_start, v_end = arc["range"]
        arc_vols = [v for v in volumes if v_start <= v["volume"] <= v_end]
        html_path = OUT_DIR / f"{arc['filename']}.html"
        html_path.write_text(render_arc_pack_html(arc, arc_vols), encoding="utf-8")

        pdf_rel = None
        if args.pdf and chrome_bin:
            pdf_path = OUT_DIR / f"{arc['filename']}.pdf"
            cmd = [
                chrome_bin,
                "--headless=new",
                "--disable-gpu",
                "--no-sandbox",
                f"--print-to-pdf={pdf_path}",
                "--no-pdf-header-footer",
                html_path.resolve().as_uri(),
            ]
            try:
                res = subprocess.run(cmd, capture_output=True, text=True, timeout=45)
                if res.returncode == 0 and pdf_path.exists() and pdf_path.stat().st_size > 1000:
                    pdf_rel = str(pdf_path.relative_to(ROOT)).replace("\\", "/")
            except Exception as e:
                print(f"  [WARN] Headless PDF skipped for {arc['id']}: {e}", file=sys.stderr)

        rec = {
            "id": arc["id"],
            "title": arc["title"],
            "range": f"Vols {v_start:02d}–{v_end:02d}",
            "volume_count": len(arc_vols),
            "sample_count": sum(v.get("sample_count", 0) for v in arc_vols),
            "ngss": arc["ngss"],
            "html_path": str(html_path.relative_to(ROOT)).replace("\\", "/"),
            "pdf_path": pdf_rel,
        }
        manifest.append(rec)
        print(f"  [OK] {rec['html_path']} ({len(arc_vols)} vols{f', PDF: {pdf_rel}' if pdf_rel else ''})")

    manifest_path = OUT_DIR / "packs_manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Built {len(manifest)} Classroom Arc Curriculum Packs in {OUT_DIR.relative_to(ROOT)}")

    if args.verify:
        assert len(manifest) == 5, f"Expected 5 arc packs, got {len(manifest)}"
        for m in manifest:
            hp = ROOT / m["html_path"]
            assert hp.exists() and hp.stat().st_size > 2000, f"Invalid pack: {hp}"
        print("VERIFICATION PASSED: All 5 Classroom Arc Curriculum Packs are valid and print-ready.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
