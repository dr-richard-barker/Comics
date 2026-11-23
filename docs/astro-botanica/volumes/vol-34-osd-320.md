---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 34
title: "The Iron Track and the False Night"
accession: OSD-320
script_status: partial
pages_covered: 30/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 75)
---

> [!NOTE]
> Script status **partial**: 30/32 pages have their own heading.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles*

- **Volume:** 34

- **Title:** *The Iron Track and the False Night*

- **OSDR / GLDS Accession:** `OSD-320` (`GLDS-320` | DOI: `10.26030/ks24-9880` | ArrayExpress: `E-GEOD-61484` | GEO: `GSE61484`)

- **Chronology Note:** Advances sequentially from Volume 33 (`OSD-314`). Studies `OSD-315`–`OSD-319` are non-plant datasets (including `OSD-316` cosmonaut IgM repertoire, `OSD-317` human bronchial epithelial cell GCR epigenome, and `OSD-319` Arctic ground squirrel muscle atrophy) and are skipped per series rules.

- **Primary Publication:** Missirian, V., Conklin, P. A., Culligan, K. M., Huefner, N. D., & Britt, A. B. (2014). *High atomic weight, high-energy radiation (HZE) induces transcriptional responses shared with conventional stresses in addition to a core "DSB" response specific to clastogenic treatments.* *Frontiers in Plant Science*, 5, 364. (PMC4117989 | PubMed 25136344)

- **Facility & Radiation Sources:** Ground-based space radiation simulation at **Brookhaven National Laboratory (BNL)**, Upton, NY — **Controlled Environment Radiation Facility** (`137Cs` gamma source, `100 Gy` at `7 Gy/min`) and **National Space Radiation Laboratory (NSRL)** (`1 GeV/nucleon` `56Fe` `HZE` heavy ions, `30 Gy` at `7 Gy/min`).

- **Growth Hardware & Conditions:** Vertical `1× MS` Phytoagar plates (`PlantMedia, BioWorld, Dublin, OH`), shipped on ice to BNL (`4°C`), then grown `5` days pre-irradiation at `21°C` under cool white lamps (`16 h` light / `8 h` dark) in the **BNL Controlled Environment Facility**; `n = 44` samples (`22` conditions × `2` biological replicates, `30–40` pooled whole seedlings per sample).

- **Organism & Genotypes:** *Arabidopsis thaliana* — wild-type **Wassilewskija (`Ws`)** and **`atm-1`** (T-DNA insertion mutant defective in the double-strand-break-sensing protein kinase **ATM**).

- **Assay / Platform:** `Affymetrix` `ATH1` GeneChip microarrays (`10 μg` total RNA starting material, `RNeasy Mini-Prep`, `SuperScript` ds-cDNA, `GeneChip Scanner 3000`); OSDR reprocessed via `GL-DPPD-7114` (`NF_MAAffymetrix v1.0.3`, `oligo v1.58.0` RMA normalization, `limma v3.50.3` differential expression).

## 2. Dramatis Personae (Grounded in Study Data)

- **Dr. Anne B. Britt** *(Principal Investigator, UC Davis)* — Veteran DNA repair geneticist who designed the experiment and framed the central question: when a relativistic iron nucleus tears through a seedling, does the plant only hear broken DNA, or does it hear something else?

- **Victor Missirian & Phillip A. Conklin** *(Co-First Authors, UC Davis)* — Bioinformaticians and experimentalists who filtered out circadian noise (`586` circadian + `685` diurnal transcripts), clustered the `44`-array time course, and uncovered the shock overlap between `HZE` and "extended night."

- **Dr. Kevin M. Culligan & Neil D. Huefner** *(University of New Hampshire & UC Davis)* — The beamline hands at BNL who executed the `100 Gy` gamma and `30 Gy` `56Fe` irradiations, waited out the `30`-minute post-beam deactivation in the lighted hood, and extracted the pooled seedling RNA.

- **Dr. Adam Rusek, Richard Sautkaulis & Dr. Betsy Sutherland** *(BNL / NSRL Staff)* — Accelerator physicists and radiation biologists at Brookhaven who steered the `1 GeV/n` `56Fe` beam onto vertical agar plates.

