---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 10
title: "Vol. 10 — The Iron Track and the False Dawn"
accession: OSD-46
script_status: partial
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 27)
---

> [!NOTE]
> Script status **partial**: 32/32 pages have their own heading; condensed ranges: 17-22, 25-28.
## 1. Volume Metadata Header

- **Volume Title:** *Vol. 10 — The Iron Track and the False Dawn*

- **OSDR Accession:** `OSD-46` (`GLDS-46` | Version 6 | Submitted `17-Sep-2014` | Released `18-Sep-2014` | `DOI: 10.26030/gvz9-3b88` | GEO/ArrayExpress: `GSE61484` / `E-GEOD-61484`)

- **Primary Publication(s):**

  - Missirian V, Conklin PA, Culligan KM, Huefner ND, Britt AB (2014). *High atomic weight, high-energy radiation (HZE) induces transcriptional responses shared with conventional stresses in addition to a core "DSB" response specific to clastogenic treatments.* *Frontiers in Plant Science* `5:364` (`PMC4117989` | `PubMed 25136344` | `DOI: 10.3389/fpls.2014.00364`).

  - Corrigendum (2016). *Frontiers in Plant Science* `7:1753` (`Frontiers Corrigendum` | `DOI: 10.3389/fpls.2016.01753` | `PMID: 27877191` — replaced the placeholder `[GSEXXXX]` in the original 2014 manuscript with `[GSE61484]`).

- **Organism & Genotypes:** *Arabidopsis thaliana* ecotype Wassilewskija (`Ws`) Wild Type (`WT`) and **`atm-1`** (T-DNA insertion mutant defective in the DSB-sensing protein kinase `ATM`), 5-day-old seedlings (6 days old by the `24 h` harvest).

- **Hardware & Conditions (Ground Space-Radiation Simulation at Brookhaven National Laboratory):**

  - Seeds (`20%` bleach-sterilized) plated on `1 × MS` Phytoagar, shipped on ice to BNL (`4°C`), then grown vertically 5 days at `21°C` under `16 h` cool white light in the BNL Controlled Environment Facility.

  - **Gamma Treatment:** `100 Gy` gamma photons over `15 min` (`7 Gy/min`, average LET `0.2 keV/μ`) at BNL's **Controlled Environment Radiation Facility** (completed `8:40 am`).

  - **HZE Treatment:** `30 Gy` of relativistic `1 GeV/n` `56Fe` (`Fe26+`) nuclei over `~12 min` (`7 Gy/min`, high LET `170 keV/μ`, `~65` iron tracks per nucleus) at the **National Space Radiation Laboratory (NSRL)**, executed in two staggered runs (`1:09 pm` and `1:28 pm` due to chamber space limits), followed by `~30 min` in a lighted hood for deactivation.

  - **Sampling Grid:** `WT` harvested at `1.5, 3, 6, 12, 24 h`; `atm-1` harvested at `1.5, 6, 12, 24 h` (`3 h` omitted); unirradiated `WT`/`atm-1` controls harvested only at `10:45 am` (Day 1) and `9:15 am` (Day 2). `22` conditions ×\times× `2` replicates = **`44` samples overall**.

- **Preservation & Assay:** `30–40` pooled seedlings per sample flash-frozen in liquid nitrogen (`-80°C`), extracted via `RNeasy Mini-Prep`, hybridized (`10 μg` fragmented biotin-cRNA, `16 h` at `45°C`) to **Affymetrix `ATH1` Genome Arrays**, stained with `SAPE` on `Fluidics Station 450`, scanned on `GeneChip Scanner 3000`, and normalized via `RMA`/`limma`.

## 2. Dramatis Personae (Grounded in Study Data)

- **`Ws` Wild Type (`WT`):** The compact `135 Mb` vanguard—resilient enough that `100 Gy` gamma leaves roughly the same DSB count as `4 Gy` in a `3.2 Gb` human nucleus. Holds both `ATM` and `ATR` checkpoints intact.

