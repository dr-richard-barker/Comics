---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 9
title: "The Dual-Axis Pendulum"
accession: OSD-45
script_status: condensed
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 25)
---

> [!NOTE]
> Script status **condensed**: 32/32 pages have their own heading; condensed ranges: 3-8, 9-11, 14-24, 25-30.
## 1. Volume Metadata Header

- **Volume:** `Vol. 9 — The Dual-Axis Pendulum`

- **Target Accession:** `OSD-45` (`GLDS-45` / `GEO:GSE39631` / `DOI: 10.26030/rdt0-yx94`)

- **Primary Publication:** *None linked in OSDR* (Direct GEO/ArrayExpress submission `E-GEOD-39631` by Soubigou-Taconnat L, Balzergue S, Carnero-Diaz E, Martin-Magniette ML — INRA, France, 2012).

- **Organism & Genotypes:** *Arabidopsis thaliana* `Col-0` (Columbia), `Plant Roots` (`boyes` developmental stage).

- **Hardware & Conditions:** **Ground Simulated Microgravity** — **Horizontal Clinostat (`μg`)** vs. **Vertical Clinostat (`1G` control)**. Seedlings grown `4`, `8`, and `12` days on solid Murashige and Skoog (`MS10`) medium with **`10%` sucrose**, **`100%` hygrometry**, **`25 ± 2°C`**, **`70 μE m-2 s-1`** light, **`16 h` photoperiod**.

- **Preservation & Assay:** Qiagen RNeasy root RNA extraction (`5 μg` aRNA, SuperScript II RT, `Cy3-dCTP`/`Cy5-dCTP`). **CATMA** dual-channel DNA microarrays (`A-GEOD-9553`, `12` arrays / `6` dye-swaps across `2` biological replicates `R1, R2` ×\times× `3` timepoints `4d, 8d, 12d`; `GSM973422–GSM973433`). Scanned with `GenePix Pro 3.0` (`532 nm` / `635 nm`); **LOESS** dye normalization + metablock print-tip median subtraction (`Flags = -100` excluded).

## 2. Dramatis Personae (Grounded in Study Data)

- **Col-0 Horizontal Squad (`μg` Clinostat):** Columbia root divers strapped to a horizontal rotating wheel—experiencing a continuously averaged gravity vector across `4`, `8`, and `12` days under `10%` sucrose and `100%` humidity.

- **Col-0 Vertical Guard (`1G` Clinostat):** Mirror squad spinning on a *vertical* clinostat—absorbing the same mechanical rotation and motor vibration while keeping Earth's `1g` vector aligned down the plate.

- **Cy5 (Red) & Cy3 (Green) Dye-Swap Twins:** Dual-channel cDNA couriers (`635 nm` at `30%` laser vs. `532 nm` at `35%` laser) who swap uniforms on every paired CATMA slide (`R1`/`R2` dye-swaps) so print-tip and dye biases cancel out under LOESS normalization.

- **The Unclaimed Archive (Metadata Quirk):** Unlike `OSD-7` through `OSD-44`, `OSD-45` has **no linked publication** in OSDR—leaving raw and LOESS-normalized `.gpr` log-ratios (`Ch1/Ch2`) as an open, unmined dossier for future bioinformaticians.

## 3. 32-Page Chapter Script

### Page 1 (Act I: Launch & Environmental Shift)

- **Panel 1 [Wide Shot / High-Contrast Ink]:** No rocket pad this time. Inside an INRA plant growth chamber in France, two motorized **2D clinostats** face each other under `70 μE m-2 s-1` fluorescent lamps (`16 h` photoperiod, `25 ± 2°C`).

  - **NARRATION:** "Spaceflight is rare. Before returning to orbit, `OSD-45` builds a mechanical illusion on Earth: two wheels spinning side by side."

  - **SFX:** `ウィーン (Wiin—Clinostat motor)`

- **Panel 2 [Close-Up]:** One wheel stands **vertical** (`1G` control); the other lies **horizontal** (`μg` simulation). Inside both, `Col-0` roots press against solid `MS10` agar—**`10%` sucrose**, **`100%` hygrometry**.

