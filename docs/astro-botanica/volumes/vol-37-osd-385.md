---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 37
title: "The Clean Seed Paradox"
accession: OSD-385
script_status: partial
pages_covered: 30/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 81)
---

> [!NOTE]
> Script status **partial**: 30/32 pages have their own heading.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles*

- **Volume:** 37

- **Title:** *The Clean Seed Paradox*

- **OSDR / GLDS Accession:** `OSD-385` (`GLDS-385` | DOI: `10.26030/esef-7r30`)

- **Chronology Note:** Advances from Volume 36 (`OSD-375`). Studies `OSD-376`–`OSD-384` are non-plant datasets (including `OSD-379` RRRM-1 mouse liver and `OSD-383` ISS *Bacillus pumilus* SAFR-032) and are skipped per series rules.

- **Primary Publication:** Dixit, A. R., Khodadad, C. L. M., Hummerick, M. E., Spern, C. J., Spencer, L. E., Fischer, J. A., Curry, A. B., Gooden, J. L., Maldonado Vazquez, G. J., Wheeler, R. M., Massa, G. D., & Romeyn, M. W. (2021). *Persistence of Escherichia coli in the microbiomes of red Romaine lettuce (Lactuca sativa cv. 'Outredgeous') and mizuna mustard (Brassica rapa var. japonica) - does seed sanitization matter?* *BMC Microbiology*, 21, 289. (PMC8532290)

- **Facility & Conditions:** Ground-based **ISS-simulating controlled-environment growth chambers** at **NASA Kennedy Space Center (KSC)** (`50%` RH, `3,000 ppm` `CO2`, `23°C`, `16 h / 8 h` light/dark fluorescent PAR `200–300 μmol m⁻² s⁻¹`, automated DI bottom watering); `10-cm` (`4-in.`) pots with `~500 mL` greens-grade **Turface** calcined clay (arcillite) + `7.5 g L⁻¹` `18-6-8` `180`-day Nutricote fertilizer; thinned to `1` plant/pot at Day `7` and harvested at Days `7, 14, 21, 28`.

- **Seed Treatments:** Vapor-phase chlorine fuming (`0.5 mL` conc. `HCl` + `30 mL` `5%` sodium hypochlorite bleach, `1 h` exposure, `24 h` off-gassing) vs. unsanitized seeds, each challenged overnight with `10⁶ cells mL⁻¹` *Escherichia coli* `ATCC 11775` (surrogate for `O157:H7`) vs. sterile `TSB` control.

- **Organism:** *Lactuca sativa* cv. 'Outredgeous' (Red Romaine lettuce) leaf (phyllosphere) and root (rhizosphere/endosphere) bacterial microbiomes (`n = 100` samples).

- **Assay / Platform:** Aerobic plate counts (`TSA`, `30°C` `48 h`), `ycfR` `qPCR` (`Roche LightCycler 480`), and `16S rRNA` V4 amplicon sequencing (`Illumina MiSeq` `250-bp` PE; `3,713,493` high-quality non-organellar reads; `QIIME2 v2020.2` / `DADA2` / `SILVA 132`; OSDR reprocessed via `GL-DPPD-7104-A` / `SW_AmpIllumina v1.0.2`).

## 2. Dramatis Personae (Grounded in Study Data)

- **Dr. Anirudha R. Dixit** *(First Author, AMENTUM Services Inc. / LASSO, KSC)* — Microbial ecologist who led the harvesting, `qPCR` tracking, `16S` bioinformatics, and discovery that stripping native seed microbes can backfire against pathogen clearance.

- **Dr. Christina L. M. Khodadad & Mary E. Hummerick** *(Co-Authors, AMENTUM / LASSO, KSC)* — Space-crop food-safety specialists who designed the `E. coli` challenge and `Veggie`-linked microbiome comparisons.

