---
series: "ASTRO-BOTANICA: ZERO-G ROOTS"
volume: 47
title: "Two Ledgers, One Orbit"
accession: OSD-522
script_status: partial
pages_covered: 30/32
science_verification: unverified
source: docs/astro-botanica/source/conversation.md (turn 101)
---

> [!NOTE]
> Script status **partial**: 30/32 pages have their own heading.
## 1. Volume Metadata Header

- **Series:** *Roots in Orbit: The NASA OSDR Plant Chronicles*

- **Volume:** 47

- **Chapter Title:** *Two Ledgers, One Orbit*

- **OSDR Accession:** `OSD-522` (`GLDS-522` | Experiment: `OS-947` | DOI: `10.26030/6z0a-kg61` | Dataset Size: `561.66 GB`)

- **Primary Publication:** Olanrewaju et al. (2023), *Integrative transcriptomics and proteomics profiling of Arabidopsis thaliana elucidates novel mechanisms underlying spaceflight adaptation*, *Frontiers in Plant Science* `14:1260429` (PMID: `38089794` | DOI: `10.3389/fpls.2023.1260429`)

- **Chronology Note:** Continues after Volume 46 (`OSD-520`). Accession `OSD-521` has no indexed plant-omics dataset and is recorded in `skipped_accessions`.

- **Mission & Hardware:** `SpaceX CRS-13` (launched Dec 15, 2017) → `SpaceX CRS-14` (returned May 5, 2018); `BRIC-LED-001` (`6` canisters × `6` `PDFUs` = `36` `60 mm` Petri plates aboard ISS, `85%` red / `15%` blue LEDs at `60 μmol m⁻² s⁻¹`, `4 h` light : `2 h` dark cycle, `10 days` growth, `RNAlater` on-orbit fixation, `-80°C` `MELFI` storage); matched ground control in `ISSES` at Kennedy Space Center (`KSC`).

- **Organism & Assay Scope:** *Arabidopsis thaliana* (`Col-0`) 10-day-old seedlings (`n = 36` sample records): shoot `RNA-Seq` (`NEBNext Ultra II Directional`, `Illumina NovaSeq 6000` `2 × 150 bp` PE, `~50M` reads/sample) paired with root and shoot **soluble** and **membrane** `TMT-6plex` `LC-MS/MS` proteomics (`Orbitrap Eclipse Tribrid` with `FAIMS Pro` and `SPS-MS3`).

## 2. Dramatis Personae (Grounded in Study Data)

- **Transcript-Chorus (Shoot `RNA-Seq`, `15,505` Mapped Transcripts):** Speaks loudly in the nucleus (`25%` of upregulated and `28.5%` of downregulated transcripts target the nucleus), shouting for photosystem construction and hormone signaling—yet its correlation with actual protein abundance is near zero (`r = -0.004` vs. shoot protein; `r = 0.021` vs. root protein).

- **Membrane-Worker (Root & Shoot Membrane Proteome):** The largest and most perturbed protein fraction (`2,187` significant proteins in root; `1,856` in shoot at `adj. p ≤ 0.05`). Unlike the mRNA chorus, root and shoot proteomes march together (`r = 0.878`) while splitting `52` membrane proteins into opposite organ-specific directions (`34` shoot-up/root-down; `18` root-up/shoot-down).

- **PSBA & The Dimmed Antennae:** Photosystem II repair protein `PSBA` (`L2FC +0.56` root, `+1.02` shoot) and `PPL1` (`+0.61` / `+1.60`) step forward to protect oxygen evolution, even as `PSBE` (`-1.37` / `-1.81`), `PSBB`, `PSBC`, `PETA`, `PETH`, and F-ATPase subunits (`ATPA/B/C1`) drop—deliberately throttling light harvesting and photosynthetic ATP output.

- **Villin & The Falling Synthases:** In microgravity, root cellulose synthases (`CESA1/3/5/7`, with `CESA7` at `L2FC -2.37`) and `TFCB` (`-0.40`) retreat, while `Endoglucanase 20` (`+0.86` / `+1.13`), `RGP1/2`, `FLA7/9`, `PCAP1/2`, and actin-bundling `VILLINs` (`VLN2/3/4`) reinforce the cell with matrix polysaccharides and cross-linked actin.

