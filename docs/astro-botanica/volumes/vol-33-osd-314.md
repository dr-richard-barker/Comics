---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 33
title: "A Red Light for Mars"
accession: OSD-314
script_status: condensed
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 73)
---

> [!NOTE]
> Script status **condensed**: 32/32 pages have their own heading; condensed ranges: 2-4, 5-7, 8-10, 11-14, 15-18, 19-22, 23-26, 27-30.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles*

- **Volume:** 33

- **Title:** *A Red Light for Mars*

- **OSDR / GLDS Accession:** `OSD-314` / `GLDS-314` (Data.gov Catalog Record | DOI: `10.26030/z5yf-jx91` | Related Study: `OSD-313`)

- **Chronology Note:** Direct orbital companion to `OSD-313` (*Seedling Growth 2* `1g` ground reference). Advances from `NUC1`/`NUC2` ground baselines to `Col-0` seedlings grown in microgravity and Mars partial gravity aboard the ISS.

- **Primary Publication:** Villacampa, A., Ciska, M., Manzano, A., Vandenbrink, J. P., Kiss, J. Z., Herranz, R., & Medina, F. J. (2021). *From Spaceflight to Mars g-Levels: Adaptive Response of A. Thaliana Seedlings in a Reduced Gravity Environment Is Enhanced by Red-Light Photostimulation*. *International Journal of Molecular Sciences*, 22(2):899 (`PMCID: PMC7830483`, `PMID: 33477454`, `doi: 10.3390/ijms22020899`).

- **Mission & Vehicles:** ESA-ELIPS / NASA *Seedling Growth 2* (`SG2`: launched `SpaceX CRS-4` Sept 2014, returned `SpaceX CRS-5` Feb 2015) and *Seedling Growth 3* (`SG3`: launched and returned `SpaceX CRS-11` June 2017) on the ISS; `1g` Ground Reference Run (`GRR`) at `N-USOC` (Trondheim, Norway).

- **Hardware:** `EMCS` (European Modular Cultivation System) with built-in centrifuge (`μg` vs. Mars partial gravity `0.34 ± 0.05 g`; `10% O2`, `0.45% CO2`, `>80% RH`, `22.5°C ± 2°C`, pre-flushed against ethylene); `Tropi` culture cassettes (`28` seeds/cassette in `1%` guar gum on gridded nitrocellulose; `4 d` `16 h/8 h` white light `30–40 μmol m⁻² s⁻¹` → `2 d` darkness vs. lateral red LEDs). Frozen in `MELFI −80°C` for RNA-seq, or fixed in-orbit via **`FixBox`** (`5%` formaldehyde for confocal/`anti-fibrillarin` + `SCRI 2200`; `4.5%` glutaraldehyde / `1.5%` formaldehyde for `JEOL 1230` `TEM`).

- **Organism:** *Arabidopsis thaliana* Columbia (`Col-0` WT).

- **Assay / Sequencing:** `17` stranded RNA-seq libraries (`8–10` seedlings/pool, `MACHEREY-NAGEL` kit, `Illumina TruSeq`, `HiSeq2500` `50 bp` at CRG Barcelona, `27.5 ± 1M` reads/sample; `DESeq2`, `q < 0.05`, `Log2FC ± 1.5`), confocal morphometry, and `TEM` nucleolar ultrastructure.

## 2. Dramatis Personae (Grounded in Study Data)

- **Alicia Villacampa & Dr. Malgorzata Ciska** (*CIB-CSIC, Madrid, Co-First Authors*): Dissected the `FixBox`-preserved root meristems under confocal and electron microscopes and mapped the hormonal and organellar split between `μg` and `0.34 g`.

- **Aránzazu Manzano, Dr. Raúl Herranz, & Dr. F. Javier Medina** (*CIB-CSIC, Madrid*): Led the *Seedling Growth* (`SG2`/`SG3`) flight architecture, `FixBox` deployment, and nucleolar-activity analysis.

- **Dr. Joshua P. Vandenbrink & Dr. John Z. Kiss** (*Louisiana Tech University & UNC–Greensboro*): U.S. *Seedling Growth* collaborators who cross-compared `OSD-314` red-light data against `OSD-251` (`GLDS-251`) blue-light fractional gravity runs.

- **`FixBox`**: The orbital aldehyde-fixation device built for `EMCS` cassettes, preserving intact root meristems and nucleoli at `4°C` until Dragon return.

