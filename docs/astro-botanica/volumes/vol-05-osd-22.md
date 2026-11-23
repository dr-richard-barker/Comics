---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 5
title: "The Epsomite Sieve"
accession: OSD-22
script_status: partial
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 17)
---

> [!NOTE]
> Script status **partial**: 32/32 pages have their own heading; condensed ranges: 25-30.
## 1. Volume Metadata Header

- **Volume:** `Vol. 5 — The Epsomite Sieve`

- **Target Accession:** `OSD-22` (`GLDS-22` / `GEO:GSE20109` / `DOI: 10.25966/yr5e-ye67`)

- **Primary Publication:** Visscher AM, Paul AL, Kirst M, Guy CL, Schuerger AC, Ferl RJ (2010). *Growth Performance and Root Transcriptome Remodeling of Arabidopsis in Response to Mars-Like Levels of Magnesium Sulfate.* *PLoS ONE* 5(8): e12348. (`DOI: 10.1371/journal.pone.0012348`, `PMID: 20808807`, PMC2925951)

- **Organism & Genotypes:** *Arabidopsis thaliana* — `Col-0` (Wild Type) and `cax1-1` (vacuolar `Ca2+/H+` antiporter knockout, `At2g38170`) for transcriptomics; `Col-0`, `Ws`, `mrs2-10` (`At1g80900` knockout), `sel1-10` (`AtSULTR1;2` knockout), `cax1-1`, and `cax1/cax3` for 4-week soil growth assays.

- **Flight Hardware & Conditions:** **Ground Mars-Regolith Simulation** (Kennedy Space Center / University of Florida).

  - **Soil Bioassay:** Sphagnum peat moss/vermiculite/perlite trays irrigated with `2.2 g/L` MS + `0.5 g/L` MES (`pH 5.70–5.75`) + `0, 20, 60, 80, or 100 mM` `MgSO4·7H2O` (epsomite, modeling Martian regolith up to `10 wt%` hydrated sulfates at Meridiani Planum & Gusev Crater).

  - **Hydroponic Transcriptome Rig:** `2.6 L` glass tanks wrapped in opaque black plastic sheeting with `18`-hole opaque lids and `2-cm` Rockwool (`Grodan`) plugs, aerated by `3W` air pumps and glass-bead airstones (`1/32x` MS Weeks 1–2; `1/16x` MS Week 3, `23°C`). At Day 21, roots were flooded with `+2.08 mM` `MgSO4` (`Ca:Mg = 1:15`) for `45 min`, `90 min`, and `180 min` (`Col-0`) or `180 min` (`cax1-1`) vs. `45 min` `Col-0` control (`n = 4` tanks/group, `18` plants/tank).

  - **Preservation & Assay:** Roots excised below Rockwool plugs, flash-frozen in **liquid nitrogen** (`-80°C`), and profiled on **Agilent `4×44k` Arabidopsis Microarrays** (`37,478` transcripts, `q < 0.05` FDR) + diurnally controlled Q-PCR (`At2g32170` reference).

## 2. Dramatis Personae (Grounded in Study Data)

- **Col-0 Squad (Root Vanguard):** Veteran hydroponic root divers suspended beneath blacked-out Rockwool decks. At `2.08 mM` `MgSO4` (`Ca:Mg = 1:15`), their transcriptional alarm cascades from `325` DEGs (`45 min`) to `1,516` (`90 min`) and `3,265` (`180 min`).

- **cax1-1 (The Unplugged Valve):** A `Col-0` knockout mutant lacking the tonoplast `Ca2+/H+` antiporter `CAX1`. In soil at `80–100 mM` `MgSO4·7H2O`, `cax1-1` retains `+89%` and `+149%` more shoot fresh-weight biomass than `Col-0` (though still at `20%` of untreated `Col-0`).

- **mrs2-10 & sel1-10 (The Failed Shields):** Plasma-membrane knockout recruits lacking `AtMRS2-10` (`Mg2+` channel) and `AtSULTR1;2` (`80%` reduced sulfate uptake). Both fail to outlast `Col-0`/`Ws` on epsomite soil, proving **`Mg2+` cation toxicity**—not `SO4^2-`—is the primary killer.

