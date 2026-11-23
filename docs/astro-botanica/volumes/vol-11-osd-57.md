---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 11
title: "Vol. 11 — The Single-Cell Compass"
accession: OSD-57
script_status: condensed
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 29)
---

> [!NOTE]
> Script status **condensed**: 32/32 pages have their own heading; condensed ranges: 4-10, 13-18, 19-22, 23-26, 27-30.
## 1. Volume Metadata Header

- **Volume Title:** *Vol. 11 — The Single-Cell Compass*

- **OSDR Accession:** `OSD-57` (`GLDS-57` | Version 2 | Submitted `28-Jan-2016` | Initial Release `21-Mar-2016` | Metadata Update `31-Aug-2024` | `DOI: 10.25966/b9jj-pp51` | Source Accession: `PRJNA168519`)

- **Primary Publication(s):**

  - Bushart TJ, Cannon AE, Ul Haque A, San Miguel P, Mostajeran K, Clark GB, Porterfield DM, Roux SJ (2013). *RNA-seq analysis identifies potential modulators of gravity response in spores of Ceratopteris (Parkeriaceae): evidence for modulation by calcium pumps and apyrase activity.* *American Journal of Botany* `100(1):161–174` (`PubMed 23048014` | `DOI: 10.3732/ajb.1200292`, Epub `9-Oct-2012`).

- **Organism & Genotypes:** *Ceratopteris richardii* (aquatic homosporous fern, Parkeriaceae), cultivar **`Hn-n`**, germinating single-celled **spores**.

- **Hardware & Conditions (Ground Study — NASA Kennedy Space Center / SLPS; PI: Stanley J. Roux, Co-I: Greg Clark):**

  - Surface-sterilized spores soaked in sterile water in the dark at `29°C` for `5–7 days` to synchronize germination, then exposed to **continuous light for `10 hours`** on `1/2-strength MS` basal salts (`0.5%` agar) in `100 × 15 mm` plastic Petri dishes.

  - **`10 h` Developmental Anchor:** The exact window when gravity fixes the downward polarity alignment of the emerging rhizoid via a trans-cell `Ca2+` current (previously shown to be blocked by nifedipine).

  - **Archival Sample Quirk (`n = 1`):** `Group-1.Subject-1.spores` is a single pooled `10 h` reference sample (`~29 μg` total RNA), paired with pharmacological perturbation assays (`BHQ`, `PPADS`, `ATPγS`) rather than a multi-condition RNA-Seq contrast.

- **Preservation & Assay:** Frozen at `-80°C` at `10 h` post-light exposure; spores ruptured on a **Retsch MM300 bead mill** (max speed, two `2-min` intervals, checked by bright-field microscopy); `Poly(A)Purist` + `SMARTer PCR` cDNA synthesis; sequenced at Purdue University Genomics Core Facility on a **Roche 454 GS FLX Titanium Series** (`1` full + `1` half + `1` quarter plate = **`958,527` reads**, **`266,316,412` total bases**), *de novo* assembled with **Newbler**.

## 2. Dramatis Personae (Grounded in Study Data)

- **The `Hn-n` Spore:** A lone, armored single cell—our first non-flowering plant protagonist in the series—carrying neither root cap nor statolith-packed columella, yet capable of reading Earth's gravity vector within `10 hours` of dawn.

- **Trans-Cell `Ca2+` Current:** An inward-at-the-bottom, outward-at-the-top calcium flux across the spore, previously known to steer rhizoid emergence downward unless silenced by nifedipine.

- **Endomembrane `Ca2+`-ATPase Pumps:** Quiet intracellular custodians sequestering cytosolic `Ca2+` into internal stores. When sabotaged by **`2,5-di-(t-butyl)-1,4-hydroquinone` (`BHQ`)**, they paradoxically weaken the trans-cell current while *sharpening* the spore's gravity alignment.

- **Extracellular ATP (`eATP`) & Purinoceptor:** A glowing nucleotide tide pooling outside the spore during polarization; blocked by **`350 μM` `PPADS`** or drowned by **`150 μM` `ATPγS`**, leaving the spore blind to "down."

- **Apyrase:** The ecto-enzyme gatekeeper trimming `eATP` levels at the cell surface so the nucleotide gradient stays crisp rather than saturated.

- **Ethylene-Biosynthesis & Photoreceptor Transcripts:** Supporting signalers transcribed inside the `10 h` *de novo* Newbler assembly alongside calcium-signaling modules.

- **The 454 Titanium Chronicler (`958,527` Reads):** An older, long-read pyrosequencing engine (`GS FLX Titanium`) stitching `266.3 Mb` of fern mRNA without a sequenced *Ceratopteris* reference genome.

## 3. 32-Page Chapter Script

### Act I: Launch & Environmental Shift (Pages 1–10)

**Page 1**

- **Panel 1 (Splash):** Pitch darkness. Hundreds of ridged, tetrahedral *Ceratopteris richardii* `Hn-n` spores drift suspended in sterile water at `29°C`.

  - *Caption:* `DAY -7 TO 0: DARK IMBIBITION (29°C). SYNCHRONIZING THE GERMINATION CLOCK.`

