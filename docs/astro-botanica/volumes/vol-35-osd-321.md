---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 35
title: "The Equalizer in the Dark"
accession: OSD-321
script_status: partial
pages_covered: 30/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 77)
---

> [!NOTE]
> Script status **partial**: 30/32 pages have their own heading.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles*

- **Volume:** 35

- **Title:** *The Equalizer in the Dark*

- **OSDR / GLDS Accession:** `OSD-321` (`GLDS-321` | DOI: `10.26030/z8mc-g359` | Data.gov | GEO: `GSE148914`)

- **Chronology Note:** Advances directly from Volume 34 (`OSD-320`) with no skipped accessions.

- **Primary Publication:** Angelos, E., Ko, D. K., Zemelis-Durfee, S., & Brandizzi, F. (2021). *Relevance of the Unfolded Protein Response to Spaceflight-Induced Transcriptional Reprogramming in Arabidopsis.* *Astrobiology*, 21(3), 367–380. (PMC7987364)

- **Mission & Vehicles:** **SpaceX CRS-12** (`Dragon` capsule) to the **International Space Station (ISS)** — launched **August 14, 2017**, undocked/reentered **September 16, 2017**, de-integrated at **Kennedy Space Center (KSC)** on **November 1, 2017**; ground control run with a `2`-day offset in the **KSC ISS Environmental Simulator**.

