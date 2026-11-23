---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 15
title: "The Thin-Air Dissection"
accession: OSD-134
script_status: partial
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 37)
---

> [!NOTE]
> Script status **partial**: 32/32 pages have their own heading; condensed ranges: 27-30.
## 1. Volume Metadata Header

- **Volume:** Vol. 15 — *The Thin-Air Dissection*

- **OSDR Accession:** `OSD-134` (`GLDS-134`)

- **Version & Dates:** Version 3 | Submitted: `12-Oct-2016` | Initial Release: `11-May-2017` | Updated: `28-Aug-2024`

- **Study DOI:** `10.26030/wknj-pf59`

- **Source Accession / Related Study:** `PRJNA347979` (`GSE87869` [Experiment 1]) | Related: `OSD-136` (`GSE87868`, Experiment 2)

- **Payload & Mission:** `Simulated_Environmental_Factors` (Ground Study — Low Pressure Growth Chambers [`LPGC`] at CESRF, University of Guelph, Ontario, Canada)

- **Primary Publication:** Zhou et al. (2017), *Front Plant Sci* 8:528 (PMID: `28443120` | DOI: `10.3389/fpls.2017.00528`) — *Dissecting Low Atmospheric Pressure Stress: Transcriptome Responses to the Components of Hypobaria in Arabidopsis*

- **Organism & Genotype:** *Arabidopsis thaliana* Wassilewskija (`WS`), `10`-day-old seedlings (`12` plants/plate, `10` plates/chamber, `3` chambers/treatment) grown vertically on `0.5×` MS media, `0.45%` Phytagel, `2.5 ppm` benomyl (`pH 5.75`), `24 h` continuous light (`70–80 µmol m⁻² s⁻¹`), `22–25°C` at `97 kPa` ambient before `24 h` atmospheric shift

- **Hardware & Conditions (`6` Atmospheres, `CO₂ = 0.05 kPa`, `RH ≥ 95%`, `22–24°C`):**

  - `97 kPa` (`pO₂ = 21 kPa`, Guelph ambient control)

  - `50 kPa` (`pO₂ = 10 kPa`, moderate hypobaria + mild hypoxia)

  - `25 kPa` (`pO₂ = 5 kPa`, severe hypobaria + strong hypoxia)

  - `50 kPa/NormOx` (`pTOT = 50 kPa`, `pO₂ = 21 kPa`, pure moderate hypobaria)

  - `25 kPa/NormOx` (`pTOT = 25 kPa`, `pO₂ = 21 kPa`, pure severe hypobaria)

  - `97 kPa/HypOx` (`pTOT = 97 kPa`, `pO₂ = 5.1 kPa` [`5 kPa`], pure hypoxia at ambient pressure)

- **Preservation & Assays (`n = 33` in `OSD-134`):** Direct harvest into `RNAlater`, dissected into **roots** and **shoots**; `RNeasy Mini Kit`, `3' IVT plus` biotin labeling, `Affymetrix ATH1 121501` (`MAS5`/`RMA`, `limma` unadjusted `P < 0.01`, `|FC| ≥ 2`); Taqman `qRT-PCR` validation (`UBQ11` [`AT4G05050`] internal control)

## 2. Dramatis Personae (Grounded in Study Data)

- **WS-10 Root & Shoot ("Guelph Twins"):** Ten-day-old *Arabidopsis* `WS` seedlings raised vertically on `0.45%` Phytagel at `97 kPa` (`1,100 ft` elevation in Guelph, Ontario) before being sealed inside `245 L` steel-and-glass `LPGC` cylinders (`0.45 × 1.6 m`) for a `24 h` atmospheric trial.

- **The Oxygen Trio (`PDC1`, `AHB1`, `PCO1`):** Core root hypoxia responders (`AT4G33070`, `AT2G16060`, `AT5G15120`) that roar to life at `50 kPa`, `25 kPa`, and `97 kPa/HypOx`—yet fall silent the moment `pO₂` is restored to `21 kPa` (`NormOx`).

