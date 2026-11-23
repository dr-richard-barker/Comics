---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 53
title: "Flap-Cleaved Epialleles"
accession: OSD-625
script_status: partial
pages_covered: 30/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 115)
---

> [!NOTE]
> Script status **partial**: 30/32 pages have their own heading.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles*

- **Volume:** 53

- **Chapter Title:** *Flap-Cleaved Epialleles*

- **OSDR Accession:** `OSD-625` (Version 1 | `GLDS-648` | DOI: `10.26030/rp5n-0d70` | Related Studies: `OSD-416`, `OSD-427` | Source Accession: `PRJNA857037` | License: `CC0-1.0` | Size: `180.71 MB` | Submitted: `22-Jun-2023` | Initial Release: `06-Jun-2024`)

- **Primary Publication:** Zhou, M., Riva, A., Gauthier, M.-P. L., Kladde, M. P., Ferl, R. J., & Paul, A.-L. (2024). *Single-molecule long-read methylation profiling reveals regional DNA methylation regulated by Elongator Complex Subunit 2 in Arabidopsis roots experiencing spaceflight*. *Biology Direct*, `19(1):33` (PMC11059628 | PubMed 38689301 | DOI: `10.1186/s13062-024-00476-z`, published `30-Apr-2024`)

- **Skipped Accessions:** None (directly follows `OSD-624`; `OSD-626` through `OSD-657` contain no plant studies)

