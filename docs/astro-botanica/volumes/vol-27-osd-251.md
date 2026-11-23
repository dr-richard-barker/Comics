---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 27
title: "Blue Light on the Moon"
accession: OSD-251
script_status: partial
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 61)
---

> [!NOTE]
> Script status **partial**: 32/32 pages have their own heading; condensed ranges: 27-30.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles* — **Volume 27**

- **Title:** *Blue Light on the Moon*

- **OSDR / GeneLab Accession:** `OSD-251` / `GLDS-251` (NASA OSDR | NASA Open Data Portal) | DOI: `10.26030/9bnk-7248`

- **Chronology Note:** `OSD-224` through `OSD-250` are skipped (non-plant studies, including ISS particulates metagenomics `OSD-224` and rodent/muscle studies `OSD-225`, `OSD-227`, and `OSD-228`); Volume 27 advances from `OSD-223` (Vol. 26, *Plant Signaling in Microgravity*) to `OSD-251` (*Seedling Growth* fractional gravity under blue light).

- **Primary Publication:** Herranz et al. (2019), *Frontiers in Plant Science* 10:1529, DOI `10.3389/fpls.2019.01529` (PMC6889863 | PubMed 31850027)

- **Mission & Vehicles:** **Seedling Growth (`SG1` & `SG2`)** — Set 1 uploaded on **SpaceX CRS-2** (`March 2013`), returned on **CRS-3** (`May 2014`); Set 2 uploaded on **SpaceX CRS-4** (`September 2014`), returned on **CRS-5** (`February 2015`)

- **Hardware:** **European Modular Cultivation System (`EMCS`)** in the ISS Columbus Module, remotely controlled from **`N-USOC`** (Trondheim, Norway), using `TROPI` seed cassettes and **`GLACIER` (`-80 °C`)** freezer

- **Organism & Genotype:** *Arabidopsis thaliana* ecotype Landsberg *erecta* (`Ler`)

- **Assay & Sequencing:** Whole-seedling `RNA-Seq` (`n = 20` samples from `24` cassettes, `10–15` seedlings/extraction), `Macherey-Nagel NucleoSpin`, `Illumina TruSeq` (`3` pools of `6–7` samples) on **Illumina HiSeq 2500 (`125 bp` paired-end)**

## 2. Dramatis Personae (Grounded in Study Data)

- **Dr. Raúl Herranz & Dr. Francisco Javier Medina (Spanish PIs):** Researchers at the Plant Microgravity Lab, Centro de Investigaciones Biológicas (`CSIC`, Madrid), who designed the partial-gravity experiment within the ESA–NASA *Seedling Growth* series (PMC6889863).

- **Dr. Joshua P. Vandenbrink & Dr. John Z. Kiss (US Co-Leads):** Biologists at UNC Greensboro and Louisiana Tech University who discovered root blue-light phototropism in microgravity and led the `RNA-Seq` campaign.

- **Alicia Villacampa & Aránzazu Manzano (CSIC Analysts):** Pre-doctoral fellows who executed `GEDI` self-organizing map mosaics and `BinGO`/`PANTHER` Gene Ontology analyses.

- **William L. Poehlman & Dr. Frank Alex Feltus (Clemson Bioinformaticians):** Processed `125 bp` paired-end reads through `HISAT2`–`StringTie`–`DESeq2` on the Clemson University Palmetto Cluster.

- **The Six Gravity Bins (`Ler`):** Seedlings grown `4 days` under white light (`30–40 μmol m⁻² s⁻¹`) plus `48 hours` under lateral blue LEDs across **microgravity (`μg`, `n = 4`)**, **low gravity (`0.09 ± 0.02g`, `n = 3`)**, **Moon gravity (`0.18 ± 0.04g`, `n = 3`)**, **Mars gravity (`0.36 ± 0.02g`, `n = 3`)**, **reduced Earth gravity (`0.57 ± 0.05g`, `n = 4`)**, and **`1g` control (`0.99 ± 0.06g`, `n = 3`)**.

## 3. 32-Page Chapter Script

### Act I: Six Gravities and a Blue Beam (Pages 1–10)

