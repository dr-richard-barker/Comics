---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 7
title: "The Uncoupled Proteome"
accession: OSD-38
script_status: partial
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 21)
---

> [!NOTE]
> Script status **partial**: 32/32 pages have their own heading; condensed ranges: 17-24, 25-30.
## 1. Volume Metadata Header

- **Volume:** `Vol. 7 — The Uncoupled Proteome`

- **Target Accession:** `OSD-38` (`GLDS-38` / `DOI: 10.26030/p03c-xa96`)

- **Primary Publications:**

  - Kruse CPS, Meyers AD, Basu P, Hutchinson S, Luesse DR, Wyatt SE (2020). *Spaceflight induces novel regulatory responses in Arabidopsis seedling as revealed by combined proteomic and transcriptomic analyses.* *BMC Plant Biology* 20: 237 (`DOI: 10.1186/s12870-020-02392-6`, `PMID: 32460700`, PMC7251690)

  - Kruse CPS, Basu P, Luesse DR, Wyatt SE (2017), *PLoS ONE* (`DOI: 10.1371/journal.pone.0175943`, `PMID: 28423006` — RNAlater vs. LN2\text{LN}_2LN2​ control)

  - Basu P, Kruse CPS, Luesse DR, Wyatt SE (2017), *Life Sci Space Res* (`DOI: 10.1016/j.lssr.2017.09.001`, `PMID: 29198318` — BRIC hardware vs. foil control)

- **Organism & Genotypes:** *Arabidopsis thaliana* `Col-0` (Columbia Wild Type, ABRC).

- **Flight Hardware & Conditions:** **BRIC-20** (`4` canisters, `22` `60 mm` Petri plates in **PDFUs**, `800–900` seeds/plate on `0.5x` MS + `1%` sucrose + `1%` agar). Cold-stratified `16 h`, light-synchronized `1–2 h` white light, held `4 days` at `4°C`, launched on **SpaceX CRS-5** (`Jan 10 – Feb 11, 2015`), germinated and grown **`76 hours` (`~3 days`)** in **continuous 24 h darkness** at `22°C`. Ground controls included KSC BRICs, Ohio University foil-wrapped containers, and a dedicated **RNAlater vs. Liquid Nitrogen (LN2\text{LN}_2LN2​)** preservation control (`n = 3` pools of `5` plates for proteomics; `1` plate/replicate for RNA-Seq).

- **Preservation & Assay:** In-orbit **RNAlater** (`6–7 mL`, `12 h` ambient fixation) followed by `-80°C` freeze. **Illumina HiSeq 2500** (`2×101 bp` Ribo-Zero RNA-Seq, `3` concatenated technical runs/sample) + **iTRAQ 8-plex** (`114–119`) soluble & membrane proteomics on **LTQ-Orbitrap Velos Pro** (`12` high-pH RP fractions).

## 2. Dramatis Personae (Grounded in Study Data)

- **Col-0 Etiolated Swarm (3-Day Recruits):** `800–900` densely packed seedlings per dish—younger and denser than `OSD-37`'s `8`-day, `64`-seed plates—racing through `76 hours` of dark germination.

- **TIP3;2 (The Paradox Gatekeeper):** Tonoplast aquaporin whose **protein abundance surges** in spaceflight even while its **mRNA drops `>4-fold`**—personifying post-transcriptional uncoupling (`~30%` of the `17` shared mRNA-protein loci show opposite signs).

- **dPGM (`AT5G04120`) & DNA Pol ε\varepsilonε (`AT1G19530`):** Rare concordant anchors: glycolytic cofactor-dependent phosphoglycerate mutase `dPGM` rises in both RNA and protein to burn `1%` sucrose, while DNA polymerase epsilon subunit A falls in both.

- **GRP7 & GRP8 (The Splicing Phospho-Switches):** Glycine-rich RNA-binding proteins differentially phosphorylated at **Ser118** (`L2FC_phospho = -0.39` and `-0.54` in space vs. Earth), triggering isoform switching across `24` genes.

