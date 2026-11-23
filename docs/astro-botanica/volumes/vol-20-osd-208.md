---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 20
title: "Two Millimeters of Destiny: Zone 1, Zone 2 & the Dual-Lens Root Apex"
accession: OSD-208
script_status: partial
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 47)
---

> [!NOTE]
> Script status **partial**: 32/32 pages have their own heading; condensed ranges: 28-30.
## 1. Volume Metadata Header

- **Series & Volume:** *Roots in Orbit: The NASA OSDR Plant Chronicles* — **Volume 20**

- **Title:** *Two Millimeters of Destiny: Zone 1, Zone 2 & the Dual-Lens Root Apex*

- **OSDR Accession:** `OSD-208` (`GLDS-208`)

- **Dates:** Issued `2021-05-21`; Modified `2023-01-26`; Metadata Last Updated `23-Apr-2025`

- **Source Accession:** `GSE115555` (NCBI GEO)

- **Payload & Mission:** Ground-Based Spaceflight Methodology & Root Apex Baseline (`CASIS GA-2013-104` / `NASA` Space Life and Physical Sciences `NNX12AN69G`)

- **Primary Publication:** Krishnamurthy, A., Ferl, R.J., & Paul, A.-L. (2018). *Comparing RNA-Seq and microarray gene expression data in two zones of the Arabidopsis root apex relevant to spaceflight*. *Applications in Plant Sciences* `6(11):e01197`. `PMC6240453` | PMID: `30473943` | DOI: `10.1002/aps3.1197`

- **Organism & Genotype:** *Arabidopsis thaliana* (`Col-0`) `8-day-old` seedlings (`n = 3` biological replicates per root zone, harvested from a single vertically oriented plate)

- **Hardware & Conditions:** Vertically oriented Petri plates with `0.5× MS` salts, `0.5 g` MES hydrate, `5.0 g` sucrose, `1.0 mL` Gamborg vitamins (`pH 5.72`), `0.5% (w/v)` Phytagel; `19 °C`, continuous light (`80–100 µmol s^-2 m^-2`) for `8 d`

- **Preservation & Assays:** `RNAlater` (`-20 °C`) → submerged microdissection on a ruled grid (`Olympus SZX12`) into **Zone 1** (`0.5 mm`: root cap & meristematic zone) and **Zone 2** (`1.5 mm`: transition, elongation, & growth-terminating zone); `5 ng` total RNA (`ARCTURUS PicoPure`) split across `Affymetrix ATH1` microarray (`Ovation Pico WTA V2` / `R/Limma` `RMA`) and `Illumina NextSeq 500` `RNA-Seq` (`SMART-Seq V4` + `Nextera`, `2 × 150 bp`, `~40 M` reads/sample, `TopHat`/`Cufflinks`, `FC ≥ 2`, `FDR < 0.01`)

- *(Chronology Note: `OSD-206` is absent from public OSDR/GeneLab records, `OSD-207` is `Drosophila` heads, and `OSD-209` is mouse liver proteome; `OSD-208` is the next sequential plant study after `OSD-205`.)*

## 2. Dramatis Personae (Grounded in Study Data)

- **Zone 1 — The `0.5 mm` Sensory Tip (Root Cap & Meristem):** The "diffuse brain-like organ" Darwin described—packed with dividing cells, chromatin assemblers (`HTA8`), cell-cycle coactivators (`AN3`, `CDC20.1`), gravitropic transducers (`NPY4`), and mechanosensitive channels (`MSL9`).

- **Zone 2 — The `1.5 mm` Elongation & Differentiation Engine:** Immediately behind Zone 1, where cells stretch, sprout root hairs, and build secondary walls using arabinogalactan proteins (`AGP3`, `FLA13`), extensins (`LRX1`), peroxidases (`PER73`), lipid transfer proteins (`LTP`s), and `RALF1` signaling.

- **The `ATH1` Microarray Scanner (`~22,700` Probes):** The veteran spaceflight workhorse (`Vol. 1`–`Vol. 19`). Though fluorescence saturation caps its dynamic range, its targeted probes still catch `> 50` low-abundance, spaceflight-relevant genes that `RNA-Seq` misses at `40 M` reads.

- **The `NextSeq 500` Deep Sequencer (`~33,500` Genes + `107` Novel `TARs`):** The high-dynamic-range newcomer, reading `5 ng` ultra-low-input cDNA to uncover `771` unique DEGs (`TED7`, `ATPT1`, `MIR779A`), isoform switches (`AT5G05960`, `AT4G02270`), and `19` significantly altered novel `TARs`.