- **Hardware & Environment:** `APEX-04-EpEx` (*Advanced Plant Experiment 04 – Epigenetic Expression*) launched aboard **SpaceX CRS-10** (`02/19/2017`–`03/19/2017`). Seedlings grew for `11 days` in **Veggie** (`ISS-Columbus`, mean `19.059°C`) vs. the **ISSES** ground control chamber (`17.143°C`) at NASA Kennedy Space Center under constant `24 h` red/blue LEDs (`100–135 µmol/m²/s` PAR) on `100 mm × 15 mm` Petri plates (`50 mL` `0.5%` phytagel, `0.5×` MS salts, `0.5%` w/v sucrose, `1×` Gamborg's Vitamin Mixture) sealed with `3M Micropore` tape in `APEX Petri Plate Holders`, then fixed in `KFTs` with `RNAlater` (`-80°C`).

- **Organism & Assay Scope:** *Arabidopsis thaliana* (`Col-0` wild-type and `elp2-5` mutant), `11-day-old` roots (`n = 16`: `4` Flight `Col-0` [`FCR`], `4` Ground `Col-0` [`GCR`], `4` Flight `elp2-5` [`FER`], `4` Ground `elp2-5` [`GER`]). `TargetCCSEM` assay: `200 ng` gDNA sonicated on `Bioruptor Pico`, **Flap-Enabled Next-Generation Capture (`FENGC`)** across `108` targets (`509–704 nt`), **NEBNext `EM-seq`** enzymatic conversion, `23` PCR cycles, and **PacBio `Sequel IIe` SMRT** HiFi sequencing (`30-h` CCS movie, `≥3` passes).

## 2. Dramatis Personae (Grounded in Study Data)

- **Elongator Complex Subunit 2 (`ELP2`) / `elp2-5`:** The epigenetic architect of root navigation and defense. Without `ELP2`, orbital roots lose both phototropic light-cueing and inherent coiling, clumping tightly around their germinated seeds.

- **Flap Endonuclease 1 (`FEN1`) & `FOLD` Panel:** The single-tube molecular scalpel. Guided by `18 nM` sequence-specific oligos designed by `FENGC Oligonucleotide Designer` (`FOLD`), thermostable `FEN1` cleaves `5'` flaps at exact user-defined coordinates prior to deamination—eliminating bisulfite primer bias across `108` genic regions (`86–87` spaceflight-associated genes plus an `AT2G46830` internal control).

- **`EMO1` (`AT1G27565`) & `EMO2` (`AT5G52710`):** *ELP2-regulated Methylation in Orbit 1 and 2*—two previously unannotated loci pulled from the dark by single-molecule `DmPPM` screening. `EMO1` harbors an anaerobic-responsive element (`ARE`) beside its TSS; `EMO2` belongs to the copper transport protein family with two `MeJA`-responsive elements. Both act as negative regulators of primary root growth.

- **`PDF1.1` (`AT1G75830`) & Defense Triumvirate (`CML46`, `ABCB17`, `DEFL`):** Four stress and immune loci whose subpopulation epialleles vanish in population-averaged short-read `WGBS` but crystallize along `FENGC` single molecules.

- **PacBio `Sequel IIe` SMRT & `MethylMapper`:** The long-read chronicler. By sequencing `509–704 nt` full-length HiFi amplicons (`93–100%` full-length coverage, filtering out reads with `>3` consecutive methylated `CHH` sites) and plotting them via `MethylMapper`, it reveals `CG`, `CHG`, and `CHH` co-methylation on the exact same DNA strand.

## 3. 32-Page Chapter Script

### Act I: The Averaging Illusion (Pages 1–10)

**Page 1**

- **Panel 1 (Wide Establishing):** Inside `ISS-Columbus`, the **Veggie** facility glows magenta under `24 h` red and blue LEDs (`100–135 µmol/m²/s` PAR). Vertical `100 mm × 15 mm` Petri plates sit locked inside `APEX Petri Plate Holders`.

- **Panel 2 (Close-Up):** On a `Col-0` plate, white roots skew cleanly away from the seed coat across `0.5%` phytagel. On the adjacent `elp2-5` plate, roots coil into a knotted, stunted clump right around the seed.

- **Panel 3 (Inset):** `KFT` plunge—`11-day` roots are plunged into `RNAlater` and frozen at `-80°C`, preserving the exact chromatin state of orbit.

- **Caption:** *SpaceX CRS-10. APEX-04-EpEx. Short-read whole-genome bisulfite sequencing (WGBS) had already mapped the methylome—yet something critical remained smeared across the population average.*

**Page 2**

- **Panel 1:** University of Florida Space Plants Lab. `200 ng` of preserved root gDNA (`GCR`, `FCR`, `GER`, `FER`, `n = 16`) is loaded into a `Bioruptor Pico` (`6` cycles: `5 s` on, `30 s` off in `20 µL` ddH2O).

- **Panel 2:** A visualization of `WGBS` short reads shattering a `600 bp` promoter into disconnected `100 bp` confetti. Methylation percentages (`0.2` threshold) blur together, hiding rare cell subpopulations.

- **Dialogue (Researcher):** "WGBS tells us the *average* cytosine score across thousands of cells. It cannot tell us whether three methyl groups sit on the *same* DNA strand—or in different cells entirely."

**Page 3**

- **Panel 1:** Enter `FOLD`—a terminal screen scrolling `108` target coordinates across `86` spaceflight-responsive genes (`509–704 nt` spans, `19–52%` GC), plus a `558 bp` unmethylated internal control in the `AT2G46830` promoter.

- **Panel 2:** Unlike bisulfite PCR, which forces degenerate primers around uncertain cytosines, `FENGC` oligos (`18 nM` master mix) hybridize to *unconverted* DNA first.

- **Caption:** *Capture before conversion. No degenerate bases. No primer bias.*

**Page 4**

- **Panel 1:** Molecular close-up inside the single-tube reaction: `U1-T` universal oligo and target-specific `oligo-1` and `oligo-2` anneal to genomic DNA, forcing a clean `5'` single-stranded flap to jut outward.

- **Panel 2:** Thermostable `FEN1` locks onto the junction and shears the `5'` flap cleanly at the exact base pair.

- **Panel 3:** `Ampligase` seals `oligo-3` and `U2` (capped with a `3' C3 Spacer`) onto the captured coding strand.

**Page 5**

- **Panel 1:** Exonucleases I and III sweep through the tube like molecular vacuums, digesting every unligated genomic fragment while the `3' C3 Spacer` shields the `108` captured targets.

- **Panel 2:** Now comes **NEBNext `EM-seq`**: TET2/APOBEC enzymatic conversion turns unmethylated `C` into `U` (and `T` after `23` cycles of `KAPA HiFi HotStart Uracil+` PCR), leaving `5mC` intact—achieving `>99%` C-to-T conversion on the `AT2G46830` control.

**Page 6**

- **Panel 1:** Quality check on `Agilent TapeStation D1000` and `Qubit 3`: razor-sharp amplicon peaks centered around `572–580 nt`.

- **Panel 2:** Loading onto the **PacBio `Sequel IIe` SMRT** cell for a `30-hour` circular consensus (`CCS`) HiFi movie (`≥3` polymerase passes per molecule).

- **Caption:** *Read depths climb from `24,173` (`SRS13753906`) to `121,897` (`SRS13753909`) reads per sample—`~90%` strictly on target.*

**Pages 7–8 (Double-Page Spread Anchor): *The Single-Molecule Lens***

- **Visual Layout:** A sweeping two-page architectural diagram splitting reality in half. On the left (`WGBS`), a flat gray bar chart averages `1,000` cells into a single deceptive line. On the right (`FENGC` + `Sequel IIe`), `1,000` horizontal DNA strands stack like geological strata—each row a single `580 nt` molecule from one cell. Red blocks mark consecutive methylated cytosines (`5mC`); black blocks mark unmethylated stretches; gray marks transitions. Three parallel columns (`CG`, `CHG`, `CHH`) align vertically for *every single molecule*.

- **Anchor Caption:** *Median coverage: `144×` (`GCR`), `612×` (`FCR`), `211×` (`GER`), `791×` (`FER`). `93–100%` of mapped reads span the entire target from end to end. For the first time in spaceflight plant biology, every epiallele stands alone.*

**Page 9**

- **Panel 1:** `MethylMapper` filters out incomplete conversion artifacts (`>3` consecutive methylated `CHH` sites). Correlation between biological replicates hits `r > 0.93`, and `FENGC` vs. `WGBS` averages align at `r > 0.95`.

- **Panel 2:** Yet when the team computes **Differential Methylation Proportion Per Molecule (`DmPPM`)** rather than single-site `DmCs`, the hidden layer erupts: `12` targets in `12` genes shift dramatically between flight and ground.

**Page 10**

- **Panel 1:** In `Col-0`, `8` targets show `CG` `DmPPM`, `2` show `CHG`, and `7` show `CHH`. In `elp2-5`, `5` show `CG`, `2` show `CHG`, and `2` show `CHH`.

- **Panel 2:** Of all those `DmPPM` hits, `WGBS` had caught only *one* `CHH` target in `Col-0` and *two* `CHG` targets in `elp2-5`. The rest were invisible subpopulations.

### Act II: Footprints in the Dark (Pages 11–22)

**Page 11**

- **Panel 1:** First target: **`CML46` (`AT5G39670`)**, a calmodulin-like defense gene down-regulated in orbital `Col-0` (`FCR` vs. `GCR`) but untouched in `elp2-5`.

- **Panel 2:** Zooming into the `CML46` promoter around a `MYB`-like binding element: `WGBS` missed any `DmCG` (`>0.2`, `FDR < 0.01`), yet `FENGC` reveals `12%` of `FCR` molecules carry consecutive methylated `CG` blocks flanking the `MYB` site—nearly double `GCR`'s `6.9%`.

**Page 12**

- **Panel 1:** Second target: **`ABCB17` (`AT3G28380`)**, an ATP-binding cassette transporter repressed in `FCR`. Average `CG` profiles look identical across all four conditions.

- **Panel 2:** Single-molecule stacking exposes the truth: `3.7%` of `FCR` molecules carry `≥6` consecutively methylated `CG` sites in the gene body, compared to just `0.8%` in `GCR`.

**Page 13**

- **Panel 1:** Third target: **`DEFL` (`AT4G22217`)**, a defensin-like promoter. Again, averaged methylation lines lie flat and indistinguishable.

- **Panel 2:** `CG` `mPPM` spikes in `FER` vs. `GER`, matching `DEFL`'s transcriptional repression when `ELP2` is lost in orbit. `ELP2` normally shields `DEFL` from promoter hypermethylation in space.

**Page 14**

- **Panel 1:** Fourth target: **`PDF1.1` (`AT1G75830`)**, a plant defensin induced by spaceflight in `elp2-5`. The captured promoter houses a `MeJA`-responsive element.

- **Panel 2:** Three-context single-molecule heatmaps (`120` `GCR`, `1,009` `FCR`, `345` `GER`, `1,310` `FER` full-length reads) cascade down the page. Inside `97.9%` of reads, `CG > CHG` methylation; in `87.5%`, `CHG > CHH`.

**Page 15**

- **Panel 1:** Close-up on the first two `CG` sites flanking `PDF1.1`'s `MeJA` motif: a crisp, unmethylated black "footprint" carves through the red methylation wall.

- **Panel 2:** Quantification bars rise step by step: `8.4%` (`GCR`) → `18.0%` (`FCR`) → `39.4%` (`GER`) → `44.0%` (`FER`). Inside those footprinted molecules, `CHG` and `CHH` methylation also drop in lockstep.

**Page 16**

- **Panel 1:** `DAVID` Gene Ontology screening runs across all `12` `DmPPM` genes. Nine carry known stress or defense annotations. Three return blank—*biological process unknown*: `AT1G27565`, `AT5G52710`, and `AT4G04990`.

- **Dialogue (Researcher):** "If `FENGC` spots subpopulation epialleles in genes nobody has named yet, those molecules are pointing straight at unmapped spaceflight hardware."

**Page 17**

- **Panel 1:** **`AT1G27565`**—soon christened **`EMO1`** (*ELP2-regulated Methylation in Orbit 1*). Its captured promoter carries an anaerobic-responsive element (`ARE`) right beside the transcription start site (`TSS`).

- **Panel 2:** In orbit, `EMO1` surges in `elp2-5` (`FER` vs. `GER`) while staying silent in `Col-0`. `FENGC` reveals methylation-free footprints spreading across the `3'` end beside the `TSS` in `FCR` and `elp2-5` subpopulations.

**Page 18**

- **Panel 1:** **`AT5G52710`**—christened **`EMO2`**, a copper transport family gene carrying *two* `MeJA`-responsive elements in its promoter.

- **Panel 2:** Unlike `EMO1`, `EMO2` is repressed both by spaceflight and by `elp2-5` loss. Its `mPPM` climbs across `CG`, `CHG`, and `CHH` in `FER` vs. `GER`.

**Page 19**

- **Panel 1:** Inside `Col-0`, `EMO2`'s two `MeJA` motifs sit inside clean, hypomethylated `CG` footprints—while `CHG` peaks sharply inside the motifs when `ELP2` is inactivated (`elp2-5`), erasing the `CG` footprints and breaking `CG`/`CHG`/`CHH` coordination.

**Page 20**

- **Panel 1:** **`AT4G04990`**, encoding a serine/arginine repetitive matrix-like protein whose mRNA travels between roots and shoots, with a `TC`-rich stress repeat in its promoter.

- **Panel 2:** Zero `DmCs` in `WGBS`. Zero average methylation shifts in `FENGC`. Yet `CG` and `CHH` `DmPPM` shift in `Col-0` flight roots, tightening `CG`–`CHG` co-methylation in a cell subpopulation as expression drops.

**Page 21**

- **Panel 1:** Back in the greenhouse and tissue-culture lab, the team orders T-DNA insertion lines from ABRC for all three unknown genes: `SALK_092504` (`emo1-1`), `SAIL_344_F07` (`emo1-2`), `SALK_140748C` (`emo2-1`), `SALK_091636C` (`emo2-2`), plus `SAIL_205_A08` and `WiscDsLox441G3` (`AT4G04990`).

- **Panel 2:** `qPCR` against `UBQ11` (`AT4G05050`) confirms knock-out/knock-down across every mutant line.

**Page 22**

- **Panel 1:** Seeds are cold-stratified at `4°C` for `3 days`, plated on `0.5×` MS medium, and racked vertically at `21°C` under `24 h` LEDs (`~100 µmol/m²/s` PAR) to mimic **Veggie**.

- **Caption:** *Now, let the roots speak.*

### Act III: Negative Regulators & The Beamline Ahead (Pages 23–30)

**Page 23**

- **Panel 1:** Day 4 and Day 7 photographs (`n = 33–55` seedlings per line). `AT4G04990` mutants match `Col-0` wild-type length.

- **Panel 2 (Close-Up):** `emo1-1`, `emo1-2`, `emo2-1`, and `emo2-2` primary roots shoot visibly past `Col-0` across the agar (`10 mm` scale bar).

**Page 24**

- **Panel 1:** `ImageJ` `JFilament` traces and `RootMeasurement` R-script boxplots confirm it: both `4-day` and `7-day` primary root lengths and daily elongation rates (`0–4 d` and `4–7 d`) are significantly higher in `emo1` and `emo2` mutants than `Col-0`.

- **Caption:** *Loss of `EMO1` or `EMO2` accelerates root elongation. In wild-type plants, both genes act as brakes on root growth.*

**Page 25**

- **Panel 1:** To test whether `EMO1` or `EMO2` steer *direction* as well as *speed*, plates are mounted onto a `2-D` clinostat rotating at `4 rpm` until Day 7, while a parallel set is reoriented `90°` to the horizontal (`0 h`, `6 h`, `24 h`).

- **Panel 2:** On the `4 rpm` clinostat, `emo1` and `emo2` roots still outgrow `Col-0`—yet neither mutant alters its gravitropic bending response.

**Page 26**

- **Panel 1:** A synthesis diagram links the threads: `ELP2` sits upstream, tuning regional `CG`/`CHG`/`CHH` co-methylation across `EMO1` (repressed by `ELP2` in space), `EMO2` (activated by `ELP2`), and defense genes (`CML46`, `ABCB17`, `DEFL`, `PDF1.1`).

- **Panel 2:** In `elp2-5` on the ISS, losing that regional epigenetic coordination coincides with stunted, clumped roots.

**Page 27**

- **Panel 1:** A side-by-side comparison table renders in crisp ink: `Multiplexed PCR` (`<200 bp`, `50.9%` on-target), `Probe hybridization` (`55×`, `52.9%` on-target, high cost), `CRISPR-based` (`3.04%` on-target, `1` gene), vs. **`FENGC`** (`>500 bp`, `10–5,000×`, `~90%` on-target, `102+` genic regions, long-read `EM-seq`).

**Page 28**

- **Panel 1:** The `APEX-04` `KFT` tubes return to `-80°C` storage, their `180.71 MB` of PacBio HiFi epialleles archived in `PRJNA857037` and `OSD-625`.

- **Dialogue (Researcher):** "Microgravity rewrote where a cell puts its methyl marks—not across the whole root at once, but molecule by molecule, subpopulation by subpopulation."

**Pages 29–30 (Cliffhanger Spread): *Beyond the Magnetosphere***

- **Page 29 (Panel 1):** Earth's magnetic field lines curve across a darkened orbital horizon, shielding the ISS from the worst of deep space.

- **Page 29 (Panel 2):** A warning monitor flashes: *Microgravity is only half the deep-space equation. Beyond low Earth orbit, there is no magnetosphere.*

- **Page 30 (Full-Bleed Splash):** Inside the **NASA Space Radiation Laboratory (NSRL)** at **Brookhaven National Laboratory**, flasks of `10-day-old` *Arabidopsis* seedlings sit aligned in a heavy-ion beamline. Sequential pulses—**proton, helium, oxygen, silicon, and iron ions**—flash across a `20-minute` acute exposure (`40 cGy` and `80 cGy`) simulating **Galactic Cosmic Rays (GCRs)**, triggering DNA repair cascades while shutting down glucosinolate defense pathways.

- **Cliffhanger Tag:** *Next in **OSD-658**: Simulated Galactic Cosmic Rays hit Arabidopsis—and the genome fights back.*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31): `FENGC` Assay & Sequencing Metrics (`OSD-625`)

