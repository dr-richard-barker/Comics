---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 30
title: "The UV-B Handshake"
accession: OSD-296
script_status: condensed
pages_covered: 32/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 67)
---

> [!NOTE]
> Script status **condensed**: 32/32 pages have their own heading; condensed ranges: 2-4, 5-7, 8-10, 11-14, 15-18, 19-22, 23-26, 27-30.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles*

- **Volume:** 30

- **Title:** *The UV-B Handshake*

- **OSDR / GLDS Accession:** `OSD-296` / `GLDS-296` (Data.gov Catalog Record | ArrayExpress: `E-MEXP-1957`)

- **Chronology Note:** Skips `OSD-282`–`OSD-295` (non-plant payloads). Ground-based photobiology reference study ingested into NASA OSDR (`Earth Science`) to benchmark plant `UV-B` perception, photomorphogenesis, and radiation stress acclimation.

- **Primary Publication:** Favory, J.-J., Stec, A., Gruber, H., Rizzini, L., Oravecz, A., Funk, M., Albert, A., Cloix, C., Jenkins, G. I., Oakeley, E. J., Seidlitz, H. K., Nagy, F., & Ulm, R. (2009). *Interaction of COP1 and UVR8 regulates UV-B-induced photomorphogenesis and stress acclimation in Arabidopsis*. *The EMBO Journal*, 28(5):591–601 (`PMCID: PMC2657586`, `PMID: 19165148`, `doi: 10.1038/emboj.2009.4`).

- **Experimental Platform & Hardware:** Ground growth chambers (Freiburg & Munich, Germany): `Osram L18W/30` white light (`3.6 μmol m⁻² s⁻¹`) supplemented with `Philips TL20W/01RS` narrowband `UV-B` (`~312 nm`, `1.5 μmol m⁻² s⁻¹`) under `3-mm` Schott cutoff filters (`WG345` `−UV-B` vs. `WG305` `+UV-B`); broadband `UV-B` stress field (`6× Philips TL40W/12RS`, `λmax 310 nm`, `7 W/m²` under `WG327`, `WG305`, `WG295`, or `3-mm` quartz); Helmholtz Zentrum München sun simulators (`14 h` PAR `800 μmol m⁻² s⁻¹` + `12 h` `UVBE 400 mW m⁻²`, `23°C/18°C`, `60% RH`); Bio-Rad `PDS-1000/He` biolistic gene gun for `BiFC`.

- **Organism & Genotypes:** *Arabidopsis thaliana* `Col` (`cop1-4`, `hy5-215`, `uvr8-6` [`SALK_033468`]), `Ler` (`cop1eid6`), and `Ws/ProHY5:Luc+` (`uvr8-7`, `cop1-19`, `Pro35S:UVR8` overexpressors `Ox no. 2` & `no. 3`, `cop1-4/Pro35S:YFP-COP1`, `cop1-4 uvr8-6/Pro35S:YFP-COP1`); plus *Sinapis alba* (mustard) hypocotyls for `BiFC`.

- **Assay / Sequencing:** Affymetrix `ATH1` GeneChip microarrays (`n = 36` samples; Qiagen `Plant RNeasy`; NASC Affymetrix Service; `GC-RMA` & `GL-DPPD-7114` `oligo`/`limma`), `qRT-PCR` (`HY5`, `CHS`), `anti-UVR8` (`47 kDa`) & `anti-HY5` immunoblots, `YFP–COP1` co-immunoprecipitation, and `BiFC`.

## 2. Dramatis Personae (Grounded in Study Data)

- **Dr. Roman Ulm & Dr. Ferenc Nagy** (*University of Freiburg & Biological Research Center, Szeged*): Senior investigators who drove the `ProHY5:Luc+` genetic screen to uncover how plants tell low-dose `UV-B` signals apart from lethal radiation damage.

- **Jean-Jacques Favory, Agnieszka Stec, Henriette Gruber, Luca Rizzini, Attila Oravecz, & Markus Funk** (*University of Freiburg, Co-First & Lead Researchers*): Mapped the `cop1` and `uvr8` alleles, ran the `1 h`/`6 h`/`96 h` `ATH1` microarray time course, and captured the `5`-minute `UVR8–COP1` nuclear handshake.

- **Catherine Cloix & Dr. Gareth I. Jenkins** (*University of Glasgow*): Provided `UVR8` chromatin and molecular tools showing `UVR8` sits constitutively on the `HY5` promoter.

- **Andreas Albert & Harald K. Seidlitz** (*Helmholtz Zentrum München*): Operated the full-spectrum sun simulators testing whether `UVR8–COP1` acclimation actually saves plants in realistic sunlight.