- **ATM (`Ataxia Telangiectasia Mutated`)** — The nuclear sentinel kinase that sounds the alarm on DNA double-strand breaks (`DSBs`), driving `Cluster B` (`424` DNA-metabolism transcripts) and `Cluster C` (`349` late defense/chitin-response transcripts).

- **The Peroxisome & Proteasome Crew (`PEX11c–e`, `FIS1b`, `DRP3a`, Beta-Oxidation & Leucine Catabolism Enzymes)** — The ATM-independent emergency scavengers of `Cluster A` (`1,357` transcripts) who wake up `1.5 h` after `56Fe` impact believing dawn never came.

## 3. 32-Page Chapter Script

### Act I: Two Kinds of Lightless Fire (Pages 1–10)

**Page 1 (Splash Page)**

- **Visual:** A relativistic `56Fe26+` ion streaks vertically through a translucent `Arabidopsis` root tip like a white-hot needle (`170 keV/μm`), carving a dense, glowing cylinder of ionized radicals across nuclei, chloroplasts, and membranes, while beside it, scattered gamma photons (`0.2 keV/μm`) detonate in tiny, isolated sparks.

- **Caption:** *Brookhaven National Laboratory. To understand what cosmic rays do to a living plant beyond Earth's magnetosphere, you first have to split the radiation in two.*

**Page 2**

- **Panel 1:** Rows of `1× MS` Phytoagar plates sealed on ice arrive at BNL from UC Davis and slide into `4°C` cold storage.

- **Panel 2:** Five days before beamtime, Kevin Culligan and Neil Huefner stand the plates upright in a `21°C` growth chamber under cool white lamps (`16 h` day).

- **Dialogue (Culligan):** "Wild-type `Ws` and `atm-1`—blind to double-strand breaks. Five days vertical, then we split them between the Cesium-137 room and the iron beam."

**Page 3**

- **Panel 1:** Inside the Controlled Environment Radiation Facility, plates of `5`-day-old seedlings sit before the `137Cs` gamma source: `100 Gy` delivered at `7 Gy/min` over `15` minutes, finishing at `8:40 am`.

- **Panel 2:** Cutaway diagram of a cell nucleus: gamma photons ricochet via Compton scattering, ejecting fast electrons that leave small `2–5` radical clusters along `4–5 nm` tracks.

- **Caption:** *In Arabidopsis's compact `135 Mb` genome, `100 Gy` of gamma rays generates roughly as many double-strand breaks as `4 Gy` in a `3.2 Gb` human cell—enough to halt root growth without killing the plant.*

**Page 4**

- **Panel 1:** Across the BNL campus at the National Space Radiation Laboratory (NSRL), Dr. Adam Rusek and Richard Sautkaulis align the `1 GeV/nucleon` `56Fe` beamline.

- **Panel 2:** Two rapid runs (`1:09 pm` and `1:28 pm`), `30 Gy` at `7 Gy/min` over `~12` minutes—biologically matched to `100 Gy` gamma for transient root-growth arrest.

- **Dialogue (Huefner):** "Thirty Gray of iron nuclei. Less than a third the total energy of the gamma dose, and we're about to see why it hits completely differently."

**Page 5**

- **Panel 1:** Post-beam protocol: `56Fe`-irradiated plates rest in a lighted hood for `30` minutes until induced radioactivity decays to safe levels, then return to `21°C`.

- **Panel 2:** Liquid nitrogen splashes into cryotubes as `30–40` whole seedlings per condition are flash-frozen across `1.5`, `3`, `6`, `12`, and `24 h` (`atm-1` skipping `3 h`), building `44` `Affymetrix ATH1` arrays.

**Page 6**

- **Panel 1:** At UC Davis, Victor Missirian and Phillip Conklin stare at dual-monitor heatmaps. Before clustering, they strip away `586` circadian-regulated transcripts and `685` transcripts shifting between the `1.5 h` and `24 h` unirradiated controls (`85` overlapping).

- **Dialogue (Missirian):** "No circadian ghosts in the data. Now let's ask what `Ws` and `atm-1` actually say at `1.5` hours."

**Page 7 (Double-Page Spread Anchor — Page 7)**

- **Visual:** A towering Venn diagram splits across the page: on the left, a sharp violet circle of `280` gamma-induced transcripts; on the right, a massive crimson circle of `1,169` `HZE`-induced transcripts; in the narrow center lens, just `160` shared genes glow gold.

