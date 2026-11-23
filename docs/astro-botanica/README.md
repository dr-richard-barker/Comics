# ASTRO-BOTANICA: ZERO-G ROOTS

> **A Hard Sci-Fi *Seinen* Manga Series Exploring Plant Studies in the NASA Open Science Data Repository (OSDR)**

Every volume dramatizes a real spaceflight or ground-analog plant biology study from NASA OSDR, grounded strictly in flight hardware, environmental parameters, differential gene expression, and published research.

---

## Series Overview

- **Format:** 32-page *seinen* manga volumes (high-contrast ink, screentones, HUD overlays for gene pathways and sensors).
- **Core Setting:** International Space Station (Veggie, APH, ABRS, BRIC), suborbital rockets, parabolic flights, lunar/Martian regolith testbeds.
- **Narrative Arc (Per Volume):**
  - **Act I (Pages 1–8):** Launch & Environmental Shift (hardware introduction, squad setup, baseline conditions).
  - **Act II (Pages 9–24):** The Molecular Battle (transcriptomic divergence, stress signaling, metabolic shifts).
  - **Act III (Pages 25–32):** Fixation & Data Epilogue (sample harvest/preservation, 2-page Mission Debrief, real-world science takeaway).
- **Current Ingestion Status:** **62 Volumes** ingested from the initial production run (OSD-7 through OSD-780).

---

## Directory Structure

```text
docs/astro-botanica/
├── README.md               # This series documentation
├── ROSTER.md               # Volume-by-volume roster with accessions, titles, status
├── QA_REPORT.md            # Ingestion audit: complete vs. condensed vs. fragmented volumes
├── PROMPT_TEMPLATE.md      # Master showrunner prompt and instructions for continuing the run
├── source/
│   ├── conversation.md     # Cleaned, full transcript of the generation session
│   └── turns.json          # Parsed conversation turns (user & model responses)
└── volumes/
    ├── vol-01-osd-7.md      # Vol. 1 — The Silent Canopy, The Screaming Root
    ├── ...
    └── vol-62-osd-780.md    # Vol. 62 — Red-Rich, Blue-Rich: The Flavor of Flight

data/astro_botanica/
├── series_index.json       # Master metadata, publication links, QA status for all volumes
├── series_bible.json       # Cumulative registry of hardware, plant squads, and molecular characters
└── osdr_plant_studies.json # Master catalog of NASA OSDR plant studies (scripted & unscripted)
```

---

## Ingested Volumes Summary

- **Total Ingested:** 62 Volumes
  - **Complete (Full 32-page scripts):** 1 (Vol. 1)
  - **Partial (13–31 distinct page headings):** 7 (e.g. Vols. 2–7, 14–15)
  - **Condensed (Page ranges grouped into acts):** 53
  - **Fragment (Interrupted run; debrief & bible only):** 1 (Vol. 49 / OSD-581)
- **Molecular Characters Cataloged:** 39 key genes/proteins (HY5, DREB2A, TCH4, JAZ7, ARG1, SOG1, etc.)
- **Flight Hardware Cataloged:** 120 systems (ABRS, Veggie, APH, BRIC canisters, KFTs, Petri dishes, clinostats)
- **Next Queued Accession:** `OSD-855` (Apollo 17 challenge seed germination study)
- **Unscripted Accessions Remaining:** 28 studies in the plant catalog (including gaps like OSD-193, OSD-282, and higher accessions OSD-855 through OSD-971).

---

## Continuity & Showrunner Instructions

To continue producing volumes from `OSD-855` onwards, or to expand/regenerate condensed scripts:
1. Refer to [PROMPT_TEMPLATE.md](PROMPT_TEMPLATE.md) for the exact prompt structure and input injection parameters.
2. Inject the cumulative state from [series_bible.json](../../data/astro_botanica/series_bible.json).
3. Follow the naming standard `ASTRO-BOTANICA: ZERO-G ROOTS`.

For a full audit of script status and missing sections, see [QA_REPORT.md](QA_REPORT.md).
