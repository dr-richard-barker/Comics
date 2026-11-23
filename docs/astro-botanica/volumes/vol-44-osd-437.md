---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 44
title: "Two Rotors, One Truth"
accession: OSD-437
script_status: condensed
pages_covered: 0/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 95)
---

> [!NOTE]
> Script status **condensed**: 0/32 pages have their own heading.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles*

- **Volume:** 44 — *Two Rotors, One Truth*

- **OSDR / GLDS Accession:** `OSD-437` (Version 9, updated `19-Aug-2026`; Submitted `06-Oct-2021`; Initial Release `06-Oct-2022`) / `GLDS-437`

- **DOI:** `10.26030/7258-6m91`

- **Chronology Note:** `OSD-428`–`OSD-436` are skipped/deferred in this chronicle sequence (`OSD-431` is human `HMEC-1` endothelial cells, `OSD-432` is mouse thymic lymphoma, `OSD-435` is mouse cardiac ultrasound; `OSD-428`, `OSD-434`, and `OSD-436` are unindexed suborbital-related entries linked to `OSD-406`). `OSD-437` captures **Plant RNA Regulation (`PRR`)**, paired in its primary analysis with the earlier **Plant Signaling (`PS`)** flight (`OSD-223`).

- **Primary Publication:** Land, E. S., Sheppard, J., Doherty, C. J., & Perera, I. Y. (2024). Conserved plant transcriptional responses to microgravity from two consecutive spaceflight experiments. *Frontiers in Plant Science*, 14, 1308713. DOI: `10.3389/fpls.2023.1308713` | PMID: `38259952` | `PMC10800490`

- **Facility / Mission & Conditions:** `EMCS-01` (*Plant RNA Regulation*, `PRR`) on `SpaceX-9` (`07/18/2016`–`09/26/2016`), PI: Imara Y. Perera, Submitter: Eric S. Land (North Carolina State University; funding `NASA NNX15AB07G`). Grown in the **European Modular Cultivation System (`EMCS`)** (`ISS-Columbus`) on two rotors—stationary `μg` vs. onboard `1g` centrifuge (`EC` position `3`)—plus `1g` Earth Ground Control in `ERM-2` (`NASA Ames`). `27` dry `Col-0` seeds per black-gridded `PES` membrane on `Whatman 17 CHR` blotter paper (`0.5× MS`, no sucrose) in `TROPI`-like seed cassettes sealed with `3M 425` foil tape; hydrated remotely in two staggered runs for **4-day** and **6-day** harvests under `16:8` light:dark white LEDs (`22°C` OSDR / `24°C` day, `21°C` night, `21% O₂`, `~3,000 ppm CO₂` cabin air without purge). Frozen directly at `-80°C` in `MELFI`.

- **Organism & Tissue:** *Arabidopsis thaliana* `Col-0` wild-type shoots (dissected from `RNAlater`-thawed cassettes on a chilled platform).

- **Assay & Platform:** `n = 19` RNA-Seq samples (`4-day` `1g` `n = 4`, `4-day` `μg` `n = 4`, `6-day` `1g` `n = 4`, `6-day` `μg` `n = 4`, `6-day` Earth `ERM-2` `1g` Ground Control `n = 3`). `RNAqueous Micro Kit` (`Ambion`, modified to retain small RNAs), `NEBNext Ultra II RNA Library Prep Kit` (`polyA` enrichment, unstranded), `Illumina HiSeq` `150 bp` PE (`Novogene`; `17.42M–34.29M` reads, `0.29%–1.37%` rRNA), plus small-RNA (`sRNA`) sequencing. GeneLab `GL-DPPD-7101-G` (`NF_RCP v2.1.0`, `STAR v2.7.11b` + `TAIR10.59`, `RSEM v1.3.3`, `DESeq2 v1.46.0`); paper DEG cutoffs: `padj < 0.05` (individual) and `padj < 0.01` (combined `PS + PRR`).

## 2. Dramatis Personae (Grounded in Study Data)

- **The `EMCS` Twin Rotors (`μg` vs. Onboard `1g`):** Two centrifuge wheels spinning inside a single `ISS-Columbus` chamber. Sharing the exact same `~3,000 ppm CO₂` cabin air, radiation, and launch history, one rotor spins at `1g` while the other rests in `μg`—isolating pure gravity from every other spaceflight stressor.

