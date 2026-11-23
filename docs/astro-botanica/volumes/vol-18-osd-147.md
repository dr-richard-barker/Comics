---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 18
title: "The Hidden Logic of ARG1"
accession: OSD-147
script_status: partial
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 43)
---

> [!NOTE]
> Script status **partial**: 32/32 pages have their own heading; condensed ranges: 8-10, 15-17, 23-25, 26-30.
## 1. Volume Metadata Header

- **Volume:** Vol. 18 — *The Hidden Logic of `ARG1`*

- **OSDR Accession:** `OSD-147` (`GLDS-147`)

- **Version & Dates:** Version 7 | Submitted: `16-May-2016` | Initial Release: `01-Sep-2017` | Updated: `03-Oct-2023`

- **Study DOI:** `10.26030/npp5-bt42`

- **Source Accession:** `GSE81442`

- **Payload & Mission:** `BRIC-17-1` (`CEL` — Cellular Expression Logic) aboard SpaceX `CRS-2` Dragon (`03/01/2013`–`03/26/2013`, `10 d` on ISS)

- **Primary Publication:** Zupanska et al. (2017), *Astrobiology* 17(11):1077–1111 (PMID: `29088549` | DOI: `10.1089/ast.2016.1538`) — *ARG1 Functions in the Physiological Adaptation of Undifferentiated Plant Cells to Spaceflight* *(Companion `HSFA2 KO` study: `OSD-205`, PMID: `30658467`)*

- **Organism & Genotypes:** *Arabidopsis thaliana* Columbia-0 (`Col-0`) hypocotyl-derived undifferentiated callus cell cultures (`~1 g` cells/plate on `6.5 mL` nutrient agar with `2,4-D`, `3%` sucrose, `0.8%` agar): **Wild Type (`WT`)** vs. **`ARG1 KO`** (`SALK_024542C` / `arg1-3` T-DNA insertion null allele)

- **Hardware & Conditions:** `BRIC-LED` (LEDs disabled, continuous dark) Canisters `A` & `B` (`PDFU` 60 mm plates + `HOBO` temperature logger) vs. KSC `ISSES` (International Space Station Environmental Simulator) ground control on a `48 h` delay

- **Preservation & Assays (`n = 18`):** In-orbit `RNAlater` fixation at Day `10` → `24 h` later frozen in `MELFI` (`-80°C`) → cold Dragon return; `RNeasy Mini Kit`, `Ovation Pico WTA` + `Encore Biotin`, `Affymetrix ATH1-121501` (`MAS5` & GeneLab `NF_MAAffymetrix 1.0.3`, `limma` `P < 0.01`, `|log₂ FC| > 1`); `TaqMan` duplex `qRT-PCR` (`UBQ11` control; `AGP12`, `SKB1`, `HSFA2`)

## 2. Dramatis Personae (Grounded in Study Data)

- **WT Callus ("Wild-Type Squad"):** Undifferentiated `Col-0` hypocotyl cells—no roots, no statoliths, no amyloplasts—yet adapting cleanly to orbit by tuning `78` genes.

- **ARG1 (`Altered Response to Gravity 1`):** A J-domain, coiled-coil peripheral membrane protein cycling between the plasma membrane, endomembrane system, and actin cytoskeleton. Its own transcript level stays flat (`307` vs. `313` raw units in `WT`), yet removing it forces **`75` of `78`** `WT` spaceflight genes off their normal script.

- **ARG1 KO (`arg1-3` / `SALK_024542C`):** The knockout twin—thriving in orbit despite missing `ARG1`, but forced to rewrite **`130`** genes (and compensate across **`107`** more) to get there.

- **WRKY2 (`AT5G56270`):** Leader of the tiny **Independent Trio** (`3` genes total)—the only genes that shift identically in both `WT` and `ARG1 KO` spaceflight cells.

- **PEN2 (`AT2G44490`) & Subtilase (`AT1G30600`):** Two of the **12 Required** genes—already pre-elevated on Earth in `ARG1 KO` to match `WT`'s spaceflight level!

- **TIP1;1 (`AT2G36830`) & MATE (`AT2G38330`):** Champions of the **102 Corrected** genes—silent in `WT` spaceflight comparisons, yet exposed when `ARG1 KO` scrambles to pull their expression back to `WT` orbital levels.

- **XTH9 (`AT4G03210`), XTH4 (`AT2G06850`), & XYL1 (`AT1G68560`):** Xyloglucan-remodeling enzymes suppressed in `ARG1 KO` spaceflight cells (`-1.2` to `-2.0` log₂ FC), defining the **Compensated** cell-wall divergence.

## 3. 32-Page Chapter Script

### Act I: Launch & Environmental Shift (Pages 1–10)

**Page 1 — Splash: Undifferentiated, Not Unfeeling**

