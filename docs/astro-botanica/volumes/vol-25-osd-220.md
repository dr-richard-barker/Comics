---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 25
title: "The Recoverable Epigenome"
accession: OSD-220
script_status: partial
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 57)
---

> [!NOTE]
> Script status **partial**: 32/32 pages have their own heading; condensed ranges: 27-30.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles* — **Volume 25**

- **Title:** *The Recoverable Epigenome*

- **OSDR / GeneLab Accession:** `OSD-220` / `GLDS-220` (NASA Open Data Portal | Data.gov)

- **Chronology Note:** `OSD-219` is skipped as a non-plant OSDR accession; Volume 25 advances directly from `OSD-218` (Vol. 24, `APEX03-2` root skewing) to `OSD-220` (`SJ-10` *Arabidopsis* methylome).

- **Primary Repository & Publication:** NCBI SRA `SRP134216`; Xu et al. (2018), *npj Microgravity* 4:12, DOI `10.1038/s41526-018-0046-z` (PMC6043569)

- **Mission & Vehicle:** Chinese Recoverable Scientific Satellite **`SJ-10`** (`Shijian-10`), launched from Jiuquan Satellite Launch Center on **April 6, 2016** (`01:38`) and landed **April 18, 2016** (`16:30`)

- **Hardware:** Custom two-unit polysulfone culture chamber assembly with gas-permeable membrane windows, canal system, pump support system, and tube-connected `RNAlater®` fixative unit designed by the Shanghai Institute of Technical Physics (SITP), Chinese Academy of Sciences (no `1g` onboard centrifuge)

- **Organism & Genotype:** *Arabidopsis thaliana* ecotype Columbia (`Col-0`)

- **Assay & Sequencing:** Whole-Genome Bisulfite Sequencing (**WGBS / BS-Seq**) on **Illumina HiSeq 2500** (`6` pooled samples: `S1–S3` flight vs. `G1–G3` `1g` ground control; `49` seedlings per chamber, fixed in orbit at `60 h`), plus `11 d` live-returned seedlings (`n = 4` plants, `n = 8` true leaves) for morphometry

## 2. Dramatis Personae (Grounded in Study Data)

- **Dr. Weiming Cai (Principal Investigator):** Lead scientist at the Shanghai Institute of Plant Physiology and Ecology (CAS), who designed the `SJ-10` plant epigenetics investigation to test whether microgravity rewrites cytosine methylation at single-base resolution (PMC6043569).

- **Peipei Xu & Haiying Chen (Co-First Authors):** Experimentalists who pre-cultured `Col-0` seedlings three days before launch, processed the `RNAlater®`-fixed orbital samples `4 h` after capsule recovery, and built the bisulfite-converted libraries.

- **Jing Jin (Co-Author):** Bioinformatic collaborator who mapped WGBS reads with `Bismark` and called differentially methylated regions (DMRs) via `swDMR` across all five *Arabidopsis* chromosomes.

- **Cultivation Unit 1 (`S1–S3`):** Three independent polysulfone chambers, each housing `49` `Col-0` seedlings on half-strength MS (`1%` phytagel) under `16 h` light (`8000 lx`) / `8 h` dark at `22 ± 1 °C`, chemically arrested in orbit with `RNAlater®` at **60 hours** of microgravity (`10⁻³` to `10⁻⁴ g`).

- **Cultivation Unit 2 (The Survivors):** Four `Col-0` seedlings grown continuously for **11 days** in orbit and returned alive inside the `SJ-10` reentry capsule, revealing expanded true leaves (`0.179 ± 0.023 cm²` vs. `0.145 ± 0.020 cm²` on Earth, `p < 0.05`).

- **The Launch Simulator (`330 s` Hypergravity):** Ground control rig reproducing `SJ-10`'s two-stage ascent overload (`4.8g` for `150 s` + `6.0g` for `180 s`) to prove that `ARF1` hypermethylation during launch moves opposite to the `60 h` microgravity signature.

## 3. 32-Page Chapter Script

### Act I: The Capsule and the Clock (Pages 1–10)