- **BRIC-LED-001 (Closed Canister):** NASA's LED-equipped canister that brings `85%` red / `15%` blue light into microgravity—while trapping ethylene, `O₂`, and volatile organic compounds (`VOCs`) inside a sealed headspace.

## 3. 32-Page Chapter Script

### Act I: Light in a Sealed Canister (Pages 1–10)

**Page 1**

- **Panel 1 (Establishing):** `Falcon 9` lifts off on `SpaceX CRS-13` (Dec 15, 2017). Inside its cold stowage (`4°C`), `36` `60 mm` Petri plates rest inside `6` `BRIC-LED-001` canisters, each holding `~30` stratified *Arabidopsis* `Col-0` seeds on `6.7 mL` `0.5×` MS phytagel media.

- **Caption:** *Until now, BRIC canisters were dark tombs. `BRIC-LED-001` brings `85%` red and `15%` blue diodes into microgravity.*

- **Panel 2:** Aboard the ISS, crew power on the LEDs (`60 μmol m⁻² s⁻¹`). Because of hardware thermal constraints, the diodes pulse on a `4-hour` light / `2-hour` dark rhythm for `10 days`.

**Page 2**

- **Panel 1:** Split view: ISS `BRIC-LED` (`μg`) vs. `KSC`'s `ISSES` ground chamber (`1g`). Seedlings unfurl tiny green cotyledons and two rosette leaves (`>1 mm`), while roots wander near the bottom-lit agar.

- **Panel 2:** Day `10` actuation: `6–7 mL` of `RNAlater` floods each `PDFU`, incubating `12 hours` before freezing at `-80°C` in `MELFI` until `SpaceX CRS-14` splashes down on May 5, 2018.

**Page 3**

- **Panel 1:** Dissection bench under an Olympus microscope: hypocotyls are set aside; **shoots** go to the University of Florida (`NovaSeq 6000` `RNA-Seq`), while **roots and shoots** (`0.1 g` replicates) are crushed in liquid nitrogen at Ohio University and spun at `8,000 g` and `100,000 g` to separate **soluble** and **membrane** proteins.

- **Panel 2:** At Nebraska, `6-plex TMT` tags label `24` multiplexed fractions for `Orbitrap Eclipse Tribrid` `SPS-MS3` with `FAIMS Pro` (`-40`, `-55`, `-70 V`).

**Page 4**

- **Panel 1:** The first ledger opens—`RNA-Seq`: `15,505` mapped transcripts, `2,474` statistically significant (`adj. p < 0.05`). Applying the `|L2FC| ≥ 1` threshold leaves `195` upregulated and `761` downregulated transcripts.

- **Caption:** *More than `61%` of significant transcripts sit between `-1` and `+1` `L2FC`—a quiet majority.*

**Page 5**

- **Panel 1:** The second ledger opens—`TMT` proteomics: `3,973` membrane and `3,412` soluble proteins quantified in the root; `3,965` membrane and `3,537` soluble proteins in the shoot (`FDR 0.01`, `≥2` unique peptides).

- **Panel 2:** Membrane proteins dominate the upheaval: `2,187` significant in the root (`821` up, `1,199` down at `|L2FC| ≥ 0.2`) and `1,856` in the shoot (`778` up, `1,031` down).

**Page 6**

- **Panel 1:** Scatter-plot shockwave (`Figure 3B`): plotting `L2FC` of total shoot RNA against shoot proteins gives **`r = -0.004`**; against root proteins, **`r = 0.021`**.

- **Dialogue (Narration):** "Almost zero linear correlation between message and machine."

- **Panel 2:** Yet plotting root proteins against shoot proteins yields **`r = 0.878`**. The proteome tells a coherent story—just not the one `RNA-Seq` alone predicted.

**Pages 7–8 (Double-Page Spread Anchor — "The Photosystem Paradox")**

