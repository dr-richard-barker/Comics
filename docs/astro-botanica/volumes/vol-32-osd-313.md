---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 32
title: "Red Light in the Nucleolus"
accession: OSD-313
script_status: condensed
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 71)
---

> [!NOTE]
> Script status **condensed**: 32/32 pages have their own heading; condensed ranges: 2-4, 5-7, 8-10, 11-14, 15-18, 19-22, 23-26, 27-30.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles*

- **Volume:** 32

- **Title:** *Red Light in the Nucleolus*

- **OSDR / GLDS Accession:** `OSD-313` / `GLDS-313` (Data.gov Catalog Record | DOI: `10.26030/0g0m-dj21` | Related Study: `OSD-314`)

- **Chronology Note:** Skips `OSD-302`–`OSD-312` (non-plant payloads including ISS microbial tracking `OSD-302`/`303`/`306`/`309`, mouse radiation `OSD-304`, and rat bone `OSD-310`). Ground reference experiment (`1g`) for the ESA/NASA *Seedling Growth 2* (`SG2`) spaceflight series.

- **Primary Publication:** Manzano, A., Villacampa, A., Sáez-Vásquez, J., Kiss, J. Z., Medina, F. J., & Herranz, R. (2020). *The Importance of Earth Reference Controls in Spaceflight -Omics Research: Characterization of Nucleolin Mutants from the Seedling Growth Experiments*. *iScience*, 23(11):101686 (`PMCID: PMC7607443`, `PMID: 33163940`, `doi: 10.1016/j.isci.2020.101686`).

- **Mission & Platform:** ESA-ELIPS / NASA *Seedling Growth* (`SG2`) `1g` Ground Reference Control (`N-USOC` `EMCS` Ground Model).

- **Hardware:** NASA `Tropi` Experiment Unique Equipment (`EUE`) culture chambers (`CC` cassettes, `5` per Experiment Container `EC`) with semiautomatic hydration and white/red/blue LEDs; `28` seeds affixed with `1%` Guar Gum onto gridded nitrocellulose membranes (`3.1 mm` grid) over Whatman `17 CHR` blotter paper soaked in `1/2 MS` medium. Grown `6` days at `22°C` (`96 h` `16 h/8 h` white light `30–40 μmol m⁻² s⁻¹` → `48 h` darkness vs. unidirectional red light `19 μmol m⁻² s⁻¹`), then frozen in `RNAlater` (`Ambion AM7020`) at `−80°C`.

- **Organism & Genotypes:** *Arabidopsis thaliana* Columbia (`Col-0` WT), `nuc1-2` (`Salk_002764`), and `nuc2-2` (`GABI178D01`).

- **Assay / Sequencing:** Whole-seedling RNA-seq (`18` samples: `3` genotypes × `2` light treatments × `3` biological replicates, `8–10` seedlings/rep; `MACHEREY-NAGEL` RNA kit; Illumina `TruSeq`; `FeatureCounts`, `DESeq2` `p adj < 0.05`, reprocessed via `GL-DPPD-7101-G`).

## 2. Dramatis Personae (Grounded in Study Data)

- **Dr. Raúl Herranz & Dr. F. Javier Medina** (*Centro de Investigaciones Biológicas Margarita Salas [CIB-CSIC], Madrid*): Principal investigators of the Spanish *Seedling Growth* team, testing how ribosome biogenesis—the cell's most energy-intensive factory—responds to red light before confronting microgravity.

- **Aránzazu Manzano & Alicia Villacampa** (*CIB-CSIC, Co-First Authors*): Executed the `Tropi` cassette ground runs, dissected the `18` RNA-seq transcriptomes, and built the `nuc1-2` protein–protein interaction networks.

- **Dr. Julio Sáez-Vásquez** (*CNRS / Université de Perpignan*): Nucleolin specialist who decoded the antagonistic balance between `NUC1` and `NUC2` in `45S` rDNA chromatin and pre-rRNA processing.

