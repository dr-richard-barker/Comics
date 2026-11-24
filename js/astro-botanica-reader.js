/**
 * ASTRO-BOTANICA: ZERO-G ROOTS — Flagship 90-Volume Seinen Manga Reader Controller (v2)
 * Powers the 90-Volume Showcase Grid, NASA OSDR World/Family/Arc/Illustrated Filters,
 * K-5 / 6-8 / 9-12 Adaptive Educational Briefings, Interactive Molecular Cast Cards,
 * Disjoint 4-Panel Manga Spreads (Zero Text Overlap), Cinema & Webtoon Scroll Modes,
 * and Native <dialog> 32-Page Master Script & Dramatis Personae Modal.
 */
(function () {
  "use strict";

  let AB_DATA = window.ASTRO_BOTANICA_DATA || null;
  let activeVolNum = null; // null = Showcase Grid; number 1..90 = Open Volume
  let activePageNum = 1;
  let readerLayout = "cinema"; // 'cinema' | 'scroll'
  let showLettering = true;
  let showDataHud = true;
  let cleanArtMode = false;

  let filterWorld = "all";
  let filterFamily = "all";
  let filterArc = "all";
  let filterIllustratedOnly = false;
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
    if (volume.cover && volume.cover.has_raster) {
      return `<img src="${esc(volume.cover.path)}" alt="${esc(volume.title)} cover illustration" class="ab-cover-img" width="${volume.cover.width || 900}" height="${volume.cover.height || 1200}" loading="lazy" decoding="async">`;
    }
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

  function shortActLabel(actStr, actNum) {
    if (actNum === 3 || /act\s+iii/i.test(actStr || "")) return "Act III";
    if (actNum === 2 || /act\s+ii/i.test(actStr || "")) return "Act II";
    return "Act I";
  }

  function getFilteredVolumes() {
    if (!AB_DATA || !AB_DATA.volumes) return [];
    return AB_DATA.volumes.filter((v) => {
      if (filterIllustratedOnly && !(v.cover && v.cover.has_raster)) return false;
      if (filterWorld !== "all" && v.world !== filterWorld) return false;
      if (filterFamily !== "all" && !v.plant_family.toLowerCase().includes(filterFamily.toLowerCase())) return false;
      if (filterArc !== "all") {
        if (filterArc === "1-15" && (v.volume < 1 || v.volume > 15)) return false;
        if (filterArc === "16-35" && (v.volume < 16 || v.volume > 35)) return false;
        if (filterArc === "36-50" && (v.volume < 36 || v.volume > 50)) return false;
        if (filterArc === "51-68" && (v.volume < 51 || v.volume > 68)) return false;
        if (filterArc === "69-90" && (v.volume < 69 || v.volume > 90)) return false;
      }
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const castText = (v.molecular_cast || []).map((c) => `${c.symbol} ${c.name} ${c.role}`).join(" ");
        const haystack = [
          v.title,
          v.accession,
          v.organism,
          v.plant_family,
          v.study_domain,
          v.hardware,
          v.hardware_short,
          v.publication,
          castText,
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
    const rasterCount = (AB_DATA.volumes || []).filter((v) => v.cover && v.cover.has_raster).length;
    const worldEmoji = {
      ISS: "🛰️",
      Moon: "🌙",
      Mars: "🪐",
      "Polar Analog": "❄️",
      Suborbital: "🚀",
      "Ground Analog": "🔬"
    };

    const cardsHtml = filtered
      .map((v) => {
        const wEmoji = worldEmoji[v.world] || "🌌";
        const castBadges = (v.molecular_cast || [])
          .slice(0, 3)
          .map((c) => {
            const dotCls = c.direction === "up" ? "up" : c.direction === "down" ? "down" : "neutral";
            return `<span class="ab-gene-pill ab-gene-${dotCls}" title="${esc(c.name)}: ${esc(c.description)}">${esc(c.symbol)}</span>`;
          })
          .join("");

        return `
          <article class="ab-cover-card ${v.cover && v.cover.has_raster ? "ab-card-featured" : ""}" data-open-volume="${v.volume}">
            <div class="ab-cover-art-wrap">
              ${renderCoverVisual(v)}
              <div class="ab-cover-masthead">
                <div class="ab-corner-box">
                  <span class="ab-corner-vol">VOL</span>
                  <span class="ab-corner-num">${String(v.volume).padStart(2, "0")}</span>
                </div>
                <div class="ab-cover-title-stack">
                  <span class="ab-cover-accession">${esc(v.accession)} · ${esc(v.study_domain || "Space Botany")}</span>
                  <h3 class="ab-cover-title">${esc(v.title)}</h3>
                </div>
              </div>
              <div class="ab-cover-bottom-bar">
                <span class="ab-style-ribbon">🌱 ${esc(v.plant_family.split("(")[0].trim())}</span>
                ${
                  v.cover && v.cover.has_raster
                    ? `<span class="ab-art-badge ab-badge-illustrated">✨ TANKŌBON COVER</span>`
                    : `<span class="ab-art-badge">📐 VECTOR STUDIO</span>`
                }
              </div>
            </div>
            <div class="ab-cover-body">
              <div class="ab-meta-chips">
                <span class="ab-chip">${wEmoji} ${esc(v.world)}</span>
                <span class="ab-chip">🔬 ${esc(v.hardware_short || v.hardware.slice(0, 32))}</span>
                <a class="ab-chip ab-chip-link" href="${esc(v.osdr_url)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">🔗 OSDR ↗</a>
              </div>
              ${castBadges ? `<div class="ab-card-genes"><span class="ab-card-genes-label">Key Cast:</span> ${castBadges}</div>` : ""}
              <p class="ab-hardware-note"><strong>Organism:</strong> ${esc(v.organism_short || v.organism.slice(0, 56))}</p>
              <p class="ab-pub-preview">${esc((v.edu && v.edu.k5_mystery) || v.publication.slice(0, 120))}</p>
              <div class="ab-cover-cta">
                <button class="btn-ab-launch" type="button" data-open-volume-btn="${v.volume}">📖 Read Manga Spreads →</button>
                <button class="btn-ab-script-preview" type="button" data-open-script-btn="${v.volume}" title="View Dramatis Personae &amp; 32-Page Script">📜 Script</button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    root.innerHTML = `
      <section class="ab-showcase-banner">
        <div class="ab-banner-content">
          <p class="ab-banner-eyebrow">🌱 Flagship Seinen Manga Series · 100% NASA Open Science Data Repository (OSDR) Plant Biology</p>
          <h2 class="ab-banner-title">ASTRO-BOTANICA: ZERO-G ROOTS <span class="ab-jp-sub">(宇宙植物学 · 根の無重力)</span></h2>
          <p class="ab-banner-lede">
            Synthesizing all <strong>90 verified NASA OSDR space plant biology missions</strong> (<em>OSD-7</em> through <em>OSD-971</em> + 22 Special Chronicles) into <strong>2,880 pages of interactive seinen manga</strong>.
            Every volume features live differential gene expression telemetry, clickable molecular character rosters, K–12 / Researcher reading levels, and direct links to raw NASA OSDR datasets.
          </p>
          <div class="ab-banner-stats">
            <span class="ab-stat-pill ab-stat-highlight">🗾 90 Seinen Manga Volumes</span>
            <span class="ab-stat-pill">🔬 100% NASA OSDR Plant Coverage</span>
            <span class="ab-stat-pill">✨ ${rasterCount} Illustrated Tankōbon Covers + ${90 - rasterCount} Vector Studio</span>
            <span class="ab-stat-pill">🧬 2,880 Script Pages &amp; Live DEG Telemetry</span>
            <span class="ab-stat-pill">🎓 K–5 · 6–8 · 9–12 Adaptive Briefings</span>
          </div>
        </div>
      </section>

      <div class="ab-filter-deck" aria-label="Filter ASTRO-BOTANICA Volumes">
        <!-- Search Row -->
        <div class="ab-search-row">
          <div class="ab-search-box">
            <span class="ab-search-icon">🔍</span>
            <input id="ab-search-input" type="search" placeholder="Search 90 volumes by accession (OSD-7, OSD-416), gene (HY5, SOG1, MET1, EIN2), hardware (Veggie, APH), or plant..." value="${esc(searchQuery)}" aria-label="Search ASTRO-BOTANICA manga volumes">
          </div>
          <button id="ab-illustrated-toggle" class="ab-tool-btn ${filterIllustratedOnly ? "active" : ""}" type="button">✨ Illustrated Covers (${rasterCount})</button>
          <button id="ab-reset-filters-btn" class="ab-tool-btn" type="button">↺ Reset</button>
        </div>

        <!-- World / Destination Filter -->
        <div class="ab-filter-row">
          <span class="ab-filter-label">Environment:</span>
          <button class="ab-pill ${filterWorld === "all" ? "active" : ""}" data-ab-world="all">🌌 All Worlds (90)</button>
          <button class="ab-pill ${filterWorld === "ISS" ? "active" : ""}" data-ab-world="ISS">🛰️ ISS / LEO</button>
          <button class="ab-pill ${filterWorld === "Moon" ? "active" : ""}" data-ab-world="Moon">🌙 Moon (Apollo)</button>
          <button class="ab-pill ${filterWorld === "Mars" ? "active" : ""}" data-ab-world="Mars">🪐 Mars Simulants</button>
          <button class="ab-pill ${filterWorld === "Polar Analog" ? "active" : ""}" data-ab-world="Polar Analog">❄️ EDEN ISS Polar</button>
          <button class="ab-pill ${filterWorld === "Suborbital" ? "active" : ""}" data-ab-world="Suborbital">🚀 Suborbital</button>
          <button class="ab-pill ${filterWorld === "Ground Analog" ? "active" : ""}" data-ab-world="Ground Analog">🔬 Ground &amp; Radiation</button>
        </div>

        <!-- Plant Family Filter -->
        <div class="ab-filter-row">
          <span class="ab-filter-label">Plant Family:</span>
          <button class="ab-pill ${filterFamily === "all" ? "active" : ""}" data-ab-family="all">🌿 All Taxa</button>
          <button class="ab-pill ${filterFamily === "Brassicaceae" ? "active" : ""}" data-ab-family="Brassicaceae">🥬 Brassicaceae</button>
          <button class="ab-pill ${filterFamily === "Asteraceae" ? "active" : ""}" data-ab-family="Asteraceae">🥗 Asteraceae (Lettuce)</button>
          <button class="ab-pill ${filterFamily === "Solanaceae" ? "active" : ""}" data-ab-family="Solanaceae">🍅 Solanaceae</button>
          <button class="ab-pill ${filterFamily === "Poaceae" ? "active" : ""}" data-ab-family="Poaceae">🌾 Poaceae (Cereals)</button>
          <button class="ab-pill ${filterFamily === "Fabaceae" ? "active" : ""}" data-ab-family="Fabaceae">🫘 Fabaceae</button>
          <button class="ab-pill ${filterFamily === "Bryophytes" ? "active" : ""}" data-ab-family="Bryophytes">🌿 Bryophytes</button>
        </div>

        <!-- Story Arc Filter -->
        <div class="ab-filter-row">
          <span class="ab-filter-label">Chronology:</span>
          <button class="ab-pill ${filterArc === "all" ? "active" : ""}" data-ab-arc="all">📚 All 90 Volumes</button>
          <button class="ab-pill ${filterArc === "1-15" ? "active" : ""}" data-ab-arc="1-15">Arc I: Foundations (01–15)</button>
          <button class="ab-pill ${filterArc === "16-35" ? "active" : ""}" data-ab-arc="16-35">Arc II: Deep Space Ag (16–35)</button>
          <button class="ab-pill ${filterArc === "36-50" ? "active" : ""}" data-ab-arc="36-50">Arc III: Multi-Omics (36–50)</button>
          <button class="ab-pill ${filterArc === "51-68" ? "active" : ""}" data-ab-arc="51-68">Arc IV: Frontier &amp; Climax (51–68)</button>
          <button class="ab-pill ${filterArc === "69-90" ? "active" : ""}" data-ab-arc="69-90">🌟 Special Chronicles (69–90)</button>
        </div>
      </div>

      <div class="ab-results-bar">
        <span>Showing <strong>${filtered.length}</strong> of <strong>${(AB_DATA.volumes || []).length}</strong> NASA OSDR Manga Volumes</span>
        <span class="ab-results-hint">Tip: Click any volume card to launch interactive spreads, molecular cast &amp; telemetry</span>
      </div>

      ${
        filtered.length
          ? `<div class="ab-covers-grid">${cardsHtml}</div>`
          : `<div class="ab-empty-state"><h3>No manga volumes match that filter query</h3><p>Try searching for a different gene (e.g. HY5, SOG1, MET1), accession, or click Reset above.</p></div>`
      }
    `;

    // Wire Showcase Events
    const searchEl = root.querySelector("#ab-search-input");
    if (searchEl) {
      searchEl.addEventListener("input", (e) => {
        searchQuery = (e.target.value || "").trim();
        const cursorPos = e.target.selectionStart;
        render();
        const nextInput = document.getElementById("ab-search-input");
        if (nextInput) {
          nextInput.focus();
          if (typeof cursorPos === "number") nextInput.setSelectionRange(cursorPos, cursorPos);
        }
      });
    }

    root.querySelector("#ab-illustrated-toggle")?.addEventListener("click", () => {
      filterIllustratedOnly = !filterIllustratedOnly;
      render();
    });

    root.querySelector("#ab-reset-filters-btn")?.addEventListener("click", () => {
      filterWorld = "all";
      filterFamily = "all";
      filterArc = "all";
      filterIllustratedOnly = false;
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

  function renderEduBriefingCard(volume) {
    const lvl = getLevel();
    const edu = volume.edu || {};
    if (lvl === "k5") {
      return `
        <section class="ab-edu-briefing ab-edu-k5" aria-label="K-5 Explorer Mission Briefing">
          <div class="ab-edu-badge">🌱 K–5 SPACE EXPLORER GUIDE</div>
          <div class="ab-edu-grid">
            <div class="ab-edu-col">
              <h4>🔍 The Space Mystery</h4>
              <p>${esc(edu.k5_mystery || `How does ${volume.organism_short || "this plant"} grow in space?`)}</p>
            </div>
            <div class="ab-edu-col">
              <h4>💡 What NASA Scientists Discovered</h4>
              <p>${esc(edu.k5_discovery || "Plants reorganize their internal genes and roots to survive weightlessness and cosmic stress!")}</p>
            </div>
          </div>
        </section>
      `;
    }
    if (lvl === "hs") {
      return `
        <section class="ab-edu-briefing ab-edu-hs" aria-label="9-12 and Researcher Briefing">
          <div class="ab-edu-badge">🚀 9–12 + RESEARCHER MULTI-OMICS PROTOCOL</div>
          <div class="ab-edu-grid">
            <div class="ab-edu-col">
              <h4>🧬 Experimental Design &amp; Platform</h4>
              <p>${esc(edu.hs_methods || `${volume.organism} · ${volume.hardware}`)}</p>
            </div>
            <div class="ab-edu-col">
              <h4>📊 Primary Biological Pathway (${esc(volume.study_domain || "Spaceflight Biology")})</h4>
              <p>${esc(edu.ms_mechanism || volume.publication)}</p>
            </div>
          </div>
        </section>
      `;
    }
    return `
      <section class="ab-edu-briefing ab-edu-ms" aria-label="Middle School Investigator Briefing">
        <div class="ab-edu-badge">🔬 6–8 MISSION INVESTIGATOR BRIEFING</div>
        <div class="ab-edu-grid">
          <div class="ab-edu-col">
            <h4>🛰️ How the Experiment Worked</h4>
            <p>${esc(edu.ms_experiment || `NASA OSDR study ${volume.accession} tested ${volume.organism_short || "plants"} inside ${volume.hardware_short || "flight hardware"}.`)}</p>
          </div>
          <div class="ab-edu-col">
            <h4>⚡ Cause &amp; Cellular Mechanism</h4>
            <p>${esc(edu.ms_mechanism || "Comparing flight samples against terrestrial ground controls reveals how plant cells sense and adapt to space.")}</p>
          </div>
        </div>
      </section>
    `;
  }

  function renderMolecularCastStrip(volume) {
    const cast = volume.molecular_cast || [];
    if (!cast.length) return "";
    const cards = cast
      .slice(0, 6)
      .map((c) => {
        const dirLabel =
          c.direction === "up"
            ? "▲ Activated / Up"
            : c.direction === "down"
            ? "▼ Repressed / Sensitive"
            : c.direction === "dual"
            ? "◈ Dual / Remodeled"
            : "• Key Actor";
        return `
          <div class="ab-cast-card ab-cast-${c.direction || "neutral"}">
            <div class="ab-cast-head">
              <span class="ab-cast-symbol">${esc(c.symbol)}</span>
              <span class="ab-cast-dir">${dirLabel}</span>
            </div>
            <div class="ab-cast-role">${esc(c.role)}</div>
            <p class="ab-cast-desc">${esc(c.description)}</p>
          </div>
        `;
      })
      .join("");

    return `
      <section class="ab-cast-section" aria-label="Molecular Cast and Study Characters">
        <div class="ab-cast-section-head">
          <h3>🧬 Molecular Cast &amp; Study Characters <span class="ab-cast-count">(${cast.length} grounded in ${esc(volume.accession)})</span></h3>
          <span class="ab-cast-hint">Real genes, mutant lines &amp; researchers featured in this volume</span>
        </div>
        <div class="ab-cast-grid">${cards}</div>
      </section>
    `;
  }

  function renderPageArticle(volume, page) {
    const capText = page.caption || "Orbital transcriptomic recording in progress.";
    const rawDialogs = page.dialogue || [];
    const bubblesHtml = rawDialogs
      .slice(0, 2)
      .map((d, i) => {
        const isObj = d && typeof d === "object";
        const speaker = isObj ? d.speaker || "Mission Specialist" : i === 0 ? "Mission Scientist" : "GeneLab Analyst";
        const text = isObj ? d.text : String(d || "");
        return `
          <div class="ab-speech-balloon">
            <span class="ab-speaker-pill">${esc(speaker)}</span>
            <p class="ab-speech-text">“${esc(text)}”</p>
          </div>
        `;
      })
      .join("");

    const panelsHtml = (page.panels || []).length
      ? `
        <div class="ab-panels-breakdown">
          ${page.panels
            .map(
              (pan) => `
              <div class="ab-panel-beat">
                <span class="ab-panel-num">PANEL ${pan.panel_number}${pan.shot ? ` · ${esc(pan.shot)}` : ""}</span>
                <p>${esc(pan.description)}</p>
              </div>
            `
            )
            .join("")}
        </div>
      `
      : `<p class="ab-hud-desc">${esc(page.summary || "Ground vs Spaceflight validation with multi-sample biological replicates.")}</p>`;

    return `
      <article class="ab-page-article">
        <div class="ab-page-topbar">
          <div class="ab-page-title-group">
            <span class="ab-page-act-tag">${esc(shortActLabel(page.act, page.act_num))}</span>
            <span>Page ${esc(page.page_label)} of ${volume.pages.length}${page.page_title ? ` — ${esc(page.page_title)}` : ` · ${esc(page.act || volume.title)}`}</span>
          </div>
          <span class="ab-page-acc-badge">NASA OSDR: ${esc(volume.accession)}</span>
        </div>

        <div class="ab-spread-canvas">
          ${renderSpreadVisual(volume, page)}
          <div class="ab-lettering-layer">
            <div class="ab-top-lettering-row">
              <div class="ab-caption-box">${esc(capText)}</div>
              ${page.sfx ? `<div class="ab-sfx-stamp">${esc(page.sfx.split("(")[0].trim())}</div>` : ""}
            </div>
            ${bubblesHtml ? `<div class="ab-bubbles-row">${bubblesHtml}</div>` : ""}
          </div>
        </div>

        <div class="ab-data-hud-bar">
          <div class="ab-hud-main">
            <p class="ab-hud-headline">🔬 NASA OSDR Space Biology Telemetry · ${esc(volume.accession)} · ${esc(volume.study_domain || "Spaceflight Botany")}</p>
            <div class="ab-hud-detail-row">
              <span class="ab-hud-pill">🌱 <strong>Organism:</strong> ${esc(volume.organism_short || volume.organism)}</span>
              <span class="ab-hud-pill">🛰️ <strong>Hardware:</strong> ${esc(volume.hardware_short || volume.hardware)}</span>
              <span class="ab-hud-pill">🌌 <strong>Environment:</strong> ${esc(volume.world)}</span>
            </div>
            ${panelsHtml}
          </div>
          <div class="ab-hud-actions">
            <a class="btn-ab-hud-link" href="${esc(volume.osdr_url)}" target="_blank" rel="noopener">🚀 NASA OSDR Study ↗</a>
          </div>
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
    const safePageIdx = Math.max(0, Math.min(volume.pages.length - 1, activePageNum - 1));
    const pagesToShow = readerLayout === "scroll" ? volume.pages : [volume.pages[safePageIdx]];

    const stateClasses = [
      cleanArtMode ? "ab-clean-art" : "",
      !showLettering ? "ab-hide-lettering" : "",
      !showDataHud ? "ab-hide-hud" : ""
    ]
      .filter(Boolean)
      .join(" ");

    const volumeOptionsHtml = (AB_DATA.volumes || [])
      .map((v) => `<option value="${v.volume}" ${v.volume === volume.volume ? "selected" : ""}>Vol ${String(v.volume).padStart(2, "0")}: ${esc(v.accession)} — ${esc(v.title.slice(0, 42))}</option>`)
      .join("");

    root.innerHTML = `
      <div class="ab-reader-shell ${stateClasses}">
        <!-- Sleek Compact Reader Toolbar -->
        <div class="ab-reader-toolbar">
          <div class="ab-toolbar-group ab-toolbar-nav">
            <button class="ab-tool-btn" type="button" id="btn-ab-back">← All 90 Vols</button>
            <button class="ab-tool-btn" type="button" id="btn-ab-prev-vol" title="Previous Volume">◀</button>
            <select id="ab-volume-select" class="ab-vol-dropdown" aria-label="Select Volume">
              ${volumeOptionsHtml}
            </select>
            <button class="ab-tool-btn" type="button" id="btn-ab-next-vol" title="Next Volume">▶</button>
          </div>

          <div class="ab-toolbar-group ab-toolbar-actions">
            <button class="ab-tool-btn ${readerLayout === "cinema" ? "active" : ""}" type="button" data-ab-layout="cinema" title="Single Spread Cinema Mode">🎬 Cinema</button>
            <button class="ab-tool-btn ${readerLayout === "scroll" ? "active" : ""}" type="button" data-ab-layout="scroll" title="Continuous Webtoon Vertical Scroll">📜 Scroll</button>
            <button class="ab-tool-btn ${showLettering && !cleanArtMode ? "active" : ""}" type="button" id="btn-ab-lettering" title="Toggle Manga Dialogue &amp; Captions">💬 Dialogue</button>
            <button class="ab-tool-btn ${showDataHud && !cleanArtMode ? "active" : ""}" type="button" id="btn-ab-hud" title="Toggle OSDR Telemetry HUD">🔬 Telemetry</button>
            <button class="ab-tool-btn ${cleanArtMode ? "active" : ""}" type="button" id="btn-ab-clean" title="View Clean Art Only">🎨 Clean Art</button>
            <button class="ab-tool-btn" type="button" id="btn-ab-script" title="Open Full 32-Page Master Script &amp; Cast">📖 Script</button>
            <button class="ab-tool-btn" type="button" id="btn-ab-png" title="Download Active Page as 1400×960 HD PNG">📸 PNG</button>
            <button class="ab-tool-btn" type="button" id="btn-ab-pdf" title="Print Classroom Manga PDF Booklet">🖨️ PDF</button>
            <button class="ab-tool-btn" type="button" id="btn-ab-share" title="Copy Direct Deep Link">🔗 Share</button>
          </div>
        </div>

        <!-- Volume Masthead Card -->
        <header class="ab-reader-header">
          <div class="ab-reader-mini-cover">${renderCoverVisual(volume)}</div>
          <div class="ab-reader-header-meta">
            <div class="ab-meta-chips">
              <span class="ab-chip ab-chip-primary">VOLUME ${String(volume.volume).padStart(2, "0")} OF 90</span>
              <a class="ab-chip ab-chip-link" href="${esc(volume.osdr_url)}" target="_blank" rel="noopener">🛰️ ${esc(volume.accession)} ↗</a>
              <span class="ab-chip ab-chip-domain">🧬 ${esc(volume.study_domain || "Spaceflight Botany")}</span>
              <span class="ab-chip">🌱 ${esc(volume.plant_family.split("(")[0].trim())}</span>
              <span class="ab-chip">🌌 ${esc(volume.world)}</span>
              <span class="ab-chip">🔬 ${esc(volume.hardware_short || volume.hardware)}</span>
            </div>
            <h2>${esc(volume.title)}</h2>
            <p class="ab-reader-organism"><strong>Target Organism:</strong> ${esc(volume.organism)}</p>
            <p class="ab-reader-pub"><strong>NASA Reference Publication:</strong> ${esc(volume.publication)}</p>
          </div>
        </header>

        <!-- Adaptive K-5 / 6-8 / 9-12 Educational Mission Briefing -->
        ${renderEduBriefingCard(volume)}

        <!-- Filmstrip Page Navigation (Cinema Mode) -->
        ${
          readerLayout === "cinema"
            ? `
          <nav class="ab-filmstrip-nav" aria-label="Manga Page Navigation">
            <button class="ab-tool-btn" type="button" id="btn-ab-prev-page" ${activePageNum <= 1 ? "disabled" : ""}>← Prev</button>
            <div class="ab-filmstrip-thumbs">
              ${volume.pages
                .map(
                  (p, i) =>
                    `<button class="ab-thumb-btn ${i + 1 === activePageNum ? "active" : ""}" type="button" data-ab-page="${i + 1}" title="${esc(p.page_title || p.act || "")}">P${esc(p.page_label)} · ${esc(shortActLabel(p.act, p.act_num))}</button>`
                )
                .join("")}
            </div>
            <button class="ab-tool-btn" type="button" id="btn-ab-next-page" ${activePageNum >= volume.pages.length ? "disabled" : ""}>Next →</button>
          </nav>
        `
            : ""
        }

        <!-- Manga Spreads Stream -->
        <div class="ab-pages-stream">
          ${pagesToShow.map((p) => renderPageArticle(volume, p)).join("")}
        </div>

        ${
          readerLayout === "cinema"
            ? `
          <div class="ab-filmstrip-nav">
            <button class="ab-tool-btn" type="button" id="btn-ab-prev-page-btm" ${activePageNum <= 1 ? "disabled" : ""}>← Previous Page</button>
            <span class="ab-pager-hint">Page ${activePageNum} of ${volume.pages.length} · Use ← / → arrow keys or switch to 📜 Scroll</span>
            <button class="ab-tool-btn" type="button" id="btn-ab-next-page-btm" ${activePageNum >= volume.pages.length ? "disabled" : ""}>Next Page →</button>
          </div>
        `
            : ""
        }

        <!-- Interactive Molecular Cast & Study Characters -->
        ${renderMolecularCastStrip(volume)}

        <!-- Mission Debrief & Scientific Findings Section -->
        <section class="ab-debrief-section">
          <div class="ab-debrief-head">
            <h3 style="margin:0 0 6px;">🌟 Mission Debrief &amp; Differential Expression Ledger · Volume ${String(volume.volume).padStart(2, "0")} (${esc(volume.accession)})</h3>
            <p style="margin:0; font-size:0.9rem; color:var(--fg-muted);">
              Authentic NASA Open Science Data Repository transcriptomic, metabolomic, and physiological findings:
            </p>
          </div>

          ${renderDebriefTables(volume.debrief_tables)}

          <div class="ab-takehome-banner">
            <div class="ab-takehome-badge">✨ OPEN SCIENCE REFERENCE</div>
            <p style="margin:10px 0 0; font-size:0.93rem; line-height:1.6;">
              <strong>Publication:</strong> ${esc(volume.publication)}<br>
              <strong>Hardware &amp; Conditions:</strong> ${esc(volume.hardware)}<br>
              <strong>Open Science Dataset:</strong> <a href="${esc(volume.osdr_url)}" target="_blank" rel="noopener">${esc(volume.accession)} on NASA OSDR ↗</a>
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
      btn.textContent = "⏳...";
      btn.disabled = true;
      try {
        await window.AstroBotanicaExport.exportPagePNG(volume, pageObj, {
          showLettering: showLettering && !cleanArtMode,
          showDataHud: showDataHud && !cleanArtMode
        });
        btn.textContent = "✅ Saved!";
      } catch (err) {
        console.error("Manga PNG export error:", err);
        btn.textContent = "⚠️ Error";
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
        btn.textContent = "✅ Copied!";
      } catch (_) {
        btn.textContent = "🔗 Ready!";
      }
      setTimeout(() => {
        btn.textContent = orig;
      }, 1800);
    });

    const goPage = (pNum) => {
      activePageNum = Math.max(1, Math.min(volume.pages.length, pNum));
      syncHash();
      render();
      window.scrollTo({ top: 180, behavior: "smooth" });
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
      syncHash();
      render();
    }
  };
})();
