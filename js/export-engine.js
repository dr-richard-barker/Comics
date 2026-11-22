/**
 * CoSE Science Comics — Multi-Format Media Compiler, Viewer & Embed Suite
 * Generates and previews:
 *  1. Standalone Animated Vector SVG (.svg)
 *  2. High-Resolution 300-DPI Equivalent Raster Graphic Novel Sheet (.png)
 *  3. Multi-Frame Looping Animated GIF89a (.gif) via built-in LZW encoder
 *  4. Embedded Academic Graphic Novel PDF Plate (.pdf print/embed view)
 *  5. Copy-Paste GitHub README Markdown, HTML & Citation Embed Snippets
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

  function svgToDataUrl(svgString) {
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgString);
  }

  /**
   * Renders an SVG string onto a Canvas at (targetW, targetH) and resolves with the canvas
   */
  function renderSvgToCanvas(svgString, targetW, targetH) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = targetW;
        canvas.height = targetH;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, targetW, targetH);
        resolve(canvas);
      };
      img.onerror = (err) => reject(err);
      img.src = svgToDataUrl(svgString);
    });
  }

  /**
   * Pure-JS GIF89a Animated GIF Encoder (3-3-2 RGB 256-Color Global Palette + LZW)
   * Encodes an array of ImageData frames into a looping animated GIF Blob.
   */
  function encodeAnimatedGIF(frames, width, height, delayCentisecs) {
    const out = [];
    function writeByte(b) {
      out.push(b & 0xff);
    }
    function writeShort(s) {
      out.push(s & 0xff, (s >> 8) & 0xff);
    }
    function writeAscii(str) {
      for (let i = 0; i < str.length; i++) out.push(str.charCodeAt(i) & 0xff);
    }

    // 1. GIF89a Header & Logical Screen Descriptor
    writeAscii("GIF89a");
    writeShort(width);
    writeShort(height);
    writeByte(0xf7); // Global Color Table Flag = 1, Color Res = 7, Size = 256 (2^(7+1))
    writeByte(0); // Background color index
    writeByte(0); // Pixel aspect ratio

    // 2. 256-Color 3-3-2 RGB Global Color Table (8 levels R, 8 levels G, 4 levels B)
    for (let i = 0; i < 256; i++) {
      const r = Math.round(((i >> 5) & 0x07) * (255 / 7));
      const g = Math.round(((i >> 2) & 0x07) * (255 / 7));
      const b = Math.round((i & 0x03) * (255 / 3));
      writeByte(r);
      writeByte(g);
      writeByte(b);
    }

    // 3. NETSCAPE2.0 Infinite Loop Application Extension
    writeByte(0x21);
    writeByte(0xff);
    writeByte(11);
    writeAscii("NETSCAPE2.0");
    writeByte(3);
    writeByte(1);
    writeShort(0); // Loop forever
    writeByte(0);

    // Helper: LZW Variable-Length Code Compression for 8-bit indexed pixels
    function lzwEncode(indexedPixels) {
      const minCodeSize = 8;
      const clearCode = 256;
      const eoiCode = 257;
      const bytes = [];
      let bitBuf = 0;
      let bitCount = 0;

      function emitCode(code, size) {
        bitBuf |= code << bitCount;
        bitCount += size;
        while (bitCount >= 8) {
          bytes.push(bitBuf & 0xff);
          bitBuf >>= 8;
          bitCount -= 8;
        }
      }

      let codeSize = minCodeSize + 1;
      let nextCode = 258;
      let dict = new Map();

      emitCode(clearCode, codeSize);

      let prefix = indexedPixels[0] & 0xff;
      for (let i = 1; i < indexedPixels.length; i++) {
        const k = indexedPixels[i] & 0xff;
        const key = (prefix << 8) | k;
        const found = dict.get(key);
        if (found !== undefined) {
          prefix = found;
        } else {
          emitCode(prefix, codeSize);
          if (nextCode < 4096) {
            dict.set(key, nextCode++);
            if (nextCode > 1 << codeSize && codeSize < 12) {
              codeSize++;
            }
          } else {
            emitCode(clearCode, codeSize);
            dict.clear();
            codeSize = minCodeSize + 1;
            nextCode = 258;
          }
          prefix = k;
        }
      }

      emitCode(prefix, codeSize);
      emitCode(eoiCode, codeSize);
      if (bitCount > 0) {
        bytes.push(bitBuf & 0xff);
      }

      const subBlocks = [minCodeSize];
      for (let offset = 0; offset < bytes.length; offset += 255) {
        const chunk = bytes.slice(offset, offset + 255);
        subBlocks.push(chunk.length);
        for (let j = 0; j < chunk.length; j++) subBlocks.push(chunk[j]);
      }
      subBlocks.push(0); // Block terminator
      return subBlocks;
    }

    // 4. Encode Each Animation Frame
    frames.forEach((imgData) => {
      // Graphic Control Extension (Frame Delay)
      writeByte(0x21);
      writeByte(0xf9);
      writeByte(4);
      writeByte(0x04); // Do not dispose
      writeShort(delayCentisecs);
      writeByte(0);
      writeByte(0);

      // Image Descriptor
      writeByte(0x2c);
      writeShort(0);
      writeShort(0);
      writeShort(width);
      writeShort(height);
      writeByte(0); // No local color table

      // Quantize RGBA pixels to 3-3-2 index
      const rgba = imgData.data;
      const nPixels = width * height;
      const indexed = new Uint8Array(nPixels);
      for (let p = 0, q = 0; p < rgba.length; p += 4, q++) {
        const r3 = (rgba[p] >> 5) & 0x07;
        const g3 = (rgba[p + 1] >> 5) & 0x07;
        const b2 = (rgba[p + 2] >> 6) & 0x03;
        indexed[q] = (r3 << 5) | (g3 << 2) | b2;
      }

      const compressed = lzwEncode(indexed);
      for (let k = 0; k < compressed.length; k++) {
        writeByte(compressed[k]);
      }
    });

    // 5. GIF Trailer
    writeByte(0x3b);
    return new Blob([new Uint8Array(out)], { type: "image/gif" });
  }

  function triggerDownload(blobOrUrl, filename) {
    const a = document.createElement("a");
    if (typeof blobOrUrl === "string") {
      a.href = blobOrUrl;
    } else {
      a.href = URL.createObjectURL(blobOrUrl);
    }
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  /**
   * Opens the Interactive Media Preview & Export Modal for a Comic in format:
   * 'svg' | 'png' | 'gif' | 'pdf' | 'embed'
   */
  async function openExportModal(comic, level, format) {
    let modal = document.getElementById("cose-export-modal");
    if (!modal) {
      modal = document.createElement("dialog");
      modal.id = "cose-export-modal";
      modal.className = "export-modal-dialog";
      document.body.appendChild(modal);
    }

    const theme = window.CoSEArtEngine.getActiveTheme();
    const slug = `cose-comic-${String(comic.issue_number).padStart(2, "0")}-${comic.id}-${level}`;

    modal.innerHTML = `
      <div class="export-modal-shell">
        <header class="export-modal-header">
          <div>
            <span class="export-modal-badge" style="background:${comic.series_color}">
              Issue #${comic.issue_number} · ${esc(comic.art_style_name)} · ${theme.toUpperCase()} MODE
            </span>
            <h2>${comic.emoji} ${esc(comic.comic_title)}</h2>
          </div>
          <div class="export-format-tabs">
            <button class="ef-tab ${format === "svg" ? "active" : ""}" data-ef-switch="svg">🖼️ Embedded SVG</button>
            <button class="ef-tab ${format === "png" ? "active" : ""}" data-ef-switch="png">📸 HD PNG Sheet</button>
            <button class="ef-tab ${format === "gif" ? "active" : ""}" data-ef-switch="gif">🎞️ Animated GIF</button>
            <button class="ef-tab ${format === "pdf" ? "active" : ""}" data-ef-switch="pdf">📄 Academic PDF Plate</button>
            <button class="ef-tab ${format === "embed" ? "active" : ""}" data-ef-switch="embed">🔗 Embed &amp; Cite</button>
            <button class="ef-close-btn" id="close-export-modal-btn" aria-label="Close Preview">✕ Close</button>
          </div>
        </header>
        <div class="export-modal-body" id="export-modal-body">
          <div class="export-loading">⏳ Compiling hyper-detailed graphic novel plate...</div>
        </div>
      </div>
    `;

    if (!modal.open) {
      modal.showModal();
    }

    modal.querySelector("#close-export-modal-btn").addEventListener("click", () => modal.close());
    modal.querySelectorAll("[data-ef-switch]").forEach((btn) => {
      btn.addEventListener("click", () => {
        openExportModal(comic, level, btn.getAttribute("data-ef-switch"));
      });
    });

    const bodyEl = modal.querySelector("#export-modal-body");
    const fullSvgString = window.CoSEArtEngine.renderFullComicPageSVG(comic, level, {
      theme,
      phase: 0.25
    });

    if (format === "svg") {
      const svgBlob = new Blob([fullSvgString], { type: "image/svg+xml;charset=utf-8" });
      const svgUrl = URL.createObjectURL(svgBlob);
      bodyEl.innerHTML = `
        <div class="export-action-bar">
          <span><strong>Format:</strong> Self-Contained Animated Vector Graphic Novel Sheet (<code>1600 × 1960 px</code>, scalable to any resolution)</span>
          <div class="export-btn-group">
            <button class="btn-download-media" id="dl-svg-btn">⬇ Download ${slug}.svg</button>
            <a class="btn-open-newtab" href="${svgUrl}" target="_blank" rel="noopener">↗ Open Raw SVG in New Tab</a>
          </div>
        </div>
        <div class="export-preview-stage">
          ${fullSvgString}
        </div>
      `;
      bodyEl.querySelector("#dl-svg-btn").addEventListener("click", () => {
        triggerDownload(svgBlob, `${slug}.svg`);
      });
    } else if (format === "png") {
      try {
        const canvas = await renderSvgToCanvas(fullSvgString, 2000, 2450);
        const pngDataUrl = canvas.toDataURL("image/png");
        bodyEl.innerHTML = `
          <div class="export-action-bar">
            <span><strong>Format:</strong> High-Resolution Raster Graphic Novel Sheet (<code>2000 × 2450 px</code> PNG · 300-DPI Print Equivalent)</span>
            <div class="export-btn-group">
              <button class="btn-download-media" id="dl-png-btn">⬇ Download ${slug}.png</button>
            </div>
          </div>
          <div class="export-preview-stage">
            <img src="${pngDataUrl}" alt="${esc(comic.comic_title)} Graphic Novel PNG" class="export-preview-img"/>
          </div>
        `;
        bodyEl.querySelector("#dl-png-btn").addEventListener("click", () => {
          triggerDownload(pngDataUrl, `${slug}.png`);
        });
      } catch (e) {
        bodyEl.innerHTML = `<p>Could not rasterize PNG: ${esc(String(e))}</p>`;
      }
    } else if (format === "gif") {
      bodyEl.innerHTML = `
        <div class="export-loading">
          🎞️ Synthesizing 8-frame looping Animated GIF89a (rendering boundary streamlines, calcium waves &amp; telemetry curves)...
        </div>
      `;
      setTimeout(async () => {
        try {
          const gifW = 820;
          const gifH = 265;
          const frames = [];
          const heroPanel = comic.panels[3] || comic.panels[0]; // Panel 4 Eureka Discovery or Panel 1 Hero
          for (let f = 0; f < 8; f++) {
            const phase = f / 8;
            const frameSvg = window.CoSEArtEngine.renderPanelSVG(comic, heroPanel, {
              theme,
              phase
            });
            const c = await renderSvgToCanvas(frameSvg, gifW, gifH);
            const ctx = c.getContext("2d");
            // Overlay comic title & take-home strip on the animated GIF frame
            ctx.fillStyle = "rgba(7, 11, 20, 0.86)";
            ctx.fillRect(0, gifH - 34, gifW, 34);
            ctx.fillStyle = "#fde047";
            ctx.font = "bold 12px monospace";
            ctx.fillText(
              `CoSE #${comic.issue_number} ${comic.title}: "${comic.take_home.slice(0, 74)}..."`,
              12,
              gifH - 13
            );
            frames.push(ctx.getImageData(0, 0, gifW, gifH));
          }
          const gifBlob = encodeAnimatedGIF(frames, gifW, gifH, 16);
          const gifUrl = URL.createObjectURL(gifBlob);

          bodyEl.innerHTML = `
            <div class="export-action-bar">
              <span><strong>Format:</strong> Looping 8-Frame Animated GIF89a (<code>${gifW} × ${gifH} px</code> · Embeddable in GitHub READMEs &amp; Slides)</span>
              <div class="export-btn-group">
                <button class="btn-download-media" id="dl-gif-btn">⬇ Download ${slug}.gif</button>
              </div>
            </div>
            <div class="export-preview-stage">
              <img src="${gifUrl}" alt="Animated GIF preview of ${esc(comic.title)}" class="export-preview-img"/>
            </div>
          `;
          bodyEl.querySelector("#dl-gif-btn").addEventListener("click", () => {
            triggerDownload(gifBlob, `${slug}.gif`);
          });
        } catch (err) {
          bodyEl.innerHTML = `<p>GIF encoding error: ${esc(String(err))}</p>`;
        }
      }, 40);
    } else if (format === "pdf") {
      // Render High-Contrast Light-Mode Academic PDF Graphic Novel Plate
      const lightSvg = window.CoSEArtEngine.renderFullComicPageSVG(comic, level, {
        theme: "light",
        phase: 0.25
      });
      bodyEl.innerHTML = `
        <div class="export-action-bar">
          <span><strong>Format:</strong> Academic Graphic Novel Publication Plate (Archival Light-Ink PDF Layout with Figure Legends &amp; Equations)</span>
          <div class="export-btn-group">
            <button class="btn-download-media" id="print-pdf-plate-btn">🖨️ Save / Print Academic PDF Plate</button>
          </div>
        </div>
        <div class="export-preview-stage pdf-plate-sheet">
          ${lightSvg}
          <div class="pdf-academic-caption">
            <strong>Figure ${comic.issue_number} (${esc(comic.title)}):</strong> ${esc(comic.comic_title)}.
            <em>Governing Relation:</em> <code>${esc(comic.equation)}</code>.
            <em>Empirical Finding:</em> ${esc(comic.hs_detail || comic.discovery)}
            <em>Interactive Tool:</em> <a href="${esc(comic.url)}">${esc(comic.url)}</a> ·
            <em>Source Repository:</em> <a href="${esc(comic.repo_url)}">${esc(comic.repo_url)}</a>.
          </div>
        </div>
      `;
      bodyEl.querySelector("#print-pdf-plate-btn").addEventListener("click", () => {
        modal.close();
        window.print();
      });
    } else {
      // Embed & Cite Snippets
      const livePageUrl = `https://dr-richard-barker.github.io/Comics/#tab=reader&issue=${encodeURIComponent(comic.id)}&level=${level}`;
      const mdSnippet = `### 📚 Illustrated K–12 Research Summary: ${comic.comic_title}\n> **Key Take-Home:** *"${comic.take_home}"*\n>\n> 📖 **[Read the Interactive 5-Panel Graphic Novel & Concept Constellation →](${livePageUrl})**`;
      const iframeSnippet = `<iframe src="${livePageUrl}" width="100%" height="920" style="border:2px solid ${comic.series_color};border-radius:12px;" title="CoSE Science Comic: ${esc(comic.title)}" loading="lazy"></iframe>`;
      const bibSnippet = `@misc{barker2026_cose_comic_${comic.id.replace(/[^a-zA-Z0-9]/g, "_")},\n  author = {Barker, Richard J.},\n  title = {{${comic.comic_title}: Illustrated K-12 Systems Biology Graphic Novel for ${comic.title}}},\n  year = {2026},\n  publisher = {Collaborative Science Environment (CoSE)},\n  url = {${livePageUrl}}\n}`;

      bodyEl.innerHTML = `
        <div class="embed-snippets-grid">
          <div class="embed-box">
            <h4>🐙 GitHub README.md Markdown Snippet</h4>
            <p>Drop this into <code>${esc(comic.repo_url)}/blob/main/README.md</code> (alongside your downloaded <code>.svg</code>, <code>.png</code>, or <code>.gif</code>):</p>
            <textarea readonly class="embed-textarea" rows="5">${esc(mdSnippet)}</textarea>
          </div>
          <div class="embed-box">
            <h4>🌐 Interactive HTML &lt;iframe&gt; Embed</h4>
            <p>Embed the live multi-level comic reader inside any documentation page or LMS (Canvas / Google Sites):</p>
            <textarea readonly class="embed-textarea" rows="4">${esc(iframeSnippet)}</textarea>
          </div>
          <div class="embed-box">
            <h4>🎓 BibTeX Academic Citation</h4>
            <textarea readonly class="embed-textarea" rows="8">${esc(bibSnippet)}</textarea>
          </div>
        </div>
      `;
    }
  }

  window.CoSEExportEngine = {
    openExportModal,
    renderSvgToCanvas,
    encodeAnimatedGIF
  };
})();