- **Caption:** *At `1.5 h` post-irradiation, `1,169` transcripts surge under `56Fe` versus `280` under gamma—yet only `160` are shared.*

**Page 8**

- **Panel 1:** Zoom into the `160`-gene overlap: `16` belong to `GO:0006259` (*DNA metabolic process*), led by `BRCA1` (`+7.4` log2 in gamma, `+7.9` in `HZE`), `XRI1` (`+7.0` / `+7.1`), `RAD51` (`+5.3` / `+5.4`), `SYN2`, `MND1`, `AHP2`, `PARP1`, and `RAD17`.

- **Dialogue (Britt):** "Homologous recombination's core crew. And look at `atm-1`—almost the entire `Cluster B` (`424` transcripts) collapses without ATM, especially in `HZE`."

**Page 9**

- **Panel 1:** A comparison bar shows `WEE1` spiking far higher at `1.5 h` in gamma-treated seedlings than in `HZE`, while by `24 h` gamma seedlings hyperexpress S-phase transcripts.

- **Panel 2:** Diagram of the `56Fe` track: `50%` of its energy slams into a `9 nm` core cylinder (`~65` iron tracks per Arabidopsis nucleus at `30 Gy`), leaving only `15 Gy` in the dispersed electron penumbra versus `100 Gy` of dispersed gamma clusters.

- **Caption:** *Gamma rays scatter replication-blocking lesions everywhere, awakening `ATR` and `WEE1`. Iron ions punch concentrated, hard-to-repair holes that lean heavily on `ATM`.*

**Page 10**

- **Panel 1:** Yet `15` additional DNA-metabolism genes—including `LIG4` (`NHEJ`), `XRCC1` (`BER`), `XPC` (`NER`), `RAD23-3`, and `DRM2`—ignite at `1.5 h` *only* under `HZE`, many still firing even in `atm-1`.

- **Dialogue (Conklin):** "Even `1,009` HZE-only transcripts at `1.5 h`—and `Cluster B` is just a fraction of them. What are the other thousand genes doing?"

### Act II: The Ghost of Extended Night (Pages 11–22)

**Page 11**

- **Panel 1:** Conklin overlays `OSD-320` onto the AtGenExpress stress atlas: cold, heat, drought, salt, osmotic shock, wounding, UV-B, hydroxyurea, paraquat, *Pseudomonas syringae*, and **Extended Night**.

- **Panel 2:** Most conventional stresses sit dark against the `1.5 h` `DSB` core—even paraquat, a fierce generator of superoxide radicals, fails to trigger `BRCA1` or `RAD51`.

- **Dialogue (Britt):** "So reactive oxygen species alone don't fake a double-strand break. That `DSB` program is strictly for clastogens—and replication-blocking UV-B and hydroxyurea."

**Page 12**

- **Panel 1:** Suddenly, a bright emerald block lights up across `Cluster 2` of Figure 6: `HZE` at `1.5 h` and `3 h`—in *both* `Ws` and `atm-1`—matches **Extended Night** (`delayed dawn`) across every time point.

- **Panel 2:** Gamma radiation and bleomycin+MMC stay pitch black in that block.

- **Dialogue (Missirian):** "Anne, look at this. `1.5` hours after `56Fe`, the seedlings are acting as if the sun never rose."

**Page 13**

- **Panel 1:** Venn diagram of the false-night signature: `457` transcripts induced at `1.5 h` in both `Ws` and `atm-1` after `HZE` versus `230` transcripts persistently induced across all four Extended Night time points.

- **Panel 2:** **`174` genes** overlap—more than three-quarters of the entire Extended Night transcriptional program, firing in full daylight inside a `21°C` growth chamber.

**Page 14**

- **Panel 1:** Inside the seedling's leaf mesophyll cell, `Cluster D` (`1,336` transcripts repressed by `HZE`, ATM-independently) shuts down `411` chloroplast-associated genes (`FDR 7e-37`) alongside amine (`42` genes) and carboxylic acid (`59` genes) biosynthesis.

- **Caption:** *In normal darkness, Arabidopsis rations its leaf starch to last until dawn. When dawn is delayed, trehalose-6-phosphate drops threefold and growth halts.*

**Page 15**

- **Panel 1:** Simultaneously, `Cluster A` (`1,357` HZE-induced, ATM-independent transcripts) surges with `68` protein-catabolism genes (`FDR 3e-7`), cellular amino-acid catabolism (`15.9`-fold enrichment), and leucine-degradation enzymes.

