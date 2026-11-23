---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 31
title: "The Slow Clock in Dry Seeds"
accession: OSD-301
script_status: condensed
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 69)
---

> [!NOTE]
> Script status **condensed**: 32/32 pages have their own heading; condensed ranges: 2-4, 5-7, 8-10, 11-14, 15-18, 19-22, 23-26, 27-30.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles*

- **Volume:** 31

- **Title:** *The Slow Clock in Dry Seeds*

- **OSDR / GLDS Accession:** `OSD-301` / `GLDS-301` (Data.gov Catalog Record | DOI: `10.26030/wnm5-8942` | BioProject: `PRJNA606141`)

- **Chronology Note:** Skips `OSD-297`–`OSD-300` (non-plant ISS microbial genome studies including `OSD-298` *Sphingomonas* and `OSD-300` *Methylobacteriaceae*).

- **Primary Publication:** Chandler, J. O., Haas, F. B., Khan, S., Bowden, L., Ignatz, M., Enfissi, E. M. A., Gawthrop, F., Griffiths, A., Fraser, P. D., Rensing, S. A., & Leubner-Metzger, G. (2020). *Rocket Science: The Effect of Spaceflight on Germination Physiology, Ageing, and Transcriptome of Eruca sativa Seeds*. *Life*, 10(4):49 (`PMCID: PMC7235897`; MDPI Full Text).

- **Mission & Vehicles:** Royal Horticultural Society (`RHS`) / UK Space Agency / ESA `'Rocket Science'` project (`Principia` mission with British ESA astronaut **Tim Peake**). `2 kg` of dry *Eruca sativa* seeds launched to LEO aboard **Soyuz `TMA-18M`** on **September 2, 2015**, stored for `6` months inside pressurized ISS cabins, and returned to Earth on **March 2, 2016**.

- **Hardware & Experimental Setup:** Three seed batches (`Earth-WS` warehouse stock at `14°C`, `25% RH`; `Earth` red foil packets at `~22°C`, `6.3% ± 0.1%` moisture; `Space` blue foil packets, `8.0% ± 1.0%` moisture); Controlled Artificial Ageing Treatment (`CAAT`) in `2 mL` Eppendorf tubes above `25 g/100 mL LiCl` (`70% RH`, `3 d` at `22°C` → `0/4/8/15 d` at `35°C` → `2 h` silica drying); `24 h` electrical conductivity (`EC`) vigor assay.

- **Organism:** *Eruca sativa* Mill. (salad rocket, Brassicaceae; cultivar `TZ 5007`, lot `09835147`, Tozer Seeds Ltd.).

- **Assay / Sequencing:** Dry and `CAAT` seed RNA-seq (`18` samples: `3` batches × `2` treatments × `3` biological replicates; Agilent `Bioanalyzer 2100`; Illumina `HiSeq V4` `2×125` bp paired-end at Vienna BioCenter Core Facilities GmbH); `de novo` transcriptome (`26,234` filtered transcripts); `NOISeqBIO` differential expression.

## 2. Dramatis Personae (Grounded in Study Data)

- **Dr. Gerhard Leubner-Metzger & Jake O. Chandler** (*Royal Holloway, University of London*): Seed physiologists leading the scientific arm of `'Rocket Science'`, testing whether six months of dry cabin stowage silently ages seeds before they ever taste water.

- **Fabian B. Haas & Dr. Stefan A. Rensing** (*University of Marburg*): Bioinformaticians who built the `de novo` *Eruca sativa* reference transcriptome (`26,234` transcripts) and traced the `73%` overlap between spaceflight and accelerated ageing.

- **Safina Khan, Laura Bowden, Michael Ignatz, Eugenia M. A. Enfissi, & Paul D. Fraser** (*Royal Holloway & University of London*): Measured germination kinetics (`TR`/`ER`), solute leakage (`EC`), and seedling carotenoids, tocopherols, and chlorophyll.

