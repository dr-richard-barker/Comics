---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 39
title: "Two Rides to the Edge"
accession: OSD-406
script_status: partial
pages_covered: 29/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 85)
---

> [!NOTE]
> Script status **partial**: 29/32 pages have their own heading.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles*

- **Volume:** 39

- **Title:** *Two Rides to the Edge*

- **OSDR / GLDS Accession:** `OSD-406` (Version 4) / `GLDS-406` | **DOI:** `10.26030/m4mm-3414` | **Source Accession:** `GSE160846`

- **Chronology Note:** Follows Volume 38 (`OSD-386`, mizuna mustard) after skipping `OSD-387` through `OSD-405` (non-plant studies including ISS fungi and rodent payloads). `OSD-406` shifts the chronicle from ISS-simulated growth chambers to commercial **suborbital** launch vehicles—comparing **Virgin Galactic `VP-03`** (`VSS Unity`) and **Blue Origin `NS-12`** (`New Shepard`).

- **Primary Publication:** Califar, B., Zupanska, A., Callaham, J. A., Bamsey, M. T., Graham, T., Paul, A.-L., & Ferl, R. J. (2021). *Shared Metabolic Remodeling Processes Characterize the Transcriptome of Arabidopsis thaliana within Various Suborbital Flight Environments*. *Gravitational and Space Research*, 9(1), 13–29. DOI: `10.2478/gsr-2021-0002` (indexed on `OSD-406`; KEGG figure summary at `ResearchGate Fig. 4`; `VP-03` DEG count cross-referenced in `PMC10733374`).