- **`atm-1` (The Blind Sentinel):** `Ws` mutant lacking the `ATM` double-strand-break kinase. Deaf to the initial alarm at `1.5 h`, unable to mount the core `Cluster B` repair surge under `56Fe` bombardment, and strangely stripped of the `24 h` pathogen-defense wave.

- **Gamma (`100 Gy` Photon Barrage, `0.2 keV/μ`):** Diffuse Compton-scattering sniper fire. Generates scattered `2–5` radical clusters across `4–5 nm` spans and heavy replication-fork stalling (`WEE1` up, `S`-phase hyperexpression at `24 h`), allowing `ATR` to partially compensate in `atm-1`.

- **HZE (`30 Gy` `1 GeV/n` `56Fe`, `170 keV/μ`):** A relativistic iron lance punching `~65` continuous radical cylinders (`9 nm` core + `15 Gy` secondary-electron penumbra) straight through nuclei, membranes, and chloroplasts—triggering `1,169` induced transcripts at `1.5 h` (`1,009` unique to HZE).

- **The DSB Core (`Cluster B`, `424` transcripts):** `ATM`-dependent homology-repair strike team peaking at `1.5 h` in both treatments: **`BRCA1`** (`log2` `7.4` Gamma / `7.9` HZE in `WT`, collapsing to `0.6` in `atm-1` HZE), **`XRI1`** (`7.0` / `7.1`), **`RAD51`** (`5.3` / `5.4`), **`SYN2`** (`4.8` / `5.3`), **`RAD17`** (`3.6` / `5.0`), **`MND1`** (`3.9` / `4.4`), **`PARP1`** (`3.6` / `3.9`), and uncharacterized **`AT5G49110`** (human `FANCI` homolog).

- **HZE Collateral-Repair Unit (`Table 2`, `15` transcripts):** `XRCC1` (`4.0` HZE vs. `0.57` Gamma), `P-loop helicase At1g02670` (`4.9` vs. `1.2`), `RAD23-3` (`3.5` vs. `1.1`), `XPC` (`2.5` vs. `1.1`), and `LIG4` (`2.3` vs. `1.9`), summoned at `1.5 h` even in `atm-1`.

- **The Extended-Night Phantom (`Cluster A`: `1,357` up / `Cluster D`: `1,336` down):** `ATM`-independent starvation mirage triggered *only* by `56Fe` at `1.5 h` (`174` transcripts shared with extended-night starvation): `411` chloroplast genes plummet while **`PEX11a/c–e`**, **`FIS1b`**, **`DRP3a`**, fatty-acid β\betaβ-oxidation, and leucine catabolism cannibalize damaged organelles.

- **The Late Chitin Choir (`Cluster C`, `349` transcripts):** `ATM`-dependent conventional-stress / pathogen-defense wave (`31` chitin-response, `50` defense, `14` programmed-cell-death genes) that erupts at `6 h` under HZE and `24 h` under Gamma.

## 3. 32-Page Chapter Script

### Act I: Launch & Environmental Shift (Pages 1–10)

**Page 1**

- **Panel 1 (Splash):** Vertical agar plates of 5-day-old *Arabidopsis* `Ws` seedlings standing like emerald soldiers inside the **Brookhaven National Laboratory (BNL)** growth chamber (`21°C`, cool white lamps).

  - *Caption:* `BNL CONTROLLED ENVIRONMENT FACILITY — 08:25 AM. GENOME SIZE: 135 Mb.`

- **Panel 2:** Close-up on two sister plates side by side: `WT` (`Ws`) and `atm-1`. Their roots trace straight vertical lines down `1 × MS` Phytoagar.

- **Panel 3:** Inside a meristematic nucleus, `ATM` kinase—a towering, armored radar-warden—scans the chromatin fibers of `WT`. Next to him, in `atm-1`, an empty, shattered pedestal bears a T-DNA scar.

