---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 54
title: "Six Ions in the Dark"
accession: OSD-658
script_status: partial
pages_covered: 30/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 117)
---

> [!NOTE]
> Script status **partial**: 30/32 pages have their own heading.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles*

- **Volume:** 54

- **Chapter Title:** *Six Ions in the Dark*

- **OSDR Accession:** `OSD-658` (Version 7 | `GLDS-603` | DOI: `10.26030/rxc2-1v61` | Size: `204.84 GB` | Submitted: `07-Sep-2023` | Initial Release: `12-Dec-2023` | Updated: `14-Aug-2026`)

- **Primary Publication:** Dixit, A. R., Meyers, A. D., Richardson, B., Richards, J. T., Richards, S. E., Neelam, S., Levine, H. G., Cameron, M. J., & Zhang, Y. (2023). *Simulated galactic cosmic ray exposure activates dose-dependent DNA repair response and down regulates glucosinolate pathways in arabidopsis seedlings*. *Frontiers in Plant Science*, `14:1284529` (PMC10757676 | PubMed 38162303 | Frontiers | DOI: `10.3389/fpls.2023.1284529`, published `14-Dec-2023`)

- **Skipped Accessions:** `OSD-626` through `OSD-657` (contain no plant studies; `OSD-658` directly follows `OSD-625` in the plant chronology)

- **Hardware & Environment:** Ground radiation study at the **NASA Space Radiation Laboratory (NSRL)**, Brookhaven National Laboratory (Upton, NY), funded by NASA Biological and Physical Sciences (BPS) and the Human Research Program (HRP). `~100` surface-sanitized *Arabidopsis* seeds per `T25` culture flask were grown on `0.5×` MS `0.4%` phytagel (`0.5%` sucrose, `1×` Gamborg vitamins) for `8 days` (`22°C`, `40–45% RH`, `150 µmol/m²/s`, `16h/8h` photoperiod, `400–500 ppm` CO2), shipped overnight in darkness to NSRL, wrapped in `4 layers` of black tissue paper, and held in the dark for `2 days` before, during, and after beamline exposure. At `10 days` old, flasks received acute sequential **Simplified GCR Simulation** (`~20 min` total) at `0 cGy` (`n = 6`), `40 cGy` (`n = 4`), or `80 cGy` (`n = 4`), then were preserved `3 h` post-irradiation in `RNAlater` (`-80°C` after `24 h`).

- **Organism & Assay Scope:** *Arabidopsis thaliana* (`Col-0`, whole `10-day-old` seedlings, `n = 14`). RNA extracted via `Qiagen Plant RNeasy Mini Kit` (on-column DNase), `0.3 µg` input into `TruSeq Stranded Total RNA Library Prep with Ribo-Zero Globin`, sequenced across `3` runs of `75 bp` paired-end reads on **Illumina `NextSeq 550`** (`25.3M`–`38.4M` reads/sample).

## 2. Dramatis Personae (Grounded in Study Data)

- **The Six-Beam Simplified GCR Spectrum (`NSRL GCRSim`):** A `20-minute` sequential particle barrage—`35%` `1000 MeV/n H1`, `39%` `250 MeV/n H1`, `18%` `250 MeV/n He4`, `6%` `350 MeV/n O16`, `1%` `600 MeV/n Si`, and `1%` `600 MeV/n Fe56`—delivering `40 cGy` (modeling a `3.5-year` / `1,278-day` Mars transit at `~42.7 cGy` / `~1.47 Sv`) or `80 cGy` (modeling a `~6-year` Mars surface + transit mission at `~73.2 cGy`).

- **The Dose-Dependent DNA Repair Core (`RAD51`, `PARP2`, `TK1A`, `TSO2`, `SIP4`, `XRI1`):** Six DNA damage sensing and repair genes (alongside defense gene `CP1`) shared across both `40` and `80 cGy` (`FDR ≤ 0.1`) whose transcript levels scale sharply upward with radiation dose (`Kruskal-Wallis p ≤ 0.05`).