- **Dr. John Z. Kiss** (*University of North Carolina–Greensboro*): U.S. *Seedling Growth* PI linking red-light photostimulation to meristematic competence.

- **`NUC1` & `NUC2`**: *Arabidopsis*'s duplicated nucleolin proteins—unlike animals and yeast, which have only one. `NUC1` drives everyday ribosome synthesis and suppresses `NUC2`; `NUC2` steps in as a stress-responsive backup when `NUC1` fails or the lights go out.

## 3. 32-Page Chapter Script

### Act I: Before the Centrifuge Spins (Pages 1–10)

**Page 1 (Splash Page)**

- **Panel 1:** Inside the `N-USOC` `EMCS` Ground Model. Five `Tropi` culture cassettes sit slotted inside an Experiment Container (`EC`). On the gridded nitrocellulose membranes (`3.1 mm` squares), `28` *Arabidopsis* seeds per cassette drink in `1/2 MS` medium as white LEDs click on (`30–40 μmol m⁻² s⁻¹`).

- **Caption (Narration):** *"In orbit, every mutant slot on a centrifuge is precious. Before you fly nucleolin mutants to the Space Station, you have to know what Earth's gravity and a simple red LED already do to their nucleoli."*

**Pages 2–4**

- **Pages 2–3:** Day 4 (`96 h`) arrives. Half the `Tropi` cassettes drop into total darkness for `48` hours; the other half bathe in unidirectional red light (`19 μmol m⁻² s⁻¹`). At Day 6 (`Figure 1B`), `Col-0` WT and `nuc2-2` seedlings stand uniform and healthy, while `nuc1-2` seedlings are visibly smaller across every cassette.

- **Page 4:** The harvest into `RNAlater` (`Ambion AM7020`) at `−80°C` and shipment to Madrid. Manzano and Villacampa pool `8–10` seedlings per biological replicate (`18` samples total) for Illumina `TruSeq` sequencing.

- **Herranz (Dialogue):** *"Three replicates of ten seedlings each—built to mirror the exact flight sample budget of `Seedling Growth 2`."*

**Pages 5–7**

- **Pages 5–6:** The `PCA` plot (`Figure 1C`) snaps onto the monitor. `PC1` cleanly splits darkness from red light; `PC2` separates `nuc1-2` far from `WT` and `nuc2-2` in the dark—yet under red light, all three genotypes pull closer together.

- **Page 7:** Red-light vs. darkness DEG counts (`Figure 2`): `WT` shifts `1,428` genes (`1,067` up, `361` down), and `nuc2-2` nearly matches it (`1,365` DEGs: `1,017` up, `339` down). `nuc1-2`, however, drops to `1,001` DEGs (`633` up, `368` down)—missing `353` up-regulated genes shared by `WT` and `nuc2-2` (secondary metabolism, cold response, and cell division).

**Pages 8–10**

- **Pages 8–9:** Zoom into the nucleolus (`Introduction` & `Figure 2`). Under normal conditions, `NUC1` transcribes `45S` rDNA and represses `NUC2`. When `nuc1-2` knocks out `NUC1`, `NUC2` wakes up, heterochromatin decondenses, and pre-rRNA piles up.

- **Page 10:** When `nuc2-2` knocks out `NUC2`, seedlings look normal on the outside—until red light asks the ribosome factory to accelerate.

### Act II: Half the Storm in Red Light (Pages 11–22)

**Pages 11–14**

- **Pages 11–12:** Genotype-to-genotype Venn diagrams (`Figure 3`) split into two dramatic halves: **Darkness** vs. **Red Light**.

- **Pages 13–14:** In **darkness**, `nuc1-2 vs. WT` erupts with **`3,363` DEGs** (`nuc1-2 vs. nuc2-2`: `2,121` DEGs), whereas `nuc2-2 vs. WT` shows only `149` DEGs. The instant **red light** turns on, `nuc1-2 vs. WT` plunges by more than half to **`1,499` DEGs** (`nuc1-2 vs. nuc2-2`: `1,069`), while `nuc2-2 vs. WT` *climbs* from `149` to **`225` DEGs**.