- **Hardware & Conditions:** `4` **Biological Research In a Canister (BRIC)** canisters housing `22` **Petri Dish Fixation Units (PDFUs)** (`60 mm` Petri dishes, `6.7 mL` `½ MS` + Gamborg's B5 vitamins + `0.5%` sucrose + `0.4%` Phytagel, pH `5.7`; `70–80` seeds/plate; double-wrapped in sterile aluminum foil; `HOBO` temperature loggers in `2` BRICs; `14`-day dark germination on ISS, fixed in situ with `RNAlater` for `3 h` at room temp, frozen in ISS `-80` `MELFI`, returned at `-32°C` in double cold bags).

- **Organism & Genotypes:** *Arabidopsis thaliana* — `Col-0` (WT, `5` plates/unit), `atire1` (`ire1a ire1b` double mutant, `4` plates/unit), `bzip60` (`4` plates/unit), `bzip28` (`4` plates/unit), and `bzip28 bzip60` (`5` plates/unit).

- **Assay / Platform:** `Illumina HiSeq 4000` (`50-nt` single-end `TruSeq Stranded mRNA`, `~32M` reads/sample, `95–99%` mapped to `TAIR10`); `DESeq2 v1.16.1` (`adj. p < 0.01`, `|log2FC| > 1.5`); OSDR reprocessed via `GL-DPPD-7101-G` (`NF_RCP v2.1.0`).

## 2. Dramatis Personae (Grounded in Study Data)

- **Dr. Federica Brandizzi** *(Principal Investigator, Michigan State University)* — ER-stress pioneer who designed the experiment to test whether the unfolded protein response (`UPR`) is required for plants to reprogram their transcriptomes in microgravity.

- **Evan Angelos** *(First Author, Michigan State University)* — Executed the `SpaceX CRS-12` BRIC-PDFU launch preparations, tissue harvesting, and molecular characterization.

- **Dr. Dae Kwan Ko** *(Bioinformatician, Michigan State University)* — Led the `RNA-seq` alignment, `DESeq2` differential expression, and `K`-means clustering that uncovered the unexpected ground-versus-flight reversal.

- **Starla Zemelis-Durfee** *(Researcher, Michigan State University)* — Co-led the pre-launch sterilization, grid plating, and BRIC-PDFU integration at KSC.

- **AtIRE1 (`IRE1a`/`IRE1b`) & `bZIP60`** — The ER-resident kinase/ribonuclease and its unconventionally spliced transcription factor (`TF`) partner, canonically tasked with resolving unfolded-protein buildup in the endoplasmic reticulum.

- **`bZIP28`** — The ER membrane-tethered transcription factor (plant homolog of mammalian `ATF6`) that teams up with `bZIP60` during chemical ER stress—yet turns out to play an **antagonistic** tug-of-war with `bZIP60` inside sealed `BRIC-PDFU` plates on Earth.

## 3. 32-Page Chapter Script

### Act I: Sealed in Aluminum Foil (Pages 1–10)

**Page 1 (Splash Page)**

- **Visual:** Inside a pitch-black polymer `PDFU` aboard the ISS, pale, etiolated *Arabidopsis* seedlings twist in zero gravity—both roots and hypocotyls plunging straight into translucent `½ MS` Phytagel—while an astronaut's gloved hand depresses the `RNAlater` actuator on Day 14.

- **Caption:** *August 2017. Four black canisters ride SpaceX CRS-12 into orbit, carrying five genetic lines stripped of their cellular ER-stress alarms.*

**Page 2**

- **Panel 1:** Forty-eight hours before the **August 14, 2017** launch, Evan Angelos and Starla Zemelis-Durfee work inside a sterile hood at KSC: `70%` ethanol, `50%` bleach with `0.5%` Tween 20, and nine sterile water washes.

- **Panel 2:** Using a `1 mL` filter-tip pipette, they grid-plate `70–80` seeds per `60 mm` dish across `22` `PDFUs` (`Col-0`, `atire1`, `bzip60`, `bzip28`, `bzip28 bzip60`), seal with Parafilm, and wrap each plate twice in sterile aluminum foil.

- **Dialogue (Angelos):** "Four `BRIC` canisters, `HOBO` temperature loggers in two of them, and `4°C` cold stowage until Dragon docks. No light touches these seeds for fourteen days."

**Page 3**

- **Panel 1:** Atop the Falcon 9, `SpaceX CRS-12` lifts off into orbit; inside the Dragon cold bags, dormant seeds wait at `4°C`.

- **Panel 2:** On the ISS, astronauts pull the `BRICs` from cold stowage and warm them to ambient cabin temperature, waking the seeds into `14` days of dark germination.

- **Dialogue (Brandizzi, voiceover):** "On Earth, heat, pathogens, and high light jam unfolded proteins into the endoplasmic reticulum. Without `IRE1`, `bZIP60`, or `bZIP28`, plants falter. What happens when microgravity hits?"

**Page 4**

- **Panel 1:** Two days behind orbit, the **KSC ISS Environmental Simulator** replays the exact temperature profile logged for the flight canisters.

- **Panel 2:** On Day 14 in orbit, ISS astronauts actuate the `PDFUs`, flooding the dark chambers with `RNAlater`, wait `3` hours at room temperature, and slide the canisters into the `-80°C` `MELFI` freezer.

**Page 5**

- **Panel 1:** **September 16, 2017:** Dragon undocks and splashes down with the `BRICs` conditioned at `-32°C` in double cold bags.

- **Panel 2:** **November 1, 2017:** At KSC, Angelos thaws plates three at a time, snapping quick photos before transferring seedlings with sterile forceps into liquid-nitrogen tubes.

**Page 6**

- **Panel 1:** Side-by-side plate photos (`Fig. 1A–B`): on the ground, pale etiolated hypocotyls arch *upward* into the air above the agar while roots drill straight down.

- **Panel 2:** In flight, *every* genotype—`Col-0` and all four UPR mutants—sends both roots and hypocotyls plunging into the agar, with elongated cotyledon petioles.

- **Dialogue (Angelos):** "No gravity vector, no difference between wild type and mutants. Morphologically, losing the UPR didn't change a thing."

**Page 7 (Double-Page Spread Anchor — Page 7)**

- **Visual:** Electropherogram traces from the Agilent Bioanalyzer 2100 stretch across both pages: flight samples show crisp `25S` and `18S` peaks (`RIN 7.5–8.0`), while `77%` of ground traces confuse the software (`RIN 4.0–7.7`) because an organellar `18S (-3)` peak looms beside a shrunken nuclear `25S` peak.

- **Caption:** *At first glance, the ground RNA looked degraded—until they checked the `25S/18S` peak ratio.*

**Page 8**

- **Panel 1:** Bar charts (`Fig. 2A–C`) reveal the truth: the `25S/18S` ratio is identical across flight and ground (`no degradation`), yet total RNA yield and nuclear `25S`/`18S` rRNA are significantly *higher* in flight!

- **Dialogue (Ko):** "Ground seedlings didn't rot—they were starved of nuclear rRNA compared to flight! Spaceflight actually boosted ribosome biogenesis."

**Page 9**

- **Panel 1:** At Michigan State University's Genomics Core, `Illumina HiSeq 4000` delivers `~32 million` `50-nt` reads per sample (`95–99%` mapped to `TAIR10`).

- **Panel 2:** `PCA` (`Fig. 3B`) splits the transcriptome cleanly into two distant continents: Ground tightly clustered on one side, Flight spread across the other.

**Page 10**

- **Panel 1:** `DESeq2` (`adj. p < 0.01`, `|log2FC| > 1.5`) tallies **`3,465` total DEGs** across the five genotypes (`Fig. 4`): `Col-0` leads with `2,506` DEGs (`1,675` up, `831` down), while `bzip28 bzip60` has the fewest at `1,855` (`1,293` up, `562` down).

- **Dialogue (Angelos):** "Every single UPR mutant has fewer spaceflight DEGs than wild type—and upregulated genes outnumber downregulated ones two-to-one. So the UPR *does* drive spaceflight reprogramming... right?"

### Act II: The Plot Twist in the Ground Control (Pages 11–22)

**Page 11**

- **Panel 1:** Dae Kwan Ko runs `PANTHER GO` enrichment on `WT` DEGs (`Fig. 5`): flight *downregulates* `response to abscisic acid`, `response to water deprivation`, `response to hypoxia`, `response to oxidative stress`, and `amino acid catabolism`.

- **Panel 2:** Meanwhile, flight *upregulates* defense secondary metabolites, `DNA repair/replication`, `cell cycle`, and—bizarrely—**`response to red or far-red (R/FR) light`** while downregulating **`absence of light`**.

**Page 12**

- **Panel 1:** Brandizzi frowns at the `R/FR` light readout, holding up a double-foil-wrapped `BRIC-PDFU`.

- **Dialogue (Brandizzi):** "These plates were sealed in polymer canisters and four layers of aluminum foil from August 12 until fixation. Not a single photon reached them."

- **Caption:** *How do seedlings in total darkness turn on red/far-red light genes and elongate their petioles?*

**Page 13**

- **Panel 1:** Ko points back to the `Fig. 1` morphology: in microgravity, etiolated hypocotyls and petioles plunged directly into the `0.5%` sucrose Phytagel, whereas on Earth they rose into dry air above the plate.

- **Dialogue (Ko):** "Sucrose in the media is known to modulate phytochrome A `R/FR` signaling—and boost rRNA transcription and total RNA! Ground hypocotyls barely touched the sugar; flight seedlings bathed in it."

**Page 14**

- **Panel 1:** Then Ko unveils the `K`-means heatmap (`Fig. 6`) of all `3,465` DEGs across five clusters (`C1`–`C5`), and the room goes quiet.

- **Panel 2:** Across the right half of the heatmap (Flight), all five genotypes—`Col-0`, `atire1`, `bzip60`, `bzip28`, `bzip28 bzip60`—glow in near-identical shades. On the left half (Ground), the mutants diverge wildly.

**Page 15**

- **Panel 1:** Venn/bar comparison (`Supplementary Fig. S3`): on the **ground**, **`517` DEGs** differ significantly (`p ≤ 0.01`) from `WT` in at least one UPR mutant. In **spaceflight**, only **`144` DEGs** differ—a nearly fourfold collapse!

- **Dialogue (Brandizzi):** "Wait—the reason `bzip28 bzip60` had fewer `flight-vs-ground` DEGs wasn't because it failed to respond to space. It's because the mutants were already scrambled on the *ground*, and spaceflight *equalized* them!"

**Page 16**

- **Panel 1:** Zoom into **Cluster 1** (`2,299` flight-upregulated DEGs): on the ground, `39.1%` of `C1` genes differ from `WT` in `bzip60` and `19.8%` in `bzip28 bzip60`, versus just `4.6%` in `bzip28` and `2.9%` in `atire1`.

- **Caption:** *On Earth, `bZIP60` moonlights independently of `IRE1` and `bZIP28` to hold down stress and growth genes inside the cramped `PDFU`.*

**Page 17**

- **Panel 1:** **Cluster 2** (`546` DEGs): on the ground, genes for `ABA`, `water deprivation`, `hypoxia`, and biotic defense spike *exclusively* in `bzip60` (`17%` different from `WT`), yet stay flat in `bzip28 bzip60` (`0.9%`)—and plunge to uniform low levels in spaceflight.

- **Dialogue (Ko):** "Losing `bZIP28` erases the `bzip60` ground spike! That means on Earth, `bZIP28` is actively pushing those stress genes up whenever `bZIP60` isn't there to brake it."

**Page 18**

- **Panel 1:** **Cluster 3** (`274` DEGs) flips the script: on the ground, expression crashes in `bzip28` single mutants, sits near `WT` in `bzip60`, and lands in the middle in `bzip28 bzip60`.

- **Panel 2:** **Cluster 5** (`291` DEGs) adds `toxin catabolic process` and `glutathione metabolic process` to the `bzip60`–`bZIP28` tug-of-war.

**Page 19**

- **Panel 1:** **Cluster 4** (`55` DEGs): expression drops on the ground *only* in `bzip60` and equalizes in flight—and when Ko checks their genomic addresses, **`22%` of Cluster 4 genes are encoded on the mitochondrial genome** (versus `0.5%` genome-wide)!

- **Dialogue (Angelos):** "A `44`-fold enrichment of mitochondrial-encoded genes in Cluster 4—all quietly normalized once the seedlings reach orbit."

**Page 20**

- **Panel 1:** Diagram of the sealed `BRIC-PDFU` micro-environment (`Fig. 7A`): on Earth, gravity pulls roots into agar and lifts hypocotyls into stagnant air, creating perceived water/nutrient stress that forces `bZIP60` and `bZIP28` into an antagonistic balancing act.

### Act III: Compensatory Pathways in Orbit (Pages 21–30)

**Page 21**

- **Panel 1:** In microgravity, surface tension and random orientation press hypocotyls and petioles directly onto the sucrose-rich Phytagel, erasing the ground water-deprivation/starvation signal and turning off the `UPR` stress tug-of-war.

- **Dialogue (Brandizzi):** "Spaceflight doesn't break the `UPR`—it activates alternative pathways that *compensate* for losing `IRE1`, `bZIP60`, or `bZIP28`."

**Page 22**

- **Panel 1:** Yet `144` genes *still* differ between `WT` and `UPR` mutants in flight—proving the `UPR` retains a small, genuine role in orbit even after the ground-stress noise is stripped away.

**Page 23**

- **Panel 1:** Across all five genotypes, `783` upregulated (`34.8%`) and `335` downregulated (`27.5%`) DEGs form a shared spaceflight core (`1,118` genes total) that fires regardless of `IRE1`, `bZIP60`, or `bZIP28`.

**Page 24**

- **Panel 1:** Close-up of the molecular contrast: in chemical ER stress on Earth, `bZIP60` and `bZIP28` lock arms with the `COMPASS` histone-methylation complex to activate chaperones; inside `BRIC-PDFUs` on Earth, they antagonize each other over `ABA` and drought genes.

**Page 25**

- **Panel 1:** Angelos and Zemelis-Durfee archive the raw `FASTQ` files to `NCBI GEO` (`GSE148914`) and `NASA GeneLab` (`GLDS-321` / `OSD-321`).

- **Caption:** *For future crops on the Moon or Mars, hardware geometry and media contact can rewrite stress signaling just as profoundly as microgravity itself.*

**Page 26**

- **Panel 1:** Looking back across the `BRIC` lineage (`GLDS-17`, `GLDS-44`, `GLDS-121`, `GLDS-37`, `GLDS-38`, and now `GLDS-321`): `OSD-321` joins the canon by showing *why* `water deprivation` and `ABA` genes repeatedly drop in `BRIC` spaceflight—ground controls suffer aerial hypocotyl stress!

**Page 27**

- **Panel 1:** Brandizzi's lab team reviews the final `Astrobiology` proofs (`2021`), noting that `DNA repair` and `cell cycle` transcripts still rose in flight—echoing the cosmic-ray `DSB` alarms from `OSD-320`.

**Page 28**

- **Panel 1:** A visual bridge between Volume 34 and Volume 35: on Earth's beamlines (`OSD-320`), `56Fe` ions triggered protein catabolism; in orbit (`OSD-321`), microgravity bypassed the ER's unfolded-protein regulators altogether.

**Page 29**

- **Panel 1:** In the MSU greenhouse, `bzip28 bzip60` plants stand beside `Col-0` under warm lamps, ready for the next generation of space-adapted germplasm design.

**Page 30 (Final Story Page)**

- **Panel 1:** An orbital silhouette of the ISS passes over Earth's terminator while inside a dark `PDFU`, a tiny *Arabidopsis* seedling curls into its sucrose-agar bed, its `1,118` core spaceflight genes glowing steadily without needing the `UPR` alarm.

- **Caption:** *In space, survival isn't always about shouting louder through stress sensors. Sometimes, microgravity changes the rules—and silences the alarm itself.*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31): `SpaceX CRS-12` `BRIC-PDFU` Flight Profile

- **Study Identity:** `OSD-321` (`GLDS-321` | DOI: `10.26030/z8mc-g359` | `GSE148914`), *Astrobiology* 2021 (PMC7987364).

- **Timeline:** Integrated `~48 h` pre-launch (`4°C` cold stowage) → Launched **Aug 14, 2017** (`SpaceX CRS-12`) → `14` days dark germination on ISS → Fixed in `RNAlater` (`3 h` room temp) → ISS `-80°C` `MELFI` → Reentry **Sep 16, 2017** (`-32°C` double cold bags) → De-integrated **Nov 1, 2017** at KSC (`2`-day-offset ground control in KSC ISS Environmental Simulator).

- **Hardware & Media:** `4` `BRIC` canisters, `22` `PDFUs` (`60 mm` dishes, `6.7 mL` `½ MS` + Gamborg's B5 + `0.5%` sucrose + `0.4%` Phytagel, pH `5.7`; `70–80` seeds/plate; double-foil wrapped; `HOBO` loggers in `2` BRICs).

- **Genotypes:** `Col-0` WT (`5` plates), `atire1` (`ire1a ire1b`, `4` plates), `bzip60` (`4` plates), `bzip28` (`4` plates), `bzip28 bzip60` (`5` plates).

- **Phenotype & RNA:** Ground hypocotyls grew into air above agar; flight hypocotyls + roots penetrated agar with elongated petioles across all genotypes. Flight yielded **more total RNA** and higher nuclear `25S/18S` rRNA (`RIN 7.5–8.0`; `77%` of ground Bioanalyzer traces miscalled `18S(-3)` organellar peak, though `25S/18S` ratio confirmed intact RNA).

### Right Spread (Page 32): Transcriptomic Equalization & `bZIP60`–`bZIP28` Antagonism

- **Sequencing & DEGs (`DESeq2`, `adj. p < 0.01`, `|log2FC| > 1.5`):** `Illumina HiSeq 4000` (`~32M` reads/sample, `95–99%` mapped to `TAIR10`). **`3,465` total DEGs**:

  - `Col-0` WT: `1,675` up, `831` down (`2,506` total)

  - `bzip28 bzip60`: `1,293` up, `562` down (`1,855` total)

  - Shared core across all `5` genotypes: `783` up (`34.8%`) + `335` down (`27.5%`) = `1,118` DEGs; `~2:1` up-to-down ratio (`1.80×–2.30×`) in every genotype.

- **Flight Equalization (`K`-Means `5` Clusters):**

  - **Ground vs. Flight Mutant Divergence:** **`517` DEGs** differed from `WT` in UPR mutants on the **ground** vs. only **`144` DEGs** in **spaceflight** (`~4×` reduction).

  - **Cluster 1 (`2,299` DEGs):** Flight-upregulated (`R/FR` light response, defense secondary metabolites, `DNA repair/replication`, `cell cycle`, ribosome biogenesis); `39.1%` differed in ground `bzip60` vs. `WT`.

  - **Cluster 2 (`546` DEGs) & Cluster 5 (`291` DEGs):** Ground-induced in `bzip60` (`ABA`, `water deprivation`, `hypoxia`, biotic defense, plus `toxin`/`glutathione` metabolism in `C5`), suppressed in `bzip28 bzip60`, and uniformly repressed in flight.

  - **Cluster 3 (`274` DEGs):** Ground-repressed in `bzip28`, intermediate in `bzip28 bzip60` (antagonistic `bZIP28`/`bZIP60` control).

  - **Cluster 4 (`55` DEGs):** Ground-repressed in `bzip60`, equalized in flight; **`22%` mitochondrial-encoded** (`44×` over genome baseline).

- **Mechanistic Takeaway:** In `μg`, hypocotyl–sucrose media contact likely eliminates ground aerial water-deprivation stress, promotes `R/FR`/rRNA signatures, and activates compensatory pathways that bypass canonical `UPR` regulators.

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "series_title": "Roots in Orbit: The NASA OSDR Plant Chronicles",
  "volume": 35,
  "osdr_accession": "OSD-321",
  "glds_accession": "GLDS-321",
  "doi": "10.26030/z8mc-g359",
  "geo_accession": "GSE148914",
  "skipped_accessions": [],
  "organism": "Arabidopsis thaliana (Col-0, atire1, bzip60, bzip28, bzip28 bzip60)",
  "environment_or_mission": "SpaceX CRS-12 / ISS (14-day dark germination in 4 BRICs / 22 PDFUs, RNAlater fixation, KSC 2-day-offset simulator control)",
  "assay": "RNA-seq (Illumina HiSeq 4000, 50-nt SE, ~32M reads/sample)",
  "key_molecular_actors": [
    "AtIRE1 (IRE1a/IRE1b)",
    "bZIP60",
    "bZIP28",
    "Phytochrome A (R/FR sucrose signaling)",
    "Nuclear 25S/18S rRNA",
    "Mitochondrial genome DEGs (Cluster 4)"
  ],
  "core_themes_added": [
    "Spaceflight equalization of ground-control UPR mutant transcriptomes (517 ground DEGs vs 144 flight DEGs)",
    "Antagonistic regulation by bZIP60 and bZIP28 on ABA, water deprivation, and hypoxia genes in ground BRIC-PDFUs",
    "Microgravity-induced hypocotyl media penetration & sucrose-driven R/FR + rRNA elevation in total darkness"
  ],
  "continuity_hook_next": {
    "next_volume": 36,
    "next_osdr": "OSD-327+ (skipping non-plant OSD-322–OSD-326)",
    "next_title_hint": "Next chronological plant/crop study in NASA OSDR after OSD-326"
  }
}

```

Say **"Go on"** when you're ready for **Volume 36**.