- **Visual:** A sweeping cross-section of a thylakoid membrane spanning both pages. On the **top** (`Transcript-Chorus`), every differentially expressed photosystem `RNA` (`PSII`, `PSI`, `petE/F/H/J`) glows bright orange—upregulated. Below (`Membrane-Worker` in root and shoot), the actual protein complexes glow cool blue—depleted. Only two beacons burn amber in the protein layer: **`PSBA`** (`D1` repair protein, `+0.56` root / `+1.02` shoot), **`PPL1`** (`+0.61` / `+1.60`), **`PSAD`** (`+0.35` / `+1.69`), and **`ATPBE`** (`+0.51` / `+0.51`, which brakes ATP hydrolysis). Meanwhile **`PSBE`** (`-1.37` / `-1.81`), **`PSBB`**, **`PSBC`**, **`PETA`** (`-0.77` / `-1.18`), **`PETH`**, and **`ATPA/B/C1`** fade into blue.

- **Caption:** *Post-transcriptional braking in orbit: the cell transcribes photosynthetic blueprints, but the proteome dims the antennae and throttles F-ATPase to curb photoinhibition.*

**Page 9**

- **Panel 1:** Subcellular `SUBA4`/`SUBAcon` sunburst: `25%` of upregulated and `28.5%` of downregulated `RNA` encode **nuclear** proteins, while **plastid** proteins make up `35.5%` (root) and `32.4%` (shoot) of downregulated proteins.

- **Panel 2:** Meanwhile, **cytosolic** proteins lead upregulated shoot proteins (`33.4%`).

**Page 10**

- **Panel 1:** Inside the `52` organ-divergent membrane proteins (`Table 1`): **`34`** rise in shoot and fall in root (chlorophyll a–b binding `AT2G34420` at `+3.04` shoot vs. `-0.39` root, `OEE1-2`, `Peroxidase 70`).

- **Panel 2:** **`18`** rise in root and fall in shoot (`HSP70`, `HSP90-4`, `IMPA-4`, `PME17` `+0.87` root vs. `-0.28` shoot, `TLK2`, `ETFQ`).

### Act II: Rewiring the Wall and the Shunt (Pages 11–22)

**Page 11**

- **Panel 1:** Zoom into the root cell wall (`Table 2`): `CELLULOSE SYNTHASE` subunits `CESA1` (`-0.44`), `CESA3` (`-0.44`), `CESA5` (`-0.52`), `CESA6` (`-0.51` root / `-0.83` shoot), and `CESA7` (`-2.37`) power down alongside `CSLE1`, `CSLG3`, and `TFCB` (`-0.40`).

- **Caption:** *Without `1g` load, rigid cellulose deposition retreats in the root.*

**Page 12**

- **Panel 1:** In their place, `Endoglucanase 20` (`+0.86` root, `+1.13` shoot) softens cellulose fibers while `UDP-arabinopyranose mutases` (`RGP1` `+0.22`, `RGP2` `+0.56`), `FLA7` (`+1.51`/`+1.43`), and `FLA9` (`+0.73`/`+0.57`) remodel non-cellulosic matrix polysaccharides.

**Page 13**

- **Panel 1:** Inside the cytoskeleton: `α-tubulins` (`TUBA1` `-0.78`, `TUBA5` `-0.30` in shoot) and `γ-tubulin` (`GCP3`) fall while microtubule-destabilizing `PCAP1` (`+0.49`/`+0.52`) and `PCAP2` (`+1.08`/`+1.47`) rise.

- **Panel 2:** Actin filaments take over structural duty: `VILLIN` proteins (`VLN2`, `VLN3` `+1.12` shoot, `VLN4`) cross-link actin bundles into a weightless scaffold.

**Page 14**

- **Panel 1:** Membrane ion gates flare across both organs: `AHA11` (`+0.36`/`+0.99`), seven `V-type` proton pumps (`VHA-A2/B2/B3/C3/D/F/G2`), and `Ca²⁺-ATPases` (`ACA2`, `ACA4`, `ACA8`) pump protons and calcium to steady cytosolic homeostasis.

- **Panel 2:** In roots, `CLC-A` (`+0.20`), `POT13` (`+0.37`), `NCL` (`+0.36`), and vacuolar iron transporter `MEB1` (`+1.40` root vs. `-0.50` shoot) surge alongside iron-sequestering `FERRITINs` (`FER1/3/4`).

**Page 15**

