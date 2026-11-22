/**
 * CoSE Science Comics — Interactive Concept Constellation Explorer
 * Renders a force-directed radial constellation showing how the 16 Core
 * Scientific Concepts connect all 114 research comic issues across 8 series.
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
  let height = 620;
  let onOpenComicCallback = null;

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
    height = 600;
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

    // 16 Core Concept Hub Stars (Inner Ring)
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
        radius: 21,
        ringIndex: idx,
        totalRing: data.concepts.length,
        x: 0,
        y: 0
      });
    });

    // Comic Issue Nodes (Outer Ring grouped by Series)
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
        radius: 8.5,
        ringIndex: idx,
        totalRing: data.comics.length,
        x: 0,
        y: 0
      });

      comic.concepts.forEach((cid) => {
        links.push({
          source: "concept:" + cid,
          target: nodeId,
          conceptId: cid
        });
      });
    });
  }

  function layoutNodes() {
    const cx = width * 0.5;
    const cy = height * 0.5;
    const innerR = Math.min(width, height) * 0.23;
    const outerR = Math.min(width, height) * 0.43;

    nodes.forEach((n) => {
      const angle = (n.ringIndex / n.totalRing) * Math.PI * 2 - Math.PI / 2;
      if (n.type === "concept") {
        n.x = cx + Math.cos(angle) * innerR;
        n.y = cy + Math.sin(angle) * innerR;
      } else {
        // Slight two-tier stagger on outer ring for readability
        const r = outerR + (n.ringIndex % 2 === 0 ? -16 : 16);
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

    // Subtle orbital guide rings
    const cx = width * 0.5;
    const cy = height * 0.5;
    ctx.save();
    ctx.strokeStyle = isLight ? "rgba(15, 23, 42, 0.16)" : "rgba(148, 163, 184, 0.14)";
    ctx.setLineDash([4, 6]);
    ctx.beginPath();
    ctx.arc(cx, cy, Math.min(width, height) * 0.23, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, Math.min(width, height) * 0.43, 0, Math.PI * 2);
    ctx.stroke();
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
        ctx.strokeStyle = s.color || "#0284c7";
        ctx.lineWidth = 2.4;
        ctx.globalAlpha = 0.92;
      } else {
        ctx.strokeStyle = s.color || "#64748b";
        ctx.lineWidth = 0.9;
        ctx.globalAlpha = activeNode ? 0.08 : isLight ? 0.28 : 0.22;
      }
      ctx.stroke();
    });

    ctx.globalAlpha = 1;

    // Draw Nodes
    nodes.forEach((n) => {
      const isFocused = !activeNode || connected.has(n.id);
      ctx.save();
      ctx.globalAlpha = isFocused ? 1 : 0.18;

      // Node Glow if active
      if (activeNode && n.id === activeNode.id) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + 7, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = 0.28;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
      ctx.fillStyle = n.type === "concept" ? (isLight ? "#ffffff" : "#0f172a") : n.color;
      ctx.fill();
      ctx.lineWidth = n.type === "concept" ? 3 : 1.6;
      ctx.strokeStyle = n.type === "concept" ? n.color : isLight ? "#0f172a" : "#f8fafc";
      ctx.stroke();

      if (n.type === "concept") {
        ctx.font = "13px system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = isLight ? "#0f172a" : "#ffffff";
        ctx.fillText(n.emoji, n.x, n.y);

        // Concept Tag Label (Contrast-calibrated for both Light & Dark schemes)
        ctx.font = "bold 10px system-ui, sans-serif";
        ctx.fillStyle = isLight ? "#0f172a" : "#f1f5f9";
        ctx.fillText(n.shortLabel, n.x, n.y + n.radius + 11);
      } else if (isFocused && activeNode) {
        // Show issue number on connected comics
        ctx.font = "bold 8.5px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(String(n.issue_number), n.x, n.y);
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
          <h3>🌌 Interactive Concept Constellation</h3>
          <p>Click any of the <strong>16 Core Concept Stars</strong> (inner ring) or <strong>114 Research Comic Planets</strong> (outer ring) to see how key scientific ideas bridge every project in the lab!</p>
        </div>
      `;
      return;
    }

    if (node.type === "concept") {
      const connectedComics = data.comics.filter((c) => c.concepts.includes(node.rawId));
      const levelText = node[level] || node.ms;
      box.innerHTML = `
        <div class="inspector-card">
          <div class="inspector-header" style="border-left: 4px solid ${node.color}">
            <span class="inspector-badge" style="background:${node.color}">${node.emoji} ${node.shortLabel}</span>
            <span class="inspector-ngss">NGSS: ${node.ngss}</span>
            <h3>${node.label}</h3>
            <p>${levelText}</p>
          </div>
          <h4>Connected Research Comics (${connectedComics.length} Issues):</h4>
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
        const count = data.comics.filter((cm) => cm.concepts.includes(c.id)).length;
        return `
          <button class="constellation-pill" data-concept-id="${c.id}" style="--c-color:${c.color}">
            <span>${c.emoji} ${c.tag}</span>
            <span class="cp-count">${count}</span>
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
