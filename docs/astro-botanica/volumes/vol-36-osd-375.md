---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 36
title: "Three Grasses Under the Veggie Canopy"
accession: OSD-375
script_status: partial
pages_covered: 30/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 79)
---

> [!NOTE]
> Script status **partial**: 30/32 pages have their own heading.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles*

- **Volume:** 36

- **Title:** *Three Grasses Under the Veggie Canopy*

- **OSDR / GLDS Accession:** `OSD-375` (`GLDS-375` | DOI: `10.26030/2x6b-3v89` | Data.gov)

- **Chronology Note:** Advances from Volume 35 (`OSD-321`). Studies `OSD-322`–`OSD-374` are non-plant datasets (including murine liver/bone/muscle/brain, human intestinal *Salmonella*, EBC/muscle/CPC/IIH/3D skin, *Drosophila* heart, and ISS bacterial/fungal genomes) and are skipped per series rules.

- **Primary Publication:** Su, S.-H., Levine, H. G., & Masson, P. H. (2023). *Brachypodium distachyon Seedlings Display Accession-Specific Morphological and Transcriptomic Responses to the Microgravity Environment of the International Space Station.* *Life*, 13(3), 626. (PMC10058394)

- **Mission & Vehicles:** `SpaceX CRS-14` (`SpaceX-14`, Dragon capsule) to the **International Space Station (ISS)** — launched **April 2, 2018**, unpacked and activated by astronaut **Scott Tingle** on **April 12, 2018**, returned **May 5, 2018**; `2`-day-delay ground control in **Kennedy Space Center (KSC) ISS Environmental Simulator (ISSES)**.

- **Hardware & Conditions:** `APEX-06` (*Advanced Plant Experiment-06*) inside **Veggie**; `12` flight + `12` ground **APEX Growth Units** (modified `Magenta` boxes with `Oasis Horticube LC2` foam blocks wrapped in medical gauze and `Nitex` mesh, fed via a bottom `injection showerhead` with `90 mL` `½ MS` + `MES` liquid medium); `24` seeds/unit (`6` per side, `96` seeds/accession); `24 h` red LED germination sync followed by `4` days continuous blue/green/red LEDs (`40–55 μmol/m²/s`) with `HOBO` loggers; photographed (`Nikon D5` / `Nikon D4s`) and fixed in **Kennedy Fixation Tubes (KFTs)** with `RNAlater` (`24 h` room temp, then `20` days in `-80°C` `MELFI`).

- **Organism & Genotypes:** *Brachypodium distachyon* (monocot temperate grass model) — accessions **`Bd21`**, **`Bd21-3`**, and **`Gaz8`** (`n = 48` root and shoot samples across `3` accessions × `2` organs × `2` conditions × `4` biological replicates).

- **Assay / Platform:** Ribodepleted `TruSeq Stranded Total RNA` on `Illumina NovaSeq 6000` (`Bd21`: `2 × 150 bp`, `~60M` reads/sample at UW–Madison; `Bd21-3` & `Gaz8`: `2 × 100 bp`, `~120M` reads/sample at NASA GeneLab); aligned to `Bd21 v3.0` (`TopHat2`/`Bowtie2`), DEGs via `DESeq` & `edgeR` (`FDR < 0.05`).

## 2. Dramatis Personae (Grounded in Study Data)

- **Dr. Shih-Heng Su** *(First Author, University of Wisconsin–Madison)* — Plant geneticist who engineered the `APEX Growth Unit` workflow, dissected the frozen `RNAlater`-fixed shoots and roots, and mapped the accession-specific monocot networks.

- **Dr. Patrick H. Masson** *(Principal Investigator, University of Wisconsin–Madison)* — Tropism and space-biology veteran leading `APEX-06` to test whether conclusions from dicot *Arabidopsis* hold true in monocot grasses.

- **Dr. Howard G. Levine** *(Co-Author, NASA Kennedy Space Center)* — Veteran spaceflight hardware and plant physiology specialist who helped bridge KSC `ISSES` ground controls and `Veggie` operations.

- **Scott Tingle** *(NASA Astronaut, ISS Expedition 55)* — Unpacked the `12` `APEX Growth Units` on **April 12, 2018**, injected `90 mL` of `½ MS` medium into each showerhead port, and arranged them under `Veggie` LEDs.