- **CAX1 (`At2g38170`, `Log2FC -0.57` at `45m`, `-0.87` at `90m`, `-0.73` at `180m`):** Tonoplast `Ca2+/H+` gatekeeper who normally drains cytosolic `Ca2+` into the vacuole. Under `1:15` `Ca:Mg` attack, `Col-0` orders `CAX1` (and `CAX3`, `-1.17` at `90m`) to stand down within `45 min` to hoard scarce cytosolic `Ca2+`.

- **MHX1 (`At2g47600`, `Log2FC +0.39` at `90m`, `+0.41` at `180m`) & SULTR4;1 (`At5g13550`, `Log2FC -0.55` at `180m`):** Vacuolar containment duo. `MHX1` pumps invading `Mg2+` into the vacuolar vault, while `SULTR4;1` locks its efflux hatch to trap excess `SO4^2-` inside.

- **EXP12 (`At3g15370`, `Log2FC +3.21`) & EXP17 (`At4g01630`, `Log2FC +2.50`):** Hyper-charged alpha-expansin sappers loosening cell walls at `45 min`, clashing against retreating `EXPB1` (`-1.04`), `AGP17` (`-1.15`), and `XTH9` (`-0.41`).

- **NCED (`At1g78390`, `Log2FC +2.55`) & ABRE-CE (`p = 5.11E-17`):** ABA biosynthesis commander and the dominant `ACGCGG/CCGCGT` promoter beacon (`33/156` upregulated genes at `45 min`), flanked by `CIPK9` (`+1.78`), `ACS` (`+1.86`), `HAK5` (`+1.55`), `ZAT7` (`+0.99`), and suppressed `WRKY70` (`-0.95`).

- **The Diurnal Drift Anomaly (Metadata Hazard):** Because `Time 90` and `Time 180` microarrays were benchmarked against the `45 min` control rather than time-matched controls, a circadian shadow creeps into the telemetry—exposed and corrected by diurnally matched Q-PCR (`CAX1 = 0.641`, `p = 0.004`; `SULTR3;4 = 0.861`, `p = 0.049`).

## 3. 32-Page Chapter Script

### Page 1 (Act I: Launch & Environmental Shift)

- **Panel 1 [Extreme Wide Shot / High-Contrast Ink]:** The rust-red plains of Meridiani Planum and Gusev Crater on Mars, rendered in stark stippled black-and-white. Evaporite crusts of `MgSO4·7H2O` (epsomite) glitter like salt scars across the regolith.

  - **NARRATION:** "Before a single boot prints Martian dust, the soil is already waiting. Up to ten percent by weight: hydrated magnesium sulfate."

  - **SFX:** `ザザッ (Zaza—Dry regolith wind)`

- **Panel 2 [Medium Shot / Lab Transition]:** Cut to the Kennedy Space Center / UF ground simulation bay. Rows of `2.6 L` glass tanks wrapped in pitch-black plastic sheeting sit under fluorescent racks, capped by opaque lids pierced with `18` Rockwool plugs.

  - **NARRATION:** "Earth's answer is an abyss in a jar. Twenty-one days in darkened hydroponic chambers—until the roots know nothing but the solution."

  - **SFX:** `ブクブク (Bukubuku—Airstone bubbling)`

- **Panel 3 [Close-Up]:** A `3W` air pump forces oxygen through a glass-bead airstone at the bottom of a tank. White *Arabidopsis* `Col-0` roots dangle like pale rigging in `1/16x` MS medium (`pH 5.7`).

  - **DIALOGUE (Col-0 Scout):** "Bubble stream steady. Calcium-to-magnesium ratio nominal. Wait—what's that?"

  - **SFX:** `ゴポッ (Gopo—Heavy fluid surge)`

### Page 2 (Act I: Launch & Environmental Shift)

- **Panel 1 [Two-Panel Split]:** Left: A technician's gloved hand pours `2.08 mM` `MgSO4` into the tank. Right: Beneath the Rockwool ceiling, the translucent water turns dense with glowing `Mg2+` and `SO4^2-` ion clouds (`Ca:Mg = 1:15`).

  - **NARRATION:** "Day 21. Zero-hour injection. The calcium-to-magnesium ratio collapses to one-to-fifteen."

  - **SFX:** `ドクン (Dokun—Osmotic shockwave)`