**Page 1 (Splash Page):** Full-bleed orbital view of China's **Shijian-10 (`SJ-10`)** recoverable satellite gliding over the Gobi Desert at `01:38` on **April 6, 2016** (PMC6043569). Cutaway inset reveals two compact polysulfone cultivation units glowing under `8000 lx` LEDs. **Caption:** *"Volume 23 mapped the methylome of ISS seedlings after 11 days in Veggie. Now, in a recoverable capsule built for 12 days of free flight, the question narrows to 60 hours."*

**Page 2 (4-Panel Grid):**

- *Panel 1:* Jiuquan Satellite Launch Center, `3` days pre-launch. Peipei Xu transfers germinated *Arabidopsis* `Col-0` seedlings from Petri dishes (`4 °C` stratification `3 d`, germination `3 d`) into SITP polysulfone culture chambers (`49` seedlings per chamber).

- *Panel 2:* Close-up of the SITP hardware: gas-permeable membrane windows, canal tubing, and the pump-driven `RNAlater®` reservoir (PMC6043569).

- *Panel 3:* Weiming Cai checks the telemetry specs: `22 ± 1 °C`, `16 h` light / `8 h` dark, and no `1g` centrifuge—every gram of mass inside `SJ-10` is rationed.

- *Panel 4:* Launch ignition. Telemetry gauge spikes: **Stage 1: `4.8g` (`150 s`) → Stage 2: `6.0g` (`180 s`)**.

**Page 3 (3-Panel Sequence):**

- *Panel 1:* Orbital insertion. The g-meter drops to **`10⁻³` to `10⁻⁴ g`**. Inside Cultivation Unit 1, droplets of condensation bead along the chamber walls.

- *Panel 2:* `60 hours` into microgravity. Automated pumps engage, flooding Cultivation Unit 1 with `RNAlater®` through tube connectors to freeze every `5-methylcytosine` (`5mC`) mark in place.

- *Panel 3:* Parallel ground lab in Shanghai: Haiying Chen triggers the identical `RNAlater®` fixation on `1g` ground controls (`G1–G3`) at the exact `60 h` timestamp.

**Page 4 (5-Panel Grid):**

- *Panel 1:* **April 18, 2016 (`16:30`)** — `SJ-10` parachute touchdown.

- *Panel 2:* Recovery team opens the payload bay; `4 hours` post-landing, the chambers are chilled to `4 °C` and rushed to Shanghai.

- *Panel 3:* Cultivation Unit 2 is unsealed: four `11-day-old` seedlings are still alive, their first and second true leaves unfurled.

- *Panel 4:* ImageJ measurement screen: microgravity leaves average **`0.179 ± 0.023 cm²`** versus **`0.145 ± 0.020 cm²`** on the ground (`n = 8` leaves, `p < 0.05`).

- *Panel 5:* Xu holds up a Falcon tube containing `49` fixed seedlings from Unit 1 (`S1`): *"They grew bigger in 11 days. The instructions for why were written at 60 hours."*

**Page 5 (4-Panel Grid):**

- *Panel 1:* `-80 °C` storage thaw: `20 °C` overnight, `4 °C` overnight, then room temperature to dissolve `RNAlater®` precipitate.

- *Panel 2:* Sonicator hums, shearing `5 mg` of genomic DNA into `~200 bp` fragments.

- *Panel 3:* Three consecutive rounds of `Qiagen EpiTect` bisulfite conversion—unmethylated cytosines flip to uracil (`C → T`), while `5mC` resists conversion. λ DNA spike-in verifies conversion efficiency.

- *Panel 4:* **Illumina HiSeq 2500** flow cell loads `S1–S3` and `G1–G3`.

**Page 6 (3-Panel Sequence):**

- *Panel 1:* Jing Jin launches `Bismark` alignment against the *Arabidopsis* `TAIR10` reference, then runs `swDMR` sliding-window Fisher tests (`p < 0.05`).

- *Panel 2:* Five concentric chromosome tracks bloom on-screen as **Circos plots** for `CpG`, `CHG`, and `CHH` contexts (PMC6043569).

