---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 50
title: "Blades in the Bead Mill"
accession: OSD-594
script_status: condensed
pages_covered: 30/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 109)
---

> [!NOTE]
> Script status **condensed**: 30/32 pages have their own heading; condensed ranges: 4-6, 11-13, 14-16, 17-19, 20-22, 23-25, 26-28.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles*

- **Volume:** 50

- **Chapter Title:** *Blades in the Bead Mill*

- **OSDR Accession:** `OSD-594` (Version 2) | `GLDS-582` | `DOI: 10.26030/qc04-a934` | Size: `12.22 GB` | Submitted: `01-Mar-2023` | Initial Release: `14-Aug-2023`

- **Primary Publication:** Haveman, N. J., Schuerger, A. C., Yu, P.-L., Brown, M., Doebler, R., Paul, A.-L., & Ferl, R. J. (2023). *Advancing the automation of plant nucleic acid extraction for rapid diagnosis of plant diseases in space*. *Frontiers in Plant Science*, `14:1194753` (Published `14-Jun-2023`). Frontiers Full Text | PMC (`PMC10304293`)

- **Chronology Note (`skipped_accessions`):** `OSD-582` through `OSD-593` skipped (comprising non-plant studies, including *Drosophila* artificial-gravity and rodent missions), advancing directly from Volume 49 (`OSD-581`) to the next chronological plant study, `OSD-594`.

- **Hardware & Environment:** Ground study at NASA Kennedy Space Center (KSC) / University of Florida (`NASA SMD TIDES 80NSSC22K0160`); plants grown in **Magenta Vessels** inside microbial incubators (`12:12` diel cycle, `~275 µmol m⁻² s⁻¹` PAR `400–700 nm` RGBW LEDs `150:40:20:125`, or `100 µmol/m²` broad-spectrum LEDs at `22°C ± 2°C`). Extraction hardware: **Claremont BioSolutions (`CBIO`) `microHomogenizer™`** (`2 mL` tubes with `1.1 g` lysis beads; benchmarked vs. `OmniLyse®-X` for `SimplePrep®` automation) + `PureLyse®` `CBBB` columns + **Oxford Nanopore `MinION Mk1C`** (`FLO-MIN106 R9.4` flow cells, `SQK-RPB004` Rapid PCR Barcoding Kit).

- **Organism & Assay Scope:** Three crop pathosystems—*Lactuca sativa* cv. `'Outredgeous Red'` + *Pythium aphanidermatum* (`P1717`), *Solanum lycopersicum* cv. `'Red Robin'` + *Fusarium oxysporum* f. sp. *lycopersici* (`FOL`) Race 2, and *Capsicum annuum* cv. `'Chablis'` + Tomato Mosaic Virus (`ToMV`)—plus *Arabidopsis thaliana* + *Escherichia coli* buffer optimization; species-specific `PCR`/`RT-PCR` and whole-genome shotgun metagenomic sequencing (`n = 9` `MinION` libraries, `BC01–BC08`, `BC11`).

## 2. Dramatis Personae (Grounded in Study Data)

- **The `microHomogenizer™` (CBIO `2 mL` Rotor-Bead Chamber):** A compact, battery-driven disposable lysis cartridge built for `SimplePrep®` automation. Unlike its `OmniLyse®-X` sibling, its geometry compresses diced `6–8 mm` leaf fragments into the bottom third of the tube, keeping `1.1 g` of lysis beads and the spinning rotor locked on the plant cell walls.

- **`TES` Buffer (The Non-Toxic Lysis Pact):** A spaceflight-safe cocktail (`0.2 M Tris-HCl pH 8`, `10 mM EDTA pH 8`, `0.5 M NaCl`, `1% SDS` plus `20 µL` Proteinase K). Where `CTAB`/`PVP` buffers foamed too violently to draw through a syringe filter, `TES` cuts cleanly through plant cutin and lignin—and with `40 µL` `DTT` and no `RNase A`, flips seamlessly from `DNA` to `RNA` extraction.

