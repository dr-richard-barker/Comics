/**
 * CoSE Science Comics — 5-Layer Hyper-Detailed Academic Graphic Novel SVG Engine
 * Supports:
 *  - Contrast-optimized Dark Mode ("Deep-Space Console") & Light Mode ("Archival Print Ink")
 *  - 5-Layer Panel Architecture:
 *      Layer 1: Coordinate ruler ticks, lab/spacecraft environment & calibrated Scale Bar
 *      Layer 2: High-detail scientific apparatus, SVG animations & Circular Subcellular Zoom Inset
 *      Layer 3: 4 Annotated Leader-Line Callouts & Governing Equation Plaque
 *      Layer 4: Embedded Quantitative Mini-Plot HUD (Line Kinetics / Grouped Bars / Volcano Plot)
 *      Layer 5: Detailed Character Rigs holding scientific lab props
 *  - Standalone Full-Page Graphic Novel Sheet SVG Compiler (for SVG, HD PNG, Animated GIF & PDF export)
 */
(function () {
  "use strict";

  const STYLE_PALETTES_DARK = {
    "blueprint-manga": {
      bg1: "#061626", bg2: "#0c2d4d", accent: "#38bdf8", accent2: "#fbbf24",
      ink: "#f0f9ff", subInk: "#bae6fd", plaqueBg: "rgba(7,18,32,0.92)",
      plaqueStroke: "#38bdf8", gridColor: "rgba(56,189,248,0.18)", badgeBg: "#0284c7"
    },
    "cyber-genomics": {
      bg1: "#110926", bg2: "#231245", accent: "#c084fc", accent2: "#2dd4bf",
      ink: "#faf5ff", subInk: "#e9d5ff", plaqueBg: "rgba(15,8,34,0.92)",
      plaqueStroke: "#c084fc", gridColor: "rgba(192,132,252,0.17)", badgeBg: "#7c3aed"
    },
    "cosmic-kirby": {
      bg1: "#1c0f04", bg2: "#3d1804", accent: "#fbbf24", accent2: "#fb923c",
      ink: "#fffbeb", subInk: "#fde68a", plaqueBg: "rgba(24,12,4,0.92)",
      plaqueStroke: "#fbbf24", gridColor: "rgba(251,191,36,0.16)", badgeBg: "#b45309"
    },
    "botanical-ghibli": {
      bg1: "#071f13", bg2: "#123b25", accent: "#4ade80", accent2: "#facc15",
      ink: "#f0fdf4", subInk: "#bbf7d0", plaqueBg: "rgba(6,24,15,0.92)",
      plaqueStroke: "#4ade80", gridColor: "rgba(74,222,128,0.16)", badgeBg: "#15803d"
    },
    "solarpunk-woodcut": {
      bg1: "#1f1009", bg2: "#3d1e10", accent: "#fb923c", accent2: "#a3e635",
      ink: "#fff7ed", subInk: "#fed7aa", plaqueBg: "rgba(26,13,7,0.92)",
      plaqueStroke: "#fb923c", gridColor: "rgba(251,146,60,0.16)", badgeBg: "#c2410c"
    },
    "bio-action": {
      bg1: "#21080e", bg2: "#450f1a", accent: "#f87171", accent2: "#34d399",
      ink: "#fef2f2", subInk: "#fecaca", plaqueBg: "rgba(28,7,12,0.92)",
      plaqueStroke: "#f87171", gridColor: "rgba(248,113,113,0.17)", badgeBg: "#b91c1c"
    },
    "maker-risograph": {
      bg1: "#071f1f", bg2: "#114240", accent: "#2dd4bf", accent2: "#fb7185",
      ink: "#f0fdfa", subInk: "#99f6e4", plaqueBg: "rgba(6,24,24,0.92)",
      plaqueStroke: "#2dd4bf", gridColor: "rgba(45,212,191,0.17)", badgeBg: "#0f766e"
    },
    "pixel-isometric": {
      bg1: "#0e0f29", bg2: "#1e2158", accent: "#818cf8", accent2: "#38bdf8",
      ink: "#eef2ff", subInk: "#c7d2fe", plaqueBg: "rgba(12,13,36,0.92)",
      plaqueStroke: "#818cf8", gridColor: "rgba(129,140,248,0.19)", badgeBg: "#4338ca"
    }
  };

  // High-contrast Archival Print / Daylight Graphic Novel Palettes (WCAG AA/AAA >= 7:1 text)
  const STYLE_PALETTES_LIGHT = {
    "blueprint-manga": {
      bg1: "#f0f7ff", bg2: "#dbeafe", accent: "#0369a1", accent2: "#b45309",
      ink: "#0f172a", subInk: "#1e3a8a", plaqueBg: "rgba(255,255,255,0.95)",
      plaqueStroke: "#0369a1", gridColor: "rgba(3,105,161,0.16)", badgeBg: "#0369a1"
    },
    "cyber-genomics": {
      bg1: "#faf5ff", bg2: "#ede9fe", accent: "#6d28d9", accent2: "#0f766e",
      ink: "#1e1b4b", subInk: "#4c1d95", plaqueBg: "rgba(255,255,255,0.95)",
      plaqueStroke: "#6d28d9", gridColor: "rgba(109,40,217,0.14)", badgeBg: "#6d28d9"
    },
    "cosmic-kirby": {
      bg1: "#fffbeb", bg2: "#fef3c7", accent: "#b45309", accent2: "#c2410c",
      ink: "#1c1917", subInk: "#78350f", plaqueBg: "rgba(255,255,255,0.95)",
      plaqueStroke: "#b45309", gridColor: "rgba(180,83,9,0.15)", badgeBg: "#b45309"
    },
    "botanical-ghibli": {
      bg1: "#f0fdf4", bg2: "#dcfce7", accent: "#15803d", accent2: "#a16207",
      ink: "#052e16", subInk: "#14532d", plaqueBg: "rgba(255,255,255,0.95)",
      plaqueStroke: "#15803d", gridColor: "rgba(21,128,61,0.15)", badgeBg: "#15803d"
    },
    "solarpunk-woodcut": {
      bg1: "#fff7ed", bg2: "#ffedd5", accent: "#c2410c", accent2: "#3f6212",
      ink: "#1c1917", subInk: "#7c2d12", plaqueBg: "rgba(255,255,255,0.95)",
      plaqueStroke: "#c2410c", gridColor: "rgba(194,65,12,0.15)", badgeBg: "#c2410c"
    },
    "bio-action": {
      bg1: "#fef2f2", bg2: "#fee2e2", accent: "#b91c1c", accent2: "#047857",
      ink: "#1e1b4b", subInk: "#7f1d1d", plaqueBg: "rgba(255,255,255,0.95)",
      plaqueStroke: "#b91c1c", gridColor: "rgba(185,28,28,0.14)", badgeBg: "#b91c1c"
    },
    "maker-risograph": {
      bg1: "#f0fdfa", bg2: "#ccfbf1", accent: "#0f766e", accent2: "#be123c",
      ink: "#042f2e", subInk: "#134e4a", plaqueBg: "rgba(255,255,255,0.95)",
      plaqueStroke: "#0f766e", gridColor: "rgba(15,118,110,0.15)", badgeBg: "#0f766e"
    },
    "pixel-isometric": {
      bg1: "#eef2ff", bg2: "#e0e7ff", accent: "#3730a3", accent2: "#0369a1",
      ink: "#0f172a", subInk: "#312e81", plaqueBg: "rgba(255,255,255,0.95)",
      plaqueStroke: "#3730a3", gridColor: "rgba(55,48,163,0.15)", badgeBg: "#3730a3"
    }
  };

  function getActiveTheme(overrideTheme) {
    if (overrideTheme === "light" || overrideTheme === "dark") return overrideTheme;
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta && meta.content === "light") return "light";
    if (meta && meta.content === "dark") return "dark";
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  }

  function getPalette(style, overrideTheme) {
    const theme = getActiveTheme(overrideTheme);
    const map = theme === "light" ? STYLE_PALETTES_LIGHT : STYLE_PALETTES_DARK;
    return Object.assign({ theme }, map[style] || map["blueprint-manga"]);
  }

  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /**
   * Layer 1: Technical Blueprint Backdrop, Ruler Coordinate Ticks & Lab Architecture
   */
  function renderStyleBackdrop(style, w, h, stage, uid, pal, phase) {
    const p = phase || 0;
    const ticksTop = [];
    for (let x = 30; x < w - 20; x += 30) {
      const tall = x % 90 === 0;
      ticksTop.push(
        `<line x1="${x}" y1="4" x2="${x}" y2="${tall ? 11 : 7}" stroke="${pal.accent}" stroke-opacity="0.45" stroke-width="1"/>`
      );
      if (tall) {
        ticksTop.push(
          `<text x="${x + 2}" y="11" font-size="6.5" fill="${pal.subInk}" opacity="0.65" font-family="monospace">${x}</text>`
        );
      }
    }

    const defs = `
      <defs>
        <linearGradient id="bg-${uid}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${pal.bg1}"/>
          <stop offset="100%" stop-color="${pal.bg2}"/>
        </linearGradient>
        <pattern id="dots-${uid}" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1.35" fill="${pal.gridColor}"/>
        </pattern>
        <pattern id="grid-${uid}" width="22" height="22" patternUnits="userSpaceOnUse">
          <path d="M 22 0 L 0 0 0 22" fill="none" stroke="${pal.gridColor}" stroke-width="0.9"/>
        </pattern>
        <radialGradient id="glow-${uid}" cx="48%" cy="46%" r="54%">
          <stop offset="0%" stop-color="${pal.accent}" stop-opacity="${pal.theme === "light" ? "0.14" : "0.24"}"/>
          <stop offset="100%" stop-color="${pal.bg1}" stop-opacity="0"/>
        </radialGradient>
      </defs>
    `;

    let styleTexture = `<rect width="${w}" height="${h}" fill="url(#grid-${uid})"/>`;
    if (style === "cosmic-kirby" || style === "maker-risograph" || style === "solarpunk-woodcut") {
      styleTexture = `
        <rect width="${w}" height="${h}" fill="url(#dots-${uid})"/>
        <rect width="${w}" height="${h}" fill="url(#grid-${uid})" opacity="0.5"/>
      `;
    }

    // Environmental perspective horizon & lab bay architecture lines
    const horizonY = Math.round(h * 0.77);
    const pulseR = 16 + Math.sin(p * Math.PI * 2) * 4;

    return `
      ${defs}
      <rect width="${w}" height="${h}" fill="url(#bg-${uid})"/>
      <rect width="${w}" height="${h}" fill="url(#glow-${uid})"/>
      ${styleTexture}
      <!-- Lab / Spacecraft Structural Bulkhead Horizon -->
      <line x1="6" y1="${horizonY}" x2="${w - 6}" y2="${horizonY}" stroke="${pal.accent}" stroke-opacity="0.35" stroke-width="1.2" stroke-dasharray="6 3"/>
      <g>${ticksTop.join("")}</g>
      <!-- Ambient Telemetry Target Reticle -->
      <g transform="translate(${w * 0.46}, ${h * 0.48})" opacity="0.28">
        <circle cx="0" cy="0" r="${pulseR + 48}" fill="none" stroke="${pal.accent}" stroke-width="0.9" stroke-dasharray="4 4"/>
        <line x1="-${pulseR + 56}" y1="0" x2="-${pulseR + 36}" y2="0" stroke="${pal.accent}" stroke-width="1"/>
        <line x1="${pulseR + 36}" y1="0" x2="${pulseR + 56}" y2="0" stroke="${pal.accent}" stroke-width="1"/>
        <line x1="0" y1="-${pulseR + 56}" x2="0" y2="-${pulseR + 36}" stroke="${pal.accent}" stroke-width="1"/>
        <line x1="0" y1="${pulseR + 36}" x2="0" y2="${pulseR + 56}" stroke="${pal.accent}" stroke-width="1"/>
      </g>
    `;
  }

  /**
   * Layer 2B: Circular Subcellular / Microscopic Zoom Inset (Top-Center-Right or Left)
   */
  function renderZoomInset(comic, panel, x, y, r, pal, phase) {
    const label = (panel && panel.zoom_inset) || comic.zoom_inset || "ZOOM 1000×: Subcellular Mechanism";
    const motif = comic.scene_motif;
    const angle = (phase || 0) * 360;

    let microArt = "";
    if (motif.includes("cfd") || motif.includes("fvcb") || motif.includes("led") || motif.includes("pot")) {
      // Stomatal guard cell pore + diffusing O2/CO2 molecules
      microArt = `
        <ellipse cx="0" cy="0" rx="18" ry="11" fill="#15803d" stroke="#86efac" stroke-width="1.5"/>
        <ellipse cx="0" cy="0" rx="8" ry="3.5" fill="#0f172a" stroke="#4ade80" stroke-width="1.2"/>
        <circle cx="-10" cy="-7" r="3" fill="#ef4444">
          <animate attributeName="cy" values="-5;-14;-5" dur="2.2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="9" cy="8" r="3" fill="#38bdf8">
          <animate attributeName="cy" values="12;3;12" dur="2.2s" repeatCount="indefinite"/>
        </circle>
        <text x="0" y="19" font-size="5.8" fill="${pal.ink}" text-anchor="middle" font-family="monospace">g_s Stomatal Pore</text>
      `;
    } else if (motif.includes("chromatin") || motif.includes("splicing") || motif.includes("umap") || motif.includes("drem") || motif.includes("gwas")) {
      // Nucleosome histone spool + H3K27me3 tag
      microArt = `
        <circle cx="-8" cy="-2" r="9" fill="#9333ea" stroke="#f3e8ff" stroke-width="1.3"/>
        <circle cx="9" cy="2" r="9" fill="#7c3aed" stroke="#f3e8ff" stroke-width="1.3"/>
        <path d="M -22 6 Q -8 -16 0 0 Q 9 16 22 -6" fill="none" stroke="#38bdf8" stroke-width="2"/>
        <circle cx="-8" cy="-12" r="3.5" fill="#f43f5e"/>
        <text x="0" y="19" font-size="5.8" fill="${pal.ink}" text-anchor="middle" font-family="monospace">H3K27me3 PRC2</text>
      `;
    } else if (motif.includes("ray") || motif.includes("quantum") || motif.includes("magnet") || motif.includes("helmholtz")) {
      // Radical pair entangled electron spins [FAD•- ... TrpH•+]
      microArt = `
        <circle cx="-10" cy="-1" r="8" fill="none" stroke="#38bdf8" stroke-width="1.4" stroke-dasharray="2 2"/>
        <circle cx="10" cy="-1" r="8" fill="none" stroke="#fbbf24" stroke-width="1.4" stroke-dasharray="2 2"/>
        <g transform="rotate(${angle} -10 -1)">
          <line x1="-10" y1="5" x2="-10" y2="-7" stroke="#38bdf8" stroke-width="2"/>
          <polygon points="-10,-9 -13,-4 -7,-4" fill="#38bdf8"/>
        </g>
        <g transform="rotate(${-angle + 45} 10 -1)">
          <line x1="10" y1="5" x2="10" y2="-7" stroke="#fbbf24" stroke-width="2"/>
          <polygon points="10,-9 7,-4 13,-4" fill="#fbbf24"/>
        </g>
        <text x="0" y="19" font-size="5.6" fill="${pal.ink}" text-anchor="middle" font-family="monospace">[FAD•⁻ ··· TrpH•⁺]</text>
      `;
    } else if (motif.includes("regolith") || motif.includes("mycelium") || motif.includes("dome") || motif.includes("microbe")) {
      // Sintered regolith neck + golden fungal hypha capillary bridge
      microArt = `
        <polygon points="-18,-6 -6,-13 2,-3 -8,8" fill="#78350f" stroke="#fdba74" stroke-width="1.2"/>
        <polygon points="3,-8 17,-11 19,4 5,9" fill="#9a3412" stroke="#fdba74" stroke-width="1.2"/>
        <path d="M -4 -2 Q 2 -6 6 -2 Q 3 4 -4 -2" fill="#38bdf8" opacity="0.75"/>
        <path d="M -20 4 Q 0 -3 20 3" fill="none" stroke="#fde047" stroke-width="2"/>
        <text x="0" y="19" font-size="5.6" fill="${pal.ink}" text-anchor="middle" font-family="monospace">Sinter Pore + Hypha</text>
      `;
    } else {
      // Cellular GCaMP / Auxin / Statolith / Sarcomere zoom
      microArt = `
        <rect x="-16" y="-12" width="32" height="22" rx="4" fill="rgba(22,163,74,0.28)" stroke="#4ade80" stroke-width="1.5"/>
        <polygon points="-6,3 -1,-3 4,4 -3,7" fill="#c084fc" stroke="#fff" stroke-width="1"/>
        <polygon points="5,1 11,-2 13,5 7,7" fill="#c084fc" stroke="#fff" stroke-width="1"/>
        <path d="M -12 -6 L 12 -6" stroke="#fde047" stroke-width="2" stroke-dasharray="3 2"/>
        <text x="0" y="19" font-size="5.6" fill="${pal.ink}" text-anchor="middle" font-family="monospace">Statocyte / Ca²⁺ Flux</text>
      `;
    }

    return `
      <g class="zoom-inset-group">
        <!-- Magnifying Cone Rays to Main Specimen -->
        <line x1="${x + r * 0.7}" y1="${y + r * 0.6}" x2="${x + r * 1.9}" y2="${y + r * 1.35}" stroke="${pal.accent2}" stroke-width="1.1" stroke-dasharray="3 2" opacity="0.75"/>
        <line x1="${x + r * 0.2}" y1="${y + r * 0.95}" x2="${x + r * 1.7}" y2="${y + r * 1.45}" stroke="${pal.accent2}" stroke-width="1.1" stroke-dasharray="3 2" opacity="0.75"/>
        <!-- Circular Microscope Lens -->
        <g transform="translate(${x}, ${y})">
          <circle cx="0" cy="0" r="${r + 2}" fill="${pal.plaqueBg}" stroke="${pal.accent2}" stroke-width="2.2"/>
          <circle cx="0" cy="0" r="${r - 2}" fill="none" stroke="${pal.accent}" stroke-width="0.8" stroke-dasharray="3 3"/>
          ${microArt}
          <!-- Lens Banner Label -->
          <rect x="${-r - 6}" y="${-r - 12}" width="${r * 2 + 12}" height="12" rx="3" fill="${pal.badgeBg}"/>
          <text x="0" y="${-r - 3.5}" font-size="6.3" font-weight="800" fill="#ffffff" text-anchor="middle" font-family="monospace">
            ${esc(label.slice(0, 30))}
          </text>
        </g>
      </g>
    `;
  }

  /**
   * Layer 4: Embedded Quantitative Mini-Plot HUD (Line Kinetics / Bar Chart / Volcano Plot)
   */
  function renderMiniPlotHUD(miniPlot, x, y, w, h, pal, phase) {
    if (!miniPlot) return "";
    const pType = miniPlot.type || "line-kinetics";
    const sA = miniPlot.series_a || [1, 2, 3, 4, 5, 6];
    const sB = miniPlot.series_b || [1, 1.5, 2, 2.2, 2.4, 2.5];
    const plotW = w - 26;
    const plotH = h - 38;
    const ox = 20;
    const oy = 22;

    const allVals = sA.concat(sB).map((v) => Math.abs(Number(v) || 0));
    const maxVal = Math.max(1, ...allVals) * 1.12;

    let chartBody = "";
    if (pType === "bar-comparison") {
      const n = Math.min(6, sA.length);
      const step = plotW / n;
      const bars = [];
      for (let i = 0; i < n; i++) {
        const va = Math.abs(sA[i]) / maxVal;
        const vb = Math.abs(sB[i]) / maxVal;
        const ha = Math.max(3, va * (plotH - 6));
        const hb = Math.max(3, vb * (plotH - 6));
        const bx = ox + i * step + 3;
        const bw = Math.max(4, step * 0.36);
        bars.push(
          `<rect x="${bx}" y="${oy + plotH - ha}" width="${bw}" height="${ha}" rx="1.2" fill="${pal.accent}"/>`,
          `<rect x="${bx + bw + 1.5}" y="${oy + plotH - hb}" width="${bw}" height="${hb}" rx="1.2" fill="${pal.accent2}" opacity="0.85"/>`
        );
      }
      chartBody = bars.join("");
    } else if (pType === "volcano-deg") {
      // Volcano scatter plot with significance line
      const threshY = oy + plotH * 0.45;
      const dots = sA.map((fc, i) => {
        const px = ox + plotW * 0.5 + (fc / 3.5) * (plotW * 0.42);
        const py = oy + plotH - Math.min(1, (sB[i] || 2) / 5.5) * (plotH - 6);
        const col = fc > 0 ? "#ef4444" : "#38bdf8";
        return `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="3.2" fill="${col}" stroke="${pal.ink}" stroke-width="0.7"/>`;
      });
      chartBody = `
        <line x1="${ox}" y1="${threshY}" x2="${ox + plotW}" y2="${threshY}" stroke="#ef4444" stroke-width="1" stroke-dasharray="2 2"/>
        <line x1="${ox + plotW * 0.5}" y1="${oy}" x2="${ox + plotW * 0.5}" y2="${oy + plotH}" stroke="${pal.subInk}" stroke-width="0.8" stroke-dasharray="2 2"/>
        ${dots.join("")}
      `;
    } else {
      // Default: Dual-Series Line Kinetics Plot with animated scan cursor
      const ptsA = [];
      const ptsB = [];
      const n = Math.max(2, sA.length);
      for (let i = 0; i < n; i++) {
        const px = ox + (i / (n - 1)) * plotW;
        const pya = oy + plotH - (Math.abs(sA[i]) / maxVal) * (plotH - 6);
        const pyb = oy + plotH - (Math.abs(sB[i]) / maxVal) * (plotH - 6);
        ptsA.push(`${px.toFixed(1)},${pya.toFixed(1)}`);
        ptsB.push(`${px.toFixed(1)},${pyb.toFixed(1)}`);
      }
      const scanX = ox + ((phase || 0.35) % 1) * plotW;
      chartBody = `
        <polyline points="${ptsB.join(" ")}" fill="none" stroke="${pal.accent2}" stroke-width="1.7" stroke-dasharray="3 2"/>
        <polyline points="${ptsA.join(" ")}" fill="none" stroke="${pal.accent}" stroke-width="2.2"/>
        ${ptsA
          .map((pt) => {
            const [cx, cy] = pt.split(",");
            return `<circle cx="${cx}" cy="${cy}" r="2.2" fill="${pal.accent}"/>`;
          })
          .join("")}
        <line x1="${scanX.toFixed(1)}" y1="${oy}" x2="${scanX.toFixed(1)}" y2="${oy + plotH}" stroke="${pal.accent2}" stroke-width="0.9" opacity="0.65">
          <animate attributeName="x1" values="${ox};${ox + plotW};${ox}" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="${ox};${ox + plotW};${ox}" dur="4s" repeatCount="indefinite"/>
        </line>
      `;
    }

    return `
      <g transform="translate(${x}, ${y})" class="mini-plot-hud">
        <rect x="0" y="0" width="${w}" height="${h}" rx="6" fill="${pal.plaqueBg}" stroke="${pal.plaqueStroke}" stroke-width="1.5"/>
        <!-- Mini-Plot Header -->
        <text x="7" y="11" font-size="6.8" font-weight="800" fill="${pal.accent}" font-family="monospace">
          📊 ${esc((miniPlot.title || "TELEMETRY").slice(0, 29))}
        </text>
        <!-- Legend Dots -->
        <circle cx="8" cy="17.5" r="2.3" fill="${pal.accent}"/>
        <text x="13" y="19.5" font-size="5.6" fill="${pal.ink}" font-family="monospace">${esc((miniPlot.series_a_label || "Flight").slice(0, 14))}</text>
        <circle cx="${w * 0.54}" cy="17.5" r="2.3" fill="${pal.accent2}"/>
        <text x="${w * 0.54 + 5}" y="19.5" font-size="5.6" fill="${pal.ink}" font-family="monospace">${esc((miniPlot.series_b_label || "Control").slice(0, 13))}</text>

        <!-- Axes -->
        <line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy + plotH}" stroke="${pal.subInk}" stroke-width="1"/>
        <line x1="${ox}" y1="${oy + plotH}" x2="${ox + plotW}" y2="${oy + plotH}" stroke="${pal.subInk}" stroke-width="1"/>

        ${chartBody}

        <!-- Stat Note Footer -->
        <text x="${w / 2}" y="${h - 4.5}" font-size="5.8" font-weight="700" fill="${pal.accent2}" text-anchor="middle" font-family="monospace">
          ${esc((miniPlot.stat_note || "").slice(0, 34))}
        </text>
      </g>
    `;
  }

  /**
   * Layer 3: Four Annotated Technical Leader-Line Callouts + Governing Equation Plaque + Scale Bar
   */
  function renderTechnicalAnnotations(panel, w, h, isWide, pal) {
    const anns = (panel && panel.annotations) || [];
    const eq = (panel && panel.equation) || "";
    const scaleBar = (panel && panel.scale_bar) || "Scale: 100 µm";
    const cx = w * 0.45;
    const cy = h * 0.5;

    // 4 callout anchor boxes around the central motif
    const slots = isWide
      ? [
          { bx: 150, by: 46, tx: cx - 32, ty: cy - 16 },
          { bx: 150, by: h - 54, tx: cx - 26, ty: cy + 18 },
          { bx: w - 345, by: 46, tx: cx + 36, ty: cy - 14 },
          { bx: w - 345, by: h - 54, tx: cx + 30, ty: cy + 18 }
        ]
      : [
          { bx: 12, by: 46, tx: cx - 28, ty: cy - 14 },
          { bx: 12, by: h - 54, tx: cx - 22, ty: cy + 16 },
          { bx: w - 275, by: 46, tx: cx + 24, ty: cy - 12 },
          { bx: w - 275, by: h - 54, tx: cx + 22, ty: cy + 16 }
        ];

    const calloutSvg = anns.slice(0, 4).map((text, idx) => {
      const s = slots[idx];
      const boxW = isWide ? 168 : 132;
      const boxH = 17;
      const anchorX = idx < 2 ? s.bx + boxW : s.bx;
      const anchorY = s.by + boxH / 2;
      const elbowX = (anchorX + s.tx) / 2;

      return `
        <g class="tech-annotation">
          <polyline points="${s.tx},${s.ty} ${elbowX},${anchorY} ${anchorX},${anchorY}"
                    fill="none" stroke="${pal.accent}" stroke-width="1.15" opacity="0.85"/>
          <circle cx="${s.tx}" cy="${s.ty}" r="2.6" fill="${pal.accent2}" stroke="${pal.ink}" stroke-width="0.8"/>
          <rect x="${s.bx}" y="${s.by}" width="${boxW}" height="${boxH}" rx="3.5"
                fill="${pal.plaqueBg}" stroke="${pal.accent}" stroke-width="1.1"/>
          <text x="${s.bx + 5}" y="${s.by + 11.5}" font-size="6.4" font-weight="700" fill="${pal.ink}" font-family="monospace">
            ${esc(text.slice(0, isWide ? 30 : 23))}
          </text>
        </g>
      `;
    });

    return `
      <!-- Top-Left Governing Equation & Biophysical Formula Plaque -->
      <g transform="translate(10, 12)">
        <rect x="0" y="0" width="${isWide ? 340 : 232}" height="22" rx="4.5" fill="${pal.plaqueBg}" stroke="${pal.accent2}" stroke-width="1.4"/>
        <text x="7" y="14.5" font-size="7.2" font-weight="800" fill="${pal.ink}" font-family="monospace">
          ∑ ${esc(eq.slice(0, isWide ? 54 : 35))}
        </text>
      </g>

      <!-- 4 Annotated Leader-Line Callouts -->
      ${calloutSvg.join("")}

      <!-- Bottom-Left Calibrated Scale Bar Plaque -->
      <g transform="translate(10, ${h - 26})">
        <rect x="0" y="0" width="${isWide ? 245 : 185}" height="18" rx="4" fill="${pal.plaqueBg}" stroke="${pal.subInk}" stroke-width="1"/>
        <!-- Physical Scale Bar Ruler Icon -->
        <line x1="7" y1="12" x2="31" y2="12" stroke="${pal.accent2}" stroke-width="2"/>
        <line x1="7" y1="7" x2="7" y2="14" stroke="${pal.accent2}" stroke-width="1.5"/>
        <line x1="31" y1="7" x2="31" y2="14" stroke="${pal.accent2}" stroke-width="1.5"/>
        <text x="37" y="12.5" font-size="6.4" font-weight="700" fill="${pal.ink}" font-family="monospace">
          ${esc(scaleBar.slice(0, isWide ? 36 : 26))}
        </text>
      </g>
    `;
  }

  /**
   * Layer 5: Enhanced Character Rigs Holding Stage-Specific Scientific Props
   */
  function renderCharacter(charId, x, y, scale, pose) {
    const s = scale || 1;
    const isShock = pose === "challenge";
    const isCheer = pose === "discovery" || pose === "finale";

    if (charId === "sprout") {
      const leafTilt = isShock ? -16 : isCheer ? -36 : -25;
      const mouth = isShock
        ? `<circle cx="0" cy="7" r="3" fill="#064e3b"/>`
        : `<path d="M -5 5 Q 0 11 5 5" fill="none" stroke="#064e3b" stroke-width="2" stroke-linecap="round"/>`;
      return `
        <g transform="translate(${x},${y}) scale(${s})">
          <!-- Root Hairs & Primary Taproot -->
          <path d="M 0 22 Q -6 36 -14 44 M 0 22 Q 2 38 0 48 M 0 22 Q 8 35 15 42 M -6 32 L -13 31 M 6 32 L 13 31" fill="none" stroke="#bef264" stroke-width="2.2" stroke-linecap="round"/>
          <!-- Stem & Vascular Xylem/Phloem Trace -->
          <path d="M 0 22 Q -2 10 0 -4" fill="none" stroke="#22c55e" stroke-width="5.5" stroke-linecap="round"/>
          <path d="M 0 22 Q -2 10 0 -4" fill="none" stroke="#bbf7d0" stroke-width="1.3" stroke-dasharray="2 2"/>
          <!-- Cotyledon Leaves with Venation -->
          <g transform="rotate(${leafTilt} -18 -12)">
            <ellipse cx="-18" cy="-12" rx="16" ry="9" fill="#16a34a" stroke="#bbf7d0" stroke-width="1.5"/>
            <path d="M -30 -12 L -6 -12 M -20 -12 L -24 -16 M -14 -12 L -18 -8" stroke="#86efac" stroke-width="1"/>
          </g>
          <g transform="rotate(${-leafTilt} 18 -12)">
            <ellipse cx="18" cy="-12" rx="16" ry="9" fill="#16a34a" stroke="#bbf7d0" stroke-width="1.5"/>
            <path d="M 6 -12 L 30 -12 M 20 -12 L 24 -16 M 14 -12 L 18 -8" stroke="#86efac" stroke-width="1"/>
          </g>
          <!-- Head / Apical Meristem -->
          <circle cx="0" cy="2" r="14" fill="#4ade80" stroke="#dcfce7" stroke-width="2"/>
          <!-- Pressurized Telemetry Helmet Dome -->
          <circle cx="0" cy="0" r="22" fill="rgba(56,189,248,0.14)" stroke="#38bdf8" stroke-width="1.6" stroke-dasharray="5 2"/>
          <!-- Eyes -->
          <circle cx="-5" cy="-1" r="2.7" fill="#064e3b"/>
          <circle cx="5" cy="-1" r="2.7" fill="#064e3b"/>
          <circle cx="-5.8" cy="-2" r="1" fill="#fff"/>
          <circle cx="4.2" cy="-2" r="1" fill="#fff"/>
          ${mouth}
        </g>
      `;
    }

    if (charId === "myco") {
      return `
        <g transform="translate(${x},${y}) scale(${s})">
          <!-- Mycelial Rhizomorph Web & Sintered Regolith Mini-Brick -->
          <rect x="-18" y="34" width="36" height="11" rx="2" fill="#78350f" stroke="#fdba74" stroke-width="1.2"/>
          <path d="M -22 36 Q -10 24 0 22 Q 12 25 24 36 M -14 42 Q 0 28 14 42 M 0 22 L 0 44" fill="none" stroke="#fde047" stroke-width="2" stroke-dasharray="3 2"/>
          <!-- Stipe & Gill Ring -->
          <path d="M -9 24 L -7 -2 L 7 -2 L 9 24 Z" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
          <!-- Bioluminescent Pileus Cap -->
          <path d="M -26 0 Q 0 -28 26 0 Z" fill="#ea580c" stroke="#fed7aa" stroke-width="2"/>
          <circle cx="-11" cy="-9" r="3.5" fill="#fef08a"/>
          <circle cx="4" cy="-13" r="4" fill="#fef08a"/>
          <circle cx="14" cy="-7" r="2.8" fill="#fef08a"/>
          <circle cx="-4" cy="7" r="2.2" fill="#451a03"/>
          <circle cx="4" cy="7" r="2.2" fill="#451a03"/>
          <path d="M -4 13 Q 0 17 4 13" fill="none" stroke="#451a03" stroke-width="1.8" stroke-linecap="round"/>
        </g>
      `;
    }

    if (charId === "statolith") {
      const floatOffset = isShock ? -8 : 0;
      return `
        <g transform="translate(${x},${y + floatOffset}) scale(${s})">
          <!-- Gravity Vector Compass Ring -->
          <circle cx="0" cy="0" r="24" fill="none" stroke="#c084fc" stroke-width="1.3" stroke-dasharray="3 3"/>
          <line x1="0" y1="16" x2="0" y2="27" stroke="#facc15" stroke-width="2"/>
          <polygon points="0,30 -3.5,24 3.5,24" fill="#facc15"/>
          <!-- Faceted Starch Amyloplast Crystal -->
          <polygon points="0,-20 17,-8 14,15 -14,15 -17,-8" fill="#7e22ce" stroke="#f3e8ff" stroke-width="2"/>
          <polygon points="0,-20 17,-8 0,2 -17,-8" fill="#a855f7" opacity="0.85"/>
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
      return `
        <g transform="translate(${x},${y}) scale(${s})">
          <!-- AI Foundation Telemetry Antenna -->
          <line x1="0" y1="-26" x2="0" y2="-17" stroke="#38bdf8" stroke-width="2.5"/>
          <circle cx="0" cy="-28" r="4.2" fill="#22d3ee">
            <animate attributeName="r" values="3.5;5;3.5" dur="1.8s" repeatCount="indefinite"/>
          </circle>
          <ellipse cx="0" cy="26" rx="16" ry="4" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
          <rect x="-20" y="-17" width="40" height="34" rx="9" fill="#0284c7" stroke="#bae6fd" stroke-width="2"/>
          <rect x="-15" y="-11" width="30" height="20" rx="5" fill="#082f49" stroke="#38bdf8" stroke-width="1.2"/>
          <circle cx="-7" cy="-2" r="3.2" fill="#22d3ee"/>
          <circle cx="7" cy="-2" r="3.2" fill="#22d3ee"/>
          <path d="M -9 5 L -4 5 L -2 2 L 2 7 L 4 5 L 9 5" fill="none" stroke="#4ade80" stroke-width="1.7"/>
        </g>
      `;
    }

    if (charId === "astra") {
      return `
        <g transform="translate(${x},${y}) scale(${s})">
          <!-- EVA Spacesuit & Biometric Chest Pack -->
          <path d="M -20 38 L -16 14 Q 0 10 16 14 L 20 38 Z" fill="#f8fafc" stroke="#dc2626" stroke-width="2"/>
          <rect x="-8" y="19" width="16" height="11" rx="2" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
          <path d="M -6 25 L -2 25 L 0 21 L 2 28 L 4 25 L 6 25" fill="none" stroke="#4ade80" stroke-width="1.2"/>
          <circle cx="0" cy="-2" r="18" fill="#f1f5f9" stroke="#64748b" stroke-width="2.5"/>
          <ellipse cx="0" cy="-2" rx="14" ry="12" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
          <path d="M -12 -8 Q 0 -16 12 -8" fill="#7c2d12"/>
          <circle cx="-5" cy="-2" r="2.2" fill="#1e293b"/>
          <circle cx="5" cy="-2" r="2.2" fill="#1e293b"/>
          <path d="M -4 4 Q 0 8 4 4" fill="none" stroke="#9a3412" stroke-width="1.8" stroke-linecap="round"/>
        </g>
      `;
    }

    // Default: Doc B with CoSE Lab Coat & Holographic Data Tablet
    return `
      <g transform="translate(${x},${y}) scale(${s})">
        <path d="M -20 38 L -16 13 Q 0 9 16 13 L 20 38 Z" fill="#0f7f9f" stroke="#7dd3fc" stroke-width="2"/>
        <path d="M -5 13 L 0 28 L 5 13" fill="#e0f2fe"/>
        <!-- Holographic Lab Clipboard Prop -->
        <rect x="10" y="16" width="14" height="18" rx="2" fill="#082f49" stroke="#38bdf8" stroke-width="1.3"/>
        <line x1="13" y1="21" x2="21" y2="21" stroke="#4ade80" stroke-width="1.2"/>
        <line x1="13" y1="25" x2="20" y2="25" stroke="#38bdf8" stroke-width="1.2"/>
        <!-- Head & Glasses -->
        <circle cx="0" cy="-3" r="15" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
        <path d="M -14 -8 Q -6 -21 14 -10 Q 11 -18 -4 -18 Z" fill="#78350f"/>
        <rect x="-11" y="-7" width="9" height="6" rx="1.5" fill="none" stroke="#0284c7" stroke-width="1.8"/>
        <rect x="2" y="-7" width="9" height="6" rx="1.5" fill="none" stroke="#0284c7" stroke-width="1.8"/>
        <line x1="-2" y1="-4" x2="2" y2="-4" stroke="#0284c7" stroke-width="1.8"/>
        <circle cx="-6.5" cy="-4" r="1.6" fill="#0f172a"/>
        <circle cx="6.5" cy="-4" r="1.6" fill="#0f172a"/>
        <path d="M -5 4 Q 0 9 5 4" fill="none" stroke="#78350f" stroke-width="2" stroke-linecap="round"/>
      </g>
    `;
  }

  /**
   * Layer 2A: Central Scientific Apparatus Motif with SVG Animations & Phase Control
   */
  function renderScientificMotif(motif, style, stage, w, h, pal, phase) {
    const cx = w * 0.44;
    const cy = h * 0.51;
    const isCrisis = stage === "challenge";
    const p = phase || 0;
    const waveOffset = Math.sin(p * Math.PI * 2) * 8;

    switch (motif) {
      case "cfd-leaf-plume": {
        const layerThickness = isCrisis ? 34 : 15;
        const layerColor = isCrisis ? "#ef4444" : "#0284c7";
        return `
          <g transform="translate(${cx},${cy})">
            <!-- Stagnant Boundary Layer Halo (Animated Pulse) -->
            <ellipse cx="0" cy="0" rx="${62 + layerThickness}" ry="${22 + layerThickness}"
                     fill="${layerColor}" fill-opacity="0.22" stroke="${layerColor}" stroke-width="2.2" stroke-dasharray="6 3">
              <animate attributeName="rx" values="${58 + layerThickness};${65 + layerThickness};${58 + layerThickness}" dur="3s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Animated Airflow Streamlines -->
            <path d="M -105 -32 Q -15 -${38 + layerThickness} 105 -32" fill="none" stroke="${pal.accent}" stroke-width="2.2" stroke-dasharray="8 4" stroke-dashoffset="${-p * 36}">
              <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1.4s" repeatCount="indefinite"/>
            </path>
            <path d="M -105 32 Q -15 ${38 + layerThickness} 105 32" fill="none" stroke="${pal.accent}" stroke-width="2.2" stroke-dasharray="8 4" stroke-dashoffset="${-p * 36}">
              <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1.4s" repeatCount="indefinite"/>
            </path>
            <!-- Vascular Leaf Anatomy -->
            <path d="M -54 0 Q -15 -24 54 0 Q -15 24 -54 0 Z" fill="#16a34a" stroke="#bbf7d0" stroke-width="2.2"/>
            <path d="M -50 0 L 48 0 M -22 0 L -8 -11 M 4 0 L 18 10 M 20 0 L 32 -8" fill="none" stroke="#86efac" stroke-width="1.6"/>
            <!-- O2 & CO2 Gas Flux Molecules -->
            <circle cx="${-18 + waveOffset * 0.5}" cy="-18" r="7.5" fill="#dc2626" stroke="#fff" stroke-width="1"/>
            <text x="${-18 + waveOffset * 0.5}" y="-15" font-size="7" fill="#fff" text-anchor="middle" font-weight="bold">O₂</text>
            <circle cx="${22 - waveOffset * 0.5}" cy="-19" r="8" fill="#0284c7" stroke="#fff" stroke-width="1"/>
            <text x="${22 - waveOffset * 0.5}" y="-16" font-size="6.8" fill="#fff" text-anchor="middle" font-weight="bold">CO₂</text>
          </g>
        `;
      }

      case "fvcb-carbon-cycle": {
        return `
          <g transform="translate(${cx},${cy})">
            <circle cx="-38" cy="0" r="27" fill="#15803d" stroke="#86efac" stroke-width="2.2"/>
            <text x="-38" y="-3" font-size="7.5" fill="#fff" text-anchor="middle" font-weight="bold">RUBISCO</text>
            <text x="-38" y="8" font-size="6.5" fill="#bbf7d0" text-anchor="middle">Chloroplast</text>

            <circle cx="36" cy="-18" r="21" fill="#b45309" stroke="#fde047" stroke-width="2"/>
            <text x="36" y="-16" font-size="7" fill="#fff" text-anchor="middle" font-weight="bold">Peroxisome</text>
            <text x="36" y="-7" font-size="6" fill="#fef08a" text-anchor="middle">GOX / H₂O₂</text>

            <circle cx="36" cy="23" r="21" fill="#be123c" stroke="#fda4af" stroke-width="2"/>
            <text x="36" y="24" font-size="7" fill="#fff" text-anchor="middle" font-weight="bold">Mitochondria</text>
            <text x="36" y="33" font-size="6" fill="#fecdd3" text-anchor="middle">GDC / SHMT</text>

            <!-- Animated Metabolite Flux Loop (2-PG -> Glycolate -> Glycine -> Serine) -->
            <path d="M -11 -10 L 15 -18 M 36 3 L 36 2 M 15 23 L -12 11" fill="none" stroke="${pal.accent2}" stroke-width="2.5" stroke-dasharray="5 3">
              <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.2s" repeatCount="indefinite"/>
            </path>
          </g>
        `;
      }

      case "hardware-chambers-cfd":
      case "lunar-pot-chamber":
      case "pressure-chamber-ai":
      case "led-grow-array": {
        return `
          <g transform="translate(${cx},${cy})">
            <rect x="-68" y="-42" width="136" height="84" rx="9" fill="rgba(15,23,42,0.84)" stroke="${pal.accent}" stroke-width="2.4"/>
            <rect x="-54" y="-36" width="108" height="9" rx="3.5" fill="#1e293b" stroke="#94a3b8" stroke-width="1"/>
            <circle cx="-40" cy="-31.5" r="3.2" fill="#ef4444"/><circle cx="-22" cy="-31.5" r="3.2" fill="#3b82f6"/>
            <circle cx="-4" cy="-31.5" r="3.2" fill="#ef4444"/><circle cx="14" cy="-31.5" r="3.2" fill="#3b82f6"/>
            <circle cx="32" cy="-31.5" r="3.2" fill="#ef4444"/><circle cx="46" cy="-31.5" r="3.2" fill="#3b82f6"/>
            <polygon points="-48,-27 48,-27 60,34 -60,34" fill="rgba(217,70,239,0.14)"/>
            <!-- Animated Convection Vortices -->
            <path d="M -52 -8 Q 0 ${-22 + waveOffset} 52 -8" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="5 3">
              <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.3s" repeatCount="indefinite"/>
            </path>
            <path d="M -46 8 Q 0 ${-4 - waveOffset} 46 8" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="5 3"/>
            <path d="M -28 34 L -28 15 M -28 19 Q -38 11 -30 9 Q -20 11 -28 19" stroke="#4ade80" stroke-width="2.4" fill="#22c55e"/>
            <path d="M 0 34 L 0 11 M 0 15 Q -10 7 -2 5 Q 8 7 0 15" stroke="#4ade80" stroke-width="2.4" fill="#22c55e"/>
            <path d="M 28 34 L 28 15 M 28 19 Q 18 11 26 9 Q 36 11 28 19" stroke="#4ade80" stroke-width="2.4" fill="#22c55e"/>
          </g>
        `;
      }

      case "circadian-clock-ring": {
        const handAngle = p * 360;
        return `
          <g transform="translate(${cx},${cy})">
            <circle cx="0" cy="0" r="42" fill="rgba(15,23,42,0.85)" stroke="${pal.accent}" stroke-width="2.8"/>
            <circle cx="0" cy="0" r="33" fill="none" stroke="${pal.accent2}" stroke-width="1.5" stroke-dasharray="4 4"/>
            <g transform="rotate(${handAngle})">
              <line x1="0" y1="0" x2="0" y2="-27" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite"/>
            </g>
            <line x1="0" y1="0" x2="21" y2="11" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
            <text x="0" y="-30" font-size="6.8" fill="#fde047" text-anchor="middle" font-weight="bold">ZT0 CCA1/LHY</text>
            <text x="0" y="37" font-size="6.8" fill="#c084fc" text-anchor="middle" font-weight="bold">ZT12 TOC1/ELF3</text>
          </g>
        `;
      }

      case "chromatin-nucleosome":
      case "rna-splicing-scissors": {
        return `
          <g transform="translate(${cx},${cy})">
            <path d="M -72 10 Q -36 ${-34 + waveOffset} 0 10 Q 36 ${54 - waveOffset} 72 10" fill="none" stroke="${pal.accent}" stroke-width="3.2"/>
            <path d="M -72 -10 Q -36 ${34 - waveOffset} 0 -10 Q 36 ${-54 + waveOffset} 72 -10" fill="none" stroke="${pal.accent2}" stroke-width="3.2"/>
            <circle cx="-34" cy="0" r="14" fill="#db2777" stroke="#fbcfe8" stroke-width="2"/>
            <text x="-34" y="2.5" font-size="6.3" fill="#fff" text-anchor="middle" font-weight="bold">H3K27</text>
            <circle cx="0" cy="0" r="12" fill="#0284c7" stroke="#bae6fd" stroke-width="1.8"/>
            <text x="0" y="2.5" font-size="6" fill="#fff" text-anchor="middle" font-weight="bold">SOG1</text>
            <circle cx="34" cy="0" r="14" fill="#7c3aed" stroke="#ddd6fe" stroke-width="2"/>
            <text x="34" y="2.5" font-size="6.3" fill="#fff" text-anchor="middle" font-weight="bold">EXON</text>
          </g>
        `;
      }

      case "single-cell-umap":
      case "drem-bifurcation-tracks":
      case "manhattan-gwas-peaks":
      case "database-holo-cube": {
        return `
          <g transform="translate(${cx},${cy})">
            <rect x="-70" y="-40" width="140" height="80" rx="8" fill="rgba(15,23,42,0.86)" stroke="${pal.accent}" stroke-width="2.2"/>
            <path d="M -54 18 Q -18 16 0 0 L 46 -22 M 0 0 L 50 4 M 0 0 L 42 24" fill="none" stroke="${pal.accent2}" stroke-width="2.4"/>
            <circle cx="-38" cy="-14" r="5" fill="#38bdf8"/><circle cx="-28" cy="-20" r="4" fill="#38bdf8"/>
            <circle cx="46" cy="-22" r="5.5" fill="#4ade80"/><circle cx="54" cy="-14" r="4" fill="#4ade80"/>
            <circle cx="50" cy="4" r="5.5" fill="#f43f5e"/><circle cx="42" cy="24" r="5.5" fill="#facc15"/>
            <text x="-60" y="-26" font-size="6.8" fill="#f8fafc" font-family="monospace" font-weight="bold">SINGLE-CELL ATLAS MANIFOLD</text>
          </g>
        `;
      }

      case "cosmic-ray-shield":
      case "quantum-spin-compass":
      case "planetary-magnetosphere":
      case "helmholtz-coil-cube": {
        return `
          <g transform="translate(${cx},${cy})">
            <path d="M 0 -28 C -66 -44 -66 44 0 28" fill="none" stroke="${pal.accent}" stroke-width="2.2" stroke-dasharray="5 2">
              <animate attributeName="stroke-dashoffset" from="14" to="0" dur="1.5s" repeatCount="indefinite"/>
            </path>
            <path d="M 0 -28 C -88 -58 -88 58 0 28" fill="none" stroke="${pal.accent}" stroke-width="1.6"/>
            <path d="M 0 -28 C 66 -44 66 44 0 28" fill="none" stroke="${pal.accent}" stroke-width="2.2" stroke-dasharray="5 2"/>
            <path d="M 0 -28 C 88 -58 88 58 0 28" fill="none" stroke="${pal.accent}" stroke-width="1.6"/>
            <circle cx="0" cy="0" r="23" fill="#1d4ed8" stroke="#93c5fd" stroke-width="2.4"/>
            <path d="M -13 -5 Q 0 -13 13 -3 Q 4 11 -11 7 Z" fill="#22c55e"/>
            <path d="M -82 -36 L -50 -12 L -56 -5 L -32 10" fill="none" stroke="#fbbf24" stroke-width="2.6"/>
          </g>
        `;
      }

      case "seed-digital-twin":
      case "root-auxin-fountain":
      case "statolith-sedimentation": {
        const sy = isCrisis ? 4 + waveOffset * 0.6 : 21;
        return `
          <g transform="translate(${cx},${cy})">
            <path d="M -29 -42 L -25 10 Q 0 46 25 10 L 29 -42 Z" fill="rgba(22,101,52,0.82)" stroke="#86efac" stroke-width="2.4"/>
            <path d="M 0 -38 L 0 14" fill="none" stroke="#4ade80" stroke-width="4" stroke-dasharray="6 2">
              <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.1s" repeatCount="indefinite"/>
            </path>
            <path d="M 0 14 Q -19 10 -19 -24" fill="none" stroke="#bef264" stroke-width="2.4" stroke-dasharray="4 2"/>
            <path d="M 0 14 Q 19 10 19 -24" fill="none" stroke="#bef264" stroke-width="2.4" stroke-dasharray="4 2"/>
            <polygon points="-8,${sy} -3,${sy - 4} 0,${sy + 2} -6,${sy + 5}" fill="#c084fc" stroke="#fff" stroke-width="1"/>
            <polygon points="4,${sy - 1} 10,${sy - 4} 12,${sy + 3} 5,${sy + 5}" fill="#c084fc" stroke="#fff" stroke-width="1"/>
            <polygon points="-2,${sy + 5} 4,${sy + 3} 6,${sy + 9} -1,${sy + 10}" fill="#c084fc" stroke="#fff" stroke-width="1"/>
          </g>
        `;
      }

      case "calcium-wave-rosette":
      case "arabidopsis-3d-rosette": {
        const waveR = 14 + ((p * 28) % 28);
        return `
          <g transform="translate(${cx},${cy})">
            <circle cx="0" cy="0" r="${waveR}" fill="none" stroke="#22d3ee" stroke-width="2.2">
              <animate attributeName="r" values="8;42;8" dur="2.6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="0" cy="0" r="28" fill="none" stroke="#4ade80" stroke-width="1.6" stroke-dasharray="3 2"/>
            <ellipse cx="0" cy="-23" rx="10" ry="19" fill="#16a34a" stroke="#86efac" stroke-width="1.5"/>
            <ellipse cx="0" cy="23" rx="10" ry="19" fill="#16a34a" stroke="#86efac" stroke-width="1.5"/>
            <ellipse cx="-23" cy="0" rx="19" ry="10" fill="#16a34a" stroke="#86efac" stroke-width="1.5"/>
            <ellipse cx="23" cy="0" rx="19" ry="10" fill="#22c55e" stroke="#fef08a" stroke-width="2.2"/>
            <ellipse cx="-16" cy="-16" rx="13" ry="8" transform="rotate(45 -16 -16)" fill="#15803d" stroke="#86efac" stroke-width="1.2"/>
            <ellipse cx="16" cy="-16" rx="13" ry="8" transform="rotate(-45 16 -16)" fill="#15803d" stroke="#86efac" stroke-width="1.2"/>
            <ellipse cx="-16" cy="16" rx="13" ry="8" transform="rotate(-45 -16 16)" fill="#15803d" stroke="#86efac" stroke-width="1.2"/>
            <ellipse cx="16" cy="16" rx="13" ry="8" transform="rotate(45 16 16)" fill="#22c55e" stroke="#fef08a" stroke-width="1.8"/>
            <circle cx="0" cy="0" r="6" fill="#bef264"/>
          </g>
        `;
      }

      case "space-tomato-veggie": {
        return `
          <g transform="translate(${cx},${cy})">
            <path d="M 0 36 L 0 -24 M 0 6 L -27 -8 M 0 -6 L 27 -18 M 0 16 L 23 4" fill="none" stroke="#16a34a" stroke-width="3.5" stroke-linecap="round"/>
            <!-- Adventitious stem roots -->
            <path d="M -2 22 Q -14 26 -18 34 M 2 24 Q 14 28 18 35" fill="none" stroke="#fde047" stroke-width="1.8" stroke-dasharray="2 1"/>
            <ellipse cx="-27" cy="-8" rx="13" ry="6.5" fill="#22c55e"/>
            <ellipse cx="27" cy="-18" rx="13" ry="6.5" fill="#22c55e"/>
            <ellipse cx="0" cy="-25" rx="14" ry="7.5" fill="#22c55e"/>
            <circle cx="-13" cy="4" r="9.5" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
            <circle cx="15" cy="-4" r="10.5" fill="#dc2626" stroke="#fca5a5" stroke-width="1.5"/>
            <circle cx="-6" cy="-14" r="8.5" fill="#f97316" stroke="#fed7aa" stroke-width="1.5"/>
          </g>
        `;
      }

      case "closed-loop-dome":
      case "regolith-sinter-brick":
      case "mycelium-network":
      case "microbe-rhizosphere":
      case "wheat-field-timeline": {
        return `
          <g transform="translate(${cx},${cy})">
            <rect x="-64" y="19" width="40" height="17" rx="3" fill="#78350f" stroke="#fdba74" stroke-width="1.5"/>
            <rect x="-20" y="19" width="40" height="17" rx="3" fill="#9a3412" stroke="#fdba74" stroke-width="1.5"/>
            <rect x="24" y="19" width="40" height="17" rx="3" fill="#78350f" stroke="#fdba74" stroke-width="1.5"/>
            <path d="M -56 19 A 56 50 0 0 1 56 19 Z" fill="rgba(20,83,45,0.68)" stroke="#4ade80" stroke-width="2.4"/>
            <path d="M -30 0 A 25 19 0 1 1 30 0" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 2">
              <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1.4s" repeatCount="indefinite"/>
            </path>
            <path d="M -48 28 Q -18 21 0 31 Q 22 21 48 28" fill="none" stroke="#fde047" stroke-width="2.2"/>
            <circle cx="-17" cy="6" r="9.5" fill="#22c55e"/>
            <circle cx="0" cy="-2" r="12.5" fill="#16a34a"/>
            <circle cx="17" cy="6" r="9.5" fill="#22c55e"/>
          </g>
        `;
      }

      case "astronaut-muscle-vitals":
      case "mineral-bone-shield":
      case "mitochondria-powerhouse":
      case "ros-spark-wave":
      case "cytoskeleton-cell-wall": {
        return `
          <g transform="translate(${cx},${cy})">
            <rect x="-66" y="-36" width="132" height="72" rx="9" fill="rgba(28,8,14,0.88)" stroke="#f87171" stroke-width="2.2"/>
            <circle cx="-27" cy="0" r="21" fill="rgba(239,68,68,0.28)" stroke="#ef4444" stroke-width="2"/>
            <path d="M -41 2 L -33 2 L -29 -10 L -24 12 L -19 -4 L -13 2" fill="none" stroke="#4ade80" stroke-width="2.4"/>
            <path d="M 0 0 L 15 0" stroke="#fde047" stroke-width="3"/>
            <polygon points="35,-21 52,-11 48,13 35,23 22,13 18,-11" fill="#15803d" stroke="#86efac" stroke-width="2"/>
            <text x="35" y="3.5" font-size="7.5" fill="#fff" text-anchor="middle" font-weight="bold">OXPHOS</text>
          </g>
        `;
      }

      case "aruco-color-card": {
        return `
          <g transform="translate(${cx},${cy})">
            <rect x="-60" y="-38" width="120" height="76" rx="6" fill="#f8fafc" stroke="#0f172a" stroke-width="2.2"/>
            <rect x="-54" y="-32" width="13" height="13" fill="#0f172a"/><rect x="-50" y="-28" width="5" height="5" fill="#fff"/>
            <rect x="41" y="-32" width="13" height="13" fill="#0f172a"/><rect x="45" y="-28" width="5" height="5" fill="#fff"/>
            <rect x="-54" y="19" width="13" height="13" fill="#0f172a"/><rect x="-50" y="23" width="5" height="5" fill="#fff"/>
            <rect x="41" y="19" width="13" height="13" fill="#0f172a"/><rect x="45" y="23" width="5" height="5" fill="#fff"/>
            <rect x="-30" y="-30" width="11" height="8" fill="#166534"/><rect x="-17" y="-30" width="11" height="8" fill="#22c55e"/>
            <rect x="-4" y="-30" width="11" height="8" fill="#84cc16"/><rect x="9" y="-30" width="11" height="8" fill="#9333ea"/>
            <rect x="22" y="-30" width="11" height="8" fill="#78350f"/>
            <circle cx="0" cy="5" r="22" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
            <path d="M 0 -5 L 0 20 M 0 4 L -9 13 M 0 8 L 11 16" fill="none" stroke="#16a34a" stroke-width="2.4"/>
            <circle cx="-4" cy="-7" r="4.5" fill="#22c55e"/><circle cx="4" cy="-7" r="4.5" fill="#22c55e"/>
          </g>
        `;
      }

      default: {
        return `
          <g transform="translate(${cx},${cy})">
            <polygon points="0,-34 55,-11 55,19 0,40 -55,19 -55,-11" fill="rgba(30,27,75,0.85)" stroke="${pal.accent}" stroke-width="2.2"/>
            <path d="M -26 8 A 26 24 0 0 1 26 8 Z" fill="#38bdf8" fill-opacity="0.38" stroke="#bae6fd" stroke-width="2"/>
            <rect x="-47" y="-9" width="15" height="20" fill="#1d4ed8" stroke="#93c5fd" stroke-width="1.2"/>
            <rect x="32" y="-9" width="15" height="20" fill="#1d4ed8" stroke="#93c5fd" stroke-width="1.2"/>
            <path d="M 0 -30 L -6.5 -9 L 6.5 -9 Z" fill="#f43f5e" stroke="#fff" stroke-width="1.2"/>
            <circle cx="0" cy="4" r="5.5" fill="#4ade80"/>
          </g>
        `;
      }
    }
  }

  /**
   * Renders a Hyper-Detailed Graphic Novel Cover SVG for the Newsstand card
   */
  function renderCoverSVG(comic, options) {
    const opts = options || {};
    const style = comic.art_style || "blueprint-manga";
    const pal = getPalette(style, opts.theme);
    const uid = `cov-${comic.issue_number}-${pal.theme}`;
    const w = 380;
    const h = 250;

    const chars = comic.characters || ["doc-b", "sprout"];
    const c1 = chars[0] || "doc-b";
    const c2 = chars[1] || "pixel";

    return `
      <svg viewBox="0 0 ${w} ${h}" class="comic-cover-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(comic.comic_title)}">
        ${renderStyleBackdrop(style, w, h, "wonder", uid, pal, opts.phase || 0)}
        <!-- Top Masthead Ribbon -->
        <rect x="8" y="8" width="${w - 16}" height="26" rx="5" fill="${pal.plaqueBg}" stroke="${pal.accent}" stroke-width="1.6"/>
        <text x="15" y="24.5" font-size="10.2" font-weight="800" fill="${pal.accent}" font-family="system-ui, sans-serif">
          COSE GRAPHIC NOVEL #${String(comic.issue_number).padStart(2, "0")} · ${esc(comic.series_title.toUpperCase())}
        </text>
        <rect x="${w - 78}" y="11" width="64" height="20" rx="4" fill="${pal.badgeBg}"/>
        <text x="${w - 46}" y="24" font-size="8.8" font-weight="800" fill="#ffffff" text-anchor="middle" font-family="monospace">
          SVG/GIF/PDF
        </text>

        <!-- Formula Sub-Strip -->
        <rect x="8" y="37" width="215" height="17" rx="3.5" fill="${pal.plaqueBg}" stroke="${pal.accent2}" stroke-width="1.1"/>
        <text x="14" y="48.5" font-size="6.6" font-weight="700" fill="${pal.ink}" font-family="monospace">
          ∑ ${esc((comic.equation || "").slice(0, 34))}
        </text>

        <!-- Central Scientific Apparatus -->
        <g transform="translate(-14, 12) scale(0.92)">
          ${renderScientificMotif(comic.scene_motif, style, "discovery", w, h, pal, opts.phase || 0)}
        </g>

        <!-- Embedded Quantitative Mini-Plot Preview on Cover -->
        ${renderMiniPlotHUD(comic.mini_plot, w - 142, 38, 134, 72, pal, opts.phase || 0.35)}

        <!-- Featured Cast Characters -->
        ${renderCharacter(c1, 52, 152, 0.98, "wonder")}
        ${renderCharacter(c2, 326, 154, 0.92, "discovery")}

        <!-- Bottom Telemetry Bar -->
        <rect x="8" y="${h - 31}" width="${w - 16}" height="23" rx="5" fill="${pal.plaqueBg}" stroke="${pal.accent}" stroke-width="1.3"/>
        <text x="${w / 2}" y="${h - 16}" font-size="8.8" font-weight="800" fill="${pal.ink}" text-anchor="middle" font-family="monospace">
          ${esc(comic.emoji)} ${esc(comic.metric_badge.slice(0, 48))}
        </text>
      </svg>
    `;
  }

  /**
   * Renders a Single 5-Layer Hyper-Detailed Graphic Novel Panel SVG
   */
  function renderPanelSVG(comic, panel, options) {
    const opts = options || {};
    const style = comic.art_style || "blueprint-manga";
    const pal = getPalette(style, opts.theme);
    const isWide = panel.layout === "wide-hero" || panel.layout === "wide-finale";
    const w = isWide ? 820 : 480;
    const h = 265;
    const phase = opts.phase || 0;
    const uid = `pnl-${comic.issue_number}-${panel.number}-${pal.theme}`;

    const chars = comic.characters || ["doc-b", "sprout", "pixel"];
    const speaker = panel.speaker || chars[0] || "doc-b";
    const buddy = chars.find((c) => c !== speaker) || "pixel";

    const stageColors = {
      wonder: pal.accent,
      challenge: "#dc2626",
      experiment: "#0284c7",
      discovery: "#16a34a",
      finale: "#d97706"
    };
    const stageStroke = stageColors[panel.scene_type] || pal.accent;

    return `
      <svg viewBox="0 0 ${w} ${h}" class="comic-panel-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Panel ${panel.number}: ${esc(panel.stage)}">
        <!-- LAYER 1: Coordinate Ticks, Environment & Backdrop -->
        ${renderStyleBackdrop(style, w, h, panel.scene_type, uid, pal, phase)}
        <rect x="2.5" y="2.5" width="${w - 5}" height="${h - 5}" rx="8" fill="none" stroke="${stageStroke}" stroke-width="2.5"/>

        <!-- LAYER 2A: Central Scientific Apparatus Motif -->
        <g transform="translate(${isWide ? -10 : -15}, 4)">
          ${renderScientificMotif(comic.scene_motif, style, panel.scene_type, w, h, pal, phase)}
        </g>

        <!-- LAYER 2B: Subcellular / Microscopic Circular Zoom Inset -->
        ${renderZoomInset(comic, panel, isWide ? 86 : 230, isWide ? 96 : 64, 25, pal, phase)}

        <!-- LAYER 3: 4 Annotated Leader-Line Callouts + Equation Plaque + Scale Bar -->
        ${renderTechnicalAnnotations(panel, w, h, isWide, pal)}

        <!-- LAYER 4: Embedded Quantitative Mini-Plot HUD -->
        ${renderMiniPlotHUD(
          panel.mini_plot || comic.mini_plot,
          isWide ? w - 172 : w - 148,
          40,
          isWide ? 160 : 138,
          84,
          pal,
          phase
        )}

        <!-- LAYER 5: Character Rigs with Scientific Props -->
        ${renderCharacter(speaker, isWide ? 74 : 52, 166, 1.05, panel.scene_type)}
        ${renderCharacter(buddy, isWide ? w - 74 : w - 50, 168, 0.96, panel.scene_type)}
        ${
          isWide && chars.length > 2
            ? renderCharacter(chars[2], w - 215, 174, 0.88, panel.scene_type)
            : ""
        }

        <!-- Stage Telemetry Stamp (Top Right) -->
        <g transform="translate(${w - 176}, 12)">
          <rect x="0" y="0" width="166" height="22" rx="4.5" fill="${stageStroke}"/>
          <text x="83" y="14.5" font-size="8.5" font-weight="800" fill="#ffffff" text-anchor="middle" font-family="monospace">
            P${panel.number} · ${esc((panel.callout || "").slice(0, 22))}
          </text>
        </g>
      </svg>
    `;
  }

  /**
   * Word-wraps text into SVG <tspan> lines for standalone full-page SVG/PNG/GIF export
   */
  function wrapSvgText(text, maxCharsPerLine, x, startY, lineHeight) {
    const words = String(text || "").split(/\s+/);
    const lines = [];
    let current = "";
    words.forEach((w) => {
      if ((current + " " + w).trim().length > maxCharsPerLine && current) {
        lines.push(current.trim());
        current = w;
      } else {
        current = (current + " " + w).trim();
      }
    });
    if (current) lines.push(current.trim());
    return lines
      .slice(0, 4)
      .map(
        (ln, i) =>
          `<tspan x="${x}" y="${startY + i * lineHeight}">${esc(ln)}</tspan>`
      )
      .join("");
  }

  /**
   * Compiles the entire 5-Panel Graphic Novel Issue into a single self-contained
   * 1600 x 1960 SVG Document (used for Standalone SVG, High-DPI PNG, Animated GIF, and PDF)
   */
  function renderFullComicPageSVG(comic, level, options) {
    const opts = options || {};
    const lvl = level || "ms";
    const style = comic.art_style || "blueprint-manga";
    const pal = getPalette(style, opts.theme);
    const phase = opts.phase || 0;
    const W = 1600;
    const H = 1960;

    // Extract inner SVG contents of each of the 5 panels
    function embedPanelAt(panel, px, py, pw, ph) {
      const isWide = panel.layout === "wide-hero" || panel.layout === "wide-finale";
      const artW = isWide ? 820 : 480;
      const artH = 265;
      const rawArtSvg = renderPanelSVG(comic, panel, { theme: pal.theme, phase })
        .replace(/^[\s\S]*?<svg[^>]*>/i, "")
        .replace(/<\/svg>\s*$/i, "");
      const lvlData = panel[lvl] || panel.ms;

      return `
        <g transform="translate(${px}, ${py})">
          <!-- Panel Outer Card -->
          <rect x="0" y="0" width="${pw}" height="${ph}" rx="12" fill="${pal.bg1}" stroke="${comic.series_color}" stroke-width="3"/>
          <!-- Panel Stage Header Bar -->
          <rect x="2" y="2" width="${pw - 4}" height="34" rx="10" fill="${pal.plaqueBg}"/>
          <circle cx="22" cy="19" r="11" fill="${comic.series_color}"/>
          <text x="22" y="23" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle" font-family="sans-serif">${panel.number}</text>
          <text x="42" y="23" font-size="13" font-weight="800" fill="${pal.accent}" font-family="sans-serif">
            ${esc(lvlData.caption.slice(0, isWide ? 115 : 52))}
          </text>

          <!-- Embedded 5-Layer SVG Artwork Viewport -->
          <svg x="6" y="38" width="${pw - 12}" height="${ph - 165}" viewBox="0 0 ${artW} ${artH}" preserveAspectRatio="xMidYMid meet">
            ${rawArtSvg}
          </svg>

          <!-- High-Contrast Speech Bubble -->
          <rect x="14" y="${ph - 120}" width="${pw - 28}" height="74" rx="10" fill="#ffffff" stroke="${comic.series_color}" stroke-width="2.5"/>
          <rect x="24" y="${ph - 114}" width="180" height="18" rx="4" fill="${comic.series_color}"/>
          <text x="32" y="${ph - 101}" font-size="10.5" font-weight="800" fill="#ffffff" font-family="sans-serif">
            ${esc(panel.speaker_name.toUpperCase())}
          </text>
          <text font-size="12.5" font-weight="700" fill="#0f172a" font-family="sans-serif">
            ${wrapSvgText(lvlData.dialogue, isWide ? 135 : 54, 26, ph - 80, 16)}
          </text>

          <!-- Scientific Footnote Bar -->
          <rect x="14" y="${ph - 40}" width="${pw - 28}" height="28" rx="6" fill="${pal.plaqueBg}" stroke="${pal.accent2}" stroke-width="1"/>
          <text x="24" y="${ph - 22}" font-size="11" font-weight="600" fill="${pal.ink}" font-family="monospace">
            💡 ${esc(lvlData.note.slice(0, isWide ? 130 : 54))}
          </text>
        </g>
      `;
    }

    const p1 = comic.panels[0];
    const p2 = comic.panels[1];
    const p3 = comic.panels[2];
    const p4 = comic.panels[3];
    const p5 = comic.panels[4];

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${pal.bg1}"/>
  <!-- Masthead Header -->
  <rect x="24" y="20" width="${W - 48}" height="130" rx="14" fill="${pal.plaqueBg}" stroke="${comic.series_color}" stroke-width="3"/>
  <rect x="44" y="36" width="460" height="26" rx="5" fill="${comic.series_color}"/>
  <text x="56" y="54" font-size="13" font-weight="900" fill="#ffffff" font-family="monospace">
    COSE GRAPHIC NOVEL ISSUE #${String(comic.issue_number).padStart(2, "0")} · SERIES 0${comic.series_number}: ${esc(comic.series_title.toUpperCase())}
  </text>
  <text x="${W - 44}" y="54" font-size="13" font-weight="800" fill="${pal.accent2}" text-anchor="end" font-family="monospace">
    ART STYLE: ${esc(comic.art_style_name.toUpperCase())} · LEVEL: ${esc(lvl.toUpperCase())}
  </text>
  <text x="44" y="94" font-size="28" font-weight="900" fill="${pal.ink}" font-family="sans-serif">
    ${esc(comic.emoji)} ${esc(comic.comic_title)}
  </text>
  <text x="44" y="122" font-size="14" font-weight="700" fill="${pal.subInk}" font-family="monospace">
    Project: ${esc(comic.title)}   |   ${esc(comic.metric_badge)}   |   Equation: ${esc(comic.equation)}   |   NGSS: ${esc(comic.ngss)}
  </text>

  <!-- Panel 1: Wide Hero (Top) -->
  ${embedPanelAt(p1, 24, 166, 1552, 500)}

  <!-- Panels 2, 3, 4: 3-Column Middle Row -->
  ${embedPanelAt(p2, 24, 682, 504, 520)}
  ${embedPanelAt(p3, 548, 682, 504, 520)}
  ${embedPanelAt(p4, 1072, 682, 504, 520)}

  <!-- Panel 5: Wide Finale -->
  ${embedPanelAt(p5, 24, 1218, 1552, 490)}

  <!-- Inspirational Take-Home Footer Plaque -->
  <rect x="24" y="1724" width="${W - 48}" height="212" rx="14" fill="${pal.plaqueBg}" stroke="${comic.series_color}" stroke-width="3.5"/>
  <rect x="${W / 2 - 150}" y="1738" width="300" height="28" rx="14" fill="${comic.series_color}"/>
  <text x="${W / 2}" y="1757" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle" font-family="sans-serif">
    🌟 KEY TAKE-HOME MESSAGE &amp; DISCOVERY
  </text>
  <text x="${W / 2}" y="1798" font-size="21" font-weight="800" fill="${pal.accent2}" text-anchor="middle" font-family="sans-serif">
    “${esc(comic.take_home)}”
  </text>
  <text x="${W / 2}" y="1836" font-size="13.5" font-weight="600" fill="${pal.ink}" text-anchor="middle" font-family="sans-serif">
    Discovery: ${esc(comic.discovery.slice(0, 145))}
  </text>
  <text x="${W / 2}" y="1870" font-size="13" font-weight="700" fill="${pal.accent}" text-anchor="middle" font-family="monospace">
    Hands-On Investigation: ${esc(comic.activity.slice(0, 135))}
  </text>
  <text x="${W / 2}" y="1912" font-size="12" font-weight="700" fill="${pal.subInk}" text-anchor="middle" font-family="monospace">
    Dr. Richard J. Barker · Collaborative Science Environment (CoSE) · Live Tool: ${esc(comic.url)} · Repo: ${esc(comic.repo_url)}
  </text>
</svg>`;
  }

  function renderCharacterAvatarSVG(charId, color) {
    const pal = getPalette("blueprint-manga");
    return `
      <svg viewBox="0 0 110 110" class="cast-avatar-svg" xmlns="http://www.w3.org/2000/svg">
        <circle cx="55" cy="55" r="50" fill="${pal.bg1}" stroke="${esc(color)}" stroke-width="3"/>
        <circle cx="55" cy="55" r="42" fill="${esc(color)}" fill-opacity="0.16"/>
        ${renderCharacter(charId, 55, 54, 1.25, "discovery")}
      </svg>
    `;
  }

  window.CoSEArtEngine = {
    STYLE_PALETTES_DARK,
    STYLE_PALETTES_LIGHT,
    getActiveTheme,
    getPalette,
    renderCoverSVG,
    renderPanelSVG,
    renderFullComicPageSVG,
    renderCharacterAvatarSVG
  };
})();
