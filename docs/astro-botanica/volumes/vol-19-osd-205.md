---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 19
title: "The Unfolded Citadel: HSFA2 & the Non-Thermal Stress Logic of Undifferentiated Cells"
accession: OSD-205
script_status: complete
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 45)
---
## 1. Volume Metadata Header

- **Series & Volume:** *Roots in Orbit: The NASA OSDR Plant Chronicles* — **Volume 19**

- **Title:** *The Unfolded Citadel: HSFA2 & the Non-Thermal Stress Logic of Undifferentiated Cells*

- **OSDR Accession:** `OSD-205` (`GLDS-205`)

- **Version & Dates:** Version 3 (Updated `26-Oct-2023`; Submitted `27-Feb-2017`; Initial Release `01-Dec-2018`)

- **Study DOI:** `10.26030/bjyc-pj66`

- **Source Accession:** `GSE95388`

- **Payload & Mission:** `BRIC-17-1` (*Biological Research In Canisters-17-1: Undifferentiated Cell development in Arabidopsis plants in Microgravity* — *Cellular Expression Logic [CEL]* experiment) aboard SpaceX `CRS-2` (`SpaceX-2`; launched `03/01/2013`, berthed `03/03/2013`, unberthed/splashed down `03/26/2013`, returned to PIs at `SLSL` `04/02/2013`)

- **Primary Publication:** Zupanska, A.K., LeFrois, C., Ferl, R.J., & Paul, A.-L. (2019). *HSFA2 Functions in the Physiological Adaptation of Undifferentiated Plant Cells to Spaceflight*. *Int. J. Mol. Sci.* 20(2):390. `PMC6359015` | PMID: `30658467` | DOI: `10.3390/ijms20020390`

- **Organism & Genotype:** *Arabidopsis thaliana* (`Col-0`) hypocotyl-derived undifferentiated callus/cell cultures (`14 d` old at fixation): Wild Type (`WT`, `n = 5` FLT, `n = 5` GC) vs. `HSFA2 KO` T-DNA insertion mutant (`SALK_008978C`, `n = 3` FLT, `n = 3` GC; `n = 16` total)

- **Hardware & Conditions:** `BRIC-PDFU` (`BRIC-LED` with LEDs disabled, `24 h` continuous dark) in `60 mm` Petri plates on `6.5 mL` MS + `3%` sucrose + `2,4-D` + `0.8%` agar; `ISS-US Laboratory` (`10 d` orbital growth) vs. `OES` / `ISSES` ground control chamber at `KSC` `SLSL` (`24–48 h` telemetry-delayed replication)

- **Preservation & Assays:** In-orbit `RNAlater` fixation at Day 10 → `MELFI` (`-80 °C`) after `24 h`; `Affymetrix GeneChip Arabidopsis ATH1 Genome Array` (`ATH1-121501`); `R 3.0.0` / `Limma` / `MAS 5.0` (`P < 0.01`, `|log2 FC| > 1`)

- *(Chronology Note: `OSD-148`–`OSD-204` were verified as non-plant studies—rodent, human, microbial, *C. elegans*, and *Helix lucorum*—including `OSD-177` [*Fusarium oxysporum* isolated from ISS *Zinnia*]; `OSD-205` is the next sequential plant study after `OSD-147`.)*

## 2. Dramatis Personae (Grounded in Study Data)

- **The `Col-0` Wild-Type Callus Collective (`WT`, `GWt` / `FWt`):** Five flight and five ground replicates of undifferentiated hypocotyl cells—the same `WT` baseline from `OSD-147`—carrying an intact `HSFA2` (`AT2G26150`) master switch (`4171` raw ground signal) and adapting to orbit with a lean `78`-DEG script.

- **The `HSFA2 KO` Vanguard (`SALK_008978C`, `GHsf` / `FHsf`):** Three flight and three ground replicates crippled by a `-7.27 log2 FC` (`39` vs. `4171`, `P = 2.9 × 10^-9`) loss of `HSFA2`. They launch into space already carrying `349` baseline transcriptional scars and chronic endoplasmic reticulum (ER) stress.

