---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 23
title: "The Methylation Veil"
accession: OSD-217
script_status: partial
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 53)
---

> [!NOTE]
> Script status **partial**: 32/32 pages have their own heading; condensed ranges: 5-10, 15-18, 19-22, 23-26, 27-30.
## 1. Volume Metadata Header

- **Series / Volume:** *Roots in Orbit: The NASA OSDR Plant Chronicles* — Volume 23

- **Chapter Title:** *The Methylation Veil*

- **OSDR Accession:** `OSD-217` (*Characterization of Epigenetic Regulation in an Extraterrestrial Environment: The Arabidopsis Spaceflight Methylome*)

- **GeneLab ID:** `GLDS-217`

- **Version & Release Date:** Version 3 (Submitted: `2-Mar-2017`; Initial Release: `20-Mar-2019`; Updated: `25-Jun-2024`; dataset size: `429.19 GB`)

- **Study DOI:** `10.26030/f05z-e688`

- **Source Accession:** `GSE95646` (GEO; `24` samples total: `12` WGBS `GSM2517002`–`GSM2517013` and `12` RNA-Seq `GSM2516794`–`GSM2516805`; derived WGBS tarballs indexed under `GSE95594`)

- **Payload & Mission:** **APEX03-2** (*Advanced Plant Experiment 03-2*, also known as **TAGES-ISA** — *Transgenic Arabidopsis Gene Expression System-Intracellular Signaling Architecture*), flown aboard **SpaceX-5 (`CRS-5`)** (`01/10/2015`–`02/11/2015`) to the **International Space Station (`ISS`)** Columbus Module, grown in the **Vegetable Production System (`VPS/Veggie`)**.

- **Primary Publication:** Zhou, M., Sng, N.J., LeFrois, C.E., Paul, A.-L., & Ferl, R.J. (2019). *Epigenomics in an extraterrestrial environment: organ-specific alteration of DNA methylation and gene expression elicited by spaceflight in Arabidopsis thaliana*. *BMC Genomics* (PMID: `30866818`, DOI: `10.1186/s12864-019-5554-z`).

- **Organism & Genotype:** *Arabidopsis thaliana* wild-type cultivar Wassilewskija (`WS`, Ferl lab line propagated `~25` years, ABRC stock `CS915`), dissected into **root** and **leaf** tissues (`n = 3` biological replicates per organ × condition).

- **Hardware & Conditions:**

  - Dry, sterilized seeds plated aseptically on `10 cm^2` `0.5% Phytagel` / `0.5× MS` plates, wrapped in light-tight black `Duvetyne` cloth, and held dormant at `4–10 °C` until unwrapped on orbit.

  - Grown `11 days` vertically (`perpendicular` to overhead `Veggie` LEDs at `100–135 µmol m^-2 s^-1` PAR) on the `ISS` Columbus Module; ground controls grown `11 days` in a `Veggie` ground unit inside the **ISS Environmental Simulator (`ISSES`)** at Kennedy Space Center (`KSC`) on a `48-h` delay mirroring flight temperature, `CO2`, and lighting.

- **Preservation & Assays:** Harvested on orbit by astronaut **CDR Butch Wilmore** into **Kennedy Space Center Fixation Tubes (`KFTs`)** with `RNAlater` (`1` plate/KFT), frozen at `-80 °C` in `MELFI`, and returned via `SpaceX-5`.

  - **Whole-Genome Bisulfite Sequencing (`WGBS`):** Modified phenol/chloroform gDNA extraction (LeFrois et al., 2016); `Covaris S220` shearing (`~400 bp`), `NEBNext Ultra` methylated adaptors, `EZ DNA Methylation Direct` (`Zymo`), `EpiMark` hot-start Taq (`13–15` cycles), sequenced on **Illumina `HiSeq 3000`** (`2 × 101 bp`, pooled `60:40` RNA-Seq:WGBS); analyzed with `Trimmomatic v0.36`, `cscall`, `BSMAP v2.87` (`WS` reference `ws_0.v7.allPlusChlMito-CG`), and `MOABS mcomp v1.3.4` (`P < 0.01`, `≥ 20×` coverage).

  - **RNA-Seq:** `RNeasy Plant Mini Kit`, `NEBNext Ultra Directional`, **Illumina `HiSeq 3000`** (`2 × 101 bp`), mapped to `TAIR10` via `STAR` + `RSEM` + `edgeR` (plus GeneLab `STAR v2.7.1a` / `DESeq2 v1.30.0`).

