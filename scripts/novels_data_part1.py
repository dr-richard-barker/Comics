"""
Flagship Graphic Novels Data — Volumes 01 through 05
CoSE Science Comics: The Illustrated Space Biology Chronicles
"""

NOVELS_PART_1 = [
    # =========================================================================
    # VOLUME 01 — MODERN MARVEL SCI-FI ACTION
    # =========================================================================
    {
        "volume": 1,
        "id": "vol-01-breathless-in-zero-g",
        "slug": "vol-01-breathless-in-zero-g",
        "title": "BREATHLESS IN ZERO-G",
        "subtitle": "The Invisible Pillow",
        "tagline": "When gravity vanishes, air stops rising—and space leaves suffocate in their own oxygen.",
        "art_style_family": "marvel",
        "art_style_label": "Modern Marvel Sci-Fi Action",
        "art_style_notes": "Bold inked linework, dramatic chiaroscuro shadows, heroic foreshortening, and glowing cyan-vs-amber translucent CFD streamlines wrapping spaceflight leaves.",
        "worlds": ["ISS", "Earth"],
        "perspectives": ["Phytonaut", "Mission Control"],
        "cast": ["sprout", "doc-b", "pixel"],
        "theme_color": "#0284c7",
        "accent_color": "#fbbf24",
        "ngss": "MS-PS2-4 · MS-LS1-6 · HS-LS1-5 · HS-LS1-7",
        "big_finds": [
            "In 0g microgravity, buoyant natural convection collapses (Gr, Ra → 0), thickening the stagnant leaf boundary layer more than 2.5×.",
            "Trapped oxygen around space leaves forces Rubisco to grab O₂ instead of CO₂, flipping photosynthesis into energy-wasting photorespiration across 6 NASA flight contrasts.",
            "Chamber ventilation physics—not mysterious 'zero-G mutations'—explains decades of hypoxia and carbon-starvation gene signatures in NASA OSDR.",
            "Auditing 5 flight chambers (VEGGIE, APH, PGU, CARA, BRIC) via OpenFOAM CFD and the MI-CFD-HW standard reveals how angled cross-flow louvers rescue space crops."
        ],
        "take_home": "When you can't see the bottleneck, simulate the invisible! A gentle, well-aimed breeze is the difference between a suffocating leaf and a thriving orbital garden.",
        "mission_activity": "Launch LunarLeaf-CFD and Spaceflight Plant Hardware CFD, drag gravity from Earth (1g) to the ISS (0g), and calculate the minimum fan speed needed to sweep away the stagnant oxygen blanket.",
        "source_comic_ids": [
            "LunarLeaf-CFD",
            "Photorespiration_multiomics_microgravity",
            "Airflow_omics",
            "spaceflight-plant-hardware-cfd",
            "Hardware_OSDR_review",
            "microgreen-chamber-cfd",
            "Aero-leaf-CFD-analysis-adapted-from-blender-ish",
            "spaceflight-metabolism-natural-variation"
        ],
        "pages": [
            {
                "page_number": 1,
                "act": "Act I — The Orbital Anomaly",
                "beat_title": "400 Kilometers Above Earth, Something Invisible Is Wrong",
                "scene_key": "vol01_p01_iss_veggie_haze",
                "sfx": {"text": "HMMMMMM...", "x": 76, "y": 14, "rotate": -6, "variant": "marvel-tech"},
                "director": {
                    "shot": "Wide cinematic establishing splash through the ISS Destiny/VEGGIE bay toward the Earth-facing porthole.",
                    "lighting": "Magenta-white horticultural LEDs contrasting cold deep-space cobalt through the viewport; ominous golden heat-haze clinging to Sprout's rosette.",
                    "pacing": "Slow atmospheric tension—establish beauty first, then reveal the creeping stagnant aura wrapping the hero seedling.",
                    "data_story_note": "Introduces the core paradox: bright lights, plenty of cabin air, yet space seedlings behave as if they are suffocating."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "HIGH ABOVE EARTH ON THE INTERNATIONAL SPACE STATION! The grow lights are bright, the water is flowing—so why is Sprout feeling dizzy?",
                    "ms": "LOW EARTH ORBIT · 400 KM ALTITUDE. Inside the ISS VEGGIE module, every sensor reads nominal—yet Sprout's stress alarms are screaming.",
                    "hs": "ISS DESTINY LAB (g ≈ 10⁻⁶ m/s²). Under nominal cabin CO₂ and PPFD irradiance, Arabidopsis rosettes repeatedly trigger hypoxia and carbon-starvation regulons."
                },
                "bubbles": [
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-left",
                        "k5": "Whew... it's so stuffy! On Earth, warm air floats away from my leaves—here it just sticks to me like a wet blanket!",
                        "ms": "Something's trapping my breath! I'm pumping out oxygen under these lights, and it won't rise away from my stomata!",
                        "hs": "My intercellular pO₂ is spiking while Cc drops—without buoyant plumes, my own transpired vapor and O₂ are sealing me inside a diffusive shell!"
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B (Radio)",
                        "anchor": "bottom-right",
                        "k5": "Hang tight, Sprout! Mission Control is seeing your stress genes light up—we're going to find out what's hiding in that air!",
                        "ms": "Houston to ISS: six different NASA missions showed these exact stress genes. We used to blame weightlessness—now I think it's the wind!",
                        "hs": "CoSE Mission Control logging OSD-37/38/120 telemetry. Hypothesis: we aren't looking at direct mechanosensing—we're looking at Grashof collapse."
                    }
                ],
                "data_hud": {
                    "headline": "Buoyancy Collapse in Microgravity",
                    "equation": "Gr = g β ΔT L³ / ν² → 0  as  g → 0",
                    "metric": "Boundary Layer >2.5× Thicker in 0g",
                    "dataset": "NASA OSDR · 6 Flight Contrasts",
                    "explanation": "Without gravity pulling denser cool air down and pushing warm moist air up, natural convection halts and gas exchange relies on slow molecular diffusion.",
                    "linked_comic_id": "LunarLeaf-CFD"
                }
            },
            {
                "page_number": 2,
                "act": "Act I — The Invisible Pillow",
                "beat_title": "Trapped Inside a Blanket of Stagnant Air",
                "scene_key": "vol01_p02_boundary_layer_macro",
                "sfx": {"text": "STAGNATE!", "x": 68, "y": 18, "rotate": 5, "variant": "marvel-impact"},
                "director": {
                    "shot": "Dramatic Marvel macro close-up skimming right across Sprout's emerald leaf surface and glowing stomatal pores.",
                    "lighting": "Claustrophobic amber-gold stagnant O₂ halo pressing downward while crisp electric-blue CO₂ molecules drift uselessly outside the boundary wall.",
                    "pacing": "Tight and claustrophobic—make the reader physically feel the invisible diffusive barrier.",
                    "data_story_note": "Visualizes boundary-layer resistance (r_b): CO₂ cannot diffuse inward fast enough while photosynthetic O₂ piles up right over the stomata."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "ZOOMING IN TO LEAF-SURFACE SCALE! An invisible 'pillow' of still air wraps around every leaf when gravity disappears!",
                    "ms": "THE BOUNDARY LAYER TRAP. On Earth, rising warm air peels this layer thin. In 0g, stagnant oxygen swells into a thick barrier blocking fresh CO₂.",
                    "hs": "DIFFUSIVE BOUNDARY LAYER (δ_BL). As Sherwood/Nusselt transport collapses to pure diffusion, boundary resistance r_b surges and depresses intracellular CO₂/O₂."
                },
                "bubbles": [
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-left",
                        "k5": "Hey! Fresh CO₂ is floating right over there, just millimeters away—but this thick oxygen bubble won't let it reach my leaf pores!",
                        "ms": "My stomata are wide open, begging for carbon dioxide, yet all I'm inhaling back is my own trapped oxygen!",
                        "hs": "Stomatal conductance isn't the bottleneck—external diffusive resistance r_b is choking CO₂ influx while O₂ accumulates at the mesophyll surface."
                    },
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel",
                        "anchor": "bottom-right",
                        "k5": "Beep-boop! Scanning leaf air blanket! Thickness is 2.5 times wider than on Earth—no wonder you're out of breath!",
                        "ms": "Telemetry confirmed! Without forced fan airflow, the stagnant zone balloons around every flat leaf—even leaf curl changes where air sticks!",
                        "hs": "Lattice-Boltzmann D2Q9 + AeroLeaf mesh telemetry confirms wake stagnation scales inversely with local Reynolds number Re."
                    }
                ],
                "data_hud": {
                    "headline": "Leaf Geometry & Boundary-Layer Resistance",
                    "equation": "J_CO₂ = (C_amb − C_i) / (r_b + r_s)",
                    "metric": "D2Q9 Lattice-Boltzmann CFD · 0g vs 1g",
                    "dataset": "LunarLeaf-CFD & AeroLeaf Mesh Wizard",
                    "explanation": "Leaf curvature, tilt angle, and ambient wind speed govern where the stagnant boundary layer separates and restores carbon flux.",
                    "linked_comic_id": "Aero-leaf-CFD-analysis-adapted-from-blender-ish"
                }
            },
            {
                "page_number": 3,
                "act": "Act II — Mission Control Wind Tunnel",
                "beat_title": "Modeling the Invisible on Earth",
                "scene_key": "vol01_p03_mission_control_cfd",
                "sfx": {"text": "VROOOM-SCAN!", "x": 74, "y": 15, "rotate": -4, "variant": "marvel-tech"},
                "director": {
                    "shot": "Heroic medium-wide Marvel action angle in Mission Control as Doc B leans over Pixel's sweeping twin holographic wind tunnels.",
                    "lighting": "High-contrast blue-cyan hologram glow lighting Doc B's glasses; left hologram rises in vibrant cyan Earth plumes, right hologram stalls in an amber zero-G dome.",
                    "pacing": "Intellectual acceleration—the detective breakthrough moment when fluid physics clicks into place.",
                    "data_story_note": "Side-by-side comparison of 1g buoyant plumes versus 0g diffusive domes makes fluid mechanics intuitive at a single glance."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "MEANWHILE AT EARTH MISSION CONTROL! Doc B and Pixel fire up a super-powered virtual wind tunnel right inside a web browser!",
                    "ms": "COSE BIOPHYSICS LAB, EARTH. To solve a 20-year spaceflight mystery, Doc B pairs fluid physics directly with NASA's RNA gene archives.",
                    "hs": "COMPUTATIONAL FLUID DYNAMICS MEETS MULTI-OMICS. Coupling OpenFOAM/LBM transport solutions directly to NASA OSDR differential expression covariates."
                },
                "bubbles": [
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-left",
                        "k5": "Look at the difference, Pixel! On Earth, warm air zooms straight up like a chimney. In space, it stalls into a glowing yellow bubble!",
                        "ms": "And when we rank NASA's orbital chambers by how thick that bubble gets, the plants' hypoxia and starvation genes match the airflow curve!",
                        "hs": "Sherwood transport numbers act as direct physical predictors of the spaceflight transcriptome—chamber ventilation explains the signature!"
                    },
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel",
                        "anchor": "bottom-right",
                        "k5": "Aha! That means space plants aren't 'broken'—they're just asking for a gentle fan breeze!",
                        "ms": "Running Airflow Omics meta-analysis now! Sealed Petri boxes trigger massive low-oxygen alarms; ventilated chambers calm right down!",
                        "hs": "Mixed-effects models across OSDR cohorts confirm forced convection suppresses anaerobic fermentation and carbon-starvation modules."
                    }
                ],
                "data_hud": {
                    "headline": "CFD-Guided Multi-Omics Meta-Analysis",
                    "equation": "Sh = h_m L / D_AB = f(Re, Gr, Sc)",
                    "metric": "Airflow Predicts OSDR Stress Transcripts",
                    "dataset": "Airflow_omics · NASA OSDR Meta-Analysis",
                    "explanation": "Ranking spaceflight chambers by buoyant vs. forced ventilation explains why identical Arabidopsis plants show wildly different stress genes across missions.",
                    "linked_comic_id": "Airflow_omics"
                }
            },
            {
                "page_number": 4,
                "act": "Act II — The Solar Factory Runs in Reverse",
                "beat_title": "Rubisco's Oxygen Overload & The Sugar Crisis",
                "scene_key": "vol01_p04_rubisco_reverse",
                "sfx": {"text": "KRA-SPARK!", "x": 72, "y": 16, "rotate": 7, "variant": "marvel-impact"},
                "director": {
                    "shot": "Dynamic Marvel microscopic cutaway inside Sprout's emerald chloroplast where crystalline Rubisco turbines spark with amber oxygen overload.",
                    "lighting": "Emerald-green solar beams clashing against amber-orange warning sparks spiraling into peroxisomes and mitochondria.",
                    "pacing": "High dramatic stakes—shows the exact molecular consequence of the physical airflow bottleneck.",
                    "data_story_note": "Connects the FvCB photosynthesis equation directly to photorespiration (GOX/GDC/SHMT) and dark-starvation sugar depletion."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "INSIDE SPROUT'S SOLAR SUGAR FACTORY! When too much oxygen gets trapped, the leaf's master sugar-builder grabs the wrong gas!",
                    "ms": "PHOTORESPIRATION OVERDRIVE. Trapped O₂ tricks the enzyme Rubisco into running backward—burning energy and leaving Sprout hungry even in bright light!",
                    "hs": "FVCB KINETIC SHIFT. Elevated O_c/C_c drives Rubisco oxygenation (v_o/v_c), inducing peroxisomal/mitochondrial photorespiration (GOX, GDC, SHMT) and carbon starvation."
                },
                "bubbles": [
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-left",
                        "k5": "Whoa! My grow lights are shining bright, yet my sugar tanks are running on empty—my cells think it's an endless midnight!",
                        "ms": "Rubisco keeps grabbing trapped O₂ instead of CO₂! I have to burn emergency recycling pathways just to clear the toxic leftovers!",
                        "hs": "Classic extended-night starvation signature under continuous illumination—PaintOmics shows amino acids and lipids mobilizing to compensate for carbon loss!"
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-right",
                        "k5": "That's the Eureka moment! Physics predicted the biology—light brightness plus still air explains all six NASA space missions!",
                        "ms": "The FvCB photosynthesis model separated every single spaceflight contrast cleanly by light intensity and boundary-layer thickness!",
                        "hs": "Coupling FvCB oxygenation kinetics with GC-MS metabolomics solves a 20-year astrobotany puzzle: physical gas transport drives metabolic remodeling."
                    }
                ],
                "data_hud": {
                    "headline": "FvCB Photosynthesis & Photorespiration Model",
                    "equation": "v_o / v_c = (V_omax K_c O_c) / (V_cmax K_o C_c)",
                    "metric": "6/6 NASA Flight Contrasts Separated by PPFD + r_b",
                    "dataset": "OSD-37, OSD-38, OSD-120, APEX · PaintOmics",
                    "explanation": "High light + thick 0g boundary layers push O₂ up and CO₂ down inside leaves, triggering photorespiratory genes and carbon starvation.",
                    "linked_comic_id": "Photorespiration_multiomics_microgravity"
                }
            },
            {
                "page_number": 5,
                "act": "Act III — The Great Hardware Audit",
                "beat_title": "Five Space Greenhouses Enter the Virtual Wind Tunnel",
                "scene_key": "vol01_p05_five_chambers_audit",
                "sfx": {"text": "WHOOOSH!", "x": 75, "y": 14, "rotate": -8, "variant": "marvel-action"},
                "director": {
                    "shot": "Heroic engineering blueprint splash displaying 5 NASA flight chambers (VEGGIE, APH, PGU, CARA, BRIC) suspended inside a holographic OpenFOAM tunnel.",
                    "lighting": "Crisp cobalt-blue technical grid illuminated by razor-bright cyan velocity vectors slicing through stubborn orange dead-zones.",
                    "pacing": "Problem-solving crescendo—turning discovery into concrete hardware engineering.",
                    "data_story_note": "Highlights the 20 OpenFOAM simulations (5 chambers × 4 gravities), the MI-CFD-HW metadata checklist, and microgreen canopy cross-flow louvers."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "TIME TO RE-ENGINEER SPACE FARMING! Pixel tests five famous NASA plant boxes across Earth, Mars, Moon, and ISS gravity!",
                    "ms": "THE MI-CFD-HW HARDWARE AUDIT. Sealed chambers like BRIC and CARA lose all buoyancy in 0g, while uneven fans in big racks leave hidden wind shadows!",
                    "hs": "20 OPENFOAM BUOYANT SIMULATIONS (5 CHAMBERS × 4 g-REGIMES). Auditing NASA SPLASH & OSDR archives yields the MI-CFD-HW telemetry checklist."
                },
                "bubbles": [
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel",
                        "anchor": "bottom-left",
                        "k5": "Wait—some old NASA notebooks forgot to write down the fan speed! Good thing we built a checklist so future missions record every clue!",
                        "ms": "Look inside the dense microgreen tray: air skims right over the top while humid dead-zones hide between the baby stems!",
                        "hs": "Darcy-Forchheimer porous canopy drag creates central stagnation pockets unless angled inlet louvers inject cross-flow right through the stem zone."
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-right",
                        "k5": "Tilt those air vents inward, team! Let's send a gentle, steady breeze straight to every single leaf!",
                        "ms": "Angled cross-flow baffles break the dead zones without bruising delicate seedlings. Uploading the new louver settings to ISS now!",
                        "hs": "Optimizing inlet angle and plenum velocity collapses r_b across the entire tray with minimal fan power penalty. Ready for orbital deployment!"
                    }
                ],
                "data_hud": {
                    "headline": "Spaceflight Hardware CFD & MI-CFD-HW Standard",
                    "equation": "∇·(ρu) = 0 ;  ρ(u·∇)u = −∇p + μ∇²u + ρg − S_canopy",
                    "metric": "5 NASA Chambers · 4 Gravity Regimes · OpenFOAM",
                    "dataset": "spaceflight-plant-hardware-cfd & Hardware_OSDR_review",
                    "explanation": "Complete CAD geometry, fan velocity, and heat-flux metadata allow 3D airflow verification before launching a single plant habitat.",
                    "linked_comic_id": "spaceflight-plant-hardware-cfd"
                }
            },
            {
                "page_number": 6,
                "act": "Act III — A Breath of Orbital Life",
                "beat_title": "The Breeze That Unlocked the Stars",
                "scene_key": "vol01_p06_orbital_breeze_finale",
                "sfx": {"text": "SHWEEEE—FRESH!", "x": 70, "y": 15, "rotate": -5, "variant": "marvel-triumph"},
                "director": {
                    "shot": "Radiant Marvel finale double-spread: luminous cyan laminar airflow sweeps across Sprout's unfurling emerald leaves in front of the glowing blue horizon of Earth.",
                    "lighting": "Triumphant emerald, sunlit sapphire, and crisp white rim light; the suffocating amber haze dissolves completely into sparkling oxygen trails.",
                    "pacing": "Exhale and soar—emotional payoff connecting physics to living beauty.",
                    "data_story_note": "Cements the volume's take-home: physics and biology speak one shared language, empowering every future space greenhouse."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "MISSION ACCOMPLISHED! A gentle whisper of fan-driven wind sweeps the invisible pillow away—and Sprout takes a deep, happy breath!",
                    "ms": "BREATH RESTORED. As engineered cross-flow thins the boundary layer, CO₂ rushes back into Sprout's leaves and photorespiration alarms go silent.",
                    "hs": "CLOSED-LOOP VALIDATION. Restoring convective mass transfer normalizes Cc/Oc ratios, re-energizes Calvin-cycle carbon fixation, and sets the blueprint for Artemis lunar greenhouses."
                },
                "bubbles": [
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-left",
                        "k5": "Ahhh! Fresh CO₂! My solar sugar factory is humming at full power again—next stop, the Moon!",
                        "ms": "The stagnant blanket is gone! Just a few centimeters per second of steady breeze completely changed my whole genome's mood!",
                        "hs": "Boundary resistance normalized, photorespiratory transcripts down, net assimilation soaring—ready to scale up from the ISS to lunar 0.166g!"
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-right",
                        "k5": "Never forget, explorers: when you can't see a problem, model the invisible! Even the smallest breeze brings life to space!",
                        "ms": "Physics and biology speak the exact same language. Solve the air, and you unlock gardens across the solar system!",
                        "hs": "Next destination: the Lunar South Pole—where 1/6th gravity brings back a whisper of buoyancy inside the Artemis LEAF chamber!"
                    }
                ],
                "data_hud": {
                    "headline": "Take-Home: Modeling the Invisible",
                    "equation": "u_fan ≥ 0.1–0.3 m/s  ⇒  δ_BL(0g) ≈ δ_BL(1g)",
                    "metric": "Restores Carbon Fixation & Eliminates Dead Zones",
                    "dataset": "microgreen-chamber-cfd & LunarLeaf-CFD",
                    "explanation": "Targeted low-speed cross-flow restores Earth-like gas exchange in 0g while conserving precious spacecraft power.",
                    "linked_comic_id": "microgreen-chamber-cfd"
                }
            }
        ]
    },

    # =========================================================================
    # VOLUME 02 — CLASSIC BRONZE/MODERN MARVEL HEROIC EPIC
    # =========================================================================
    {
        "volume": 2,
        "id": "vol-02-artemis-one-small-sprout",
        "slug": "vol-02-artemis-one-small-sprout",
        "title": "ARTEMIS: ONE SMALL SPROUT",
        "subtitle": "First Garden on the Lunar South Pole",
        "tagline": "1/6th gravity. Half an atmosphere. The first living garden placed on the surface of the Moon.",
        "art_style_family": "marvel",
        "art_style_label": "Classic Marvel Heroic Lunar Epic",
        "art_style_notes": "Sweeping widescreen lunar vistas, dramatic velvet-black space skies, crisp visor reflections, cobalt Earthrise lighting, and heroic comic-book silhouettes.",
        "worlds": ["Moon", "Earth"],
        "perspectives": ["Astronaut", "Phytonaut"],
        "cast": ["astra", "sprout", "statolith", "doc-b", "pixel"],
        "theme_color": "#2563eb",
        "accent_color": "#f59e0b",
        "ngss": "5-LS1-1 · MS-PS2-4 · MS-LS1-5 · HS-LS1-5",
        "big_finds": [
            "Unlike 0g on the ISS, 1/6th lunar gravity (0.166g) preserves gentle Rayleigh-Bénard buoyancy convection inside the Artemis LEAF GBC2 chamber.",
            "Inside lunar root caps, heavy starch Statoliths still sediment downward to steer auxin—just 6× slower and with noticeably higher Brownian thermal jitter.",
            "TabPFN v2 foundation modeling separates NASA's low-pressure Exploration Atmosphere (56 kPa, 34% O₂) from hypoxia: low total pressure speeds binary gas diffusion (D_AB ∝ 1/P) and shifts water-loss genes independently.",
            "Ring-boosted Red/Blue/Far-Red LED photon arrays achieve >90% light uniformity across compact lunar grow trays."
        ],
        "take_home": "One small sprout for a seedling, one giant leap for life beyond Earth! Every equation we test today prepares us to plant gardens on the Moon tomorrow.",
        "mission_activity": "Open LEAF_GBC2_pot_model to toggle Earth (1g) vs. Moon (0.166g) plumes, then open LED-pattern-synth to design a lunar LED board with >90% PPFD uniformity.",
        "source_comic_ids": [
            "LEAF_GBC2_pot_model",
            "arabidopsis-exploration-atmosphere-tabpfn",
            "Physics-simulator-for-statolith-modelling-",
            "LED-pattern-synth",
            "deepspace-seed-twin",
            "ASTRO-USA-Habitat-Model"
        ],
        "pages": [
            {
                "page_number": 1,
                "act": "Act I — Touchdown at the South Pole",
                "beat_title": "Carrying Earth's Greenest Payload Across Lunar Dust",
                "scene_key": "vol02_p01_artemis_landing",
                "sfx": {"text": "CRUNCH... HISS!", "x": 72, "y": 15, "rotate": -5, "variant": "marvel-epic"},
                "director": {
                    "shot": "Monumental low-angle Marvel wide splash across the sunlit Lunar South Pole rim with razor-sharp black crater shadows.",
                    "lighting": "Stark unfiltered lunar sunlight rim-lighting Commander Astra's white-and-crimson EVA suit; warm emerald-magenta glow radiating from the carried LEAF cylinder.",
                    "pacing": "Awe-inspiring historical hush—humanity's return to the Moon with living seeds in hand.",
                    "data_story_note": "Sets the Artemis LEAF science definition mission context: testing real plant growth under true 0.166g lunar gravity for the first time."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "THE LUNAR SOUTH POLE! Commander Astra steps off the Artemis lander carrying the most precious cargo on the Moon—a tiny living garden!",
                    "ms": "ARTEMIS · LUNAR SOUTH POLE (0.166g). Inside Commander Astra's hands sits the LEAF GBC2 chamber—ready to test whether Earth life can sense 1/6th gravity.",
                    "hs": "ARTEMIS LUNAR EFFECTS ON AGRICULTURAL FLORA (LEAF). Deploying the sealed GBC2 growth cylinder at g = 1.62 m/s² to resolve fractional-gravity biophysics."
                },
                "bubbles": [
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-left",
                        "k5": "Easy does it, Sprout! Every step here feels six times lighter—let's find you a sunny spot right beside the crater rim!",
                        "ms": "Houston, LEAF payload is deployed on lunar regolith. Internal LEDs are online—we're about to see how a plant grows on another world!",
                        "hs": "EVA telemetry locked: ambient vacuum outside, sealed GBC2 thermal control online. Beginning 0.166g germination and convection logging."
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B (Houston)",
                        "anchor": "bottom-right",
                        "k5": "Copy that, Commander! On the ISS everything floated—now let's see what 1/6th lunar gravity wakes up inside that pot!",
                        "ms": "All eyes at Mission Control are on GBC2 telemetry, Astra. We've modeled 0.166g in CFD—now the Moon itself runs the real experiment!",
                        "hs": "Comparing live GBC2 temperature/RH sensors against our buoyantBoussinesqSimpleFoam 1g vs. 0.166g baseline predictions."
                    }
                ],
                "data_hud": {
                    "headline": "Artemis LEAF Lunar Deployment",
                    "equation": "g_Moon = 1.62 m/s² ≈ 0.166 g_Earth",
                    "metric": "First Living Plant Chamber on the Lunar Surface",
                    "dataset": "NASA Artemis LEAF · GBC2 Chamber",
                    "explanation": "Lunar gravity sits right between Earth (1g) and the ISS (0g)—a crucial physics threshold for both airflow convection and root gravity sensing.",
                    "linked_comic_id": "LEAF_GBC2_pot_model"
                }
            },
            {
                "page_number": 2,
                "act": "Act I — The Gentle Lunar Plume",
                "beat_title": "Inside the GBC2 Pot: Buoyancy Wakes Up",
                "scene_key": "vol02_p02_gbc2_lunar_plume",
                "sfx": {"text": "SHIMMER-RISE...", "x": 74, "y": 14, "rotate": -3, "variant": "marvel-tech"},
                "director": {
                    "shot": "Translucent technical Marvel cross-section straight through the metallic-and-glass GBC2 cylinder resting on lunar soil.",
                    "lighting": "Cool metallic silver exterior vs. warm magenta-emerald interior where a delicate cyan-gold thermal plume curls gently upward.",
                    "pacing": "Wonder and discovery—contrasting the stalled 0g bubble from Vol. 01 with 0.166g's slow graceful plume.",
                    "data_story_note": "Shows why 0.166g is NOT just 'weak 0g': Rayleigh-Bénard buoyancy still operates, creating a slow dome of heat and humidity above lunar seedlings."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "PEEKING INSIDE THE LUNAR POT! Surprise—warm air from the grow lights STILL floats upward on the Moon, just in gentle slow-motion!",
                    "ms": "0.166g BIOPHYSICS REVEALED. Unlike zero-G on the space station, lunar gravity is strong enough to lift a slow, shimmering plume of warmth and water vapor!",
                    "hs": "RAYLEIGH-BÉNARD CONVECTION AT 0.166g. Reduced gravitational acceleration lowers the Rayleigh number by ~6×, establishing a gentler laminar thermal/humidity dome."
                },
                "bubbles": [
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-left",
                        "k5": "Ooh! On the ISS the air froze around my leaves—here on the Moon I can feel a tiny slow-motion breeze lifting off me!",
                        "ms": "The plume rises slower than on Earth, making a cozy humid dome above my leaves—we still need careful ventilation, but gravity is helping again!",
                        "hs": "Water imbibition waves are waking my seed coat while 0.166g buoyancy gently turns over the headspace above the GBC2 substrate!"
                    },
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel (Comms)",
                        "anchor": "bottom-right",
                        "k5": "Beep-boop! The Moon's gentle gravity wakes up natural airflow—1/6th gravity makes a huge difference!",
                        "ms": "3D CFD match confirmed! Knowing that 0.166g maintains weak convection helps engineers size lunar greenhouse fans with surgical precision.",
                        "hs": "Thermal boundary thickness and vapor-pressure deficit (VPD) match the 1.62 m/s² CFD digital twin—validating our pre-flight seed model."
                    }
                ],
                "data_hud": {
                    "headline": "Lunar Buoyancy & Seed Germination Twin",
                    "equation": "Ra_Moon = (g_Moon / g_Earth) · Ra_Earth ≈ 0.166 Ra_Earth",
                    "metric": "1g Earth vs. 0.166g Moon 3D Thermal Plume",
                    "dataset": "LEAF_GBC2_pot_model & deepspace-seed-twin",
                    "explanation": "Even at 1/6th gravity, buoyancy slowly circulates heat and humidity inside the LEAF pot while water imbibition triggers ABA-to-gibberellin germination.",
                    "linked_comic_id": "deepspace-seed-twin"
                }
            },
            {
                "page_number": 3,
                "act": "Act II — The Slow-Motion Gravity Compass",
                "beat_title": "Statolith's Dance at 1/6th Gravity",
                "scene_key": "vol02_p03_statolith_lunar_drift",
                "sfx": {"text": "TUMBLE... TING!", "x": 70, "y": 17, "rotate": 6, "variant": "marvel-magic"},
                "director": {
                    "shot": "Heroic Marvel microscopic dive into the glowing emerald root cap where faceted violet Statolith crystals drift like slow-motion astronauts.",
                    "lighting": "Translucent jade cell walls backlit in golden cytoplasm; glowing violet trails trace each pebble's jittery Brownian descent.",
                    "pacing": "Playful, rhythmic slow-motion physics—giving Statolith vivid personality.",
                    "data_story_note": "Illustrates Stokes sedimentation velocity vs. thermal Brownian jitter at 0.166g—proving lunar gravity crosses the biological gravitropism threshold."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "DEEP INSIDE SPROUT'S ROOT TIP! Meet Statolith—a tiny heavy starch pebble whose job is to roll downhill and shout 'THIS WAY IS DOWN!'",
                    "ms": "COLUMELLA ROOT CAP · 0.166g. On the ISS, Statoliths float aimlessly. On the Moon, they sink six times slower—bouncing through microscopic thermal jitters!",
                    "hs": "STOKES SEDIMENTATION VS. BROWNIAN NOISE. At g = 1.62 m/s², amyloplasts sediment at v_s ∝ g with increased Péclet thermal variance yet still trigger PIN3 auxin polarity."
                },
                "bubbles": [
                    {
                        "speaker": "statolith",
                        "speaker_name": "Statolith",
                        "anchor": "bottom-left",
                        "k5": "Whoaaa—slow-moooootion! I'm wobbling a bit from warm water bumps, but I STILL made it to the floor! Roots, dig THIS way!",
                        "ms": "Six times slower than Earth, and molecular jostling keeps nudging me sideways—but touching the bottom membrane still flips the auxin gates!",
                        "hs": "Sedimentation complete! Contact with the cortical ER triggers lateral PIN3 auxin efflux—even 0.166g is enough to steer gravitropic root curvature!"
                    },
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-right",
                        "k5": "Way to go, Statolith! Now my roots know which way to grow into the Moon pot!",
                        "ms": "Message received, little compass! Redirecting auxin hormone to the lower flank so my root tip bends cleanly downward.",
                        "hs": "Combined with red/blue phototropism cues, 0.166g statolith settling prevents the random root-skewing seen in 0g orbit."
                    }
                ],
                "data_hud": {
                    "headline": "Statolith Sedimentation Kinetics",
                    "equation": "v_s = 2 r² (ρ_p − ρ_f) g / (9 η)",
                    "metric": "6× Slower Settling + Higher Brownian Jitter at 0.166g",
                    "dataset": "Physics-simulator-for-statolith-modelling-",
                    "explanation": "Amyloplasts settle slowly under lunar gravity, proving the Moon provides a detectable—though noisier—downward directional signal for crop roots.",
                    "linked_comic_id": "Physics-simulator-for-statolith-modelling-"
                }
            },
            {
                "page_number": 4,
                "act": "Act II — Thin Air, Big Surprise",
                "beat_title": "Untangling NASA's Low-Pressure Exploration Atmosphere",
                "scene_key": "vol02_p04_exploration_atmosphere",
                "sfx": {"text": "DECOMPRESS!", "x": 74, "y": 15, "rotate": -5, "variant": "marvel-tech"},
                "director": {
                    "shot": "Crisp split-frame Mission Control thriller! Doc B and Pixel slice a glowing atmospheric pressure sphere into two distinct forces: Total Pressure vs. Oxygen Partial Pressure.",
                    "lighting": "Cobalt-violet atmospheric rings glowing against dark console monitors; shimmering translucent air particles speeding up in the thinner right-hand half.",
                    "pacing": "Sharp scientific plot twist—AI foundation model untangles a classic confounding variable.",
                    "data_story_note": "Highlights TabPFN v2 decoupling NASA's 56 kPa / 34% O₂ Exploration Atmosphere: lower total pressure speeds binary diffusion (D_AB ∝ 1/P) independently of hypoxia!"
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "WAIT A SECOND! Lunar bases use thinner air so habitats don't pop like overfilled balloons. Do plants mind breathing mountain-thin air?",
                    "ms": "THE EXPLORATION ATMOSPHERE PUZZLE. Lowering cabin pressure usually lowers oxygen too—so scientists couldn't tell which force stressed the plants!",
                    "hs": "TABPFN V2 FOUNDATION MODEL DECOUPLING. Separating total barometric pressure (P_tot = 56 kPa) from oxygen partial pressure (pO₂) across hypobaric Arabidopsis transcriptomes."
                },
                "bubbles": [
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel",
                        "anchor": "bottom-left",
                        "k5": "Untangled! Thin air isn't the same as low oxygen! When air is thinner, gas molecules actually zoom FASTER toward the leaf!",
                        "ms": "TabPFN v2 pulled the two threads apart: low oxygen triggers panic fermentation, while low total pressure speeds diffusion and changes water-loss genes!",
                        "hs": "SHAP attribution proves P_tot governs binary diffusivity (D_AB ~ 1/P) and transpiration/cell-wall remodeling, distinct from canonical pO₂ hypoxia."
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-right",
                        "k5": "Brilliant! That means lunar greenhouses can safely run at lower pressure—saving tons of heavy rocket metal—as long as we keep humidity steady!",
                        "ms": "By pairing 56 kPa Exploration Atmosphere with higher O₂ percentage and mist control, plants actually breathe EASIER in thin lunar air!",
                        "hs": "A huge win for lunar habitat mass budgets: lower structural hoop stress with faster diffusive CO₂ transport once transpiration is managed."
                    }
                ],
                "data_hud": {
                    "headline": "Exploration Atmosphere Decoupling (TabPFN v2)",
                    "equation": "D_AB ∝ T^(3/2) / P_tot   (56 kPa · 34% O₂)",
                    "metric": "Total Pressure vs. pO₂ Separated via TabPFN v2",
                    "dataset": "arabidopsis-exploration-atmosphere-tabpfn",
                    "explanation": "Lowering total habitat pressure increases gas diffusion speed while keeping oxygen adequate, decoupling physical water-loss responses from hypoxia.",
                    "linked_comic_id": "arabidopsis-exploration-atmosphere-tabpfn"
                }
            },
            {
                "page_number": 5,
                "act": "Act III — Painting with Photons",
                "beat_title": "Designing the Ultimate Lunar Grow Light",
                "scene_key": "vol02_p05_led_photon_ring",
                "sfx": {"text": "ZAP-IGNITE!", "x": 75, "y": 14, "rotate": -6, "variant": "marvel-action"},
                "director": {
                    "shot": "Dynamic overhead-angled Marvel composition inside the lunar habitat rack as Commander Astra calibrates a glowing ring-boosted red/blue LED array.",
                    "lighting": "Radiant crimson-red and electric sapphire-blue photon cones overlapping into luminous violet-white uniformity across lush emerald trays.",
                    "pacing": "Inventive energy—engineering light as both food and biological instruction.",
                    "data_story_note": "Illustrates Lambertian PPFD superposition and spectral ratios (Red for photosynthetic efficiency + Blue for compact stems and open stomata)."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "SURPRISE: PLANTS DON'T EVEN NEED WHITE LIGHT! Commander Astra tunes red and blue space LEDs like an artist painting with rainbows!",
                    "ms": "PHOTON ARCHITECTURE. Badly spaced LEDs sunburn center plants while starving corner seedlings. A ring-boosted red/blue grid fixes every dark corner!",
                    "hs": "HORTICULTURAL LED IRRADIANCE SYNTHESIS. Solving 2D Lambertian cosine-law PPFD superposition and phytochrome photostationary state (PSS) across modular grow racks."
                },
                "bubbles": [
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-left",
                        "k5": "Red photons power the sugar engines, blue photons keep the stems sturdy and open the leaf pores—every single seedling gets its fair share!",
                        "ms": "Boosting the outer LED ring pushed tray uniformity over 90%! No stretched corner seedlings and zero wasted lunar battery power!",
                        "hs": "Spectral recipe locked: high red quantum efficiency paired with targeted blue cryptochrome activation and radial plenum airflow."
                    },
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-right",
                        "k5": "Whoa, it feels like a sunny spring morning right here inside a dark Moon crater!",
                        "ms": "Light isn't just energy to us—it's information! Every wavelength tells our leaves how to grow strong and compact.",
                        "hs": "Optimal PPFD uniformity + balanced PSS unlocks maximum edible biomass per cubic meter inside the ASTRO-USA habitat rack!"
                    }
                ],
                "data_hud": {
                    "headline": "Lambertian PPFD & Spectral Uniformity",
                    "equation": "E(x,y) = Σ I_0 cos^m(θ_i) / d_i²  [μmol m⁻² s⁻¹]",
                    "metric": ">90% Canopy Light Uniformity · Red/Blue/Far-Red",
                    "dataset": "LED-pattern-synth & ASTRO-USA-Habitat-Model",
                    "explanation": "Ring-weighted diode layouts equalize photon delivery from center to edges while spectral tuning shapes plant architecture and stomatal opening.",
                    "linked_comic_id": "LED-pattern-synth"
                }
            },
            {
                "page_number": 6,
                "act": "Act III — Earthrise Over a Living Moon",
                "beat_title": "One Small Sprout for Mankind",
                "scene_key": "vol02_p06_lunar_earthrise_finale",
                "sfx": {"text": "SHINE ON...", "x": 74, "y": 14, "rotate": -3, "variant": "marvel-triumph"},
                "director": {
                    "shot": "Iconic Bronze-Age Marvel heroic finale splash: Commander Astra stands beside the radiant LEAF chamber on the lunar ridge as Sprout unfurls beneath a towering sapphire Earth.",
                    "lighting": "Golden lunar horizon glow meeting vivid emerald illumination inside the glass chamber and silver-blue Earthlight across Astra's visor.",
                    "pacing": "Grand emotional silence and triumph—a historic milestone for humanity and biology.",
                    "data_story_note": "Synthesizes all four pillars of lunar plant physics: 0.166g convection, slow statolith sensing, thin-air diffusion, and precision photon grids."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "LOOK UP AT THAT BLUE MARBLE IN THE SKY! For the first time in 4 billion years, an Earth leaf unfurls on the surface of another world!",
                    "ms": "A LIVING FOOTHOLD. Gentle 0.166g convection, sinking statoliths, smart low-pressure air, and tuned LEDs prove that Earth life can take root on the Moon.",
                    "hs": "ARTEMIS SCIENCE MILESTONE COMPLETE. Validated 0.166g CFD, fractional-g gravitropism, hypobaric diffusion, and spectral engineering pave the way for permanent lunar BLSS."
                },
                "bubbles": [
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-left",
                        "k5": "One small sprout for a seedling, Doc B... one giant leap for gardens among the stars!",
                        "ms": "Every math model we tested back on Earth just came alive in lunar dust. We're not just visiting anymore—we're learning how to stay.",
                        "hs": "LEAF GBC2 growth nominal! Now back to Mission Control's data vault—because decoding the genes inside these spacefarers is our next great mystery!"
                    },
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-right",
                        "k5": "Hi, Earth! Don't worry—we brought a little piece of green up here with us!",
                        "ms": "My roots know down, my leaves feel the lunar plume, and my solar factory is singing under the stars!",
                        "hs": "From Apollo footprints to Artemis roots—the phytonaut era on the Moon has officially begun."
                    }
                ],
                "data_hud": {
                    "headline": "Lunar Biophysics Blueprint Achieved",
                    "equation": "0.166g Convection + Statolith Polarity + 56 kPa Diffusion",
                    "metric": "Artemis LEAF · Earth-to-Moon Digital Twin Verified",
                    "dataset": "LEAF_GBC2_pot_model · CoSE AstroBotany",
                    "explanation": "Integrating fluid dynamics, gravity sensing, atmosphere modeling, and LED optics turns hostile lunar vacuum into a predictable biological sanctuary.",
                    "linked_comic_id": "LEAF_GBC2_pot_model"
                }
            }
        ]
    },

    # =========================================================================
    # VOLUME 03 — SEINEN CYBERPUNK / TECHNICAL DATA-MANGA
    # =========================================================================
    {
        "volume": 3,
        "id": "vol-03-ghost-in-the-genome",
        "slug": "vol-03-ghost-in-the-genome",
        "title": "GHOST IN THE GENOME",
        "subtitle": "The 1,337-Sample Mystery",
        "tagline": "16 sunrises a day, locked DNA origami vaults, and an AI dive to unmix decades of space biology.",
        "art_style_family": "manga",
        "art_style_label": "Seinen Cyberpunk Data-Manga",
        "art_style_notes": "Inspired by Ghost in the Shell & Planetes: razor-sharp Japanese inkwork, authentic manga screentones, neon violet/cyan UMAP constellations, and holographic molecular HUDs.",
        "worlds": ["Earth", "ISS"],
        "perspectives": ["Mission Control", "Phytonaut"],
        "cast": ["doc-b", "pixel", "sprout"],
        "theme_color": "#7c3aed",
        "accent_color": "#2dd4bf",
        "ngss": "HS-LS1-1 · HS-LS1-2 · HS-LS3-1 · MS-LS1-8",
        "big_finds": [
            "An AI Auto-Decoder anchored on the Salk single-nucleus atlas digitally 'unmixed' 1,337 bulk NASA OSDR/GEO RNA smoothies into cell-by-cell root and leaf trajectories.",
            "Genes consistently silenced in spaceflight cluster inside Polycomb H3K27me3 chromatin origami vaults (ChromDecode-At), proving epigenetic folding drives space adaptation.",
            "With 16 sunrises every day on the ISS, ChronoGauge deep learning revealed circadian phase jet-lag between roots and shoots—exposing hidden harvest-time artifacts.",
            "Across 199 spaceflight transcriptomes, Alternative Splicing remixes RNA exons alongside DREM transcription-factor track splits and rapid 21-letter microRNA dimmer switches."
        ],
        "take_home": "Every single cell has a voice, and DNA is a living origami library! With open archives and smart AI, we can rescue decades of space experiments and hear every molecular whisper.",
        "mission_activity": "Open Tropism_autodecoder_2026 and ChromDecode-At to split a real NASA OSDR bulk RNA dataset into single cell types and inspect which of the 9 chromatin states hold spaceflight stress genes.",
        "source_comic_ids": [
            "Tropism_autodecoder_2026",
            "ChromDecode-At",
            "Circadian_decoder",
            "OSDR_Plant_Alternative_Splicing",
            "arabidopsis-drem-osdr",
            "smallRNAseq-DREAM",
            "toast2",
            "genai-spacebio-roadmap"
        ],
        "pages": [
            {
                "page_number": 1,
                "act": "Act I — The Bulk RNA Smoothie",
                "beat_title": "1,337 Space Missions Trapped in Static",
                "scene_key": "vol03_p01_server_vault_smoothie",
                "sfx": {"text": "ZZZT—DATA SURGE", "x": 72, "y": 14, "rotate": -5, "variant": "manga-cyber"},
                "director": {
                    "shot": "Moody Seinen cyberpunk wide shot inside the nocturnal Mission Control Data Vault framed by monolithic glowing server towers.",
                    "lighting": "Obsidian ink shadows sliced by neon-violet and cyan server reflections on Doc B's glasses; a chaotic swirling RNA ribbon vortex hovers center-frame.",
                    "pacing": "Atmospheric noir mystery—framing decades of archived NASA data as an unsolved cipher.",
                    "data_story_note": "Explains the classic 'bulk RNA-seq smoothie' problem: grinding whole plants mixes root caps, veins, and guard cells into one tangled signal."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "MIDNIGHT IN THE MISSION CONTROL DATA VAULT! Decades of NASA space-plant experiments sit in glowing servers—all blended together like one giant gene smoothie!",
                    "ms": "MISSION CONTROL ARCHIVE · 1,337 SAMPLES. Early space missions ground whole seedlings into bulk RNA—hiding which specific cells were shouting in zero-G.",
                    "hs": "NASA OSDR & GEO BULK TRANSCRIPTOME ARCHIVE (n = 1,337). Tissue averaging masks cell-type-specific tropism and stress trajectories across columella, cortex, and phloem."
                },
                "bubbles": [
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-left",
                        "k5": "Thirty years of brave space seedlings are talking inside these files, Pixel—if only we could separate the roots' voices from the leaves'!",
                        "ms": "Blending a gravity-sensing root cap with a water-pipe vein hides the whole story. We need a way to digitally unmix the smoothie!",
                        "hs": "TOAST 2.0 queries run in milliseconds, yet bulk averages still conflate cell-type proportion shifts with intrinsic transcriptional regulation."
                    },
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel",
                        "anchor": "bottom-right",
                        "k5": "Initiating neural decoder dive! Anchor reference loaded: the single-cell plant atlas! Watch me untangle every single voice!",
                        "ms": "Loading the Salk single-nucleus Arabidopsis atlas into the Tropism Auto-Decoder... preparing to resolve 1,337 missions cell by cell!",
                        "hs": "Initializing deconvolution auto-decoder conditioned on single-nucleus cell-type embeddings. Diving into latent space now."
                    }
                ],
                "data_hud": {
                    "headline": "Rescuing Decades of NASA OSDR Bulk Data",
                    "equation": "X_bulk ≈ W_cell_types · H_snRNA_atlas + ε",
                    "metric": "1,337 Spaceflight & Tropism RNA-seq Samples",
                    "dataset": "Tropism_autodecoder_2026 & TOAST 2.0",
                    "explanation": "Bulk RNA-seq mixes dozens of specialized cell types together; neural deconvolution recovers hidden cell-level signals from priceless legacy spaceflights.",
                    "linked_comic_id": "toast2"
                }
            },
            {
                "page_number": 2,
                "act": "Act I — Unmixing the Constellation",
                "beat_title": "Hearing Every Individual Cell Type Speak",
                "scene_key": "vol03_p02_umap_constellation",
                "sfx": {"text": "DE-CONVOLVE!!", "x": 70, "y": 16, "rotate": 4, "variant": "manga-cyber"},
                "director": {
                    "shot": "Dazzling Seinen data-manga centerpiece: Pixel's twin cyan lasers slice through the tangled vortex, shattering it into luminous floating UMAP cell-type islands.",
                    "lighting": "Electric turquoise beams illuminating emerald epidermis islands, violet columella nodes, and amber vascular bridges suspended in ink-black cyberspace.",
                    "pacing": "Sharp visual clarity bursting out of chaos—data visualization rendered as high art.",
                    "data_story_note": "Shows how single-nucleus deconvolution reveals distinct roles for columella, endodermis, cortex, and phloem cells in microgravity."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "WHOA! Pixel's AI beam separates the tangled RNA smoothie into glowing constellations—one bright island for every kind of plant cell!",
                    "ms": "SINGLE-CELL RESOLUTION UNLOCKED. Instantly, gravity-sensing columella cells split apart from skin cells, water pipes, and breathing leaf pores!",
                    "hs": "LATENT CELL-TYPE DECONVOLUTION. Projecting 1,337 bulk transcriptomes onto the Salk snRNA-seq manifold recovers organ- and lineage-resolved flight responses."
                },
                "bubbles": [
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel",
                        "anchor": "bottom-left",
                        "k5": "Look at those glowing clusters! The gravity-sensing root tip cells are singing a totally different song than the leaf veins!",
                        "ms": "And look at the DREM timeline—transcription factors act like subway switch-operators, splitting root epidermal and vascular gene tracks on Day 4!",
                        "hs": "Cell-type-weighted DREM (IOHMM) pinpoints exact developmental bifurcation nodes and master TFs steering microgravity plasticity."
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-right",
                        "k5": "We just rescued thirty years of space experiments without launching a single new rocket! Wait—why are whole neighborhoods of genes locked shut?",
                        "ms": "Incredible! Every cell has its own mission log—yet dozens of gene families went completely silent across flights. Let's dive deeper into the nucleus!",
                        "hs": "Conserved repression across unrelated loci implies higher-order chromatin architecture. Launching ChromDecode-At epigenetic scan!"
                    }
                ],
                "data_hud": {
                    "headline": "Single-Cell Auto-Decoder & DREM Subway Maps",
                    "equation": "P(g_t | TF, prior_cell) via Cell-Weighted IOHMM",
                    "metric": "Salk Single-Nucleus Atlas · 1,337 Deconvolved Samples",
                    "dataset": "Tropism_autodecoder_2026 & arabidopsis-drem-osdr",
                    "explanation": "Deconvolution plus dynamic regulatory mining shows both WHICH cells respond to spaceflight and WHEN master transcription factors split gene pathways.",
                    "linked_comic_id": "Tropism_autodecoder_2026"
                }
            },
            {
                "page_number": 3,
                "act": "Act II — The Origami Vault",
                "beat_title": "Polycomb H3K27me3: How Plants Fold DNA Shut in Orbit",
                "scene_key": "vol03_p03_chromatin_origami_vault",
                "sfx": {"text": "FOLD—LOCK!", "x": 73, "y": 15, "rotate": -6, "variant": "manga-cyber"},
                "director": {
                    "shot": "Vertiginous cyber-manga dive inside a cathedral-like cell nucleus where giant glowing DNA strands fold tightly around crystalline violet Polycomb histone vaults.",
                    "lighting": "Deep indigo screentone abyss pierced by shimmering magenta-violet epigenetic lock rings and neon-emerald active chromatin corridors.",
                    "pacing": "Architectural awe—turning epigenetics into a tangible cyberpunk vault heist.",
                    "data_story_note": "Visualizes Sequeira-Mendes 9 chromatin states and the major ChromDecode-At discovery: spaceflight-repressed genes live disproportionately inside Polycomb H3K27me3 vaults."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "INSIDE SPROUT'S TINY CELL NUCLEUS! Two whole meters of DNA fold up like glowing origami—and in space, certain pages get snapped shut!",
                    "ms": "THE 9 CHROMATIN NEIGHBORHOODS. ChromDecode-At maps every spaceflight gene onto how tightly its DNA is folded—and spots a massive pattern!",
                    "hs": "EPIGENETIC ARCHITECTURAL REMODELING. Spaceflight-downregulated loci show striking enrichment in Sequeira-Mendes State 5 facultative heterochromatin (PRC2 H3K27me3)."
                },
                "bubbles": [
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout (Hologram)",
                        "anchor": "bottom-left",
                        "k5": "I don't change my DNA letters in space—I just fold up the chapters I don't need with glowing purple bookmarks so I can save energy!",
                        "ms": "Genes turned OFF in orbit live inside 'Polycomb H3K27me3' chromatin vaults! My cells use chemical locks to remodel growth on the fly!",
                        "hs": "Facultative heterochromatin locking lets me silence developmental programs reversibly without a single DNA mutation—pure epigenetic plasticity!"
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-right",
                        "k5": "DNA isn't a stiff stone tablet—it's a living origami book that folds and unfolds to survive the stars!",
                        "ms": "Eureka! Polycomb histone tags explain how dozens of unrelated genes shut down in lockstep across spaceflight missions!",
                        "hs": "Enrichment in H3K27me3 vaults plus SOG1 ChIP-seq links chromatin packaging directly to orbital stress adaptation."
                    }
                ],
                "data_hud": {
                    "headline": "9 Chromatin States & Polycomb H3K27me3 Vaults",
                    "equation": "Enrichment(State 5 · H3K27me3)  p < 10⁻¹⁰ in OSDR DEGs",
                    "metric": "9 Arabidopsis Chromatin States Mapped · PRC2 Locks",
                    "dataset": "ChromDecode-At · NASA OSDR + SOG1 ChIP-seq",
                    "explanation": "Plants dynamically pack spaceflight-repressed genes into Polycomb H3K27me3 chromatin vaults to conserve energy and reprogram development in orbit.",
                    "linked_comic_id": "ChromDecode-At"
                }
            },
            {
                "page_number": 4,
                "act": "Act II — 16 Sunrises a Day",
                "beat_title": "Circadian Jet-Lag Between Roots and Shoots",
                "scene_key": "vol03_p04_circadian_16_sunrises",
                "sfx": {"text": "TICK... DESYNC!", "x": 72, "y": 14, "rotate": 5, "variant": "manga-cyber"},
                "director": {
                    "shot": "Poetic technical manga spread: the ISS arcs through 16 glowing overlapping dawn rings around Earth while Sprout's silhouette contains two out-of-phase luminous clockwork gears.",
                    "lighting": "Amber-gold shoot clock gear clashing against cool cyan root clock gear over finely hatched black-and-indigo orbital horizons.",
                    "pacing": "Reflective, hypnotic rhythm—conveying biological time dilation in orbit.",
                    "data_story_note": "Highlights the Circadian_decoder / ChronoGauge breakthrough: spaceflight scrambles root-shoot internal clock phase, explaining false-positive 'microgravity' genes."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "THE SPACE STATION SEES 16 SUNRISES EVERY DAY! Even inside a steady grow box, Sprout's inner biological clock starts getting space jet-lag!",
                    "ms": "CHRONOGAUGE DEEP LEARNING. Reading internal clock genes (CCA1, LHY, TOC1) reveals the TRUE biological hour of hundreds of NASA flight samples!",
                    "hs": "CIRCADIAN PHASE DESYNCHRONIZATION. Neural clock inference across OSDR reveals damped amplitude and phase divergence between orbital roots and shoots."
                },
                "bubbles": [
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel",
                        "anchor": "bottom-left",
                        "k5": "Wait a minute! Sprout's leaves think it's lunchtime, while Sprout's roots think it's midnight—no wonder their genes looked different from Earth!",
                        "ms": "Huge discovery! Many genes scientists blamed on 'zero gravity' were actually just harvested at mismatched internal biological clock times!",
                        "hs": "ChronoGauge uncovers hidden circadian confounding across legacy flight vs. ground controls—phase alignment is mandatory for fair omics comparisons!"
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-right",
                        "k5": "Timing is everything in biology! Just like astronauts need good sleep schedules, space plants need synced rhythms too!",
                        "ms": "Correcting for circadian phase wipes out false alarms and leaves behind the crystal-clear, true microgravity biology!",
                        "hs": "Integrating biological time-of-day into spaceflight experimental design protects both transcriptomic accuracy and future lunar crop yield."
                    }
                ],
                "data_hud": {
                    "headline": "ChronoGauge Circadian Phase Inference",
                    "equation": "φ_bio = f_NN(CCA1, LHY, TOC1, PRR7, GI)",
                    "metric": "Root-vs-Shoot Clock Desync Across OSDR Flights",
                    "dataset": "Circadian_decoder · ChronoGauge Deep Learning",
                    "explanation": "Deep-learning clock decoders infer each sample's internal biological hour, separating true microgravity adaptation from orbital circadian jet-lag.",
                    "linked_comic_id": "Circadian_decoder"
                }
            },
            {
                "page_number": 5,
                "act": "Act III — The RNA Remix Studio",
                "beat_title": "Alternative Splicing & 21-Letter MicroRNA Ninjas",
                "scene_key": "vol03_p05_rna_splicing_mirna",
                "sfx": {"text": "SNIP-SPLICE!!", "x": 74, "y": 15, "rotate": -8, "variant": "manga-kinetic"},
                "director": {
                    "shot": "Kinetic cyberpunk cutaway of an RNA remix deck: glowing holographic scissors snip magenta and cyan exon ribbons while tiny 21-bead microRNA drones dart along neon tracks.",
                    "lighting": "Sharp electric-pink splice flashes cutting across cyan molecular ribbons against crisp manga halftone shadows.",
                    "pacing": "Fast, razor-sharp tempo—celebrating hidden post-transcriptional ingenuity.",
                    "data_story_note": "Synthesizes OSDR_Plant_Alternative_Splicing (199 transcriptomes across Arabidopsis & Brassica) and smallRNAseq-DREAM (21-nt miRNA rapid switches)."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "ONE LEGO BOOKLET, MANY INVENTIONS! Even when a gene stays at the exact same volume, space cells cut and remix its RNA instructions!",
                    "ms": "199 SPACEFLIGHT TRANSCRIPTOMES DECODED. Alternative Splicing swaps exons in clock and stress genes while tiny 21-letter microRNAs act as lightning-fast dimmer switches!",
                    "hs": "POST-TRANSCRIPTIONAL PLASTICITY. Coordinated intron retention, exon skipping (SR splicing factors), and conserved 21-nt miRNA cleavage networks rapidly tune orbital stress."
                },
                "bubbles": [
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-left",
                        "k5": "Watch this remix! Snip one piece out, glue two pieces together—boom, a brand-new space tool from the exact same gene!",
                        "ms": "And my 21-letter microRNA ninjas patrol the cell cytoplasm, dialing copper, hormone, and redox pathways up or down within minutes!",
                        "hs": "Even genes with zero total fold-change undergo dramatic isoform switching across both Arabidopsis and Brassica rapa in orbit!"
                    },
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel",
                        "anchor": "bottom-right",
                        "k5": "Standard gene counters completely missed those tiny 21-letter switches—not anymore!",
                        "ms": "smallRNAseq-DREAM and splice-junction mapping just revealed an entire hidden layer of spaceflight intelligence!",
                        "hs": "Combining bulk deconvolution, chromatin states, circadian phase, splicing isoforms, and miRNAs completes the multi-scale GenAI SpaceBio stack."
                    }
                ],
                "data_hud": {
                    "headline": "Alternative Splicing & MicroRNA Dimmer Switches",
                    "equation": "ΔPSI = PSI_flight − PSI_ground  (199 Libraries)",
                    "metric": "Arabidopsis & Brassica Splicing + 21-nt miRNAs",
                    "dataset": "OSDR_Plant_Alternative_Splicing & smallRNAseq-DREAM",
                    "explanation": "Spaceflight remixes RNA exons and deploys conserved 21-nucleotide microRNAs to adjust cell physiology faster than building new genes from scratch.",
                    "linked_comic_id": "OSDR_Plant_Alternative_Splicing"
                }
            },
            {
                "page_number": 6,
                "act": "Act III — Symphony of Open Science",
                "beat_title": "The Ghost in the Genome Speaks Clearly",
                "scene_key": "vol03_p06_open_science_dawn",
                "sfx": {"text": "SYNCHRONIZED.", "x": 74, "y": 15, "rotate": -2, "variant": "manga-cyber"},
                "director": {
                    "shot": "Serene, breathtaking seinen-manga dawn finale: golden morning sunlight cuts across Mission Control as Sprout's layered transparent hologram shines in complete harmony.",
                    "lighting": "Warm dawn amber breaking across cool violet-cyan holographic rings—transitioning from noir mystery to luminous open-science clarity.",
                    "pacing": "Calm, profound resolution—honoring open FAIR data and collaborative AI.",
                    "data_story_note": "Links the entire multi-omics stack to genai-spacebio-roadmap: bridging correlation to causation for deep-space biology."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "DAWN AT MISSION CONTROL! The blurry gene smoothie is now a crystal-clear map—every cell, every folded DNA page, every ticking clock in perfect focus!",
                    "ms": "FROM CORRELATION TO CAUSATION. By uniting single-cell AI, chromatin vaults, circadian clocks, and RNA splicing, decades of NASA data finally speak in harmony.",
                    "hs": "THE GENAI SPACEBIO ROADMAP. Physics-informed CFD plus foundation-model multi-omics turns NASA OSDR into a predictive engine for deep-space agriculture."
                },
                "bubbles": [
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-left",
                        "k5": "Every single cell has a story—and because NASA shares this data openly, students and scientists everywhere can read it together!",
                        "ms": "We started the night looking at static. Now we can watch chromatin fold, clocks tick, and RNA splice across 1,337 missions in real time.",
                        "hs": "Open FAIR archives + transparent foundation models turn every past spaceflight into a living laboratory for the Artemis generation."
                    },
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel",
                        "anchor": "bottom-right",
                        "k5": "Next alert incoming, Doc B! Once we leave Earth's giant magnetic shield, cosmic rays and quantum physics enter the chat!",
                        "ms": "Incoming deep-space telemetry! Beyond low Earth orbit, magnetic fields drop near zero—booting up our Cosmic Radiation & Quantum Spin suite!",
                        "hs": "Next frontier: leaving the geomagnetic magnetosphere—where radical-pair quantum spin and galactic cosmic rays test life's deepest armor."
                    }
                ],
                "data_hud": {
                    "headline": "GenAI SpaceBio Roadmap",
                    "equation": "Physics (CFD) + Multi-Omics + Foundation Models → Causation",
                    "metric": "FAIR Open-Source Decoders Across NASA OSDR",
                    "dataset": "genai-spacebio-roadmap · CoSE Cloud",
                    "explanation": "Uniting physical environment models with single-cell, epigenetic, circadian, and splicing AI decoders transforms archived space data into actionable mission design.",
                    "linked_comic_id": "genai-spacebio-roadmap"
                }
            }
        ]
    },

    # =========================================================================
    # VOLUME 04 — SILVER-AGE MARVEL COSMIC / JACK KIRBY ENERGY
    # =========================================================================
    {
        "volume": 4,
        "id": "vol-04-kirbys-quantum-shield",
        "slug": "vol-04-kirbys-quantum-shield",
        "title": "KIRBY'S QUANTUM SHIELD",
        "subtitle": "Beyond Earth's Magnetic Cocoon",
        "tagline": "Outside our planet's invisible armor, entangled electrons and purple pigments fight cosmic fire.",
        "art_style_family": "marvel",
        "art_style_label": "Silver-Age Marvel Cosmic (Jack Kirby)",
        "art_style_notes": "Authentic Silver-Age Marvel cosmic grandeur: iconic Kirby Krackle black energy dots rimmed in blazing gold and crimson, monumental planetary magnetospheres, and bold vintage halftone inkwork.",
        "worlds": ["Earth", "Moon"],
        "perspectives": ["Phytonaut", "Astronaut"],
        "cast": ["astra", "sprout", "doc-b"],
        "theme_color": "#d97706",
        "accent_color": "#ef4444",
        "ngss": "MS-PS2-5 · MS-LS3-1 · HS-PS4-3 · HS-LS3-2",
        "big_finds": [
            "Earth's 4D magnetosphere deflects solar storms like a cosmic windsock—stepping outside it exposes Moon and Mars crops to Near-Null Magnetic Fields (NMF) and Galactic Cosmic Rays (GCR).",
            "Inside plant blue-light cryptochrome proteins, two entangled electrons form a quantum 'radical pair' whose spin state tilts with weak magnetic fields—altering root iron uptake, flowering, and ROS.",
            "Lunar crustal magnetic anomalies (like Reiner Gamma swirls) and ancient Martian southern highlands create natural mini-magnetospheres that shelter habitats and supply biological magnetic cues.",
            "Against cosmic radiation, plants unleash a two-stage kinetic defense: immediate SOG1-guided DNA repair followed by purple anthocyanin pigment armor—tested on Earth inside CoSE's MagBio-3D Helmholtz coils."
        ],
        "take_home": "From quantum electron spins inside a single leaf to planet-sized magnetic shields, life is tuned to the invisible forces of the cosmos—and nature already built the armor we need!",
        "mission_activity": "Explore earth-magnetosphere-4d-viz and quantum-biology-atlas, then compare how purple anthocyanin-rich Brassica rapa resists GCR radiation better than pigment-free mutants.",
        "source_comic_ids": [
            "quantum-biology-atlas",
            "Plant_response_to_radiation",
            "lunar-magnetic-biology",
            "mars-magnetic-biology",
            "lunar-mars-magnetic-biology",
            "NMF_review",
            "cose-magbio-3d-report",
            "earth-magnetosphere-4d-viz",
            "B_rappa_LLGCSS",
            "lunar-leaf-radiation-decoder"
        ],
        "pages": [
            {
                "page_number": 1,
                "act": "Act I — The Invisible Planetary Armor",
                "beat_title": "Earth's 4D Magnetosphere Under Solar Siege",
                "scene_key": "vol04_p01_magnetosphere_storm",
                "sfx": {"text": "KRAAK-OOM!!", "x": 72, "y": 14, "rotate": -6, "variant": "marvel-kirby"},
                "director": {
                    "shot": "Monumental Jack Kirby double-page cosmic splash! Earth sits sheltered inside blazing sapphire dipole shields while crimson-gold solar wind crashes across the bow shock.",
                    "lighting": "Primary Silver-Age cosmic colors—electric cyan dipole arcs, scorching crimson-amber solar flares, and iconic black Kirby Krackle energy spheres.",
                    "pacing": "Operatic cosmic scale—making the invisible geomagnetic field feel mythic and visceral.",
                    "data_story_note": "Grounds the reader in Earth's ~50 μT geomagnetic cocoon (earth-magnetosphere-4d-viz) before we leave it behind for the Moon."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "BEHOLD EARTH'S MIGHTY INVISIBLE FORCE FIELD! Every second, our planet's giant magnetic shield blocks fiery storms roaring off the Sun!",
                    "ms": "4D GEOSPACE EXPLORER. Under a solar storm, Earth's dayside magnetic shield compresses tight while its nightside magnetotail streams behind like a cosmic windsock!",
                    "hs": "TERRESTRIAL MAGNETOSPHERE (~30–60 μT). Dipole field lines stand off supersonic solar-wind plasma at the magnetopause—shielding 4 billion years of Earth evolution."
                },
                "bubbles": [
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-left",
                        "k5": "Down on Earth—and even on the ISS—we live safely tucked inside this magnetic blanket. What happens when we fly PAST it to the Moon?",
                        "ms": "Every organism on Earth evolved inside a 50-microtesla magnetic cocoon. Out past the magnetopause, both the shield and the compass vanish!",
                        "hs": "Transit beyond the Van Allen belts introduces twin deep-space stressors: high-LET Galactic Cosmic Rays and near-null magnetic fields (<100 nT)."
                    },
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-right",
                        "k5": "Hold onto your roots, everyone! We're crossing the glowing edge of Earth's magnetic bubble into deep space!",
                        "ms": "Wait—plants don't even have brains or iron compass needles... so why can my cells STILL feel Earth's magnetic field fading away?!",
                        "hs": "Even without magnetite crystals, plants sense weak geomagnetic fields—and the answer hides deep inside quantum mechanics!"
                    }
                ],
                "data_hud": {
                    "headline": "Earth's 4D Magnetosphere Shield",
                    "equation": "B_Earth ≈ 25–65 μT  vs.  B_Lunar_NMF < 0.05 μT",
                    "metric": "Dayside Compression & Nightside Magnetotail",
                    "dataset": "earth-magnetosphere-4d-viz · 4D Geospace",
                    "explanation": "Earth's magnetic field deflects charged solar particles; traveling to the Moon drops magnetic intensity by more than 1,000-fold.",
                    "linked_comic_id": "earth-magnetosphere-4d-viz"
                }
            },
            {
                "page_number": 2,
                "act": "Act I — Entering the Near-Null Void",
                "beat_title": "120 Hours Without Earth's Magnetic Hum",
                "scene_key": "vol04_p02_nmf_crossing",
                "sfx": {"text": "VOOOID-SHIFT...", "x": 70, "y": 15, "rotate": 4, "variant": "marvel-kirby"},
                "director": {
                    "shot": "Dramatic Silver-Age transit splash: the white-and-crimson Artemis cruiser slices through the crackling bow shock into stark starry stillness while Astra inspects glowing root tips.",
                    "lighting": "Blazing golden shockwave trailing off the stern contrasting eerie dark-indigo calm inside the near-null zone; subtle amber iron-stress flickers in Sprout's roots.",
                    "pacing": "Suspenseful transition from cosmic roar to unsettling magnetic silence.",
                    "data_story_note": "Captures NMF_review & lunar-mars-magnetic-biology: near-null fields delay early root elongation and perturb iron uptake and ROS during the critical 120-hour germination window."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "SILENCE BEYOND THE SHIELD! Outside Earth's magnetic hug, the magnetic needle drops almost to ZERO—and Sprout's young roots notice right away!",
                    "ms": "NEAR-NULL MAGNETIC FIELDS (NMF). During the critical first 120 hours of germination, stepping out of Earth's field slows early root growth and shifts iron balance!",
                    "hs": "HYPOMAGNETIC PHYSIOLOGY (<500 nT). Meta-analysis reveals NMF alters early root elongation, flowering timing, cryptochrome signaling, iron homeostasis, and ROS balance."
                },
                "bubbles": [
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-left",
                        "k5": "Whoa! Our magnetometer just fell off a cliff—and Sprout's baby roots are slowing down and glowing with stress sparks!",
                        "ms": "Wait a second—gravity and light inside the chamber are unchanged, yet vanishing magnetism alone shifted root iron uptake and flowering genes!",
                        "hs": "Confirming the 120-hour NMF germination window: without geomagnetic cues, root iron transport and redox homeostasis drift noticeably."
                    },
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-right",
                        "k5": "It feels weirdly quiet in my cells... like a background lullaby we've heard for billions of years suddenly turned off!",
                        "ms": "How can a field weaker than a refrigerator magnet steer my genes?! Zoom inside my blue-light proteins to see the quantum magic!",
                        "hs": "Classical thermal energy k_B T dwarfs weak geomagnetic interactions—only coherent quantum spin dynamics can explain this sensitivity!"
                    }
                ],
                "data_hud": {
                    "headline": "Near-Null Magnetic Fields (120-Hour Window)",
                    "equation": "B_NMF ≪ B_Earth  ⇒  ΔRoot_growth, ΔFe-uptake, ΔROS",
                    "metric": "Critical 120-Hour Lunar Germination Sensitivity",
                    "dataset": "NMF_review & lunar-mars-magnetic-biology",
                    "explanation": "Near-null magnetic fields on the Moon and in deep space perturb early root vigor, iron uptake, and reactive oxygen species signaling.",
                    "linked_comic_id": "NMF_review"
                }
            },
            {
                "page_number": 3,
                "act": "Act II — The Quantum Compass Inside a Leaf",
                "beat_title": "Entangled Electrons & The Radical-Pair Dance",
                "scene_key": "vol04_p03_quantum_radical_pair",
                "sfx": {"text": "SPIN-FLIP!!", "x": 74, "y": 14, "rotate": -8, "variant": "marvel-kirby"},
                "director": {
                    "shot": "Mind-bending Jack Kirby cosmic-quantum splash! A piercing beam of sapphire blue light hits a crystalline cryptochrome protein, igniting two entangled golden-cyan electrons dancing in swirling Kirby Krackle spin rings.",
                    "lighting": "Pure psychedelic Kirby energy—blazing royal blue, molten gold, electric violet, and razor-sharp ink bursts radiating from atomic scale.",
                    "pacing": "Peak cosmic wonder—making quantum biology thrilling and unforgettable.",
                    "data_story_note": "Visualizes the Flavin-Tryptophan (FAD–Trp) radical-pair mechanism in cryptochromes (quantum-biology-atlas) coupling weak magnetic fields to singlet/triplet redox yields."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "QUANTUM SUPERPOWERS INSIDE EVERY LEAF! When blue light hits a special plant protein, TWO linked electrons begin a dizzying quantum spin dance!",
                    "ms": "THE RADICAL-PAIR MECHANISM. Inside cryptochrome proteins, entangled electron pairs flip between two spin states—and even a whisper of magnetism tilts the odds!",
                    "hs": "FLAVIN–TRYPTOPHAN RADICAL-PAIR SPIN DYNAMICS. Weak Zeeman splitting modulates singlet–triplet interconversion in photoexcited cryptochrome, altering downstream ROS yields."
                },
                "bubbles": [
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-left",
                        "k5": "Amazing! The exact same quantum compass that helps migratory birds find south is humming right inside my green leaves!",
                        "ms": "When blue photons kick an electron from tryptophan to flavin, their twin spins dance together—and Earth's magnetic field steers which chemical signal comes out!",
                        "hs": "Singlet vs. triplet spin yield directly tunes superoxide/H₂O₂ signaling and cryptochrome phosphorylation—linking quantum physics to plant growth!"
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B (Comms)",
                        "anchor": "bottom-right",
                        "k5": "That means if a Moon greenhouse misses Earth's magnetic hum, we might add tiny gentle magnetic coils right next to the grow lights!",
                        "ms": "Or even better, Astra—scan the lunar crust below you! The Moon actually hides natural magnetic oasis patches!",
                        "hs": "Check our lunar & Martian crustal magnetobiology maps—local remanent fields can cross biological magnetoreception thresholds!"
                    }
                ],
                "data_hud": {
                    "headline": "Cryptochrome Radical-Pair Quantum Spin",
                    "equation": "H = g μ_B B · (S₁ + S₂) + Σ A_k I_k · S_k",
                    "metric": "Singlet ↔ Triplet Spin Yield Tuned by Weak B-Fields",
                    "dataset": "quantum-biology-atlas · Cryptochrome FAD-Trp",
                    "explanation": "Blue-light excitation creates spin-correlated radical pairs in plant cryptochromes, turning microtesla magnetic fields into chemical redox signals.",
                    "linked_comic_id": "quantum-biology-atlas"
                }
            },
            {
                "page_number": 4,
                "act": "Act II — Swirls of the Moon, Shields of Mars",
                "beat_title": "Natural Mini-Magnetospheres Across the Solar System",
                "scene_key": "vol04_p04_reiner_gamma_swirls",
                "sfx": {"text": "DEFLECT!!", "x": 74, "y": 15, "rotate": -5, "variant": "marvel-kirby"},
                "director": {
                    "shot": "Sweeping planetary Silver-Age vista hovering over the luminous pale swirl of Reiner Gamma on the Moon, where golden magnetic dome arcs rise out of the cratered crust.",
                    "lighting": "Stark silver lunar regolith illuminated by glowing golden crustal magnetic domes deflecting crimson streaking solar-wind darts.",
                    "pacing": "Discovery and strategic hope—turning planetary geology into biological ally.",
                    "data_story_note": "Synthesizes lunar-magnetic-biology and mars-magnetic-biology: crustal anomalies act as mini-magnetospheres deflecting solar wind and supplying biological cues."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "WAIT—THE MOON HAS SECRET MAGNETIC UMBRELLAS! Giant bright swirls on the lunar surface hide ancient magnetized rocks pushing solar wind aside!",
                    "ms": "LUNAR CRUSTAL ANOMALIES & MARTIAN HIGHLANDS. Both Reiner Gamma on the Moon and Mars's ancient southern crust generate natural mini-magnetospheres!",
                    "hs": "PLANETARY CRUSTAL MAGNETOBIOLOGY. Local remanent fields (~100–1,000+ nT) stand off solar protons and reach thresholds relevant to radical-pair magnetoreception."
                },
                "bubbles": [
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-left",
                        "k5": "Look at those glowing pale swirls painted right across the Moon dust! Invisible magnetic arches are shielding the soil underneath from sunburn!",
                        "ms": "So landing sites near lunar magnetic swirls—or Mars's magnetized southern highlands—give future space farms a built-in cosmic head start!",
                        "hs": "Cross-referencing CLPDS planetary radar, Chang'e-4 LND radiation telemetry, and crustal B-field maps guides safer deep-space greenhouse siting!"
                    },
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-right",
                        "k5": "Awesome! Wait—what about the super-fast Galactic Cosmic Rays zooming in from exploding stars that blast right past mini shields?!",
                        "ms": "Mini-shields help against solar wind, yet high-energy cosmic rays still punch through! Time to activate our cellular DNA armor!",
                        "hs": "High-LET heavy ions (HZE particles) penetrate thin shielding—forcing living cells to rely on evolved molecular defense kinetics!"
                    }
                ],
                "data_hud": {
                    "headline": "Lunar & Martian Crustal Mini-Magnetospheres",
                    "equation": "B_crust(Reiner Gamma / Mars South) ≈ 0.3–1.5 μT",
                    "metric": "Deflects Solar Wind & Supplies Magnetoreception Cues",
                    "dataset": "lunar-magnetic-biology & mars-magnetic-biology",
                    "explanation": "Magnetized patches of lunar and Martian crust create natural sheltered zones that reduce surface solar-wind weathering and alter local magnetic biology.",
                    "linked_comic_id": "lunar-magnetic-biology"
                }
            },
            {
                "page_number": 5,
                "act": "Act III — SOG1 & The Purple Armor",
                "beat_title": "Two-Stage Kinetic Defense Against Cosmic Fire",
                "scene_key": "vol04_p05_sog1_anthocyanin_armor",
                "sfx": {"text": "ZAP—SHIELD UP!!", "x": 70, "y": 14, "rotate": 6, "variant": "marvel-kirby"},
                "director": {
                    "shot": "Explosive Kirby cosmic-meets-cellular battle spread! Blazing crimson cosmic-ray darts strike a DNA helix while golden SOG1 repair beams weld strands shut and royal-purple anthocyanin shields flare across Brassica leaves.",
                    "lighting": "High-voltage contrast of blazing solar crimson, golden DNA-repair lightning, and deep luminous royal-purple anthocyanin aura.",
                    "pacing": "Heroic climax—plants transformed from passive victims into armored cosmic defenders!",
                    "data_story_note": "Synthesizes Plant_response_to_radiation (two-stage SOG1 → antioxidant kinetic wave), B_rappa_LLGCSS (purple anthocyanin mutants), and lunar-leaf-radiation-decoder."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "COSMIC RAY ALERT! When blazing space particles dart through a plant cell, TWO superhero defense teams spring into action!",
                    "ms": "STAGE 1: THE SOG1 DNA REPAIR BLITZ! Within hours, master guardian SOG1 patches broken DNA—followed by Stage 2: glowing purple anthocyanin antioxidant armor!",
                    "hs": "TWO-STAGE RADIATION KINETICS. High-LET ionizing radiation triggers acute SOG1 double-strand-break repair followed by sustained flavonoid/anthocyanin redox buffering."
                },
                "bubbles": [
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-left",
                        "k5": "SOG1 repair squad, patch that DNA! And look at my cousin Brassica—turning bright royal purple soaks up those fiery radiation sparks!",
                        "ms": "In cosmic-ray tests, Brassica plants WITHOUT purple anthocyanin suffered massive gene chaos—purple pigment is literally space sunscreen!",
                        "hs": "Cross-species decoder validation confirms Arabidopsis radiation-redox signatures translate cleanly to edible Brassica rapa cultivars!"
                    },
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-right",
                        "k5": "Purple space veggies protect themselves from cosmic rays AND pack extra antioxidants for hungry astronauts—double win!",
                        "ms": "So breeding anthocyanin-rich purple greens gives us crops that survive deep-space radiation AND boost crew health!",
                        "hs": "Bonus synergy: anthocyanin-fortified cultivars simultaneously harden crop genomes and supply radioprotective polyphenols to the crew."
                    }
                ],
                "data_hud": {
                    "headline": "SOG1 DNA Repair & Anthocyanin Radioprotection",
                    "equation": "GCR Hit → [0–6h] SOG1 DSB Repair → [24h+] Anthocyanin ROS Shield",
                    "metric": "Pigment-Free Mutants Show Broad Redox Disruption",
                    "dataset": "Plant_response_to_radiation & B_rappa_LLGCSS",
                    "explanation": "Purple anthocyanin pigments drastically buffer cosmic-ray oxidative cascades after acute SOG1 DNA repair stabilizes the genome.",
                    "linked_comic_id": "Plant_response_to_radiation"
                }
            },
            {
                "page_number": 6,
                "act": "Act III — Building the Moon's Field on Earth",
                "beat_title": "Inside the CoSE MagBio-3D Helmholtz Rings",
                "scene_key": "vol04_p06_helmholtz_coils_lab",
                "sfx": {"text": "HUMMM—LOCKED!", "x": 74, "y": 15, "rotate": -4, "variant": "marvel-triumph"},
                "director": {
                    "shot": "Monumental Kirby-tech Earth laboratory finale! Doc B stands heroically inside three colossal perpendicular glowing copper Helmholtz coil rings cradling emerald and purple seedlings.",
                    "lighting": "Warm gleaming copper coils radiating crisp golden magnetic field lines against a sleek dark laboratory vault.",
                    "pacing": "Grounded, empowering finale—bringing cosmic physics down to a testable Earth workbench.",
                    "data_story_note": "Highlights cose-magbio-3d-report: 3-axis Helmholtz coils cancel Earth's field to recreate exact Moon near-null or Martian crustal magnetism right on Earth."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "BACK ON EARTH AT THE COSE LAB! How do you test Moon and Mars magnetism without waiting years for a rocket? You build a magnetic time machine!",
                    "ms": "COSE MAGBIO-3D HELMHOLTZ CHAMBER. By tuning electric currents through three giant copper rings, Doc B cancels Earth's field to dial in exact Moon or Mars magnetism!",
                    "hs": "3-AXIS HELMHOLTZ ZERO-FIELD SYNTHESIS. Precision tri-axial current cancellation reproduces lunar NMF (<50 nT) and Martian crustal vectors for rapid pre-flight cultivar screening."
                },
                "bubbles": [
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-left",
                        "k5": "Dialing in Lunar South Pole magnetism right here in the lab! Now we can test our tough purple seedlings before they ever board a rocket!",
                        "ms": "From quantum electrons inside a leaf to giant copper coils on Earth, we're turning invisible cosmic forces into tools we can engineer!",
                        "hs": "By screening NMF resilience and radiation armor on Earth first, every future Artemis and Mars seed payload flies pre-hardened."
                    },
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra (Comms)",
                        "anchor": "bottom-right",
                        "k5": "Earth's shield taught life how to begin—and now science is helping us carry that shield to the stars!",
                        "ms": "Next mystery on our radar, Doc: how does a plant without a brain warn its whole body in seconds when launch gravity slams it?!",
                        "hs": "Preparing for NS-26 suborbital launch telemetry—time to watch cellular calcium lightning race through living plants!"
                    }
                ],
                "data_hud": {
                    "headline": "CoSE MagBio-3D Tri-Axial Helmholtz Chamber",
                    "equation": "B_net = B_Earth + B_coil(I_x, I_y, I_z) → B_Moon / B_Mars",
                    "metric": "Uniform Near-Null & Planetary Field Simulation on Earth",
                    "dataset": "cose-magbio-3d-report & lunar-leaf-radiation-decoder",
                    "explanation": "Perpendicular Helmholtz coil pairs neutralize Earth's geomagnetic field so scientists can test lunar and Martian magnetobiology safely before launch.",
                    "linked_comic_id": "cose-magbio-3d-report"
                }
            }
        ]
    },

    # =========================================================================
    # VOLUME 05 — SHŌNEN ACTION / KINETIC SPEED-LINE MANGA
    # =========================================================================
    {
        "volume": 5,
        "id": "vol-05-lightning-without-a-brain",
        "slug": "vol-05-lightning-without-a-brain",
        "title": "LIGHTNING WITHOUT A BRAIN",
        "subtitle": "The Cellular Alarm Network",
        "tagline": "No nerves. No mind. Yet in milliseconds, a living wave of calcium fire warns the whole plant.",
        "art_style_family": "manga",
        "art_style_label": "Shōnen Kinetic Action Manga",
        "art_style_notes": "Explosive radial Japanese speed lines, high-contrast brushwork, dazzling bioluminescent emerald GCaMP calcium shockwaves, dramatic technique callout frames, and energetic manga SFX.",
        "worlds": ["Earth", "ISS"],
        "perspectives": ["Phytonaut", "Mission Control"],
        "cast": ["statolith", "sprout", "doc-b", "pixel"],
        "theme_color": "#16a34a",
        "accent_color": "#eab308",
        "ngss": "MS-LS1-8 · HS-LS1-3 · MS-LS1-2 · HS-LS1-1",
        "big_finds": [
            "Even just a few minutes of NS-26 suborbital spaceflight trigger rapid mechanosensitive calcium, cell-wall, and heat-shock transcription waves—capturing the very first heartbeat of microgravity sensing.",
            "Glutamate-triggered glowing calcium waves (GCaMP) work in both ancient moss and modern flowering Arabidopsis—proving this systemic plant alarm system is over 450 million years old.",
            "A Conditional Variational Autoencoder (CVAE Redox Decoder) separates helpful early signaling sparks (apoplast/chloroplast ROS) from chronic peroxisomal H₂O₂ spaceflight stress.",
            "NASA OSD-615 shows outer pectin sugar cell walls and inner actin/kinesin motor highways remodel together in zero-G—while FloodWave-At proves self-correcting science removes camera-motion illusions to expose the true biological wave!"
        ],
        "take_home": "Plants don't need brains to talk across their whole bodies—and great scientists always double-check their own eyes to make sure the signal is real!",
        "mission_activity": "Explore CrossSpecies-CaWave, Redox_decoder, and FloodWave-At to watch real glowing calcium waves race through moss and Arabidopsis—and see how motion correction cleans noisy video.",
        "source_comic_ids": [
            "CrossSpecies-CaWave",
            "FloodWave-At",
            "Suborbital_Arabidopsis",
            "Redox_decoder",
            "arabidopsis-spaceflight-omics",
            "OSD615-glycome-cytoskeleton-systems-biology",
            "virtual-root"
        ],
        "pages": [
            {
                "page_number": 1,
                "act": "Act I — Three Minutes to Weightlessness",
                "beat_title": "NS-26 Suborbital Ignition!",
                "scene_key": "vol05_p01_ns26_suborbital_launch",
                "sfx": {"text": "GO-GOGOGO!!", "x": 72, "y": 15, "rotate": -9, "variant": "manga-kinetic"},
                "director": {
                    "shot": "Explosive diagonal Shōnen launch splash! Suborbital rocket tears into the black upper atmosphere framed by razor-sharp radial manga speed lines and a glowing capsule inset.",
                    "lighting": "Blazing white-gold rocket exhaust slashing across deep midnight-blue sky; stark ink contrast and bright emerald glow inside the seed capsule.",
                    "pacing": "Zero-to-Mach-3 adrenaline—capturing the exact instant hypergravity flips into weightlessness.",
                    "data_story_note": "Introduces Suborbital_Arabidopsis (NS-26): proving minutes of suborbital flight already trigger rapid mechanosensitive calcium and heat-shock responses."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "3... 2... 1... LIFTOFF! A suborbital rocket blasts Sprout straight to the edge of space—giving scientists a front-row seat to the VERY FIRST SECONDS of zero-G!",
                    "ms": "NS-26 SUBORBITAL FLIGHT. Most space missions last weeks—so we missed the opening instant! Now we catch the shockwave the moment the engines cut off!",
                    "hs": "NS-26 SUBORBITAL TRANSCRIPTOMICS. Resolving acute hypergravity-to-microgravity transitions (~3 minutes) captures primary mechanosensitive Ca²⁺ and HSF bursts."
                },
                "bubbles": [
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-left",
                        "k5": "WHOAAA! First 3Gs pushing me flat—and NOW the engines cut out and I'm FLOATING! Every cell in my body just felt that!",
                        "ms": "Three minutes of weightlessness and my mechanosensors are already firing! Quick—how do my roots warn my leaves without a single nerve?!",
                        "hs": "MECO! Main engine cutoff! Rapid mechanosensitive calcium channels and heat-shock transcription factors are igniting within seconds!"
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-right",
                        "k5": "Fix the samples right at apogee! We're about to see the very first lightning bolt a plant fires when it hits space!",
                        "ms": "Capturing the first 180 seconds separates the INITIAL alarm bell from weeks of slow orbital adaptation!",
                        "hs": "NS-26 suborbital sampling isolates primary gravity-loss transduction before secondary boundary-layer hypoxia even begins."
                    }
                ],
                "data_hud": {
                    "headline": "NS-26 Acute Suborbital Mechanosensing",
                    "equation": "3g Launch → 0g MECO (t ≈ 180 s) ⇒ Ca²⁺ + HSF Burst",
                    "metric": "Minutes of Flight Trigger Rapid Stress Wave",
                    "dataset": "Suborbital_Arabidopsis · Blue Origin NS-26",
                    "explanation": "Suborbital flights freeze plants minutes into weightlessness, revealing rapid mechanosensitive calcium, cell-wall, and heat-shock transcription triggers.",
                    "linked_comic_id": "Suborbital_Arabidopsis"
                }
            },
            {
                "page_number": 2,
                "act": "Act I — Liftoff Inside the Root Cap",
                "beat_title": "Statolith Unleashes the Calcium Flash!",
                "scene_key": "vol05_p02_statolith_liftoff_flash",
                "sfx": {"text": "BZZZT—FLASH!!", "x": 73, "y": 14, "rotate": 7, "variant": "manga-kinetic"},
                "director": {
                    "shot": "High-impact Shōnen extreme close-up! Violet Statolith crystals vault off the cellular floor in zero-G, bursting membrane ion gates into blinding emerald-gold calcium sparks.",
                    "lighting": "Explosive lime-green and canary-yellow electrical arcs crackling over heavy black manga speed lines and translucent violet crystal facets.",
                    "pacing": "Split-second freeze-frame impact—like an anime special-move activation!",
                    "data_story_note": "Links Statolith buoyancy, cellular peptide/Ca²⁺ walkie-talkies (arabidopsis-spaceflight-omics), and polar auxin gates (virtual-root)."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "TECHNIQUE ACTIVATED: ZERO-G LIFTOFF! The moment Statolith floats off the cell floor, tiny calcium gates snap open like electric dominoes!",
                    "ms": "CELLULAR WALKIE-TALKIES. Plants have no brains—yet glutamate and calcium (Ca²⁺) channels fire a glowing chain reaction from cell to cell!",
                    "hs": "SYSTEMIC CA²⁺ & PEPTIDE SIGNALING. Sudden unloading of columella amyloplasts and plasma-membrane tension gates triggers GLR-mediated Ca²⁺ influx and phloem propagation."
                },
                "bubbles": [
                    {
                        "speaker": "statolith",
                        "speaker_name": "Statolith",
                        "anchor": "bottom-left",
                        "k5": "YEEEHAW!! No floor! I'm weightless! Ring the calcium alarm bell—tell the leaves we made it to outer space!!",
                        "ms": "Gravity's gone and the membrane tension just snapped! Passing the Ca²⁺ baton straight to the vascular phloem expressway!",
                        "hs": "LASSO spaceflight biomarker mapping confirms rewired ligand-receptor and Ca²⁺ walkie-talkies bridging phloem and guard cells!"
                    },
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-right",
                        "k5": "Message blasting up my stem at millimeter-per-second speed—WHOA, it's glowing bright green!",
                        "ms": "Every single cell passes the flash to its neighbor! No brain needed when your whole body is a living circuit board!",
                        "hs": "Coupling Ca²⁺ transients with Virtual Root PIN auxin models reveals how fast electrical/ionic alerts steer slower hormonal growth."
                    }
                ],
                "data_hud": {
                    "headline": "Cellular Walkie-Talkies & Biomarker Network",
                    "equation": "∂[Ca²⁺]/∂t = D∇²[Ca²⁺] + J_GLR(glutamate) − J_pump",
                    "metric": "LASSO Sparse Spaceflight Biomarkers + Ca²⁺ Waves",
                    "dataset": "arabidopsis-spaceflight-omics & virtual-root",
                    "explanation": "Microgravity rewires cell-to-cell peptide and calcium wave communication linking vascular phloem conduits directly to leaf guard cells.",
                    "linked_comic_id": "arabidopsis-spaceflight-omics"
                }
            },
            {
                "page_number": 3,
                "act": "Act II — 450 Million Years of Living Lightning",
                "beat_title": "Moss and Arabidopsis Fire Together!",
                "scene_key": "vol05_p03_moss_arabidopsis_wave",
                "sfx": {"text": "ZAAAAAP—ECHO!!", "x": 68, "y": 15, "rotate": -5, "variant": "manga-kinetic"},
                "director": {
                    "shot": "Epic symmetrical Shōnen double-hero spread: ancient emerald moss on the left and flowering Arabidopsis on the right erupt in twin synchronized glowing green GCaMP lightning webs.",
                    "lighting": "Deep obsidian ink background making the fluorescent lime-emerald GCaMP veins burn like neon lightning, bridged by a golden evolutionary spark.",
                    "pacing": "Awe and ancient lineage—two distant cousins unlocking the same ancestral power.",
                    "data_story_note": "Highlights CrossSpecies-CaWave: glutamate-triggered systemic calcium waves are conserved across 450 million years from non-vascular moss to flowering plants."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "AN ANCIENT SECRET ACROSS 450 MILLION YEARS! Even tiny primitive moss—with NO roots or flowers—fires the EXACT same glowing calcium lightning!",
                    "ms": "CROSS-SPECIES CALCIUM WAVES. Triggered by the signal molecule glutamate, glowing GCaMP green flashes race across both humble moss and space-faring Arabidopsis!",
                    "hs": "EVOLUTIONARY CONSERVATION OF GLUTAMATE-GATED CA²⁺ WAVES. Comparative GCaMP imaging proves systemic Ca²⁺ signaling predates vascular plants by >400 Myr."
                },
                "bubbles": [
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-left",
                        "k5": "Whoa, Cousin Moss! We split apart before dinosaurs even walked Earth—and we STILL use the same glowing Morse code!",
                        "ms": "One drop of glutamate and BOTH of our bodies light up in electric green! This alarm system is older than forests themselves!",
                        "hs": "Conserved GLR (Glutamate Receptor-Like) channels prove rapid ionic stress propagation was one of land plants' very first survival superpowers!"
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-right",
                        "k5": "Nature doesn't throw away a winning superpower! Once plants invented calcium lightning, every green explorer kept it for the stars!",
                        "ms": "And right alongside calcium lightning rides a second spark—Reactive Oxygen Species! Pixel, spin up the Redox Decoder!",
                        "hs": "Ca²⁺ waves couple tightly to RBOHD apoplastic ROS bursts—which brings us to our next challenge: telling helpful sparks from cellular fire!"
                    }
                ],
                "data_hud": {
                    "headline": "450-Million-Year Conserved Calcium Wave",
                    "equation": "Glutamate → GLR Channels → Systemic GCaMP Ca²⁺ Wave",
                    "metric": "Conserved Across Physcomitrium Moss & Arabidopsis",
                    "dataset": "CrossSpecies-CaWave · Comparative GCaMP",
                    "explanation": "Both ancient mosses and modern flowering plants fire systemic glutamate-induced calcium waves, proving an ancient shared toolkit for rapid stress signaling.",
                    "linked_comic_id": "CrossSpecies-CaWave"
                }
            },
            {
                "page_number": 4,
                "act": "Act II — Taming the Sparks",
                "beat_title": "CVAE Redox Decoder Splits Signal from Burn",
                "scene_key": "vol05_p04_redox_cvae_clash",
                "sfx": {"text": "SPLIT—PRISM!!", "x": 74, "y": 14, "rotate": -7, "variant": "manga-cyber"},
                "director": {
                    "shot": "Intense dual-aura Shōnen clash inside a plant cell! Pixel projects a luminous cyan prism that splits smooth golden signaling flares cleanly away from jagged crimson oxidative smoke.",
                    "lighting": "Sharp cyan-gold vs. crimson-orange contrast framed with dramatic angular manga action borders.",
                    "pacing": "Crisp analytical punch—turning a noisy machine-learning latent space into a vivid superhero clash.",
                    "data_story_note": "Visualizes Redox_decoder (Conditional VAE): distinguishing rapid apoplast/chloroplast signaling pulses from chronic peroxisomal H₂O₂ spaceflight stress."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "A SPARK CAN LIGHT A CAMPFIRE—OR BURN A FOREST! Cells use tiny chemical sparks called 'ROS' as warning flares, unless too many pile up!",
                    "ms": "THE REDOX DECODER (CVAE). In raw spaceflight data, helpful early signaling sparks and dangerous oxidative damage looked completely tangled!",
                    "hs": "CONDITIONAL VARIATIONAL AUTOENCODER (CVAE). Projecting compartment-specific ROS time-series (RBOHD apoplast, ¹O₂ chloroplast, H₂O₂ peroxisome) separates signaling from damage."
                },
                "bubbles": [
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel",
                        "anchor": "bottom-left",
                        "k5": "Prism lock! On the left: clean golden warning sparks helping Sprout adapt! On the right: smoky red H₂O₂ overload from still space air!",
                        "ms": "The CVAE latent map separates early helpful chloroplast/apoplast waves from chronic peroxisomal H₂O₂ buildup driven by photorespiration!",
                        "hs": "Latent redox trajectories pinpoint exact organelle origin—proving spaceflight oxidative signatures are compartment-specific, not generic chaos!"
                    },
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-right",
                        "k5": "Hey—so sparks aren't the villain! Control is what makes me a master of space stress!",
                        "ms": "Once I tame my inner sparks, my cells can focus on the next shock of zero-G: rebuilding my microscopic skeleton and sugar armor!",
                        "hs": "Coordinated ROS-Ca²⁺ cross-talk immediately feeds forward into cell-wall remodeling and cytoskeletal motor reprogramming!"
                    }
                ],
                "data_hud": {
                    "headline": "CVAE Redox Kinetic Decoder",
                    "equation": "z ~ q_φ(z | x_ROS, c_organelle)  ⇒  Signal vs. Chronic H₂O₂",
                    "metric": "Apoplast/Chloroplast Pulses vs. Peroxisomal Overload",
                    "dataset": "Redox_decoder · Conditional VAE",
                    "explanation": "Machine learning separates beneficial early reactive-oxygen signaling pulses from harmful chronic hydrogen peroxide buildup in spaceflight.",
                    "linked_comic_id": "Redox_decoder"
                }
            },
            {
                "page_number": 5,
                "act": "Act III — Scaffolds & Sugar Armor",
                "beat_title": "OSD-615: How Cells Hold Their Shape in Zero-G",
                "scene_key": "vol05_p05_glycome_cytoskeleton",
                "sfx": {"text": "RE-FORGE!!", "x": 72, "y": 15, "rotate": 5, "variant": "manga-kinetic"},
                "director": {
                    "shot": "Hyper-detailed architectural manga cutaway slicing a plant cell wall: golden woven pectin-xyloglucan armor outside linked straight to glowing emerald microtubule motor tracks inside!",
                    "lighting": "Rich amber-gold braided cell-wall fibers illuminated by electric-emerald kinesin and myosin sparks zipping across internal cytoskeletal bridges.",
                    "pacing": "Dynamic kinetic engineering—revealing how outer armor and inner tracks co-adapt.",
                    "data_story_note": "Visualizes OSD615-glycome-cytoskeleton-systems-biology: microgravity simultaneously remodels pectin/xyloglucan wall crosslinks and actin/tubulin/kinesin/myosin motors."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "NO BONES? NO PROBLEM! Plants stand tall using tough sugar-coat walls on the outside and stretchy protein cables on the inside!",
                    "ms": "NASA OSD-615 SYSTEMS DASHBOARD. When zero-G takes the weight off, outer pectin sugar armor and inner microtubule motor tracks remodel TOGETHER!",
                    "hs": "GLYCOME × CYTOSKELETON CO-EXPRESSION (OSD-615). Microgravity coordinates pectin methylesterification and xyloglucan crosslinks with kinesin, myosin, and ARP2/3 highways."
                },
                "bubbles": [
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-left",
                        "k5": "Feel that, Statolith? Without heavy gravity pulling me down, my outer sugar armor and inner cargo tracks are remixing their blueprints in sync!",
                        "ms": "My pectin wall crosslinks talk straight through the membrane to kinesin and myosin motors—rebuilding my shape for weightless life!",
                        "hs": "Glycome profiling proves extracellular matrix loosening couples tightly to intracellular motor-protein networks during orbital expansion."
                    },
                    {
                        "speaker": "statolith",
                        "speaker_name": "Statolith",
                        "anchor": "bottom-right",
                        "k5": "Just like a skyscraper built for earthquakes—flexible inside frame plus smart outside armor!",
                        "ms": "Wait—before we celebrate our glowing wave videos back in the lab, Doc B just spotted a sneaky twist in the microscope footage!",
                        "hs": "Hold everything—time for the most important superpower in all of science: checking whether our own glowing wave was a camera illusion!"
                    }
                ],
                "data_hud": {
                    "headline": "Cell-Wall Glycome × Cytoskeleton Coupling",
                    "equation": "Pectin / Xyloglucan Wall ↔ Actin / Microtubule Motors",
                    "metric": "NASA OSD-615 Multi-Modal Systems Network",
                    "dataset": "OSD615-glycome-cytoskeleton-systems-biology",
                    "explanation": "Microgravity shifts both the exterior sugar-polymer armor and interior cytoskeletal transport highways in coordinated systems modules.",
                    "linked_comic_id": "OSD615-glycome-cytoskeleton-systems-biology"
                }
            },
            {
                "page_number": 6,
                "act": "Act III — The Scientist's Ultimate Superpower",
                "beat_title": "FloodWave-At: Stripping Away the Illusion to Find the Truth",
                "scene_key": "vol05_p06_floodwave_truth",
                "sfx": {"text": "AHA—CLARITY!", "x": 74, "y": 14, "rotate": -4, "variant": "manga-triumph"},
                "director": {
                    "shot": "Classic Shōnen 'detective revelation' finale! Doc B adjusts his gleaming glasses beside Pixel as a crisp holographic split-screen strips shaky water-reflection glare on the left to unveil the calm true emerald calcium rise on the right.",
                    "lighting": "Sharp white lens-glint on Doc B's glasses; turbulent noisy static on left resolving into pure, serenely glowing emerald GCaMP signal on right.",
                    "pacing": "Inspiring intellectual punchline—celebrating scientific honesty and rigor.",
                    "data_story_note": "Highlights FloodWave-At: removing camera motion and water reflection artifacts replaces an apparent ultra-fast flash with the real gradual ~4-minute GCaMP biological rise."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "PLOT TWIST IN THE LAB! When a flooded plant video showed a crazy instant flash, Doc B stopped and asked: 'Wait—was that biology, or just shimmering water?!'",
                    "ms": "FLOODWAVE-AT REVISITED. After subtracting camera wobble and water glare, the fake instant flash vanished—revealing the TRUE gradual calcium wave rising over minutes!",
                    "hs": "SELF-CORRECTING RIGOR. Optical flow registration and reflection masking separate physical water-meniscus artifacts from authentic systemic GCaMP fluorescence kinetics."
                },
                "bubbles": [
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-left",
                        "k5": "Aha! The coolest superpower in science isn't always being right on the first try—it's checking your own work until the REAL truth shines through!",
                        "ms": "Removing reflection artifacts didn't ruin our story—it made it STRONGER! Now we know the exact real speed of the plant's flood alarm!",
                        "hs": "Reproducible negative controls and artifact removal turn flashy false positives into rock-solid biophysics we can trust on future missions."
                    },
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel",
                        "anchor": "bottom-right",
                        "k5": "Truth verified, Doc B! Next stop: floating back up to the ISS Cupola where Commander Astra is growing real juicy space TOMATOES!",
                        "ms": "Signal clean and verified! Switching channels from model Arabidopsis straight to edible space crops—the VEG-05 Red Robin Harvest awaits!",
                        "hs": "All signaling pipelines calibrated! Ready to see how light spectra, wild genes, and salicylic acid bring fresh dwarf tomatoes to orbit."
                    }
                ],
                "data_hud": {
                    "headline": "Self-Correcting Science: FloodWave-At",
                    "equation": "ΔF/F₀_true = ΔF/F₀_raw − Artifact(motion, meniscus)",
                    "metric": "True GCaMP Rise Unmasked After Artifact Removal",
                    "dataset": "FloodWave-At · Calcium Flood Signaling Revisited",
                    "explanation": "Correcting for camera drift and water-surface glare proves good science questions surprising results first—revealing true gradual calcium kinetics.",
                    "linked_comic_id": "FloodWave-At"
                }
            }
        ]
    }
]