- **TAD3 (`AT5G24670`):** An essential tRNA-editing enzyme repressed in `50 kPa` roots (but not `50 kPa/NormOx`), embodying how combined hypobaria quietly brakes growth.

- **LBD41 (`AT3G02550`):** The sole root gene crossing all three severe treatments (`25 kPa`, `25 kPa/NormOx`, `97 kPa/HypOx`)—surging in low oxygen, yet flipping *downward* when pressure drops while `pO₂` stays `21 kPa`.

- **MYB44 (`AT5G67300`):** The lone ranger of `25 kPa/NormOx` shoots—the *only* gene (`|FC| ≥ 2`, `P < 0.01`) significantly altered in `10 d` shoots when severe `25 kPa` hypobaria is stripped of hypoxia.

- **CWLP (`AT3G22120`) & FSD1 (`AT4G25100`):** The pressure-sensitive specialists—`CWLP` (cell wall–plasma membrane linker) "enhanced" specifically in `25 kPa` roots beyond either `NormOx` or `HypOx`, while oxidative-stress `FSD1` is "repressed."

- **AT4G33560:** A wounding-responsive unknown protein—the sole bridge between `50 kPa` roots and shoots showing a `> 1.8`-fold divergence from `50 kPa/NormOx`.

## 3. 32-Page Chapter Script

### Act I: Launch & Environmental Shift (Pages 1–10)

**Page 1 — Splash: Six Skies in Steel Cylinders**

- *Panel 1 (Full-page splash):* Inside the University of Guelph's Controlled Environment Systems Research Facility (`CESRF`), six towering `245 L` Low Pressure Growth Chambers (`0.45 × 1.6 m`) stand wired to second-by-second gas manifolds. Inside each, vertical Petri plates of `10 d` *Arabidopsis* `WS` seedlings glow under `70–80 µmol m⁻² s⁻¹` continuous light.

- *Caption:* "On Earth, thinning air always steals oxygen. Only inside a steel chamber can you pull the sky apart."

**Page 2 — Baseline at `1,100 Feet`**

- *Panel 1:* Close-up on a `97 kPa` pressure gauge—Guelph's natural ambient pressure (`pO₂ = 21 kPa`, `CO₂ = 0.05 kPa`).

- *Panel 2:* `WS-10` Root and Shoot cling vertically to `0.45%` Phytagel (`pH 5.75`, `2.5 ppm` benomyl, `95%+` humidity).

- *WS-10 Shoot:* "Ten days of `24`-hour light. No spaceflight yet—just a clean `97 kPa` baseline."

**Page 3 — The Six-Way Split**

- *Panel 1:* A manifold diagram splits the `18` chambers (`3` replicates × `6` atmospheres) into their `24 h` assignments: `97 kPa` (control), `50 kPa` (`pO₂ = 10 kPa`), `25 kPa` (`pO₂ = 5 kPa`), `50 kPa/NormOx` (`pO₂ = 21 kPa`), `25 kPa/NormOx` (`pO₂ = 21 kPa`), and `97 kPa/HypOx` (`pO₂ = 5 kPa`).

- *Caption:* "Two pressures. Two oxygen levels. One question: how much of hypobaria is really just suffocation?"

**Page 4 — Valve Open: The Drop to `50 kPa`**

- *Panel 1:* Vacuum pumps hum (`WHIRRR`). Pressure needles swing down to `50 kPa`—roughly `5,500 m` altitude, the natural limit of higher plants on Earth.

- *Panel 2:* In `50 kPa/NormOx`, a separate line bleeds pure `O₂` back in, holding `pO₂` at `21 kPa` even as total pressure halves.

**Page 5 — Plunge to `25 kPa`: Beyond the Mountain Line**

- *Panel 1:* In the `25 kPa` chamber, the needle drops past `40 kPa`—into an atmosphere no land plant has ever evolved to breathe (`pO₂ = 5 kPa`).