- **Panel 2:** Visual metaphor: cellular machinery dismantling its own amino-acid scaffolds and feeding them into emergency respiration.

**Page 16**

- **Panel 1:** Inside the cytoplasm, peroxisomes elongate and divide: `PEX11c`, `PEX11d`, `PEX11e`, `FIS1b`, and `DRP3a` transcripts light up in lockstep in both early `HZE` and Extended Night.

- **Panel 2:** Fatty-acid beta-oxidation genes (`25.0`-fold enrichment in the `174`-gene overlap) flood the newly proliferated peroxisomes to burn membrane lipids for fuel.

**Page 17**

- **Panel 1:** Culligan and Britt debate at a whiteboard with two competing arrows drawn from the `56Fe` ion track.

- **Dialogue (Britt):** "Hypothesis A: `56Fe` tracks shred chloroplasts and mitochondria so badly that energy crashes within ninety minutes—the cell genuinely thinks it's starving."

- **Dialogue (Culligan):** "Or Hypothesis B: it's not starvation at all—the `170 keV/μm` radical cylinder denatures so many proteins and lipids that the cell boots up its Extended Night recycling crew just to clear the wreckage."

**Page 18**

- **Panel 1:** Meanwhile, `Cluster E` (`1,248` transcripts) clamps down on `22` cell-division and `17` DNA-packaging genes across both gamma and `HZE`, while `CycB1;1` spikes as a DNA-damage checkpoint beacon.

- **Panel 2:** In gamma, cell-cycle arrest leans on `ATM`; in `HZE`, `Cluster E` still represses even in `atm-1`.

**Page 19**

- **Panel 1:** The clock ticks to `6 h`, `12 h`, and `24 h` post-irradiation. By `24 h`, the `DSB` repair storm in `Cluster B` fades, and `HZE`-treated cell-cycle transcripts drift back toward baseline.

- **Panel 2:** Then a third wave rises: `Cluster C` (`349` transcripts) peaks at `6 h` in `HZE` and arrives at `24 h` in gamma—and it is **ATM-dependent**.

**Page 20**

- **Panel 1:** `Cluster C` lights up with `31` "response to chitin" genes (`FDR 4e-24`), `50` defense-response genes (`FDR 2e-9`), and `14` programmed-cell-death genes, overlapping with cold, salt, wounding, UV-B, and *Pseudomonas syringae* (`Cluster 3` in Figure 6).

- **Dialogue (Conklin):** "Wait—`ATM` is supposed to be a DNA-break kinase! Why does losing `ATM` wipe out late pathogen and abiotic stress transcripts?"

### Act III: The Signal in the Wreckage (Pages 21–30)

**Page 21**

- **Panel 1:** Britt sketches an evolutionary timeline: plants never evolved in `30 Gy` `56Fe` beams, yet they carry ancient, modular stress programs—one for broken chromosomes, one for carbon starvation, one for pathogen attack.

- **Dialogue (Britt):** "Unnatural radiation doesn't invent new pathways. It trips existing evolutionary tripwires—and `ATM` turns out to be wired into late defense signaling, not just `BRCA1`."

**Page 22**

- **Panel 1:** Conklin runs a cross-kingdom `BLAST` on the `160` shared `1.5 h` IR transcripts (`e-value < 1e-6`).

- **Panel 2:** `72` of the `160` genes match human homologs—including `At5g49110`, an uncharacterized Arabidopsis protein matching human *Fanconi anemia group I protein* (`FANCI`).

**Page 23**

- **Panel 1:** Side-by-side comparison of plant vs. human radiation scaling: `30 Gy` of `1 GeV/n` `56Fe` puts `~65` ion tracks through an Arabidopsis nucleus; in a human fibroblast (`30×` more DNA), the same track density per base pair takes just `2–3` iron ions (`~1 Gy`).

- **Caption:** *Even at Mars-relevant particle counts, a single relativistic iron nucleus leaves both a `BRCA1`-centered `DSB` signature and a non-DNA collateral-damage signature.*

**Page 24**

- **Panel 1:** Close-up of a `5`-day-old `Ws` seedling root tip recovering on `1× MS` agar: meristematic cells arrested by `CycB1;1` and `WEE1` pause division while `RAD51` and `LIG4` stitch chromatids back together.