- **VILLIN 1 (`AT2G29890`):** Actin-binding cytoskeletal twin-blade: isoform `.2` rockets to `L2FC_RNA > +5` in spaceflight while isoform `.3` plunges to `< -7.5` on Earth.

- **TUA4 / TUA6 / TUB1 / TUB5 & ATPIN3 / AtLAZY1:** Cortical microtubule and auxin-polarity squadron upregulated in `BRIC-20` seedlings, even as autophagy units `ATG8b`, `ATG8e`, `ATG8f` power down.

- **The RNAlater & Hardware Ghosts:** Dedicated ground controls (`rl-1..3` vs. `n2-1..3`, plus KSC BRIC vs. Ohio foil) that strip away chemical-fixation and polycarbonate-box artifacts before crowning true microgravity signals.

## 3. 32-Page Chapter Script

### Page 1 (Act I: Launch & Environmental Shift)

- **Panel 1 [Wide Shot / High-Contrast Ink]:** Inside a sterile laminar hood, `0.016 g`—nearly **900 seeds**—rain onto a single `60 mm` Petri dish of `0.5x` MS, `1%` sucrose, `1%` agar.

  - **NARRATION:** "Vol. 6 flew four ecotypes for eight days. `OSD-38` packs nearly nine hundred `Col-0` seeds per plate for a seventy-six-hour sprint—and interrogates *both* RNA and protein."

  - **SFX:** `パラパラ (Parapara—Seed rain)`

- **Panel 2 [Two-Panel Split]:** Left: `22` plates seal into **BRIC-20** PDFUs at KSC (`4°C` hold). Right: At Ohio University, `22` identical plates are wrapped in layers of **aluminum foil** inside airtight plastic boxes—plus separate ground sets slated for **RNAlater** vs. **Liquid Nitrogen (LN2\text{LN}_2LN2​)**.

  - **DIALOGUE (PI):** "We're not just flying `Col-0`. We're putting the hardware and RNAlater itself on trial."

### Page 2 (Act I: Launch & Environmental Shift)

- **Panel 1 [Wide Shot]:** **SpaceX CRS-5** roars off Pad 40 (`Jan 10, 2015`). Four BRIC canisters ride in `4°C` cold stowage.

  - **SFX:** `ゴォォォ (Goooo—Falcon 9 launch)`

- **Panel 2 [Interior / BRIC-20 Dark Vault]:** On orbit, canisters warm to `22°C`. Within `76 hours`, `800+` crowded `Col-0` radicles and hypocotyl hooks burst out in **continuous darkness**.

  - **DIALOGUE (Col-0 Recruit):** "No light vector. No gravity vector. Just sucrose agar and eighty-nine neighbors per square centimeter!"

  - **SFX:** `ミシミシ (Mishimishi—Dense germination)`

### Page 3 (Act I: Launch & Environmental Shift)

- **Panel 1 [Medium Shot / Ground Control]:** At `76 hours`, the KSC and Ohio ground controls split into two surgical fates: `rl-1..3` flooded with **RNAlater** for `12 h`, and `n2-1..3` plunged straight into **Liquid Nitrogen**.

  - **NARRATION:** "Before claiming a single gene belongs to microgravity, `OSD-38` tests the fixative. RNAlater takes minutes to penetrate; LN2\text{LN}_2LN2​ freezes instantaneously."

  - **SFX:** `シュウ (Shuu—LN2 mist)`

- **Panel 2 [Close-Up]:** A Venn diagram HUD separates RNAlater osmotic-shock responders from true `0g` spaceflight responders.

### Page 4 (Act I: Launch & Environmental Shift)