- **Panel 1:** Vesicle traffic slows down: `Clathrin heavy chain 2` (`CHC2` `-0.43`/`-0.41`) and vacuolar sorting receptors `VSR1–4` drop, even as `NPSN11` (`+1.27`/`+1.14`) and `SYP22` (`+0.46`/`+1.48`) spike.

- **Panel 2:** `CASPARIAN STRIP` proteins (`-0.62`/`-0.71`) thin out along the root endodermis.

**Page 16**

- **Panel 1:** Polar auxin transport splits cleanly: `PATL2/4/6` and `PIN3` (`+0.49` root) rise, while `PIN4` (`-0.46`/`-0.75`), `PIN7` (`-0.27`/`-0.84`), `AXR4`, `LAX1`, `ABCB1`, and `ABCB20` fall—and root `MYOSINs` (`XIB`, `ATM1`, `XI-H`, `XI-K`, `MYA2`) drop in the root alone.

**Page 17**

- **Panel 1:** Lipid flippase `ALA10` (`+0.69`/`+0.55`), `FAX3` (`+0.32`/`+0.66`), and lipid-transfer proteins (`LTP1/5/G31`) ferry systemic lipid signals across membranes.

**Page 18**

- **Panel 1:** Over `150` ribosomal subunit proteins, spliceosome factors, and `26S` proteasome subunits (`RPT5A` `+0.35`/`+0.77`) shift in orbit.

- **Panel 2:** In shoots, mRNA splicing factors (`ATO`, `CUV`, `SC35`, `SCL30A`, `U2AF65A/B`, `DEAH3`) decrease—explaining why misfolded or orphaned proteins accumulate and call in `HSP60/70/90` and the `26S` proteasome.

**Page 19**

- **Panel 1:** Redox alarm (`132` RNA transcripts and `241` proteins altered): `18` of `20` peroxidases, `FSD1` (`+0.90`/`+0.99`), and `NTRA` surge to clear superoxide radicals.

- **Panel 2:** Surprisingly, shoot `RBOHD` (`-0.67`) and `APX3` (`-0.95`) drop—pointing to heavier oxidative pressure in the root than the shoot.

**Page 20**

- **Panel 1:** Metabolic energy shunt: with photosynthetic ATP throttled, `PAP26` (`+0.43`/`+0.76`) recycles vacuolar inorganic phosphate while **pentose-phosphate shunt** enzymes (`PGD1`, `TKL-2`, `NADP-ME2`, `G6PD1`), **glyoxylate cycle** enzymes, and **isocitrate** enzymes (`ACO1`, `ACO3`, `CICDH`, `IDH5`) generate `NADPH` and bypass glycolysis.

**Page 21**

- **Panel 1:** `Aldehyde dehydrogenases` (`ALDHs`) and `glutathione dehydrogenases` appear in the redox ledger, linking `GSNO`-mediated `S-nitrosation` to spaceflight gravity signaling.

**Page 22**

- **Panel 1:** Cutaway of the sealed `BRIC-LED` canister: unlike open-vented `APH`, `BRIC-LED` has zero gas exchange—trapping ethylene, `O₂`, and `VOCs` around the `10-day` seedlings and compounding their redox and spliceosome load.

### Act III: Reading Between the Two Ledgers (Pages 23–30)

**Page 23**

- **Panel 1:** Comparison wall linking `BRIC-LED` (`Col-0`) to `EMCS` (`Ler`, Vandenbrink et al., 2019): identical photosystem genes (`petE/F/H/J`) went **down** at the RNA level in `EMCS` yet **up** in `BRIC-LED`—proving hardware and ecotype shape the transcriptional script.

**Page 24**

- **Panel 1:** Yet at the **protein** level, `BRIC-LED` converges with spaceflight rice (`Chen & Wang, 2016`): `PSII` and `PSI` core proteins still decline.

**Page 25**

- **Panel 1:** Root plastids (`10.3%` of root-upregulated proteins) boost valine/isoleucine biosynthesis and reductive pentose-phosphate pathways—helping roots navigate without gravity.

**Page 26**

- **Panel 1:** Researchers at Ohio University and University of Florida align both ledgers on dual monitors: `RNA` captures the immediate alarm; `proteome` captures the stabilized, post-transcriptionally filtered machine.