**Page 2**

- **Panel 1:** `08:25 AM.` The **Controlled Environment Radiation Facility** door seals. Gamma emitter shutters slide open.

  - *SFX:* **ゴゴゴ (GOGOGO — low chamber hum)**

- **Panel 2:** `100 Gy` over `15 minutes` (`7 Gy/min`). Invisible gamma photons rain through the agar, scattering Compton electrons in erratic, sparkling zigzags.

  - *Dialogue (`ATM`):* *"Low-LET scatter. Two to five radicals per cluster. They're peppering the replication forks."*

- **Panel 3:** `08:40 AM.` The gamma run ends. Across the BNL campus, the **National Space Radiation Laboratory (NSRL)** accelerator tunnel charges for the afternoon beamline.

**Page 3**

- **Panel 1:** `1:09 PM` and `1:28 PM`—two cramped beamline runs at **NSRL**, forced by chamber space limits. A beam of relativistic `1 GeV/n` `56Fe` (`Fe26+`) nuclei tears through the plates (`30 Gy` over `~12 min`).

  - *SFX:* **ズガアアアン (ZUGAAAAN — relativistic heavy-ion impact)**

- **Panel 2:** Unlike gamma's scattered sparks, each `Fe26+` ion carves a blinding, razor-straight `9 nm` cylinder of ionization—`170 keV/μ`—with `~65` iron lances skewering every nucleus, flanked by a dimmer `15 Gy` penumbra of secondary electrons.

- **Panel 3:** `~30 minutes` under a lighted deactivation hood while induced radioactivity decays. Inside the `WT` cell, chloroplasts flicker and thylakoid membranes smoke along the iron tracks.

**Page 4**

- **Panel 1:** `10:10 AM` (Gamma `1.5 h`) and `2:39 PM` (HZE `1.5 h`). Because unirradiated controls were only drawn at `10:45 AM` (Day 1) and `9:15 AM` (Day 2), a circadian filter sweeps across the transcriptome, erasing `586` clock-driven and `685` diurnal-drift transcripts (`85` overlapping) from the battle map.

- **Panel 2:** In `WT`, the alarm explodes. **`WEE1`** kinase leaps higher in Gamma-hit cells than in HZE-hit cells, bracing stalled `S`-phase forks against premature differentiation.

- **Panel 3:** Meanwhile, `Cluster B` (`424` transcripts) detonates simultaneously in both Gamma and HZE `WT` nuclei—the **Core DSB Strike Team**.

**Page 5**

- **Panel 1:** **`BRCA1`** (`log2` `7.4` Gamma / `7.9` HZE) and **`XRI1`** (`7.0` / `7.1`) drop from the nuclear ceiling in heavy ubiquitin-rigged harnesses.

  - *Dialogue (`BRCA1`):* *"Both fronts are breached! Homologous recombination—deploy!"*

- **Panel 2:** **`RAD51`** (`5.3` / `5.4`), **`MND1`** (`3.9` / `4.4`), and **`AHP2`** (`3.2` / `4.0`) braid around resected single-stranded tails, while **`SYN2`** (`4.8` / `5.3`) clamps sister chromatids together.

- **Panel 3:** Behind them, **`PARP1`** (`3.6` / `3.9`), **`RAD17`** (`3.6` / `5.0`), **`RPA1E`** (`4.2` / `4.8`), and **`RECQL3`** (`3.1` / `4.1`) lock down the chromatin perimeter; **`AT5G49110`**—a silent recruit wearing a human `FANCI` badge—steps into the breach.

**Page 6**

- **Panel 1:** Cut to the `atm-1` mutant at `1.5 h`. Under `100 Gy` Gamma, `BRCA1` (`3.3`), `XRI1` (`2.5`), and `RAD51` (`1.6`) still limp onto the field—summoned by `ATR` sensing Gamma's replication-fork stress.