- *Panel 1 (Full-page splash):* Inside two dark `BRIC-LED` canisters (with every LED switched off) bolted inside SpaceX `CRS-2` Dragon (`March 1, 2013`), `1 g` smears of golden `Col-0` `WT` and `ARG1 KO` callus cells coat `60 mm` agar plates.

- *Caption:* "No root cap. No statoliths. Just undifferentiated `Col-0` callus—and a single missing J-domain protein called `ARG1`."

**Page 2 — Six Months from Hypocotyl to `3:00 AM` Turnover**

- *Panel 1:* At UF Gainesville, `WT` and `arg1-3` (`SALK_024542C`) hypocotyls dedifferentiate into callus on `2,4-D`/kinetin agar, then swirl in liquid suspension before `1 g` scoops are spread onto `6.5 mL` `BRIC` plates.

- *Panel 2:* Wrapped in black cloth inside Nalgene `BioTransport` carriers, the plates drive through the night to KSC for `3:00 AM` turnover—`48 h` before Falcon 9 ignition.

**Page 3 — `BRIC A` & `BRIC B`: Sharing the Canister**

- *Panel 1:* Schematic of `BRIC-17-1` (`CEL`): `BRIC A` holds `WT` (`PDFU 1–2`) alongside `ARG1 KO` (`PDFU 3–5`); `BRIC B` holds `WT` (`PDFU 1–2`) alongside `HSFA2 KO` (`PDFU 3–5`, Vol. 21/later) plus `HOBO` temperature loggers.

- *Panel 2:* Forty-eight hours behind launch, KSC's `ISSES` chamber replays orbital temperature, humidity, and `CO₂` telemetry for the ground twins.

**Page 4 — Twelve Minutes to Orbit**

- *Panel 1:* March 1, `10:10 EST`—Dragon clears the pad; by March 3, it berths to the ISS.

- *Panel 2:* Inside `PDFU-3`, `ARG1 KO` cells float in dark microgravity. *ARG1 KO:* "No `ARG1`? No problem. We don't even have roots to bend!"

**Page 5 — Inside the Endomembrane**

- *Panel 1:* Cross-section of a `WT` cell: `ARG1` shuttles along Golgi, endosomes, and actin cables with its N-terminal J-domain (`HSC70` partner) and C-terminal coiled-coil.

- *Panel 2:* Inside `ARG1 KO`, that trafficking bridge is snapped (`arg1-3` truncated transcript, `6.4`-fold lower raw signal: `48` vs. `307`). Already on Earth, **`90` genes** (`GArg : GWt`) have shifted just to keep `ARG1 KO` alive.

**Page 6–7 — Day 10: `RNAlater` & `MELFI`**

- *Page 6:* Day `10` on orbit: an astronaut triggers the `PDFU` actuator, flooding `WT` and `ARG1 KO` plates with `RNAlater`.

- *Page 7:* Twenty-four hours later, both `BRICs` slide into `-80°C` `MELFI`—solving the ambient-return RNA degradation that plagued `BRIC-16` (`STS-131`, Vol. 14)!

**Page 8–10 — The Four-Way Matrix**

- *Page 8:* Dragon splashes down in the Pacific (`March 26`), returning cold to KSC (`April 2`) and UF ICBR (`Ovation Pico WTA` + `ATH1-121501`, `n = 18`).

- *Page 9:* Zupanska et al. draw a 4-arrow square (`Figure 1`):

  - Vertical: `FWt : GWt` (`WT` adaptation) & `FArg : GArg` (`ARG1 KO` adaptation).

  - Horizontal: `GArg : GWt` (ground gap) & `FArg : FWt` (spaceflight gap).

- *Page 10:* *Caption:* "Don't just ask what changes in `WT`. Ask what `ARG1 KO` had to *fix* just to survive."

### Act II: The Molecular Battle (Pages 11–22)

**Page 11 — The `WT` Adaptation (`78` Genes)**

- *Panel 1:* In `WT` cells (`FWt : GWt`), **78** genes shift (`46` up, `32` down; `P < 0.01`, `|log₂ FC| > 1`).

- *Panel 2:* Golgi and endomembrane proteins surge (`Reticulon` `+3.1`, `CSLC12` `+1.9`, `PDIL1-2` `+1.2`, `ST1` `+1.1`), while `FLA13` (`-2.1`) and `GMA12/MNN10` (`-2.4`) drop.

**Page 12 — The `ARG1 KO` Detour (`130` Genes)**

- *Panel 1:* In `ARG1 KO` (`FArg : GArg`), **130** genes shift (`68` up, `62` down)—almost none of them `WT`'s genes!

- *Panel 2:* Transporters (`TIP1;1`, `HMA5`, `SWEET2`, `NHX2`, `MATE`) surge while xyloglucan wall cutters (`XYL1`, `XTH9`, `XTH4`) plunge.