**Page 1 (Splash Page):** Split-orbit view of **SpaceX Dragon** capsules (`CRS-2` through `CRS-5`) docking with the ISS while inside the Columbus Module, `EMCS` twin rotors spin at calibrated speeds (PMC6889863). **Caption:** *"Volume 26 proved an onboard 1g centrifuge can unmask microgravity. Now, the Seedling Growth consortium dials that centrifuge across six stops—from weightlessness, past the Moon and Mars, back to Earth."*

**Page 2 (4-Panel Grid):**

- *Panel 1:* `N-USOC` control room in Trondheim, Norway: remote telemetry commands hydrate dormant *Arabidopsis* `Ler` seeds inside `EMCS` `TROPI` cassettes.

- *Panel 2:* Diagram of the `6` nominal centrifuge settings (`μg` stopped, `0.1g`, `0.3g`, `0.5g`, `0.8g`, `1.0g`) and how radial distance (`r`) from the rotor hub creates exact `g` values across each Experimental Container's cassettes (`Fig. 1B`).

- *Panel 3:* `Days 1–4` (`96 h`): white LEDs (`30–40 μmol m⁻² s⁻¹`) shine from above, driving uniform germination.

- *Panel 4:* `Days 5–6` (`48 h`): white LEDs switch off; **unidirectional blue LEDs** ignite from the *left* side of each cassette.

**Page 3 (3-Panel Sequence):**

- *Panel 1:* Close-up of `6-day-old` seedlings downlinked from the `EMCS` video camera (`Fig. 1C`): at **`μg` (`CC116`)**, hypocotyls bend left toward the blue beam—and **roots curve away/react with positive blue-light phototropism**.

- *Panel 2:* At **`0.07g` (`CC136`)**, root phototropism weakens; by **`0.21g` (`CC156`, Moon-`g`)** and **`1.05g` (`CC175`)**, gravity reclaims the roots completely.

- *Panel 3:* **Dialogue (Vandenbrink):** *"At 0.3g and above, gravitropism wins outright. The tug-of-war happens below—between zero gravity and the Moon."*

**Page 4 (5-Panel Grid):**

- *Panel 1:* At `144 h`, seedlings are frozen at `-80 °C` inside the ISS **`GLACIER`** freezer.

- *Panel 2:* Dry-ice return via **SpaceX Dragon** (`CRS-3` / `CRS-5`) and immediate `RNAlater®` preservation.

- *Panel 3:* `10–15` whole seedlings per cassette (`20` samples from `24` cassettes) yield total RNA via `Macherey-Nagel NucleoSpin` + DNase.

- *Panel 4:* David H. Murdoch Research Institute (Kannapolis, NC): `20` `TruSeq` libraries pooled equimolarly (`6–7` per lane, `3` lanes) for **`125 bp` paired-end** sequencing on **Illumina HiSeq 2500**.

- *Panel 5:* Clemson University Palmetto Cluster: `Trimmomatic` → `HISAT2 v2.1.0` (`TAIR10`) → `StringTie v1.3.4` → `DESeq2 v1.18.1` (`GLDS-251`).

**Page 5 (4-Panel Grid):**

- *Panel 1:* Poehlman and Feltus group the `20` samples by exact radial `g`-level: `μg` (`4`), **`0.09 ± 0.02g`** low-`g` (`3`), **`0.18 ± 0.04g`** Moon-`g` (`3`), **`0.36 ± 0.02g`** Mars-`g` (`3`), **`0.57 ± 0.05g`** reduced Earth-`g` (`4`), and **`0.99 ± 0.06g`** `1g` control (`3`).

- *Panel 2:* Venn diagram A (`p < 0.05` uncorrected): `μg` (`2,067`), **low-`g` (`2,552`)**, Moon-`g` (`2,088`), Mars-`g` (`978`), `0.57g` (`411`).

- *Panel 3:* Venn diagram B (`FDR q < 0.05` stringent): `μg` (**`296`**), **low-`g` (`568`)**, Moon-`g` (**`123`**), Mars-`g` (**`19`**), `0.57g` (**`2`**).

- *Panel 4:* **Dialogue (Herranz):** *"Look at `0.09g`. It has nearly double the FDR-significant genes of microgravity—and almost five times as many as the Moon."*

**Page 6 (3-Panel Sequence):**

- *Panel 1:* Zooming into the center of the `5`-way FDR Venn diagram (`Fig. 2B`): only **one single gene** is differentially expressed across *every* reduced-gravity condition—**`AT4G21560` (`VPS28-1`)**, a vacuolar protein sorting homolog (PMC6889863).