- **Panel 2:** Under `30 Gy` HZE in `atm-1`, the comms are dead. `BRCA1` (`0.6`), `RAD51` (`0.3`), `MND1` (`-0.1`), and `TK1A` (`-0.2`) never answer the call.

  - *Caption:* `HZE'S 15 Gy PENUMBRA TRIGGERS TOO LITTLE REPLICATION STRESS TO WAKE ATR. WITHOUT ATM, THE CORE DSB TEAM IS PARALYZED.`

**Page 7**

- **Panel 1:** Yet `WT` HZE cells are not fighting the same war as Gamma. Out of `1,169` transcripts induced by HZE at `1.5 h` and `280` by Gamma, only `160` overlap.

- **Panel 2:** `1,009` HZE-exclusive transcripts surge through the cytoplasm! In `Table 2`'s DNA-repair wing, **`XRCC1`** (`4.0` vs. `0.57` Gamma), **`P-loop helicase At1g02670`** (`4.9` vs. `1.2`), **`RAD23-3`** (`3.5` vs. `1.1`), **`XPC`** (`2.5` vs. `1.1`), and **`LIG4`** (`2.3` vs. `1.9`) scramble to patch clustered lesions and oxidized bases—even inside `atm-1`.

**Page 8**

- **Panel 1:** Suddenly, the lights inside the `WT` and `atm-1` HZE cells seem to go out—even though the BNL growth chamber lamps are blazing at `2:39 PM`.

  - *SFX:* **バチィン (BACHIIN — metabolic circuit breaker tripping)**

- **Panel 2:** `Cluster D` (`1,336` transcripts) crashes downward—`411` **Chloroplast** genes (`FDR 7e-37`) go dark at once, alongside `42` amine-biosynthesis and `59` carboxylic-acid-biosynthesis genes.

- **Panel 3:** Across the cytosol, `Cluster A` (`1,357` transcripts) ignites in an `ATM`-independent wave.

  - *Dialogue (`PEX11c`):* *"Sugar's gone—or the power plants are slag. Either way, it's Extended Night!"*

**Page 9**

- **Panel 1:** `174` of `230` classic **Extended Night** starvation transcripts flare to life (`1.5–3 h` post-HZE), completely absent in `100 Gy` Gamma and `BLM+MMC`.

- **Panel 2:** **`PEX11a`**, **`PEX11c–e`**, **`FIS1b`**, and **`DRP3a`** slice elongated peroxisomes into multiplying fleets of demolition drones.

- **Panel 3:** Fatty-acid β\betaβ-oxidation enzymes and leucine-catabolism squads begin dismantling lipids and damaged proteins (`68` protein-catabolism genes) to keep the starved or battered cell alive.

**Page 10**

- **Panel 1:** In `Cluster E` (`1,248` transcripts), `S`-phase and `M`-phase cyclins are slammed into lockdown across both radiations—except **`CYCB1;1`**, standing alone like a glowing flare over arrested meristems.

- **Panel 2:** Root tips halt their downward march in `1 × MS` Phytoagar. Two completely different architectures of damage now confront the same `135 Mb` genome.

### Act II: The Molecular Battle (Pages 11–22)

**Pages 11–12 (Double-Page Spread — *The Two Geometries of Ruin*)**

- **Left Page (Gamma `100 Gy`):** A wide-angle battlefield of `WT` chromatin under a hail of Compton electrons. Scattered `4–5 nm` radical bursts stall replication forks everywhere; **`WEE1`** and **`ATR`** reinforce `ATM`, keeping `BRCA1` and `RAD51` active while chloroplasts hum untouched in full daylight.

