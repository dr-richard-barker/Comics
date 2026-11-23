---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 24
title: "The Skewing Compass"
accession: OSD-218
script_status: condensed
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 55)
---

> [!NOTE]
> Script status **condensed**: 32/32 pages have their own heading; condensed ranges: 4-6, 7-10, 13-16, 17-22, 23-26, 27-30.
## 1. Volume Metadata Header

- **Series / Volume:** *Roots in Orbit: The NASA OSDR Plant Chronicles* — Volume 24

- **Chapter Title:** *The Skewing Compass*

- **OSDR Accession:** `OSD-218` (*Plant development on ISS differs from the development on the ground and is influenced by the genetic background*; data.gov record)

- **GeneLab ID:** `GLDS-218`

- **Study DOI:** `10.26030/pddm-th52`

- **Source Accession:** `GSE95373` (GEO primary `OSD-218` link; companion `APEX03-2` root-skewing RNA-Seq accessions `GSE95620` and `GSE95582` also indexed under `GLDS-218` alongside `OSD-193` and `OSD-281`)

- **Payload & Mission:** **APEX03-2** (*Advanced Plant Experiment 03-2* / **TAGES-ISA**), flown aboard **SpaceX-5 (`CRS-5`)** (launched `January 10, 2015`; docked `Jan 12–13`; plates unwrapped `Jan 26`; harvested at **Day 4** and **Day 8**; returned `Feb 15, 2015`) inside the **Vegetable Production System (`VPS/Veggie`)** on the `ISS` Columbus Module, paired with a `48-h` delayed ground control in `Veggie` inside the **ISS Environmental Simulator (`ISSES`)** at Kennedy Space Center (`KSC`).

- **Primary Publications:**

  - Califar, B., Sng, N.J., Zupanska, A., Paul, A.-L., & Ferl, R.J. (2020). *Root Skewing-Associated Genes Impact the Spaceflight Response of Arabidopsis thaliana*. *Frontiers in Plant Science* `11`:`239` (DOI: `10.3389/fpls.2020.00239`, `PMC7064724`, PMID: `32194611`).

  - Beisel, N.S., Noble, J., Barbazuk, W.B., Paul, A.-L., & Ferl, R.J. (2019). *Spaceflight-induced alternative splicing during seedling development in Arabidopsis thaliana*. *npj Microgravity* `5`:`9` (DOI: `10.1038/s41526-019-0070-7`).

- **Organism & Genotypes:** *Arabidopsis thaliana* wild-type `Col-0` (`CS70000`) and `WS` (`CS915`), alongside T-DNA root-skewing mutants `spr1` (`CS6547`, `Col-0` background) and `sku5` (`CS16268`, `WS` background) — whole **roots** dissected at **4 days (`4d`)** (`5–8` roots/rep) and **8 days (`8d`)** (`2–3` roots/rep), `n = 4` biological replicates.

