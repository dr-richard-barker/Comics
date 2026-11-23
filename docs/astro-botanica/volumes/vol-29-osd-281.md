---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 29
title: "The Skewed Cost of Letting Go"
accession: OSD-281
script_status: condensed
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 65)
---

> [!NOTE]
> Script status **condensed**: 32/32 pages have their own heading; condensed ranges: 4-6, 7-10, 11-13, 14-18, 19-22, 23-26, 27-30.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles*

- **Volume:** 29

- **Title:** *The Skewed Cost of Letting Go*

- **OSDR / GLDS Accession:** `OSD-281` / `GLDS-281` (Data.gov Catalog Record | DOI: `10.26030/j07k-nm86` | GEO: `GSE95620`)

- **Chronology Note:** Skips `OSD-270`–`OSD-280` (non-plant payloads including radiation, rodent, microbial, and *Drosophila* / *Serratia marcescens* studies). The `APEX-03-2` publication also synthesizes `OSD-281` (`WS` & `sku5`) alongside the `Col-0` & `spr1` companion datasets (`OSD-193` / `OSD-218`).

- **Primary Publication:** Califar, B., Sng, N. J., Zupanska, A., Paul, A.-L., & Ferl, R. J. (2020). *Root Skewing-Associated Genes Impact the Spaceflight Response of Arabidopsis thaliana*. *Frontiers in Plant Science*, 11:239 (`PMCID: PMC7064724`, `PMID: 32194611`; Frontiers Full Text).

- **Mission & Vehicles:** `SpaceX CRS-5` (`SpaceX-5` Dragon; launched January 10, 2015; docked January 12, 2015; initiated on ISS January 26, 2015; returned to Dragon cold stowage February 9, 2015; de-integrated at KSC February 15, 2015) — ISS Expedition 42 (`APEX-03-2` / `TAGES-ISA`). Ground control (`GC`) run on a `48`-hour delay in the KSC ISS Environmental Simulator (`ISSES`) chamber.