- **The `80 cGy` Heavy-Ion Checkpoint Vanguard (`BRCA1`, `PARP1`, `RAD17`, `SYN2`, `TIL1`, `AT1G49980`, `At4G19130`/`RPA`):** Homologous recombination, base excision repair, error-prone bypass (`DinB`-homolog), and `S`/mitosis cell-cycle checkpoint regulators (`CDC6`, `CDC25`, `CYCB2;3`, `EB1C`, `EMB2773`) recruited specifically when exposure doubles to `80 cGy`.

- **The Methionine-Derived Glucosinolate Pathway (`CYP79F2`, `BCAT4`, `MAM3`/`IMS2`, `IMD1`, `FMO GS-OX1`, `BAT5`, `DJ1F`, `MYB29`):** Sulfur-rich secondary metabolites (`isothiocyanate` precursors) that defend brassicas against pathogens and give radishes their spicy bite—sharply suppressed at `40 cGy` (`pathway FDR = 5.5e-10`), potentially conserving `glutathione` and `methionine` for antioxidant radioprotection.

- **The Four-Layer Black Tissue Shield (`T25` Dark-Adapted Seedlings):** Keeping seedlings in total darkness for `48 hours` strips away light-driven photoreactivation and circadian variance, isolating the raw cellular response to ionizing particles.

## 3. 32-Page Chapter Script

### Act I: Beyond the Magnetosphere (Pages 1–10)

**Page 1**

- **Panel 1 (Wide Establishing):** Deep space beyond Low Earth Orbit. No blue-white magnetosphere shields the frame—only starlight and invisible cosmic ray tracks slicing through a Mars transit habitat.

- **Panel 2 (Cutaway):** Inside a transit greenhouse, `10-day-old` *Arabidopsis* seedlings sit in `0.5×` MS phytagel. On Earth, background radiation averages `2.4 mSv/year`. In deep space, plants face `1–2 mSv/day` of Galactic Cosmic Rays (`GCR`)—and half that on the Martian surface beneath `21 g/cm²` of thin atmosphere.

- **Caption:** *A 3.5-year round-trip Mars mission accumulates `~42.7 cGy` (`~1.47 Sv`). A six-year surface-and-transit campaign climbs toward `73.2 cGy`.*

**Page 2**

- **Panel 1:** Kennedy Space Center. Surface-sanitized (`70%` ethanol) `Col-0` seeds (`~100` per `T25` flask) germinate on `0.4%` phytagel (`0.5%` sucrose, `1×` Gamborg vitamins) for `8 days` at `22°C`, `150 µmol/m²/s` light (`16h/8h`).

- **Panel 2:** Overnight courier crate arriving at Brookhaven National Laboratory's **NASA Space Radiation Laboratory (NSRL)** in Upton, NY.

- **Dialogue (Researcher):** "Wrap every `T25` flask in four layers of black tissue paper. Photoreactivation depends on light—if we want the pure ionizing-radiation signal, these seedlings stay in the dark."

**Page 3**

- **Panel 1:** `Day 10`. Two days into total darkness, `14` `T25` flasks are divided into three cohorts: `6` unirradiated Controls (`0 cGy`), `4` for `40 cGy`, and `4` for `80 cGy`.

- **Panel 2:** The NSRL target room. Heavy steel shielding doors slide shut; laser alignment crosshairs lock onto the dark-wrapped flasks.

- **Caption:** *Real GCRs are `85–90%` protons, `10–13%` helium ions, and `1–2%` HZE nuclei. Even `1%` heavy ions carry outsized linear energy transfer (`LET`), carving dense ionization tracks through chromatin.*

**Page 4**

- **Panel 1:** Beamline control console. The operator loads **Simplified `GCRSim`**—six sequential ion beams fired in rapid succession over `~20 minutes`.

- **Panel 2:** First pulse: `35%` `1000 MeV/n` protons (`H1`), followed immediately by `39%` `250 MeV/n` protons (`H1`).

- **SFX:** *HUMMMMMM—*

**Page 5**

- **Panel 1:** Third pulse: `18%` `250 MeV/n` helium ions (`He4`). Inside the leaf primordia, secondary delta-electrons scatter through hydrated cell walls.

- **Panel 2:** Fourth pulse: `6%` `350 MeV/n` oxygen ions (`O16`). The ionization density spikes.

**Page 6**

