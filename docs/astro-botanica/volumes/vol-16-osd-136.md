---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 16
title: "Five Days Old in Thin Air"
accession: OSD-136
script_status: partial
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 39)
---

> [!NOTE]
> Script status **partial**: 32/32 pages have their own heading; condensed ranges: 6-8, 16-18, 19-22, 23-25, 26-30.
## 1. Volume Metadata Header

- **Volume:** Vol. 16 — *Five Days Old in Thin Air*

- **OSDR Accession:** `OSD-136` (`GLDS-136`)

- **Version & Dates:** Version 6 | Submitted: `12-Oct-2016` | Initial Release: `11-May-2017` | Updated: `31-Jul-2024`

- **Study DOI:** `10.26030/byyr-sh46`

- **Source Accession / Related Study:** `GSE87868` (`Experiment 2`) | Related: `OSD-134` (`GSE87869`, Experiment 1)

- **Payload & Mission:** `Simulated_Environmental_Factors` (Ground Study — Low Pressure Growth Chambers [`LPGC`] at CESRF, University of Florida / University of Guelph)

- **Primary Publication:** Zhou et al. (2017), *Front Plant Sci* 8:528 (PMID: `28443120` | DOI: `10.3389/fpls.2017.00528`) — *Dissecting Low Atmospheric Pressure Stress: Transcriptome Responses to the Components of Hypobaria in Arabidopsis*

- **Organism & Genotype:** *Arabidopsis thaliana* Wassilewskija (`WS` / `Ws-0`), **5-day-old** seedlings (`12` plants/plate, `10` plates/chamber, `3` chambers/treatment) grown vertically on `0.5×` MS media, `0.45%` Phytagel, `2.5 ppm` benomyl (`pH 5.75`), `24 h` continuous light, `22–25°C` at `97 kPa` before `24 h` transfer

- **Hardware & Conditions (`3` Atmospheres, `CO₂ = 0.05 kPa`, `RH ≥ 95%`, `22–24°C`):**

  - `97 kPa` (`97,000 Pa` Guelph ambient control, `pO₂ = 21 kPa`)

  - `50 kPa` (`50,000 Pa` moderate hypobaria, `notsuppO2`)

  - `50 kPa/NormOx` (`50,000 Pa + O₂` supplemented to `pO₂ = 21 kPa`, `suppO2`)

- **Preservation & Assays (`n = 9` `5 d` root arrays):** Harvested directly to `RNAlater`, **Plant Roots** dissected; `RNeasy Mini Kit`, `3' IVT plus` biotin labeling, `Affymetrix ATH1 121501` (`MAS5`/`RMA`, `limma` unadjusted `P < 0.01`, `|FC| ≥ 2`); reprocessed in `2024` via GeneLab `NF_MAAffymetrix 1.0.5` (`oligo` RMA, `Ensembl Plants` rel. 54, `limma`)

## 2. Dramatis Personae (Grounded in Study Data)

- **WS-5 Root ("Young Sprout"):** Five-day-old *Arabidopsis* `WS` primary root—half the age of Vol. 15's `WS-10` veteran, still building its lipid membranes and sugar pipelines when the `LPGC` pressure drops to `50 kPa`.

- **SWEET11 (`AT3G48740`):** A bidirectional sugar transporter—and the **sole** gene repressed in *both* `5 d` and `10 d` roots under oxygen-supplemented `50 kPa/NormOx`, proving that pure `50 kPa` pressure alters carbon transport regardless of age.

- **EPF2 (`AT1G34245`):** Epidermal Patterning Factor 2—a water-use-efficiency and stomatal-density regulator unexpectedly upregulated in `5 d` roots at `50 kPa` (but not `50 kPa/NormOx` or `10 d` roots).

- **CWLP (`AT3G22120`):** Cell wall–plasma membrane linker protein—protecting water content in `5 d` roots at `50 kPa`, echoing its `25 kPa` role in `10 d` roots (Vol. 15).