- **Panel 2 [Low-Angle Shot]:** Across the adjacent soil-assay flats, `mrs2-10` and `sel1-10` squads brace behind plasma-membrane barricades as `80 mM` and `100 mM` epsomite waves roll in.

  - **DIALOGUE (mrs2-10):** "I'm a `AtMRS2-10` knockout! My outer `Mg2+` intake gate is welded shut! They can't touch us!"

  - **DIALOGUE (sel1-10):** "And I cut sulfate uptake by eighty percent! Hold the line!"

  - **SFX:** `ガシャン (Gashan—Gate lock)`

### Page 3 (Act I: Launch & Environmental Shift)

- **Panel 1 [Medium Shot]:** Four weeks later in the soil-tray sector. `mrs2-10` and `sel1-10` rosettes are stunted, chlorotic, and indistinguishable from dying `Col-0` and `Ws` wildtypes.

  - **NARRATION:** "Disabling outer plasma-membrane gates failed. `sel1-10` blocked eighty percent of sulfate—and still withered."

  - **SFX:** `ミシッ (Mishi—Tissue collapse)`

- **Panel 2 [Close-Up]:** A `SPAD-502` chlorophyll meter clamps onto a pale leaf; its digital readout drops.

  - **DIALOGUE (sel1-10, kneeling):** "It wasn't the sulfate... the `Mg2+` cation alone is drowning us."

  - **SFX:** `ピッ (Pi—Meter beep)`

- **Panel 3 [Wide Shot]:** In the alternating yellow-boxed tray sections, `cax1-1` mutants stand noticeably greener and fuller (`+89%` biomass at `80 mM`, `+149%` at `100 mM`).

  - **NARRATION:** "Only one faction held ground in the epsomite flats: `cax1-1`. Not immune—still twenty percent of unstressed size—but alive."

### Page 4 (Act I: Launch & Environmental Shift)

- **Panel 1 [Interior / Hydroponic Root Cortex]:** Return to Day 21, `Time 45` (`45 min` post-injection). Inside `Col-0` root cells, `Mg2+` ions swarm the cytosol, displacing scarce `Ca2+` from binding sites.

  - **DIALOGUE (Col-0 Lookout):** "Calcium ratio's cratering! If `Mg2+` hijacks the enzymes, metabolism stalls!"

  - **SFX:** `ザワザワ (Zawazawa—Ionic static)`

- **Panel 2 [Medium Shot]:** Near the plasma membrane, `ACA2` (`+0.35`) and `CNGC19` (`+0.92`) flare awake while `CNGC1` (`-0.38`) powers down.

  - **DIALOGUE (CIPK9, `Log2 +1.78`):** "Kinase relays online! Sound the `45`-minute alarm—three hundred twenty-five genes to battle stations!"

  - **SFX:** `キィィン (Kiin—Signal resonance)`

### Page 5 (Act I: Launch & Environmental Shift)

- **Panel 1 [Close-Up / Nucleus]:** Inside the `Col-0` nucleus, a glowing `6`-mer sequence—`ACGCGG/CCGCGT` (`ABRE-CE`, `p = 5.11E-17`)—ignites across `33` upregulated gene promoters alongside `D-box` (`CACGCG/CGCGTG`).

  - **NARRATION:** "The primary transcriptional flare hits within forty-five minutes. Over-represented GO turrets lock onto three targets: polygalacturonase, calcium-binding, and transcription factors."

  - **SFX:** `ボッ (Bo—Promoter ignition)`

- **Panel 2 [Medium Shot]:** `NCED` (`At1g78390`, `Log2 +2.55`) synthesizes glowing ABA beacons, flanked by ethylene commander `ACS` (`+1.86`) and jasmonate officer `LOX` (`+1.35`).

  - **DIALOGUE (NCED):** "ABA floodgates open! Every `ABRE-CE` promoter—execute emergency remodeling!"

### Page 6 (Act I: Launch & Environmental Shift)

- **Panel 1 [Wide Shot / Tonoplast Wall]:** At the massive central vacuole membrane, `CAX1` (`At2g38170`, `Log2 -0.57`) stands beside a roaring `Ca2+/H+` siphon draining precious `Ca2+` out of the cytosol.

  - **DIALOGUE (NCED, over comms):** "`CAX1`! Shut down your vacuolar drain! Now!"

  - **SFX:** `ゴォォ (Gooo—Pump roar)`

- **Panel 2 [Close-Up]:** `CAX1` slams the emergency brake, cutting expression at `Time 45`—the very first transporter to stand down.

  - **DIALOGUE (CAX1):** "Copy that. If I keep pumping `Ca2+` into the vacuole, the cytosol starves. Dropping output!"

  - **SFX:** `ガコン (Gakon—Valve slam)`