**Page 27**

- **Panel 1:** Blueprint for next-generation spaceflight omics: pairing **translatome** (`Ribo-Seq`) with **proteomics** to catch the exact filter between transcription and translation.

**Page 28**

- **Panel 1:** Data upload complete: `561.66 GB` of raw `FASTQ`s, `Orbitrap` `.raw` spectra, and `CSV` protein/peptide tables archived in `OSD-522`.

**Page 29**

- **Panel 1:** Single *Arabidopsis* seedling floating in a `BRIC-LED` Petri dish, actin cables glowing gold inside its cell walls while `PSBA` shields its chloroplasts.

- **Caption:** *Reading only RNA in orbit is like reading the sheet music without hearing the orchestra.*

**Page 30 (Cliffhanger Hook)**

- **Panel 1:** Looking ahead from `OSD-522`: as OSDR expands beyond `522`, new plant-omics datasets await to test how light, hardware, and translation shape crops for the Moon and Mars.

## 4. Mission Debrief (Pages 31–32 Infographic Layout)

### Left Spread — Page 31: Multi-Omics Recovery & Correlation (`OSD-522`)

| Layer / Fraction | Quantified Total | Significant (`adj. p ≤ 0.05`) | Up / Down in Spaceflight | Threshold Used |
|---|---|---|---|---|
| **Shoot `RNA-Seq`** | `15,505` transcripts | `2,474` | `195` up / `761` down | `\|L2FC\| ≥ 1` |
| **Root Membrane** | `3,973` proteins (`20,923` peptides) | `2,187` | `821` up / `1,199` down | `\|L2FC\| ≥ 0.2` |
| **Root Soluble** | `3,412` proteins (`18,636` peptides) | `332` | `135` up / `162` down | `\|L2FC\| ≥ 0.2` |
| **Shoot Membrane** | `3,965` proteins (`20,658` peptides) | `1,856` | `778` up / `1,031` down | `\|L2FC\| ≥ 0.2` |
| **Shoot Soluble** | `3,537` proteins (`20,091` peptides) | `476` | `172` up / `270` down | `\|L2FC\| ≥ 0.2` |

- **Cross-Layer Correlations:** Total RNA vs. Shoot Protein `r = -0.004`; Total RNA vs. Root Protein `r = 0.021`; **Shoot Protein vs. Root Protein `r = 0.878`**.

- **Organ-Divergent Membrane Proteins:** `34` upregulated in shoot / downregulated in root (photosynthesis, carbon metabolism); `18` upregulated in root / downregulated in shoot (`HSP70`, `HSP90-4`, `IMPA-4`, `PME17`, `TLK2`, `ETFQ`).

### Right Spread — Page 32: Key Protein Shifts (`L2FC` Root / Shoot) & Pathway Takeaways

| Functional Module | Downregulated in Spaceflight (`L2FC` Root / Shoot) | Upregulated in Spaceflight (`L2FC` Root / Shoot) |
|---|---|---|
| **Photosystems (`PSII`/`PSI`)** | `PSBE` (`-1.37` / `-1.81`), `PSBB` (`-0.72` / `-1.20`), `PETA` (`-0.77` / `-1.18`), `ATPB` (`-0.73` / `-0.80`) | `PSBA` (`+0.56` / `+1.02`), `PPL1` (`+0.61` / `+1.60`), `PSAD` (`+0.35` / `+1.69`), `ATPBE` (`+0.51` / `+0.51`) |
| **Cell Wall & Cytoskeleton** | `CESA7` (`-2.37` / `—`), `CESA6` (`-0.51` / `-0.83`), `TFCB` (`-0.40` / `—`), `TUBA1` (`—` / `-0.78`) | `FLA7` (`+1.51` / `+1.43`), `PCAP2` (`+1.08` / `+1.47`), `Endoglucanase 20` (`+0.86` / `+1.13`), `VLN3` (`+0.34` / `+1.12`) |
| **Transport & Polarity** | `PIN7` (`-0.27` / `-0.84`), `PIN4` (`-0.46` / `-0.75`), `CASP` (`-0.62` / `-0.71`), `CHC2` (`-0.43` / `-0.41`) | `NPSN11` (`+1.27` / `+1.14`), `SYP22` (`+0.46` / `+1.48`), `MEB1` (`+1.40` / `-0.50`), `AHA11` (`+0.36` / `+0.99`) |
| **Redox & Shunts** | `RBOHD` (`—` / `-0.67`), `APX3` (`—` / `-0.95`) | `FSD1` (`+0.90` / `+0.99`), `PAP26` (`+0.43` / `+0.76`), `18/20` Peroxidases, `PGD1`, `G6PD1` |