- **Hardware & Conditions:** `100 mm × 15 mm` Petri plates (`50 mL` `0.5% Phytagel`, `0.5× MS`, `0.5%` sucrose, `1×` Gamborg's Vitamin Mixture), `Micropore` tape, wrapped in `Duvetyne` Black-Out Fabric within `< 10 min` of seed wetting, stowed at `4–10 °C`, then grown vertically in `Veggie` under constant LEDs (`100–135 µmol m^-2 s^-1`).

- **Preservation & Assays:** Harvested on orbit by **CDR Butch Wilmore** into `RNAlater`-filled **KSC Fixation Tubes (`KFTs`)** (`12 h` ambient perfusion → `-80 °C` `MELFI`). Total RNA (`Qiashredder` + `RNeasy`, `10 ng`) converted via `SMART-Seq v4` (`8` cycles) → `150 pg` cDNA → `Nextera` tagmentation → **Illumina `NextSeq 500`** (`5` flow cells, `2 × 75 bp`, `~40M` paired-end reads/sample; `502M` total reads aligned with `STAR v2.5.1b` to `TAIR10` [`Col-0`/`spr1`] and `WS` [Gan et al., 2011], `Picard`, `Cufflinks`/`Cuffdiff v2.2.1`, `FDR < 0.05`).

- **Chronology Note:** `OSD-218` follows `OSD-217` (Vol. 23) as the next sequential plant study in OSDR, shifting from `11-day` `WS` organ methylomes (`OSD-217`) to `4d` vs. `8d` root development and skewing genetics across `Col-0`, `WS`, `spr1`, and `sku5` on the exact same `SpaceX-5` mission.

## 2. Dramatis Personae (Grounded in Study Data)

- **Brandon Califar, Natasha J. Sng & Dr. Agata Zupanska (University of Florida):** Returning from `OSD-210` (`Vol. 21`), `OSD-217` (`Vol. 23`), and `OSD-205` (`Vol. 19`), they dissect how two opposite root-skewing mutations—`spr1` and `sku5`—reshape *Arabidopsis* root navigation and transcriptomic cost in microgravity.

- **Dr. Anna-Lisa Paul & Dr. Robert J. Ferl (Principal Investigators, University of Florida):** Architects of `APEX03-2` / `TAGES-ISA`, testing whether root skewing—once assumed to require gravity—acts as an active cell-wall remodeling strategy in space.

- **CDR Butch Wilmore (ISS Astronaut) & KSC `ISSES` Crew:** Performing synchronized `4-day` and `8-day` harvests (`KFT` actuation verified via over-the-shoulder ISS video logs so no extra drought stress creeps in).

- **The Two Wild-Type Compass Bearers (`Col-0` vs. `WS`):**

  - **`Col-0` (`CS70000`):** Shows a `4d` deficit in wax and suberin production in orbit relative to `8d` (absent on ground) and `533` "high light early" `ROS` wheel genes at `4d` (`TOAST` analysis, `PMC7076552`).

  - **`WS` (`CS915`):** Uniquely overexpresses photosynthesis-related genes in `4d` orbital roots vs. `8d`, and shortens primary roots by `8d` in flight (`p = 0.000209`).

- **The Two Skewing Mutants (`spr1` vs. `sku5`):**

  - **`SPIRAL1` (`spr1`, `CS6547`, `Col-0`):** Microtubule plus-end tracking linker (`EB1b` partner). Loses `SPR1` → skews **sharply leftward** in spaceflight (`p = 0.00385`), yet acclimates with **fewer DEGs** than `Col-0`!

  - **`SKU5` (`sku5`, `CS16268`, `WS`):** `GPI`-anchored cell-wall/plasma-membrane lipid-raft protein (`ABP1`–`TOR` link). Loses `SKU5` → germination plunges to **`48%`** (`p = 0.00181`), skewing collapses, and `4d` roots erupt with **`5×` more DEGs** than `WS`, flooding `LEA`s (`30–1000×`) and `ABA` dormancy genes!

## 3. 32-Page Chapter Script

### Act I: Gravity's Missing Compass (Pages 1–10)

**Page 1 (Splash Page)**

- **Visual:** A close-up of two Petri plates floating side by side inside `Veggie` on the `ISS` Columbus Module (`January 2015`): on the left, `Col-0` and `spr1` roots sweep in dramatic leftward arcs across `0.5% Phytagel`; on the right, `WS` and `sku5` roots wander at tangled angles under uniform magenta-white LEDs (`100–135 µmol m^-2 s^-1`).

- **Caption (Narration):** *"For decades, textbooks taught that root skewing—that helical, sideways drift across an agar plate—needed gravity to exist."*

- **Caption:** *"Then Arabidopsis went to orbit. Even with zero gravity and zero directional light, the roots still skewed. Something inside the cell wall was steering."*

**Page 2 (4-Panel Grid)**

- **Panel 1:** University of Florida prep bench: seeds of four lines—`Col-0` (`CS70000`), `spr1` (`CS6547`), `WS` (`CS915`), and `sku5` (`CS16268`)—are dried over Drierite for `1` week, sterilized `10 min` in `70%` ethanol, and suspended in sterile water.

- **Panel 2:** A stopwatch ticks! From wetting the seeds to sealing the `100 mm × 15 mm` plates (`Micropore` tape) and wrapping them in light-tight `Duvetyne` Black-Out Fabric takes **under `10` minutes**—locking dormancy before `4–10 °C` transport to KSC.

- **Panel 3:** Plate layout: `35–40` seeds in two rows on `4-day` (`4d`) plates; `12–15` seeds in one row on `8-day` (`8d`) plates.

- **Panel 4:** `January 10, 2015` — `SpaceX-5` launches, docks (`Jan 12–13`), and on `Jan 26`, CDR Butch Wilmore unwraps the plates and slides them vertically into `Veggie`.

**Page 3 (3-Panel Vertical)**

- **Panel 1:** Day 4 (`Jan 30, 2015`) on `ISS`: Wilmore photographs every plate against its `13 mm` grid squares, then harvests seedlings into `RNAlater`-loaded `KFTs` (`12 h` ambient perfusion → `-80 °C` `MELFI`).

- **Panel 2:** Day 8 (`Feb 3, 2015`): second wave photographed and fixed.

- **Panel 3:** KSC `ISSES` ground control (`48-h` delay): telemetry-matched `CO2`, temperature, and lighting, while UF analysts check over-the-shoulder `ISS` video to verify harvest timing matches to the minute.

**Pages 4–6 (3-Page Sequence: Measuring the Unmoored Root)**

- **Page 4:** At UF, thawed `RNAlater` seedlings are examined under an `Olympus SZX12` stereoscope; whole **roots** are cleanly severed from shoots/hypocotyls (`5–8` roots/rep at `4d`, `2–3` at `8d`, `n = 4` biological replicates).

- **Page 5:** `FIJI` / `JFilament` traces primary root lengths (`Figure 2A–B`):

  - `Col-0` vs. `spr1`: **no significant root-length difference** between flight (`FLT`) and ground (`GC`) at `4d` or `8d` (`8d Col-0` `p = 0.0152`, just shy of `p < 0.0125` Bonferroni cutoff).

  - `WS` vs. `sku5`: `FLT WS` roots shorten significantly vs. `GC WS` at `8d` (`p = 0.000209`), whereas `FLT sku5` matches `GC sku5` in length.

- **Page 6:** Polar rose-plots (`Figure 2C`) map `4d` root-tip angles (viewed from behind the media):

  - **`spr1`:** Already skews left on Earth; in spaceflight, it curves **far harder to the left** (`p = 0.00385`), tangling into neighboring roots by Day 8 (`Figure 3F, H`).

  - **`sku5`:** Fails to enhance skewing in orbit—its directional compass goes noisy, and **`FLT sku5` germination plunges to `48%`** (vs. `85%` `WS FLT`, `77%` `sku5 GC`, `93%` `WS GC`; `χ^2 = 15.01, p = 0.00181`)!

**Pages 7–10 (4-Page Sequence: `502` Million Reads of Root Logic)**

- **Page 7:** `Qiashredder` + `RNeasy` extracts ultra-low-input root RNA (`10 ng`), amplified `8` cycles with `SMART-Seq v4` and tagmented (`150 pg` cDNA) via `Nextera`.

- **Page 8:** Five `NextSeq 500` flow cells (`2 × 75 bp`) churn out `~40M` paired-end reads per sample—**`502` million reads** aligned via `STAR v2.5.1b` (`Col-0`/`spr1` → `TAIR10`; `WS`/`sku5` → `WS` reference) and quantified via `Cuffdiff v2.2.1` (`FDR < 0.05`).

- **Page 9:** First surprise (`OSD-218` `Col-0` vs. `WS` `4d → 8d` trajectory):

  - On Earth, both genotypes show a huge developmental gap between `4d` and `8d` root-system genes; **in orbit, that developmental gap shrinks**.

  - `4d` orbital `Col-0` shows a **wax and suberin production deficit** relative to `8d` (unregistered on ground).

  - `4d` orbital `WS` uniquely overexpresses **photosynthesis-related genes** in roots relative to `8d`!

- **Page 10:** `TOAST` (`PMC7076552`) cross-examines `GLDS-218` `Col-0`: **`533` `4d` root DEGs** (and `295` at `8d`) belong to the **"high light early" `ROS` clade**—even though roots sit on agar in `Veggie`, proving `ROS` signaling is triggered by spaceflight itself, not just excess light.

### Act II: Two Mutants, Opposite Costs (Pages 11–22)

**Pages 11–12 (Double-Page Spread: The Metabolic Price Tag)**

- **Visual:** Mirror-image bar charts (`Figures 4 & 9`) comparing `FLT vs. GC` DEG counts at `4d` and `8d`:

  - **Left Side (`Col-0` & `spr1`):** `spr1` uses **fewer** DEGs than `Col-0` to acclimate to spaceflight (with a higher share `> 2-fold`: `41.8%` at `4d`, `22.0%` at `8d` vs. `Col-0` `17.8%`, `12.5%`). Both drop DEG counts sharply from `4d` to `8d`.

  - **Right Side (`WS` & `sku5`):** `sku5` explodes—requiring **`5×` more DEGs than `WS` at `4d`** and **`2×` more at `8d`**, with **nearly `10×` more high-fold DEGs at `4d` than `8d`** (`70.3%` of all `FLT vs. GC` DEGs unique to `sku5`!).

- **Dialogue (Califar):** *"If DEG count is the metabolic cost of adapting to spaceflight, losing `SPR1` actually made adaptation cheaper—while losing `SKU5` made it five times more expensive."*

**Pages 13–16 (4-Page Sequence: Inside the `spr1` Microtubule Shortcut)**

- **Page 13:** Molecular zoom to the cortical microtubule plus-end: wild-type **SPR1** and **EB1b** stabilize growing microtubules, balancing gravitropism and thigmotropism.

- **Page 14:** Without `SPR1`, microtubules turn more dynamic and less rigid—like a flexible suspension bridge. In microgravity (no gravity cue), `spr1` leans harder into thigmotropic leftward skewing, **much like terrestrial cold stress**!

- **Page 15:** Inside `spr1`'s transcriptome (`Figure 5`): across every age and environment, `spr1` constitutively upregulates salicylic-acid defense regulators (`NIMIN-1`, `ALD1`, `DLO1`) and, at `4d` in flight, boosts **apoplast cell-wall remodeling** and **`RuBisCo` / carbon-fixation** genes.

- **Page 16:** **Narration:** *"Because `spr1` microtubules already remodel easily, the mutant snaps into a spaceflight-tolerant cytoskeleton with fewer transcriptional edits."*

**Pages 17–22 (6-Page Sequence: Inside the `sku5` Lipid-Raft Crisis)**

- **Page 17:** Molecular zoom to the outer plasma membrane: **SKU5** is a **`GPI`-anchored protein (`GPI-AP`)** sitting inside sterol-rich **lipid-raft nanodomains** at the cell-wall–membrane nexus, linked via `ABP1`–`ROP2` signaling to the **`TOR` growth hub**.

- **Page 18:** When `sku5` hits microgravity at `Day 4`, its lipid-raft signaling falters—and the root panics as if parched or frozen.

- **Page 19:** Heatmap `Figure 10A` & `Figure 13` erupt in bright yellow (`Log2 fc` `5` to `10` = **`30×` to `1,000×` induction**!):

  - **Late Embryogenesis Abundant (`LEA`) dehydrins & group-4 `LEA`s**

  - **Seed storage proteins:** `CRUCIFERINA` (`CRA1`), `CRUCIFERIN 3` (`CRA3`)

  - **`ABA` & dormancy regulators:** `DOG1`, `RDO5`, `HAI2`, `HAI3`

- **Page 20:** Membrane-rescue alarms join the chorus: chloroplastic aldehyde reductase (`ChlADR`, `AT1G54870`) detoxifying lipid peroxidation, and `TSPO` mobilizing membrane lipids, while **suberin synthesis** drops.

- **Page 21:** By `Day 8`, `sku5`'s `4d` `LEA`/`ROS`/salt storm finally subsides (`10×` drop in high-fold DEGs), shifting toward cell-wall remodeling—while `8d WS` wild-type quietly turns on **chromatin remodeling**.

- **Page 22:** **Dialogue (Paul):** *"Every `4d` mutant and wild-type plate also lit up `karrikin`-response genes—and remember, `max2` karrikin-pathway mutants exaggerate `sku5` skewing too. Spaceflight is pulling on the oldest, deepest cell-wall sensors a root owns."*

### Act III: The Developmental Clock in Orbit (Pages 23–32)

**Pages 23–26 (4-Page Sequence: Reconciling `OSD-217` and `OSD-218`)**

- **Page 23:** Stepping back across the entire `APEX03-2` (`SpaceX-5`) harvest:

  - `OSD-217` (`Vol. 23`, `11d WS` roots & leaves): epigenetic `CHG`/`CHH` methylation & `46%+` `ROS`-linked DEGs.

  - `OSD-218` (`Vol. 24`, `4d` & `8d` `Col-0`/`WS`/`spr1`/`sku5` roots): `533` `ROS`-wheel genes at `4d` (`Col-0`), wax/suberin deficits (`4d Col-0`), `4d` root photosynthesis (`WS`), and opposite `spr1` vs. `sku5` costs!

- **Page 24:** Across *all* four genotypes, `SENESCENCE 1` (`SEN1`) and `ASPARAGINE SYNTHETASE 1` (`ASN1`)—core skewing-network candidates—are co-regulated in spaceflight (`Figure 13`).

- **Page 25:** **Dialogue (Ferl):** *"Notice what didn't change in `spr1` or `sku5` in flight: root length. Neither gene controls how fast a root grows in space—they control which way it turns, and how hard the cell has to work to stay balanced."*

- **Page 26:** `OSD-218` (`GLDS-218`, DOI `10.26030/pddm-th52`) enters OSDR alongside `Beisel et al. (2019)` (alternative splicing) and `Califar et al. (2020)` (*Frontiers in Plant Science*, `PMC7064724`).

**Pages 27–30 (4-Page Sequence: Leaving the ISS for `SJ-10`)**

- **Page 27:** Final look at `Veggie` aboard the `ISS`: `Col-0` and `WS` have taught us that **genetic background** and **developmental age (`4d` vs. `8d` vs. `11d`)** can flip a plant's spaceflight strategy completely.

- **Page 28:** A horizon shift: from U.S. `SpaceX-5` (`ISS`) back to China's recoverable satellite program—five years after `Shenzhou 8` (`Vol. 22`, `OSD-213`), China launches **`SJ-10`** (`Shijian-10`).

- **Page 29:** On `SJ-10`, another *Arabidopsis* methylome experiment waits to be compared directly against `OSD-217`'s `ISS` methylome.

- **Page 30:** **Narration:** *"Next in the archive: `OSD-219` and `OSD-220`—single-base methylomes aboard `SJ-10`."*

**Pages 31–32 (Full-Bleed Mission Debrief Infographic Spread)** *(Detailed in Section 4 below.)*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31): `APEX03-2` (`SpaceX-5`) Root-Skewing & Developmental Matrix