### Page 2 (Act I: Launch & Environmental Shift)

- **Panel 1 [Medium Shot / Horizontal Plate]:** A `Col-0` root tip tries to sense *down*—but every few seconds, the horizontal wheel turns, sweeping the gravity vector `360°` around the root cap.

  - **DIALOGUE (Col-0 Horizontal):** "The vector won't sit still! Left, up, right, down—statoliths can't settle!"

  - **SFX:** `クルクル (Kurukuru—Continuous rotation)`

- **Panel 2 [Medium Shot / Vertical Plate]:** Opposite them, the `Col-0` Vertical Guard spins on the vertical axis—feeling the exact same motor hum, yet `1g` stays locked along the plate.

  - **DIALOGUE (Col-0 Vertical):** "We take the same spin, so only the *gravity vector* separates us."

### Page 3–8 (Act I: The Three-Checkpoint Timecourse — Days 4, 8, 12)

*(Pages 3–8 establish the developmental progression:)*

- **Page 3–4 (`Day 4`, `boyes` stage):** Young `4`-day roots emerge into `100%` saturated humidity and heavy `10%` sucrose media (`GSM973424–GSM973427`).

- **Page 5–6 (`Day 8`):** Lateral root architecture diverges between the horizontally tumbled plates and the vertically anchored controls (`GSM973428–GSM973431`).

- **Page 7–8 (`Day 12`):** Mature `12`-day root networks (`GSM973422–GSM973423`, `GSM973432–GSM973433`) reach harvest—three developmental snapshots (`4d`, `8d`, `12d`) locked in `2` biological replicates (`R1`, `R2`).

### Page 9–11 (Act II: The Molecular Battle — Inside the CATMA Dye-Swap)

*(Pages 9–11 dramatize the technical war against microarray bias:)*

- **Page 9:** Root RNA is extracted (`Qiagen RNeasy`), amplified (`5 μg` aRNA), denatured at `70°C`, and reverse-transcribed at `42°C` for `2.5 hours` with `SuperScript II RT`.

- **Page 10:** `Cy3-dCTP` (Green, `532 nm`) and `Cy5-dCTP` (Red, `635 nm`) coat the cDNA couriers, purified via `QIAquick`, and denatured `3 min` at `95°C` before racing onto `BSA/SDS/SSC`-pretreated **CATMA** glass slides (`A-GEOD-9553`).

- **Page 11:** For `16 hours` at `42°C`, `μg` and `1G` cDNAs compete for every probe spot on the Corning slide, followed by four `SSC/SDS` washes and a compressed-nitrogen blow-dry.

### Page 12–13 (Act II: The Molecular Battle — Double-Page Spread)

- **Panel 1 [Double-Page Spread / The Mirror-Laser Arena]:** The `GenePix Pro 3.0` dual-laser scanner (`532 nm` at `480V / 35%` power; `635 nm` at `480V / 30%` power) sweeps across the `12` CATMA arrays. On the left half of the spread, `μg` wears `Cy5` crimson and `1G` wears `Cy3` emerald; on the right half, the **6 dye-swaps** flip their colors—while **LOESS** intensity curves and **metablock print-tip median subtraction** slice away systematic artifacts and `-100` flagged spots.

  - **NARRATION:** "Every timepoint—Day 4, Day 8, Day 12—is fought twice in reverse colors. No dye bias survives the mirror."

  - **SFX:** `ビィィン (Biin—Dual laser sweep)`

### Page 14–24 (Act II–III: The Unclaimed Dossier)

*(Pages 14–24 explore the archival reality of `OSD-45`:)*

- **Page 14–16:** Twelve `.gpr` files (`14286614`–`14286626`) upload to GEO (`GSE39631`, July 2012) and OSDR (`OSD-45`), preserving `log2(Cy5/Cy3)` root ratios across `4d`, `8d`, and `12d`.