- **The ER Folding & UPR/ERAD Corps (`PDIL1-2`, `PDIL2-3`, `AERO1`, `HRD3A`, `CUL2`):** Disulfide isomerases, oxidoreductins, and ubiquitin-ligase/ER-associated degradation sentinels. `HSFA2 KO` keeps `PDIL1-2` and `AERO1` blazing on Earth and recruits `PDIL2-3` and `HRD3A` in orbit to clear misfolded protein aggregates.

- **The Cell Wall & Membrane Architects (`ATCSLC12`, `SRF5`, `XTH4`, `EXPL1`, `QUA1`, `TBL45`):** In orbit, `WT` upregulates `ATCSLC12` (`+1.9 log2 FC`) and `PEN2` (`+1.4`) to reinforce its wall, while `HSFA2 KO` drops `XTH4` (`-2.4`), `EXPL1` (`-1.4`), `QUA1` (`-2.0`), and `TBL45` (`-2.4`), risking cell-wall thinning.

- **The Soloist & The Reversed Trio (`SOT12`/`ST1`, `AT3G10400`, `AT4G03570`, `PMS1`):** The only four genes shared by both genotypes' flight-vs-ground responses—led by `SOT12` (`AT2G03760`), the sole gene upregulated in both (`+1.1` in `WT`, `+1.0` in `HSFA2 KO`).

## 3. 32-Page Chapter Script

### Act I: Launch & Environmental Shift (Pages 1–10)

**Page 1:** Splash page. Inside the Kennedy Space Center `SLSL`, two identical `60 mm` Petri dishes sit side by side under black cloth. Caption: *Same `SpaceX-2` canister. Same `BRIC-17-1` darkness. Two radically different starting states.* On the left, `WT` `Col-0` callus cells glow with steady chaperone homeostasis (`HSFA2` signal: `4171`). On the right, `HSFA2 KO` (`SALK_008978C`) cells flicker with amber ER-stress alarms (`HSFA2` signal: `39`).

**Page 2:** Cutaway of the `HSFA2 KO` endoplasmic reticulum before launch. Chaperone bays sit half-empty: `DNAJ` (`At3g08910`, `-3.2`), `MGE2` (`-2.5`), and `HSP21` (`-1.3`) are powered down. Unfolded polypeptides pile up at the ER lumen.

**Page 3:** Emergency bells ring in the `GHsf` ER. Oxidoreductin `AERO1` (`+2.9`) and disulfide isomerases `PDIL1-2` (`+2.0`) and `PDIL2-1/UNE5` (`+1.1`) scramble to weld disulfide bonds, while drought/salt responders `RCI2A` (`+1.5`), `dehydrin` (`+1.3`), and `DREB2B` (`+1.1`) fire off false environmental-stress flares.

**Page 4:** Wide shot of `GHsf : GWt`—`349` genes (`115` up, `234` down) already separated before liftoff. Narration: *When you knock out `HSFA2`, you don't disable one gene. You launch `349` altered baselines into orbit.*

**Page 5:** `03/01/2013`, `10:10 EST`. SpaceX `CRS-2` (`SpaceX-2`) Falcon 9 roars off Pad 40. Inside the sealed, unlit `BRIC-LED` canisters (LEDs disabled), `WT` and `HSFA2 KO` plates ride twelve minutes to orbit, berthing with the ISS on `03/03/2013`.

**Page 6:** Forty-eight hours behind, the `OES` / `ISSES` ground control chamber at `KSC` mirrors the downlinked cabin temperature, humidity, and `CO2` telemetry. Two parallel timelines lock into step.

**Page 7:** Microgravity settles over the `ISS-US Laboratory`. Inside the `PDFU` cassettes, `WT` cells lose their downward gravity vector. No heat shock strikes—temperature stays nominal—yet the cell wall and endomembrane begin to shift.

**Page 8:** `WT` reads the subtle mechanical distortion at its periphery. It doesn't panic; it pulls a compact `78`-gene playbook (`46` up, `32` down). `At3g18260` (Reticulon, `+3.1`) and `PDIL1-2` (`+1.2`) step up to steady the ER.

