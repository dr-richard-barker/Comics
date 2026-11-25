/**
 * CoSE Science Comics — Unified Interactive Concept Constellation Explorer (v2)
 * Renders a 3-ring radial constellation uniting:
 *  - Inner Ring: 16 Core Scientific Concept Stars
 *  - Middle Ring: 90 Verified ASTRO-BOTANICA NASA OSDR Manga Volumes (emerald diamonds)
 *  - Outer Ring: 114 Open-Source Research Archive Comic Issues
 */
(function () {
  "use strict";

  let canvas = null;
  let ctx = null;
  let nodes = [];
  let links = [];
  let selectedNode = null;
  let hoveredNode = null;
  let draggingNode = null;
  let animFrame = null;
  let width = 960;
  let height = 640;
  let onOpenComicCallback = null;

  function mapAstroVolumeConcepts(vol) {
    const concepts = new Set(["spaceflight-omics"]);
    const domain = (vol.study_domain || "").toLowerCase();
    const blob = `${vol.title} ${vol.official_title || ""} ${vol.hardware} ${vol.world}`.toLowerCase();

    if (domain.includes("radiation") || blob.includes("gamma") || blob.includes("sog1")) {
      concepts.add("cosmic-radiation-dna");
    }
    if (domain.includes("epigenet") || domain.includes("methyl") || blob.includes("bisulfite") || blob.includes("splicing")) {
      concepts.add("epigenetics-chromatin");
    }
    if (vol.world === "Moon" || vol.world === "Mars" || domain.includes("regolith") || blob.includes("apollo")) {
      concepts.add("regolith-isru");
    }
    if (domain.includes("crop") || domain.includes("nutrition") || vol.world === "Polar Analog" || blob.includes("veggie") || blob.includes("eden iss")) {
      concepts.add("closed-loop-blss");
      concepts.add("astronaut-health");
    }
    if (domain.includes("gravitrop") || domain.includes("cell wall") || blob.includes("statolith") || blob.includes("auxin") || blob.includes("skew")) {
      concepts.add("gravitropism-statoliths");
      concepts.add("microgravity-buoyancy");
    }
    if (domain.includes("atmosphere") || domain.includes("hypobar") || blob.includes("anoxia") || blob.includes("hypoxia")) {
      concepts.add("boundary-layer-cfd");
      concepts.add("microgravity-buoyancy");
    }
    if (domain.includes("light") || domain.includes("photo")) {
      concepts.add("photorespiration-carbon");
      concepts.add("circadian-calcium-ros");
    }
    if (domain.includes("hormone") || domain.includes("metabolic") || blob.includes("ros") || blob.includes("calcium") || blob.includes("ethylene")) {
      concepts.add("circadian-calcium-ros");
    }
    if (blob.includes("magnetic") || blob.includes("magnet")) {
      concepts.add("magnetobiology-quantum");
    }
    if (blob.includes("single-cell") || blob.includes("single cell")) {
      concepts.add("single-cell-atlases");
    }
    if (blob.includes("fungi") || blob.includes("fungal") || blob.includes("microbiome")) {
      concepts.add("mycoponics-fungi");
    }
    return Array.from(concepts);
  }

  function initConstellation(data, openComicCb) {
    onOpenComicCallback = openComicCb;
    canvas = document.getElementById("constellation-canvas");
    if (!canvas || !data) return;
    ctx = canvas.getContext("2d");

    buildGraphModel(data);
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    canvas.addEventListener("mousemove", onPointerMove);
    canvas.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mouseup", onPointerUp);

    renderConceptShelf(data);
    startSimulation();
  }

  function resizeCanvas() {
    if (!canvas) return;
    const rect = canvas.parentElement.getBoundingClientRect();
    width = Math.max(640, rect.width || 960);
    height = 640;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    layoutNodes();
    drawConstellation();
  }

  function buildGraphModel(data) {
    nodes = [];
    links = [];

    const validConceptIds = new Set((data.concepts || []).map((c) => c.id));

    // Ring 1 (Inner): 16 Core Concept Hub Stars
    data.concepts.forEach((c, idx) => {
      nodes.push({
        id: "concept:" + c.id,
        rawId: c.id,
        type: "concept",
        label: c.name,
        shortLabel: c.tag,
        emoji: c.emoji,
        color: c.color,
        ngss: c.ngss,
        k5: c.k5,
        ms: c.ms,
        hs: c.hs,
        radius: 20,
        ringIndex: idx,
        totalRing: data.concepts.length,
        x: 0,
        y: 0
      });
    });

    // Ring 2 (Middle): 90 Verified ASTRO-BOTANICA NASA OSDR Manga Volumes
    const abVolumes = (window.ASTRO_BOTANICA_DATA && window.ASTRO_BOTANICA_DATA.volumes) || [];
    abVolumes.forEach((vol, idx) => {
      const nodeId = "ab:" + vol.volume;
      const mappedConcepts = mapAstroVolumeConcepts(vol).filter((cid) => validConceptIds.has(cid));
      nodes.push({
        id: nodeId,
        rawId: vol.volume,
        type: "astro",
        volume: vol.volume,
        accession: vol.accession,
        label: `Vol ${String(vol.volume).padStart(2, "0")}: ${vol.title}`,
        official_title: vol.official_title || vol.title,
        world: vol.world,
        hardware: vol.hardware_short || vol.hardware,
        sample_count: vol.sample_count || 0,
        osdr_verified: vol.osdr_verified,
        osdr_url: vol.osdr_url,
        study_domain: vol.study_domain,
        concepts: mappedConcepts,
        color: vol.osdr_verified === "live" ? "#10b981" : "#38bdf8",
        radius: 6.8,
        ringIndex: idx,
        totalRing: abVolumes.length,
        x: 0,
        y: 0
      });

      mappedConcepts.forEach((cid) => {
        links.push({
          source: "concept:" + cid,
          target: nodeId,
          conceptId: cid,
          linkType: "astro"
        });
      });
    });

    // Ring 3 (Outer): 114 Open-Source Research Archive Issues
    data.comics.forEach((comic, idx) => {
      const nodeId = "comic:" + comic.id;
      nodes.push({
        id: nodeId,
        rawId: comic.id,
        type: "comic",
        issue_number: comic.issue_number,
        label: `#${comic.issue_number} ${comic.title}`,
        comic_title: comic.comic_title,
        emoji: comic.emoji,
        color: comic.series_color,
        series_title: comic.series_title,
        take_home: comic.take_home,
        concepts: comic.concepts,
        radius: 7.5,
        ringIndex: idx,
        totalRing: data.comics.length,
        x: 0,
        y: 0
      });

      comic.concepts.forEach((cid) => {
        links.push({
          source: "concept:" + cid,
          target: nodeId,
          conceptId: cid,
          linkType: "comic"
        });
      });
    });
  }

  function layoutNodes() {
    const cx = width * 0.5;
    const cy = height * 0.5;
    const minDim = Math.min(width, height);
    const innerR = minDim * 0.19;
    const midR = minDim * 0.33;
    const outerR = minDim * 0.45;

    nodes.forEach((n) => {
      const angle = (n.ringIndex / Math.max(1, n.totalRing)) * Math.PI * 2 - Math.PI / 2;
      if (n.type === "concept") {
        n.x = cx + Math.cos(angle) * innerR;
        n.y = cy + Math.sin(angle) * innerR;
      } else if (n.type === "astro") {
        const r = midR + (n.ringIndex % 2 === 0 ? -10 : 10);
        n.x = cx + Math.cos(angle) * r;
        n.y = cy + Math.sin(angle) * r;
      } else {
        const r = outerR + (n.ringIndex % 2 === 0 ? -12 : 12);
        n.x = cx + Math.cos(angle) * r;
        n.y = cy + Math.sin(angle) * r;
      }
    });
  }

  function startSimulation() {
    if (animFrame) cancelAnimationFrame(animFrame);
    drawConstellation();
  }

  function getConnectedSet(node) {
    const set = new Set();
    if (!node) return set;
    set.add(node.id);
    links.forEach((l) => {
      if (l.source === node.id) set.add(l.target);
      if (l.target === node.id) set.add(l.source);
    });
    return set;
  }

  function drawConstellation() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    const isLight =
      window.CoSEArtEngine && window.CoSEArtEngine.getActiveTheme() === "light";

    const activeNode = selectedNode || hoveredNode;
    const connected = getConnectedSet(activeNode);
    const nodeById = {};
    nodes.forEach((n) => {
      nodeById[n.id] = n;
    });

    // Subtle 3-ring orbital guide tracks
    const cx = width * 0.5;
    const cy = height * 0.5;
    const minDim = Math.min(width, height);
    ctx.save();
    ctx.strokeStyle = isLight ? "rgba(15, 23, 42, 0.14)" : "rgba(148, 163, 184, 0.14)";
    ctx.setLineDash([4, 6]);
    [0.19, 0.33, 0.45].forEach((frac) => {
      ctx.beginPath();
      ctx.arc(cx, cy, minDim * frac, 0, Math.PI * 2);
      ctx.stroke();
    });
    ctx.restore();

    // Legend top-left on canvas
    ctx.save();
    ctx.font = "700 11px system-ui, sans-serif";
    ctx.fillStyle = isLight ? "#334155" : "#94a3b8";
    ctx.fillText("● Inner: 16 Core Concepts   ◆ Mid: 90 NASA OSDR Manga   ● Outer: 114 Research Issues", 14, 22);
    ctx.restore();

    // Draw Links
    links.forEach((l) => {
      const s = nodeById[l.source];
      const t = nodeById[l.target];
      if (!s || !t) return;
      const isHighlighted =
        activeNode && (l.source === activeNode.id || l.target === activeNode.id);

      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(t.x, t.y);
      if (isHighlighted) {
        ctx.strokeStyle = l.linkType === "astro" ? "#10b981" : s.color || "#0284c7";
        ctx.lineWidth = 2.1;
        ctx.globalAlpha = 0.88;
      } else {
        ctx.strokeStyle = l.linkType === "astro" ? "#10b981" : s.color || "#64748b";
        ctx.lineWidth = 0.7;
        ctx.globalAlpha = activeNode ? 0.05 : isLight ? 0.14 : 0.12;
      }
      ctx.stroke();
    });

    ctx.globalAlpha = 1;

    // Draw Nodes
    nodes.forEach((n) => {
      const isFocused = !activeNode || connected.has(n.id);
      ctx.save();
      ctx.globalAlpha = isFocused ? 1 : 0.16;

      if (activeNode && n.id === activeNode.id) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + 7, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = 0.3;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      if (n.type === "astro") {
        // Emerald diamond node for ASTRO-BOTANICA NASA OSDR Manga
        const r = n.radius;
        ctx.beginPath();
        ctx.moveTo(n.x, n.y - r);
        ctx.lineTo(n.x + r, n.y);
        ctx.lineTo(n.x, n.y + r);
        ctx.lineTo(n.x - r, n.y);
        ctx.closePath();
        ctx.fillStyle = n.color;
        ctx.fill();
        ctx.lineWidth = 1.4;
        ctx.strokeStyle = isLight ? "#064e3b" : "#ecfdf5";
        ctx.stroke();

        if (isFocused && activeNode && activeNode.id === n.id) {
          ctx.font = "bold 9px monospace";
          ctx.textAlign = "center";
          ctx.fillStyle = isLight ? "#064e3b" : "#a7f3d0";
          ctx.fillText(n.accession, n.x, n.y - r - 6);
        }
      } else {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.type === "concept" ? (isLight ? "#ffffff" : "#0f172a") : n.color;
        ctx.fill();
        ctx.lineWidth = n.type === "concept" ? 3 : 1.5;
        ctx.strokeStyle = n.type === "concept" ? n.color : isLight ? "#0f172a" : "#f8fafc";
        ctx.stroke();

        if (n.type === "concept") {
          ctx.font = "12px system-ui, sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = isLight ? "#0f172a" : "#ffffff";
          ctx.fillText(n.emoji, n.x, n.y);

          ctx.font = "bold 9.5px system-ui, sans-serif";
          ctx.fillStyle = isLight ? "#0f172a" : "#f1f5f9";
          ctx.fillText(n.shortLabel, n.x, n.y + n.radius + 10);
        } else if (isFocused && activeNode) {
          ctx.font = "bold 8px monospace";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#ffffff";
          ctx.fillText(String(n.issue_number), n.x, n.y);
        }
      }

      ctx.restore();
    });
  }

  function findNodeAt(mx, my) {
    for (let i = nodes.length - 1; i >= 0; i--) {
      const n = nodes[i];
      const dx = mx - n.x;
      const dy = my - n.y;
      if (dx * dx + dy * dy <= (n.radius + 5) * (n.radius + 5)) {
        return n;
      }
    }
    return null;
  }

  function onPointerMove(e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    if (draggingNode) {
      draggingNode.x = mx;
      draggingNode.y = my;
      drawConstellation();
      return;
    }

    const hit = findNodeAt(mx, my);
    if (hit !== hoveredNode) {
      hoveredNode = hit;
      canvas.style.cursor = hit ? "pointer" : "default";
      if (!selectedNode) {
        updateInspector(hoveredNode);
      }
      drawConstellation();
    }
  }

  function onPointerDown(e) {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const hit = findNodeAt(mx, my);

    if (hit) {
      selectedNode = hit;
      draggingNode = hit;
      updateInspector(hit);
    } else {
      selectedNode = null;
      updateInspector(null);
    }
    drawConstellation();
  }

  function onPointerUp() {
    draggingNode = null;
  }

  function selectConceptById(conceptId) {
    const target = nodes.find((n) => n.id === "concept:" + conceptId);
    if (target) {
      selectedNode = target;
      updateInspector(target);
      drawConstellation();
    }
  }

  function updateInspector(node) {
    const box = document.getElementById("constellation-inspector");
    if (!box) return;
    const data = window.COSE_COMICS_DATA;
    const level = (window.CoSEReader && window.CoSEReader.getCurrentLevel()) || "ms";

    if (!node) {
      box.innerHTML = `
        <div class="inspector-empty">
          <h3>🌌 Unified Space Biology Knowledge Graph</h3>
          <p>Explore how <strong>16 Core Concept Stars</strong> (inner ring) bridge <strong>90 NASA OSDR AstroBotanical GeneLab Graphical Catalogue Volumes</strong> (middle emerald diamonds) and <strong>114 Open-Source Research Issues</strong> (outer ring)!</p>
        </div>
      `;
      return;
    }

    if (node.type === "concept") {
      const connectedComics = data.comics.filter((c) => c.concepts.includes(node.rawId));
      const connectedAstro = nodes.filter((n) => n.type === "astro" && n.concepts.includes(node.rawId));
      const levelText = node[level] || node.ms;
      box.innerHTML = `
        <div class="inspector-card">
          <div class="inspector-header" style="border-left: 4px solid ${node.color}">
            <span class="inspector-badge" style="background:${node.color}">${node.emoji} ${node.shortLabel}</span>
            <span class="inspector-ngss">NGSS: ${node.ngss}</span>
            <h3>${node.label}</h3>
            <p>${levelText}</p>
          </div>
          ${
            connectedAstro.length
              ? `
            <h4>🌱 Connected AstroBotanical GeneLab Graphical Catalogue (${connectedAstro.length} Volumes):</h4>
            <div class="inspector-comic-list">
              ${connectedAstro
                .map(
                  (a) => `
                  <button class="inspector-comic-btn" data-open-astro-vol="${a.volume}">
                    <span class="ic-num" style="background:#059669">${a.accession}</span>
                    <span class="ic-title">Vol ${String(a.volume).padStart(2, "0")}: ${a.label.replace(/^Vol \d+:\s*/, "")}</span>
                    <span class="ic-go">Read Manga →</span>
                  </button>
                `
                )
                .join("")}
            </div>
          `
              : ""
          }
          <h4>📚 Connected Research Archive Comics (${connectedComics.length} Issues):</h4>
          <div class="inspector-comic-list">
            ${connectedComics
              .map(
                (c) => `
                <button class="inspector-comic-btn" data-open-comic="${c.id}">
                  <span class="ic-num" style="background:${c.series_color}">#${c.issue_number}</span>
                  <span class="ic-title">${c.emoji} ${c.title}</span>
                  <span class="ic-go">Read Comic →</span>
                </button>
              `
              )
              .join("")}
          </div>
        </div>
      `;
    } else if (node.type === "astro") {
      const conceptObjs = data.concepts.filter((c) => node.concepts.includes(c.id));
      box.innerHTML = `
        <div class="inspector-card">
          <div class="inspector-header" style="border-left: 4px solid #10b981">
            <span class="inspector-badge" style="background:#059669">🌱 AstroBotanical GeneLab Graphical Catalogue VOL ${String(node.volume).padStart(2, "0")} · ${node.accession}</span>
            <h3>${node.label.replace(/^Vol \d+:\s*/, "")}</h3>
            <p class="inspector-sub"><strong>Official NASA Study:</strong> ${node.official_title}</p>
            <p class="inspector-sub">${node.world} · ${node.hardware}${node.sample_count ? ` · 🧪 ${node.sample_count} verified samples` : ""}</p>
            <div class="inspector-actions">
              <button class="btn-primary" data-open-astro-vol="${node.volume}">📖 Open 32-Page Manga Volume</button>
              <a class="btn-secondary" href="${node.osdr_url}" target="_blank" rel="noopener">🚀 NASA OSDR Study ↗</a>
            </div>
          </div>
          <h4>Connected Scientific Concepts:</h4>
          <div class="inspector-concept-pills">
            ${conceptObjs
              .map(
                (co) => `
                <button class="concept-pill-btn" data-select-concept="${co.id}" style="border-color:${co.color}">
                  ${co.emoji} ${co.name}
                </button>
              `
              )
              .join("")}
          </div>
        </div>
      `;
    } else {
      const comic = data.comics.find((c) => c.id === node.rawId);
      if (!comic) return;
      const conceptObjs = data.concepts.filter((c) => comic.concepts.includes(c.id));
      box.innerHTML = `
        <div class="inspector-card">
          <div class="inspector-header" style="border-left: 4px solid ${comic.series_color}">
            <span class="inspector-badge" style="background:${comic.series_color}">Issue #${comic.issue_number} · ${comic.series_title}</span>
            <h3>${comic.emoji} ${comic.comic_title}</h3>
            <p class="inspector-sub">Project: <strong>${comic.title}</strong> (${comic.metric_badge})</p>
            <blockquote class="inspector-quote">“${comic.take_home}”</blockquote>
            <div class="inspector-actions">
              <button class="btn-primary" data-open-comic="${comic.id}">📖 Open 5-Panel Comic Issue</button>
              <a class="btn-secondary" href="${comic.url}" target="_blank" rel="noopener">🚀 Launch Live Tool</a>
            </div>
          </div>
          <h4>Connecting Concepts in This Comic:</h4>
          <div class="inspector-concept-pills">
            ${conceptObjs
              .map(
                (co) => `
                <button class="concept-pill-btn" data-select-concept="${co.id}" style="border-color:${co.color}">
                  ${co.emoji} ${co.name}
                </button>
              `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    box.querySelectorAll("[data-open-comic]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (onOpenComicCallback) onOpenComicCallback(btn.getAttribute("data-open-comic"));
      });
    });
    box.querySelectorAll("[data-open-astro-vol]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const vNum = Number(btn.getAttribute("data-open-astro-vol"));
        if (vNum && window.AstroBotanicaReader && typeof window.AstroBotanicaReader.openVolume === "function") {
          window.AstroBotanicaReader.openVolume(vNum, 1);
        }
      });
    });
    box.querySelectorAll("[data-select-concept]").forEach((btn) => {
      btn.addEventListener("click", () => {
        selectConceptById(btn.getAttribute("data-select-concept"));
      });
    });
  }

  function renderConceptShelf(data) {
    const shelf = document.getElementById("constellation-concept-pills");
    if (!shelf || !data) return;
    shelf.innerHTML = data.concepts
      .map((c) => {
        const comicCount = data.comics.filter((cm) => cm.concepts.includes(c.id)).length;
        const astroCount = nodes.filter((n) => n.type === "astro" && n.concepts.includes(c.id)).length;
        return `
          <button class="constellation-pill" data-concept-id="${c.id}" style="--c-color:${c.color}">
            <span>${c.emoji} ${c.tag}</span>
            <span class="cp-count">${comicCount + astroCount}</span>
          </button>
        `;
      })
      .join("");

    shelf.querySelectorAll("[data-concept-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        selectConceptById(btn.getAttribute("data-concept-id"));
      });
    });
  }

  window.CoSEConstellation = {
    initConstellation,
    selectConceptById,
    resizeCanvas,
    drawConstellation
  };
})();
