/**
 * CoSE Science Comics — Bespoke Marvel & Manga Vector Comic Art Studio
 * Renders full-bleed comic covers (900x1200) and widescreen graphic novel spreads (1400x788)
 * with authentic Marvel (halftones, Kirby Krackle, Solarpunk ink, Spider-Verse pop-art)
 * and Manga (Seinen screentones, Shonen speed lines, Ghibli watercolor washes, Bio-Action cutaways)
 * visual grammars for any plate slot awaiting an AI-illustrated WebP upgrade.
 */
(function () {
  "use strict";

  const PALETTES = {
    1: { bg1: "#041322", bg2: "#0a2a47", c1: "#38bdf8", c2: "#fbbf24", c3: "#22c55e", ink: "#020617", mode: "marvel-scifi" },
    2: { bg1: "#030712", bg2: "#172554", c1: "#60a5fa", c2: "#f59e0b", c3: "#34d399", ink: "#020617", mode: "marvel-epic" },
    3: { bg1: "#090418", bg2: "#1e1042", c1: "#c084fc", c2: "#2dd4bf", c3: "#f472b6", ink: "#030014", mode: "manga-cyber" },
    4: { bg1: "#0a0814", bg2: "#3b0f0a", c1: "#fbbf24", c2: "#ef4444", c3: "#38bdf8", ink: "#09090b", mode: "marvel-kirby" },
    5: { bg1: "#02130c", bg2: "#0b2e1e", c1: "#4ade80", c2: "#facc15", c3: "#a855f7", ink: "#010a06", mode: "manga-shonen" },
    6: { bg1: "#140914", bg2: "#2f1224", c1: "#fb7185", c2: "#4ade80", c3: "#60a5fa", ink: "#120710", mode: "manga-botanical" },
    7: { bg1: "#180c06", bg2: "#3d1c0c", c1: "#fb923c", c2: "#a3e635", c3: "#38bdf8", ink: "#0e0603", mode: "marvel-solarpunk" },
    8: { bg1: "#1a060b", bg2: "#3d0d19", c1: "#f87171", c2: "#34d399", c3: "#fbbf24", ink: "#0d0205", mode: "manga-bio" },
    9: { bg1: "#041c1d", bg2: "#0f3f3c", c1: "#2dd4bf", c2: "#fb7185", c3: "#facc15", ink: "#020f10", mode: "marvel-pop" },
    10: { bg1: "#06081d", bg2: "#1b1d4d", c1: "#fbbf24", c2: "#38bdf8", c3: "#4ade80", ink: "#03040e", mode: "marvel-crossover" }
  };

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
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return Math.abs(h);
  }

  function starfield(W, H, seed, count) {
    const r = seeded(seed);
    let out = "";
    for (let i = 0; i < count; i++) {
      const x = (r() * W).toFixed(1);
      const y = (r() * H * 0.78).toFixed(1);
      const rad = (0.7 + r() * 2.1).toFixed(1);
      const op = (0.3 + r() * 0.7).toFixed(2);
      out += `<circle cx="${x}" cy="${y}" r="${rad}" fill="#ffffff" opacity="${op}"/>`;
    }
    return out;
  }

  function speedLines(cx, cy, W, H, color, count, seed) {
    const r = seeded(seed);
    const maxR = Math.hypot(W, H);
    let out = `<g opacity="0.32" stroke="${color}" stroke-linecap="round">`;
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + (r() - 0.5) * 0.04;
      const r1 = 220 + r() * 240;
      const x1 = cx + Math.cos(a) * r1;
      const y1 = cy + Math.sin(a) * r1;
      const x2 = cx + Math.cos(a) * maxR;
      const y2 = cy + Math.sin(a) * maxR;
      const sw = (1 + r() * 3.2).toFixed(1);
      out += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke-width="${sw}"/>`;
    }
    return out + "</g>";
  }

  function kirbyKrackle(cx, cy, radius, glowColor, count, seed) {
    const r = seeded(seed);
    let out = `<g>`;
    for (let i = 0; i < count; i++) {
      const a = r() * Math.PI * 2;
      const dist = radius * (0.45 + r() * 0.65);
      const x = cx + Math.cos(a) * dist;
      const y = cy + Math.sin(a) * dist;
      const rad = 4 + r() * 14;
      out += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(rad + 3.5).toFixed(1)}" fill="${glowColor}" opacity="0.72"/>`;
      out += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${rad.toFixed(1)}" fill="#09090b"/>`;
    }
    return out + "</g>";
  }

  function drawPlantHero(cx, cy, scale, leafColor, veinColor, auraColor) {
    return `
      <g transform="translate(${cx},${cy}) scale(${scale})">
        <ellipse cx="0" cy="-20" rx="125" ry="110" fill="${auraColor}" opacity="0.22" filter="url(#gnGlow)"/>
        <!-- Roots -->
        <g stroke="${veinColor}" stroke-width="3.2" fill="none" stroke-linecap="round" opacity="0.88">
          <path d="M0,40 C-5,85 -22,125 -10,175"/>
          <path d="M-4,68 C-42,88 -62,115 -84,132"/>
          <path d="M2,78 C38,96 64,120 82,148"/>
          <path d="M-12,112 C-45,135 -58,158 -52,185"/>
          <path d="M8,118 C36,142 46,164 40,192"/>
        </g>
        <!-- Stem -->
        <path d="M0,45 C-2,10 2,-35 0,-70" stroke="${leafColor}" stroke-width="9" stroke-linecap="round" fill="none"/>
        <!-- Rosette Leaves -->
        <g stroke="#04150c" stroke-width="3.5">
          <path d="M0,10 C-68,-12 -118,-55 -96,-88 C-62,-104 -18,-55 0,0 Z" fill="${leafColor}"/>
          <path d="M0,10 C68,-12 118,-55 96,-88 C62,-104 18,-55 0,0 Z" fill="${leafColor}"/>
          <path d="M0,-25 C-62,-58 -85,-125 -48,-148 C-14,-142 -4,-82 0,-25 Z" fill="${leafColor}"/>
          <path d="M0,-25 C62,-58 85,-125 48,-148 C14,-142 4,-82 0,-25 Z" fill="${leafColor}"/>
          <path d="M0,-52 C-24,-108 -18,-172 0,-188 C18,-172 24,-108 0,-52 Z" fill="${veinColor}"/>
        </g>
        <!-- Luminous Leaf Veins -->
        <g stroke="#ecfdf5" stroke-width="2.2" fill="none" opacity="0.85">
          <path d="M0,4 L-84,-76 M0,4 L84,-76 M0,-28 L-44,-136 M0,-28 L44,-136 M0,-54 L0,-172"/>
        </g>
      </g>
    `;
  }

  function drawAstronautSilhouette(cx, cy, scale, suitAccent) {
    return `
      <g transform="translate(${cx},${cy}) scale(${scale})">
        <!-- Backpack -->
        <rect x="-54" y="-76" width="108" height="122" rx="18" fill="#cbd5e1" stroke="#0f172a" stroke-width="5"/>
        <!-- Torso -->
        <path d="M-46,-62 L46,-62 L58,64 L-58,64 Z" fill="#f8fafc" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
        <path d="M-44,-22 L44,-22" stroke="${suitAccent}" stroke-width="10"/>
        <path d="M-48,26 L48,26" stroke="${suitAccent}" stroke-width="8"/>
        <!-- Arms -->
        <path d="M-46,-54 C-86,-30 -96,15 -72,56" stroke="#f8fafc" stroke-width="26" stroke-linecap="round" fill="none"/>
        <path d="M-46,-54 C-86,-30 -96,15 -72,56" stroke="#0f172a" stroke-width="4" stroke-linecap="round" fill="none"/>
        <path d="M46,-54 C86,-30 96,15 72,56" stroke="#f8fafc" stroke-width="26" stroke-linecap="round" fill="none"/>
        <path d="M46,-54 C86,-30 96,15 72,56" stroke="#0f172a" stroke-width="4" stroke-linecap="round" fill="none"/>
        <!-- Helmet -->
        <circle cx="0" cy="-102" r="46" fill="#f8fafc" stroke="#0f172a" stroke-width="5"/>
        <ellipse cx="0" cy="-100" rx="34" ry="27" fill="url(#visorGrad)" stroke="#0f172a" stroke-width="4"/>
        <path d="M-20,-112 Q0,-122 20,-110" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.7"/>
        <!-- Botanical Shoulder Patch -->
        <circle cx="48" cy="-42" r="10" fill="#16a34a" stroke="#ffffff" stroke-width="2"/>
      </g>
    `;
  }

  function drawPixelDroid(cx, cy, scale) {
    return `
      <g transform="translate(${cx},${cy}) scale(${scale})">
        <ellipse cx="0" cy="0" rx="68" ry="22" fill="none" stroke="#38bdf8" stroke-width="3" opacity="0.7" transform="rotate(-18)"/>
        <ellipse cx="0" cy="0" rx="68" ry="22" fill="none" stroke="#c084fc" stroke-width="2.5" opacity="0.6" transform="rotate(24)"/>
        <circle cx="0" cy="0" r="34" fill="url(#pixelGrad)" stroke="#020617" stroke-width="4"/>
        <circle cx="0" cy="0" r="17" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
        <circle cx="0" cy="0" r="9" fill="#38bdf8" filter="url(#gnGlow)"/>
        <circle cx="-4" cy="-4" r="3" fill="#ffffff"/>
      </g>
    `;
  }

  function drawDocBProfile(cx, cy, scale, accent) {
    return `
      <g transform="translate(${cx},${cy}) scale(${scale})">
        <!-- Flight Jacket Shoulders -->
        <path d="M-85,110 C-75,42 -42,18 0,18 C42,18 75,42 85,110 Z" fill="#0f5c78" stroke="#020617" stroke-width="5"/>
        <path d="M-24,20 L0,62 L24,20" fill="#0f172a" stroke="${accent}" stroke-width="3"/>
        <rect x="26" y="48" width="28" height="14" rx="4" fill="#cbd5e1" stroke="#020617" stroke-width="2"/>
        <!-- Head -->
        <ellipse cx="0" cy="-36" rx="38" ry="46" fill="#d6a078" stroke="#020617" stroke-width="4.5"/>
        <!-- Hair -->
        <path d="M-38,-44 C-42,-86 42,-92 40,-44 C26,-62 -22,-64 -38,-44 Z" fill="#1e293b" stroke="#020617" stroke-width="4"/>
        <!-- Glowing Glasses -->
        <rect x="-30" y="-48" width="24" height="16" rx="4" fill="${accent}" fill-opacity="0.35" stroke="#0f172a" stroke-width="3.5"/>
        <rect x="6" y="-48" width="24" height="16" rx="4" fill="${accent}" fill-opacity="0.35" stroke="#0f172a" stroke-width="3.5"/>
        <line x1="-6" y1="-40" x2="6" y2="-40" stroke="#0f172a" stroke-width="3.5"/>
        <line x1="-24" y1="-44" x2="-12" y2="-36" stroke="#ffffff" stroke-width="2.5" opacity="0.8"/>
        <line x1="12" y1="-44" x2="24" y2="-36" stroke="#ffffff" stroke-width="2.5" opacity="0.8"/>
        <!-- Smile -->
        <path d="M-12,-14 Q0,-4 14,-14" stroke="#020617" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      </g>
    `;
  }

  function drawMycoWeb(cx, cy, W, H, seed) {
    const r = seeded(seed);
    let out = `<g fill="none" stroke-linecap="round">`;
    for (let i = 0; i < 34; i++) {
      const a = (i / 34) * Math.PI * 2;
      const len = 130 + r() * 290;
      const mx = cx + Math.cos(a + 0.25) * (len * 0.55);
      const my = cy + Math.sin(a + 0.25) * (len * 0.55);
      const ex = cx + Math.cos(a) * len;
      const ey = cy + Math.sin(a) * len;
      out += `<path d="M${cx},${cy} Q${mx.toFixed(1)},${my.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)}" stroke="#fbbf24" stroke-width="${(1.4 + r() * 3).toFixed(1)}" opacity="${(0.35 + r() * 0.5).toFixed(2)}"/>`;
      out += `<circle cx="${ex.toFixed(1)}" cy="${ey.toFixed(1)}" r="${(3 + r() * 5).toFixed(1)}" fill="#fde047" opacity="0.8"/>`;
    }
    return out + "</g>";
  }

  function drawEarthArc(cx, cy, rad) {
    return `
      <g>
        <circle cx="${cx}" cy="${cy}" r="${rad + 18}" fill="#38bdf8" opacity="0.22" filter="url(#gnGlow)"/>
        <circle cx="${cx}" cy="${cy}" r="${rad}" fill="url(#earthGrad)" stroke="#020617" stroke-width="5"/>
        <path d="M${cx - rad * 0.55},${cy - rad * 0.25} Q${cx - rad * 0.1},${cy - rad * 0.65} ${cx + rad * 0.35},${cy - rad * 0.15} Q${cx + rad * 0.1},${cy + rad * 0.25} ${cx - rad * 0.45},${cy + rad * 0.1} Z" fill="#22c55e" opacity="0.65"/>
        <path d="M${cx - rad * 0.7},${cy - rad * 0.4} Q${cx},${cy - rad * 0.75} ${cx + rad * 0.65},${cy - rad * 0.35}" stroke="#ffffff" stroke-width="10" stroke-linecap="round" fill="none" opacity="0.45"/>
      </g>
    `;
  }

  function buildCoverScene(vol, W, H, p) {
    const cx = W / 2;
    const cy = H / 2;
    if (vol === 6) {
      // Vol 06: Ghibli ISS Cupola Dwarf Tomato Harvest
      return `
        ${starfield(W, H, 601, 95)}
        ${drawEarthArc(cx, H * 0.84, 380)}
        <!-- Cupola Window Ribbing -->
        <g stroke="#1e293b" stroke-width="18" fill="none" opacity="0.9">
          <polygon points="100,140 800,140 870,480 800,1040 100,1040 30,480"/>
          <line x1="100" y1="140" x2="290" y2="340"/>
          <line x1="800" y1="140" x2="610" y2="340"/>
          <line x1="30" y1="480" x2="230" y2="540"/>
          <line x1="870" y1="480" x2="670" y2="540"/>
        </g>
        <!-- Soft Ghibli Watercolor Magenta/Ruby LED Halo -->
        <ellipse cx="${cx}" cy="${cy - 40}" rx="310" ry="290" fill="#fb7185" opacity="0.24" filter="url(#gnGlow)"/>
        <ellipse cx="${cx}" cy="${cy + 30}" rx="220" ry="200" fill="#4ade80" opacity="0.18" filter="url(#gnGlow)"/>
        <!-- Lush Dwarf Space Tomato Plant -->
        ${drawPlantHero(cx, cy + 75, 1.45, "#16a34a", "#86efac", "#fb7185")}
        <!-- Glistening Ruby Cherry Tomatoes -->
        <g stroke="#450a0a" stroke-width="4">
          <circle cx="${cx - 105}" cy="${cy - 35}" r="36" fill="url(#tomatoGrad)"/>
          <circle cx="${cx + 95}" cy="${cy - 55}" r="40" fill="url(#tomatoGrad)"/>
          <circle cx="${cx - 25}" cy="${cy - 115}" r="34" fill="url(#tomatoGrad)"/>
          <circle cx="${cx + 12}" cy="${cy + 15}" r="42" fill="url(#tomatoGrad)"/>
          <circle cx="${cx + 125}" cy="${cy + 40}" r="32" fill="url(#tomatoGrad)"/>
        </g>
        <!-- Floating Dewdrops Catching Earthlight -->
        <g fill="#e0f2fe" stroke="#38bdf8" stroke-width="2.5" opacity="0.88">
          <circle cx="210" cy="310" r="18"/><circle cx="715" cy="295" r="22"/><circle cx="670" cy="680" r="15"/><circle cx="190" cy="640" r="14"/>
        </g>
        ${drawAstronautSilhouette(cx - 190, H - 150, 1.05, "#e11d48")}
      `;
    }
    if (vol === 7) {
      // Vol 07: Marvel Solarpunk Lunar Lava-Tube Myco Oasis
      return `
        ${starfield(W, H, 701, 60)}
        <!-- Soaring Lava Tube Cathedral Arches -->
        <path d="M0,1200 L0,260 Q450,-40 900,260 L900,1200 Z" fill="#23120b" stroke="#090402" stroke-width="8"/>
        <path d="M70,1200 L70,320 Q450,40 830,320 L830,1200 Z" fill="url(#solarpunkSky)"/>
        <!-- Sun-pipe Skylight Shaft -->
        <polygon points="360,110 540,110 720,1200 180,1200" fill="#fde047" opacity="0.16" filter="url(#gnGlow)"/>
        <!-- Sintered Terracotta Planter Terraces -->
        <path d="M60,820 Q450,740 840,820 L840,1200 L60,1200 Z" fill="#9a3412" stroke="#1c0a04" stroke-width="6"/>
        <path d="M110,940 Q450,860 790,940 L790,1200 L110,1200 Z" fill="#7c2d12" stroke="#1c0a04" stroke-width="6"/>
        <!-- Bioluminescent Golden Mycelium Network -->
        ${drawMycoWeb(cx, 920, W, H, 707)}
        <!-- Towering Bioluminescent Mushrooms + Emerald Crops -->
        <g stroke="#1c0a04" stroke-width="4.5">
          <path d="M260,810 L260,640" stroke="#fef3c7" stroke-width="26" stroke-linecap="round"/>
          <path d="M170,650 Q260,545 350,650 Z" fill="#f59e0b"/>
          <path d="M645,820 L645,670" stroke="#fef3c7" stroke-width="24" stroke-linecap="round"/>
          <path d="M565,680 Q645,585 725,680 Z" fill="#fb923c"/>
        </g>
        ${drawPlantHero(cx, 660, 1.35, "#22c55e", "#a3e635", "#fbbf24")}
        ${drawAstronautSilhouette(cx + 215, 970, 0.92, "#ea580c")}
      `;
    }
    if (vol === 9) {
      // Vol 09: Modern Marvel Pop-Art / Spider-Verse Citizen-Scientist Portal
      return `
        ${speedLines(cx, cy, W, H, "#2dd4bf", 56, 901)}
        <!-- Vibrant Pop-Art Diagonal Comic Burst -->
        <polygon points="0,0 900,0 900,480 0,720" fill="#0d9488" opacity="0.32"/>
        <polygon points="0,780 900,520 900,1200 0,1200" fill="#fb7185" opacity="0.28"/>
        <!-- Giant Glowing Comic Portal Ring -->
        <circle cx="${cx}" cy="${cy - 20}" r="300" fill="#041c1d" stroke="#facc15" stroke-width="14"/>
        <circle cx="${cx}" cy="${cy - 20}" r="265" fill="none" stroke="#2dd4bf" stroke-width="7" stroke-dasharray="22 14"/>
        <!-- ABCD Mosaic Calibration Card Floating Dynamic -->
        <g transform="translate(150,280) rotate(-14)">
          <rect x="0" y="0" width="170" height="120" rx="10" fill="#ffffff" stroke="#020617" stroke-width="6"/>
          <rect x="14" y="14" width="32" height="32" fill="#ef4444"/><rect x="52" y="14" width="32" height="32" fill="#facc15"/>
          <rect x="90" y="14" width="32" height="32" fill="#22c55e"/><rect x="128" y="14" width="28" height="32" fill="#3b82f6"/>
          <rect x="14" y="56" width="32" height="48" fill="#020617"/><rect x="52" y="56" width="32" height="48" fill="#a855f7"/>
          <rect x="90" y="56" width="66" height="48" fill="#0f172a"/>
        </g>
        <!-- Student Model Rocket Streaking Upward -->
        <g transform="translate(710,320) rotate(24)">
          <path d="M0,-90 L26,20 L-26,20 Z" fill="#f8fafc" stroke="#020617" stroke-width="5"/>
          <path d="M-26,0 L-50,36 L-22,22 Z M26,0 L50,36 L22,22 Z" fill="#fb7185" stroke="#020617" stroke-width="4"/>
          <path d="M-16,24 L0,115 L16,24 Z" fill="#facc15"/>
        </g>
        <!-- Central Glowing Petri Dish Seedling -->
        <circle cx="${cx}" cy="${cy}" r="180" fill="#0f172a" stroke="#38bdf8" stroke-width="8"/>
        ${drawPlantHero(cx, cy + 15, 1.05, "#22c55e", "#2dd4bf", "#facc15")}
        ${drawDocBProfile(220, 990, 1.25, "#2dd4bf")}
        ${drawPixelDroid(710, 880, 1.35)}
      `;
    }
    // Vol 10: Marvel Cinematic Crossover Event Finale — Artemis City Ensemble
    return `
      ${starfield(W, H, 1001, 120)}
      ${drawEarthArc(cx, 250, 195)}
      <!-- Distant Red Mars Jewel -->
      <circle cx="770" cy="185" r="24" fill="#ef4444" stroke="#fca5a5" stroke-width="3"/>
      <!-- Golden-Hour Lunar Ridge & Artemis City Glowing Domes -->
      <path d="M0,740 Q240,650 450,700 Q690,640 900,720 L900,1200 L0,1200 Z" fill="#1e293b" stroke="#020617" stroke-width="6"/>
      <g>
        <path d="M160,720 A160,125 0 0,1 480,720 Z" fill="#22c55e" fill-opacity="0.34" stroke="#fbbf24" stroke-width="6"/>
        <path d="M410,730 A195,150 0 0,1 800,730 Z" fill="#38bdf8" fill-opacity="0.30" stroke="#fbbf24" stroke-width="7"/>
        <ellipse cx="450" cy="735" rx="340" ry="38" fill="#fbbf24" opacity="0.22" filter="url(#gnGlow)"/>
      </g>
      <!-- All Six CoSE Heroes Assembled! -->
      ${drawMycoWeb(cx, 1040, W, H, 1010)}
      ${drawPlantHero(cx, 665, 1.05, "#22c55e", "#86efac", "#4ade80")}
      ${drawAstronautSilhouette(240, 935, 1.15, "#e11d48")}
      ${drawDocBProfile(655, 965, 1.22, "#38bdf8")}
      ${drawPixelDroid(cx, 480, 1.15)}
      <!-- Violet Statolith Crystal Floating Center-Lower -->
      <polygon points="450,860 492,905 474,955 426,955 408,905" fill="#a855f7" stroke="#f5d0fe" stroke-width="4" filter="url(#gnGlow)"/>
    `;
  }

  function buildInteriorScene(novel, page, W, H, p) {
    const key = page.scene_key;
    const seed = hashStr(key);
    const cx = W / 2;
    const cy = H / 2;

    // Style-specific atmospheric base layer
    let base = starfield(W, H, seed, 70);
    if (p.mode === "manga-shonen") {
      base += speedLines(cx, cy, W, H, p.c1, 68, seed + 1);
    } else if (p.mode === "marvel-kirby") {
      base += kirbyKrackle(cx, cy, 290, p.c1, 24, seed + 2);
    } else if (p.mode === "marvel-pop") {
      base += speedLines(cx, cy, W, H, p.c3, 44, seed + 3);
    } else if (p.mode === "manga-cyber") {
      // Isometric cyber grid
      let g = `<g stroke="${p.c1}" stroke-width="1.2" opacity="0.2">`;
      for (let x = 0; x <= W; x += 70) g += `<line x1="${x}" y1="0" x2="${x}" y2="${H}"/>`;
      for (let y = 0; y <= H; y += 70) g += `<line x1="0" y1="${y}" x2="${W}" y2="${y}"/>`;
      base += g + "</g>";
    }

    // Scene-specific dramatic compositions keyed by narrative beat
    let art = "";

    if (key.includes("boundary_layer") || key.includes("five_chambers") || key.includes("orbital_breeze")) {
      // Vol 01 CFD airflow scenes
      const isBreeze = key.includes("orbital_breeze");
      const isAudit = key.includes("five_chambers");
      let streams = "";
      for (let i = 0; i < 12; i++) {
        const y = 130 + i * 50;
        const bend = isBreeze ? 26 : 115;
        streams += `<path d="M40,${y} C380,${y} 520,${y - bend} 700,${y - bend * 0.6} C880,${y - bend * 0.2} 1020,${y} 1360,${y}" fill="none" stroke="${isBreeze ? "#38bdf8" : "#fbbf24"}" stroke-width="${isBreeze ? 4.5 : 3.5}" opacity="0.72"/>`;
      }
      if (isAudit) {
        // 5 glowing NASA growth chambers in a virtual wind tunnel
        const xs = [230, 465, 700, 935, 1170];
        art = streams + xs.map((x, idx) => `
          <g transform="translate(${x},${cy})">
            <rect x="-85" y="-120" width="170" height="240" rx="18" fill="#0c2d4d" fill-opacity="0.86" stroke="#38bdf8" stroke-width="5"/>
            <rect x="-65" y="-95" width="130" height="32" rx="6" fill="${idx % 2 === 0 ? "#f472b6" : "#38bdf8"}" opacity="0.75"/>
            ${drawPlantHero(0, 35, 0.45, "#22c55e", "#86efac", "#38bdf8")}
          </g>
        `).join("") + drawPixelDroid(1180, 185, 0.95);
      } else {
        art = `
          ${isBreeze ? drawEarthArc(1150, 620, 320) : ""}
          ${streams}
          ${!isBreeze ? `<ellipse cx="${cx}" cy="${cy}" rx="285" ry="215" fill="#fbbf24" opacity="0.28" stroke="#f59e0b" stroke-width="6" stroke-dasharray="18 10"/>` : ""}
          ${drawPlantHero(cx, cy + 40, 1.38, "#16a34a", "#4ade80", isBreeze ? "#38bdf8" : "#fbbf24")}
          ${drawPixelDroid(1090, 240, 1.1)}
        `;
      }
    } else if (key.includes("rubisco")) {
      // Vol 01 Page 04 Chloroplast Rubisco solar factory running in reverse
      art = `
        <ellipse cx="${cx}" cy="${cy}" rx="490" ry="265" fill="#064e3b" fill-opacity="0.75" stroke="#4ade80" stroke-width="8"/>
        <ellipse cx="${cx}" cy="${cy}" rx="430" ry="210" fill="none" stroke="#86efac" stroke-width="3" stroke-dasharray="14 10"/>
        <!-- Spinning Rubisco Molecular Turbine -->
        <g transform="translate(${cx},${cy})">
          <circle r="135" fill="#0f172a" stroke="#fbbf24" stroke-width="8"/>
          <circle r="82" fill="#f59e0b" opacity="0.28"/>
          ${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<rect x="-14" y="-128" width="28" height="46" rx="8" fill="#fbbf24" stroke="#020617" stroke-width="3" transform="rotate(${a})"/>`).join("")}
          <circle r="48" fill="#22c55e" stroke="#ecfdf5" stroke-width="4"/>
        </g>
        <!-- Amber O2 Overload Sparks -->
        ${kirbyKrackle(cx, cy, 200, "#fbbf24", 18, seed + 9)}
      `;
    } else if (key.includes("gbc2_lunar_plume") || key.includes("led_photon") || key.includes("lunar_earthrise")) {
      // Vol 02 Lunar scenes
      art = `
        ${drawEarthArc(cx, 250, 210)}
        <path d="M0,560 Q360,500 700,545 Q1060,590 1400,520 L1400,788 L0,788 Z" fill="#475569" stroke="#0f172a" stroke-width="6"/>
        <ellipse cx="${cx}" cy="640" rx="220" ry="42" fill="#0f172a" opacity="0.5"/>
        <!-- Glowing Cylindrical LEAF GBC2 Chamber -->
        <rect x="${cx - 145}" y="260" width="290" height="360" rx="28" fill="#0f172a" fill-opacity="0.76" stroke="#94a3b8" stroke-width="9"/>
        <rect x="${cx - 125}" y="280" width="250" height="34" rx="8" fill="#ec4899" filter="url(#gnGlow)"/>
        <!-- Gentle Rising 0.166g Thermal Plume -->
        <path d="M${cx},520 C${cx - 55},450 ${cx + 55},390 ${cx},325" stroke="#38bdf8" stroke-width="10" fill="none" opacity="0.75" filter="url(#gnGlow)"/>
        <path d="M${cx - 35},525 C${cx - 85},455 ${cx - 10},390 ${cx - 45},330" stroke="#fbbf24" stroke-width="6" fill="none" opacity="0.65"/>
        <path d="M${cx + 35},525 C${cx + 85},455 ${cx + 10},390 ${cx + 45},330" stroke="#fbbf24" stroke-width="6" fill="none" opacity="0.65"/>
        ${drawPlantHero(cx, 505, 0.92, "#22c55e", "#86efac", "#ec4899")}
        ${drawAstronautSilhouette(340, 560, 1.12, "#e11d48")}
      `;
    } else if (key.includes("statolith_lunar_drift")) {
      // Vol 02 Page 03 Microscopic root cap with tumbling violet Statolith crystals
      art = `
        <path d="M360,60 L1040,60 L960,660 Q700,760 440,660 Z" fill="#064e3b" fill-opacity="0.55" stroke="#4ade80" stroke-width="9"/>
        <!-- Cytoplasm cell divisions -->
        <line x1="400" y1="260" x2="1000" y2="260" stroke="#4ade80" stroke-width="4" opacity="0.6"/>
        <line x1="420" y1="460" x2="980" y2="460" stroke="#4ade80" stroke-width="4" opacity="0.6"/>
        <!-- Tumbling Violet Statolith Crystals with Brownian Jitter Trails -->
        ${[[560, 520, 46], [700, 565, 54], [835, 510, 44], [630, 390, 38], [770, 370, 40]].map(([x, y, s]) => `
          <path d="M${x},${y - 160} Q${x + 28},${y - 110} ${x - 22},${y - 60} Q${x + 18},${y - 25} ${x},${y}" stroke="#e9d5ff" stroke-width="4" stroke-dasharray="10 8" fill="none" opacity="0.72"/>
          <polygon points="${x},${y - s} ${x + s * 0.9},${y - s * 0.2} ${x + s * 0.55},${y + s * 0.85} ${x - s * 0.55},${y + s * 0.85} ${x - s * 0.9},${y - s * 0.2}" fill="#a855f7" stroke="#faf5ff" stroke-width="4" filter="url(#gnGlow)"/>
        `).join("")}
      `;
    } else if (key.includes("exploration_atmosphere")) {
      // Vol 02 Page 04 Split Atmospheric Pressure vs O2 Dome
      art = `
        <line x1="${cx}" y1="40" x2="${cx}" y2="${H - 40}" stroke="#38bdf8" stroke-width="5" stroke-dasharray="16 10"/>
        <circle cx="380" cy="${cy}" r="230" fill="#1e3a8a" fill-opacity="0.55" stroke="#60a5fa" stroke-width="8"/>
        <circle cx="1020" cy="${cy}" r="230" fill="#312e81" fill-opacity="0.45" stroke="#c084fc" stroke-width="8"/>
        ${drawPlantHero(380, cy + 40, 0.85, "#22c55e", "#86efac", "#60a5fa")}
        ${drawPlantHero(1020, cy + 40, 0.85, "#22c55e", "#a78bfa", "#c084fc")}
        ${drawDocBProfile(220, 620, 0.95, "#38bdf8")}
        ${drawPixelDroid(cx, 220, 1.15)}
      `;
    } else if (key.includes("chromatin") || key.includes("circadian") || key.includes("rna_splicing") || key.includes("open_science_dawn")) {
      // Vol 03 Seinen Cyberpunk Data-Manga scenes
      if (key.includes("circadian")) {
        art = `
          ${drawEarthArc(cx, H + 120, 420)}
          <!-- 16 Overlapping Orbital Dawn Arcs -->
          ${Array.from({ length: 12 }, (_, i) => `<ellipse cx="${cx}" cy="${cy}" rx="${240 + i * 28}" ry="${90 + i * 16}" fill="none" stroke="${i % 2 === 0 ? "#fbbf24" : "#38bdf8"}" stroke-width="2.5" opacity="0.45" transform="rotate(${i * 12} ${cx} ${cy})"/>`).join("")}
          <!-- Twin Desynced Clockwork Gears (Shoot Amber vs Root Cyan) -->
          <circle cx="${cx - 150}" cy="${cy - 50}" r="115" fill="none" stroke="#fbbf24" stroke-width="14" stroke-dasharray="24 14"/>
          <circle cx="${cx + 150}" cy="${cy + 60}" r="105" fill="none" stroke="#2dd4bf" stroke-width="14" stroke-dasharray="20 14"/>
          ${drawPlantHero(cx, cy + 25, 1.15, "#22c55e", "#2dd4bf", "#c084fc")}
        `;
      } else if (key.includes("chromatin")) {
        art = `
          <!-- Glowing Origami DNA Folding Around Polycomb Violet Histone Vaults -->
          ${[260, 480, 700, 920, 1140].map((x, idx) => `
            <g transform="translate(${x},${cy + (idx % 2 === 0 ? -45 : 45)})">
              <polygon points="0,-105 92,-52 92,52 0,105 -92,52 -92,-52" fill="#3b0764" stroke="#c084fc" stroke-width="6"/>
              <circle r="48" fill="#a855f7" opacity="0.55" filter="url(#gnGlow)"/>
              <ellipse rx="110" ry="38" fill="none" stroke="#2dd4bf" stroke-width="6" transform="rotate(${idx % 2 === 0 ? 22 : -22})"/>
            </g>
          `).join("")}
          <path d="M120,${cy} Q400,${cy - 220} 700,${cy} T1280,${cy}" stroke="#f472b6" stroke-width="9" fill="none" opacity="0.82"/>
        `;
      } else {
        art = `
          <!-- RNA Splicing Remix Studio / Open Science Dawn -->
          <path d="M80,290 L1320,290" stroke="#c084fc" stroke-width="16" stroke-dasharray="140 50"/>
          <path d="M80,470 L1320,470" stroke="#2dd4bf" stroke-width="16" stroke-dasharray="95 35"/>
          ${[340, 690, 1020].map(x => `<rect x="${x - 55}" y="255" width="110" height="70" rx="14" fill="#f472b6" stroke="#faf5ff" stroke-width="4"/><rect x="${x - 45}" y="435" width="90" height="70" rx="14" fill="#2dd4bf" stroke="#faf5ff" stroke-width="4"/>`).join("")}
          ${drawDocBProfile(260, 610, 1.05, "#c084fc")}
          ${drawPixelDroid(1140, 230, 1.2)}
        `;
      }
    } else if (key.includes("quantum_radical_pair") || key.includes("reiner_gamma") || key.includes("sog1") || key.includes("helmholtz")) {
      // Vol 04 Jack Kirby Cosmic Energy scenes
      if (key.includes("quantum")) {
        art = `
          <!-- Blazing Blue Photon Beam Striking Cryptochrome Radical Pair -->
          <polygon points="0,120 680,350 680,440 0,290" fill="#38bdf8" opacity="0.35" filter="url(#gnGlow)"/>
          <ellipse cx="${cx - 170}" cy="${cy}" rx="150" ry="150" fill="none" stroke="#fbbf24" stroke-width="10"/>
          <ellipse cx="${cx + 170}" cy="${cy}" rx="150" ry="150" fill="none" stroke="#38bdf8" stroke-width="10"/>
          <circle cx="${cx - 170}" cy="${cy}" r="52" fill="#fbbf24" stroke="#09090b" stroke-width="6"/>
          <circle cx="${cx + 170}" cy="${cy}" r="52" fill="#38bdf8" stroke="#09090b" stroke-width="6"/>
          <path d="M${cx - 170},${cy - 120} L${cx - 170},${cy + 120}" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
          <path d="M${cx + 170},${cy + 120} L${cx + 170},${cy - 120}" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
          ${kirbyKrackle(cx, cy, 240, "#ef4444", 26, seed + 11)}
        `;
      } else if (key.includes("helmholtz")) {
        art = `
          <!-- Three Colossal Interlocking Copper Helmholtz Coils -->
          <ellipse cx="${cx}" cy="${cy}" rx="410" ry="260" fill="none" stroke="#d97706" stroke-width="24"/>
          <ellipse cx="${cx}" cy="${cy}" rx="260" ry="340" fill="none" stroke="#f59e0b" stroke-width="22"/>
          <ellipse cx="${cx}" cy="${cy}" rx="390" ry="110" fill="none" stroke="#fbbf24" stroke-width="18"/>
          ${drawPlantHero(cx, cy + 45, 1.0, "#a855f7", "#4ade80", "#fbbf24")}
          ${drawDocBProfile(260, 610, 1.05, "#fbbf24")}
        `;
      } else if (key.includes("sog1")) {
        art = `
          <!-- Double Helix + SOG1 Golden Repair Wave + Royal Purple Anthocyanin Shield -->
          <path d="M160,240 Q420,540 700,260 T1240,300" stroke="#38bdf8" stroke-width="14" fill="none"/>
          <path d="M160,520 Q420,220 700,500 T1240,460" stroke="#fbbf24" stroke-width="14" fill="none"/>
          <line x1="90" y1="80" x2="620" y2="390" stroke="#ef4444" stroke-width="12" filter="url(#gnGlow)"/>
          ${drawPlantHero(960, cy + 40, 1.25, "#7e22ce", "#e879f9", "#a855f7")}
          ${kirbyKrackle(620, 390, 180, "#fbbf24", 22, seed + 14)}
        `;
      } else {
        // Reiner Gamma Lunar Crustal Magnetic Swirl Domes
        art = `
          <path d="M0,540 Q420,460 700,520 Q1050,570 1400,490 L1400,788 L0,788 Z" fill="#64748b" stroke="#09090b" stroke-width="6"/>
          <path d="M240,540 A460,340 0 0,1 1160,540" fill="none" stroke="#fbbf24" stroke-width="12" filter="url(#gnGlow)"/>
          <path d="M350,540 A350,250 0 0,1 1050,540" fill="none" stroke="#f59e0b" stroke-width="8" stroke-dasharray="20 12"/>
          <!-- Deflected Solar Wind Crimson Rays -->
          ${[160, 230, 300, 370].map(y => `<path d="M20,${y} Q380,${y - 40} 580,${y - 160}" stroke="#ef4444" stroke-width="7" fill="none" opacity="0.85"/>`).join("")}
          ${drawPlantHero(cx, 535, 0.85, "#22c55e", "#4ade80", "#fbbf24")}
        `;
      }
    } else if (key.includes("moss_arabidopsis") || key.includes("redox_cvae") || key.includes("glycome") || key.includes("floodwave")) {
      // Vol 05 Shonen Kinetic Manga scenes
      if (key.includes("moss_arabidopsis")) {
        art = `
          ${drawPlantHero(410, cy + 60, 1.15, "#15803d", "#86efac", "#4ade80")}
          ${drawPlantHero(990, cy + 50, 1.32, "#16a34a", "#facc15", "#4ade80")}
          <!-- Synchronized GCaMP Calcium Lightning Bridge -->
          <path d="M410,360 L540,310 L620,420 L730,295 L840,405 L990,350" stroke="#bef264" stroke-width="11" fill="none" filter="url(#gnGlow)"/>
          <path d="M410,360 L540,310 L620,420 L730,295 L840,405 L990,350" stroke="#ffffff" stroke-width="4" fill="none"/>
        `;
      } else if (key.includes("redox_cvae")) {
        art = `
          <polygon points="${cx},130 ${cx + 150},570 ${cx - 150},570" fill="#06b6d4" fill-opacity="0.28" stroke="#38bdf8" stroke-width="8"/>
          <path d="M120,380 Q360,290 580,380" stroke="#facc15" stroke-width="14" fill="none" filter="url(#gnGlow)"/>
          <path d="M820,340 L970,270 L1080,380 L1260,280" stroke="#ef4444" stroke-width="14" fill="none" filter="url(#gnGlow)"/>
          ${drawPixelDroid(cx, 210, 1.1)}
        `;
      } else if (key.includes("glycome")) {
        art = `
          <!-- Woven Golden Pectin Cell Wall Outside + Emerald Microtubule Tracks Inside -->
          <rect x="110" y="130" width="1180" height="110" rx="24" fill="#d97706" fill-opacity="0.7" stroke="#fde047" stroke-width="6"/>
          ${Array.from({ length: 14 }, (_, i) => `<line x1="${150 + i * 82}" y1="135" x2="${210 + i * 82}" y2="235" stroke="#fef08a" stroke-width="5"/>`).join("")}
          ${[340, 460, 580].map(y => `<line x1="110" y1="${y}" x2="1290" y2="${y}" stroke="#4ade80" stroke-width="12" stroke-dasharray="36 16"/>`).join("")}
          ${[320, 680, 1020].map(x => `<circle cx="${x}" cy="460" r="34" fill="#a855f7" stroke="#ffffff" stroke-width="4"/>`).join("")}
        `;
      } else {
        // FloodWave-At Split Glare Removal
        art = `
          <rect x="100" y="130" width="560" height="460" rx="20" fill="#1e293b" stroke="#f87171" stroke-width="6"/>
          <path d="M140,460 L230,220 L310,510 L400,240 L500,490 L610,270" stroke="#f87171" stroke-width="8" fill="none"/>
          <rect x="740" y="130" width="560" height="460" rx="20" fill="#052e16" stroke="#4ade80" stroke-width="6"/>
          <path d="M780,500 C920,495 1030,360 1250,220" stroke="#4ade80" stroke-width="11" fill="none" filter="url(#gnGlow)"/>
          ${drawDocBProfile(cx, 620, 1.0, "#4ade80")}
        `;
      }
    } else if (novel.volume === 6) {
      // Vol 06 Botanical Ghibli Watercolor Manga scenes
      art = `
        ${key.includes("cupola") || key.includes("harvest") ? drawEarthArc(cx, H + 80, 440) : ""}
        <ellipse cx="${cx}" cy="${cy}" rx="460" ry="260" fill="#fb7185" opacity="0.18" filter="url(#gnGlow)"/>
        ${drawPlantHero(cx, cy + 55, 1.32, "#16a34a", "#86efac", "#fb7185")}
        <g stroke="#450a0a" stroke-width="4">
          <circle cx="${cx - 120}" cy="${cy - 30}" r="36" fill="url(#tomatoGrad)"/>
          <circle cx="${cx + 115}" cy="${cy - 45}" r="38" fill="url(#tomatoGrad)"/>
          <circle cx="${cx + 10}" cy="${cy + 30}" r="42" fill="url(#tomatoGrad)"/>
        </g>
        <g fill="#e0f2fe" stroke="#60a5fa" stroke-width="2.5" opacity="0.85">
          <circle cx="320" cy="240" r="18"/><circle cx="1090" cy="260" r="22"/><circle cx="1020" cy="540" r="16"/>
        </g>
        ${drawAstronautSilhouette(280, 565, 1.05, "#e11d48")}
      `;
    } else if (novel.volume === 7) {
      // Vol 07 Solarpunk Marvel Moon Dust & Mycoponics scenes
      art = `
        <path d="M0,510 Q380,445 700,495 Q1050,540 1400,470 L1400,788 L0,788 Z" fill="${key.includes("raw_apollo") ? "#475569" : "#9a3412"}" stroke="#1c0a04" stroke-width="6"/>
        ${drawMycoWeb(cx, 540, W, H, seed + 7)}
        ${drawPlantHero(cx, 440, 1.18, "#22c55e", "#a3e635", "#fb923c")}
        <g stroke="#1c0a04" stroke-width="4">
          <path d="M370,540 L370,415" stroke="#fef3c7" stroke-width="22" stroke-linecap="round"/>
          <path d="M295,425 Q370,340 445,425 Z" fill="#f59e0b"/>
          <path d="M1030,545 L1030,430" stroke="#fef3c7" stroke-width="20" stroke-linecap="round"/>
          <path d="M960,440 Q1030,360 1100,440 Z" fill="#fb923c"/>
        </g>
        ${key.includes("rothamsted") ? `<rect x="0" y="0" width="700" height="788" fill="#fbbf24" opacity="0.12"/><rect x="700" y="0" width="700" height="788" fill="#38bdf8" opacity="0.14"/>` : ""}
      `;
    } else if (novel.volume === 8) {
      // Vol 08 Bio-Action Medical Manga (Cells at Work! Style)
      if (key.includes("six_species")) {
        art = `
          <ellipse cx="${cx}" cy="${cy}" rx="250" ry="145" fill="#7f1d1d" stroke="#fbbf24" stroke-width="9"/>
          <path d="M${cx - 190},${cy} Q${cx - 120},${cy - 85} ${cx - 60},${cy} T${cx + 60},${cy} T${cx + 190},${cy}" stroke="#38bdf8" stroke-width="11" fill="none" filter="url(#gnGlow)"/>
          ${[0, 60, 120, 180, 240, 300].map(a => {
            const rad = (a * Math.PI) / 180;
            const x = cx + Math.cos(rad) * 390;
            const y = cy + Math.sin(rad) * 245;
            return `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(0)}" y2="${y.toFixed(0)}" stroke="#f87171" stroke-width="4" stroke-dasharray="10 8" opacity="0.65"/><circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="54" fill="#1e1b4b" stroke="#34d399" stroke-width="5"/>`;
          }).join("")}
        `;
      } else if (key.includes("capoeira")) {
        art = `
          ${speedLines(cx, cy, W, H, "#34d399", 54, seed + 8)}
          <circle cx="${cx}" cy="${cy}" r="260" fill="none" stroke="#34d399" stroke-width="12" stroke-dasharray="40 16" filter="url(#gnGlow)"/>
          <circle cx="${cx}" cy="${cy}" r="185" fill="none" stroke="#fbbf24" stroke-width="7" stroke-dasharray="22 14"/>
          <g transform="rotate(-24 ${cx} ${cy})">
            ${drawAstronautSilhouette(cx, cy + 30, 1.35, "#dc2626")}
          </g>
        `;
      } else {
        art = `
          <!-- Crimson Muscle Fibers + Phytochemical Emerald-Gold Defender Wave -->
          ${[180, 280, 380, 480, 580].map(y => `<path d="M60,${y} Q450,${y - 45} 700,${y} T1340,${y}" stroke="#dc2626" stroke-width="34" fill="none" opacity="0.58"/>`).join("")}
          <path d="M100,560 C380,450 580,260 1280,210" stroke="#34d399" stroke-width="26" fill="none" filter="url(#gnGlow)"/>
          <path d="M100,560 C380,450 580,260 1280,210" stroke="#fde047" stroke-width="10" fill="none"/>
          ${[360, 580, 820, 1060].map((x, i) => `<circle cx="${x}" cy="${470 - i * 70}" r="36" fill="#22c55e" stroke="#fef08a" stroke-width="5"/>`).join("")}
          ${drawPixelDroid(1140, 560, 1.05)}
        `;
      }
    } else if (novel.volume === 9) {
      // Vol 09 Spider-Verse Pop-Art Citizen-Scientist Scenes
      art = `
        <rect x="290" y="135" width="820" height="480" rx="28" fill="#0f172a" stroke="#facc15" stroke-width="10"/>
        ${drawPlantHero(cx, cy + 35, 1.12, "#22c55e", "#2dd4bf", "#fb7185")}
        <!-- Colorful Calibration Blocks & Pop-Art Halftone Accents -->
        <g transform="translate(115,195) rotate(-10)">
          <rect width="160" height="110" rx="10" fill="#ffffff" stroke="#020617" stroke-width="5"/>
          <rect x="14" y="14" width="38" height="38" fill="#ef4444"/><rect x="60" y="14" width="38" height="38" fill="#facc15"/>
          <rect x="106" y="14" width="38" height="38" fill="#22c55e"/><rect x="14" y="60" width="130" height="36" fill="#0ea5e9"/>
        </g>
        ${drawDocBProfile(220, 625, 0.98, "#2dd4bf")}
        ${drawPixelDroid(1195, 235, 1.15)}
      `;
    } else {
      // Vol 10 Marvel Crossover Event — Artemis City Grand Finale
      art = `
        ${drawEarthArc(cx, 175, 170)}
        <circle cx="1160" cy="175" r="24" fill="#ef4444" stroke="#fca5a5" stroke-width="3"/>
        <path d="M0,550 Q380,475 700,520 Q1050,480 1400,540 L1400,788 L0,788 Z" fill="#1e293b" stroke="#020617" stroke-width="6"/>
        <!-- Glowing Artemis City Domes & Closed-Loop Energy Ribbons -->
        <path d="M290,545 A410,275 0 0,1 1110,545 Z" fill="#22c55e" fill-opacity="0.22" stroke="#fbbf24" stroke-width="8"/>
        <ellipse cx="${cx}" cy="465" rx="340" ry="120" fill="none" stroke="#38bdf8" stroke-width="6" stroke-dasharray="18 10"/>
        ${drawMycoWeb(cx, 660, W, H, seed + 10)}
        ${drawPlantHero(cx, 465, 1.05, "#22c55e", "#86efac", "#fbbf24")}
        ${drawAstronautSilhouette(340, 590, 1.02, "#e11d48")}
        ${drawDocBProfile(1065, 615, 1.05, "#38bdf8")}
        ${drawPixelDroid(cx, 250, 1.05)}
      `;
    }

    return base + `
      <rect width="${W}" height="${H}" fill="url(#${uid}_halftone)" pointer-events="none"/>
      ${art}
      <rect width="${W}" height="${H}" fill="url(#${uid}_vignette)" pointer-events="none"/>
      <rect x="8" y="8" width="${W - 16}" height="${H - 16}" fill="none" stroke="${p.ink}" stroke-width="6" pointer-events="none"/>
      <rect x="14" y="14" width="${W - 28}" height="${H - 28}" fill="none" stroke="${p.c1}" stroke-opacity="0.35" stroke-width="1.5" pointer-events="none"/>
    `;
  }

  function renderStudioSVG(novel, pageOrNull) {
    const isCover = !pageOrNull;
    const W = isCover ? 900 : 1400;
    const H = isCover ? 1200 : 788;
    const p = PALETTES[novel.volume] || PALETTES[1];
    const uid = `gn_${novel.volume}_${isCover ? "cov" : pageOrNull.page_number}`;
    const isManga = novel.art_style_family === "manga";

    const sceneMarkup = isCover
      ? buildCoverScene(novel.volume, W, H, p)
      : buildInteriorScene(novel, pageOrNull, W, H, p);

    return `
      <svg class="gn-studio-svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${isCover ? novel.title + " cover artwork" : pageOrNull.beat_title}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${uid}_bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${p.bg1}"/>
            <stop offset="100%" stop-color="${p.bg2}"/>
          </linearGradient>
          <radialGradient id="earthGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#38bdf8"/>
            <stop offset="65%" stop-color="#1d4ed8"/>
            <stop offset="100%" stop-color="#0f172a"/>
          </radialGradient>
          <linearGradient id="visorGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#38bdf8"/>
            <stop offset="50%" stop-color="#1e3a8a"/>
            <stop offset="100%" stop-color="#020617"/>
          </linearGradient>
          <radialGradient id="pixelGrad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#e0f2fe"/>
            <stop offset="55%" stop-color="#38bdf8"/>
            <stop offset="100%" stop-color="#312e81"/>
          </radialGradient>
          <radialGradient id="tomatoGrad" cx="32%" cy="28%" r="70%">
            <stop offset="0%" stop-color="#fda4af"/>
            <stop offset="45%" stop-color="#e11d48"/>
            <stop offset="100%" stop-color="#881337"/>
          </radialGradient>
          <pattern id="${uid}_halftone" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
            <circle cx="3" cy="3" r="1.4" fill="${p.c1}" opacity="0.16"/>
            <circle cx="9" cy="9" r="1.1" fill="${p.c2}" opacity="0.12"/>
          </pattern>
          <radialGradient id="${uid}_vignette" cx="50%" cy="50%" r="65%">
            <stop offset="55%" stop-color="#000000" stop-opacity="0"/>
            <stop offset="100%" stop-color="#020617" stop-opacity="0.48"/>
          </radialGradient>
          <linearGradient id="solarpunkSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1c0d07"/>
            <stop offset="55%" stop-color="#451a03"/>
            <stop offset="100%" stop-color="#14532d"/>
          </linearGradient>
          <pattern id="${uid}_dots" width="${isManga ? 10 : 14}" height="${isManga ? 10 : 14}" patternUnits="userSpaceOnUse">
            <circle cx="${isManga ? 5 : 7}" cy="${isManga ? 5 : 7}" r="${isManga ? 1.4 : 2.1}" fill="${p.c1}" opacity="${isManga ? 0.14 : 0.12}"/>
          </pattern>
          <filter id="gnGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="12" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <rect width="${W}" height="${H}" fill="url(#${uid}_bg)"/>
        <rect width="${W}" height="${H}" fill="url(#${uid}_dots)"/>
        ${sceneMarkup}
        <!-- Dramatic Comic Ink Vignette Border -->
        <rect x="6" y="6" width="${W - 12}" height="${H - 12}" fill="none" stroke="${p.ink}" stroke-width="12"/>
        <rect x="14" y="14" width="${W - 28}" height="${H - 28}" fill="none" stroke="${p.c1}" stroke-width="2" opacity="0.45"/>
      </svg>
    `;
  }

  window.CoSEGraphicNovelArtStudio = {
    renderCoverSVG: (novel) => renderStudioSVG(novel, null),
    renderPageSVG: (novel, page) => renderStudioSVG(novel, page)
  };
})();
