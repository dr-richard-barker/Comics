---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 56
title: "Ten Times in the Light"
accession: OSD-678
script_status: partial
pages_covered: 30/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 121)
---

> [!NOTE]
> Script status **partial**: 30/32 pages have their own heading.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles*

- **Volume:** 56

- **Chapter Title:** *Ten Times in the Light*

- **OSDR Accession:** `OSD-678` (Version 6 | `GLDS-612` | DOI: `10.26030/65t6-7p29` | Related Study: `OSD-120` | Source Accession: `PRJNA1069768` | Size: `1.47 TB` | Submitted & Released: `20-Dec-2023` | Updated: `18-Feb-2026`)

- **Primary Publication:** Zhou, M., Ferl, R. J., & Paul, A.-L. (2024). *Light has a principal role in the Arabidopsis transcriptomic response to the spaceflight environment*. *npj Microgravity*, `10(1):82` (PMC11303767 | PubMed 39107298 | DOI: `10.1038/s41526-024-00417-0`, published `06-Aug-2024`)

- **Skipped Accessions:** `OSD-671` through `OSD-677` (contain no plant studies; `OSD-678` directly follows `OSD-670` in the plant chronology)

- **Hardware & Environment:** **CARA** (*Characterizing Arabidopsis Root Attractions*, CASIS `GA-2013-104`, OpNom `"Petri Plants"`), launched aboard **SpaceX CRS-3** (`04/18/2014`–`05/18/2014`) and tended on the ISS by **Expedition 39 Flight Engineer Steve Swanson**. `11-day-old` seedlings grew on phytagel Petri plates affixed directly to the **ISS US Lab bulkhead** (no dedicated plant growth hardware) vs. the **ISSES** ground control at Kennedy Space Center (`24 h` offset). **Light cohort:** constant diffuse ambient cabin light (`4–6 µmol/m²/s`). **Dark cohort:** unwrapped `4 h` to trigger germination, then sealed in blackout cloth (`24 h` dark). Harvested at `11 days` into `KFTs` with `RNAlater` (`12–18 h` ambient perfusion, then `MELFI` `-80°C`).

- **Organism & Assay Scope:** *Arabidopsis thaliana* leaves dissected at `4°C` from the exact same `CARA` plates whose root tips were archived in `OSD-120` (`n = 36`: `Col-0`, `Ws`, and `phyD` [`SALK_027956C`] × Flight/Ground × Light/Dark, `3` biological replicates/condition). `Qiagen RNeasy Plant Mini Kit`, **Illumina `NovaSeq 6000`** (`2 × 150 bp`, `54.7M–99.0M` paired-end reads/sample), mapped via `STAR v2.7.9a` (`TAIR10.51`), quantified with `HTSeq`/`DESeq2` (`|log2FC| > 1`, `Padj < 0.05`).

## 2. Dramatis Personae (Grounded in Study Data)

- **The US Lab Bulkhead & Blackout Cloth (`4–6 µmol/m²/s` vs. `0 µmol/m²/s`):** The minimalist stage of `CARA`. With no directional `Veggie` or `ABRS` LEDs, half the plates absorb weak, diffuse cabin light while their twin plates sit wrapped in blackout cloth right beside them.

- **`Col-0` & `Ws` Wild-Types:** Two *Arabidopsis* ecotypes with a hidden genetic divide—`Col-0` carries an intact red/far-red photoreceptor `PHYD`, whereas `Ws` is naturally `PHYD`-deficient.

- **Phytochrome D (`phyD`, `SALK_027956C`):** The red/far-red sensor whose loss in `Col-0` previously slashed spaceflight DEGs in *root tips* (`OSD-120`), yet in *leaves* leaves total DEG counts nearly unchanged while rewiring *which* genes fire.

- **The `LHC` Light-Harvesting Family (`25` Genes):** Photosynthetic antenna proteins that serve as the chapter's barometer of inversion—repressed in orbital light, induced in orbital darkness across all three genotypes (`0/25` genes aligned between light and dark).