**Page 13 — The Independent Trio (`3` Genes)**

- *Panel 1:* Overlapping `FWt : GWt` (`78`) and `FArg : GArg` (`130`) leaves only **three** shared genes (`WRKY2` `+1.9`, `At3g08590`, `At3g30843`)!

- *WRKY2:* "Cell polarity is non-negotiable. With or without `ARG1`, we hold the apical/basal switch."

- *Caption:* "That means **`75` of `78`** `WT` spaceflight genes depend—directly or partially—on `ARG1`."

**Page 14 — The `24` Stringent Dependents & `12` Required**

- *Panel 1:* `12` `WT` genes (`PSK4`, `Nucleotide-sugar transporter`) simply go dead in `ARG1 KO` (`Category II`).

- *Panel 2:* Another `12` (**Required**, `Category III`—including `Subtilase` `At1g30600`, `CYP71B2`, `PEN2`) were *already* cranked up on Earth in `ARG1 KO` to match `WT`'s spaceflight level!

**Page 15–17 — The `102` Corrected Genes (The Hidden Majority)**

- *Page 15:* A spotlight hits **102** genes (`25` from `GArg : GWt` + `77` from `FArg : GArg`) that *never* changed in `WT` (`FWt : GWt`), yet `ARG1 KO` had to actively pull back to `WT` spaceflight levels (`FArg : FWt` = no difference!).

- *Page 16:* `TIP1;1` (`-1.6` on ground → `+1.6` in flight), `MATE` (`-1.9` → `+1.7`), `Subtilase` (`-2.3` → `+3.3`), `NHX2`, `SPSA1`, and `SPI` snap back into alignment.

- *Page 17:* *Caption:* "If you only study `WT`, these `102` genes are invisible—because `WT` already holds them at the exact level spaceflight demands."

**Page 18–19 — The `107` Compensated Genes (`XTH` & Gravitropism)**

- *Page 18:* In `FArg : FWt`, **107** genes (`25` active in `FArg : GArg`, `82` static) diverge between `ARG1 KO` and `WT` in orbit.

- *Page 19:* `XYL1` (`-1.4`), `XTH9` (`-1.4`), `XTH8` (`-2.0`), `XTH4` (`-2.0`), `POL` (`-2.4`), `SGR7`/`SHR` (`-1.5`), and vesicle-trafficking `SRP54`/`Clathrin`/`SOS1` (`-1.8` to `-2.1`) mark `ARG1 KO`'s alternative cell-wall and polarity route.

**Page 20 — `PAGE` Convergence & `TaqMan` Check**

- *Panel 1:* `agriGO PAGE` (`Figure 7`) reveals the twist: even with different gene rosters, `WT` and `ARG1 KO` converge on the same overarching biological processes.

- *Panel 2:* `TaqMan` duplex `qRT-PCR` (`UBQ11` control) confirms `AGP12` under-expression in `FArg : GArg` and validates the `P < 0.01` microarray stringency.

**Page 21–22 — `BRIC-16` vs. `BRIC-17`: Only One Gene**

- *Page 21:* Comparing `BRIC-17` `WT` callus (`SpaceX CRS-2`, `MELFI` `-80°C`, freshly established `6`-month line) against `BRIC-16` `WT` callus (`STS-131`, ambient `RNAlater`, years-old line, `+1` week on solid media): **only 1 DEG** (`At5g62710` protein kinase) overlaps!

- *Page 22:* *Caption:* "Pre-flight physiological state—how stressed a cell already is on Earth—rewires the specific gene list, while cell-wall remodeling remains universal."

### Act III: Fixation & Data Epilogue (Pages 23–32)

**Page 23–25 — The `180`-Gene Landscape & `GLDS-147`**

- *Page 23:* `Figure 6` maps the full `180`-gene `Important` landscape (`78` `WT` + `102` `Corrected`) alongside the `107` `Compensated` genes.

- *Page 24:* Eighteen `.CEL.gz` files (`GSM2152569`–`GSM2152586`) enter `GSE81442` and NASA OSDR as `OSD-147` (`DOI: 10.26030/npp5-bt42`), later reprocessed via `NF_MAAffymetrix 1.0.3`.

- *Page 25:* Meanwhile, inside `BRIC B`, the `HSFA2 KO` plates await their own sequel (`OSD-205`).

**Page 26–30 — Epilogue Montage: Many Roads to Orbit**

- *Page 26–29:* `WT` and `ARG1 KO` callus cells divide peacefully in dark `BRIC` agar—two genotypes, two distinct transcriptomic paths, one shared destination.

- *Page 30 (Closing Splash):* A glowing endomembrane network links `ARG1` to `WRKY2`, `PEN2`, `TIP1;1`, and `XTH9` inside a single undifferentiated `Col-0` cell. *Caption:* "A cell doesn't need a root cap to feel spaceflight. It only needs its internal traffic—and a backup plan when `ARG1` is gone."