- *Panel 3:* Cai leans in as the global averages resolve: across all three cytosine contexts—**`CpG`**, **`CHG`**, and **`CHH`**—spaceflight seedlings are **globally hypomethylated** compared to ground controls.

**Page 7 (4-Panel Grid):**

- *Panel 1:* Genomic landscape breakdown: `CpG` shows the highest methylation overall, dipping sharply in `5'UTR` and `3'UTR` relative to coding sequences (`CDS`) and `1500-bp` promoters.

- *Panel 2:* `CHG` flips the pattern—highest in `1500-bp` upstream promoters and `5'UTR`, lowest in `CDS`.

- *Panel 3:* `CHH` peaks in `5'UTR` and `3'UTR` and troughs in promoters and `CDS`.

- *Panel 4:* **Dialogue (Jin):** *"It isn't random erasure. Each sequence context is losing methyl tags in its own architectural compartment."*

**Page 8 (3-Panel Sequence):**

- *Panel 1:* Skeptical challenge on a whiteboard: *"Was it 60 hours of microgravity—or 330 seconds of launch overload?"*

- *Panel 2:* Ground centrifuge test replicates `4.8g` (`150 s`) + `6.0g` (`180 s`), followed by bisulfite PCR on `ABA3`, `DME`, and `ARF1`.

- *Panel 3:* Gel and sequencing readout: `ABA3` and `DME` show **no significant change**; `ARF1` becomes **hypermethylated**—the exact *reverse* of its microgravity hypomethylation trend.

**Page 9 (4-Panel Grid):**

- *Panel 1:* **Dialogue (Cai):** *"Hypergravity pushes `ARF1` methylation up. Microgravity pulls it down. The launch didn't write this methylome—weightlessness did."*

- *Panel 2:* Close-up of the methyltransferase/demethylase table (`Table S1`): `DMT1` (`MET1`), `DME` (`DEMETER`), `AGO2`, and `APE1` all carry **hypermethylated** DMRs in space.

- *Panel 3:* A paradox emerges: even as the global genome loses `5mC`, the enzymes that *write* and *erase* methylation are themselves being methylated.

- *Panel 4:* Transition panel zooming into the **36 differentially methylated transcription factors** (`bHLH`, `bZIP`, `GATA`, `WRKY`, `NAC`).

**Page 10 (2-Panel Act Break):**

- *Panel 1:* Split-screen silhouette of a `Col-0` seedling root and expanding leaf against orbital starlight.

- *Panel 2:* Title card overlay: **ACT II: THE RELAXED WALL AND THE AWAKENED TRANSPOSONS**.

### Act II: The Relaxed Wall and the Awakened Transposons (Pages 11–22)

**Page 11 (4-Panel Grid):**

- *Panel 1:* GO enrichment bar chart for **`CHG`** altered methylation-related (`AMR`) genes (`p < 0.05`): **cell wall-related processes**, **carbohydrate metabolism**, **defense response**, and **nitrogen compound transport** (PMC6043569).

- *Panel 2:* Schematic of a plant cell wall under `1g` vs. `10⁻⁴ g`: without gravitational load, mechanical support tissue softens.

- *Panel 3:* `Table S5` gene list scrolls past: cellulose synthase catalytic subunits, callose synthases, **xyloglucan endotransglucosylase**, **beta-galactosidase**, and **beta-glucosidase**.

- *Panel 4:* **Dialogue (Xu):** *"Spaceflight plants lower cell wall rigidity and xyloglucan molecular mass. Now we see the methylome priming those exact wall-loosening enzymes."*

**Page 12 (4-Panel Grid):**

- *Panel 1:* GO enrichment for **`CHH`** `AMR` genes: **metabolic/biosynthetic processes**, **signaling transduction**, **oxidation-reduction**, and **lipid biosynthesis**.

- *Panel 2:* Lipid membrane polarity diagram: `CHH` methylation shifts around plasma membrane and cell periphery genes.

- *Panel 3:* GO enrichment for **`CpG`** `AMR` genes: **mRNA transport & nuclear export**, **microtubule-based movement**, **inositol phosphate phosphorylation**, and **telomere maintenance in response to DNA damage**.