## 5. Updated Series Bible JSON (`SERIES_BIBLE_DELTA`)
JSON

```
{
  "volume_added": 47,
  "title": "Two Ledgers, One Orbit",
  "osdr_accession": "OSD-522",
  "glds_accession": "GLDS-522",
  "experiment_id": "OS-947",
  "doi": "10.26030/6z0a-kg61",
  "osdr_url": "https://osdr.nasa.gov/bio/repo/data/studies/OSD-522",
  "primary_publication": {
    "citation": "Olanrewaju GO, Haveman NJ, Naldrett MJ, Paul A-L, Ferl RJ, Wyatt SE. (2023). Integrative transcriptomics and proteomics profiling of Arabidopsis thaliana elucidates novel mechanisms underlying spaceflight adaptation. Frontiers in Plant Science, 14:1260429.",
    "pmid": "38089794",
    "doi": "10.3389/fpls.2023.1260429",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10712242/"
  },
  "skipped_accessions": [
    "OSD-521 (no indexed plant-omics study)"
  ],
  "organism": "Arabidopsis thaliana (ecotype Col-0, 10-day-old seedlings; shoots for RNA-Seq, roots and shoots for proteomics)",
  "hardware_and_environment": {
    "missions": ["SpaceX CRS-13 (launch Dec 15, 2017)", "SpaceX CRS-14 (return May 5, 2018)"],
    "hardware": "BRIC-LED-001 (6 canisters x 6 PDFUs = 36 60-mm Petri plates; closed system); KSC ISSES ground control",
    "lighting": "85% red / 15% blue LEDs at 60 μmol m^-2 s^-1, 4 h light : 2 h dark cycle",
    "medium_and_fixation": "6.7 mL 0.5x MS + Benomyl + Gamborg B5 + 0.5% sucrose + 0.75% phytagel; 10 days growth; RNAlater 12 h fixation then -80°C MELFI"
  },
  "assays": [
    "Shoot RNA-Seq (NEBNext Ultra II Directional, Illumina NovaSeq 6000 2x150 bp PE, ~50M reads/sample)",
    "Root and shoot soluble + membrane TMT-6plex LC-MS/MS proteomics (Orbitrap Eclipse Tribrid with FAIMS Pro and SPS-MS3)"
  ],
  "key_scientific_beats": [
    "Transcriptome and proteome show near-zero linear correlation (r = -0.004 shoot, r = 0.021 root), whereas shoot and root proteomes correlate strongly (r = 0.878), highlighting post-transcriptional regulation.",
    "Photosystem RNA transcripts are upregulated in spaceflight, while most PSII/PSI and F-ATPase proteins decline and repair/OEC proteins (PSBA, PPL1, PSAD, ATPBE) increase.",
    "Root cellulose synthases (CESA1, CESA3, CESA5, CESA6, CESA7) and TFCB decrease while Endoglucanase 20, RGP1/2, FLA7/9, PCAP1/2, and actin-bundling VILLINs (VLN2/3/4) increase.",
    "52 membrane proteins diverge in opposite directions between organs (34 shoot-up/root-down; 18 root-up/shoot-down), alongside altered polar auxin transport (PIN3 up; PIN4/7, AXR4, LAX1 down).",
    "Metabolic energy demand rises in spaceflight, engaging pentose-phosphate, glyoxylate, and isocitrate shunts plus redox enzymes (18/20 peroxidases, FSD1, NTRA, PAP26) inside closed BRIC-LED canisters."
  ],
  "continuity_hook_next": "Next chronological plant-omics study in OSDR after OSD-522 (to be indexed in Volume 48)"
}

```

Say **"Go on"** when you're ready for **Volume 48**.