- **Chronology Note:** `OSD-214` (mouse bone marrow), `OSD-215` (*Bacillus subtilis* HARV), and absent `OSD-216` are skipped; `OSD-217` follows `OSD-213` (Vol. 22) as the next sequential plant study in OSDR.

## 2. Dramatis Personae (Grounded in Study Data)

- **Dr. Mingqi Zhou (Lead Author, University of Florida):** Epigeneticist and plant molecular biologist leading the first gene-expression-correlated, organ-specific, whole-genome DNA methylation survey of plants germinated and grown entirely in orbit.

- **Natasha J. Sng & Collin E. LeFrois (University of Florida):** Co-authors who engineered the dormant `Duvetyne`-wrapped seed-plate stowage protocol and the modified phenol/chloroform gDNA extraction that rescued `RNAlater`-fixed `WS` tissues from spin-column interference.

- **Dr. Anna-Lisa Paul & Dr. Robert J. Ferl (Principal Investigators, University of Florida):** Returning from `OSD-208` (Vol. 20) and `OSD-210` (Vol. 21), they test a deeper question aboard `SpaceX-5`: when `ISS` seedlings look morphologically normal yet alter hundreds of genes, is the **epigenome** rewriting their regulatory memory?

- **CDR Barry "Butch" Wilmore (NASA Astronaut, ISS Expedition 42):** Station commander who unwrapped the dormant `APEX03-2` plates inside `Veggie` on the Columbus Module and harvested `11-day-old` seedlings into triple-contained `KFTs`.

- **The Three Epigenetic Contexts (`5mC`):**

  - **`CG` (`MET1` / `DDM1` / `VIM`s):** Symmetric maintenance methylation—shows sharper `< 10%` and `> 90%` extremes in spaceflight leaves.

  - **`CHG` (`CMT3` / `SUVH4`):** Plant-specific symmetric methylation—elevated across protein-coding gene bodies and `±2 kb` flanks in spaceflight **leaves**, while **roots** remain flat.

  - **`CHH` (`CMT2` / `RdDM`):** Asymmetric *de novo* methylation—rising alongside `CHG` in orbital leaves and anchoring `46%+` of methylation-linked DEGs to **Reactive Oxygen Species (`ROS`)** signaling.

## 3. 32-Page Chapter Script

### Act I: Black Cloth & Red-Blue LEDs (Pages 1–10)

**Page 1 (Splash Page)**

- **Visual:** `January 10, 2015` — a **Falcon 9** carrying **SpaceX-5 (`CRS-5`)** thunders off Cape Canaveral. Cutaway inset: tucked inside cold stowage (`4–10 °C`) are `10 cm^2` `0.5% Phytagel` plates dotted with dry, dormant *Arabidopsis* `WS` (`CS915`) seeds, swaddled in light-tight black `Duvetyne` cloth.

- **Caption (Narration):** *"On Earth, plants rewrite their DNA methylation when drought, salt, or pathogens strike—leaving epigenetic bookmarks for the next cell division."*

- **Caption:** *"In January 2015, APEX03-2 sent dormant seeds to the ISS to ask: does spaceflight leave its own signature on the methylome?"*

**Page 2 (4-Panel Grid)**

- **Panel 1:** University of Florida SpacePlants Lab: Natasha Sng prepares `WS` (`CS915`) seeds—a lab line maintained for `~25` years—plating them aseptically onto `0.5× MS` / `0.5% Phytagel` square plates.