- **Col-0 Shoots (The Dual-Clock Seedlings):** `27` seeds per gridded black `PES` membrane, hydrated in two staggered waves (`4-day` and `6-day` harvests). Under `1g`, their Day 4 and Day 6 transcriptomes march cleanly apart; in `μg`, that developmental separation flattens.

- **`miR319c`, `miR398b-3p`, and `miR863-5p` (The Plastid Silencers):** Three microRNAs upregulated in microgravity whose predicted target genes drop in lockstep—`38%` of them encoding chloroplast- and plastid-localized enzymes and proteins.

- **Imara Y. Perera & Eric S. Land (NC State):** Paired `PRR` (`OSD-437`) with their earlier `PS` flight (`OSD-223`), proving that `577` genes (`178` up, `399` down) respond reproducibly to microgravity across two separate missions—and revealing why comparing `μg` to Earth ground controls had hidden the true direction of stress genes.

- **Astronauts Mike Fossum & Kate Rubins / ARC & N-USOC Teams:** Crew and ground-control engineers (`ERM-1` in Trondheim, `ERM-2` at Ames) who ran the staggered remote hydrations and transferred `1g` cassettes first into `MELFI` at `-80°C`.

## 3. 32-Page Chapter Script

### Act I: The Twin-Rotor Chamber (Pages 1–10)

- **Page 1:** `NASA Ames Research Center`. Under a dissecting microscope, `27` dry `Col-0` seeds (`≥99%` germination stock) are mounted with guar gum onto a black-gridded `PES` membrane, micropyles pointing down away from the future LEDs, sandwiched over `0.5× MS` blotter paper inside `TROPI`-style cassettes sealed with `3M 425` aluminum tape.

- **Page 2:** `SpaceX-9` launch (`07/18/2016`). Eighty dry cassettes ride dormant into orbit; on `ISS-Columbus`, crew slot `4` Experimental Containers (`20` cassettes) onto each of the two **EMCS** centrifuge rotors.

- **Page 3:** Remote hydration begins (`PMC10800490` Figure 1B). Because upmass limits prevented purging the chamber with air canisters, `PRR` runs in ambient ISS cabin air (`~3,000 ppm CO₂`, `21% O₂`, `24°C` day / `21°C` night, `16:8` white LEDs).

- **Page 4:** Staggered clockwork: Rotor A (`1g` at `EC` position `3`) spins while Rotor B (`μg`) stays stationary. Wave 1 is hydrated for a **6-day** run; `48` hours later, Wave 2 is hydrated for a **4-day** run—so both ages will be harvested together.

- **Page 5:** Sequential camera frames downlink from inside the `EMCS` (`PMC10800490` Figure 2). Radicle emergence happens on the exact same schedule in `μg` and `1g`—no germination delay—though `PRR` roots wander more freely without `PS`'s initial `48 h` `1g` cue.

- **Page 6:** Harvest on Day 6: `1g` cassettes are pulled first and plunged straight into `MELFI` at `-80°C`, followed by `μg` cassettes. Across Earth at `NASA Ames`, `ERM-2` mirrors the `6-day` run vertically at `1g`.

- **Pages 7–8 (Double-Page Spread Anchor):** **The Onboard `1g` Revelation.** Three columns compare Earth `ERM-2` (`1g`), ISS Onboard Centrifuge (`1g`), and ISS Stationary (`μg`) (`PMC10800490` Figures 5–6). Heatmaps of defense and salt-stress genes glow bright red in **ISS `1g`**—far hotter than on Earth—yet drop cool green in **ISS `μg`**. Narration: *Spaceflight stress lights up the onboard `1g` control; microgravity doesn't trigger those alarms—it masks them.*

- **Page 9:** Back in Raleigh, frozen cassettes are thawed on a chilled platform into `RNAlater`, and shoots are dissected from roots (`19` shoot libraries: `4` replicates each for `4d` and `6d` `1g`/`μg`, plus `3` `ERM-2` `6d` controls).

- **Page 10:** `Novogene` sequences `150 bp` paired-end mRNA (`17.42M–34.29M` reads, `0.29%–1.37%` rRNA) alongside a dedicated small-RNA (`sRNA`) fraction retained by the modified `RNAqueous Micro` protocol.

### Act II: The Conserved Core & The Small-RNA Net (Pages 11–22)