### Page 7 (Act I: Launch & Environmental Shift)

- **Panel 1 [Medium Shot]:** Along the outer cell wall, a bizarre civil conflict erupts. `EXP12` (`+3.21`) and `EXP17` (`+2.50`) fire plasma torches at the cellulose-xyloglucan matrix.

  - **DIALOGUE (EXP12):** "Loosen the perimeter! Let the wall breathe under osmotic shear!"

  - **SFX:** `ジュワッ (Juwa—Matrix loosening)`

- **Panel 2 [Two-Panel Split]:** Opposite them, `EXPB1` (`-1.04`), `XTH9` (`-0.41`), `RHD1` (`-0.58`), and arabinogalactan sentries `AGP17` (`-1.15`) and `AGP21` (`-1.01`) power down and retreat.

  - **DIALOGUE (AGP17):** "Beta-expansins and AGPs falling back... the wall's rewriting its own architecture."

### Page 8 (Act I: Launch & Environmental Shift)

- **Panel 1 [Wide Shot]:** In the `Col-0` command deck, `ZAT7` (`+0.99`) steps forward with a C2H2 zinc-finger shield while `WRKY70` (`-0.95`) dims in the corner. Eighteen universal abiotic-stress veterans (`Table 5`) lock into formation.

  - **DIALOGUE (ZAT7):** "Salt, cold, osmotic, epsomite—doesn't matter. `WRKY70`'s standing down; stress defense is taking the wheel."

  - **SFX:** `ズズズ (Zuzuzu—Telemetry surge)`

- **Panel 2 [Corner Inset / Time Stamp]:** A digital timer ticks past `00:45:00` toward `01:30:00`. Beneath the black plastic tarp, the `Col-0` transcriptome wave swells from `325` to `1,516` DEGs.

  - **NARRATION:** "Forty-five minutes was only the tripwire. By ninety minutes, the transporter fleet mobilizes."

### Page 9 (Act II: The Molecular Battle)

- **Panel 1 [Wide Shot / Membrane Highway]:** `Time 90`. `74` transporter genes light up across the `Col-0` root cortex. `HAK5` (`+1.55` from `45m`) hauls `K+` inward to balance the cation deluge.

  - **DIALOGUE (HAK5):** "Hold the potassium line! Don't let `Mg2+` crowd out every monovalent ion in the cell!"

  - **SFX:** `バチバチ (Bachibachi—Charge arc)`

- **Panel 2 [Medium Shot]:** At the tonoplast, `CAX1` drops deeper (`-0.87`) as `CAX3` (`-1.17`) and `CAX2` (`-0.27`) also power down, dismantling hetero-CAX complexes.

  - **DIALOGUE (CAX3):** "Shutting down too, `CAX1`. Not a single `Ca2+` ion leaves the cytosol on our watch."

### Page 10 (Act II: The Molecular Battle)

- **Panel 1 [Low-Angle Shot]:** Next to the idle `CAX` valves, `MHX1` (`At2g47600`, `Log2 +0.39` at `90m`, `+0.41` at `180m`) revs up a heavy-duty `Mg2+/H+` antiporter turbine, shoving `Mg2+` into the vacuole.

  - **DIALOGUE (MHX1):** "If we can't block `Mg2+` at the outer door, we'll bury it in the vacuolar vault! Keep the proton gradient burning!"

  - **SFX:** `ギュイン (Gyuin—Turbine spin)`

- **Panel 2 [Close-Up]:** Across the sulfate sector, `SULTR3;4` (`-0.75` at `90m`) dims its intake conduits while `MRS2-10` (`+0.22`) flickers weakly, unable to turn the tide.

  - **NARRATION:** "Two hundred seventeen unique transporter genes across the time series—a frantic, coordinated triage."

### Page 11 (Act II: The Molecular Battle)

- **Panel 1 [Medium Shot / Hydroponic Bay]:** Outside the tanks, lab lights shift as `180 min` approaches. A subtle shadow—the **Diurnal Drift**—creeps across the `Time 90` and `Time 180` microarray readouts.

  - **NARRATION:** "Every microarray comparison at ninety and one-eighty minutes is anchored to the forty-five-minute control. Circadian time is drifting beneath the data."

  - **SFX:** `チクタク (Chikutaku—Clock tick)`