- *Panel 4:* Cosmic radiation track piercing a nucleus—linking `CpG` DNA-damage/telomere DMRs to the spaceflight radio-adaptive response.

**Page 13 (3-Panel Sequence):**

- *Panel 1:* **KEGG pathway bubble plot** (`Fig. 5`): `CHG` DMRs cluster in starch/sucrose metabolism, phenylpropanoid/phenylalanine biosynthesis, glutathione metabolism, **proteasomes**, and **ribosomes**.

- *Panel 2:* `CHH` DMRs light up secondary metabolite biosynthesis and ribosomes.

- *Panel 3:* `CpG` DMRs highlight **ABC transporters**, **nucleotide excision repair**, and **endocytosis**.

**Page 14 (5-Panel Grid):**

- *Panel 1:* Focus on **Auxin Signaling (`Table S4`)**—the master hormone of gravitropism.

- *Panel 2:* Receptor & F-box tier: `TIR1`, `AFB2`, `AFB5` show altered methylation.

- *Panel 3:* Transcriptional tier: **`ARF1`, `ARF2`, `ARF4`**, and other `ARFs` (`ARF1–6`, `8`, `19`, `21`, `22`) lose methylation, while **`ARF3`, `IAA9`, and `IAA33`** gain hypermethylation.

- *Panel 4:* Transport tier: **`BIG`** (required for polar auxin transport) is **hypermethylated**, alongside `AAO1`/`AAO2` and `ABC` transporters.

- *Panel 5:* **Dialogue (Chen):** *"Perception, signaling, biosynthesis, and polar transport—every link in the auxin chain has an epigenetic fingerprint."*

**Page 15 (4-Panel Grid):**

- *Panel 1:* Crosstalk across other phytohormones: ethylene (`EIN2`, `EIN3`, `ERF11`, `ERF094`), abscisic acid (`ABA3`—methylation decreased), and brassinosteroids (`BAK1`—methylation decreased).

- *Panel 2:* Transcription factor spotlight: **`MYB65`, `MYB74`, `BHLH35`, `BHLH81`, `BHLH131`, `BZIP68`, `GATA26`, `NAC081`, `NAC100`, `NAC105`, `WRKY7`, `WRKY19`**—all hypermethylated.

- *Panel 3:* Dual-pattern genes (`MYB3R5`, `GATA14`, `BIG`, `BAK1`, `ABA3`) show **both** hyper- and hypomethylated regions on the same locus.

- *Panel 4:* **Dialogue (Cai):** *"Epigenetic regulation in microgravity isn't a blunt dimmer switch. It's a locus-by-locus editing desk."*

**Page 16 (3-Panel Sequence):**

- *Panel 1:* Zooming out from genes to the **dark genome**: pericentromeric heterochromatin and **Transposable Elements (TEs)** (`RepeatMasker`, FDR `p < 0.05`).

- *Panel 2:* Density curves (`Fig. 4a`): across TE bodies and their `1-kb` flanking regions, `S1–S3` drop below `G1–G3` in **`CHG`**, **`CHH`**, and **`CpG`**.

- *Panel 3:* **Dialogue (Jin):** *"When TEs lose their methyl locks, silent transposons wake up—and can act as stress enhancers for nearby genes."*

**Page 17 (4-Panel Grid):**

- *Panel 1:* TEs stratified by length into three classes (`Fig. 4b–d`).

- *Panel 2:* **Short TEs (`< 500 bp`):** A dramatic plunge in **`CHG`** and **`CHH`** methylation under microgravity.

- *Panel 3:* **Medium TEs (`500–2000 bp`):** Only a marginal decrease in `CHG` and `CHH`.

- *Panel 4:* **Long TEs (`> 2000 bp`):** `CHG` dips, while `CHH` and `CpG` hold steady—proving **short TEs** are the primary epigenetic shock absorbers of `60 h` microgravity.

**Page 18 (3-Panel Sequence):**