- *Panel 2:* Just beside it, `AT5G45428` appears in every bin except `0.57g`.

- *Panel 3:* Expanding to the three lowest tiers (`μg`, `0.09g`, Moon-`g`): **`14` shared genes** (`Ca²⁺` signaling, redox status, and stress response) lock in a core low-gravity signature.

**Page 7 (4-Panel Grid):**

- *Panel 1:* `BinGO` GO-term bubble chart for **`μg` only (`296` DEGs):** **light perception and photosynthesis** (`photosynthetic antenna proteins`, `porphyrin & chlorophyll metabolism`, `ER protein processing`) dominate.

- *Panel 2:* `BinGO` for **low-`g` (`0.09g`, `568` DEGs):** **"Response to General Stress"** explodes (`FDR q < 10⁻¹⁰`), alongside chemical, hormone, and nutrient-accessibility pathways.

- *Panel 3:* `BinGO` for **Moon-`g` (`0.18g`, `123` DEGs):** **cell wall and membrane structure/function** (`SUBA4` enrichment in plastid & cell-wall/membrane compartments).

- *Panel 4:* By **Mars-`g` (`0.36g`, `19` DEGs)** and **`0.57g` (`2` DEGs)**, the transcriptome has nearly returned to its `1g` baseline.

**Page 8 (3-Panel Sequence):**

- *Panel 1:* Alicia Villacampa opens **`GEDI v2.1`** (`Gene Expression Dynamics Inspector`) to render `5 × 9` self-organizing map (`SOM`) mosaics across all five reduced-`g` conditions (`Fig. 3`).

- *Panel 2:* Top row (`n = 5,571`, `p < 0.05`) and bottom row (`n = 861`, `q < 0.05`): deep blue down-regulated clusters (`mean log₂ ratio -0.3` to `-0.7`) and red up-regulated clusters in `μg` visibly shrink and fade from left (`μg`) to right (`0.57g`).

- *Panel 3:* Except at **`0.09g`**—where new, intense clusters flare up in a completely distinct spatial pattern!

**Page 9 (4-Panel Grid):**

- *Panel 1:* Aránzazu Manzano extracts the `15` commonly upregulated reduced-`g` genes from the `GEDI` clusters and feeds them into `GeneMANIA` / `Cytoscape v3.6.1` (`Fig. 4`).

- *Panel 2:* A tight interaction web emerges around **`4` F-box / RMI-like / FDB-like proteins** (out of `156` in the genome, including `TIR1` auxin signaling, `AT5G56370`, `AT5G56380`, cell-wall remodeling, and cyclins).

- *Panel 3:* Two membrane-localized hubs (`AT3G44430` and `AT2G34840`) bridge the cell membrane to the F-box network.

- *Panel 4:* **Dialogue (Medina):** *"From `0g` to `0.57g`, the genome tells a story in three acts: phototropism in weightlessness, tropism war at `0.09g`, and cell-wall tensegrity on the Moon."*

**Page 10 (2-Panel Act Break):**

- *Panel 1:* A lone *Arabidopsis* `Ler` seedling suspended between a lateral blue-light beam and a faint `0.09g` vector arrow.

- *Panel 2:* Title card overlay: **ACT II: THE TROPISM WAR AT `0.09g`**.

### Act II: The Tropism War at `0.09g` (Pages 11–22)

**Page 11 (4-Panel Grid):**

- *Panel 1:* Why is **`μg` (`296` DEGs)** *calmer* than **`0.09g` (`568` DEGs)**?

- *Panel 2:* Diagram of root meristem competence: in dark-grown spaceflight (`Matía et al., 2010`), microgravity uncouples cell proliferation from ribosome biogenesis.

- *Panel 3:* Under blue (or red) light in `Seedling Growth`, positive root phototropism provides an external directional cue—preserving meristematic competence and producing **longer roots in `μg` and `1g` than at `0.1g`** (PMC6889863).

- *Panel 4:* **Dialogue (Kiss):** *"Blue light acts as a stand-in compass when gravity vanishes. It calms the gravitational stress response."*

**Page 12 (4-Panel Grid):**