- **Page 11:** Individual `DESeq2` (`padj < 0.05`) tallies `1,792` DEGs in `PRR` (`599` up, `1,193` down in `μg`), echoing `1,819` DEGs in `PS` (`510` up, `1,309` down).

- **Page 12:** Hypergeometric tests confirm non-random conservation (`PMC10800490` Table 1): **`178`** genes are commonly upregulated (`p = 9.97E-185`) and **`399`** commonly downregulated (`p = 1.63E-272`) across both consecutive missions despite different lighting and CO₂ (`~760` vs. `~3,000 ppm`).

- **Page 13:** Pooling `PS` and `PRR` (`padj < 0.01`) sharpens the signal to **`1,112` upregulated** and **`1,429` downregulated** `μg` genes—retaining `>99%` of the individual overlap.

- **Page 14:** What rises in microgravity? **Development and transport:** `159` transcription factors (`SPCH`, `WOX3`, `TCP22`, `GATA2`, `HFR1`, `CRF4/5`, `ANT`), `7` epigenetic regulators (`5` SET-domain histone methyltransferases), and `~50` Golgi/vesicle transport genes (`COP`, `Sec23/24`).

- **Page 15:** **Auxin's surge** (`PMC10800490` Table 3): `38` auxin-related genes climb in `μg`—`PIN3`, `PIN4`, `TIR1`, `AFB2/3`, `6` `ARFs`, and `11` `SAURs` (`9` >`2`-fold, led by `SAUR76` `+3.14 log2FC`, `IAA29` `+2.68`, `SAUR13` `+2.11`). Even gravitropism genes `SGR5` (`IDD15`), `IDD14`, and `LAZY1` tick upward.

- **Page 16:** Upstream promoter scan (`MEME`, `PMC10800490` Figure 3): **`5'-GGCCCA-3'`** (`Site II` / `Up1` element, `E = 3.7E-12`) appears `258` times across `174` upregulated genes, peaking at `-70 bp`—the exact binding motif of `TCP` transcription factors like upregulated `TCP22`.

- **Page 17:** What falls in microgravity? **`340` stress-response genes** (`GO:0006950`, `FDR = 4.10E-31`), including `120` TFs (`15` `ERFs` with `7` `DREBs` & `CBF2`, `12` `WRKYs` incl. `WRKY18/40/60`, `4` heat-shock TFs, `9` of `21` hierarchical ABA TFs).

- **Page 18:** **Calcium and the Cell Wall go quiet:** `~40` `Ca²⁺`-signaling genes (`CML24/37`, `CPK4/15/28/29/32`, `ACA1`, `CBP60A/E/G`, `CAMTA2/3/4`, `CNGC1/4`, `KIC`, `KRP1`) and `~100` cell-wall genes (`XTHs`, expansins, peroxidases, `6` dirigent proteins) drop in `μg`, alongside `~300` plastid/chloroplast genes (`289` `GO:0009507`).

- **Page 19:** `HY5`—the master photomorphogenesis regulator—casts a shadow over both lists: `HY5` targets are significantly enriched in **both** `μg`-upregulated (`p = 2.45E-11`, organ development/auxin) and `μg`-downregulated (`p = 1.698E-120`, stress) genes.

- **Page 20:** Now the `PRR` small-RNA layer clicks into place (`PMC10800490` Figure 7): **`miR319c`**, **`miR398b-3p`**, and **`miR863-5p`** rise in `μg`, while **`miR156f-3p`** and **`miR5654-3p`** rise in `1g` (repressed `SPL9` in `1g`).

- **Page 21:** Network diagram of `miR319c`, `miR398b-3p`, and `miR863-5p` targets: **`38%`** of their downregulated mRNA targets localize to the **plastid**, including `12` of `22` `miR398b-3p` targets encoding chloroplastic enzymes and proteins.

- **Page 22:** Natural Antisense Transcripts (`NATs`) add a second post-transcriptional brake: `42` `NATs` rise and `30` fall in `μg`, with `29/42` upregulated `NATs` negatively paired against sense transcripts—including `MYB44`, defense genes, and chloroplastic proteins.

### Act III: The Flattened Clock (Pages 23–30)

- **Page 23:** Day 4 vs. Day 6 (`PMC10800490` Figure 8): At Day 4, only `406` DEGs separate `μg` from `1g` (`75` up, `331` down)—yet `210` of those downregulated stress and cell-wall genes persist straight through to Day 6.

