---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 38
title: "The Mustard's Quiet Border"
accession: OSD-386
script_status: partial
pages_covered: 29/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 83)
---

> [!NOTE]
> Script status **partial**: 29/32 pages have their own heading.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles*

- **Volume:** 38

- **Title:** *The Mustard's Quiet Border*

- **OSDR / GLDS Accession:** `OSD-386` (Version 5) / `GLDS-386` | **DOI:** `10.26030/thwa-cn80`

- **Chronology Note:** Follows Volume 37 (`OSD-385`, red Romaine lettuce) directly with zero skipped accessions (`skipped_accessions: []`). While `OSD-385` tracked *Lactuca sativa* cv. 'Outredgeous' in the paired seed-sanitization study, `OSD-386` captures the companion crop—mizuna mustard—grown under identical ISS-simulated chamber conditions.

- **Primary Publication:** Dixit, A. R., Khodadad, C. L. M., Hummerick, M. E., Spern, C. J., Spencer, L. E., Fischer, J. A., Curry, A. B., Gooden, J. L., Maldonado Vazquez, G. J., Wheeler, R. M., Massa, G. D., & Romeyn, M. W. (2021). *Persistence of Escherichia coli in the microbiomes of red Romaine lettuce (Lactuca sativa cv. 'Outredgeous') and mizuna mustard (Brassica rapa var. japonica) - does seed sanitization matter?* *BMC Microbiology*, 21, 289. DOI: `10.1186/s12866-021-02345-5` | PMID: `34686151` | `PMC8532290`

- **Facility / Mission & Conditions:** Kennedy Space Center (KSC) controlled-environment growth chambers (`Simulated_Environmental_Factors`, ground study) simulating ISS parameters (`23°C`, `50%` RH, `3,000 ppm` `CO2`, `16 h / 8 h` light/dark, fluorescent PAR `200–300 μmol m⁻² s⁻¹`, automated DI bottom watering); `4` seeds/pot in `10-cm` (`4-in.`) square pots containing `~500 mL` greens-grade **Turface** calcined clay (arcillite) with `7.5 g L⁻¹` `18-6-8` `180`-day Nutricote; thinned to `1` plant/pot at Day `7`; `3` random plants harvested at Days `7, 14, 21, 28` and separated into leaf and root compartments.