- **Panel 2 [Close-Up]:** A researcher flags `CAX1`, `SULTR3;4`, `MRS2-10`, and `NRAMP1` for diurnally matched Q-PCR verification against `At2g32170`.

  - **DIALOGUE (Analyst):** "We won't trust the clock blind. Run diurnal Q-PCR on `180` vs. `180`."

### Page 12–13 (Act II: The Molecular Battle — Double-Page Spread)

- **Panel 1 [Double-Page Spread / Cutaway Root Cross-Section]:** `Time 180`. A panoramic view of the `Col-0` root at `3,265` DEGs (`445` over `2-fold`; `189` transporters active). On the plasma membrane, `SULTR3;1` (`-2.66`) and `SULTR3;4` (`-0.81`) seal shut. Inside, `MHX1` (`+0.41`) and `CHX20` (`+0.67`) pump `Mg2+` and cations into the vacuole while `SULTR4;1` (`-0.55`) bolts the vacuolar sulfate-efflux hatch so `SO4^2-` stays trapped. Meanwhile, `CAX1` (`-0.73`) and `CAX3` (`-1.12`) remain dark, hoarding cytosolic `Ca2+`.

  - **NARRATION:** "Three hours into the Martian brine. Three thousand two hundred sixty-five genes rewritten. Excess magnesium and sulfate locked in the vacuolar vault—while `CAX1` stays dark to save the last drops of cytosolic calcium."

  - **SFX:** `ゴゴゴゴ (Gogogogo—Genome-wide roar)`

### Page 14 (Act II: The Molecular Battle)

- **Panel 1 [Medium Shot]:** Simultaneously, inside the `cax1-1` tank at `180 min`. The `cax1-1` squad stands in the exact same `2.08 mM` `MgSO4` storm (`Ca:Mg = 1:15`).

  - **DIALOGUE (cax1-1 Scout):** "Three hours in! Compare our transcriptome to `Col-0`—how many genes are different?"

  - **SFX:** `ピピピ (Pipipi—Array scan)`

- **Panel 2 [Close-Up / Shock Reaction]:** The volcano plot (`Fig. 6d`) flashes across the HUD: out of `37,478` transcripts, almost the entire `x`-axis is flat grey. Only **four** unique transcripts glow red (`q < 0.05`).

  - **DIALOGUE (cax1-1 Commander):** "Four?! Just *four* out of thirty-seven thousand?!"

### Page 15 (Act II: The Molecular Battle)

- **Panel 1 [Medium Shot]:** Two of the five red probes belong to `CAX1` itself (`At2g38170.1`, `Log2FC -3.05`; `At2g38170.3`, `-3.82`)—the knocked-out gatekeeper missing from `cax1-1`.

  - **NARRATION:** "The secret wasn't that `cax1-1` invented a new defense at three hours. It was that `Col-0` had *already* shut `CAX1` down at forty-five minutes—mimicking the mutant from the start."

  - **SFX:** `シーン (Shiin—Eerie convergence)`

- **Panel 2 [Three-Panel Strip]:** The other three lonely transcripts in `cax1-1` vs. `Col-0` appear as spectral silhouettes: `At3g01345.1` (beta-galactosidase-like, `-2.73`), `At4g07526.1` (hypothetical protein, `-1.20`), and `CHR2:011819877–011819818` (a fragment of mitochondrial photorespiration gene `At2g27730`, `-1.09`).

  - **DIALOGUE (At3g01345.1):** "Only four ghosts separate us at three hours... whatever builds `cax1-1`'s four-week advantage happens *later*."

### Page 16 (Act II: The Molecular Battle)

- **Panel 1 [Wide Shot / Soil Tray Sector]:** Flash-forward to Week 4 in the `80 mM` and `100 mM` epsomite soil flats. `Col-0` leaves curl and yellow; `cax1-1` rosettes hold more chlorophyll and nearly double (`+89%`) to more than double (`+149%`) `Col-0` shoot weight.

  - **NARRATION:** "In the long war of weeks, a head start without `CAX1` compounds—keeping shoot magnesium lower and chlorophyll intact."

  - **SFX:** `サァァ (Saaa—Leaf rustle)`

- **Panel 2 [Medium Shot]:** Beside them, the `cax1/cax3` double knockout struggles at `0 mM` control, its baseline growth stunted.

  - **DIALOGUE (cax1-1):** "Double knockout `cax1/cax3` pays too high a tax in normal soil. Single-loss `cax1-1` is the clean survivor."