**Page 9:** Meanwhile, inside `HSFA2 KO`, the pre-existing ER backlog collides with microgravity. Without `HSFA2` to coordinate chaperone capacity, the mutant's transcriptional switchboard lights up with `221` DEGs (`112` up, `109` down)—nearly three times `WT`'s count.

**Page 10:** Split-panel contrast: `WT` (`78` DEGs) glides through a surgical adjustment; `HSFA2 KO` (`221` DEGs) thrashes across defense, starvation, and morphogenesis networks just to hold the line.

### Act II: The Molecular Battle (Pages 11–22)

**Page 11:** Deep inside `HSFA2 KO`'s ER-to-Golgi corridor (`FHsf : FWt`, `220` DEGs). Misfolded glycoproteins jam the exit gates. `HRD3A` (`+1.2`) flags the aberrant cargo for `ERAD` ubiquitin-proteasome demolition.

**Page 12:** Vesicle-trafficking reinforcements rush the bottlenecks: `ATARFA1D` (`+1.7`), `Coatomer beta'` (`+1.1`), `Target SNARE` (`+1.5`), and `Ypt/Rab-GAP` (`At3g49350`, `+2.4`) try to force secretory traffic through, while `RMR1` (`-1.7`) and calcium pumps `ACA9` (`-2.6`) and `ACA2` (`-1.7`) power down.

**Page 13:** At the plasma membrane, `HSFA2 KO` bristles with hyper-induced LRR receptor kinases—`SRF5` (`+2.2`), `At5g65240` (`+1.9`), and `BIR1` (`+1.2`)—cranking up extracellular sensitivity to compensate for lost intracellular coordination.

**Page 14:** Outside, at the cell wall, the two genotypes diverge sharply. `WT` boosts `Subtilase` (`At1g30600`, `+2.5`), `ATCSLC12` cellulose-synthase-like (`+1.9`), and `PEN2` (`+1.4`) to remodel and fortify its wall.

**Page 15:** Across the divide, `HSFA2 KO` starves its own wall construction: `XTH4` (`-2.4`), `EXPL1` (`-1.4`), `GASA1` (`-1.4`), `EXO` (`-1.1`), `QUA1` (`-2.0`), and `TBL45` (`-2.4`) all plummet, thinning the wall and triggering herbivore/wounding alarms (`AOP1.1` `+3.7`, `NSP5` `+1.4`, `SRG1` `+1.1`).

**Page 16:** Inside `HSFA2 KO` plastids, energy reserves falter. Starch-biosynthesis enzymes `PGM` (`-2.2`), `ISA1` (`-1.7`), and `NdhN` (`-2.4`) drop, while `DIN3` (`+1.2`), `DIN4` (`+1.3`), `ALDH6B2` (`+1.2`), and `MCCB` (`+1.1`) burn branched-chain amino acids under perceived sugar starvation.

**Page 17:** The Two-Dimensional Map (`Figure 2` & `Figure 5` brought to life). Four glowing categories crystallize from the cross-comparison: **Required** (`10` genes), **Corrected** (`66` genes), **`HsfA2`-Dependent** (`7` genes), and **Compensated** (`53` genes).

**Page 18:** Spotlight on the **10 Required** genes: `CUL2`, `PDIL1-2`, `At3g18260`, `At1g30600`, and `PEN2` rise in `WT` during flight to reach the exact ceiling `HSFA2 KO` had already hit on Earth. Narration: *`HSFA2 KO` arrived in orbit pre-stressed at the required setpoint.*

**Page 19:** Spotlight on the **66 Corrected** genes (`61` up, `5` down): `GAMMA-TIP` (`+3.1`), `ATNRT2.7` (`+2.4`), `ATPME1` (`+1.1`), `MLO7` (`+1.9`), `ILL6` (`+1.9`), and `DIN3` (`+1.2`) climb in `HSFA2 KO` flight cells to match `WT`'s spaceflight level—genes a `WT`-only study would never have seen.

**Page 20:** Spotlight on the **7 `HsfA2`-Dependent** genes (`ATCSLC12` up in `WT`; `SRF5`, `At5g19070`, `At2g43240` down in `WT`) and the **53 Compensated** genes (`ATPDIL2-3`, `ATGSTU25`, `Coatomer beta'` up; `ACA9`, `ACA2`, `RMR1` down in `HSFA2 KO`).