- **Drs. Daniel Wood & Richard Amasino** *(University of Wisconsin–Madison)* — Provided the three Mediterranean-origin *Brachypodium* accessions (`Bd21`, `Bd21-3`, and `Gaz8`).

- **`PHYA` (`Bradi1g10520`) & `PIF1` (`Bradi5g21950`)** — The phytochrome/bHLH pair upregulated `5`-fold and `7`-fold in `Bd21` flight shoots, driving down photosynthesis genes—while `Gaz8` ignores them and fires `102` completely different transcription factors.

## 3. 32-Page Chapter Script

### Act I: Teaching a Grass to Wait for Orbit (Pages 1–10)

**Page 1 (Splash Page)**

- **Visual:** Inside the ISS **Veggie** bellows bathed in magenta-white LED glow, twelve `Magenta`-box **APEX Growth Units** sit in a careful checkerboard pattern; through their clear walls, emerald grass shoots rise from gauze-wrapped foam cubes while fuzzy, elongated root hairs cling to the `Nitex` mesh.

- **Caption:** *April 2018. Almost every spaceflight transcriptome in history belonged to one dicot weed: Arabidopsis. Now, a monocot grass—cousin to wheat, barley, oats, and rice—takes the stage.*

**Page 2**

- **Panel 1:** At UW–Madison, Shih-Heng Su and Patrick Masson hold a petri dish of *Brachypodium distachyon* seeds beside an *Arabidopsis* plate.

- **Dialogue (Masson):** "Dicots and monocots split `150` million years ago. You can't pretend *Arabidopsis* speaks for wheat and rice—and worse, far-red light won't keep *Brachypodium* seeds dormant before launch."

- **Panel 2:** Su sketches the solution: the **APEX Growth Unit**—a `Magenta` jar holding a dry `Oasis Horticube LC2` foam block wrapped in medical gauze and `Nitex` mesh, fed from below by an injection showerhead.

**Page 3**

- **Panel 1:** Su and the team dehusk seeds of **`Bd21`**, **`Bd21-3`**, and **`Gaz8`**, wash them five times for `1` minute each in `95%` ethanol, and air-dry them in a sterile hood for `20` minutes.

- **Panel 2:** Twenty-four dry seeds per unit (`6` per side, embryos facing outward) are tucked onto the foam surface, sealed in `4°C` Cold Bags, and stowed in `SpaceX-14`'s Dragon capsule for `3` days before launch.

**Page 4**

- **Panel 1:** **April 2, 2018:** Falcon 9 lifts `SpaceX-14` off Cape Canaveral; Dragon docks at the ISS two days later.

- **Panel 2:** **April 12, 2018:** Astronaut **Scott Tingle** unpacks the `12` units and presses a syringe to each bottom showerhead port, injecting `90 mL` of `½ MS` + `MES` liquid medium into the dry foam.

**Page 5**

- **Panel 1:** Blueprint diagram (`Supplemental Fig. S1`): Tingle arranges the `12` units across `Veggie` in a balanced grid to neutralize light gradients between the center and corners, flanked by `HOBO` temperature/humidity loggers.

- **Panel 2:** Day 1: red LEDs switch on (`24 h`) to synchronize germination; Days 2–5: blue, green, and red LEDs run continuously at `40–55 μmol/m²/s`.

**Page 6**

- **Panel 1:** At the end of Day 5, Tingle photographs every unit with a `Nikon D5`, then harvests the seedlings into **Kennedy Fixation Tubes (KFTs)** preloaded with `RNAlater` (`24 h` room temp, then `20` days in `-80°C` `MELFI`).

- **Panel 2:** Two days behind orbit, Howard Levine's team at KSC mirrors the exact `HOBO` telemetry inside the `ISSES` `Veggie` chamber, snapping `Nikon D4s` photos before `KFT` fixation.

**Page 7 (Double-Page Spread Anchor — Page 7)**

