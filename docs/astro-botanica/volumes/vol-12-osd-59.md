---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 12
title: "Vol. 12 — The Over-Watered Greenhouse"
accession: OSD-59
script_status: condensed
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 31)
---

> [!NOTE]
> Script status **condensed**: 32/32 pages have their own heading; condensed ranges: 4-10, 13-18, 19-22, 23-25, 26-30.
## 1. Volume Metadata Header

- **Volume Title:** *Vol. 12 — The Over-Watered Greenhouse*

- **OSDR Accession:** `OSD-59` (`GLDS-59` | Version 5 | Submitted `12-May-2014` | Initial Release `12-May-2014` | Updated `07-Oct-2021` | `DOI: 10.26030/4w3q-hk88` | Source Accession: `PRJDB2020`)

- **Primary Publication(s):**

  - Sugimoto M, Oono Y, Gusev O, Matsumoto T, Yazawa T, Levinskikh MA, Sychev VN, Bingham G, Wheeler R, Hummerick M (2014). *Genome-wide expression analysis of reactive oxygen species gene network in Mizuna plants grown in long-term spaceflight.* *BMC Plant Biology* `14:4` (`PubMed 24393219` | `DOI: 10.1186/1471-2229-14-4`).

- **Organism & Genotypes:** *Brassica rapa* var. *nipposinica* (**Mizuna**), leaf tissue (`27 days` cultivation).

- **Hardware & Conditions (ISS Expedition 22, `11/30/2009–03/18/2010`; Payload `Lada-VPU-P3R`):**

  - Cultivated in the **Lada** greenhouse aboard the **Zvezda** module of the International Space Station (ISS) under `24 h` cool-white fluorescent light (`125–250 μmol m^-2 s^-1` PAR).

  - **Zvezda Flight Environment:** `24.3 ± 0.8°C`, `3.27 ± 0.46 mmHg ppCO2` (`4,303 ± 605 ppm CO2`), `40.7 ± 6.9% RH`; total absorbed radiation dose **`8.37 mGy`**. Ground Control matched at `24.5 ± 0.5°C`, `4,254 ± 566 ppm CO2`, `41.2 ± 2.6% RH`.

  - **The Over-Watering Incident:** Two arcillite substrates were flown (`15 g` `14-14-14 Osmocote` vs. `14 g` custom `Nutricote`, `85%` moisture setpoint). One root module's pump failed to shut off at `85%`, dumping **nearly `2 liters` of water in `35 hours`**. Automatic watering was disabled and switched to **manual operation** in both flight and ground controls; **only the `Osmocote` manually watered modules** were sequenced here.

- **Preservation & Assay:** Harvested at `27 days`, frozen at **`-80°C` in `MELFI`** (Destiny module), returned at **`< -20°C` in `GLACIER`** aboard the Space Shuttle. `RNeasy Plant Mini kit` →\rightarrow→ `TruSeq RNA` (`mRNA enrichment`, `100-bp` paired-end, unstranded) on **Illumina Genome Analyzer IIx** (`FLT`: `37,248,177` reads, `DRR013834`; `GC`: `37,792,960` reads, `DRR013833`).

  - **Archival Quirk (`n = 2` Pooled Libraries):** `1` pooled Flight sample vs. `1` pooled Ground Control sample; GeneLab (`STAR 2.7.3a` / `RSEM 1.3.1` on *B. rapa* `1.0` Ensembl `43`) provides raw counts only and omits differential-expression calls due to lack of biological replicates.

## 2. Dramatis Personae (Grounded in Study Data)

- **Mizuna (`Brassica rapa` var. `nipposinica`):** A leafy *Brassicaceae* cousin of *Arabidopsis* (`37.2 M` flight reads vs. `37.8 M` ground reads) that looks phenotypically unbothered after `27 days` in orbit—even as `22,428` of its transcripts (`8,258` up, `14,170` down) rewrite their orders.