### Page 17 (Act II: The Molecular Battle)

- **Panel 1 [Close-Up / Q-PCR Validation Console]:** Back in the lab, Q-PCR thermal cyclers confirm the diurnally controlled `180 min` verdict: `CAX1` is genuinely downregulated (`0.641`, `p = 0.004`), `SULTR3;4` is genuinely downregulated (`0.861`, `p = 0.049`), while `MRS2-10` (`p = 0.763`) and `NRAMP1` (`p = 0.156`) are flat noise.

  - **DIALOGUE (Analyst):** "Diurnal noise stripped out. `CAX1` and `SULTR3;4` hold."

  - **SFX:** `カチッ (Kachi—Lock-in)`

- **Panel 2 [Medium Shot]:** Inside `Col-0`, `CAX1` and `SULTR3;4` stand illuminated in crisp cyan ink, vindicated.

### Page 18 (Act II: The Molecular Battle)

- **Panel 1 [Wide Shot / Cluster Map]:** The `217`-transporter hierarchical cluster (`Fig. 7`) stretches across the sky like a dual-colored neural web—yellow surges (`MHX1`, `CHX20`, `HAK5`, `CNGC19`, `PHT1`) against blue retreats (`CAX1`, `CAX3`, `SULTR3;1`, `SULTR3;4`, `SULTR4;1`).

  - **NARRATION:** "MATE effluxers, ABC transporters, major intrinsic proteins, cation-chloride cotransporters—over two hundred gatekeepers, many of unknown function, waiting for Martian genetics."

### Page 19 (Act II: The Molecular Battle)

- **Panel 1 [Medium Shot]:** In the `Col-0` cell wall, `EXP12` (`+3.21`) and `EXP17` (`+2.50`) finish loosening the outer wall while `PHT1` (`+0.35`) pulls phosphate to keep ATP spinning.

  - **DIALOGUE (EXP17):** "Wall flexibility locked! Phosphate steady!"

- **Panel 2 [Close-Up]:** A `Ca2+`-binding EF-hand protein (`At3g10300`, `+1.16`) catches a stray `Ca2+` ion, while a putative calmodulin (`At2g41410`, `-0.78`) dims.

  - **NARRATION:** "Calcium signaling splits down the middle—some sensors silenced, others amplified to read the `1:15` storm."

### Page 20 (Act II: The Molecular Battle)

- **Panel 1 [Wide Shot]:** A researcher lifts the opaque lid of a `2.6 L` hydroponic tank (`Fig. 2b`). `18` rosettes sit anchored in Rockwool plugs above a dense curtain of white roots.

  - **DIALOGUE (Researcher):** "Hundred-eighty-minute mark reached. Cut below the Rockwool."

  - **SFX:** `シャキッ (Shaki—Blade snip)`

- **Panel 2 [Close-Up]:** Stainless steel scissors sever the `18`-plant root bundle cleanly below the Rockwool collar, pooling all `18` roots per biological replicate.

### Page 21 (Act III: Fixation & Data Epilogue)

- **Panel 1 [High-Contrast Dramatic Shot]:** A Dewar flask opens, venting a rolling white cloud of **liquid nitrogen** (`-196°C`).

  - **NARRATION:** "No RNAlater soak this time. No orbital delay. Instant cryogenic arrest."

  - **SFX:** `シューッ (Shuu—Nitrogen vapor hiss)`

- **Panel 2 [Close-Up]:** The pooled `Col-0` and `cax1-1` root bundles plunge into the boiling liquid nitrogen. Every `EXP12`, `MHX1`, `SULTR3;1`, and `CAX1` transcript freezes mid-sentence.

  - **SFX:** `パキィン (Pakiin—Flash-freeze snap)`

### Page 22 (Act III: Fixation & Data Epilogue)

- **Panel 1 [Medium Shot]:** Frozen root tissue is weighed without thawing and lysed in RNeasy buffer (`100 mg` wet weight per extraction). RNA integrity is checked on ethidium-bromide denaturing gels and NanoDrop `1000`.

  - **SFX:** `ウィーン (Wiin—Centrifuge hum)`

- **Panel 2 [Close-Up]:** Twenty Cy3-labeled cRNA samples hybridize onto five **Agilent `4×44k` Arabidopsis** microarray slides (`37,478` probesets).

### Page 23 (Act III: Fixation & Data Epilogue)