- **Panel 2:** Each plate is wrapped in light-tight black `Duvetyne` cloth to hold the seeds in suspended dormancy through launch delays and `4–10 °C` stowage.

- **Panel 3:** Inside the **Columbus Module** of the `ISS`: astronaut **Butch Wilmore** opens the **Vegetable Production System (`Veggie`)** bellows, unwraps the black cloth, and mounts the plates vertically (`perpendicular` to the overhead LED panel).

- **Panel 4:** Magenta-white `Veggie` LEDs (`100–135 µmol m^-2 s^-1` PAR) bathe the agar surface, waking the dormant embryos into `11` days of orbital growth.

**Page 3 (3-Panel Vertical)**

- **Panel 1:** `48` hours behind orbit at Kennedy Space Center: the **ISS Environmental Simulator (`ISSES`)** chamber mirrors the exact temperature, `CO2`, and `Veggie` light logs beamed down from Columbus.

- **Panel 2:** Day 11 on the `ISS`: `WS` seedlings stretch across the `Phytagel`—no monstrous deformities, yet subtle root-growth and cell-wall habits mark their orbital life.

- **Panel 3:** Wilmore slides each harvested plate into a **KSC Fixation Tube (`KFT`)**, flooding the seedlings with `RNAlater` behind three levels of liquid containment, then stows the tubes at `-80 °C` in `MELFI`.

**Page 4 (4-Panel Grid)**

- **Panel 1:** `February 11, 2015` — `SpaceX-5` splashes down; frozen `KFTs` return to KSC, are transferred into `50 mL` Falcon tubes, and shipped to Gainesville.

- **Panel 2:** Under a dissecting scope on chilled blocks, `RNAlater`-preserved seedlings are cleanly separated into **root** and **leaf** organs (`3` biological replicates each for flight and ground).

- **Panel 3:** Collin LeFrois hits a classic spaceflight snag: residual `RNAlater` salts jam commercial spin-column gDNA kits. He pivots to his modified **phenol/chloroform** protocol, recovering clean `~5 kb` genomic DNA (`700–1,700 ng` per sample).

- **Panel 4:** Parallel RNA extraction (`RNeasy Plant Mini Kit`) captures matching transcriptomes from the exact same pools of roots and leaves.

**Pages 5–10 (6-Page Sequence: The Dual-Library Pipeline)**

- **Page 5:** `Covaris S220` ultrasonication shears gDNA into `~400 bp` fragments; `1:1` `AMPure` beads sweep away `< 100 bp` shards, yielding `300–750 ng` of clean DNA.

- **Page 6:** `NEBNext Ultra` ligates **methylated** barcoded adaptors—protecting adaptor cytosines from the harsh chemical conversion ahead.

- **Page 7:** **Sodium Bisulfite Conversion (`EZ DNA Methylation Direct`):** Unmethylated cytosines (`C`) deaminate into uracil (`U`, later read as `T`), while `5-methylcytosine` (`5mC`) stands its ground as `C`.

- **Page 8:** `EpiMark` hot-start Taq amplifies `13–15` cycles; `SYBR Safe` blue-light gel excision (`250–500 bp`, `350 bp` avg) avoids UV DNA damage.

- **Page 9:** Clever sequencing trick at `UF ICBR`: instead of burning `20%` of a lane on `PhiX` to balance bisulfite's AT-rich base bias, Mingqi Zhou pools the **`12` WGBS libraries (`40%`)** directly with the **`12` RNA-Seq libraries (`60%`)** across three **Illumina `HiSeq 3000`** lanes (`2 × 101 bp`).

- **Page 10:** Quality check: `Trimmomatic` drops `< 0.01%` low-quality reads (`22.45M–39.07M` reads/sample), `cscall` removes `0.05–0.08%` incomplete conversions, chloroplast DNA shows **`~99%` bisulfite conversion**, and `BSMAP v2.87` maps **`87.57–90.52%`** of reads to the `WS` genome (`ws_0.v7.allPlusChlMito-CG`).

### Act II: Two Organs, Two Methylomes (Pages 11–22)

