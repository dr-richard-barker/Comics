/**
 * CoSE Science Comics — Bespoke Multi-Style SVG Art & Scene Compositor
 * Renders custom vector comic covers, 8 series-specific art styles,
 * 6 recurring CoSE Space Lab characters, and 22 scientific scene motifs
 * across 5 distinct narrative panel stages.
 */
(function () {
  "use strict";

  const STYLE_PALETTES = {
    "blueprint-manga": {
      bg1: "#071a2e",
      bg2: "#0d3559",
      accent: "#38bdf8",
      accent2: "#fbbf24",
      ink: "#e0f2fe",
      panelBg: "#0a2239",
      gridColor: "rgba(56,189,248,0.16)",
      badgeBg: "#0284c7"
    },
    "cyber-genomics": {
      bg1: "#120b29",
      bg2: "#261447",
      accent: "#c084fc",
      accent2: "#2dd4bf",
      ink: "#f3e8ff",
      panelBg: "#190f36",
      gridColor: "rgba(192,132,252,0.15)",
      badgeBg: "#7c3aed"
    },
    "cosmic-kirby": {
      bg1: "#1f1105",
      bg2: "#451a03",
      accent: "#fbbf24",
      accent2: "#f97316",
      ink: "#fef3c7",
      panelBg: "#291507",
      gridColor: "rgba(251,191,36,0.14)",
      badgeBg: "#d97706"
    },
    "botanical-ghibli": {
      bg1: "#0a2316",
      bg2: "#16422b",
      accent: "#4ade80",
      accent2: "#facc15",
      ink: "#dcfce7",
      panelBg: "#0f2e1e",
      gridColor: "rgba(74,222,128,0.13)",
      badgeBg: "#16a34a"
    },
    "solarpunk-woodcut": {
      bg1: "#23120b",
      bg2: "#432012",
      accent: "#fb923c",
      accent2: "#a3e635",
      ink: "#ffedd5",
      panelBg: "#2d180e",
      gridColor: "rgba(251,146,60,0.14)",
      badgeBg: "#ea580c"
    },
    "bio-action": {
      bg1: "#240a10",
      bg2: "#4c111b",
      accent: "#f87171",
      accent2: "#34d399",
      ink: "#fee2e2",
      panelBg: "#2f0d15",
      gridColor: "rgba(248,113,113,0.15)",
      badgeBg: "#dc2626"
    },
    "maker-risograph": {
      bg1: "#092222",
      bg2: "#134e4a",
      accent: "#2dd4bf",
      accent2: "#f43f5e",
      ink: "#ccfbf1",
      panelBg: "#0d2e2d",
      gridColor: "rgba(45,212,191,0.15)",
      badgeBg: "#0d9488"
    },
    "pixel-isometric": {
      bg1: "#11122e",
      bg2: "#242763",
      accent: "#818cf8",
      accent2: "#38bdf8",
      ink: "#e0e7ff",
      panelBg: "#181a42",
      gridColor: "rgba(129,140,248,0.18)",
      badgeBg: "#4f46e5"
    }
  };

  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /**
   * Renders style-specific background backdrop & decorative comic textures
   */
  function renderStyleBackdrop(style, w, h, stage, uid) {
    const pal = STYLE_PALETTES[style] || STYLE_PALETTES["blueprint-manga"];
    let defs = `
      <defs>
        <linearGradient id="bg-${uid}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${pal.bg1}"/>
          <stop offset="100%" stop-color="${pal.bg2}"/>
        </linearGradient>
        <pattern id="dots-${uid}" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1.4" fill="${pal.gridColor}"/>
        </pattern>
        <pattern id="grid-${uid}" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="${pal.gridColor}" stroke-width="1"/>
        </pattern>
        <radialGradient id="glow-${uid}" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stop-color="${pal.accent}" stop-opacity="0.24"/>
          <stop offset="100%" stop-color="${pal.bg1}" stop-opacity="0"/>
        </radialGradient>
      </defs>
    `;

    let overlay = "";
    if (style === "blueprint-manga") {
      // Blueprint coordinate grid + manga speed lines
      overlay = `
        <rect width="${w}" height="${h}" fill="url(#grid-${uid})"/>
        <g stroke="${pal.accent}" stroke-opacity="0.18" stroke-width="1">
          <line x1="0" y1="${h * 0.15}" x2="${w * 0.25}" y2="0"/>
          <line x1="${w}" y1="${h * 0.85}" x2="${w * 0.75}" y2="${h}"/>
          <circle cx="${w * 0.88}" cy="${h * 0.18}" r="22" fill="none" stroke-dasharray="3 3"/>
        </g>
      `;
    } else if (style === "cyber-genomics") {
      // CRT scanlines + floating DNA base-pair bars
      overlay = `
        <rect width="${w}" height="${h}" fill="url(#dots-${uid})"/>
        <g stroke="${pal.accent2}" stroke-opacity="0.22" stroke-width="1.5">
          <path d="M 18 20 Q 36 45 18 70 Q 0 95 18 120" fill="none"/>
          <path d="M 34 20 Q 16 45 34 70 Q 52 95 34 120" fill="none" stroke="${pal.accent}"/>
          <line x1="21" y1="32" x2="31" y2="32"/>
          <line x1="21" y1="57" x2="31" y2="57"/>
          <line x1="21" y1="82" x2="31" y2="82"/>
        </g>
      `;
    } else if (style === "cosmic-kirby") {
      // Jack Kirby cosmic krackle bubbles + energy burst rays
      overlay = `
        <rect width="${w}" height="${h}" fill="url(#dots-${uid})"/>
        <g fill="${pal.accent}" fill-opacity="0.18">
          <circle cx="${w * 0.12}" cy="${h * 0.22}" r="14"/>
          <circle cx="${w * 0.16}" cy="${h * 0.16}" r="7"/>
          <circle cx="${w * 0.88}" cy="${h * 0.24}" r="16"/>
          <circle cx="${w * 0.83}" cy="${h * 0.31}" r="8"/>
        </g>
        <g fill="#000" fill-opacity="0.35">
          <circle cx="${w * 0.13}" cy="${h * 0.21}" r="6"/>
          <circle cx="${w * 0.87}" cy="${h * 0.25}" r="7"/>
        </g>
      `;
    } else if (style === "botanical-ghibli") {
      // Soft watercolor organic leaves & floating glowing spores
      overlay = `
        <g fill="${pal.accent}" fill-opacity="0.16">
          <circle cx="${w * 0.15}" cy="${h * 0.25}" r="45"/>
          <circle cx="${w * 0.82}" cy="${h * 0.28}" r="55"/>
        </g>
        <g fill="${pal.accent2}" fill-opacity="0.55">
          <circle cx="${w * 0.2}" cy="${h * 0.18}" r="2.5"/>
          <circle cx="${w * 0.76}" cy="${h * 0.15}" r="3"/>
          <circle cx="${w * 0.64}" cy="${h * 0.32}" r="2"/>
          <circle cx="${w * 0.35}" cy="${h * 0.26}" r="2.2"/>
        </g>
      `;
    } else if (style === "solarpunk-woodcut") {
      // Sunburst geometric arch & terracotta woodcut hatch lines
      overlay = `
        <rect width="${w}" height="${h}" fill="url(#dots-${uid})"/>
        <path d="M ${w * 0.1} ${h} A ${w * 0.4} ${w * 0.4} 0 0 1 ${w * 0.9} ${h}" fill="none" stroke="${pal.accent}" stroke-opacity="0.22" stroke-width="2" stroke-dasharray="6 4"/>
      `;
    } else if (style === "bio-action") {
      // Medical EKG heartbeat waveform across top/bottom
      overlay = `
        <rect width="${w}" height="${h}" fill="url(#grid-${uid})"/>
        <path d="M 0 ${h * 0.22} L ${w * 0.18} ${h * 0.22} L ${w * 0.22} ${h * 0.11} L ${w * 0.26} ${h * 0.33} L ${w * 0.30} ${h * 0.16} L ${w * 0.34} ${h * 0.22} L ${w} ${h * 0.22}"
              fill="none" stroke="${pal.accent2}" stroke-opacity="0.32" stroke-width="2"/>
      `;
    } else if (style === "maker-risograph") {
      // Munsell calibration color chips bar + lab tape corners
      overlay = `
        <rect width="${w}" height="${h}" fill="url(#dots-${uid})"/>
        <g transform="translate(${w - 66}, 10)">
          <rect x="0" y="0" width="10" height="10" fill="#ef4444" stroke="#fff" stroke-width="0.7"/>
          <rect x="12" y="0" width="10" height="10" fill="#eab308" stroke="#fff" stroke-width="0.7"/>
          <rect x="24" y="0" width="10" height="10" fill="#22c55e" stroke="#fff" stroke-width="0.7"/>
          <rect x="36" y="0" width="10" height="10" fill="#3b82f6" stroke="#fff" stroke-width="0.7"/>
          <rect x="48" y="0" width="10" height="10" fill="#a855f7" stroke="#fff" stroke-width="0.7"/>
        </g>
      `;
    } else if (style === "pixel-isometric") {
      // Isometric diamond floor grid
      overlay = `
        <rect width="${w}" height="${h}" fill="url(#grid-${uid})"/>
        <g stroke="${pal.accent}" stroke-opacity="0.22" stroke-width="1">
          <polygon points="${w * 0.5},${h * 0.58} ${w * 0.88},${h * 0.76} ${w * 0.5},${h * 0.94} ${w * 0.12},${h * 0.76}" fill="none"/>
          <polygon points="${w * 0.5},${h * 0.64} ${w * 0.76},${h * 0.76} ${w * 0.5},${h * 0.88} ${w * 0.24},${h * 0.76}" fill="none"/>
        </g>
      `;
    }

    return `
      ${defs}
      <rect width="${w}" height="${h}" fill="url(#bg-${uid})"/>
      <rect width="${w}" height="${h}" fill="url(#glow-${uid})"/>
      ${overlay}
    `;
  }

  /**
   * Renders one of the 6 recurring CoSE Space Lab characters at (x, y)
   * pose: 'wonder' | 'challenge' | 'experiment' | 'discovery' | 'finale'
   */
  function renderCharacter(charId, x, y, scale, pose) {
    const s = scale || 1;
    const isShock = pose === "challenge";
    const isCheer = pose === "discovery" || pose === "finale";

    if (charId === "sprout") {
      // Sprout: Arabidopsis thaliana space seedling with glowing leaves & expressive eyes
      const leafTilt = isShock ? -18 : isCheer ? -35 : -25;
      const mouth = isShock
        ? `<circle cx="0" cy="7" r="3" fill="#064e3b"/>`
        : `<path d="M -5 5 Q 0 11 5 5" fill="none" stroke="#064e3b" stroke-width="2" stroke-linecap="round"/>`;
      return `
        <g transform="translate(${x},${y}) scale(${s})">
          <!-- Root system -->
          <path d="M 0 22 Q -6 36 -14 44 M 0 22 Q 2 38 0 48 M 0 22 Q 8 35 15 42" fill="none" stroke="#d9f99d" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Stem -->
          <path d="M 0 22 Q -2 10 0 -4" fill="none" stroke="#4ade80" stroke-width="5" stroke-linecap="round"/>
          <!-- Cotyledon Leaves -->
          <ellipse cx="-18" cy="-12" rx="16" ry="9" transform="rotate(${leafTilt} -18 -12)" fill="#22c55e" stroke="#bbf7d0" stroke-width="1.5"/>
          <ellipse cx="18" cy="-12" rx="16" ry="9" transform="rotate(${-leafTilt} 18 -12)" fill="#22c55e" stroke="#bbf7d0" stroke-width="1.5"/>
          <!-- Head / Meristem -->
          <circle cx="0" cy="2" r="14" fill="#4ade80" stroke="#dcfce7" stroke-width="2"/>
          <!-- Space Bubble Helmet -->
          <circle cx="0" cy="0" r="22" fill="rgba(186,230,253,0.15)" stroke="#7dd3fc" stroke-width="1.5" stroke-dasharray="4 2"/>
          <!-- Eyes -->
          <circle cx="-5" cy="-1" r="2.6" fill="#064e3b"/>
          <circle cx="5" cy="-1" r="2.6" fill="#064e3b"/>
          <circle cx="-5.8" cy="-2" r="1" fill="#fff"/>
          <circle cx="4.2" cy="-2" r="1" fill="#fff"/>
          ${mouth}
        </g>
      `;
    }

    if (charId === "myco") {
      // Myco: Friendly glowing fungal mycelium & mushroom cap character
      return `
        <g transform="translate(${x},${y}) scale(${s})">
          <!-- Glowing Hyphal Threads -->
          <path d="M -22 36 Q -10 24 0 22 Q 12 25 24 36 M -14 42 Q 0 28 14 42 M 0 22 L 0 45" fill="none" stroke="#fde047" stroke-width="2" stroke-dasharray="3 2"/>
          <!-- Mushroom Stipe/Body -->
          <path d="M -9 24 L -7 -2 L 7 -2 L 9 24 Z" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.8"/>
          <!-- Bioluminescent Mushroom Cap -->
          <path d="M -26 0 Q 0 -28 26 0 Z" fill="#ea580c" stroke="#fed7aa" stroke-width="2"/>
          <circle cx="-11" cy="-9" r="3.5" fill="#fef08a"/>
          <circle cx="4" cy="-13" r="4" fill="#fef08a"/>
          <circle cx="14" cy="-7" r="2.8" fill="#fef08a"/>
          <!-- Eyes & Smile on Stipe -->
          <circle cx="-4" cy="7" r="2.2" fill="#451a03"/>
          <circle cx="4" cy="7" r="2.2" fill="#451a03"/>
          <path d="M -4 13 Q 0 17 4 13" fill="none" stroke="#451a03" stroke-width="1.8" stroke-linecap="round"/>
        </g>
      `;
    }

    if (charId === "statolith") {
      // Statolith: Crystalline purple/gold gravity-sensing starch pebble
      const floatOffset = isShock ? -10 : 0;
      return `
        <g transform="translate(${x},${y + floatOffset}) scale(${s})">
          <!-- Gravity halo -->
          <circle cx="0" cy="0" r="24" fill="none" stroke="#e9d5ff" stroke-width="1.2" stroke-dasharray="3 3"/>
          <!-- Faceted Amyloplast Crystal -->
          <polygon points="0,-20 17,-8 14,15 -14,15 -17,-8" fill="#9333ea" stroke="#f3e8ff" stroke-width="2"/>
          <polygon points="0,-20 17,-8 0,2 -17,-8" fill="#a855f7" opacity="0.8"/>
          <!-- Expressive Eyes -->
          <circle cx="-6" cy="-2" r="2.8" fill="#fff"/>
          <circle cx="6" cy="-2" r="2.8" fill="#fff"/>
          <circle cx="-6" cy="-2" r="1.4" fill="#1e1b4b"/>
          <circle cx="6" cy="-2" r="1.4" fill="#1e1b4b"/>
          ${
            isShock
              ? `<circle cx="0" cy="6" r="3" fill="#fef08a"/>`
              : `<path d="M -5 6 Q 0 10 5 6" fill="none" stroke="#fef08a" stroke-width="2" stroke-linecap="round"/>`
          }
        </g>
      `;
    }

    if (charId === "pixel") {
      // Pixel: Holographic AI Multi-Omics & CFD Decoder Droid
      return `
        <g transform="translate(${x},${y}) scale(${s})">
          <!-- Antenna -->
          <line x1="0" y1="-26" x2="0" y2="-17" stroke="#38bdf8" stroke-width="2.5"/>
          <circle cx="0" cy="-28" r="4" fill="#22d3ee"/>
          <!-- Hover rings -->
          <ellipse cx="0" cy="26" rx="16" ry="4" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
          <ellipse cx="0" cy="32" rx="10" ry="2.5" fill="none" stroke="#38bdf8" stroke-width="1.2"/>
          <!-- Droid Chassis -->
          <rect x="-20" y="-17" width="40" height="34" rx="9" fill="#0284c7" stroke="#bae6fd" stroke-width="2"/>
          <!-- Visor Screen -->
          <rect x="-15" y="-11" width="30" height="20" rx="5" fill="#082f49" stroke="#38bdf8" stroke-width="1.2"/>
          <!-- LED Eyes / Waveform -->
          <circle cx="-7" cy="-2" r="3.2" fill="#22d3ee"/>
          <circle cx="7" cy="-2" r="3.2" fill="#22d3ee"/>
          <path d="M -9 5 L -4 5 L -2 2 L 2 7 L 4 5 L 9 5" fill="none" stroke="#4ade80" stroke-width="1.6"/>
        </g>
      `;
    }

    if (charId === "astra") {
      // Commander Astra: Astronaut Physiologist & Space Farmer
      return `
        <g transform="translate(${x},${y}) scale(${s})">
          <!-- Spacesuit Torso -->
          <path d="M -20 38 L -16 14 Q 0 10 16 14 L 20 38 Z" fill="#f8fafc" stroke="#ef4444" stroke-width="2"/>
          <!-- Mission Patch -->
          <circle cx="8" cy="25" r="4" fill="#ef4444"/>
          <!-- Helmet -->
          <circle cx="0" cy="-2" r="18" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2.5"/>
          <!-- Gold/Crimson Reflective Visor & Face -->
          <ellipse cx="0" cy="-2" rx="14" ry="12" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
          <!-- Hair & Eyes -->
          <path d="M -12 -8 Q 0 -16 12 -8" fill="#7c2d12"/>
          <circle cx="-5" cy="-2" r="2.2" fill="#1e293b"/>
          <circle cx="5" cy="-2" r="2.2" fill="#1e293b"/>
          <path d="M -4 4 Q 0 8 4 4" fill="none" stroke="#9a3412" stroke-width="1.8" stroke-linecap="round"/>
        </g>
      `;
    }

    // Default: Doc B (Dr. Richard Barker — Space Systems Biologist)
    return `
      <g transform="translate(${x},${y}) scale(${s})">
        <!-- CoSE Lab Coat / Flight Jacket -->
        <path d="M -20 38 L -16 13 Q 0 9 16 13 L 20 38 Z" fill="#0f7f9f" stroke="#bae6fd" stroke-width="2"/>
        <path d="M -5 13 L 0 28 L 5 13" fill="#e0f2fe"/>
        <!-- Head -->
        <circle cx="0" cy="-3" r="15" fill="#fde68a" stroke="#f59e0b" stroke-width="1.5"/>
        <!-- Hair & Beard/Smile -->
        <path d="M -14 -8 Q -6 -21 14 -10 Q 11 -18 -4 -18 Z" fill="#78350f"/>
        <!-- Glasses -->
        <rect x="-11" y="-7" width="9" height="6" rx="1.5" fill="none" stroke="#0284c7" stroke-width="1.8"/>
        <rect x="2" y="-7" width="9" height="6" rx="1.5" fill="none" stroke="#0284c7" stroke-width="1.8"/>
        <line x1="-2" y1="-4" x2="2" y2="-4" stroke="#0284c7" stroke-width="1.8"/>
        <!-- Eyes -->
        <circle cx="-6.5" cy="-4" r="1.6" fill="#0f172a"/>
        <circle cx="6.5" cy="-4" r="1.6" fill="#0f172a"/>
        <!-- Smile -->
        <path d="M -5 4 Q 0 9 5 4" fill="none" stroke="#78350f" stroke-width="2" stroke-linecap="round"/>
      </g>
    `;
  }

  /**
   * Renders the central scientific diagram/prop for the project's scene_motif
   */
  function renderScientificMotif(motif, style, stage, w, h) {
    const pal = STYLE_PALETTES[style] || STYLE_PALETTES["blueprint-manga"];
    const cx = w * 0.52;
    const cy = h * 0.48;
    const isCrisis = stage === "challenge";
    const isEureka = stage === "discovery" || stage === "finale";

    switch (motif) {
      case "cfd-leaf-plume": {
        // Leaf cross-section with boundary-layer streamlines & O2/CO2 vectors
        const layerThickness = isCrisis ? 36 : 16;
        const layerColor = isCrisis ? "#ef4444" : "#38bdf8";
        return `
          <g transform="translate(${cx},${cy})">
            <!-- Stagnant Boundary Layer Halo -->
            <ellipse cx="0" cy="0" rx="${62 + layerThickness}" ry="${22 + layerThickness}"
                     fill="${layerColor}" fill-opacity="0.22" stroke="${layerColor}" stroke-width="2" stroke-dasharray="5 3"/>
            <!-- Airflow Streamlines -->
            <path d="M -110 -34 Q -20 -${38 + layerThickness} 110 -34" fill="none" stroke="${pal.accent}" stroke-width="2"/>
            <path d="M -110 34 Q -20 ${38 + layerThickness} 110 34" fill="none" stroke="${pal.accent}" stroke-width="2"/>
            <!-- Leaf Blade -->
            <path d="M -55 0 Q -15 -24 55 0 Q -15 24 -55 0 Z" fill="#22c55e" stroke="#bbf7d0" stroke-width="2.2"/>
            <path d="M -52 0 L 48 0 M -20 0 L -8 -10 M 5 0 L 18 9" fill="none" stroke="#86efac" stroke-width="1.5"/>
            <!-- Gas Molecules -->
            <circle cx="-18" cy="-18" r="7" fill="#ef4444"/><text x="-18" y="-15" font-size="7" fill="#fff" text-anchor="middle" font-weight="bold">O₂</text>
            <circle cx="22" cy="-20" r="8" fill="#0284c7"/><text x="22" y="-17" font-size="7" fill="#fff" text-anchor="middle" font-weight="bold">CO₂</text>
          </g>
        `;
      }

      case "fvcb-carbon-cycle": {
        // Chloroplast-Peroxisome-Mitochondrion FvCB Photorespiration Gear Loop
        return `
          <g transform="translate(${cx},${cy})">
            <circle cx="-38" cy="0" r="28" fill="#15803d" stroke="#86efac" stroke-width="2"/>
            <text x="-38" y="-2" font-size="8" fill="#fff" text-anchor="middle" font-weight="bold">RUBISCO</text>
            <text x="-38" y="9" font-size="7" fill="#bbf7d0" text-anchor="middle">Chloroplast</text>

            <circle cx="38" cy="-18" r="22" fill="#b45309" stroke="#fde047" stroke-width="2"/>
            <text x="38" y="-15" font-size="7.5" fill="#fff" text-anchor="middle" font-weight="bold">Peroxisome</text>

            <circle cx="38" cy="24" r="22" fill="#be123c" stroke="#fda4af" stroke-width="2"/>
            <text x="38" y="27" font-size="7.5" fill="#fff" text-anchor="middle" font-weight="bold">Mitochondria</text>

            <path d="M -10 -10 L 16 -18 M 38 4 L 38 2 M 16 24 L -12 12" fill="none" stroke="${pal.accent2}" stroke-width="2.5" stroke-dasharray="3 2"/>
          </g>
        `;
      }

      case "hardware-chambers-cfd":
      case "lunar-pot-chamber":
      case "pressure-chamber-ai":
      case "led-grow-array": {
        // Growth Chamber with Red/Blue LED array, fan vectors & seedlings
        return `
          <g transform="translate(${cx},${cy})">
            <rect x="-70" y="-44" width="140" height="88" rx="10" fill="rgba(15,23,42,0.75)" stroke="${pal.accent}" stroke-width="2.5"/>
            <!-- LED Light Bar -->
            <rect x="-56" y="-38" width="112" height="10" rx="4" fill="#1e293b" stroke="#94a3b8" stroke-width="1"/>
            <circle cx="-42" cy="-33" r="3.5" fill="#ef4444"/>
            <circle cx="-24" cy="-33" r="3.5" fill="#3b82f6"/>
            <circle cx="-6" cy="-33" r="3.5" fill="#ef4444"/>
            <circle cx="12" cy="-33" r="3.5" fill="#3b82f6"/>
            <circle cx="30" cy="-33" r="3.5" fill="#ef4444"/>
            <circle cx="46" cy="-33" r="3.5" fill="#3b82f6"/>
            <!-- Photon Cone -->
            <polygon points="-50,-28 50,-28 64,36 -64,36" fill="rgba(217,70,239,0.12)"/>
            <!-- Airflow Swirls -->
            <path d="M -54 -8 Q 0 -22 54 -8" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="4 3"/>
            <path d="M -48 8 Q 0 -6 48 8" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="4 3"/>
            <!-- Seedlings inside chamber -->
            <path d="M -30 36 L -30 16 M -30 20 Q -40 12 -32 10 Q -22 12 -30 20" stroke="#4ade80" stroke-width="2.5" fill="#22c55e"/>
            <path d="M 0 36 L 0 12 M 0 16 Q -10 8 -2 6 Q 8 8 0 16" stroke="#4ade80" stroke-width="2.5" fill="#22c55e"/>
            <path d="M 30 36 L 30 16 M 30 20 Q 20 12 28 10 Q 38 12 30 20" stroke="#4ade80" stroke-width="2.5" fill="#22c55e"/>
          </g>
        `;
      }

      case "circadian-clock-ring": {
        // 24-Hour Biological Clock Gear with 16 ISS Sunrises
        return `
          <g transform="translate(${cx},${cy})">
            <circle cx="0" cy="0" r="44" fill="rgba(15,23,42,0.75)" stroke="${pal.accent}" stroke-width="3"/>
            <circle cx="0" cy="0" r="34" fill="none" stroke="${pal.accent2}" stroke-width="1.5" stroke-dasharray="4 4"/>
            <line x1="0" y1="0" x2="0" y2="-28" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
            <line x1="0" y1="0" x2="22" y2="12" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
            <text x="0" y="-32" font-size="7" fill="#fde047" text-anchor="middle" font-weight="bold">CCA1 / LHY</text>
            <text x="0" y="39" font-size="7" fill="#c084fc" text-anchor="middle" font-weight="bold">TOC1 NIGHT</text>
          </g>
        `;
      }

      case "chromatin-nucleosome":
      case "rna-splicing-scissors": {
        // Epigenetic Histone Spools & Glowing DNA/RNA Strands
        return `
          <g transform="translate(${cx},${cy})">
            <path d="M -75 10 Q -38 -36 0 10 Q 38 56 75 10" fill="none" stroke="${pal.accent}" stroke-width="3.5"/>
            <path d="M -75 -10 Q -38 36 0 -10 Q 38 -56 75 -10" fill="none" stroke="${pal.accent2}" stroke-width="3.5"/>
            <circle cx="-36" cy="0" r="14" fill="#ec4899" stroke="#fbcfe8" stroke-width="2"/>
            <text x="-36" y="3" font-size="6.5" fill="#fff" text-anchor="middle" font-weight="bold">H3K27</text>
            <circle cx="36" cy="0" r="14" fill="#8b5cf6" stroke="#ddd6fe" stroke-width="2"/>
            <text x="36" y="3" font-size="6.5" fill="#fff" text-anchor="middle" font-weight="bold">EXON</text>
          </g>
        `;
      }

      case "single-cell-umap":
      case "drem-bifurcation-tracks":
      case "manhattan-gwas-peaks":
      case "database-holo-cube": {
        // Single-Cell UMAP / Bifurcation Constellation Screen
        return `
          <g transform="translate(${cx},${cy})">
            <rect x="-72" y="-42" width="144" height="84" rx="8" fill="rgba(15,23,42,0.8)" stroke="${pal.accent}" stroke-width="2"/>
            <!-- Branching trajectories -->
            <path d="M -55 20 Q -20 18 0 0 L 48 -24 M 0 0 L 52 4 M 0 0 L 44 26" fill="none" stroke="${pal.accent2}" stroke-width="2.5"/>
            <!-- Single-cell clusters -->
            <circle cx="-40" cy="-16" r="5" fill="#38bdf8"/><circle cx="-30" cy="-22" r="4" fill="#38bdf8"/>
            <circle cx="48" cy="-24" r="6" fill="#4ade80"/><circle cx="56" cy="-16" r="4" fill="#4ade80"/>
            <circle cx="52" cy="4" r="6" fill="#f43f5e"/><circle cx="44" cy="26" r="6" fill="#facc15"/>
            <text x="-62" y="-28" font-size="7" fill="${pal.ink}" font-family="monospace">OSDR SINGLE-CELL ATLAS</text>
          </g>
        `;
      }

      case "cosmic-ray-shield":
      case "quantum-spin-compass":
      case "planetary-magnetosphere":
      case "helmholtz-coil-cube": {
        // Planetary Magnetic Field Lines + Cosmic Ray Particle Tracks
        return `
          <g transform="translate(${cx},${cy})">
            <!-- Magnetic Dipole Loops -->
            <path d="M 0 -30 C -68 -45 -68 45 0 30" fill="none" stroke="${pal.accent}" stroke-width="2.2" stroke-dasharray="4 2"/>
            <path d="M 0 -30 C -92 -60 -92 60 0 30" fill="none" stroke="${pal.accent}" stroke-width="1.6"/>
            <path d="M 0 -30 C 68 -45 68 45 0 30" fill="none" stroke="${pal.accent}" stroke-width="2.2" stroke-dasharray="4 2"/>
            <path d="M 0 -30 C 92 -60 92 60 0 30" fill="none" stroke="${pal.accent}" stroke-width="1.6"/>
            <!-- Planet / Cell Core -->
            <circle cx="0" cy="0" r="24" fill="#1d4ed8" stroke="#93c5fd" stroke-width="2.5"/>
            <path d="M -14 -6 Q 0 -14 14 -4 Q 4 12 -12 8 Z" fill="#22c55e"/>
            <!-- Cosmic Ray Bolts -->
            <path d="M -85 -38 L -52 -14 L -58 -6 L -34 10" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
          </g>
        `;
      }

      case "seed-digital-twin":
      case "root-auxin-fountain":
      case "statolith-sedimentation": {
        // Root Tip Columella with Falling Statoliths & Green Auxin Reverse Fountain
        return `
          <g transform="translate(${cx},${cy})">
            <!-- Root Outline -->
            <path d="M -30 -44 L -26 10 Q 0 48 26 10 L 30 -44 Z" fill="rgba(22,101,52,0.75)" stroke="#86efac" stroke-width="2.5"/>
            <!-- Central Auxin Down-stream -->
            <path d="M 0 -40 L 0 14" fill="none" stroke="#4ade80" stroke-width="4"/>
            <!-- Lateral Auxin Reverse Fountain Up-streams -->
            <path d="M 0 14 Q -20 10 -20 -25" fill="none" stroke="#bef264" stroke-width="2.5" stroke-dasharray="4 2"/>
            <path d="M 0 14 Q 20 10 20 -25" fill="none" stroke="#bef264" stroke-width="2.5" stroke-dasharray="4 2"/>
            <!-- Statolith Amyloplast Crystals in Root Cap -->
            <polygon points="-8,20 -3,16 0,22 -6,25" fill="#c084fc" stroke="#fff" stroke-width="1"/>
            <polygon points="4,19 10,16 12,23 5,25" fill="#c084fc" stroke="#fff" stroke-width="1"/>
            <polygon points="-2,26 4,24 6,30 -1,31" fill="#c084fc" stroke="#fff" stroke-width="1"/>
          </g>
        `;
      }

      case "calcium-wave-rosette":
      case "arabidopsis-3d-rosette": {
        // Top-Down Glowing Arabidopsis Rosette with GCaMP Calcium Wave Rings
        return `
          <g transform="translate(${cx},${cy})">
            <circle cx="0" cy="0" r="42" fill="none" stroke="#22d3ee" stroke-width="1.5" stroke-dasharray="3 3"/>
            <circle cx="0" cy="0" r="28" fill="none" stroke="#4ade80" stroke-width="2"/>
            <!-- Rosette Leaves -->
            <ellipse cx="0" cy="-24" rx="11" ry="20" fill="#16a34a" stroke="#86efac" stroke-width="1.5"/>
            <ellipse cx="0" cy="24" rx="11" ry="20" fill="#16a34a" stroke="#86efac" stroke-width="1.5"/>
            <ellipse cx="-24" cy="0" rx="20" ry="11" fill="#16a34a" stroke="#86efac" stroke-width="1.5"/>
            <ellipse cx="24" cy="0" rx="20" ry="11" fill="#22c55e" stroke="#fef08a" stroke-width="2"/>
            <ellipse cx="-17" cy="-17" rx="14" ry="9" transform="rotate(45 -17 -17)" fill="#15803d" stroke="#86efac" stroke-width="1.2"/>
            <ellipse cx="17" cy="-17" rx="14" ry="9" transform="rotate(-45 17 -17)" fill="#15803d" stroke="#86efac" stroke-width="1.2"/>
            <ellipse cx="-17" cy="17" rx="14" ry="9" transform="rotate(-45 -17 17)" fill="#15803d" stroke="#86efac" stroke-width="1.2"/>
            <ellipse cx="17" cy="17" rx="14" ry="9" transform="rotate(45 17 17)" fill="#22c55e" stroke="#fef08a" stroke-width="1.8"/>
            <circle cx="0" cy="0" r="6" fill="#bef264"/>
          </g>
        `;
      }

      case "space-tomato-veggie": {
        // Dwarf Space Tomato Plant with Glowing Red Cherry Tomatoes
        return `
          <g transform="translate(${cx},${cy})">
            <path d="M 0 38 L 0 -24 M 0 6 L -28 -8 M 0 -6 L 28 -18 M 0 16 L 24 4" fill="none" stroke="#16a34a" stroke-width="3.5" stroke-linecap="round"/>
            <ellipse cx="-28" cy="-8" rx="14" ry="7" fill="#22c55e"/>
            <ellipse cx="28" cy="-18" rx="14" ry="7" fill="#22c55e"/>
            <ellipse cx="0" cy="-26" rx="15" ry="8" fill="#22c55e"/>
            <!-- Cherry Tomatoes -->
            <circle cx="-14" cy="4" r="10" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
            <circle cx="16" cy="-4" r="11" fill="#dc2626" stroke="#fca5a5" stroke-width="1.5"/>
            <circle cx="-6" cy="-14" r="9" fill="#f97316" stroke="#fed7aa" stroke-width="1.5"/>
          </g>
        `;
      }

      case "closed-loop-dome":
      case "regolith-sinter-brick":
      case "mycelium-network":
      case "microbe-rhizosphere":
      case "wheat-field-timeline": {
        // Lunar Bio-Dome with Mycelial Regolith Bricks & O2/CO2 Recycling Arrows
        return `
          <g transform="translate(${cx},${cy})">
            <!-- Regolith Base Bricks -->
            <rect x="-68" y="20" width="42" height="18" rx="3" fill="#78350f" stroke="#fdba74" stroke-width="1.5"/>
            <rect x="-22" y="20" width="44" height="18" rx="3" fill="#9a3412" stroke="#fdba74" stroke-width="1.5"/>
            <rect x="26" y="20" width="42" height="18" rx="3" fill="#78350f" stroke="#fdba74" stroke-width="1.5"/>
            <!-- Bio-Dome Arch -->
            <path d="M -60 20 A 60 54 0 0 1 60 20 Z" fill="rgba(20,83,45,0.55)" stroke="#4ade80" stroke-width="2.5"/>
            <!-- Recycling Loop Arrows -->
            <path d="M -32 0 A 26 20 0 1 1 32 0" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 2"/>
            <!-- Mycelial Gold Threads in Regolith -->
            <path d="M -50 29 Q -20 22 0 32 Q 25 22 50 29" fill="none" stroke="#fde047" stroke-width="2"/>
            <!-- Sprouting Crops Inside Dome -->
            <circle cx="-18" cy="6" r="10" fill="#22c55e"/>
            <circle cx="0" cy="-2" r="13" fill="#16a34a"/>
            <circle cx="18" cy="6" r="10" fill="#22c55e"/>
          </g>
        `;
      }

      case "astronaut-muscle-vitals":
      case "mineral-bone-shield":
      case "mitochondria-powerhouse":
      case "ros-spark-wave": {
        // Bio-Action Medical Hologram: Muscle/Bone/Mitochondria + Salad Shield
        return `
          <g transform="translate(${cx},${cy})">
            <rect x="-68" y="-38" width="136" height="76" rx="10" fill="rgba(40,10,18,0.8)" stroke="#f87171" stroke-width="2"/>
            <!-- Vital Heart/Muscle Icon -->
            <circle cx="-28" cy="0" r="22" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
            <path d="M -42 2 L -34 2 L -30 -10 L -25 12 L -20 -4 L -14 2" fill="none" stroke="#4ade80" stroke-width="2.5"/>
            <!-- Countermeasure Arrow -->
            <path d="M 0 0 L 16 0" stroke="#fde047" stroke-width="3"/>
            <!-- Protective Plant Phytochemical Shield -->
            <polygon points="36,-22 54,-12 50,14 36,24 22,14 18,-12" fill="#15803d" stroke="#86efac" stroke-width="2"/>
            <text x="36" y="4" font-size="8" fill="#fff" text-anchor="middle" font-weight="bold">CA²⁺/RNA</text>
          </g>
        `;
      }

      case "aruco-color-card": {
        // ABCD v2 Calibration Card with 4 ArUco Corners, Munsell Chips & Petri Dish
        return `
          <g transform="translate(${cx},${cy})">
            <rect x="-64" y="-40" width="128" height="80" rx="6" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
            <!-- 4 ArUco Fiducial Corners -->
            <rect x="-58" y="-34" width="14" height="14" fill="#0f172a"/>
            <rect x="-54" y="-30" width="6" height="6" fill="#fff"/>
            <rect x="44" y="-34" width="14" height="14" fill="#0f172a"/>
            <rect x="48" y="-30" width="6" height="6" fill="#fff"/>
            <rect x="-58" y="20" width="14" height="14" fill="#0f172a"/>
            <rect x="-54" y="24" width="6" height="6" fill="#fff"/>
            <rect x="44" y="20" width="14" height="14" fill="#0f172a"/>
            <rect x="48" y="24" width="6" height="6" fill="#fff"/>
            <!-- Munsell Color Chips -->
            <rect x="-32" y="-32" width="12" height="9" fill="#166534"/>
            <rect x="-18" y="-32" width="12" height="9" fill="#22c55e"/>
            <rect x="-4" y="-32" width="12" height="9" fill="#84cc16"/>
            <rect x="10" y="-32" width="12" height="9" fill="#9333ea"/>
            <rect x="24" y="-32" width="12" height="9" fill="#78350f"/>
            <!-- Central Seedling Dish -->
            <circle cx="0" cy="5" r="24" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
            <path d="M 0 -6 L 0 22 M 0 4 L -10 14 M 0 9 L 12 18" fill="none" stroke="#16a34a" stroke-width="2.5"/>
            <circle cx="-4" cy="-8" r="5" fill="#22c55e"/><circle cx="4" cy="-8" r="5" fill="#22c55e"/>
          </g>
        `;
      }

      case "isometric-lunar-city":
      case "hex-board-planet":
      case "capoeira-lunar-roda":
      case "classroom-rocket-kit":
      case "suborbital-rocket-arc":
      case "constellation-hub":
      default: {
        // Isometric Lunar Base / Rocket & Connected Constellation Nodes
        return `
          <g transform="translate(${cx},${cy})">
            <!-- Isometric Hex Platform -->
            <polygon points="0,-36 58,-12 58,20 0,42 -58,20 -58,-12" fill="rgba(30,27,75,0.8)" stroke="${pal.accent}" stroke-width="2.2"/>
            <!-- Lunar Habitat Dome -->
            <path d="M -28 8 A 28 26 0 0 1 28 8 Z" fill="#38bdf8" fill-opacity="0.35" stroke="#bae6fd" stroke-width="2"/>
            <!-- Solar Array Wings -->
            <rect x="-50" y="-10" width="16" height="22" fill="#1d4ed8" stroke="#93c5fd" stroke-width="1.2"/>
            <rect x="34" y="-10" width="16" height="22" fill="#1d4ed8" stroke="#93c5fd" stroke-width="1.2"/>
            <!-- Mini Rocket / Spire -->
            <path d="M 0 -32 L -7 -10 L 7 -10 Z" fill="#f43f5e" stroke="#fff" stroke-width="1.2"/>
            <circle cx="0" cy="4" r="6" fill="#4ade80"/>
          </g>
        `;
      }
    }
  }

  /**
   * Renders a Comic Book Issue Cover SVG for the Newsstand card
   */
  function renderCoverSVG(comic) {
    const style = comic.art_style || "blueprint-manga";
    const pal = STYLE_PALETTES[style] || STYLE_PALETTES["blueprint-manga"];
    const uid = `cov-${comic.issue_number}`;
    const w = 360;
    const h = 230;

    const chars = comic.characters || ["doc-b", "sprout"];
    const c1 = chars[0] || "doc-b";
    const c2 = chars[1] || "pixel";

    return `
      <svg viewBox="0 0 ${w} ${h}" class="comic-cover-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(comic.comic_title)}">
        ${renderStyleBackdrop(style, w, h, "wonder", uid)}
        <!-- Top Comic Masthead Banner -->
        <rect x="8" y="8" width="${w - 16}" height="28" rx="5" fill="rgba(0,0,0,0.65)" stroke="${pal.accent}" stroke-width="1.5"/>
        <text x="16" y="26" font-size="11" font-weight="800" fill="${pal.accent}" font-family="system-ui, sans-serif" letter-spacing="0.5">
          COSE COMICS #${String(comic.issue_number).padStart(2, "0")} · ${esc(comic.series_title.toUpperCase())}
        </text>
        <rect x="${w - 78}" y="12" width="64" height="20" rx="4" fill="${pal.badgeBg}"/>
        <text x="${w - 46}" y="25" font-size="9.5" font-weight="800" fill="#fff" text-anchor="middle" font-family="monospace">
          K–12 FREE
        </text>

        <!-- Central Scientific Motif Artwork -->
        <g transform="translate(0, 8)">
          ${renderScientificMotif(comic.scene_motif, style, "discovery", w, h)}
        </g>

        <!-- Left & Right Featured Cast Characters -->
        ${renderCharacter(c1, 56, 138, 1.05, "wonder")}
        ${renderCharacter(c2, 304, 140, 1.0, "discovery")}

        <!-- Bottom Action Metric Ribbon -->
        <rect x="10" y="${h - 34}" width="${w - 20}" height="24" rx="5" fill="rgba(9,13,22,0.86)" stroke="${pal.accent2}" stroke-width="1.3"/>
        <text x="${w / 2}" y="${h - 18}" font-size="9.5" font-weight="700" fill="${pal.ink}" text-anchor="middle" font-family="monospace">
          ${esc(comic.emoji)} ${esc(comic.metric_badge.slice(0, 46))}
        </text>
      </svg>
    `;
  }

  /**
   * Renders a Single Comic Panel SVG Illustration inside the 5-Panel Comic Strip
   */
  function renderPanelSVG(comic, panel) {
    const style = comic.art_style || "blueprint-manga";
    const pal = STYLE_PALETTES[style] || STYLE_PALETTES["blueprint-manga"];
    const isWide = panel.layout === "wide-hero" || panel.layout === "wide-finale";
    const w = isWide ? 720 : 420;
    const h = 220;
    const uid = `pnl-${comic.issue_number}-${panel.number}`;

    const chars = comic.characters || ["doc-b", "sprout", "pixel"];
    const speaker = panel.speaker || chars[0] || "doc-b";
    const buddy = chars.find((c) => c !== speaker) || "pixel";

    // Stage-specific visual badge color
    const stageColors = {
      wonder: pal.accent,
      challenge: "#ef4444",
      experiment: "#38bdf8",
      discovery: "#4ade80",
      finale: "#fbbf24"
    };
    const stageStroke = stageColors[panel.scene_type] || pal.accent;

    return `
      <svg viewBox="0 0 ${w} ${h}" class="comic-panel-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Panel ${panel.number}: ${esc(panel.stage)}">
        ${renderStyleBackdrop(style, w, h, panel.scene_type, uid)}

        <!-- Panel Border Frame -->
        <rect x="3" y="3" width="${w - 6}" height="${h - 6}" rx="8" fill="none" stroke="${stageStroke}" stroke-width="2.5"/>

        <!-- Central Scientific Scene Motif -->
        <g transform="translate(${isWide ? 20 : 10}, 6)">
          ${renderScientificMotif(comic.scene_motif, style, panel.scene_type, w, h)}
        </g>

        <!-- Primary Speaker Character (Left) -->
        ${renderCharacter(speaker, isWide ? 86 : 62, 134, 1.15, panel.scene_type)}

        <!-- Companion Character (Right) -->
        ${renderCharacter(buddy, isWide ? w - 88 : w - 60, 138, 1.0, panel.scene_type)}

        ${
          isWide && chars.length > 2
            ? renderCharacter(chars[2], w - 175, 144, 0.92, panel.scene_type)
            : ""
        }

        <!-- Scientific Data Callout Stamp (Top Right) -->
        <g transform="translate(${w - 185}, 12)">
          <rect x="0" y="0" width="172" height="24" rx="5" fill="rgba(9,13,22,0.88)" stroke="${stageStroke}" stroke-width="1.5"/>
          <text x="86" y="15.5" font-size="9.5" font-weight="700" fill="${stageStroke}" text-anchor="middle" font-family="monospace">
            ${esc((panel.callout || "").slice(0, 25))}
          </text>
        </g>
      </svg>
    `;
  }

  /**
   * Renders a standalone Character Avatar SVG for the Cast & Universe cards
   */
  function renderCharacterAvatarSVG(charId, color) {
    return `
      <svg viewBox="0 0 110 110" class="cast-avatar-svg" xmlns="http://www.w3.org/2000/svg">
        <circle cx="55" cy="55" r="50" fill="#0f172a" stroke="${esc(color)}" stroke-width="3"/>
        <circle cx="55" cy="55" r="42" fill="${esc(color)}" fill-opacity="0.16"/>
        ${renderCharacter(charId, 55, 54, 1.25, "discovery")}
      </svg>
    `;
  }

  window.CoSEArtEngine = {
    STYLE_PALETTES,
    renderCoverSVG,
    renderPanelSVG,
    renderCharacterAvatarSVG
  };
})();