- **Panel 1:** Fifth and sixth pulses: `1%` `600 MeV/n` silicon (`Si`) and `1%` `600 MeV/n` iron (`Fe56`). Though only `2%` of the total dose, these HZE nuclei punch straight through nuclei like subatomic cannonballs.

- **Caption:** *Twenty minutes. Six particle species. Forty or eighty centigray absorbed.*

**Pages 7–8 (Double-Page Spread Anchor): *Track Structure in the Nucleus***

- **Visual Layout:** A dramatic two-page cross-section of a single `10-day-old` *Arabidopsis* root and cotyledon cell in pitch darkness. Across the top, six color-coded particle trajectories (`H1`, `He4`, `O16`, `Si`, `Fe56`) streak through the `TAIR10` chromatin fibers. Where `Fe56` and `Si` pass, clustered double-strand breaks (`DSBs`) and reactive oxygen species (`ROS`) flare white-hot. Beneath them, repair proteins—`PARP1/2`, `RAD51`, `BRCA1`—converge on the broken DNA ends while `RNAlater` wait-timers tick toward the `3-hour` post-irradiation mark.

- **Anchor Caption:** *Three hours post-exposure—just as repair foci peak—the black tissue is unwrapped and `RNAlater` floods all `14` flasks before freezing at `-80°C`.*

**Page 9**

- **Panel 1:** Case Western Reserve University's Applied Functional Genomics Core. `Qiagen Plant RNeasy` isolates total RNA; `0.3 µg` enters `TruSeq Stranded Total RNA` with `Ribo-Zero Globin`.

- **Panel 2:** Three `75 bp` paired-end runs on **Illumina `NextSeq 550`** yield `25.3M` to `38.4M` reads per sample, mapped via `STAR` (`TAIR10`) and quantified with `RSEM` and `edgeR`.

**Page 10**

- **Panel 1:** Venn diagrams split the transcriptomic storm at `p ≤ 0.01`: `472` genes of interest at `40 cGy` vs. `329` at `80 cGy`, sharing `88` GOIs.

- **Panel 2:** Under stringent `FDR ≤ 0.1`, `78` DEGs emerge at `40 cGy` (`24` up, `54` down) and `39` DEGs at `80 cGy` (`25` up, `14` down). Surprisingly, `40 cGy` triggers *far more* gene downregulation (`48` exclusive down-DEGs) than `80 cGy` (`8` exclusive down-DEGs).

### Act II: The Repair Cascade & The Checkpoint Wall (Pages 11–22)

**Page 11**

- **Panel 1:** Eleven upregulated DEGs (`FDR ≤ 0.1`) are shared by both `40` and `80 cGy`. Boxplots climb in a clean staircase from `0` → `40` → `80 cGy` for `7` of them (`Kruskal-Wallis p ≤ 0.05`).

- **Panel 2:** Six of those seven stair-stepping responders are pure DNA damage machinery: **`RAD51` (`AT5G20850`)**, **`PARP2` (`AT4G02390`)**, **`TK1A` (`AT3G07800`)**, **`TSO2` (`AT3G27060`)**, **`SIP4` (`AT2G30360`)**, and **`XRI1` (`AT5G48720`)**, joined by defense gene **`CP1` (`AT5G49480`)**.

**Page 12**

- **Panel 1:** Molecular close-up on **`PARP2`**: binding broken DNA termini and ribosylating the break site to summon repair crews—activated here at *centigray* doses (`40–80 cGy`), orders of magnitude below classic `10–100 Gy` terrestrial gamma studies.

- **Panel 2:** **`RAD51`** filaments coat single-stranded DNA overhangs, searching for homologous templates to stitch double-strand breaks.

**Page 13**

- **Panel 1:** **`TK1A`** (thymidine kinase 1A) and **`TSO2`** (ribonucleotide reductase) flood the `pyrimidine` and `nucleotide metabolism` KEGG pathways (`ath00240`, `ath01232`, `FDR = 4.90E-03` at `40 cGy`; `1.38E-02` at `80 cGy`), supplying fresh dNTP bricks to patch broken chromosomes.

**Page 14**