- **Right Page (HZE `30 Gy` `1 GeV/n` `56Fe`):** A catastrophic, diagonal iron-ion scar (`170 keV/μ`) bisects the entire page—cleaving DNA helices into co-located multiply damaged sites, shattering membranes, and blacking out chloroplasts. **`ATM`** desperately coordinates `BRCA1`/`RAD51` along the core track while **`PEX11`/`FIS1b`/`DRP3a`** peroxisomes swarm the wreckage in a false-dawn starvation frenzy.

  - *SFX:* **バリバリバリ (BARIBARIBARI — continuous track ionization & organelle fission)**

**Page 13**

- **Panel 1:** `3 h` post-irradiation (`11:40 AM` Gamma / `4:09 PM` HZE). `WT` plates are harvested into liquid nitrogen; in the `atm-1` wing, the `3 h` rack sits empty—an intentional sampling omission that leaves `atm-1`'s intermediate kinetics invisible.

- **Panel 2:** By `6 h` (`7:24 PM` HZE), the `Extended Night` mirage begins to recede in HZE-treated seedlings, replaced by a strange new drumbeat from `Cluster C` (`349` transcripts).

**Page 14**

- **Panel 1:** `Cluster C`—**The Late Chitin Choir**—marshals `31` chitin-response genes, `50` defense-response genes, and `14` programmed-cell-death executors.

- **Panel 2:** In HZE, `Cluster C` already crests at `6 h` and `12 h`, echoing cold, salt, wounding, UV-B, and *Pseudomonas syringae* infection. In Gamma, `Cluster C` stays silent at `6 h` and waits until `24 h` to erupt.

- **Panel 3:** Stranger still: in `atm-1`, `Cluster C` is silenced—completely in Gamma, and by half in HZE.

  - *Caption:* `A KINASE KNOWN ONLY FOR DNA BREAKS IS GOVERNING THE PLANT'S CONVENTIONAL STRESS AND CELL-DEATH PROGRAM.`

**Page 15**

- **Panel 1:** `12 h` (`8:40 PM` Gamma / `1:09 AM` Day 2 HZE). Night has truly fallen in the BNL chamber.

- **Panel 2:** Inside `WT` Gamma nuclei, `BRCA1` and `RAD51` transcripts have largely wound down; `S`-phase transcripts are quietly gathering at an intra-`S` checkpoint.

- **Panel 3:** Inside `WT` HZE nuclei, complex clustered lesions along the `65` iron tracks still smolder, keeping `Cluster C`'s defense signals humming through the dark.

**Page 16**

- **Panel 1:** `24 h` (`8:40 AM` Day 2 Gamma / `1:09 PM` Day 2 HZE). Unirradiated Day-2 controls are harvested at `9:15 AM`.

- **Panel 2:** In Gamma-irradiated `WT`, `S`-phase transcripts suddenly **hyperexpress** in a partially `ATM`-dependent surge—cells released from their `S`-phase bottleneck flooding forward together.

- **Panel 3:** In HZE-irradiated `WT`, `S`- and `M`-phase transcripts return nearly to baseline, while `Cluster C`'s pathogen-defense wave peaks in Gamma at `24 h`—a full `18 hours` behind HZE.

**Page 17–22 (Montage of the `DSB` Signature vs. Conventional Stress)**

- **Pages 17–18:** Side-by-side comparison panels against the `AtGenExpress` stress atlas: `Paraquat` floods the cell with superoxide ROS, yet `Cluster B` (`BRCA1`, `RAD51`, `XRI1`) refuses to budge—proving ROS alone does not trigger the `DSB` core.

- **Pages 19–20:** Only `Bleomycin + Mitomycin C` (and faintly `UV-B` and `Hydroxyurea` via replication blocks) awaken the same `ATM`-dependent `DSB` squad.

- **Pages 21–22:** Meanwhile, `72` of the `160` shared `1.5 h` transcripts flash human homolog badges (`e-value < 1e-6`), linking *Arabidopsis* `AT5G49110` (`FANCI`) and `BRCA1`-centric repair directly to human `1 GeV` `56Fe` fibroblast responses.

### Act III: Fixation & Data Epilogue (Pages 23–32)