- **Panel 1 [Wide Shot / Data Center]:** Quantile-normalized `Log2` intensities flow through SAS `9.2` mixed ANOVA and `Q-value 1.0` FDR (`q < 0.05`). The `37,478` transcripts collapse into a focused shortlist of `~500` high-priority candidates.

  - **NARRATION:** "From tens of thousands of unknown genes, the epsomite sieve narrows the search to five hundred."

  - **SFX:** `カタカタ (Katakata—Data sort)`

### Page 24 (Act III: Fixation & Data Epilogue)

- **Panel 1 [Medium Shot]:** A hologram of Mars overlays the hydroponic tanks—Meridiani Planum's sulfate-rich dust beside Earth's serpentine soils.

  - **NARRATION:** "Mars regolith won't yield easily to Earth crops. Blocking `Mg2+` or `SO4^2-` at the outer door isn't enough."

  - **DIALOGUE (Mission Botanist):** "The answer isn't keeping Mars out. It's how we lock it in the vacuole—and protect calcium inside."

### Page 25–30 (Act III: Fixation & Data Epilogue — Condensed Epilogue Sequence)

*(Pages 25–30 close the visual arc:)*

- **Page 25:** `cax1-1` seedlings stand in a future Mars greenhouse prototype, their vacuoles buffering `Mg2+` via `MHX1` (`+0.41`) while `CAX1` stays silent.

- **Page 26:** Ghosted silhouettes of `mrs2-10` and `sel1-10` remind engineers why plasma-membrane knockouts failed: `Mg2+` cation toxicity, not `SO4^2-`, drives growth collapse.

- **Page 27:** The `ABRE-CE` motif (`ACGCGG/CCGCGT`, `p = 5.11E-17`) glows above `NCED` (`+2.55`), marking ABA signaling as the master switch for `MgSO4` shock.

- **Page 28:** `SULTR3;1` (`-2.66`), `SULTR3;4` (`-0.81`), and `SULTR4;1` (`-0.55`) form a three-lock sulfate seal, newly discovered Group 3/4 responses to sulfate excess.

- **Page 29:** The `4`-transcript difference between `cax1-1` and `Col-0` at `180 min` (`CAX1`, `At3g01345.1`, `At4g07526.1`, `At2g27730` region) points future researchers toward multi-day timepoints.

- **Page 30:** The `-80°C` freezer door seals shut. On the horizon, `OSD-37` awaits—where spaceflight itself meets root architecture.

### Page 31 (Mission Debrief — Biological & Molecular Summary)

- **Header:** `OSD-22 MISSION DEBRIEF: MARS-LIKE MgSO4·7H2O STRESS`

- **Panel A — Cation vs. Anion Verdict:** `mrs2-10` (`Mg2+` uptake KO) and `sel1-10` (`80%` lower `SO4^2-` uptake) showed **no growth advantage** on `20–100 mM` `MgSO4·7H2O` soil. **`Mg2+` cation toxicity** (low `Ca:Mg` ratio) is the dominant phytotoxic driver.

- **Panel B — `cax1-1` Partial Tolerance:** `cax1-1` achieved **`+89%` (`80 mM`)** and **`+149%` (`100 mM`)** higher shoot FW biomass and higher chlorophyll than `Col-0`, though still `20%` of untreated `Col-0`.

- **Panel C — Rapid Transcriptome Cascade (`Col-0`, `Ca:Mg = 1:15`):** `325` DEGs (`45m`) →\rightarrow→ `1,516` (`90m`) →\rightarrow→ `3,265` (`180m`), including `217` unique transporters (`13` →\rightarrow→ `74` →\rightarrow→ `189`). `ABRE-CE` (`p = 5.11E-17`) dominates upregulated promoters; `CAX1` (`-0.57` at `45m`, diurnal Q-PCR `0.641`, `p = 0.004`) is downregulated immediately alongside `MHX1` induction (`+0.41`) and `SULTR3;1`/`3;4`/`4;1` repression.

- **Panel D — `cax1-1` vs. `Col-0` at `180 min`:** Only **4 unique transcripts** differed (`q < 0.05`): `CAX1` (`-3.05`/`-3.82`), `At3g01345.1` (`-2.73`), `At4g07526.1` (`-1.20`), and `CHR2:011819877–011819818` (`-1.09`), because `Col-0` rapidly suppresses `CAX1` to phenocopy `cax1-1` early on.