- **The `Lada` Pump & `85%` Sensor:** A rogue hardware subsystem in Zvezda that locks open for `35 hours`, flooding one root module with `~2 L` of water and forcing human cosmonauts and astronauts into manual-watering mode.

- **`RbohD` & `RbohF` (The NADPH Oxidase Twins):** Plasma-membrane ROS generators that deliberately fire superoxide bursts in orbit, turning microgravity and `8.37 mGy` cosmic radiation into an internal chemical alarm.

- **`MEKK1–MKK4–MPK3` & `OXI1` (The MAPK Relay):** Phosphorylation couriers carrying the oxidative distress signal into the nucleus, where `MEKK1–MKK4–MPK3` ignites **`WRKY22`**.

- **`Zat12` (The Dual-Blade Regulator):** A zinc-finger tactician that simultaneously **induces `WRKY25`** and **represses `ZAT7`** to keep the stress response calibrated rather than suicidal.

- **Thioredoxin, Glutaredoxin & Alternative Oxidase (`AOX`):** The ROS-scavenging vanguard and mitochondrial bypass valve soaking up excess radicals so Mizuna leaves stay lush and edible across `27` continuous days of `24 h` light.

## 3. 32-Page Chapter Script

### Act I: Launch & Environmental Shift (Pages 1–10)

**Page 1**

- **Panel 1 (Splash):** Inside the **Zvezda** module of the International Space Station during **Expedition 22** (`November 2009 – March 2010`), the twin chambers of the **Lada** greenhouse glow under `24-hour` cool-white fluorescent lamps.

  - *Caption:* `ISS ZVEZDA MODULE // LADA-VPU-P3R. 24.3°C. 4,303 PPM CO2. CONTINUOUS LIGHT.`

- **Panel 2:** `10–15` *Brassica rapa* var. *nipposinica* (Mizuna) seeds rest in Turface arcillite granules—one root module packed with `15 g` `14-14-14 Osmocote`, its twin packed with `14 g` custom `Nutricote`.

- **Panel 3:** The moisture controller targets `85%`. Water beads weightlessly through the porous arcillite.

**Page 2**

- **Panel 1:** Emergency red light on the Lada control module! A moisture sensor sticks; the pump refuses to stop at `85%`.

  - *SFX:* **ブオオオオ (BUOOOO — runaway water pump)**

- **Panel 2:** Over `35 hours`, nearly **`2 liters`** of water flood into the failing root module—an orbital flash flood in zero-G!

- **Panel 3:** A crew hand throws the override switch, killing automatic watering. From this hour on, both ISS flight and KSC ground controls run on **manual watering**—and only the `Osmocote` chambers survive as clean, matched comparators.

**Page 3**

- **Panel 1:** `Day 1 to Day 27.` Mizuna's serrated emerald leaves unfurl under `125–250 μmol m^-2 s^-1` PAR, soaking up `8.37 mGy` of cosmic radiation while `4,303 ppm` cabin `CO2` bathes every stoma.

- **Panel 2:** On the outside, the ISS leaves look identical to the ground controls in Florida.

- **Panel 3:** Inside the leaf mesophyll, however, the air is thick with invisible sparks—reactive oxygen species (`ROS`) drifting off photosystems and membranes.

**Pages 4–10 (The `20/32` Oxidative Awakening)**

- **Pages 4–5:** Along the plasma membrane, **`RbohD`** and **`RbohF`** flare to life—NADPH oxidases purposefully pumping ROS into the apoplast as a long-range distress beacon.

- **Pages 6–7:** **`20` of `32` ROS oxidative marker genes** light up across the leaf transcriptome, led by `4` blazing hallmark sentinels.

- **Pages 8–10:** **`OXI1`** and **`MEKK1`** intercept the oxidative surge, passing the baton down **`MKK4`** to **`MPK3`** as Mizuna's leaf cells brace for `27` days without night or gravity.