**Page 23**

- **Panel 1:** `30–40` whole seedlings per condition are plucked from `1 × MS` Phytoagar and plunged into liquid nitrogen (`-80°C`).

  - *SFX:* **シュウウウ (SHUUU — LN2 flash-freeze)**

- **Panel 2:** `44` samples total (`22` conditions ×\times× `2` replicates). `RNeasy Mini-Prep` extracts `1.25 μg/μL` RNA; `10 μg` feeds `SuperScript` ds-cDNA and biotin-cRNA (`15 μg` fragmented to `35–200` bases).

**Page 24**

- **Panel 1:** `16 h` hybridization at `45°C` onto **Affymetrix `ATH1` Genome Arrays**, washed and stained with `SAPE` on `Fluidics Station 450`, laser-read on `GeneChip Scanner 3000`.

- **Panel 2:** In `2014`, Missirian et al. publish the atlas in *Frontiers in Plant Science*—but a ghost haunts the final page: `Accession numbers: [GSEXXXX]`.

**Page 25–28 (The Archival Epilogue)**

- **Pages 25–26:** Two years later (`21 Nov 2016`), a **Corrigendum** (`10.3389/fpls.2016.01753`) seals the phantom bracket, replacing `[GSEXXXX]` with **`[GSE61484]`**.

- **Pages 27–28:** NASA GeneLab (`GL-DPPD-7114` / `NF_MAAffymetrix 1.0.5`) re-normalizes all `44` `.CEL` files via `oligo` `RMA` and `limma` (`Ensembl` release 54), enshrining `OSD-46` as the Rosetta Stone separating `DSB` repair from `HZE` collateral damage.

**Pages 29–30 (Series Bridge)**

- **Panel 1:** Looking back from BNL's `30 Gy` (`~100×` Mars-mission dose delivered in `~12 min` rather than `4 years`), `WT` and `atm-1` seedlings remind future deep-space crews: even `2–3` iron tracks in a `30×` larger human nucleus can mirror `65` tracks in *Arabidopsis*.

- **Panel 2:** Next signal incoming on the OSDR frequency...

**Pages 31–32:** *(See Section 4 — Mission Debrief Infographic Layout below)*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Page 31 — Radiation Geometry & Experimental Matrix

- **Header Banner:** `OSD-46 // BNL GROUND SPACE-RADIATION BENCHMARK (44 AFFYMETRIX ATH1 ARRAYS)`

- **Left Column (Radiation Physics & Dosing):**

  - **Gamma (`100 Gy`, `15 min`, `7 Gy/min`):** `0.2 keV/μ` LET; dispersed `2–5` radical clusters (`4–5 nm`); `135 Mb` *Arabidopsis* `100 Gy` ≈\approx≈ `3.2 Gb` human `4 Gy` (`LD50 = 5 Gy`).

  - **HZE (`30 Gy` `1 GeV/n` `56Fe`, `~12 min`, `7 Gy/min`):** `170 keV/μ` LET; `~65` continuous `9 nm` core tracks/nucleus + `15 Gy` electron penumbra; two NSRL runs (`1:09 pm`, `1:28 pm`) + `~30 min` deactivation hood.

- **Right Column (Sampling Grid — `22` Conditions ×\times× `2` Reps = `44` Arrays):**

  - `WT` (`Ws`): `1.5, 3, 6, 12, 24 h` (Gamma & HZE) + `10:45 am` Day 1 & `9:15 am` Day 2 controls.

  - `atm-1`: `1.5, 6, 12, 24 h` (`3 h` omitted) + Day 1 & Day 2 controls.

  - **Circadian Filter:** `586` circadian + `685` `1.5 vs. 24 h` control genes (`85` shared) masked from main time-course figures.

### Page 32 — Transcriptomic Clusters & Key Marker Board