- **Panel 1 [Interior / Spaceflight Cell]:** Inside the `3`-day-old orbital seedlings, **968 transcripts** (`480` up, `488` down, `L2FC >= ±1`) ignite—yet when the `LTQ-Orbitrap Velos Pro` scans the **iTRAQ 8-plex** proteome, only **107 soluble** and **103 membrane** proteins shift (`P <= 0.05`).

  - **DIALOGUE (Bioinformatician):** "Wait... nine hundred sixty-eight genes moving at the mRNA level, and the proteome is telling a *different* story?"

  - **SFX:** `ピピッ (Pipi—Orbitrap scan)`

### Page 5 (Act I: Launch & Environmental Shift)

- **Panel 1 [Wide Shot / Plastid Sector]:** Inside the dark, etiolated cells, **over 25%** of all upregulated transcripts flare inside **plastids** (vs. `<1%` on Earth).

  - **DIALOGUE (Plastid Etioplast):** "There's zero light in `BRIC-20`! Why are plastid transcripts screaming at full volume?!"

  - **NARRATION:** "Without gravity, plastid transcription uncouples from chloroplast development—yet almost none of it reaches the protein layer."

### Page 6 (Act I: Launch & Environmental Shift)

- **Panel 1 [Medium Shot / Extracellular Matrix]:** Outside the plasma membrane, **8 extracellular soluble proteins**—regulators of oxidation and cell-wall dynamics—vanish from the spaceflight proteome (`downregulated`).

  - **NARRATION:** "Cell-wall organization genes surge as *proteins* while their *transcripts* drop. Microgravity isn't a one-way transcriptional cascade—it's a post-transcriptional traffic jam."

### Page 7 (Act I: Launch & Environmental Shift)

- **Panel 1 [Close-Up / Tonoplast]:** At the vacuole membrane, **TIP3;2** (`aquaporin`) stands tall in full iTRAQ armor—while its mRNA blueprint lies shredded (`>4-fold` downregulated).

  - **DIALOGUE (TIP3;2):** "My transcript was cut four-fold, and I'm *still* stacking higher on the tonoplast than on Earth. Translation and protein stability don't obey mRNA alone."

  - **SFX:** `ガキン (Gakin—Protein armor lock)`

### Page 8 (Act I: Launch & Environmental Shift)

- **Panel 1 [Two-Panel Split]:** Out of **17 overlapping** mRNA-protein loci (`p = 9.7e-4`), `dPGM` (`AT5G04120`, glycolysis) charges upward in *both* layers, while `AT1G19530` (DNA Pol ε\varepsilonε subunit A) drops in *both*—and **`~30%`** invert like `TIP3;2`.

  - **NARRATION:** "Welcome to the uncoupled proteome."

### Page 9 (Act II: The Molecular Battle)

- **Panel 1 [Low-Angle Shot / Nuclear Spliceosome]:** Deep in the nucleus, **16 differentially phosphorylated peptides** (`P <= 0.1`) glow on the Orbitrap HUD. On **GRP7** and **GRP8**, the **Ser118** phosphate tag dims in spaceflight (`L2FC_phospho = -0.39` and `-0.54`).

  - **DIALOGUE (GRP7):** "Our S118 phosphorylation switch flipped off! Alternative splicing gates are shifting across twenty-four genes!"

  - **SFX:** `カチカチ (Kachikachi—Splice switch)`

### Page 10 (Act II: The Molecular Battle)

- **Panel 1 [Medium Shot / Actin Cytoskeleton]:** A twin-blade actin cutter—**VILLIN 1 (`AT2G29890`)**—splits in two. Isoform **`.2`** (`L2FC_RNA > +5`) materializes in spaceflight, while isoform **`.3`** (`L2FC_RNA < -7.5`) evaporates on Earth.

  - **DIALOGUE (VILLIN 1.2):** "Same gene locus. Opposite isoforms. Spaceflight rewrites *which* version of the cytoskeleton gets built."

  - **SFX:** `シュバッ (Shuba—Isoform cleave)`

- **Panel 2 [Close-Up]:** Beside `VILLIN 1`, `PEROXIN 11E` and `NRAMP1` also swap isoforms mid-flight.