**Pages 11–12 (Double-Page Spread: Calm on the Surface, Ripples Underneath)**

- **Visual:** Left page shows `IGV` whole-chromosome `5mC` tracks (`CG`, `CHG`, `CHH`) for roots and leaves—at macro scale, flight and ground profiles look nearly identical. Right page zooms into `Figure 2d–e` methylation-level histograms:

  - **Roots (`Fig. 2d`):** Flight and ground curves overlap seamlessly.

  - **Leaves (`Fig. 2e`):** Spaceflight shifts the `CG` distribution toward both extremes (`< 10%` and `> 90%`) and pushes `CG`, `CHG`, and `CHH` toward higher methylation!

- **Dialogue (Zhou):** *"Spaceflight didn't scramble the whole methylome. It worked with surgical precision—and it treated leaves and roots like two different worlds."*

**Page 13 (4-Panel Grid)**

- **Panel 1:** Metagene profile (`Figure 3`): `±2 kb` upstream of `TSS`, gene body (`TSS → TTS`), and `±2 kb` downstream.

- **Panel 2:** **Roots:** `CG`, `CHG`, and `CHH` curves for spaceflight and ground lie virtually on top of one another.

- **Panel 3:** **Leaves:** **`CHG` and `CHH` methylation rises uniformly** across protein-coding gene bodies and their `2 kb` flanks in spaceflight!

- **Panel 4:** **Narration:** *"Why `CHG` and `CHH` in leaves? Unlike `CG` maintenance, `CHG` (`CMT3`) and `CHH` (`CMT2` / `RdDM`) are dynamic stress-responsive marks."*

**Page 14 (3-Panel)**

- **Panel 1:** `MOABS mcomp` (`P < 0.01`, `≥ 20×` coverage in `≥ 2/3` replicates) scans cytosine-by-cytosine across the `WS` genome (`Figure 4`).

- **Panel 2:** **Roots:** **`26,545` Differentially Methylated Cytosines (`DmCs`)**, including **`215`** clustered inside `100 bp` Differentially Methylated Regions (`DMRs`).

- **Panel 3:** **Leaves:** **`23,967` `DmCs`**, including **`279`** inside `100 bp` `DMRs`.

**Pages 15–18 (4-Page Sequence: The Transcriptome Meets the Methylome)**

- **Page 15:** `STAR` + `RSEM` + `edgeR` call **`800` DEGs** (`FDR < 0.05`, `≥ 2-fold`) across the same `Veggie` seedlings: **`743` DEGs in leaves**, **`75` DEGs in roots**, and only **`18`** shared between both organs (`Figure 6a`)!

- **Page 16:** Intersecting `DEGs` with `DmC`-bearing genes (`Figure 6b`):

  - **Leaves:** **`143` DEGs** (`~1/5` of all leaf DEGs) carry spaceflight-altered methylation (`±2 kb` or gene body).

  - **Roots:** **`21` DEGs** carry spaceflight-altered methylation.

- **Page 17:** **The `46%` Revelation:** Functional enrichment of those methylation-linked DEGs lights up in crimson—**over `46%` belong to Reactive Oxygen Species (`ROS`) signaling pathways!**

- **Page 18:** Split-panel mechanism: in `Veggie`, orbital `ROS` bursts don't just trigger transient transcription factors—they leave `CG`/`CHG`/`CHH` methylation shifts across promoters, gene bodies, and `2 kb` downstream regions, correlating both positively and negatively with gene expression.

**Pages 19–22 (4-Page Sequence: Why Roots and Leaves Diverge)**

- **Page 19:** Top-down view of `Veggie` hardware: leaves face `100–135 µmol m^-2 s^-1` LEDs directly, driving photosynthesis, chloroplast `ROS`, and heavy `CHG`/`CHH` remodeling (`743` DEGs, `143` methylated).

- **Page 20:** Meanwhile, roots crawl along the translucent `0.5% Phytagel` surface—showing `26,545` `DmCs` in their methylome yet only `75` DEGs (`21` methylated) at Day 11.