- **The Age-Independent Nine (`PDC1`, `AHB1`, `PCO1` + 6 allies):** The nine hypoxia and wound-responsive genes that show a `> 1.8`-fold `50 kPa` vs. `50 kPa/NormOx` gap in *both* `5 d` and `10 d` roots.

## 3. 32-Page Chapter Script

### Act I: Launch & Environmental Shift (Pages 1–10)

**Page 1 — Splash: The Younger Sibling**

- *Panel 1 (Full-page splash):* Inside the same `CESRF` Low Pressure Growth Chambers (`LPGC`) from Vol. 15, a new rack of vertical `0.5×` MS plates holds tiny **5-day-old** `Ws-0` seedlings—shorter roots, fresh cotyledons, barely five days out of the seed coat.

- *Caption:* "Experiment 1 tested ten-day-old veterans at `50` and `25 kPa`. Experiment 2 (`OSD-136`) asks a sharper question: does a five-day-old root hear the same sky?"

**Page 2 — Five Days at `97 kPa`**

- *Panel 1:* Close-up of `WS-5` Root's delicate root hairs clinging to `0.45%` Phytagel (`2.5 ppm` benomyl, `pH 5.75`) under `24 h` light.

- *WS-5 Root:* "Ten-day-old roots have already settled into their abiotic stress routines. I'm still wiring my sugar and lipid highways."

**Page 3 — Three Chambers, Nine Replicates**

- *Panel 1:* Three `LPGC` manifolds lock in for `24 h`: `97 kPa` (`CTRL`, `GSM2342100–2342102`), `50 kPa` (`notsuppO2`, `GSM2342103–2342105`), and `50 kPa/NormOx` (`+ O₂` to `21 kPa`, `GSM2342106–2342108`).

- *Panel 2:* Temperature holds at `22–24°C`, `CO₂` at `0.05 kPa`, humidity inside plates at `95%+`.

**Page 4 — The `50 kPa` Drop**

- *Panel 1:* Pressure falls from `97,000 Pa` to `50,000 Pa`—right on the terrestrial mountain boundary where higher plants naturally thin out.

- *Panel 2:* In the `suppO2` chamber, supplemental oxygen holds `pO₂` steady at `21,000 Pa` while nitrogen balances the rest.

**Page 5 — Poker-Faced at Day 5**

- *Panel 1:* At Hour `24`, cameras snap the `5 d` plates (`Figure 2` of Zhou et al., 2017): zero wilting, zero browning, zero visible desiccation across `97 kPa`, `50 kPa`, and `50 kPa/NormOx`.

- *WS-5 Root:* "We look identical on the outside. Now open the tubes."

**Page 6–8 — Harvest, Bisection & Array Hybridization**

- *Page 6:* Twelve seedlings per plate plunge into `RNAlater`; forceps isolate the `5 d` **Plant Roots** (`9` clean biological replicates, `n = 3` per atmosphere).

- *Page 7:* At UF ICBR, `100 ng` total RNA feeds the `3' IVT plus` kit, yielding biotin-labeled cRNA (`12.5 µg`) for `Affymetrix ATH1 121501` arrays (`FS450_0004`, `GeneChip Scanner 3000 7G`).

- *Page 8:* Unlike Vol. 15's missing `25 kPa/NormOx` replicates, all **9** `5 d` root arrays pass clean.

**Page 9–10 — The `5 d` vs. `10 d` Heatmap Unfolds**

- *Page 9:* The `221`-gene comparative heatmap (`Figure 4A`) renders on screen: `103` DEGs from `5 d` roots on the left, `129` DEGs from `10 d` roots on the right.

- *Page 10:* The two columns look like strangers. *Caption:* "Same ecotype. Same chamber. Same `50 kPa`. Five days of age changes almost everything."

### Act II: The Molecular Battle (Pages 11–22)

**Page 11 — The Great Age Divide (`103` vs. `129`)**

- *Panel 1:* In the `50 kPa` Venn diagram (`Figure 4B`), `5 d` roots and `10 d` roots share just **10** coordinately regulated genes!