- **Panel 1:** At `80 cGy`, the response shifts gear. Fifteen exclusive upregulated DEGs ignite, led by **`BRCA1` (`AT4G21070`)**, **`PARP1` (`AT2G31320`)**, **`RAD17` (`AT5G66130`)**, **`SYN2` (`AT5G40840`)**, **`TIL1` (`AT1G08260`)**, and **`AT1G49980`**.

- **Panel 2:** `KEGG` lights up **`Base excision repair`** (`ath03410`: `PARP1`/`APP`, `p = 1.38E-02`) and **`Homologous recombination`** (`ath03440`: `BRCA1`/`RAD51`, `p = 1.38E-02`).

**Page 15**

- **Panel 1:** `BRCA1` colocalizes with `RAD51` at DSBs, while `AT1G49980`—homolog of yeast/human `DinB` (DNA polymerase kappa)—provides error-prone translesion bypass across stubborn lesions.

- **Dialogue (Researcher):** "Notice what's *missing* at `3 hours`: `ATR` doesn't budge. The `ATM`-linked network—`PARP1/2`, `BRCA1`, `RAD17`, `TSO2`, `TIL1`—is carrying the primary GCR sensing load."

**Page 16**

- **Panel 1:** Expanded `STRING` network (`p ≤ 0.01`) at `80 cGy` reveals `13` unique GO processes centered on **mitotic cell cycle** (`GO:0000278`) and **DNA repair** (`GO:0006281`, `FDR = 2.83E-08`).

- **Panel 2:** **`At4G19130`** (the `70 kDa` Replication Protein A subunit, which the authors propose formally naming **`RPA`**) bridges `RAD51`/`RAD17` repair with `CDC6`, `TIL1` (DNA Pol ε), and cohesin homologs `SYN2`/`SYN3` (`RAD21`).

**Page 17**

- **Panel 1:** Downstream mitotic gates lock down: `CDC25` and `CYCB2;3` (cyclin B2) govern `G2/M` and `M/S` transitions, while `EMB2773` (centromere assembly) and microtubule motors `EB1C`, `AT2G28620` (`RSW7`/`KIF7` homolog), and `AT5G33300` (kinesin-like) stabilize the mitotic spindle.

- **Caption:** *At `80 cGy`, the cell halts division until the heavy-ion breaks are sealed.*

**Page 18**

- **Panel 1:** Shifting focus to the `40 cGy` cohort (`62` unique GO processes): hormone and environmental stimulus pathways (`ACS11`, `BG1`) stir, while a massive metabolic shutdown sweeps across the network.

- **Panel 2:** Three shared down-DEGs drop at both doses (`p ≤ 0.05`): **`CYP79F2` (`AT1G16400`)**, **`ALDH2B7` (`AT1G23800`)**, and **`DR4` (`AT1G7333`)**.

**Page 19**

- **Panel 1:** At `40 cGy`, `48` genes plunge exclusively downward. Six belong directly to **glucosinolate biosynthesis** (`ath00966`, `FDR = 7.00E-07`): **`FMO GS-OX1`**, **`BCAT4`**, **`DJ1F`**, **`BAT5`**, **`IMD1`**, and **`MAM3`** (`IMS2`), alongside **`CYP79F2`**, **`BGLU5`**, and **`CAR7`**.

- **Panel 2:** Under `p < 0.01`, nearly *every* enzyme in aliphatic glucosinolate synthesis and sulfate assimilation (`APR`, `APS1`, `APK`) dims (`pathway FDR = 4.10E-15`).

**Page 20**

- **Panel 1:** Master transcription factor **`MYB29`** drops at both doses (`40 cGy` `LFC = -1.1`, `p = 0.003`; `80 cGy` `LFC = -0.91`, `p = 0.008`).

- **Dialogue (Researcher):** "Why would `40 cGy` suppress glucosinolates *more* strongly at `3 hours` than `80 cGy`? Maybe the higher dose triggered an even faster transient dip—or `40 cGy` hits a specific metabolic triage threshold."

**Page 21**

- **Panel 1:** Inside the cytoplasm, a biochemical fork-in-the-road diagram: **Methionine** and **Glutathione** sit at the crossroads.