- **Manzano (Dialogue):** *"Red light cuts `nuc1-2`'s transcriptional chaos in half—it rescues `nuc1-2` toward wild type. Meanwhile, `nuc2-2` only shows its cracks once red light hits!"*

**Pages 15–18 (Molecular Interior — `Figure 4` PPI Network & `Figure S4`)**

- **Pages 15–16:** Inside a dark-stressed `nuc1-2` cell. `NUC2` steps in as emergency nucleolar foreman—up-regulating `G2/M` mitotic cell-cycle checkpoints, auxin signaling, `UV`/ionizing-radiation response, and cell-wall/cuticle biosynthesis (`Figure 4`). Yet `NUC2` cannot rescue everything: mRNA surveillance, temperature response, and immune genes remain repressed.

- **Pages 17–18:** Inside a red-light-stimulated cell (`nuc1-2 vs. nuc2-2`, `Figure S4B`). Ribosome biogenesis (`90S` preribosome, `SSU-rRNA` and `5.8S` rRNA maturation) lights up—proving red light's activation of ribosome assembly leans heavily on **`NUC2`**. Without `NUC2`, `nuc2-2` up-regulates stress alarms: hypoxia, salicylic acid, wounding, cold, and ABA.

- **Sáez-Vásquez (Caption):** *"Two nucleolins, two jobs. `NUC1` runs the peacetime factory; `NUC2` is the stress-and-red-light responder."*

**Pages 19–22**

- **Pages 19–20:** Villacampa compares `Tropi` cassette growth against standard Petri-dish `6`-day photoperiod runs—confirming cassette volume does not distort the core nucleolin phenotypes.

- **Pages 21–22:** Medina and Kiss review the `Limitations` panel: no continuous-light control was run because the flight hardware schedule only ran `96 h` photoperiod → `48 h` red or dark. Every parameter in `OSD-313` is locked to match the orbital `SG2` twin.

### Act III: The Baseline That Saves Orbit (Pages 23–32)

**Pages 23–26**

- **Pages 23–24:** Team roundtable in Madrid. Without this `1g` `OSD-313` reference, anyone sequencing `nuc1-2` or `nuc2-2` in orbit might mistake `NUC2`'s dark compensation or `nuc2-2`'s red-light stress signature for a microgravity effect.

- **Pages 25–26:** Medina sketches the bioregenerative life-support takeaway: pairing directional red light with tuned nucleolin (`NUC2`) backgrounds could counteract microgravity's uncoupling of cell growth and cell division.

**Pages 27–30 (Epilogue Montage)**

- **Pages 27–28:** November 20, 2020: *iScience* publishes `PMC7607443`, and NASA GeneLab/OSDR archives `OSD-313` (`GLDS-313`, `10.26030/0g0m-dj21`).

- **Pages 29–30:** Final panel zooms up from the `EMCS` Ground Model in Norway/Madrid to the real `EMCS` centrifuge spinning aboard the ISS (`OSD-314`), where `Col-0` seedlings face both microgravity and **`0.34 g` Mars gravity** under that very same red light.

**Pages 31–32 (Double-Page Infographic Spread)**

- *See Section 4 below for the complete Pages 31–32 Mission Debrief layout.*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread — Page 31: `Tropi` Ground Reference Architecture

- **Role in *Seedling Growth 2*:** `1g` Earth Reference Control (`OSD-313` / `GLDS-313`) calibrating nucleolin (`NUC1`/`NUC2`) baselines for ISS `EMCS` experiments.

- **Hardware & Growth Protocol:** `Tropi` `EUE` cassettes (`5` per `EC`) at `22°C`; `28` seeds/cassette in `1%` Guar Gum on `3.1 mm` gridded nitrocellulose over Whatman `17 CHR` (`1/2 MS`).

- **Illumination Regimes (`6` Days Total):** `96 h` (`4 d`) `16 h/8 h` white light (`30–40 μmol m⁻² s⁻¹`) → `48 h` (`2 d`) **Darkness** vs. **Unidirectional Red Light** (`19 μmol m⁻² s⁻¹`).