- *Panel 1:* Side-by-side comparison of **Vol. 23 (`OSD-217`, `APEX03-2` ISS `11 d`, `WS`)** and **Vol. 25 (`OSD-220`, `SJ-10` `60 h`, `Col-0`)**.

- *Panel 2:* Both missions flag hormone, cell-wall, and defense-related methylation shifts, yet `SJ-10` captures the **early `60 h` global hypomethylation wave** in `Col-0` without an orbital `1g` centrifuge.

- *Panel 3:* **Dialogue (Cai):** *"Short-duration recoverable satellites give us the acute epigenetic shock; orbital stations give us the chronic adaptation."*

**Page 19 (4-Panel Grid):**

- *Panel 1:* Connecting `60 h` molecular data back to the `11 d` living survivors in Cultivation Unit 2.

- *Panel 2:* True leaves 1 and 2 of the four space-grown seedlings (`0.179 ± 0.023 cm²`) juxtaposed against ground controls (`0.145 ± 0.020 cm²`).

- *Panel 3:* Mechanistic bridge: auxin-induced cell wall relaxation + hypomethylated cell-wall expansion genes = accelerated early leaf expansion in weightlessness.

- *Panel 4:* **Caption:** *"Without gravity's constant load, the cell wall yields—and the methylome clears the path."*

**Page 20 (3-Panel Sequence):**

- *Panel 1:* Data deposition screen: `SRP134216` uploaded to NCBI SRA, later ingested into NASA GeneLab / OSDR as **`OSD-220` (`GLDS-220`)**.

- *Panel 2:* Publication stamp: *npj Microgravity* `4:12` (**July 12, 2018**) (PMC6043569).

- *Panel 3:* **Caption:** *"A single-base map from a 12-day Chinese satellite enters NASA's open archive—proving plant space biology is a shared global ledger."*

**Page 21 (2-Panel Sequence):**

- *Panel 1:* Empty Cultivation Unit 1 chamber cleaned and archived in Shanghai.

- *Panel 2:* **Caption:** *"One unanswered question remains: if 60 hours rewrites the methylome, what happens when you break a second-messenger lipid pathway—and test it against a true 1g centrifuge in orbit?"*

**Page 22 (Full-Bleed Transition):** The **International Space Station (`ISS`)** gleams above Earth's terminator, its **European Modular Cultivation System (`EMCS`)** twin rotors spinning inside Columbus. **Caption:** *"Next: `OSD-223` — `InsP 5-ptase` transgenic Arabidopsis under true orbital `1g` vs. microgravity."*

### Act III: Synthesis & Mission Debrief (Pages 23–32)

**Page 23 (4-Panel Grid):**

- *Panel 1:* Summary of the three-tier cytosine architecture (`CpG` in gene bodies/TEs, `CHG` in promoters/`5'UTR`/TEs, `CHH` in `UTRs`/TEs).

- *Panel 2:* Epigenetic feedback loop: `DMT1` (`MET1`), `DME`, `AGO2`, and `APE1` hypermethylation suggests active self-regulation of the methylation machinery itself.

- *Panel 3:* Auxin & cell wall nexus: `TIR1`–`ARF`–`IAA`–`BIG` methylation shifts align with xyloglucan and cellulose synthase remodeling.

- *Panel 4:* Short TE (`< 500 bp`) `CHG`/`CHH` demethylation highlights genome plasticity under acute microgravity.

**Page 24 (3-Panel Sequence):**

- *Panel 1:* Experimental limitations candidly logged: absence of an onboard `1g` centrifuge on `SJ-10` means spaceflight confounders (radiation, fluidics, launch) cannot be 100% separated from microgravity alone.

- *Panel 2:* Counter-evidence panel: `330 s` simulated launch hypergravity reversed `ARF1` methylation and left `ABA3`/`DME` unchanged, isolating microgravity as the dominant signal.

- *Panel 3:* Pooling strategy (`49` seedlings × `3` biological replicates) buffers individual plant noise.

**Page 25 (4-Panel Grid):**

- *Panel 1:* **Epigenetic Breeding Concept:** Tuning methylation of cell-wall and auxin-transport loci (`BIG`, `XTH`, `CESA`) to stabilize crop architecture in orbital greenhouses.

