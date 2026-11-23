---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 13
title: "Vol. 13 — The Dispensable Alarm"
accession: OSD-120
script_status: condensed
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 33)
---

> [!NOTE]
> Script status **condensed**: 32/32 pages have their own heading; condensed ranges: 3-10, 13-18, 19-22, 23-25, 26-30.
## 1. Volume Metadata Header

- **Volume Title:** *Vol. 13 — The Dispensable Alarm*

- **OSDR Accession:** `OSD-120` (`GLDS-120` | `LSDS-33` | Version 20 | Submitted `02-Jun-2017` | Initial Release `08-Jun-2017` | Updated `19-Feb-2026` | `DOI: 10.26030/0w7t-3128` | GEO: `GSE94983`)

- **Primary Publication(s):**

  - Paul A-L, Sng NJ, Zupanska AK, Krishnamurthy A, Schultz ER, Ferl RJ (2017). *Genetic dissection of the Arabidopsis spaceflight transcriptome: Are some responses dispensable for the physiological adaptation of plants to spaceflight?* *PLOS ONE* `12(6): e0180186` (`PLOS ONE` | `PubMed 28662188` | `DOI: 10.1371/journal.pone.0180186`).

- **Organism & Genotypes:** *Arabidopsis thaliana* root tips (`2 mm` light-grown / `1 mm` dark-grown) of **`Col-0`**, **`WS`** (which naturally lacks `PHYD` transcription), and **`Col-0 phyD`** (`SALK_027956C`).

- **Hardware & Conditions (SpaceX CRS-3, `04/18/2014–05/18/2014`, Increment 39; Payload `CARA` / `"Petri Plants"`):**

  - `18` Phytagel Petri plates (`6`/genotype) wrapped in **double-layer Duvetyne Black-Out cloth** at `4°C` (`6 days` pre-launch, `12 days` orbital cold stowage), then mounted directly on the **Destiny US Lab wall** (open ISS cabin air, no enclosed growth chamber).

  - **Light vs. Dark:** Light plates received dim ambient ISS cabin light (`4–6 μmol m^-2 s^-1`), measured by Flight Engineer Steve Swanson using an **iPad3 (`iOS 5.1.1`)** app (`"Light Meter HD- lux measurement tool"`). Dark plates received `4 h` light to trigger germination, then were re-wrapped for `11 days` (note: OSDR metadata lists `13 days` in one protocol note vs. `11 days` in the paper).

  - **Ground Control (`ISSES` at KSC):** Initiated `24 h` after flight to replay ISS temperature, `CO2`, RH, and iPad-calibrated light levels, photographed by a `"pseudonaut"` technician (`Panasonic`) vs. ISS astronaut (`Nikon`).

- **Preservation & Assay (`n = 36` RNA-Seq samples; `n = 90` total OSDR rows including Day 3/6/9/13 imaging):** Harvested into **KFTs** with `RNAlater` (`12–18 h` ambient perfusion →\rightarrow→ `MELFI` `-80°C` →\rightarrow→ Dragon splashdown →\rightarrow→ Long Beach charter →\rightarrow→ JSC dry ice →\rightarrow→ FedEx KSC →\rightarrow→ UF). `Picopure` RNA (`5 ng`) →\rightarrow→ `SMART-Seq v4` (`9` cycles) + `Nextera` (`120 pg`) →\rightarrow→ **Illumina `NextSeq 500`** (`2 × 75/76 bp`, `~40 M` reads/sample).

## 2. Dramatis Personae (Grounded in Study Data)

- **`Col-0` (The Over-Reactive Strategist):** Mounts a massive **`297`-DEG** response in dim ISS light—`217` of which turn out to be completely unnecessary for surviving spaceflight.

- **`WS` (The Minimalist Veteran):** Naturally carries a `PHYD` deletion; adapts to Destiny's dim light with only **`71` DEGs** (and equal root length to `Col-0`), yet erupts into **`218` DEGs** when plunged into orbital darkness.