- **The `GST`, `WRKY`, and `AP2/EREBP` Stress Guilds:** Oxidative, defense, and hormone-response transcription factors and transferases (`GSTU12`, `GSTU24`, `LOX2`, `JAZ8`, `RAP2.1`) whose orbital polarity flips depending on whether photons hit the leaf.

## 3. 32-Page Chapter Script

### Act I: Wall-Mounted Leaves (Pages 1–10)

**Page 1**

- **Panel 1 (Wide Establishing):** Inside the **ISS US Laboratory** (*Destiny*), **Expedition 39 Flight Engineer Steve Swanson** presses Velcro-backed phytagel Petri plates directly onto the cabin bulkhead.

- **Panel 2 (Close-Up):** Beside the exposed plates—bathed in diffuse `4–6 µmol/m²/s` cabin light—an identical set of plates sits sealed inside heavy **blackout cloth** after a `4-hour` germination flash.

- **Caption:** *SpaceX CRS-3. CARA ("Petri Plants"). For eleven days, light and darkness share the exact same orbital bulkhead.*

**Page 2**

- **Panel 1:** Three genotypes line the plates (`6` plates per genotype, `11` seedlings per plate): **`Col-0`**, **`Ws`**, and **`phyD`** (`SALK_027956C`).

- **Panel 2:** At `Day 11`, Swanson slides each plate's harvest into `KFTs` filled with `RNAlater` (`12–18 h` ambient perfusion before `MELFI` `-80°C`).

- **Dialogue (Researcher):** "In `OSD-120`, we sequenced the *root tips* from these exact plates. Now we're dissecting the *leaves*—from the same seedlings, same flight, same `24-hour`-offset `ISSES` ground control."

**Page 3**

- **Panel 1:** University of Florida Space Plants Lab. `RNAlater`-frozen seedlings thaw at `4°C`. Under a dissecting microscope, fine forceps snip leaf tissue cleanly from the hypocotyl.

- **Panel 2:** `Qiagen RNeasy` feeds `36` multiplexed libraries onto an **Illumina `NovaSeq 6000`** (`2 × 150 bp`, `>60M` reads/library—ranging from `54.7M` to `99.0M` reads/sample).

**Page 4**

- **Panel 1:** `STAR v2.7.9a` (`TAIR10.51`) and `DESeq2` (`|log2FC| > 1`, `Padj < 0.05`) finish the leaf-versus-root tally.

- **Panel 2:** Across all genotypes and lighting conditions, leaves erupt with **`8,477` DEGs**—dwarfing the **`716` DEGs** seen in `CARA` root tips (`OSD-120`).

- **Caption:** *Leaves are far more transcriptionally reactive to spaceflight than root tips—especially when the lights are on.*

**Page 5**

- **Panel 1:** Bar charts of `Col-0` Flight vs. Ground reveal a tenfold chasm: **light-grown `Col-0` leaves** fire **ten times** as many spaceflight DEGs as **dark-grown `Col-0` leaves**.

- **Panel 2:** Meanwhile, `phyD` leaves match `Col-0` in *total* DEG count—a sharp contrast to `phyD` root tips, where losing `PHYD` had collapsed DEG numbers.

**Page 6**

- **Panel 1:** A `6-column` expression heatmap (`Fig. 2a`) splits straight down the middle: **Light** (`Col-0`, `phyD`, `Ws` on the left) vs. **Dark** (`Col-0`, `phyD`, `Ws` on the right).

- **Caption:** *The clustering doesn't group by genotype. It groups by photons.*

**Pages 7–8 (Double-Page Spread Anchor): *The Polarity Flip***

- **Visual Layout:** A full two-page mirror spread. On the left half (**Light: `4–6 µmol/m²/s`**), `Col-0` (`4,025` DEGs), `phyD` (`4,222` DEGs), and `Ws` (`5,623` DEGs) blaze with abiotic-stress, aging, and secondary-metabolism activation while cell-wall and photosynthesis (`LHC`) pathways dim blue. On the right half (**Dark: `0 µmol/m²/s`**), the mirror image inverts: `LHC` photosynthesis genes flare red-hot, `Ws` activates hypoxia/immune pathways while repressing ion transport, and `Col-0` shows *zero* enriched down-regulated pathways.