- **Frances Gawthrop & Alistair Griffiths** (*Tozer Seeds Ltd. & Royal Horticultural Society*): Supplied `TZ 5007` rocket seed and coordinated the `>5,000`-school UK citizen-science germination rollout.

- **Astronaut Tim Peake** (*ESA / UK Space Agency, `Principia` Mission*): Custodied the `2 kg` blue-packet seed payload aboard the ISS during its six-month orbital stay.

## 3. 32-Page Chapter Script

### Act I: Two Kilograms in Blue Foil (Pages 1–10)

**Page 1 (Splash Page)**

- **Panel 1:** September 2, 2015, Baikonur Cosmodrome. Soyuz `TMA-18M` clears the tower in a pillar of flame. Cutaway inset shows `2 kg` of dry *Eruca sativa* seeds sealed inside blue foil packets—dormant, dehydrated, and tucked inside the pressurized cabin.

- **Caption (Narration):** *"Not every plant experiment needs LEDs or hydroponics. Sometimes the hardest question in space biology is simpler: what happens to a seed while it's just waiting to wake up?"*

**Pages 2–4**

- **Pages 2–3:** Six months aboard the ISS (`Principia` mission, Tim Peake), then March 2, 2016: Soyuz returns the blue packets to Earth. Across the UK, `>5,000` schools open their paired red (`Earth`) and blue (`Space`) packets—reporting a faint, puzzling lag in seedling emergence.

- **Page 4:** Royal Holloway University of London. Gerhard Leubner-Metzger and Jake Chandler lay out all three batches side by side: `Earth-WS` (un-packaged `14°C` warehouse stock), `Earth` (red packets, `6.3% ± 0.1%` moisture), and `Space` (blue packets, `8.0% ± 1.0%` moisture).

**Pages 5–7**

- **Pages 5–6:** Close-up germination time-lapse at `20°C` and `29°C`. At `29°C`, `Space` seeds crack their outer testa (`TR`) **`2.0 h` later** and push their radicle through the endosperm (`ER`) **`1.6 h` later** than `Earth` seeds. Yet final germination hits `95–100%` with zero abnormal seedlings—and carotenoid, tocopherol, and chlorophyll levels are completely normal.

- **Page 7:** The `24 h` electrical conductivity (`EC`) soak test. Solutes leak out of imbibing `Space` seeds **`~1.3-fold` faster** than `Earth` seeds—a classic fingerprint of subtle membrane ageing.

- **Chandler (Dialogue):** *"They're 100% alive, but they're leaking like older seeds. Space didn't kill them—it aged them."*

**Pages 8–10**

- **Pages 8–9:** Enter `CAAT`—Controlled Artificial Ageing Treatment. Chandler seals `Earth-WS`, `Earth`, and `Space` seeds in `2 mL` Eppendorf tubes above `25 g/100 mL LiCl` (`70% RH`, `3` days at `22°C`), then bakes them at `35°C` for `4`, `8`, and `15` days before silica drying.

- **Page 10:** The dose-response curve (`Figure 2B`) splits apart. After `0`, `4`, `8`, and `15` days of `CAAT`, `Space` seeds take **`1.2 h`, `2.7 h`, `9.5 h`, and `21 h` longer** to reach `50%` germination (`t50%`) than `Earth` seeds (`15d CAAT` pushes `Space` `t50%` up by `46.4 h` vs. `26.6 h` for `Earth`).

### Act II: Halfway to Aged (Pages 11–22)

**Pages 11–14**

- **Pages 11–12:** Eighteen RNA samples (`3` batches × `2` states [dry vs. `CAAT`] × `3` replicates) fly to Vienna BioCenter Core Facilities for `HiSeq V4` (`2×125` bp) sequencing. At Marburg, Fabian Haas and Stefan Rensing assemble `26,234` *Eruca sativa* transcripts `de novo`.

- **Pages 13–14:** The `PCA` plot (`Figure 3A`) renders across the screen. Dry `Earth` and `Earth-WS` cluster on the left; `CAAT`-aged batches cluster tightly on the right (only `44` DEGs separate `Space CAAT` from `Earth CAAT`). Sitting right between them in no-man's-land is **dry `Space` seed**.