- **Panel 2:** Beside it, an `atm-1` seedling root tip struggles without the `Cluster B` repair surge, showing how fragile genome stability becomes when the `DSB` sentinel is silenced.

**Page 25**

- **Panel 1:** Back in the BNL Controlled Environment Facility, the `24 h` harvest wraps up; the final `30–40` seedlings drop into liquid nitrogen at `-80°C`.

- **Panel 2:** At UC Irvine's Microarray Core Facility, `10 μg` total RNA per sample becomes biotin-tagged cRNA, fragmented to `35–200` bases and hybridized for `16 h` at `45°C` onto `44` `ATH1` chips.

**Page 26**

- **Panel 1:** A decade later, NASA OSDR ingests `GSE61484` as `OSD-320` (`GLDS-320`), re-normalizing all `44` `.CEL` files through `GL-DPPD-7114` (`oligo v1.58.0` RMA + `limma v3.50.3`) so any space biologist can query `Ws` vs. `atm-1` gene by gene.

**Page 27**

- **Panel 1:** The team stands together across campuses—UC Davis, UNH, and Brookhaven's NSRL—remembering the late Dr. Betsy Sutherland, whose pioneering work on clustered DNA lesions helped frame the study.

- **Caption:** *Gamma rays test the cell's ability to mend broken helices. Heavy ions test whether a cell can mend its helices while its power plants and proteins are burning.*

**Page 28**

- **Panel 1:** Split-panel recap of the three transcriptional waves: `1.5 h` ATM-dependent `DSB` core (`Cluster B`), `1.5 h` ATM-independent `HZE` "extended night" catabolism (`Cluster A`/`D`), and `6–24 h` ATM-dependent pathogen/abiotic defense (`Cluster C`).

**Page 29**

- **Panel 1:** Looking ahead from Brookhaven to low Earth orbit: if `56Fe` ions trigger protein catabolism and peroxisomal recycling on the ground, what happens to protein-folding machinery inside the endoplasmic reticulum during actual spaceflight on `SpaceX CRS-12`?

**Page 30 (Final Story Page)**

- **Panel 1:** A lone *Arabidopsis* seedling silhouette stands against a starry deep-space backdrop pierced by a single golden `56Fe` track, its peroxisomes glowing like lanterns in a false night.

- **Caption:** *In deep space, plants will not face radiation in the dark alone—they will have to survive the false night inside their own cells.*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31): Beamline & Experimental Architecture

- **Study Identity:** `OSD-320` (`GLDS-320` / `GSE61484`), `44` `Affymetrix ATH1` arrays (`22` conditions × `2` replicates; `30–40` pooled seedlings/sample).

- **Plant Growth:** `Ws` (WT) and `atm-1` (`ATM` DSB-kinase mutant), surface-sterilized (`20%` bleach), plated on `1× MS` Phytoagar, shipped on ice (`4°C`) to BNL, grown vertically `5` days at `21°C` (`16 h` light / `8 h` dark).

- **Radiation Regimes (Matched for Transient Root-Growth Arrest):**

  - **Gamma (`137Cs`, BNL Controlled Environment Radiation Facility):** `100 Gy` at `7 Gy/min` (`15 min`, completed `8:40 am`); low LET (`0.2 keV/μm`); dispersed `2–5` radical clusters (`4–5 nm`).

  - **HZE (`1 GeV/n` `56Fe26+`, BNL NSRL):** `30 Gy` at `7 Gy/min` (`~12 min`, two runs at `1:09 pm` & `1:28 pm`); high LET (`170 keV/μm`); `50%` energy in a `9 nm` core cylinder (`~65` tracks/Arabidopsis nucleus), `50%` in secondary electron penumbra (`15 Gy` dispersed).

- **Time Course & Filtering:** Harvested at `1.5`, `3` (WT only), `6`, `12`, and `24 h` post-IR (`±` unirradiated controls at `1.5` and `24 h`); `586` circadian and `685` diurnal-control transcripts (`85` shared) filtered out before clustering (`FC > 2`, adj. `p < 0.05`).

### Right Spread (Page 32): The Three Transcriptional Programs & Key Readouts