- *Panel 2:* Across the aisle, `97 kPa/HypOx` keeps full `97 kPa` weight on the leaves while starving them down to the exact same `5 kPa` oxygen.

**Page 6 — The Stomatal Rush**

- *Panel 1:* Microscopic view of a `WS-10` leaf stoma at `25 kPa`. Water vapor molecules rocket outward faster through the thin air—accelerated evapotranspiration!

- *Panel 2:* Yet inside the sealed Petri plate (`RH ≥ 95%`), hydrated Phytagel feeds the roots continuously.

- *WS-10 Shoot:* "The air feels dry... but my feet are standing in a full reservoir."

**Page 7 — Hour 24: No Wilted Leaves**

- *Panel 1:* Post-treatment photographs (`Figure 2`) line up all six chambers: `97 kPa`, `50 kPa`, `50 kPa/NormOx`, `25 kPa`, `25 kPa/NormOx`, `97 kPa/HypOx`.

- *Panel 2:* Every rosette is green, turgid, and un-wilted. To the naked eye, nothing happened.

- *Caption:* "Morphology stays poker-faced. The truth is hiding in the mRNA."

**Page 8 — Straight to `RNAlater`**

- *Panel 1:* Chambers vent back to `97 kPa`; plates are cracked open and `12` seedlings per plate are plunged straight into `RNAlater` tubes (`3` chamber replicates per group).

- *Panel 2:* Forceps bisect every seedling at the hypocotyl-root junction: aerial shoots in one vial, vertical roots in another.

**Page 9 — One Missing Array**