- **Page 24:** PCA plot (`PC1 = 53%` variance): Under `1g`, Day 4 and Day 6 clusters sit cleanly apart (`p < 0.05`). Under `μg`, Day 4 and Day 6 **collapse together**, showing that microgravity masks or alters developmental progression in shoots.

- **Page 25:** Cross-mission check against `BRIC19` (`Choi et al., 2019`): `70` stress/hypoxia genes reported as *upregulated* in `BRIC19` (flight vs. Earth ground control) are *downregulated* in `μg` vs. onboard `1g`—while `EMCS` `SG2`/`SG3` (`Herranz et al., 2019`; `Villacampa et al., 2021`) share `54` `μg`-downregulated and `143` low-`g`-downregulated genes!

- **Page 26:** The paradox resolves cleanly on a single schematic: ISS cabin factors (`~3,000 ppm CO₂`, radiation, micro-environment) push stress genes **up** in onboard `1g`, whereas `μg` itself suppresses those stress pathways relative to `1g`.

- **Page 27:** Why `EMCS` matters—and where its limits lie: `TROPI` cassettes hold only `27` tiny seedlings for `4–6` days, too small for proteomics and too brief to test whether chloroplast/photosynthetic downregulation persists in mature crops.

- **Page 28:** The baton passes to larger habitats (`Veggie` and `APH`) where multi-omic sampling (`mRNA` + `sRNA` + proteome) can track plants from seed to maturity.

- **Page 29:** GeneLab archives all `19` `OSD-437` libraries (`GL-DPPD-7101-G`) alongside `OSD-223` (`PS`), giving astrobotany a clean `577`-gene microgravity core stripped of Earth-vs.-ISS hardware artifacts.

- **Page 30:** Closing frame of a `27`-seed gridded membrane floating inside `EMCS`. Narration: *Without a `1g` centrifuge beside it, microgravity hides inside the noise of spaceflight; spin the second rotor, and the plant's true gravity signal emerges.*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31) — *EMCS-01 (`PRR`) Design & Onboard `1g` Architecture*

- **Flight & Hardware:** `SpaceX-9` (`07/18/2016`–`09/26/2016`) | `EMCS` (`ISS-Columbus`, `1g` rotor at `EC` pos. `3` vs. stationary `μg` rotor) + `ERM-2` (`NASA Ames`, Earth `1g` GC) | `27` `Col-0` seeds/membrane (`0.5× MS`, no sucrose), `16:8` white LEDs, `~3,000 ppm CO₂`, `MELFI` `-80°C`.

- **Samples (`n = 19` RNA-Seq):** `4d` `1g` (`4`), `4d` `μg` (`4`), `6d` `1g` (`4`), `6d` `μg` (`4`), `6d` `ERM-2` Earth `1g` (`3`) | `Illumina HiSeq` `150 bp` PE (`17.42M–34.29M` reads, `0.29%–1.37%` rRNA) + `sRNA`-Seq.

| Comparison (`μg` vs. Onboard `1g`) | Total DEGs | Upregulated in `μg` | Downregulated in `μg` | Key Takeaway |
|---|---|---|---|---|
| **`PRR` Day 4 (`OSD-437`)** | `406` | `75` | `331` | `210` downregulated stress/cell-wall genes persist to Day 6 |
| **`PRR` Day 6 (`OSD-437`)** | `1,792` | `599` | `1,193` | `PC1` (`53%`) separates `4d` vs. `6d` in `1g`, collapses in `μg` |
| **`PS` Day 5 (`OSD-223`)** | `1,819` | `510` | `1,309` | Constant light, `~760 ppm CO₂`, `48 h` initial `1g` cue |
| **`PS` ∩ `PRR` Overlap** | `577` | `178` (`p = 9.97E-185`) | `399` (`p = 1.63E-272`) | Conserved microgravity core across two independent flights |
| **Combined `PS + PRR` (`padj < 0.01`)** | `2,541` | `1,112` | `1,429` | Retains `>99%` of individual overlap; reveals `~50` Golgi/vesicle genes |

### Right Spread (Page 32) — *Conserved Pathways & Post-Transcriptional Layers*

