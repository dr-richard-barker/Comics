---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 21
title: "Seeds Under the Polar Sky"
accession: OSD-210
script_status: partial
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 49)
---

> [!NOTE]
> Script status **partial**: 32/32 pages have their own heading; condensed ranges: 18-22, 25-30.
## 1. Volume Metadata Header

- **Series / Volume:** *Roots in Orbit: The NASA OSDR Plant Chronicles* — Volume 21

- **Chapter Title:** *Seeds Under the Polar Sky*

- **OSDR Accession:** `OSD-210` (*Approaches for Surveying Cosmic Radiation Damage in Large Populations of Arabidopsis thaliana Seeds- an Antarctic Example*)

- **GeneLab ID:** `GLDS-210`

- **Version & Release Date:** Version 1 (Initial Release: `20-Dec-2018`; dataset size: `1.93 GB`)

- **Study DOI:** `10.26030/cxya-dg98`

- **Source Accession:** `GSE121111` (GEO; SRA runs `SRR8003570`–`SRR8003574`)

- **Payload & Mission:** **Cosmic Ray Exposure Sequencing Science (`CRESS`)** secondary payload aboard the **Boron And Carbon Cosmic Rays in the Upper Stratosphere (`BACCUS`)** high-altitude Antarctic balloon flight (`11/28/2016`–`12/28/2016`, McMurdo Station, `36–40 km` altitude, `30-day` float), paired with a ground-based Galactic Cosmic Ray (`GCR`) simulation at the **NASA Space Radiation Laboratory (`NSRL`)** at **Brookhaven National Laboratory (`BNL`)**.

- **Primary Publication:** Califar, B., Tucker, R., Cromie, J., Haveman (Sng), N., Schmitz, R.A., Callaham, J.A., Barbazuk, B., Paul, A.-L., & Ferl, R.J. (2018). *Approaches for Surveying Cosmic Radiation Damage in Large Populations of Arabidopsis thaliana Seeds – Antarctic Balloons and Particle Beams*. *Gravitational and Space Research* `6(2):54–73` (DOI: `10.2478/gsr-2018-0010`).

- **Organism & Genotype:** *Arabidopsis thaliana* ecotype Columbia-0 (`Col-0`, ABRC seed stock `CS70000`).

- **Hardware & Conditions:**

  - **Antarctica (`ANT`):** `1U CubeSat`-spec (`10 cm × 10 cm × 10 cm`, `≤ 1.33 kg`) `VeroClear` 3D-printed containment vessel (`Objet Eden` / `PolyJet`, `1 atm` internal pressure) holding `4` modified `1536`-well seed trays (`576` bins per tray, `~250` seeds/bin; `580,000` seeds total in abstract/OSDR, `~500,000` in methods text) flanked by `12` `CR-39` Solid-State Nuclear Track Detectors (`SSNTDs`).

  - **Brookhaven (`BNL` / `NSRL`):** Single `5.4 cm × 5.4 cm` seed cassette (`~145,000` seeds) sandwiched between `3` `CR-39` sheets per side inside a modified `T-25` flask, perpendicular to a `20 cm × 20 cm` unidirectional mixed-beam (`H`, `He`, `O`, `Ti` ions).

  - **Post-Exposure Screening:** Wet-sterilized `M0` (and `BNL M1`) seeds vernalized `4–5 d` at `4 °C`, plated at `122` seeds/plate on gridded `0.5%` `Phytagel` (`0.5× MS`, `0.5%` sucrose, `1× Gamborg's Vitamin Mixture`, `Micropore` tape), grown at `19 ± 2 °C` under `24-h` fluorescent light (`~80 µmol m^-2 s^-1 PAR`), scored at `14 d`.

- **Preservation & Assays:** `ANT` payload stored at `-20 °C` post-recovery (returned to Gainesville, FL on `March 29, 2017`); tray `#1` and `CR-39` sheets `#8–10` moved to `4 °C`. `CR-39` etched in `6M NaOH` (`8 h` at `82 °C`) and scanned by X-ray Micro-CT (`Phoenix v|tome|x m`). Mutant seedlings flash-frozen in liquid nitrogen (`-80 °C`); high-MW gDNA (`> 40 kb`, `600 ng`/sample) barcoded, size-selected (`SageELF`, `5–20 kb`, `~10 kb` avg), and sequenced on `PacBio Sequel` (`LR-SMRT` cell, `20-hr` run, `8.04 Gb` total / `~6.7 Gb` demultiplexed), analyzed via `NGMLR` (`v0.2.7`) + `Sniffles` (`v1.0.8`) + `Circos` (`v0.69-2`).