- **Anchor Caption:** *`99.7%` (`4,014/4,025`) of `Col-0`, `99.0%` (`4,179/4,222`) of `phyD`, and `97.3%` (`5,470/5,623`) of `Ws` DEGs display distinct spaceflight patterns between light and dark. Even among genes altered in both conditions (`58` `Col-0`, `89` `phyD`, `678` `Ws`), `81%`, `52%`, and `77%` flip into opposite directions.*

**Page 9**

- **Panel 1:** `GenFam` enrichment across all `8,477` leaf DEGs and `716` root-tip DEGs (`Padj < 0.05`): **`GST`** (glutathione-S-transferase) and **`WRKY`** families bridge both organs, while **`LHC`** and **`AP2/EREBP`** dominate leaves.

- **Panel 2:** For all `25` **`LHC`** genes, `0%` (`0/25`) share the same regulatory direction between light and dark—every single one flips.

**Page 10**

- **Panel 1:** Over `90%` of `GST`, `AP2/EREBP`, and `WRKY` DEGs in leaves (and `GST` in root tips) follow distinct light/dark trajectories. Only `Col-0` root-tip `WRKY` genes (`17%` distinct) act largely independent of light.

### Act II: The `PHYD` & Ecotype Rewiring (Pages 11–22)

**Page 11**

- **Panel 1:** Why did `phyD` leaves have almost as many DEGs as `Col-0`? Overlap analysis (`Fig. 5a`) isolates **`PHYD`-dependent spaceflight-altered genes**—genes equal on Earth (`Ground`) that diverge *only* in orbit in `Col-0`, remaining flat in `phyD`.

- **Panel 2:** In the **Light**, **`71` `PHYD`-dependent genes** emerge (`63` up, `8` down): e.g., **`GSTU12`** surges in `Col-0` flight leaves while **`LOX2`** (lipoxygenase 2, green-leaf volatile synthesis) drops—both frozen in `phyD`.

**Page 12**

- **Panel 1:** In the **Dark**, **`28` `PHYD`-dependent genes** emerge (`20` up, `8` down): e.g., **`LHCA1`** rises and auxin-responsive **`AT3G61840`** falls in `Col-0` flight leaves, but not in `phyD`.

- **Panel 2:** Venn diagram between Light (`71`) and Dark (`28`) `PHYD`-dependent genes: **`0` overlap**. `PHYD` steers completely separate gene sets in light versus darkness.

**Page 13**

- **Panel 1:** Next, `Col-0` vs. **`Ws`**—an ecotype naturally deficient in `PHYD`. In the **Light**, **`486` `Ws`-deficient** spaceflight genes respond only in `Col-0` (`ABC` transporters, `GST` [`GSTU24` up, `GSTU18` down], `NAC`, `WRKY`).

- **Panel 2:** Conversely, **`292` `Col-0`-deficient** genes respond only in `Ws`—including abiotic stress responders **`DES1`** (up) and **`CBF1`** (down).

**Page 14**

- **Panel 1:** In the **Dark**, **`51` `Ws`-deficient** genes (`LHCA2`, `GSTU15`) respond only in `Col-0`, while **`408` `Col-0`-deficient** genes (`AP2/EREBP` [`RAP2.1`], `SWEET` sugar transporters, jasmonate repressor `JAZ8`) fire only in `Ws`.

**Page 15**

- **Panel 1:** Connecting `phyD` and `Ws`: **`~43%`** of `PHYD`-dependent spaceflight genes (`31/71` in light, `12/28` in dark) are *also* `Ws`-deficient—confirming `PHYD`'s shared genetic footprint across ecotypes.

**Page 16**

- **Panel 1:** `Metascape` pathway summary (`Fig. 9`) contrasts Earth vs. Orbit. On Earth, core stress genes (`HY5`, `CBF`, `PIF4`, `HSP70`, `PR1`) keep the same sign regardless of light.

- **Dialogue (Researcher):** "In space, there is no universal 'spaceflight gene.' Plants recruit the same *families*—defense, oxidative stress, light signaling, secondary metabolism—but light dictates which way the switches flip."

**Page 17**