- *Panel 2:* **Transposon Guardrail:** Monitoring short TEs (`< 500 bp`) across multi-generation seed-to-seed spaceflight to prevent unwanted insertional mutations.

- *Panel 3:* **RNA-Seq Pairing Gap:** `OSD-220` captured `WGBS` without matched `RNA-seq` on `S1–S3`—a gap later addressed by multi-generation `SJ-10` follow-up studies.

- *Panel 4:* **OSDR Standardization:** `GLDS-220` / `OSD-220` pairs `SRP134216` raw reads with standardized ISA metadata on Data.gov.

**Page 26 (3-Panel Sequence):**

- *Panel 1:* Timeline strip linking `Shenzhou 8` (`Simbox`, Vol. 22 `OSD-213`), `SpaceX-5` (`APEX03-2`, Vol. 23 `OSD-217` & Vol. 24 `OSD-218`), and `SJ-10` (Vol. 25 `OSD-220`).

- *Panel 2:* Visual contrast: callus microarrays (`OSD-213`) → `11 d` `WS` WGBS (`OSD-217`) → `60 h` `Col-0` WGBS (`OSD-220`).

- *Panel 3:* **Caption:** *"From transcriptomes to single-base epigenomes, plants don't just react to space—they re-index their chromatin."*

**Pages 27–30 (4-Page Epilogue Montage — 1 Panel per Page):**

- *Page 27:* Close-up of a single `Col-0` true leaf (`0.179 cm²`) silhouetted against a `Bismark` methylation browser track.

- *Page 28:* The `SJ-10` reentry capsule resting on the steppe, scorched heatshield cooling in the April dusk.

- *Page 29:* A researcher's gloved hand holding a `200 bp` bisulfite library tube—the bridge between orbital hardware and computational biology.

- *Page 30:* Looking forward: **EMCS** twin rotors (`OSD-223`) awaiting `InsP 5-ptase` seedlings to test lipid second-messenger signaling under true `1g` vs. `μg`.

**Pages 31–32 (Double-Page Spread):** Full-bleed **Mission Debrief Infographic Spread** (detailed in Section 4).

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31) — Mission & Hardware Architecture

- **Top Banner:** `OSD-220 / GLDS-220` | **Mission:** `SJ-10` Recoverable Satellite (`Apr 6–18, 2016`) | **SRA:** `SRP134216` | **Paper:** Xu et al., 2018 (PMC6043569)

- **Hardware Diagram (SITP Two-Unit System):**

  - **Cultivation Unit 1 (Methylome):** Polysulfone chambers with gas-permeable membranes + `RNAlater®` tube-connected fixative unit; `49` `Col-0` seedlings/chamber (`S1–S3` flight, `G1–G3` `1g` ground), fixed in orbit at **`60 h`**.

  - **Cultivation Unit 2 (Phenotype):** Grown **`11 days`** in orbit (`10⁻³` to `10⁻⁴ g`), returned alive (`n = 4` plants, `n = 8` true leaves).

  - **Environment:** `22 ± 1 °C` (`~23 °C` ambient), `~25%` RH, `16 h` light (`8000 lx`) / `8 h` dark, `1/2 MS + 1% phytagel`; **no `1g` onboard centrifuge**.

- **Launch Control Box:** `330 s` simulated launch (`4.8g` `150 s` + `6.0g` `180 s`) → `ABA3` & `DME` unchanged; `ARF1` hypermethylated (opposite to microgravity hypomethylation).

### Right Spread (Page 32) — Single-Base Methylome & Phenotype Findings

- **Assay Pipeline:** `5 mg` DNA (`~200 bp` sonicated) → 3× `Qiagen EpiTect` bisulfite (`λ` DNA control) → **Illumina HiSeq 2500** → `Bismark` + `swDMR` (`p < 0.05`) + `RepeatMasker` (`p < 0.05`).

- **Global & Context Methylation:** Lower global `5mC` in **`CpG`**, **`CHG`**, and **`CHH`** under microgravity (`CpG` highest overall, `CHH` lowest).

