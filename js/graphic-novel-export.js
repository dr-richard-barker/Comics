/**
 * The CoSE Chronicles — Graphic Novel HD PNG & Printable PDF Book Exporter
 * Zero-dependency client-side exporter for the 10 Flagship Graphic Novels:
 *  1. Export Active Page as High-Resolution PNG Sheet (1400x960) with crisp
 *     Marvel/Manga narration box, SFX, speech balloons & Science Data HUD.
 *  2. Compile & Print / Save Full 8-Page Illustrated Graphic Novel PDF Book
 *     (Cover Plate + 6 Story Spreads + Mission Debrief Classroom Handout).
 *  3. Copy Shareable Deep Link & Markdown Embed Snippet.
 */
(function () {
  "use strict";

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

  function wrapLines(ctx, text, maxWidth) {
    const words = String(text || "").split(/\s+/);
    const lines = [];
    let current = "";
    for (const w of words) {
      const test = current ? current + " " + w : w;
      if (ctx.measureText(test).width > maxWidth && current) {
        lines.push(current);
        current = w;
      } else {
        current = test;
      }
    }
    if (current) lines.push(current);
    return lines;
  }

  function roundRectPath(ctx, x, y, w, h, r) {
    const rad = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + rad, y);
    ctx.arcTo(x + w, y, x + w, y + h, rad);
    ctx.arcTo(x + w, y + h, x, y + h, rad);
    ctx.arcTo(x, y + h, x, y, rad);
    ctx.arcTo(x, y, x + w, y, rad);
    ctx.closePath();
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
      img.src = src;
    });
  }

  async function loadPageArtworkImage(novel, page) {
    if (page.art && page.art.has_raster) {
      return await loadImage(page.art.path);
    }
    const svgStr = window.CoSEGraphicNovelArtStudio.renderPageSVG(novel, page);
    const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgStr);
    return await loadImage(url);
  }

  /**
   * Renders a publication-ready 1400x960 HD PNG of a single graphic novel page
   * (including artwork, lettering at active grade level, SFX, and Science Data HUD)
   * and triggers a browser file download.
   */
  async function exportPagePNG(novel, page, level, options) {
    const opts = Object.assign({ showLettering: true, showDataHud: true }, options || {});
    const W = 1400;
    const ART_H = 788;
    const TOP_H = 44;
    const HUD_H = opts.showDataHud ? 128 : 0;
    const H = TOP_H + ART_H + HUD_H;

    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");

    // 1. Top Masthead Strip
    ctx.fillStyle = "#060a12";
    ctx.fillRect(0, 0, W, TOP_H);
    ctx.fillStyle = novel.accent_color || "#fbbf24";
    ctx.font = "800 17px system-ui, -apple-system, sans-serif";
    ctx.fillText(
      `THE COSE CHRONICLES · VOL ${String(novel.volume).padStart(2, "0")}: ${novel.title}`,
      20,
      28
    );
    ctx.fillStyle = "#e2e8f0";
    ctx.textAlign = "right";
    ctx.font = "700 16px system-ui, -apple-system, sans-serif";
    ctx.fillText(
      `${page.act} · Page ${page.page_number}/6 · Level: ${String(level || "ms").toUpperCase()}`,
      W - 20,
      28
    );
    ctx.textAlign = "left";

    // 2. Full-bleed 16:9 Artwork Plate
    const artImg = await loadPageArtworkImage(novel, page);
    ctx.drawImage(artImg, 0, TOP_H, W, ART_H);

    // Ink frame around art
    ctx.strokeStyle = "#020617";
    ctx.lineWidth = 6;
    ctx.strokeRect(3, TOP_H + 3, W - 6, ART_H - 6);

    // 3. Comic / Manga Lettering Layer
    if (opts.showLettering) {
      const isManga = novel.art_style_family === "manga";

      // Top-Left Narration Caption Box
      const capText = page.caption[level] || page.caption.ms;
      ctx.font = "800 18px system-ui, -apple-system, sans-serif";
      const capMaxW = 660;
      const capLines = wrapLines(ctx, capText, capMaxW - 28);
      const capH = capLines.length * 24 + 22;
      const capX = 22;
      const capY = TOP_H + 20;

      ctx.fillStyle = "rgba(9, 9, 11, 0.9)";
      ctx.fillRect(capX + 5, capY + 5, capMaxW, capH);
      ctx.fillStyle = isManga ? "rgba(255,255,255,0.96)" : "#fef3c7";
      ctx.fillRect(capX, capY, capMaxW, capH);
      ctx.strokeStyle = "#09090b";
      ctx.lineWidth = 3;
      ctx.strokeRect(capX, capY, capMaxW, capH);
      if (isManga) {
        ctx.fillStyle = novel.theme_color || "#7c3aed";
        ctx.fillRect(capX, capY, 8, capH);
      }
      ctx.fillStyle = "#09090b";
      capLines.forEach((ln, i) => ctx.fillText(ln, capX + 16, capY + 26 + i * 24));

      // Top-Right Stylized SFX Stamp
      if (page.sfx && page.sfx.text) {
        ctx.save();
        ctx.translate(W - 42, TOP_H + 54);
        ctx.rotate(((page.sfx.rotate || -4) * Math.PI) / 180);
        ctx.font = "italic 900 34px Impact, 'Arial Black', sans-serif";
        ctx.textAlign = "right";
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#09090b";
        ctx.strokeText(page.sfx.text, 0, 0);
        ctx.fillStyle = isManga ? "#ffffff" : "#fde047";
        ctx.fillText(page.sfx.text, 0, 0);
        ctx.restore();
        ctx.textAlign = "left";
      }

      // Bottom Speech Balloons (Left & Right)
      const bubbles = page.bubbles || [];
      bubbles.slice(0, 2).forEach((b, idx) => {
        const bText = "“" + (b[level] || b.ms) + "”";
        const boxW = 610;
        ctx.font = "700 17px system-ui, -apple-system, sans-serif";
        const lines = wrapLines(ctx, bText, boxW - 32);
        const boxH = lines.length * 23 + 46;
        const bx = idx === 0 ? 22 : W - boxW - 22;
        const by = TOP_H + ART_H - boxH - 20;

        // Shadow
        ctx.fillStyle = "rgba(9, 9, 11, 0.85)";
        roundRectPath(ctx, bx + 5, by + 5, boxW, boxH, 18);
        ctx.fill();

        // Balloon body
        ctx.fillStyle = "rgba(255, 255, 255, 0.96)";
        roundRectPath(ctx, bx, by, boxW, boxH, 18);
        ctx.fill();
        ctx.strokeStyle = "#09090b";
        ctx.lineWidth = 3;
        ctx.stroke();

        // Speaker pill
        const spColor = SPEAKER_COLORS[b.speaker] || novel.theme_color || "#0284c7";
        ctx.font = "900 13px system-ui, -apple-system, sans-serif";
        const spLabel = String(b.speaker_name || "").toUpperCase();
        const pillW = ctx.measureText(spLabel).width + 20;
        ctx.fillStyle = spColor;
        roundRectPath(ctx, bx + 14, by + 10, pillW, 22, 11);
        ctx.fill();
        ctx.fillStyle = "#ffffff";
        ctx.fillText(spLabel, bx + 24, by + 25);

        // Dialogue text
        ctx.fillStyle = "#0f172a";
        ctx.font = "700 17px system-ui, -apple-system, sans-serif";
        lines.forEach((ln, li) => ctx.fillText(ln, bx + 16, by + 53 + li * 23));
      });
    }

    // 4. Bottom Science Data HUD Strip
    if (opts.showDataHud && page.data_hud) {
      const hy = TOP_H + ART_H;
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, hy, W, HUD_H);
      ctx.fillStyle = novel.theme_color || "#0284c7";
      ctx.fillRect(0, hy, W, 4);

      ctx.fillStyle = "#f8fafc";
      ctx.font = "800 18px system-ui, -apple-system, sans-serif";
      ctx.fillText(`SCIENCE DATA HUD — ${page.data_hud.headline}`, 22, hy + 32);

      ctx.fillStyle = "#38bdf8";
      ctx.font = "700 16px ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx.fillText(`${page.data_hud.equation}   |   ${page.data_hud.metric} (${page.data_hud.dataset})`, 22, hy + 60);

      ctx.fillStyle = "#cbd5e1";
      ctx.font = "500 15px system-ui, -apple-system, sans-serif";
      const hudLines = wrapLines(ctx, page.data_hud.explanation, W - 44);
      hudLines.slice(0, 2).forEach((ln, i) => ctx.fillText(ln, 22, hy + 88 + i * 21));
    }

    // Download PNG
    const dataUrl = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `CoSE_Vol${String(novel.volume).padStart(2, "0")}_Page${String(page.page_number).padStart(2, "0")}_${level || "ms"}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  /**
   * Opens a clean, print-optimized 8-page 8.5" x 11" Portrait 2-Tier Comic Book
   * (Page 1 Full Cover, Page 2 Briefing, Pages 3-5 Two Stacked Beats/Page,
   * Page 6 Science Lab, Page 7 Classroom & Repos, Page 8 Collectible Back Cover)
   * and triggers window.print() so teachers/students can Print or Save as PDF immediately.
   */
  function printGraphicNovelPDF(novel, level, catalog) {
    const lvl = level || "ms";
    const levelNames = {
      k5: "Elementary (Grades K–5 Explorer)",
      ms: "Middle School (Grades 6–8 Investigator)",
      hs: "High School & Educator (Grades 9–12 + Teacher Guide)"
    };
    const baseHref = window.location.href.split("#")[0];
    const comicsById = {};
    if (catalog && catalog.comics) {
      catalog.comics.forEach((c) => (comicsById[c.id] = c));
    }

    const coverHtml =
      novel.cover && novel.cover.has_raster
        ? `<img src="${esc(novel.cover.path)}" alt="${esc(novel.title)} cover">`
        : window.CoSEGraphicNovelArtStudio.renderCoverSVG(novel);

    const renderTier = (p) => {
      const artHtml =
        p.art && p.art.has_raster
          ? `<img src="${esc(p.art.path)}" alt="${esc(p.beat_title)}">`
          : window.CoSEGraphicNovelArtStudio.renderPageSVG(novel, p);
      const cap = p.caption[lvl] || p.caption.ms;
      const bubbles = p.bubbles
        .map((b) => {
          const col = SPEAKER_COLORS[b.speaker] || novel.theme_color;
          return `<div class="p-bubble"><span class="p-sp" style="background:${col}">${esc(b.speaker_name)}</span><p>“${esc(b[lvl] || b.ms)}”</p></div>`;
        })
        .join("");
      return `
        <div class="comic-tier">
          <div class="tier-art">
            ${artHtml}
            <div class="sheet-overlay">
              <div class="p-top">
                <div class="p-cap">${esc(cap)}</div>
                <div class="p-sfx">${esc(p.sfx.text)}</div>
              </div>
              <div class="p-bubbles">${bubbles}</div>
            </div>
          </div>
          <div class="tier-hud">
            <div class="hud-r1"><strong>BEAT ${p.page_number} DATA HUD — ${esc(p.data_hud.headline)}</strong><span>${esc(p.data_hud.dataset)}</span></div>
            <div class="hud-r2"><code>${esc(p.data_hud.equation)}</code> <span class="hud-metric">${esc(p.data_hud.metric)}</span></div>
            <div class="hud-r3">${esc(p.data_hud.explanation)}</div>
          </div>
        </div>
      `;
    };

    const actPairs = [
      [novel.pages[0], novel.pages[1], 3],
      [novel.pages[2], novel.pages[3], 4],
      [novel.pages[4], novel.pages[5], 5]
    ];

    const comicPagesHtml = actPairs
      .map(
        ([b1, b2, pgNum]) => `
        <section class="print-sheet comic-sheet family-${novel.art_style_family}">
          <header class="sheet-bar">
            <span><strong>VOL ${String(novel.volume).padStart(2, "0")} · ${esc(novel.title)}</strong> | ${esc(b1.act.toUpperCase())}</span>
            <span>Beats ${b1.page_number}–${b2.page_number} · ${esc(levelNames[lvl])}</span>
          </header>
          <div class="tiers-stack">
            ${renderTier(b1)}
            ${renderTier(b2)}
          </div>
          <footer class="folio-bar"><span>The CoSE Chronicles · Vol. ${String(novel.volume).padStart(2, "0")}</span><strong>0${pgNum}</strong></footer>
        </section>
      `
      )
      .join("");

    const eqCardsHtml = novel.pages
      .map(
        (p) => `
        <div class="eq-card">
          <strong>Beat ${p.page_number}: ${esc(p.data_hud.headline)}</strong>
          <code>${esc(p.data_hud.equation)}</code>
          <span>${esc(p.data_hud.metric)} · ${esc(p.data_hud.dataset)}</span>
        </div>
      `
      )
      .join("");

    const reposList = novel.source_comic_ids
      .map((cid) => {
        const cm = comicsById[cid];
        if (!cm) return "";
        return `<li><strong>#${String(cm.issue_number).padStart(2, "0")} · ${esc(cm.title)}</strong> — ${esc(cm.metric_badge)}<br><code>${esc(cm.url)}</code></li>`;
      })
      .join("");

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <base href="${esc(baseHref)}">
  <title>Vol. ${String(novel.volume).padStart(2, "0")} — ${esc(novel.title)} | 8.5×11 Print Comic</title>
  <style>
    @page { size: letter portrait; margin: 0.35in; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, sans-serif; color: #0f172a; background: #e2e8f0; }
    .print-toolbar { position: sticky; top: 0; z-index: 20; display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; background: #0f172a; color: #fff; }
    .print-toolbar button { padding: 8px 16px; border: none; border-radius: 8px; background: ${novel.theme_color}; color: #fff; font-weight: 800; cursor: pointer; font-size: 14px; }
    .print-sheet { width: 7.8in; min-height: 10.25in; margin: 16px auto; background: #fff; border: 2.5px solid #09090b; overflow: hidden; display: flex; flex-direction: column; page-break-after: always; break-after: page; }
    .cover-full { position: relative; background: #020617; flex: 1; display: flex; flex-direction: column; }
    .cover-full img, .cover-full svg { width: 100%; height: 10.22in; object-fit: cover; display: block; }
    .cover-top { position: absolute; inset: 0 0 auto 0; padding: 14px; background: linear-gradient(180deg, rgba(2,6,23,0.92), transparent); display: flex; gap: 12px; align-items: flex-start; color: #fff; }
    .c-box { background: ${novel.art_style_family === "manga" ? "#fff" : "#fef08a"}; color: #09090b; border: 2.5px solid #09090b; padding: 6px 10px; font-weight: 900; text-align: center; box-shadow: 3px 3px 0 #09090b; }
    .cover-top h1 { margin: 0; font-size: 26px; line-height: 1.08; text-shadow: 2px 2px 0 #020617; }
    .cover-top .sub { display: inline-block; margin-top: 5px; padding: 3px 9px; background: ${novel.theme_color}; border-radius: 4px; font-weight: 800; font-size: 12px; }
    .cover-bot { position: absolute; inset: auto 0 0 0; padding: 16px 14px 12px; background: linear-gradient(0deg, rgba(2,6,23,0.95), transparent); color: #fff; }
    .cover-bot p { margin: 0 0 6px; font-size: 13px; }
    .cover-bot .rib { font-size: 11px; font-weight: 800; color: ${novel.accent_color}; text-transform: uppercase; letter-spacing: 0.04em; }
    .sheet-bar { display: flex; justify-content: space-between; padding: 6px 12px; background: #060a12; color: #f8fafc; font-size: 11px; }
    .tiers-stack { flex: 1; display: flex; flex-direction: column; justify-content: space-between; gap: 10px; padding: 8px; }
    .comic-tier { border: 2.2px solid #09090b; display: flex; flex-direction: column; overflow: hidden; }
    .tier-art { position: relative; aspect-ratio: 1400 / 718; background: #020617; overflow: hidden; }
    .tier-art img, .tier-art svg { width: 100%; height: 100%; object-fit: cover; display: block; }
    .sheet-overlay { position: absolute; inset: 0; padding: 8px; display: flex; flex-direction: column; justify-content: space-between; }
    .p-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; }
    .p-cap { max-width: 62%; background: #fef3c7; color: #09090b; border: 2px solid #09090b; padding: 5px 8px; font-size: 10px; font-weight: 800; line-height: 1.28; box-shadow: 2.5px 2.5px 0 #09090b; }
    .family-manga .p-cap { background: rgba(255,255,255,0.96); border-left: 5px solid ${novel.theme_color}; }
    .p-sfx { font-family: Impact, "Arial Black", sans-serif; font-style: italic; font-size: 18px; color: #fde047; -webkit-text-stroke: 1.1px #09090b; text-shadow: 2px 2px 0 #09090b; }
    .p-bubbles { display: flex; justify-content: space-between; gap: 8px; align-items: flex-end; }
    .p-bubble { max-width: 48%; background: rgba(255,255,255,0.96); border: 1.8px solid #09090b; border-radius: 11px; padding: 5px 8px; box-shadow: 2.5px 2.5px 0 #09090b; }
    .p-sp { display: inline-block; color: #fff; font-size: 8.5px; font-weight: 900; text-transform: uppercase; padding: 1px 6px; border-radius: 999px; margin-bottom: 2px; }
    .p-bubble p { margin: 0; font-size: 9.8px; font-weight: 700; line-height: 1.26; }
    .tier-hud { background: #0f172a; color: #e2e8f0; border-top: 2.5px solid ${novel.theme_color}; padding: 5px 9px; font-size: 9.5px; line-height: 1.3; }
    .hud-r1 { display: flex; justify-content: space-between; color: #f8fafc; margin-bottom: 2px; }
    .hud-r2 code { background: #1e293b; color: #38bdf8; padding: 1px 5px; border-radius: 3px; font-weight: 700; }
    .hud-metric { color: #fde047; margin-left: 6px; }
    .hud-r3 { color: #cbd5e1; margin-top: 2px; }
    .folio-bar { display: flex; justify-content: space-between; padding: 4px 10px; font-size: 9.5px; color: #475569; border-top: 1px solid #cbd5e1; }
    .doc-body { padding: 20px 24px; flex: 1; display: flex; flex-direction: column; gap: 12px; }
    .eq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .eq-card { background: #0f172a; color: #e2e8f0; padding: 8px 10px; border-radius: 6px; border-left: 4px solid ${novel.theme_color}; font-size: 10px; display: flex; flex-direction: column; gap: 3px; }
    .eq-card code { color: #38bdf8; font-size: 9.5px; }
    .debrief-quote { font-size: 18px; font-weight: 800; border-left: 5px solid ${novel.theme_color}; padding: 10px 14px; background: #fefce8; margin: 4px 0; }
    .doc-body ul { margin: 0; padding-left: 18px; font-size: 11px; line-height: 1.48; }
    .back-cover { background: #070b14; color: #f8fafc; border-color: ${novel.theme_color}; }
    @media print {
      body { background: #fff; }
      .print-toolbar { display: none !important; }
      .print-sheet { margin: 0; width: 100%; min-height: 10.2in; }
    }
  </style>
</head>
<body>
  <div class="print-toolbar">
    <span><strong>🖨️ 8.5" × 11" Portrait Comic Book</strong> — Vol. ${String(novel.volume).padStart(2, "0")}: ${esc(novel.title)} (${esc(levelNames[lvl])})</span>
    <button onclick="window.print()">🖨️ Print / Save 8.5×11 PDF</button>
  </div>

  <!-- Page 1: Full-Page Cover -->
  <section class="print-sheet">
    <div class="cover-full">
      ${coverHtml}
      <div class="cover-top">
        <div class="c-box"><div style="font-size:10px">VOL</div><div style="font-size:24px">${String(novel.volume).padStart(2, "0")}</div></div>
        <div><h1>${esc(novel.title)}</h1><span class="sub">${esc(novel.subtitle)} · ${esc(levelNames[lvl])}</span></div>
      </div>
      <div class="cover-bot">
        <p><em>“${esc(novel.tagline)}”</em></p>
        <div class="rib">${esc(novel.art_style_label)} · ${esc(novel.worlds.join(" · "))} · ${esc(novel.perspectives.join(" + "))}</div>
      </div>
    </div>
  </section>

  <!-- Page 2: Mission Briefing -->
  <section class="print-sheet">
    <header class="sheet-bar"><span><strong>MISSION BRIEFING · VOL ${String(novel.volume).padStart(2, "0")}</strong></span><span>${esc(levelNames[lvl])}</span></header>
    <div class="doc-body">
      <h2 style="margin:0; color:${novel.theme_color}">${esc(novel.title)}: ${esc(novel.subtitle)}</h2>
      <p style="margin:0; font-size:12px;"><strong>NGSS Standards:</strong> <code>${esc(novel.ngss)}</code> · <strong>Worlds:</strong> ${esc(novel.worlds.join(", "))} · <strong>POV:</strong> ${esc(novel.perspectives.join(" + "))}</p>
      <h3 style="margin:6px 0 2px; font-size:13px;">Key Research Discoveries Synthesized</h3>
      <ul>${novel.big_finds.map((bf) => `<li>${esc(bf)}</li>`).join("")}</ul>
      <div style="background:#0f172a; color:#e2e8f0; padding:12px; border-radius:6px; font-size:11.5px;">
        <strong style="color:${novel.accent_color}">Art &amp; Directing Notes:</strong> ${esc(novel.art_style_notes)}
      </div>
    </div>
    <footer class="folio-bar"><strong>02</strong><span>The CoSE Chronicles · Vol. ${String(novel.volume).padStart(2, "0")}</span></footer>
  </section>

  <!-- Pages 3–5: 2-Tier Comic Action Pages (Acts I, II, III) -->
  ${comicPagesHtml}

  <!-- Page 6: Science Lab Equations & Director's Notes -->
  <section class="print-sheet">
    <header class="sheet-bar"><span><strong>SCIENCE LAB &amp; EQUATIONS · VOL ${String(novel.volume).padStart(2, "0")}</strong></span><span>${esc(levelNames[lvl])}</span></header>
    <div class="doc-body">
      <h3 style="margin:0; font-size:13px;">Complete Governing Equations &amp; Quantitative Benchmarks</h3>
      <div class="eq-grid">${eqCardsHtml}</div>
      <h3 style="margin:8px 0 2px; font-size:13px;">Director's Camera &amp; Data-Story Notes</h3>
      <ul>${novel.pages.map((p) => `<li><strong>Beat ${p.page_number} (${esc(p.beat_title)}):</strong> ${esc(p.director.data_story_note)}</li>`).join("")}</ul>
    </div>
    <footer class="folio-bar"><strong>06</strong><span>The CoSE Chronicles · Vol. ${String(novel.volume).padStart(2, "0")}</span></footer>
  </section>

  <!-- Page 7: Classroom Protocol & Open-Source Repos -->
  <section class="print-sheet">
    <header class="sheet-bar"><span><strong>CLASSROOM LAB &amp; OPEN-SOURCE TOOLS · VOL ${String(novel.volume).padStart(2, "0")}</strong></span><span>NGSS: ${esc(novel.ngss)}</span></header>
    <div class="doc-body">
      <blockquote class="debrief-quote">“${esc(novel.take_home)}”</blockquote>
      <p style="margin:0; font-size:12px;"><strong>🧪 Hands-On Classroom &amp; Home Investigation:</strong> ${esc(novel.mission_activity)}</p>
      <h3 style="margin:6px 0 2px; font-size:13px;">🔗 Linked Open-Source Repositories &amp; Live Browser Simulators</h3>
      <ul>${reposList}</ul>
    </div>
    <footer class="folio-bar"><span>The CoSE Chronicles · Vol. ${String(novel.volume).padStart(2, "0")}</span><strong>07</strong></footer>
  </section>

  <!-- Page 8: Collectible Back Cover -->
  <section class="print-sheet back-cover">
    <div class="doc-body" style="justify-content:center; text-align:center; gap:18px;">
      <div style="color:${novel.accent_color}; font-weight:900; font-size:12px; letter-spacing:0.08em;">THE COSE CHRONICLES · VOLUME ${String(novel.volume).padStart(2, "0")} OF 10</div>
      <h2 style="margin:0; font-size:24px; color:#fff;">“${esc(novel.take_home)}”</h2>
      <p style="margin:0; color:#cbd5e1; font-size:13px;">Explore all 10 Flagship Graphic Novels &amp; 114 Open-Source Space Biology Research Comics online:</p>
      <p style="margin:0; color:#38bdf8; font-weight:800; font-size:14px;">https://dr-richard-barker.github.io/Comics/</p>
      <p style="margin:0; color:#94a3b8; font-size:11px;">Created by Dr. Richard J. Barker · Collaborative Science Environment (CoSE) · NASA GeneLab Plant AWG Chair</p>
    </div>
    <footer class="folio-bar" style="border-color:#334155; color:#94a3b8;"><strong>08</strong><span>8.5" × 11" Print Edition</span></footer>
  </section>

  <script>
    window.addEventListener("load", () => {
      setTimeout(() => { try { window.print(); } catch (_) {} }, 450);
    });
  </script>
</body>
</html>`;

    const win = window.open("", "_blank");
    if (!win) {
      window.print();
      return;
    }
    win.document.open();
    win.document.write(html);
    win.document.close();
  }

  window.CoSEGraphicNovelExport = {
    exportPagePNG,
    printGraphicNovelPDF
  };
})();