### Page 11 (Act II: The Molecular Battle)

- **Panel 1 [Wide Shot / Cortical Highway]:** Along the cell cortex, α- and β-tubulin engineers **`TUA4`, `TUA6`, `TUB1`, `TUB5`** surge upward alongside auxin-polarity navigators **`ATPIN3`** and **`AtLAZY1`**.

  - **DIALOGUE (AtLAZY1):** "No gravity vector to lock onto—keep `PIN3` and the cortical microtubule tracks active!"

  - **SFX:** `ズズズ (Zuzuzu—Microtubule weave)`

- **Panel 2 [Corner Inset]:** Meanwhile, autophagy recyclers **`ATG8b`, `ATG8e`, `ATG8f`** power down—opposite to what ground clinostats predicted.

### Page 12–13 (Act II: The Molecular Battle — Double-Page Spread)

- **Panel 1 [Double-Page Spread / Multi-Omic Cross-Section]:** A towering `3`-day-old `Col-0` seedling splits into three parallel HUD strata:

  - **Top Stratum (Phospho-Proteome, `16` peptides):** `GRP7`/`GRP8` (`S118` dephosphorylated) flipping the splicing dial.

  - **Middle Stratum (Transcriptome, `968` DEGs):** `>25%` plastid transcripts flaring in the dark; `VILLIN 1.2` (`>+5`), `TUA4/6`, `TUB1/5`, `ATPIN3`, `AtLAZY1` surging; `TIP3;2` mRNA (`-4x`) plummeting.

  - **Bottom Stratum (iTRAQ Proteome, `107` soluble / `103` membrane):** `TIP3;2` protein rising, `dPGM` (`AT5G04120`) burning `1%` sucrose, translation machinery shifting, and `8` extracellular redox/wall proteins retreating.

  - **NARRATION:** "RNA-seq, iTRAQ proteomics, and phosphopeptides each tell a different truth. Microgravity doesn't just turn genes on—it rewires splicing, translation, and protein turnover."

  - **SFX:** `ドォォォン (Dooon—Tri-omic convergence)`

### Page 14 (Act II: The Molecular Battle)

- **Panel 1 [Medium Shot]:** Across the **soluble (`114–119`)** and **membrane (`100,000g` pellet)** fractions, ribosomal and translational regulators dominate protein-level GO enrichment—invisible to RNA-seq alone.

  - **DIALOGUE (Ribosome Unit):** "Transcripts can shout all they want; we decide what actually gets translated."

### Page 15 (Act II: The Molecular Battle)

- **Panel 1 [Wide Shot]:** Redox-homeostasis and ROS genes crowd the `968` DEGs, yet fail to mirror in protein abundance—while the `6` conserved BRIC loci (`HOT1/HSP101`, `ABS4`, `COR78`, `PRX39`, `AAP2`, `MAGL4`) still anchor `OSD-38` to `OSD-37` (`BRIC-19`).

  - **NARRATION:** "Between `BRIC-19` and `BRIC-20`, the core signature holds—even as post-transcriptional layers diverge."

### Page 16 (Act II: The Molecular Battle)

- **Panel 1 [Medium Shot / ISS]:** `76 hours` complete (`Jan 13, 2015`). Astronauts actuate the **BRIC-20** PDFUs, flooding all `22` plates with `6–7 mL` **RNAlater** for `12 hours` before `-80°C` stowage.

  - **SFX:** `ザブッ (Zabu—RNAlater flood)`

- **Panel 2 [Wide Shot]:** SpaceX CRS-5 splashes down (`Feb 11, 2015`). Five plates per replicate are crushed in liquid nitrogen, ultracentrifuged at `100,000g`, trypsinized, iTRAQ-labeled, and injected into the **LTQ-Orbitrap Velos Pro**.

### Page 17–24 (Act II–III: Multi-Omic & Control Resolution)

*(Pages 17–24 trace the analytical resolution:)*