### Act II: The Molecular Battle (Pages 11–22)

**Pages 11–12 (Double-Page Spread — *The Reprogrammed Canopy*)**

- **Left Page (The Signal Cascade):** **`MEKK1–MKK4–MPK3`** and **`OXI1–MKK4–MPK3`** tear through the nucleus, unlocking **`WRKY22`**. Beside them, **`Zat12`** raises twin blades—raising **`WRKY25`** high while pinning **`ZAT7`** to the floor in transcriptional repression.

- **Right Page (The Scavenger Shield):** Across chloroplasts and mitochondria, **Thioredoxin**, **Glutaredoxin**, and **Alternative Oxidase (`AOX`)** unfurl like shimmering cooling fins, neutralizing runaway peroxides and diverting excess electrons before they can scorch the leaves.

  - *Caption:* `8,258 TRANSCRIPTS UP. 14,170 DOWN. ZERO VISIBLE WILTING.`

**Pages 13–18 (Acclimation vs. Alarm)**

- **Pages 13–15:** **`AOX`** stands at the mitochondrial inner membrane, bleeding off electron pressure under `24-hour` continuous light and `4,303 ppm CO2` so the respiratory chain doesn't choke on its own ROS.

- **Pages 16–18:** **Thioredoxin** and **Glutaredoxin** patrol the stroma, resetting disulfide bonds on Calvin-cycle enzymes—explaining why Mizuna grows just as vigorously in Zvezda as on Earth.

**Pages 19–22 (The Space-Exclusive Cohort)**

- **Pages 19–21:** Some transcripts on the battlefield wear familiar abiotic/biotic stress armor; others carry no terrestrial badge at all—genes preferentially awakened *only* by the spaceflight combination of microgravity, `8.37 mGy` radiation, and stagnant boundary layers.

- **Page 22:** `Day 27.` The Zvezda harvest shears close around the crisp Mizuna leaves.

### Act III: Fixation & Data Epilogue (Pages 23–32)

**Pages 23–25**

- **Page 23:** Leaves are rushed from Zvezda to the Destiny module's **`MELFI`** freezer (`-80°C`), then packed into **`GLACIER`** (`< -20°C`) for Shuttle return to Earth.

  - *SFX:* **ガシャン (GASHAN — MELFI vault seal)**

- **Pages 24–25:** At Okayama University, `RNeasy` and `TruSeq` prepare two `100-bp` paired-end libraries for the **Illumina Genome Analyzer IIx**: `37,248,177` flight reads (`DRR013834`, `0.18%` rRNA) and `37,792,960` ground reads (`DRR013833`, `0.11%` rRNA).

**Pages 26–30 (Archival Epilogue & Series Bridge)**

- **Pages 26–27:** In `January 2014`, Sugimoto et al. publish the `22,428`-transcript ROS network atlas in *BMC Plant Biology* (`14:4`).

- **Pages 28–29:** In `2021`, NASA GeneLab (`OSD-59` Version 5) aligns both libraries to *Brassica rapa* `1.0` (`STAR 2.7.3a` / `RSEM 1.3.1`), flagging the archival caveat: with **`n = 1` pooled flight vs. `n = 1` pooled ground (`n = 2` total)**, formal replicate-based `DESeq2` calls are withheld in favor of raw count tables.

- **Page 30:** Leaving Zvezda's Lada greenhouse behind, the next signal locks onto a fresh orbital crop...

**Pages 31–32:** *(See Section 4 — Mission Debrief Infographic Layout below)*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Page 31 — Lada Hardware, Environment & Sequencing Ledger

- **Header Banner:** `OSD-59 // ISS EXPEDITION 22 MIZUNA (BRASSICA RAPA VAR. NIPPOSINICA, 27 DAYS)`