- *Panel 1:* At UF's ICBR core, `24` root arrays and `18` shoot arrays hit the `Affymetrix ATH1` scanner (`3' IVT plus`, `12.5 µg` cRNA).

- *Panel 2:* A red warning blinks over `25 kPa/NormOx` roots: two hybridizations fail QC, leaving `n = 1` array (`GSM2342078`) to carry the `25 kPa/NormOx` root flag alone.

**Page 10 — Lifting the FDR Veil**

- *Panel 1:* On the `limma` workstation, Benjamini-Hochberg FDR correction wipes the `50 kPa` and `NormOx` comparisons completely blank (`0` genes!).

- *Panel 2:* The analyst toggles to unadjusted `P < 0.01` (`|FC| ≥ 2`)—and `151` genes (`50 kPa` suite) and `372` genes (`25 kPa` suite) light up the screen, waiting for `Taqman qRT-PCR` to prove they're real.

### Act II: The Molecular Battle (Pages 11–22)

**Page 11 — Roots vs. Shoots at `50 kPa`**

- *Panel 1:* Inside `50 kPa` (`pO₂ = 10 kPa`), **112** genes stir in `WS-10` roots—led by drought/cold-linked `SUS1` (`AT5G20830`)—while shoots shift just **23** genes (mostly biotic defense, including downregulated thionin `AT1G72260`).

- *WS-10 Root:* "Down here on the agar, I feel every kilopascal drop."

**Page 12 — The Oxygen Rescue (`50 kPa/NormOx`)**

- *Panel 1:* When `pO₂` is topped back up to `21 kPa` at `50 kPa`, the root storm shrinks from `112` genes to **25**, and shoots drop from `23` to just **2** (`AT5G18600`, `AT1G23130`)—with *zero* overlap between roots and shoots!

- *Panel 2:* `PDC1`, `AHB1`, and `PCO1` stand down completely; `TAD3` (`AT5G24670`) stops being repressed.

**Page 13 — The `14 + 7` Bridge**

- *Panel 1:* Comparing `50 kPa` directly against `50 kPa/NormOx` (`> 1.8`-fold gap) isolates `14` root genes and `7` shoot genes (`5` in signal transduction).

- *Panel 2:* Only **one** gene—wounding-responsive `AT4G33560`—crosses between root and shoot in that hypoxia-driven gap.

**Page 14 — Severe Hypobaria: The `25 kPa` Storm**

- *Panel 1:* At `25 kPa` (`pO₂ = 5 kPa`), **256** genes ignite in roots and **55** in shoots (`AOC1` / `AT3G25760` among them), with **34 of 51** known plant core hypoxia genes lighting up across the `25 kPa` suite.

- *Panel 2:* `97 kPa/HypOx` (`pO₂ = 5 kPa`) triggers **167** genes in roots (`ADH1`, `PDC2`, `ALAAT1` driving ethanol/alanine fermentation) and **31** in shoots.

**Page 15 — The Lonely `MYB44`**

- *Panel 1:* In `25 kPa/NormOx` (`25 kPa` total pressure, `21 kPa` `O₂`), roots drop to **17** DEGs—and in the entire `WS-10` shoot transcriptome, only **one** gene (`MYB44`, `AT5G67300`) crosses the `2`-fold, `P < 0.01` threshold!

- *MYB44:* "Strip away the hypoxia, and the shoot barely flinches at a quarter-atmosphere."

**Page 16 — `LBD41`'s Flip**

- *Panel 1:* `LBD41` (`AT3G02550`) stands at the three-way intersection of `25 kPa`, `97 kPa/HypOx`, and `25 kPa/NormOx` in roots.

- *Panel 2:* In `25 kPa` and `97 kPa/HypOx`, `LBD41` surges upward; in `25 kPa/NormOx`, it plunges *downward*—proving pressure and oxygen tug on opposite levers.

**Page 17 — The Thirteen Pressure-Specific Rebels**

- *Panel 1:* A `> 1.8`-fold filter comparing `25 kPa` simultaneously against *both* `25 kPa/NormOx` and `97 kPa/HypOx` catches **13** genes (`4` root, `9` shoot) that refuse to obey either hypoxia or pure low pressure alone:

  - *Enhanced in `25 kPa`:* `CWLP` (`AT3G22120`) in roots + `5` shoot genes (`2` lipid-transfer proteins).

  - *Repressed in `25 kPa`:* `FSD1` (`AT4G25100`) in roots.

  - *Intermediate:* `2` root + `4` shoot genes suppressed by low total pressure.

**Page 18 — KEGG Pathways: Known vs. Unknown**

- *Panel 1:* `DAVID` (`Benjamini P < 0.05`) scans the gene lists. `97 kPa/HypOx` maps cleanly to textbook pathways: *Glycolysis/Gluconeogenesis* (`5.4%` in roots), *Cysteine & methionine metabolism* (`12.9%` in shoots), *Biosynthesis of secondary metabolites*.

- *Panel 2:* `50 kPa`, `50 kPa/NormOx`, and `25 kPa/NormOx` return **`N/A`**—no canonical KEGG pathway enriched! Even `25 kPa` roots only hit broad *Metabolic pathways* (`15.4%`), while shoots hit *alpha-Linolenic acid metabolism* (`7.3%`).

- *Caption:* "Hypobaria isn't in the evolutionary textbook. Most of its responders don't even have a KEGG map."

**Page 19 — Why Core Drought Genes Stayed Quiet**

- *Panel 1:* Classic dehydration markers `COR15A` and `RD29A` remain silent at `50` and `25 kPa` (unlike earlier `10 kPa` studies), because `95%+` plate humidity and hydrated Phytagel buffer the shoot against lethal water loss.

**Page 20 — `Taqman` Vindication**

- *Panel 1:* `UBQ11` (`AT4G05050`) anchors the `Taqman qRT-PCR` bench (`n = 3`).

- *Panel 2:* `AHB1` and `PDC1` amplify strongly in `50 kPa`, `25 kPa`, and `97 kPa/HypOx` roots—proving that the unadjusted `P < 0.01` microarray call captured real biology that FDR would have erased.

**Page 21 — The Continuous-Light Twist**

- *Panel 1:* Overhead `24 h` lamps (`70–80 µmol m⁻² s⁻¹`, matching ISS growth hardware) keep stomata open and alter organ-specific hypoxia gating—explaining why only `9` of `51` core hypoxia genes overlap between roots and shoots in `97 kPa/HypOx`.

**Page 22 — Hypobaria as a Shield?**

- *Panel 1:* Comparing `25 kPa` against `97 kPa/HypOx`, the negative regulation of oxidative/stress genes by lower total gas pressure hints at a paradox: mild hypobaria can actually *buffer* plants against low-oxygen injury when water is plentiful.

### Act III: Fixation & Data Epilogue (Pages 23–32)

**Page 23 — The Two-Component Verdict**

- *Panel 1:* A Venn diagram splits hypobaria into three forces: (1) **Hypoxia** (the dominant driver at `25 kPa`, rescued by `NormOx`), (2) **Evapotranspiration / Water-flux sensing** (buffered by `RH ≥ 95%`), and (3) **Pure Low Pressure** (novel, unmapped genes like `MYB44`, `CWLP`, `FSD1`).

**Page 24 — Martian & Lunar Greenhouse Economics**

- *Panel 1:* An engineering schematic of a `50 kPa` or `25 kPa` Mars greenhouse: lower internal pressure slashes structural mass and gas-leak rates—and `OSD-134` shows that simply maintaining `pO₂ = 21 kPa` (`NormOx`) and steady root water eliminates most of the transcriptomic stress!

**Page 25 — Passing the Baton to `OSD-136`**

- *Panel 1:* Beside the `10 d` plates sit `5`-day-old `WS` seedlings (`Figure 4` of Zhou et al., 2017)—where `103` genes in `5 d` roots share only `10` responders with `10 d` roots at `50 kPa` (`EPF2`, `SWEET11`). Their `GSE87868` arrays await **Vol. 16 (`OSD-136`)**.

**Page 26 — Archive & Curation (`GLDS-134`)**

- *Panel 1:* Thirty-three `.CEL.gz` files (`GSM2342067`–`GSM2342091+`) enter `PRJNA347979` / `GSE87869` and NASA GeneLab as `OSD-134` (`DOI: 10.26030/wknj-pf59`, updated `28-Aug-2024`).

**Page 27–30 — Epilogue Montage: Breathing Thin Air**

- *Page 27:* `WS-10` roots and shoots stand side by side—proof that two organs of the same plant read the same sky differently.

- *Page 28:* The `LPGC` chamber door swings open, letting `97 kPa` Guelph air rush back in.

- *Page 29:* A Mars dome silhouette glows at dusk, its crops thriving at reduced barometric pressure with `21 kPa` `O₂`.

- *Page 30 (Closing Splash):* Inside a `245 L` chamber, a single *Arabidopsis* `WS` seedling floats above a barometer reading `25 kPa / pO₂ = 21 kPa`, with only `MYB44` glowing softly in its leaves. *Caption:* "Take away the hypoxia, feed the roots, and even a quarter-atmosphere becomes home."

**Pages 31–32 — Mission Debrief Infographic Spread** *(Detailed in Section 4 below.)*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

**Page 31 (Left Spread): Six-Atmosphere Matrix & DEG Breakdown (`10 d` `WS`)**

- **Header:** `OSD-134` (`GLDS-134` | `LPGC` at CESRF, Guelph | `24 h` exposure | `22–24°C` | `CO₂ = 0.05 kPa` | `RH ≥ 95%` | `n = 33` arrays)

- **Treatment & DEG Summary Table (`|FC| ≥ 2`, unadjusted `P < 0.01`):**

  - `97 kPa` (`pO₂ = 21 kPa`): Ambient baseline (`3` root, `3` shoot arrays)

  - `50 kPa` (`pO₂ = 10 kPa`): **112** Root DEGs / **23** Shoot DEGs

  - `50 kPa/NormOx` (`pO₂ = 21 kPa`): **25** Root DEGs / **2** Shoot DEGs (`AT5G18600`, `AT1G23130`)

  - `25 kPa` (`pO₂ = 5 kPa`): **256** Root DEGs / **55** Shoot DEGs

  - `25 kPa/NormOx` (`pO₂ = 21 kPa`): **17** Root DEGs (`n = 1` array) / **1** Shoot DEG (`MYB44`)

  - `97 kPa/HypOx` (`pO₂ = 5 kPa`): **167** Root DEGs / **31** Shoot DEGs

**Page 32 (Right Spread): Hypoxia vs. Pure Pressure Dissection**

- **50 kPa Dissection (`151` total DEGs):**

  - `14` root + `7` shoot genes differ `> 1.8`-fold between `50 kPa` & `50 kPa/NormOx` (only `AT4G33560` shared).

  - Hypoxia markers `PDC1`, `AHB1`, `PCO1` induced at `50 kPa` (qRT-PCR validated vs. `UBQ11`), silenced in `50 kPa/NormOx`.

- **25 kPa Dissection (`372` total DEGs, `34/51` core hypoxia genes):**

  - `LBD41` (`AT3G02550`) up in `25 kPa` & `97 kPa/HypOx`, down in `25 kPa/NormOx` roots.

  - `13` pressure-divergent genes (`> 1.8`-fold vs. *both* `NormOx` & `HypOx`): `CWLP` (`AT3G22120`, Enhanced in root), `FSD1` (`AT4G25100`, Repressed in root).

- **KEGG Enrichment (`Benjamini P < 0.05`):**

  - `97 kPa/HypOx`: Glycolysis/Gluconeogenesis (`5.4%` root), Cysteine/methionine (`12.9%` shoot), Secondary metabolites.

  - `50 kPa`, `50 kPa/NormOx`, `25 kPa/NormOx`: **`N/A`** (novel unmapped pressure response).

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "volume": 15,
  "osdr_accession": "OSD-134",
  "glds_id": "GLDS-134",
  "source_accession": "PRJNA347979 / GSE87869",
  "related_study": "OSD-136 (GSE87868)",
  "payload_mission": "Simulated_Environmental_Factors (Ground Study, CESRF Guelph)",
  "organism": "Arabidopsis thaliana",
  "ecotype": "Wassilewskija (WS), 10-day-old roots & shoots",
  "new_hardware_introduced": [
    "Low Pressure Growth Chambers (LPGC, 245 L, 0.45 x 1.6 m, CESRF Univ. of Guelph)",
    "Affymetrix 3' IVT plus + ATH1 121501 GeneChip",
    "Applied Biosystems Prism 7700 Taqman qRT-PCR (UBQ11 control)"
  ],
  "molecular_characters": {
    "hypoxia_sensitive_50_25kPa": ["PDC1 (AT4G33070)", "AHB1 (AT2G16060)", "PCO1 (AT5G15120)", "ADH1 (AT1G77120)", "PDC2 (AT5G54960)", "ALAAT1 (AT1G17290)"],
    "pressure_specific_or_divergent": ["MYB44 (AT5G67300)", "LBD41 (AT3G02550)", "CWLP (AT3G22120)", "FSD1 (AT4G25100)", "AT4G33560", "TAD3 (AT5G24670)", "SUS1 (AT5G20830)", "AOC1 (AT3G25760)"]
  },
  "continuity_hooks": [
    "Direct setup for Vol. 16 (OSD-136 / Experiment 2), which expands to 5-day-old WS seedlings and developmental-age comparisons (EPF2, SWEET11)",
    "Demonstrates NormOx oxygen supplementation eliminates most hypobaric stress in shoots (only MYB44 at 25 kPa/NormOx)",
    "Unadjusted P < 0.01 justified via Taqman qRT-PCR corroboration of AHB1 and PDC1"
  ]
}

```

Say **"Go on"** whenever you're ready for **Vol. 16 (`OSD-136`)**!