- **Page 17:** `HiSeq 2500` (`2×101 bp`, `3` concatenated technical runs/sample) + `Proteome Discoverer 1.4` (`12` high-pH RP fractions) assemble the dual dataset.

- **Page 18:** `rl-1..3` vs. `n2-1..3` (`Kruse et al., 2017`) flags RNAlater-induced osmotic shifts so they aren't mistaken for `0g`.

- **Page 19:** KSC BRIC vs. Ohio foil (`Basu et al., 2017`) separates polycarbonate enclosure stress from orbital microgravity.

- **Page 20:** `dPGM` (`AT5G04120`) stands as a validated glycolytic bridge between sucrose media and `0g` energy demand.

- **Page 21:** `TIP3;2` exemplifies the `~30%` discordant mRNA-protein set, proving post-transcriptional buffering in microgravity.

- **Page 22:** `GRP7`/`GRP8` (`S118`) and `VILLIN 1` (`.2` vs. `.3`) establish alternative splicing as a newly discovered orbital adaptation layer.

- **Page 23:** `ATPIN3` + `AtLAZY1` + `TUA4/6/TUB1/5` link auxin polarity directly to cortical microtubule remodeling in `3`-day seedlings.

- **Page 24:** Later re-analyses (`Barbero Barcenilla et al.`, `2024`) even mine `OSD-38` to uncover boosted root telomerase activity and genome oxidation without telomere shortening.

### Page 25–30 (Act III: Fixation & Data Epilogue)

*(Pages 25–30 close the volume:)*

- **Page 25:** In a future orbital farm, engineers monitor **protein and phosphopeptide** states—not just mRNA—knowing translation uncouples in `0g`.

- **Page 26:** `dPGM` and glycolytic enzymes power dark-germinated seedlings until LEDs switch on.

- **Page 27:** `GRP7`/`GRP8` splicing switches become targets for engineering stress-resilient space cultivars.

- **Page 28:** `HOT1/HSP101` and `COR78` lock in as the shared `BRIC-19`/`BRIC-20` backbone.

- **Page 29:** Cut to **BRIC-16**'s forgotten archive—where `OSD-44` awaits with `3,826` microarray DEGs and an orbital mystery from the Space Shuttle era.

- **Page 30:** Final panel: `TIP3;2` standing guard at the tonoplast in crisp black-and-white ink.

### Page 31 (Mission Debrief — Biological & Molecular Summary)

- **Header:** `OSD-38 MISSION DEBRIEF: MULTI-OMIC UNCOUPLING IN BRIC-20`

- **Panel A — Multi-Omic Scale (`76 h`, `Col-0`, SpaceX CRS-5):** `968` DEGs (`480` up, `488` down, `L2FC >= ±1`), `107` soluble proteins (`21` up, `86` down), `103` membrane proteins (`45` up, `58` down, `L2FC >= ±0.2`), and `16` differentially phosphorylated peptides (`P <= 0.1`) (PMC7251690).

- **Panel B — Post-Transcriptional Uncoupling:** Only `17` loci overlapped between RNA and protein (`p = 9.7e-4`), and **`~30%` inverted direction** (e.g., `TIP3;2` protein up despite `>4-fold` mRNA drop), while `dPGM` (`AT5G04120`) rose in both and `AT1G19530` fell in both.

- **Panel C — Alternative Splicing & Phospho-Switches:** `GRP7` (`-0.39`) and `GRP8` (`-0.54`) showed reduced `S118` phosphorylation in space, coinciding with isoform switching in `24` genes—notably `VILLIN 1` (`AT2G29890.2` `> +5` vs. `.3` `< -7.5`).

- **Panel D — Plastids, Cytoskeleton & Rigorous Controls:** `>25%` of upregulated transcripts were plastid-localized despite total darkness; `TUA4/6`, `TUB1/5`, `ATPIN3`, and `AtLAZY1` rose while `ATG8b/e/f` fell. Ground `RNAlater` vs. LN2\text{LN}_2LN2​ and BRIC vs. foil controls isolated true spaceflight effects.