- **Chronology Note:** `OSD-209` (mouse liver proteome) is skipped as non-plant; `OSD-210` follows `OSD-208` (Vol. 20) as the next sequential plant study in OSDR.

## 2. Dramatis Personae (Grounded in Study Data)

- **Dr. Robert J. Ferl & Dr. Anna-Lisa Paul (Principal Investigators, University of Florida):** Returning from Vol. 20's root-apex microdissection (`OSD-208`), they pivot from orbital transcriptomics to a cosmic radiation question: how do you catch single High-Z and Energy (`HZE`) particle hits across half a million seeds?

- **Brandon Califar (Lead Author, University of Florida):** Geneticist spearheading the `CRESS` post-flight screen, mutant tracking nomenclature (`180812_M0_ANT_F3-2_L12_8D`), modified LeFrois gDNA extraction, and `PacBio Sequel` structural-variant (`SV`) pipeline.

- **Rachel Tucker, Juliana Cromie, Natasha Haveman (Sng), R. Austin Schmitz, Jordan A. Callaham & Bradley Barbazuk (UF Research Team):** Co-authors executing seed de-integration, gridded `Phytagel` plating (`18` bins per group), stereomicroscopy, and sequencing bioinformatics, alongside `UF ICBR` (`Dr. David Moraga`, `Dr. Yanping Zhang`) and NASA sponsors (`Dr. Howard Levine`, `Dr. Ye Zhang`, `Space Act Agreement KCA-4572-1`).

- **The `CRESS` CubeSat & `CR-39` Track Witnesses:** The `VeroClear` `1U` vessel riding piggyback on `BACCUS`, whose `12` polyallyl diglycol carbonate (`CR-39`) sheets record microscopic conical entry/exit pits wherever a cosmic ray punches through.