### Page 32 (Mission Debrief — BLSS Implications & Citation)

- **BLSS Engineering Takeaway:** Growing crops in *in situ* Martian regolith (up to `10 wt%` epsomite/kieserite) cannot rely on knocking out outer-membrane `Mg2+` or `SO4^2-` uptake gates. Engineering **vacuolar sequestration** (`MHX1` up, `SULTR4;1` down) and **cytosolic `Ca2+` retention** (`CAX1`/`CAX3` attenuation) offers a viable path to Mars-soil-compatible crops, while narrowing candidate loci from `>10,000` to `~500`.

- **Primary Source:** Visscher AM et al. (2010), *PLoS ONE* 5(8): e12348 (PMC2925951) | `OSD-22`.

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

*(Integrated into Pages 31–32 above; covers `Mg2+` dominance over `SO4^2-`, `cax1-1` `+89%/+149%` biomass gain, `325 -> 1,516 -> 3,265` DEG wave, `4`-transcript `cax1-1` vs. `Col-0` convergence, diurnal Q-PCR correction, and BLSS regolith crop engineering.)*

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "accession": "OSD-22",
  "volume_title": "Vol. 5 — The Epsomite Sieve",
  "hardware_introduced": [
    "2.6 L Opaque-Wrapped Hydroponic Tanks with 18-hole Rockwool (Grodan) Plug Lids & 3W Airstones",
    "Mars-Regolith Epsomite (MgSO4·7H2O) Soil Assay Trays (0–100 mM)",
    "Liquid Nitrogen Flash-Freeze Dewar & Agilent 4x44k Arabidopsis Microarray"
  ],
  "ecotypes_or_mutants": [
    "Col-0 (Hydroponic & Soil Wild Type)",
    "Ws (Soil Wild Type)",
    "cax1-1 (Tonoplast Ca2+/H+ antiporter knockout; +89%/+149% biomass at 80/100 mM MgSO4)",
    "cax1/cax3 (Double knockout; slow baseline growth)",
    "mrs2-10 (AtMRS2-10 plasma-membrane Mg2+ transporter KO; no tolerance gain)",
    "sel1-10 (AtSULTR1;2 sulfate transporter KO; -80% sulfate uptake, no tolerance gain)"
  ],
  "molecular_characters": [
    {
      "gene_symbol": "CAX1 (At2g38170)",
      "role_archetype": "Tonoplast Ca2+/H+ Gatekeeper",
      "visual_motif": "Vacuolar siphon valve slammed shut at 45 min to hoard cytosolic Ca2+",
      "direction_in_this_study": "downregulated"
    },
    {
      "gene_symbol": "MHX1 (At2g47600)",
      "role_archetype": "Vacuolar Mg2+/H+ Sequestration Turbine",
      "visual_motif": "Heavy proton-driven pump locking excess Mg2+ inside the vacuole",
      "direction_in_this_study": "upregulated"
    },
    {
      "gene_symbol": "SULTR3;1 / SULTR3;4 / SULTR4;1",
      "role_archetype": "Sulfate Conduit & Vacuolar Efflux Lock",
      "visual_motif": "Three-stage sulfate seal trapping excess SO4^2- inside the vacuole",
      "direction_in_this_study": "downregulated"
    },
    {
      "gene_symbol": "NCED (At1g78390) & ABRE-CE",
      "role_archetype": "ABA Tactical Commander & Promoter Beacon",
      "visual_motif": "ACGCGG/CCGCGT cis-motif flare lighting 33 upregulated promoters at 45 min",
      "direction_in_this_study": "upregulated"
    },
    {
      "gene_symbol": "EXP12 (At3g15370) / EXP17 (At4g01630)",
      "role_archetype": "Cell Wall Alpha-Expansin Sappers",
      "visual_motif": "Plasma-torch engineers remodeling root walls against EXPB1/AGP17 retreat",
      "direction_in_this_study": "upregulated"
    }
  ],
  "continuity_hooks_for_future_volumes": [
    "Diurnal control drift caught by Q-PCR (At2g32170 reference) becomes a recurring archival verification protocol.",
    "Vacuolar ion sequestration (MHX1/CAX1) establishes the intracellular defense blueprint before returning to orbital flight in Vol. 6 (OSD-37)."
  ]
}

```

Ready to proceed to **Vol. 6 (`OSD-37`)** whenever you say "Go on."