- **Page 17–20:** Yet no peer-reviewed paper is ever linked to `OSD-45` in the repository! The `LOESS`-normalized tables sit intact—an unmined time-series waiting for cross-study comparison against true spaceflight roots (`OSD-7`, `OSD-44`, and later `OSD-120`).

- **Page 21–24:** Engineers reflect on the **clinostat's paradox**: `10%` sucrose and `100%` hygrometry keep roots hydrated, while horizontal vs. vertical rotation cancels mechanical vibration—yet `1g` is still *present* locally, never truly zeroed like orbit.

### Page 25–30 (Act III: Fixation & Data Epilogue)

*(Pages 25–30 close the ground-analog arc:)*

- **Page 25–28:** The `4d -> 8d -> 12d` root time-series locks into the Series Bible as the **French CATMA Clinostat Benchmark**, ready for future meta-analyses.

- **Page 29:** Foreshadowing **Vol. 10 (`OSD-46`)**—leaving Earth's clinostats behind to enter a brand-new species or orbital hardware!

- **Page 30:** Final panel: the two clinostat wheels slowing to a halt in monochrome ink.

### Page 31 (Mission Debrief — Biological & Technical Summary)

- **Header:** `OSD-45 MISSION DEBRIEF: HORIZONTAL VS. VERTICAL CLINOSTAT ROOT TIMECOURSE`

- **Panel A — Experimental Design:** *Arabidopsis* `Col-0` roots grown `4`, `8`, and `12` days on solid `MS10` + `10%` sucrose at `100%` hygrometry (`25 ± 2°C`, `16 h` light at `70 μE m-2 s-1`) on a **horizontal clinostat (`μg`)** vs. **vertical clinostat (`1G` control)** (`OSD-45`).

- **Panel B — Dye-Swap Rigor:** `6` paired `Cy3/Cy5` dye-swaps (`2` biological replicates ×\times× `3` timepoints = `12` **CATMA** arrays, `GSM973422–GSM973433`) processed with `GenePix Pro 3.0`, `-100` spot filtering, **LOESS** normalization, and metablock print-tip median subtraction.

- **Panel C — Archival Status:** Submitted via `GEO:GSE39631` (2012) with **no linked primary publication** in OSDR—preserving raw `.gpr` and normalized `log2(Cy5/Cy3)` tables as an open resource for time-resolved clinostat vs. spaceflight meta-analyses.

### Page 32 (Mission Debrief — BLSS Implications & Citation)

- **BLSS Engineering Takeaway:**

  - **Ground Analog Calibration:** Pairing horizontal and vertical clinostats controls for mechanical rotation/shear, isolating gravity-vector randomization—essential for pre-flight screening before expensive ISS runs.

  - **Multi-Timepoint Root Tracking:** Capturing `4d`, `8d`, and `12d` separates early germination/establishment shifts from mature root-architecture remodeling.

- **Primary Source:** `OSD-45` (`GLDS-45` / `GEO:GSE39631` / `DOI: 10.26030/rdt0-yx94`).

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

*(Integrated into Pages 31–32 above.)*

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "accession": "OSD-45",
  "volume_title": "Vol. 9 — The Dual-Axis Pendulum",
  "hardware_introduced": [
    "2D Horizontal vs. Vertical Clinostat (MS10 + 10% sucrose, 100% hygrometry, 16 h light)",
    "CATMA Dual-Channel Microarray (A-GEOD-9553, 6 Cy3/Cy5 dye-swaps, GenePix Pro 3.0)"
  ],
  "ecotypes_or_mutants": [
    "Col-0 (Root tissue, 4d / 8d / 12d)"
  ],
  "molecular_characters": [],
  "continuity_hooks_for_future_volumes": [
    "Unpublished GEO:GSE39631 root timecourse (4d, 8d, 12d) logged as an open archival dataset in OSDR.",
    "Sets up Vol. 10 (OSD-46)."
  ]
}

```

Ready to proceed to **Vol. 10 (`OSD-46`)** whenever you say "Go on."