- **Panel 1:** Comparing `CARA`'s diffuse `4–6 µmol/m²/s` bulkhead lighting against `Veggie`, `ABRS`, `EMCS`, `BRIC`, `SJ-10`, and `TG-2`: weak, non-directional cabin light removes both gravity *and* strong phototropism, amplifying leaf sensitivity.

**Page 18**

- **Panel 1:** In the **Light**, leaves activate abiotic stress and aging pathways while repressing cell-wall organization and cell-cycle programs.

- **Panel 2:** In the **Dark**, lacking both gravity and photons, leaves induce ethylene/jasmonic acid signaling (`JAZ8`) and shut down ion transport and chemical homeostasis.

**Page 19**

- **Panel 1:** `phyD` and `Ws` prove that losing `PHYD` doesn't kill the plant in orbit—instead, it forces the leaf to rewire around a different subset of stress pathways, potentially altering metabolic cost.

**Page 20**

- **Panel 1:** Engineering takeaway card: *Any future CRISPR or breeding target for space crops must be paired with the exact light spectrum and intensity it will grow under.*

**Page 21**

- **Panel 1:** All `1.47 TB` of `CARA` leaf RNA-Seq reads lock into `PRJNA1069768` and `OSD-678` (`GLDS-612`), completing the paired leaf-and-root (`OSD-120`) atlas of `SpaceX CRS-3`.

**Page 22**

- **Panel 1:** Montage of the series' journey so far: from `BRIC` canisters and `Veggie` pillows (`OSD-625`, `OSD-678`), through `NSRL` cosmic-ray beams (`OSD-658`) and asteroid regolith (`OSD-670`).

### Act III: Silver in the Water (Pages 23–30)

**Page 23**

- **Panel 1:** Transition to NASA Kennedy Space Center's **Space Station Processing Facility (SSPF)** (`Percival PGW-48` growth chambers).

- **Dialogue (Life Support Engineer):** "Light and regolith are solved only if our *water loop* doesn't poison the greenhouse."

**Page 24**

- **Panel 1:** Spacecraft potable water systems rely on **ionic silver (`Ag+`)** as a biocide—designed to dose between **`200` and `500 ppb`** (`0.2–0.5 mg/L`), with `100 ppb` as the drinking-water threshold.

**Page 25**

- **Panel 1:** **Outredgeous** romaine lettuce (*Lactuca sativa*) grows in two parallel setups: **arcillite** substrate vs. **pure hydroponics** trays—challenged with `0`, `31`, `125`, and `500 ppb` `Ag+`.

**Page 26**

- **Panel 1:** `108` hydroponic water samples are concentrated on a `CP SELECT (0.20 µm)` instrument alongside `192` shoot and root tissues (`48` arcillite shoots/roots, `48` hydroponic shoots/roots) for `NextSeq 1000` metagenomics.

**Page 27**

- **Panel 1:** In **arcillite**, cation-exchange capacity buffers the silver—the root-zone microbiome's alpha diversity and relative abundance barely flinch.

**Page 28**

- **Panel 1:** In **hydroponics**, with zero cation-exchange capacity, ionic silver strikes exposed roots directly. Above **`31 ppb` `Ag+`**, lettuce growth stunts severely.

**Pages 29–30 (Cliffhanger Spread): *The Stringent Response***

- **Page 29 (Panel 1):** Stunted hydroponic roots leak carbon exudates into the silver-laced tray water, triggering a selective microbial bloom as alpha diversity rises with `Ag+` concentration.

- **Page 30 (Full-Bleed Splash):** Metagenomic pathways light up across the surviving root-zone microbiome: alternate carbon utilization, fatty-acid synthesis, and the **`ppGpp`** (*guanosine 3'-diphosphate 5'-diphosphate*) **stringent response** global stress system.

- **Cliffhanger Tag:** *Next in **OSD-723**: Substrate matters—when spacecraft potable-water silver meets hydroponic lettuce.*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31): `CARA` Experimental & Sequencing Scope (`OSD-678`)