## 3. 32-Page Chapter Script

### Act I: Launch & Environmental Shift (Pages 1–10)

**Page 1:** Splash page. A single vertical Phytagel plate glows under `19 °C` continuous light (`80–100 µmol s^-2 m^-2`). At Day 8, three `Col-0` seedlings are lifted into `RNAlater`—the chemical freeze-frame that lets scientists dissect spaceflight roots without triggering dissection stress.

**Page 2:** Close-up of a toluidine-blue-stained root tip resting on a thin-ruled millimeter grid inside an `RNAlater`-filled Petri dish (`Figure 1`). Above it hovers the `Olympus SZX12` dissecting lens and a micro-scalpel.

**Page 3:** First incision at **`0.5 mm`**: **Zone 1**—the root cap and meristematic division zone—separates cleanly into a chilled microcentrifuge tube. Second incision at **`1.5 mm`** behind it: **Zone 2**—the transition, elongation, and growth-terminating zone.

**Page 4:** Flash-freeze in liquid nitrogen. Narration: *In orbit, crew time and biomass are razor-thin. If a single `0.5 mm` tip and `1.5 mm` shaft can yield a full transcriptome, every rare flight root becomes a library.*

**Page 5:** Inside the `ARCTURUS PicoPure` extraction column. Each tiny root zone yields just **`5 nanograms`** of total RNA—verified on `Qubit` and the `Agilent 2100 Bioanalyzer`.

**Page 6:** The `5 ng` stream forks into two parallel pipelines at the University of Florida `ICBR`: Left track enters `Ovation Pico WTA V2` and `Encore Biotin` for `Affymetrix ATH1` hybridization; Right track enters `SMART-Seq V4` (`10` PCR cycles) and `Nextera` tagmentation (`120 pg` cDNA) for `Illumina NextSeq 500`.

**Page 7:** Side-by-side platform portraits: `ATH1` hybridizes `5 µg` labeled cDNA for `16 h` at `45 °C` (`22,700` genes detected); `NextSeq 500` fires `2 × 150 bp` paired-end reads (`~40 million` reads/sample, `33,500` genes detected).

**Page 8:** The first Venn diagram (`Figure 2A`) materializes between the two machines (`FC ≥ 2`, `FDR < 0.01`): `ATH1` calls **`6,351`** DEGs between Zone 2 and Zone 1; `RNA-Seq` calls **`6,403`** DEGs. In the overlapping center glow **`4,180`** shared genes.

**Page 9:** Zooming into the Zone 1 city (`432` RNA-Seq-unique genes + shared tip-enriched transcripts). Chromatin and cell-cycle machinery hums: `HTA8` (`-5.54` array / `-5.72` RNA-Seq), `AN3` (`-5.71` / `-7.86`), and `CDC20.1` (`-4.74`) drive rapid mitosis.

**Page 10:** At the very tip of Zone 1, gravity and touch sensors stand watch: `NPY4` (`-5.40` / `-6.26`) routes auxin-gravitropism cues while mechanosensitive ion channel `MSL9` (`-4.39` / `-5.59`) listens for physical deflection.

### Act II: The Molecular Battle (Pages 11–22)

**Page 11:** Crossing the `0.5 mm` border into **Zone 2**. The landscape transforms from compact dividing cubes into towering, elongating cells sprouting root hairs (`trichoblast differentiation`, `FDR = 1.80 × 10^-5`).

**Page 12:** Zone 2's cell-wall construction crew surges: `AGP3` (`+10.14` RNA-Seq / `+6.17` array), `LRX1` (`+8.53` / `+7.29`), `ATHRGP1` (`+8.21` / `+5.49`), and `FLA13` (`+7.37` / `+5.33`) weave structural glycoproteins into expanding walls.

**Page 13:** Root-hair-specific peroxidases `PER73` (`+8.46` / `+7.98`) and `AT1G30870` (`+7.76` / `+6.18`), alongside `RALF1` (`+7.84` / `+6.83`) and `GASA1` (`+7.64` / `+7.02`), sculpt cell expansion and signaling.

**Page 14:** Lipid transfer proteins (`LTP`s `AT1G48750`, `AT5G05960`, `AT3G18280`) and phenylpropanoid enzyme `PAL4` (`+7.40` / `+5.17`) flood Zone 2 (`lipid localization FDR = 4.00 × 10^-16`), sealing and armoring maturing epidermal surfaces.