- **Dr. Matthew W. Romeyn, Dr. Gioia D. Massa & Dr. Raymond M. Wheeler** *(NASA KSC)* — Space-agriculture leads overseeing the `Outredgeous` red Romaine lettuce crop-safety program for ISS crews.

- **Cory J. Spern, LaShelle E. Spencer, Jason A. Fischer, Aaron B. Curry, Jennifer L. Gooden & Gretchen J. Maldonado Vazquez** *(KSC LASSO Team)* — Executed horticulture, vapor sanitization, `BeadRupter` tissue disruption, and `MiSeq` library prep.

- ***Escherichia coli* `ATCC 11775` (tracked via `ycfR`)** — The non-pathogenic surrogate for enterohemorrhagic `O157:H7` testing whether a stray human bacterium can survive `28` days from seed to salad harvest.

- **The Native Seed Epiphytes (`Bacillus`, `Massilia`, `Sphingomonas`, `Pantoea`)** — The microscopic gatekeepers living on unsanitized seed coats—wiped out by chlorine gas before launch, or left intact to crowd out invaders.

## 3. 32-Page Chapter Script

### Act I: The Chlorine Requirement (Pages 1–10)

**Page 1 (Splash Page)**

- **Visual:** Inside a `500 mL` glass jar at Kennedy Space Center, `0.5 mL` of concentrated hydrochloric acid meets `30 mL` of `5%` bleach; pale yellow-green chlorine vapor curls around an open petri dish of *Lactuca sativa* cv. 'Outredgeous' seeds, while behind it, rows of crimson-edged Romaine lettuce glow under `3,000 ppm` `CO2` chamber lights.

- **Caption:** *Every seed bound for the International Space Station must first pass through a cloud of chlorine gas. The goal is simple: keep hitchhiking pathogens off the crew's salad. But what happens when you erase a seed's native bodyguards?*

**Page 2**

- **Panel 1:** Gioia Massa and Ray Wheeler inspect ISS `Veggie` harvest protocols: NASA has grown fresh 'Outredgeous' red Romaine lettuce in orbit since `2014`, and every seed is batch-sanitized for `1` hour and off-gassed for `24` hours.

- **Dialogue (Massa):** "Sanitizing knocks culturable seed microbes down below `0.5` CFU per seed. Safe for orbit—unless a human pathogen sneaks in *after* sanitization."

**Page 3**

- **Panel 1:** Christina Khodadad and Mary Hummerick verify the clean slate on `TSA` and `IMA` plates: unsanitized lettuce seeds carry `0.5` CFU/seed; sanitized seeds are sterile (`<0.5` CFU/seed), and `16S` prescreening confirms zero *E. coli*.

- **Panel 2:** Anirudha Dixit sets up four parallel treatments (`50` seeds each): Sanitized + *E. coli*, Sanitized + sterile `TSB`, Unsanitized + *E. coli*, and Unsanitized + sterile `TSB`.

**Page 4**

- **Panel 1:** Inoculation night: `10⁶ cells mL⁻¹` of *E. coli* `ATCC 11775` (surrogate for `O157:H7`) swirls in `5 mL` tubes overnight at room temperature.

- **Panel 2:** At `T = 0`, `ycfR` `qPCR` clocks the starting load: `5.3 × 10⁴` *E. coli* cells per sanitized seed and `8.2 × 10⁴` cells per unsanitized seed.

**Page 5**

- **Panel 1:** LaShelle Spencer plants four seeds per `10-cm` pot into `500 mL` of calcined clay (**Turface**) laced with `7.5 g L⁻¹` `18-6-8` Nutricote fertilizer.

- **Panel 2:** Inside the KSC growth chamber, sensors lock in ISS cabin conditions: **`3,000 ppm` `CO2`**, **`23°C`**, **`50%` relative humidity**, and `200–300 μmol m⁻² s⁻¹` PAR (`16 h / 8 h` cycle).

**Page 6**

- **Panel 1:** Day `7`: Pots are thinned to one plant each, and the first three random plants per group are harvested aseptically—leaves separated from roots into `50 mL` tubes with `3-mm` glass beads.

