/**
 * CoSE Science Comics — Main Application Controller & Comic Book Reader
 */
(function () {
  "use strict";

  let DATA = null;
  let currentLevel = "ms"; // 'k5' | 'ms' | 'hs'
  let currentTab = "newsstand"; // 'newsstand' | 'reader' | 'constellation' | 'educator'
  let currentComicId = "LunarLeaf-CFD";
  let activeSeriesFilter = "all";
  let activeConceptFilter = "all";
  let activeCastFilter = "all";
  let searchQuery = "";

  const LEVEL_LABELS = {
    k5: "🌱 Elementary (Grades K–5 Explorer)",
    ms: "🔬 Middle School (Grades 6–8 Investigator)",
    hs: "🚀 High School & Educator (Grades 9–12 + Guide)"
  };

  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function init() {
    DATA = window.COSE_COMICS_DATA;
    if (!DATA) {
      console.error("COSE_COMICS_DATA not loaded!");
      return;
    }

    parseUrlHash();
    setupControls();
    renderSeriesFilterPills();
    renderConceptFilterSelect();
    renderCastFilterSelect();
    renderNewsstand();
    renderEducatorAndCastHub();
    renderComicIssue(currentComicId);

    if (window.CoSEConstellation) {
      window.CoSEConstellation.initConstellation(DATA, (comicId) => {
        openComicInReader(comicId);
      });
    }

    window.addEventListener("hashchange", () => {
      parseUrlHash();
      syncUIWithState();
    });

    window.addEventListener("keydown", (e) => {
      if (currentTab !== "reader") return;
      if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "SELECT")) return;
      if (e.key === "ArrowRight") stepIssue(1);
      if (e.key === "ArrowLeft") stepIssue(-1);
    });

    syncUIWithState();
  }

  function parseUrlHash() {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    const params = new URLSearchParams(hash);
    const issue = params.get("issue");
    const lvl = params.get("level");
    const tab = params.get("tab");
    if (lvl && ["k5", "ms", "hs"].includes(lvl)) {
      currentLevel = lvl;
    }
    if (issue && DATA.comics.some((c) => c.id === issue)) {
      currentComicId = issue;
      if (!tab) currentTab = "reader";
    }
    if (tab && ["newsstand", "reader", "constellation", "educator"].includes(tab)) {
      currentTab = tab;
    }
  }

  function updateUrlHash() {
    const params = new URLSearchParams();
    params.set("tab", currentTab);
    params.set("issue", currentComicId);
    params.set("level", currentLevel);
    history.replaceState(null, "", "#" + params.toString());
  }

  function setupControls() {
    // Reading Level Switcher
    document.querySelectorAll("[data-level-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentLevel = btn.getAttribute("data-level-btn");
        syncUIWithState();
        updateUrlHash();
      });
    });

    // Main View Tab Buttons
    document.querySelectorAll("[data-tab-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentTab = btn.getAttribute("data-tab-btn");
        syncUIWithState();
        updateUrlHash();
        if (currentTab === "constellation" && window.CoSEConstellation) {
          setTimeout(() => window.CoSEConstellation.resizeCanvas(), 40);
        }
      });
    });

    // Search Input
    const searchEl = document.getElementById("comic-search-input");
    if (searchEl) {
      searchEl.addEventListener("input", (e) => {
        searchQuery = (e.target.value || "").trim().toLowerCase();
        renderNewsstand();
      });
    }

    // Reset Filters Button
    const resetBtn = document.getElementById("reset-filters-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        activeSeriesFilter = "all";
        activeConceptFilter = "all";
        activeCastFilter = "all";
        searchQuery = "";
        if (searchEl) searchEl.value = "";
        const cSel = document.getElementById("concept-filter-select");
        if (cSel) cSel.value = "all";
        const castSel = document.getElementById("cast-filter-select");
        if (castSel) castSel.value = "all";
        renderSeriesFilterPills();
        renderNewsstand();
      });
    }
  }

  function syncUIWithState() {
    // Update Level Buttons
    document.querySelectorAll("[data-level-btn]").forEach((btn) => {
      const isMatch = btn.getAttribute("data-level-btn") === currentLevel;
      btn.classList.toggle("active", isMatch);
      btn.setAttribute("aria-pressed", isMatch ? "true" : "false");
    });

    // Update View Tabs
    document.querySelectorAll("[data-tab-btn]").forEach((btn) => {
      const isMatch = btn.getAttribute("data-tab-btn") === currentTab;
      btn.classList.toggle("active", isMatch);
    });

    document.querySelectorAll(".view-section").forEach((sec) => {
      sec.classList.toggle("active", sec.id === "view-" + currentTab);
    });

    renderComicIssue(currentComicId);
    renderEducatorAndCastHub();
  }

  function renderSeriesFilterPills() {
    const container = document.getElementById("series-filter-bar");
    if (!container) return;

    const allBtn = `
      <button class="series-pill ${activeSeriesFilter === "all" ? "active" : ""}" data-series-filter="all">
        📚 All 8 Series (${DATA.comics.length} Issues)
      </button>
    `;

    const seriesBtns = DATA.series
      .map((s) => {
        const count = DATA.comics.filter((c) => c.series_id === s.id).length;
        const isActive = activeSeriesFilter === s.id ? "active" : "";
        return `
          <button class="series-pill ${isActive}" data-series-filter="${s.id}" style="--s-color:${s.color}">
            <span>${s.emoji} S${s.number}: ${esc(s.short_title)}</span>
            <span class="pill-count">${count}</span>
          </button>
        `;
      })
      .join("");

    container.innerHTML = allBtn + seriesBtns;
    container.querySelectorAll("[data-series-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeSeriesFilter = btn.getAttribute("data-series-filter");
        renderSeriesFilterPills();
        renderNewsstand();
      });
    });
  }

  function renderConceptFilterSelect() {
    const sel = document.getElementById("concept-filter-select");
    if (!sel) return;
    sel.innerHTML =
      `<option value="all">🔗 All 16 Connecting Concepts</option>` +
      DATA.concepts
        .map((c) => {
          const cnt = DATA.comics.filter((cm) => cm.concepts.includes(c.id)).length;
          return `<option value="${c.id}">${c.emoji} ${esc(c.name)} (${cnt} issues)</option>`;
        })
        .join("");

    sel.addEventListener("change", () => {
      activeConceptFilter = sel.value;
      renderNewsstand();
    });
  }

  function renderCastFilterSelect() {
    const sel = document.getElementById("cast-filter-select");
    if (!sel) return;
    sel.innerHTML =
      `<option value="all">👩‍🚀 All CoSE Space Lab Characters</option>` +
      DATA.cast
        .map((ch) => {
          const cnt = DATA.comics.filter((cm) => cm.characters.includes(ch.id)).length;
          return `<option value="${ch.id}">${esc(ch.name)} (${cnt} issues)</option>`;
        })
        .join("");

    sel.addEventListener("change", () => {
      activeCastFilter = sel.value;
      renderNewsstand();
    });
  }

  function getFilteredComics() {
    return DATA.comics.filter((c) => {
      if (activeSeriesFilter !== "all" && c.series_id !== activeSeriesFilter) return false;
      if (activeConceptFilter !== "all" && !c.concepts.includes(activeConceptFilter)) return false;
      if (activeCastFilter !== "all" && !c.characters.includes(activeCastFilter)) return false;
      if (searchQuery) {
        const hay = (
          c.title +
          " " +
          c.comic_title +
          " " +
          c.wonder_q +
          " " +
          c.discovery +
          " " +
          c.take_home +
          " " +
          c.metric_badge +
          " " +
          c.concepts.join(" ")
        ).toLowerCase();
        if (!hay.includes(searchQuery)) return false;
      }
      return true;
    });
  }

  function renderNewsstand() {
    const container = document.getElementById("newsstand-container");
    const countLabel = document.getElementById("newsstand-count-label");
    if (!container) return;

    const filtered = getFilteredComics();
    if (countLabel) {
      countLabel.textContent = `Showing ${filtered.length} of ${DATA.comics.length} Illustrated Research Comics`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <h3>No comic issues matched your filter</h3>
          <p>Try clearing the search box or switching to "All 8 Series".</p>
        </div>
      `;
      return;
    }

    const conceptsById = {};
    DATA.concepts.forEach((c) => {
      conceptsById[c.id] = c;
    });

    // Group by Series for clean thematic shelves
    const htmlBlocks = DATA.series
      .map((s) => {
        const issues = filtered.filter((c) => c.series_id === s.id);
        if (!issues.length) return "";

        return `
          <section class="series-shelf" style="--series-color:${s.color}; --series-accent:${s.accent}">
            <div class="series-shelf-header">
              <div class="series-title-group">
                <span class="series-badge" style="background:${s.color}">SERIES 0${s.number} · ${esc(s.art_style_name)}</span>
                <h2>${s.emoji} ${esc(s.title)}</h2>
                <p>${esc(s.description)}</p>
              </div>
              <div class="series-count-badge">${issues.length} ${issues.length === 1 ? "Issue" : "Issues"}</div>
            </div>

            <div class="comic-cards-grid">
              ${issues
                .map((comic) => {
                  const coverSvg = window.CoSEArtEngine.renderCoverSVG(comic);
                  const conceptTags = comic.concepts
                    .slice(0, 3)
                    .map((cid) => {
                      const co = conceptsById[cid];
                      if (!co) return "";
                      return `<span class="card-concept-tag" style="border-color:${co.color}">${co.emoji} ${esc(co.tag)}</span>`;
                    })
                    .join("");

                  return `
                    <article class="comic-card" data-comic-card="${comic.id}" style="--card-accent:${comic.series_color}">
                      <div class="comic-card-cover">
                        ${coverSvg}
                      </div>
                      <div class="comic-card-body">
                        <div class="comic-card-meta">
                          <span class="issue-pill" style="background:${comic.series_color}">Issue #${String(comic.issue_number).padStart(2, "0")}</span>
                          <span class="style-pill">${esc(comic.title)}</span>
                        </div>
                        <h3 class="comic-card-title">${esc(comic.comic_title)}</h3>
                        <p class="comic-card-hook">${esc(comic.wonder_q)}</p>
                        <div class="comic-card-takehome">
                          <strong>✨ Take-Home:</strong> “${esc(comic.take_home)}”
                        </div>
                        <div class="comic-card-concepts">${conceptTags}</div>
                        <div class="comic-card-footer">
                          <button class="btn-read-comic" data-read-btn="${comic.id}">📖 Read 5-Panel Comic →</button>
                          <a class="btn-live-mini" href="${esc(comic.url)}" target="_blank" rel="noopener" title="Launch Live Interactive Project" onclick="event.stopPropagation()">🚀 Live App</a>
                        </div>
                      </div>
                    </article>
                  `;
                })
                .join("")}
            </div>
          </section>
        `;
      })
      .join("");

    container.innerHTML = htmlBlocks;

    container.querySelectorAll("[data-comic-card]").forEach((card) => {
      card.addEventListener("click", () => {
        openComicInReader(card.getAttribute("data-comic-card"));
      });
    });
  }

  function openComicInReader(comicId) {
    currentComicId = comicId;
    currentTab = "reader";
    syncUIWithState();
    updateUrlHash();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function stepIssue(delta) {
    const idx = DATA.comics.findIndex((c) => c.id === currentComicId);
    if (idx < 0) return;
    const nextIdx = (idx + delta + DATA.comics.length) % DATA.comics.length;
    openComicInReader(DATA.comics[nextIdx].id);
  }

  /**
   * Renders the full 5-Panel Comic Strip Page inside the Interactive Reader
   */
  function renderComicIssue(comicId) {
    const readerRoot = document.getElementById("comic-reader-stage");
    if (!readerRoot || !DATA) return;

    const comic = DATA.comics.find((c) => c.id === comicId) || DATA.comics[0];
    if (!comic) return;

    const conceptsById = {};
    DATA.concepts.forEach((c) => {
      conceptsById[c.id] = c;
    });
    const castById = {};
    DATA.cast.forEach((c) => {
      castById[c.id] = c;
    });

    // Connected comics sharing at least 2 concepts (or 1 if needed)
    const connectedComics = DATA.comics
      .filter((c) => c.id !== comic.id)
      .map((c) => {
        const shared = c.concepts.filter((cid) => comic.concepts.includes(cid));
        return { comic: c, sharedCount: shared.length, shared };
      })
      .filter((item) => item.sharedCount > 0)
      .sort((a, b) => b.sharedCount - a.sharedCount)
      .slice(0, 6);

    const panelsHtml = comic.panels
      .map((panel) => {
        const lvlData = panel[currentLevel] || panel.ms;
        const svgArt = window.CoSEArtEngine.renderPanelSVG(comic, panel);
        const speakerChar = castById[panel.speaker] || castById["doc-b"];
        const isWide = panel.layout === "wide-hero" || panel.layout === "wide-finale";

        return `
          <div class="comic-panel-card ${isWide ? "panel-wide" : "panel-std"} style-${comic.art_style}" data-panel-num="${panel.number}">
            <div class="panel-top-caption">
              <span class="panel-num-circle" style="background:${comic.series_color}">${panel.number}</span>
              <span class="panel-caption-text">${esc(lvlData.caption)}</span>
            </div>

            <div class="panel-art-viewport">
              ${svgArt}
            </div>

            <div class="panel-speech-bubble" style="--speaker-color:${speakerChar.color}">
              <div class="speech-speaker-tag" style="background:${speakerChar.color}">
                ${esc(panel.speaker_name)}
              </div>
              <p class="speech-dialogue-text">${esc(lvlData.dialogue)}</p>
            </div>

            <div class="panel-science-footnote">
              <span class="fn-icon">💡</span>
              <span class="fn-text">${esc(lvlData.note)}</span>
            </div>
          </div>
        `;
      })
      .join("");

    const castBadges = comic.characters
      .map((cid) => {
        const ch = castById[cid];
        if (!ch) return "";
        return `
          <span class="reader-cast-chip" style="border-color:${ch.color}">
            <strong style="color:${ch.accent}">${esc(ch.name)}</strong> · ${esc(ch.role)}
          </span>
        `;
      })
      .join("");

    const conceptButtons = comic.concepts
      .map((cid) => {
        const co = conceptsById[cid];
        if (!co) return "";
        return `
          <button class="reader-concept-badge" data-jump-concept="${co.id}" style="border-color:${co.color}; background:rgba(15,23,42,0.75)">
            <span>${co.emoji} <strong>${esc(co.name)}</strong> (${esc(co.tag)})</span>
            <span class="rc-sub">${esc(co[currentLevel] || co.ms)}</span>
          </button>
        `;
      })
      .join("");

    readerRoot.innerHTML = `
      <div class="comic-book-page style-${comic.art_style}" style="--series-color:${comic.series_color}; --series-accent:${comic.series_accent}">
        <!-- Reader Top Navigation Bar -->
        <div class="reader-nav-toolbar no-print">
          <button class="btn-nav-step" id="btn-prev-issue">← Previous Issue</button>
          <div class="reader-issue-picker-wrap">
            <label for="reader-issue-select" class="sr-only">Jump to Comic Issue:</label>
            <select id="reader-issue-select" class="reader-issue-select">
              ${DATA.comics
                .map(
                  (c) =>
                    `<option value="${c.id}" ${c.id === comic.id ? "selected" : ""}>Issue #${String(c.issue_number).padStart(2, "0")} — ${esc(c.title)}: ${esc(c.comic_title)}</option>`
                )
                .join("")}
            </select>
          </div>
          <button class="btn-nav-step" id="btn-next-issue">Next Issue →</button>
          <button class="btn-print-zine" id="btn-print-comic" title="Print or Save as Classroom PDF Poster">🖨️ Print Classroom Poster</button>
        </div>

        <!-- Comic Issue Masthead Header -->
        <header class="comic-page-masthead">
          <div class="masthead-top-row">
            <span class="masthead-series-tag" style="background:${comic.series_color}">
              ISSUE #${String(comic.issue_number).padStart(2, "0")} OF ${DATA.comics.length} · SERIES 0${comic.series_number}: ${esc(comic.series_title.toUpperCase())}
            </span>
            <span class="masthead-style-tag">🎨 Art Style: ${esc(comic.art_style_name)}</span>
            <span class="masthead-level-tag">${LEVEL_LABELS[currentLevel]}</span>
          </div>
          <h1 class="masthead-comic-title">${comic.emoji} ${esc(comic.comic_title)}</h1>
          <p class="masthead-project-sub">
            Research Project: <strong>${esc(comic.title)}</strong> · <span class="masthead-metric">${esc(comic.metric_badge)}</span> · NGSS: <code>${esc(comic.ngss)}</code>
          </p>
          <div class="masthead-cast-row">
            <span class="cast-row-label">Starring Cast:</span>
            ${castBadges}
          </div>
        </header>

        <!-- 5-Panel Comic Strip Grid -->
        <div class="comic-panels-grid">
          ${panelsHtml}
        </div>

        <!-- Inspirational K-12 Take-Home Message Banner -->
        <section class="inspirational-takehome-banner" style="border-color:${comic.series_color}">
          <div class="takehome-star-badge" style="background:${comic.series_color}">🌟 KEY TAKE-HOME MESSAGE</div>
          <blockquote class="takehome-big-quote">
            “${esc(comic.take_home)}”
          </blockquote>
          <div class="takehome-science-summary">
            <strong>Core Scientific Discovery:</strong> ${esc(currentLevel === "hs" ? comic.hs_detail : comic.discovery)}
          </div>
          <div class="takehome-cta-row no-print">
            <a class="btn-launch-live" href="${esc(comic.url)}" target="_blank" rel="noopener" style="background:${comic.series_color}">
              🚀 Launch Live Interactive Research Tool →
            </a>
            <a class="btn-view-repo" href="${esc(comic.repo_url)}" target="_blank" rel="noopener">
              🐙 View Open-Source GitHub Code & Data
            </a>
          </div>
        </section>

        <!-- Hands-On Classroom Activity & Teacher Guide Box -->
        <section class="teacher-activity-box">
          <div class="teacher-box-header">
            <h3>👩‍🏫 5-Minute Hands-On Classroom & Home Investigation (${LEVEL_LABELS[currentLevel]})</h3>
            <span class="ngss-pill">NGSS Standards: ${esc(comic.ngss)}</span>
          </div>
          <p class="teacher-activity-prompt"><strong>Try This Right Now with the Live Tool:</strong> ${esc(comic.activity)}</p>
          <div class="teacher-discussion-grid">
            <div class="td-card">
              <strong>🤔 Discussion Prompt:</strong>
              <p>${esc(comic.wonder_q)}</p>
            </div>
            <div class="td-card">
              <strong>🔬 Systems Bottleneck:</strong>
              <p>${esc(comic.challenge)}</p>
            </div>
            <div class="td-card">
              <strong>⚙️ How We Tested It:</strong>
              <p>${esc(comic.experiment)}</p>
            </div>
          </div>
        </section>

        <!-- Connecting Concepts & Connected Comics Trail -->
        <section class="connecting-concepts-section no-print">
          <h3>🔗 Key Concepts Connecting This Research Across the Lab</h3>
          <p class="section-sub">Click any concept below to explore it inside the <strong>Concept Constellation Graph</strong>:</p>
          <div class="reader-concepts-grid">
            ${conceptButtons}
          </div>

          <h4 class="connected-comics-heading">📚 Continue the Story — Connected Comics Sharing These Concepts:</h4>
          <div class="connected-comics-row">
            ${connectedComics
              .map(
                (item) => `
                <button class="connected-comic-card" data-open-connected="${item.comic.id}" style="border-top: 3px solid ${item.comic.series_color}">
                  <span class="cc-issue" style="color:${item.comic.series_accent}">Issue #${item.comic.issue_number} · ${esc(item.comic.series_title)}</span>
                  <strong>${item.comic.emoji} ${esc(item.comic.comic_title)}</strong>
                  <span class="cc-project">${esc(item.comic.title)}</span>
                  <span class="cc-shared">${item.sharedCount} shared ${item.sharedCount === 1 ? "concept" : "concepts"} →</span>
                </button>
              `
              )
              .join("")}
          </div>
        </section>
      </div>
    `;

    // Wire Reader Events
    const prevBtn = document.getElementById("btn-prev-issue");
    const nextBtn = document.getElementById("btn-next-issue");
    const printBtn = document.getElementById("btn-print-comic");
    const issueSel = document.getElementById("reader-issue-select");

    if (prevBtn) prevBtn.addEventListener("click", () => stepIssue(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => stepIssue(1));
    if (printBtn) printBtn.addEventListener("click", () => window.print());
    if (issueSel) {
      issueSel.addEventListener("change", () => {
        openComicInReader(issueSel.value);
      });
    }

    readerRoot.querySelectorAll("[data-open-connected]").forEach((btn) => {
      btn.addEventListener("click", () => {
        openComicInReader(btn.getAttribute("data-open-connected"));
      });
    });

    readerRoot.querySelectorAll("[data-jump-concept]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cid = btn.getAttribute("data-jump-concept");
        currentTab = "constellation";
        syncUIWithState();
        updateUrlHash();
        if (window.CoSEConstellation) {
          setTimeout(() => {
            window.CoSEConstellation.resizeCanvas();
            window.CoSEConstellation.selectConceptById(cid);
          }, 50);
        }
      });
    });
  }

  /**
   * Renders the Cast & Universe Guide + K-12 Educator NGSS Portal tab
   */
  function renderEducatorAndCastHub() {
    const castContainer = document.getElementById("cast-cards-grid");
    const stylesContainer = document.getElementById("styles-showcase-grid");
    const ngssContainer = document.getElementById("ngss-concepts-table");
    if (!DATA) return;

    if (castContainer) {
      castContainer.innerHTML = DATA.cast
        .map((ch) => {
          const avatar = window.CoSEArtEngine.renderCharacterAvatarSVG(ch.id, ch.color);
          const bio = ch["bio_" + currentLevel] || ch.bio_ms;
          const count = DATA.comics.filter((c) => c.characters.includes(ch.id)).length;
          return `
            <div class="cast-profile-card" style="border-top: 4px solid ${ch.color}">
              <div class="cast-avatar-wrap">${avatar}</div>
              <div class="cast-info">
                <span class="cast-species-tag" style="background:${ch.color}">${esc(ch.species)}</span>
                <h3>${esc(ch.name)}</h3>
                <p class="cast-role">${esc(ch.role)}</p>
                <blockquote class="cast-quote">“${esc(ch.catchphrase)}”</blockquote>
                <p class="cast-bio">${esc(bio)}</p>
                <button class="btn-filter-cast" data-filter-cast-jump="${ch.id}">
                  Browse all ${count} comics starring ${esc(ch.name.split(" ")[0])} →
                </button>
              </div>
            </div>
          `;
        })
        .join("");

      castContainer.querySelectorAll("[data-filter-cast-jump]").forEach((btn) => {
        btn.addEventListener("click", () => {
          activeCastFilter = btn.getAttribute("data-filter-cast-jump");
          const castSel = document.getElementById("cast-filter-select");
          if (castSel) castSel.value = activeCastFilter;
          currentTab = "newsstand";
          syncUIWithState();
          renderNewsstand();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
    }

    if (stylesContainer) {
      stylesContainer.innerHTML = DATA.series
        .map((s) => {
          const cnt = DATA.comics.filter((c) => c.series_id === s.id).length;
          return `
            <div class="style-guide-card" style="border-left: 4px solid ${s.color}">
              <span class="sg-badge" style="background:${s.color}">Series 0${s.number} · ${cnt} Issues</span>
              <h4>${s.emoji} ${esc(s.art_style_name)}</h4>
              <p class="sg-series-name">${esc(s.title)}</p>
              <p class="sg-desc">${esc(s.description)}</p>
              <button class="btn-filter-series-jump" data-series-jump="${s.id}">Explore Series 0${s.number} →</button>
            </div>
          `;
        })
        .join("");

      stylesContainer.querySelectorAll("[data-series-jump]").forEach((btn) => {
        btn.addEventListener("click", () => {
          activeSeriesFilter = btn.getAttribute("data-series-jump");
          currentTab = "newsstand";
          renderSeriesFilterPills();
          syncUIWithState();
          renderNewsstand();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
    }

    if (ngssContainer) {
      ngssContainer.innerHTML = DATA.concepts
        .map((c) => {
          const cnt = DATA.comics.filter((cm) => cm.concepts.includes(c.id)).length;
          return `
            <tr>
              <td><span class="table-concept-badge" style="background:${c.color}">${c.emoji} ${esc(c.name)}</span></td>
              <td><code>${esc(c.ngss)}</code></td>
              <td>${esc(c.k5)}</td>
              <td>${esc(c.ms)}</td>
              <td>${esc(c.hs)}</td>
              <td><strong>${cnt} Issues</strong></td>
            </tr>
          `;
        })
        .join("");
    }
  }

  window.CoSEReader = {
    init,
    openComicInReader,
    getCurrentLevel: () => currentLevel
  };

  document.addEventListener("DOMContentLoaded", init);
})();