- **Top Panel (`1.5 h` Venn & Core DSB `Cluster B`, `424` genes):**

  - `280` Gamma up vs. `1,169` HZE up (`160` shared; `16` in `GO:0006259` DNA metabolism).

  - Top `log2` induction (`GW` / `HW` / `GA` / `HA`): `BRCA1` (`7.4 / 7.9 / 3.3 / 0.6`), `XRI1` (`7.0 / 7.1 / 2.5 / 1.0`), `RAD51` (`5.3 / 5.4 / 1.6 / 0.3`), `SYN2` (`4.8 / 5.3 / 1.2 / 0.2`), `RAD17` (`3.6 / 5.0 / 0.5 / 0.2`), `MND1` (`3.9 / 4.4 / 0.4 / -0.1`).

- **Bottom-Left Panel (HZE-Unique `1.5 h` Signatures):**

  - **DNA Collateral (`Table 2`, `15` genes):** `XRCC1` (`4.0` HZE vs. `0.57` Gamma), `At1g02670` (`4.9` vs. `1.2`), `RAD23-3` (`3.5` vs. `1.1`), `LIG4` (`2.3` vs. `1.9`).

  - **Extended Night Mirage (`Cluster A` `1,357` up / `Cluster D` `1,336` down, `ATM`-independent):** `174/230` extended-night genes induced; `411` chloroplast genes repressed; `PEX11a/c–e`, `FIS1b`, `DRP3a`, β\betaβ-oxidation, and leucine catabolism activated.

- **Bottom-Right Panel (Late Wave & Archival Note):**

  - **`Cluster C` (`349` genes, `ATM`-dependent):** Chitin (`31`), defense (`50`), PCD (`14`); peaks `6 h` in HZE vs. `24 h` in Gamma.

  - **Corrigendum (`2016`):** `[GSEXXXX]` →\rightarrow→ `[GSE61484]`.

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "accession": "OSD-46",
  "volume_title": "Vol. 10 — The Iron Track and the False Dawn",
  "hardware_introduced": [
    "BNL Controlled Environment Radiation Facility (100 Gy Gamma, 7 Gy/min, 0.2 keV/μ)",
    "National Space Radiation Laboratory / NSRL (30 Gy 1 GeV/n 56Fe, 7 Gy/min, 170 keV/μ)",
    "Affymetrix ATH1 Genome Array & Fluidics Station 450 / GeneChip Scanner 3000"
  ],
  "ecotypes_or_mutants": [
    "Arabidopsis thaliana Ws (Wild Type)",
    "atm-1 (T-DNA insertion mutant defective in DSB-sensing kinase ATM)"
  ],
  "molecular_characters": [
    "ATM & ATR (DSB vs. replication-stress checkpoint kinases)",
    "BRCA1, XRI1, RAD51, SYN2, MND1, AHP2, PARP1, RAD17, RPA1E, RECQL3, TK1A, AT5G49110/FANCI (Cluster B DSB Core)",
    "WEE1 & CYCB1;1 (replication-stress and G2/M checkpoint regulators)",
    "XRCC1, RAD23-3, XPC, LIG4, DMT7/DRM2 (HZE-unique DNA repair)",
    "PEX11a/c-e, FIS1b, DRP3a & beta-oxidation/leucine-catabolism squad (ATM-independent Extended Night mirage)",
    "Cluster C Chitin/Defense/PCD Choir (ATM-dependent 6h HZE / 24h Gamma wave)"
  ],
  "continuity_hooks_for_future_volumes": [
    "High-LET 56Fe tracks trigger an ATM-independent starvation/chloroplast-repression program absent in low-LET gamma",
    "ATM unexpectedly governs late pathogen/conventional-stress gene expression (Cluster C) in addition to early DSB repair",
    "Archival placeholder [GSEXXXX] in 2014 paper resolved to [GSE61484] via 2016 Frontiers Corrigendum"
  ]
}

```

Ready for **Vol. 11** whenever you say `"Go on"`.