| Parameter | Specification / Value | Notes |
|---|---|---|
| **Flight & Hardware** | `SpaceX CRS-3` (`04/18/2014`–`05/18/2014`) | `11-day` Petri plates on ISS US Lab bulkhead (`ISSES` ground) |
| **Lighting Regimes** | Light (`4–6 µmol/m²/s`) vs. Dark (`24 h` blackout) | Dark plates unwrapped `4 h` at start to trigger germination |
| **Genotypes (`n = 36`)** | `Col-0`, `Ws`, `phyD` (`SALK_027956C`) | Leaves from same plates as `OSD-120` root tips (`3` reps/group) |
| **Sequencing (`NovaSeq 6000`)** | `2 × 150 bp` paired-end (`54.7M–99.0M` reads) | `1.47 TB` dataset; `STAR v2.7.9a` (`TAIR10.51`), `DESeq2` (`Padj < 0.05`) |

### Right Spread (Page 32): Light vs. Dark Transcriptomic Dichotomy (`OSD-678`)

| Comparison / Set | Light (`4–6 µmol/m²/s`) | Dark (`0 µmol/m²/s`) | Key Insight |
|---|---|---|---|
| **Total Spaceflight DEGs** | `8,477` total leaf DEGs (`Col-0` `10×` higher in light) | `~10×` fewer in `Col-0` dark; `0` down-pathways | Leaves vastly more reactive than root tips (`716` DEGs) |
| **Light vs. Dark Polarity** | `99.7%` `Col-0`, `99.0%` `phyD`, `97.3%` `Ws` distinct | `81%` (`Col-0`), `52%` (`phyD`), `77%` (`Ws`) flipped | `0/25` `LHC` genes share direction between light & dark |
| **`PHYD`-Dependent DEGs** | `71` (`63` up e.g. `GSTU12`; `8` down e.g. `LOX2`) | `28` (`20` up e.g. `LHCA1`; `8` down e.g. `AT3G61840`) | `0` overlap between light & dark; `~43%` also `Ws`-deficient |
| **Ecotype-Specific DEGs** | `486` `Ws`-def (`ABC`, `GST`, `NAC`, `WRKY`); `292` `Col-0`-def | `51` `Ws`-def (`LHCA2`); `408` `Col-0`-def (`AP2/EREBP`, `SWEET`) | Light regime outweighs genotype/ecotype effects |

## 5. Updated Series Bible JSON
JSON

```
{
  "SERIES_BIBLE_DELTA": {
    "volume_completed": 56,
    "chapter_title": "Ten Times in the Light",
    "osdr_accession": "OSD-678",
    "glds_accession": "GLDS-612",
    "doi": "10.26030/65t6-7p29",
    "related_study": "OSD-120",
    "bioproject": "PRJNA1069768",
    "skipped_accessions": "OSD-671 through OSD-677 (contain no plant studies)",
    "primary_publication": {
      "citation": "Zhou, M., Ferl, R. J., & Paul, A.-L. (2024). npj Microgravity, 10(1):82.",
      "doi": "10.1038/s41526-024-00417-0",
      "pmc": "PMC11303767",
      "pmid": "39107298"
    },
    "mission_and_hardware": {
      "experiment": "CARA (Characterizing Arabidopsis Root Attractions, CASIS GA-2013-104)",
      "flight": "SpaceX CRS-3 (04/18/2014–05/18/2014), ISS US Lab bulkhead vs. ISSES (KSC)",
      "conditions": "Ambient diffuse light (4–6 umol/m2/s) vs. 24 h dark (blackout cloth), 11 days, RNAlater KFTs",
      "assay": "Illumina NovaSeq 6000 (2x 150 bp RNA-Seq, 54.7M–99.0M reads/sample, n=36 leaf pools)"
    },
    "key_entities_introduced": [
      "CARA leaf transcriptome (8,477 DEGs vs. 716 in OSD-120 root tips)",
      "10x Light/Dark DEG dichotomy in Col-0 & opposite pathway polarity (0/25 LHC aligned)",
      "PHYD-dependent light (71) vs. dark (28) spaceflight genes (GSTU12, LOX2, LHCA1)",
      "Ws vs. Col-0 ecotype divergence (43% overlap between PHYD-dependent and Ws-deficient sets)"
    ],
    "next_queued_accession": "OSD-723"
  }
}

```

Say **"Go on"** when you're ready for **Volume 57**.