- **Haas (Dialogue):** *"Spaceflight alone shifted `773` genes compared to `Earth`—and **`73%` of those spaceflight DEGs** are the exact same genes triggered by artificial ageing."*

**Pages 15–18 (Molecular Interior — Inside the Dry Embryo)**

- **Pages 15–16:** Inside a dormant `Space` seed cell. `40S` and `60S` ribosomal subunit transcripts are drawn down—just like in `CAAT`-aged seeds—slowing the translational restart when water arrives.

- **Pages 17–18:** At the same time, `'response to radiation'`, `'response to heat'`, and `'protein folding'` pathways glow hot: `HSP90-1` (`+23%` vs. `Earth`), `HSP90-2-like` (`+31%`), `DNAJ` chaperones, `HSFA7a-like`, catalases, and `HY5` (echoing `OSD-296`'s `UV-B` protector!), alongside `ATM` and `DNA ligase 1` patching double-strand breaks and excision lesions.

- **Leubner-Metzger (Caption):** *"Even in a dry, metabolically quiet seed inside a pressurized cabin, six months of orbital radiation and environment leaves a molecular scar—half ageing, half radiation defense."*

**Pages 19–22**

- **Pages 19–20:** Comparison of `CAAT` DEG counts (`Table 1`): `Earth-WS` shifts `2,810` genes and `Earth` shifts `2,532`, while `Space` shifts only `1,859`—because `Space` seeds have *already* walked partway down the ageing road before `CAAT` even begins.

- **Pages 21–22:** The team cross-checks packaging (`Earth` at `22°C` vs. `Earth-WS` at `14°C`, `942` DEGs) to cleanly isolate pure spaceflight effects from room-temperature packet storage.

### Act III: Protecting the Seed Vaults of Orbit (Pages 23–32)

**Pages 23–26**

- **Pages 23–24:** Leubner-Metzger and Fraser trace the mission takeaway for future Moon and Mars voyages: six months in LEO barely dents *total* viability, but multi-year deep-space transit without cold, low-humidity, radiation-shielded stowage will erode vigor fast.

- **Pages 25–26:** UK school classrooms light up in a nationwide montage—thousands of students measuring rocket leaves grown from blue and red packets, unaware of the `26,234`-transcript story unfolding inside those tiny seeds.

**Pages 27–30 (Epilogue Montage)**

- **Pages 27–28:** April 2020: *Life* publishes `PMC7235897`, and NASA `OSDR` archives `OSD-301` (`GLDS-301`, `PRJNA606141`).

- **Pages 29–30:** Final panel transitions from the repressed `40S`/`60S` ribosomes of dry *Eruca* seeds to the nucleolus of *Arabidopsis* seedlings (`OSD-313`), where `NUC1` and `NUC2` nucleolin mutants prepare to face red light and darkness.

**Pages 31–32 (Double-Page Infographic Spread)**

- *See Section 4 below for the complete Pages 31–32 Mission Debrief layout.*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread — Page 31: Mission Stowage & Seed Physiology

- **Payload & Timeline:** `2 kg` *Eruca sativa* (`TZ 5007`) flown on **Soyuz `TMA-18M`** (Sept 2, 2015 → March 2, 2016; `6` months on ISS, `Principia` / Tim Peake), followed by `>5,000` UK schools.

- **Three Seed Batches:** `Earth-WS` (`14°C`, `25% RH`, un-packaged), `Earth` (red foil, `~22°C`, `6.3% ± 0.1%` moisture), and `Space` (blue foil, `8.0% ± 1.0%` moisture).

- **Germination & Membrane Integrity:**

  - Viability & nutrition preserved: `95–100%` germination, normal seedlings, unchanged carotenoids, tocopherols, and chlorophyll.

  - Vigor reduced: `29°C` `TR`/`ER` delayed by `2.0 h` / `1.6 h`; `20°C` `t50%` delayed `1.1 h`; `24 h` solute leakage (`EC`) **`~1.3-fold` higher** in `Space` seeds.

- **Controlled Artificial Ageing (`CAAT`, `70% RH`, `35°C`):** `Space` `t50%` lagged `Earth` by **`1.2 h` (`0d`), `2.7 h` (`4d`), `9.5 h` (`8d`), and `21 h` (`15d`)** (`15d CAAT` increased `Space` `t50%` by `46.4 h` vs. `26.6 h` in `Earth`).

### Right Spread — Page 32: Dry-Seed Transcriptome & Partial Ageing

- **Sequencing & Assembly:** `18` RNA-seq libraries (`3` batches × dry/`CAAT` × `3` reps) on Illumina `HiSeq V4` (`2×125` bp); `de novo` *E. sativa* reference (`26,234` transcripts; `NOISeqBIO`).

- **DEG Counts & `73%` Overlap (`PMC7235897`):**

  - Dry `Space vs. Earth`: **`773` DEGs** (`73%` shared with `CAAT` ageing DEGs); `Space vs. Earth-WS`: `1,313` DEGs; `Earth vs. Earth-WS`: `942` DEGs.

  - `CAAT`-induced DEGs: `2,810` (`Earth-WS`), `2,532` (`Earth`), `1,859` (`Space`); only `44` DEGs remained between `Space CAAT` and `Earth CAAT`.

- **Key Molecular Pathways:**

  - **Downregulated (Space & `CAAT`):** `40S` and `60S` ribosomal subunit genes (transcription/translation machinery).

  - **Upregulated (`Space`):** `'Response to radiation'`, `'response to heat'`, `'protein folding'` — `HSP90-1` (`+23%`), `HSP90-2-like` (`+31%`), `DNAJ` chaperones, `HSFA7a-like`, catalases, `HY5`, and DNA repair (`ATM`, `DNA ligase 1`, `DSB`/`NER`/`PR` pathways).

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "series": "Roots in Orbit: The NASA OSDR Plant Chronicles",
  "volume": 31,
  "title": "The Slow Clock in Dry Seeds",
  "accessions": ["OSD-301", "GLDS-301"],
  "doi": "10.26030/wnm5-8942",
  "bioproject": "PRJNA606141",
  "skipped_non_plant_accessions": ["OSD-297 through OSD-300"],
  "primary_publication": {
    "citation": "Chandler JO et al. (2020) Life 10(4):49",
    "pmcid": "PMC7235897",
    "doi": "10.3390/life10040049"
  },
  "mission": {
    "name": "RHS / UKSA / ESA 'Rocket Science' (Principia Mission)",
    "vehicle": "Soyuz TMA-18M",
    "launch_date": "2015-09-02",
    "return_date": "2016-03-02",
    "duration": "6 months in pressurized ISS cabin"
  },
  "hardware": [
    "Blue/Red foil seed packets (2 kg Eruca sativa payload)",
    "CAAT chambers (2 mL Eppendorf tubes, 70% RH over 25 g/100 mL LiCl, 35C)",
    "Electrical conductivity (EC) vigor meter",
    "Illumina HiSeq V4 (2x125 bp PE, n=18)"
  ],
  "organisms_and_genotypes": [
    "Eruca sativa Mill. (cultivar TZ 5007, lot 09835147)"
  ],
  "cast_added": [
    "Gerhard Leubner-Metzger (Royal Holloway)",
    "Jake O. Chandler (Royal Holloway)",
    "Fabian B. Haas & Stefan A. Rensing (University of Marburg)",
    "Paul D. Fraser (Royal Holloway)",
    "Tim Peake (ESA Astronaut)"
  ],
  "continuity_hook_next": "OSD-313 (Arabidopsis nucleolin NUC1/NUC2 mutants under red light vs. darkness, skipping non-plant OSD-302 through OSD-312)"
}

```

Say **"Go on"** when you're ready for **Volume 32**.
