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
   * Opens a clean, print-optimized 8-page Graphic Novel PDF Book window
   * (Cover + 6 Illustrated Story Spreads + Mission Debrief Classroom Guide)
   * and triggers window.print() so teachers/students can Save as PDF immediately.
   */
  function printGraphicNovelPDF(novel, level, catalog) {
    const lvl = level || "ms";
    const levelNames = {
      k5: "Elementary (Grades K–5 Explorer)",
      ms: "Middle School (Grades 6–8 Investigator)",
      hs: "High School & Educator (Grades 9–12)"
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

    const pagesHtml = novel.pages
      .map((p) => {
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
          <section class="print-sheet story-sheet family-${novel.art_style_family}">
            <header class="sheet-bar">
              <span><strong>VOL ${String(novel.volume).padStart(2, "0")} · ${esc(novel.title)}</strong> — ${esc(p.act)}</span>
              <span>Page ${p.page_number} of 6 · ${esc(p.beat_title)}</span>
            </header>
            <div class="sheet-art">
              ${artHtml}
              <div class="sheet-overlay">
                <div class="p-top">
                  <div class="p-cap">${esc(cap)}</div>
                  <div class="p-sfx">${esc(p.sfx.text)}</div>
                </div>
                <div class="p-bubbles">${bubbles}</div>
              </div>
            </div>
            <footer class="sheet-hud">
              <div><strong>🔬 ${esc(p.data_hud.headline)}</strong> · <code>${esc(p.data_hud.equation)}</code> · ${esc(p.data_hud.metric)}</div>
              <div class="hud-sub">${esc(p.data_hud.explanation)} <em>(${esc(p.data_hud.dataset)})</em></div>
            </footer>
          </section>
        `;
      })
      .join("");

    const reposList = novel.source_comic_ids
      .map((cid) => {
        const cm = comicsById[cid];
        if (!cm) return "";
        return `<li><strong>${esc(cm.title)}</strong> — ${esc(cm.metric_badge)} · <code>${esc(cm.url)}</code></li>`;
      })
      .join("");

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <base href="${esc(baseHref)}">
  <title>Vol. ${String(novel.volume).padStart(2, "0")} — ${esc(novel.title)} | CoSE Science Comics PDF</title>
  <style>
    @page { size: landscape; margin: 0.32in; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, sans-serif; color: #0f172a; background: #f8fafc; }
    .print-toolbar { position: sticky; top: 0; z-index: 20; display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; background: #0f172a; color: #fff; }
    .print-toolbar button { padding: 8px 16px; border: none; border-radius: 8px; background: #0284c7; color: #fff; font-weight: 800; cursor: pointer; font-size: 14px; }
    .print-sheet { width: 100%; max-width: 1080px; margin: 16px auto; background: #fff; border: 3px solid #09090b; border-radius: 10px; overflow: hidden; page-break-after: always; break-after: page; }
    .cover-sheet { display: grid; grid-template-columns: 360px 1fr; min-height: 540px; }
    .cover-art { background: #020617; border-right: 3px solid #09090b; }
    .cover-art img, .cover-art svg { width: 100%; height: 100%; object-fit: cover; display: block; }
    .cover-info { padding: 26px 28px; display: flex; flex-direction: column; justify-content: center; gap: 10px; }
    .vol-badge { display: inline-block; padding: 4px 10px; background: ${novel.theme_color}; color: #fff; font-weight: 900; border-radius: 6px; font-size: 12px; width: fit-content; }
    .cover-info h1 { margin: 0; font-size: 30px; line-height: 1.1; }
    .cover-info h2 { margin: 0; font-size: 18px; color: ${novel.theme_color}; }
    .cover-info ul { margin: 6px 0 0; padding-left: 18px; font-size: 13px; line-height: 1.45; }
    .sheet-bar { display: flex; justify-content: space-between; padding: 8px 14px; background: #0f172a; color: #f8fafc; font-size: 12px; }
    .sheet-art { position: relative; aspect-ratio: 1400 / 788; background: #020617; overflow: hidden; }
    .sheet-art img, .sheet-art svg { width: 100%; height: 100%; object-fit: cover; display: block; }
    .sheet-overlay { position: absolute; inset: 0; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; }
    .p-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
    .p-cap { max-width: 58%; background: #fef3c7; color: #09090b; border: 2px solid #09090b; padding: 7px 11px; font-size: 12px; font-weight: 800; line-height: 1.32; box-shadow: 3px 3px 0 #09090b; }
    .family-manga .p-cap { background: rgba(255,255,255,0.96); border-left: 6px solid ${novel.theme_color}; }
    .p-sfx { font-family: Impact, "Arial Black", sans-serif; font-style: italic; font-size: 22px; color: #fde047; -webkit-text-stroke: 1.2px #09090b; text-shadow: 2px 2px 0 #09090b; }
    .p-bubbles { display: flex; justify-content: space-between; gap: 12px; align-items: flex-end; }
    .p-bubble { max-width: 47%; background: rgba(255,255,255,0.96); border: 2px solid #09090b; border-radius: 14px; padding: 7px 11px; box-shadow: 3px 3px 0 #09090b; }
    .p-sp { display: inline-block; color: #fff; font-size: 10px; font-weight: 900; text-transform: uppercase; padding: 2px 7px; border-radius: 999px; margin-bottom: 3px; }
    .p-bubble p { margin: 0; font-size: 11.5px; font-weight: 700; line-height: 1.32; }
    .sheet-hud { padding: 8px 14px; background: #f1f5f9; border-top: 2px solid #09090b; font-size: 11.5px; line-height: 1.38; }
    .sheet-hud code { background: #e2e8f0; padding: 1px 5px; border-radius: 4px; font-weight: 700; }
    .hud-sub { color: #334155; margin-top: 2px; }
    .debrief-sheet { padding: 26px 30px; }
    .debrief-quote { font-size: 20px; font-weight: 800; border-left: 5px solid ${novel.theme_color}; padding: 8px 16px; background: #fefce8; margin: 12px 0; }
    .debrief-sheet ul { font-size: 12px; line-height: 1.5; padding-left: 18px; }
    @media print {
      body { background: #fff; }
      .print-toolbar { display: none !important; }
      .print-sheet { margin: 0; max-width: none; border-radius: 0; }
    }
  </style>
</head>
<body>
  <div class="print-toolbar">
    <span><strong>🖨️ Printable Graphic Novel Book</strong> — Vol. ${String(novel.volume).padStart(2, "0")}: ${esc(novel.title)} (${esc(levelNames[lvl])})</span>
    <button onclick="window.print()">🖨️ Print / Save as PDF</button>
  </div>

  <section class="print-sheet cover-sheet">
    <div class="cover-art">${coverHtml}</div>
    <div class="cover-info">
      <span class="vol-badge">THE COSE CHRONICLES · VOLUME ${String(novel.volume).padStart(2, "0")} OF 10</span>
      <h1>${esc(novel.title)}</h1>
      <h2>${esc(novel.subtitle)}</h2>
      <p style="margin:0; font-size:14px;"><em>${esc(novel.tagline)}</em></p>
      <p style="margin:0; font-size:12.5px; color:#334155;">
        <strong>Art Style:</strong> ${esc(novel.art_style_label)} · <strong>Worlds:</strong> ${esc(novel.worlds.join(", "))}<br>
        <strong>Perspectives:</strong> ${esc(novel.perspectives.join(", "))} · <strong>Reading Level:</strong> ${esc(levelNames[lvl])}<br>
        <strong>NGSS Standards:</strong> <code>${esc(novel.ngss)}</code>
      </p>
      <strong style="font-size:13px; margin-top:4px;">Key Research Discoveries in This Volume:</strong>
      <ul>${novel.big_finds.map((bf) => `<li>${esc(bf)}</li>`).join("")}</ul>
    </div>
  </section>

  ${pagesHtml}

  <section class="print-sheet debrief-sheet">
    <span class="vol-badge">MISSION DEBRIEF &amp; CLASSROOM GUIDE</span>
    <h2 style="margin:10px 0 4px;">Vol. ${String(novel.volume).padStart(2, "0")}: ${esc(novel.title)} — ${esc(novel.subtitle)}</h2>
    <blockquote class="debrief-quote">“${esc(novel.take_home)}”</blockquote>
    <p style="font-size:13.5px;"><strong>🧪 Hands-On Classroom &amp; Home Investigation:</strong> ${esc(novel.mission_activity)}</p>
    <h3 style="margin:14px 0 6px; font-size:14px;">🔗 Open-Source Research Repositories &amp; Live Web Simulators</h3>
    <ul>${reposList}</ul>
    <p style="margin-top:16px; font-size:11px; color:#475569;">
      Created by Dr. Richard J. Barker · Collaborative Science Environment (CoSE) · https://dr-richard-barker.github.io/Comics/
    </p>
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
