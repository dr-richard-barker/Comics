/**
 * ASTRO-BOTANICA: ZERO-G ROOTS — Flagship 68-Volume Seinen Manga Reader Controller
 * Powers the 68-Volume Showcase Grid, NASA OSDR Accession Filters (ISS/Moon/Mars/Polar Analog),
 * Plant Family Filters (Brassicaceae, Asteraceae, Solanaceae, Poaceae, Fabaceae, Bryophytes),
 * Cinema Spread & Webtoon Scroll Reader, 3-Layer Overlays (Lettering, OSDR Data HUD, Clean Art),
 * and Native <dialog> 32-Page Master Script & Dramatis Personae Modal.
 */
(function () {
  "use strict";

  let AB_DATA = window.ASTRO_BOTANICA_DATA || null;
  let activeVolNum = null; // null = Showcase Grid; number 1..68 = Open Volume
  let activePageNum = 1;
  let readerLayout = "cinema"; // 'cinema' | 'scroll'
  let showLettering = true;
  let showDataHud = true;
  let cleanArtMode = false;

  let filterWorld = "all";
  let filterFamily = "all";
  let filterArc = "all";
  let searchQuery = "";

  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getLevel() {
    if (window.CoSEReader && typeof window.CoSEReader.getCurrentLevel === "function") {
      return window.CoSEReader.getCurrentLevel();
    }
    return "ms";
  }

  function renderCoverVisual(volume) {
    if (window.AstroBotanicaArtStudio && typeof window.AstroBotanicaArtStudio.renderMangaCover === "function") {
      return window.AstroBotanicaArtStudio.renderMangaCover(volume);
    }
    return `<div class="ab-cover-fallback"><h3>Vol. ${volume.volume}</h3><p>${esc(volume.title)}</p></div>`;
  }

  function renderSpreadVisual(volume, page) {
    if (window.AstroBotanicaArtStudio && typeof window.AstroBotanicaArtStudio.renderMangaPageSpread === "function") {
      return window.AstroBotanicaArtStudio.renderMangaPageSpread(volume, page);
    }
    return `<div class="ab-spread-fallback"><h4>Page ${esc(page.page_label)}</h4></div>`;
  }

  function getFilteredVolumes() {
    if (!AB_DATA || !AB_DATA.volumes) return [];
    return AB_DATA.volumes.filter((v) => {
      if (filterWorld !== "all" && v.world !== filterWorld) return false;
      if (filterFamily !== "all" && !v.plant_family.toLowerCase().includes(filterFamily.toLowerCase())) return false;
      if (filterArc !== "all") {
        if (filterArc === "1-15" && (v.volume < 1 || v.volume > 15)) return false;
        if (filterArc === "16-35" && (v.volume < 16 || v.volume > 35)) return false;
        if (filterArc === "36-50" && (v.volume < 36 || v.volume > 50)) return false;
        if (filterArc === "51-68" && (v.volume < 51 || v.volume > 68)) return false;
      }
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const haystack = [
          v.title,
          v.accession,
          v.organism,
          v.plant_family,
          v.hardware,
          v.publication,
          `vol ${v.volume}`,
          `volume ${v.volume}`
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }

  function renderShowcase(root) {
    const filtered = getFilteredVolumes();
    const worldEmoji = {
      ISS: "🛰️",
      Moon: "🌙",
      Mars: "🪐",
      "Polar Analog": "❄️",
      Suborbital: "🚀"
    };

    const cardsHtml = filtered
      .map((v) => {
        const wEmoji = worldEmoji[v.world] || "🌌";
        const pageCount = v.pages_count || 32;

        return `
          <article class="ab-cover-card" data-open-volume="${v.volume}">
            <div class="ab-cover-art-wrap">
              ${renderCoverVisual(v)}
              <div class="ab-cover-masthead">
                <div class="ab-corner-box">
                  <span class="ab-corner-vol">VOL</span>
                  <span class="ab-corner-num">${String(v.volume).padStart(2, "0")}</span>
                </div>
                <div class="ab-cover-title-stack">
                  <span class="ab-cover-accession">${esc(v.accession)}</span>
                  <h3 class="ab-cover-title">${esc(v.title)}</h3>
                </div>
              </div>
              <div class="ab-cover-bottom-bar">
                <span class="ab-style-ribbon">🌱 SEINEN MANGA · ${esc(v.plant_family.split("(")[0].trim())}</span>
                <span class="ab-art-badge">📐 32-PAGE SCRIPT</span>
              </div>
            </div>
            <div class="ab-cover-body">
              <div class="ab-meta-chips">
                <span class="ab-chip">${wEmoji} ${esc(v.world)}</span>
                <span class="ab-chip">🌿 ${esc(v.organism.split("—")[0].trim().slice(0, 30))}</span>
                <a class="ab-chip ab-chip-link" href="${esc(v.osdr_url)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">🔗 NASA OSDR ↗</a>
              </div>
              <p class="ab-hardware-note"><strong>Hardware:</strong> ${esc(v.hardware)}</p>
              <p class="ab-pub-preview"><strong>Reference:</strong> ${esc(v.publication.slice(0, 110))}...</p>
              <div class="ab-cover-cta">
                <button class="btn-ab-launch" type="button" data-open-volume-btn="${v.volume}">📖 Read 32-Page Manga →</button>
                <button class="btn-ab-script-preview" type="button" data-open-script-btn="${v.volume}" title="View Dramatis Personae &amp; Script">📜 Script</button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    root.innerHTML = `
      <section class="ab-showcase-banner">
        <div class="ab-banner-content">
          <p class="ab-banner-eyebrow">🌱 Flagship Seinen Manga Series · NASA Open Science Data Repository (OSDR)</p>
          <h2 class="ab-banner-title">ASTRO-BOTANICA: ZERO-G ROOTS (宇宙植物学 · 根の無重力)</h2>
          <p class="ab-banner-lede">
            Synthesizing <strong>68 verified NASA OSDR space plant biology missions</strong> (from <em>OSD-7</em> through <em>OSD-971</em>) into <strong>2,176 pages of seinen manga</strong>.
            Grounded in genuine transcriptomic assays, differential gene expression (DEG) ledgers, Apollo lunar soil interactions, and polar analog harvests across the ISS, the Moon, Mars simulants, and Antarctica.
          </p>
          <div class="ab-banner-stats">
            <span class="ab-stat-pill">🗾 68 Seinen Manga Volumes</span>
            <span class="ab-stat-pill">🔬 68 Verified NASA OSDR Accessions</span>
            <span class="ab-stat-pill">🛰️ ISS · 🌙 Moon · 🪐 Mars · ❄️ Polar Analog</span>
            <span class="ab-stat-pill">🧬 2,176 Master Script Pages</span>
            <span class="ab-stat-pill">⚡ High-Frequency 60°/45° Vector Screentones</span>
            <span class="ab-stat-pill">🔗 Direct NASA OSDR Study Links</span>
          </div>
        </div>
      </section>

      <div class="ab-filter-deck" aria-label="Filter ASTRO-BOTANICA Volumes">
        <!-- Search Row -->
        <div class="ab-search-row">
          <div class="ab-search-box">
            <span class="ab-search-icon">🔍</span>
            <input id="ab-search-input" type="search" placeholder="Search 68 volumes by accession (e.g. OSD-855), gene (XTH, PIN), plant (Arabidopsis, Lettuce), or hardware..." value="${esc(searchQuery)}" aria-label="Search ASTRO-BOTANICA manga volumes">
          </div>
          <button id="ab-reset-filters-btn" class="ab-tool-btn" type="button">↺ Reset Filters</button>
        </div>

        <!-- World / Destination Filter -->
        <div class="ab-filter-row">
          <span class="ab-filter-label">Destination:</span>
          <button class="ab-pill ${filterWorld === "all" ? "active" : ""}" data-ab-world="all">🌌 All Worlds (68)</button>
          <button class="ab-pill ${filterWorld === "ISS" ? "active" : ""}" data-ab-world="ISS">🛰️ ISS / LEO</button>
          <button class="ab-pill ${filterWorld === "Moon" ? "active" : ""}" data-ab-world="Moon">🌙 The Moon (Apollo Regolith)</button>
          <button class="ab-pill ${filterWorld === "Mars" ? "active" : ""}" data-ab-world="Mars">🪐 Mars Simulants</button>
          <button class="ab-pill ${filterWorld === "Polar Analog" ? "active" : ""}" data-ab-world="Polar Analog">❄️ EDEN ISS Polar Analog</button>
          <button class="ab-pill ${filterWorld === "Suborbital" ? "active" : ""}" data-ab-world="Suborbital">🚀 Suborbital</button>
        </div>

        <!-- Plant Family Filter -->
        <div class="ab-filter-row">
          <span class="ab-filter-label">Plant Family:</span>
          <button class="ab-pill ${filterFamily === "all" ? "active" : ""}" data-ab-family="all">🌿 All Taxa</button>
          <button class="ab-pill ${filterFamily === "Brassicaceae" ? "active" : ""}" data-ab-family="Brassicaceae">🥬 Brassicaceae (Mustards)</button>
          <button class="ab-pill ${filterFamily === "Asteraceae" ? "active" : ""}" data-ab-family="Asteraceae">🥗 Asteraceae (Lettuce)</button>
          <button class="ab-pill ${filterFamily === "Solanaceae" ? "active" : ""}" data-ab-family="Solanaceae">🍅 Solanaceae (Tomato)</button>
          <button class="ab-pill ${filterFamily === "Poaceae" ? "active" : ""}" data-ab-family="Poaceae">🌾 Poaceae (Cereals)</button>
          <button class="ab-pill ${filterFamily === "Fabaceae" ? "active" : ""}" data-ab-family="Fabaceae">🫘 Fabaceae (Soybean)</button>
          <button class="ab-pill ${filterFamily === "Bryophytes" ? "active" : ""}" data-ab-family="Bryophytes">🌿 Bryophytes (Liverworts)</button>
        </div>

        <!-- Story Arc Filter -->
        <div class="ab-filter-row">
          <span class="ab-filter-label">Chronology:</span>
          <button class="ab-pill ${filterArc === "all" ? "active" : ""}" data-ab-arc="all">📚 All 68 Volumes</button>
          <button class="ab-pill ${filterArc === "1-15" ? "active" : ""}" data-ab-arc="1-15">Arc I: Foundations (Vols 01–15)</button>
          <button class="ab-pill ${filterArc === "16-35" ? "active" : ""}" data-ab-arc="16-35">Arc II: Deep Space Ag &amp; Regolith (Vols 16–35)</button>
          <button class="ab-pill ${filterArc === "36-50" ? "active" : ""}" data-ab-arc="36-50">Arc III: Multi-Omics &amp; Epigenetics (Vols 36–50)</button>
          <button class="ab-pill ${filterArc === "51-68" ? "active" : ""}" data-ab-arc="51-68">Arc IV: Frontier &amp; Climax (Vols 51–68)</button>
        </div>
      </div>

      ${
        filtered.length
          ? `<div class="ab-covers-grid">${cardsHtml}</div>`
          : `<div class="ab-empty-state"><h3>No manga volumes match that filter query</h3><p>Try searching for a different gene, accession, or reset filters above.</p></div>`
      }
    `;

    // Wire Showcase Events
    const searchEl = root.querySelector("#ab-search-input");
    if (searchEl) {
      searchEl.addEventListener("input", (e) => {
        searchQuery = (e.target.value || "").trim();
        render();
      });
    }

    root.querySelector("#ab-reset-filters-btn")?.addEventListener("click", () => {
      filterWorld = "all";
      filterFamily = "all";
      filterArc = "all";
      searchQuery = "";
      render();
    });

    root.querySelectorAll("[data-ab-world]").forEach((b) =>
      b.addEventListener("click", () => {
        filterWorld = b.getAttribute("data-ab-world");
        render();
      })
    );
    root.querySelectorAll("[data-ab-family]").forEach((b) =>
      b.addEventListener("click", () => {
        filterFamily = b.getAttribute("data-ab-family");
        render();
      })
    );
    root.querySelectorAll("[data-ab-arc]").forEach((b) =>
      b.addEventListener("click", () => {
        filterArc = b.getAttribute("data-ab-arc");
        render();
      })
    );

    root.querySelectorAll("[data-open-volume]").forEach((card) =>
      card.addEventListener("click", () => {
        openVolume(Number(card.getAttribute("data-open-volume")), 1);
      })
    );

    root.querySelectorAll("[data-open-script-btn]").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const vNum = Number(btn.getAttribute("data-open-script-btn"));
        openVolume(vNum, 1);
        setTimeout(() => openScriptDialog(), 60);
      })
    );
  }

  function renderPageArticle(volume, page) {
    const capText = page.caption || "Orbital transcriptomic recording in progress.";
    const bubblesHtml = (page.dialogue || [])
      .map((d, i) => {
        const speaker = i === 0 ? "Dr. Richard Barker" : (i === 1 ? "Mission Specialist" : "GeneLab Bioinformatician");
        return `
          <div class="ab-speech-balloon">
            <span class="ab-speaker-pill">${esc(speaker)}</span>
            <p class="ab-speech-text">“${esc(d)}”</p>
          </div>
        `;
      })
      .join("");

    return `
      <article class="ab-page-article">
        <div class="ab-page-topbar">
          <span><span class="ab-page-act-tag">${esc(page.act || "Act I")}</span> · Page ${esc(page.page_label)} of ${volume.pages.length}: ${esc(volume.title)}</span>
          <span class="ab-page-acc-badge">NASA OSDR: ${esc(volume.accession)}</span>
        </div>

        <div class="ab-spread-canvas">
          ${renderSpreadVisual(volume, page)}
          <div class="ab-lettering-layer">
            <div class="ab-top-lettering-row">
              <div class="ab-caption-box">${esc(capText)}</div>
              ${page.sfx ? `<div class="ab-sfx-stamp">${esc(page.sfx)}</div>` : ""}
            </div>
            ${bubblesHtml ? `<div class="ab-bubbles-row">${bubblesHtml}</div>` : ""}
          </div>
        </div>

        <div class="ab-data-hud-bar">
          <div>
            <p class="ab-hud-headline">🔬 NASA OSDR Space Biology Telemetry · ${esc(volume.accession)}</p>
            <div class="ab-hud-detail-row">
              <span class="ab-hud-pill">🌱 <strong>Organism:</strong> ${esc(volume.organism.slice(0, 60))}</span>
              <span class="ab-hud-pill">🛰️ <strong>Hardware:</strong> ${esc(volume.hardware.slice(0, 40))}</span>
              <span class="ab-hud-pill">📊 <strong>Setting:</strong> ${esc(volume.world)}</span>
            </div>
            <p class="ab-hud-desc">${esc(page.summary || "Ground vs Spaceflight flight validation with multi-sample replicates.")}</p>
          </div>
          <div class="ab-hud-actions">
            <a class="btn-ab-hud-link" href="${esc(volume.osdr_url)}" target="_blank" rel="noopener">🚀 Open NASA OSDR Study ↗</a>
          </div>
        </div>

        <div class="ab-director-strip">
          <strong>🎬 Page Panels &amp; Cinematography:</strong> ${page.panels_count || 4} Panels · ${esc((page.panels && page.panels[0] && page.panels[0].description) || page.summary || "Action dynamic shot")}
        </div>
      </article>
    `;
  }

  function renderDebriefTables(tables) {
    if (!tables || !tables.length) return "";
    return tables
      .map(
        (t) => `
        <div class="ab-debrief-table-wrap">
          <table class="ab-debrief-table">
            <thead>
              <tr>
                ${t.headers.map((h) => `<th>${esc(h)}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${t.rows
                .map(
                  (row) => `
                <tr>
                  ${row.map((cell) => `<td>${esc(cell)}</td>`).join("")}
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      `
      )
      .join("");
  }

  function renderVolumeReader(root, volume) {
    const pagesToShow =
      readerLayout === "scroll"
        ? volume.pages
        : [volume.pages[Math.max(0, Math.min(volume.pages.length - 1, activePageNum - 1))]];

    const stateClasses = [
      cleanArtMode ? "ab-clean-art" : "",
      !showLettering ? "ab-hide-lettering" : "",
      !showDataHud ? "ab-hide-hud" : ""
    ]
      .filter(Boolean)
      .join(" ");

    const volumeOptionsHtml = (AB_DATA.volumes || [])
      .map((v) => `<option value="${v.volume}" ${v.volume === volume.volume ? "selected" : ""}>Vol ${String(v.volume).padStart(2, "0")}: ${esc(v.accession)} — ${esc(v.title.slice(0, 45))}</option>`)
      .join("");

    root.innerHTML = `
      <div class="ab-reader-shell ${stateClasses}">
        <!-- Sticky Reader Toolbar -->
        <div class="ab-reader-toolbar">
          <div class="ab-toolbar-group">
            <button class="ab-tool-btn" type="button" id="btn-ab-back">← All 68 Volumes</button>
            <button class="ab-tool-btn" type="button" id="btn-ab-prev-vol">◀ Prev Vol</button>
            <select id="ab-volume-select" class="ab-vol-dropdown" aria-label="Select Volume">
              ${volumeOptionsHtml}
            </select>
            <button class="ab-tool-btn" type="button" id="btn-ab-next-vol">Next Vol ▶</button>
          </div>

          <div class="ab-toolbar-group">
            <button class="ab-tool-btn ${readerLayout === "cinema" ? "active" : ""}" type="button" data-ab-layout="cinema">🎬 Cinema Mode</button>
            <button class="ab-tool-btn ${readerLayout === "scroll" ? "active" : ""}" type="button" data-ab-layout="scroll">📜 Webtoon Scroll</button>
            <button class="ab-tool-btn ${showLettering && !cleanArtMode ? "active" : ""}" type="button" id="btn-ab-lettering">💬 Manga Dialogue</button>
            <button class="ab-tool-btn ${showDataHud && !cleanArtMode ? "active" : ""}" type="button" id="btn-ab-hud">🔬 OSDR Data HUD</button>
            <button class="ab-tool-btn ${cleanArtMode ? "active" : ""}" type="button" id="btn-ab-clean">🎨 Clean Screentone Art</button>
            <button class="ab-tool-btn" type="button" id="btn-ab-script">📜 32-Page Script &amp; Cast</button>
            <button class="ab-tool-btn" type="button" id="btn-ab-png" title="Download active page as a 1400×960 HD PNG manga plate">📸 HD PNG</button>
            <button class="ab-tool-btn" type="button" id="btn-ab-pdf" title="Open printable Manga Booklet PDF (Cover + Spreads + Debrief)">🖨️ Print / PDF</button>
            <a class="ab-tool-btn" href="${esc(volume.osdr_url)}" target="_blank" rel="noopener">🚀 NASA OSDR ↗</a>
            <button class="ab-tool-btn" type="button" id="btn-ab-share" title="Copy direct link to this volume and page">🔗 Share Link</button>
          </div>
        </div>

        <!-- Volume Masthead Card -->
        <header class="ab-reader-header">
          <div class="ab-reader-mini-cover">${renderCoverVisual(volume)}</div>
          <div class="ab-reader-header-meta">
            <div class="ab-meta-chips">
              <span class="ab-chip ab-chip-primary">VOLUME ${String(volume.volume).padStart(2, "0")} OF 68</span>
              <a class="ab-chip ab-chip-link" href="${esc(volume.osdr_url)}" target="_blank" rel="noopener">🛰️ ${esc(volume.accession)}</a>
              <span class="ab-chip">🌱 ${esc(volume.plant_family)}</span>
              <span class="ab-chip">🌌 ${esc(volume.world)}</span>
              <span class="ab-chip">🔬 ${esc(volume.hardware)}</span>
            </div>
            <h2>${esc(volume.title)}</h2>
            <p class="ab-reader-organism"><strong>Target Organism:</strong> ${esc(volume.organism)}</p>
            <p class="ab-reader-pub"><strong>NASA Reference Publication:</strong> ${esc(volume.publication)}</p>
          </div>
        </header>

        ${
          readerLayout === "cinema"
            ? `
          <nav class="ab-filmstrip-nav" aria-label="Manga Page Navigation">
            <button class="ab-tool-btn" type="button" id="btn-ab-prev-page" ${activePageNum <= 1 ? "disabled" : ""}>← Prev Page</button>
            <div class="ab-filmstrip-thumbs">
              ${volume.pages
                .map(
                  (p, i) =>
                    `<button class="ab-thumb-btn ${i + 1 === activePageNum ? "active" : ""}" type="button" data-ab-page="${i + 1}">P${esc(p.page_label)} · ${esc((p.act || "Act").split("—")[0].trim())}</button>`
                )
                .join("")}
            </div>
            <button class="ab-tool-btn" type="button" id="btn-ab-next-page" ${activePageNum >= volume.pages.length ? "disabled" : ""}>Next Page →</button>
          </nav>
        `
            : ""
        }

        <!-- Pages Stream -->
        <div class="ab-pages-stream">
          ${pagesToShow.map((p) => renderPageArticle(volume, p)).join("")}
        </div>

        ${
          readerLayout === "cinema"
            ? `
          <div class="ab-filmstrip-nav">
            <button class="ab-tool-btn" type="button" id="btn-ab-prev-page-btm" ${activePageNum <= 1 ? "disabled" : ""}>← Previous Page</button>
            <span style="font-weight:800; font-size:0.86rem;">Page ${activePageNum} of ${volume.pages.length} · Tip: Use ← / → arrow keys or switch to 📜 Webtoon Scroll</span>
            <button class="ab-tool-btn" type="button" id="btn-ab-next-page-btm" ${activePageNum >= volume.pages.length ? "disabled" : ""}>Next Page →</button>
          </div>
        `
            : ""
        }

        <!-- Mission Debrief & Scientific Findings Section -->
        <section class="ab-debrief-section">
          <div class="ab-debrief-head">
            <h3 style="margin:0 0 8px;">🌟 Mission Debrief &amp; Differential Expression Ledger · Volume ${String(volume.volume).padStart(2, "0")} (${esc(volume.accession)})</h3>
            <p style="margin:0; font-size:0.92rem; color:var(--fg-muted);">
              Authentic NASA Open Science Data Repository transcriptomic, metabolomic, and physiological findings:
            </p>
          </div>

          ${renderDebriefTables(volume.debrief_tables)}

          <div class="ab-takehome-banner">
            <div class="ab-takehome-badge">✨ SPACE BIOLOGY TAKEAWAY</div>
            <p style="margin:10px 0 0; font-size:0.95rem; line-height:1.6;">
              <strong>Publication:</strong> ${esc(volume.publication)}<br>
              <strong>Open Science Study Accession:</strong> <a href="${esc(volume.osdr_url)}" target="_blank" rel="noopener">${esc(volume.accession)} on NASA OSDR ↗</a>
            </p>
          </div>
        </section>

        <!-- Native <dialog> 32-Page Master Script & Dramatis Personae Modal -->
        <dialog id="ab-script-dialog" class="ab-script-dialog" aria-labelledby="ab-script-dialog-title">
          <div class="ab-dialog-head">
            <h3 id="ab-script-dialog-title">🎬 32-Page Master Script &amp; Dramatis Personae — Vol. ${String(volume.volume).padStart(2, "0")}: ${esc(volume.title)}</h3>
            <button class="ab-tool-btn" type="button" id="btn-ab-close-dialog">✕ Close</button>
          </div>
          <div class="ab-dialog-body">
            <div class="ab-script-meta-box">
              <p><strong>NASA OSDR Study:</strong> <a href="${esc(volume.osdr_url)}" target="_blank" rel="noopener">${esc(volume.accession)} ↗</a></p>
              <p><strong>Organism:</strong> ${esc(volume.organism)}</p>
              <p><strong>Hardware / Setting:</strong> ${esc(volume.hardware)} (${esc(volume.world)})</p>
              <p><strong>Publication Reference:</strong> ${esc(volume.publication)}</p>
            </div>

            ${
              volume.dramatis_personae
                ? `
              <div class="ab-dramatis-section">
                <h4>👥 Dramatis Personae (Grounded in Study Data)</h4>
                <div class="ab-preformatted-markdown">${formatMarkdown(volume.dramatis_personae)}</div>
              </div>
            `
                : ""
            }

            <div class="ab-script-content-section">
              <h4>📜 Complete 32-Page Chapter Script</h4>
              <div class="ab-preformatted-markdown">${formatMarkdown(volume.script_markdown || "Full script in compilation archive.")}</div>
            </div>
          </div>
        </dialog>
      </div>
    `;

    // Wire Reader Events
    document.getElementById("btn-ab-back")?.addEventListener("click", () => {
      activeVolNum = null;
      syncHash();
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.getElementById("btn-ab-prev-vol")?.addEventListener("click", () => stepVolume(-1));
    document.getElementById("btn-ab-next-vol")?.addEventListener("click", () => stepVolume(1));

    document.getElementById("ab-volume-select")?.addEventListener("change", (e) => {
      const vNum = Number(e.target.value);
      if (vNum) openVolume(vNum, 1);
    });

    root.querySelectorAll("[data-ab-layout]").forEach((b) =>
      b.addEventListener("click", () => {
        readerLayout = b.getAttribute("data-ab-layout");
        render();
      })
    );

    document.getElementById("btn-ab-lettering")?.addEventListener("click", () => {
      cleanArtMode = false;
      showLettering = !showLettering;
      render();
    });

    document.getElementById("btn-ab-hud")?.addEventListener("click", () => {
      cleanArtMode = false;
      showDataHud = !showDataHud;
      render();
    });

    document.getElementById("btn-ab-clean")?.addEventListener("click", () => {
      cleanArtMode = !cleanArtMode;
      render();
    });

    const dlg = document.getElementById("ab-script-dialog");
    document.getElementById("btn-ab-script")?.addEventListener("click", () => {
      openScriptDialog();
    });
    document.getElementById("btn-ab-close-dialog")?.addEventListener("click", () => dlg?.close());
    dlg?.addEventListener("click", (e) => {
      if (e.target === dlg) dlg.close();
    });

    document.getElementById("btn-ab-png")?.addEventListener("click", async (e) => {
      const btn = e.currentTarget;
      const pageObj = volume.pages[Math.max(0, Math.min(volume.pages.length - 1, activePageNum - 1))];
      if (!window.AstroBotanicaExport || !pageObj) return;
      const orig = btn.textContent;
      btn.textContent = "⏳ Rendering...";
      btn.disabled = true;
      try {
        await window.AstroBotanicaExport.exportPagePNG(volume, pageObj, {
          showLettering: showLettering && !cleanArtMode,
          showDataHud: showDataHud && !cleanArtMode
        });
        btn.textContent = "✅ PNG Saved!";
      } catch (err) {
        console.error("Manga PNG export error:", err);
        btn.textContent = "⚠️ Export Error";
      } finally {
        btn.disabled = false;
        setTimeout(() => {
          btn.textContent = orig;
        }, 1800);
      }
    });

    document.getElementById("btn-ab-pdf")?.addEventListener("click", () => {
      if (window.AstroBotanicaExport) {
        window.AstroBotanicaExport.printMangaPDF(volume);
      }
    });

    document.getElementById("btn-ab-share")?.addEventListener("click", async (e) => {
      const btn = e.currentTarget;
      const orig = btn.textContent;
      syncHash();
      const shareUrl = window.location.href;
      try {
        await navigator.clipboard.writeText(shareUrl);
        btn.textContent = "✅ Link Copied!";
      } catch (_) {
        btn.textContent = "🔗 Hash Ready!";
      }
      setTimeout(() => {
        btn.textContent = orig;
      }, 1800);
    });

    const goPage = (pNum) => {
      activePageNum = Math.max(1, Math.min(volume.pages.length, pNum));
      syncHash();
      render();
      window.scrollTo({ top: 140, behavior: "smooth" });
    };

    document.getElementById("btn-ab-prev-page")?.addEventListener("click", () => goPage(activePageNum - 1));
    document.getElementById("btn-ab-next-page")?.addEventListener("click", () => goPage(activePageNum + 1));
    document.getElementById("btn-ab-prev-page-btm")?.addEventListener("click", () => goPage(activePageNum - 1));
    document.getElementById("btn-ab-next-page-btm")?.addEventListener("click", () => goPage(activePageNum + 1));

    root.querySelectorAll("[data-ab-page]").forEach((b) =>
      b.addEventListener("click", () => goPage(Number(b.getAttribute("data-ab-page"))))
    );
  }

  function openScriptDialog() {
    const dlg = document.getElementById("ab-script-dialog");
    if (dlg && typeof dlg.showModal === "function") {
      dlg.showModal();
    }
  }

  function formatMarkdown(text) {
    if (!text) return "";
    return esc(text)
      .replace(/### (.*?)\n/g, "<h5>$1</h5>")
      .replace(/## (.*?)\n/g, "<h4>$1</h4>")
      .replace(/# (.*?)\n/g, "<h3>$1</h3>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`(.*?)`/g, "<code>$1</code>")
      .replace(/\n\n/g, "<br><br>")
      .replace(/\n- /g, "<br>• ");
  }

  function stepVolume(delta) {
    if (!AB_DATA || !AB_DATA.volumes || !activeVolNum) return;
    const total = AB_DATA.volumes.length;
    let nextNum = activeVolNum + delta;
    if (nextNum < 1) nextNum = total;
    if (nextNum > total) nextNum = 1;
    openVolume(nextNum, 1);
  }

  function openVolume(volNum, pageNum) {
    if (!AB_DATA || !AB_DATA.volumes) return;
    const found = AB_DATA.volumes.find((v) => v.volume === volNum);
    if (!found) return;
    activeVolNum = found.volume;
    activePageNum = pageNum || 1;
    if (window.CoSEReader && typeof window.CoSEReader.switchTab === "function") {
      window.CoSEReader.switchTab("astro-botanica");
    }
    syncHash();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function syncHash() {
    const params = new URLSearchParams();
    params.set("tab", "astro-botanica");
    if (activeVolNum) {
      params.set("vol", String(activeVolNum));
      params.set("page", String(activePageNum));
    }
    history.replaceState(null, "", "#" + params.toString());
  }

  function parseInitialHash() {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash || !AB_DATA) return;
    const params = new URLSearchParams(hash);
    const vParam = Number(params.get("vol") || params.get("volume"));
    const pg = Number(params.get("page") || "1");
    if (vParam && AB_DATA.volumes.some((v) => v.volume === vParam)) {
      activeVolNum = vParam;
      activePageNum = Math.max(1, Math.min(32, pg || 1));
    }
  }

  function render() {
    const root = document.getElementById("astro-botanica-stage");
    if (!root || !AB_DATA) return;
    if (!activeVolNum) {
      renderShowcase(root);
    } else {
      const volume = AB_DATA.volumes.find((v) => v.volume === activeVolNum) || AB_DATA.volumes[0];
      renderVolumeReader(root, volume);
    }
  }

  function init() {
    AB_DATA = window.ASTRO_BOTANICA_DATA;
    if (!AB_DATA) {
      console.warn("ASTRO_BOTANICA_DATA not yet loaded.");
      return;
    }

    parseInitialHash();
    render();

    window.addEventListener("keydown", (e) => {
      const sec = document.getElementById("view-astro-botanica");
      if (!sec || !sec.classList.contains("active") || !activeVolNum || readerLayout !== "cinema") return;
      if (e.target && ["INPUT", "SELECT", "TEXTAREA"].includes(e.target.tagName)) return;
      const volume = AB_DATA.volumes.find((v) => v.volume === activeVolNum);
      if (!volume) return;
      if (e.key === "ArrowRight" && activePageNum < volume.pages.length) {
        activePageNum += 1;
        syncHash();
        render();
      } else if (e.key === "ArrowLeft" && activePageNum > 1) {
        activePageNum -= 1;
        syncHash();
        render();
      }
    });
  }

  window.AstroBotanicaReader = {
    init,
    render,
    openVolume,
    showShowcase: () => {
      activeVolNum = null;
      render();
    }
  };

  document.addEventListener("DOMContentLoaded", init);
})();