- **`AtWRKY` Family (`13` Upregulated TFs)**: The multifunctional transcription-factor switches (`WRKY38` through `WRKY75`) that wake up at Mars `0.34 g` to steer stress acclimation.

## 3. 32-Page Chapter Script

### Act I: Two Gravities in One Centrifuge (Pages 1–10)

**Page 1 (Splash Page)**

- **Panel 1:** Inside the ISS Columbus Module, the `EMCS` centrifuge spins silently. Inside its Experiment Containers (`ECs`), `Col-0` seeds hydrate on gridded nitrocellulose membranes—half experiencing true microgravity (`μg`), half feeling **`0.34 ± 0.05 g`**, the pull of Mars.

- **Caption (Narration):** *"We know what weightlessness does to a root. We know what Earth's `1g` does. Between them lies `0.34 g`—and no one knew if Mars gravity is just 'mild microgravity' or a different biological world altogether."*

**Pages 2–4**

- **Pages 2–3:** From Trondheim, Norway (`N-USOC`), engineers monitor `10% O2`, `0.45% CO2`, `>80% RH`, and `22.5°C` after pre-flushing the `EMCS` to scrub any stray ethylene. Germination hits `96.7%` in orbit (`93.93%` in `GRR`). For `4` days, white LEDs cycle `16 h` on / `8 h` off.

- **Page 4:** Day 4 → Day 6 (`Figure 6`). Half the cassettes drop into total darkness (`d`); the other half receive lateral red LED photostimulation (`rl`). At Day 6, ISS astronauts pull the `ECs`, flash-freezing RNA replicates in `MELFI` (`−80°C`) and locking microscopy samples inside the **`FixBox`**.

**Pages 5–7**

- **Pages 5–6:** Madrid confocal suite (`Figure 1A–D`). Alicia Villacampa stains cell walls with `SCRI 2200` and nucleoli with `anti-fibrillarin` (`ab4566`). Across every gravity level, root meristem architecture and `3–4` columella statocyte layers stay intact—yet in `Mars-darkness`, nucleolar area shrinks significantly!

- **Page 7:** Then Villacampa switches to `Mars-red light`. Both meristem length and cell count jump significantly, and **nucleolar fibrillarin area rebounds** to `1g GRR` levels. Under the `JEOL 1230` `TEM` (`Figure 1E`), red-light nucleoli display active intermingled `GC`/`DFC` zones, erasing the condensed chromatin of dark-stressed nucleoli.

- **Medina (Dialogue):** *"In Mars gravity, darkness stalls the ribosome factory. Red light turns the nucleolus right back on."*

**Pages 8–10**

- **Pages 8–9:** `17` stranded RNA-seq libraries (`27.5 ± 1M` reads/sample) return from CRG Barcelona. The `PCA` (`Figure 2A`) cleanly separates `μgrl`, `Marsrl`, and `grrrl` under red light, while `Marsd` sits tucked close to `grrd`—showing just `372` upregulated DEGs (with transcriptional repressor `OFP10` at `Log2FC 2`).

- **Page 10:** Venn diagrams (`Figure 2B`) reveal the shock: across all four `FLT vs. GRR` comparisons, only **`15` upregulated** and **`55` downregulated** genes are shared! Mars `0.34 g` is not a diluted version of microgravity.

### Act II: Organelles Off the Leash vs. The `WRKY` Shield (Pages 11–22)

**Pages 11–14 (The Organelle Split — `Figure 4`)**

- **Pages 11–12:** Malgorzata Ciska runs `ShinyGO` chromosome mapping across the `Col-0` genome. Two bars shoot off the chart in **microgravity** (`p = 1.1×10⁻²⁰⁹` dark; `p = 1.5×10⁻²⁰⁷` red light): **chloroplast-encoded genes** (`70` in `μgd`, `83` in `μgrl`—`PSI`/`PSII` subunits, `PETA`/`PETB`/`PETD`) and **mitochondrion-encoded genes** (`10` in `μgd`, `30` in `μgrl`—`COX1`, `COX2`, `L16`, `S3R`, `ABCI2`).

- **Pages 13–14:** At **Mars `0.34 g`**, that organelle hyper-transcription vanishes—just as it vanished at `<0.1 g`, Moon, and Mars in `GLDS-251`! Meanwhile, retrograde-communication factor `SIB1` is suppressed in `μgd` yet induced at Mars `g`.