- **Header Banner:** `OSD-218 / GLDS-218 (GSE95373; Companion GSE95620 / GSE95582) — SpaceX-5 Veggie Root Timecourse`

- **Experimental Matrix (`4d` & `8d` Whole Roots, `n = 4` reps, `100–135 µmol m^-2 s^-1` LEDs):**

  - **Wild-Type `Col-0` (`CS70000`) & Mutant `spr1` (`CS6547`):** Aligned to `TAIR10` (`STAR v2.5.1b`).

  - **Wild-Type `WS` (`CS915`) & Mutant `sku5` (`CS16268`):** Aligned to `WS` reference (Gan et al., 2011).

  - **Sequencing Depth:** `SMART-Seq v4` (`10 ng` RNA) + `Nextera` → `NextSeq 500` (`5` flow cells, `2 × 75 bp`, `~40M` PE reads/sample, `502M` total aligned reads).

- **Morphology & Germination (`FIJI` / `JFilament`):**

  - **Germination:** `Col-0` & `spr1` `100%` (`GC` & `FLT`); **`sku5` `FLT` drops to `48%`** vs. `WS FLT` `85%`, `sku5 GC` `77%`, `WS GC` `93%` (`χ^2 = 15.01, p = 0.00181`).

  - **Root Length:** `WS FLT` shorter than `WS GC` at `8d` (`p = 0.000209`); `spr1` and `sku5` show **no `FLT` vs. `GC` length change**.

  - **Root Skewing:** `4d spr1` skews **more severely leftward** in `FLT` (`p = 0.00385`); `sku5` loses directional skewing precision in `FLT`.

