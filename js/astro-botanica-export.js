/**
 * ASTRO-BOTANICA: ZERO-G ROOTS — Graphic Novel HD PNG & Printable PDF Book Exporter
 * Zero-dependency client-side exporter for the 90-Volume Seinen Manga Series:
 *  1. Export Active Page as High-Resolution PNG Plate (1400x960) with authentic
 *     screentones, narration box, Katakana SFX, dialogue & NASA OSDR Science HUD.
 *  2. Compile & Print Full Illustrated Manga Tankōbon / Classroom PDF Booklet
 *     (Cover Plate + Story Spreads + Differential Expression Ledger + Dramatis Personae).
 */
(function () {
  "use strict";

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

  /**
   * Export high-resolution 1400x960 HD PNG plate for a manga spread
   */
  async function exportPagePNG(volume, page, options) {
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
    ctx.fillStyle = "#09090b";
    ctx.fillRect(0, 0, W, TOP_H);

    ctx.fillStyle = "#10b981";
    ctx.font = "800 16px system-ui, -apple-system, sans-serif";
    ctx.fillText(`🌱 ASTRO-BOTANICA: ZERO-G ROOTS · VOL ${String(volume.volume).padStart(2, "0")} (${volume.accession})`, 22, 28);

    ctx.fillStyle = "#f4f4f5";
    ctx.font = "700 14px 'JetBrains Mono', monospace";
    const pageText = `${page.act || "Act I"} · Page ${page.page_label}`;
    ctx.fillText(pageText, W - ctx.measureText(pageText).width - 22, 28);

    // 2. Render Artwork SVG onto Canvas
    const svgStr = window.AstroBotanicaArtStudio.renderMangaPageSpread(volume, page);
    const svgUrl = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgStr);
    const artImg = await loadImage(svgUrl);
    ctx.drawImage(artImg, 0, TOP_H, W, ART_H);

    // 3. Render Lettering Layer (Narration & SFX)
    if (opts.showLettering) {
      // Narration Box
      const capText = page.caption || "Orbital physiological recording in progress.";
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.strokeStyle = "#09090b";
      ctx.lineWidth = 2.5;
      roundRectPath(ctx, 35, TOP_H + 25, 480, 75, 6);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#09090b";
      ctx.font = "700 13px 'JetBrains Mono', monospace";
      const capLines = wrapLines(ctx, capText, 450);
      capLines.slice(0, 3).forEach((ln, i) => {
        ctx.fillText(ln, 48, TOP_H + 50 + i * 18);
      });

      // SFX Stamp
      if (page.sfx) {
        const sfxShort = String(page.sfx).split("(")[0].trim();
        ctx.save();
        ctx.translate(W - 260, TOP_H + 82);
        ctx.rotate((-6 * Math.PI) / 180);
        ctx.font = "900 34px 'Impact', 'Arial Black', sans-serif";
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 4;
        ctx.strokeText(sfxShort, 0, 0);
        ctx.fillStyle = "#e11d48";
        ctx.fillText(sfxShort, 0, 0);
        ctx.restore();
      }

      // Speech Balloon inside Panel 4 (bottom-right, clear of Panel 3 telemetry)
      const firstDlg = (page.dialogue || [])[0];
      if (firstDlg) {
        const spk = typeof firstDlg === "object" ? firstDlg.speaker || "Mission Scientist" : "Mission Scientist";
        const dTxt = typeof firstDlg === "object" ? firstDlg.text : String(firstDlg);
        const bx = W - 540;
        const by = TOP_H + ART_H - 132;
        ctx.fillStyle = "#ffffff";
        ctx.strokeStyle = "#09090b";
        ctx.lineWidth = 2.5;
        roundRectPath(ctx, bx, by, 505, 102, 14);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#09090b";
        roundRectPath(ctx, bx + 14, by + 10, Math.min(260, spk.length * 8 + 20), 20, 4);
        ctx.fill();
        ctx.fillStyle = "#38bdf8";
        ctx.font = "800 11px 'JetBrains Mono', monospace";
        ctx.fillText(spk.toUpperCase().slice(0, 28), bx + 22, by + 24);

        ctx.fillStyle = "#09090b";
        ctx.font = "700 13px system-ui, -apple-system, sans-serif";
        const dlgLines = wrapLines(ctx, `“${dTxt}”`, 475);
        dlgLines.slice(0, 3).forEach((ln, i) => {
          ctx.fillText(ln, bx + 14, by + 48 + i * 17);
        });
      }
    }

    // 4. Bottom Science Data HUD Strip
    if (opts.showDataHud) {
      const hy = TOP_H + ART_H;
      ctx.fillStyle = "#0c1322";
      ctx.fillRect(0, hy, W, HUD_H);
      ctx.fillStyle = "#059669";
      ctx.fillRect(0, hy, W, 4);

      ctx.fillStyle = "#38bdf8";
      ctx.font = "800 16px system-ui, -apple-system, sans-serif";
      ctx.fillText(`🔬 NASA OSDR SPACE BIOLOGY TELEMETRY · ${volume.accession} · ${(volume.study_domain || "Space Botany").toUpperCase()}`, 22, hy + 30);

      ctx.fillStyle = "#94a3b8";
      ctx.font = "600 13px system-ui, -apple-system, sans-serif";
      ctx.fillText(`Organism: ${volume.organism_short || volume.organism.slice(0, 55)}   |   Hardware: ${volume.hardware_short || volume.hardware.slice(0, 40)}   |   Environment: ${volume.world}`, 22, hy + 58);

      ctx.fillStyle = "#e2e8f0";
      ctx.font = "500 13px system-ui, -apple-system, sans-serif";
      const sumLines = wrapLines(ctx, page.summary || volume.publication, W - 44);
      sumLines.slice(0, 2).forEach((ln, i) => {
        ctx.fillText(ln, 22, hy + 86 + i * 18);
      });
    }

    // Trigger Download
    const dataUrl = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `AstroBotanica_Vol${String(volume.volume).padStart(2, "0")}_${volume.accession}_Page${page.page_label}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  /**
   * Opens print-optimized Manga Booklet window and invokes window.print()
   */
  function printMangaPDF(volume) {
    const baseHref = window.location.href.split("#")[0];
    const coverVisual = (volume.cover && volume.cover.has_raster)
      ? `<img src="${esc(volume.cover.path)}" alt="${esc(volume.title)} cover" style="width:100%;height:100%;object-fit:cover;border-radius:6px;">`
      : window.AstroBotanicaArtStudio.renderMangaCover(volume);

    const spreadsHtml = (volume.pages || [])
      .slice(0, 6)
      .map((p) => {
        const spreadSvg = window.AstroBotanicaArtStudio.renderMangaPageSpread(volume, p);
        return `
          <section class="manga-sheet story-sheet">
            <header class="sheet-bar">
              <span><strong>ASTRO-BOTANICA VOL ${String(volume.volume).padStart(2, "0")} (${esc(volume.accession)})</strong> — ${esc(p.act || "Act I")}</span>
              <span>Page ${esc(p.page_label)} of ${volume.pages.length}</span>
            </header>
            <div class="sheet-art">
              ${spreadSvg}
            </div>
            <footer class="sheet-hud">
              <div><strong>🔬 NASA OSDR Telemetry:</strong> ${esc(volume.accession)} · <em>${esc(volume.hardware)}</em> · ${esc(volume.world)}</div>
              <div class="hud-desc">${esc(p.summary || volume.publication)}</div>
            </footer>
          </section>
        `;
      })
      .join("");

    const tablesHtml = (volume.debrief_tables || [])
      .map(
        (t) => `
        <table class="debrief-table">
          <thead>
            <tr>${t.headers.map((h) => `<th>${esc(h)}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${t.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      `
      )
      .join("");

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <base href="${esc(baseHref)}">
  <title>ASTRO-BOTANICA Vol. ${String(volume.volume).padStart(2, "0")} (${esc(volume.accession)}) | Classroom Manga Book</title>
  <style>
    @page { size: landscape; margin: 0.28in; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: system-ui, -apple-system, sans-serif; color: #09090b; background: #ffffff; }
    .print-toolbar { position: sticky; top: 0; z-index: 50; display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; background: #09090b; color: #ffffff; }
    .btn-print { background: #059669; color: #ffffff; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 800; cursor: pointer; }
    .manga-sheet { page-break-after: always; break-after: page; display: flex; flex-direction: column; height: calc(100vh - 0.56in); max-height: 750px; border: 2px solid #09090b; margin-bottom: 20px; }
    .cover-sheet { display: flex; align-items: center; justify-content: center; background: #09090b; color: #ffffff; padding: 30px; }
    .cover-inner { display: flex; gap: 30px; align-items: center; max-width: 900px; }
    .cover-art-wrap { width: 340px; aspect-ratio: 3/4; }
    .cover-art-wrap svg, .cover-art-wrap img { width: 100%; height: 100%; display: block; object-fit: cover; }
    .cover-info h1 { margin: 0 0 10px; font-size: 2rem; color: #34d399; }
    .cover-info p { margin: 6px 0; font-size: 0.95rem; color: #d4d4d8; line-height: 1.5; }
    .sheet-bar { display: flex; justify-content: space-between; padding: 6px 14px; background: #09090b; color: #ffffff; font-size: 0.8rem; font-weight: 800; }
    .sheet-art { flex: 1; display: flex; align-items: center; justify-content: center; background: #09090b; overflow: hidden; }
    .sheet-art svg { width: 100%; height: 100%; object-fit: contain; }
    .sheet-hud { padding: 8px 14px; background: #f4f4f5; border-top: 2px solid #09090b; font-size: 0.78rem; line-height: 1.4; }
    .debrief-sheet { padding: 24px; overflow-y: auto; }
    .debrief-sheet h2 { margin: 0 0 12px; color: #059669; }
    .debrief-table { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 0.8rem; }
    .debrief-table th { background: #09090b; color: #ffffff; padding: 6px 10px; text-align: left; }
    .debrief-table td { padding: 6px 10px; border-bottom: 1px solid #e4e4e7; }
    @media print {
      .print-toolbar { display: none !important; }
      .manga-sheet { height: 100vh; max-height: none; margin: 0; border: none; }
    }
  </style>
</head>
<body>
  <div class="print-toolbar">
    <div><strong>ASTRO-BOTANICA: ZERO-G ROOTS</strong> · Printable Manga Booklet — Vol. ${String(volume.volume).padStart(2, "0")} (${esc(volume.accession)})</div>
    <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
  </div>

  <!-- Sheet 1: Cover -->
  <section class="manga-sheet cover-sheet">
    <div class="cover-inner">
      <div class="cover-art-wrap">${coverVisual}</div>
      <div class="cover-info">
        <span style="font-size:0.8rem; font-weight:900; letter-spacing:0.1em; color:#38bdf8;">VOL ${String(volume.volume).padStart(2, "0")} · NASA OSDR ${esc(volume.accession)}</span>
        <h1>${esc(volume.title)}</h1>
        <p><strong>Target Organism:</strong> ${esc(volume.organism)}</p>
        <p><strong>Spaceflight Hardware:</strong> ${esc(volume.hardware)}</p>
        <p><strong>Mission Environment:</strong> ${esc(volume.world)}</p>
        <p><strong>NASA Reference Publication:</strong> ${esc(volume.publication)}</p>
        <p style="margin-top:16px; font-size:0.85rem; color:#a1a1aa;">Ground-truth multi-omics educational manga produced from NASA Open Science Data Repository records.</p>
      </div>
    </div>
  </section>

  <!-- Story Spread Sheets -->
  ${spreadsHtml}

  <!-- Final Sheet: Scientific Debrief & Multi-Omics Ledger -->
  <section class="manga-sheet debrief-sheet">
    <h2>🌟 Mission Debrief: Differential Expression Ledger &amp; Scientific Reference</h2>
    <p style="font-size:0.85rem; color:#52525b; margin-bottom:16px;">
      Authentic NASA Open Science Data Repository (${esc(volume.accession)}) transcriptomic, metabolomic, and physiological findings:
    </p>
    ${tablesHtml || "<p>Direct multi-sample assay data cataloged on NASA OSDR.</p>"}
    <div style="margin-top:20px; padding:12px 16px; background:#ecfdf5; border-left:4px solid #059669; border-radius:4px;">
      <strong>NASA OSDR Study Record:</strong> <a href="${esc(volume.osdr_url)}">${esc(volume.osdr_url)}</a><br>
      <strong>Citation:</strong> ${esc(volume.publication)}
    </div>
  </section>

  <script>
    window.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => window.print(), 600);
    });
  </script>
</body>
</html>`;

    const printWin = window.open("", "_blank");
    if (printWin) {
      printWin.document.open();
      printWin.document.write(html);
      printWin.document.close();
    }
  }

  window.AstroBotanicaExport = {
    exportPagePNG,
    printMangaPDF
  };
})();