**Pages 31–32 — Mission Debrief Infographic Spread** *(Detailed in Section 4 below.)*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

**Page 31 (Left Spread): `BRIC-17` `CEL` Flight Profile & 4-Way Matrix (`n = 18`)**

- **Flight:** SpaceX `CRS-2` (`03/01/2013`–`03/26/2013`) | `10 d` dark growth in `BRIC-LED` (`A`/`B`, LEDs off) → in-orbit `RNAlater` → `MELFI` (`-80°C`) | `ISSES` ground control (`48 h` delay).

- **Replicates:** `WT` (`5` `FLT`, `5` `GC`) vs. `ARG1 KO` `SALK_024542C` (`4` `FLT`, `4` `GC`) on `ATH1-121501` (`P < 0.01`, `|log₂ FC| > 1`).

- **4-Way DEG Counts:**

  - `FWt : GWt` (`WT` adaptation): **78** (`46` up, `32` down)

  - `FArg : GArg` (`ARG1 KO` adaptation): **130** (`68` up, `62` down)

  - `GArg : GWt` (ground genotype gap): **90** (`39` up, `51` down)

  - `FArg : FWt` (spaceflight genotype gap): **107**

**Page 32 (Right Spread): The `180`-Important & `107`-Compensated Gene Landscape**

- **ARG1-Independent (`3`):** `WRKY2` (`At5g56270`), `At3g08590`, `At3g30843` (`75/78` `WT` genes depend on `ARG1`).

- **ARG1-Dependent (`24` stringent + `51` partial):** `12` voided (`PSK4`) + `12` **Required** pre-set on ground in `ARG1 KO` (`Subtilase` `At1g30600`, `CYP71B2`, `PEN2`).

- **Corrected (`102`):** Silent in `WT` (`FWt : GWt`), actively adjusted by `ARG1 KO` in orbit to match `WT` levels (`TIP1;1`, `MATE`, `NHX2`, `SPSA1`, `SPI`, `CPK9`, `RALF23`).

- **Compensated (`107`):** Genotype-specific bypasses (`XYL1`, `XTH9`, `XTH4`, `XTH8` down; `POL`, `SGR7`/`SHR` down; `PRA1.G2`, `STP14` up).

- **Cross-Mission (`BRIC-16` vs. `BRIC-17` `WT`):** Only **1** shared DEG (`At5g62710`).

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "volume": 18,
  "osdr_accession": "OSD-147",
  "glds_id": "GLDS-147",
  "source_accession": "GSE81442",
  "payload_mission": "BRIC-17-1 (CEL) / SpaceX CRS-2 Dragon (Mar 1–26, 2013)",
  "organism": "Arabidopsis thaliana",
  "genotypes": ["Col-0 WT (hypocotyl callus)", "ARG1 KO (SALK_024542C / arg1-3)"],
  "new_hardware_introduced": [
    "BRIC-LED (Biological Research in Canisters - LED, operated in dark mode)",
    "ISSES (International Space Station Environmental Simulator, KSC, 48-h delay)",
    "MELFI (-80C ISS freezer post-RNAlater fixation)"
  ],
  "molecular_characters": {
    "independent_3": ["WRKY2 (AT5G56270)", "AT3G08590", "AT3G30843"],
    "wt_endomembrane_cellwall": ["Reticulon (AT3G18260)", "CSLC12 (AT4G07960)", "PDIL1-2 (AT1G77510)", "ST1 (AT2G03760)", "FLA13 (AT5G44130)"],
    "required_12": ["PEN2 (AT2G44490)", "Subtilase (AT1G30600)", "CYP71B2 (AT1G13080)"],
    "corrected_102": ["TIP1;1 (AT2G36830)", "MATE (AT2G38330)", "NHX2 (AT3G05030)", "SPSA1 (AT5G20280)", "SPI (AT1G03060)", "RALF23 (AT3G16570)"],
    "compensated_107": ["XYL1 (AT1G68560)", "XTH9 (AT4G03210)", "XTH4 (AT2G06850)", "XTH8 (AT1G11545)", "POL (AT2G46920)", "SHR/SGR7 (AT4G37650)"]
  },
  "continuity_hooks": [
    "Introduces the 4-way mutant-landscape framework (Independent, Dependent, Required, Corrected, Compensated) revealing 102 genes invisible in WT-only comparisons",
    "MELFI -80C post-fixation stowage resolves the ambient RNAlater RNA-degradation bottleneck of BRIC-16 (Vol. 14)",
    "Companion BRIC-17-1 study (HSFA2 KO) resides in OSD-205"
  ]
}

```

Say **"Go on"** whenever you're ready for **Vol. 19** (the next OSDR plant study after `OSD-147`).