**Page 15:** Now the two platforms square off on sensitivity (`Figure 2B–C`). On `ATH1`, bright genes hit fluorescence saturation (`log2 FC` plateaus around `6–8`); on `NextSeq 500`, the ceiling lifts (`log2 FC` reaches `+10.14` and `-9.15`).

**Page 16:** At higher fold-change gates (`FC ≥ 4` and `FC ≥ 8`), `RNA-Seq` pulls away—identifying **`364`** (`FC ≥ 4`) and **`63`** (`FC ≥ 8`) unique DEGs versus only **`41`** and **`6`** on `ATH1`.

**Page 17:** Spotlight on the **`771` genes truly unique to `RNA-Seq`** (`339` in Zone 2, `432` in Zone 1, `Table 3`): `TED7` (`+7.06`), phosphate transporter `ATPT1` (`+6.94`), `ATOFP17` (`+6.92`), `CRF4` (`-4.04`), `TRM5` (`-4.10`), and microRNA `MIR779A` (`-5.56`) emerge from probes `ATH1` never carried.

**Page 18:** Inside the exon-level zoom (`Figure 3`): `RNA-Seq` resolves individual transcript isoforms! In `AT5G05960` and `NPY4`, two steady-looking isoforms sum into a significant gene-level shift; in `AT4G02270` and `ATLP-1`, a single isoform (`TCONS_00025944` / `TCONS_00005036`) drives the entire swing.

**Page 19:** Beyond `TAIR10` annotations, `TopHat`/`Cufflinks` uncovers **`107` novel transcriptionally active regions (`TARs`)**—including **`19` `TARs`** that flip significantly between Zone 1 and Zone 2 (`FDR < 0.01`).

**Page 20:** Plot twist! The `ATH1` microarray fires back. When the authors cross-check known spaceflight-responsive genes, **`> 50` highly differentially expressed spaceflight genes** caught by `ATH1` (and validated in prior `RT-qPCR` studies) are completely **invisible** in the `40 M`-read `RNA-Seq` dataset.

**Page 21:** Why? Low-copy or cell-type-restricted transcripts get drowned out at standard `40 M` `RNA-Seq` depth unless sequenced far deeper—whereas targeted microarray hybridization still hooks them.

**Page 22:** Dual-lens truce: neither platform holds the whole truth alone. `RNA-Seq` maps breadth, isoforms, and unannotated `TARs`; `ATH1` guards low-abundance spaceflight sentinels.

### Act III: Fixation & Data Epilogue (Pages 23–32)

**Page 23:** Archival upload: raw CEL files and `NextSeq 500` FASTQs enter `GEO` (`GSE115555`) and NASA GeneLab (`GLDS-208` / `OSD-208`) as a permanent cross-platform Rosetta Stone.

**Page 24:** Flash-forward to `TOAST` (*Test of Arabidopsis Space Transcriptome*, 2020) and `BRIC`/`Veggie` meta-analyses: `OSD-208` becomes the anatomical reference that explains why whole-root spaceflight DEGs behave differently in meristem vs. elongation zones.

**Page 25:** Methodological legacy: `RNAlater`-preserved microdissection proves that `5 ng` of RNA from a single `0.5 mm` root tip is enough for genome-wide profiling—unlocking precision spatial transcriptomics for future ISS and Artemis payloads.

**Page 26:** Closing montage: Zone 1's dividing chromatin (`HTA8`, `AN3`) and gravity-sensing `NPY4`/`MSL9` transition seamlessly into Zone 2's elongating `AGP3`/`LRX1`/`PER73` root hairs.

**Page 27:** Narrative caption: *Before you can read how microgravity bends a root in orbit, you have to know which lens you're looking through—and which half of the first two millimeters is speaking.*

**Pages 28–30:** Visual summary triptych of the `4,180` shared core, the `771` `RNA-Seq`-unique genes + `19` novel `TARs`, and the `> 50` low-expression spaceflight genes saved by `ATH1`.

**Pages 31–32:** Full-bleed **Mission Debrief Infographic Spread** (detailed in Section 4).

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31): Microdissection & Dual-Platform Pipeline

- **Experimental Design:** *Arabidopsis thaliana* (`Col-0`), `8 d` vertical Phytagel (`0.5× MS`, `0.5%` sucrose, `19 °C`, `80–100 µmol s^-2 m^-2` continuous light), `n = 3` single-root replicates preserved in `RNAlater` (`-20 °C`).