- *WS-5 Root:* "Only ten! My older self fights abiotic stress—I'm rewriting lipid, sugar, and water metabolism."

**Page 12 — The Oxygen Trio Holds the Line**

- *Panel 1:* Inside those `10` shared `50 kPa` responders, `PDC1`, `AHB1`, and `PCO1` stand tall in both `5 d` and `10 d` roots—confirming that mild `10 kPa` hypoxia is the universal trigger across ages.

**Page 13 — `SWEET11`: The Sole `NormOx` Survivor**

- *Panel 1:* The `50 kPa/NormOx` Venn diagram shrinks to a single glowing dot at the intersection of `5 d` and `10 d` roots: **`SWEET11`** (`AT3G48740`).

- *SWEET11:* "Both of you—five days old and ten days old—shut down my bidirectional sugar gate when total pressure drops to `50 kPa`, even with `21 kPa` oxygen!"

**Page 14 — Lipid & Sugar Rerouting in `5 d` Roots**

- *Panel 1:* `AgriGO` (`Table S2`) highlights `5 d` root clades packed with **lipid metabolism** and **sugar transport** transcripts—fueling rapid early root expansion while `50 kPa` alters gas diffusion.

**Page 15 — `EPF2` & `CWLP` Step Forward**

- *Panel 1:* Two unexpected defenders surge in `5 d` roots at `50 kPa` (but *not* `50 kPa/NormOx`, and *not* in `10 d` roots): **`EPF2`** (`AT1G34245`, stomatal/water-use-efficiency factor) and **`CWLP`** (`AT3G22120`, cell wall–plasma membrane linker).

- *CWLP:* "At `10` days old, I wait for `25 kPa` to wake up. At `5` days old, `50 kPa` is enough!"

**Page 16–18 — The `37`-Gene `50 kPa` vs. `NormOx` Gap**

- *Page 16:* Filtering `5 d` and `10 d` roots for genes with a `> 1.8`-fold shift between `50 kPa` and `50 kPa/NormOx` (`Figure 4C`) yields **37** genes.

- *Page 17:* **23** of those `37` belong exclusively to `5 d` roots; only **5** belong exclusively to `10 d` roots—showing young seedlings are far more transcriptionally reactive to mild hypobaria's oxygen-dependent component!

- *Page 18:* **9** hypoxia and wound-responsive genes bridge both ages, forming the age-independent core of moderate hypobaria.

**Page 19–22 — Why Young Roots React Differently**

- *Page 19:* `5 d` roots lack the lignified buffers and mature root architecture of `10 d` seedlings, making their plasma-membrane linkers (`CWLP`) and sugar gates (`SWEET11`) immediate pressure sensors.

- *Page 20:* `NormOx` (`+ O₂` to `21 kPa`) silences `23` of those `5 d`-specific spikes, leaving only `SWEET11` and a handful of unshared metabolic genes.

- *Page 21–22:* For space-farm designers, germination and early seedling establishment (`Day 5`) represent a distinct metabolic window from vegetative growth (`Day 10`)—requiring age-aware atmospheric tuning.

### Act III: Fixation & Data Epilogue (Pages 23–32)

**Page 23–25 — From `GSE87868` to `GLDS-136`**

- *Page 23:* Nine `.CEL.gz` files (`12671_Ferl_5d-101-A` through `12682_Ferl_5d-OX1-C`) enter GEO (`GSE87868`) and NASA OSDR as `OSD-136` (`DOI: 10.26030/byyr-sh46`).

- *Page 24:* In `2024` (Version 6), GeneLab reprocesses all `9` arrays through `NF_MAAffymetrix 1.0.5` (`oligo` RMA, `Ensembl Plants` rel. 54, `limma`), pairing `OSD-136` seamlessly with `OSD-134`.

- *Page 25:* Together, Vols. 15 and 16 complete the `CESRF` hypobaria atlas across pressures (`97`, `50`, `25 kPa`), oxygen (`NormOx`, `HypOx`), organs (root, shoot), and developmental ages (`5 d`, `10 d`).

