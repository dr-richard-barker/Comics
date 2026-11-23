---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 22
title: "The Centrifuge Alibi"
accession: OSD-213
script_status: partial
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 51)
---

> [!NOTE]
> Script status **partial**: 32/32 pages have their own heading; condensed ranges: 6-10, 14-18, 19-22, 23-26, 27-30.
## 1. Volume Metadata Header

- **Series / Volume:** *Roots in Orbit: The NASA OSDR Plant Chronicles* — Volume 22

- **Chapter Title:** *The Centrifuge Alibi*

- **OSDR / GeneLab Accession:** `OSD-213` / `GLDS-213` (*A whole-genome microarray study of Arabidopsis thaliana cell cultures exposed to microgravity for 5 days on board of Shenzhou 8*, listed in the OSDR Publications Archive and GeneLab Newsletter No. 18)

- **Dataset Dates:** Catalog First Published `May 21, 2021` (Updated `April 23, 2025`); original ArrayExpress release & primary study published `January 13, 2015`

- **Source Accession:** `E-MTAB-2518` (ArrayExpress / EMBL-EBI)

- **Payload & Mission:** **Simbox (`Science in Microgravity Box`)** — first joint German–Chinese spaceflight mission (`DLR` & `CMSE`), Experiment `#16`, flown aboard unmanned spacecraft **Shenzhou 8** (launched on a **Long March 2F** rocket from **Jiuquan Satellite Launch Center [`JSLC`]**, October 31, 2011, `21:58 UTC`; docked with **Tiangong-1**; landed November 17, 2011, `11:32 UTC`; `17-day` flight with automated `RNAlater` fixation at **Day 5**).

- **Primary Publication:** Fengler, S., Spirer, I., Neef, M., Ecke, M., Nieselt, K., & Hampp, R. (2015). *A Whole-Genome Microarray Study of Arabidopsis thaliana Semisolid Callus Cultures Exposed to Microgravity and Nonmicrogravity Related Spaceflight Conditions for 5 Days on Board of Shenzhou 8*. *BioMed Research International* `2015`:`547495` (DOI: `10.1155/2015/547495`, `PMC4309294`).

- **Organism & Genotype:** *Arabidopsis thaliana* wild-type ecotype Columbia (`Col-0`) — `11-day-old` undifferentiated semisolid callus cultures derived from sterile `~50 mm` stem cuttings on `1.2a` agar (`1%`) medium.

- **Hardware & Conditions:**

  - `Simbox` incubator (`Astrium/EADS`, Friedrichshafen; modified `Biobox-6`, `461 × 551 × 273 mm`, `34 L`, `17 kg` empty, `130 W` max, `22–24 °C`, `30–40%` humidity; duplicate ground unit at `PITC`, Beijing).

  - `3` automated **Type V Experiment Unit Envelopes (`EUEs`)** inside **Type I Experiment Containers (`ECs`)**: `FM 16002` on static flight platform (`FS` = Flight Space `µg`, slot `SP04`); `FM 16001` on `74.40 rpm` in-flight `1g` reference centrifuge (`FC` = Flight Centrifugation, slot `C05`); `FM 16003` on static ground platform (`GS` = Ground Static `1g`, started Nov 2, 2011).

  - Each `EUE` held `2` polyetherketone culture chambers (`front` and `rear CC`, `31.7 × 24 × 14.3 mm`), `Tecason S` polysulfone gas-exchange biofoil, spiked substrate slides, `2 mL` `1.2a` agar, and a peristaltic pump (`≥ 2.43 mL/min`) linked to a `20.3 mL` `RNAlater` tank (`20 mL` fixative → `~90% v/v` final).

  - Cabin environment: `O2` `18.04–27.32 kPa`, `CO2` `-0.03–0.46 kPa`, radiation `5.93–8.1 mSv` total (`0.37–0.51 mSv/d` near Simbox).