- **Panel 2:** The `OMNI BeadRupter` shakes the tissues into suspension; `100 μL` aliquots hit `TSA` plates for `48 h` aerobic counts (`APC`), while the remaining pellet goes into `UltraClean` microbial DNA extraction.

**Page 7 (Double-Page Spread Anchor — Page 7)**

- **Visual:** A sweeping 28-day timeline (`Days 7, 14, 21, 28`) traces two diverging lines across red Romaine lettuce leaves (`Fig. 2A`): on leaves from **unsanitized** seeds, the *E. coli* `qPCR` curve plunges to **zero (undetectable)** by Day `21` and stays gone at Day `28`—while on leaves from **sanitized** seeds, *E. coli* lingers all the way to harvest!

- **Caption:** *On Day 28—harvest day—the only lettuce leaves still carrying detectable E. coli DNA were the ones grown from sanitized seeds.*

**Page 8**

- **Panel 1:** Dixit points to the `qPCR` readout (`Fig. 2A`): in sanitized-seed lettuce leaves, *E. coli* fell three orders of magnitude from `3.2 × 10⁵` (Day `7`) to `8.11 × 10²` cells `gfw⁻¹` (Day `28`), whereas unsanitized leaves cleared it completely by Day `21`.

- **Dialogue (Dixit):** "Sanitized seeds started with *fewer* *E. coli* cells at `T = 0`—yet held onto them longer on the edible leaves!"

**Page 9**

- **Panel 1:** Aerobic plate counts (`Fig. 1A`) tell a matching story: at Day `21`, unsanitized + *E. coli* leaves dropped to `4.62 × 10⁴ CFU gfw⁻¹`, significantly lower (`p = 0.03`) than sanitized + *E. coli* leaves.

- **Panel 2:** Down in the roots (`Fig. 1B` & `2B`), total bacteria are `10` to `100×` denser (`3.62 × 10⁷–2.88 × 10⁸ CFU gfw⁻¹` at Day `7`), and *E. coli* survives to Day `28` in *both* sanitized (`1.86 × 10³` cells `gfw⁻¹`) and unsanitized (`4.39 × 10²` cells `gfw⁻¹`) roots.

**Page 10**

- **Panel 1:** The team loads `100` `16S` V4 libraries (`250-bp` paired-end) onto the `Illumina MiSeq`, harvesting `16,518,574` raw reads—filtered through `DADA2` and `SILVA 132` to `3,713,493` pure bacterial sequences after stripping chloroplast and mitochondrial DNA.

- **Dialogue (Romeyn):** "Plate counts showed *how many*. Now `16S` is going to show us *who* evicted *E. coli* on the unsanitized plants."

### Act II: The Gatekeepers of the Leaf and Root (Pages 11–22)

**Page 11**

- **Panel 1:** Heatmaps (`Fig. 3A–B`) unroll across Dixit's screen: in lettuce leaves, four phyla dominate regardless of sanitization—`Proteobacteria`, `Firmicutes`, `Bacteroidetes`, and `Actinobacteria`.

- **Panel 2:** Between Days `7` and `14`, average *E. coli* read abundance drops from `40%` to `15%`, with a `~10%` gap opening between unsanitized and sanitized leaves at Day `14`.

**Page 12**

- **Panel 1:** As *E. coli* retreats between Days `7` and `14`, `Pseudomonas`, `Ralstonia`, and `Acinetobacter` surge and shift; by Days `21–28`, `Sphingomonas`, `Burkholderia`, and `Bradyrhizobium` take over the canopy.

- **Dialogue (Khodadad):** "Look at `Sphingomonas` rising through Day `28`—it's famous on Earth for outcompeting leaf-colonizing bacteria for nutrients."

**Page 13**

- **Panel 1:** Differential abundance plots (`Fig. 4A–B`) spotlight one standout winner in **unsanitized** lettuce leaves: the genus **`Bacillus`** jumps more than **`2`-fold**!