- *Panel 1:* Now zoom into **`0.09g` (`< 0.1g`)**: the lateral blue LED pulls from the left (`90°`), while a whisper-thin `0.09g` centrifugal vector tugs downward.

- *Panel 2:* Statoliths barely settle; both tropisms operate right at their detection threshold—neither able to take command.

- *Panel 3:* `PANTHER` biological process chart (`Fig. 5`): at `0.09g`, **`> 50%`** of uncorrected downregulated DEGs survive FDR correction, flooding stress and **plant nutrient accessibility** categories (`FDR q < 10⁻¹⁰`).

- *Panel 4:* **Dialogue (Herranz):** *"It's not hardware artifacts—the `1g` rotor spun even faster, and `EMCS` scrubs ethylene. At `0.09g`, the plant is caught in a tug-of-war between two faint compasses."*

**Page 13 (3-Panel Sequence):**

- *Panel 1:* Moving up the dial to **Moon gravity (`0.18 ± 0.04g`)**: `123` FDR-significant DEGs.

- *Panel 2:* Blue-light root phototropism is largely suppressed by Moon gravity (`Fig. 1C`), yet cell-proliferation vs. cell-growth imbalance persists—and `GO` terms shift sharply to **cell wall and membrane structure/function**.

- *Panel 3:* **Caption:** *"At Moon-`g`, statoliths begin to orient the root, but the cell wall's tensegrity sensor—graviresistance—is still straining under a sixth of Earth's weight."*

**Page 14 (5-Panel Grid):**

- *Panel 1:* **Mars gravity (`0.36 ± 0.02g`):** Only **`19`** FDR-significant DEGs remain (`978` at `p < 0.05`).

- *Panel 2:* Blue-light root phototropism is completely negated (`≥ 0.3g`).

- *Panel 3:* Meristematic balance (cell proliferation vs. cell growth) is nearly restored to Earth normal, echoing ground partial-`g` clinostat/centrifuge studies (`Manzano et al., 2018`).

- *Panel 4:* **`0.57 ± 0.05g`:** Only **`2`** FDR-significant DEGs remain (`411` at `p < 0.05`).

- *Panel 5:* **Dialogue (Villacampa):** *"For future Martian greenhouses, `0.38g` sits right where Arabidopsis stops panicking and starts growing."*

**Page 15 (4-Panel Grid):**

- *Panel 1:* Zooming back into **`μg`** photosynthesis downregulation: `PSI/PSII` antenna proteins, chlorophyll/porphyrin metabolism, and ER protein processing dip when blue light replaces gravity.

- *Panel 2:* `SUBA4` subcellular localization bar chart (`Supplementary Fig. 1`): Moon-`g` DEGs cluster heavily in **plastid** and **plasma membrane / cell wall** compartments, while `0.09g` stress DEGs scatter broadly across unassigned compartments.

- *Panel 3:* `VPS28-1` (`AT4G21560`) spotlight: the lone gene altered across *all* reduced-`g` bins (`0g` to `0.57g`), pointing to endosomal ESCRT-I sorting as a baseline gravity-sensitive housekeeping node.

- *Panel 4:* Caveat panel: because RNA was extracted from **whole seedlings** (`10–15` per cassette), root-specific tropism signals are averaged with hypocotyls and cotyledons.

**Page 16 (3-Panel Sequence):**

- *Panel 1:* Comparing **Vol. 26 (`OSD-223`, `Col-0` roots, `0.53g–0.88g`, continuous white light)** with **Vol. 27 (`OSD-251`, `Ler` whole seedlings, `0.09g–0.57g`, white + 48 h blue light)**.

- *Panel 2:* Together, the two `EMCS` studies span the **entire fractional-gravity spectrum** from `0.09g` through `0.88g`, revealing non-linear J-shaped stress curves (`0.09g` peak) alongside linear/threshold `g`-sensors (`0.53g–0.88g`).

- *Panel 3:* **Dialogue (Medina):** *"Different ecotypes, different light spectra, different organs—yet both prove that fractional gravity is not a straight line between zero and one."*

**Page 17 (4-Panel Grid):**

- *Panel 1:* `GEDI` mosaic close-up of the `5,571`-gene (`p < 0.05`) vs. `861`-gene (`q < 0.05`) maps: visual proof that global transcriptional repression (`-0.3` to `-0.7` `log₂`) relaxes monotonically once past the `0.09g` anomaly.