- **Key Altered Methylation (`AMR`) Pathways:**

  - **`CHG`:** Cell wall processes (`CESA`, callose synthase, `XTH`, beta-galactosidase/glucosidase), carbohydrate metabolism, defense response, nitrogen transport.

  - **`CHH`:** Oxidation-reduction, lipid biosynthesis, secondary metabolites, phenylpropanoid biosynthesis.

  - **`CpG`:** mRNA nuclear export, microtubule movement, telomere maintenance / DNA damage repair, inositol phosphate phosphorylation, `ABC` transporters.

- **Hormones, TFs & Machinery:** Auxin (`TIR1`, `AFB2/5`, `ARF1–6/8/19/21/22`, `IAA9/33`, `BIG`, `AAO1/2`), ethylene (`EIN2/3`, `ERF11/094`), ABA (`ABA3`), BR (`BAK1`); `~36` TFs (`bHLH`, `bZIP`, `GATA`, `WRKY`, `NAC`); epigenetic enzymes (`DMT1`/`MET1`, `DME`, `AGO2`, `APE1` hypermethylated).

- **Transposable Elements & Leaf Growth:** Short TEs (`< 500 bp`) show sharp `CHG`/`CHH` hypomethylation; `11 d` microgravity leaves are larger (**`0.179 ± 0.023 cm²`** vs. **`0.145 ± 0.020 cm²`**, `p < 0.05`).

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "series_title": "Roots in Orbit: The NASA OSDR Plant Chronicles",
  "volume": 25,
  "osdr_accession": "OSD-220",
  "genelab_accession": "GLDS-220",
  "skipped_accessions_since_last_volume": ["OSD-219"],
  "external_accessions": {
    "sra": "SRP134216",
    "pmc": "PMC6043569",
    "doi": "10.1038/s41526-018-0046-z",
    "data_gov_id": "nasa_genelab_GLDS-220_8wjt-c6tr"
  },
  "mission": {
    "vehicle": "SJ-10 (Shijian-10) Recoverable Scientific Satellite",
    "launch_date": "2016-04-06T01:38",
    "landing_date": "2016-04-18T16:30",
    "microgravity_level": "1e-3 to 1e-4 g",
    "launch_overload": "4.8g (150 s) + 6.0g (180 s)"
  },
  "hardware": "SITP two-unit polysulfone culture chambers with gas-permeable membranes and tube-connected RNAlater fixative unit (no 1g onboard centrifuge)",
  "organism": "Arabidopsis thaliana (Col-0)",
  "assay": "Whole-Genome Bisulfite Sequencing (WGBS / BS-Seq), Illumina HiSeq 2500",
  "sample_design": {
    "methylome_unit_1": "3 flight pools (S1-S3) vs. 3 ground 1g pools (G1-G3), 49 seedlings/pool, fixed in orbit with RNAlater at 60 h",
    "phenotype_unit_2": "4 live-returned seedlings (n = 8 true leaves) grown 11 d in microgravity"
  },
  "key_findings": {
    "global_methylation": "Lower 5mC in CpG, CHG, and CHH contexts in microgravity",
    "leaf_area_11d": "0.179 ± 0.023 cm2 (flight) vs. 0.145 ± 0.020 cm2 (ground), p < 0.05",
    "transposable_elements": "Widespread TE hypomethylation; sharpest CHG/CHH drop in short TEs (< 500 bp)",
    "pathways": ["Cell wall remodeling", "Auxin/ABA/ethylene/BR signaling", "DNA damage/telomere maintenance", "ABC transporters", "36 TFs"],
    "launch_control": "330 s simulated hypergravity hypermethylated ARF1 (opposite to microgravity) and left ABA3/DME unchanged"
  },
  "continuity_hook_next": {
    "expected_next_plant_osdr": "OSD-223",
    "notes": "OSD-221 and OSD-222 (STS-135 mouse cerebellum) are non-plant; OSD-223 covers ISS EMCS InsP 5-ptase transgenic Arabidopsis"
  }
}

```

Say **"Go on"** when you're ready for **Volume 26**.