- **Visual:** Side-by-side macro photographs (`Fig. 2A, D`): on Earth, `Bd21`, `Bd21-3`, and `Gaz8` roots march downward; in microgravity, shoots tilt toward the `Veggie` LEDs and roots wander away from them—while along the `Nitex` mesh, **dense, dramatically elongated root hairs** halo every microgravity root!

- **Caption:** *In dark `BRIC` canisters, Arabidopsis grew shorter root hairs in space. Under `Veggie` LEDs on foam, all three Brachypodium accessions grew significantly longer root hairs.*

**Page 8**

- **Panel 1:** Biometric charts (`Fig. 2B, C, E`): in `μg`, roots are **`16%–18%` shorter** across all three accessions (`n > 68`), and root hairs are significantly longer (`n > 10`).

- **Panel 2:** Shoot length splits by genotype: **`Bd21` shoots shrink `20%`**, whereas **`Bd21-3` and `Gaz8` shoots grow just as tall in orbit as on Earth**.

- **Dialogue (Su):** "Same hardware, same light, same station—and already `Bd21` is flinching while `Bd21-3` and `Gaz8` hold their height."

**Page 9**

- **Panel 1:** Back in Madison, Su thaws the `RNAlater`-fixed seedlings, dissecting shoots from roots across `48` samples; `Bd21` libraries go to UW–Madison (`~60M` `2×150 bp` reads), while `Bd21-3` and `Gaz8` go to NASA GeneLab (`~120M` `2×100 bp` reads).

- **Panel 2:** Quality-control flag: one `Gaz8` ground root sample (`B3`) maps at only `41.7%` (vs. `75–80%` average), so Su cleanly excludes `B3` ground and its paired `B3` flight sample before `DESeq`/`edgeR` calling.

**Page 10**

- **Panel 1:** Venn diagrams (`Fig. 3A–B`) drop a bombshell:

  - **`Gaz8`:** `4,186` shoot DEGs + `475` root DEGs (`4,527` non-redundant total)

  - **`Bd21`:** `1,027` shoot DEGs + `325` root DEGs (`1,353` total)

  - **`Bd21-3`:** `345` shoot DEGs + `224` root DEGs (`570` total)

- **Dialogue (Masson):** "An eightfold swing in transcriptomic remodeling between `Gaz8` and `Bd21-3`—and within each plant, roots and shoots share barely `3%` of their DEGs!"

### Act II: Two Organs, Three Genomes, Opposite Worlds (Pages 11–22)

**Page 11**

- **Panel 1:** Across all three Mediterranean accessions, only **`46` shoot DEGs** and **`4` root DEGs** overlap—yet they move in near-unanimous lockstep.

- **Panel 2:** Among those shared DEGs: downregulated shoot photosynthesis (`GO:0015979`, `FDR 8.6e-9`), two upregulated shoot **wall-associated kinases (`WAKs`)**, and one upregulated laccase + one downregulated peroxidase in roots.

**Page 12**

- **Panel 1:** `agriGO` enrichment trees (`Fig. 4`) light up one universal hub in *every* organ, *every* direction, and *every* accession: **`Oxidation-Reduction Process` (`GO:0055114`)**.

- **Dialogue (Su):** "Look closely at the peroxidases inside `GO:0055114`—they're going in *opposite* directions! Down in `Bd21` and `Gaz8` roots, up in their shoots."

**Page 13**

- **Panel 1:** Su maps `Bd21`, `Bd21-3`, and `Gaz8` shoot DEGs onto the *Arabidopsis* **`ROS wheel`** (`Fig. 5`).

- **Panel 2:** **`55%` of `ROS wheel` Cluster I** (linked to `GUN` chloroplast-to-nucleus retrograde signaling) matches `Bd21` shoot DEGs; `Gaz8` lights up both Cluster I and Cluster III (`p = 9.79e-11`, early high-light ROS), while `Bd21-3` stays quiet.

**Page 14**

- **Panel 1:** Why are shoot photosynthesis genes crashing under continuous `Veggie` LEDs? Su feeds `99` *Arabidopsis* photosynthesis orthologs into `PlantRegMap` to hunt for upstream transcription factors (`Fig. 6`).

- **Panel 2:** A bright orange circuit snaps into focus in `Bd21`: **`PHYA` (`Bradi1g10520`)** and **`PIF1` (`Bradi5g21950`)**!

