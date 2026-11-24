/**
 * CoSE Science Comics — Main Application Controller, Theme Engine & Comic Book Reader
 */
(function () {
  "use strict";

  let DATA = null;
  let currentLevel = "ms"; // 'k5' | 'ms' | 'hs'
  let currentTab = "novels"; // 'novels' | 'newsstand' | 'reader' | 'constellation' | 'educator'
  let currentComicId = "LunarLeaf-CFD";
  let activeScopeFilter = "all"; // 'all' | 'astrobotany' | 'deepspaceag' | 'astronauthealth' | 'simulations'
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

  /**
   * Light / Dark Mode Theme Controller following modern-web-guidance:
   * - <meta name="color-scheme"> is the source of truth mapped to :root color-scheme
   * - Toggling flips the currently rendered scheme; if the target matches the OS
   *   preference, localStorage is cleared and meta resets to "light dark".
   */
  function getSystemScheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  function getRenderedScheme() {
    const meta = document.querySelector('meta[name="color-scheme"]');
    const val = meta ? meta.content : "light dark";
    if (val === "light" || val === "dark") return val;
    return getSystemScheme();
  }

  function applyColorSchemeMeta(schemeValue) {
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.content = schemeValue || "light dark";
    }
    refreshAllThemeVisuals();
  }

  function toggleColorScheme() {
    const currentRendered = getRenderedScheme();
    const target = currentRendered === "dark" ? "light" : "dark";
    const sys = getSystemScheme();

    try {
      if (target === sys) {
        localStorage.removeItem("color-scheme");
        applyColorSchemeMeta("light dark");
      } else {
        localStorage.setItem("color-scheme", target);
        applyColorSchemeMeta(target);
      }
    } catch (_) {
      applyColorSchemeMeta(target);
    }
  }

  function refreshAllThemeVisuals() {
    if (!DATA) return;
    renderNewsstand();
    renderComicIssue(currentComicId);
    renderEducatorAndCastHub();
    if (window.CoSEGraphicNovels && window.CoSEGraphicNovels.render) {
      window.CoSEGraphicNovels.render();
    }
    if (window.AstroBotanicaReader && window.AstroBotanicaReader.render) {
      window.AstroBotanicaReader.render();
    }
    if (window.CoSEConstellation && window.CoSEConstellation.drawConstellation) {
      window.CoSEConstellation.drawConstellation();
    }
  }

  function init() {
    DATA = window.COSE_COMICS_DATA;
    if (!DATA) {
      console.error("COSE_COMICS_DATA not loaded!");
      return;
    }

    parseUrlHash();
    setupControls();
    renderScopeFilterPills();
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

    window.addEventListener("storage", (e) => {
      if (e.key === "color-scheme") {
        applyColorSchemeMeta(e.newValue ?? "light dark");
      }
    });

    if (window.matchMedia) {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", () => {
          refreshAllThemeVisuals();
        });
    }

    window.addEventListener("keydown", (e) => {
      if (currentTab !== "reader") return;
      if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "SELECT" || e.target.tagName === "TEXTAREA")) return;
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
    if (tab && ["novels", "astro-botanica", "newsstand", "reader", "constellation", "educator"].includes(tab)) {
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
    // Theme Toggle Button
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
      themeBtn.addEventListener("click", toggleColorScheme);
    }

    // Random Discovery Button
    const randomBtn = document.getElementById("random-comic-btn");
    if (randomBtn) {
      randomBtn.addEventListener("click", () => {
        const pool = getFilteredComics();
        const list = pool.length ? pool : DATA.comics;
        const pick = list[Math.floor(Math.random() * list.length)];
        if (pick) openComicInReader(pick.id);
      });
    }

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
        activeScopeFilter = "all";
        activeSeriesFilter = "all";
        activeConceptFilter = "all";
        activeCastFilter = "all";
        searchQuery = "";
        if (searchEl) searchEl.value = "";
        const cSel = document.getElementById("concept-filter-select");
        if (cSel) cSel.value = "all";
        const castSel = document.getElementById("cast-filter-select");
        if (castSel) castSel.value = "all";
        renderScopeFilterPills();
        renderSeriesFilterPills();
        renderNewsstand();
      });
    }
  }

  function renderScopeFilterPills() {
    const container = document.getElementById("scope-filter-bar");
    if (!container) return;

    const scopes = [
      { id: "all", label: `🌐 All CoSE Projects (${DATA.comics.length})` },
      {
        id: "astrobotany",
        label: `🌱 AstroBotany Hub (${DATA.comics.filter((c) => (c.cose_scopes || []).includes("astrobotany")).length})`
      },
      {
        id: "deepspaceag",
        label: `🌾 Deep Space Ag (${DATA.comics.filter((c) => (c.cose_scopes || []).includes("deepspaceag")).length})`
      },
      {
        id: "astronauthealth",
        label: `🩺 Astronaut Health (${DATA.comics.filter((c) => (c.cose_scopes || []).includes("astronauthealth")).length})`
      },
      {
        id: "simulations",
        label: `🕹️ Serious Simulations & Academy (${DATA.comics.filter((c) => (c.cose_scopes || []).includes("simulations")).length})`
      }
    ];

    container.innerHTML =
      `<span class="scope-filter-label">CoSE Hub Scope:</span>` +
      scopes
        .map(
          (sc) => `
          <button class="scope-pill ${activeScopeFilter === sc.id ? "active" : ""}" data-scope-filter="${sc.id}" type="button">
            ${esc(sc.label)}
          </button>
        `
        )
        .join("");

    container.querySelectorAll("[data-scope-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeScopeFilter = btn.getAttribute("data-scope-filter");
        renderScopeFilterPills();
        renderNewsstand();
      });
    });
  }

  function syncUIWithState() {
    document.querySelectorAll("[data-level-btn]").forEach((btn) => {
      const isMatch = btn.getAttribute("data-level-btn") === currentLevel;
      btn.classList.toggle("active", isMatch);
      btn.setAttribute("aria-pressed", isMatch ? "true" : "false");
    });

    document.querySelectorAll("[data-tab-btn]").forEach((btn) => {
      const isMatch = btn.getAttribute("data-tab-btn") === currentTab;
      btn.classList.toggle("active", isMatch);
    });

    document.querySelectorAll(".view-section").forEach((sec) => {
      sec.classList.toggle("active", sec.id === "view-" + currentTab);
    });

    renderComicIssue(currentComicId);
    renderEducatorAndCastHub();
    if (window.CoSEGraphicNovels && window.CoSEGraphicNovels.render) {
      window.CoSEGraphicNovels.render();
    }
    if (window.AstroBotanicaReader && window.AstroBotanicaReader.render) {
      window.AstroBotanicaReader.render();
    }
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
      if (activeScopeFilter !== "all" && !(c.cose_scopes || []).includes(activeScopeFilter)) return false;
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
          (c.equation || "") +
          " " +
          (c.qc_verified_note || "") +
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
      countLabel.textContent = `Showing ${filtered.length} of ${DATA.comics.length} Hyper-Detailed Academic Graphic Novels`;
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
                          <button class="btn-read-comic" data-read-btn="${comic.id}">📖 Read Graphic Novel →</button>
                          <button class="btn-export-quick" data-quick-export="${comic.id}" title="View as SVG / PNG / Animated GIF / PDF">🎞️ SVG·GIF·PDF</button>
                          <a class="btn-live-mini" href="${esc(comic.url)}" target="_blank" rel="noopener" title="Launch Live Interactive Project">🚀 App</a>
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
      card.addEventListener("click", (e) => {
        if (e.target.closest("[data-quick-export]") || e.target.closest(".btn-live-mini")) return;
        openComicInReader(card.getAttribute("data-comic-card"));
      });
    });

    container.querySelectorAll("[data-quick-export]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const cid = btn.getAttribute("data-quick-export");
        const cm = DATA.comics.find((x) => x.id === cid);
        if (cm && window.CoSEExportEngine) {
          window.CoSEExportEngine.openExportModal(cm, currentLevel, "svg");
        }
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
    stopSpeech();
    const idx = DATA.comics.findIndex((c) => c.id === currentComicId);
    if (idx < 0) return;
    const nextIdx = (idx + delta + DATA.comics.length) % DATA.comics.length;
    openComicInReader(DATA.comics[nextIdx].id);
  }

  function stopSpeech() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    document.querySelectorAll(".panel-speaking").forEach((el) => el.classList.remove("panel-speaking"));
    const stopBtn = document.getElementById("btn-stop-audio");
    if (stopBtn) stopBtn.hidden = true;
  }

  function speakSinglePanel(comic, panelNum) {
    if (!("speechSynthesis" in window)) {
      alert("Read-aloud audio is not supported in this browser.");
      return;
    }
    stopSpeech();
    const panel = comic.panels.find((p) => p.number === panelNum);
    if (!panel) return;
    const lvlData = panel[currentLevel] || panel.ms;
    const card = document.querySelector(`[data-panel-num="${panelNum}"]`);
    if (card) card.classList.add("panel-speaking");

    const utt = new SpeechSynthesisUtterance(
      `Panel ${panel.number}. ${panel.speaker_name} says: ${lvlData.dialogue}`
    );
    utt.rate = currentLevel === "k5" ? 0.94 : 1.02;
    utt.onend = () => {
      if (card) card.classList.remove("panel-speaking");
    };
    window.speechSynthesis.speak(utt);
  }

  function speakComicStory(comic) {
    if (!("speechSynthesis" in window)) {
      alert("Read-aloud audio is not supported in this browser.");
      return;
    }
    stopSpeech();
    const stopBtn = document.getElementById("btn-stop-audio");
    if (stopBtn) stopBtn.hidden = false;

    const queue = comic.panels.map((p) => {
      const lvlData = p[currentLevel] || p.ms;
      return {
        panelNum: p.number,
        text: `Panel ${p.number}. ${p.speaker_name} says: ${lvlData.dialogue}`
      };
    });
    queue.push({
      panelNum: null,
      text: `Key Take-Home Message: ${comic.take_home}`
    });

    let idx = 0;
    function nextUtterance() {
      if (idx >= queue.length) {
        stopSpeech();
        return;
      }
      const item = queue[idx++];
      document.querySelectorAll(".panel-speaking").forEach((el) => el.classList.remove("panel-speaking"));
      if (item.panelNum) {
        const card = document.querySelector(`[data-panel-num="${item.panelNum}"]`);
        if (card) {
          card.classList.add("panel-speaking");
          card.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
      const utt = new SpeechSynthesisUtterance(item.text);
      utt.rate = currentLevel === "k5" ? 0.94 : 1.02;
      utt.onend = nextUtterance;
      utt.onerror = stopSpeech;
      window.speechSynthesis.speak(utt);
    }
    nextUtterance();
  }

  function buildQuickQuizData(comic, conceptsById) {
    const otherComics = DATA.comics.filter((c) => c.id !== comic.id && c.series_id !== comic.series_id);
    const d1 = otherComics[comic.issue_number % otherComics.length] || DATA.comics[0];
    const d2 = otherComics[(comic.issue_number + 7) % otherComics.length] || DATA.comics[1];

    const q1Opts = [
      { text: comic.discovery, correct: true },
      { text: d1.discovery, correct: false },
      { text: d2.discovery, correct: false }
    ];
    // Deterministic rotate based on issue_number so correct answer isn't always A
    const shift1 = comic.issue_number % 3;
    const q1Shuffled = q1Opts.slice(shift1).concat(q1Opts.slice(0, shift1));

    const mainConcept = conceptsById[comic.concepts[0]] || DATA.concepts[0];
    const otherConcepts = DATA.concepts.filter((co) => !comic.concepts.includes(co.id));
    const c1 = otherConcepts[comic.issue_number % otherConcepts.length] || DATA.concepts[1];
    const c2 = otherConcepts[(comic.issue_number + 3) % otherConcepts.length] || DATA.concepts[2];

    const q2Opts = [
      { text: `${mainConcept.name}: ${mainConcept[currentLevel] || mainConcept.ms}`, correct: true },
      { text: `${c1.name}: ${c1[currentLevel] || c1.ms}`, correct: false },
      { text: `${c2.name}: ${c2[currentLevel] || c2.ms}`, correct: false }
    ];
    const shift2 = (comic.issue_number + 1) % 3;
    const q2Shuffled = q2Opts.slice(shift2).concat(q2Opts.slice(0, shift2));

    return [
      {
        id: "q1",
        prompt: `1. What did the CoSE team discover in "${comic.title}"?`,
        options: q1Shuffled
      },
      {
        id: "q2",
        prompt: `2. Which core scientific concept (${mainConcept.ngss}) explains this story?`,
        options: q2Shuffled
      }
    ];
  }

  /**
   * Renders the full 5-Panel Hyper-Detailed Graphic Novel inside the Interactive Reader
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
        const isWide = panel.number === 1 || panel.number === 4 || panel.number === 5 || panel.layout === "wide-hero" || panel.layout === "wide-finale";
        const panelForArt = isWide && panel.layout === "standard" ? Object.assign({}, panel, { layout: "wide-hero" }) : panel;
        const svgArt = window.CoSEArtEngine.renderPanelSVG(comic, panelForArt);
        const speakerChar = castById[panel.speaker] || castById["doc-b"];
        const anns = panel.annotations || [];

        return `
          <div class="comic-panel-card ${isWide ? "panel-wide" : "panel-std"} style-${comic.art_style}" data-panel-num="${panel.number}">
            <div class="panel-top-caption">
              <span class="panel-num-circle" style="background:${comic.series_color}">${panel.number}</span>
              <span class="panel-caption-text">${esc(lvlData.caption)}</span>
              <button class="btn-panel-speak no-print" type="button" data-speak-panel="${panel.number}" title="Read this panel aloud">🔊</button>
            </div>

            <div class="panel-art-viewport">
              ${svgArt}
            </div>

            <!-- Panel Technical Callout Tags Strip -->
            <div class="panel-annotations-strip">
              ${anns
                .map(
                  (a, idx) =>
                    `<span class="pa-chip"><strong>[${idx + 1}]</strong> ${esc(a)}</span>`
                )
                .join("")}
            </div>

            <div class="panel-speech-bubble" style="--speaker-color:${speakerChar.color}">
              <div class="speech-speaker-tag" style="background:${speakerChar.color}">
                ${esc(panel.speaker_name)}
              </div>
              <p class="speech-dialogue-text">${esc(lvlData.dialogue)}</p>
            </div>

            <div class="panel-science-footnote">
              <span class="fn-icon" aria-hidden="true">💡</span>
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
            <strong>${esc(ch.name)}</strong> · ${esc(ch.role)}
          </span>
        `;
      })
      .join("");

    const conceptButtons = comic.concepts
      .map((cid) => {
        const co = conceptsById[cid];
        if (!co) return "";
        return `
          <button class="reader-concept-badge" data-jump-concept="${co.id}" style="border-color:${co.color}">
            <span>${co.emoji} <strong>${esc(co.name)}</strong> (${esc(co.tag)})</span>
            <span class="rc-sub">${esc(co[currentLevel] || co.ms)}</span>
          </button>
        `;
      })
      .join("");

    const featuredNovels =
      window.CoSEGraphicNovels && typeof window.CoSEGraphicNovels.getNovelsForComic === "function"
        ? window.CoSEGraphicNovels.getNovelsForComic(comic.id)
        : [];
    const featuredNovelsHtml = featuredNovels.length
      ? `
        <div class="archive-featured-novel-bar no-print">
          <div>
            <strong>⚡ Featured in The CoSE Chronicles:</strong>
            ${featuredNovels
              .map(
                (fn) =>
                  `<span>Vol. ${String(fn.volume).padStart(2, "0")} — <em>${esc(fn.title)}: ${esc(fn.subtitle)}</em> (${esc(fn.art_style_label)})</span>`
              )
              .join(" · ")}
          </div>
          <div>
            ${featuredNovels
              .map(
                (fn) =>
                  `<button class="btn-jump-novel" type="button" data-open-flagship-novel="${esc(fn.id)}" style="background:${fn.theme_color}">⚡ Read Vol. ${String(fn.volume).padStart(2, "0")} →</button>`
              )
              .join(" ")}
          </div>
        </div>
      `
      : "";

    readerRoot.innerHTML = `
      <div class="comic-book-page style-${comic.art_style}" style="--series-color:${comic.series_color}; --series-accent:${comic.series_accent}">
        ${featuredNovelsHtml}
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
        </div>

        <!-- Multi-Format View, Export & Embed Suite Bar -->
        <div class="media-export-toolbar no-print">
          <span class="met-label">📦 View / Export / Embed Graphic Novel Plate:</span>
          <div class="met-buttons">
            <button id="btn-speak-story" class="btn-media-export" type="button">🔊 Listen to Story</button>
            <button id="btn-stop-audio" class="btn-media-export" type="button" hidden>⏹️ Stop Audio</button>
            <button class="btn-media-export" data-export-fmt="svg">🖼️ Embedded SVG</button>
            <button class="btn-media-export" data-export-fmt="png">📸 HD PNG Sheet</button>
            <button class="btn-media-export" data-export-fmt="gif">🎞️ Animated GIF</button>
            <button class="btn-media-export" data-export-fmt="pdf">📄 Academic PDF Plate</button>
            <button class="btn-media-export" data-export-fmt="embed">🔗 Embed &amp; BibTeX</button>
          </div>
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
          <div class="masthead-telemetry-row">
            <span class="telemetry-badge"><strong>∑ Governing Equation:</strong> <code>${esc(comic.equation)}</code></span>
            <span class="telemetry-badge"><strong>📏 Resolution:</strong> <code>${esc(comic.scale_bar)}</code></span>
            <span class="telemetry-badge"><strong>🔬 Subcellular Lens:</strong> <code>${esc(comic.zoom_inset)}</code></span>
          </div>
          <div class="qc-verified-banner">
            <strong>✓ AstroBotany &amp; CoSE Scientific QC Audit:</strong> ${esc(comic.qc_verified_note || "")}
          </div>
          <div class="masthead-cast-row">
            <span class="cast-row-label">Starring Cast:</span>
            ${castBadges}
          </div>
        </header>

        <!-- 5-Panel Hyper-Detailed Graphic Novel Strip Grid -->
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
              🐙 View Open-Source GitHub Code &amp; Data
            </a>
          </div>
        </section>

        <!-- Interactive K-12 Quick Check Mini-Quiz -->
        <section class="quick-quiz-card no-print" aria-label="K-12 Quick Check Quiz">
          <div class="quiz-header-row">
            <h3>🧠 Quick Check: Space Scientist Challenge</h3>
            <span id="quiz-score-banner" class="quiz-score-banner">Answer both questions to earn your badge!</span>
          </div>
          ${buildQuickQuizData(comic, conceptsById)
            .map(
              (q) => `
              <div class="quiz-question-block" data-quiz-block="${q.id}">
                <p class="quiz-prompt">${esc(q.prompt)}</p>
                <div class="quiz-options-grid">
                  ${q.options
                    .map(
                      (opt, oIdx) => `
                      <button
                        type="button"
                        class="quiz-option-btn"
                        data-quiz-q="${q.id}"
                        data-quiz-correct="${opt.correct ? "1" : "0"}"
                      >
                        <span class="quiz-opt-letter">${String.fromCharCode(65 + oIdx)}</span>
                        <span class="quiz-opt-text">${esc(opt.text)}</span>
                      </button>`
                    )
                    .join("")}
                </div>
              </div>`
            )
            .join("")}
        </section>

        <!-- Hands-On Classroom Activity & Teacher Guide Box -->
        <section class="teacher-activity-box">
          <div class="teacher-box-header">
            <h3>👩‍🏫 5-Minute Hands-On Classroom &amp; Home Investigation (${LEVEL_LABELS[currentLevel]})</h3>
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
                  <span class="cc-issue">Issue #${item.comic.issue_number} · ${esc(item.comic.series_title)}</span>
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
    const issueSel = document.getElementById("reader-issue-select");

    if (prevBtn) prevBtn.addEventListener("click", () => stepIssue(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => stepIssue(1));
    if (issueSel) {
      issueSel.addEventListener("change", () => {
        openComicInReader(issueSel.value);
      });
    }

    readerRoot.querySelectorAll("[data-open-flagship-novel]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const nid = btn.getAttribute("data-open-flagship-novel");
        if (window.CoSEGraphicNovels && typeof window.CoSEGraphicNovels.openNovel === "function") {
          window.CoSEGraphicNovels.openNovel(nid, 1);
        }
      });
    });

    const speakStoryBtn = document.getElementById("btn-speak-story");
    const stopAudioBtn = document.getElementById("btn-stop-audio");
    if (speakStoryBtn) {
      speakStoryBtn.addEventListener("click", () => speakComicStory(comic));
    }
    if (stopAudioBtn) {
      stopAudioBtn.addEventListener("click", () => stopSpeech());
    }

    readerRoot.querySelectorAll("[data-speak-panel]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const pNum = Number(btn.getAttribute("data-speak-panel"));
        speakSinglePanel(comic, pNum);
      });
    });

    const quizSolved = { q1: false, q2: false };
    const scoreBanner = document.getElementById("quiz-score-banner");
    readerRoot.querySelectorAll("[data-quiz-q]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qid = btn.getAttribute("data-quiz-q");
        const isCorrect = btn.getAttribute("data-quiz-correct") === "1";
        const block = btn.closest("[data-quiz-block]");
        const badge = btn.querySelector(".quiz-opt-letter");
        if (isCorrect) {
          if (block) {
            block.querySelectorAll(".quiz-option-btn").forEach((optBtn) => {
              optBtn.classList.remove("is-wrong");
            });
          }
          btn.classList.add("is-correct");
          if (badge) badge.textContent = "✓";
          quizSolved[qid] = true;
        } else {
          btn.classList.add("is-wrong");
          if (badge) badge.textContent = "💡";
        }
        if (scoreBanner) {
          const score = (quizSolved.q1 ? 1 : 0) + (quizSolved.q2 ? 1 : 0);
          if (score === 2) {
            scoreBanner.textContent = "🌟 Space Scientist Badge: 2/2!";
            scoreBanner.classList.add("is-complete");
          } else {
            scoreBanner.textContent = `Progress: ${score}/2 correct — keep going!`;
            scoreBanner.classList.remove("is-complete");
          }
        }
      });
    });

    readerRoot.querySelectorAll("[data-export-fmt]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const fmt = btn.getAttribute("data-export-fmt");
        if (window.CoSEExportEngine) {
          window.CoSEExportEngine.openExportModal(comic, currentLevel, fmt);
        }
      });
    });

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

  function switchTab(tabName) {
    if (["novels", "astro-botanica", "newsstand", "reader", "constellation", "educator"].includes(tabName)) {
      currentTab = tabName;
      syncUIWithState();
    }
  }

  window.CoSEReader = {
    init,
    openComicInReader,
    switchTab,
    toggleColorScheme,
    getCurrentLevel: () => currentLevel
  };

  document.addEventListener("DOMContentLoaded", init);
})();