- **Program 1 — Core `DSB` Repair (`Cluster B`, `424` transcripts, `1.5 h` peak, ATM-dependent):**

  - `280` gamma-induced vs. `1,169` `HZE`-induced at `1.5 h`; `160` shared (`16` in `GO:0006259` DNA metabolism, e.g., `BRCA1`, `XRI1`, `RAD51`, `SYN2`, `MND1`, `AHP2`, `PARP1`, `RAD17`; `72/160` have human homologs including `At5g49110` ~ `FANCI`).

  - `15` additional DNA-repair transcripts induced at `1.5 h` uniquely by `HZE` (`LIG4`, `XRCC1`, `XPC`, `RAD23-3`, `DRM2`).

  - Induced by bleomycin+MMC, gamma, `HZE`, and weakly by UV-B/hydroxyurea—**not** by paraquat ROS or conventional abiotic/biotic stresses.

- **Program 2 — The `HZE`-Only "Extended Night" Signature (`1.5–3 h`, ATM-independent):**

  - `457` early `HZE`-upregulated transcripts overlap `174` of `230` (`75.7%`) persistent Extended Night transcripts.

  - **Upregulated (`Cluster A`, `1,357` transcripts):** Protein catabolism (`68` genes, `FDR 3e-7`), amino-acid/leucine catabolism (`15.9`-fold), peroxisomal fatty-acid beta-oxidation (`25.0`-fold), and peroxisome fission/elongation (`PEX11c–e`, `FIS1b`, `DRP3a`).

  - **Downregulated (`Cluster D`, `1,336` transcripts):** Chloroplast (`411` genes, `FDR 7e-37`), amine (`42` genes), and carboxylic acid (`59` genes) biosynthesis.

- **Program 3 — Cell-Cycle Arrest & Late Defense Cross-Talk (`6–24 h`):**

  - `Cluster E` (`1,248` transcripts): S- and M-phase repression at `1.5 h` (`CycB1;1` induced; `WEE1` stronger in gamma than `HZE`; gamma hyperexpresses S-phase genes by `24 h`).

  - `Cluster C` (`349` transcripts, ATM-dependent; `9` core genes in `Cluster 3`): Peaks at `6 h` (`HZE`) / `24 h` (gamma); enriched for chitin response (`31` genes), defense (`50` genes), and programmed cell death (`14` genes), overlapping cold, salt, wounding, UV-B, and *P. syringae*.

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "series_title": "Roots in Orbit: The NASA OSDR Plant Chronicles",
  "volume": 34,
  "osdr_accession": "OSD-320",
  "glds_accession": "GLDS-320",
  "doi": "10.26030/ks24-9880",
  "geo_accession": "GSE61484",
  "arrayexpress_accession": "E-GEOD-61484",
  "skipped_accessions": [
    "OSD-315",
    "OSD-316",
    "OSD-317",
    "OSD-318",
    "OSD-319"
  ],
  "organism": "Arabidopsis thaliana (Ws WT, atm-1)",
  "environment_or_mission": "Brookhaven National Laboratory (BNL) Controlled Environment Radiation Facility (137Cs gamma, 100 Gy) & NSRL (1 GeV/n 56Fe HZE, 30 Gy)",
  "assay": "Affymetrix ATH1 microarray (n = 44)",
  "key_molecular_actors": [
    "ATM",
    "ATR",
    "WEE1",
    "CycB1;1",
    "BRCA1",
    "RAD51",
    "XRI1",
    "MND1",
    "LIG4",
    "XRCC1",
    "PEX11c-e",
    "FIS1b",
    "DRP3a",
    "At5g49110 (FANCI homolog)"
  ],
  "core_themes_added": [
    "High-LET 56Fe HZE (170 keV/um) vs low-LET gamma (0.2 keV/um) DNA damage spectra",
    "ATM-dependent core DSB repair response vs replication-stress WEE1 signaling",
    "HZE-specific ATM-independent 'extended night' catabolic & peroxisomal proliferation program",
    "Late ATM-dependent overlap with pathogen/chitin defense and abiotic stress"
  ],
  "continuity_hook_next": {
    "next_volume": 35,
    "next_osdr": "OSD-321",
    "next_title_hint": "SpaceX CRS-12 BRIC Arabidopsis Unfolded Protein Response (Col-0, atire1, bzip60, bzip28, bzip28 bzip60)"
  }
}

```

Say **"Go on"** when you're ready for **Volume 35**.