**Page 26–30 — Epilogue Montage: Growing Up Under Half a Sky**

- *Page 26:* `WS-5` Root lengthens along the vertical Phytagel, `SWEET11` quietly throttling sugar flux in `50 kPa/NormOx`.

- *Page 27–29:* The `LPGC` telemetry log ticks every `5` minutes—second-by-second proof that plants can adapt to half an atmosphere if water and oxygen are managed.

- *Page 30 (Closing Splash):* Two *Arabidopsis* `WS` roots—one `5` days old, one `10` days old—stand side by side inside a `50 kPa` chamber, linked by a single glowing `SWEET11` thread. *Caption:* "Same sky. Five days apart. Only one sugar gate remembers both."

**Pages 31–32 — Mission Debrief Infographic Spread** *(Detailed in Section 4 below.)*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

**Page 31 (Left Spread): `OSD-136` `5 d` Root Matrix (`n = 9` Arrays)**

- **Design:** `5`-day-old *Arabidopsis* `WS` (`Ws-0`) Plant Roots | `24 h` in `LPGC` (`22–24°C`, `CO₂ = 0.05 kPa`, `RH ≥ 95%`, `24 h` light) | `Affymetrix ATH1 121501` (`|FC| ≥ 2`, `P < 0.01`).

- **Sample Groups (`n = 3` each):**

  - `97 kPa` CTRL (`GSM2342100–102`)

  - `50 kPa` `notsuppO2` (`GSM2342103–105`)

  - `50 kPa/NormOx` (`50 kPa + 21 kPa O₂`, `GSM2342106–108`)

**Page 32 (Right Spread): Developmental Age Comparison (`5 d` vs. `10 d` Roots at `50 kPa`)**

- **Total `50 kPa`-Associated Root DEGs (`221` union):** `103` in `5 d` roots vs. `129` in `10 d` roots.

- **Age Overlap:**

  - `50 kPa`: **10** shared genes (including `PDC1`, `AHB1`, `PCO1`).

  - `50 kPa/NormOx`: **1** shared gene—**`SWEET11`** (`AT3G48740`, sugar transporter, repressed at both ages).

- **`> 1.8`-Fold `50 kPa` vs. `50 kPa/NormOx` Divergence (`37` genes):** `23` unique to `5 d` roots (enriched for lipid, sugar, water metabolism, e.g., `EPF2`, `CWLP`), `5` unique to `10 d` roots, `9` shared (hypoxia/wound).

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "volume": 16,
  "osdr_accession": "OSD-136",
  "glds_id": "GLDS-136",
  "source_accession": "GSE87868",
  "related_study": "OSD-134 (PRJNA347979 / GSE87869)",
  "payload_mission": "Simulated_Environmental_Factors (Ground Study, CESRF Guelph)",
  "organism": "Arabidopsis thaliana",
  "ecotype": "Wassilewskija (WS / Ws-0), 5-day-old Plant Roots",
  "new_hardware_introduced": [],
  "molecular_characters": {
    "shared_50kPa_NormOx_5d_10d": ["SWEET11 (AT3G48740, repressed)"],
    "5d_root_50kPa_specialists": ["EPF2 (AT1G34245)", "CWLP (AT3G22120)"],
    "age_independent_hypoxia_core": ["PDC1 (AT4G33070)", "AHB1 (AT2G16060)", "PCO1 (AT5G15120)"]
  },
  "continuity_hooks": [
    "Completes the 2-part Zhou et al. (2017) hypobaria series alongside Vol. 15 (OSD-134)",
    "Establishes developmental age (5 d vs. 10 d) as a major determinant of low-pressure transcriptional strategy (103 vs. 129 DEGs, only 10 shared at 50 kPa)",
    "CWLP bridges 5 d roots at 50 kPa (OSD-136) and 10 d roots at 25 kPa (OSD-134)"
  ]
}

```

Say **"Go on"** whenever you're ready for **Vol. 17** (the next OSDR plant study after `OSD-136`).