| Metric | Specification / Value | Notes |
|---|---|---|
| **Target Panel (`FOLD`)** | `108` regions (`86–87` genes + `AT2G46830`) | `509–704 nt` (mean `580 nt`, median `572 nt`) |
| **On-Target & Full-Length** | `~90%` on-target; `93–100%` full-length | `19–52%` GC; `82%` targets `≥10` reads |
| **Median Coverage (4 Reps)** | `144×` (`GCR`), `612×` (`FCR`), `211×` (`GER`), `791×` (`FER`) | `24,173`–`121,897` HiFi reads/sample (`≥3` passes) |
| **`EM-seq` Conversion** | `>99%` C-to-T (`AT2G46830` `558 bp` control) | `r > 0.93` (reps); `r > 0.95` (`FENGC` vs. `WGBS`) |

### Right Spread (Page 32): Key `DmPPM` Loci & `EMO` Phenotypes

| Locus | Category & Motif | Single-Molecule `FENGC` Signal | Functional / Growth Outcome |
|---|---|---|---|
| **`CML46`** (`AT5G39670`) | Defense; `MYB`-like promoter | `12%` (`FCR`) vs. `6.9%` (`GCR`) consecutive `CG` | Down-regulated in `FCR`; `ELP2`-dependent |
| **`ABCB17`** (`AT3G28380`) | Transporter; gene body | `3.7%` (`FCR`) vs. `0.8%` (`GCR`) `≥6` `CG` block | Repressed in `FCR`; missed by `WGBS` `DmCs` |
| **`PDF1.1`** (`AT1G75830`) | Defensin; `MeJA` promoter | Unmethylated `CG` footprint (`8.4%`→`44.0%`) | `CG > CHG` (`97.9%`), `CHG > CHH` (`87.5%`) |
| **`EMO1`** (`AT1G27565`) | Unknown; `ARE` beside `TSS` | `3'` unmethylated `CG` spans in `FCR`/`elp2-5` | `emo1-1`/`1-2` faster roots; normal gravitropism |
| **`EMO2`** (`AT5G52710`) | Copper family; `2× MeJA` | `CG` footprints lost & `CHG` peaks in `elp2-5` | `emo2-1`/`2-2` faster roots; normal gravitropism |