- **Zones:** **Zone 1** (`0.5 mm` root cap + meristematic zone) vs. **Zone 2** (`1.5 mm` transition, elongation, + growth-terminating zone).

- **Dual-Platform Workflow (`5 ng` RNA input via `PicoPure`):**

  - **Microarray:** `Ovation Pico WTA V2` → `Affymetrix ATH1` (`R/Limma` `RMA`, `FC ≥ 2`, `FDR < 0.01`).

  - **RNA-Seq:** `SMART-Seq V4` + `Nextera` → `Illumina NextSeq 500` (`2 × 150 bp`, `~40 M` reads/sample, `TopHat`/`Cufflinks`, `FDR < 0.01`).

- **Detection Totals:** `~22,700` expressed (`ATH1`) vs. `~33,500` expressed (`RNA-Seq`).

### Right Spread (Page 32): DEG Venn, Zone Signatures & Platform Trade-Offs

- **DEG Overlap (`Zone 2 vs. Zone 1`, `FC ≥ 2`, `FDR < 0.01`):**

  - `ATH1` Microarray: **`6,351`** DEGs | `RNA-Seq`: **`6,403`** DEGs | **Shared:** **`4,180`** DEGs.

  - **`RNA-Seq`-Unique:** **`771`** genes (`339` Zone 2, `432` Zone 1) + **`107` novel `TARs`** (**`19`** significant).

  - **High-Fold Advantage (`FC ≥ 4` / `FC ≥ 8`):** `364` / `63` unique (`RNA-Seq`) vs. `41` / `6` (`ATH1`).

  - **Low-Expression Caveat:** `> 50` spaceflight-relevant DEGs detected by `ATH1` were missed by `RNA-Seq` at `~40 M` reads/sample.

- **Zone Biology:**

  - **Zone 1 Enriched:** Cell cycle, DNA packaging, chromatin assembly (`HTA8`, `AN3`, `CDC20.1`, `NPY4`, `MSL9`, `MIR779A`).

  - **Zone 2 Enriched:** Lipid localization/transport, root hair/trichoblast differentiation, cell wall organization (`AGP3`, `LRX1`, `PER73`, `FLA13`, `RALF1`, `GASA1`, `PAL4`, `TED7`, `ATPT1`).

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "volume": 20,
  "osdr_accession": "OSD-208",
  "glds_id": "GLDS-208",
  "source_accession": "GSE115555",
  "payload_mission": "Ground-Based Spaceflight Methodology / Root Apex Dual-Platform Benchmark (CASIS GA-2013-104 / NASA NNX12AN69G)",
  "organism": "Arabidopsis thaliana (Col-0, 8 d primary root apex: Zone 1 [0.5 mm] vs. Zone 2 [1.5 mm])",
  "new_hardware_introduced": [
    "Olympus SZX12 dissecting microscope + thin-ruled grid (RNAlater-submerged microdissection)",
    "Illumina NextSeq 500 (SMART-Seq V4 + Nextera 5 ng ultra-low-input RNA-Seq)"
  ],
  "molecular_characters": [
    "AGP3 (AT4G40090)",
    "LRX1 (AT1G12040)",
    "PER73 (AT5G67400)",
    "RALF1 (AT1G02900)",
    "GASA1 (AT1G75750)",
    "FLA13 (AT5G44130)",
    "PAL4 (AT3G10340)",
    "TED7 (AT5G48920)",
    "ATPT1 (AT5G43350)",
    "NPY4 (AT2G23050)",
    "MSL9 (AT5G19520)",
    "AN3 (AT5G28640)",
    "HTA8 (AT2G38810)",
    "ATLP-1 (AT1G18250)",
    "CDC20.1 (AT4G33270)",
    "MIR779A (AT2G22496)"
  ],
  "continuity_hooks": [
    "Establishes 5 ng RNAlater-preserved single-root-zone microdissection as a viable spaceflight protocol.",
    "Provides the cross-platform baseline (4,180 shared DEGs; 771 RNA-Seq-unique; 19 novel TARs; >50 low-abundance spaceflight DEGs missed by 40 M-read RNA-Seq) later cited in TOAST (2020) and Plant Space Biology meta-analyses.",
    "Sets up OSD-210 (CRESS Antarctic balloon & BNL GCR seed mutagenesis) as Vol. 21."
  ]
}

```

Say **"Go on"** when you're ready for **Volume 21 (`OSD-210`)**.