- **Ciska (Dialogue):** *"In true microgravity, chloroplasts and mitochondria roar out of sync with the nucleus—even in the dark. Give them just a third of Earth's gravity, and organelle–nucleus communication steadies."*

**Pages 15–18 (Hormones & Transcription Factors — `Figure 3` & `Tables 1, 3`)**

- **Pages 15–16:** Split-page `KEGG` pathway (`ath04075`) comparison. In **microgravity**, seedlings ignore external stress and hit the gas on growth: **auxin** (`11` `SAUR` genes in `μgrl`, `DFL1` down in `μgd`) and **cytokinin** (`AHP3`, `AHP4`) surge, while gibberellin (`PIF4`, `PIL6`) and `ERF` stress-tolerance factors (`TG`, `CBF1`, `CBF2`, `AtERF72`) drop.

- **Pages 17–18:** At **Mars `0.34 g`**, seedlings do the exact opposite: they brake auxin (`GH3.3` up in `Marsrl`) and cytokinin (`HK2` down in `Marsd`), and fire up **ABA** (`HAI2`, `HAI3`, `SNRK2.5`/`2.9`), **ethylene** (`ERF1`, `ERF2`), **salicylic acid** (`PR-1`), and **`13` `WRKY` transcription factors** (`AtWRKY38` through `WRKY75`, `Log2FC` up to `4.34` for `AtWRKY59` and `3.73` for `AtWRKY46`).

**Pages 19–22**

- **Pages 19–20:** Red light's rescue mission (`Figure 5`). Comparing `Marsrl vs. Marsd`, upregulated GO clusters align with `1g` (`grrrl vs. grrd`)—while in `μgrl vs. μgd`, red light activates `PROLIFERA` (`PRL`), cyclins (`A2`, `A3`, `B1`, `B2`, `D4`, `P4`), `AURORA1`/`2`, `TUB1`, `SP1L4`, and cell-wall remodelers (`XTHs`, extensins `EXT2`–`EXT17`), and suppresses amino-acid proteolysis.

- **Pages 21–22:** Vandenbrink and Kiss overlay `μgrl` downregulated photosynthesis genes with `GLDS-251` blue-light microgravity data (`Figure S2`), finding `16` shared genes including five `LHCB` chlorophyll-binding proteins—proving light-harvesting tuning is a universal microgravity signature.

### Act III: Farming on the Red Planet (Pages 23–32)

**Pages 23–26**

- **Pages 23–24:** Herranz and Medina synthesize the blueprint for Martian greenhouses: `0.34 g` provides enough gravity vector for roots to orient (`Figure 6B`) and keeps organelles balanced, while **red LEDs** reverse `GH3` auxin braking and ignite nucleolar ribosome production.

- **Pages 25–26:** `Table 1` highlights `WRKY` TFs as prime molecular-breeding targets for space crops—single multifunctional switches capable of tuning drought, salt, hypoxia, and pathogen defenses at once.

**Pages 27–30 (Epilogue Montage)**

- **Pages 27–28:** January 18, 2021: *IJMS* publishes `PMC7830483`, and NASA GeneLab/OSDR archives `OSD-314` (`GLDS-314`, `10.26030/z5yf-jx91`).

- **Pages 29–30:** Final panel shifts from `EMCS`'s gentle red LEDs to the blinding `1 GeV/n 56Fe` heavy-ion beamline at Brookhaven's National Space Radiation Laboratory (`OSD-320`), where `Ws` and `atm-1` *Arabidopsis* seedlings brace for deep-space radiation.

**Pages 31–32 (Double-Page Infographic Spread)**

- *See Section 4 below for the complete Pages 31–32 Mission Debrief layout.*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread — Page 31: `EMCS` Partial-Gravity & `FixBox` Hardware

- **Flights & Timeline:** *Seedling Growth 2* (`SpaceX CRS-4`/`CRS-5`, Sept 2014–Feb 2015) & *Seedling Growth 3* (`SpaceX CRS-11`, June 2017); `1g GRR` at `N-USOC` (Trondheim).

- **Centrifuge & Atmosphere:** `EMCS` (`μg` vs. Mars `0.34 ± 0.05 g`; `10% O2`, `0.45% CO2`, `>80% RH`, `22.5°C ± 2°C`, pre-flushed); `4 d` white light (`16 h/8 h`, `30–40 μmol m⁻² s⁻¹`) → `2 d` darkness (`d`) vs. lateral red LEDs (`rl`).