- **Hardware:** Vegetable Production System (`VPS` / `Veggie`) in the ISS Columbus Module (`100–135 μmol m⁻² s⁻¹` constant overhead LED light); `100 mm × 15 mm` (`10-cm²`) Petri plates with `50 mL` `0.5%` Phytagel (`0.5×` MS salts, `0.5%` sucrose, `1×` Gamborg's Vitamin Mixture), wrapped in Duvetyne Black-Out Fabric at `4–10°C` until activation; Kennedy Space Center Fixation Tubes (`KFTs`) with `RNAlater` (`12 h` ambient perfusion → `MELFI −80°C`).

- **Organism & Genotypes:** *Arabidopsis thaliana* Wassilewskija (`WS`, `CS915`) wild type and `sku5` T-DNA mutant (`CS16268`; `SKU5` / `AT4G12420`), contrasted with `Col-0` (`CS70000`) and `spr1` (`CS6547`).

- **Assay / Sequencing:** Dissected root RNA-seq (`4` biological replicates/condition: `5–8` roots/rep at `4d`, `2–3` roots/rep at `8d`); SMART-Seq v4 + Nextera on Illumina `NextSeq500` (`2×75` bp, `~40M` reads/sample, `502M` total aligned reads; `STAR` / `Cuffdiff`, `FDR < 0.05`).

## 2. Dramatis Personae (Grounded in Study Data)

- **Dr. Anna-Lisa Paul & Dr. Robert J. Ferl** (*University of Florida, Principal Investigators*): Architects of `APEX-03-2` (`TAGES-ISA`), testing whether root-skewing genes actively govern spaceflight physiological adaptation rather than merely bending roots on agar.

- **Brandon Califar, Natasha J. Sng, & Dr. Agata Zupanska** (*University of Florida, Lead Analysts & Co-Authors*): Dissected the `RNAlater`-preserved `4d` and `8d` roots under stereoscopes, quantified root angles with `JFilament`, and mapped the `sku5` vs. `spr1` transcriptomic divergence.

- **Astronaut Barry "Butch" Wilmore** (*ISS Expedition 42*): Unwrapped the cold-stowed Duvetyne plates on January 26, 2015, photographed the `Veggie` racks at `4d` and `8d`, and actuated the `KFT` tubes to lock in the orbital transcriptomes.

- **`SKU5` (`AT4G12420`)**: A glycosylphosphatidylinositol-anchored (`GPI-AP`) multi-copper oxidase-like protein seated in plasma membrane "lipid raft" nanodomains and the cell wall—a molecular sentinel linking membrane stress signaling and auxin/TOR growth control.

- **`SPIRAL1` (`SPR1`)**: A cortical microtubule plus-end tracking protein (partnering with `EB1b`) that regulates anisotropic cell expansion; its loss (`spr1`) acts as an unexpected foil to `sku5` in microgravity.

## 3. 32-Page Chapter Script

### Act I: Dormancy in the Dark (Pages 1–10)

**Page 1 (Splash Page)**

- **Panel 1:** Full-bleed vertical view of the SpaceX `CRS-5` Falcon 9 lifting off from Cape Canaveral on January 10, 2015. Inside the Dragon's cold stowage (`4–10°C`), black Duvetyne-wrapped `10-cm²` Petri plates sit in total darkness.

- **Caption (Narration):** *"For decades, botanists swore roots skewed because gravity dragged them against the agar. Then spaceflight proved roots curve even when weightless."*

**Pages 2–3 (Double-Page Spread — The `Veggie` Rack)**

- **Panel 1 (Page 2):** January 26, 2015, ISS Columbus Module. Astronaut Butch Wilmore peels away the black Duvetyne fabric, breaking `16` days of dormancy. Overhead `Veggie` LEDs flood the perpendicular Petri plates at `100–135 μmol m⁻² s⁻¹`.

- **Panel 2 (Page 3):** Macro-zoom onto the `0.5%` Phytagel surface. Two wild-type backgrounds (`WS` and `Col-0`) sit beside two classic skewing mutants: `sku5` (which skews right on Earth) and `spr1` (which skews left).

- **Wilmore (Dialogue):** *"Plates are in the rack, Houston. Light's on. Let's see which way they turn without a floor."*

**Pages 4–6**

- **Pages 4–5:** Split-screen montage comparing Day 4 (`4d`) in orbit (`FLT`) vs. the `48`-hour-delayed ground control (`GC`) inside KSC's `ISSES` chamber. In `GC`, `Col-0` drops straight, `spr1` curves left, and `sku5` drifts right. In `FLT`, `Col-0` and `spr1` hit `100%` germination—and `spr1` coils dramatically leftward (`p = 0.00385`).

- **Page 6:** Close-up on the `FLT sku5` plate. Half the seeds sit ungerminated (`48%` germination vs. `77%` in `sku5 GC` and `85%` in `WS FLT`, `p = 0.00181`). Those that sprout wander without the enhanced skewing seen in `spr1`.

- **Califar (Caption):** *"Same Veggie lights. Same Phytagel. Yet losing `SKU5` stalled germination before the first root even touched the gel."*

**Pages 7–10**

- **Pages 7–8:** Day 4 and Day 8 harvests on ISS. Wilmore photographs every plate grid (`13 mm` squares) and drops whole plates into `KFT` tubes filled with `RNAlater`, letting tissues perfuse for `12` hours at ambient temperature before stowing them in `MELFI` at `−80°C`.

- **Pages 9–10:** February 9–15, 2015. Dragon splashes down; frozen `KFT` tubes travel to Gainesville, Florida. Under an `Olympus SZX12` stereoscope, Natasha Sng and Brandon Califar dissect `5–8` roots per `4d` replicate and `2–3` roots per `8d` replicate, pooling `4` biological replicates per line.

### Act II: The Lipid-Raft Alarm (Pages 11–22)

**Pages 11–13**

- **Page 11:** The UF ICBR `NextSeq500` sequencing core. Five flow cells hum as `502` million paired-end reads align against `TAIR10` (`Col-0`/`spr1`) and the `WS` reference genome (`STAR` / `Cuffdiff`).

- **Pages 12–13:** Data-visualization spread. Two bar charts rise like twin skylines: `spr1` vs. `Col-0` shows a *smaller* transcriptional footprint in spaceflight (`spr1` needs fewer DEGs than `Col-0` to acclimate), whereas `sku5` vs. `WS` explodes—`5-fold` more DEGs at `4d` and `2-fold` more at `8d`.

- **Paul (Dialogue):** *"Look at the metabolic price tag. Losing `SPR1` makes acclimation quieter. Losing `SKU5` sets off a five-alarm fire."*

**Pages 14–18 (Molecular Interior — Plasma Membrane vs. Microtubule)**

- **Pages 14–15:** Inside a `spr1` root cell. Cortical microtubules (`SPR1` + `EB1b`) depolymerize and reorient smoothly, while salicylic-acid and cell-wall defense regulators (`ALD1`, `NIMIN-1`, `DLO1`) and `RuBisCo` transcripts tune the cell wall without panic.

- **Pages 16–18:** Inside a `4d` `FLT sku5` root cell. The `GPI`-anchored `SKU5` protein is missing from the plasma membrane's sterol-rich lipid-raft nanodomains. Without it, auxin-`ABP1`-`TOR` growth signaling falters, reactive carbonyls and `ROS` spike, and the nucleus floods the cell with `30- to 1,000-fold` (`Log2[5 to 10]`) surges of `LEA` dehydrins, `CRA1`/`CRA3` seed-storage proteins, and ABA/dormancy brakes (`DOG1`, `RDO5`, `HAI2`, `HAI3`), alongside `ChlADR` and `TSPO` for membrane rescue.

- **Ferl (Caption):** *"On Earth, `sku5` just looks like a slightly shorter root with a rightward bend. In orbit, without `SKU5` guarding the membrane-wall interface, the seedling thinks it's drying out and freezing at the same time."*

**Pages 19–22**

- **Pages 19–20:** Developmental time-lapse (`4d` → `8d`). In `FLT sku5`, `4d` seedlings carry nearly `10×` as many high-magnitude (`>2-fold`) DEGs as `8d` seedlings; across `4d` to `8d` in orbit, `sku5` shifts `862` genes—nearly double its ground developmental count—before finally settling toward cell-wall remodeling by Day 8.

- **Pages 21–22:** Meanwhile, `8d` `FLT WS` roots are significantly shorter than `GC WS` (`p = 0.000209`), whereas `sku5` root length stays flat between `GC` and `FLT`—proving `SKU5` governs *directional and stress signaling*, not raw elongation rate.

### Act III: Two Roads Through Weightlessness (Pages 23–32)

**Pages 23–26**

- **Pages 23–24:** Side-by-side comparison of the `70.3%` context-unique `sku5` DEGs against the `63` core DEGs shared across `Col-0`/`spr1`. Only a handful of skewing-network markers—like `SENESCENCE 1` (`SEN1`) and `ASPARAGINE SYNTHETASE 1` (`ASN1`)—bridge both mutants.

- **Pages 25–26:** Zupanska and Califar overlay `FLT` root polar plots: `spr1`'s destabilized microtubules let it bend freely into a space-tolerant state, while `sku5`'s missing lipid-raft anchor leaves it directionless and metabolically overtaxed.

**Pages 27–30 (Epilogue Montage)**

- **Pages 27–28:** `ISSES` ground chamber at KSC shuts down its `Veggie` telemetry replay; the `48`-hour-delayed ground plates rest beside the flight `KFT` archive.

- **Pages 29–30:** Back in Gainesville, the `Frontiers in Plant Science` manuscript (`PMC7064724`) goes to press in March 2020, establishing that root skewing pathways are active engines of spaceflight acclimation. Final panel pivots from the `Veggie` LEDs to a harsher spectrum: broadband `UV-B` lamps humming over `COP1` and `UVR8` photoreceptors (`OSD-296`).

**Pages 31–32 (Double-Page Infographic Spread)**

- *See Section 4 below for the complete Pages 31–32 Mission Debrief layout.*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread — Page 31: Mission Architecture & Phenotypic Readouts

- **Payload & Timeline:** `APEX-03-2` (`TAGES-ISA`) on `SpaceX CRS-5`; launched Jan 10, 2015 → activated on ISS Jan 26, 2015 → `4d` & `8d` harvests into `RNAlater` `KFTs` (`12 h` ambient → `MELFI −80°C`) → Dragon return Feb 9–15, 2015.

- **Growth Environment:** ISS Columbus Module `Veggie` (`VPS`) with constant overhead LEDs (`100–135 μmol m⁻² s⁻¹`) on `10-cm²` (`100 × 15 mm`) `0.5%` Phytagel plates; `48 h` delayed `GC` in KSC `ISSES` chamber matching ISS `CO2`, temperature, and light telemetry.

- **Sampling & Sequencing:** `4` biological replicates/condition (`5–8` roots/rep at `4d`; `2–3` roots/rep at `8d`); `10 ng` RNA → `SMART-Seq v4` → `NextSeq500` (`2×75` bp, `~40M` reads/sample, `502M` aligned reads; `FDR < 0.05`).

- **Germination & Morphology:**

  - `FLT sku5` germination dropped to `48%` vs. `WS FLT` (`85%`), `sku5 GC` (`77%`), and `WS GC` (`93%`) (`χ² = 15.01, p = 0.00181`); `Col-0` & `spr1` reached `100%` in both `FLT` and `GC`.

  - `8d` `FLT WS` roots shortened vs. `GC WS` (`p = 0.000209`); `sku5` root length showed no `FLT vs. GC` difference at `4d` or `8d`.

  - `4d` `FLT spr1` amplified leftward skewing (`p = 0.00385`), whereas `FLT sku5` failed to enhance rightward skewing.

### Right Spread — Page 32: Transcriptomic Cost & Pathway Divergence

- **Opposing DEG Loads:**

  - `sku5` (`WS` background): `5×` more `FLT vs. GC` DEGs than `WS` at `4d` and `2×` more at `8d`; `4d` `FLT sku5` had nearly `10×` more `>2-fold` DEGs than `8d` `FLT sku5`; `862` DEGs between `4d` and `8d` in orbit (nearly `2×` `GC`); `70.3%` of `FLT vs. GC` DEGs were unique to a single `sku5` context.

  - `spr1` (`Col-0` background): *fewer* `FLT vs. GC` DEGs than `Col-0` (`554` `>2-fold` DEGs across `Col-0`/`spr1` contexts, `63` shared), indicating lower metabolic cost of acclimation.

- **Core Molecular Signatures (`PMC7064724`):**

  - **`sku5` Loss-of-Function Response:** `30–1,000-fold` (`Log2[5 to 10]`) induction of `LEA` dehydrins, seed storage proteins (`CRA1`, `CRA3`), ABA/dormancy genes (`DOG1`, `RDO5`, `HAI2`, `HAI3`), lipid-peroxidation/membrane-stress genes (`ChlADR`, `TSPO`), and `ROS`/ethylene signaling; downregulation of suberin synthesis and `FTM1`.

  - **`spr1` Loss-of-Function Response:** Enrichment of salicylic acid / defense-remodeled cell-wall genes (`ALD1`, `NIMIN-1`, `DLO1`) and `4d` `RuBisCo` upregulation.

  - **Shared Skewing Bridge:** Both mutants induced `SEN1` and `ASN1` in spaceflight.

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "series": "Roots in Orbit: The NASA OSDR Plant Chronicles",
  "volume": 29,
  "title": "The Skewed Cost of Letting Go",
  "accessions": ["OSD-281", "GLDS-281"],
  "doi": "10.26030/j07k-nm86",
  "geo": "GSE95620",
  "skipped_non_plant_accessions": ["OSD-270 through OSD-280"],
  "companion_accessions_referenced": ["OSD-193", "OSD-218"],
  "primary_publication": {
    "citation": "Califar B, Sng NJ, Zupanska A, Paul A-L, Ferl RJ (2020) Front Plant Sci 11:239",
    "pmcid": "PMC7064724",
    "pmid": "32194611"
  },
  "mission": {
    "name": "SpaceX CRS-5 (APEX-03-2 / TAGES-ISA)",
    "launch_date": "2015-01-10",
    "iss_activation": "2015-01-26",
    "return_date": "2015-02-15",
    "ground_control": "48h delayed ISSES chamber at KSC"
  },
  "hardware": [
    "Vegetable Production System (VPS / Veggie, Columbus Module, 100-135 umol m-2 s-1 LEDs)",
    "100x15 mm Petri plates (0.5% Phytagel, 0.5x MS, 0.5% sucrose, 1x Gamborg vitamins)",
    "Duvetyne Black-Out Fabric",
    "Kennedy Fixation Tubes (KFTs) with RNAlater",
    "MELFI -80C freezer"
  ],
  "organisms_and_genotypes": [
    "Arabidopsis thaliana WS (CS915)",
    "Arabidopsis thaliana sku5 (CS16268, AT4G12420, WS background)",
    "Arabidopsis thaliana Col-0 (CS70000)",
    "Arabidopsis thaliana spr1 (CS6547, Col-0 background)"
  ],
  "cast_added": [
    "Brandon Califar (UF)",
    "Natasha J. Sng (UF)",
    "Agata Zupanska (UF)",
    "Barry 'Butch' Wilmore (ISS Expedition 42)"
  ],
  "continuity_hook_next": "OSD-296 (Arabidopsis COP1 / UVR8 broadband UV-B photomorphogenesis & stress microarray, skipping non-plant OSD-282 through OSD-295)"
}

```

Say **"Go on"** when you're ready for **Volume 30**.