- **Panel 2:** Building aliphatic glucosinolates consumes both methionine (as precursor) and glutathione (as conjugate). Under ionizing `ROS` stress, shutting down glucosinolate synthesis may spare glutathione for antioxidant defense and preserve methionine for **one-carbon metabolism** and DNA methylation.

**Page 22**

- **Panel 1:** Two-sided consequence panel: **Left**, a radish and *Arabidopsis* leaf losing `isothiocyanates`—the pungent compounds that give brassicas their spicy flavor *and* fend off bacterial/fungal pathogens. **Right**, a crewed Mars greenhouse where radiation-weakened crops face heightened pathogen susceptibility.

- **Caption:** *Survival first: trade away defense and flavor to protect the genome.*

### Act III: Regolith on the Horizon (Pages 23–30)

**Page 23**

- **Panel 1:** At `80 cGy`, exclusive down-DEGs also hit **`MSRB5` (`AT4G04830`, methionine sulfoxide reductase B5)**, **`MOS9` (`AT1G12530`)**, and **`NP2` (`AT1G54960`)**, hinting at oxidative protein-repair and immune trade-offs.

**Page 24**

- **Panel 1:** A `STRING` comparison side by side: `40 cGy` (`86` GO processes, dominated by sulfur/glucosinolate repression and hormone responses) vs. `80 cGy` (`37` GO processes, dominated by `DNA repair`, `cell cycle`, and `circadian clock` clusters).

**Page 25**

- **Panel 1:** Timeline caveat card: `20 minutes` acute `GCRSim` vs. `1–2 mSv/day` chronic deep-space GCRs; `3 hours` post-exposure vs. multi-day recovery.

- **Caption:** *Acute `NSRL` beams establish the baseline—the exact early switches flipped when HZE ions strike.*

**Page 26**

- **Panel 1:** All `204.84 GB` of `OSD-658` / `GLDS-603` data—`FASTQ`s, `STAR`/`RSEM` counts, and `DESeq2`/`edgeR` tables—lock into NASA OSDR's open repository (`DOI: 10.26030/rxc2-1v61`).

**Page 27**

- **Panel 1:** A hydroponic/phytagel flask dissolves into a blueprint of a deep-space crop bay. Radiation is only one barrier; shipping terrestrial soil to Mars or the asteroids is mass-prohibitive.

- **Dialogue (Agronomist):** "We know how cosmic rays hit plant DNA on agar. Now what happens when we grow actual food crops in the *dirt* waiting for us out there?"

**Page 28**

- **Panel 1:** A sample vial of dark, carbonaceous **CI asteroid regolith simulant** pours onto a lab bench beside bags of peat moss.

**Pages 29–30 (Cliffhanger Spread): *The Carbonaceous Crust***

- **Page 29 (Panel 1):** Inside a `Percival AR-66L` growth chamber (`19.8°C–23.4°C`), three real space-crop species sprout in graded mixtures of **CI carbonaceous asteroid regolith simulant** and peat moss: **lettuce (*Lactuca sativa*)**, **radishes (*Raphanus sativus*)**, and **peppers (*Capsicum annuum*)**.

- **Page 30 (Full-Bleed Splash):** At `55 days after planting`, the simulant surface has hardened into a pale, compacted crust. High pH, low cation exchange capacity, and silt-sized particles lock out water, triggering drought stress—hitting the radishes hardest of all.

- **Cliffhanger Tag:** *Next in **OSD-670**: Lettuce, radishes, and peppers take root in CI asteroid regolith.*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31): `NSRL` Simplified `GCRSim` & Sequencing Parameters (`OSD-658`)

| Parameter | Specification / Value | Notes |
|---|---|---|
| **Sample Cohort (`n = 14`)** | `0 cGy` (`n=6`), `40 cGy` (`n=4`), `80 cGy` (`n=4`) | `10-day-old` `Col-0` seedlings in `T25` flasks (`48 h` dark) |
| **Ion Beam Composition** | `35%` `1000 MeV/n H1`, `39%` `250 MeV/n H1`, `18%` `250 MeV/n He4` | Plus `6%` `350 MeV/n O16`, `1%` `600 MeV/n Si`, `1%` `600 MeV/n Fe56` |
| **Exposure & Harvest** | `~20 min` acute sequential; `RNAlater` at `+3 h` | Stored `-80°C` after `24 h`; `204.84 GB` total dataset |
| **RNA-Seq Platform** | `Illumina NextSeq 550` (`3×` `75 bp` paired-end) | `TruSeq Stranded Total RNA` (`Ribo-Zero Globin`); `25.3M–38.4M` reads |

