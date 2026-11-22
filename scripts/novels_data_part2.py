"""
Flagship Graphic Novels Data — Volumes 06 through 10
CoSE Science Comics: The Illustrated Space Biology Chronicles
"""

NOVELS_PART_2 = [
    # =========================================================================
    # VOLUME 06 — WARM BOTANICAL IYASHIKEI / GHIBLI-INFLECTED MANGA
    # =========================================================================
    {
        "volume": 6,
        "id": "vol-06-the-red-robin-harvest",
        "slug": "vol-06-the-red-robin-harvest",
        "title": "THE RED ROBIN HARVEST",
        "subtitle": "Tomatoes of the Orbital Garden",
        "tagline": "Growing fresh fruit 400 km above Earth—where blue photons, wild genes, and living color feed the soul.",
        "art_style_family": "manga",
        "art_style_label": "Botanical Iyashikei / Ghibli Watercolor Manga",
        "art_style_notes": "Warm hand-inked botanical watercolor washes, luminous floating droplets catching ruby-red and magenta LED glow inside the ISS Cupola, and serene emotional negative space (ma).",
        "worlds": ["ISS", "Earth"],
        "perspectives": ["Astronaut", "Phytonaut"],
        "cast": ["astra", "sprout", "doc-b"],
        "theme_color": "#e11d48",
        "accent_color": "#4ade80",
        "ngss": "MS-LS1-5 · HS-LS1-5 · HS-LS3-3 · MS-LS2-1",
        "big_finds": [
            "In NASA's VEG-05 ISS Dwarf Tomato experiment, blue-enriched LED lighting boosted antioxidant and defense pathways while beneficially shifting leaf-surface microbiomes.",
            "Across both VEGGIE and the Advanced Plant Habitat (APH), spaceflight primes salicylic acid ('plant aspirin') defense pathways and induces specialized adventitious roots with unique hypoxia/auxin signatures.",
            "1001 Genomes Arabidopsis GWAS, Brachypodium AstroGrass, and cotton TICTOC reveal that wild Earth ecotypes from mountains and harsh climates already carry natural genetic resilience for orbit.",
            "Harvesting fresh, living fruit in zero-G delivers both concentrated dietary antioxidants and powerful psychological morale boosts for long-duration crews."
        ],
        "take_home": "A space garden feeds more than bodies—it feeds the human spirit! Tuning light colors and borrowing wisdom from wild Earth plants turns cold steel stations into living homes.",
        "mission_activity": "Explore veg05-integrated-omics and arabidopsis-gwas-spaceflight to compare Red vs. Blue LED tomato signatures and discover which wild Earth ecotypes thrive best in microgravity.",
        "source_comic_ids": [
            "veg05-integrated-omics",
            "PhysioSpace_stress_decoding_VEG05",
            "VEGGIE_Tom_Red_Blue_Leaves_and_adv_roots",
            "tomato-spaceflight-VEG05-APH-SA-integration",
            "brachypodium-gwas-spaceflight",
            "arabidopsis-gwas-spaceflight",
            "TICTOC",
            "Seed_sowing_simulator"
        ],
        "pages": [
            {
                "page_number": 1,
                "act": "Act I — Color in a World of Steel",
                "beat_title": "Day 60 Inside the ISS VEGGIE Garden",
                "scene_key": "vol06_p01_veggie_tomato_bay",
                "sfx": {"text": "SHHH—BLOOM...", "x": 73, "y": 14, "rotate": -3, "variant": "manga-botanical"},
                "director": {
                    "shot": "Serene Ghibli-inflected wide watercolor spread of the ISS VEGGIE greenhouse: lush emerald dwarf tomato canopies glowing softly under magenta-pink LEDs.",
                    "lighting": "Warm rose-magenta and sapphire grow-light reflections dancing across tiny floating dew spheres against cool brushed-aluminum station racks.",
                    "pacing": "Gentle, poetic breathing room (ma)—letting readers feel the quiet wonder of living green in orbit.",
                    "data_story_note": "Establishes the transition from tiny lab model Arabidopsis to real fruiting space crops: NASA's VEG-05 'Red Robin' Dwarf Tomato."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "AFTER MONTHS OF PACKAGED POUCH FOOD, SOMETHING WONDERFUL IS GROWING ON THE SPACE STATION! Tiny green buds are turning into bright red space tomatoes!",
                    "ms": "ISS COLUMBUS MODULE · VEG-05 MISSION. Moving beyond model seedlings, Commander Astra tends 'Red Robin' dwarf tomatoes—the first orbital fruit harvest!",
                    "hs": "NASA VEG-05 INTEGRATED OMICS. Scaling astrobotany from Arabidopsis to fruiting Solanum lycopersicum tests light-recipe physiology, surface microbiomes, and edible yield."
                },
                "bubbles": [
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-left",
                        "k5": "Nothing smells like home up here quite like fresh tomato leaves! Come on, little blossoms—let's see which light recipe makes you happiest!",
                        "ms": "Day 60 in orbit! Half the tray grows under red-rich LEDs and half under blue-rich light—and the plants already look like two different worlds!",
                        "hs": "VEG-05 dual-chamber spectrum trial running nominal. Comparing red-dominant vs. blue-enriched PPFD recipes across fruit chemistry and leaf transcriptomes."
                    },
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout (Tiny Neighbor)",
                        "anchor": "bottom-right",
                        "k5": "Ooh, look at those shiny round tomatoes! I paved the way as a tiny lab sprout—now my big fruity cousins are taking over the kitchen!",
                        "ms": "Every lesson you learned from my genome is helping real space crops flower and fruit 400 kilometers above Earth!",
                        "hs": "Translating Arabidopsis model pathways directly into Solanum fruiting crops and Brachypodium staple grains!"
                    }
                ],
                "data_hud": {
                    "headline": "NASA VEG-05 Space Dwarf Tomato Mission",
                    "equation": "Red-Rich vs. Blue-Enriched LEDs → Metabolome + Microbiome",
                    "metric": "First Multi-Omics ISS Fruiting Tomato Harvest",
                    "dataset": "veg05-integrated-omics · NASA OSDR",
                    "explanation": "VEG-05 paired two horticultural LED spectra in orbit to discover how light color shapes tomato nutrition, defense priming, and safe leaf microbes.",
                    "linked_comic_id": "veg05-integrated-omics"
                }
            },
            {
                "page_number": 2,
                "act": "Act I — Painting Flavor with Blue Photons",
                "beat_title": "How Light Color Tunes Antioxidants & Leaf Microbes",
                "scene_key": "vol06_p02_red_vs_blue_leaves",
                "sfx": {"text": "GLOW—SPARKLE", "x": 72, "y": 15, "rotate": 3, "variant": "manga-botanical"},
                "director": {
                    "shot": "Exquisite side-by-side botanical watercolor comparison: warm red-lit sprawling stems on the left versus crisp blue-enriched compact emerald leaves glowing with golden antioxidant aura on the right.",
                    "lighting": "Delicate watercolor gradients contrasting ruby warmth against crystalline sapphire-emerald luminescence.",
                    "pacing": "Observational delicacy—like turning a page in a master naturalist's field sketchbook.",
                    "data_story_note": "Captures veg05-integrated-omics & PhysioSpace_stress_decoding_VEG05: blue-rich light boosts antioxidant/defense pathways and reshapes phyllosphere microbes."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "LIGHT IS LIKE SEASONING FOR PLANTS! Adding extra blue light made the space tomatoes compact, sturdy, and packed with healthy natural protectors!",
                    "ms": "SPECTRUM-DRIVEN PHYSIOLOGY. Blue-rich LEDs activated antioxidant and defense genes while gently reshaping the friendly microscopic community living on the leaves!",
                    "hs": "PHYSIOSPACE STRESS DECODING (VEG-05). Multi-omics reveals strong blue-spectrum induction of biotic-defense priming, flavonoids, and phyllosphere microbiome shifts."
                },
                "bubbles": [
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-left",
                        "k5": "Whoa—just by shifting the LED color dial, we boosted the vitamins and kept the plant neat and tidy for our tiny space rack!",
                        "ms": "Even the microscopic bacteria riding on the tomato leaves responded to the blue light—proof that a space farm is a living neighborhood, not a sterile machine!",
                        "hs": "PhysioSpace signatures show clear asymmetry between red and blue chambers: blue photons prime antioxidants without collapsing yield."
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B (Radio)",
                        "anchor": "bottom-right",
                        "k5": "Wait till you look down near the base of the stem, Astra—the tomatoes are growing brand-new roots right out into the air!",
                        "ms": "Check the lower stems! Humid zero-G air is triggering adventitious roots AND an unexpected chemical defender!",
                        "hs": "Cross-comparing VEG-05 with APH tomato flights reveals a conserved hormonal thread linking stems, roots, and plant immunity."
                    }
                ],
                "data_hud": {
                    "headline": "Blue-Light Antioxidant & Microbiome Tuning",
                    "equation": "Blue Photon Fraction ↑  ⇒  Antioxidants ↑ + Compact Canopy",
                    "metric": "PhysioSpace Biotic-Defense & Light-Acclimation Scores",
                    "dataset": "PhysioSpace_stress_decoding_VEG05",
                    "explanation": "Adjusting LED spectra acts like a non-chemical control knob, elevating beneficial antioxidants and steering the microbial ecosystem on edible leaves.",
                    "linked_comic_id": "PhysioSpace_stress_decoding_VEG05"
                }
            },
            {
                "page_number": 3,
                "act": "Act II — Plant Aspirin & Sky-Reaching Roots",
                "beat_title": "Salicylic Acid & Adventitious Roots in Zero-G",
                "scene_key": "vol06_p03_adventitious_roots_sa",
                "sfx": {"text": "SPROUT—REACH...", "x": 73, "y": 14, "rotate": -4, "variant": "manga-botanical"},
                "director": {
                    "shot": "Intimate botanical cross-section watercolor close-up of a space tomato stem sprouting silver-white aerial adventitious roots while warm amber salicylic acid ribbons pulse up the veins.",
                    "lighting": "Soft luminous pearl-white root hairs against deep forest-green stems and glowing honey-amber hormonal waves.",
                    "pacing": "Wonder at botanical improvisation—roots reaching sideways into humid space air.",
                    "data_story_note": "Synthesizes VEGGIE_Tom_Red_Blue_Leaves_and_adv_roots and tomato-spaceflight-VEG05-APH-SA-integration (salicylic acid = 'plant aspirin' defense priming)."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "ROOTS GROWING RIGHT OUT OF THE STEM?! In humid zero gravity, space tomatoes sprout silvery air-roots AND brew their own 'plant aspirin'!",
                    "ms": "VEG-05 × APH INTEGRATION. Across two totally different ISS greenhouses, spaceflight activates salicylic acid ('plant aspirin') immune priming and aerial roots!",
                    "hs": "ADVENTITIOUS ROOTING & SALICYLIC ACID (SA) SIGNALING. Aerial stem roots deploy unique hypoxia-auxin modules distinct from soil roots alongside conserved SA defense priming."
                },
                "bubbles": [
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-left",
                        "k5": "So cool! When water hangs differently in zero-G, tomato stems grow backup snorkel-roots right into the damp cabin air!",
                        "ms": "Those adventitious roots turn on a special mix of low-oxygen survival and auxin rooting genes that normal underground roots never use!",
                        "hs": "Meanwhile, salicylic acid pathways stay primed across both VEGGIE and APH—alerting the crop to orbital humidity and microbial neighbors."
                    },
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-right",
                        "k5": "Nature always improvises! Wait—can we also find WILD plants back on Earth that were practically BORN ready for outer space?",
                        "ms": "If spaceflight challenges roots and walls like this, maybe wild cousins from Earth's toughest mountains already evolved the exact traits we need!",
                        "hs": "Time to tap natural genetic variation across the 1001 Genomes, AstroGrass Brachypodium, and TICTOC cotton flights!"
                    }
                ],
                "data_hud": {
                    "headline": "Salicylic Acid Priming & Aerial Roots",
                    "equation": "VEGGIE × APH Meta-Integration → SA Immunity + Auxin Rooting",
                    "metric": "Conserved Across Two Independent ISS Greenhouses",
                    "dataset": "tomato-spaceflight-VEG05-APH-SA-integration",
                    "explanation": "Space tomatoes adapt to microgravity fluid distribution via stem adventitious roots while priming salicylic-acid immune defenses.",
                    "linked_comic_id": "tomato-spaceflight-VEG05-APH-SA-integration"
                }
            },
            {
                "page_number": 4,
                "act": "Act II — Wild Cousins Born for the Stars",
                "beat_title": "1001 Genomes, AstroGrass & Cotton in Orbit",
                "scene_key": "vol06_p04_wild_ecotypes_gwas",
                "sfx": {"text": "ROOT-POWER!", "x": 74, "y": 15, "rotate": -5, "variant": "manga-botanical"},
                "director": {
                    "shot": "Sweeping Ghibli panoramic spread bridging snowy Swedish cliffs, misty high mountain peaks, and golden Mediterranean plains upward via glowing golden DNA ribbons into an orbital greenhouse.",
                    "lighting": "Sun-drenched Earth landscapes in warm ochre, alpine sapphire, and spring emerald ascending into velvety orbital twilight.",
                    "pacing": "Expansive, joyous breadth—celebrating Earth's wild biodiversity as our cosmic toolbox.",
                    "data_story_note": "Synthesizes arabidopsis-gwas-spaceflight (1001 Genomes), brachypodium-gwas-spaceflight (AstroGrass cereals), and TICTOC (cotton root branching)."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "EARTH'S WILD PLANTS ARE SECRET SPACE HEROES! From snowy northern cliffs to windswept mountains, wild cousins already carry super-tough space genes!",
                    "ms": "SPACEFLIGHT GWAS ACROSS CROPS. Scanning 1,001 wild Arabidopsis varieties, AstroGrass cereals, and TICTOC cotton reveals natural DNA variants built for microgravity!",
                    "hs": "GENOME-WIDE ASSOCIATION FOR ASTROBOTANY. Identifying natural alleles governing root skewing, cell-wall feruloylation (Brachypodium), and lateral root architecture (TICTOC)."
                },
                "bubbles": [
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-left",
                        "k5": "For years we only flew one or two lab plants! Turns out wild mountain and northern cousins already packed antioxidant and root-strength superpowers!",
                        "ms": "AstroGrass mapped cereal-grass loci for root angle and tough cell walls—laying the genetic bridge from tiny sprouts to space wheat and rice!",
                        "hs": "And TICTOC cotton seedlings revealed gravity-independent lateral root branching strategies that help breed drought-resilient crops on Earth too!"
                    },
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-right",
                        "k5": "My wild cousins around the globe are joining the space team! Every climate on Earth has a gift for the stars!",
                        "ms": "And remember Seed Sowing Simulator: in zero-G without downward pull, directional blue and red light guides our roots neatly home!",
                        "hs": "Biodiversity + GWAS breeding + directional phototropism = crops engineered by evolution itself for orbital farming."
                    }
                ],
                "data_hud": {
                    "headline": "Wild Biodiversity & Spaceflight GWAS",
                    "equation": "Phenotype_0g = μ + Σ β_i SNP_i + E_light + ε",
                    "metric": "1001 Genomes · AstroGrass Brachypodium · TICTOC Cotton",
                    "dataset": "arabidopsis-gwas-spaceflight & brachypodium-gwas-spaceflight",
                    "explanation": "Natural genetic variants in wild ecotypes and cereal grasses unlock root architecture and cell-wall resilience for both space farms and Earth drought survival.",
                    "linked_comic_id": "brachypodium-gwas-spaceflight"
                }
            },
            {
                "page_number": 5,
                "act": "Act III — The Ruby Jewel of Orbit",
                "beat_title": "Harvesting Fresh Fruit in Weightlessness",
                "scene_key": "vol06_p05_harvest_droplet",
                "sfx": {"text": "SNIP... FLOAT", "x": 74, "y": 14, "rotate": -3, "variant": "manga-botanical"},
                "director": {
                    "shot": "Tender, hyper-detailed Ghibli close-up: Commander Astra's gloved fingers gently pluck a glistening ruby-red cherry tomato while a single floating dewdrop mirrors curved blue Earth.",
                    "lighting": "Luminous backlit ruby translucency on the ripe fruit, crystalline sparkle on the floating water sphere, soft sunlit halo.",
                    "pacing": "Quiet, unforgettable emotional pause—the heartbeat of the entire story.",
                    "data_story_note": "Connects orbital horticulture directly to human psychology, sensory enrichment, and fresh micronutrient bioavailability."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "HARVEST DAY IN ORBIT! Commander Astra gently plucks a bright ruby-red tomato—and a tiny floating water drop reflects all of planet Earth right beside it!",
                    "ms": "MORE THAN CALORIES. After months of sterile corridors and freeze-dried meals, touching living leaves and smelling ripe fruit transforms crew well-being.",
                    "hs": "SENSORY & NUTRITIONAL COUNTERMEASURE. Fresh fruiting crops deliver labile vitamin C, carotenoids, and psychological restoration unattainable by stored shelf-stable rations."
                },
                "bubbles": [
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-left",
                        "k5": "It's warm from the lights... crisp, juicy, and smells like summer! You don't realize how much you miss a real garden until you're 400 kilometers from grass!",
                        "ms": "When you care for something living up here, it cares right back for you. Every single photon and gene map was worth this moment!",
                        "hs": "Fresh lycopene, phenolic antioxidants, and pure crew morale—proving orbital horticulture is mission-critical life support."
                    },
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-right",
                        "k5": "We did it, Commander! Now save some seeds—we're going to share dinner by the big Earth window!",
                        "ms": "Every tomato carries the next generation of space-born seeds tucked safely inside!",
                        "hs": "Seed-to-seed generational capability closes the biological loop for voyages far beyond Earth resupply."
                    }
                ],
                "data_hud": {
                    "headline": "Fresh Space Crop Value (VEG-05 & Veggie)",
                    "equation": "Bioregenerative Value = Nutrition + O₂/CO₂ + Crew Morale",
                    "metric": "Rivals or Exceeds Earth Control Carotenoids & Phenolics",
                    "dataset": "VEGGIE_Tom_Red_Blue_Leaves_and_adv_roots",
                    "explanation": "Freshly harvested orbital crops replenish heat-sensitive vitamins and antioxidants while dramatically supporting astronaut mental resilience.",
                    "linked_comic_id": "VEGGIE_Tom_Red_Blue_Leaves_and_adv_roots"
                }
            },
            {
                "page_number": 6,
                "act": "Act III — Dinner Over a Blue Sunrise",
                "beat_title": "Sharing the Harvest in the ISS Cupola",
                "scene_key": "vol06_p06_cupola_feast",
                "sfx": {"text": "CRUNCH! SMILE!", "x": 73, "y": 14, "rotate": -4, "variant": "manga-botanical"},
                "director": {
                    "shot": "Heartwarming Ghibli finale spread inside the panoramic ISS Cupola: smiling crew members float around bowls of ruby space tomatoes and crisp greens as golden orbital sunrise arcs across Earth below.",
                    "lighting": "Golden sunrise flaring across curved sapphire oceans, bathing the floating crew and bright green/red salad bowls in radiant warmth.",
                    "pacing": "Peaceful, luminous closure—before pivoting toward the rugged Moon dust challenge of Vol. 07.",
                    "data_story_note": "Bridges orbital hydroponic gardens to the next frontier: how do we grow crops when we can't ship Earth soil or water to the Moon?"
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "SUNRISE DINNER IN THE CUPOLA! Sharing fresh space-grown tomatoes above a glowing blue Earth turns a metal spaceship into a true home!",
                    "ms": "THE ORBITAL GARDEN THRIVES. From light recipes to wild genomes, humanity has learned how to grow fresh fruit among the stars.",
                    "hs": "ORBITAL PROOF-OF-CONCEPT COMPLETE. Next challenge: scaling beyond rocket-shipped hydroponic pillows to building living soil from raw lunar rock."
                },
                "bubbles": [
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-left",
                        "k5": "Best salad in the solar system! Wait—when we build a big farm on the Moon, we can't pack heavy Earth dirt on every rocket, can we?",
                        "ms": "That's the billion-dollar question: how do we turn razor-sharp dead Moon dust into living soil? Looks like it's time to call in Myco!",
                        "hs": "Rocket payload economics forbid shipping terrestrial soil—next volume, fungal mycoponics and sintered regolith take center stage!"
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B (Radio)",
                        "anchor": "bottom-right",
                        "k5": "Enjoy every bite, crew! Next adventure, we meet the glowing mushroom architect who turns Moon rock into a living oasis!",
                        "ms": "Get ready, Astra—Myco is waiting in the lunar lava tubes with 180 years of Earth soil wisdom and a solar-sintering kiln!",
                        "hs": "Transitioning from orbital hydroponics to In-Situ Resource Utilization (ISRU): welcome to the Alchemists of Moon Dust."
                    }
                ],
                "data_hud": {
                    "headline": "Bridge to Deep-Space Farming",
                    "equation": "Model Plant → Edible Space Crop → Lunar ISRU Soil",
                    "metric": "Orbital Horticulture Validated · Scaling to Moon",
                    "dataset": "AstroBotany Thematic Hub & VEG-05",
                    "explanation": "Proving fruiting crops thrive in orbit sets the stage for permanent lunar greenhouses powered by local regolith and fungal partners.",
                    "linked_comic_id": "AstroBotany"
                }
            }
        ]
    },

    # =========================================================================
    # VOLUME 07 — MARVEL SOLARPUNK / MYTHIC GRAPHIC NOVEL
    # =========================================================================
    {
        "volume": 7,
        "id": "vol-07-alchemists-of-moon-dust",
        "slug": "vol-07-alchemists-of-moon-dust",
        "title": "ALCHEMISTS OF MOON DUST",
        "subtitle": "Myco & the Living Habitat",
        "tagline": "Sharp dead regolith meets a glowing web of fungi—and 180 years of Earth soil wisdom.",
        "art_style_family": "marvel",
        "art_style_label": "Marvel Solarpunk / Mythic Graphic Novel",
        "art_style_notes": "Painterly Marvel inkwork fusing lunar basalt-silver, warm sintered terracotta-bronze, and bioluminescent emerald-gold mycelial tapestries inside soaring underground lunar lava tubes.",
        "worlds": ["Moon", "Earth"],
        "perspectives": ["Phytonaut", "Astronaut"],
        "cast": ["myco", "astra", "doc-b", "sprout"],
        "theme_color": "#ea580c",
        "accent_color": "#a3e635",
        "ngss": "5-LS2-1 · MS-ESS3-3 · MS-LS2-3 · HS-ESS3-2",
        "big_finds": [
            "Raw Apollo lunar regolith (like mature Apollo 11 dust) is glassy, sharp, and triggers heavy metal, salt, and oxidative root stress (AstroRegolith & ARES curation).",
            "Baking Moon dust into sintered regolith ceramics with tuned pore sizes creates reusable capillary wicks that deliver water and oxygen without free-liquid sloshing.",
            "Mycoponics teams fungi (Myco) with crops to lock water in living matrices, digest inedible stalks into mushroom protein, secrete organic acids to unlock rock minerals (Myco_tissue_RNAseq), and biomanufacture medicines via mapped Biosynthetic Gene Clusters (fungal-bgc-atlas).",
            "Grounded by 180 years of Rothamsted Broadbalk organic soil resilience and Antarctica's EDEN ISS greenhouse—which grew 268 kg of fresh vegetables in one icy year!"
        ],
        "take_home": "Nothing in nature is ever wasted! With fungi, smart ceramics, friendly microbes, and Earth's deepest farming wisdom, even lifeless Moon dust can bloom.",
        "mission_activity": "Explore AstroRegolith, fungal-bgc-atlas, and ISS_EDEN to inspect real Apollo sample oxide chemistry and see how biodiversity stabilizes a lunar farm.",
        "source_comic_ids": [
            "Mycoponics_Perspective",
            "lunar-regolith-blss-review",
            "AstroRegolith",
            "ares-curation",
            "AstroMycology",
            "fungal-bgc-atlas",
            "Myco_tissue_RNAseq",
            "Microbiome_of_seedlings_in_space",
            "osdr-plant-microbiome",
            "Rothamsted_BroadBaulk",
            "ISS_EDEN",
            "LunarFarm-BLSS"
        ],
        "pages": [
            {
                "page_number": 1,
                "act": "Act I — The Hostile Dust",
                "beat_title": "Why Raw Apollo Regolith Bites Back",
                "scene_key": "vol07_p01_raw_apollo_regolith",
                "sfx": {"text": "SCRAPE—STING!", "x": 72, "y": 15, "rotate": 5, "variant": "marvel-impact"},
                "director": {
                    "shot": "Stark, dramatic Marvel macro-meets-lunar-surface splash: jagged glassy grey Apollo basalt shards bristle under harsh sunlight as a fragile seedling's roots glow with fiery red oxidative stress.",
                    "lighting": "Unforgiving charcoal-silver regolith glare clashing against crimson-orange metallic stress sparks at the root hairs.",
                    "pacing": "Raw geological menace—respecting how brutally hard lunar soil really is.",
                    "data_story_note": "Highlights AstroRegolith & ares-curation: mature Apollo 11 regolith contains sharp nanophase iron/titanium glass that triggers salt, metal, and oxidative stress genes."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "OUCH! Moon dust isn't soft beach sand—it's microscopic jagged glass smashed by billions of tiny meteor hits, with zero living soil microbes!",
                    "ms": "ASTROREGOLITH & ARES CURATION. Real Apollo 11 dust packed with sharp iron-titanium oxides slows plant growth and fires intense metal and oxidative stress alarms!",
                    "hs": "EXTRATERESTRIAL SUBSTRATE BOTTLENECK. Mature lunar regolith (high I_s/FeO maturity, glassy agglutinates, nanophase Fe⁰) induces severe ROS, metal-ion, and osmotic root stress."
                },
                "bubbles": [
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-left",
                        "k5": "Yikes! This Moon dust is razor-sharp, super salty, and has ZERO earthworms or compost—how can anyone grow a garden in crushed glass?!",
                        "ms": "Apollo 11 mature regolith is stressing every root cell I have! We can't ship tons of Earth dirt on rockets—so how do we tame Moon rock?",
                        "hs": "ARES oxide analyses show Si, Fe, Ti, and Ca locked in unweathered mineral lattices—bio-unavailable without physical and biological alchemy!"
                    },
                    {
                        "speaker": "myco",
                        "speaker_name": "Myco",
                        "anchor": "bottom-right",
                        "k5": "Step aside, little green friend! Give me a hot kiln and a pile of crop leftovers—we're about to turn Moon dust into magic!",
                        "ms": "Four hundred million years ago, my fungal ancestors turned Earth's bare volcanic rock into the very first soil. Ready for round two on the Moon?",
                        "hs": "First we sinter raw dust into safe porous ceramics—then my mycelial hyphae go to work weathering minerals and closing the nutrient loop!"
                    }
                ],
                "data_hud": {
                    "headline": "Apollo Lunar Regolith Chemistry & Stress",
                    "equation": "Raw Regolith (SiO₂, FeO, TiO₂, npFe⁰) → Root ROS & Metal Stress",
                    "metric": "Apollo 11/12/17 Real Sample Meta-Analysis",
                    "dataset": "AstroRegolith & ares-curation",
                    "explanation": "Unprocessed lunar regolith lacks organic matter and causes heavy oxidative/ionic stress in seedlings, requiring physical sintering and biological conditioning.",
                    "linked_comic_id": "AstroRegolith"
                }
            },
            {
                "page_number": 2,
                "act": "Act I — Fire Turns Dust to Pottery",
                "beat_title": "Sintered Regolith Ceramics & Capillary Wicks",
                "scene_key": "vol07_p02_sintered_ceramics",
                "sfx": {"text": "FUSE—GLOW!!", "x": 74, "y": 14, "rotate": -6, "variant": "marvel-solarpunk"},
                "director": {
                    "shot": "Heroic Solarpunk Marvel forge cutaway! Concentrated sunlight sinters sharp grey lunar dust into glowing terracotta-bronze porous ceramic pots that pull sparkling blue water cleanly upward.",
                    "lighting": "Molten kiln amber-orange glowing against cool lunar basalt shadows and crisp sparkling sapphire capillary water channels.",
                    "pacing": "Satisfying craft transformation—turning a hazard into an engineering tool.",
                    "data_story_note": "Highlights lunar-regolith-blss-review: tuning sintering temperature and pore geometry creates strong, reusable ceramic wicks delivering water and O₂ safely in 0.166g."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "BAKING MOON DUST INTO PLANT POTS! Focused sunlight melts sharp lunar dust into smooth, sponge-like terracotta bricks that drink water neatly!",
                    "ms": "SINTERED REGOLITH CERAMICS. By tuning furnace heat and microscopic pore size, lunar dust becomes reusable capillary wicks—zero floating water blobs, plenty of root oxygen!",
                    "hs": "ISRU CERAMIC SUBSTRATE ENGINEERING. Controlled partial sintering fuses hazardous dust fines into open-pore terracotta matrices governed by Young-Laplace capillary transport."
                },
                "bubbles": [
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-left",
                        "k5": "No more sharp dust flying into our spacesuits, AND water climbs smoothly right up through the ceramic pores to every root!",
                        "ms": "Tuning pore size balances water wicking with air pockets so roots never drown—and we build the whole farm from local Moon rock!",
                        "hs": "Zero Earth-mass imported for grow trays! Reusable sintered ceramics solve both lunar dust mitigation and low-gravity fluid containment."
                    },
                    {
                        "speaker": "myco",
                        "speaker_name": "Myco",
                        "anchor": "bottom-right",
                        "k5": "Now THAT is a cozy home! Watch my glowing golden threads weave through these warm ceramic pores—it's MYCOPONICS time!",
                        "ms": "Ceramics tame the dust—now my living fungal web will wake up the chemistry inside!",
                        "hs": "Ready to inoculate the sintered porous matrix with solid-state mycelial networks for active mineral mobilization."
                    }
                ],
                "data_hud": {
                    "headline": "Sintered Lunar Regolith Capillary Ceramics",
                    "equation": "h_cap = 2 γ cos(θ) / (ρ g_Moon r_pore)",
                    "metric": "Reusable Porous Wicks · Zero Free-Liquid Sloshing",
                    "dataset": "lunar-regolith-blss-review",
                    "explanation": "Partially sintering lunar regolith locks hazardous dust into breathable ceramic planters whose tuned pores deliver water and oxygen evenly at 0.166g.",
                    "linked_comic_id": "lunar-regolith-blss-review"
                }
            },
            {
                "page_number": 3,
                "act": "Act II — The Glowing Underground Web",
                "beat_title": "Mycoponics: Fungi & Plants Partner Up",
                "scene_key": "vol07_p03_mycoponics_web",
                "sfx": {"text": "WEAVE—BLOOM!", "x": 72, "y": 15, "rotate": -4, "variant": "marvel-solarpunk"},
                "director": {
                    "shot": "Mythic underground Marvel Solarpunk cutaway! Glowing golden fungal hyphae wrap tenderly around emerald plant roots inside bronze sintered rock, dissolving mineral gems with turquoise organic-acid droplets while golden oyster mushrooms sprout from recycled stalks.",
                    "lighting": "Bioluminescent gold, warm terracotta, vibrant emerald, and shimmering turquoise acid pearls glowing inside dark lunar stone.",
                    "pacing": "Lush, magical wonder—revealing fungi as nature's ultimate circular-economy engineers.",
                    "data_story_note": "Synthesizes Mycoponics_Perspective, Myco_tissue_RNAseq, and AstroMycology: fungal tissues specialize like organs to unlock minerals, stop water sloshing, and turn inedible stalks into mushroom protein!"
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "MEET MYCOPONICS—THE ULTIMATE SPACE TEAM-UP! Myco's glowing threads eat leftover plant stems, unlock rock minerals, and sprout tasty space mushrooms!",
                    "ms": "FUNGAL TISSUES SPECIALIZE LIKE ORGANS. Myco_tissue_RNAseq reveals specialized hyphae pumping organic acids into rock while fruiting bodies pack rich protein overhead!",
                    "hs": "MYCOPONIC BIOREGENERATION. High surface-area-to-volume mycelial matrices (AstroMycology 3D) immobilize fluids, upcycle lignocellulose waste, and weather regolith ions."
                },
                "bubbles": [
                    {
                        "speaker": "myco",
                        "speaker_name": "Myco",
                        "anchor": "bottom-left",
                        "k5": "Astronauts can't eat tough wheat stalks or tomato stems—but I LOVE them! I recycle every scrap into delicious mushrooms and plant food!",
                        "ms": "My underground threads secrete gentle organic acids that unlock trapped iron and phosphorus right out of crushed Moon rock!",
                        "hs": "3D surface-area-to-volume optimization maximizes nutrient scavenging while my hyphal network binds water safely against low-g sloshing!"
                    },
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-right",
                        "k5": "I trade you sweet leaf sugars, and you hand me unlocked Moon minerals—best roommates in the universe!",
                        "ms": "And wait until Commander Astra sees what ELSE Myco's DNA can brew when astronauts run low on medicine millions of miles from a pharmacy!",
                        "hs": "Symbiotic carbon-for-mineral exchange turns lifeless mineral substrate into a living rhizosphere!"
                    }
                ],
                "data_hud": {
                    "headline": "Mycoponics & Fungal Tissue Specialization",
                    "equation": "Inedible Lignocellulose + Regolith → Mushroom Protein + Bioavailable Ions",
                    "metric": "Tissue-Specific RNA-seq + 3D Surface-to-Volume Scans",
                    "dataset": "Mycoponics_Perspective, Myco_tissue_RNAseq & AstroMycology",
                    "explanation": "Fungal mycelium recycles tough crop waste into edible protein, prevents water sloshing, and unlocks trapped rock minerals for partnered plant roots.",
                    "linked_comic_id": "Mycoponics_Perspective"
                }
            },
            {
                "page_number": 4,
                "act": "Act II — The Living Pharmacy & Probiotic Allies",
                "beat_title": "Fungal Gene Clusters & Friendly Space Microbes",
                "scene_key": "vol07_p04_bgc_microbiome",
                "sfx": {"text": "SYNTHESIZE!!", "x": 74, "y": 14, "rotate": 5, "variant": "marvel-solarpunk"},
                "director": {
                    "shot": "Bioluminescent micro-factory spread inside glowing fungal and root chambers: crystalline amber/violet pharmaceutical molecules assemble alongside silver-blue probiotic Sphingomonas and Paenibacillus allies guarding root hairs.",
                    "lighting": "Jewel-toned amber, violet, and cyan glowing bio-reactors interwoven with pearlescent root hairs.",
                    "pacing": "High-tech biological marvel—showing life as a programmable space factory.",
                    "data_story_note": "Synthesizes fungal-bgc-atlas (MIBiG PKS/NRPS/terpene biosynthetic gene clusters) and Microbiome_of_seedlings_in_space / osdr-plant-microbiome."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "NO CORNER DRUGSTORE ON THE MOON! Good thing fungi carry tiny DNA 'recipe factories' that can brew vitamins and medicines on demand!",
                    "ms": "THE FUNGAL BGC ATLAS & SPACE MICROBIOME. Mapped PKS/NRPS gene clusters turn fungi into mini-pharmacies while friendly bacteria coat seeds like tiny bodyguards!",
                    "hs": "BIOMANUFACTURING & PROBIOTIC SYNCOMS. Curated MIBiG fungal BGCs enable on-demand secondary metabolites while space-resilient Sphingomonas and Paenibacillus protect seedlings."
                },
                "bubbles": [
                    {
                        "speaker": "myco",
                        "speaker_name": "Myco",
                        "anchor": "bottom-left",
                        "k5": "Need an antibiotic, a vitamin, or a tough bio-brick glue? Pick the right fungal strain from our Gene Cluster Atlas and watch me brew it!",
                        "ms": "Hundreds of fungal species carry PKS, NRPS, and terpene factories—solid-state biomanufacturing right inside the habitat!",
                        "hs": "Mapping biosynthetic gene clusters lets crews grow fresh therapeutics on the Moon instead of watching Earth pills expire in cosmic radiation."
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B (Hologram)",
                        "anchor": "bottom-right",
                        "k5": "And don't forget the friendly bacteria! Spaceflight favors helpful microbes like Sphingomonas that cheer on plant roots and block nasty germs!",
                        "ms": "Coating lunar seeds with space-tested probiotic teams—nitrogen-helpers plus pathogen-blockers—keeps the whole garden safe and thriving!",
                        "hs": "OSDR microbiome meta-analysis guides synthetic probiotic consortia tailored to stay beneficial under low-gravity fluid physics."
                    }
                ],
                "data_hud": {
                    "headline": "Fungal BGC Biomanufacturing & Space Probiotics",
                    "equation": "MIBiG BGCs (PKS/NRPS/Terpenes) + Probiotic Seed Coat",
                    "metric": "Hundreds of Fungal Strains · Sphingomonas & Paenibacillus",
                    "dataset": "fungal-bgc-atlas & osdr-plant-microbiome",
                    "explanation": "Fungi synthesize vital therapeutics on demand while space-resilient beneficial root bacteria promote growth and outcompete opportunistic pathogens.",
                    "linked_comic_id": "fungal-bgc-atlas"
                }
            },
            {
                "page_number": 5,
                "act": "Act III — Wisdom of Earth's Oldest Field & Coldest Greenhouse",
                "beat_title": "180 Years at Rothamsted Meets Antarctica's EDEN ISS",
                "scene_key": "vol07_p05_rothamsted_eden_split",
                "sfx": {"text": "268 KG HARVEST!", "x": 70, "y": 14, "rotate": -4, "variant": "marvel-epic"},
                "director": {
                    "shot": "Breathtaking split-world Earth Heritage spread! Left: sun-drenched golden English wheat swaying across 180-year-old dark living soil at Rothamsted. Right: the glowing EDEN ISS greenhouse container shining amid vast sapphire-white Antarctic ice overflowing with fresh greens.",
                    "lighting": "Warm nostalgic golden wheat on the left colliding dramatically with crisp glacial cyan-white ice and vibrant indoor emerald-red vegetable glow on the right.",
                    "pacing": "Grounding and awe-inspiring—anchoring lunar dreams in centuries of real Earth proof.",
                    "data_story_note": "Synthesizes Rothamsted_BroadBaulk (180 years of organic/mineral soil resilience) and ISS_EDEN (OSD-895 Antarctica greenhouse yielding 268 kg of fresh veggies in one polar year)."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "BEFORE WE FARM THE MOON, WE LEARN FROM EARTH'S GREATEST TEACHERS! A 180-year-old wheat field in England AND a glowing veggie box in icy Antarctica!",
                    "ms": "ROTHAMSTED BROADBALK × EDEN ISS ANTARCTICA. 180 years of data prove organic recycling weathers droughts—while EDEN ISS grew 268 kg of fresh food in polar darkness!",
                    "hs": "LONG-TERM AGRO-ECOSYSTEM BENCHMARKS. Coupling Rothamsted's 180-year carbon/mineral resilience with EDEN ISS (OSD-895) closed-container yields anchors lunar BLSS design."
                },
                "bubbles": [
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-left",
                        "k5": "180 years of Rothamsted harvests teach one golden rule: keep feeding the living soil with organic leftovers and balanced minerals, and the farm never quits!",
                        "ms": "And down in frozen Antarctica—our closest Earth twin to a Moon base—one shipping-container greenhouse grew 268 kilograms of crisp veggies in a single year!",
                        "hs": "Rothamsted proves multi-decade organic carbon buffering while EDEN ISS proves high-density controlled-environment yields under extreme isolation."
                    },
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-right",
                        "k5": "268 kilograms of fresh lettuce, cucumbers, peppers, and herbs in the middle of Antarctic ice?! Now let's bring that magic to our lunar lava tube!",
                        "ms": "Biodiversity isn't a luxury—mixing fast microgreens, staple crops, and fungal recyclers protects the whole base if any single crop struggles!",
                        "hs": "LunarFarm-BLSS modeling confirms polyculture + mycoponic decomposition dramatically buffers carbon, water, and calorie fluctuations."
                    }
                ],
                "data_hud": {
                    "headline": "180 Years of Soil + 268 kg/yr Polar Proof",
                    "equation": "Organic Recycling (180 yr) + Polar CEA (268 kg/yr) → Lunar BLSS",
                    "metric": "Rothamsted Broadbalk + Antarctica EDEN ISS (OSD-895)",
                    "dataset": "Rothamsted_BroadBaulk & ISS_EDEN",
                    "explanation": "Earth's longest-running agricultural experiment and Antarctica's space-analog greenhouse provide proven blueprints for resilient extraterrestrial farms.",
                    "linked_comic_id": "ISS_EDEN"
                }
            },
            {
                "page_number": 6,
                "act": "Act III — The Living Lava Tube",
                "beat_title": "From Dead Moon Dust to a Solarpunk Oasis",
                "scene_key": "vol07_p06_solarpunk_lava_tube",
                "sfx": {"text": "LIFE AWAKENS!", "x": 72, "y": 14, "rotate": -3, "variant": "marvel-triumph"},
                "director": {
                    "shot": "Soaring Marvel Solarpunk finale spread! Inside a cathedral-scale lunar lava tube, terraced sintered-terracotta arches overflow with microgreens, wheat, and glowing golden mushrooms while Astra and Doc B (hologram) survey the thriving underground ecosystem.",
                    "lighting": "Sun-pipe golden skylight shafts streaming through terracotta ceramic arches onto emerald foliage and glowing amber fungal webs.",
                    "pacing": "Mythic triumph—dead grey dust transformed into warm Solarpunk abundance.",
                    "data_story_note": "Unites sintered ceramics, mycoponics, fungal BGCs, probiotics, and crop biodiversity—preparing the segue to Vol. 08 (how these space foods protect astronaut health!)."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "BEHOLD THE LUNAR OASIS! What started as sharp, lifeless Moon dust is now a warm underground garden buzzing with plants, glowing mushrooms, and friendly microbes!",
                    "ms": "FROM DUST TO LIFE. Sintered regolith ceramics, Myco's living nutrient web, and biodiverse crops turn barren lunar basalt into a self-renewing habitat.",
                    "hs": "DEEP SPACE AGRICULTURE CO-DESIGN. Integrating chamber physics, ISRU sintered substrates, mycoponic waste cycling, and multi-crop portfolios closes the lunar material loop."
                },
                "bubbles": [
                    {
                        "speaker": "myco",
                        "speaker_name": "Myco",
                        "anchor": "bottom-left",
                        "k5": "Told you so! Give me Moon dust and crop scraps, and I'll weave you a living home beneath the craters!",
                        "ms": "Zero wasted stalks, zero floating puddles, unlocked minerals, fresh medicines—nature's circular economy works anywhere in the cosmos!",
                        "hs": "Next question, Commander Astra: now that the space farm is bursting with super-nutritious greens, what happens INSIDE your body when you eat them in space?!"
                    },
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-right",
                        "k5": "Time to shrink down and dive straight into my own muscles and bloodstream—let's see how space food fights back for Crew Vital!",
                        "ms": "From soil to salad to astronaut cells—our next adventure shrinks to microscopic scale inside the human body!",
                        "hs": "Closing the human-plant loop: up next, Crew Vital explores cross-species mitochondria, muscle countermeasures, and space nutrition!"
                    }
                ],
                "data_hud": {
                    "headline": "Lunar Farm Closed-Loop Biodiversity",
                    "equation": "Regolith Ceramics + Myco + Probiotics + Polyculture = Resilience",
                    "metric": "Integrated Deep Space Agriculture Blueprint",
                    "dataset": "LunarFarm-BLSS & DeepSpaceAg",
                    "explanation": "Co-designing physical ceramics, fungal recycling, beneficial microbes, and diverse crops transforms lunar regolith into a resilient food and medicine engine.",
                    "linked_comic_id": "LunarFarm-BLSS"
                }
            }
        ]
    },

    # =========================================================================
    # VOLUME 08 — BIO-ACTION MEDICAL MANGA (CELLS AT WORK! INSPIRED)
    # =========================================================================
    {
        "volume": 8,
        "id": "vol-08-crew-vital",
        "slug": "vol-08-crew-vital",
        "title": "CREW VITAL",
        "subtitle": "The Molecular Counterattack",
        "tagline": "Inside an astronaut's cells, spaceflight drains the engines—until fresh space greens fight back.",
        "art_style_family": "manga",
        "art_style_label": "Bio-Action Medical Manga (Cells at Work! Style)",
        "art_style_notes": "High-energy anatomical manga inkwork inspired by Cells at Work!: vibrant crimson muscle cutaways, heroic microscopic phytochemical warriors, glowing mitochondrial power cores, and sleek clinical biomarker HUDs.",
        "worlds": ["ISS", "Earth"],
        "perspectives": ["Astronaut", "Mission Control"],
        "cast": ["astra", "doc-b", "pixel", "sprout"],
        "theme_color": "#dc2626",
        "accent_color": "#34d399",
        "ngss": "MS-LS1-3 · HS-LS1-3 · HS-LS1-7 · MS-LS1-7",
        "big_finds": [
            "Across 22 NASA OSDR datasets spanning 6 species (plants, flies, worms, mice, fish, humans), spaceflight triggers one universal biological signature: mitochondrial oxidative-phosphorylation power-down!",
            "In astronauts, microgravity activates ubiquitin-proteasome muscle-breakdown genes (Atrogin-1/MuRF1) and shifts kidney/gut/bone calcium, magnesium, potassium, and phosphorus transporters (SpaceMineralAtlas vs. NHANES).",
            "Using LINCS L1000 'Opposite Forcing', fresh plant flavonoids, sulforaphane (broccoli/radish sprouts), and carotenoids drive gene-expression shifts that directly OPPOSE spaceflight atrophy signatures!",
            "JAXA plasma cell-free RNA (OSD-530) enables non-invasive tracking alongside transparent pre-registered biomarker plans—paired with low-gravity Capoeira biomechanics (Roda Orbital) to protect bone and core strength."
        ],
        "take_home": "Beneath our leaves, fur, or spacesuits, all life shares the same ancient cellular powerhouses—and fresh space-grown plants are our living medicine chest on the road to Mars!",
        "mission_activity": "Explore OSDR_X-species_V2 and Astronaut_brain_food to see which mitochondrial genes shift in both plants and humans—and which space veggies best reverse muscle-loss signatures!",
        "source_comic_ids": [
            "OSDR_X-species_V2",
            "Muscle-Atrophy-Multi-Omics-OSDR",
            "Astronaut_brain_food",
            "SpaceMineralAtlas",
            "OSDR-Veggie-Nutrition-Dashboard",
            "astronaut-mineral-final",
            "Astronaut_flavenoids_and_biomarkers",
            "astronaut-oncogene-biomarkers",
            "Astronaut_trends",
            "Roda_Orbital_Capoeira"
        ],
        "pages": [
            {
                "page_number": 1,
                "act": "Act I — Six Species, One Cosmic Secret",
                "beat_title": "The Universal Mitochondrial Power-Down",
                "scene_key": "vol08_p01_six_species_mito",
                "sfx": {"text": "POWER—DIMMING!", "x": 72, "y": 15, "rotate": -6, "variant": "manga-bio"},
                "director": {
                    "shot": "Iconic Bio-Action Manga mandala spread! Six glowing species silhouettes (plant, fly, worm, mouse, fish, astronaut) ring a colossal central mitochondrion whose golden energy turbines flicker dim blue in zero-G.",
                    "lighting": "Dramatic crimson-indigo biological backdrop electrified by flickering amber-to-blue mitochondrial power cores.",
                    "pacing": "Staggering evolutionary revelation—unifying all kingdoms of life in one unforgettable frame.",
                    "data_story_note": "Visualizes OSDR_X-species_V2 (22 NASA OSDR datasets × 6 species) and plant-mitocarta: conserved Complex I–V oxidative phosphorylation slowdown across plants and animals!"
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "WHAT DO A TINY GREEN SPROUT, A FRUIT FLY, A MOUSE, AND AN ASTRONAUT HAVE IN COMMON IN SPACE? Inside EVERY ONE of their cells, the tiny battery engines slow down!",
                    "ms": "22 NASA OSDR DATASETS · 6 SPECIES META-ANALYSIS. Plants and humans look totally different—yet spaceflight hits the EXACT same ancient cellular powerhouses: mitochondria!",
                    "hs": "CONSERVED CROSS-KINGDOM SPACEFLIGHT SIGNATURE. Orthology mapping across 6 species proves Complex I–V oxidative phosphorylation suppression coupled with redox/ribosome stress."
                },
                "bubbles": [
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-left",
                        "k5": "Look at that glowing map, Astra! Beneath leaves, fur, or spacesuits, all Earth life shares the same ancient energy engines—and zero-G dims them all!",
                        "ms": "Studying space plants isn't separate from astronaut medicine—plants and humans face the exact same mitochondrial slowdown in orbit!",
                        "hs": "Plant MitoCarta and OSDR Cross-Species V2 converge on one master hub: mitochondrial electron-transport remodeling under spaceflight stress."
                    },
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-right",
                        "k5": "Whoa! On a 6-month ISS stay—or a 3-year trip to Mars—what happens inside MY muscles and bones when those engines dim down?!",
                        "ms": "Mission duration matters! Transitioning from 14-day Shuttle flights to 180+ day orbital stays hits muscles, bones, and minerals hard—let's zoom inside!",
                        "hs": "Astronaut Trends data confirm multi-month adaptation windows demand proactive molecular countermeasures, not just reactive care."
                    }
                ],
                "data_hud": {
                    "headline": "Cross-Species Mitochondrial Power-Down",
                    "equation": "6 Species × 22 OSDR Studies ⇒ OXPHOS Complex I–V ↓, ROS ↑",
                    "metric": "Universal Plant-to-Human Spaceflight Signature",
                    "dataset": "OSDR_X-species_V2 & plant-mitocarta",
                    "explanation": "Orthology mapping across plants, invertebrates, rodents, and humans reveals conserved mitochondrial suppression as a central hub of spaceflight stress.",
                    "linked_comic_id": "OSDR_X-species_V2"
                }
            },
            {
                "page_number": 2,
                "act": "Act I — Red Alert in the Muscle Fibers",
                "beat_title": "Atrogin-1, MuRF1 & The Escaping Minerals",
                "scene_key": "vol08_p02_muscle_atrophy_battle",
                "sfx": {"text": "CRACKLE—DRAIN!!", "x": 70, "y": 14, "rotate": 7, "variant": "manga-bio"},
                "director": {
                    "shot": "High-octane *Cells at Work!* bio-action manga battle inside Commander Astra's weightless leg muscle! Jagged crimson ubiquitin-proteasome jaws gnaw at slack muscle fibers while white calcium and magnesium sparks drift out of porous bone lattices.",
                    "lighting": "Pulsing crimson alarm glow contrasting ivory bone lattices and electric-blue mineral trails escaping into the bloodstream.",
                    "pacing": "Urgent anime crisis beat—making invisible physiological decline dramatically clear.",
                    "data_story_note": "Synthesizes Muscle-Atrophy-Multi-Omics-OSDR (Atrogin-1/MuRF1), SpaceMineralAtlas, and astronaut-mineral-final (NHANES percentiles)."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "RED ALERT INSIDE ASTRONAUT MUSCLES! Without heavy gravity making your legs work, cleanup crews start breaking down unused muscle and leaking bone calcium!",
                    "ms": "ATROPHY & MINERAL DRIFT. Microgravity switches on Atrogin-1 and MuRF1 muscle-breakdown genes while SpaceMineralAtlas tracks calcium and magnesium slipping away!",
                    "hs": "UBIQUITIN-PROTEASOME & ELECTROLYTE REMODELING. Unloading activates TRIM63 (MuRF1)/FBXO32 (Atrogin-1) alongside renal/intestinal Ca, Mg, K, and P transporter shifts vs. NHANES."
                },
                "bubbles": [
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel (Medical HUD)",
                        "anchor": "bottom-left",
                        "k5": "Warning! Atrogin-1 chompers are dismantling idle muscle cables, and bone calcium is floating out toward the kidneys!",
                        "ms": "Overlaying astronaut electrolyte markers onto Earth NHANES percentiles pinpoints the exact weeks when urinary calcium spikes and bone minerals dip!",
                        "hs": "Kidney stone risk and osteopenia escalate as Ca²⁺ and Mg²⁺ balance shifts—we need real-time non-invasive monitoring AND a molecular shield!"
                    },
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-right",
                        "k5": "Not on my watch! First let's track every signal in real time with just a tiny drop of plasma—then unleash the veggie counterattack!",
                        "ms": "Good thing JAXA's cell-free RNA lets us read what my organs are doing without invasive biopsies!",
                        "hs": "Deploying non-invasive plasma cfRNA liquid biopsy monitoring paired with pre-registered biomarker rigor."
                    }
                ],
                "data_hud": {
                    "headline": "Muscle Atrophy & Space Mineral Atlas",
                    "equation": "Unloading → Atrogin-1/MuRF1 ↑ + Renal Ca/Mg Excretion ↑",
                    "metric": "Astronaut Trajectories Benchmarked vs. NHANES",
                    "dataset": "Muscle-Atrophy-Multi-Omics-OSDR & SpaceMineralAtlas",
                    "explanation": "Microgravity accelerates muscle protein breakdown and alters calcium, magnesium, potassium, and phosphorus transporters across kidney, gut, and bone.",
                    "linked_comic_id": "SpaceMineralAtlas"
                }
            },
            {
                "page_number": 3,
                "act": "Act II — Reading Messages in a Drop of Plasma",
                "beat_title": "JAXA Cell-Free RNA & Honest Biomarker Science",
                "scene_key": "vol08_p03_cfrna_liquid_biopsy",
                "sfx": {"text": "PING—DECODE!", "x": 74, "y": 15, "rotate": -5, "variant": "manga-cyber"},
                "director": {
                    "shot": "Sleek clinical manga spread: a single glowing drop of plasma suspended in Pixel's cyan laser scanner unfurls into shimmering golden cell-free RNA waveforms monitored by Doc B.",
                    "lighting": "Clean medical sapphire and luminous golden RNA strands against crisp dark bio-console panels.",
                    "pacing": "Focused diagnostic calm—emphasizing scientific honesty and pre-registration.",
                    "data_story_note": "Highlights Astronaut_flavenoids_and_biomarkers (JAXA OSD-530 cfRNA) and astronaut-oncogene-biomarkers (pre-registered transparent analysis preventing false alarms)."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "MESSAGES FLOATING IN A SINGLE DROP! Tiny RNA whispers floating in astronaut blood plasma tell doctors how the body is adapting—pre-flight, in space, and back home!",
                    "ms": "JAXA CELL-FREE RNA (OSD-530) & HONEST SCIENCE. Non-invasive liquid biopsies track orbital adaptation—and publishing the test plan upfront prevents false alarms!",
                    "hs": "PRE-REGISTERED BIOMARKER RIGOR. Longitudinal JAXA cfRNA profiling paired with transparent pre-specified oncogene/stress panels guards against p-hacking in small crew cohorts."
                },
                "bubbles": [
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-left",
                        "k5": "With only a handful of astronauts in space, honest science is super important! We lock our checklist BEFORE looking at the final numbers so we never chase false alarms!",
                        "ms": "JAXA OSD-530 cell-free RNA tracks pre-flight, in-flight, and recovery shifts cleanly—giving us an early-warning dashboard for crew health!",
                        "hs": "Self-correcting QA and pre-registered panels keep human spaceflight genomics trustworthy when N is small and stakes are life-critical."
                    },
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel",
                        "anchor": "bottom-right",
                        "k5": "Now for the coolest part, Commander! Running 'Opposite Forcing'—searching for natural plant compounds that flip those stress genes BACKWARD!",
                        "ms": "Cross-matching astronaut stress signatures against LINCS L1000 nutrition libraries... EUREKA! Look which molecules score highest!",
                        "hs": "Connectivity-map reversal scores are spiking! Dietary phytochemicals directly oppose spaceflight muscle-atrophy and neuro-oxidative modules!"
                    }
                ],
                "data_hud": {
                    "headline": "Plasma cfRNA & Pre-Registered Biomarkers",
                    "equation": "Pre-Flight → In-Flight → Post-Flight cfRNA (JAXA OSD-530)",
                    "metric": "Non-Invasive Tracking + Pre-Registered Rigor",
                    "dataset": "Astronaut_flavenoids_and_biomarkers & astronaut-oncogene-biomarkers",
                    "explanation": "Cell-free RNA in plasma tracks physiological adaptation non-invasively while pre-registered analysis plans prevent false discoveries in small astronaut cohorts.",
                    "linked_comic_id": "Astronaut_flavenoids_and_biomarkers"
                }
            },
            {
                "page_number": 4,
                "act": "Act II — Opposite Forcing: Veggies Charge In!",
                "beat_title": "Sulforaphane & Flavonoids Flip the Switch!",
                "scene_key": "vol08_p04_phytochemical_charge",
                "sfx": {"text": "COUNTER—BOOST!!", "x": 70, "y": 14, "rotate": -8, "variant": "manga-bio"},
                "director": {
                    "shot": "Heroic *Cells at Work!* manga charge! Vibrant emerald broccoli sprouts, purple radishes, and ruby Veggie greens burst into glowing golden-green phytochemical warriors (sulforaphane & flavonoids) roaring down the bloodstream to push back Atrogin-1!",
                    "lighting": "Electrifying emerald-gold energy trails slicing through crimson vessels to reignite golden mitochondrial turbines.",
                    "pacing": "Exhilarating anime turnaround—food transformed into precision molecular heroes!",
                    "data_story_note": "Synthesizes Astronaut_brain_food (LINCS L1000 Opposite Forcing: flavonoids, sulforaphane, omega seeds) and OSDR-Veggie-Nutrition-Dashboard."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "THE SPACE SALAD COUNTERATTACK! Fresh space-grown broccoli sprouts, purple radishes, and leafy greens rush into the bloodstream like tiny golden superheroes!",
                    "ms": "OPPOSITE FORCING (LINCS L1000). Plant flavonoids, sulforaphane, and carotenoids trigger gene shifts that directly REVERSE spaceflight stress and muscle-loss patterns!",
                    "hs": "TRANSCRIPTOMIC SIGNATURE REVERSAL. Sulforaphane (Nrf2 activation), dietary flavonoids, and space-grown Veggie carotenoids invert spaceflight atrophy and neuro-oxidative modules."
                },
                "bubbles": [
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout (Cheering)",
                        "anchor": "bottom-left",
                        "k5": "GO, SULFORAPHANE & FLAVONOIDS! Space-grown greens match—and sometimes even BEAT—Earth greens in antioxidant superpowers!",
                        "ms": "OSDR Veggie Nutrition data prove orbital greens pack booming potassium, carotenoids, and phenolics—turning the greenhouse into a preventive clinic!",
                        "hs": "Opposite-forcing connectivity scores confirm fresh cruciferous sprouts and colored greens counter both mitochondrial oxidative load and catabolic signaling!"
                    },
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-right",
                        "k5": "Fuel tank topped up with fresh space microgreens—now let's pair super-nutrition with the coolest low-gravity workout in the galaxy!",
                        "ms": "Nutrition protects the chemistry, and dynamic movement loads the bones and core! Stepping into the lunar-gravity training ring!",
                        "hs": "Synergistic countermeasure: combining targeted phytochemical intake with angular-momentum mechanical bone loading!"
                    }
                ],
                "data_hud": {
                    "headline": "Opposite-Forcing Nutritional Countermeasures",
                    "equation": "Score_reversal = −corr(ΔGene_spaceflight, ΔGene_phytochemical)",
                    "metric": "Sulforaphane · Flavonoids · Space Veggie Carotenoids",
                    "dataset": "Astronaut_brain_food & OSDR-Veggie-Nutrition-Dashboard",
                    "explanation": "Bioactive molecules in fresh space-grown greens induce gene-expression programs that directly oppose spaceflight muscle atrophy and oxidative stress.",
                    "linked_comic_id": "Astronaut_brain_food"
                }
            },
            {
                "page_number": 5,
                "act": "Act III — Roda Orbital: Flying Through 1/6th Gravity",
                "beat_title": "Low-Gravity Capoeira & Bone-Loading Biomechanics",
                "scene_key": "vol08_p05_roda_orbital_capoeira",
                "sfx": {"text": "WHOOOSH—SPIN!!", "x": 74, "y": 15, "rotate": -7, "variant": "manga-kinetic"},
                "director": {
                    "shot": "Dazzling kinetic sports-manga spread! Inside a sunlit low-gravity habitat ring, Commander Astra executes a soaring aerial Capoeira spin with luminous emerald angular-momentum ribbons tracing her core and landing force vectors.",
                    "lighting": "Dynamic rim-lit athletic silhouette bursting with electric-emerald biomechanics arcs and crisp manga motion lines.",
                    "pacing": "Joyful, rhythmic kinetic flight—celebrating human agility in fractional gravity.",
                    "data_story_note": "Highlights Roda_Orbital_Capoeira: in lunar 0.166g, aerial flips hang 6× longer, requiring new angular-momentum timing while engaging core, balance, and bone-loading landings."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "EXERCISE JUST GOT SIX TIMES MORE AWESOME! In Moon gravity, a Capoeira flip hangs SIX TIMES LONGER in the air—turning workouts into pure flying joy!",
                    "ms": "RODA ORBITAL BIOMECHANICS. Dynamic full-body martial arts and rebounding landings in 0.166g engage core stability, angular momentum, and bone-strengthening impact!",
                    "hs": "FRACTIONAL-G KINEMATICS (RODA ORBITAL). Ballistic hang time scales as 1/g (6× on Moon), challenging vestibular timing while providing multi-axial skeletal and muscular loading."
                },
                "bubbles": [
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-left",
                        "k5": "WOOHOO!! Six seconds of hang-time—engage the core, control the spin, stick the rebound landing! My bones and muscles are cheering!",
                        "ms": "Treadmills get boring on a 3-year voyage—Roda Orbital turns bone-saving biomechanics into rhythm, play, and teamwork!",
                        "hs": "Multi-directional impact loading plus core rotational torque combats both osteopenia and neuromuscular deconditioning!"
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-right",
                        "k5": "Fresh space veggies on the plate plus joyful movement in the gym—look at those mitochondrial engines lighting back up!",
                        "ms": "Every biomarker on Pixel's console just swung back into the green! That's the closed loop between plant biology and human health!",
                        "hs": "Dietary polyphenols + resistive/ballistic biomechanics + cfRNA monitoring = an integrated Crew Vital countermeasure suite."
                    }
                ],
                "data_hud": {
                    "headline": "Roda Orbital Low-Gravity Biomechanics",
                    "equation": "t_hang = 2 v_y / g  ⇒  t_Moon ≈ 6 × t_Earth",
                    "metric": "6× Hang Time · Core, Vestibular & Bone Loading",
                    "dataset": "Roda_Orbital_Capoeira & AstronautHealth",
                    "explanation": "Full-body low-gravity movement arts combine joyful mental engagement with multi-axial core, vestibular, and skeletal loading on lunar and Martian missions.",
                    "linked_comic_id": "Roda_Orbital_Capoeira"
                }
            },
            {
                "page_number": 6,
                "act": "Act III — Engines at Full Power",
                "beat_title": "Healthy Plants, Strong Crew, One Biological Family",
                "scene_key": "vol08_p06_crew_vital_finale",
                "sfx": {"text": "VITALITY 100%!", "x": 72, "y": 14, "rotate": -3, "variant": "manga-triumph"},
                "director": {
                    "shot": "Radiant Bio-Action Manga finale! Commander Astra beams beside the lush ISS Veggie wall while two crisp luminous inset windows show blazing golden mitochondrial power cores and strong crimson muscle bundles flexing at full health.",
                    "lighting": "Vibrant sunrise gold, healthy emerald foliage, and glowing energetic crimson-teal vitality highlights.",
                    "pacing": "Uplifting triumph—closing the human-plant circle before opening the doors to classrooms worldwide in Vol. 09!",
                    "data_story_note": "Synthesizes AstronautHealth Hub: turning the spacecraft greenhouse into a preventive health clinic for deep space."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "ALL ENGINES BLAZING BRIGHT! Healthy space plants keep astronauts strong—and healthy astronauts keep the space garden blooming!",
                    "ms": "THE CREW VITAL LOOP CLOSED. From 6-species mitochondrial maps to sulforaphane super-greens and low-g movement, biology protects its explorers.",
                    "hs": "ASTRONAUT HEALTH THEMATIC SYNTHESIS. Linking multi-omics biomarker discovery directly to targeted space-crop nutrition transforms BLSS greenhouses into preventive medicine."
                },
                "bubbles": [
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-left",
                        "k5": "Feeling unstoppable! Wait—do you have to be an astronaut or a NASA professor to help discover the next big breakthrough?",
                        "ms": "Not a chance! Down on Earth right now, thousands of students with smartphones and cardboard boxes are joining Mission Control!",
                        "hs": "Next stop: Earth's classrooms and community labs—where open phenomics and browser AI turn EVERYONE into a space biologist!"
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-right",
                        "k5": "You heard the Commander! Grab a Petri dish, a cardboard box, and your web browser—the Citizen-Scientist Uprising starts now!",
                        "ms": "Science belongs to everyone. Next volume: Mission Control Everywhere!",
                        "hs": "Bridging orbital biomedical discovery directly to open-source classroom tools and FAIR Jupyter curricula."
                    }
                ],
                "data_hud": {
                    "headline": "Astronaut Health & Preventive Space Agriculture",
                    "equation": "Plant Multi-Omics + Human Biomarkers → Personalized Space Diet",
                    "metric": "Closed Loop Between Crop Chemistry & Crew Physiology",
                    "dataset": "AstronautHealth & Astronaut_trends",
                    "explanation": "Aligning crop nutritional breeding with astronaut biomarker profiles turns onboard greenhouses into personalized preventive healthcare.",
                    "linked_comic_id": "AstronautHealth"
                }
            }
        ]
    },

    # =========================================================================
    # VOLUME 09 — MODERN MARVEL POP-ART / SPIDER-VERSE COLLAGE
    # =========================================================================
    {
        "volume": 9,
        "id": "vol-09-mission-control-everywhere",
        "slug": "vol-09-mission-control-everywhere",
        "title": "MISSION CONTROL EVERYWHERE",
        "subtitle": "The Citizen-Scientist Uprising",
        "tagline": "A cardboard diffuser, a calibration card, and a web browser turn every classroom into NASA Mission Control.",
        "art_style_family": "marvel",
        "art_style_label": "Modern Marvel Pop-Art (Spider-Verse Energy)",
        "art_style_notes": "Electrifying Ben-Day halftone dots, kinetic panel-breaking collage energy, vibrant teal/coral/canary-yellow risograph-meets-Marvel inkwork celebrating joyful classroom discovery.",
        "worlds": ["Earth", "ISS"],
        "perspectives": ["Mission Control"],
        "cast": ["doc-b", "pixel", "sprout"],
        "theme_color": "#0d9488",
        "accent_color": "#fb7185",
        "ngss": "MS-ETS1-2 · HS-ETS1-4 · MS-LS1-5 · HS-LS1-1",
        "big_finds": [
            "A $0 cardboard light diffuser and proper alignment improve automated root-tracing accuracy more than buying an expensive new camera (Space_Photography_Guide.io)!",
            "Placing an ABCD v2 calibration card next to any seedling lets browser computer vision automatically un-tilt perspective, set exact millimeter scale, and standardize leaf color.",
            "Zero-install browser tools—AstroRoot, AstroRoot Painter (human-in-the-loop AI), Germinator AI, CoSE FIJI (ImageJ.JS), Anthocyanin scanners, PathoFluor-At, and Arabidopsis 3D Atlas—put NASA-grade phenomics in every student's hands.",
            "Through AIRI, MadWest student rocket launches, and FAIR OSDR Jupyter Books, students measure their own seedlings and connect real wet-lab phenotypes directly to ISS gene networks!"
        ],
        "take_home": "You don't need a billion-dollar laboratory to be a space biologist—just curiosity, careful measurement, open tools, and a willingness to share what you discover!",
        "mission_activity": "Print or open ABCD_v2, photograph a sprouting bean or radish on a smartphone, trace its root live inside AstroRoot, and inspect your favorite gene in the Arabidopsis 3D Atlas!",
        "source_comic_ids": [
            "ABCD_v2",
            "astroroot",
            "astroroot-painter",
            "germinator-ai",
            "cose-fiji",
            "Anthocyanin-Image-analysis",
            "PathoFluor-At",
            "RatioFluor",
            "arabidopsis-atlas",
            "Space_Photography_Guide.io",
            "madwest-astrobotany",
            "AIRI",
            "OSDR_jupyter_book.io"
        ],
        "pages": [
            {
                "page_number": 1,
                "act": "Act I — The $0 Lab Upgrade",
                "beat_title": "Cardboard Diffusers & The ABCD v2 Magic Card",
                "scene_key": "vol09_p01_classroom_abcd_diffuser",
                "sfx": {"text": "SNAP—CALIBRATE!!", "x": 72, "y": 14, "rotate": -6, "variant": "marvel-pop"},
                "director": {
                    "shot": "Kinetic Spider-Verse pop-art splash inside a vibrant classroom! Students slip a clever white cardboard light-diffuser over a desk lamp beside a Petri dish and colorful mosaic ABCD card as a smartphone snaps a glowing cyan alignment grid.",
                    "lighting": "Punchy teal, coral-red, and canary-yellow Ben-Day halftone highlights bursting around crisp black comic inkwork.",
                    "pacing": "Infectious DIY maker joy—demolishing the myth that real science requires fancy gear.",
                    "data_story_note": "Highlights Space_Photography_Guide.io ($0 cardboard diffuser beats pricey cameras) and ABCD_v2 (automatic perspective un-tilting, millimeter scale, and color correction)."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "NO SUPERCOMPUTER? NO PROBLEM! A free cardboard box light-diffuser and a pocket color card turn ANY smartphone into a NASA plant scanner!",
                    "ms": "SPACE PHOTOGRAPHY GUIDE × ABCD V2. Even glare ruins fancy microscopes—yet a $0 cardboard diffuser plus an ABCD calibration card unlocks razor-sharp precision!",
                    "hs": "OPEN PHENOMICS STANDARDIZATION. Fiducial homography (ArUco) + Munsell color-matrix calibration automatically corrects tilt, millimeter scale, and white balance in-browser."
                },
                "bubbles": [
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-left",
                        "k5": "Secret NASA hack: soft even light through a $0 cardboard diffuser beats a thousand-dollar camera lens every single time!",
                        "ms": "Drop the ABCD v2 card next to your Petri dish—one snap and the browser un-tilts the angle, locks exact millimeters, and calibrates every shade of green!",
                        "hs": "Once every classroom normalizes color and scale with ABCD v2, student photos from Tokyo, Madison, and Nairobi become one unified scientific dataset!"
                    },
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel",
                        "anchor": "bottom-right",
                        "k5": "Beep-boop! Image locked, glare erased, millimeters calibrated—now let's teach an AI right inside your web browser!",
                        "ms": "Zero downloads, zero pricey licenses! Uploading calibrated classroom Petri plates straight into AstroRoot and CoSE FIJI!",
                        "hs": "WebAssembly ImageJ (CoSE FIJI) + browser CV brings full desktop microscopy quantification to any Chromebook or tablet."
                    }
                ],
                "data_hud": {
                    "headline": "$0 Light Diffuser & ABCD v2 Calibration",
                    "equation": "H_homography + M_color_3×3 ⇒ Exact mm Scale & True RGB",
                    "metric": "Smartphone Photo → Research-Grade Phenomics",
                    "dataset": "ABCD_v2 & Space_Photography_Guide.io",
                    "explanation": "Diffused lighting removes harsh reflections while fiducial color cards standardize scale and color automatically across any camera or classroom.",
                    "linked_comic_id": "ABCD_v2"
                }
            },
            {
                "page_number": 2,
                "act": "Act I — Train Your Own AI in Five Minutes",
                "beat_title": "AstroRoot, Painter & Germinator AI",
                "scene_key": "vol09_p02_astroroot_painter",
                "sfx": {"text": "SWISH—LEARN!!", "x": 74, "y": 15, "rotate": 5, "variant": "marvel-pop"},
                "director": {
                    "shot": "Panel-breaking pop-art action! A student's glowing neon-teal stylus strokes across fuzzy roots on a laptop while Pixel erupts outward with luminous traced root skeletons and smooth T50 germination curves.",
                    "lighting": "Vibrant electric-teal, hot-coral, and gold halftone bursts radiating straight off the browser viewport.",
                    "pacing": "Playful instant gratification—watching AI learn from human brushstrokes in real time.",
                    "data_story_note": "Synthesizes astroroot, astroroot-painter (human-in-the-loop training), germinator-ai (T50 germination speed), and cose-fiji (ImageJ.JS)."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "YOU ARE THE AI TEACHER! Paint just a few green root lines on your screen, and watch your custom neural network learn to trace hundreds of roots in seconds!",
                    "ms": "ASTROROOT PAINTER & GERMINATOR AI. In minutes of interactive painting, students train razor-sharp root trackers and measure exact seed sprouting curves (T50)!",
                    "hs": "HUMAN-IN-THE-LOOP BROWSER ML. Interactive corrective annotation refines segmentation networks in real time alongside automated T50 germination kinetics and WebAssembly ImageJ."
                },
                "bubbles": [
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel",
                        "anchor": "bottom-left",
                        "k5": "Ooh, nice brushstroke! Three corrections later and my root-tracing accuracy just jumped from clumsy guesses to laser-sharp precision!",
                        "ms": "AstroRoot traces root curvature against Earth gravity, while Germinator AI spots whether aged or space-stressed seeds sprout slower!",
                        "hs": "Paired with Segment Any Plant time-lapse motion capture and GRooT Root Economics traits, every classroom runs a full phenomics pipeline!"
                    },
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-right",
                        "k5": "Hey, they're measuring my Earth cousins right alongside my ISS flight photos! Now let's check for invisible stress glows!",
                        "ms": "Wait until students switch on the Anthocyanin & Fluorescence scanners—they can see plant stress armor BEFORE the human eye ever notices!",
                        "hs": "Next layer: optical pigment quantification and hyperspectral fluorescence diagnostics right from classroom imagery."
                    }
                ],
                "data_hud": {
                    "headline": "In-Browser Root AI & Germination Kinetics",
                    "equation": "G(t) = G_max / (1 + e^(−k(t − T₅₀)))",
                    "metric": "Human-in-the-Loop AI + Zero-Install ImageJ.JS",
                    "dataset": "astroroot, astroroot-painter & germinator-ai",
                    "explanation": "Students train interactive root-segmentation models and quantify seed vigor (T50) directly in any browser without installing complex software.",
                    "linked_comic_id": "astroroot-painter"
                }
            },
            {
                "page_number": 3,
                "act": "Act II — Seeing the Invisible Glow",
                "beat_title": "Anthocyanin Armor, PathoFluor & Noise Subtraction",
                "scene_key": "vol09_p03_fluorescence_prism",
                "sfx": {"text": "FLUO—DETECT!!", "x": 71, "y": 14, "rotate": -7, "variant": "marvel-pop"},
                "director": {
                    "shot": "Pop-art neon prism spread! A rainbow hyperspectral beam sweeps across a healthy-looking green leaf, revealing hidden glowing magenta pathogen halos and sparkling purple anthocyanin stress shields inside a floating microscope lens.",
                    "lighting": "Ultraviolet-violet, glowing magenta, and emerald fluorescence contrasting crisp white-and-teal lab-notebook comic grids.",
                    "pacing": "Detective awe—giving students X-ray/fluorescence vision into living plants.",
                    "data_story_note": "Synthesizes Anthocyanin-Image-analysis, PathoFluor-At (early invisible pathogen fluorescence + FLS2-independent surprise), and RatioFluor (subtracting camera noise to reveal true 12-hour rhythms)."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "SUPERHERO VISION FOR PLANT DOCTORS! Special light scans spot invisible purple stress armor and sneaky leaf germs DAYS before a plant even looks sick!",
                    "ms": "ANTHOCYANIN & PATHOFLUOR-AT. Students watch purple antioxidant armor build up live—while hyperspectral fluorescence catches hidden pathogen signals normal cameras miss!",
                    "hs": "RATIOMETRIC FLUORESCENCE & PHOTON-TRANSFER MODELING. RatioFluor subtracts camera dark-noise and lamp drift to reveal authentic GFP/mCherry rhythms and FLS2-independent signatures."
                },
                "bubbles": [
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-left",
                        "k5": "Wait—a green leaf can be fighting a tiny germ before it shows a single brown spot! Hyperspectral fluorescence catches it right away!",
                        "ms": "And remember RatioFluor: once you subtract camera static and flickering lamp brightness, true 12-hour day/night biological rhythms pop straight out!",
                        "hs": "PathoFluor-At even uncovered a genuine scientific surprise: an FLS2-independent early fluorescence wave invisible to standard RGB imaging!"
                    },
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel",
                        "anchor": "bottom-right",
                        "k5": "And you don't even have to crush the plant to measure it—keeping your seedlings alive so you can watch them grow every single day!",
                        "ms": "Next up: taking all those measurements and painting them directly onto a giant spinning 3D holographic plant!",
                        "hs": "Launching Arabidopsis 3D Atlas and SBGN Pathway Viewer—connecting real student phenotypes directly to spaceflight multi-omics!"
                    }
                ],
                "data_hud": {
                    "headline": "Non-Destructive Pigment & Fluorescence Vision",
                    "equation": "R_true = (I_GFP − B_dark) / (I_mCherry − B_dark) · C_lamp",
                    "metric": "Early Pathogen Halos · Real-Time Anthocyanin · Noise-Free Ratios",
                    "dataset": "Anthocyanin-Image-analysis, PathoFluor-At & RatioFluor",
                    "explanation": "Calibrated optical imaging detects plant stress armor and early pathogen signatures non-destructively while noise modeling unveils true cellular rhythms.",
                    "linked_comic_id": "PathoFluor-At"
                }
            },
            {
                "page_number": 4,
                "act": "Act II — Hold a 3D Digital Twin in Your Hands",
                "beat_title": "The Arabidopsis 3D Atlas & Gene Trading Cards",
                "scene_key": "vol09_p04_3d_atlas_hologram",
                "sfx": {"text": "ZOOM—3D!!", "x": 74, "y": 15, "rotate": 4, "variant": "marvel-pop"},
                "director": {
                    "shot": "Pop-art holographic spectacle! Rising straight out of a student's open laptop is a translucent crystalline 3D Arabidopsis plant illuminated with glowing emerald, amber, and magenta organ gene-expression heatmaps surrounded by clean vector metabolic pathway rings.",
                    "lighting": "Radiant teal-emerald-magenta 3D glow popping over graphic pop-art halftone rays.",
                    "pacing": "Interactive delight—making intimidating genomics tangible, visual, and collectible.",
                    "data_story_note": "Synthesizes arabidopsis-atlas, rice-atlas, plant-pathway-atlas / SBGN-Pathway-viewer, and eFP-report-generator ('Gene Trading Cards')."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "CLICK ANY LEAF, ROOT, OR FLOWER! Spin a giant 3D glowing plant on your screen and print your own collectible 'Gene Trading Card' in seconds!",
                    "ms": "ARABIDOPSIS 3D ATLAS & PATHWAY VIEWER. Click an organ to color it with real NASA ISS gene and protein shifts—zero coding required to see which enzymes speed up or slow down!",
                    "hs": "INTERACTIVE 3D ANATOMICAL MULTI-OMICS. Bridging procedural 3D organs (Arabidopsis & Rice Atlases), SBGN/KEGG vector metabolic loops, and printable eFP gene dossiers."
                },
                "bubbles": [
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-left",
                        "k5": "Hey—that's ME in 3D! Spin me around and click my roots to see which space genes turned glowing red or cool blue!",
                        "ms": "One click projects real Arabidopsis, tomato, or Brassica spaceflight data onto clean photosynthesis and cell-wall pathway maps!",
                        "hs": "Students move effortlessly from macroscopic 3D organ heatmaps down to enzyme-level SBGN stoichiometry and natural metabolome variation."
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-right",
                        "k5": "And wait till you see what happens when students pack their own seeds into real student-built rockets!",
                        "ms": "Measuring digital data is awesome—launching YOUR OWN seedlings into the sky and comparing them to NASA OSDR is unforgettable!",
                        "hs": "Cue MadWest Astrobotany, AIRI, and the FAIR OSDR Jupyter Book—where students become published citizen space biologists!"
                    }
                ],
                "data_hud": {
                    "headline": "3D Plant Digital Twins & Gene Trading Cards",
                    "equation": "3D Organ Mesh × NASA OSDR Fold-Change → Visual eFP Card",
                    "metric": "Arabidopsis & Rice 3D · SBGN Pathways · Zero Code",
                    "dataset": "arabidopsis-atlas, plant-pathway-atlas & eFP-report-generator",
                    "explanation": "Interactive 3D anatomical atlases and vector metabolic maps make complex spaceflight transcriptomics instantly explorable for every K–12 and college student.",
                    "linked_comic_id": "arabidopsis-atlas"
                }
            },
            {
                "page_number": 5,
                "act": "Act III — Students Launch to the Sky",
                "beat_title": "MadWest Rockets, AIRI & The FAIR Jupyter Book",
                "scene_key": "vol09_p05_student_rocket_launch",
                "sfx": {"text": "FWOOSH—LAUNCH!!", "x": 72, "y": 14, "rotate": -8, "variant": "marvel-pop"},
                "director": {
                    "shot": "Exhilarating outdoor Spider-Verse pop-art launch splash! Diverse cheering high-school and undergrad explorers watch their sleek student sounding rocket streak up a cobalt sky on golden comic smoke while a circular inset shows tiny seed capsules riding the G-forces.",
                    "lighting": "Sun-drenched sky blue, vivid golden smoke clouds, and crisp comic ink celebration silhouettes.",
                    "pacing": "Pure triumph and empowerment—students as real flight principal investigators!",
                    "data_story_note": "Synthesizes madwest-astrobotany (launch G-forces + ABCD root tracking), AIRI / AIR_for_undergrads, and OSDR_jupyter_book.io (step-by-step FAIR Python/PCA recipes)."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "STUDENT ROCKET LIFTOFF! Young explorers launch real seed capsules skyward, measure rocket G-forces, and photograph every sprouting root back on the ground!",
                    "ms": "MADWEST ASTROBOTANY & AIRI. When students measure their own seedlings first, real NASA OSDR gene tables suddenly click—turning classrooms into original research teams!",
                    "hs": "FAIR CITIZEN-SCIENCE PIPELINE. Linking wet-lab rocket germination phenotypes to OSDR Jupyter Book PCA workflows produces original undergraduate research posters."
                },
                "bubbles": [
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-left",
                        "k5": "Look at them go! Those students just measured real rocket G-forces, tracked germination with ABCD cards, and compared their data straight to ISS astronauts!",
                        "ms": "Open the OSDR Jupyter Book and follow step-by-step recipes to download real ISS gene counts, plot PCA clusters, and make your own discovery!",
                        "hs": "AIR for Undergrads and Space Biology Education bridge hands-on bench biology straight into reproducible FAIR cloud bioinformatics."
                    },
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel",
                        "anchor": "bottom-right",
                        "k5": "Wait a second—look at our global Mission Control map! Hundreds of schools around the planet just lit up!",
                        "ms": "Every single student measurement adds another star to our open-science constellation!",
                        "hs": "Telemetry streaming in from classrooms worldwide—proving the future of space exploration won't be built by a few, but by all of us!"
                    }
                ],
                "data_hud": {
                    "headline": "Student Rocketry & FAIR OSDR Curricula",
                    "equation": "Wet-Lab Launch Phenotype + ABCD + OSDR Jupyter PCA = Discovery",
                    "metric": "AIRI · MadWest Rockets · FAIR Open Notebooks",
                    "dataset": "madwest-astrobotany, AIRI & OSDR_jupyter_book.io",
                    "explanation": "Hands-on seed launches paired with guided open-data notebooks turn K–12 and undergraduate students into active contributors to space biology.",
                    "linked_comic_id": "OSDR_jupyter_book.io"
                }
            },
            {
                "page_number": 6,
                "act": "Act III — One Planet, One Mission Control",
                "beat_title": "A Global Constellation Linked to Orbit",
                "scene_key": "vol09_p06_global_classroom_network",
                "sfx": {"text": "CONNECTED!!", "x": 74, "y": 14, "rotate": -3, "variant": "marvel-triumph"},
                "director": {
                    "shot": "Uplifting orbital pop-art finale! Viewed from low Earth orbit, glowing golden-cyan arcs link hundreds of illuminated classrooms across every continent directly up to the ISS while Doc B and Pixel celebrate.",
                    "lighting": "Radiant orbital sapphire Earth laced with glowing gold and emerald citizen-science telemetry arcs under a sparkling starfield.",
                    "pacing": "Heart-swelling solidarity—setting the grand stage for Volume 10's ultimate crossover finale!",
                    "data_story_note": "Connects InfoGenius visual storytelling and CoSE open phenomics to Volume 10's Artemis City grand synthesis."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "MISSION CONTROL IS EVERYWHERE! From kitchen tables to school science rooms on every continent, curious explorers are helping humanity reach the Moon!",
                    "ms": "SCIENCE FOR EVERYONE. Open tools, free calibration cards, and shared NASA data turn every curious mind into a space biologist.",
                    "hs": "GLOBAL DISTRIBUTED MISSION CONTROL. Democratized phenomics and FAIR curricula empower the Artemis generation to co-design humanity's off-world ecosystems."
                },
                "bubbles": [
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-left",
                        "k5": "Now we have EVERY piece of the puzzle—airflow, lunar gravity, decoded genes, quantum shields, space tomatoes, Moon-dust mushrooms, healthy crews, and global classrooms!",
                        "ms": "There's only one challenge left, team: putting ALL NINE breakthroughs together to survive the freezing 14-day lunar night!",
                        "hs": "All heroes, all worlds, all sciences converge—prepare for the Grand Finale: Architects of Artemis City!"
                    },
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel",
                        "anchor": "bottom-right",
                        "k5": "Assembling the full CoSE team—Astronauts, Phytonauts, and Mission Control—destination: ARTEMIS CITY!",
                        "ms": "Booting BioSim Next-Gen and NASA-IBM Lunar Foundation Models! See you at the Moon's South Pole!",
                        "hs": "Volume 10 Crossover initialized: Earth → ISS → Moon closed-loop frontier!"
                    }
                ],
                "data_hud": {
                    "headline": "Open Phenomics & Visual Knowledge Engine",
                    "equation": "Big Question + Mechanism + Open Evidence = Global Impact",
                    "metric": "100% Free Browser-Based Space Biology Toolkit",
                    "dataset": "AIRI, Space_Biology_Education.io & infogenius-standalone",
                    "explanation": "Lowering technical barriers with browser-native science tools transforms passive learners into active explorers of the solar system.",
                    "linked_comic_id": "AIRI"
                }
            }
        ]
    },

    # =========================================================================
    # VOLUME 10 — MARVEL CINEMATIC CROSSOVER EVENT (GRAND FINALE!)
    # =========================================================================
    {
        "volume": 10,
        "id": "vol-10-the-closed-loop-frontier",
        "slug": "vol-10-the-closed-loop-frontier",
        "title": "THE CLOSED-LOOP FRONTIER",
        "subtitle": "Architects of Artemis City",
        "tagline": "One living circle—humans, plants, fungi, and AI surviving the 14-day lunar night together.",
        "art_style_family": "marvel",
        "art_style_label": "Marvel Cinematic Crossover Event",
        "art_style_notes": "Monumental Avengers-event double-page splash compositions: all six CoSE heroes united across golden-hour lunar bio-domes, glowing 4K BioSim blueprints, and deep starry frontiers.",
        "worlds": ["Earth", "ISS", "Moon"],
        "perspectives": ["Astronaut", "Phytonaut", "Mission Control"],
        "cast": ["astra", "doc-b", "sprout", "myco", "statolith", "pixel"],
        "theme_color": "#4f46e5",
        "accent_color": "#fbbf24",
        "ngss": "5-LS2-1 · MS-ETS1-4 · HS-LS2-4 · HS-ESS3-2",
        "big_finds": [
            "NASA-IBM Lunar Foundation Models fuse optical, elevation, and thermal layers to map crater water ice, solar peaks of eternal light, and regolith hazards before construction.",
            "Serious simulations (Lunar Sims, Settlers of the Moon, Lunar Red Alert) prove the core law of lunar urban planning: balancing 14-day freezing nights, underground sintered-regolith radiation roofs, and supply-chain bottlenecks.",
            "BioSim Next-Gen 4K Digital Twins reveal real-time stoichiometric balance: exercising astronauts exhale CO₂ that airflow-engineered vertical plant racks scrub back into breathable O₂ and food, while Myco recycles every scrap.",
            "CoSE Academy proves students who test hypotheses inside live habitat simulations leap from guesses to true systems-engineering mastery—preparing humanity for both the Moon and Mars!"
        ],
        "take_home": "We don't conquer space alone—we carry Earth's living circle with us! Humans, plants, fungi, and open science united can turn any barren frontier into a thriving home.",
        "mission_activity": "Launch BioSim Next-Gen and LunarSims, design your own Artemis City South Pole base, and keep crew oxygen, calories, water, and power balanced through the 14-day lunar night!",
        "source_comic_ids": [
            "biosim-nextgen",
            "LunarSims",
            "lunar-lfm-explorer",
            "Settlers_of_the_Moon_or_Mars",
            "Lunar_Red_Alert",
            "lunar-arcade",
            "Lunar-and-Martian-frontier-game-prototype",
            "DeepSpaceAg",
            "CoSE_Cloud",
            "dr-richard-barker"
        ],
        "pages": [
            {
                "page_number": 1,
                "act": "Act I — Mapping the South Pole",
                "beat_title": "NASA-IBM Lunar Foundation Models Scan the Shadows",
                "scene_key": "vol10_p01_lunar_lfm_scan",
                "sfx": {"text": "SCAN—LOCKED!!", "x": 74, "y": 14, "rotate": -5, "variant": "marvel-epic"},
                "director": {
                    "shot": "Monumental orbital Marvel crossover opening! Sweeping golden-and-cyan multispectral AI scanning grids drape across jagged Lunar South Pole craters, revealing glowing sapphire water-ice veins beside sunlit ridge peaks.",
                    "lighting": "Stark obsidian crater shadows illuminated by golden solar-peak rims and glowing sapphire ice contours.",
                    "pacing": "Grand cinematic scale—choosing where humanity's first permanent off-world city will rise.",
                    "data_story_note": "Highlights lunar-lfm-explorer (NASA-IBM Lunar Foundation Model) and LunarSims' fundamental law of lunar urban planning: solar power peaks vs. shadowed crater ice."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "THE GRAND FINALE! High above the Moon's South Pole, giant AI satellites peek straight into dark frozen craters—hunting for hidden water ice AND sunny hilltops!",
                    "ms": "NASA-IBM LUNAR FOUNDATION MODEL. Combining optical, elevation, and thermal layers solves the #1 law of lunar city planning: balancing sunlit solar ridges against crater ice!",
                    "hs": "MULTISPECTRAL FOUNDATION-MODEL RECONNAISSANCE. Fusing orbital elevation, thermal inertia, and illumination maps locates permanently shadowed water ice beside high-illumination rims."
                },
                "bubbles": [
                    {
                        "speaker": "pixel",
                        "speaker_name": "Pixel",
                        "anchor": "bottom-left",
                        "k5": "Target locked! Right on Shackleton Rim: gleaming solar power on the ridge AND ancient frozen water tucked safely inside the dark crater below!",
                        "ms": "LunarSims players learn this rule fast: build too far from sunlight and you freeze; build too far from crater ice and your greenhouse runs dry!",
                        "hs": "Lunar Foundation Model hazard screening clears boulders and slopes—selecting the optimal site for Artemis City's underground sintered domes!"
                    },
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-right",
                        "k5": "Touchdown confirmed! Earth Mission Control, ISS relay, and every phytonaut on board—let's build Artemis City before sunset hits!",
                        "ms": "Wait—look at that giant black shadow creeping across the craters! The 14-day freezing lunar night is rolling in fast!",
                        "hs": "Two weeks of −170°C darkness plus cosmic radiation incoming—time to put every single CoSE breakthrough to the ultimate survival test!"
                    }
                ],
                "data_hud": {
                    "headline": "Lunar Foundation Model & Siting Law",
                    "equation": "Site Score = f(Solar Illumination, Crater Ice Distance, Slope)",
                    "metric": "Optical + Elevation + Thermal AI Fusion",
                    "dataset": "lunar-lfm-explorer & LunarSims",
                    "explanation": "Foundation models see through harsh lunar shadows to pinpoint where sunlit power towers can sit closest to permanently shadowed crater water ice.",
                    "linked_comic_id": "lunar-lfm-explorer"
                }
            },
            {
                "page_number": 2,
                "act": "Act I — The 14-Day Night Falls",
                "beat_title": "Sintered Shields Against Cold and Cosmic Fire",
                "scene_key": "vol10_p02_lunar_night_crisis",
                "sfx": {"text": "CRACK—FREEZE!!", "x": 70, "y": 15, "rotate": 6, "variant": "marvel-impact"},
                "director": {
                    "shot": "High-stakes Marvel event crisis splash! A colossal wave of night shadow sweeps across the lunar plain frosting exterior radiators blue while thick sintered-regolith overhead vaults deflect streaking crimson cosmic rays.",
                    "lighting": "Icy glacial-blue lunar darkness clashing against blazing crimson GCR streaks and warm amber sanctuary light glowing deep beneath the regolith roofs.",
                    "pacing": "Dramatic tension—showing why lunar survival is an unforgiving systems puzzle.",
                    "data_story_note": "Synthesizes Lunar-and-Martian-frontier-game-prototype (14-day energy storage crisis), lunar-arcade (underground regolith radiation shielding), and Lunar_Red_Alert (supply-line bottlenecks)."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "NIGHT FALLS FOR 336 STRAIGHT HOURS! Outside the domes, temperatures plunge colder than Antarctica—and crimson cosmic rays rain down from deep space!",
                    "ms": "THE 14-DAY LUNAR NIGHT CRISIS. Unlike Mars's 24-hour day, the Moon demands massive energy storage, underground sintered-regolith roofs, and rock-solid supply chains!",
                    "hs": "EXTREME LUNAR THERMAL & RADIATION ENVELOPE. Excavating subterranean habitats and piling sintered regolith overhead slashes GCR dose while turning mined rock into ISRU feedstock."
                },
                "bubbles": [
                    {
                        "speaker": "myco",
                        "speaker_name": "Myco",
                        "anchor": "bottom-left",
                        "k5": "Good thing we dug underground and piled baked Moon-brick shielding over our heads! Those nasty cosmic rays bounce right off!",
                        "ms": "Wait—power batteries are dipping while the crew's CO₂ is climbing! If a single link between power, water, and farms breaks, the whole base feels it!",
                        "hs": "Lunar Red Alert taught us the hard truth: supply-line bottlenecks between harvesters, refineries, and power domes dictate survival in a vacuum."
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B (Earth Link)",
                        "anchor": "bottom-right",
                        "k5": "Don't panic, Artemis City! Earth Mission Control and ISS relay are linked in—open the 4K BioSim Digital Twin right now!",
                        "ms": "Before we touch a single real valve, let's test the fix inside our live BioSim Next-Gen simulator and balance the whole loop!",
                        "hs": "Zero-risk positioning before high-risk action—time to synchronize crew metabolism, airflow towers, and fungal recycling in real time!"
                    }
                ],
                "data_hud": {
                    "headline": "14-Day Lunar Night & Regolith Shielding",
                    "equation": "Dose_GCR(z) ≈ Dose_0 · e^(−z / λ_regolith)  +  336h Energy Buffer",
                    "metric": "Underground Sintered Roofs Slash Radiation Dose",
                    "dataset": "lunar-arcade, Lunar_Red_Alert & Lunar-and-Martian-frontier-game-prototype",
                    "explanation": "Surviving the 14-day freezing lunar night requires piling regolith overhead for shielding and eliminating resource bottlenecks between power, ice, and crops.",
                    "linked_comic_id": "lunar-arcade"
                }
            },
            {
                "page_number": 3,
                "act": "Act II — Heroes Assemble Around the Digital Twin",
                "beat_title": "BioSim Next-Gen: War Room of the Living Loop",
                "scene_key": "vol10_p03_biosim_war_room",
                "sfx": {"text": "SIMULATE—LOCK!", "x": 74, "y": 14, "rotate": -4, "variant": "marvel-tech"},
                "director": {
                    "shot": "Iconic Marvel Avengers war-room splash! Commander Astra, full-body holographic Doc B, floating Pixel, glowing Sprout, amber Myco, and violet Statolith gather around a colossal glowing 4K holographic BioSim twin of Artemis City.",
                    "lighting": "Dazzling emerald, sapphire, and golden holographic light illuminating all six heroes' determined faces in a dramatic circular composition.",
                    "pacing": "Team-up adrenaline—every single discovery from Volumes 01–09 slots into place!",
                    "data_story_note": "Synthesizes biosim-nextgen (4K ASTRO-USA Digital Twin) and Settlers_of_the_Moon_or_Mars (ISRU & mycoponics resource trading)."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "ALL SIX HEROES UNITED! Around the glowing 4K BioSim table, astronauts, phytonauts, and Mission Control combine EVERY secret from our ten adventures!",
                    "ms": "BIOSIM NEXT-GEN DIGITAL TWIN. Watch the invisible dance live: every breath of crew CO₂, every kilowatt of LED light, every drop of recycled water balanced to the gram!",
                    "hs": "STOICHIOMETRIC BIOREGENERATIVE CONTROL. Synchronizing human respiratory quotient, vertical-rack photosynthetic O₂ evolution, CFD cross-flow, and mycoponic mineralization."
                },
                "bubbles": [
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-left",
                        "k5": "Sprout, dial up your red-and-blue LEDs and gentle fan louvers! Statolith, guide those roots straight down into the sintered ceramic wicks!",
                        "ms": "We're shifting our purple anthocyanin greens and fast microgreens to peak CO₂ scrubbing while Myco converts every scrap of straw into protein and heat!",
                        "hs": "Routing exercising-crew CO₂ straight into the radial plenum racks turns human exertion into rocket fuel for photosynthesis!"
                    },
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B (Hologram)",
                        "anchor": "bottom-right",
                        "k5": "Look at the BioSim curves flattening into pure emerald stability—even thousands of students testing this in CoSE Academy found the exact same winning balance!",
                        "ms": "And Pixel just confirmed our circadian light schedules are synced for BOTH astronauts and crops—flip the switch, Commander!",
                        "hs": "All 9 subsystems verified in simulation: CFD, 0.166g LEAF, multi-omics clocks, quantum coils, calcium sensors, wild crops, mycoponics, and Crew Vital nutrition!"
                    }
                ],
                "data_hud": {
                    "headline": "BioSim Next-Gen Stoichiometric Balance",
                    "equation": "6 CO₂ + 6 H₂O + Photons ⇄ C₆H₁₂O₆ + 6 O₂  (Crew ⇄ Canopy)",
                    "metric": "4K Habitat Digital Twin · Real-Time O₂/CO₂/H₂O Loop",
                    "dataset": "biosim-nextgen & Settlers_of_the_Moon_or_Mars",
                    "explanation": "Interactive 4K habitat simulations reveal how human respiration, plant photosynthesis, fungal recycling, and power storage lock together in real time.",
                    "linked_comic_id": "biosim-nextgen"
                }
            },
            {
                "page_number": 4,
                "act": "Act II — The Living Circle in Full Symphony",
                "beat_title": "Cutaway of Artemis City Breathing as One",
                "scene_key": "vol10_p04_closed_loop_cutaway",
                "sfx": {"text": "HARMONY—FLOW!!", "x": 72, "y": 14, "rotate": -5, "variant": "marvel-epic"},
                "director": {
                    "shot": "Breathtaking architectural Marvel cross-section cutaway of the entire multi-level Artemis City dome! Top deck: astronauts exercising exhaling glowing cyan CO₂ streams down into radial LED vertical crop towers; lower deck: Myco's golden fungal beds feeding sintered ceramic roots sending shimmering emerald O₂ waves right back up to the crew!",
                    "lighting": "Jewel-like vertical symphony of sapphire water pipes, magenta-emerald crop decks, warm golden mycelial basements, and bright sunlit crew quarters.",
                    "pacing": "Pure visual ecstasy—the entire closed-loop ecosystem understood in one unforgettable glance.",
                    "data_story_note": "The ultimate educational diagram-as-art: synthesizing gas exchange, water recovery, solid-waste mycoponics, nutrition, and crew health in one continuous loop."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "BEHOLD THE LIVING CIRCLE! Astronauts breathe out CO₂ that plants love; plants make fresh oxygen and super-veggies for astronauts; Myco turns every scrap back into rich soil!",
                    "ms": "ONE CLOSED-LOOP SYMPHONY. Airflow fans thin the boundary layers, blue-red LEDs power antioxidants, sintered ceramics hold water, and fungi close the waste loop!",
                    "hs": "CLOSED-LOOP BIOREGENERATIVE LIFE SUPPORT (BLSS). Zero-waste coupling of human respiration, forced-convection vertical canopies, ISRU ceramics, and mycoponic biomanufacturing."
                },
                "bubbles": [
                    {
                        "speaker": "sprout",
                        "speaker_name": "Sprout",
                        "anchor": "bottom-left",
                        "k5": "I breathe in what Astra breathes out, and I send fresh crisp oxygen and juicy tomatoes right back up the stairs! Best circle ever!",
                        "ms": "Every trick we discovered on the ISS and in Earth labs is humming together—no stagnant air, synced clocks, purple shields, thriving roots!",
                        "hs": "Canopy photosynthesis is scrubbing 100% of cabin CO₂ while replenishing potable transpired condensate and fresh phytochemicals!"
                    },
                    {
                        "speaker": "statolith",
                        "speaker_name": "Statolith",
                        "anchor": "bottom-right",
                        "k5": "And down in every root tip, I'm still tumbling gently in 1/6th gravity to keep the garden pointing home!",
                        "ms": "Not a single gram of carbon or drop of water escapes the circle—Artemis City is breathing on its own!",
                        "hs": "Night 14 of 14... thermal reserves holding steady, oxygen 21%, crew biomarkers peak green—look to the eastern ridge!"
                    }
                ],
                "data_hud": {
                    "headline": "Closed-Loop Bioregenerative Life Support",
                    "equation": "Crew (CO₂ + Waste) → Crops + Myco → Crew (O₂ + Food + H₂O)",
                    "metric": "Zero-Waste Multi-Species Habitat Coupling",
                    "dataset": "DeepSpaceAg & CoSE_Cloud",
                    "explanation": "True space independence happens when engineering physics, crop genomics, fungal recycling, and human physiology reinforce one another in a single closed circle.",
                    "linked_comic_id": "DeepSpaceAg"
                }
            },
            {
                "page_number": 5,
                "act": "Act III — Dawn Over the South Pole",
                "beat_title": "Surviving the Night, Welcoming the Sun",
                "scene_key": "vol10_p05_lunar_dawn_triumph",
                "sfx": {"text": "DAWN BREAKS!", "x": 74, "y": 14, "rotate": -3, "variant": "marvel-triumph"},
                "director": {
                    "shot": "Radiant golden-hour Marvel splash! The first blinding rays of lunar sunrise ignite tall solar towers atop Shackleton Rim after 336 hours of darkness, illuminating the glowing emerald and ruby skylight domes of Artemis City.",
                    "lighting": "Blazing molten-gold sunlight piercing razor-black lunar shadows, catching glittering ice frost melting off tower ridges and emerald dome glow below.",
                    "pacing": "Emotional crescendo—victory earned through science, teamwork, and persistence.",
                    "data_story_note": "Celebrates CoSE Academy's educational impact: when learners see systems survive real constraints in simulations, curiosity turns into mastery."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "SUNRISE ON THE MOON! After fourteen freezing days of darkness, golden sunlight floods the solar towers—and Artemis City didn't just survive, it BLOOMED!",
                    "ms": "FIRST LUNAR NIGHT CONQUERED. Solar power surges back to 100%, greenhouses overflow with fresh harvest, and Earth Mission Control erupts in cheers!",
                    "hs": "MISSION MILESTONE ACHIEVED. Validated closed-loop autonomy proves humanity can sustain living terrestrial ecosystems indefinitely beyond Earth's cradle."
                },
                "bubbles": [
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra",
                        "anchor": "bottom-left",
                        "k5": "Good morning, Sun! Fourteen days of deep lunar night—and we're greeting the dawn with fresh red tomatoes and crisp green salad!",
                        "ms": "Every single failure we simulated back in CoSE Academy saved us out here for real. Play to discover—build to endure!",
                        "hs": "Full solar recharge online, zero crew nutritional deficit, 100% water loop closure. Artemis City is officially open for science!"
                    },
                    {
                        "speaker": "myco",
                        "speaker_name": "Myco",
                        "anchor": "bottom-right",
                        "k5": "Mmm—fresh breakfast mushrooms are ready too! And look up past blue Earth... see that tiny rusty red star twinkling over there?",
                        "ms": "If we can turn freezing airless Moon dust into a garden, imagine what we can grow when Mars hands us a whole atmosphere of CO₂!",
                        "hs": "Next horizon: Martian CO₂ greenhouses, southern-highland magnetic fields, and multi-year interplanetary voyages!"
                    }
                ],
                "data_hud": {
                    "headline": "Play to Discover: Systems Mastery",
                    "equation": "Hypothesis → Live Simulation → Systems Insight → Flight Design",
                    "metric": "CoSE Academy & CoSE Cloud Open Ecosystem",
                    "dataset": "dr-richard-barker & CoSE_Cloud",
                    "explanation": "Interactive simulations let students experience resource trade-offs firsthand, transforming abstract science into intuitive engineering judgment.",
                    "linked_comic_id": "dr-richard-barker"
                }
            },
            {
                "page_number": 6,
                "act": "Act III — To Earth, The Moon, and Beyond",
                "beat_title": "The Living Bridge to the Stars",
                "scene_key": "vol10_p06_grand_finale_ensemble",
                "sfx": {"text": "TO THE STARS!", "x": 72, "y": 14, "rotate": -3, "variant": "marvel-triumph"},
                "director": {
                    "shot": "Unforgettable full-bleed Marvel Crossover Grand Finale! Inside a vast panoramic lunar conservatory dome blooming with tomatoes, wheat, Arabidopsis, and glowing golden mushrooms—Commander Astra, Doc B, Pixel, Sprout, Myco, and Statolith gaze out together toward bright sapphire Earth and distant crimson Mars.",
                    "lighting": "Golden conservatory warmth meeting endless velvet starlight, blue Earthshine, and a distant ruby glint of Mars.",
                    "pacing": "Timeless, inspiring send-off inviting the reader to become the next explorer in the 114-issue archive and live simulators!",
                    "data_story_note": "Directly hands the torch to the reader: explore all 114 underlying open-source projects, launch live tools, and join the open-science frontier."
                },
                "caption": {
                    "anchor": "top-left",
                    "k5": "THE ADVENTURE IS JUST BEGINNING! Everything we learn growing gardens on the ISS and the Moon helps us care even better for our precious blue home, Earth!",
                    "ms": "FROM ONE TINY SPROUT TO ARTEMIS CITY. Humans, plants, fungi, and open science united—carrying Earth's living circle into the cosmos.",
                    "hs": "THE COSE OPEN-SCIENCE INVITATION. Every panel in these 10 graphic novels links directly to open code, FAIR NASA OSDR datasets, and live browser simulators—now it's YOUR turn to discover!"
                },
                "bubbles": [
                    {
                        "speaker": "doc-b",
                        "speaker_name": "Doc B",
                        "anchor": "bottom-left",
                        "k5": "Nature already wrote the greatest playbook in the universe—and now YOU know how to read it! Which live simulator will you launch first?",
                        "ms": "Every discovery we made for the Moon—saving water, understanding air, protecting soil, keeping people healthy—makes life better on Earth too!",
                        "hs": "Jump into the 114-issue Research Archive, spin the Concept Constellation, or open any GitHub repo below—the frontier is wide open!"
                    },
                    {
                        "speaker": "astra",
                        "speaker_name": "Commander Astra & Crew",
                        "anchor": "bottom-right",
                        "k5": "See you among the stars, fellow astronauts, phytonauts, and Mission Control scientists!",
                        "ms": "Earth gave us life. The ISS taught us how it adapts. The Moon taught us how to stay. Next stop: Mars—and beyond!",
                        "hs": "End of Season One of The CoSE Chronicles—dive into the Mission Debrief below to explore every real dataset and simulator behind the story!"
                    }
                ],
                "data_hud": {
                    "headline": "The Open-Science Ecosystem Awaits You",
                    "equation": "10 Flagship Graphic Novels ↔ 114 Open-Source Research Repos",
                    "metric": "Every Story Linked to Live Code, Data & Simulators",
                    "dataset": "CoSE_Cloud · @dr-richard-barker",
                    "explanation": "Every adventure in The CoSE Chronicles connects directly to real peer-reviewed research, NASA OSDR datasets, and free interactive browser tools.",
                    "linked_comic_id": "CoSE_Cloud"
                }
            }
        ]
    }
]