**Page 15**

- **Panel 1:** `RT-qPCR` (`Supplemental Fig. S7`) confirms the `Bd21` switch: `PHYA` jumps **`5`-fold** and `PIF1` jumps **`7`-fold** in `μg`, while four downstream photosynthetic targets plummet.

- **Dialogue (Su):** "Upgrading `PHYA` and `PIF1` in orbit puts the brakes on chlorophyll and photosynthesis genes in `Bd21` shoots—a classic shade/retrograde throttle."

**Page 16**

- **Panel 1:** Su turns to `Gaz8` expecting the same `PHYA`–`PIF1` switch—and stops short. In `Gaz8`, `PHYA` and `PIF`-related genes are unchanged or *downregulated*!

- **Panel 2:** Out of `102` photosynthesis-linked transcription factors differentially expressed in `Gaz8` shoots, only `6` match `Bd21`.

- **Dialogue (Masson):** "Two accessions of the *same grass species* shut down photosynthesis in orbit using almost completely different transcriptional wiring."

**Page 17**

- **Panel 1:** Inside `Bd21` and `Gaz8` upregulated shoot DEGs (`GO:0006355` & `GO:0036211`), `ERF` ethylene-response factors, `ABA` TFs, brassinosteroid receptor-like kinase `BRL1`, and cell-wall-sensing **`WAKs`** surge.

- **Panel 2:** `Gaz8` goes even further—igniting `WRKY` factors, auxin response factors, **`Ca2+`/calmodulin-dependent kinases**, and **`MAPK` cascades** absent from `Bd21`.

**Page 18**

- **Panel 1:** Meanwhile, `Gaz8` hits the brakes on **`Translation` (`GO:0006412`)**—downregulating ribosome-biogenesis genes in *both* shoots and roots (`Bd21` and `Bd21-3` do not).

- **Caption:** *Where `Arabidopsis` in `SpaceX CRS-12` (`OSD-321`) boosted nuclear rRNA, `Gaz8` grass throttled ribosome production in orbit.*

**Page 19**

- **Panel 1:** Down in the root zone, Su hunts for the genes behind the **long root-hair phenotype** (`Fig. 2D–E`).

- **Panel 2:** In `Bd21` roots, cell-wall loosening genes—xyloglucan endotransglucosylase/hydrolase (`Bradi1g27867`) and four expansins (`Bradi1g74720`, `Bradi3g50740`, `Bradi3g50730`, `Bradi3g27440`)—are downregulated, matching the `16%–18%` shorter primary roots.

**Page 20**

- **Panel 1:** Cross-referencing rice and *Arabidopsis* root-hair atlases flags `19` (`Bd21` vs. rice) and `18`/`11`/`138` (`Bd21`/`Bd21-3`/`Gaz8` vs. *Arabidopsis*) root-hair orthologs, including downregulated **`PIN2` auxin-efflux orthologs** (`Bradi2g52640`, `Bradi1g31530`)—yet no single smoking gun explains why *all three* accessions grew longer root hairs.

### Act III: Designing Crops for Beyond Low Earth Orbit (Pages 21–30)

**Page 21**

- **Panel 1:** Su compares `APEX-06` (`Veggie`, continuous light, foam + `Nitex` mesh) with Kwon et al.'s `BRIC` *Arabidopsis* study (total darkness, agar): root-hair length flips from shorter to longer depending on light, moisture, and hardware!

- **Dialogue (Levine):** "Without a `1g` centrifuge inside `Veggie`, we also have to remember that sluggish air convection, boundary layers, and ethylene in orbit ride shotgun with microgravity."

**Page 22**

- **Panel 1:** A Mediterranean map shows the native habitats of `Bd21`, `Bd21-3`, and `Gaz8`—millions of generations of local selection shaping distinct alleles that now react wildly differently to `μg`.

**Page 23**

- **Panel 1:** Masson points to the `Bd21-3` column: only `570` DEGs total, and normal shoot length in orbit.

- **Dialogue (Masson):** "Some cultivars barely flinch in microgravity; others—like `Gaz8`—rewrite `4,500` genes. Future lunar and Martian farms can't rely on one reference variety."

**Page 24**