- **`UVR8` (`47 kDa`, `440 aa`) & `COP1` (`E3` Ubiquitin Ligase)**: The seven-bladed β-propeller `UV-B` sensor and its multifunctional partner—normally a repressor that degrades `HY5` in visible light, but flipped into a `UV-B` survival ally the instant `UVR8` locks onto `COP1`'s `WD40` domain.

## 3. 32-Page Chapter Script

### Act I: Filtering the Invisible Spectrum (Pages 1–10)

**Page 1 (Splash Page)**

- **Panel 1:** Full-bleed view inside the Freiburg growth chamber. Four-day-old *Arabidopsis* seedlings sit bathed in cool white light (`3.6 μmol m⁻² s⁻¹`) beneath two `3-mm` Schott glass filters: `WG345` on the left (blocking `UV-B`) and `WG305` on the right (admitting `1.5 μmol m⁻² s⁻¹` of `~312 nm` narrowband `UV-B`).

- **Caption (Narration):** *"Orbit strips away Earth's atmosphere—and its ozone shield. Before plants can survive beyond it, we have to know how they read a single sliver of ultraviolet light."*

**Pages 2–4**

- **Pages 2–3:** Jean-Jacques Favory and Attila Oravecz inspect `4`-day-old `Ws/ProHY5:Luc+` plates from the `EMS` mutagenesis screen. Wild-type (`Ws`) hypocotyls under `WG305` (`+UV-B`) shrink by `~50%` and blush deep purple with anthocyanin sunscreen. Beside them, two mutant classes—`uvr8-7` (Gln-124→Stop) and `cop1-19` (Gly-608→Arg in `COP1`'s `WD40` repeats)—stand tall and pale, blind to `UV-B`.

- **Page 4:** Control check (`Supplementary Figure S2`): `uvr8` mutants still activate `HY5` normally under red, far-red, and blue light. Only `UV-B` fails to register.

- **Ulm (Dialogue):** *"Phytochromes and cryptochromes are intact. Whatever `UVR8` and `COP1` are doing, it's wired strictly to `UV-B`."*

**Pages 5–7**

- **Pages 5–6:** The `ATH1` microarray swap. At Day 4 (`96 h −UV-B`), Agnieszka Stec and Henriette Gruber slide the `WG345` filters off and drop `WG305` filters into place—capturing `1 h` and `6 h` `+UV-B` snapshots alongside `96 h +UV-B` (`n = 36` arrays total). Plates are snap-frozen in liquid nitrogen and RNA is extracted via `Plant RNeasy`.

- **Page 7:** Venn diagrams ignite across Edward Oakeley's screen. At `1 h +UV-B`, wild-type `Col` shifts `377` genes up and `102` genes down (`≥2-fold`)—activating DNA photolyases and phenylpropanoid sunscreen enzymes. In `cop1-4` and `uvr8-6`, the diagrams are nearly blank: `99.5%` (up) and `100%` (down) depend on `COP1`, and `98.6%` (up) and `100%` (down) depend on `UVR8`.

**Pages 8–10**

- **Pages 8–9:** `Pro35S:UVR8` overexpression lines (`Ox no. 2` and `no. 3`, `~30-fold` `UVR8` mRNA) hit the light field. Under `+UV-B`, they dwarf dramatically, surging `HY5`, `CHS`, and anthocyanins far above wild type.

- **Page 10:** Western blot (`Figure 3C`) confirms `47 kDa` `UVR8` protein levels are unchanged in `cop1-4` and `hy5-215`. `COP1` isn't destroying `UVR8`—they must be partnering directly.

### Act II: The Five-Minute Handshake (Pages 11–22)

**Pages 11–14 (Microscopy & BiFC Sequence)**

- **Pages 11–12:** Luca Rizzini fires gold microparticles carrying `YFP–COP1` and `CFP–UVR8` into *Sinapis alba* hypocotyls using a Bio-Rad `PDS-1000/He` gene gun. Under `−UV-B`, `YFP–COP1` sits in bright nuclear speckles while `CFP–UVR8` diffuses evenly across the nucleus.

- **Pages 13–14:** The `UV-B` lamp clicks on. `CFP–UVR8` snaps into `YFP–COP1`'s nuclear bodies. In `BiFC` (`Figure 4`), split-`YFP` glows bright yellow only when `UV-B` hits wild-type `UVR8` + `COP1` (`UVR8–UVR8` dimers glow with or without `UV-B`). Point mutants `UVR8G145S`, `UVR8G202R`, and `COP1G608R` (`cop1-19` `WD40`) stay dark; `COP1H69Y` (`cop1eid6` RING mutant) still binds and glows.

- **Favory (Dialogue):** *"It's the `WD40` propeller of `COP1` shaking hands with `UVR8`—and only when `UV-B` flips the switch."*

**Pages 15–18**

- **Pages 15–16:** Co-immunoprecipitation (`Figure 5`): `cop1-4/Pro35S:YFP-COP1` seedlings are pulled down with `anti-GFP` beads after `5`, `15`, `30`, and `60` minutes of `UV-B`. Endogenous `47 kDa` `UVR8` co-precipitates in just **`5` minutes**—long before `YFP–COP1` protein levels even rise.

- **Pages 17–18 (Molecular Interior — `Figure 8` Mechanism):** Inside the nucleus, `UVR8` sits bound to chromatin at the `HY5` promoter. Under white light alone, `COP1` ubiquitinates and degrades `HY5`, keeping growth elongated. The instant `UV-B` triggers the `UVR8–COP1` handshake, `COP1`'s substrate specificity flips: `HY5` degradation halts (`Figure 7`), `HY5` stabilizes, and sunscreen + DNA-repair genes flood the cell.

**Pages 19–22**

- **Pages 19–20:** The broadband `UV-B` stress test (`Figure 6A`). Seedlings pre-acclimated for `7` days under weak narrowband `UV-B` survive `1–2 h` of harsh `Philips TL40W/12RS` broadband `UV-B` (`WG305` filter). Unacclimated seedlings—and `uvr8` or `cop1-4` mutants—bleach and die.

- **Pages 21–22:** Inside the Helmholtz Zentrum München sun simulators (`Figures 6B–C`). Andreas Albert and Harald Seidlitz dial up realistic solar radiation (`800 μmol m⁻² s⁻¹` PAR + `400 mW m⁻²` `UVBE`). At `25–27` days, `uvr8` mutants curl, turn pale, and suffer cell death, while `UVR8` overexpressors stand compact, dark green, and armored.

### Act III: Armor for Harsh Light (Pages 23–32)

**Pages 23–26**

- **Pages 23–24:** Catherine Cloix and Gareth Jenkins review the `UVR8` chromatin-association data (`Supplementary Figure S3`): `UVR8` binds the `HY5` locus even in `cop1-4`, proving `COP1` isn't recruiting `UVR8` to DNA—`UVR8` is recruiting `COP1` to flip the transcriptional switch.

- **Pages 25–26:** Roman Ulm and Ferenc Nagy compare `OSD-296`'s clean narrowband signature (`>98.6%` `UVR8`/`COP1`-dependent) against older broadband arrays that mixed stress damage with photomorphogenesis.

**Pages 27–30 (Epilogue Montage)**

- **Pages 27–28:** ArrayExpress `E-MEXP-1957` is archived and later ingested into NASA's `OSDR` (`OSD-296` / `GLDS-296`) alongside `GL-DPPD-7114` standardized microarray processing—turning a Freiburg photobiology benchmark into an orbital radiation-acclimation baseline.

- **Pages 29–30:** Final transition: From terrestrial sun simulators to real orbital radiation. On the ISS and beyond, dry seeds of rocket (*Eruca sativa*) sit in spaceflight storage (`OSD-301`), accumulating `HY5`, `HSP`, and `ATM` DNA-repair transcripts as spaceflight quietly ages them before germination.

**Pages 31–32 (Double-Page Infographic Spread)**

- *See Section 4 below for the complete Pages 31–32 Mission Debrief layout.*

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread — Page 31: Spectral Hardware & Experimental Design

- **Study Role:** Ground-based `UV-B` photobiology benchmark (`OSD-296` / `GLDS-296`) resolving how `UVR8` and `COP1` separate low-dose `UV-B` signaling from high-dose `UV-B` stress.

- **Narrowband Photomorphogenesis Rig (`ATH1` Array):** `4`-day-old seedlings under continuous white light (`Osram L18W/30`, `3.6 μmol m⁻² s⁻¹`) + `Philips TL20W/01RS` narrowband `UV-B` (`~312 nm`, `1.5 μmol m⁻² s⁻¹`); `3-mm` Schott `WG345` (`−UV-B`) swapped to `WG305` (`+UV-B`) for `96 h −UV-B`, `1 h +UV-B`, `6 h +UV-B`, and `96 h +UV-B` (`n = 36` `ATH1` arrays).

- **Broadband Stress & Sun Simulators:** Six `Philips TL40W/12RS` lamps (`λmax 310 nm`, `7 W/m²`) with `WG327` (`0.0004 W m⁻²` `UVBE`), `WG305` (`0.12`), `WG295` (`0.42`), or quartz (`1.18`); Helmholtz sun simulators (`14 h` PAR `800 μmol m⁻² s⁻¹` + `12 h` `UVBE 400 mW m⁻²`, `23°C/18°C`, `60% RH`).

- **BiFC & Co-IP Toolkit:** *Sinapis alba* biolistic `PDS-1000/He` (`YFP–COP1`, `CFP–UVR8`); `anti-UVR8` (`47 kDa`, `440 aa`); `anti-GFP` pull-down in `cop1-4/Pro35S:YFP-COP1`.

### Right Spread — Page 32: Transcriptomic Gatekeeping & Acclimation Findings

- **Near-Total `COP1` & `UVR8` Dependency (`1 h` & `6 h` `+UV-B`):**

  - Wild-type `Col` altered `377` upregulated and `102` downregulated genes (`≥2-fold`) after `1 h` narrowband `UV-B`.

  - `COP1`-dependent fraction: **`99.5%`** up / **`100%`** down at `1 h`; **`99.8%`** up / **`99.4%`** down at `6 h`.

  - `UVR8`-dependent fraction: **`98.6%`** up / **`100%`** down at `1 h`; **`99.6%`** up / **`99.4%`** down at `6 h`.

- **Direct `UV-B`-Triggered Interaction (`PMC2657586`):**

  - `UVR8` (`47 kDa`) co-immunoprecipitated with `YFP–COP1` within **`5 min`** of `UV-B` onset; `BiFC` confirmed direct nuclear interaction only under `+UV-B` (while `UVR8–UVR8` self-dimerized constitutively).

  - Interaction requires `COP1`'s `WD40` domain (`cop1-19` `G608R` fails to bind), whereas `COP1` RING mutant `cop1eid6` (`H69Y`) retains `UVR8` binding and `UV-B` acclimation.

- **Physiological Outcome:** `UVR8–COP1` binding inhibits `COP1`-mediated `HY5` degradation, driving `CHS`/anthocyanin sunscreen synthesis, `~50%` hypocotyl shortening, and survival under simulated sunlight (`Pro35S:UVR8` `~30-fold` mRNA lines gain hyper-tolerance; `uvr8` and `cop1-4` suffer leaf curling and cell death).

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "series": "Roots in Orbit: The NASA OSDR Plant Chronicles",
  "volume": 30,
  "title": "The UV-B Handshake",
  "accessions": ["OSD-296", "GLDS-296"],
  "arrayexpress": "E-MEXP-1957",
  "skipped_non_plant_accessions": ["OSD-282 through OSD-295"],
  "primary_publication": {
    "citation": "Favory JJ et al. (2009) EMBO J 28(5):591-601",
    "pmcid": "PMC2657586",
    "pmid": "19165148",
    "doi": "10.1038/emboj.2009.4"
  },
  "mission": {
    "name": "Ground Photobiology & Sun-Simulator Reference (Freiburg / Munich / Glasgow / Szeged)",
    "platform": "Growth chambers + Helmholtz Zentrum Muenchen Sun Simulators"
  },
  "hardware": [
    "Osram L18W/30 white light (3.6 umol m-2 s-1) + Philips TL20W/01RS narrowband UV-B (1.5 umol m-2 s-1)",
    "Schott 3-mm WG345 / WG305 / WG327 / WG295 cutoff filters & 3-mm quartz",
    "Philips TL40W/12RS broadband UV-B lamps (7 W/m2)",
    "Bio-Rad PDS-1000/He biolistic system",
    "Affymetrix ATH1 GeneChip (n=36)"
  ],
  "organisms_and_genotypes": [
    "Arabidopsis thaliana Col (cop1-4, hy5-215, uvr8-6 SALK_033468)",
    "Arabidopsis thaliana Ler (cop1eid6)",
    "Arabidopsis thaliana Ws/ProHY5:Luc+ (uvr8-7, cop1-19, Pro35S:UVR8 Ox 2 & 3)",
    "Sinapis alba (mustard hypocotyls for BiFC)"
  ],
  "cast_added": [
    "Roman Ulm (Freiburg)",
    "Ferenc Nagy (Szeged / Edinburgh)",
    "Jean-Jacques Favory (Freiburg)",
    "Agnieszka Stec (Freiburg)",
    "Henriette Gruber (Freiburg)",
    "Luca Rizzini (Freiburg)",
    "Gareth I. Jenkins (Glasgow)",
    "Catherine Cloix (Glasgow)",
    "Andreas Albert & Harald K. Seidlitz (Helmholtz Zentrum Muenchen)"
  ],
  "continuity_hook_next": "OSD-301 (Eruca sativa 'Rocket Science' spaceflight dry-seed RNA-seq, skipping non-plant OSD-297 through OSD-300)"
}

```

Say **"Go on"** when you're ready for **Volume 31**.
