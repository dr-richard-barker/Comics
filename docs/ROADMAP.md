# CoSE Science Comics & ASTRO-BOTANICA: Engineering Roadmap & Backlog

This document records the prioritized backlog and long-term milestones for the **CoSE Science Comics** ecosystem ([index.html](file:///Users/drb_laptop/Documents/Comics/index.html)), synthesizing 114 open-source research projects, 10 flagship graphic novels, and the 90-volume *ASTRO-BOTANICA: ZERO-G ROOTS* manga series.

---

## 🎯 Current Focus: Option 2 (In Progress)
- **Initiative:** **Iconic AI Manga Cover Plates for ASTRO-BOTANICA (Key Arc Tentpole Volumes)**
- **Status:** `IN_PROGRESS`
- **Scope:** Authoring high-contrast, publication-grade *seinen* manga illustrated tankōbon cover plates for the key narrative tentpole volumes across all 5 arcs:
  - **Vol. 01 (`OSD-7`):** *The Silent Canopy, The Screaming Root* (Arc I Premiere: Statolith mechanics & STS-131 BRIC microgravity baseline)
  - **Vol. 16 (`OSD-122`):** *The Lunar Germination* (Arc II Premiere: Apollo 11 regolith contact stress & lunar agricultural frontier)
  - **Vol. 36 (`OSD-380`):** *The Chromatin Loom* (Arc III Premiere: Microgravity bisulfite epigenomics & chromatin architecture)
  - **Vol. 51 (`OSD-615`):** *Walls Woven in Zero-G* (Arc IV Premiere: Spaceflight cell wall remodeling & mechanical load transduction)
  - **Vol. 68 (`OSD-971`):** *The Polyamine Shield* (Core Series Climax: Putrescine metabolic engineering & SpaceX-25 interplanetary rescue)
  - **Vol. 90 (`OSD-782`):** *The Planetary Hormone* (Arc V / Special Chronicles Finale: Ethylene phytohormone signaling & closed-canopy resilience)
- **Deliverables:**
  - 900×1200 WebP assets under `assets/astro_botanica/covers/`.
  - Manifest registry `data/astro_botanica_covers_manifest.json`.
  - Dynamic fallback integration in `build_astro_botanica_data.py` and `astro-botanica-reader.js`.

---

## 📋 Saved Backlog & TODOs

### TODO-1: Art Pass 5 for *The CoSE Chronicles* (100% AI Illustrated Plates)
- **Origin:** Option 1
- **Status:** `PENDING`
- **Goal:** Complete the remaining 12 illustrated WebP plates for *The CoSE Chronicles* to achieve **70/70 (100%) AI-illustrated plates** with zero vector fallbacks.
- **Pending Asset Plates:**
  - **Vol. 08 (*Crew Vital: The Spaceflight Microbiome*):**
    - `assets/novels/vol-08-crew-vital/page-05.webp` (Microbiome dysbiosis in deep space; artificial gut bioreactor telemetry)
    - `assets/novels/vol-08-crew-vital/page-06.webp` (Probiotic countermeasures and personalized metabolic health return)
  - **Vol. 09 (*Mission Control Everywhere: Citizen Science & Open Phenomics*):**
    - `assets/novels/vol-09-mission-control-everywhere/page-02.webp` (Global classroom Raspberry Pi imaging rigs)
    - `assets/novels/vol-09-mission-control-everywhere/page-03.webp` (Student bioinformaticians validating real NASA gene counts)
    - `assets/novels/vol-09-mission-control-everywhere/page-04.webp` (Crowdsourced phenotyping algorithms detecting hypocotyl bending)
    - `assets/novels/vol-09-mission-control-everywhere/page-05.webp` (Foldscope microscopy workshop in rural schools)
    - `assets/novels/vol-09-mission-control-everywhere/page-06.webp` (Global map linking student labs to flight telemetry)
  - **Vol. 10 (*The Closed-Loop Frontier: Bioregenerative Life Support Systems*):**
    - `assets/novels/vol-10-the-closed-loop-frontier/page-02.webp` (Chlorella photobioreactors scrubbing cabin CO2)
    - `assets/novels/vol-10-the-closed-loop-frontier/page-03.webp` (Subsurface lunar lava tube hydroponic cascade)
    - `assets/novels/vol-10-the-closed-loop-frontier/page-04.webp` (Mycelial bio-composites decomposing agricultural biomass)
    - `assets/novels/vol-10-the-closed-loop-frontier/page-05.webp` (Nutrient solution recycling sensors and ion balance telemetry)
    - `assets/novels/vol-10-the-closed-loop-frontier/page-06.webp` (Autonomous Martian biodome multi-generational harvest)
- **Acceptance Criteria:**
  - All 12 WebP plates generated at 1400×788, optimized via `scripts/optimize_novel_assets.py`.
  - `python3 scripts/build_graphic_novels.py --verify` outputs `70 AI-illustrated WebP plates + 0 Vector Art Studio plates`.

---

### TODO-2: Deep Script Expansion & Panel Detailing (Condensed Volumes)
- **Origin:** Option 3
- **Status:** `PENDING`
- **Goal:** Expand the 38 condensed volumes (e.g. Vols. 23, 24, 26, 45, 50, 69–90) from act-level page ranges into discrete page-by-page 32-heading scripts.
- **Scope:**
  - 38 volumes × 20–22 missing headings = ~800 individualized page scenes.
  - Add explicit 4-panel cinematography breakdowns (`Panel 1: Establishing...`, `Panel 2: Macro...`).
  - Add authentic Katakana SFX (*DON!*, *GOGOGO*, *SHUWA*) and multi-speaker dialogue balloons.
- **Acceptance Criteria:**
  - `python3 scripts/astro_botanica/split_volumes.py --verify` reports `condensed: 0` and `complete: 90`.

---

### TODO-3: Concept Constellation Knowledge Graph Expansion
- **Origin:** Option 4
- **Status:** `COMPLETED ✅`
- **Completed Deliverables:** Upgraded `js/constellation.js` into a 3-ring unified radial knowledge graph uniting the 16 Core Concept Stars, all 90 verified ASTRO-BOTANICA NASA OSDR Manga Volumes (emerald diamond nodes), and all 114 Research Archive issues with 1-click reader deep-linking.

---

### TODO-4: Procedural Web Audio Sound Design Engine
- **Origin:** Option 5
- **Status:** `COMPLETED ✅`
- **Completed Deliverables:** Built `js/astro-botanica-audio.js` (zero external assets, native Web Audio API) featuring muted-by-default toggle, soft orbital habitat ambience, radiation-triggered Geiger counter ticks, tactile page turns, telemetry chirps, and quiz mastery chimes.

---

### TODO-5: Automated Classroom Manga PDF Print Bundles & Distribution Packs
- **Origin:** Option 6
- **Status:** `PENDING`
- **Goal:** Provide batch CLI tools and downloadable pre-compiled PDF bundles for K–12 teachers, university educators, and outreach organizers.
- **Scope:**
  - Headless Chromium batch printing script to render every volume as a standalone printable landscape booklet (Cover + 8 Story Sheets + Mission Debrief Table + NGSS Guide).
  - Downloadable `.zip` archive per arc:
    - `AstroBotanica_Arc1_Foundations_Vols01-15.pdf`
    - `AstroBotanica_Arc2_DeepSpaceAg_Vols16-35.pdf`
    - `AstroBotanica_Arc3_MultiOmics_Vols36-50.pdf`
    - `AstroBotanica_Arc4_Frontier_Vols51-68.pdf`
    - `AstroBotanica_Arc5_SpecialChronicles_Vols69-90.pdf`
- **Acceptance Criteria:**
  - Generated PDFs are valid vector text + high-res plates, optimized for standard 8.5×11 and A4 printing.