- **Caption:** *On unsanitized seed coats, spore-forming `Bacillus` survived to colonize the emerging leaves—and helped crowd out the intruder.*

**Page 14**

- **Panel 1:** Below ground in the roots (`Fig. 3C–D`), `89%` of bacterial genera are shared between sanitized and unsanitized plants—yet the missing `11%` tells the tale.

- **Panel 2:** **`Bacillus`** and **`Azospirillum`** appear *only* in unsanitized roots (`Hydrotalea` and `Micrococcus` also vanish after chlorine fuming), while **`Sphingobium`** and **`Stenotrophomonas`** appear *exclusively* in sanitized roots!

**Page 15**

- **Panel 1:** Zoom into **`Massilia`**, the fast-growing root-colonizing generalist: abundant on unsanitized, untreated roots, but wiped out by sanitization or suppressed when *E. coli* competes for early root exudates.

- **Dialogue (Hummerick):** "Chlorine fuming didn't make a sterile plant—it just cleared out `Bacillus` and `Massilia` and handed open real estate to opportunists like `Stenotrophomonas`."

**Page 16**

- **Panel 1:** Alpha-diversity (`Shannon Index`, `1.0–4.0`) stays remarkably stable across treatments, yet the *number of genera* nearly **triples** from Day `7` to Day `28` (`~10` leaf genera at Day `7` → `>20` by Day `14–21`).

- **Panel 2:** Meanwhile, in roots, `Actinobacteria` and `Bacteroidetes` steadily climb as the lettuce matures.

**Page 17**

- **Panel 1:** Beta-diversity `PCoA` plots (`Fig. 7A–D`) and `adonis PERMANOVA` (`Table 1`) deliver the overarching law of the lettuce microbiome: **time (`Days After Planting`) beats everything**.

- **Panel 2:** In sanitized leaves, `TimePoint` explains `30.1%` of community variance (`p = 0.001`) vs. `9.3%` for *E. coli*; in unsanitized leaves, `TimePoint` explains `40.1%` vs. `7.6%` for *E. coli*.

**Page 18**

- **Panel 1:** In roots, the pattern tightens: sanitized + *E. coli* roots cluster cleanly by age (`TimePoint R² = 0.348`, *E. coli* `R² = 0.198`, `p = 0.001`), while unsanitized roots show `TimePoint R² = 0.462` vs. *E. coli* `R² = 0.126`.

- **Dialogue (Dixit):** "A `28`-day plant isn't a static dish. Its microbiome matures in waves—and `Time` drives up to `46%` of the turnover."

**Page 19**

- **Panel 1:** Across all `100` lettuce samples, `Supplemental Fig. S3` distills the **`27%` core microbiome**—genera that persist across leaves, roots, sanitized, and unsanitized plants alike.

- **Panel 2:** Visual contrast: `Pantoea` and `Pseudomonas` rise in roots while `Escherichia-Shigella` fades below `1%` of total `16S` reads by Day `28`.

**Page 20**

- **Panel 1:** Wheeler and Massa examine the food-safety takeaway at KSC: even without visible disease or stunted lettuce growth, *E. coli* clung to sanitized leaves at `811` cells `gfw⁻¹` on harvest day—and `1,860` cells `gfw⁻¹` inside roots.

### Act III: Smarter Sanitation for Space Farms (Pages 21–30)

**Page 21**

- **Panel 1:** Dixit sketches a new paradigm for NASA's `Veggie` and `Advanced Plant Habitat` teams: instead of scorched-earth sterilization alone, pair seed sanitization with **beneficial biocontrol inoculants** (`Bacillus`, `Sphingomonas`, `Pantoea`).

- **Dialogue (Massa):** "If we strip the seed coat to block plant pathogens before launch, we may need to give the crop back a hand-picked microbiome once it's in orbit."

**Page 22**