**Page 21:** Amid `295` combined physiological-adaptation DEGs, only **4 genes** overlap between `WT` and `HSFA2 KO`. Three flip in opposite directions (`AT3G10400`, `AT4G03570`, `PMS1`—up in `WT`, down in `HSFA2 KO`).

**Page 22:** One lone gene stands together in the same direction: `AT2G03760` (`SOT12`/`ST1`, steroid sulfotransferase), glowing `+1.1` in `WT` and `+1.0` in `HSFA2 KO`—the sole shared vertical anchor across both genotypes.

### Act III: Fixation & Data Epilogue (Pages 23–32)

**Page 23:** Day 10 on orbit. Crew members actuate the `PDFU` plungers. `RNAlater` floods all `60 mm` Petri dishes simultaneously, freezing every transcript in place without opening the canisters.

**Page 24:** Twenty-four hours post-fixation, the `BRIC` canisters slide into the `-80 °C` `MELFI` freezer aboard the ISS. Forty-eight hours later, the `OES` ground controls follow into `-80 °C` storage at `KSC`.

**Page 25:** `03/26/2013`: `SpaceX-2` Dragon unberths and splashes down in the Pacific. By `04/02/2013`, the frozen canisters return to the PIs at `SLSL`.

**Page 26:** Lab montage in Gainesville: `Qiashredder`/`RNeasy` RNA extraction, `Agilent 2100 BioAnalyzer` QC, `Ovation Pico WTA` cDNA synthesis, `Encore Biotin` labeling, and `16 h` hybridization onto `Affymetrix ATH1` arrays (`n = 16`).

**Page 27:** `R 3.0.0` / `Limma` / `MAS 5.0` pipelines crunch the fluorescence intensities (`P < 0.01`, `|log2 FC| > 1`). Heatmaps of `78`, `221`, `349`, and `220` genes resolve on screen.

**Page 28:** Side-by-side comparison with `Vol. 18` (`OSD-147`, `ARG1 KO`): Both knockouts rode the same `SpaceX-2` flight and shared the same `WT` baseline, yet disabling `ARG1` (gravity-sensing) vs. `HSFA2` (protein-folding/stress network) carved distinct compensatory routes.

**Page 29:** Synthesis panel: `HSFA2` is far more than a thermal switch. In microgravity, it governs ER protein homeostasis, cell-wall remodeling, plasma-membrane receptor tuning, and starch/BCAA metabolism.

**Page 30:** Closing vista of the ISS cupola over Earth's limb. Narration: *Both `WT` and `HSFA2 KO` survived ten days in orbit—proving plant cells can adapt without their master heat-shock factor, but only at triple the transcriptional cost.*

**Pages 31–32:** Full-bleed **Mission Debrief Infographic Spread** (detailed in Section 4).

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31): Mission Architecture & 2D Comparison Matrix

- **Flight & Hardware:** `BRIC-17-1` (`CEL` payload) | `SpaceX-2` (`CRS-2`, `03/01/2013`–`03/26/2013`) | `10 d` dark growth in `BRIC-PDFU` (`BRIC-LED` LEDs off) | `RNAlater` at Day 10 → `MELFI` (`-80 °C`) | `OES`/`ISSES` ground control (`24–48 h` delay).

- **Sample Design (`n = 16` `ATH1` arrays):** `WT` `Col-0` (`5` FLT, `5` GC) vs. `HSFA2 KO` `SALK_008978C` (`3` FLT, `3` GC) hypocotyl-derived undifferentiated callus (`14 d` old).

- **Knockout Validation:** `HSFA2` (`AT2G26150`) ground raw signal `4171` (`WT`) vs. `39` (`HSFA2 KO`), `log2 FC = -7.27` (`P = 2.9 × 10^-9`).

- **DEG Counts (`P < 0.01`, `|log2 FC| > 1`):**

  - `FWt : GWt` (WT physiological adaptation): **`78`** (`46` up, `32` down)

  - `FHsf : GHsf` (`HSFA2 KO` physiological adaptation): **`221`** (`112` up, `109` down)

  - `GHsf : GWt` (Ground-adapted genotypic difference): **`349`** (`115` up [`33%`], `234` down [`67%`])

  - `FHsf : FWt` (Spaceflight-adapted genotypic difference): **`220`** (`95` up, `125` down)

