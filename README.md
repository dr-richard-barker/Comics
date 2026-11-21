# 🚀 CoSE Science Comics: The K–12 Illustrated Space Biology Anthology

An interactive, multi-style K–12 comic anthology and GitHub Pages showcase covering **114 open-source research projects** across **Dr. Richard J. Barker's** Collaborative Science Environment ([CoSE](https://cosecloud.com)) and GitHub portfolio (`@dr-richard-barker`).

Every comic issue translates real scientific discoveries—from leaf gas boundary layers (CFD) and NASA OSDR spaceflight multi-omics to sintered lunar regolith, mycoponics, quantum magnetobiology, and astronaut health countermeasures—into an accessible, inspiring 5-panel story for K–12 students, teachers, and curious explorers.

---

## ✨ Key Features

1. **114 Complete 5-Panel Comic Issues Across 8 Thematic Series & Art Styles**:
   - **Series 1 — Invisible Winds: Gas Transport & Spaceflight Biophysics** (*Retro NASA Blueprint & Airflow Manga* · 12 issues)
   - **Series 2 — Code of the Cosmos: Spaceflight Multi-Omics & Epigenetic Decoders** (*Neon Cyber-Genomics & Hologram Noir* · 17 issues)
   - **Series 3 — Shields of the Solar System: Radiation, Magnetobiology & Quantum Spin** (*Silver-Age Cosmic Sci-Fi & Jack Kirby Energy* · 12 issues)
   - **Series 4 — Roots in Orbit: Seeds, Signaling Waves & Space Crop Physiology** (*Botanical Watercolor & Studio Ghibli Storybook* · 13 issues)
   - **Series 5 — From Dust to Life: Regolith, Mycoponics & Closed-Loop Ecosystems** (*Solarpunk Graphic Novel & Terracotta Woodcut* · 13 issues)
   - **Series 6 — Crew Vital: Astronaut Health, Biomarkers & Space Nutrition** (*Dynamic Bio-Action & Medical Anatomy Infographic* · 9 issues)
   - **Series 7 — Science for Everyone: Open Phenomics, AI Vision & Classroom Tools** (*Maker-Zine Risograph & Pop-Art Lab Notebook* · 21 issues)
   - **Series 8 — Play to Discover: Serious Simulations, Space Arcade & Citizen Science** (*16-Bit Isometric Pixel-Comic & Maxis Retro-Futurism* · 17 issues)

2. **Recurring CoSE Space Lab Cast**:
   - **Dr. Richard ("Doc B")** — Space Systems Biologist & Mission Guide
   - **Sprout** — *Arabidopsis thaliana* Spaceflight Model Seedling
   - **Myco** — Cosmic Mycelium & Bio-Architect
   - **Statolith** — Cellular Gravity Compass (Amyloplast Starch Crystal)
   - **Pixel** — Holographic AI Multi-Omics & Physics Decoder Droid
   - **Commander Astra** — Astronaut Physiologist & Space Farmer

3. **Instant Multi-Grade Reading Toggle**:
   - **🌱 Elementary (Grades K–5 Explorer)**: Wonder-driven analogies, lively character dialogue, and foundational ideas.
   - **🔬 Middle School (Grades 6–8 Investigator)**: Cause-and-effect mechanisms and systems thinking aligned with NGSS middle school standards.
   - **🚀 High School & Educator (Grades 9–12 + Teacher Guide)**: Quantitative methods, equations, gene/OSDR dataset IDs, and classroom investigation protocols.

4. **Inspirational Take-Home Banner & Live Tool Launchers**:
   - Every comic ends with an uplifting K–12 take-home message, a 5-minute hands-on activity, and one-click buttons to **Launch the Live Web App** and **View the Open-Source GitHub Repo**.

5. **Interactive Concept Constellation Graph**:
   - Force-directed radial constellation showing how **16 Core Scientific Concepts** (`#Microgravity`, `#BoundaryLayer`, `#Photorespiration`, `#Gravitropism`, `#CosmicRadiation`, `#Magnetobiology`, `#MultiOmics`, `#DigitalTwins`, `#Epigenetics`, `#CellSignaling`, `#Mycoponics`, `#Regolith`, `#ClosedLoop`, `#AstronautHealth`, `#OpenPhenomics`, `#SeriousGames`) connect every project across the portfolio.

6. **Classroom Poster / Zine Print Mode**:
   - Click **🖨️ Print Classroom Poster** inside any comic issue to print or save a clean PDF handout for classroom walls or lab notebooks.

---

## 📂 Repository Structure

```text
Comics/
├── index.html                  # Main GitHub Pages Anthology Portal (Newsstand, Reader, Constellation, Educator Hub)
├── css/
│   └── comics.css              # Multi-style comic typography, 5-panel grid, speech bubbles, and print-to-poster rules
├── js/
│   ├── svg-art-engine.js       # Bespoke SVG character rigs, 8 art style backdrops, and 22 scientific scene compositors
│   ├── constellation.js        # Interactive HTML5 Canvas Concept Constellation Explorer
│   └── comic-reader.js         # Newsstand filters, grade-level toggle, deep-linking, and issue reader
├── data/
│   ├── concepts.json           # Cast members, 8 series definitions, and 16 NGSS-aligned connecting concepts
│   ├── comics_catalog.json     # Generated 114-issue multi-grade comic catalog (JSON)
│   └── comics_catalog.js       # Generated zero-CORS JavaScript bundle (window.COSE_COMICS_DATA)
├── scripts/
│   └── build_comics_data.py    # Deterministic builder & schema validator for all 114 comic issues
└── README.md
```

---

## 🛠️ Local Preview & Rebuilding the Catalog

To rebuild and validate the comic catalog after adding or editing issues in `scripts/build_comics_data.py`:

```bash
python3 scripts/build_comics_data.py --verify
```

To preview locally:

```bash
python3 -m http.server 8765
```
Then open **[http://localhost:8765](http://localhost:8765)** (or open `index.html` directly in any browser—`data/comics_catalog.js` works offline without CORS issues!).

---

## 🌐 Deploying to GitHub Pages & Linking into `sites.js`

1. Initialize and push this repository to `https://github.com/dr-richard-barker/Comics` (or `cose-science-comics`) and enable **GitHub Pages** from `main` branch root (`/`).
2. To add **CoSE Science Comics** to the shared CoSE site registry (`sites.js`), drop this entry into the `"Documentation & Education Hubs"` (or `"Featured"`) group in `sites.js`:

```javascript
{ id:"Comics", emoji:"📚", title:"CoSE Science Comics Anthology",
  desc:"114 illustrated K–12 science comics across 8 art styles connecting every CoSE research project, with an interactive Concept Constellation and K–5 / 6–8 / 9–12 toggle",
  url:"https://dr-richard-barker.github.io/Comics/" },
```