- **Panel 1:** Side-by-side comparison of **leaf vs. root risk**: roots act as a stubborn reservoir (`10²–10³` *E. coli* `gfw⁻¹` at Day `28`), reinforcing why astronauts harvest leaves cleanly above the `Turface` pillow wick.

**Page 23**

- **Panel 1:** The team double-checks environmental logs (`3,000 ppm` `CO2`, `23°C`, `50%` RH)—confirming that community shifts came from plant development, sanitization, and microbial competition, not chamber drift.

**Page 24**

- **Panel 1:** Data curation: all `100` red Romaine lettuce `16S` datasets are uploaded to NASA OSDR as `OSD-385` (`GLDS-385`, DOI `10.26030/esef-7r30`), processed with `SW_AmpIllumina v1.0.2`.

**Page 25**

- **Panel 1:** A bridge to the `VEG-03` flight studies: the same KSC team compares these ground-chamber lettuce microbiomes with real ISS `Veggie` pillows returned from orbit.

**Page 26**

- **Panel 1:** Visual metaphor: a pristine, chlorine-bleached lettuce leaf stands vulnerable like an empty house with unlocked doors, while an unsanitized leaf bustles with `Bacillus` and `Sphingomonas` tenants leaving zero room for *E. coli*.

**Page 27**

- **Panel 1:** The `12`-author KSC team reviews the `BMC Microbiology` (`2021`) proofs, highlighting how `qPCR` + `APC` + `16S` together caught a persistence signal that plate counts alone might have missed.

**Page 28**

- **Panel 1:** Recap of the three-way interplay on 'Outredgeous' lettuce: `Seed Sanitization` (removes `Bacillus`/`Massilia`/`Azospirillum`) × `Plant Age` (`30–46%` beta-diversity driver) × `Tissue Compartment` (`roots > leaves`).

**Page 29**

- **Panel 1:** Next to the red Romaine pots inside the same KSC simulator, a second tray of leafy greens—**mizuna mustard (`Brassica rapa var. japonica`)**—awaits its own `100`-sample verdict.

**Page 30 (Final Story Page)**

- **Panel 1:** A vibrant head of crimson 'Outredgeous' lettuce glows under `200–300 μmol m⁻² s⁻¹` light, surrounded by a halo of friendly `Proteobacteria` and `Firmicutes` silhouettes.

- **Caption:** *On Earth or in orbit, a crop is never truly alone. Sometimes, the cleanest seed grows the loneliest—and most vulnerable—leaf.*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31): Simulated ISS Cultivation & Sanitization Protocol

- **Study Identity:** `OSD-385` (`GLDS-385` | DOI: `10.26030/esef-7r30`), *BMC Microbiology* 2021 (PMC8532290).

- **Crop & Substrate:** *Lactuca sativa* cv. 'Outredgeous' (red Romaine lettuce), `4` seeds/pot in `10-cm` pots with `~500 mL` calcined clay (**Turface**) + `7.5 g L⁻¹` `18-6-8` `180`-day Nutricote; thinned to `1` plant/pot at Day `7`; harvested at Days `7, 14, 21, 28` (`n = 3` plants/timepoint, separated into leaf & root; `100` OSDR samples).

- **ISS-Simulated Chamber (KSC):** `23°C`, `50%` RH, `3,000 ppm` `CO2`, `16 h / 8 h` photoperiod (`200–300 μmol m⁻² s⁻¹` PAR), automated DI bottom watering.

- **Seed Sanitization & Challenge:** Chlorine fuming (`0.5 mL` conc. `HCl` + `30 mL` `5%` bleach, `1 h`, `24 h` off-gas; `<0.5 CFU/seed` vs. `0.5 CFU/seed` unsanitized) × overnight inoculation in `10⁶ cells mL⁻¹` *E. coli* `ATCC 11775` (surrogate for `O157:H7`) vs. sterile `TSB`.

### Right Spread (Page 32): *E. coli* Persistence & Microbiome Shifts