- *Panel 2:* `GeneMANIA` dotted-line manual links connect `TIR1` auxin signaling to `F-box` proteins and cyclins—linking gravity perception to cell-cycle control.

- *Panel 3:* Cross-reference to `Valbuena et al. (2018)` (red light in `Seedling Growth`): both **red** and **blue** photostimulation rescue root meristem competence in orbit.

- *Panel 4:* **Caption:** *"Light is not just energy in space; it is architectural scaffolding."*

**Page 18 (3-Panel Sequence):**

- *Panel 1:* Data curation into NASA GeneLab: `GLDS-251` (`OSD-251`, DOI `10.26030/9bnk-7248`) published alongside PMC6889863 on **November 26, 2019**.

- *Panel 2:* Later reprocessed by NASA OSDR (`NF_RCP v2.1.0`) and featured in the 2023 Arabidopsis spaceflight meta-analysis (PMC10027818).

- *Panel 3:* **Caption:** *"Twenty libraries from Madrid, Greensboro, and Clemson—archived as a permanent reference for lunar and Martian agriculture."*

**Page 19 (4-Panel Grid):**

- *Panel 1:* Blueprint for a **Lunar Greenhouse (`0.16g`)**: expect cell-wall/membrane remodeling and mild graviresistance stress; pair with directional blue/red LEDs to stabilize root architecture.

- *Panel 2:* Blueprint for a **Martian Greenhouse (`0.38g`)**: `0.36g` data show `93%` fewer FDR-significant DEGs than `μg` (`19` vs. `296`), signaling near-terrestrial transcriptional stability.

- *Panel 3:* Warning zone (`< 0.1g`, e.g., asteroid mining habitats or low-RPM centrifuges): avoid hovering near `0.09g` with conflicting lateral lighting, where tropism competition peaks.

- *Panel 4:* **Dialogue (Herranz):** *"If you spin a plant centrifuge in space, don't stop at 0.1g—push past the Moon toward Mars."*

**Page 20 (3-Panel Sequence):**

- *Panel 1:* `EMCS` `TROPI` cassettes packed away after `CRS-5` splashdown.

- *Panel 2:* Looking ahead in the OSDR archive: after `Ler` under blue light (`OSD-251`), the next plant studies pivot to **phytochrome mutants** and **new ISS habitats** (`Veggie` and `APH`).

- *Panel 3:* **Caption:** *"The fractional-gravity dial had spoken. Next, the archive turns to new mutants and new orbital greenhouses."*

**Page 21 (2-Panel Sequence):**

- *Panel 1:* Dual-planet horizon: the cratered Moon (`0.18g`) and rusty Mars (`0.36g`) side by side, overlaid with `GEDI` `5 × 9` color tiles fading from blue to neutral.

- *Panel 2:* **Caption:** *"From `0.09g` chaos to `0.36g` calm—every tenth of a g writes a different genome."*

**Page 22 (Full-Bleed Transition):** An *Arabidopsis* root tip illuminated in electric blue against a starry lunar horizon, its `VPS28-1` vacuolar sorting vesicles glowing. **Caption:** *"End of the EMCS blue-light fractional-g run; the next OSDR plant volume awaits."*

### Act III: Synthesis & Mission Debrief (Pages 23–32)

**Page 23 (4-Panel Grid):**

- *Panel 1:* **Three Thresholds of Gravity:** (1) **`< 0.1g` (`0.09g`)** = tropism conflict & `568`-gene stress spike; (2) **Moon (`0.18g`)** = cell-wall/membrane graviresistance (`123` DEGs); (3) **Mars (`0.36g`)** = statolith gravitropism restores near-normal transcriptome (`19` DEGs).

- *Panel 2:* **Phototropic Rescue:** In `μg`, blue light induces root phototropism and reduces general stress DEGs (`296` vs. `568` at `0.09g`).

- *Panel 3:* **Universal Marker:** `VPS28-1` (`AT4G21560`) is the sole FDR-significant DEG across all five reduced-`g` levels.

- *Panel 4:* **F-Box Hub:** `4` F-box/RMI-like genes (`TIR1` family) link reduced-`g` upregulation to auxin and cell-cycle control.

**Page 24 (3-Panel Sequence):**