- **Panel 2:** A blinding white lamp switches on. `100 × 15 mm` Petri dishes filled with `1/2 MS` (`0.5%` agar) catch the first photons.

  - *SFX:* **カッ (KA — continuous light ignition)**

- **Panel 3:** Inside a single `Hn-n` spore, the tough exine coat trembles. A solitary nucleus wakes in a cell that has no root cap, no amyloplast-filled statocytes—only one cell to decide which way is *down*.

**Page 2**

- **Panel 1:** `Hour 0.5 to Hour 3.` Gravity pulls across the spherical cell. Along the bottom hemisphere, `Ca2+` ions begin streaming inward while exiting at the crown—a living electrical compass.

  - *Dialogue (`Trans-Cell Ca2+ Current`):* *"Hold the vector. Ten hours until polarity locks."*

- **Panel 2:** Flashback panel: a drop of **nifedipine** clogs the plasma-membrane `Ca2+` channels; the current flatlines, and the spore forgets which way to send its rhizoid.

- **Panel 3:** `Hour 10.` The critical fixation threshold. Downward polarity is about to be engraved into the cytoskeleton—and at this exact instant, the `-80°C` freezer door slams shut.

**Page 3**

- **Panel 1:** **Retsch MM300 bead mill.** Steel beads slam against the frozen spore coats at maximum speed for two `2-minute` intervals.

  - *SFX:* **ガガガガ (GAGAGA — bead-mill pulverization)**

- **Panel 2:** Under a bright-field microscope, shattered spore walls confirm total rupture; `~29 μg` of pooled total RNA is vacuum-dried and dispatched to Purdue.

- **Panel 3:** On the **454 GS FLX Titanium**, one full plate, one half plate, and one quarter plate ignite in pyrosequencing flashes—`958,527` reads totaling `266,316,412` bases, assembled *de novo* by **Newbler** with zero reference genome to lean on.

**Pages 4–10 (Inside the `10 h` Transcriptome)**

- **Pages 4–5:** The *de novo* map unfolds across the spore cytoplasm: light-receptive photoreceptors at the roof, **ethylene-biosynthesis** transcripts humming near the cortex, and a dense web of **calcium-signaling** transcripts around the ER.

- **Pages 6–7:** Deep in the endomembrane labyrinth, **Endomembrane `Ca2+`-ATPase Pumps** hum steadily, pumping cytosolic `Ca2+` back into internal reservoirs.

  - *Dialogue (`Ca2+`-ATPase Pump):* *"Every spike has a ceiling. We keep the cytosolic tide from drowning the signal."*

- **Pages 8–10:** Outside the plasma membrane, an unexpected glow rises from the cell wall into the `1/2 MS` agar: **`eATP`**—extracellular ATP—accumulating in the medium as the spore polarizes, guarded by membrane-bound **Apyrase** enzymes.

### Act II: The Molecular Battle (Pages 11–22)

**Pages 11–12 (Double-Page Spread — *The Paradox of the Pump & the Tide*)**

- **Left Page (`BHQ` Challenge):** **`2,5-di-(t-butyl)-1,4-hydroquinone` (`BHQ`)** locks the endomembrane `Ca2+`-ATPase pumps in chains. Cytosolic `Ca2+` swells internally while the trans-cell `Ca2+` current *drops*—yet paradoxically, the spore's downward polar axis snaps **sharper** toward gravity than before!

- **Right Page (`PPADS` & `ATPγS` Ambush):** Outside the cell wall, **`350 μM` `PPADS`** slams a shield over the purinoceptor, while **`150 μM` `ATPγS`**—an unhydrolyzable counterfeit ATP—floods the medium, overwhelming **Apyrase**. Stripped of its extracellular nucleotide gradient, the spore's rhizoid spins aimlessly, losing its gravity compass.

  - *SFX:* **ザザザザ (ZAZAZA — nucleotide gradient washed out)**

**Pages 13–18 (The Two Arms of Spore Polarity)**

- **Pages 13–15:** Inside the `BHQ`-treated spore, the **Endomembrane `Ca2+`-ATPase** protests from its chains: *"Wait—if the trans-cell current is weaker, why did orientation *increase*?*" Cytosolic `Ca2+` retention amplifies the internal asymmetry, proving the trans-cell current isn't the whole story.

- **Pages 16–18:** Outside, **Apyrase** fights to hydrolyze excess ATP into ADP and AMP, trying to preserve a directional contrast between the bottom and top of the spore against `ATPγS`'s stubborn sulfur bond.

**Pages 19–22 (Evolutionary Echoes)**

- **Pages 19–20:** Side-by-side silhouette panels comparing *Arabidopsis* `Col-0` roots (with columella statocytes) against a single *Ceratopteris* `Hn-n` spore: `400 million` years apart, both rely on `Ca2+` and `eATP`/apyrase signaling to read gravity.

- **Pages 21–22:** The `10 h` fixation wave freezes the pharmacological battleground in place, locking the single-cell transcriptome into the Newbler contig ledger.

### Act III: Fixation & Data Epilogue (Pages 23–32)