- **Panel 1:** Schematic of a chloroplast sending `GUN` retrograde redox signals to the nucleus while `PIF` proteins link light perception to `LAZY4` gravitropism—a new bridge between photosynthesis and gravity sensing.

**Page 25**

- **Panel 1:** All `48` `NovaSeq 6000` transcriptomes are curated into NASA OSDR as `OSD-375` (`GLDS-375`), giving cereal-crop breeders an open monocot benchmark alongside *Arabidopsis*.

**Page 26**

- **Panel 1:** Side-by-side comparison of dicot (`OSD-321`) vs. monocot (`OSD-375`): both remodel cell walls and redox pathways, yet monocot roots and shoots diverge sharply (`97%` organ-specific DEGs).

**Page 27**

- **Panel 1:** Su, Levine, and Masson review the `2023` *Life* manuscript, highlighting the `APEX Growth Unit` as a proven vehicle for dry-seed monocot launches.

**Page 28**

- **Panel 1:** Visual recap of the `3` accessions: `Bd21` (`PHYA`/`PIF1` shoot throttle, `-20%` shoot growth), `Bd21-3` (minimal `570`-DEG footprint, steady shoots), `Gaz8` (`4,527`-DEG `MAPK`/`WRKY`/translation overhaul, steady shoots).

**Page 29**

- **Panel 1:** Inside a future lunar greenhouse, rows of temperate cereal crops—wheat, barley, and *Brachypodium*—wave under tuned LED canopies.

**Page 30 (Final Story Page)**

- **Panel 1:** A close-up of a single `Brachypodium` seedling on `Nitex` mesh, its green blade reaching toward `Veggie`'s LEDs and its long, silvery root hairs anchoring into nutrient foam.

- **Caption:** *To feed crews far from Earth, we have to listen to the grasses—and learn why three cousins of the same species hear microgravity in three different tongues.*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31): `APEX-06` Hardware, Flight & Morphology

- **Study Identity:** `OSD-375` (`GLDS-375` | DOI: `10.26030/2x6b-3v89`), *Life* 2023 (PMC10058394).

- **Mission:** `SpaceX CRS-14` (`April 2 – May 5, 2018`); activated on ISS by astronaut **Scott Tingle** (`April 12, 2018`); `2`-day-delay ground control in KSC `ISSES` `Veggie` (`HOBO` telemetry).

- **APEX Growth Unit:** `12` flight + `12` ground `Magenta` boxes with `Oasis Horticube LC2` foam wrapped in medical gauze + `Nitex` mesh (`24` dry ethanol-sterilized seeds/unit, `6` per side); activated with `90 mL` `½ MS` + `MES` via bottom showerhead; `24 h` red LED sync + `4` days continuous R/G/B LEDs (`40–55 μmol/m²/s`); fixed in `KFTs` with `RNAlater` (`24 h` RT → `20` days `-80°C` `MELFI`).

- **Morphology (`5`-Day Seedlings):**

  - **Primary Roots:** **`16%–18%` shorter** in `μg` across all `3` accessions (`Bd21`, `Bd21-3`, `Gaz8`; `n > 68`).

  - **Shoots:** **`20%` shorter** in `Bd21`; unchanged in `Bd21-3` and `Gaz8`.

  - **Root Hairs:** **Significantly longer** in `μg` across all `3` accessions (`n > 10`).

### Right Spread (Page 32): Accession- & Organ-Specific Transcriptomics

- **Sequencing (`n = 48`, `Illumina NovaSeq 6000`):** Ribodepleted `TruSeq Stranded Total RNA` (`Bd21` `2×150 bp` `~60M` reads; `Bd21-3` & `Gaz8` `2×100 bp` `~120M` reads; `1` `Gaz8` ground root `B3` + flight pair excluded due to `41.7%` mapping); `DESeq` & `edgeR` (`FDR < 0.05`).

- **DEG Totals (Flight vs. Ground):**

  - **`Gaz8`:** `4,186` shoot + `475` root (`4,527` total)

  - **`Bd21`:** `1,027` shoot + `325` root (`1,353` total)

  - **`Bd21-3`:** `345` shoot + `224` root (`570` total)

  - **Overlap:** Only **`3%`** shared between roots and shoots within accessions; only **`46` shoot** (`47` in abstract) and **`4` root** (`6` in abstract) DEGs shared across all `3` accessions.