- **Red Robin (`FOL` Pathosystem #2):** A `21-day`-old dwarf tomato seedling wounded at the crown with a `5 mm` plug of *Fusarium oxysporum* f. sp. *lycopersici* Race 2. Within `7 days`, fungal mycelium carpets its roots and stems, while silent vascular hyphae race upward into wilted leaves—tracked by `SIX3` (`608 bp`) PCR and `MinION` barcode reads (`BC01–BC06`).

- **Outredgeous Red (`Pythium` Pathosystem #1):** A `21-day`-old romaine lettuce plant in autoclaved silica sand attacked by the oomycete *Pythium aphanidermatum* (`P1717`). Its roots rot dark and moribund (`656 bp` PCR positive), yet when its `MinION` reads (`BC08`) hit standard `Kraken2` RefSeq, the pathogen vanishes into a taxonomic blind spot.

- **`Chablis` & `ToMV` (Pathosystem #3):** A `28–32 day` sweet pepper plant (`28°C ± 1°C`) infected with Tomato Mosaic Virus (`ToMV`). Tested both fresh and frozen at `5 dpi` (local lesions) and `14 dpi` (systemic canopy leaves), it proves `DTT`-modified `TES` extraction captures diagnostic `595 bp` viral `RNA` even from ISS-style frozen tissue.

## 3. 32-Page Chapter Script

### Act I: The Containment Problem (Pages 1–10)

**Page 1:**

- **Panel 1:** Establishing flashback to a real orbital crisis: opportunistic *Fusarium oxysporum* blighting *Zinnia hybrida* leaves inside the ISS `Veggie` unit, forcing astronauts to freeze samples and wait months for Earth return.

- **Panel 2:** Cut to NASA Kennedy Space Center. Magenta Vessels gleam under Fairchild RGBW LED arrays (`150:40:20:125`, `275 µmol m⁻² s⁻¹`).

- **Panel 3:** Close-up on two palm-sized Claremont BioSolutions (`CBIO`) cartridges on the bench: the `OmniLyse®-X` tube and the **`microHomogenizer™`** (`2 mL`).

- **Caption:** *In microgravity, you cannot swing a liquid-nitrogen mortar or vent phenol-chloroform fumes. If a crop sickens in orbit, the extraction lab has to fit inside a sealed syringe.*

**Pages 2–3:**

- **Panel 1 (Page 2):** `0.2 g` of tomato leaf—diced either `2–3 mm` or `6–8 mm`—drops into `TE` buffer with `1.1 g` of `CBIO` lysis beads.

- **Panel 2 (Page 2):** The `microHomogenizer™` rotor spins up for `10 minutes`. A cutaway shows its secret: its internal taper compresses larger `6–8 mm` leaf squares into the bottom third of the tube, keeping rotor blades and beads grinding in constant contact, outperforming `OmniLyse®-X` on coarse tissue.

- **Panel 3 (Page 3):** A buffer graveyard lines the bench: `CTAB` and `PVP` lysates foam like soap, jamming the `3 mL` syringe prefilter; `Edwards` buffer and enzymatic protoplast cocktails (`cellulase`, `Macerozyme`, `pectinase`) yield degraded smears.

- **Dialogue (Lab Tech):** *"`TES` buffer—`0.2 M Tris-HCl`, `10 mM EDTA`, `0.5 M NaCl`, `1% SDS`—no toxic organics, zero foam lock."*

**Pages 4–6:**

- **Page 4:** Proof-of-concept on `30-day` *Arabidopsis thaliana* leaves infiltrated or mixed with `50 µL` *E. coli* pellets: `10 min` homogenization + `20 µL` Proteinase K, `3 mL` syringe prefilter, `5 min` `RNase A`, `500 µL` isopropanol, `1:1` `PureLyse® 8× CBBB` binding, two `4 mL` `1× CBBB` washes, air purge, and `200 µL` elution.

- **Page 5:** Gel electrophoresis confirms dual capture in a single elution: `210 bp` *Arabidopsis* `HSP70` (`AT1G09080`) and `394 bp` bacterial `16S rRNA` (`799F + 1193R`, discriminating against chloroplast `16S`).

- **Page 6:** Three isolated microbial incubators power on—strictly separated to prevent cross-contamination across three distinct kingdoms of space-crop pathogens: **Oomycete**, **Fungus**, and **RNA Virus**.

**Pages 7–8 (Double-Page Spread Anchor):**

- **Visual:** A triptych battleground inside sealed Magenta Vessels. Left: `'Outredgeous Red'` lettuce roots in silica sand (`24°C`) besieged by *Pythium aphanidermatum* (`P1717`) mycelia emerging from `0.8 cm` V-8 agar plugs. Center: `'Red Robin'` tomato seedlings (`22°C`) on `0.5%` Phytagel/`0.5×` MS with *Fusarium oxysporum* f. sp. *lycopersici* (`FOL`) Race 2 colonizing a crown wound, hyphae creeping up the stem while leaves wilt. Right: `'Chablis'` pepper canopies (`28°C`) erupting in `ToMV` local lesions (`5 dpi`) and systemic leaf distortion (`14 dpi`). Below all three, the `microHomogenizer™` rotor funnels every tissue into one unified `PureLyse®` column and `MinION Mk1C` flow cell.

- **Caption:** *Three crops. Three pathogen kingdoms. One closed-loop diagnostic pipeline.*

**Pages 9–10:**

- **Page 9:** Pathosystem #1 (`Lettuce–Pythium`) hits a physical wall: `1.2 g` of thick, fibrous, necrotic lettuce roots resist direct `2 mL` bead milling. A blast of `LN2` pre-grinding breaks the stalemate—revealing a future engineering requirement for tougher rotor geometry and `5 mL` cartridges.

- **Page 10:** PCR lights up the `656 bp` *P. aphanidermatum* band exclusively in inoculated lettuce roots and pure culture. One pathogen down; two more to test.

### Act II: Fungal Trail & Viral Flip (Pages 11–22)

**Pages 11–13:**

- **Page 11:** Pathosystem #2 (`Tomato–Fusarium`, `7 dpi`): even `0.2 g` of wilted leaf, discolored stem, or mycelia-coated root yields clean DNA.

- **Page 12:** Specificity gel: `SIX3` primers amplify a crisp `608 bp` band in `FOL`-infected roots, stems, and wilted leaves—while staying completely dark in healthy controls and the closely related negative-control strain `FORL` (*F. oxysporum* f. sp. *radicis-lycopersici*).

- **Page 13:** Pathosystem #3 (`Pepper–ToMV`): `40 µL` of reducing agent **DTT** enters the `TES` buffer to break disulfide bonds in RNases, while the `RNase A` step is deleted.

**Pages 14–16:**

- **Page 14:** Fresh vs. frozen pepper leaves enter the `microHomogenizer™`. Fresh tissue yields substantially more total RNA, but frozen tissue still delivers clean cDNA and a sharp `595 bp` `ToMV` RT-PCR amplicon—proving astronauts can freeze symptomatic leaves in orbit and run diagnostics on schedule.

- **Page 15:** Now comes the true spaceflight test: **unbiased diagnosis without prior pathogen primers.** DNA from `Tomato–FOL` (`BC01–BC06`) and `Lettuce–Pythium` (`BC07`, `BC08`, `BC11`) is cleaned (`Zymo D4011`), barcoded with `SQK-RPB004`, and loaded onto `MinION Mk1C` (`FLO-MIN106 R9.4`) flow cells.

- **Page 16:** Real-time basecalling (`MinKNOW v21.11.6`) streams long reads across two `Tomato–FOL` flow cells: `FC1` (`9.88 Gb`, `9.43M` raw / `3.10M` QC reads, `N50 = 2,884 bp`, `90.10% > Q10`) and `FC2` (`8.65 Gb`, `7.89M` raw / `2.18M` QC reads, `N50 = 3,045 bp`, `88.60% > Q10`).

**Pages 17–19:**

- **Page 17:** `Filtlong` (`≥500 bp`, `Q ≥ 10`) and `Kraken2` (`v2.0.8b`) sort reads against the microbial RefSeq database, plotting the top `12` species (`≥0.1%` reads) as a taxonomic bubble map.

- **Page 18:** `BC02` (`FOL` stem) and `BC03` (`FOL` root) erupt with massive *F. oxysporum* f. sp. *lycopersici* bubbles—absent from healthy `BC01`, `BC04`, and `BC05`.

- **Page 19:** Even `BC06` (**`FOL` tomato leaf**, `1,246,833` QC reads), which showed **no visible surface mycelium**, registers *F. oxysporum* reads—catching the fungus mid-invasion through the plant's vascular plumbing.

**Pages 20–22:**

- **Page 20:** Suddenly, an alarm chimes on the `Lettuce–Pythium` (`BC08`) screen: **zero *P. aphanidermatum* hits** in the standard `Kraken2` RefSeq run, despite massive root rot and a positive `656 bp` PCR band!

- **Page 21:** The investigators trace the ghost: out of `420` GenBank Oomycota genomes, only **`~8` genomes** are curated in NCBI RefSeq—and *P. aphanidermatum* isn't one of them.

- **Page 22:** When aligned directly to the standalone *P. aphanidermatum* genome, `BC08` and pure-culture `BC11` light up immediately; against all `420` uncurated Oomycota genomes, `BC08` splits across *P. insidiosum* and *P. plurisporium*, exposing a critical **reference-database gap** for space crop pathology.

### Act III: Ready for Orbit (Pages 23–30)

**Pages 23–25:**

- **Page 23:** The `12.22 GB` metagenomic archive (`GLDS-582` / `OSD-594`) is scrubbed of human contaminant reads (`GRCh38.p13`, `7.9%–24.51%` per barcode) and uploaded to NASA OSDR.

- **Page 24:** On the engineering whiteboard, two upgrades are sketched for `SimplePrep®` flight hardware: scaling the `microHomogenizer™` from `2 mL` to `5 mL` and re-profiling the rotor blades to shred tough roots without `LN2`.

- **Page 25:** With rapid automated extraction and `MinION` sequencing validated for fungal, oomycete, and viral threats, the chronicle pivots back from *pathogens* to the *plant cell wall itself*—the first barrier every spaceflight stress and microbe must cross.

**Pages 26–28:**

- **Page 26:** Flashback to the `Veggie` hardware on the International Space Station and its ground twin at the Space Station Processing Facility (`SSPF`): `APEX 03-1` *Arabidopsis* seedlings growing in microgravity.

- **Page 27:** Earlier `BRIC` shuttle studies showed cell-wall genes reprogramming in orbit—but transcriptomes alone never proved which sugars and polysaccharides physically changed in the root wall.

- **Page 28:** Inside a high-throughput robotic ELISA workstation (`384-well` plates), `4 M KOH` root cell-wall extracts face a battery of glycan-directed monoclonal antibodies (`mAbs`).

**Pages 29–30 (Cliffhanger):**

- **Page 29:** On the OSDR accession queue, `OSD-594` locks into place and the next chronological plant study illuminates: **`OSD-615`** (*APEX 03-1* glycome profiling and immunohistochemistry).

- **Page 30:** Close-up on an *Arabidopsis* root tip glowing under immunohistochemical stain, its glycan epitopes shifting in microgravity.

- **Caption:** *Next in Roots in Orbit: Volume 51 (`OSD-615`) — Glycome Profiling of Spaceflight Root Cell Walls (`APEX 03-1`).*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31): Automated Extraction & Pathosystem Matrix

| Parameter | Study Specification (`OSD-594`) |
|---|---|
| **Lysis Hardware & Chemistry** | `CBIO microHomogenizer™` (`2 mL`, `1.1 g` beads, `10 min`) + `TES` (`0.2 M Tris-HCl pH 8`, `10 mM EDTA`, `0.5 M NaCl`, `1% SDS`, `20 µL` Proteinase K); `+40 µL DTT` / no `RNase A` for `RNA` |
| **Pathosystem #1 (Oomycete)** | *Lactuca sativa* `'Outredgeous Red'` + *Pythium aphanidermatum* `P1717` (`24°C`, silica sand, `1.2 g` roots, `656 bp` PCR) |
| **Pathosystem #2 (Fungus)** | *Solanum lycopersicum* `'Red Robin'` + *Fusarium oxysporum* f. sp. *lycopersici* (`FOL`) Race 2 (`22°C`, `0.5%` Phytagel/`0.5×` MS, `7 dpi`, `0.2 g` tissue, `608 bp` `SIX3` PCR) |
| **Pathosystem #3 (RNA Virus)** | *Capsicum annuum* `'Chablis'` + Tomato Mosaic Virus (`ToMV`, `28°C`, `5 dpi` local / `14 dpi` systemic, fresh vs. frozen, `595 bp` RT-PCR) |
| **Dual-Capture Control** | *Arabidopsis thaliana* + *E. coli*: co-amplified `210 bp` `HSP70` (`AT1G09080`) & `394 bp` `16S rRNA` (`799F + 1193R`) |

### Right Spread (Page 32): `MinION Mk1C` Sequencing & Diagnostic Bottlenecks

| Metric / Finding | Quantitative Result (Haveman et al., 2023) |
|---|---|
| **Sequencing Platform** | `MinION Mk1C` (`FLO-MIN106 R9.4`, `SQK-RPB004`, `MinKNOW v21.11.6`, `Filtlong` `≥500 bp` & `Q ≥ 10`) |
| **Flow Cell 1 (`BC05–BC06` Leaves)** | `9.88 Gb` (`9,430,127` raw / `3,098,543` QC reads); mean `2,628.8 bp`, `N50 = 2,884 bp`, mean `Q = 10.7` (`90.10% > Q10`) |
| **Flow Cell 2 (`BC01–BC04` Stem/Root)** | `8.65 Gb` (`7,889,956` raw / `2,178,538` QC reads); mean `2,747 bp`, `N50 = 3,045 bp`, mean `Q = 10.2` (`88.60% > Q10`) |
| **`Tomato–FOL` (`Kraken2` RefSeq)** | `FOL` detected in `BC03` root (`175,019` QC reads), `BC02` stem (`320,626` QC reads), and asymptomatic-mycelium `BC06` leaf (`1,246,833` QC reads); absent in healthy `BC01`/`BC04`/`BC05` |
| **Oomycota Database Gap** | Only `~8` of `420` GenBank Oomycota genomes curated in RefSeq; *P. aphanidermatum* (`BC08`) missed by default `Kraken2` RefSeq until aligned to standalone genome |

## 5. Updated Series Bible JSON
JSON

```
{
  "SERIES_BIBLE_DELTA": {
    "volume": 50,
    "accession": "OSD-594",
    "glds_id": "GLDS-582",
    "doi": "10.26030/qc04-a934",
    "chapter_title": "Blades in the Bead Mill",
    "primary_publication": "Haveman et al. (2023), Frontiers in Plant Science 14:1194753 (PMID: 37389293, PMCID: PMC10304293, DOI: 10.3389/fpls.2023.1194753)",
    "organisms": [
      "Lactuca sativa cv. Outredgeous Red (host) + Pythium aphanidermatum P1717",
      "Solanum lycopersicum cv. Red Robin (host) + Fusarium oxysporum f. sp. lycopersici Race 2",
      "Capsicum annuum cv. Chablis (host) + Tomato Mosaic Virus (ToMV)",
      "Arabidopsis thaliana + Escherichia coli (optimization)"
    ],
    "hardware_and_environment": "KSC/UF Magenta Vessels in microbial incubators (12:12 diel, ~275 µmol/m2/s RGBW LEDs); Claremont BioSolutions microHomogenizer (2 mL, 1.1 g beads) + PureLyse CBBB columns; Oxford Nanopore MinION Mk1C (FLO-MIN106 R9.4, SQK-RPB004)",
    "assays": [
      "Lysis buffer & homogenizer optimization (microHomogenizer vs. OmniLyse-X; TES +/- DTT)",
      "Species-specific PCR & RT-PCR (HSP70, 16S rRNA, P. aphanidermatum, FOL SIX3, ToMV)",
      "Whole-genome shotgun metagenomic sequencing (MinION Mk1C, n=9 barcodes, Kraken2)"
    ],
    "key_actors_added": [
      "microHomogenizer (CBIO 2 mL rotor-bead chamber)",
      "TES Buffer (spaceflight-safe lysis chemistry)",
      "Red Robin (Tomato-FOL Race 2)",
      "Outredgeous Red (Lettuce-Pythium P1717)",
      "Chablis & ToMV (DTT RNA workflow)"
    ],
    "skipped_accessions": "OSD-582 through OSD-593 (non-plant studies, including Drosophila artificial-gravity and rodent missions)",
    "next_chronological_plant_study": {
      "accession": "OSD-615",
      "title": "Glycome profiling and immunohistochemistry uncover changes in cell walls of Arabidopsis thaliana roots during spaceflight: Advanced Plant EXperiment (APEX) 03-1 Raw Dataset",
      "url": "https://osdr.nasa.gov/bio/repo/data/studies/OSD-615"
    }
  }
}

```

Say **"Go on"** when you're ready for **Volume 51**.