- **Preservation & Sequencing:** `MELFI −80°C` for RNA-seq (`17` `HiSeq2500` libraries, `50 bp` stranded, `27.5 ± 1M` reads/sample; `DESeq2`, `q < 0.05`, `Log2FC ± 1.5`); **`FixBox`** aldehyde fixation for confocal (`anti-fibrillarin` `ab4566`, `SCRI 2200`) and `JEOL 1230` `TEM`.

- **Anatomy (`Table 2`):** Germination `96.7%` (ISS) vs. `93.93%` (`GRR`); columella statocytes (`3–4` layers) intact; **red light significantly boosted meristem length/cell count and restored nucleolar `anti-fibrillarin` area at Mars `0.34 g`**.

### Right Spread — Page 32: Microgravity vs. Mars `0.34 g` Divergence

- **Minimal Overlap (`Figure 2`):** Only **`15` up** and **`55` down** DEGs shared across all four `FLT vs. GRR` comparisons (`μgd`, `μgrl`, `Marsd`, `Marsrl`). `Marsd` was least transcriptionally altered (`372` up; repressor `OFP10` `Log2FC 2`), while `μgrl` had `1,012` downregulated DEGs (`615` unique).

- **Microgravity-Exclusive Organelle Surge (`Figure 4`):** `70` (`μgd`) and `83` (`μgrl`) chloroplast-encoded genes + `10` (`μgd`) and `30` (`μgrl`) mitochondrion-encoded genes upregulated (`p = 1.1×10⁻²⁰⁹` & `1.5×10⁻²⁰⁷`)—**absent at Mars `0.34 g`**.

- **Hormonal & `WRKY` Split (`PMC7830483`):**

  - **Microgravity:** Activates **auxin** (`11` `SAURs`) & **cytokinin** (`AHP3`, `AHP4`); suppresses `GA` (`PIF4`, `PIL6`) & stress `ERFs` (`TG`, `CBF1/2`, `AtERF72`).

  - **Mars `0.34 g`:** Suppresses auxin/cytokinin (`GH3.3`, `HK2`), activates **ABA** (`HAI2/3`, `SNRK2.5/2.9`), **ethylene** (`ERF1/2`), **SA** (`PR-1`), and **`13` `WRKY` TFs** (`AtWRKY38`–`75`); red light reverses `GH3` auxin braking and induces `PRL`, cyclins, `TUB1`, `SP1L4`, and `XTH`/extensin remodeling.

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "series": "Roots in Orbit: The NASA OSDR Plant Chronicles",
  "volume": 33,
  "title": "A Red Light for Mars",
  "accessions": ["OSD-314", "GLDS-314"],
  "doi": "10.26030/z5yf-jx91",
  "related_studies": ["OSD-313", "OSD-251"],
  "primary_publication": {
    "citation": "Villacampa A, Ciska M, Manzano A, Vandenbrink JP, Kiss JZ, Herranz R, Medina FJ (2021) Int J Mol Sci 22(2):899",
    "pmcid": "PMC7830483",
    "pmid": "33477454",
    "doi": "10.3390/ijms22020899"
  },
  "mission": {
    "name": "ESA/NASA Seedling Growth 2 & 3 (SG2 / SG3)",
    "vehicles": ["SpaceX CRS-4 / CRS-5 (SG2)", "SpaceX CRS-11 (SG3)"],
    "ground_control": "1g GRR at N-USOC (Trondheim, Norway)"
  },
  "hardware": [
    "EMCS centrifuge (microgravity vs. Mars 0.34 +/- 0.05 g)",
    "Tropi culture cassettes (28 seeds/cassette, 1% guar gum, gridded nitrocellulose)",
    "Lateral Red LEDs vs. Darkness",
    "FixBox (orbital aldehyde fixation)",
    "Illumina HiSeq2500 (50 bp stranded, n=17)"
  ],
  "organisms_and_genotypes": [
    "Arabidopsis thaliana Col-0 WT"
  ],
  "cast_added": [
    "Malgorzata Ciska (CIB-CSIC Madrid)"
  ],
  "continuity_hook_next": "OSD-320 (Arabidopsis Ws & atm-1 exposed to Gamma and 1 GeV/n 56Fe HZE radiation at BNL/NSRL, skipping non-plant OSD-315 through OSD-319)"
}

```

Say **"Go on"** when you're ready for **Volume 34**.