- **Core Pathways:**

  - **Redox (`GO:0055114`):** Enriched in all accessions/organs, but **up in shoots / down in roots** (`Bd21`, `Gaz8`); `55%` of `ROS wheel` Cluster I (`GUN` retrograde signaling) overlaps `Bd21` shoot DEGs.

  - **Photosynthesis (`GO:0015979`):** Downregulated in shoots; linked to **`PHYA` (`5×` up)** & **`PIF1` (`7×` up)** in `Bd21`, whereas `Gaz8` deploys `102` other TFs (`96` distinct from `Bd21`).

  - **Signaling & Wall:** Shoot `WAKs`, `ERFs`, `BRL1` up in `Bd21`/`Gaz8`; `Gaz8`-specific `WRKY`, `Ca2+/calmodulin`, `MAPK` up & `Translation` (`GO:0006412`) down; `Bd21` root `XTH`, `expansins`, and `PIN2` orthologs down.

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "series_title": "Roots in Orbit: The NASA OSDR Plant Chronicles",
  "volume": 36,
  "osdr_accession": "OSD-375",
  "glds_accession": "GLDS-375",
  "doi": "10.26030/2x6b-3v89",
  "skipped_accessions": [
    "OSD-322",
    "OSD-323",
    "OSD-324",
    "OSD-325",
    "OSD-326",
    "OSD-327",
    "OSD-328",
    "OSD-329",
    "OSD-330",
    "OSD-331",
    "OSD-332",
    "OSD-333",
    "OSD-334",
    "OSD-335",
    "OSD-336",
    "OSD-337",
    "OSD-338",
    "OSD-339",
    "OSD-340",
    "OSD-341",
    "OSD-342",
    "OSD-343",
    "OSD-344",
    "OSD-345",
    "OSD-346",
    "OSD-347",
    "OSD-348",
    "OSD-349",
    "OSD-350",
    "OSD-351",
    "OSD-352",
    "OSD-353",
    "OSD-354",
    "OSD-355",
    "OSD-356",
    "OSD-357",
    "OSD-358",
    "OSD-359",
    "OSD-360",
    "OSD-361",
    "OSD-362",
    "OSD-363",
    "OSD-364",
    "OSD-365",
    "OSD-366",
    "OSD-367",
    "OSD-368",
    "OSD-369",
    "OSD-370",
    "OSD-371",
    "OSD-372",
    "OSD-373",
    "OSD-374"
  ],
  "organism": "Brachypodium distachyon (Bd21, Bd21-3, Gaz8)",
  "environment_or_mission": "SpaceX CRS-14 / ISS Veggie (APEX-06 Growth Units on Oasis Horticube foam + Nitex mesh, 5-day continuous light, KFT RNAlater fixation)",
  "assay": "Ribodepleted RNA-seq (Illumina NovaSeq 6000, n = 48)",
  "key_molecular_actors": [
    "PHYA (Bradi1g10520)",
    "PIF1 (Bradi5g21950)",
    "WAKs (wall-associated kinases)",
    "XTH (Bradi1g27867) & Expansins",
    "PIN2 orthologs (Bradi2g52640, Bradi1g31530)",
    "GUN retrograde / ROS-wheel Cluster I"
  ],
  "core_themes_added": [
    "First monocot grass (Brachypodium) multi-accession spaceflight RNA-seq in OSDR",
    "Dramatic accession divergence (Gaz8 4,527 DEGs vs Bd21-3 570 DEGs) and organ specificity (3% root-shoot overlap)",
    "Longer root hairs in microgravity under Veggie light/foam vs shorter primary roots",
    "Opposite shoot-up vs root-down oxidative-stress regulation and PHYA/PIF1 vs alternative photosynthesis repression"
  ],
  "continuity_hook_next": {
    "next_volume": 37,
    "next_osdr": "OSD-376+",
    "next_title_hint": "Next chronological plant/crop study in NASA OSDR after OSD-375"
  }
}

```

Say **"Go on"** when you're ready for **Volume 37**.
