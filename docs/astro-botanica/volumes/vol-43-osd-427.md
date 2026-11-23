---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 43
title: "Marks That Steer the Root"
accession: OSD-427
script_status: condensed
pages_covered: 0/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 93)
---

> [!NOTE]
> Script status **condensed**: 0/32 pages have their own heading.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles*

- **Volume:** 43 — *Marks That Steer the Root*

- **OSDR / GLDS Accession:** `OSD-427` (Version 4, updated `07-Jun-2024`; Submitted `18-Aug-2018`; Initial Release `13-Aug-2021`) / `GLDS-427`

- **DOI:** `10.26030/0qxz-qh80` | **GEO:** `GSE118502` (SuperSeries `GSE118503`; companion Bisulfite-Seq: `OSD-416` / `GSE118483`)

- **Chronology Note:** `OSD-415`–`OSD-426` are skipped for the plant RNA-Seq chronicle sequence (`OSD-417`–`OSD-423`, `OSD-425`, and `OSD-426` are rodent, *C. elegans*, and myoblast studies; `OSD-416` is the companion Whole-Genome Bisulfite Sequencing dataset from this same `APEX-04-EpEx` flight, integrated here through its primary publication).

- **Primary Publication:** Paul, A.-L., Haveman, N., Califar, B., & Ferl, R. J. (2021). Epigenomic Regulators Elongator Complex Subunit 2 and Methyltransferase 1 Differentially Condition the Spaceflight Response in *Arabidopsis*. *Frontiers in Plant Science*, 12, 691790. DOI: `10.3389/fpls.2021.691790` | PMID: `34589093` | `PMC8475764`

