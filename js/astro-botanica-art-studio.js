/**
 * ASTRO-BOTANICA: ZERO-G ROOTS — Seinen Manga Vector Comic Art Studio (v2)
 * Generates high-craft, study-specific seinen manga covers (900x1200) and
 * clipped 4-panel scientific manga spreads (1400x788) with:
 *  - Domain-matched cosmic palettes (ISS cyan, Lunar amber, Martian rust, Radiation violet, Botanical emerald)
 *  - Authentic 45°/60° halftone screentones, sumi ink cross-hatching, and clipped kinetic speedlines
 *  - World-specific backdrops (ISS Cupola, Apollo Lunar Regolith, Martian Biodome, EDEN ISS Polar Dome, Starfighter Parabola, Radiation Citadel)
 *  - Plant-family botanical hero rigs & molecular cutaways (DNA histones, SOG1 shields, statoliths, Arabidopsis, Wheat, Lettuce, Tomato, Liverwort)
 *  - Live study-driven Scientific Data Visualizer in Panel 3 (real debrief metrics + mechanism schematics)
 *  - Disjoint 4-zone geometry engineered for zero text overlap with HTML lettering overlays
 */
(function () {
  "use strict";

  function seeded(seed) {
    let s = seed % 2147483647;
    if (s <= 0) s += 2147483646;
    return function () {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }

  function hashStr(str) {
    let h = 2166136261;
    const s = String(str || "");
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return Math.abs(h);
  }

  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function trunc(str, max) {
    const s = String(str || "").trim();
    if (s.length <= max) return s;
    return s.slice(0, max - 1).trimEnd() + "…";
  }

  function getPalette(volume) {
    const world = volume.world || "ISS";
    const domain = (volume.study_domain || "").toLowerCase();

    if (domain.includes("radiation")) {
      return { accent: "#a855f7", accent2: "#38bdf8", glow: "#c084fc", bgTop: "#090614", bgBot: "#150a24", tag: "RADIATION" };
    }
    if (domain.includes("epigenet") || domain.includes("methyl")) {
      return { accent: "#38bdf8", accent2: "#a855f7", glow: "#7dd3fc", bgTop: "#050b16", bgBot: "#0d1629", tag: "EPIGENOME" };
    }
    if (world === "Moon") {
      return { accent: "#f59e0b", accent2: "#38bdf8", glow: "#fcd34d", bgTop: "#07080c", bgBot: "#14161f", tag: "LUNAR REGOLITH" };
    }
    if (world === "Mars") {
      return { accent: "#f97316", accent2: "#fb7185", glow: "#fdba74", bgTop: "#140907", bgBot: "#26120c", tag: "MARS ANALOG" };
    }
    if (world === "Polar Analog") {
      return { accent: "#22d3ee", accent2: "#34d399", glow: "#67e8f9", bgTop: "#04111a", bgBot: "#0a1f2e", tag: "ANTARCTICA" };
    }
    if (world === "Suborbital") {
      return { accent: "#f43f5e", accent2: "#38bdf8", glow: "#fda4af", bgTop: "#0a0714", bgBot: "#1c1026", tag: "PARABOLIC 0G" };
    }
    if (domain.includes("light") || domain.includes("photo")) {
      return { accent: "#ec4899", accent2: "#38bdf8", glow: "#f472b6", bgTop: "#0c0716", bgBot: "#1d0c28", tag: "PHOTOBIOLOGY" };
    }
    return { accent: "#10b981", accent2: "#38bdf8", glow: "#34d399", bgTop: "#050c0f", bgBot: "#0b1a1e", tag: "ZERO-G BOTANY" };
  }

  function buildDefs(uid, pal) {
    return `
      <defs>
        <pattern id="dots-${uid}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <circle cx="2" cy="2" r="1.2" fill="#000" />
          <circle cx="6" cy="6" r="1.2" fill="#000" />
        </pattern>
        <pattern id="dots-light-${uid}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <circle cx="2" cy="2" r="1.1" fill="#ffffff" opacity="0.22" />
          <circle cx="6" cy="6" r="1.1" fill="#ffffff" opacity="0.22" />
        </pattern>
        <pattern id="dense-${uid}" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <circle cx="2.5" cy="2.5" r="1.7" fill="#000" />
        </pattern>
        <pattern id="hatch-${uid}" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(60)">
          <line x1="0" y1="0" x2="0" y2="9" stroke="#000" stroke-width="2" />
        </pattern>
        <pattern id="grid-hud-${uid}" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="${pal.accent2}" stroke-width="0.6" opacity="0.16" />
        </pattern>
        <linearGradient id="sky-${uid}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${pal.bgTop}" />
          <stop offset="100%" stop-color="${pal.bgBot}" />
        </linearGradient>
        <radialGradient id="glow-${uid}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${pal.accent}" stop-opacity="0.55" />
          <stop offset="55%" stop-color="${pal.accent2}" stop-opacity="0.18" />
          <stop offset="100%" stop-color="${pal.accent}" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="earth-${uid}" cx="50%" cy="15%" r="85%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.95" />
          <stop offset="40%" stop-color="#0284c7" stop-opacity="0.7" />
          <stop offset="100%" stop-color="#020617" stop-opacity="1" />
        </radialGradient>
      </defs>
    `;
  }

  function renderStarfield(W, H, count, seed) {
    const r = seeded(seed + 77);
    const stars = [];
    for (let i = 0; i < count; i++) {
      const x = (r() * W).toFixed(1);
      const y = (r() * H).toFixed(1);
      const rad = (0.6 + r() * 1.8).toFixed(1);
      const op = (0.25 + r() * 0.7).toFixed(2);
      stars.push(`<circle cx="${x}" cy="${y}" r="${rad}" fill="#ffffff" opacity="${op}" />`);
    }
    return stars.join("");
  }

  function renderClippedSpeedLines(W, H, cx, cy, count, seed, color, minR) {
    const r = seeded(seed + 13);
    const lines = [];
    const maxR = Math.hypot(W, H);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * 2 * Math.PI + (r() - 0.5) * 0.04;
      const r1 = (minR || 120) + r() * 75;
      const x1 = cx + Math.cos(angle) * r1;
      const y1 = cy + Math.sin(angle) * r1;
      const x2 = cx + Math.cos(angle) * maxR;
      const y2 = cy + Math.sin(angle) * maxR;
      const sw = (0.6 + r() * 2.1).toFixed(1);
      lines.push(
        `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${color || "#09090b"}" stroke-width="${sw}" opacity="${(0.28 + r() * 0.45).toFixed(2)}" />`
      );
    }
    return lines.join("");
  }

  /**
   * Renders a world-specific atmospheric manga environment inside arbitrary (W x H) frame
   */
  function renderWorldBackdrop(world, W, H, uid, pal, seed) {
    const stars = renderStarfield(W, H * 0.72, 46, seed);

    if (world === "Moon") {
      return `
        <rect width="${W}" height="${H}" fill="url(#sky-${uid})" />
        ${stars}
        <!-- Earthrise in Ink-Black Lunar Sky -->
        <g transform="translate(${W * 0.76}, ${H * 0.28})">
          <circle r="${Math.min(W, H) * 0.14}" fill="url(#earth-${uid})" stroke="#7dd3fc" stroke-width="2" />
          <path d="M -38,-18 Q -10,-40 28,-22 Q 44,5 12,32 Q -25,18 -38,-18 Z" fill="#ffffff" opacity="0.55" />
          <circle r="${Math.min(W, H) * 0.14 + 12}" fill="none" stroke="#38bdf8" stroke-width="1" stroke-dasharray="4 4" opacity="0.5" />
        </g>
        <!-- Jagged Lunar Crater Horizon -->
        <path d="M 0,${H * 0.68} L ${W * 0.18},${H * 0.61} L ${W * 0.36},${H * 0.66} L ${W * 0.58},${H * 0.59} L ${W * 0.82},${H * 0.65} L ${W},${H * 0.61} L ${W},${H} L 0,${H} Z" fill="#18181b" stroke="#e4e4e7" stroke-width="2" />
        <path d="M 0,${H * 0.74} Q ${W * 0.5},${H * 0.66} ${W},${H * 0.76} L ${W},${H} L 0,${H} Z" fill="#09090b" />
        <ellipse cx="${W * 0.26}" cy="${H * 0.80}" rx="${W * 0.14}" ry="${H * 0.035}" fill="none" stroke="#a1a1aa" stroke-width="2" opacity="0.65" />
        <ellipse cx="${W * 0.72}" cy="${H * 0.85}" rx="${W * 0.19}" ry="${H * 0.045}" fill="none" stroke="#71717a" stroke-width="2" opacity="0.5" />
      `;
    }

    if (world === "Mars") {
      return `
        <rect width="${W}" height="${H}" fill="url(#sky-${uid})" />
        ${stars}
        <circle cx="${W * 0.22}" cy="${H * 0.24}" r="14" fill="#fed7aa" stroke="#fb923c" stroke-width="2" opacity="0.8" />
        <circle cx="${W * 0.30}" cy="${H * 0.19}" r="7" fill="#fdba74" opacity="0.6" />
        <!-- Layered Martian Buttes & Canyons -->
        <path d="M 0,${H * 0.62} L ${W * 0.14},${H * 0.54} L ${W * 0.32},${H * 0.54} L ${W * 0.42},${H * 0.64} L ${W * 0.68},${H * 0.58} L ${W * 0.84},${H * 0.52} L ${W},${H * 0.58} L ${W},${H} L 0,${H} Z" fill="#431407" stroke="#fb923c" stroke-width="1.8" />
        <path d="M 0,${H * 0.74} Q ${W * 0.4},${H * 0.64} ${W},${H * 0.76} L ${W},${H} L 0,${H} Z" fill="#1c0a05" />
        <!-- Geodesic Dome Rib Silhouette -->
        <path d="M ${W * 0.12},${H} A ${W * 0.38} ${H * 0.36} 0 0 1 ${W * 0.88},${H}" fill="none" stroke="${pal.accent}" stroke-width="2" stroke-dasharray="10 6" opacity="0.45" />
      `;
    }

    if (world === "Polar Analog") {
      return `
        <rect width="${W}" height="${H}" fill="url(#sky-${uid})" />
        ${stars}
        <!-- Antarctic Aurora Ribbons -->
        <path d="M 0,${H * 0.24} Q ${W * 0.3},${H * 0.12} ${W * 0.6},${H * 0.26} T ${W},${H * 0.18}" fill="none" stroke="#34d399" stroke-width="18" opacity="0.22" />
        <path d="M 0,${H * 0.27} Q ${W * 0.35},${H * 0.16} ${W * 0.65},${H * 0.29} T ${W},${H * 0.21}" fill="none" stroke="#22d3ee" stroke-width="6" opacity="0.48" />
        <!-- Ice Shelf & EDEN ISS Container -->
        <path d="M 0,${H * 0.72} L ${W * 0.3},${H * 0.65} L ${W * 0.62},${H * 0.71} L ${W},${H * 0.63} L ${W},${H} L 0,${H} Z" fill="#0f172a" stroke="#67e8f9" stroke-width="2" />
        <rect x="${W * 0.12}" y="${H * 0.60}" width="${W * 0.32}" height="${H * 0.12}" fill="#020617" stroke="#38bdf8" stroke-width="2.5" rx="3" />
        <rect x="${W * 0.15}" y="${H * 0.625}" width="${W * 0.11}" height="${H * 0.055}" fill="#ec4899" opacity="0.7" />
        <rect x="${W * 0.29}" y="${H * 0.625}" width="${W * 0.11}" height="${H * 0.055}" fill="#22d3ee" opacity="0.7" />
      `;
    }

    if (world === "Suborbital") {
      return `
        <rect width="${W}" height="${H}" fill="url(#sky-${uid})" />
        ${stars}
        <!-- Parabolic Zero-G Trajectory Curve -->
        <path d="M ${W * 0.06},${H * 0.78} Q ${W * 0.5},${H * 0.08} ${W * 0.94},${H * 0.78}" fill="none" stroke="${pal.accent}" stroke-width="3.5" stroke-dasharray="10 6" opacity="0.8" />
        <circle cx="${W * 0.5}" cy="${H * 0.43}" r="8" fill="#ffffff" stroke="${pal.accent}" stroke-width="3" />
        <!-- Mach Shock Cone & Delta Silhouette -->
        <polygon points="${W * 0.58},${H * 0.38} ${W * 0.44},${H * 0.44} ${W * 0.49},${H * 0.48}" fill="#ffffff" stroke="#09090b" stroke-width="2" />
        <path d="M 0,${H * 0.82} Q ${W * 0.5},${H * 0.70} ${W},${H * 0.82} L ${W},${H} L 0,${H} Z" fill="url(#earth-${uid})" opacity="0.8" />
      `;
    }

    if (world === "Ground Analog") {
      return `
        <rect width="${W}" height="${H}" fill="url(#sky-${uid})" />
        <rect width="${W}" height="${H}" fill="url(#grid-hud-${uid})" />
        <!-- Concentric Chamber / Collimator Rings -->
        <circle cx="${W * 0.5}" cy="${H * 0.5}" r="${Math.min(W, H) * 0.42}" fill="none" stroke="${pal.accent}" stroke-width="2" stroke-dasharray="8 6" opacity="0.5" />
        <circle cx="${W * 0.5}" cy="${H * 0.5}" r="${Math.min(W, H) * 0.30}" fill="none" stroke="${pal.accent2}" stroke-width="1.5" opacity="0.45" />
        <!-- Chamber Racks Left & Right -->
        <rect x="0" y="${H * 0.15}" width="${W * 0.14}" height="${H * 0.7}" fill="#09090b" stroke="${pal.accent}" stroke-width="1.5" opacity="0.85" />
        <rect x="${W * 0.86}" y="${H * 0.15}" width="${W * 0.14}" height="${H * 0.7}" fill="#09090b" stroke="${pal.accent}" stroke-width="1.5" opacity="0.85" />
      `;
    }

    // Default: ISS Cupola / LEO Orbital Viewport
    return `
      <rect width="${W}" height="${H}" fill="url(#sky-${uid})" />
      ${stars}
      <!-- Glowing Curved Earth Atmospheric Limb -->
      <path d="M -20,${H * 0.76} Q ${W * 0.5},${H * 0.54} ${W + 20},${H * 0.78} L ${W + 20},${H + 20} L -20,${H + 20} Z" fill="url(#earth-${uid})" />
      <path d="M -20,${H * 0.76} Q ${W * 0.5},${H * 0.54} ${W + 20},${H * 0.78}" fill="none" stroke="#bae6fd" stroke-width="5" opacity="0.85" />
      <!-- ISS Cupola Window Struts -->
      <polygon points="${W * 0.12},${H * 0.10} ${W * 0.88},${H * 0.10} ${W * 0.96},${H * 0.52} ${W * 0.84},${H * 0.90} ${W * 0.16},${H * 0.90} ${W * 0.04},${H * 0.52}" fill="none" stroke="#334155" stroke-width="12" opacity="0.7" />
      <polygon points="${W * 0.12},${H * 0.10} ${W * 0.88},${H * 0.10} ${W * 0.96},${H * 0.52} ${W * 0.84},${H * 0.90} ${W * 0.16},${H * 0.90} ${W * 0.04},${H * 0.52}" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.6" />
    `;
  }

  /**
   * Renders a study-specific botanical or molecular hero illustration centered at (0,0)
   */
  function renderBotanicalHero(volume, uid, pal, scale) {
    const domain = (volume.study_domain || "").toLowerCase();
    const fam = (volume.plant_family || "").toLowerCase();
    const sc = scale || 1;

    if (domain.includes("epigenet") || domain.includes("methyl")) {
      // Twisting DNA double helix + glowing methyl nodes
      return `
        <g transform="scale(${sc})">
          <circle r="195" fill="url(#glow-${uid})" />
          <path d="M -110,-220 C 90,-150 -90,-50 110,20 C -90,90 90,170 -90,230" fill="none" stroke="#ffffff" stroke-width="9" stroke-linecap="round" />
          <path d="M 110,-220 C -90,-150 90,-50 -110,20 C 90,90 -90,170 90,230" fill="none" stroke="${pal.accent}" stroke-width="9" stroke-linecap="round" />
          ${[-180, -135, -90, -45, 0, 45, 90, 135, 180]
            .map(
              (y, idx) =>
                `<line x1="${idx % 2 === 0 ? -55 : -30}" y1="${y}" x2="${idx % 2 === 0 ? 55 : 30}" y2="${y}" stroke="${pal.accent2}" stroke-width="4" opacity="0.85" />` +
                `<circle cx="${idx % 2 === 0 ? -62 : 62}" cy="${y}" r="8" fill="${idx % 3 === 0 ? "#c084fc" : pal.accent}" stroke="#ffffff" stroke-width="2" />`
            )
            .join("")}
          <!-- Central Histone Octamer Core -->
          <circle cx="0" cy="0" r="52" fill="#09090b" stroke="#ffffff" stroke-width="4" />
          <circle cx="0" cy="0" r="38" fill="url(#dots-light-${uid})" stroke="${pal.accent}" stroke-width="2" />
          <text x="0" y="6" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">5-mC</text>
        </g>
      `;
    }

    if (domain.includes("radiation")) {
      // DNA / Plant Shield deflecting high-energy ionizing particle tracks
      return `
        <g transform="scale(${sc})">
          <circle r="200" fill="url(#glow-${uid})" />
          <!-- Hexagonal Genome Shield -->
          <polygon points="0,-175 150,-88 150,88 0,175 -150,88 -150,-88" fill="rgba(9,9,11,0.75)" stroke="${pal.accent}" stroke-width="5" />
          <polygon points="0,-148 126,-74 126,74 0,148 -126,74 -126,-74" fill="url(#dots-light-${uid})" stroke="${pal.accent2}" stroke-width="2" stroke-dasharray="8 5" />
          <!-- Incoming Ionizing Tracks Deflected -->
          <line x1="-260" y1="-160" x2="-92" y2="-56" stroke="#f43f5e" stroke-width="4" />
          <line x1="-250" y1="80" x2="-130" y2="30" stroke="#fb7185" stroke-width="3" />
          <circle cx="-92" cy="-56" r="14" fill="#ffffff" stroke="#f43f5e" stroke-width="4" />
          <!-- Protected Botanical Shoot Inside Shield -->
          <path d="M 0,95 L 0,-70" stroke="#34d399" stroke-width="7" stroke-linecap="round" />
          <path d="M 0,-30 C -55,-85 -95,-45 -50,5 C -25,20 -8,5 0,-30 Z" fill="#10b981" stroke="#ffffff" stroke-width="3" />
          <path d="M 0,-45 C 55,-100 95,-60 50,-10 C 25,5 8,-10 0,-45 Z" fill="#34d399" stroke="#ffffff" stroke-width="3" />
          <text x="0" y="128" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="900" fill="#e9d5ff" text-anchor="middle">SOG1 CHECKPOINT</text>
        </g>
      `;
    }

    if (fam.includes("poaceae")) {
      // Graceful orbital cereal / wheat culms
      return `
        <g transform="scale(${sc})">
          <circle r="190" fill="url(#glow-${uid})" />
          <path d="M 0,180 Q -20,20 -65,-170" fill="none" stroke="#ffffff" stroke-width="6" />
          <path d="M 0,180 Q 10,10 15,-195" fill="none" stroke="${pal.accent}" stroke-width="7" />
          <path d="M 0,180 Q 45,35 90,-145" fill="none" stroke="#ffffff" stroke-width="5" />
          ${[-165, -140, -115, -90, -65]
            .map(
              (y) =>
                `<ellipse cx="${12}" cy="${y}" rx="20" ry="9" transform="rotate(-28 12 ${y})" fill="#fde68a" stroke="#09090b" stroke-width="2.5" />` +
                `<ellipse cx="${22}" cy="${y + 10}" rx="20" ry="9" transform="rotate(28 22 ${y + 10})" fill="#fbbf24" stroke="#09090b" stroke-width="2.5" />`
            )
            .join("")}
          <!-- Fibrous Zero-G Roots -->
          <path d="M 0,180 C -45,210 -85,180 -115,235 M 0,180 C 30,220 75,195 110,240 M 0,180 C -10,225 18,245 0,265" fill="none" stroke="${pal.accent2}" stroke-width="3.5" stroke-linecap="round" />
        </g>
      `;
    }

    if (fam.includes("asteraceae")) {
      // Lush orbital Red Romaine / Mizuna canopy
      return `
        <g transform="scale(${sc})">
          <circle r="195" fill="url(#glow-${uid})" />
          <path d="M 0,70 C -140,30 -165,-110 -55,-145 C -20,-105 -10,-20 0,70 Z" fill="#059669" stroke="#ffffff" stroke-width="4" />
          <path d="M 0,70 C 140,30 165,-110 55,-145 C 20,-105 10,-20 0,70 Z" fill="#10b981" stroke="#ffffff" stroke-width="4" />
          <path d="M 0,70 C -85,-10 -80,-175 0,-195 C 80,-175 85,-10 0,70 Z" fill="#34d399" stroke="#09090b" stroke-width="4" />
          <path d="M 0,70 L 0,-165 M 0,30 L -65,-75 M 0,30 L 65,-75" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.85" />
          <!-- Hydroponic Pillows & Roots -->
          <rect x="-110" y="68" width="220" height="44" rx="10" fill="#09090b" stroke="${pal.accent2}" stroke-width="3" />
          <path d="M -50,112 C -65,165 -20,185 -40,220 M 0,112 C 15,170 -15,195 10,230 M 50,112 C 75,160 35,190 65,220" fill="none" stroke="#a7f3d0" stroke-width="3.5" />
        </g>
      `;
    }

    // Iconic Zero-G Arabidopsis Rosette + Glowing Columella Root Tip with Floating Statoliths
    return `
      <g transform="scale(${sc})">
        <circle r="205" fill="url(#glow-${uid})" />
        <!-- Canister / Chamber Collar Framing Root -->
        <ellipse cx="0" cy="-78" rx="115" ry="26" fill="#09090b" stroke="#e2e8f0" stroke-width="4" />
        <!-- Emerging Rosette Leaves Above -->
        <path d="M 0,-80 C -95,-115 -140,-180 -65,-205 C -20,-195 -10,-125 0,-80 Z" fill="#10b981" stroke="#ffffff" stroke-width="3.5" />
        <path d="M 0,-80 C 95,-115 140,-180 65,-205 C 20,-195 10,-125 0,-80 Z" fill="#34d399" stroke="#ffffff" stroke-width="3.5" />
        <path d="M 0,-80 C -40,-165 0,-235 0,-235 C 0,-235 40,-165 0,-80 Z" fill="#6ee7b7" stroke="#09090b" stroke-width="3.5" />
        <!-- Bioluminescent Root Tip Cutaway Below -->
        <path d="M -48,-76 C -76,10 -82,115 0,210 C 82,115 76,10 48,-76 Z" fill="#09090b" stroke="#ffffff" stroke-width="4" />
        <path d="M -34,-62 C -54,12 -58,100 0,182 C 58,100 54,12 34,-62 Z" fill="url(#glow-${uid})" stroke="${pal.accent}" stroke-width="2.5" />
        <!-- Waving Zero-G Root Hairs -->
        <path d="M -62,5 C -125,-10 -130,40 -165,25 M -68,55 C -125,65 -115,115 -155,110 M 62,10 C 125,-5 130,45 165,30 M 68,60 C 125,70 115,120 155,115" fill="none" stroke="#a7f3d0" stroke-width="3" stroke-linecap="round" />
        <!-- Floating Columella Amyloplast Statoliths -->
        <circle cx="-18" cy="75" r="14" fill="#ffffff" stroke="#09090b" stroke-width="3" />
        <circle cx="20" cy="92" r="12" fill="#ffffff" stroke="#09090b" stroke-width="3" />
        <circle cx="-6" cy="122" r="11" fill="${pal.accent2}" stroke="#09090b" stroke-width="3" />
        <circle cx="14" cy="142" r="9" fill="#ffffff" stroke="#09090b" stroke-width="2.5" />
      </g>
    `;
  }

  /**
   * Render high-craft Seinen Manga Tankōbon Cover (900x1200)
   * Designed as full-bleed cosmic ink art that harmonizes with the card's HTML masthead & bottom bar!
   */
  function renderMangaCover(volume) {
    const W = 900;
    const H = 1200;
    const seed = hashStr(volume.accession + "_" + volume.volume);
    const uid = "cov_" + volume.volume;
    const pal = getPalette(volume);
    const volNumStr = String(volume.volume).padStart(2, "0");
    const castChips = (volume.molecular_cast || []).slice(0, 3);

    return `
      <svg class="manga-svg-cover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="100%" height="100%" role="img" aria-label="ASTRO-BOTANICA Volume ${volNumStr} Manga Cover">
        ${buildDefs(uid, pal)}
        <clipPath id="clip-cov-${uid}">
          <rect x="0" y="0" width="${W}" height="${H}" />
        </clipPath>

        <g clip-path="url(#clip-cov-${uid})">
          <!-- Atmospheric World Backdrop -->
          ${renderWorldBackdrop(volume.world || "ISS", W, H, uid, pal, seed)}

          <!-- Halftone Screentone Texture Veil -->
          <rect width="${W}" height="${H}" fill="url(#dots-light-${uid})" opacity="0.5" />

          <!-- Subtle Vertical Katakana Watermark Along Left Edge -->
          <text x="58" y="340" font-family="'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif" font-size="44" font-weight="900" fill="#ffffff" opacity="0.14" writing-mode="tb" letter-spacing="10">アストロボタニカ</text>

          <!-- Kinetic Speedlines Behind Hero -->
          <g opacity="0.35">
            ${renderClippedSpeedLines(W, H, W * 0.5, H * 0.54, 42, seed, pal.accent2, 165)}
          </g>

          <!-- Central Botanical / Molecular Hero -->
          <g transform="translate(${W * 0.5}, ${H * 0.54})">
            ${renderBotanicalHero(volume, uid, pal, 1.18)}
          </g>

          <!-- Right-Side Scientific Telemetry Reticle (Cleanly clear of top/bottom HTML bars) -->
          <g transform="translate(${W - 220}, 280)">
            <rect x="0" y="0" width="186" height="32" rx="4" fill="rgba(6,9,15,0.84)" stroke="${pal.accent}" stroke-width="1.8" />
            <text x="93" y="21" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="800" fill="${pal.glow}" text-anchor="middle">${esc(pal.tag)}</text>
            ${castChips
              .map(
                (c, i) => `
                <g transform="translate(18, ${44 + i * 32})">
                  <rect x="0" y="0" width="168" height="24" rx="4" fill="rgba(6,9,15,0.78)" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
                  <circle cx="13" cy="12" r="4" fill="${c.direction === "up" ? "#34d399" : c.direction === "down" ? "#fb7185" : pal.accent2}" />
                  <text x="26" y="16" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#f8fafc">${esc(trunc(c.symbol, 16))}</text>
                </g>
              `
              )
              .join("")}
          </g>

          <!-- Crisp Inner Manga Ink Frame -->
          <rect x="14" y="14" width="${W - 28}" height="${H - 28}" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.24" />
        </g>
      </svg>
    `;
  }

  /**
   * Renders Panel 3's Live Scientific Data Visualizer (real metrics + mechanism inset)
   */
  function renderScientificTelemetryPanel(volume, uid, pal, pw, ph) {
    const metrics = (volume.key_metrics || []).slice(0, 4);
    const domain = volume.study_domain || "Microgravity & Gravitropism";
    const domainLow = domain.toLowerCase();

    // Build crisp horizontal data bars from real NASA OSDR debrief metrics
    const barRows = metrics.length
      ? metrics
          .map((m, idx) => {
            const y = 62 + idx * 44;
            const barMaxW = pw - 230;
            const barW = Math.max(36, Math.round((barMaxW * (m.score || 60)) / 100));
            const barColor = m.trend === "up" ? "#10b981" : m.trend === "down" ? "#f43f5e" : pal.accent2;
            const arrow = m.trend === "up" ? "▲" : m.trend === "down" ? "▼" : "◆";
            return `
              <g transform="translate(18, ${y})">
                <text x="0" y="13" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="800" fill="#e2e8f0">${esc(trunc(m.label, 24))}</text>
                <text x="${pw - 36}" y="13" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700" fill="${barColor}" text-anchor="end">${arrow} ${esc(trunc(m.value, 24))}</text>
                <rect x="0" y="20" width="${pw - 36}" height="12" rx="3" fill="#1e293b" />
                <rect x="0" y="20" width="${Math.min(pw - 36, barW + 90)}" height="12" rx="3" fill="${barColor}" opacity="0.92" />
              </g>
            `;
          })
          .join("")
      : `<text x="20" y="110" font-family="'JetBrains Mono', monospace" font-size="13" fill="#94a3b8">Multi-omics assay verified via NASA OSDR ${esc(volume.accession)}</text>`;

    // Bottom mechanism mini-schematic tailored to study domain
    let schematic = "";
    const sy = 250;
    if (domainLow.includes("radiation")) {
      schematic = `
        <line x1="24" y1="${sy + 35}" x2="180" y2="${sy + 35}" stroke="#f43f5e" stroke-width="3" stroke-dasharray="6 4" />
        <polygon points="180,${sy + 35} 166,${sy + 28} 166,${sy + 42}" fill="#f43f5e" />
        <rect x="195" y="${sy + 14}" width="118" height="42" rx="6" fill="#2e1065" stroke="#c084fc" stroke-width="2" />
        <text x="254" y="${sy + 39}" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="900" fill="#f3e8ff" text-anchor="middle">ATM → SOG1</text>
        <line x1="315" y1="${sy + 35}" x2="368" y2="${sy + 35}" stroke="#34d399" stroke-width="3" />
        <rect x="372" y="${sy + 14}" width="164" height="42" rx="6" fill="#064e3b" stroke="#34d399" stroke-width="2" />
        <text x="454" y="${sy + 39}" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="900" fill="#d1fae5" text-anchor="middle">DSB DNA REPAIR</text>
      `;
    } else if (domainLow.includes("epigenet") || domainLow.includes("methyl")) {
      schematic = `
        <path d="M 28,${sy + 36} Q 85,${sy + 8} 145,${sy + 36} T 262,${sy + 36}" fill="none" stroke="#38bdf8" stroke-width="3.5" />
        <path d="M 28,${sy + 36} Q 85,${sy + 64} 145,${sy + 36} T 262,${sy + 36}" fill="none" stroke="#c084fc" stroke-width="3.5" />
        <circle cx="85" cy="${sy + 16}" r="6" fill="#34d399" /><circle cx="204" cy="${sy + 16}" r="6" fill="#f43f5e" />
        <rect x="290" y="${sy + 14}" width="246" height="44" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
        <text x="413" y="${sy + 33}" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" fill="#7dd3fc" text-anchor="middle">WGBS 5-mC METHYLOME</text>
        <text x="413" y="${sy + 50}" font-family="'JetBrains Mono', monospace" font-size="10" fill="#cbd5e1" text-anchor="middle">CG / CHG / CHH Chromatin Shift</text>
      `;
    } else if (domainLow.includes("hormone") || domainLow.includes("metabolic")) {
      schematic = `
        <circle cx="62" cy="${sy + 36}" r="24" fill="#064e3b" stroke="#34d399" stroke-width="2.5" />
        <text x="62" y="${sy + 40}" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">SIGNAL</text>
        <line x1="90" y1="${sy + 36}" x2="155" y2="${sy + 36}" stroke="#34d399" stroke-width="3" stroke-dasharray="5 3" />
        <rect x="160" y="${sy + 14}" width="160" height="44" rx="6" fill="#0f172a" stroke="${pal.accent2}" stroke-width="2" />
        <text x="240" y="${sy + 40}" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="800" fill="#e0f2fe" text-anchor="middle">RECEPTOR AXIS</text>
        <line x1="324" y1="${sy + 36}" x2="368" y2="${sy + 36}" stroke="#38bdf8" stroke-width="3" />
        <rect x="372" y="${sy + 14}" width="164" height="44" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="2" />
        <text x="454" y="${sy + 40}" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" fill="#a7f3d0" text-anchor="middle">STRESS TOLERANCE</text>
      `;
    } else {
      // Gravity / Environmental Vector Comparator (1g Ground Control vs 0g Flight)
      schematic = `
        <rect x="20" y="${sy + 10}" width="246" height="56" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="1.8" />
        <text x="34" y="${sy + 31}" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" fill="#94a3b8">1g GROUND CONTROL (OES)</text>
        <text x="34" y="${sy + 50}" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#cbd5e1">↓ Settled Statoliths · Linear Auxin</text>
        <rect x="282" y="${sy + 10}" width="256" height="56" rx="6" fill="#052e16" stroke="${pal.accent}" stroke-width="2" />
        <text x="296" y="${sy + 31}" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" fill="${pal.glow}">0g / STRESS FLIGHT (${esc(volume.world.toUpperCase())})</text>
        <text x="296" y="${sy + 50}" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#ecfdf5">✦ Remodeled Transcriptome &amp; Roots</text>
      `;
    }

    return `
      <rect width="${pw}" height="${ph}" fill="#090d16" />
      <rect width="${pw}" height="${ph}" fill="url(#grid-hud-${uid})" />
      <!-- Header Strip -->
      <rect x="0" y="0" width="${pw}" height="40" fill="#111827" />
      <line x1="0" y1="40" x2="${pw}" y2="40" stroke="${pal.accent}" stroke-width="2" />
      <circle cx="20" cy="20" r="5" fill="${pal.accent}" />
      <text x="34" y="24" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="900" fill="#f8fafc">LIVE OSDR TELEMETRY · ${esc(trunc(domain.toUpperCase(), 24))}</text>
      <text x="${pw - 16}" y="24" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="800" fill="${pal.accent2}" text-anchor="end">${esc(volume.accession)}${volume.sample_count ? ` · n=${volume.sample_count}` : ""}</text>

      <!-- Real Data Bars -->
      ${barRows}

      <!-- Divider + Mechanism Schematic -->
      <line x1="18" y1="242" x2="${pw - 18}" y2="242" stroke="#334155" stroke-width="1.2" stroke-dasharray="4 4" />
      ${schematic}
    `;
  }

  /**
   * Render Widescreen 4-Panel Scientific Manga Spread (1400x788)
   * Every panel is strictly clipped via <clipPath> and leaves clean negative space for HTML lettering!
   */
  function renderMangaPageSpread(volume, page) {
    const W = 1400;
    const H = 788;
    const uid = "p_" + volume.volume + "_" + String(page.page_label || "1").replace(/[^a-zA-Z0-9]/g, "_");
    const seed = hashStr(volume.accession + "_" + (page.page_label || "1"));
    const pal = getPalette(volume);
    const actNum = page.act_num || 1;
    const hwLabel = trunc(volume.hardware_short || volume.hardware || "Orbital Flight Hardware", 36);
    const castNodes = (volume.molecular_cast || []).slice(0, 4);

    // Panel geometry constants
    const P1 = { x: 30, y: 30, w: 658, h: 348 };
    const P2 = { x: 708, y: 30, w: 662, h: 348 };
    const P3 = { x: 30, y: 398, w: 562, h: 360 };
    const P4 = { x: 612, y: 398, w: 758, h: 360 };

    // Panel 2 dynamic molecular cast network (evolves with Act!)
    const castBadgesSvg = castNodes
      .map((c, idx) => {
        const bx = 42 + (idx % 2) * 320;
        const by = 228 + Math.floor(idx / 2) * 52;
        const clr = c.direction === "up" ? "#10b981" : c.direction === "down" ? "#f43f5e" : pal.accent2;
        return `
          <g transform="translate(${bx}, ${by})">
            <rect width="265" height="38" rx="6" fill="rgba(9,13,22,0.92)" stroke="${clr}" stroke-width="2.2" />
            <circle cx="18" cy="19" r="5.5" fill="${clr}" />
            <text x="34" y="17" font-family="'JetBrains Mono', monospace" font-size="12.5" font-weight="900" fill="#ffffff">${esc(trunc(c.symbol, 16))}</text>
            <text x="34" y="31" font-family="'Inter', sans-serif" font-size="10" font-weight="600" fill="#cbd5e1">${esc(trunc(c.role, 26))}</text>
          </g>
        `;
      })
      .join("");

    return `
      <svg class="manga-svg-spread" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="100%" height="100%" role="img" aria-label="Manga Spread Page ${esc(page.page_label)}">
        ${buildDefs(uid, pal)}
        <defs>
          <clipPath id="cp1-${uid}"><rect x="0" y="0" width="${P1.w}" height="${P1.h}" /></clipPath>
          <clipPath id="cp2-${uid}"><rect x="0" y="0" width="${P2.w}" height="${P2.h}" /></clipPath>
          <clipPath id="cp3-${uid}"><rect x="0" y="0" width="${P3.w}" height="${P3.h}" /></clipPath>
          <clipPath id="cp4-${uid}"><rect x="0" y="0" width="${P4.w}" height="${P4.h}" /></clipPath>
        </defs>

        <!-- Archival Manga Paper Canvas Base -->
        <rect width="${W}" height="${H}" fill="#f8f7f2" />

        <!-- ================================================================
             PANEL 1 (Upper Left): Mission Environment & Flight Hardware Blueprint
             (Top-left kept dark/clean for HTML narration box)
             ================================================================ -->
        <g transform="translate(${P1.x}, ${P1.y})">
          <g clip-path="url(#cp1-${uid})">
            ${renderWorldBackdrop(volume.world || "ISS", P1.w, P1.h, uid, pal, seed)}
            <rect width="${P1.w}" height="${P1.h}" fill="url(#dots-light-${uid})" opacity="0.35" />

            <!-- Flight Hardware Chamber Blueprint Positioned Right/Lower-Center -->
            <g transform="translate(${P1.w * 0.67}, ${P1.h * 0.56})">
              <circle r="115" fill="url(#glow-${uid})" />
              <!-- Hardware Growth Chamber Cutaway -->
              <rect x="-118" y="-82" width="236" height="148" rx="10" fill="rgba(9,13,22,0.88)" stroke="#ffffff" stroke-width="3" />
              <rect x="-106" y="-70" width="212" height="18" rx="3" fill="${pal.accent}" opacity="0.85" />
              <!-- LED Photons / Chamber Columns -->
              <line x1="-65" y1="-50" x2="-65" y2="48" stroke="${pal.glow}" stroke-width="2" stroke-dasharray="5 4" opacity="0.7" />
              <line x1="0" y1="-50" x2="0" y2="48" stroke="${pal.glow}" stroke-width="2" stroke-dasharray="5 4" opacity="0.7" />
              <line x1="65" y1="-50" x2="65" y2="48" stroke="${pal.glow}" stroke-width="2" stroke-dasharray="5 4" opacity="0.7" />
              <!-- Mini Sprouts Inside Chamber -->
              <path d="M -65,52 L -65,12 M -65,24 C -82,12 -78,0 -65,16 M -65,24 C -48,12 -52,0 -65,16" fill="none" stroke="#34d399" stroke-width="3.5" stroke-linecap="round" />
              <path d="M 0,52 L 0,4 M 0,18 C -18,4 -14,-8 0,10 M 0,18 C 18,4 14,-8 0,10" fill="none" stroke="#6ee7b7" stroke-width="4" stroke-linecap="round" />
              <path d="M 65,52 L 65,14 M 65,26 C 48,14 52,2 65,18 M 65,26 C 82,14 78,2 65,18" fill="none" stroke="#34d399" stroke-width="3.5" stroke-linecap="round" />
              <rect x="-106" y="48" width="212" height="10" rx="2" fill="#334155" />
            </g>

            <!-- Bottom Hardware Spec Ribbon -->
            <rect x="16" y="${P1.h - 44}" width="${P1.w - 32}" height="30" rx="4" fill="rgba(6,9,15,0.9)" stroke="${pal.accent2}" stroke-width="1.5" />
            <text x="28" y="${P1.h - 24}" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="${pal.glow}">HARDWARE: ${esc(hwLabel.toUpperCase())}</text>
            <text x="${P1.w - 28}" y="${P1.h - 24}" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" fill="#cbd5e1" text-anchor="end">${esc((volume.world || "ISS").toUpperCase())}</text>
          </g>
          <rect width="${P1.w}" height="${P1.h}" fill="none" stroke="#09090b" stroke-width="4.5" />
        </g>

        <!-- ================================================================
             PANEL 2 (Upper Right): Botanical & Molecular Action Beat
             (Strict clipPath — zero speedline bleed! Evolves across Acts I/II/III)
             ================================================================ -->
        <g transform="translate(${P2.x}, ${P2.y})">
          <g clip-path="url(#cp2-${uid})">
            <rect width="${P2.w}" height="${P2.h}" fill="#ffffff" />
            <rect width="${P2.w}" height="${P2.h}" fill="url(#dots-${uid})" opacity="0.2" />
            <!-- Clipped Kinetic Speedlines -->
            ${renderClippedSpeedLines(P2.w, P2.h, P2.w * 0.44, P2.h * 0.44, 48, seed + actNum * 19, "#09090b", 95)}

            <!-- Botanical / Molecular Focal Art (Left-Center, Clear of Upper-Right SFX) -->
            <g transform="translate(${P2.w * 0.36}, ${P2.h * 0.44})">
              ${renderBotanicalHero(volume, uid, pal, 0.56)}
            </g>

            <!-- Act Progression Banner (Top-Left of Panel 2) -->
            <rect x="16" y="14" width="236" height="28" rx="4" fill="#09090b" />
            <text x="28" y="33" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="900" fill="${pal.glow}">
              ${actNum === 1 ? "ACT I · MISSION DEPLOYMENT" : actNum === 2 ? "ACT II · MOLECULAR BATTLE" : "ACT III · FIXATION & SYNTHESIS"}
            </text>

            <!-- Live Molecular Cast Chips Anchored Along Bottom of Panel 2 -->
            ${castBadgesSvg}
          </g>
          <rect width="${P2.w}" height="${P2.h}" fill="none" stroke="#09090b" stroke-width="4.5" />
        </g>

        <!-- ================================================================
             PANEL 3 (Lower Left): LIVE Scientific Data & Mechanism Visualizer
             (100% Unobstructed by HTML overlays — rich, real OSDR telemetry!)
             ================================================================ -->
        <g transform="translate(${P3.x}, ${P3.y})">
          <g clip-path="url(#cp3-${uid})">
            ${renderScientificTelemetryPanel(volume, uid, pal, P3.w, P3.h)}
          </g>
          <rect width="${P3.w}" height="${P3.h}" fill="none" stroke="#09090b" stroke-width="4.5" />
        </g>

        <!-- ================================================================
             PANEL 4 (Lower Right): Dramatic Widescreen Story Stage
             (Clean negative space for HTML speaker balloons — ZERO overlap!)
             ================================================================ -->
        <g transform="translate(${P4.x}, ${P4.y})">
          <g clip-path="url(#cp4-${uid})">
            ${renderWorldBackdrop(volume.world || "ISS", P4.w, P4.h, uid, pal, seed + 303)}
            <rect width="${P4.w}" height="${P4.h}" fill="url(#dots-light-${uid})" opacity="0.28" />

            <!-- Dramatic Macro Plant Silhouette Framing Left Edge of Panel 4 -->
            <g transform="translate(125, 195)">
              ${renderBotanicalHero(volume, uid, pal, 0.68)}
            </g>

            <!-- Subtle Page & Mission Watermark Top-Left of Panel 4 -->
            <rect x="16" y="14" width="275" height="26" rx="4" fill="rgba(6,9,15,0.85)" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
            <text x="28" y="31" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" fill="#e2e8f0">
              PAGE ${esc(page.page_label)} · ${esc(trunc(page.page_title || volume.title, 26).toUpperCase())}
            </text>
          </g>
          <rect width="${P4.w}" height="${P4.h}" fill="none" stroke="#09090b" stroke-width="4.5" />
        </g>

        <!-- Outer Bold Manga Margin Frame -->
        <rect x="14" y="14" width="${W - 28}" height="${H - 28}" fill="none" stroke="#09090b" stroke-width="5" />
      </svg>
    `;
  }

  window.AstroBotanicaArtStudio = {
    renderMangaCover: renderMangaCover,
    renderCoverSVG: renderMangaCover,
    renderMangaPageSpread: renderMangaPageSpread,
    renderSpreadSVG: function (volume, pageNum, pageObj) {
      const p =
        pageObj ||
        (volume.pages && volume.pages[Math.max(0, (pageNum || 1) - 1)]) || {
          page_label: String(pageNum || 1),
        };
      return renderMangaPageSpread(volume, p);
    },
  };
})();
