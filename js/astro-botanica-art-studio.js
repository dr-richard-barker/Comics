/**
 * ASTRO-BOTANICA: ZERO-G ROOTS — Seinen Manga Vector Comic Art Engine
 * Generates dynamic high-contrast black-and-white manga covers (900x1200)
 * and widescreen spreads (1400x788) with authentic manga techniques:
 *  - High-frequency 60° and 45° dot screentones (<pattern> halftones)
 *  - Bold black sumi ink borders and deep shadows
 *  - Radial and directional kinetic speed-lines (action & gravitropic vectors)
 *  - Cellular and organelle cutaways (amyloplast statoliths, xylem, chloroplasts)
 *  - Bioluminescent futuristic data HUDs (molecular log2FC, Ca2+ waves, AAS peaks)
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
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
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

  function buildDefs(uid) {
    return `
      <defs>
        <!-- 60-degree Fine Manga Screentone -->
        <pattern id="manga-dots-${uid}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <circle cx="2" cy="2" r="1.5" fill="#000" />
          <circle cx="6" cy="6" r="1.5" fill="#000" />
        </pattern>
        <!-- Dense Shading Screentone -->
        <pattern id="manga-dense-${uid}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <circle cx="3" cy="3" r="2.2" fill="#000" />
        </pattern>
        <!-- Diagonal Ink Hatching -->
        <pattern id="manga-hatch-${uid}" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(60)">
          <line x1="0" y1="0" x2="0" y2="10" stroke="#000" stroke-width="2.5" />
        </pattern>
        <!-- Soft Radial Glow for HUD Overlays -->
        <radialGradient id="hud-glow-${uid}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#38bdf8" stop-opacity="0" />
        </radialGradient>
      </defs>
    `;
  }

  function renderSpeedLines(W, H, count, seed) {
    const r = seeded(seed);
    const cx = W * (0.3 + r() * 0.4);
    const cy = H * (0.3 + r() * 0.4);
    let lines = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * 2 * Math.PI + (r() - 0.5) * 0.05;
      const innerR = 140 + r() * 80;
      const outerR = Math.max(W, H) * 0.8;
      const x1 = cx + Math.cos(angle) * innerR;
      const y1 = cy + Math.sin(angle) * innerR;
      const x2 = cx + Math.cos(angle) * outerR;
      const y2 = cy + Math.sin(angle) * outerR;
      const strokeW = (0.7 + r() * 2.2).toFixed(1);
      lines.push(`<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#000000" stroke-width="${strokeW}" opacity="${(0.4 + r() * 0.5).toFixed(2)}" />`);
    }
    return lines.join("\n");
  }

  /**
   * Render high-resolution Seinen Manga Cover (900x1200)
   */
  function renderMangaCover(volume) {
    const W = 900;
    const H = 1200;
    const seed = hashStr(volume.accession + "_" + volume.volume);
    const rnd = seeded(seed);
    const uid = "cov_" + volume.volume;

    const volNumStr = String(volume.volume).padStart(2, "0");
    const titleEsc = esc(volume.title);
    const accEsc = esc(volume.accession);
    const orgEsc = esc(volume.organism);
    const worldEsc = esc(volume.world || "ISS");

    // Dynamic motif elements
    const isMoon = volume.world === "Moon";
    const isMars = volume.world === "Mars";
    const isPolar = volume.world === "Polar Analog";

    return `
      <svg class="manga-svg-cover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="100%" height="100%" role="img" aria-label="ASTRO-BOTANICA Volume ${volNumStr} Manga Cover">
        ${buildDefs(uid)}
        <!-- Paper Canvas Base -->
        <rect width="${W}" height="${H}" fill="#fcfbf7" />

        <!-- Distant Cosmic Screentone Backing -->
        <rect x="30" y="30" width="${W - 60}" height="${H - 60}" fill="url(#manga-dots-${uid})" opacity="0.35" />

        <!-- Deep Ink Celestial Horizon -->
        <path d="M 30,${H * 0.7} Q ${W * 0.5},${H * 0.58} ${W - 30},${H * 0.72} L ${W - 30},${H - 30} L 30,${H - 30} Z" fill="#09090b" />

        <!-- Celestial Body / Orbit Arc -->
        <circle cx="${W * 0.75}" cy="${H * 0.28}" r="140" fill="none" stroke="#000" stroke-width="4" stroke-dasharray="8 4" />
        <circle cx="${W * 0.75}" cy="${H * 0.28}" r="130" fill="url(#manga-dense-${uid})" opacity="0.4" />
        <circle cx="${W * 0.75}" cy="${H * 0.28}" r="120" fill="#fcfbf7" />

        <!-- Kinetic Manga Speedlines -->
        <g opacity="0.6">
          ${renderSpeedLines(W, H * 0.5, 45, seed)}
        </g>

        <!-- Central Botanical Cutaway / Hero Plant Rig -->
        <g transform="translate(${W * 0.5}, ${H * 0.55}) scale(1.15)">
          <!-- Glowing Root Vector -->
          <circle cx="0" cy="0" r="180" fill="url(#hud-glow-${uid})" />
          
          <!-- Root Tip Apex (Dark Ink Silhouette with Screentone Inset) -->
          <path d="M -40,-120 C -70,-30 -80,60 0,160 C 80,60 70,-30 40,-120 Z" fill="#09090b" />
          <path d="M -25,-100 C -50,-20 -55,50 0,135 C 55,50 50,-20 25,-100 Z" fill="url(#manga-hatch-${uid})" />

          <!-- Sprout Shoot Arching Upward -->
          <path d="M 0,-115 Q -15,-200 -70,-260 Q 0,-240 0,-115 Z" fill="#09090b" />
          <path d="M 0,-115 Q 15,-200 70,-260 Q 0,-240 0,-115 Z" fill="url(#manga-dense-${uid})" />
          
          <!-- Statolith Compasses Floating in Amyloplast -->
          <circle cx="-12" cy="70" r="12" fill="#fff" stroke="#000" stroke-width="3" />
          <circle cx="8" cy="95" r="10" fill="#fff" stroke="#000" stroke-width="3" />
          <circle cx="0" cy="120" r="8" fill="#fff" stroke="#000" stroke-width="3" />
        </g>

        <!-- Sci-Fi HUD Molecular Banner -->
        <g transform="translate(60, ${H - 220})">
          <rect x="0" y="0" width="${W - 120}" height="140" fill="#ffffff" stroke="#000000" stroke-width="4" />
          <rect x="8" y="8" width="${W - 136}" height="124" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="4 2" />
          
          <!-- Accession Tag & World Pill -->
          <rect x="25" y="22" width="130" height="30" fill="#09090b" rx="4" />
          <text x="90" y="42" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="900" fill="#fff" text-anchor="middle">${accEsc}</text>

          <rect x="165" y="22" width="120" height="30" fill="none" stroke="#000" stroke-width="2" rx="4" />
          <text x="225" y="42" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="800" fill="#000" text-anchor="middle">${worldEsc}</text>

          <!-- Chapter Title on Cover -->
          <text x="25" y="82" font-family="'Impact', 'Arial Black', sans-serif" font-size="24" fill="#09090b" letter-spacing="1">${titleEsc.toUpperCase()}</text>
          <text x="25" y="108" font-family="'Inter', sans-serif" font-size="13" font-weight="600" fill="#52525b">${orgEsc.slice(0, 75)}</text>
        </g>

        <!-- Top Manga Series Masthead Banner -->
        <g transform="translate(60, 70)">
          <!-- Background Katakana SFX Kanji Style Brand -->
          <text x="${(W - 120) * 0.5}" y="95" font-family="'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif" font-size="82" font-weight="900" fill="#09090b" opacity="0.12" text-anchor="middle" letter-spacing="12">アストロボタニカ</text>
          
          <rect x="0" y="0" width="${W - 120}" height="110" fill="#ffffff" stroke="#000000" stroke-width="5" />
          
          <text x="30" y="42" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="900" fill="#e11d48" letter-spacing="3">NASA OSDR SEINEN ARCHIVE · VOL. ${volNumStr}</text>
          <text x="30" y="84" font-family="'Impact', 'Arial Black', sans-serif" font-size="44" fill="#09090b" letter-spacing="2">ASTRO-BOTANICA</text>
          <text x="${W - 150}" y="82" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="900" fill="#09090b">ZERO-G ROOTS</text>
        </g>

        <!-- Outer Double Manga Border -->
        <rect x="18" y="18" width="${W - 36}" height="${H - 36}" fill="none" stroke="#09090b" stroke-width="6" />
        <rect x="26" y="26" width="${W - 52}" height="${H - 52}" fill="none" stroke="#09090b" stroke-width="1.5" />
      </svg>
    `;
  }

  /**
   * Render Widescreen Manga Spread (1400x788) for reader pages
   */
  function renderMangaPageSpread(volume, page) {
    const W = 1400;
    const H = 788;
    const uid = "p_" + volume.volume + "_" + String(page.page_label || "1").replace(/[^a-zA-Z0-9]/g, "_");
    const seed = hashStr(volume.accession + "_" + (page.page_label || "1"));
    const rnd = seeded(seed);

    const captionText = esc(page.caption || "Orbital physiological recording in progress.");
    const actEsc = esc(page.act || "Act II — The Molecular Frontier");
    const sfxEsc = esc(page.sfx || "ZRRR-KLANK");

    return `
      <svg class="manga-svg-spread" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="100%" height="100%" role="img" aria-label="Manga Spread Page ${page.page_label}">
        ${buildDefs(uid)}
        <!-- Paper Canvas Base -->
        <rect width="${W}" height="${H}" fill="#fcfbf7" />

        <!-- 4-Panel Dynamic Manga Layout Grid -->
        <!-- Panel 1: Establishing Upper Left -->
        <g transform="translate(40, 40)">
          <rect width="630" height="340" fill="#ffffff" stroke="#09090b" stroke-width="4" />
          <rect x="0" y="0" width="630" height="340" fill="url(#manga-dots-${uid})" opacity="0.25" />
          
          <!-- Space Hardware Cutaway Silhouette -->
          <circle cx="315" cy="170" r="110" fill="#09090b" opacity="0.9" />
          <circle cx="315" cy="170" r="95" fill="url(#manga-dense-${uid})" opacity="0.6" />
          <rect x="220" y="150" width="190" height="40" fill="#ffffff" stroke="#000" stroke-width="2" />
          <text x="315" y="176" font-family="'JetBrains Mono', monospace" font-size="15" font-weight="900" fill="#000" text-anchor="middle">${esc(volume.hardware.slice(0, 32))}</text>
          
          <!-- Panel Header / Act Tag -->
          <rect x="15" y="15" width="220" height="26" fill="#09090b" rx="2" />
          <text x="25" y="33" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" fill="#fff">${actEsc.slice(0, 30).toUpperCase()}</text>
        </g>

        <!-- Panel 2: Upper Right (Kinetic Action / Speedlines) -->
        <g transform="translate(710, 40)">
          <rect width="650" height="340" fill="#ffffff" stroke="#09090b" stroke-width="4" />
          <!-- Directional Speed Lines -->
          ${renderSpeedLines(650, 340, 35, seed)}
          
          <!-- Molecular Vanguard Silhouette -->
          <path d="M 280,80 L 370,170 L 280,260 L 190,170 Z" fill="#09090b" />
          <path d="M 290,95 L 355,160 L 290,225 L 225,160 Z" fill="url(#manga-hatch-${uid})" />
          
          <!-- Bold Katakana Manga SFX -->
          <text x="520" y="130" font-family="'Impact', 'Arial Black', sans-serif" font-size="48" font-style="italic" fill="#09090b" stroke="#ffffff" stroke-width="3" paint-order="stroke fill">${sfxEsc}</text>
        </g>

        <!-- Panel 3: Lower Left (Micro-cellular / Data Inset) -->
        <g transform="translate(40, 410)">
          <rect width="420" height="330" fill="#ffffff" stroke="#09090b" stroke-width="4" />
          <rect x="10" y="10" width="400" height="310" fill="url(#manga-dots-${uid})" opacity="0.3" />
          
          <!-- Organelle Circles -->
          <circle cx="210" cy="165" r="90" fill="#ffffff" stroke="#000000" stroke-width="3" />
          <circle cx="210" cy="165" r="70" fill="url(#manga-dense-${uid})" opacity="0.5" />
          
          <!-- Starch Granule Statoliths -->
          <ellipse cx="190" cy="155" rx="25" ry="16" fill="#000" />
          <ellipse cx="230" cy="175" rx="20" ry="14" fill="#000" />
          <ellipse cx="205" cy="195" rx="18" ry="12" fill="#000" />
          
          <rect x="25" y="280" width="370" height="32" fill="#09090b" rx="4" />
          <text x="210" y="301" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" fill="#fff" text-anchor="middle">SUBCELLULAR STATOLITH / APEX DYNAMICS</text>
        </g>

        <!-- Panel 4: Lower Right (Wide Narrative Splash with Balloon) -->
        <g transform="translate(490, 410)">
          <rect width="870" height="330" fill="#ffffff" stroke="#09090b" stroke-width="4" />
          
          <!-- Horizon Silhouette across bottom -->
          <path d="M 0,240 Q 435,190 870,230 L 870,330 L 0,330 Z" fill="#09090b" />
          
          <!-- Manga Speech Balloon -->
          <g transform="translate(40, 30)">
            <rect width="790" height="110" rx="20" fill="#ffffff" stroke="#09090b" stroke-width="3.5" />
            <!-- Speech Tail -->
            <polygon points="120,110 145,135 155,110" fill="#ffffff" stroke="#09090b" stroke-width="3.5" />
            <polygon points="122,108 145,131 153,108" fill="#ffffff" />
            
            <text x="35" y="45" font-family="'Bangers', 'Impact', sans-serif" font-size="20" fill="#e11d48" letter-spacing="1">ORBITAL OBSERVATION LOG:</text>
            <text x="35" y="78" font-family="'Comic Neue', 'Inter', sans-serif" font-size="16" font-weight="700" fill="#09090b">${captionText.slice(0, 105)}</text>
          </g>

          <!-- Dialog / Scientist Callout -->
          <g transform="translate(60, 185)">
            <rect width="750" height="50" rx="8" fill="#09090b" />
            <text x="30" y="32" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="800" fill="#38bdf8">MISSION CONTROLLER:</text>
            <text x="210" y="32" font-family="'Inter', sans-serif" font-size="13" fill="#ffffff">"${esc((page.dialogue && page.dialogue[0]) || 'Telemetry sync confirmed. All channels recording.')}"</text>
          </g>
        </g>

        <!-- Outer Manga Spread Frame -->
        <rect x="20" y="20" width="${W - 40}" height="${H - 40}" fill="none" stroke="#09090b" stroke-width="6" />
        <rect x="26" y="26" width="${W - 52}" height="${H - 52}" fill="none" stroke="#09090b" stroke-width="1.5" />
      </svg>
    `;
  }

  // Export engine methods globally
  window.AstroBotanicaArtStudio = {
    renderMangaCover: renderMangaCover,
    renderCoverSVG: renderMangaCover,
    renderMangaPageSpread: renderMangaPageSpread,
    renderSpreadSVG: function (volume, pageNum, pageObj) {
      const p = pageObj || (volume.pages && volume.pages[Math.max(0, (pageNum || 1) - 1)]) || { page_label: String(pageNum || 1) };
      return renderMangaPageSpread(volume, p);
    }
  };
})();