| Regulatory Layer | Direction in `μg` vs. `1g` | Verified Counts & Representatives | Biological Meaning |
|---|---|---|---|
| **Development, Auxin & `Site II`** | **Upregulated** | `159` TFs (`TCP22`, `SPCH`, `WOX3`), `38` auxin (`PIN3/4`, `6` `ARFs`, `11` `SAURs`), `5'-GGCCCA-3'` (`258` hits / `174` genes), `LAZY1`, `SGR5` | Shoot growth, vesicle trafficking (`52` genes), and `HY5` developmental targets (`p = 2.45E-11`) |
| **Stress, `Ca²⁺` & Cell Wall** | **Downregulated** | `340` stress (`120` TFs: `15` `ERFs`, `12` `WRKYs`), `~40` `Ca²⁺` (`CML24/37`, `CPKs`, `CAMTAs`, `CNGC1/4`), `~100` cell wall, `289` chloroplast | Microgravity masks stress pathways induced in onboard `1g` vs. Earth `ERM-2` |
| **miRNAs (`PRR` sRNA-Seq)** | **Up (`3`) / Down-targets** | **`miR319c`**, **`miR398b-3p`**, **`miR863-5p`** up in `μg`; `miR156f-3p`, `miR5654-3p` up in `1g` | `38%` of downregulated `μg` miRNA targets localize to **plastids** (`12/22` for `miR398b-3p`) |
| **Antisense (`NATs`)** | **42 Up / 30 Down** | `29/42` up `NATs` negatively paired with sense (`MYB44`, chloroplastic & defense genes) | Sense-antisense post-transcriptional silencing in microgravity |

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "volume_added": 44,
  "title": "Two Rotors, One Truth",
  "osdr_accession": "OSD-437",
  "glds_accession": "GLDS-437",
  "doi": "10.26030/7258-6m91",
  "osdr_url": "https://osdr.nasa.gov/bio/repo/data/studies/OSD-437",
  "primary_publication": {
    "citation": "Land, E. S., Sheppard, J., Doherty, C. J., & Perera, I. Y. (2024). Conserved plant transcriptional responses to microgravity from two consecutive spaceflight experiments. Frontiers in Plant Science, 14, 1308713.",
    "doi": "10.3389/fpls.2023.1308713",
    "pmid": "38259952",
    "pmcid": "PMC10800490",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10800490/"
  },
  "skipped_accessions": [
    "OSD-428",
    "OSD-429",
    "OSD-430",
    "OSD-431",
    "OSD-432",
    "OSD-433",
    "OSD-434",
    "OSD-435",
    "OSD-436"
  ],
  "organism": "Arabidopsis thaliana (Col-0 wild-type shoots)",
  "hardware_and_environment": {
    "mission": "EMCS-01 / Plant RNA Regulation (PRR) on SpaceX-9 (07/18/2016–09/26/2016)",
    "hardware": "European Modular Cultivation System (EMCS, ISS-Columbus: stationary μg vs. 1g centrifuge rotor) + ERM-2 (NASA Ames Earth 1g GC); TROPI-like seed cassettes on black-gridded PES membranes, MELFI (-80°C)",
    "growth_conditions": "Staggered 4-day and 6-day harvests, 0.5x MS (no sucrose), 16:8 light:dark white LEDs, 22°C (24°C day / 21°C night), 21% O2, ~3,000 ppm CO2"
  },
  "assays": [
    "RNA-Seq (n = 19, Illumina HiSeq 150 bp PE, Novogene) + small-RNA (sRNA) sequencing"
  ],
  "key_scientific_beats": [
    "Onboard 1g centrifuge controls reveal that spaceflight stress pathways are upregulated in ISS 1g vs. Earth ERM-2, yet specifically downregulated in μg vs. 1g.",
    "PS (OSD-223) and PRR (OSD-437) share 178 upregulated and 399 downregulated μg DEGs (2,541 combined at padj < 0.01), highlighting auxin/vesicle/Site II activation and stress/Ca2+/cell-wall/plastid suppression.",
    "Three μg-upregulated miRNAs (miR319c, miR398b-3p, miR863-5p) and 42 upregulated NATs target plastid-localized and defense transcripts.",
    "PCA separates Day 4 and Day 6 shoots at 1g (PC1 = 53%) but collapses that developmental separation in μg despite normal germination timing."
  ],
  "continuity_hook_next": {
    "next_osdr_candidate": "OSD-438+",
    "rationale": "Scan OSD-438 through OSD-460 (including OSD-450, linked to OSD-406) to identify the next chronological plant biology study for Volume 45."
  }
}

```

Say **"Go on"** when you're ready for **Volume 45**.