- **Preservation & Assays:** Automated `RNAlater` injection at `EZT + 120:28:00` (`FC`) and `EZT + 128:38:30` (`FS`); `GS` fixed Nov 7, 2011. Recovered within `6 h` of landing, stored at `4 °C` until arrival in Tübingen (Nov 25, 2011), then `-80 °C`. Total RNA (`RNeasy Plus`) amplified (`MessageAmp II-Biotin Enhanced`) and hybridized to **Affymetrix `GeneChip Arabidopsis ATH1 Genome Array`** (`Ref: 510690`, `EukGE-WS2 V4`), normalized via `RMA` in `Mayday`, tested with Student's *t*-test (`P < 0.1`, FDR-corrected) + `GSEA`.

- **Chronology Note:** `OSD-211` (absent/empty slot) and `OSD-212` (mouse fecal microbiome) are skipped; `OSD-213` (`GLDS-213`) follows `OSD-210` (Vol. 21) as the next sequential plant study. (`OSD-214` mouse bone marrow, `OSD-215` *Bacillus subtilis*, and absent `OSD-216` will be skipped before Vol. 23's `OSD-217`.)

## 2. Dramatis Personae (Grounded in Study Data)

- **Svenja Fengler & Prof. Rüdiger Hampp (University of Tübingen, Physiological Ecology of Plants):** Lead author and principal investigator behind Experiment `#16`. Having spent years studying *Arabidopsis* cell cultures on `TEXUS 47` sounding rockets and `DLR` parabolic flights—where `Ca^2+` and `H2O2` fire within seconds—they now ask what remains after **five full days** in orbit.

- **Ina Spirer, Maren Neef, Margret Ecke & Prof. Kay Nieselt (University of Tübingen):** Co-authors who cultured the `Col-0` calli (`8` months ahead of launch), maintained stocks across the Tübingen–Shanghai–Beijing–Jiuquan logistics chain, and ran the `Mayday` `RMA` + `GSEA` bioinformatics pipeline.

- **Prof. Zheng & PITC / CMSE Ground Crew (Shanghai & Beijing) + Dr. Markus Braun & EADS Astrium Team (DLR / Friedrichshafen):** International partners who kept `Simbox` powered, transported the duplicate ground incubator to `PITC` Beijing after launch, and recovered the capsule on the Amghulang Steppe in Inner Mongolia.

- **The Three Modules (`FM 16002 [FS]`, `FM 16001 [FC]`, `FM 16003 [GS]`):**

  - `FS` (`Flight Space`, `µg`): Floats weightless on `SP04`, growing noticeably larger calli than either `1g` control.

  - `FC` (`Flight Centrifugation`, `1g` in-flight): Spins at `74.40 rpm` on `C05`, enduring the exact same Long March 2F launch, orbital radiation (`5.93–8.1 mSv`), and `Simbox` enclosure—serving as microgravity's strict alibi.

  - `GS` (`Ground Static`, `1g` Earth): Runs `1` day behind in the duplicate `Simbox` in Beijing.

- **The Molecular Suspects:**

  - **The Microgravity Quieting (`FS` vs. `FC`):** `298` genes `≥ 2-fold` (`0` FDR-significant), led by upregulated plastid ribosomal proteins (`ATCG00065`, `ATCG00660`, `ATCG00770`) and mitochondrial `NADH` dehydrogenase / `ATP` synthase subunits (`ATMG00650`, `ATCG00120`), alongside downregulated heat shock proteins (`HSP`s).

  - **The Spaceflight Storm (`FS` & `FC` vs. `GS`, `573` shared significant DEGs):** `MAPK` cascades (`MPK11`, `MKK9`), `WRKY38`/`54`/`70`, `NAC3`, `Ca^2+` EF-hand sensors, flagellin receptor-like kinases, and `ROS` scavengers (`Peroxidases 4, 21, 25, 52`, `Catalase 3`, `GSTU19`).

## 3. 32-Page Chapter Script

### Act I: From Tübingen to Jiuquan (Pages 1–10)

**Page 1 (Splash Page)**

- **Visual:** Nightfall over the Gobi Desert at Jiuquan Satellite Launch Center (`Oct 31, 2011, 21:58 UTC`). A **Long March 2F** rocket ignites in a blinding amber column, carrying the unmanned **Shenzhou 8** spacecraft toward **Tiangong-1**. Inset cutaway: inside the crew cabin, occupying the third seat, sits a silver-and-white `34 L` incubator—**`Simbox`**.

- **Caption (Narration):** *"In parabolic flights and sounding rockets, Arabidopsis cells panic within seconds—calcium spikes, hydrogen peroxide surges, transcription factors flare."*

- **Caption:** *"But what happens when you leave them in orbit for five days? And more importantly: how much of 'spaceflight stress' is actually microgravity—and how much is everything else?"*

**Page 2 (4-Panel Grid)**

- **Panel 1:** Eight months before launch in Tübingen, Germany: Margret Ecke cuts sterile `50 mm` stem segments from wild-type *Arabidopsis thaliana* (`Col-0`) onto `1.2a` `1%` agar, coaxing pale undifferentiated callus tissue into `500 mL` rotary-shaker flasks (`23 °C`, dark, `130 rpm`).

- **Panel 2:** A map traces the living relay: `3 g` of callus culture ships from Tübingen to Prof. Zheng's lab at the Institute of Physiology and Ecology in Shanghai, then travels to `PITC` in Beijing, and finally boards a plane to `JSLC` in Jiuquan.

- **Panel 3:** Close-up of a **Type V Experiment Unit Envelope (`EUE`)**: two polyetherketone chambers (`front` and `rear CC`, `31.7 × 24 × 14.3 mm`), each topped with translucent `Tecason S` polysulfone biofoil for gas exchange and fitted with a spiked slide holding `11-day-old` callus on `2 mL` `1.2a` agar.

- **Panel 4:** Beneath the chamber sits the `20.3 mL` fixative/waste tank filled with `20 mL` of `RNAlater`, wired to a peristaltic pump (`≥ 2.43 mL/min`). Pre-flight biocompatibility tests show `O2` drops from `8` to `~2 mg/L` by Day 5—locking in the automated quench timer.

**Page 3 (3-Panel Vertical)**

- **Panel 1:** Inside the `Simbox` housing (`461 × 551 × 273 mm`, `17 kg` empty): on the left, the circular **reference centrifuge rotor** (`position C05`) holds `FM 16001` (`FC`, `1g` in-flight).

- **Panel 2:** On the **static flight platform** (`position SP04`), `FM 16002` (`FS`, `µg`) is bolted down beside `16` other German–Chinese biological experiments.

- **Panel 3:** Temperature telemetry graph (`TP1–3`): during `3 h 06 min` of unpowered transport to the Shenzhou 8 launchpad, `Simbox` dips gently to `21 °C` before snapping back to its `22–24 °C` nominal band.

**Page 4 (4-Panel Grid)**

- **Panel 1:** Orbit achieved! Experiment Zero Time (`EZT`) triggers. The `C05` centrifuge spins up to `74.40 rpm`, generating a steady `1g` artificial gravity field inside orbit.

- **Panel 2:** Cabin telemetry readout: `O2` `18.04–27.32 kPa`, `CO2` `-0.03–0.46 kPa`, `30–40%` humidity. Meanwhile, radiation dosimeters near `Simbox` tick upward: `0.37–0.51 mSv/d` (`5.93–8.1 mSv` total—far above Earth's `1–2 mSv/yr` background).

- **Panel 3:** Back in Beijing (`Nov 2, 2011`), Chinese and German scientists load `FM 16003` (`GS`, Ground Static `1g`) into the duplicate `Simbox` incubator at `23 °C`, running `1` day behind orbit.

- **Panel 4:** `EZT + 120:28:00` (`FC`) and `EZT + 128:38:30` (`FS`): peristaltic pumps whirr to life, flooding both chambers with `RNAlater` (`~90% v/v`), freezing every mRNA transcript in place at Day 5.

**Page 5 (3-Panel)**

- **Panel 1:** `Nov 17, 2011, 11:32 UTC` — Shenzhou 8's descent capsule parachutes onto the Amghulang Steppe in Inner Mongolia after `17` days in space.

- **Panel 2:** Six hours post-landing, `Simbox` is flown to Beijing-Xijiao military airport and rushed to the Chinese Academy of Sciences lab for disassembly (`4 °C` storage).

- **Panel 3:** `Nov 25, 2011` — the chilled `EUEs` arrive in Tübingen. Under the hood, Svenja Fengler photographs the recovered calli (`Figure 7`): `FS` (`µg`) calli are visibly **larger** than both `FC` (`1g` flight) and `GS` (`1g` ground) controls!

**Pages 6–10 (5-Page Sequence: Opening the `ATH1` Black Box)**

- **Page 6:** Total RNA is extracted (`RNeasy Plus`); clear `28S` and `18S` rRNA bands confirm the `RNAlater` quench worked, though limited tissue mass rules out follow-up qPCR.

- **Page 7:** `MessageAmp II-Biotin Enhanced` single-round amplification feeds into **Affymetrix `GeneChip Arabidopsis ATH1`** arrays (`Lot 4155830`, `EukGE-WS2 V4` fluidics).

- **Page 8:** `Mayday` software runs `RMA` background adjustment and quantile normalization.

- **Page 9:** The Pearson correlation heatmap (`Figure 9`) glows bright crimson: front and rear chambers of every module correlate at **`r ≈ 0.99`** (`0.994` for `GS`, `0.995` for `FC`, `0.996` for `FS`).

- **Page 10:** Then the neighbour-joining clustering tree (`Figure 8`) renders—and the Tübingen team freezes. `FS` and `FC` cluster tightly *together* on the flight branch, far away from `GS` on the ground branch!

### Act II: The Centrifuge Alibi (Pages 11–22)

**Pages 11–12 (Double-Page Spread: The `897` vs. `0` Shock)**

- **Visual:** A stark three-way triangle diagram (`Figure 10`) spanning both pages:

  - **`FS` (`µg`) vs. `FC` (`1g` flight):** `298` genes `≥ 2-fold` (`275↑`, `23↓`) — **`0` statistically significant** after FDR (`P < 0.1`)!

  - **`FS` (`µg`) vs. `GS` (`1g` ground):** **`897` significant DEGs** (`463↑`, `434↓` at `P < 0.1`; `20` after strict FDR).

  - **`FC` (`1g` flight) vs. `GS` (`1g` ground):** **`826` significant DEGs** (`543↑`, `283↓` at `P < 0.1`; `155` after strict FDR).

  - **Center Intersection:** **`573` significant DEGs** are *identical* in both `FS vs. GS` and `FC vs. GS`!

- **Dialogue (Fengler):** *"If we hadn't flown the `1g` centrifuge, we would have blamed microgravity for nearly nine hundred genes. The centrifuge proved `573` of them had nothing to do with weightlessness."*

**Page 13 (4-Panel Grid)**

- **Panel 1:** Zoom into the `298` microgravity-trending genes (`FS` vs. `FC`). Why did `FS` calli grow larger? Expansins (cell-wall loosening genes) are upregulated, letting cells expand without gravity's mechanical load.

- **Panel 2:** `GSEA` highlights **Translation (`27` genes)**—and almost every upregulated gene is **chloroplast-encoded**: ribosomal proteins `S12` (`ATCG00065`, `+2.36 log2 fc`), `L20` (`ATCG00660`, `+2.14`), `S8` (`ATCG00770`, `+1.96`), `S2`, `L16`, `L14`, plus cytosolic `EIF-5A` (`AT1G13950`).

- **Panel 3:** **Mitochondrial Electron Transport (`11` genes) & ATP Biosynthesis (`10` genes):** `NADH` dehydrogenase subunits (`ATMG00650` `ND4L` `+2.3`, `ATMG00060` `ND5` `+1.84`), cytochrome *c* oxidase (`ATMG00160`), and `ATPase` subunits (`ATCG00120` `+2.15`, `ATMG00410` `+1.56`) rev up to meet higher orbital energy demand.

- **Panel 4:** Meanwhile, among the `23` downregulated transcripts in `FS` vs. `FC`, **Heat Shock Proteins (`HSP`s)** dominate (`AT4G27670`, `AT2G29500`, `AT5G12020`, `AT5G59720`, `AT4G25200`, `AT1G53540`, `AT5G12030`)—echoing magnetic-levitation callus studies where fewer proteins needed refolding after 5 days of acclimation.

**Pages 14–18 (5-Page Sequence: Inside the Non-Microgravity Storm)**

- **Page 14:** Now the spotlight swings to the **`573` shared spaceflight DEGs** (`FS` & `FC` vs. `GS`). Radiation particles (`5.93–8.1 mSv`), launch vibration, and spacecraft environment hit both static and centrifuged chambers alike.

- **Page 15:** **MAPK Cascade (`27` overlap genes) & Protein Phosphorylation (`18` overlap genes):** `MPK11` (`AT1G01560`), `MKK9` (`AT1G73500`), `Ca^2+`-binding `EF-hand` proteins (`AT3G01830`, `AT3G47480`), `CPK2`, and a wave of `LRR` and cysteine-rich receptor-like kinases light up.

- **Page 16:** **Transcription Factor Surge:** `WRKY54` (`AT2G40750`), `WRKY70` (`AT3G56400`), `WRKY38` (`AT5G22570`, `+3.28` in `FC vs. GS`), and `NAC3` (`AT3G15500`, `+2.98` in `FS vs. GS`) bind stress promoters.

- **Page 17:** **Defense & Respiratory Burst (`21` overlap genes):** Chitinases (`AT1G02360`, `AT3G54420`), disease-resistance proteins, and flagellin-induced receptor-like kinases (`AT2G19190` up, `AT5G46330` down) fire—even inside sterile, axenic `EUEs`!

- **Page 18:** **ROS & Antioxidant Balancing (`9` overlap genes):** `Peroxidase 4` (`+3.35`), `Peroxidase 52` (`+2.15`), and `GSTU19` (`+1.75`) surge to quench `H2O2`, while `Peroxidase 21` (`-3.06`), `Peroxidase 25` (`-1.04`), and `Catalase 3` (`-1.12`) drop.

**Pages 19–22 (4-Page Sequence: Comparing Minutes to Days)**

- **Page 19:** Flashback contrast: on `DLR` parabolic flights (`seconds`) and `TEXUS 47` (`minutes`), microgravity alone triggered explosive `Ca^2+`, `H2O2`, and transcription-factor bursts.

- **Page 20:** By **Day 5** aboard Shenzhou 8 (`120–128 h`), undifferentiated callus cells have largely *acclimated* to weightlessness—mirroring `TROPI-2` (`4 days`, only `24–27` microgravity DEGs vs. `> 200` flight-vs-ground DEGs).

- **Page 21:** **Dialogue (Hampp):** *"Cells adapt to `µg` faster than we thought. What keeps ringing through Day 5 is the spaceflight environment itself—radiation, hardware, and `H2O2` signaling."*

- **Page 22:** A note bridges to NASA's GeneLab/OSDR (`GLDS-213`): when later meta-analyses (`PMC10027818`) fold `GLDS-213` into the `Arabidopsis` Spaceflight Matrix, `Simbox`'s `1g` centrifuge becomes a benchmark for separating true `µg` from hardware and mission noise.

### Act III: The Mandatory Rule (Pages 23–32)

**Pages 23–26 (4-Page Sequence: Two Lessons for Closed-Loop Life Support)**

- **Page 23:** Lesson 1 — **Energy Demand:** Even when microgravity stops stressing the genome by Day 5, plastid translation and mitochondrial `ATP` synthesis stay elevated. Future lunar/Mars bioreactors must budget extra metabolic energy for plants in orbit.

- **Page 24:** Lesson 2 — **Hardware & O2 Budgets:** Inside sealed `31.7 × 24 × 14.3 mm` chambers, `O2` fell from `8` to `2 mg/L` in `5` days (`Response to hypoxia`, `6` overlap genes). Gas-exchange membranes govern how long closed cultures can survive.

- **Page 25:** Lesson 3 — **Replicate Power:** With only `3` `EUEs` (`n = 2` chambers per group), statistical power after FDR is tight—making future multi-slot centrifuges essential.

- **Page 26:** Fengler, Spirer, Neef, Ecke, Nieselt, and Hampp finalize the manuscript (`BioMed Research International`, `2015`) with a clear concluding mandate: **an in-flight `1g` reference centrifuge should be mandatory on spaceflight missions.**

**Pages 27–30 (4-Page Sequence: Entering the OSDR Matrix)**

- **Page 27:** ArrayExpress `E-MTAB-2518` is ingested into NASA GeneLab as **`GLDS-213` / `OSD-213`**, uniting German–Chinese `Shenzhou 8` data with U.S. Space Shuttle and `ISS` studies.

- **Page 28:** In the `TOAST` / `GLDS` meta-analysis (`PMC10027818`), `GLDS-213` sits alongside `OSD-205` (`BRIC-17-1`, Vol. 19) and `OSD-208` (`Zone 1/2` root apex, Vol. 20)—highlighting how platform (`ATH1` vs. `RNA-seq`), tissue type (callus vs. seedling), and `1g` flight controls reshape DEG counts.

- **Page 29:** A quiet visual callback: from `OSD-210`'s cosmic rays punching through dormant seeds over Antarctica (`Vol. 21`) to `OSD-213`'s `5.93–8.1 mSv` orbital dose waking `MAPK` and `ROS` defenses in `Shenzhou 8` callus cells (`Vol. 22`).

- **Page 30:** Next stop on the chronological ledger: `OSD-217` (`APEX03-2` / `TAGES-ISA`), where `ISS` spaceflight rewrites not just gene expression—but the *Arabidopsis* **epigenome**.

**Pages 31–32 (Full-Bleed Mission Debrief Infographic Spread)** *(Detailed in Section 4 below.)*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31): `Simbox` Hardware, `Shenzhou 8` Flight Profile & Experimental Design

- **Header Banner:** `OSD-213 / GLDS-213 (E-MTAB-2518) — Simbox Experiment #16 Aboard Shenzhou 8`

- **Mission & Environment Telemetry:**

  - **Flight:** `Shenzhou 8` / `Long March 2F` (`JSLC`), launched `Oct 31, 2011 (21:58 UTC)`, landed `Nov 17, 2011 (11:32 UTC)` (`17` days total; `RNAlater` quenched at **Day 5**: `FC` at `EZT + 120:28:00`, `FS` at `EZT + 128:38:30`).

  - **Cabin & Incubator:** `22–24 °C`, `30–40%` RH, `O2` `18.04–27.32 kPa`, `CO2` `-0.03–0.46 kPa`, `CC` dissolved `O2` `8 → ~2 mg/L` by Day 5; radiation `5.93–8.1 mSv` total (`0.37–0.51 mSv/d`).

- **3-Arm Controlled Design (`n = 2` chambers/group, front & rear CC, `r ≈ 0.99`):**

  - **`FS` (`FM 16002`, Flight Static `µg`, slot `SP04`):** Larger calli after `5` days (upregulated expansins).

  - **`FC` (`FM 16001`, Flight Centrifuge `1g` at `74.40 rpm`, slot `C05`):** Controls for launch, radiation, and `Simbox` enclosure.

  - **`GS` (`FM 16003`, Ground Static `1g`, `PITC` Beijing):** Duplicate `Simbox`, started `Nov 2, 2011`, fixed `Nov 7, 2011`.

### Right Spread (Page 32): `ATH1` Microarray Breakdown — Microgravity vs. Spaceflight Environment

- **DEG Comparison Matrix (`|log2 fc| ≥ 1`, `P < 0.1`):**

  - **`FS` vs. `FC` (Pure Microgravity, `5 d`):** `298` genes `≥ 2-fold` (`275↑`, `23↓`), **`0` statistically significant** after FDR.

  - **`FS` vs. `GS` (Flight `µg` vs. Ground `1g`):** **`897` significant DEGs** (`463↑`, `434↓`; `20` FDR-corrected).

  - **`FC` vs. `GS` (Flight `1g` vs. Ground `1g`):** **`826` significant DEGs** (`543↑`, `283↓`; `155` FDR-corrected).

  - **Shared Non-`µg` Spaceflight Core (`FS/GS ∩ FC/GS`):** **`573` significant DEGs**.

- **Top Enriched Pathways (`GSEA`):**

  - **Pure `µg` Trends (`FS` vs. `FC`):** Plastid translation (`27` genes: `ATCG00065` `+2.36`, `ATCG00660` `+2.14`, `AT1G13950` `EIF-5A` `+1.14`), mitochondrial `ETC` (`11` genes: `ATMG00650` `ND4L` `+2.3`), `ATP` biosynthesis (`10` genes: `ATCG00120` `+2.15`), and downregulated `HSP`s.

  - **Non-`µg` Spaceflight Core (`573` DEGs):** `MAPK` cascade (`27` overlap: `MPK11`, `MKK9`), protein phosphorylation (`18` overlap: `Ca^2+` EF-hand, `LRR`/`CRK` kinases), `WRKY38`/`54`/`70` & `NAC3`, defense/chitinase/flagellin `RLK`s, and `ROS` detoxification (`Peroxidases 4, 21, 25, 52`, `Catalase 3`, `GSTU19`).

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "volume": 22,
  "osdr_accession": "OSD-213",
  "glds_id": "GLDS-213",
  "source_accession": "E-MTAB-2518",
  "payload_mission": "Simbox (Science in Microgravity Box) Experiment #16 aboard Shenzhou 8 (Long March 2F, JSLC, Oct 31 - Nov 17, 2011; Day-5 fixation)",
  "organism": "Arabidopsis thaliana (Col-0, 11-day-old semisolid callus cultures)",
  "new_hardware_introduced": [
    "Simbox incubator (Astrium/EADS, modified Biobox-6, 34 L, integrated 74.40 rpm 1g reference centrifuge)",
    "Type V Experiment Unit Envelope (EUE) inside Type I Experiment Container (EC)",
    "Tecason S polysulfone gas-exchange biofoil + spiked substrate slide + 20.3 mL RNAlater peristaltic pump system"
  ],
  "molecular_characters": [
    "Plastid-encoded ribosomal proteins (ATCG00065 RPS12, ATCG00660 RPL20, ATCG00770 RPS8) & EIF-5A",
    "Mitochondrial NADH dehydrogenase (ATMG00650, ATMG00060) & ATP synthase subunits (ATCG00120, ATMG00410)",
    "MAPK cascade (MPK11, MKK9) & Ca2+ EF-hand sensors",
    "WRKY38, WRKY54, WRKY70 & NAC3 transcription factors",
    "ROS scavengers (Peroxidases 4, 21, 25, 52, Catalase 3, GSTU19) & Heat Shock Proteins (HSPs)"
  ],
  "continuity_hooks": [
    "In-flight 1g centrifuge (FC) proves 573 of 897 flight-vs-ground DEGs stem from non-microgravity spaceflight conditions (radiation, vibration, hardware)",
    "5-day callus cultures acclimate to microgravity (0 FDR-significant DEGs in FS vs. FC), contrasting with rapid parabolic/sounding-rocket responses",
    "Skipped OSD-211 (absent), OSD-212 (mouse microbiome), OSD-214 (mouse bone marrow), OSD-215 (Bacillus subtilis), and OSD-216 (absent)",
    "Next sequential plant accession: OSD-217 (APEX03-2 / TAGES-ISA Arabidopsis spaceflight methylome)"
  ]
}

```

Say **"Go on"** when you're ready for **Volume 23**.
