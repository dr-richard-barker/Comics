/**
 * The CoSE Chronicles — Interactive Flagship Graphic Novels Controller
 * Powers the 10-Volume Showcase, Mission Filters (ISS/Moon/Earth, POV, Marvel/Manga),
 * Cinema Spread & Webtoon Scroll Reader, 3-Layer Overlays (Lettering, Science Data HUD,
 * Clean Art), and Native <dialog> Director's Script Modal.
 */
(function () {
  "use strict";

  let GN_DATA = window.COSE_GRAPHIC_NOVELS || null;
  let CATALOG = window.COSE_COMICS_DATA || null;
  let activeNovelId = null; // null = Showcase Grid; string = Open Novel Reader
  let activePageNum = 1;
  let readerLayout = "cinema"; // 'cinema' | 'scroll'
  let showLettering = true;
  let showDataHud = true;
  let cleanArtMode = false;

  let filterWorld = "all";
  let filterPov = "all";
  let filterStyle = "all";

  const SPEAKER_COLORS = {
    "doc-b": "#0f7f9f",
    "sprout": "#15803d",
    "myco": "#d97706",
    "statolith": "#7c3aed",
    "pixel": "#0284c7",
    "astra": "#dc2626"
  };

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

  function renderCoverVisual(novel) {
    if (novel.cover && novel.cover.has_raster) {
      return `<img src="${esc(novel.cover.path)}" alt="${esc(novel.title)} cover illustration" width="${novel.cover.width}" height="${novel.cover.height}" loading="lazy" decoding="async">`;
    }
    return window.CoSEGraphicNovelArtStudio.renderCoverSVG(novel);
  }

  function renderPageVisual(novel, page) {
    if (page.art && page.art.has_raster) {
      return `<img src="${esc(page.art.path)}" alt="Volume ${novel.volume} Page ${page.page_number}: ${esc(page.beat_title)}" width="${page.art.width}" height="${page.art.height}" loading="lazy" decoding="async">`;
    }
    return window.CoSEGraphicNovelArtStudio.renderPageSVG(novel, page);
  }

  function getFilteredNovels() {
    return GN_DATA.novels.filter((n) => {
      if (filterWorld !== "all" && !n.worlds.includes(filterWorld)) return false;
      if (filterPov !== "all" && !n.perspectives.includes(filterPov)) return false;
      if (filterStyle !== "all" && n.art_style_family !== filterStyle) return false;
      return true;
    });
  }

  function renderShowcase(root) {
    const level = getLevel();
    const levelShort = { k5: "K–5", ms: "6–8", hs: "9–12+" }[level] || "6–8";
    const filtered = getFilteredNovels();
    const worldEmoji = { ISS: "🛰️", Moon: "🌙", Earth: "🌍" };
    const povEmoji = { Astronaut: "👩‍🚀", Phytonaut: "🌱", "Mission Control": "📡" };

    const cardsHtml = filtered
      .map((n) => {
        const famBadge = n.art_style_family === "marvel" ? "💥 MARVEL" : "🗾 MANGA";
        const rCount = Number(n.raster_plate_count || 0);
        const artStatus =
          rCount >= 7
            ? "⭐ 7/7 Full Illustrated"
            : rCount > 0
              ? `🎨 ${rCount}/7 Illustrated`
              : "✒️ Vector Art Studio";
        const worldsHtml = n.worlds.map((w) => `<span class="gn-chip">${worldEmoji[w] || "🌐"} ${esc(w)}</span>`).join("");
        const povsHtml = n.perspectives.map((p) => `<span class="gn-chip">${povEmoji[p] || "👤"} ${esc(p)}</span>`).join("");
        const directPdf = n.print_pdfs && n.print_pdfs[level];
        const pdfBtnHtml = directPdf
          ? `<a class="btn-gn-pdf-quick" href="${esc(directPdf)}" target="_blank" rel="noopener" download title="Download 8-page 8.5&quot;×11&quot; Print Comic PDF (${esc(levelShort)})">📥 ${esc(levelShort)} PDF</a>`
          : "";

        return `
          <article class="gn-cover-card gn-family-${n.art_style_family}" data-open-novel="${n.id}" style="--gn-color:${n.theme_color}; --gn-accent:${n.accent_color}">
            <div class="gn-cover-art-wrap">
              ${renderCoverVisual(n)}
              <div class="gn-cover-masthead">
                <div class="gn-corner-box">
                  <span class="gn-corner-vol">VOL</span>
                  <span class="gn-corner-num">${String(n.volume).padStart(2, "0")}</span>
                </div>
                <div class="gn-cover-title-stack">
                  <h3 class="gn-cover-title">${esc(n.title)}</h3>
                  <span class="gn-cover-sub">${esc(n.subtitle)}</span>
                </div>
              </div>
              <div class="gn-cover-bottom-bar">
                <span class="gn-style-ribbon">${famBadge} · ${esc(n.art_style_label)}</span>
                <span class="gn-art-badge">${artStatus}</span>
              </div>
            </div>
            <div class="gn-cover-body">
              <div class="gn-meta-chips">${worldsHtml}${povsHtml}</div>
              <p class="gn-tagline">${esc(n.tagline)}</p>
              <p class="gn-find-preview"><strong>Big Find:</strong> ${esc(n.big_finds[0])}</p>
              <div class="gn-cover-cta">
                <button class="btn-gn-launch" type="button" data-open-novel-btn="${n.id}">📖 Launch Adventure →</button>
                ${pdfBtnHtml}
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    const teacherMapHtml = GN_DATA.teacher_curriculum_map_pdf
      ? `<a class="gn-stat-pill gn-stat-link" href="${esc(GN_DATA.teacher_curriculum_map_pdf)}" target="_blank" rel="noopener" download>📋 1-Page Teacher NGSS Map (PDF)</a>`
      : "";
    const castPosterHtml = GN_DATA.cast_glossary_poster_pdf
      ? `<a class="gn-stat-pill gn-stat-link" href="${esc(GN_DATA.cast_glossary_poster_pdf)}" target="_blank" rel="noopener" download>🎭 Cast &amp; 16-Term Glossary Poster (PDF)</a>`
      : "";

    root.innerHTML = `
      <section class="gn-showcase-banner">
        <div class="gn-banner-content">
          <p class="gn-banner-eyebrow">⚡ Flagship Educational Series · The CoSE Chronicles</p>
          <h2 class="gn-banner-title">10 Distinctive Graphic Novels Across the ISS, the Moon &amp; Earth</h2>
          <p class="gn-banner-lede">
            Synthesizing the biggest scientific breakthroughs from <strong>114 open-source space biology projects</strong> into ten cinematic 3-act adventures—told through the eyes of <strong>Astronauts</strong>, <strong>Phytonauts</strong>, and <strong>Mission Control Scientists</strong> in <strong>6 Marvel-rooted styles</strong> and <strong>4 specialized Manga data-storytelling styles</strong>.
          </p>
          <div class="gn-banner-stats">
            <span class="gn-stat-pill">💥 6 Marvel-Core Styles</span>
            <span class="gn-stat-pill">🗾 4 Manga Data-Styles</span>
            <span class="gn-stat-pill">🛰️ ISS · 🌙 Moon · 🌍 Earth</span>
            <span class="gn-stat-pill">🖨️ 8.5"×11" Print Comics &amp; Folded Booklets</span>
            <span class="gn-stat-pill">🔗 92 Linked Open-Source Repos</span>
            ${teacherMapHtml}
            ${castPosterHtml}
          </div>
        </div>
      </section>

      <div class="gn-filter-deck" aria-label="Filter Flagship Graphic Novels">
        <div class="gn-filter-row">
          <span class="gn-filter-label">Destination:</span>
          <button class="gn-pill ${filterWorld === "all" ? "active" : ""}" data-gn-world="all">🌌 All Worlds (10)</button>
          <button class="gn-pill ${filterWorld === "ISS" ? "active" : ""}" data-gn-world="ISS">🛰️ ISS</button>
          <button class="gn-pill ${filterWorld === "Moon" ? "active" : ""}" data-gn-world="Moon">🌙 The Moon</button>
          <button class="gn-pill ${filterWorld === "Earth" ? "active" : ""}" data-gn-world="Earth">🌍 Earth</button>
        </div>
        <div class="gn-filter-row">
          <span class="gn-filter-label">Perspective:</span>
          <button class="gn-pill ${filterPov === "all" ? "active" : ""}" data-gn-pov="all">👥 All Roles</button>
          <button class="gn-pill ${filterPov === "Astronaut" ? "active" : ""}" data-gn-pov="Astronaut">👩‍🚀 Astronauts</button>
          <button class="gn-pill ${filterPov === "Phytonaut" ? "active" : ""}" data-gn-pov="Phytonaut">🌱 Phytonauts</button>
          <button class="gn-pill ${filterPov === "Mission Control" ? "active" : ""}" data-gn-pov="Mission Control">📡 Mission Control</button>
        </div>
        <div class="gn-filter-row">
          <span class="gn-filter-label">Art Style:</span>
          <button class="gn-pill ${filterStyle === "all" ? "active" : ""}" data-gn-style="all">🎨 All 10 Styles</button>
          <button class="gn-pill ${filterStyle === "marvel" ? "active" : ""}" data-gn-style="marvel">💥 Marvel Core (6)</button>
          <button class="gn-pill ${filterStyle === "manga" ? "active" : ""}" data-gn-style="manga">🗾 Manga Data-Styles (4)</button>
        </div>
      </div>

      ${
        filtered.length
          ? `<div class="gn-covers-grid">${cardsHtml}</div>`
          : `<div class="empty-state"><h3>No graphic novels match that mission combination</h3><p>Reset a filter pill above to see all 10 volumes.</p></div>`
      }
    `;

    root.querySelectorAll("[data-gn-world]").forEach((b) =>
      b.addEventListener("click", () => {
        filterWorld = b.getAttribute("data-gn-world");
        render();
      })
    );
    root.querySelectorAll("[data-gn-pov]").forEach((b) =>
      b.addEventListener("click", () => {
        filterPov = b.getAttribute("data-gn-pov");
        render();
      })
    );
    root.querySelectorAll("[data-gn-style]").forEach((b) =>
      b.addEventListener("click", () => {
        filterStyle = b.getAttribute("data-gn-style");
        render();
      })
    );
    root.querySelectorAll("[data-open-novel]").forEach((card) =>
      card.addEventListener("click", (e) => {
        if (e.target && e.target.closest(".btn-gn-pdf-quick")) return;
        openNovel(card.getAttribute("data-open-novel"), 1);
      })
    );
  }

  function renderPageArticle(novel, page, level) {
    const capText = page.caption[level] || page.caption.ms;
    const bubblesHtml = page.bubbles
      .map((b) => {
        const spColor = SPEAKER_COLORS[b.speaker] || novel.theme_color;
        const txt = b[level] || b.ms;
        return `
          <div class="gn-speech-balloon" style="--speaker-color:${spColor}">
            <span class="gn-speaker-pill">${esc(b.speaker_name)}</span>
            <p class="gn-speech-text">“${esc(txt)}”</p>
          </div>
        `;
      })
      .join("");

    const hud = page.data_hud;
    const artTag = page.art.has_raster ? "🎨 Illustrated Plate" : "✒️ Vector Art Studio";

    return `
      <article class="gn-page-article gn-family-${novel.art_style_family}" style="--gn-color:${novel.theme_color}; --gn-accent:${novel.accent_color}">
        <div class="gn-page-topbar">
          <span><span class="gn-page-act-tag">${esc(page.act)}</span> · Page ${page.page_number} of ${novel.pages.length}: ${esc(page.beat_title)}</span>
          <span>${artTag}</span>
        </div>

        <div class="gn-spread-canvas">
          ${renderPageVisual(novel, page)}
          <div class="gn-lettering-layer">
            <div class="gn-top-lettering-row">
              <div class="gn-caption-box">${esc(capText)}</div>
              <div class="gn-sfx-stamp" style="transform: rotate(${page.sfx.rotate || 0}deg)">${esc(page.sfx.text)}</div>
            </div>
            <div class="gn-bubbles-row">
              ${bubblesHtml}
            </div>
          </div>
        </div>

        <div class="gn-data-hud-bar">
          <div>
            <p class="gn-hud-headline">🔬 Science Data HUD — ${esc(hud.headline)}</p>
            <div class="gn-hud-eq-row">
              <code class="gn-hud-eq">${esc(hud.equation)}</code>
              <span class="gn-hud-metric">📊 ${esc(hud.metric)} · <em>${esc(hud.dataset)}</em></span>
            </div>
            <p class="gn-hud-desc">${esc(hud.explanation)}</p>
          </div>
          <div class="gn-hud-actions">
            <button class="btn-hud-link" type="button" data-jump-archive="${esc(hud.linked_comic_id)}">📖 Archive Issue</button>
            <a class="btn-hud-link" href="${esc(hud.linked_url)}" target="_blank" rel="noopener">🚀 Live Tool ↗</a>
          </div>
        </div>

        <div class="gn-director-strip">
          <strong>🎬 Director's Note:</strong> ${esc(page.director.shot)} <em>Data Story:</em> ${esc(page.director.data_story_note)}
        </div>
      </article>
    `;
  }

  function renderNovelReader(root, novel) {
    const level = getLevel();
    const comicsById = {};
    if (CATALOG && CATALOG.comics) {
      CATALOG.comics.forEach((c) => (comicsById[c.id] = c));
    }

    const pagesToShow =
      readerLayout === "scroll"
        ? novel.pages
        : [novel.pages[Math.max(0, Math.min(novel.pages.length - 1, activePageNum - 1))]];

    const stateClasses = [
      cleanArtMode ? "gn-clean-art" : "",
      !showLettering ? "gn-hide-lettering" : "",
      !showDataHud ? "gn-hide-hud" : ""
    ]
      .filter(Boolean)
      .join(" ");

    const sourceCardsHtml = novel.source_comic_ids
      .map((cid) => {
        const cm = comicsById[cid];
        if (!cm) return "";
        return `
          <button class="gn-source-repo-card" type="button" data-jump-archive="${esc(cid)}">
            <span>Issue #${String(cm.issue_number).padStart(2, "0")} · ${esc(cm.series_title)}</span>
            <strong>${cm.emoji} ${esc(cm.title)}</strong>
            <span>${esc(cm.metric_badge)} →</span>
          </button>
        `;
      })
      .join("");

    const scriptBeatsHtml = novel.pages
      .map(
        (p) => `
        <div class="gn-script-beat-card">
          <h4>Page ${p.page_number} · ${esc(p.act)} — ${esc(p.beat_title)}</h4>
          <p><strong>Camera &amp; Framing:</strong> ${esc(p.director.shot)}</p>
          <p><strong>Lighting &amp; Color:</strong> ${esc(p.director.lighting)}</p>
          <p><strong>Pacing:</strong> ${esc(p.director.pacing)}</p>
          <p><strong>Data-Storytelling Purpose:</strong> ${esc(p.director.data_story_note)}</p>
          <p><strong>SFX:</strong> <code>${esc(p.sfx.text)}</code> · <strong>Narration (${level.toUpperCase()}):</strong> ${esc(p.caption[level] || p.caption.ms)}</p>
        </div>
      `
      )
      .join("");

    const pdfs = novel.print_pdfs || {};
    const booklets = pdfs.booklets || {};
    const activePdfUrl = pdfs[level] || null;
    const activeBookletUrl = booklets[level] || null;
    const levelLabelShort = { k5: "K–5", ms: "6–8", hs: "9–12+" }[level] || "6–8";

    const toolbarPdfLink = activePdfUrl
      ? `<a class="gn-tool-btn gn-tool-download" href="${esc(activePdfUrl)}" target="_blank" rel="noopener" download title="Download publication-grade 8-page 8.5&quot;×11&quot; Print Comic PDF (${esc(levelLabelShort)})">📥 8.5×11 PDF (${esc(levelLabelShort)})</a>`
      : "";

    const printPackLinks = [
      pdfs.k5 ? `<a class="gn-print-pill ${level === "k5" ? "current" : ""}" href="${esc(pdfs.k5)}" target="_blank" rel="noopener" download>📥 K–5 Comic</a>` : "",
      pdfs.ms ? `<a class="gn-print-pill ${level === "ms" ? "current" : ""}" href="${esc(pdfs.ms)}" target="_blank" rel="noopener" download>📥 6–8 Comic</a>` : "",
      pdfs.hs ? `<a class="gn-print-pill ${level === "hs" ? "current" : ""}" href="${esc(pdfs.hs)}" target="_blank" rel="noopener" download>📥 9–12+ Teacher</a>` : "",
      activeBookletUrl ? `<a class="gn-print-pill booklet" href="${esc(activeBookletUrl)}" target="_blank" rel="noopener" download title="2-sheet double-sided fold-and-staple booklet (11&quot;×8.5&quot; landscape)">📖 ${esc(levelLabelShort)} Fold-and-Staple Booklet</a>` : ""
    ].filter(Boolean);

    const printPackHtml = printPackLinks.length
      ? `<div class="gn-print-pack-bar"><span class="gn-print-pack-label">🖨️ Ready-to-Print 8.5"×11" PDFs:</span>${printPackLinks.join("")}</div>`
      : "";

    root.innerHTML = `
      <div class="gn-reader-shell ${stateClasses}" style="--gn-color:${novel.theme_color}; --gn-accent:${novel.accent_color}">
        <!-- Sticky Reader Toolbar -->
        <div class="gn-reader-toolbar">
          <div class="gn-toolbar-group">
            <button class="gn-tool-btn" type="button" id="btn-gn-back">← All 10 Novels</button>
            <button class="gn-tool-btn" type="button" id="btn-gn-prev-vol">◀ Prev Vol</button>
            <button class="gn-tool-btn" type="button" id="btn-gn-next-vol">Next Vol ▶</button>
          </div>

          <div class="gn-toolbar-group">
            <button class="gn-tool-btn ${readerLayout === "cinema" ? "active" : ""}" type="button" data-gn-layout="cinema">🎬 Cinema Mode</button>
            <button class="gn-tool-btn ${readerLayout === "scroll" ? "active" : ""}" type="button" data-gn-layout="scroll">📜 Webtoon Scroll</button>
            <button class="gn-tool-btn ${showLettering && !cleanArtMode ? "active" : ""}" type="button" id="btn-gn-lettering">💬 Lettering</button>
            <button class="gn-tool-btn ${showDataHud && !cleanArtMode ? "active" : ""}" type="button" id="btn-gn-hud">🔬 Data HUD</button>
            <button class="gn-tool-btn ${cleanArtMode ? "active" : ""}" type="button" id="btn-gn-clean">🎨 Clean Art</button>
            <button class="gn-tool-btn" type="button" id="btn-gn-script">🎬 Director's Script</button>
            <button class="gn-tool-btn" type="button" id="btn-gn-png" title="Download active page as a 1400×960 HD PNG comic plate">📸 HD PNG</button>
            ${toolbarPdfLink}
            <button class="gn-tool-btn" type="button" id="btn-gn-pdf" title="Open printable 8-page 8.5&quot;×11&quot; Graphic Novel print view">🖨️ Print View</button>
            <button class="gn-tool-btn" type="button" id="btn-gn-share" title="Copy direct link to this volume and page">🔗 Share Link</button>
          </div>
        </div>

        <!-- Graphic Novel Masthead Card -->
        <header class="gn-reader-header">
          <div class="gn-reader-mini-cover">${renderCoverVisual(novel)}</div>
          <div class="gn-reader-header-meta">
            <div class="gn-meta-chips">
              <span class="gn-chip" style="background:${novel.theme_color}; color:#fff; border-color:${novel.theme_color}">VOLUME ${String(novel.volume).padStart(2, "0")} OF 10</span>
              <span class="gn-chip">${novel.art_style_family === "marvel" ? "💥" : "🗾"} ${esc(novel.art_style_label)}</span>
              <span class="gn-chip">🌐 ${esc(novel.worlds.join(" · "))}</span>
              <span class="gn-chip">🎭 ${esc(novel.perspectives.join(" + "))}</span>
              <span class="gn-chip">📐 NGSS: ${esc(novel.ngss)}</span>
            </div>
            <h2>${esc(novel.title)}</h2>
            <p class="gn-reader-subtitle">${esc(novel.subtitle)} — ${esc(novel.tagline)}</p>
            <p class="gn-reader-style-note"><strong>Art Direction:</strong> ${esc(novel.art_style_notes)}</p>
            ${printPackHtml}
          </div>
        </header>

        ${
          readerLayout === "cinema"
            ? `
          <nav class="gn-filmstrip-nav" aria-label="Graphic Novel Page Navigation">
            <button class="gn-tool-btn" type="button" id="btn-gn-prev-page" ${activePageNum <= 1 ? "disabled" : ""}>← Prev Page</button>
            <div class="gn-filmstrip-thumbs">
              ${novel.pages
                .map(
                  (p) =>
                    `<button class="gn-thumb-btn ${p.page_number === activePageNum ? "active" : ""}" type="button" data-gn-page="${p.page_number}">P${p.page_number} · ${esc(p.act.split("—")[0].trim())}</button>`
                )
                .join("")}
            </div>
            <button class="gn-tool-btn" type="button" id="btn-gn-next-page" ${activePageNum >= novel.pages.length ? "disabled" : ""}>Next Page →</button>
          </nav>
        `
            : ""
        }

        <!-- Pages Stream -->
        <div class="gn-pages-stream">
          ${pagesToShow.map((p) => renderPageArticle(novel, p, level)).join("")}
        </div>

        ${
          readerLayout === "cinema"
            ? `
          <div class="gn-filmstrip-nav">
            <button class="gn-tool-btn" type="button" id="btn-gn-prev-page-btm" ${activePageNum <= 1 ? "disabled" : ""}>← Previous Page</button>
            <span style="font-weight:800; font-size:0.86rem;">Page ${activePageNum} of ${novel.pages.length} · Tip: Use ← / → arrow keys or switch to 📜 Webtoon Scroll</span>
            <button class="gn-tool-btn" type="button" id="btn-gn-next-page-btm" ${activePageNum >= novel.pages.length ? "disabled" : ""}>Next Page →</button>
          </div>
        `
            : ""
        }

        <!-- Mission Debrief & Cross-Linked Source Research -->
        <section class="gn-debrief-section">
          <div>
            <h3 style="margin:0 0 8px;">🌟 Mission Debrief: Key Scientific Breakthroughs in Volume ${String(novel.volume).padStart(2, "0")}</h3>
            <ul class="gn-debrief-finds">
              ${novel.big_finds.map((bf) => `<li>${esc(bf)}</li>`).join("")}
            </ul>
          </div>

          <div class="inspirational-takehome-banner" style="margin:0; border-color:${novel.theme_color}">
            <div class="takehome-star-badge" style="background:${novel.theme_color}">✨ TAKE-HOME MESSAGE</div>
            <blockquote class="takehome-big-quote">“${esc(novel.take_home)}”</blockquote>
            <p style="margin:8px 0 0; font-size:0.9rem;"><strong>🧪 Hands-On Classroom &amp; Home Mission:</strong> ${esc(novel.mission_activity)}</p>
          </div>

          <div>
            <h4 style="margin:0 0 10px;">🔗 Explore the Underlying Open-Source Research in the 114-Issue Archive:</h4>
            <div class="gn-source-repos-grid">${sourceCardsHtml}</div>
          </div>
        </section>

        <!-- Native <dialog> Director's Script & Shot Notes -->
        <dialog id="gn-script-dialog" class="gn-script-dialog" closedby="any" aria-labelledby="gn-script-dialog-title">
          <div class="gn-dialog-head">
            <h3 id="gn-script-dialog-title">🎬 Director's Script &amp; Storyboard — Vol. ${String(novel.volume).padStart(2, "0")}: ${esc(novel.title)}</h3>
            <button class="gn-tool-btn" type="button" id="btn-gn-close-dialog">✕ Close</button>
          </div>
          <div class="gn-dialog-body">
            <p style="margin:0; font-size:0.88rem; color:var(--fg-muted);">
              <strong>Art Style:</strong> ${esc(novel.art_style_label)} — ${esc(novel.art_style_notes)}
            </p>
            ${scriptBeatsHtml}
          </div>
        </dialog>
      </div>
    `;

    // Wire Reader Events
    document.getElementById("btn-gn-back")?.addEventListener("click", () => {
      activeNovelId = null;
      syncHash();
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.getElementById("btn-gn-prev-vol")?.addEventListener("click", () => stepVolume(-1));
    document.getElementById("btn-gn-next-vol")?.addEventListener("click", () => stepVolume(1));

    root.querySelectorAll("[data-gn-layout]").forEach((b) =>
      b.addEventListener("click", () => {
        readerLayout = b.getAttribute("data-gn-layout");
        render();
      })
    );

    document.getElementById("btn-gn-lettering")?.addEventListener("click", () => {
      cleanArtMode = false;
      showLettering = !showLettering;
      render();
    });

    document.getElementById("btn-gn-hud")?.addEventListener("click", () => {
      cleanArtMode = false;
      showDataHud = !showDataHud;
      render();
    });

    document.getElementById("btn-gn-clean")?.addEventListener("click", () => {
      cleanArtMode = !cleanArtMode;
      render();
    });

    const dlg = document.getElementById("gn-script-dialog");
    document.getElementById("btn-gn-script")?.addEventListener("click", () => {
      if (dlg && typeof dlg.showModal === "function") dlg.showModal();
    });
    document.getElementById("btn-gn-close-dialog")?.addEventListener("click", () => dlg?.close());
    dlg?.addEventListener("click", (e) => {
      if (e.target === dlg) dlg.close();
    });

    document.getElementById("btn-gn-png")?.addEventListener("click", async (e) => {
      const btn = e.currentTarget;
      const pageObj = novel.pages[Math.max(0, Math.min(novel.pages.length - 1, activePageNum - 1))];
      if (!window.CoSEGraphicNovelExport || !pageObj) return;
      const orig = btn.textContent;
      btn.textContent = "⏳ Rendering...";
      btn.disabled = true;
      try {
        await window.CoSEGraphicNovelExport.exportPagePNG(novel, pageObj, level, {
          showLettering: showLettering && !cleanArtMode,
          showDataHud: showDataHud && !cleanArtMode
        });
        btn.textContent = "✅ PNG Saved!";
      } catch (err) {
        console.error("PNG export error:", err);
        btn.textContent = "⚠️ Export Error";
      } finally {
        btn.disabled = false;
        setTimeout(() => {
          btn.textContent = orig;
        }, 1800);
      }
    });

    document.getElementById("btn-gn-pdf")?.addEventListener("click", () => {
      if (window.CoSEGraphicNovelExport) {
        window.CoSEGraphicNovelExport.printGraphicNovelPDF(novel, level, CATALOG);
      }
    });

    document.getElementById("btn-gn-share")?.addEventListener("click", async (e) => {
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
      activePageNum = Math.max(1, Math.min(novel.pages.length, pNum));
      syncHash();
      render();
      window.scrollTo({ top: 140, behavior: "smooth" });
    };

    document.getElementById("btn-gn-prev-page")?.addEventListener("click", () => goPage(activePageNum - 1));
    document.getElementById("btn-gn-next-page")?.addEventListener("click", () => goPage(activePageNum + 1));
    document.getElementById("btn-gn-prev-page-btm")?.addEventListener("click", () => goPage(activePageNum - 1));
    document.getElementById("btn-gn-next-page-btm")?.addEventListener("click", () => goPage(activePageNum + 1));

    root.querySelectorAll("[data-gn-page]").forEach((b) =>
      b.addEventListener("click", () => goPage(Number(b.getAttribute("data-gn-page"))))
    );

    root.querySelectorAll("[data-jump-archive]").forEach((btn) =>
      btn.addEventListener("click", () => {
        const cid = btn.getAttribute("data-jump-archive");
        if (window.CoSEReader && typeof window.CoSEReader.openComicInReader === "function") {
          window.CoSEReader.openComicInReader(cid);
        }
      })
    );
  }

  function stepVolume(delta) {
    if (!GN_DATA || !activeNovelId) return;
    const idx = GN_DATA.novels.findIndex((n) => n.id === activeNovelId);
    if (idx < 0) return;
    const next = GN_DATA.novels[(idx + delta + GN_DATA.novels.length) % GN_DATA.novels.length];
    openNovel(next.id, 1);
  }

  function openNovel(novelId, pageNum) {
    if (!GN_DATA) return;
    const found = GN_DATA.novels.find((n) => n.id === novelId);
    if (!found) return;
    activeNovelId = found.id;
    activePageNum = pageNum || 1;
    if (window.CoSEReader && typeof window.CoSEReader.switchTab === "function") {
      window.CoSEReader.switchTab("novels");
    }
    syncHash();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function syncHash() {
    if (activeNovelId) {
      const params = new URLSearchParams();
      params.set("tab", "novels");
      params.set("novel", activeNovelId);
      params.set("page", String(activePageNum));
      params.set("level", getLevel());
      history.replaceState(null, "", "#" + params.toString());
    }
  }

  function parseInitialHash() {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash || !GN_DATA) return;
    const params = new URLSearchParams(hash);
    const nid = params.get("novel");
    const pg = Number(params.get("page") || "1");
    if (nid && GN_DATA.novels.some((n) => n.id === nid)) {
      activeNovelId = nid;
      activePageNum = Math.max(1, Math.min(6, pg || 1));
    }
  }

  function render() {
    const root = document.getElementById("graphic-novels-stage");
    if (!root || !GN_DATA) return;
    if (!activeNovelId) {
      renderShowcase(root);
    } else {
      const novel = GN_DATA.novels.find((n) => n.id === activeNovelId) || GN_DATA.novels[0];
      renderNovelReader(root, novel);
    }
  }

  function init() {
    GN_DATA = window.COSE_GRAPHIC_NOVELS;
    CATALOG = window.COSE_COMICS_DATA;
    if (!GN_DATA) return;

    parseInitialHash();
    render();

    window.addEventListener("keydown", (e) => {
      const sec = document.getElementById("view-novels");
      if (!sec || !sec.classList.contains("active") || !activeNovelId || readerLayout !== "cinema") return;
      if (e.target && ["INPUT", "SELECT", "TEXTAREA"].includes(e.target.tagName)) return;
      const novel = GN_DATA.novels.find((n) => n.id === activeNovelId);
      if (!novel) return;
      if (e.key === "ArrowRight" && activePageNum < novel.pages.length) {
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

  window.CoSEGraphicNovels = {
    init,
    render,
    openNovel,
    showShowcase: () => {
      activeNovelId = null;
      render();
    },
    getNovelsForComic: (comicId) => {
      if (!GN_DATA || !GN_DATA.comic_to_novels) return [];
      return GN_DATA.comic_to_novels[comicId] || [];
    }
  };

  document.addEventListener("DOMContentLoaded", init);
})();