- **Panel/Caption:** *"Even inside `Veggie`—hardware built to keep plants healthy for astronauts—Arabidopsis still epigenetically marks the spaceflight environment as stress."*

- **Page 21:** **Dialogue (Paul):** *"In Vol. 22, `Shenzhou 8` calli showed us `ROS` and `MAPK` signals at Day 5. Here, `11-day` `ISS` seedlings show us the epigenetic layer underneath."*

- **Page 22:** **Dialogue (Ferl):** *"And because terrestrial `CHG`/`CHH` methylation can carry stress memory across cell divisions—and even generations—we just opened the door to spaceflight epigenetics."*

### Act III: The Epigenomic Blueprint (Pages 23–32)

**Pages 23–26 (4-Page Sequence: From `SpaceX-5` to `OSD-217`)**

- **Page 23:** `March 2, 2017` — `GSE95646` and `OSD-217` (`GLDS-217`, `429.19 GB`) are submitted; `March 20, 2019` — public release alongside Zhou et al. in *BMC Genomics* (`PMC6416986`).

- **Page 24:** Later GeneLab re-processing (`Version 3`, `June 25, 2024`) standardizes the `12` RNA-Seq runs with `STAR v2.7.1a`, `RSEM v1.3.1`, and `DESeq2 v1.30.0`, making `OSD-217` plug-and-play for cross-mission meta-analyses.

- **Page 25:** Continuity link: `APEX03-2` wasn't finished with `WS` wild-type alone—right next to `OSD-217` in the `SpaceX-5` manifest sits **`OSD-218`**, tracking *Arabidopsis* `sku5` root-skewing mutants at `4` and `8` days.

- **Page 26:** Foreshadowing `APEX-04` (later `2021` work by Califar, Paul, and Ferl): `OSD-217`'s `WS` methylome will directly inspire flying methylation-deficient mutants (`met1-7` and `elp2-5`) to test whether plants *need* DNA methylation to survive orbit.

**Pages 27–30 (4-Page Sequence: The Three-Layer Spaceflight Plant)**

- **Page 27:** Layer 1 (Vol. 21, `OSD-210`): **The Genome** — physical `DSB`s and translocations from cosmic radiation.

- **Page 28:** Layer 2 (Vol. 22, `OSD-213`): **The Transcriptome** — `MAPK`, `WRKY`, and `ROS` genes firing in orbit.

- **Page 29:** Layer 3 (Vol. 23, `OSD-217`): **The Epigenome** — `26,545` root `DmCs` and `23,967` leaf `DmCs` tuning `ROS`-linked gene expression in `Veggie`.

- **Page 30:** Closing frame: `Veggie`'s magenta LEDs glow softly in the Columbus Module as `11-day-old` `WS` roots trace their gentle arcs across the agar.

**Pages 31–32 (Full-Bleed Mission Debrief Infographic Spread)** *(Detailed in Section 4 below.)*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31): `APEX03-2` / `TAGES-ISA` Flight Operations & Dual-Omics Pipeline

- **Header Banner:** `OSD-217 / GLDS-217 (GSE95646) — SpaceX-5 (CRS-5) Veggie Methylome & Transcriptome`

- **Flight & Hardware Parameters:**

  - **Mission:** `SpaceX-5` (`01/10/2015–02/11/2015`), `ISS` Columbus Module **Veggie (`VPS`)** vs. KSC **ISSES** ground simulator (`48-h` telemetry delay).

  - **Organism & Growth:** *Arabidopsis thaliana* `WS` (`CS915`), dormant `Duvetyne`-wrapped `10 cm^2` `0.5% Phytagel` / `0.5× MS` plates (`4–10 °C` stowage), grown `11 days` vertically at `100–135 µmol m^-2 s^-1` LED light.

  - **Harvest & Preservation:** `CDR Butch Wilmore` → `KFTs` (`RNAlater`) → `-80 °C` `MELFI` → `n = 3` root & `n = 3` leaf replicates/condition (`24` total libraries: `12` WGBS `GSM2517002–013` + `12` RNA-Seq `GSM2516794–805`).