## 5. Updated Series Bible JSON
JSON

```
{
  "SERIES_BIBLE_DELTA": {
    "volume_completed": 53,
    "chapter_title": "Flap-Cleaved Epialleles",
    "osdr_accession": "OSD-625",
    "glds_accession": "GLDS-648",
    "doi": "10.26030/rp5n-0d70",
    "bioproject": "PRJNA857037",
    "skipped_accessions": "None (directly follows OSD-624; OSD-626 through OSD-657 contain no plant studies)",
    "primary_publication": {
      "citation": "Zhou, M., Riva, A., Gauthier, M.-P. L., Kladde, M. P., Ferl, R. J., & Paul, A.-L. (2024). Biology Direct, 19(1):33.",
      "doi": "10.1186/s13062-024-00476-z",
      "pmc": "PMC11059628",
      "pmid": "38689301"
    },
    "mission_and_hardware": {
      "experiment": "APEX-04-EpEx",
      "flight": "SpaceX CRS-10 (02/19/2017–03/19/2017)",
      "hardware": "Veggie (ISS-Columbus) vs. ISSES chamber (KSC), 24 h LEDs (100–135 µmol/m²/s PAR), KFTs with RNAlater (-80°C)",
      "assay": "FENGC (108 targets, FEN1 + Ampligase + NEBNext EM-seq) + PacBio Sequel IIe SMRT HiFi (30-h CCS)"
    },
    "key_entities_introduced": [
      "FENGC (Flap-Enabled Next-Generation Capture) & FOLD oligo designer",
      "MethylMapper single-molecule co-methylation pipeline",
      "DmPPM (Differential Methylation Proportion Per Molecule)",
      "EMO1 (AT1G27565) & EMO2 (AT5G52710) — negative root growth regulators",
      "Defense loci: CML46 (AT5G39670), ABCB17 (AT3G28380), DEFL (AT4G22217), PDF1.1 (AT1G75830)"
    ],
    "next_queued_accession": "OSD-658"
  }
}

```

Say **"Go on"** when you're ready for **Volume 54**.
