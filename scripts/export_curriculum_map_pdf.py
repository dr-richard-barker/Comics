#!/usr/bin/env python3
"""
Exports a publication-grade 1-page 8.5" x 11" US Letter Portrait
Teacher Curriculum Map & NGSS Alignment Matrix PDF for all 10 Flagship
Graphic Novels of The CoSE Chronicles.

Output:
  exports/pdf/CoSE_Chronicles_Teacher_NGSS_Curriculum_Map.pdf
"""
from __future__ import annotations

import json
from pathlib import Path
from xml.sax.saxutils import escape as xml_escape

from reportlab.lib.colors import Color
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"
OUT_PATH = ROOT / "exports" / "pdf" / "CoSE_Chronicles_Teacher_NGSS_Curriculum_Map.pdf"

PAGE_W, PAGE_H = letter  # 612 x 792 pt
MARGIN_X = 24.0
MARGIN_Y = 22.0
LIVE_W = PAGE_W - 2 * MARGIN_X  # 564 pt
LIVE_H = PAGE_H - 2 * MARGIN_Y  # 748 pt

PORTAL_URL = "https://dr-richard-barker.github.io/Comics/"


def hex_color(h: str, alpha: float = 1.0) -> Color:
    h = h.lstrip("#")
    return Color(int(h[0:2], 16) / 255.0, int(h[2:4], 16) / 255.0, int(h[4:6], 16) / 255.0, alpha=alpha)


def register_fonts() -> None:
    for name, path in [
        ("SansBold", "/System/Library/Fonts/Supplemental/Arial Bold.ttf"),
        ("SansBlack", "/System/Library/Fonts/Supplemental/Arial Black.ttf"),
        ("Uni", "/Library/Fonts/Arial Unicode.ttf"),
    ]:
        if Path(path).exists():
            pdfmetrics.registerFont(TTFont(name, path))


def draw_para_top(c: canvas.Canvas, text: str, style: ParagraphStyle, x: float, y_top: float, max_w: float, allow_br: bool = False) -> float:
    safe = xml_escape(text)
    if allow_br:
        safe = safe.replace("\n", "<br/>")
    p = Paragraph(safe, style)
    _, h = p.wrap(max_w, 300)
    p.drawOn(c, x, y_top - h)
    return h