- **Sequencing & QC Pipeline (`HiSeq 3000`, `2 × 101 bp`, `60:40` RNA-Seq:WGBS pool):**

  - **WGBS:** Modified phenol/chloroform gDNA (`~5 kb`, sheared to `~400 bp`), `EZ DNA Methylation Direct` (`~99%` chloroplast conversion), `22.45M–39.07M` trimmed reads/sample, `87.57–90.52%` aligned (`BSMAP v2.87` to `ws_0.v7.allPlusChlMito-CG`), `MOABS mcomp` (`P < 0.01`, `≥ 20×`).

### Right Spread (Page 32): Organ-Specific Methylation & Expression Findings (`PMC6416986`)

- **Global & Genic Methylation Patterns:**

  - **Genome-Wide Averages:** Similar overall `CG`/`CHG`/`CHH` levels between flight and ground—no wholesale erasure or hypermethylation.

  - **Organ-Specific Shift:** **Leaves** show elevated `CHG` and `CHH` methylation across protein-coding gene bodies and `±2 kb` flanks, plus a `CG` shift toward `< 10%` and `> 90%` extremes; **roots** show virtually identical genic averages.

- **Quantitative Tally (`Spaceflight` vs. `Ground Control`):**

  - **Roots:** **`26,545` `DmCs`** (`215` in `100 bp` `DMRs`, `FDR < 0.01`) | **`75` DEGs** (`FDR < 0.05`, `≥ 2-fold`) | **`21` DEGs** also differentially methylated.

  - **Leaves:** **`23,967` `DmCs`** (`279` in `100 bp` `DMRs`, `FDR < 0.01`) | **`743` DEGs** (`FDR < 0.05`, `≥ 2-fold`) | **`143` DEGs** (`~1/5`) also differentially methylated.

  - **Shared DEGs (Root ∩ Leaf):** `18` genes (`800` total unique DEGs).

- **Functional Convergence:** **Over `46%`** of the differentially expressed AND differentially methylated genes are tied to **Reactive Oxygen Species (`ROS`) signaling**.

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "volume": 23,
  "osdr_accession": "OSD-217",
  "glds_id": "GLDS-217",
  "source_accession": "GSE95646",
  "payload_mission": "APEX03-2 (TAGES-ISA) aboard SpaceX-5 (CRS-5, 01/10/2015-02/11/2015) in ISS Veggie (VPS)",
  "organism": "Arabidopsis thaliana (WS, ABRC CS915; 11-day roots and leaves)",
  "new_hardware_introduced": [
    "Vegetable Production System (VPS/Veggie) on ISS Columbus Module + KSC ISSES 48-h delayed ground simulator",
    "Light-tight Duvetyne cloth passive dormancy stowage (4-10 C)",
    "Modified LeFrois phenol/chloroform gDNA extraction for RNAlater-preserved WGBS"
  ],
  "molecular_characters": [
    "5-methylcytosine (5mC) in CG, CHG, and CHH contexts",
    "26,545 root DmCs (215 in DMRs) & 23,967 leaf DmCs (279 in DMRs)",
    "143 leaf DEGs & 21 root DEGs co-localized with differential DNA methylation",
    "ROS signaling network (>46% of differentially expressed & methylated genes)"
  ],
  "continuity_hooks": [
    "First organ-specific whole-genome bisulfite methylome + RNA-seq correlation in plants germinated and grown in space",
    "Establishes organ-specific CHG/CHH genic hypermethylation in spaceflight leaves vs. stable genic averages in roots",
    "Skipped OSD-214 (mouse bone marrow), OSD-215 (Bacillus subtilis), and OSD-216 (absent)",
    "Next sequential plant accession: OSD-218 (APEX03-2 / SpaceX-5 Arabidopsis root-skewing sku5 & developmental timecourse)"
  ]
}

```

Say **"Go on"** when you're ready for **Volume 24**.