- **Organism / Genotypes:** *Brassica rapa* var. *japonica* (mizuna mustard, Johnny's Select Seeds, Fairfield, Maine, USA; `Characteristics: Host Strain = japonica`), inoculated with *Escherichia coli* `ATCC 11775` (non-pathogenic surrogate for `O157:H7`).

- **Assay / Platform:** `n = 100` samples across `16S rRNA` V4 amplicon sequencing (`Illumina MiSeq` `250-bp` paired-end; `QIIME2 v2020.2`, `DADA2`, `SILVA 132`; OSDR `GL-DPPD-7104-A` / `SW_AmpIllumina v1.1.1`), Aerobic Plate Counts (`APC` on TSA at `30°C` for `48 h`), and `ycfR` single-copy gene `qPCR` (`Roche LightCycler 480`) (`OSD-386`; `PMC8532290`).

## 2. Dramatis Personae (Grounded in Study Data)

- **Mizuna Mustard (*Brassica rapa* var. *japonica*):** A serrated-leaf brassica whose phyllosphere and rhizosphere host a `24.5%` core microbiome (`Fig. S3B`) and a far steadier leaf community than red Romaine lettuce—yet one that allows *E. coli* `ycfR` DNA to linger to Day `28` regardless of whether its seeds were chlorine-fumed (`PMC8532290`).

- **The Vapor-Phase Sanitization Protocol:** `0.5 mL` concentrated `HCl` mixed with `30 mL` `5%` sodium hypochlorite bleach inside a `500 mL` jar for `1 h`, followed by `24 h` laminar-hood off-gassing (`75–100` seeds/batch). Reduces native surface load on mizuna from `1.0 CFU/seed` down to `<0.5 CFU/seed` (below detection) before `50` seeds/group are submerged overnight at room temperature in `5 mL` of `10⁶ cells mL⁻¹` *E. coli* `ATCC 11775` vs. sterile `TSB` (`PMC8532290`).

- ***E. coli* `ATCC 11775` (The Persistent Guest):** Tracked via `ycfR` `qPCR` from `T = 0` (`4.3 × 10⁴` cells/seed on sanitized mizuna vs. `2.5 × 10⁴` cells/seed on unsanitized mizuna). Surges to `44%` relative `16S` abundance in both leaves and roots at Day `7`, then collapses to `<1%` by Day `28`—yet unlike in unsanitized lettuce, never vanishes completely from either leaf treatment (`PMC8532290`).

- **The Unsanitized Leaf Watchers (*Dyella* & *Rhodanobacter*):** Genera exclusive to unsanitized mizuna leaves, holding ground alongside `>78%` shared leaf taxa (`PMC8532290`).

- **The Sanitized Leaf Colonists (*Pandoraea* & *Sphingobium*):** Opportunistic genera exclusive to sanitized mizuna leaves after chlorine fuming clears the seed coat (`PMC8532290`).

- **The Root Symbionts (*Patescibacteria*, *Massilia*, *Azospirillum*, *Allorhizobium-Neorhizobium-Pararhizobium-Rhizobium*):** Belowground inhabitants of the Turface arcillite matrix where `~73%` of root taxa are shared (`13%` exclusive to each sanitization state), and where unsanitized non-treated roots nearly triple their genus count from Day `7` to Day `28` (`PMC8532290`).

## 3. 32-Page Chapter Script

### Act I: The Second Seed Jar (Pages 1–10)

**Page 1 — Splash Page**

- **Panel 1 (Full-Page Splash):** Inside the Kennedy Space Center controlled-environment chamber, rows of serrated green *Brassica rapa* var. *japonica* rosettes fan out from `10-cm` square pots filled with dark Turface calcined clay. Above them, `200–300 μmol m⁻² s⁻¹` fluorescent light bathes the leaves in an ISS-simulated haze of `3,000 ppm` `CO2`, `23°C`, and `50%` RH. Overlaid in crisp ink: *"VOLUME 38: THE MUSTARD'S QUIET BORDER — OSD-386."*

- **Caption:** Same chamber. Same chlorine jar. Different host.

**Page 2 — The Jar and the Baseline**

- **Panel 1 (Wide):** A laminar flow hood bench. A `500 mL` glass jar holds `75–100` tiny round mizuna seeds beside two graduated pipettes: `0.5 mL` concentrated `HCl` and `30 mL` `5%` sodium hypochlorite bleach.

- **Panel 2 (Inset):** Macro view of a TSA plate before and after the `1 h` vapor-phase fuming and `24 h` off-gas: unsanitized mizuna yields a solitary `1.0 CFU/seed` colony; sanitized mizuna reads `<0.5 CFU/seed`—below detection.

- **Panel 3 (Medium):** `50` seeds per group drop into `5 mL` of `10⁶ cells mL⁻¹` *E. coli* `ATCC 11775` (or sterile `TSB` control) overnight at room temperature.

- **Dialogue (Narrator):** *"In lettuce, stripping the seed coat changed who won the leaf. In mizuna, the baseline starts even quieter."*

**Page 3 — Zero Hour on the Seed Coat**

- **Panel 1 (Split Left):** `Roche LightCycler 480` `qPCR` readout targeting the single-copy `ycfR` gene at `T = 0` on sanitized mizuna: `4.3 × 10⁴` *E. coli* cells/seed.

- **Panel 2 (Split Right):** Unsanitized mizuna at `T = 0`: `2.5 × 10⁴` *E. coli* cells/seed.

- **Panel 3 (Wide):** Four seeds settle into `~500 mL` of greens-grade Turface arcillite charged with `7.5 g L⁻¹` `18-6-8` `180`-day Nutricote, watered automatically from below with DI water.

**Page 4 — Thinning the Crowd (Day 7)**

- **Panel 1 (Medium):** At Day `7`, gloved hands thin each `10-cm` pot from `4` seedlings down to `1` plant, then select `3` random plants for the first harvest, dividing them cleanly into leaf and root.

- **Panel 2 (Close-up):** TSA Aerobic Plate Counts (`30°C`, `48 h`) on Day `7` leaves: unsanitized non-treated leaves sit at `7.9 × 10⁵ CFU gfw⁻¹`, while sanitized non-treated leaves spike to `1.31 × 10⁷ CFU gfw⁻¹` (`p = 0.0095`).

- **Caption:** A Day `7` bloom on the sanitized leaf—loud, sudden, and temporary.

**Page 5 — The Forty-Four Percent Wave**

- **Panel 1 (Wide):** `Illumina MiSeq` `250-bp` paired-end reads (`17,991,042` non-chimeric reads overall, yielding `3,691,028` high-quality non-chloroplast, non-mitochondrial sequences for mizuna) stream through `QIIME2 v2020.2` (`DADA2`, `SILVA 132`).

- **Panel 2 (Visual Metaphor):** On Day `7`, *E. coli* banners flood both compartments—`44%` relative abundance in mizuna leaves and `44%` in mizuna roots.

- **Panel 3 (Medium):** Beside them, `Pseudomonas`, `Acinetobacter`, `Ralstonia`, and `Stenotrophomonas` jockey for position on the leaf surface.

**Page 6 — Below the Arcillite**

- **Panel 1 (Deep Cutaway):** Beneath the Turface granules, Day `7` mizuna roots carry `1.14 × 10⁸` to `6.07 × 10⁹ CFU gfw⁻¹` on TSA plates.

- **Panel 2 (Close-up):** Five dominant phyla—`Proteobacteria`, `Firmicutes`, `Actinobacteria`, `Cyanobacteria`, and `Bacteroidetes`—weave around the root hairs, joined by the enigmatic, ultra-small symbiotic candidate superphylum `Patescibacteria`.

**Page 7 — Double-Page Spread Anchor: The Divided Canopy and the Core**

- **Pages 7–8 (Double-Page Spread):** A sweeping cross-section of a mature mizuna plant split between **Unsanitized** (left) and **Sanitized** (right) histories. In the center stem, a glowing `24.5%` **Core Microbiome** bridge links leaf and root across treatments. On the left leaf (`>78%` shared taxa), **`Dyella`** and **`Rhodanobacter`** stand watch exclusively; on the right leaf, **`Pandoraea`** and **`Sphingobium`** take root in the cleared space. Beneath the soil line, `~73%` of root taxa overlap, leaving `13%` exclusive to each side.

- **Caption:** *"Not a blank slate—a borderland where 24.5% of the community holds across every pot."*

**Page 9 — The Middle Weeks (Days 14–21)**

- **Panel 1 (Three-Beat Strip):** Day `14` to Day `21`. In leaves, `Sphingomonas` climbs steadily through Day `21`, while `Acinetobacter` and `Bacillus` gain ground.

- **Panel 2 (Wide):** In roots, `Massilia`, `Azospirillum`, and `Allorhizobium-Neorhizobium-Pararhizobium-Rhizobium` shift dynamically through Days `7–14`, remodeling the rhizosphere around the `180`-day Nutricote pellets.

**Page 10 — The Lettuce Contrast**

- **Panel 1 (Split Memory):** A ghosted panel recalls Volume 37 (`OSD-385`): unsanitized red Romaine lettuce leaves clearing *E. coli* `ycfR` below detection by Day `21`.

- **Panel 2 (Present):** Cut back to Day `21` mizuna leaves. The `ycfR` fluorescence curve refuses to flatline.

- **Dialogue (Narrator):** *"Lettuce closed its door at Day 21. Mizuna leaves the latch undone."*

### Act II: The Day 28 Reckoning (Pages 11–22)

**Page 11 — Time Over Treatment**

- **Panel 1 (Data Mural):** `Bray-Curtis PERMANOVA` (`adonis`) ordination plots unfold across the wall. For **Sanitized Leaves** (PCoA axes `48.2%`), `TimePoint` commands `R² = 0.426` (`p = 0.001`), while *E. coli* accounts for `R² = 0.064` (`p = 0.012`) and their interaction `R² = 0.126` (`p = 0.043`).

- **Panel 2 (Data Mural):** For **Unsanitized Leaves** (PCoA axes `44.7%`), `TimePoint` holds `R² = 0.422` (`p = 0.001`), *E. coli* `R² = 0.095` (`p = 0.001`), and Combined `R² = 0.138` (`p = 0.004`).

**Page 12 — Steady Shannon**

- **Panel 1 (Medium):** Leaf `Shannon Index` (`1.0–4.0`) stays statistically flat across time and sanitization (`p > 0.05`).

- **Panel 2 (Close-up):** `Actinobacteria` and `Bacteroidetes` thicken along the leaf veins as `Firmicutes` quietly recedes.

- **Caption:** Mature leaves don't panic—they simply age.

**Page 13 — The Root Explosion**

- **Panel 1 (Wide):** Belowground, the story flips. In unsanitized non-treated roots, the number of detected genera nearly **triples** from Day `7` to Day `28` (and roughly **doubles** in unsanitized + *E. coli* roots).

- **Panel 2 (Chart Inset):** Root `PERMANOVA` shifts balance: **Sanitized Roots** (PCoA `55.3%`) show `TimePoint R² = 0.293` (`p = 0.001`), *E. coli* `R² = 0.269` (`p = 0.001`), Combined `R² = 0.175` (`p = 0.001`); **Unsanitized Roots** (PCoA `44%`) show `TimePoint R² = 0.293` (`p = 0.001`), *E. coli* `R² = 0.160` (`p = 0.001`), Combined `R² = 0.218` (`p = 0.001`).

**Page 14 — The Plate Count Plunge (Day 28 Leaves)**

- **Panel 1 (Three-Column Plate Comparison):** Day `28` leaf `APC` plates side by side:

  - Unsanitized, non-treated: `2.23 × 10⁵ CFU gfw⁻¹` (highest).

  - Unsanitized + *E. coli*: `2.2 × 10⁴ CFU gfw⁻¹`.

  - Sanitized + *E. coli*: `1.05 × 10² CFU gfw⁻¹` (lowest, significantly lower at `p = 0.03` than unsanitized + *E. coli*).

- **Dialogue (Researcher):** *"Look at the total culturable load on those sanitized, inoculated leaves—three orders of magnitude lower than the unsanitized control."*

**Page 15 — The Root Plate Drop**

- **Panel 1 (Wide):** Day `28` root `APC` plates tell the same stark story: sanitized + *E. coli* roots drop to `3.62 × 10³ CFU gfw⁻¹`, significantly lower than every other root treatment.

- **Panel 2 (Close-up):** A researcher circles the number in red ink, then turns toward the `LightCycler 480` screen.

**Page 16 — What the Plates Couldn't See**

- **Panel 1 (Wide):** On the `qPCR` screen, `ycfR` tells a different truth. At Day `28`, mizuna leaves still carry *E. coli* DNA in **both** treatments:

  - Sanitized leaves: declined from `4.77 × 10⁷` to `2.90 × 10² cells gfw⁻¹`.

  - Unsanitized leaves: declined from `8.34 × 10⁶` to `2.9 × 10² cells gfw⁻¹`.

- **Panel 2 (Close-up):** No significant difference between sanitization treatments. Both lines converge on `~2.9 × 10² cells gfw⁻¹`.

**Page 17 — Deep Roots, Lingering Traces**

- **Panel 1 (Wide):** In Day `28` roots, `ycfR` also persists in both groups:

  - Sanitized roots: declined from `1.78 × 10⁸` to `7.05 × 10⁴ cells gfw⁻¹`.

  - Unsanitized roots: declined from `7.96 × 10⁸` to `2.3 × 10² cells gfw⁻¹`.

- **Panel 2 (Medium):** Across `16S` sequencing, `Escherichia-Shigella` and `Pseudomonas` have fallen from their `44%` Day `7` peak to `<1%` by Day `28`—a whisper in the reads, yet still present.

**Page 18 — Two Ways to Read a Quiet Leaf**

- **Panel 1 (Split):** Left: `APC` (`1.05 × 10² CFU gfw⁻¹`) shows total culturable aerobes suppressed when sanitization meets *E. coli* inoculation. Right: `ycfR` `qPCR` (`2.90 × 10² cells gfw⁻¹`) confirms *E. coli* itself was not eradicated.

- **Caption:** Lower total culturable bacteria did not mean *E. coli* was gone.

**Page 19 — The Specialists Hold Fast**

- **Panel 1 (Medium):** `Dyella` and `Rhodanobacter` linger in the unsanitized leaf crevices; `Pandoraea` and `Sphingobium` patrol the sanitized lamina.

- **Panel 2 (Close-up):** Neither guild completely expels the intruder, unlike unsanitized lettuce leaves that shut down *E. coli* by Day `21`.

**Page 20 — The Host Decides**

- **Panel 1 (Wide):** Two plant silhouettes stand side by side: *Lactuca sativa* cv. 'Outredgeous' (`OSD-385`) and *Brassica rapa* var. *japonica* (`OSD-386`).

- **Dialogue (Narrator):** *"Same chamber. Same `3,000 ppm` `CO2`. Same `10⁶ cells mL⁻¹` challenge. Yet host architecture—leaf chemistry, root exudates, native guild—rewrote the outcome."*

**Page 21 — The `Patescibacteria` Signal**

- **Panel 1 (Microscopic):** Tiny `Patescibacteria` cells cling to larger bacterial hosts along the mizuna root surface, thriving inside a Turface matrix that `Veggie` crews will water in orbit.

- **Caption:** Even in sterile calcined clay, the root builds a layered city.

**Page 22 — Closing the Chamber**

- **Panel 1 (Wide):** The KSC growth chamber lights power down at the end of the `16 h` photoperiod. The `100`-sample dataset (`SW_AmpIllumina v1.1.1`) locks into NASA OSDR under `OSD-386`.

### Act III: Aftermath & Orbital Consequence (Pages 23–30)

**Page 23 — What Sanitization Actually Buys You**

- **Panel 1 (Medium):** On the lab whiteboard, two columns compare `1.0 CFU/seed` (unsanitized) vs. `<0.5 CFU/seed` (chlorine-fumed).

- **Dialogue (Flight Microbiologist):** *"Seed sanitization cuts native load at launch—and in mizuna, sanitization plus *E. coli* drove Day `28` total `APC` down to `1.05 × 10² CFU gfw⁻¹`. But if a pathogen slips past the hatch after germination, chlorine fuming alone won't guarantee clearance."*

**Page 24 — The Two-Crop Lesson**

- **Panel 1 (Wide):** Side-by-side summary of `OSD-385` (lettuce) and `OSD-386` (mizuna):

  - Lettuce: unsanitized leaves cleared *E. coli* by Day `21`; sanitized leaves held it to Day `28`.

  - Mizuna: **both** sanitized and unsanitized leaves held *E. coli* `ycfR` to Day `28` (`2.90 × 10²` / `2.9 × 10² cells gfw⁻¹`).

**Page 25 — The `24.5%` Anchor**

- **Panel 1 (Diagrammatic):** The `24.5%` core microbiome of mizuna glows as a stabilizing lattice—explaining why leaf `Shannon` diversity resisted collapse (`p > 0.05`) even under `44%` Day `7` *E. coli* dominance.

**Page 26 — Time as the Great Equalizer**

- **Panel 1 (Wide):** Across all four `PERMANOVA` models, `TimePoint` (`R² = 0.293–0.426`, `p = 0.001`) outweighs or rivals *E. coli* exposure (`R² = 0.064–0.269`), pulling the community toward a mature Day `28` state where *E. coli* shrinks to `<1%`.

**Page 27 — Protocol for the ISS Galley**

- **Panel 1 (Medium):** Crew food-safety checklist: vapor-phase chlorine sanitization reduces baseline seed bioburden (`<0.5 CFU/seed`), while `28`-day harvest hygiene and post-harvest sanitization remain essential because crop species differ in how long a contaminant persists.

**Page 28 — Archiving the Sequence**

- **Panel 1 (Wide):** `3,691,028` filtered mizuna `16S` sequences join `OSD-385` in the NASA Open Science Data Repository, paired with `GL-DPPD-7104-A` amplicon pipelines for future flight-crop comparisons.

**Page 29 — Looking Up from the Chamber**

- **Panel 1 (Wide):** Through the KSC lab window, a rocket contrail rises in the distance—shifting the chronicle's gaze from controlled ground chambers back to the edge of space.

**Page 30 — Next Launch Window**

- **Panel 1 (Final Splash):** Two *Arabidopsis thaliana* genotypes—`WS` and `sku5`—wait inside flight hardware bound for suborbital microgravity aboard **Blue Origin `NS-12`** and **Virgin Galactic `VP-03`**.

- **Caption:** Next: `OSD-406`. Two suborbital flights, two vehicles, and the first transcriptomic test of *Arabidopsis* across commercial spaceflight profiles.

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31): Study Architecture & Culture vs. `qPCR` Persistence