### Right Spread (Page 32): Opposite Transcriptomic Strategies (`OSD-218` + `PMC7064724`)

- **`Col-0` vs. `WS` (`4d → 8d` Developmental Trajectory, `OSD-218`):**

  - **`4d Col-0` Flight:** Wax and suberin production deficit vs. `8d` (absent on ground); `533` `4d` / `295` `8d` root DEGs map to the `TOAST` `"high light early"` `ROS` clade (`PMC7076552`).

  - **`4d WS` Flight:** Uniquely overexpresses photosynthesis-related genes in `4d` roots vs. `8d`.

  - **Shared Trend:** Smaller root-development gene gap between `4d` and `8d` in orbit than on ground.

- **`spr1` vs. `sku5` (`FLT` vs. `GC`, `PMC7064724`):**

  - **`spr1` (Cortical Microtubule Linker):** **Fewer DEGs** than `Col-0` (`41.8%` `> 2-fold` at `4d`, `22.0%` at `8d`), constitutively upregulating SA defense (`NIMIN-1`, `ALD1`, `DLO1`) and `4d` apoplast/`RuBisCo` genes → *loss of `SPR1` lowers adaptation cost*.

  - **`sku5` (`GPI`-Anchored Lipid-Raft Protein):** **`5×` more DEGs than `WS` at `4d`**, **`2×` more at `8d`** (`~10×` more high-fold DEGs at `4d` than `8d`), inducing `LEA`s (`30–1000×`), `ABA`/dormancy (`DOG1`, `RDO5`, `HAI2`, `HAI3`), `ChlADR`, `TSPO`, and `ROS` pathways → *`SKU5` is critical for spaceflight membrane/stress homeostasis*.

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "volume": 24,
  "osdr_accession": "OSD-218",
  "glds_id": "GLDS-218",
  "source_accession": "GSE95373 (companion GSE95620 / GSE95582)",
  "payload_mission": "APEX03-2 (TAGES-ISA) aboard SpaceX-5 (CRS-5, 01/10/2015-02/11/2015) in ISS Veggie (VPS)",
  "organism": "Arabidopsis thaliana (Col-0, WS, spr1 [CS6547], sku5 [CS16268]; 4d and 8d roots)",
  "new_hardware_introduced": [
    "SMART-Seq v4 ultra-low-input (10 ng) + Nextera tagmentation (150 pg cDNA) on Illumina NextSeq 500",
    "FIJI / JFilament + R polar root-angle quantification pipeline (camera-behind-media convention)"
  ],
  "molecular_characters": [
    "SPIRAL1 (SPR1) + EB1b (cortical microtubule plus-end dynamics; spr1 lowers spaceflight DEG count)",
    "SKU5 (GPI-anchored lipid-raft protein; sku5 triggers 5x DEGs at 4d, 48% germination, 30-1000x LEA/ABA surge)",
    "DOG1, RDO5, HAI2, HAI3, ChlADR (AT1G54870), TSPO (membrane/ABA crisis in sku5)",
    "NIMIN-1, ALD1, DLO1 (SA/cell-wall defense in spr1) & SEN1 / ASN1 (shared skewing network)"
  ],
  "continuity_hooks": [
    "Demonstrates opposite genetic contributions of two root-skewing pathways (SPR1 vs. SKU5) to spaceflight adaptation",
    "Establishes developmental-age acclimation (4d peak stress vs. 8d settling) and Col-0 vs. WS ecotype divergence",
    "Paired with OSD-217 (11d WS methylome) and Beisel et al. (2019) alternative splicing on SpaceX-5",
    "Next sequential plant accessions: OSD-219 / OSD-220 (SJ-10 satellite Arabidopsis seedlings)"
  ]
}

```

Say **"Go on"** when you're ready for **Volume 25**.