### Right Spread (Page 32): Cross-Dimensional Gene Classes & Key Findings

- **Physiological Adaptation Overlap (`FWt:GWt` ∩ `FHsf:GHsf`):** **`4` genes** total — **`1`** concordant (`AT2G03760` / `SOT12` `+1.1` WT, `+1.0` KO); **`3`** discordant (`AT3G10400`, `AT4G03570`, `AT4G02460` `PMS1`).

- **Persistent Genotypic Difference (`GHsf:GWt` ∩ `FHsf:FWt`):** **`28` genes** (e.g., `GSTU1`, `GSTU3`, `GSTU24`, `CEF`, `SecY`, `ROL1`, `NAP5`).

- **Four Functional Adaptation Classes:**

  - **Required (`10`):** WT adjusts in flight to `HSFA2 KO`'s pre-stressed ground level (`CUL2`, `ATPDIL1-2`, `At3g18260`, `At1g30600`, `PEN2`).

  - **Corrected (`66`; `61` up, `5` down):** `HSFA2 KO` adjusts in flight to match `WT` spaceflight levels (`GAMMA-TIP`, `ATNRT2.7`, `ATPME1`, `MLO7`, `ILL6`, `DIN3`, `ALDH6B2`, `MCCB`).

  - **`HsfA2`-Dependent (`7`):** WT-only flight adaptation (`ATCSLC12` up; `SRF5`, `At5g19070`, `At2g43240` down).

  - **Compensated (`53`):** `HSFA2 KO`-only flight adaptation (`ATPDIL2-3`, `ATGSTU25`, `Coatomer beta'`, `Target SNARE` up; `ACA9`, `ACA2`, `RMR1` down).

- **Core Takeaway:** `HSFA2` has non-thermal roles in spaceflight adaptation—governing ER protein-folding homeostasis, cell-wall remodeling, plasma-membrane kinase signaling, and starch/BCAA metabolism.

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "volume": 19,
  "osdr_accession": "OSD-205",
  "glds_id": "GLDS-205",
  "source_accession": "GSE95388",
  "payload_mission": "BRIC-17-1 (CEL) / SpaceX CRS-2 (SpaceX-2, 03/01/2013-03/26/2013)",
  "organism": "Arabidopsis thaliana (Col-0 hypocotyl callus, WT vs. HSFA2 KO SALK_008978C)",
  "new_hardware_introduced": [],
  "molecular_characters": [
    "HSFA2 (AT2G26150)",
    "SOT12 / ST1 (AT2G03760)",
    "PMS1 (AT4G02460)",
    "PDIL1-2 (AT1G77510)",
    "PDIL2-3 (AT2G32920)",
    "HRD3A (AT1G18260)",
    "CUL2 (AT1G02980)",
    "PEN2 (AT2G44490)",
    "ATCSLC12 (AT4G07960)",
    "SRF5 (AT1G78980)",
    "XTH4 (AT2G06850)",
    "QUA1 (AT3G25140)",
    "TBL45 (AT2G30010)",
    "GAMMA-TIP (AT2G36830)",
    "ATNRT2.7 (AT5G14570)",
    "ACA9 (AT3G21180)",
    "ACA2 (AT4G37640)",
    "ATGSTU25 (AT1G17180)",
    "DIN3 (AT3G06850)"
  ],
  "continuity_hooks": [
    "Shares the exact Col-0 WT SpaceX-2 BRIC-17-1 baseline (GSM2152569-GSM2152578) with Vol. 18 (OSD-147, ARG1 KO).",
    "Demonstrates that pre-flight genetic state (349 baseline DEGs in HSFA2 KO) dictates how plant cells spend transcriptional effort in microgravity (221 DEGs vs. 78 in WT).",
    "Establishes ER stress/UPR, cell-wall remodeling, and starch/BCAA metabolism as non-thermal HSF-network targets in orbit."
  ]
}

```

Say **"Go on"** when you're ready for **Volume 20**.