- **Experiment Design (`OSD-386` / `PMC8532290`):**

  - **Host:** *Brassica rapa* var. *japonica* (mizuna mustard, Johnny's Select Seeds); `n = 100` OSDR samples.

  - **Chamber:** KSC ISS-simulated (`23°C`, `50%` RH, `3,000 ppm` `CO2`, `16 h / 8 h` light/dark, `200–300 μmol m⁻² s⁻¹` PAR), `10-cm` pots, `~500 mL` greens-grade Turface + `7.5 g L⁻¹` `18-6-8` `180`-day Nutricote, thinned to `1` plant/pot at Day `7`, harvested (`3` plants/timepoint) at Days `7, 14, 21, 28`.

  - **Sanitization & Challenge:** Vapor-phase chlorine (`0.5 mL` conc. `HCl` + `30 mL` `5%` NaOCl, `1 h`, `24 h` off-gas) dropped seed load from `1.0 CFU/seed` to `<0.5 CFU/seed`; `50` seeds/group inoculated overnight in `5 mL` of `10⁶ cells mL⁻¹` *E. coli* `ATCC 11775` vs. sterile `TSB`.

- **Day `0` to Day `28` Dynamics (Culture `APC` vs. `ycfR` `qPCR`):**

| Compartment & Treatment | `T = 0` `qPCR` (`cells/seed`) | Day `7` `APC` (`CFU gfw⁻¹`) | Day `28` `APC` (`CFU gfw⁻¹`) | Day `7` → Day `28` `qPCR` (`cells gfw⁻¹`) |
|---|---|---|---|---|
| **Leaves (Sanitized + *E. coli*)** | `4.3 × 10⁴` | — | `1.05 × 10²` (`p = 0.03` vs. unsan. + *E. coli*) | `4.77 × 10⁷` → `2.90 × 10²` |
| **Leaves (Unsanitized + *E. coli*)** | `2.5 × 10⁴` | — | `2.2 × 10⁴` | `8.34 × 10⁶` → `2.9 × 10²` |
| **Leaves (Sanitized, Non-treated)** | — | `1.31 × 10⁷` (`p = 0.0095`) | Lower than unsan. non-treated | — |
| **Leaves (Unsanitized, Non-treated)** | — | `7.9 × 10⁵` | `2.23 × 10⁵` (highest) | — |
| **Roots (Sanitized + *E. coli*)** | `4.3 × 10⁴` | `1.14 × 10⁸`–`6.07 × 10⁹` (range) | `3.62 × 10³` (lowest root) | `1.78 × 10⁸` → `7.05 × 10⁴` |
| **Roots (Unsanitized + *E. coli*)** | `2.5 × 10⁴` | `1.14 × 10⁸`–`6.07 × 10⁹` (range) | Higher than sanitized + *E. coli* | `7.96 × 10⁸` → `2.3 × 10²` |

### Right Spread (Page 32): `16S rRNA` Community Structure & `PERMANOVA` Drivers

- **Sequencing & Core Microbiome:**

  - `Illumina MiSeq` (`250-bp` PE, `16S` V4, `QIIME2 v2020.2` / `DADA2` / `SILVA 132`): `17,991,042` total non-chimeric reads → `3,691,028` high-quality non-chloroplast/non-mitochondrial mizuna sequences.

  - **Core:** `24.5%` shared across mizuna compartments (`Fig. S3B`). Dominant phyla: `Proteobacteria`, `Firmicutes` (declined over time), `Actinobacteria` (increased), `Cyanobacteria`, `Bacteroidetes` (increased), plus root-associated `Patescibacteria`.

  - **Leaf Taxa (`>78%` shared):** `Dyella` & `Rhodanobacter` exclusive to unsanitized leaves; `Pandoraea` & `Sphingobium` exclusive to sanitized leaves. *E. coli* dropped from `44%` (Day `7`) to `<1%` (Day `28`); `Acinetobacter` & `Bacillus` increased while `Pseudomonas` & `Escherichia-Shigella` decreased; `Sphingomonas` rose through Day `21`.

  - **Root Taxa (`~73%` shared, `13%` exclusive each):** *E. coli* fell from `44%` (Day `7`) to `<1%` (Day `28`); Days `7–14` shifts in `Massilia`, `Allorhizobium-Neorhizobium-Pararhizobium-Rhizobium`, `Azospirillum`, `Pseudomonas`, `Acinetobacter`. Genus count nearly tripled in unsanitized non-treated roots (`~2×` in unsanitized + *E. coli*) from Day `7` to `28`.

- **Beta-Diversity (`Bray-Curtis PERMANOVA adonis`, Table 1):**

| Mizuna Group | `TimePoint R²` (`p`) | `*E. coli* R²` (`p`) | `Combined R²` (`p`) | PCoA Variance |
|---|---|---|---|---|
| **Leaves (Sanitized)** | `0.426` (`0.001`) | `0.064` (`0.012`) | `0.126` (`0.043`) | `48.2%` |
| **Leaves (Unsanitized)** | `0.422` (`0.001`) | `0.095` (`0.001`) | `0.138` (`0.004`) | `44.7%` |
| **Roots (Sanitized)** | `0.293` (`0.001`) | `0.269` (`0.001`) | `0.175` (`0.001`) | `55.3%` |
| **Roots (Unsanitized)** | `0.293` (`0.001`) | `0.160` (`0.001`) | `0.218` (`0.001`) | `44%` |

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "series_title": "Roots in Orbit: The NASA OSDR Plant Chronicles",
  "volume_added": 38,
  "osdr_accession": "OSD-386",
  "glds_accession": "GLDS-386",
  "doi": "10.26030/thwa-cn80",
  "osdr_url": "https://osdr.nasa.gov/bio/repo/data/studies/OSD-386",
  "primary_publication": {
    "citation": "Dixit et al. (2021), BMC Microbiology 21:289",
    "doi": "10.1186/s12866-021-02345-5",
    "pmid": "34686151",
    "pmcid_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8532290/"
  },
  "skipped_accessions": [],
  "organism": "Brassica rapa var. japonica (mizuna mustard)",
  "inoculum": "Escherichia coli ATCC 11775",
  "hardware_and_environment": "KSC ISS-simulated growth chamber (23C, 50% RH, 3000 ppm CO2, 16h/8h, 200-300 umol/m2/s PAR); 10-cm pots with ~500 mL greens-grade Turface calcined clay + 7.5 g/L 18-6-8 180-day Nutricote; DI bottom watering",
  "assays": [
    "16S rRNA V4 amplicon sequencing (Illumina MiSeq 250-bp PE; QIIME2 v2020.2, DADA2, SILVA 132; GL-DPPD-7104-A / SW_AmpIllumina v1.1.1; n=100)",
    "Aerobic Plate Counts (TSA, 30C, 48 h)",
    "ycfR single-copy gene qPCR (Roche LightCycler 480)"
  ],
  "key_scientific_beats": [
    "Vapor-phase chlorine fuming reduced native mizuna seed load from 1.0 CFU/seed to <0.5 CFU/seed.",
    "Unlike red Romaine lettuce (OSD-385), mizuna leaves retained E. coli ycfR DNA to Day 28 in both sanitized (2.90e2 cells/gfw) and unsanitized (2.9e2 cells/gfw) treatments.",
    "Day 28 APC on sanitized + E. coli leaves plunged to 1.05e2 CFU/gfw (p=0.03 vs. unsanitized + E. coli at 2.2e4 CFU/gfw), and sanitized + E. coli roots hit 3.62e3 CFU/gfw.",
    "Core mizuna microbiome was 24.5%; Dyella/Rhodanobacter were exclusive to unsanitized leaves, Pandoraea/Sphingobium to sanitized leaves, and Patescibacteria appeared in roots.",
    "E. coli relative 16S abundance fell from 44% at Day 7 to <1% at Day 28 in both leaves and roots; TimePoint was the primary beta-diversity driver in leaves (R2=0.422-0.426, p=0.001)."
  ],
  "continuity_hook_next": {
    "next_volume": 39,
    "next_osdr": "OSD-406",
    "next_osdr_url": "https://osdr.nasa.gov/bio/repo/data/studies/OSD-406",
    "teaser": "Transcriptomic responses of Arabidopsis thaliana lines WS and sku5 to Blue Origin NS-12 and Virgin Galactic VP-03 suborbital flights."
  }
}

```

Say **"Go on"** when you're ready for **Volume 39**.