### Right Spread (Page 32): Dose-Dependent Transcriptomic Shifts (`40 cGy` vs. `80 cGy`)

| Pathway / Category | `40 cGy` Response (`FDR ≤ 0.1`) | `80 cGy` Response (`FDR ≤ 0.1`) | Biological Impact |
|---|---|---|---|
| **Total DEGs (`GOIs p ≤ 0.01`)** | `78` DEGs: `24` up, `54` down (`472` GOIs) | `39` DEGs: `25` up, `14` down (`329` GOIs) | Stronger gene repression at `40 cGy` (`48` vs. `8` down) |
| **Dose-Dependent DNA Repair** | Upregulated (`RAD51`, `PARP2`, `TK1A`, `TSO2`, `SIP4`, `XRI1`) | Strongly amplified (`Kruskal-Wallis p ≤ 0.05`) | Core `ATM`-linked DSB & nucleotide synthesis response |
| **`80 cGy` Repair & Checkpoint** | Not enriched at `FDR ≤ 0.1` | `BRCA1`, `PARP1`, `RAD17`, `SYN2`, `TIL1`, `AT1G49980`, `RPA` | `HR` (`ath03440`), `BER` (`ath03410`), `G2/M` spindle arrest |
| **Glucosinolate & Sulfur** | Strongly down (`CYP79F2`, `BCAT4`, `MAM3`, `IMD1`, `BAT5`, `FMO GS-OX1`) | Reduced (`CYP79F2`, `MSRB5`; `MYB29` down at `p < 0.01`) | Potential `GSH`/`Met` sparing; lower defense & spicy flavor |

## 5. Updated Series Bible JSON
JSON

```
{
  "SERIES_BIBLE_DELTA": {
    "volume_completed": 54,
    "chapter_title": "Six Ions in the Dark",
    "osdr_accession": "OSD-658",
    "glds_accession": "GLDS-603",
    "doi": "10.26030/rxc2-1v61",
    "skipped_accessions": "OSD-626 through OSD-657 (contain no plant studies)",
    "primary_publication": {
      "citation": "Dixit, A. R., Meyers, A. D., Richardson, B., Richards, J. T., Richards, S. E., Neelam, S., Levine, H. G., Cameron, M. J., & Zhang, Y. (2023). Frontiers in Plant Science, 14:1284529.",
      "doi": "10.3389/fpls.2023.1284529",
      "pmc": "PMC10757676",
      "pmid": "38162303"
    },
    "mission_and_hardware": {
      "facility": "NASA Space Radiation Laboratory (NSRL), Brookhaven National Laboratory",
      "scenario": "Simplified GCR Simulation (35% 1000 MeV/n H1, 39% 250 MeV/n H1, 18% 250 MeV/n He4, 6% 350 MeV/n O16, 1% 600 MeV/n Si, 1% 600 MeV/n Fe56) at 0, 40, or 80 cGy (~20 min acute, 48 h dark adaptation, +3 h RNAlater harvest)",
      "assay": "Illumina NextSeq 550 (3x 75 bp paired-end RNA-Seq, TruSeq Stranded Total RNA with Ribo-Zero Globin)"
    },
    "key_entities_introduced": [
      "NSRL Simplified GCRSim 6-beam spectrum",
      "Dose-dependent DNA repair core (RAD51, PARP2, TK1A, TSO2, SIP4, XRI1, CP1)",
      "80 cGy checkpoint & HR/BER vanguard (BRCA1, PARP1, RAD17, SYN2, TIL1, AT1G49980, At4G19130/RPA)",
      "Methionine-derived glucosinolate suppression (CYP79F2, BCAT4, MAM3, IMD1, BAT5, FMO GS-OX1, MYB29)"
    ],
    "next_queued_accession": "OSD-670"
  }
}

```

Say **"Go on"** when you're ready for **Volume 55**.
