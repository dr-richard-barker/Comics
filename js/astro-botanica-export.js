/**
 * ASTRO-BOTANICA: ZERO-G ROOTS — Classroom Manga HD PNG & Printable PDF Booklet Exporter (v3)
 * Zero-dependency client-side exporter for the 90-Volume Seinen Manga Series:
 *  1. Export Active Page as High-Resolution PNG Plate (1400x960) with clipped 4-panel art,
 *     narration box, Katakana SFX, speaker-attributed dialogue & NASA OSDR Science HUD.
 *  2. Compile & Print Complete Verified Classroom Tankōbon PDF Booklet:
 *     Cover Sheet + K-12 Educator Guide & Official OSDR Dossier + Story Spreads +
 *     Molecular Cast & Differential Expression Ledger + Printable Lab-Check Worksheet & Answer Key.
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
    ctx.fillText(
      `🌱 ASTRO-BOTANICA: ZERO-G ROOTS · VOL ${String(volume.volume).padStart(2, "0")} (${volume.accession}${volume.sample_count ? ` · n=${volume.sample_count}` : ""})`,
      22,
      28
    );

    ctx.fillStyle = "#f4f4f5";
    ctx.font = "700 14px 'JetBrains Mono', monospace";
    const pageText = `${page.act || "Act I"} · Page ${page.page_label}`;
    ctx.fillText(pageText, W - ctx.measureText(pageText).width - 22, 28);

    // 2. Render SVG Spread Art to Canvas
    const svgStr = window.AstroBotanicaArtStudio.renderMangaPageSpread(volume, page);
    const svgBlob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    try {
      const img = await loadImage(url);
      ctx.drawImage(img, 0, TOP_H, W, ART_H);
    } finally {
      URL.revokeObjectURL(url);
    }

    // 3. Optional Manga Lettering Layer
    if (opts.showLettering) {
      const capText = page.caption || "Orbital physiological recording in progress.";
      ctx.fillStyle = "rgba(255, 255, 255, 0.96)";
      ctx.strokeStyle = "#09090b";
      ctx.lineWidth = 2.5;
      roundRectPath(ctx, 35, TOP_H + 25, 480, 78, 6);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#09090b";
      ctx.font = "700 13px 'JetBrains Mono', monospace";
      const capLines = wrapLines(ctx, capText, 450);
      capLines.slice(0, 3).forEach((ln, i) => {
        ctx.fillText(ln, 48, TOP_H + 50 + i * 18);
      });

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
      ctx.fillText(
        `🔬 NASA OSDR SPACE BIOLOGY TELEMETRY · ${volume.accession} · ${(volume.study_domain || "Space Botany").toUpperCase()}`,
        22,
        hy + 30
      );

      ctx.fillStyle = "#94a3b8";
      ctx.font = "600 13px system-ui, -apple-system, sans-serif";
      ctx.fillText(
        `Organism: ${volume.organism_short || volume.organism.slice(0, 55)}   |   Hardware: ${volume.hardware_short || volume.hardware.slice(0, 40)}   |   Environment: ${volume.world}`,
        22,
        hy + 58
      );

      ctx.fillStyle = "#e2e8f0";
      ctx.font = "500 13px system-ui, -apple-system, sans-serif";
      const sumLines = wrapLines(ctx, page.summary || volume.publication, W - 44);
      sumLines.slice(0, 2).forEach((ln, i) => {
        ctx.fillText(ln, 22, hy + 86 + i * 18);
      });
    }

    const dataUrl = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `AstroBotanica_Vol${String(volume.volume).padStart(2, "0")}_${volume.accession}_Page${page.page_label}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  /**
   * Opens print-optimized Verified Classroom Tankōbon PDF Booklet & NGSS Worksheet
   */
  function printMangaPDF(volume) {
    const baseHref = window.location.href.split("#")[0];
    const coverVisual =
      volume.cover && volume.cover.has_raster
        ? `<img src="${esc(volume.cover.path)}" alt="${esc(volume.title)} cover" style="width:100%;height:100%;object-fit:cover;border-radius:6px;">`
        : window.AstroBotanicaArtStudio.renderMangaCover(volume);

    const spreadsHtml = (volume.pages || [])
      .slice(0, 6)
      .map((p) => {
        const spreadSvg = window.AstroBotanicaArtStudio.renderMangaPageSpread(volume, p);
        const firstDlg = (p.dialogue || [])[0];
        const dlgNote = firstDlg
          ? `<div class="hud-dlg"><strong>💬 ${esc(typeof firstDlg === "object" ? firstDlg.speaker : "Dialogue")}:</strong> “${esc(typeof firstDlg === "object" ? firstDlg.text : firstDlg)}”</div>`
          : "";
        return `
          <section class="manga-sheet story-sheet">
            <header class="sheet-bar">
              <span><strong>ASTRO-BOTANICA VOL ${String(volume.volume).padStart(2, "0")} (${esc(volume.accession)})</strong> — ${esc(p.act || "Act I")}</span>
              <span>Page ${esc(p.page_label)} of ${volume.pages.length}</span>
            </header>
            <div class="sheet-art">${spreadSvg}</div>
            <footer class="sheet-hud">
              <div><strong>🔬 NASA OSDR Telemetry:</strong> ${esc(volume.accession)} · <em>${esc(volume.hardware_short || volume.hardware)}</em> · ${esc(volume.world)}${volume.sample_count ? ` · n=${volume.sample_count}` : ""}</div>
              <div class="hud-desc"><strong>Narration:</strong> ${esc(p.caption || p.summary || "")}</div>
              ${dlgNote}
            </footer>
          </section>
        `;
      })
      .join("");

    const castHtml = (volume.molecular_cast || [])
      .slice(0, 6)
      .map(
        (c) => `
        <div class="cast-mini">
          <div class="cast-mini-top"><strong>${esc(c.symbol)}</strong> <span>${esc(c.role)}</span></div>
          <p>${esc(c.description)}</p>
        </div>
      `
      )
      .join("");

    const tablesHtml = (volume.debrief_tables || [])
      .map(
        (t) => `
        <table class="debrief-table">
          <thead><tr>${t.headers.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
          <tbody>${t.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      `
      )
      .join("");

    const quizHtml = (volume.quiz || [])
      .map(
        (q, qi) => `
        <div class="quiz-print-q">
          <p><strong>Q${qi + 1}.</strong> ${esc(q.question)}</p>
          <div class="quiz-print-opts">
            ${q.options.map((opt, oi) => `<span>☐ ${String.fromCharCode(65 + oi)}. ${esc(opt)}</span>`).join("")}
          </div>
        </div>
      `
      )
      .join("");

    const answerKeyHtml = (volume.quiz || [])
      .map(
        (q, qi) =>
          `<span><strong>Q${qi + 1}: ${String.fromCharCode(65 + q.answer_index)}</strong> (${esc(q.options[q.answer_index])}) — ${esc(q.explanation)}</span>`
      )
      .join("<br>");

    const edu = volume.edu || {};
    const factorsTxt = (volume.factors || []).join(" · ") || "Spaceflight vs. Ground Control";
    const assaysTxt = (volume.assays || []).join(" · ") || "Multi-Omics Profiling";

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <base href="${esc(baseHref)}">
  <title>ASTRO-BOTANICA Vol. ${String(volume.volume).padStart(2, "0")} (${esc(volume.accession)}) | Verified Classroom Manga Booklet</title>
  <style>
    @page { size: landscape; margin: 0.28in; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: system-ui, -apple-system, sans-serif; color: #09090b; background: #ffffff; }
    .print-toolbar { position: sticky; top: 0; z-index: 50; display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; background: #09090b; color: #ffffff; }
    .btn-print { background: #059669; color: #ffffff; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 800; cursor: pointer; }
    .manga-sheet { page-break-after: always; break-after: page; display: flex; flex-direction: column; height: calc(100vh - 0.56in); max-height: 750px; border: 2px solid #09090b; margin-bottom: 18px; }
    .cover-sheet { display: flex; align-items: center; justify-content: center; background: #09090b; color: #ffffff; padding: 28px; }
    .cover-inner { display: flex; gap: 30px; align-items: center; max-width: 940px; }
    .cover-art-wrap { width: 320px; aspect-ratio: 3/4; flex-shrink: 0; }
    .cover-art-wrap svg, .cover-art-wrap img { width: 100%; height: 100%; display: block; object-fit: cover; border-radius: 6px; }
    .verified-badge { display: inline-block; background: #059669; color: #fff; font-size: 0.72rem; font-weight: 900; padding: 3px 9px; border-radius: 999px; margin-bottom: 8px; letter-spacing: 0.05em; }
    .cover-info h1 { margin: 4px 0 10px; font-size: 1.9rem; color: #34d399; line-height: 1.2; }
    .cover-info p { margin: 5px 0; font-size: 0.88rem; color: #d4d4d8; line-height: 1.45; }
    .sheet-bar { display: flex; justify-content: space-between; padding: 6px 14px; background: #09090b; color: #ffffff; font-size: 0.8rem; font-weight: 800; }
    .sheet-art { flex: 1; display: flex; align-items: center; justify-content: center; background: #09090b; overflow: hidden; }
    .sheet-art svg { width: 100%; height: 100%; object-fit: contain; }
    .sheet-hud { padding: 7px 14px; background: #f4f4f5; border-top: 2px solid #09090b; font-size: 0.76rem; line-height: 1.4; }
    .hud-dlg { margin-top: 3px; color: #0369a1; }
    .guide-sheet, .debrief-sheet { padding: 18px 22px; overflow: hidden; gap: 10px; }
    .guide-sheet h2, .debrief-sheet h2 { margin: 0 0 6px; font-size: 1.15rem; color: #059669; border-bottom: 2px solid #09090b; padding-bottom: 4px; }
    .edu-cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
    .edu-box { border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 9px 11px; background: #f8fafc; font-size: 0.76rem; line-height: 1.4; }
    .edu-box h4 { margin: 0 0 4px; font-size: 0.8rem; color: #0f172a; }
    .osdr-abstract { background: #ecfdf5; border-left: 4px solid #059669; padding: 8px 12px; font-size: 0.76rem; line-height: 1.45; }
    .cast-grid-print { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
    .cast-mini { border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px 8px; font-size: 0.72rem; line-height: 1.35; }
    .cast-mini-top { display: flex; justify-content: space-between; margin-bottom: 3px; color: #0369a1; }
    .cast-mini p { margin: 0; color: #334155; }
    .debrief-table { width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 0.74rem; }
    .debrief-table th { background: #09090b; color: #ffffff; padding: 5px 8px; text-align: left; }
    .debrief-table td { padding: 5px 8px; border-bottom: 1px solid #e4e4e7; }
    .quiz-box { border: 1.5px solid #09090b; border-radius: 8px; padding: 10px 14px; background: #fffbeb; }
    .quiz-print-q { margin-bottom: 8px; font-size: 0.78rem; }
    .quiz-print-q p { margin: 0 0 4px; }
    .quiz-print-opts { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 14px; font-size: 0.74rem; }
    .answer-key { margin-top: 6px; padding-top: 6px; border-top: 1px dashed #94a3b8; font-size: 0.68rem; color: #475569; line-height: 1.4; }
    @media print {
      .print-toolbar { display: none !important; }
      .manga-sheet { height: 100vh; max-height: none; margin: 0; border: none; }
    }
  </style>
</head>
<body>
  <div class="print-toolbar">
    <div><strong>ASTRO-BOTANICA: ZERO-G ROOTS</strong> · Verified Classroom Manga Booklet — Vol. ${String(volume.volume).padStart(2, "0")} (${esc(volume.accession)})</div>
    <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
  </div>

  <!-- Sheet 1: Cover -->
  <section class="manga-sheet cover-sheet">
    <div class="cover-inner">
      <div class="cover-art-wrap">${coverVisual}</div>
      <div class="cover-info">
        <span class="verified-badge">${volume.osdr_verified === "live" ? "✅ LIVE NASA OSDR API VERIFIED" : "📚 INTERNATIONAL SPACEFLIGHT ARCHIVE"}</span><br>
        <span style="font-size:0.8rem; font-weight:900; letter-spacing:0.1em; color:#38bdf8;">VOL ${String(volume.volume).padStart(2, "0")} OF 90 · NASA OSDR ${esc(volume.accession)}${volume.sample_count ? ` · n=${volume.sample_count} SAMPLES` : ""}</span>
        <h1>${esc(volume.title)}</h1>
        <p><strong>Official NASA OSDR Study:</strong> ${esc(volume.official_title || volume.title)}</p>
        <p><strong>Target Organism:</strong> ${esc(volume.organism)}</p>
        <p><strong>Spaceflight Hardware &amp; Environment:</strong> ${esc(volume.hardware_short || volume.hardware)} (${esc(volume.world)})</p>
        <p><strong>Verified Publication:</strong> ${esc(volume.publication)}</p>
        ${volume.study_doi ? `<p><strong>NASA OSDR Study DOI:</strong> ${esc(volume.study_doi)} · ${esc(volume.osdr_url)}</p>` : `<p><strong>Open Data URL:</strong> ${esc(volume.osdr_url)}</p>`}
      </div>
    </div>
  </section>

  <!-- Sheet 2: K-12 Educator Guide, Official OSDR Abstract & Molecular Cast -->
  <section class="manga-sheet guide-sheet">
    <h2>🎓 K–12 Educator Guide, Official NASA OSDR Dossier &amp; Molecular Cast — Vol. ${String(volume.volume).padStart(2, "0")} (${esc(volume.accession)})</h2>
    <div class="edu-cols">
      <div class="edu-box">
        <h4>🌱 K–5 Explorer Guide</h4>
        <p><strong>Mystery:</strong> ${esc(edu.k5_mystery || "")}</p>
        <p><strong>Discovery:</strong> ${esc(edu.k5_discovery || "")}</p>
      </div>
      <div class="edu-box">
        <h4>🔬 6–8 Investigator Guide</h4>
        <p><strong>Experiment:</strong> ${esc(edu.ms_experiment || "")}</p>
        <p><strong>Mechanism:</strong> ${esc(edu.ms_mechanism || "")}</p>
      </div>
      <div class="edu-box">
        <h4>🚀 9–12 &amp; Researcher Protocol</h4>
        <p><strong>Factors:</strong> ${esc(factorsTxt)}</p>
        <p><strong>Assays:</strong> ${esc(assaysTxt)}</p>
      </div>
    </div>
    ${volume.official_description ? `<div class="osdr-abstract"><strong>Official NASA OSDR Study Abstract:</strong> ${esc(volume.official_description)}</div>` : ""}
    <div style="font-size:0.82rem; font-weight:800; color:#0f172a;">🧬 Grounded Molecular Cast &amp; Study Characters</div>
    <div class="cast-grid-print">${castHtml || "<p style='font-size:0.76rem'>Refer to full script Dramatis Personae.</p>"}</div>
  </section>

  <!-- Story Spread Sheets -->
  ${spreadsHtml}

  <!-- Final Sheet: Mission Debrief Ledger + Classroom Lab-Check Quiz Worksheet -->
  <section class="manga-sheet debrief-sheet">
    <h2>🌟 Mission Debrief Differential Expression Ledger &amp; Classroom Lab Check (${esc(volume.accession)})</h2>
    ${tablesHtml || "<p style='font-size:0.8rem'>Multi-omics dataset verified via NASA OSDR open repository records.</p>"}
    ${
      quizHtml
        ? `
      <div class="quiz-box">
        <div style="font-size:0.86rem; font-weight:900; margin-bottom:6px;">🧪 Student Lab-Check Worksheet (Name: ___________________________ Date: ____________)</div>
        ${quizHtml}
        <div class="answer-key"><strong>Teacher Answer Key:</strong><br>${answerKeyHtml}</div>
      </div>
    `
        : ""
    }
  </section>

  <script>
    window.addEventListener("load", () => {
      setTimeout(() => window.print(), 400);
    });
  </script>
</body>
</html>`;

    const win = window.open("", "_blank");
    if (!win) {
      alert("Pop-up blocked! Please allow pop-ups to open the Printable Classroom Manga Booklet.");
      return;
    }
    win.document.open();
    win.document.write(html);
    win.document.close();
  }

  window.AstroBotanicaExport = {
    exportPagePNG,
    printMangaPDF
  };
})();