- *Panel 1:* **Methodological Strength:** Radial distance geometry inside `EMCS` turned `6` nominal rotor speeds into precise biological replicates (`0.09g`, `0.18g`, `0.36g`, `0.57g`, `0.99g`).

- *Panel 2:* **Methodological Caveat:** Whole-seedling RNA pools blend root and shoot responses; future single-organ or spatial transcriptomics will sharpen the root-tip vs. hypocotyl split.

- *Panel 3:* **Hardware Note:** `EMCS` ethylene scrubbing ruled out volatile buildup as the cause of `0.09g` stress.

**Page 25 (4-Panel Grid):**

- *Panel 1:* **Engineering Takeaway 1:** Lunar bases (`0.16g`) sit inside the cell-wall/membrane remodeling zone—breed or engineer stronger cell-wall/lignin traits.

- *Panel 2:* **Engineering Takeaway 2:** Mars habitats (`0.38g`) sit above the `0.3g` gravitropism threshold—standard Earth cultivars should adapt with minimal transcriptional stress.

- *Panel 3:* **Engineering Takeaway 3:** Avoid `~0.1g` partial-gravity centrifuges paired with off-axis lighting.

- *Panel 4:* **Open Archive:** All `20` `HiSeq 2500` paired-end libraries (`GLDS-251` / `OSD-251`) are public on NASA OSDR.

**Page 26 (3-Panel Sequence):**

- *Panel 1:* Trilogy recap of `EMCS` in *Roots in Orbit*: `Vol. 26` (`OSD-223`, `0.53g–0.88g` roots) + `Vol. 27` (`OSD-251`, `0.09g–0.57g` blue-light seedlings).

- *Panel 2:* Combined lesson: gravity perception (`statoliths`), light perception (`phototropism`), and cell tensegrity (`graviresistance`) operate at distinct `g`-thresholds.

- *Panel 3:* **Caption:** *"Together, Volumes 26 and 27 chart the full gravitational ladder between ISS weightlessness and Earth."*

**Pages 27–30 (4-Page Epilogue Montage — 1 Panel per Page):**

- *Page 27:* Close-up of `Ler` seedlings curving left toward blue LEDs inside cassette `CC116` (`μg`).

- *Page 28:* The `5 × 9` `GEDI` mosaic grid dissolving from deep blue (`μg`) to quiet neutral (`0.57g`).

- *Page 29:* A single `GeneMANIA` network star centered on the `4` F-box/RMI-like nodes.

- *Page 30:* The ISS Columbus Module receding into orbital twilight as the next OSDR plant accession prepares for launch.

**Pages 31–32 (Double-Page Spread):** Full-bleed **Mission Debrief Infographic Spread** (detailed in Section 4).

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31) — Mission, Hardware & Gravity Ladder

- **Top Banner:** `OSD-251 / GLDS-251` (`10.26030/9bnk-7248`) | **Campaign:** *Seedling Growth* (`SG1`/`SG2`) | **Paper:** Herranz et al., 2019 (PMC6889863)

- **Flight & Operations:**

  - **Vehicles:** `SpaceX CRS-2 → CRS-3` (`Mar 2013–May 2014`) & `CRS-4 → CRS-5` (`Sep 2014–Feb 2015`); `EMCS` in ISS Columbus (`N-USOC` remote ops).

  - **Light & Growth:** `96 h` white light (`30–40 μmol m⁻² s⁻¹`) + `48 h` unidirectional **blue LEDs** (`6 d` total); frozen in `GLACIER` (`-80 °C`), preserved in `RNAlater®`.

  - **Organism & Assay:** *Arabidopsis* `Ler` whole seedlings (`20` samples, `10–15` seedlings each) → `NucleoSpin` + `TruSeq` → **Illumina HiSeq 2500 (`125 bp` PE)** → `HISAT2` / `StringTie` / `DESeq2` / `GEDI v2.1`.

- **6 Gravity Bins (`n = 20`):** `μg` (`n = 4`), Low-`g` `0.09 ± 0.02g` (`n = 3`), Moon-`g` `0.18 ± 0.04g` (`n = 3`), Mars-`g` `0.36 ± 0.02g` (`n = 3`), Reduced Earth-`g` `0.57 ± 0.05g` (`n = 4`), `1g` Control `0.99 ± 0.06g` (`n = 3`).