def build_curriculum_map() -> Path:
    register_fonts()
    novels = json.loads((DATA_DIR / "graphic_novels.json").read_text(encoding="utf-8"))["novels"]
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)

    c = canvas.Canvas(str(OUT_PATH), pagesize=letter)
    c.setTitle("The CoSE Chronicles — 10-Volume Teacher NGSS Curriculum Map & Print Guide")
    c.setAuthor("Dr. Richard J. Barker — Collaborative Science Environment (CoSE)")
    c.setSubject("1-Page 8.5x11 Classroom Planning Matrix for 10 Space Biology Graphic Novels")

    # Crisp paper backdrop + outer editorial frame
    c.setFillColor(hex_color("#FAF8F2"))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setStrokeColor(hex_color("#0F172A"))
    c.setLineWidth(1.4)
    c.rect(MARGIN_X, MARGIN_Y, LIVE_W, LIVE_H, fill=0, stroke=1)

    y = PAGE_H - MARGIN_Y

    # 1. Masthead Header Banner (66 pt)
    hdr_h = 66.0
    c.setFillColor(hex_color("#0B1120"))
    c.rect(MARGIN_X, y - hdr_h, LIVE_W, hdr_h, fill=1, stroke=0)
    c.setFillColor(hex_color("#0284C7"))
    c.rect(MARGIN_X, y - hdr_h, LIVE_W, 4.0, fill=1, stroke=0)

    c.setFillColor(hex_color("#38BDF8"))
    c.setFont("SansBold", 8.0)
    c.drawString(MARGIN_X + 12, y - 14, "THE COSE CHRONICLES  ·  EDUCATOR QUICK-REFERENCE & NGSS CURRICULUM MAP")
    c.setFillColor(hex_color("#FDE047"))
    c.drawRightString(MARGIN_X + LIVE_W - 12, y - 14, "10 VOLUMES  ·  ISS · MOON · EARTH")

    c.setFillColor(hex_color("#FFFFFF"))
    c.setFont("SansBlack", 15.5)
    c.drawString(MARGIN_X + 12, y - 34, "Space Biology Graphic Novels — Classroom Planning Matrix")

    c.setFillColor(hex_color("#CBD5E1"))
    c.setFont("Uni", 8.2)
    c.drawString(
        MARGIN_X + 12,
        y - 50,
        "Synthesizing 114 Open-Source NASA OSDR & CoSE Research Projects  |  6 Marvel Styles + 4 Manga Data-Styles  |  Click Any Row to Launch Online",
    )
    y -= hdr_h + 9

    # 2. Three Differentiated Reading Editions Strip (46 pt)
    card_h = 46.0
    gap = 8.0
    cw = (LIVE_W - 24 - 2 * gap) / 3.0
    editions = [
        ("#16A34A", "GRADES K–5 EXPLORER", "Wonder-driven analogies, lively character dialogue & 5-minute hands-on science missions."),
        ("#0284C7", "GRADES 6–8 INVESTIGATOR", "Cause-and-effect systems biology, NGSS middle-school inquiry & interactive simulations."),
        ("#7C3AED", "GRADES 9–12 + TEACHER", "Governing equations, NASA OSDR datasets, quantitative mechanisms & seminar prompts."),
    ]
    ed_st = ParagraphStyle("ed", fontName="Uni", fontSize=7.0, leading=9.2, textColor=hex_color("#334155"))
    for idx, (col, title, desc) in enumerate(editions):
        cx = MARGIN_X + 12 + idx * (cw + gap)
        c.setFillColor(hex_color("#FFFFFF"))
        c.setStrokeColor(hex_color("#CBD5E1"))
        c.setLineWidth(0.85)
        c.roundRect(cx, y - card_h, cw, card_h, 5, fill=1, stroke=1)
        c.setFillColor(hex_color(col))
        c.rect(cx, y - card_h, 4.0, card_h, fill=1, stroke=0)
        c.setFont("SansBold", 7.6)
        c.drawString(cx + 9, y - 12.5, title)
        draw_para_top(c, desc, ed_st, cx + 9, y - 16.5, cw - 14)
    y -= card_h + 10

    # 3. Table Column Header Band (18 pt)
    c.setFillColor(hex_color("#0F172A"))
    c.rect(MARGIN_X + 12, y - 18, LIVE_W - 24, 18, fill=1, stroke=0)
    c.setFillColor(hex_color("#F8FAFC"))
    c.setFont("SansBold", 7.2)
    tx = MARGIN_X + 12
    c.drawString(tx + 6, y - 12, "VOL")
    c.drawString(tx + 38, y - 12, "GRAPHIC NOVEL · ART STYLE · WORLDS & POV")
    c.drawString(tx + 258, y - 12, "NGSS STANDARDS")
    c.drawString(tx + 356, y - 12, "KEY EQUATION & FEATURED OPEN-SOURCE TOOL")
    y -= 21

    # 4. Complete 10-Volume Curriculum Matrix Rows (10 × 49 pt = 490 pt)
    row_h = 48.0
    row_gap = 3.8
    title_st = ParagraphStyle("rt", fontName="SansBold", fontSize=7.8, leading=9.6, textColor=hex_color("#0F172A"))
    meta_st = ParagraphStyle("rm", fontName="Uni", fontSize=6.8, leading=8.8, textColor=hex_color("#475569"))
    ngss_st = ParagraphStyle("rn", fontName="SansBold", fontSize=6.9, leading=9.0, textColor=hex_color("#1E293B"))
    eq_st = ParagraphStyle("re", fontName="Uni", fontSize=6.9, leading=8.8, textColor=hex_color("#0369A1"))
    tool_st = ParagraphStyle("rl", fontName="Uni", fontSize=6.6, leading=8.6, textColor=hex_color("#334155"))

    for n in novels:
        theme = n["theme_color"]
        c.setFillColor(hex_color("#FFFFFF"))
        c.setStrokeColor(hex_color("#CBD5E1"))
        c.setLineWidth(0.75)
        c.roundRect(tx, y - row_h, LIVE_W - 24, row_h, 4.5, fill=1, stroke=1)
        c.setFillColor(hex_color(theme))
        c.rect(tx, y - row_h, 3.8, row_h, fill=1, stroke=0)

        # Vol pill
        c.setFillColor(hex_color(theme))
        c.roundRect(tx + 7, y - row_h + 15, 25, 18, 4, fill=1, stroke=0)
        c.setFillColor(hex_color("#FFFFFF"))
        c.setFont("SansBlack", 7.8)
        c.drawCentredString(tx + 19.5, y - row_h + 21, f"V{n['volume']:02d}")

        # Column 1: Title, Subtitle, Style, Worlds & POV
        fam = "Marvel" if n["art_style_family"] == "marvel" else "Manga"
        h_t = draw_para_top(c, f"{n['title']} — {n['subtitle']}", title_st, tx + 38, y - 4.5, 214)
        meta_line = f"{fam}: {n['art_style_label']}  |  {' · '.join(n['worlds'])}  |  {' + '.join(n['perspectives'])}"
        draw_para_top(c, meta_line, meta_st, tx + 38, y - 6.5 - h_t, 214)

        # Column 2: NGSS Standards + linked count
        h_n = draw_para_top(c, n["ngss"], ngss_st, tx + 258, y - 5.5, 92)
        draw_para_top(
            c,
            f"{len(n['source_comic_ids'])} linked repos · 6 beats",
            meta_st,
            tx + 258,
            y - 8.5 - h_n,
            92,
        )

        # Column 3: Featured Beat 1/Key Equation + Live Simulator
        p0 = n["pages"][0]["data_hud"]
        h_eq = draw_para_top(c, p0["equation"], eq_st, tx + 356, y - 4.5, LIVE_W - 24 - 362)
        draw_para_top(
            c,
            f"{p0['metric']}  ·  Tool: {p0['dataset']}",
            tool_st,
            tx + 356,
            y - 6.5 - h_eq,
            LIVE_W - 24 - 362,
        )

        # Clickable deep link straight into that Volume on GitHub Pages
        deep_url = f"{PORTAL_URL}#tab=novels&novel={n['id']}&page=1&level=hs"
        c.linkURL(deep_url, (tx, y - row_h, tx + LIVE_W - 24, y), relative=0)
        y -= row_h + row_gap

    # 5. Bottom Classroom Printing Guide & CoSE Portal Footer (68 pt)
    foot_h = 66.0
    foot_y = MARGIN_Y + 8.0
    c.setFillColor(hex_color("#0F172A"))
    c.roundRect(tx, foot_y, LIVE_W - 24, foot_h, 6, fill=1, stroke=0)

    # Left half: Printing Instructions
    c.setFillColor(hex_color("#FDE047"))
    c.setFont("SansBold", 7.8)
    c.drawString(tx + 10, foot_y + 52, "HOW TO PRINT IN YOUR CLASSROOM (8.5\" × 11\" US LETTER)")
    pr_st = ParagraphStyle("pr", fontName="Uni", fontSize=6.8, leading=9.0, textColor=hex_color("#E2E8F0"))
    draw_para_top(
        c,
        "• Full-Size Comic (exports/pdf/*.pdf): Print 8 portrait pages double-sided (Flip on Long Edge) at 100%; staple left gutter.\n"
        "• Folded Mini-Comic (exports/pdf/booklets/*_Booklet_11x8.5.pdf): Print 4 landscape pages double-sided (Flip on Short Edge), fold & staple!",
        pr_st,
        tx + 10,
        foot_y + 47,
        326,
        allow_br=True,
    )

    # Divider line
    c.setStrokeColor(hex_color("#334155"))
    c.setLineWidth(0.9)
    c.line(tx + 344, foot_y + 8, tx + 344, foot_y + foot_h - 8)

    # Right half: Portal URL & Credits
    c.setFillColor(hex_color("#38BDF8"))
    c.setFont("SansBold", 7.8)
    c.drawString(tx + 354, foot_y + 52, "INTERACTIVE WEB PORTAL & OPEN SCIENCE")
    draw_para_top(
        c,
        "Read online, switch K–5 / 6–8 / 9–12 live & launch 114 simulators:\nhttps://dr-richard-barker.github.io/Comics/\nDr. Richard J. Barker · CoSE · NASA GeneLab Plant AWG Chair",
        pr_st,
        tx + 354,
        foot_y + 47,
        LIVE_W - 24 - 364,
        allow_br=True,
    )
    c.linkURL(PORTAL_URL, (tx + 344, foot_y, tx + LIVE_W - 24, foot_y + foot_h), relative=0)

    c.save()
    return OUT_PATH


if __name__ == "__main__":
    out = build_curriculum_map()
    kb = out.stat().st_size / 1024.0
    print(f"[Curriculum Map PDF OK] -> {out.relative_to(ROOT)} (1 portrait 8.5x11 page, {kb:.1f} KB)")