- **Left Column (Flight Conditions & Hardware Quirk):**

  - **Hardware:** `Lada` greenhouse (`Zvezda` module, ISS), `24 h` cool-white fluorescent light (`125–250 μmol m^-2 s^-1` PAR).

  - **Environment:** Flight `24.3 ± 0.8°C`, `4,303 ± 605 ppm CO2`, `40.7 ± 6.9% RH`, **`8.37 mGy`** radiation; Ground `24.5 ± 0.5°C`, `4,254 ± 566 ppm CO2`, `41.2 ± 2.6% RH`.

  - **Over-Watering Failure:** Pump stuck on past `85%` moisture setpoint (`~2 L` in `35 h`); switched to manual watering; only `Osmocote` (`15 g` `14-14-14`) modules sequenced.

  - **Cold Chain:** `-80°C` `MELFI` (ISS) →\rightarrow→ `< -20°C` `GLACIER` (Space Shuttle).

- **Right Column (Illumina GAIIx & Archival Note):**

  - **Libraries (`n = 2` pooled):** `FLT` (`DRR013834`, `37,248,177` reads, `0.18%` rRNA) vs. `GC` (`DRR013833`, `37,792,960` reads, `0.11%` rRNA), `100-bp` paired-end unstranded.

  - **GeneLab Note:** `STAR`/`RSEM` counts published (`Ensembl 43` *B. rapa* `1.0`); formal differential expression omitted due to `n = 1` per condition.

### Page 32 — ROS Gene Network Reprogramming Map

- **Top Panel (Global Shift Reported by Sugimoto et al. 2014):**

  - **`8,258` up-regulated** and **`14,170` down-regulated** transcripts in spaceflight Mizuna despite normal outward growth.

- **Bottom-Left Panel (ROS Production & Markers):**

  - **`20/32`** ROS oxidative marker genes up-regulated (including `4` hallmarks).

  - **`RbohD` & `RbohF`** NADPH oxidases preferentially up-regulated.

- **Bottom-Right Panel (MAPK Cascades & Scavengers):**

  - **Signaling:** `MEKK1–MKK4–MPK3` →\rightarrow→ `WRKY22` up; `OXI1–MKK4–MPK3` & `OXI1–MPK3` active; `Zat12` →\rightarrow→ `WRKY25` up, `ZAT7` repressed.

  - **Scavenging:** **Thioredoxin**, **glutaredoxin**, and **alternative oxidase (`AOX`)** preferentially expressed.

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "accession": "OSD-59",
  "volume_title": "Vol. 12 — The Over-Watered Greenhouse",
  "hardware_introduced": [
    "Lada Greenhouse (ISS Zvezda module, 24 h fluorescent light, arcillite + Osmocote/Nutricote)",
    "MELFI (-80 C ISS freezer) & GLACIER (< -20 C Shuttle cold stowage)",
    "Illumina Genome Analyzer IIx (100-bp paired-end RNA-Seq)"
  ],
  "ecotypes_or_mutants": [
    "Brassica rapa var. nipposinica (Mizuna)"
  ],
  "molecular_characters": [
    "RbohD & RbohF (ROS-producing NADPH oxidases)",
    "MEKK1-MKK4-MPK3 & OXI1-MKK4-MPK3 / OXI1-MPK3 MAPK cascades",
    "WRKY22, WRKY25, Zat12 (up) & ZAT7 (repressed by Zat12)",
    "Thioredoxin, Glutaredoxin & Alternative Oxidase / AOX (ROS-scavenging acclimation shield)"
  ],
  "continuity_hooks_for_future_volumes": [
    "First Brassica rapa (Mizuna) crop study and first Zvezda Lada greenhouse volume",
    "Hardware failure (2 L over-watering in 35 h) forced manual watering and exclusion of Nutricote modules",
    "n=2 pooled RNA-Seq libraries (no biological replicates) explain GeneLab's raw-counts-only processing"
  ]
}

```

Ready for **Vol. 13** whenever you say `"Go on"`.