- **Sampling & Sequencing:** `18` samples (`Col-0` WT, `nuc1-2` [`Salk_002764`], `nuc2-2` [`GABI178D01`] × `2` light regimes × `3` reps; `8–10` seedlings/rep in `RNAlater`); Illumina `TruSeq` RNA-seq (`DESeq2`, `p adj < 0.05`).

### Right Spread — Page 32: Nucleolin Divergence Under Red Light & Darkness

- **Red Light vs. Darkness (`Figure 2`):**

  - `WT` (`1,428` DEGs: `1,067` up / `361` down) and `nuc2-2` (`1,365`: `1,017` up / `339` down) shared `353` up-regulated genes absent in `nuc1-2` (`1,001` DEGs: `633` up / `368` down), including secondary metabolism, cold response, and cell division.

  - Core red-light signature across all three lines: `382` up / `125` down (photosynthesis, Calvin cycle).

- **Genotype Pairwise Shifts (`PMC7607443`):**

  - **Darkness:** `nuc1-2 vs. WT` = **`3,363` DEGs** (`nuc1-2 vs. nuc2-2` = `2,121`), while `nuc2-2 vs. WT` = **`149` DEGs** (`NUC2` partially compensates for `NUC1` loss via `G2/M` cell-cycle, auxin, and cuticle/cell-wall genes).

  - **Red Light:** `nuc1-2 vs. WT` dropped **`>50%` to `1,499` DEGs** (`nuc1-2 vs. nuc2-2` = `1,069`), while `nuc2-2 vs. WT` rose to **`225` DEGs** (hypoxia, SA, wounding, cold, ABA stress), demonstrating that red-light activation of ribosome biogenesis (`90S` preribosome, `5.8S` rRNA maturation) depends on `NUC2`.

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "series": "Roots in Orbit: The NASA OSDR Plant Chronicles",
  "volume": 32,
  "title": "Red Light in the Nucleolus",
  "accessions": ["OSD-313", "GLDS-313"],
  "doi": "10.26030/0g0m-dj21",
  "related_studies": ["OSD-314"],
  "skipped_non_plant_accessions": ["OSD-302 through OSD-312"],
  "primary_publication": {
    "citation": "Manzano A, Villacampa A, Saez-Vasquez J, Kiss JZ, Medina FJ, Herranz R (2020) iScience 23(11):101686",
    "pmcid": "PMC7607443",
    "pmid": "33163940",
    "doi": "10.1016/j.isci.2020.101686"
  },
  "mission": {
    "name": "ESA/NASA Seedling Growth 2 (SG2) Ground Reference Control",
    "platform": "N-USOC EMCS Ground Model (1g)"
  },
  "hardware": [
    "Tropi EUE culture chambers (CC cassettes, 5 per EC)",
    "Nitrocellulose membrane (3.1 mm grid) + Whatman 17 CHR blotter paper + 1/2 MS",
    "White LEDs (30-40 umol m-2 s-1) & Unidirectional Red LEDs (19 umol m-2 s-1)",
    "RNAlater (Ambion AM7020) at -80C",
    "Illumina TruSeq RNA-seq (n=18)"
  ],
  "organisms_and_genotypes": [
    "Arabidopsis thaliana Col-0 WT",
    "Arabidopsis thaliana nuc1-2 (Salk_002764)",
    "Arabidopsis thaliana nuc2-2 (GABI178D01)"
  ],
  "cast_added": [
    "Aranzazu Manzano (CIB-CSIC Madrid)",
    "Alicia Villacampa (CIB-CSIC Madrid)",
    "Julio Saez-Vasquez (CNRS / Univ. Perpignan)"
  ],
  "continuity_hook_next": "OSD-314 (Arabidopsis Col-0 in microgravity & 0.34 g Mars gravity under red light photostimulation, EMCS on ISS)"
}

```

Say **"Go on"** when you're ready for **Volume 33**.