- **Culture & `qPCR` (`ycfR`) Readouts:**

  - `T = 0` seed load: `5.3 × 10⁴` (sanitized) vs. `8.2 × 10⁴` (unsanitized) *E. coli* cells/seed.

  - **Lettuce Leaves:** On **unsanitized** seeds, *E. coli* fell to **undetectable** by Days `21` & `28` (`qPCR`), with lower Day `21` `APC` (`4.62 × 10⁴ CFU gfw⁻¹`, `p = 0.03`). On **sanitized** seeds, *E. coli* persisted to **Day `28`** (`3.2 × 10⁵` at Day `7` → `8.11 × 10²` cells `gfw⁻¹` at Day `28`).

  - **Lettuce Roots:** Higher total counts (`3.62 × 10⁷–2.88 × 10⁸ CFU gfw⁻¹` at Day `7`); *E. coli* persisted to Day `28` in both sanitized (`1.86 × 10³` cells `gfw⁻¹`) and unsanitized (`4.39 × 10²` cells `gfw⁻¹`).

- **`16S rRNA` V4 Sequencing (`Illumina MiSeq`, `3,713,493` HQ reads; `QIIME2`/`DADA2`):**

  - **Core & Phyla:** `Proteobacteria`, `Firmicutes`, `Bacteroidetes`, `Actinobacteria` (`27%` core genera across lettuce compartments; `89%` root genera shared).

  - **Sanitization Losses & Gains:** Unsanitized plants uniquely retained `Bacillus` (`>2`-fold higher in leaves), `Azospirillum`, `Hydrotalea`, `Micrococcus`, and abundant `Massilia`; sanitized *E. coli*-treated roots uniquely hosted `Sphingobium` and `Stenotrophomonas`.

  - **Beta-Diversity (`PERMANOVA adonis`):** **Time (`DAP`)** explained `30.1%–46.2%` of variance (`p = 0.001`), far exceeding *E. coli* treatment (`7.6%–19.8%`).

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "series_title": "Roots in Orbit: The NASA OSDR Plant Chronicles",
  "volume": 37,
  "osdr_accession": "OSD-385",
  "glds_accession": "GLDS-385",
  "doi": "10.26030/esef-7r30",
  "skipped_accessions": [
    "OSD-376",
    "OSD-377",
    "OSD-378",
    "OSD-379",
    "OSD-380",
    "OSD-381",
    "OSD-382",
    "OSD-383",
    "OSD-384"
  ],
  "organism": "Lactuca sativa cv. 'Outredgeous' (Red Romaine lettuce) phyllosphere & rhizosphere microbiomes",
  "environment_or_mission": "KSC ISS-Simulating Growth Chambers (3,000 ppm CO2, 23C, 50% RH, Turface/Nutricote, chlorine-fumed vs unsanitized seeds + E. coli ATCC 11775 challenge)",
  "assay": "16S rRNA V4 amplicon sequencing (Illumina MiSeq, n = 100), ycfR qPCR, and TSA aerobic plate counts",
  "key_molecular_actors": [
    "E. coli ATCC 11775 (ycfR)",
    "Bacillus",
    "Massilia",
    "Sphingomonas",
    "Azospirillum",
    "Stenotrophomonas",
    "Sphingobium",
    "Pantoea"
  ],
  "core_themes_added": [
    "Seed sanitization paradox: chlorine fuming enables longer E. coli persistence on lettuce leaves (Day 28 vs undetectable by Day 21)",
    "Loss of native seed-coat competitors (Bacillus, Massilia, Azospirillum) after sanitization",
    "Plant age (DAP) dominates microbiome beta-diversity (30-46%) over pathogen challenge"
  ],
  "continuity_hook_next": {
    "next_volume": 38,
    "next_osdr": "OSD-386",
    "next_title_hint": "Mizuna mustard (Brassica rapa var. japonica) seed sanitization & E. coli persistence (sister dataset to OSD-385)"
  }
}

```

Say **"Go on"** when you're ready for **Volume 38**.