- **`phyD` (`SALK_027956C`):** `Col-0` stripped of a single red/far-red shade-avoidance sensor (`Phytochrome D`). Instantly sheds nearly two-thirds of `Col-0`'s light-grown transcriptional baggage (`297` →\rightarrow→ `130` DEGs) without losing a millimeter of root growth.

- **`ATARD3` (`AT2G26400`, Acireductone Dioxygenase 3):** The lone survivor—the **single gene** coordinately expressed across all `3` genotypes in *both* Light (`18`-gene core) and Dark (`11`-gene core).

- **The Cell-Wall Guild (`14–17%` of every genotype's unique DEGs):** Different individual genes per genotype, yet always occupying the same `14–17%` architectural share of the response.

- **Steve Swanson's `iPad3` (`iOS 5.1.1`):** Improvised photon-scout bridging the Destiny module wall and KSC's `ISSES` chamber in the absence of a standard ISS light meter.

## 3. 32-Page Chapter Script

### Act I: Launch & Environmental Shift (Pages 1–10)

**Page 1**

- **Panel 1 (Splash):** Eighteen Phytagel plates sealed inside double-layered **Duvetyne Black-Out cloth**, chilled at `4°C` inside Dragon's cold-stow bag atop Falcon 9 at Cape Canaveral (`April 18, 2014`).

  - *Caption:* `SPACEX CRS-3 // PAYLOAD: CARA ("PETRI PLANTS"). 18 PLATES. 3 GENOTYPES. DORMANT AT 4°C.`

- **Panel 2:** Twelve days post-launch inside the **Destiny US Lab**. Astronaut Steve Swanson peels off the black cloth and Velcros the plates directly onto the open cabin wall—no `ABRS`, no `Veggie`, just raw ISS cabin air.

- **Panel 3:** With no standard light meter aboard, Swanson holds an **iPad3 (`iOS 5.1.1`)** running `Light Meter HD` against the bulkhead: `4–6 μmol m^-2 s^-1`.

  - *Dialogue (Narration):* *"Four hours of dim cabin glow to wake the seeds—then half the plates go back into the dark."*

**Page 2**

- **Panel 1:** Twenty-four hours behind orbit, inside KSC's **ISS Environment Simulator (`ISSES`)**, a `"pseudonaut"` technician calibrates the chamber with the exact same `iPad3` model and replays yesterday's ISS `CO2`, humidity, and temperature.

- **Panel 2:** Inside the Phytagel, `Col-0`, `WS`, and `Col-0 phyD` (`SALK_027956C`) germinate.

- **Panel 3:** On the ISS wall, roots abandon straight vertical tracks and curl into loose, unorganized coils across the gel, while hypocotyls lean away from the shaded bulkhead toward the dim cabin lights.

**Pages 3–10 (Three Genotypes, One Root-Length Verdict)**

- **Pages 3–5:** Days `3, 6, 9, 11`. Nikon shutters click on orbit; Panasonic shutters click at KSC—often shooting through the *back* of the Petri dishes to dodge lid condensation.

- **Pages 6–8:** Inside the `2 mm` light-grown root tips, `Col-0` sounds a frantic **297-gene** general alarm—flooding oxidative-stress, hormone, and defense channels.

- **Pages 9–10:** Right beside it, **`phyD`** (`130` DEGs) and **`WS`** (`71` DEGs) glide along the exact same Phytagel at the exact same root length (`F2,310 = 12.112`, no orbital difference among genotypes!).

  - *Dialogue (`WS` to `Col-0`):* *"You're burning two hundred extra transcripts just to grow the same two millimeters."*

### Act II: The Molecular Battle (Pages 11–22)

**Pages 11–12 (Double-Page Spread — *The Cost of Listening to the Wrong Signal*)**

- **Left Page (`Col-0` Light-Grown Root Tip — `297` DEGs):** A chaotic war room packed with `217` dispensable transcripts—defense sirens blaring, ROS alarms flashing, auxin/ABA/GA couriers colliding in `4–6 μmol m^-2 s^-1` twilight.

- **Right Page (`phyD` `130` DEGs & `WS` `71` DEGs):** A stripped-down, quiet command deck. Without `Phytochrome D` misinterpreting microgravity's dim light cues, `phyD` and `WS` bypass two-thirds of the panic while keeping their **`14–17%` Cell-Wall Remodeling** engineers steadily at work.

  - *SFX:* **シーン (SHIIN — quiet, streamlined transcriptional silence)**

**Pages 13–18 (The Dark Flip)**

- **Pages 13–15:** Cut to the Duvetyne-wrapped **Dark** plates (`1 mm` root tips, `461` total DEGs across genotypes). Now the tables turn: stripped of ambient light cues, **`WS`** suddenly spikes to **`218` DEGs** (nearly matching `Col-0`'s **`224`**), while **`phyD`** stays leanest at **`131` DEGs**.

- **Pages 16–18:** In the dark, hormone-metabolism (`auxin`, `ABA`, `GA`) and gravitropism genes crowd the floor, while `11` light-grown and `17` dark-grown genes even flip in *opposite* directions between genotypes.

**Pages 19–22 (The `18`, the `11`, and the One)**

- **Pages 19–20:** Venn circles converge: `18` shared genes in Light (`7` light-signaling genes down; `11` defense/cell-wall genes up) vs. `11` shared genes in Dark (`1` methionine-biosynthesis gene down; `10` up).

- **Pages 21–22:** Between the two circles stands a single, solitary figure wearing both Light and Dark badges: **`ATARD3` (`AT2G26400`, Acireductone Dioxygenase 3)**—the *only* gene coordinately regulated across every genotype and both light regimes.

### Act III: Fixation & Data Epilogue (Pages 23–32)

**Pages 23–25**

- **Page 23:** Day `11` harvest: seedlings are sealed into **KFTs** with `RNAlater` (`12–18 h` ambient perfusion), frozen in **`MELFI`** (`-80°C`), and returned aboard Dragon (`May 18, 2014`) via Long Beach charter plane, JSC dry ice, and FedEx to KSC and UF.

- **Pages 24–25:** Root tips (`2 mm` light / `1 mm` dark, `3` individual roots per condition = `36` RNA-Seq samples) yield `5 ng` RNA for `SMART-Seq v4` + `Nextera` (`120 pg` cDNA) on **Illumina `NextSeq 500`** (`~40 M` paired-end reads each).

**Pages 26–30 (Archival Epilogue & Series Bridge)**

- **Pages 26–27:** In `June 2017`, Paul & Ferl publish `CARA` in *PLOS ONE*: much of the plant spaceflight transcriptome is **dispensable**—and knocking out a single light sensor (`phyD`) lowers the transcriptional tax of orbit.

- **Pages 28–29:** Years later (`2025`), machine-learning pipeline **`GLARE`** re-mines `OSD-120`, uncovering latent hypoxic signatures alongside cell-wall remodeling.

- **Page 30:** Leaving `CARA`'s Destiny bulkhead behind, the OSDR sequence advances to the next botanical frontier...

**Pages 31–32:** *(See Section 4 — Mission Debrief Infographic Layout below)*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Page 31 — `CARA` Flight Hardware & Sample Architecture

- **Header Banner:** `OSD-120 // CARA ("PETRI PLANTS") — SPACEX CRS-3 (n = 36 RNA-SEQ / 90 TOTAL ROWS)`

- **Left Column (Habitat & Operations):**

  - **Plates:** `18` flight + `18` ground (`6`/genotype: `Col-0`, `WS`, `Col-0 phyD` `SALK_027956C`) on Phytagel, stored in double-layer Duvetyne Black-Out cloth at `4°C`.

  - **Orbital Deployment:** Mounted on open **Destiny US Lab wall** (`4–6 μmol m^-2 s^-1` dim light measured via **iPad3 `Light Meter HD`**); dark plates unwrapped `4 h` then re-wrapped for `11 d` (`13 d` in one OSDR protocol note).

  - **Ground Control:** KSC `ISSES` chamber, `24 h` delayed replay (`"pseudonaut"` + Panasonic camera vs. ISS Nikon).

- **Right Column (Preservation & Low-Input RNA-Seq):**

  - **Fixation:** `KFT` + `RNAlater` (`12–18 h` ambient) →\rightarrow→ `MELFI` `-80°C` →\rightarrow→ Dragon splashdown (`May 18, 2014`).

  - **Dissection & Library:** `2 mm` (Light) / `1 mm` (Dark) root tips (`3` reps ×\times× `3` genotypes ×\times× `2` light ×\times× `2` env = `36` samples); `Picopure` (`5 ng`) →\rightarrow→ `SMART-Seq v4` + `Nextera` →\rightarrow→ `NextSeq 500` (`2 × 75/76 bp`, `~40 M` reads).

### Page 32 — Transcriptional Cost & The Sole Universal Gene

- **Top Panel (Light-Grown Spaceflight DEGs, `394` total, `FDR < 0.05`, `|log2FC| >= 1`):**

  - **`Col-0`:** `297` DEGs (`217` unique/dispensable) →\rightarrow→ **`phyD`:** `130` DEGs (`127` in text) →\rightarrow→ **`WS`:** `71` DEGs.

  - **Shared Light Core:** `18` genes (`7` down, `6/7` light signaling; `11` up, `6/11` defense/cell wall).

- **Bottom-Left Panel (Dark-Grown Spaceflight DEGs, `461` total):**

  - **`Col-0`:** `224` DEGs | **`WS`:** `218` DEGs | **`phyD`:** `131` DEGs.

  - **Shared Dark Core:** `11` genes (`1` down methionine biosynthesis; `10` up).

- **Bottom-Right Panel (Key Takeaway):**

  - **Root Growth:** Equal across all `3` genotypes on orbit (`F2,310 = 12.112`).

  - **Universal Gene:** Only **`ATARD3` (`AT2G26400`)** is coordinately expressed across all `3` genotypes in both Light and Dark; **cell-wall remodeling** (`14–17%` of unique DEGs) is the unifying functional category.

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "accession": "OSD-120",
  "volume_title": "Vol. 13 — The Dispensable Alarm",
  "hardware_introduced": [
    "Open ISS Destiny US Lab cabin wall mount (ambient air, 4-6 umol/m2/s dim light)",
    "Duvetyne Black-Out cloth (double-layer dormancy & dark-growth wrap)",
    "iPad3 (iOS 5.1.1) Light Meter HD app (improvised orbital & ISSES light calibration)",
    "ISS Environment Simulator (ISSES) at KSC (24h-delayed telemetry replay)",
    "Illumina NextSeq 500 + SMART-Seq v4 / Nextera ultra-low-input RNA-Seq (5 ng RNA)"
  ],
  "ecotypes_or_mutants": [
    "Col-0 (297 Light DEGs / 224 Dark DEGs)",
    "WS (natural PHYD deletion; 71 Light DEGs / 218 Dark DEGs)",
    "Col-0 phyD (SALK_027956C; 130 Light DEGs / 131 Dark DEGs)"
  ],
  "molecular_characters": [
    "PHYD / Phytochrome D (shade-avoidance sensor whose loss cuts Col-0's orbital DEG cost nearly 3-fold)",
    "ATARD3 / AT2G26400 (sole gene coordinately expressed across all 3 genotypes in both Light and Dark)",
    "Cell-Wall Remodeling Guild (14-17% of unique DEGs in every genotype)"
  ],
  "continuity_hooks_for_future_volumes": [
    "Demonstrates that much of a plant's spaceflight transcriptome response is dispensable/non-adaptive",
    "Light environment flips WS from minimalist (71 DEGs in light) to reactive (218 DEGs in dark)",
    "Sets up future leaf-vs-root CARA comparisons (OSD-678) and ML re-mining (GLARE)"
  ]
}

```

Ready for **Vol. 14** whenever you say `"Go on"`.