**Pages 23–26**

- **Pages 23–24:** In `October 2012` (print `January 2013`), Bushart, Cannon, Clark, Porterfield, and Roux publish the *Ceratopteris* `10 h` spore atlas in *American Journal of Botany* (`100(1):161–174`).

- **Pages 25–26:** In `2016`, NASA GeneLab ingests the `PRJNA168519` pyrosequencing archive as **`OSD-57`** (`GLDS-57`), later updating its ISA metadata in `August 2024` (`Version 2`)—a rare **`n = 1`** single-sample foundational transcriptome in a repository built for multi-replicate contrasts.

**Pages 27–30 (Series Bridge)**

- **Pages 27–28:** A decade later (`2023`), Cannon et al. return with an amperometric biosensor to prove what `OSD-57` first glimpsed: `eATP` really does pool `7`-fold higher at the bottom of the polarizing spore.

- **Pages 29–30:** From a single fern spore on a KSC-funded ground plate, the signal jumps upward—to `27 days` of long-term spaceflight aboard the International Space Station...

**Pages 31–32:** *(See Section 4 — Mission Debrief Infographic Layout below)*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Page 31 — Spore Hardware & Sequencing Ledger

- **Header Banner:** `OSD-57 // CERATOPTERIS RICHARDII 10-HOUR SPORE TRANSCRIPTOME (n = 1)`

- **Left Column (Culture & Fixation):**

  - **Strain:** *Ceratopteris richardii* cultivar `Hn-n` (single-celled spores).

  - **Synchronization:** Surface-sterilized, dark-soaked `5–7 days` at `29°C` in sterile water.

  - **Plating & Trigger:** Continuous light on `1/2 MS` + `0.5%` agar (`100 × 15 mm` Petri dishes); harvested & frozen at `-80°C` at **`10 h`** (gravity polarity-fixation window).

  - **Lysis:** Retsch MM300 bead mill (max speed, `2 × 2 min`), `~29 μg` pooled RNA.

- **Right Column (Roche 454 Pyrosequencing):**

  - **Platform:** `GS FLX Titanium Series` (`1` full + `1` half + `1` quarter plate).

  - **Yield:** **`958,527` reads** / **`266,316,412` bases**, *de novo* assembled via **Newbler** (`PRJNA168519`).

  - **Archival Quirk:** `OSD-57` holds **`n = 1`** pooled RNA-Seq sample (`GLDS-57_rna-seq_roux.tar.gz`); functional conclusions rest on pairing this `10 h` transcript catalog with targeted pharmacological assays.

### Page 32 — Pharmacological & Molecular Compass

- **Top Panel (Key Transcripts Identified at `10 h`):**

  - Calcium signaling & endomembrane `Ca2+`-ATPase pumps; apyrases; ethylene-biosynthesis genes; light-receptive photoreceptors.

- **Bottom-Left Panel (Calcium Pump Paradox):**

  - **`BHQ`** (`2,5-di-(t-butyl)-1,4-hydroquinone`, endomembrane `Ca2+`-ATPase inhibitor) →\rightarrow→ **diminishes** trans-cell `Ca2+` current, yet **increases** gravity-directed polar axis orientation.

- **Bottom-Right Panel (Extracellular Nucleotide Compass):**

  - `eATP` accumulates in medium during spore polarization.

  - **`PPADS`** (`350 μM`, purinoceptor antagonist) or **`ATPγS`** (`150 μM`, poorly hydrolyzable ATP) →\rightarrow→ **decreases** gravity-directed polarization, implicating **apyrase** and `eATP` gradients as gravity-response modulators.

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "accession": "OSD-57",
  "volume_title": "Vol. 11 — The Single-Cell Compass",
  "hardware_introduced": [
    "100 x 15 mm Petri dishes (1/2 MS, 0.5% agar, continuous light 10 h)",
    "Retsch MM300 bead mill tissue homogenizer",
    "Roche 454 GS FLX Titanium Series pyrosequencer (Newbler de novo assembly)"
  ],
  "ecotypes_or_mutants": [
    "Ceratopteris richardii cultivar Hn-n (single-celled fern spores)"
  ],
  "molecular_characters": [
    "Trans-cell Ca2+ current (nifedipine-sensitive downward polarity compass)",
    "Endomembrane Ca2+-ATPase pumps (BHQ-sensitive; inhibition lowers current but sharpens gravity alignment)",
    "Extracellular ATP (eATP) & Purinoceptor (PPADS- and ATPgammaS-sensitive gravity modulator)",
    "Apyrase (surface nucleotide-gradient gatekeeper)",
    "Ethylene-biosynthesis & photoreceptor transcripts"
  ],
  "continuity_hooks_for_future_volumes": [
    "First non-angiosperm (fern) and first single-cell gravity-polarization transcriptome in the series",
    "Archival n=1 de novo reference sample paired with pharmacological assays rather than multi-replicate DEG tables",
    "Sets up future mechanosensitive eATP/apyrase signaling comparisons across land plants"
  ]
}

```

Ready for **Vol. 12** whenever you say `"Go on"`.