### Right Spread (Page 32) — Transcriptional Curve & Biological Regimes

- **DEG Counts vs. `1g` (`p < 0.05` | `FDR q < 0.05`):**

  - **`μg`:** `2,067` | **`296`** (`GO`: light & photosynthesis downregulated; blue-light phototropism mitigates general stress).

  - **Low-`g` (`0.09g`):** `2,552` | **`568`** (**peak!** `GO`: *Response to General Stress* `FDR q < 10⁻¹⁰`, nutrient accessibility; tropism conflict between blue light & weak `0.09g`).

  - **Moon-`g` (`0.18g`):** `2,088` | **`123`** (`GO`: cell wall & membrane structure/function, plastids; graviresistance/tensegrity stress).

  - **Mars-`g` (`0.36g`):** `978` | **`19`** (gravitropism negates root blue phototropism; near-normal transcriptome restored).

  - **Reduced Earth-`g` (`0.57g`):** `411` | **`2`** (virtually indistinguishable from `1g`).

- **Key Molecular Markers:**

  - **Universal DEG:** `VPS28-1` (`AT4G21560`) significant across *all* reduced-`g` levels (`q < 0.05`).

  - **`14` Shared DEGs (`μg`, `0.09g`, `0.18g`):** `Ca²⁺` signaling, redox status, stress response.

  - **`GEDI` & `GeneMANIA`:** `5,571` (`p < 0.05`) / `861` (`q < 0.05`) mosaic shows global repression fading toward `1g`; `15` reduced-`g` upregulated genes link via **`4` F-box/RMI-like proteins** (`TIR1` family) and membrane hubs (`AT3G44430`, `AT2G34840`).

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "series_title": "Roots in Orbit: The NASA OSDR Plant Chronicles",
  "volume": 27,
  "osdr_accession": "OSD-251",
  "genelab_accession": "GLDS-251",
  "skipped_accessions_since_last_volume": ["OSD-224 through OSD-250 (non-plant)"],
  "external_accessions": {
    "doi": "10.26030/9bnk-7248",
    "pmc": "PMC6889863",
    "pmid": "31850027",
    "paper_doi": "10.3389/fpls.2019.01529"
  },
  "mission": {
    "campaign": "Seedling Growth (SG1 & SG2)",
    "vehicles": "SpaceX CRS-2/3 (2013-2014) and CRS-4/5 (2014-2015)",
    "platform": "ISS Columbus Module — EMCS (N-USOC remote ops)",
    "lighting": "96 h white light (30-40 umol m-2 s-1) + 48 h unidirectional blue LEDs"
  },
  "hardware": "European Modular Cultivation System (EMCS) centrifuge with TROPI seed cassettes, GLACIER (-80 C) freezer",
  "organism": "Arabidopsis thaliana (Ler)",
  "assay": "Whole-seedling RNA-Seq (n = 20, Illumina HiSeq 2500, 125 bp paired-end, 3 lanes)",
  "gravity_bins": {
    "microgravity": "0g (n=4)",
    "low_g": "0.09 ± 0.02g (n=3)",
    "moon_g": "0.18 ± 0.04g (n=3)",
    "mars_g": "0.36 ± 0.02g (n=3)",
    "reduced_earth_g": "0.57 ± 0.05g (n=4)",
    "control_1g": "0.99 ± 0.06g (n=3)"
  },
  "key_findings": {
    "deg_counts_fdr_q005": {
      "ug": 296,
      "low_g_009": 568,
      "moon_g_018": 123,
      "mars_g_036": 19,
      "reduced_earth_057": 2
    },
    "universal_deg": "AT4G21560 (VPS28-1) across all reduced-g bins; 14 shared DEGs in ug, 0.09g, and Moon-g",
    "regimes": "Blue-light phototropism mitigates ug stress; 0.09g triggers 568-gene tropism-conflict stress peak; Moon-g triggers cell-wall/membrane graviresistance; Mars-g restores near-normal transcriptome"
  },
  "continuity_hook_next": {
    "expected_next_plant_osdr": "OSD-267",
    "notes": "Verify OSD-252..OSD-266 before advancing to OSD-267+ in the OSDR archive"
  }
}

```

Say **"Go on"** when you're ready for **Volume 28**.