- **Facility / Mission & Conditions:**

  - **Virgin Galactic `VP-03` (`VSS Unity`, SpaceShipTwo):** Launched Dec 13, 2018 from Mojave Air and Spaceport, California; reached **`82.7 km`** (above the `80 km` U.S. space boundary, below the `100 km` Kármán line); `1 min` ascent hyper-g peaking at **`~4.5g`** over `30 s`, **`3 min`** microgravity, `1 min` descent hyper-g (`~3.5g`), and `~9 min` glide.

  - **Blue Origin `NS-12` (`New Shepard`):** Launched Dec 11, 2019 at `12:53 PM EST` from the West Texas Launch Site; `~2 min` ascent peaking near **`3g`**, **`3 min`** microgravity, `1 min` descent hyper-g peaking at **`5.7g`**, and `4 min` parachute descent (`~1g` with `3g–3.5g` chute spikes). Fixed in `RNAlater` **`33 min`** after landing (`43 min` total elapsed time); Ground Control harvested `1 h` later.

  - **Growth & Hardware:** `100 mm × 15 mm` Petri dishes (`50 mL` `0.5%` Phytagel, `0.5×` MS salts, `0.5%` w/v sucrose, `1×` Gamborg's Vitamin Mixture, sealed with `3M Micropore` tape), stratified `3–5` days at `4°C`, grown vertically at `19 ± 2°C` under `24 h` fluorescent light (`~80 μmol m⁻² s⁻¹` PAR). At VG site: ambient facility under LED bank; at BO site: Danby herb cultivator (`DFG17A1B`) at `26°C`. Flight plates wrapped in **Duvetyne Black-Out Cloth** and Velcro-mounted inside the **FLEX** imaging payload.

- **Organism / Genotypes:** *Arabidopsis thaliana* roots (`n = 24` samples, `3` biological replicates/condition): `Col-0` and `WS` (Wassilewskija) at `10` days old on `VG VP-03`; `WS` and `sku5` (root-skewing mutant in `WS` background) at `11` days old on `BO NS-12` (`OSD-406`).

- **Assay / Platform:** Paired-end `RNA-Seq` (`Illumina NovaSeq 6000`, `2 × 151 bp`, `NEBNext Ultra Directional RNA Library Prep Kit`, `ERCC Mix 1` Flight / `ERCC Mix 2` Ground Control at `1 μL` of `1:2000` dilution per `50 ng` RNA, `RIN 7.1–9.4`, `51.67M–75.40M` reads/sample); processed via `GL-DPPD-7101-G` / `NF_RCP v2.1.0` (`Trim Galore! v0.6.10`, `STAR v2.7.11b`, `RSEM v1.3.3`, `TAIR10` + `ERCC92`, `DESeq2 v1.46.0`) (`OSD-406`).

## 2. Dramatis Personae (Grounded in Study Data)

- **Wassilewskija (`WS`) & `Col-0` Roots:** Ten-day-old (`VG VP-03`) and eleven-day-old (`BO NS-12`) *Arabidopsis* seedlings riding inside dark Duvetyne-wrapped Petri plates Velcro-mounted to the inner wall of the `FLEX` payload (`OSD-406`).

- **The `sku5` Mutant:** A root-skewing mutant in the `WS` background flown aboard Blue Origin `NS-12`, revealing altered intra-platform transcriptomic responses compared to wild-type `WS` (`OSD-406`).

- **Virgin Galactic `VSS Unity` (`VP-03`):** Air-launched suborbital spaceplane reaching `82.7 km` on Dec 13, 2018—delivering a `4.5g` ascent, `3 min` microgravity, `3.5g` descent, and a `9 min` runway glide before rear-bay vehicle harvest (`OSD-406`).

- **Blue Origin `New Shepard` (`NS-12`):** Vertical-takeoff, vertical-landing rocket launching Dec 11, 2019—delivering a `3g` ascent, `3 min` microgravity, a sharp `5.7g` re-entry spike, and `3g–3.5g` parachute jolts before capsule recovery (`33 min` to `RNAlater` fixation) (`OSD-406`).

- **The Conserved Metabolic Core:** Carbon/nitrogen metabolism, **branched-chain amino acid degradation** (valine, leucine, isoleucine), and **hypoxic response** pathways—shared across suborbital rockets and atmospheric parabolic flights (`PF2013`, `PF2015`, `F-104 Starfighter`), even when overall transcriptomic load diverges wildly (`OSD-406`; `ResearchGate Fig. 4`).

## 3. 32-Page Chapter Script

### Act I: Two Launchpads, One Question (Pages 1–10)

**Page 1 — Splash Page**

- **Panel 1 (Full-Page Splash):** Split vertically down the spine. On the left, **Virgin Galactic `VSS Unity`** drops from its mothership over the Mojave Desert (`82.7 km` apogee). On the right, **Blue Origin `New Shepard`** blasts skyward from West Texas on a column of exhaust. Between them, translucent *Arabidopsis* roots curl across a `0.5%` Phytagel plate wrapped in black Duvetyne cloth. Overlaid in crisp ink: *"VOLUME 39: TWO RIDES TO THE EDGE — OSD-406."*

- **Caption:** Three minutes of weightlessness. Two completely different ways to get there—and come back.

**Page 2 — The Petri Dish Passengers**

- **Panel 1 (Wide):** Inside a laminar flow hood at the University of Florida / KSC, seeds of `Col-0`, `WS`, and `sku5` are washed in `70%` ethanol (`10 min`), `50%` bleach with `Tween-20` (`20 min`), and rinsed `6` times in sterile water before `3–5` days of `4°C` stratification.

- **Panel 2 (Medium):** Rows of `12–15` seeds line `100 mm × 15 mm` Petri dishes poured with `50 mL` of `0.5%` Phytagel (`0.5×` MS, `0.5%` sucrose, `1×` Gamborg's Vitamins), sealed with `3M Micropore` tape, and grown vertically at `19 ± 2°C` under `80 μmol m⁻² s⁻¹` PAR.

**Page 3 — Mojave & West Texas Staging**

- **Panel 1 (Split Top):** Mojave Air and Spaceport (`VP-03`): `10`-day-old `Col-0` and `WS` plates rest under an LED light bank in ambient facility air before being wrapped in **Duvetyne Black-Out Cloth**.

- **Panel 2 (Split Bottom):** West Texas Launch Site (`NS-12`): `11`-day-old `WS` and `sku5` plates wait inside a `26°C` Danby herb cultivator (`DFG17A1B`) before wrapping.

- **Panel 3 (Close-up):** Velcro strips press the black-wrapped plates flush against the inner wall of the **FLEX** imaging payload as a piggyback rider.

**Page 4 — Flight One: Drop from the Mothership (`VP-03`, Dec 13, 2018)**

- **Panel 1 (Wide):** One hour after takeoff, `VSS Unity` detaches from its mothership. Its rocket motor ignites.

- **Panel 2 (Accelerometer Dial):** The G-meter climbs steadily over `30 seconds` to nearly **`4.5g`** during the `1 min` ascent, pinning the `10`-day-old roots against the Phytagel.

**Page 5 — `82.7 km` (`VP-03` Apogee)**

- **Panel 1 (Wide):** Engine cutoff. For **`3 minutes`**, `VSS Unity` arcs past **`82.7 km`**—above the `80 km` U.S. space boundary, though shy of the `100 km` international Kármán line. Inside the dark `FLEX` box, the seedlings float in microgravity.

- **Panel 2 (Timeline Strip):** `1 min` re-entry hyper-g (`~3.5g`), followed by a **`~9 min` glide** punctuated by short hyper- and hypo-g spikes down to the Mojave runway.

**Page 6 — Runway Harvest**

- **Panel 1 (Medium):** `VSS Unity` rolls to a stop. Payload teams carry the `FLEX` unit from the runway to a nearby vehicle rigged with a harvest station in its rear bay.

- **Panel 2 (Close-up):** Forceps plunge the seedlings into `RNAlater` inside KSC Fixation Tubes (`KFTs`).

- **Dialogue (Researcher):** *"We got them fixed—but only after a nine-minute glide and runway handoff."*

**Page 7 — Double-Page Spread Anchor: Flight Two — Vertical Thunder (`NS-12`, Dec 11, 2019)**

- **Pages 7–8 (Double-Page Spread):** `12:53 PM EST`, West Texas. `New Shepard` roars off the pad in a `~2 min` ascent (`~3g` peak), vaults into a **`3-minute` microgravity window**, then slams back into the atmosphere at **`5.7g`**—followed by drogue and primary parachute jolts (`3g–3.5g`) across a `4 min` `~1g` descent. Along the bottom margin, an inset clock ticks: **`43 minutes` total elapsed time; `RNAlater` fixation `33 minutes` after landing.**

- **Caption:** *"Same three minutes of microgravity. Sharper `5.7g` re-entry. Faster handoff after touchdown."*

**Page 9 — The Ground Control Hour**

- **Panel 1 (Medium):** Back in the BO Payload Processing Facility, Ground Control `WS` and `sku5` plates emerge from the Danby cultivator and are fixed `1 hour` after the Flight seedlings.

- **Panel 2 (Close-up):** All `24` KFT-fixed root pools (`3` replicates × `8` genotype/flight/control groups) are frozen at `-80°C` and shipped back to Gainesville.

**Page 10 — Dissection & Spike-In**

- **Panel 1 (Medium):** Thawed overnight at `4°C`, `RNAlater`-fixed seedlings are disentangled and roots are dissected cleanly from shoots.

- **Panel 2 (Technical Inset):** `QIAGEN` `RNeasy`/`QIAshredder` extraction yields RNA with `RIN 7.1–9.4`. Every `50 ng` sample receives `1 μL` of `1:2000` diluted `ERCC` spike-in (`Mix 1` for Flight, `Mix 2` for Ground Control) before `Illumina NovaSeq 6000` `2 × 151 bp` sequencing (`51.67M–75.40M` reads/sample).

### Act II: The Aggregate Transcriptome (Pages 11–22)

**Page 11 — Why `VP-03` Whispered**

- **Panel 1 (Data Panel):** `GL-DPPD-7101-G` (`STAR v2.7.11b`, `RSEM v1.3.3`, `DESeq2 v1.46.0`) finishes counting `TAIR10` + `ERCC92`. On `VG VP-03`, `Col-0` and `WS` roots show almost nothing: only **`20`** statistically significant DEGs in `VP-03` roots (`PMC10733374`), and **`VG WS` yields zero GO or KEGG pathway enrichments**.

- **Dialogue (Bioinformatician):** *"By the time `VSS Unity` glided nine minutes and cleared the runway, the fastest transcriptional wave had already subsided—or hadn't built up."*

**Page 12 — Why `NS-12` Roared**

- **Panel 1 (Data Panel):** Cut to Blue Origin `NS-12`. Both **`BO WS`** and **`BO sku5`** erupt with heavy transcriptomic loads and the strongest KEGG metabolic pathway enrichments of the entire multi-platform study (`ResearchGate Fig. 4`).

- **Panel 2 (Comparison):** Overlaid against atmospheric parabolic flights (`PF2013`, `PF2015`, `F-104 Starfighter`), `BO WS` and `BO sku5` sit at the top of the enrichment scale, with `PF2013` and `F-104` in the middle and `PF2015` lowest.

**Page 13 — The `sku5` Skew**

- **Panel 1 (Split):** Side-by-side root silhouettes of wild-type `WS` and the `sku5` skewing mutant.

- **Panel 2 (Network Diagram):** Inside `BO NS-12`, `sku5` mounts an altered intra-platform transcriptomic response compared to `WS`—just as `14-3-3kappa:GFP` regulatory-protein lines diverge from `WS` in parabolic flight.

- **Caption:** Cell-wall and gravity-skewing genetics shape how a root reads a `3g`-to-`0g`-to-`5.7g` roller coaster.

**Page 14 — The Red Lines of KEGG**

- **Panel 1 (Full-Page Diagrammatic Beat):** The global `KEGG` metabolic pathways overview map lights up across `BO WS`, `PF2013`, `PF2015`, and `F-104`. Bright red lines trace pathways altered in **all four** datasets; dark black lines mark partially conserved nodes.

- **Dialogue (Narrator):** *"Different rockets. Different airplanes. Different G-profiles. Yet the same metabolic backbone lights up in red."*

**Page 15 — Carbon, Nitrogen, and Branched-Chain Amino Acids**

- **Panel 1 (Close-up):** Zoom into the conserved KEGG nodes: **carbon and nitrogen metabolism**, plus **valine, leucine, and isoleucine degradation** (branched-chain amino acid catabolism).

- **Panel 2 (Metabolic Arrow):** Under sudden hyper-g/microgravity transition, root cells remodel core energy and amino-acid turnover.

**Page 16 — The Hypoxic Signature**

- **Panel 1 (Medium):** Hypoxia-responsive genes flare across the suborbital and parabolic datasets—reminiscent of orbital ISS `BRIC` and `APEX` studies, yet triggered in minutes rather than days.

- **Caption:** Even a `43`-minute suborbital flight wakes the plant's low-oxygen alarm.

**Page 17 — Same Pathways, Opposite Arrows**

- **Panel 1 (Split Heatmap):** Two columns of shared pathway genes side by side. On one platform, a node turns **red (upregulated)**; on another, the exact same node turns **blue (downregulated)**.

- **Dialogue (Researcher):** *"The pathways are conserved—but timing and directionality flip depending on the flight profile and when you fix the tissue."*

**Page 18 — The Missing In-Flight Snapshot**

- **Panel 1 (Wide):** A timeline of `NS-12` (`0` to `43` minutes) shows `3g` ascent, `3 min` microgravity, `5.7g` descent, and `33 min` post-landing recovery all collapsed into **one** `RNAlater` fixation point.

- **Caption:** Aggregate post-landing RNA-Seq sees the *sum* of the ride—not the individual beats.

**Page 19 — The `ERCC` Anchor**

- **Panel 1 (Technical Panel):** `ERCC ExFold` spike-ins (`Mix 1` vs. `Mix 2`) verify library linearity across all `24` NovaSeq samples (`7.09%–10.35%` rRNA), proving the quiet `VP-03` signal isn't a sequencing failure—it's biological timing.

**Page 20 — Parabolic Kin**

- **Panel 1 (Wide):** Silhouettes of `VSS Unity`, `New Shepard`, and the `F-104 Starfighter` fly in formation across a graph of transcriptomic load.

- **Caption:** Suborbital rockets bridge the gap between `20`-second aircraft parabolas and multi-week ISS orbits.

**Page 21 — The `33`-Minute Window**

- **Panel 1 (Close-up):** A researcher circles the `33 min` post-landing fixation mark on `NS-12` vs. the longer runway-and-glide delay on `VP-03`.

- **Dialogue (Researcher):** *"Every minute between microgravity and `RNAlater` lets fast-response transcripts turn over—or vanish."*

**Page 22 — The Call for Human-Tended Fixation**

- **Panel 1 (Wide):** A blueprint sketch appears on the lab table: **KSC Fixation Tubes (`KFTs`)** carried directly in-cabin so an astronaut can actuate `RNAlater` *during* ascent, *at* microgravity onset, and *at* microgravity end.

- **Caption:** That lesson from `OSD-406` will directly launch the next generation of human-tended suborbital plant flights (`VG Unity 22`).

### Act III: Legacy & Next Orbit (Pages 23–30)

**Page 23 — What `OSD-406` Proved**

- **Panel 1 (Medium):** Three bulleted truths etched onto the mission slate:

  - Suborbital rockets (`VP-03`, `NS-12`) trigger biologically meaningful, flight-profile-dependent root transcriptomes.

  - `WS` and `sku5` diverge in how they process rapid gravity transitions.

  - Central carbon/nitrogen metabolism, branched-chain amino acid degradation, and hypoxia form a conserved gravity-transition core.

**Page 24 — The Kármán Line Footnote**

- **Panel 1 (Wide):** `VSS Unity` at `82.7 km`—space by U.S. `80 km` standards, atmosphere by the `100 km` Kármán line—reminds the crew that biology doesn't care about legal altitudes; it responds to `g`-transitions and time-to-fixation.

**Page 25 — Archiving `GSE160846` / `OSD-406`**

- **Panel 1 (Wide):** All `24` `NovaSeq 6000` datasets (`GSM4880342`–`GSM4880365`) enter NASA OSDR under `OSD-406` (`GLDS-406`, `10.26030/m4mm-3414`), linked forward to related suborbital/spaceflight studies `OSD-428`, `OSD-434`, `OSD-436`, and `OSD-450`.

**Page 26 — Back to the Orbital Greenhouse**

- **Panel 1 (Wide):** The camera pulls back from Mojave and West Texas, climbing all the way to `400 km`—where the International Space Station's `Veggie` unit glows magenta in the dark.

**Page 27 — Three Crops in One Pillow Tray**

- **Panel 1 (Medium):** Inside `Veggie` on the ISS, **red Romaine lettuce**, **mizuna mustard**, and **Waldmann's green leaf lettuce** grow side by side in the same hardware for the first time (`VEG-03D`).

**Page 28 — Echoes of Volumes 37 and 38**

- **Panel 1 (Split):** Ground chambers (`OSD-385`, `OSD-386`) tested how *E. coli* behaved on lettuce and mizuna seeds; now `VEG-03D` (`OSD-412`) tests the real spatial microbiomes of all three leafy greens *in orbit*.

**Page 29 — Astronaut Hands**

- **Panel 1 (Close-up):** ISS crew members—Joseph M. Acaba, Mark T. Vande Hei, and Scott D. Tingle—harvest leaves, roots, wicks, and pillow substrates across two orbital harvests.

**Page 30 — Next Launch Window**

- **Panel 1 (Final Splash):** The `Veggie` canopy of `VEG-03D` shimmers under purple LEDs, with `43` orbital samples awaiting `16S` and `ITS` sequencing.

- **Caption:** Next: `OSD-412` (*VEG-03D*). Multi-species leafy greens, two harvests, and the spatial microbiome of an orbital salad.

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread (Page 31): Suborbital Flight Profiles & Experimental Design

- **Study Identifiers:** `OSD-406` (v4) / `GLDS-406` | DOI: `10.26030/m4mm-3414` | GEO: `GSE160846` | Califar et al. (2021), *Gravitational and Space Research* 9(1):13–29 (`10.2478/gsr-2021-0002`).

- **Sample Cohort (`n = 24` root samples, `3` biological replicates/group):**

| Vehicle & Flight | Date & Site | Peak Ascent / Descent `g` | Microgravity Window | Age & Genotypes | Fixation Timing |
|---|---|---|---|---|---|
| **Virgin Galactic `VP-03` (`VSS Unity`)** | Dec 13, 2018; Mojave, CA (`82.7 km` apogee) | `~4.5g` ascent (`1 min`); `~3.5g` descent (`1 min`); `~9 min` glide | **`3 min`** | `10`-day roots: `Col-0`, `WS` (`GSM4880342`–`353`) | Post-landing in rear bay of nearby vehicle |
| **Blue Origin `NS-12` (`New Shepard`)** | Dec 11, 2019 (`12:53 PM EST`); West Texas | `~3g` ascent (`~2 min`); **`5.7g`** descent (`1 min`); `3g–3.5g` chute spikes (`4 min`) | **`3 min`** | `11`-day roots: `WS`, `sku5` (`GSM4880354`–`365`) | **`33 min`** post-landing (`43 min` elapsed); GC `+1 h` |

- **Growth & Hardware:** `100 mm × 15 mm` Petri dishes, `50 mL` `0.5%` Phytagel (`0.5×` MS, `0.5%` w/v sucrose, `1×` Gamborg's Vitamins), `3M Micropore` tape, `19 ± 2°C`, `~80 μmol m⁻² s⁻¹` PAR (`24 h`), wrapped in **Duvetyne Black-Out Cloth** inside the **FLEX** payload.

### Right Spread (Page 32): Sequencing Pipeline & Transcriptomic Takeaways

- **RNA-Seq Pipeline (`OSD-406`):**

  - **Extraction & QC:** `QIAGEN` `RNeasy`/`QIAshredder`, `RIN 7.1–9.4`; `1 μL` of `1:2000` `ERCC` spike-in (`Mix 1` Flight / `Mix 2` Ground Control) per `50 ng` RNA.

  - **Sequencing:** `NEBNext Ultra Directional RNA Library Prep Kit` on `Illumina NovaSeq 6000` (`2 × 151 bp` PE, `51.67M–75.40M` reads/sample, `7.09%–10.35%` rRNA).

  - **Bioinformatics (`GL-DPPD-7101-G` / `NF_RCP v2.1.0`):** `Trim Galore! v0.6.10` → `STAR v2.7.11b` (`TAIR10` + `ERCC92`) → `RSEM v1.3.3` → `DESeq2 v1.46.0`.

- **Key Transcriptomic Findings:**

  - **Platform & Timing Contrast:** `VG VP-03` yielded only `20` statistically significant root DEGs (`PMC10733374`) and `VG WS` showed zero GO/KEGG pathway enrichments (`ResearchGate Fig. 4`). Conversely, `BO WS` and `BO sku5` exhibited heavy transcriptomic loads and the strongest KEGG pathway enrichments across all tested suborbital and parabolic datasets (`PF2013`, `PF2015`, `F-104`).

  - **Genotype Effect:** `sku5` (root-skewing mutant) altered the intra-platform response compared to `WS` on `BO NS-12`, paralleling `14-3-3kappa:GFP` modulation in parabolic flight (`OSD-406`).

  - **Conserved Metabolic Core:** Carbon/nitrogen metabolism, **branched-chain amino acid degradation** (valine, leucine, isoleucine), and **hypoxic responses** were conserved across platforms, though timing and DEG directionality differed—underscoring the need for **in-flight `KFT` fixation** on future suborbital flights (`OSD-406`).

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "series_title": "Roots in Orbit: The NASA OSDR Plant Chronicles",
  "volume_added": 39,
  "osdr_accession": "OSD-406",
  "glds_accession": "GLDS-406",
  "doi": "10.26030/m4mm-3414",
  "geo_accession": "GSE160846",
  "osdr_url": "https://osdr.nasa.gov/bio/repo/data/studies/OSD-406",
  "primary_publication": {
    "citation": "Califar et al. (2021), Gravitational and Space Research 9(1):13-29",
    "doi": "10.2478/gsr-2021-0002"
  },
  "skipped_accessions": [
    "OSD-387 through OSD-405 (non-plant studies)"
  ],
  "organism": "Arabidopsis thaliana (roots; Col-0, WS, sku5)",
  "hardware_and_environment": "100x15 mm Petri dishes (0.5% Phytagel, 0.5x MS, 0.5% sucrose, 1x Gamborg's Vitamins) wrapped in Duvetyne Black-Out Cloth inside FLEX payload aboard Virgin Galactic VP-03 (VSS Unity, 82.7 km) and Blue Origin NS-12 (New Shepard)",
  "assays": [
    "Bulk RNA-Seq (Illumina NovaSeq 6000, 2x151 bp PE; NEBNext Ultra Directional; ERCC Mix 1/2; n=24; GL-DPPD-7101-G / NF_RCP v2.1.0)"
  ],
  "key_scientific_beats": [
    "VG VP-03 (4.5g ascent, 3 min microgravity, 3.5g descent, 9 min glide) yielded 20 root DEGs and zero GO/KEGG enrichments in WS after post-landing runway harvest.",
    "BO NS-12 (3g ascent, 3 min microgravity, 5.7g descent, 33 min to RNAlater fixation) produced strong transcriptomic loads and the highest KEGG enrichment in WS and sku5.",
    "sku5 skewing mutant altered intra-platform transcriptomic responses vs. wild-type WS on Blue Origin NS-12.",
    "Carbon/nitrogen metabolism, branched-chain amino acid degradation (valine, leucine, isoleucine), and hypoxic responses were conserved across suborbital and parabolic platforms (PF2013, PF2015, F-104), motivating in-flight KFT fixation."
  ],
  "continuity_hook_next": {
    "next_volume": 40,
    "next_osdr": "OSD-412",
    "next_osdr_url": "https://osdr.nasa.gov/bio/repo/data/studies/OSD-412",
    "teaser": "VEG-03D on the ISS: spatial characterization of bacterial and fungal microbiomes across simultaneously grown red Romaine lettuce, mizuna mustard, and green leaf lettuce."
  }
}

```

Say **"Go on"** when you're ready for **Volume 40**.