- **The Sequenced Five (`GSM3426324`–`GSM3426328`):**

  - `Mutant1-M0ANT W3-2 D7` (`GSM3426324` / `SRR8003570`) & `Mutant2-M0ANT H16-2 K9` (`GSM3426325` / `SRR8003571`): `ANT M0` "rootless" seedlings (`15` and `11` translocations).

  - `Mutant4-M1BNL H13-1 H10` (`GSM3426326` / `SRR8003572`) & `Mutant5-M1BNL P18-3 F3` (`GSM3426327` / `SRR8003573`): `BNL M1` heritable mutants—delayed root growth (`15` translocations) and malformed single cotyledon (`9` translocations). *(Note: OSDR's Sample Table copy-pastes `"from the M0 generation of ANT plants"` in their genotype column, though `MESH Cosmic Radiation: BNL simulation`, the OSDR extraction protocol, and Califar et al. confirm both are `BNL M1` individuals.)*

  - `Mutant7-M0ANT-Pooled-Mutants` (`GSM3426328` / `SRR8003574`): `6` severely stunted `ANT M0` seedlings pooled (`P19-1 H2`, `R2-1 E12`, `P19-1 H3`, `R2-2 F7`, `P19-1 G12`, `C18-2 C10`), carrying `12` translocations and a striking `96` inverted duplications (`INVDUPs`).

## 3. 32-Page Chapter Script

### Act I: Polar Balloon & Particle Beam (Pages 1–10)

**Page 1 (Splash Page)**

- **Visual:** Wide aerial angle over the blinding white Ross Ice Shelf at McMurdo Station, Antarctica (`Nov 28, 2016`). A towering helium-filled stratospheric balloon swells against a cobalt polar sky, tethering the `BACCUS` gondola. Tucked onto one corner of the support frame—highlighted by a crisp red technical callout—sits a translucent `10 cm × 10 cm × 10 cm` `1U CubeSat` box: `CRESS`.

- **Caption (Narration):** *"Beyond Low Earth Orbit, Galactic Cosmic Rays don't negotiate. One percent of them are HZE ions—stripped nuclei from lithium to iron—tearing straight through spacecraft walls."*

- **Caption:** *"To map what they do to a plant genome, you don't need a rocket. You just need 580,000 seeds, twelve sheets of plastic, and a polar wind."*

**Page 2 (4-Panel Grid)**

- **Panel 1:** Close-up of a University of Florida lab bench. Hands slice a `1536`-well `Nunc` plate into a `24 × 24` grid (`576` bins), each bin packed with `~250` tiny *Arabidopsis thaliana* (`Col-0`, `CS70000`) seeds stacked vertically under polyolefin sealant film.

- **Panel 2:** Exploded CAD-style cutaway of the `ANT` payload: four seed cassettes stacked inside a custom 3D-printed holder, interleaved with `CR-39` `SSNTD` sheets—three at each end, two between each tray—sealed inside a `VeroClear` `PolyJet` vessel holding `1 atm`.

- **Panel 3:** Parallel setup at `NSRL`, Brookhaven National Laboratory (`BNL`): a single `5.4 cm × 5.4 cm` seed cassette (`~145,000` seeds) flanked by `3` `CR-39` sheets per side, tucked inside a modified `T-25` flask.

- **Panel 4:** The `20 cm × 20 cm` `NSRL` particle beam aperture firing unidirectional `H` (`250 MeV`, `10.60 cGy`), `He` (`250 MeV`, `3.170 cGy`), `O` (`350 MeV`, `1.080 cGy`), and `Ti` (`300 MeV`, `0.735 cGy`) ions straight through the flask at `0.166` dose rate.

**Page 3 (3-Panel Vertical)**

- **Panel 1:** Travel log map tracing `CRESS` from Gainesville, FL through `NASA Wallops Flight Facility` and New Zealand (`Nov 2–16, 2016`) to McMurdo cold stowage.

- **Panel 2:** Six hours before launch: gloved technicians bolt the `CRESS` vessel onto the corner of `BACCUS` on the ice.

- **Panel 3:** GPS track spiraling over the Antarctic continent (`36–40 km` altitude) across `30` days (`Nov 28 – Dec 28, 2016`). Solar activity logs from `USAF/NOAA` read *low to very-low*—meaning Galactic Cosmic Rays, not solar flares, are the main visitors.

**Page 4 (4-Panel Grid)**

- **Panel 1:** Recovery on the Antarctic ice. The `CRESS` payload is packed straight into `-20 °C` cold storage.

- **Panel 2:** `March 29, 2017` — the chilled crate arrives back in Gainesville, Florida.

- **Panel 3:** De-integration at UF: Brandon Califar lifts out **Seed Tray `#1`** (the top tray, closest to the incoming sky) and `CR-39` detectors `#8–10`, transferring them to `4 °C` while trays `#2–4` stay frozen at `-20 °C`.

- **Panel 4:** `18` bins from `ANT` and `18` bins from `BNL` are randomly selected—`36` bins total, `~250` seeds per bin—and poured into `1.5 mL` microcentrifuge tubes.

**Page 5 (4-Panel Grid)**

- **Panel 1:** Hot chemical bath: `CR-39` sheets submerged in `6M NaOH` at `82 °C` for `8` hours, etching microscopic radiation scars into visible conical pits.

- **Panel 2:** Split-screen under the `Olympus SZX12` stereomicroscope: `BNL` `CR-39` (left) is peppered with dense, uniform, unidirectional pinholes; `ANT` `CR-39` (right) shows sparse, angled entry-and-exit cones cutting obliquely across the polymer.

- **Panel 3:** High-magnification compound view (`25 µm` scale bar): crisp elliptical craters on both upper and lower surfaces of the `CR-39` sheet.

- **Panel 4:** The `Phoenix v|tome|x m` X-ray Micro-CT scanner rotates `CR-39` sheet `#8` through `360°`, capturing `2,500` images at `109×` magnification to reconstruct 3D ion trajectories in `Volume Graphics v3.2`.

**Page 6 (3-Panel)**

- **Panel 1:** Wet sterilization assembly line: `70%` ethanol (`5 min`), `50%` bleach with `Tween-20` (`10 min`), six sterile water rinses, then `4–5` days of `4 °C` vernalization.

- **Panel 2:** Under a laminar flow hood, `122` `M0` seeds are placed one-by-one onto `1 cm²` grid squares on `150 mm × 15 mm` `0.5%` `Phytagel` plates (`0.5× MS`, `0.5%` sucrose, `1×` Gamborg's vitamins, `Micropore` tape).

- **Panel 3:** Growth chamber at `19 ± 2 °C` under `24-h` fluorescent light (`~80 µmol m^-2 s^-1 PAR`). A barcode label reads: `180812_M0_ANT_F3-2_L12_8D`.

**Pages 7–8 (Double-Page Spread: Day-14 Mutant Screen)**

- **Visual:** A sweeping overhead view of gridded `Phytagel` plates under `Axiocam 506 Color` camera lights at `Day 14`. Red-outlined grid squares mark ungerminated seeds; green squares hold healthy `Col-0` rosettes; amber and crimson squares spotlight the anomalies.

- **Data Callout Boxes (Grounded in Califar et al., 2018):**

  - **Germination (`M0`):** Control `98%` vs. `ANT M0` `82.5%` vs. `BNL M0` `76.4%` (`p < 0.01` vs. control; no significant difference between `ANT` and `BNL`).

  - **Somatic Mutation Rate (`M0`):** Control `1` aberration per `100` germinated seeds vs. `ANT M0` `4` per `100` vs. `BNL M0` `12` per `100` (`p < 0.01`).

  - **Next Generation (`BNL M1`, `13` stocks × `244` seeds):** Germination rebounds to `~98%` (`p < 0.01` vs. `BNL M0`), yet somatic aberrations persist at `6` per `100` (`p < 0.05` vs. control)—proving radiation-induced lesions are heritable!

**Page 9 (4-Panel Grid)**

- **Panel 1:** Stereomicroscope close-up of `Mutant1-M0ANT W3-2 D7` (`14 d`): healthy-looking cotyledons, zero primary root.

- **Panel 2:** `Mutant2-M0ANT H16-2 K9` (`16 d`): another `ANT M0` "rootless" survivor clinging to the agar surface.

- **Panel 3:** `Mutant4-M1BNL H13-1 H10` (`14 d`): delayed root growth in the `M1` generation; `Mutant5-M1BNL P18-3 F3` (`14 d`): a lone, malformed single cotyledon.

- **Panel 4:** Six tiny, severely stunted `ANT M0` dwarfs (`P19-1 H2`, `R2-1 E12`, `P19-1 H3`, `R2-2 F7`, `P19-1 G12`, `C18-2 C10`)—each too small (`< 1 µg` DNA yield alone) to sequence solo. Califar decides to pool all six into `Mutant7-M0ANT-Pooled-Mutants`.

**Page 10 (3-Panel)**

- **Panel 1:** Liquid nitrogen vapor erupts as stunted mutants (`10–20 mg` fresh weight) are flash-frozen in tubes and stored at `-80 °C`.

- **Panel 2:** Robert Ferl and Anna-Lisa Paul review the `Axiocam` plates.

- **Dialogue (Paul):** *"Microarrays and short-read RNA-seq showed us how plants react to flight. Now we need to see the actual scars in the chromosomes."*

- **Dialogue (Ferl):** *"No phenol-chloroform losses. Keep the fragments long, and put them on the PacBio Sequel."*

### Act II: Long Reads & Broken Chromosomes (Pages 11–22)

**Page 11 (4-Panel Grid)**

- **Panel 1:** Modified LeFrois et al. (2016) DNA extraction: frozen tissue ground directly in liquid nitrogen without wash buffer, skipping the phenol/chloroform/isoamyl alcohol step to preserve every nanogram.

- **Panel 2:** Overnight `-20 °C` precipitation with `7.5M` ammonium acetate and `95%` ethanol, followed by three `70%` ethanol rinses and resuspension in `0.25× TE`.

- **Panel 3:** `Qubit` fluorometer readout (`Table 2`):

  - `Mutant1-M0ANT W3-2-D7`: `678 ng` (`DIN 6.6`)

  - `Mutant2-M0ANT H16-2-K9`: `1,176 ng` (`DIN 6.4`)

  - `Mutant4-M1BNL H13-1-H10`: `768 ng` (`DIN 6.6`)

  - `Mutant5-M1BNL P18-3-F3`: `1,482 ng` (`DIN 6.8`)

  - `Mutant7-M0ANT (Pooled)`: `833 ng` (`DIN 5.9`)

- **Panel 4:** `Agilent TapeStation` trace confirms high-molecular-weight DNA (`> 40 kb`), `A260/280` `1.8–2.0`.

**Page 12 (4-Panel Grid)**

- **Panel 1:** `600 ng` of each sample enters `Covaris g-TUBES` (`7,000 rpm`, two passes), shearing genomic DNA to `~10 kb` inserts.

- **Panel 2:** Enzymatic assembly line: `ExoVII` cleanup → DNA Damage Repair → End Repair → blunt-end ligation of `Barcoded Adaptor kit 8B` SMRTbell adaptors.

- **Panel 3:** All five barcoded libraries are pooled (`350 ng` total) and treated with `ExoIII/ExoVII` to chew away unligated fragments, then loaded onto a `SageELF` `0.75%` agarose gel (`1–18 kb v2`). Wells `5–9` (`5–20 kb`, `~10 kb` average) are harvested.

- **Panel 4:** `8 pM` of library is diffusion-loaded onto a single `LR-SMRT` cell on the `PacBio Sequel` at `UF ICBR` (`Chemistry Bundle 5.0.1`, `SMRTLink 5.1`, `20-hr` movie): `8.04 Gb` raw output, `14.7 kb` average polymerase read length, `~6.7 Gb` demultiplexed.

**Page 13 (3-Panel)**

- **Panel 1:** Terminal screen glowing with `NGMLR` (`v0.2.7`) aligning long subreads to the `TAIR10` `Col-0` reference (`~135 Mbp`), followed by `Sniffles` (`v1.0.8`) with a `5` split-read threshold.

- **Panel 2:** Two public `Col-0` resequencing datasets (`PRJNA314706`, `PRJNA418774`, `~1.5 Gb` each) act as simulated controls—after filtering nuclear-organellar chimeras, shared calls, and `> 500×` coverage artifacts, only `1` structural variant (`SV`) remains in control.

- **Panel 3:** `IGV` (`v2.4`) and `Circos` (`v0.69-2`) light up: colored arcs leap across all five *Arabidopsis* chromosomes.

**Pages 14–15 (Double-Page Spread: The `Circos` Constellation)**

- **Visual:** Four circular `Circos` genome wheels floating across a dark-indigo space-grid background:

  - **(A) `ANT M0` Individuals:** Blue arcs (`Mutant1-M0ANT W3-2 D7`: `15` translocations) and red arcs (`Mutant2-M0ANT H16-2 K9`: `11` translocations).

  - **(B) `ANT M0` Pooled:** Green arcs (`Mutant7-M0ANT-Pooled-Mutants`: `12` translocations).

  - **(C) `BNL M1` Individuals:** Orange arcs (`Mutant4-M1BNL H13-1 H10`: `15` translocations) and black arcs (`Mutant5-M1BNL P18-3 F3`: `9` translocations).

  - **(D) `Col-0` Control:** Nearly empty ring—just `1` translocation link.

- **Caption:** *"Non-homologous end joining (`NHEJ`) stitched broken chromosomes back together—sometimes to the wrong partner. Across stratospheric `ANT` and accelerator `BNL`, the translocation counts (`9` to `15`) tell the same story."*

**Page 16 (4-Panel Grid)**

- **Panel 1:** Zoom into **Chromosome 1 (`chr1:9–15 Mb` and `chr1:23–25 Mb`)** and **Chromosome 5 (`chr5:1–3 Mb`)**—dense clusters of translocation breakpoints appear in both `ANT` and `BNL`.

- **Panel 2:** Glowing chromatin-folding diagram: in `ANT` mutants, `chr1:23–25 Mb` preferentially fuses with `chr3:5–17 Mb`, while both `Mutant1-M0ANT` and `Mutant5-M1BNL` share a bridge from `chr1:23–25 Mb` to `chr2:3–5 Mb`.

- **Panel 3:** **Narration:** *"Breakage isn't purely random. Spatial proximity inside the embryonic nucleus decides which broken ends find each other during repair."*

- **Panel 4:** `Table 3` SV tally flashes on-screen: deletions (`1–8`), duplications (`1–5`), insertions (`2–12`), inversions (`2–7`)—and then a glaring spike in `Mutant7-M0ANT (Pooled)`: **`96` inverted duplications (`INVDUPs`)** vs. `2–4` in every individual mutant.

**Page 17 (3-Panel)**

- **Panel 1:** Califar inspects the `96` `INVDUP` calls in `IGV`, alongside a note from Griffith et al. (2018) on blunt-end SMRTbell adaptor ligation artifacts.

- **Panel 2:** **Dialogue (Califar):** *"Pooling six tiny mutants gave us enough DNA to see translocations—but `96` `INVDUPs` in the pool means we can't tell which seedling carried which scar, or how many came from blunt-end ligation."*

- **Panel 3:** A blueprint note is pinned to the lab board: *Next iteration: A/T overhang adaptor ligation + exclude organellar reads prior to alignment.*

**Pages 18–22 (5-Page Sequence: Inside the Embryonic Nucleus)**

- **Page 18:** Microscopic cutaway of a dormant `Col-0` seed inside Tray `#1`, `Bin W3-2`. A single high-LET cosmic ray streaks through the `VeroClear` wall, pierces `CR-39 #8`, and slams into the embryonic root meristem.

- **Page 19:** Double-strand breaks (`DSBs`) shatter `chr1` and `chr3` simultaneously, accompanied by a burst of reactive oxygen species (`ROS`). Endogenous seed antioxidants neutralize some radicals, but the direct track damage remains.

- **Page 20:** `NHEJ` repair enzymes scramble to ligate the sheared ends, welding `chr1:23–25 Mb` onto `chr3:5–17 Mb`. The embryo survives—but its root-meristem lineage is compromised.

- **Page 21:** `14` days later on `Phytagel`, `Mutant1-M0ANT W3-2 D7` unfolds two green cotyledons into the light, but beneath the seed coat, no primary root ever emerges. Meanwhile, in `BNL`, `M0` survivors pass their repaired rearrangements into `M1` seeds—where `Mutant4` and `Mutant5` inherit the scars.

- **Page 22:** Side-by-side comparison of `BNL` vs. `ANT` phenotypes: `BNL M0` shows elevated shoot-apex discoloration, microgrowth (`crown < 8 mm`), and cotyledon defects (`12` mutations/`100`), while `ANT M0` yields `4` mutations/`100` including albino and rootless mosaics.

### Act III: From Antarctica to Deep Space (Pages 23–32)

**Page 23 (4-Panel Grid)**

- **Panel 1:** `OSDR` curation terminal (`20-Dec-2018`): `GSE121111` and `GLDS-210` (`OSD-210`, `1.93 GB`) go live with `PacBio` BAM/FASTQ runs `SRR8003570`–`SRR8003574`.

- **Panel 2:** **Archivist's Marginalia Box:** A careful metadata callout flags an internal OSDR Sample Table quirk—`GSM3426326` (`Mutant4-M1BNL H13-1 H10`) and `GSM3426327` (`Mutant5-M1BNL P18-3 F3`) carry `MESH Cosmic Radiation: BNL simulation` yet copy-paste `"from the M0 generation of ANT plants"` in the genotype field, whereas the extraction protocol and published paper confirm both are `BNL M1` individuals.

- **Panel 3:** Robert Ferl and Anna-Lisa Paul examine the `BACCUS` flight path map alongside `NSRL` beam logs.

- **Panel 4:** **Dialogue (Ferl):** *"BNL gave us `12` mutations per hundred seeds; Antarctica gave us `4`. Both dropped germination from `98%` to `76.4%` and `82.5%`."*

**Page 24 (3-Panel)**

- **Panel 1:** Close-up of the `CR-39` Micro-CT 3D volume: glowing blue particle tracks pierce the polymer at oblique angles.

- **Panel 2:** **Dialogue (Paul):** *"Antarctica's upper stratosphere doesn't just simulate space—at `36` to `40` kilometers, it delivers real `Z = 6–28` heavy ions at low dose rates (`~5.47 µGy/hr` in historical `TRACER` flights), without buying a rocket."*

- **Panel 3:** A `1U CubeSat` seed cassette sits beside a stack of `Phytagel` plates—a complete end-to-end pipeline from `580,000` dormant seeds to single-molecule structural-variant maps.

**Pages 25–30 (6-Page Sequence: Designing the Deep-Space Seed Vault)**

- **Page 25:** Looking back at seed-stacking geometry: `250` seeds stacked vertically in each `1536`-well bin. Do outer trays (`#1`) shield inner trays (`#2–4`)? Those frozen trays still wait at `-20 °C` in Gainesville.

- **Page 26:** Comparison of `M0` lethality vs. `M1` recovery: `BNL M1` germination snaps back to `98%` because embryos with fatal `DSB`s never germinated in `M0`—yet `6` per `100` `M1` seedlings still carry heritable phenotypes.

- **Page 27:** For future Artemis lunar bases or Mars transits, storing `100,000+` seeds in compact `1U` blocks means every hit leaves a dosimetric record in `CR-39` right next to the embryos.

- **Page 28:** Montage of the five sequenced mutants (`A–D` and pooled `E–J`) fading into their `Circos` translocation rings—the first whole-genome `PacBio SMRT` structural-variant survey of space-irradiated seeds.

- **Page 29:** `University of Florida` lab lights dim as the `PacBio Sequel` run finishes. `Califar et al. (2018)` goes to press in *Gravitational and Space Research* (`Vol. 6(2):54–73`, `Dec 17, 2018`).

- **Page 30:** Transition panel: looking ahead from stratospheric cosmic rays back to the International Space Station, where `Arabidopsis` cell cultures and spaceflight methylomes await in upcoming OSDR accessions.

**Pages 31–32 (Full-Bleed Mission Debrief Infographic Spread)** *(Detailed in Section 4 below.)*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31): Exposure Hardware, Germination & Somatic Mutation Rates

- **Header Banner:** `OSD-210 / GLDS-210 — CRESS (BACCUS Antarctic Balloon vs. BNL NSRL GCR Simulation)`

- **Payload Architecture Panel:**

  - **ANT (`CRESS` `1U CubeSat`):** `10 × 10 × 10 cm` (`≤ 1.33 kg`), `VeroClear` `PolyJet` vessel at `1 atm`; `4` modified `1536`-well trays (`576` bins/tray, `~250` seeds/bin; `580,000` seeds total in OSDR/abstract) + `12` `CR-39` `SSNTD` sheets; `30-day` float (`11/28/2016–12/28/2016`) at `36–40 km` over Antarctica.

  - **BNL (`NSRL` Mixed-Beam):** `1` seed cassette (`~145,000` seeds) + `3` `CR-39` sheets/side in a modified `T-25` flask; `20 × 20 cm` unidirectional beam: `H` (`250 MeV`, `10.60 cGy`), `He` (`250 MeV`, `3.170 cGy`), `O` (`350 MeV`, `1.080 cGy`), `Ti` (`300 MeV`, `0.735 cGy`) at `0.166` dose rate.

- **14-Day Phenotypic Screen (`18` bins/group, `122` seeds/plate, `0.5%` `Phytagel`):**

  - **Germination Rate (`M0`):** Control `98%` | `ANT M0` `82.5%` (`p < 0.01`) | `BNL M0` `76.4%` (`p < 0.01`).

  - **Germination Rate (`BNL M1`):** `~98%` (`13` stocks × `244` seeds; recovered vs. `BNL M0`, `p < 0.01`).

  - **Somatic Mutation Rate (per `100` germinated seeds):** Control `1` | `ANT M0` `4` (`p < 0.01`) | `BNL M0` `12` (`p < 0.01` vs. control & `ANT M0`) | `BNL M1` `6` (`p < 0.05` vs. control).

### Right Spread (Page 32): `PacBio Sequel` Long-Read Structural Variants (`NGMLR` + `Sniffles`)

- **Sequencing Summary:** `5` barcoded `10 kb` libraries (`600 ng` input `> 40 kb` gDNA, `SageELF` `5–20 kb` size selection), single `LR-SMRT` cell (`20-hr` run): `8.04 Gb` total (`14.7 kb` avg polymerase read), `~6.7 Gb` demultiplexed, aligned to `TAIR10`.

- **Sample-by-Sample SV Matrix (`GSM3426324`–`GSM3426328`):**

  - `Mutant1-M0ANT W3-2 D7` (`SRR8003570`): Rootless (`44 d`) — `15` Translocations (`TL`), `6` `DEL`, `5` `DUP`, `5` `INS`, `3` `INV`, `3` `INVDUP`.

  - `Mutant2-M0ANT H16-2 K9` (`SRR8003571`): Rootless (`45 d`) — `11` `TL`, `1` `DEL`, `1` `DUP`, `2` `INS`, `2` `INV`, `2` `INVDUP`.

  - `Mutant4-M1BNL H13-1 H10` (`SRR8003572`): Delayed root (`45 d`, `BNL M1`*) — `15` `TL`, `5` `DEL`, `4` `DUP`, `12` `INS`, `7` `INV`, `4` `INVDUP`.

  - `Mutant5-M1BNL P18-3 F3` (`SRR8003573`): Single malformed cotyledon (`45 d`, `BNL M1`*) — `9` `TL`, `8` `DEL`, `3` `DUP`, `7` `INS`, `2` `INV`, `2` `INVDUP`.

  - `Mutant7-M0ANT-Pooled-Mutants` (`SRR8003574`): `6` pooled dwarfs (`17 & 21 d`) — `12` `TL`, `3` `DEL`, `2` `DUP`, `5` `INS`, `5` `INV`, `96` `INVDUP`.

  - `Col-0` Simulated Controls (`PRJNA314706`, `PRJNA418774`): `1` `TL` post-filtering.

- **Hotspot Note:** Enriched `DSB` translocation clusters at `chr5:1–3 Mb`, `chr1:9–15 Mb`, and `chr1:23–25 Mb` (linking to `chr3:5–17 Mb` in `ANT` and `chr2:3–5 Mb` in both `ANT` & `BNL`). *(*Note: OSDR Sample Table genotype column for `GSM3426326`/`327` erroneously echoes `ANT M0`; extraction protocol and paper confirm `BNL M1`.)*

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "volume": 21,
  "osdr_accession": "OSD-210",
  "glds_id": "GLDS-210",
  "source_accession": "GSE121111",
  "payload_mission": "CRESS (1U CubeSat-spec) on BACCUS Antarctic High-Altitude Balloon (11/28/2016-12/28/2016, 36-40 km) + BNL NSRL Mixed-Beam GCR Simulation",
  "organism": "Arabidopsis thaliana (Col-0, CS70000)",
  "new_hardware_introduced": [
    "CRESS 1U VeroClear PolyJet containment vessel (1 atm, 10x10x10 cm, <=1.33 kg)",
    "Modified Nunc 1536-well seed trays (24x24 = 576 bins, ~250 seeds/bin)",
    "CR-39 Solid-State Nuclear Track Detectors (SSNTDs, 6M NaOH etched, Phoenix v|tome|x m Micro-CT)",
    "Modified T-25 flask seed cassette holder (BNL NSRL)",
    "PacBio Sequel LR-SMRT cell + SageELF size-selection workflow"
  ],
  "molecular_characters": [
    "HZE Galactic Cosmic Ray (GCR) ions (H, He, O, Ti at NSRL; Z=6-28 in upper polar stratosphere)",
    "NHEJ Double-Strand Break (DSB) translocations (chr1:9-15 Mb, chr1:23-25 Mb, chr5:1-3 Mb)",
    "Inverted Duplications (INVDUPs: 96 in Mutant7-M0ANT-Pooled-Mutants)",
    "Mutant1-M0ANT W3-2 D7 & Mutant2-M0ANT H16-2 K9 (rootless M0)",
    "Mutant4-M1BNL H13-1 H10 & Mutant5-M1BNL P18-3 F3 (heritable M1)"
  ],
  "continuity_hooks": [
    "Transition from orbital microgravity transcriptomics (OSD-208) to stratospheric & accelerator cosmic radiation genomics (OSD-210)",
    "First PacBio SMRT whole-genome structural variant characterization of space-irradiated seeds",
    "Remaining ANT seed trays #2-#4 archived at -20 C for future shielding-depth studies",
    "Next sequential plant accession check: OSD-213 / GLDS-213 vs. OSD-217"
  ]
}

```

Say **"Go on"** when you're ready for **Volume 22**.