- **Facility / Mission & Conditions:** `APEX-04-EpEx` launched on `SpaceX-10` (`CRS-10`, `02/19/2017`–`03/19/2017`); **Veggie** (`ISS-Columbus`, crew: Peggy Whitson & Shane Kimbrough, Expedition 49/50) vs. **ISSES** (`KSC`, `24 h`-delayed ground control). `100 mm × 15 mm` Petri plates (`50 mL` `0.5%` Phytagel, `0.5×` MS, `0.5%` sucrose, `1×` Gamborg's Vitamin Mixture) sealed with `3M Micropore` tape, far-red dormancy + black `Duvetyne` cloth, `4°C` cold stowage (`7-day` stratification), `11 days` growth under constant `100–135 μmol/m²/s` red/blue LEDs; mean temp `19.06°C` (`min 1.72°C`, `max 28.15°C`), `46.73%` avg RH; `3.304 mGy` total absorbed dose (`0.3 mGy/day`). Harvested into `RNAlater` in `KFTs` -> `MELFI` (`-80°C`).

- **Organism & Genotypes:** *Arabidopsis thaliana* — `Col-0` wild-type (`TAIR CS70000`), `met1-7` (CG maintenance methyltransferase mutant), and `elp2-5` (Elongator complex subunit 2 mutant; seed lines gifted by Dr. Zhonglin Mou).

- **Assay & Platform:** `n = 48` RNA-Seq samples (`3` genotypes × `2` organs [leaf, root] × `2` conditions [Flight, Ground Control] × `4` biological replicates; `1` flight `met1-7` replicate came from a single plate after plate `C6` was lost). `RNeasy Plant Mini Kit` (`RIN 7.1–9.3`), `ERCC` Mix 1 spike-in (`2 μL` of `1:200` per `1000 ng` RNA), `NEBNext Poly(A)` + `NEBNext Ultra Directional` (`10` PCR cycles), pooled `60%` RNA-Seq : `40%` WGBS + `1%` `PhiX` on `Illumina HiSeq 3000` (`2 × 101` PE, `12` lanes; `46.10M–60.37M` reads in the first 25 samples, `0.47%–2.45%` rRNA). GeneLab `GL-DPPD-7101-F` (`UMI-tools v1.1.2`, `Trim Galore! v0.6.7`, `STAR v2.7.10a`, `RSEM v1.3.1`, `DESeq2 v1.34.0`); paper DEG cutoffs: `|log2FC| ≥ 1`, `FDR < 0.05`.

## 2. Dramatis Personae (Grounded in Study Data)

- **Col-0 (The Balanced Navigator):** Wild-type *Arabidopsis* (`TAIR CS70000`). Keeps its genome-wide cytosine methylation averages steady between Earth and orbit while selectively tuning `659` leaf and `765` root DMRs—guiding healthy green rosettes and negatively phototropic roots away from Veggie's overhead LEDs.

- **elp2-5 (The Lost Compass):** Mutant lacking Elongator Complex Subunit 2, an RNA Pol II co-factor linked to siRNA-directed `CHH` methylation, root development, and `NPR1`-mediated immunity. In microgravity, its roots coil randomly within `1 cm` of the seed coat, starved of directional cues, while its leaves darken with anthocyanins and chlorosis.

- **met1-7 (The Silent Rewriter):** Mutant lacking `METHYLTRANSFERASE 1` (`MET1`), the direct `CG` maintenance enzyme. Visually, it mimics `Col-0` in orbit—healthy leaves, extended roots, normal biomass—yet beneath the surface it rewires `226` leaf DEGs and `6,114` leaf DMRs along an almost completely different transcriptional path.

- **Astronauts Peggy Whitson & Shane Kimbrough:** Expedition 49/50 crew who unswaddled the light-tight `Duvetyne`-wrapped plates from `4°C` stowage, slotted them vertically into `ISS-Columbus` Veggie, photographed them daily, and fixed the 11-day-old seedlings into `RNAlater`-filled `KFTs` at the Maintenance Work Area.

- **The UF Space Plants Team (Anna-Lisa Paul, Natasha Haveman, Brandon Califar, Robert J. Ferl):** Dissected leaves from roots under stereo-microscopes and co-sequenced `60%` RNA-Seq with `40%` bisulfite-converted DNA on `12` `HiSeq 3000` lanes so the transcriptome's base diversity would stabilize the methylome reads.

## 3. 32-Page Chapter Script

### Act I: The Swaddled Plates (Pages 1–10)

- **Page 1:** Cold dark (`4°C`). Rows of `100 mm × 15 mm` Phytagel plates sit wrapped in black `Duvetyne` cloth after far-red dormancy treatment, riding `SpaceX-10` toward the ISS (`02/19/2017`). Narration: *Seven days of cold stratification hold three genotypes in suspended germination—one wild-type, two stripped of epigenetic tools.*

- **Page 2:** `ISS-Columbus`. Astronaut Peggy Whitson peels away the `Duvetyne` wrap and slides the `3M Micropore`-taped plates into **Veggie** (`02/25/2017`). The pink-magenta glow of constant red/blue LEDs (`100–135 μmol/m²/s` PAR) floods the agar.

- **Page 3:** Twenty-four hours behind orbit, inside the **ISSES** chamber at Kennedy Space Center, the Ground Control plates wake to the exact same light and temperature curve (`19.06°C` mean, `46.73%` RH), one day delayed to mirror every crew touch.

- **Page 4:** Close-up on the three seed lines germinating on `0.5×` MS Phytagel: `Col-0`, `met1-7`, and `elp2-5`. On the ground, gravity pulls every radicle straight down. In orbit, without gravity's vector, only the overhead LEDs offer a compass.

- **Page 5:** Day 5 on orbit. `Col-0` and `met1-7` roots sense the blue/red light gradient and bend away from the top edge—negative phototropism mimicking terrestrial gravitropism. Beside them, `elp2-5` radicles curl back toward their own seed coats.

- **Page 6:** Infographic panel explaining the two epigenetic pathways at stake: `MET1` directly stamps methyl groups onto `CG` sites during DNA replication, whereas `ELP2` rides with RNA Pol II and siRNA machinery to steer *de novo* `CHH` methylation and stress transcription.

- **Pages 7–8 (Double-Page Spread Anchor):** **Day 11 — Three Fates Under Pink Light.** Side-by-side comparison of the `11`-day-old plates (`ISS` Flight bottom row vs. `ISSES` Ground Control top row, adapted from `PMC8475764` Figure 1C). `Col-0` and `met1-7` spread broad green leaves and sweep long roots across the Phytagel away from the seed; `elp2-5` in spaceflight forms a tight, tangled knot of roots trapped within `1 cm` of the germinated seed, crowned by dark, reddish-purple anthocyanin-rich and chlorotic leaves—yet a biomass scale inset reads: *No significant dry/fresh mass difference between Flight and Ground.*

- **Page 9:** Peggy Whitson at the Maintenance Work Area on Day 11. Each plate's seedlings are gently lifted into `RNAlater`-filled `KFTs` and stowed in `MELFI` at `-80°C` (absorbing `3.304 mGy` over `11` days). One `met1-7` flight plate (`C6`) is lost to the tally, leaving `7` plates for flight `met1-7` and `8` for every other group.

- **Page 10:** Return via Dragon splashdown to Long Beach, JSC, KSC, and Gainesville. Under an Olympus stereo-microscope, thawed seedlings are dissected into **leaf**, **hypocotyl** (set aside), and **root**, yielding `48` RNA-Seq samples (`RIN 7.1–9.3`).

### Act II: The Co-Sequenced Loom (Pages 11–22)

- **Page 11:** At the UF ICBR core, `48` `NEBNext` directional RNA-Seq libraries (spiked with `ERCC` Mix 1) are mixed in a `60:40` ratio with `48` bisulfite-converted DNA libraries (`OSD-416`) plus `1%` `PhiX`. Narration: *RNA-Seq lends its four-base diversity to balance the C-depleted bisulfite reads across twelve `HiSeq 3000` lanes.*

- **Page 12:** First surprise from the methylome (`PMC8475764` Figure 2): `Col-0` wild-type shows **zero** significant change in genome-wide average methylation between spaceflight and ground in either leaves or roots.

- **Page 13:** Cut to the mutants: both `elp2-5` and `met1-7` surge into **genome-wide hypermethylation** in spaceflight. `elp2-5` jumps across all three contexts (`CG`, `CHG`, `CHH`) in both organs; `met1-7` rises across all contexts in leaves, but only in `CG` in roots.

- **Page 14:** Zooming into protein-coding genes (`2 kb` upstream to `2 kb` downstream). In `elp2-5` roots, methylation climbs across every genic feature in all contexts, led by `CHH` (`60%` of spaceflight `DmCs`). In `met1-7` leaves, `CG` and `CHH` hypermethylation clusters heavily upstream of transcription start sites.

- **Page 15:** Counting Differentially Methylated Regions (`100 bp` windows, `p < 0.01`): `Col-0` logs `659` leaf and `765` root `DMRs` (`67%` hypomethylated in roots); `elp2-5` explodes to `2,974` root `DMRs` (`717` in leaves, `97–99%` hypermethylated); `met1-7` spikes to `6,114` leaf and `3,745` root `DMRs` (`83%` `CG`, `97–99%` hypermethylated).

- **Page 16:** Now the transcriptome (`|log2FC| ≥ 1`, `FDR < 0.05`) speaks (`PMC8475764` Figure 7). In **leaves**, `Col-0` shifts `207` genes (`123` up, `84` down) and `met1-7` shifts `226` (`160` up, `66` down)—while `elp2-5` falls nearly silent with just `36` DEGs (`26` up, `10` down).

- **Page 17:** In **roots**, the roles invert: `Col-0` shifts `147` DEGs (`28` up, `119` down) and `elp2-5` shifts `120` (`50` up, `70` down), while `met1-7` drops to `47` (`39` up, `8` down).

- **Page 18:** Venn diagrams shatter any expectation of a shared program. Across `436` total leaf DEGs and `288` total root DEGs, only `35` overlap between organs—and only `8%` of leaf DEGs and `12%` of root DEGs overlap across genotypes!

- **Page 19:** A dramatic bar chart bridges the two datasets: **82%** of spaceflight root DEGs (`80%` across all genotypes) carry differentially methylated cytosines (`DmCs`), compared with only **31%** (`30%` average) in leaves. Roots lean far harder on DNA methylation to tune their spaceflight response.

- **Page 20:** Inside `elp2-5`'s cramped `1 cm` root zone, the transcriptome tells the story of its confinement: nearly a third of its uniquely induced spaceflight leaf genes scream **nutrient depletion**, alongside **heat stress**, **ROS**, **hypoxia**, and **pathogen defense**—while its `DmC-DEGs` lack `Col-0`'s normal cell-wall and membrane-nanodomain acclimation.

- **Page 21:** Inside `met1-7`, the contrast is stark: its `DmC-DEGs` show almost no enriched GO stress clusters (save anthocyanin pigment metabolism in flight leaves), instead shifting untargeted `CG` marks alongside signal transduction, membrane transporters, and transcriptional activators.

- **Page 22:** Correlation heatmaps (`PMC8475764` Figures 10–11): in `Col-0` roots, `66%` (`75/114`) of `DmC-DEGs` show positive expression–methylation correlation and `16%` (`19/114`) negative; in `elp2-5` roots, `54%` (`55/101`) flip to negative correlation as `CHH` hypermethylation blankets gene bodies and flanks.

### Act III: The Two Pillars of Epigenetic Flight (Pages 23–30)

- **Page 23:** Split-screen revelation: `MET1` guards the **leaf** spaceflight transcriptome (`226` DEGs, `6,114` DMRs), yet losing `MET1` does not break root navigation or rosette vigor.

- **Page 24:** `ELP2` guards the **root** spaceflight transcriptome (`120` DEGs, `2,974` DMRs) and directional growth. Without `ELP2`, a seedling in microgravity cannot use light to replace gravity's lost compass.

- **Page 25:** The nutrient-trap feedback loop illustrated: because `elp2-5` roots fail to extend away from the seed, all of its normal biomass stays packed into a `1 cm` radius, exhausting local Phytagel nutrients and amplifying oxidative and hypoxia signals.

- **Page 26:** Even on Earth (`Ground Control`), `elp2-5` vs. `Col-0` differs by `2,119` leaf and `1,667` root DEGs (`996` and `1,222` `DmC-DEGs`), whereas gravity masks the navigation defect that microgravity lays bare.

- **Page 27:** Cross-referencing `Col-0` root `DmC-DEGs` (`114` genes) reveals classic spaceflight pillars: defense pathways, hypoxia response, cell wall remodeling, membrane nanodomains, and `FAD`/manganese-ion binding—all missing from the mutants' enrichment profiles.

- **Page 28:** The broader lesson takes shape: wild-type plants do not remodel their *average* genome methylation in orbit; instead, they place surgical `DmCs` and `DMRs` on specific stress and navigation loci.

- **Page 29:** GeneLab's `GL-DPPD-7101-F` pipeline archives the `48` `OSD-427` RNA-Seq libraries alongside `OSD-416` (`WGBS`), linking `ERCC`-normalized counts to `TAIR10.54` so future missions can separate direct `CG` maintenance from `ELP2`/siRNA-guided `CHH` plasticity.

- **Page 30:** Closing vista of `ISS-Columbus` Veggie plates glowing magenta above Earth's limb. Narration: *When gravity vanishes, a plant does not merely read its DNA—it reads the ink written over it.*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31) — *Experimental Architecture & Epigenomic Footprint*

- **Flight & Hardware:** `APEX-04-EpEx` (`SpaceX-10`, `02/19/2017`–`03/19/2017`) | Veggie (`ISS-Columbus`) vs. `ISSES` (`KSC`, `24 h` delay) | `11 d` growth, `100–135 μmol/m²/s` red/blue LEDs, `19.06°C` mean, `46.73%` RH, `3.304 mGy` total dose.

- **Design (`n = 48` RNA-Seq):** `3` genotypes (`Col-0`, `met1-7`, `elp2-5`) × `2` organs (`leaf`, `root`) × `2` conditions (`Flight`, `GC`) × `4` biological replicates (`60%` RNA-Seq : `40%` WGBS pooled on `12` `HiSeq 3000` lanes, `2 × 101` PE).

| Genotype | Flight Morphology & Biomass | Leaf DMRs (`100 bp`, `p < 0.01`) | Root DMRs (`100 bp`, `p < 0.01`) | Dominant Methylation Shift |
|---|---|---|---|---|
| **`Col-0` (WT)** | Healthy green leaves; negatively phototropic roots; normal biomass | `659` (`39%` hypo / `61%` hyper) | `765` (`67%` hypo / `33%` hyper) | No global average change; `51%` `CHH` DMRs |
| **`elp2-5`** | Tangled roots within `1 cm` of seed; anthocyanin/chlorotic leaves; normal biomass | `717` (`97–99%` hyper) | `2,974` (`97–99%` hyper) | Global hypermethylation; `63%` `CHH` DMRs |
| **`met1-7`** | Healthy leaves & extended roots like `Col-0`; normal biomass | `6,114` (`97–99%` hyper) | `3,745` (`97–99%` hyper) | Global hypermethylation (`CG` in roots); `83%` `CG` DMRs |

### Right Spread (Page 32) — *Organ-Specific Transcriptomic Rewiring (`|log2FC| ≥ 1`, `FDR < 0.05`)*

| Genotype | Leaf DEGs (Up / Down) | Leaf `DmC-DEGs` | Root DEGs (Up / Down) | Root `DmC-DEGs` | Key Functional Signature |
|---|---|---|---|---|---|
| **`Col-0` (WT)** | `207` (`123` / `84`) | `59` (`41%` neg, `49%` pos) | `147` (`28` / `119`) | `114` (`16%` neg, `66%` pos) | Glyoxysomes (leaf); defense, hypoxia, cell wall & nanodomains (root) |
| **`elp2-5`** | `36` (`26` / `10`) | `11` (`45%` neg, `45%` pos) | `120` (`50` / `70`) | `101` (`54%` neg, `42%` pos) | Nutrient depletion, heat, ROS, hypoxia; impaired root navigation |
| **`met1-7`** | `226` (`160` / `66`) | `72` (`26%` neg, `60%` pos) | `47` (`39` / `8`) | `28` (`36%` neg, `50%` pos) | Anthocyanin metabolism (leaf), transporters & transcription; minimal GO clustering |

- **Cross-Organ & Cross-Genotype Coupling:** Only `35` DEGs shared between `436` leaf DEGs and `288` root DEGs; only `8%` (leaf) and `12%` (root) DEGs overlap across genotypes; **`82%` of root DEGs** vs. **`31%` of leaf DEGs** carry `DmCs`.

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "volume_added": 43,
  "title": "Marks That Steer the Root",
  "osdr_accession": "OSD-427",
  "glds_accession": "GLDS-427",
  "doi": "10.26030/0qxz-qh80",
  "osdr_url": "https://osdr.nasa.gov/bio/repo/data/studies/OSD-427",
  "primary_publication": {
    "citation": "Paul, A.-L., Haveman, N., Califar, B., & Ferl, R. J. (2021). Epigenomic Regulators Elongator Complex Subunit 2 and Methyltransferase 1 Differentially Condition the Spaceflight Response in Arabidopsis. Frontiers in Plant Science, 12, 691790.",
    "doi": "10.3389/fpls.2021.691790",
    "pmid": "34589093",
    "pmcid": "PMC8475764",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8475764/"
  },
  "skipped_accessions": [
    "OSD-415",
    "OSD-416 (companion WGBS dataset for APEX-04-EpEx, integrated via PMC8475764)",
    "OSD-417",
    "OSD-418",
    "OSD-419",
    "OSD-420",
    "OSD-421",
    "OSD-422",
    "OSD-423",
    "OSD-424",
    "OSD-425",
    "OSD-426"
  ],
  "organism": "Arabidopsis thaliana (Col-0 CS70000, met1-7, elp2-5)",
  "hardware_and_environment": {
    "mission": "APEX-04-EpEx (SpaceX-10 / CRS-10, 02/19/2017–03/19/2017)",
    "hardware": "Veggie (ISS-Columbus) vs. ISSES (KSC, 24 h delay); 100 x 15 mm Phytagel plates, 3M Micropore tape, Duvetyne cloth, KFTs (RNAlater), MELFI (-80°C)",
    "growth_conditions": "11 days, constant 100–135 μmol/m²/s red/blue LEDs, mean 19.06°C (1.72–28.15°C), 46.73% avg RH, 3.304 mGy total dose"
  },
  "assays": [
    "RNA-Seq (n = 48, Illumina HiSeq 3000 2x101 PE, ERCC Mix 1 spike-in, co-sequenced 60:40 with OSD-416 WGBS)"
  ],
  "key_scientific_beats": [
    "elp2-5 roots fail to follow directional light cues in microgravity, clustering within 1 cm of the seed with anthocyanin-rich/chlorotic leaves despite normal total biomass.",
    "met1-7 matches Col-0 morphology in orbit yet rewires 226 leaf DEGs and 6,114 leaf DMRs (83% CG) along a unique transcriptional trajectory.",
    "Wild-type Col-0 maintains stable genome-wide methylation averages in spaceflight while deploying targeted DMRs (659 leaf, 765 root).",
    "82% of spaceflight root DEGs vs. 31% of leaf DEGs carry differentially methylated cytosines (DmCs), with ELP2 governing root CHH methylation and MET1 governing leaf CG responses."
  ],
  "continuity_hook_next": {
    "next_osdr_candidate": "OSD-428",
    "rationale": "Inspect OSD-428 (listed as a Related Study to OSD-406) and subsequent accessions (OSD-428–OSD-436) to confirm the next chronological plant biology dataset for Volume 44."
  }
}

```

Say **"Go on"** when you're ready for **Volume 44**.