### Page 32 (Mission Debrief — BLSS Implications & Citation)

- **BLSS Engineering Takeaway:**

  - **Transcriptomics Alone Is Incomplete:** Because translation, protein stability, and `S118`-gated alternative splicing uncouple in microgravity, crop engineering for BLSS must validate targets at the **proteome and PTM** levels.

  - **Dark-Phase Energy & Plastid Priming:** `dPGM` glycolysis and dark plastid transcription show that germinating spaceflight crops rapidly reallocate carbon and plastid readiness before light exposure.

  - **Preservation & Hardware Controls:** Including `RNAlater` vs. LN2\text{LN}_2LN2​ and hardware-enclosure controls prevents chemical-fixation artifacts from masquerading as microgravity biology.

- **Primary Source:** Kruse CPS et al. (2020), *BMC Plant Biol* 20:237 (PMC7251690) | `OSD-38`.

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

*(Integrated into Pages 31–32 above; covers multi-omic counts, `~30%` mRNA-protein discordance, `GRP7`/`GRP8` `S118` phosphorylation & `VILLIN 1` isoform switching, dark plastid transcription, and BLSS multi-omic engineering takeaways.)*

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "accession": "OSD-38",
  "volume_title": "Vol. 7 — The Uncoupled Proteome",
  "hardware_introduced": [
    "BRIC-20 (4 canisters, 22 plates in PDFUs, 800–900 seeds/plate, 76 h dark growth)",
    "SpaceX CRS-5 Dragon",
    "LTQ-Orbitrap Velos Pro (iTRAQ 8-plex soluble + 100,000g membrane proteomics)",
    "RNAlater vs. LN2 & Foil-Container Ground Controls"
  ],
  "ecotypes_or_mutants": [
    "Col-0 (Etiolated 76 h seedlings)"
  ],
  "molecular_characters": [
    {
      "gene_symbol": "TIP3;2",
      "role_archetype": "Post-Transcriptional Paradox Aquaporin",
      "visual_motif": "Tonoplast gatekeeper whose protein armor surges while mRNA drops >4-fold",
      "direction_in_this_study": "upregulated"
    },
    {
      "gene_symbol": "GRP7 / GRP8",
      "role_archetype": "S118 Phospho-Splicing Switches",
      "visual_motif": "Nuclear RNA-binding officers losing S118 phosphate tags to flip isoform gates",
      "direction_in_this_study": "downregulated"
    },
    {
      "gene_symbol": "VILLIN 1 (AT2G29890.2 / .3)",
      "role_archetype": "Isoform-Switching Actin Blade",
      "visual_motif": "Twin-form cytoskeletal cutter (.2 > +5 in space vs. .3 < -7.5 on Earth)",
      "direction_in_this_study": "upregulated"
    },
    {
      "gene_symbol": "dPGM (AT5G04120)",
      "role_archetype": "Concordant Glycolytic Engine",
      "visual_motif": "Rare dual-layer (RNA + protein) metabolic runner burning 1% sucrose",
      "direction_in_this_study": "upregulated"
    },
    {
      "gene_symbol": "ATPIN3 / AtLAZY1 & TUA4/TUA6/TUB1/TUB5",
      "role_archetype": "Auxin-Cytoskeletal Polarity Axis",
      "visual_motif": "Cortical microtubule builders and auxin navigators operating in 0g",
      "direction_in_this_study": "upregulated"
    }
  ],
  "continuity_hooks_for_future_volumes": [
    "Establishes post-transcriptional uncoupling and S118 alternative splicing as core spaceflight mechanisms.",
    "RNAlater vs. LN2 control (rl-1..3 vs. n2-1..3) resolves Vol. 6's fixation question and sets up Vol. 8 (OSD-44 / BRIC-16)."
  ]
}

```

Ready to proceed to **Vol. 8 (`OSD-44`)** whenever you say "Go on."
