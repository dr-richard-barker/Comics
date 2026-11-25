#!/usr/bin/env python3
"""
Exports a publication-grade 1-page 8.5" x 11" US Letter Portrait
Classroom Wall Poster introducing all 6 CoSE Space Lab Cast Members and
all 16 Core Space-Biology Glossary Concepts (aligned to K-12 NGSS).

Output:
  exports/pdf/CoSE_Chronicles_Cast_And_Glossary_Poster.pdf
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
OUT_PATH = ROOT / "exports" / "pdf" / "CoSE_Chronicles_Cast_And_Glossary_Poster.pdf"

PAGE_W, PAGE_H = letter  # 612 x 792 pt
MARGIN_X = 22.0
MARGIN_Y = 20.0
LIVE_W = PAGE_W - 2 * MARGIN_X  # 568 pt
LIVE_H = PAGE_H - 2 * MARGIN_Y  # 752 pt

PORTAL_URL = "https://dr-richard-barker.github.io/Comics/"
CONSTELLATION_URL = "https://dr-richard-barker.github.io/Comics/#tab=constellation"

CAST_BADGES = {
    "doc-b": "DB",
    "sprout": "SP",
    "myco": "MY",
    "statolith": "ST",
    "pixel": "PX",
    "astra": "CA",
}


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


def draw_para_top(c: canvas.Canvas, text: str, style: ParagraphStyle, x: float, y_top: float, max_w: float) -> float:
    p = Paragraph(xml_escape(text), style)
    _, h = p.wrap(max_w, 300)
    p.drawOn(c, x, y_top - h)
    return h


def build_cast_glossary_poster() -> Path:
    register_fonts()
    concepts_data = json.loads((DATA_DIR / "concepts.json").read_text(encoding="utf-8"))
    cast = concepts_data["cast"]
    concepts = concepts_data["concepts"]

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT_PATH), pagesize=letter)
    c.setTitle("The CoSE Chronicles — Space Lab Cast & 16-Term Space Biology Glossary Wall Poster")
    c.setAuthor("Dr. Richard J. Barker — Collaborative Science Environment (CoSE)")
    c.setSubject("1-Page 8.5x11 Classroom Wall Poster: Cast Roster & NGSS Space Biology Glossary")

    # Crisp comic-archival paper + outer editorial border
    c.setFillColor(hex_color("#FAF8F2"))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setStrokeColor(hex_color("#0F172A"))
    c.setLineWidth(1.5)
    c.rect(MARGIN_X, MARGIN_Y, LIVE_W, LIVE_H, fill=0, stroke=1)

    y = PAGE_H - MARGIN_Y
    ix = MARGIN_X + 11.0
    iw = LIVE_W - 22.0

    # 1. Masthead Banner (60 pt)
    hdr_h = 60.0
    c.setFillColor(hex_color("#0B1120"))
    c.rect(MARGIN_X, y - hdr_h, LIVE_W, hdr_h, fill=1, stroke=0)
    c.setFillColor(hex_color("#F59E0B"))
    c.rect(MARGIN_X, y - hdr_h, LIVE_W, 3.8, fill=1, stroke=0)

    c.setFillColor(hex_color("#38BDF8"))
    c.setFont("SansBold", 7.8)
    c.drawString(ix, y - 13.5, "THE COSE CHRONICLES  ·  CLASSROOM WALL POSTER & K–12 FIELD GUIDE")
    c.setFillColor(hex_color("#FDE047"))
    c.drawRightString(ix + iw, y - 13.5, "6 HEROES  ·  16 SPACE BIOLOGY CONCEPTS")

    c.setFillColor(hex_color("#FFFFFF"))
    c.setFont("SansBlack", 14.8)
    c.drawString(ix, y - 32.5, "Meet the CoSE Space Lab Cast & Space Biology Glossary")

    c.setFillColor(hex_color("#CBD5E1"))
    c.setFont("Uni", 7.9)
    c.drawString(
        ix,
        y - 47.5,
        "Astronauts · Phytonauts · Mission Control Scientists  |  ISS · Moon · Earth  |  Companion Poster to the 10 Flagship Graphic Novels",
    )
    y -= hdr_h + 9

    # 2. Section 1: Starring Cast of the CoSE Space Lab (2 x 3 grid)
    c.setFillColor(hex_color("#0F172A"))
    c.setFont("SansBold", 9.0)
    c.drawString(ix, y - 9, "STARRING CAST OF THE COSE SPACE LAB")
    c.setFillColor(hex_color("#475569"))
    c.setFont("Uni", 7.2)
    c.drawRightString(ix + iw, y - 9, "Appearing across all 10 Flagship Graphic Novels & 114 Research Comics")
    c.setStrokeColor(hex_color("#0284C7"))
    c.setLineWidth(1.4)
    c.line(ix, y - 12.5, ix + iw, y - 12.5)
    y -= 18.5

    cast_gap = 8.0
    cast_w = (iw - cast_gap) / 2.0
    cast_h = 72.0
    cast_row_gap = 5.5

    name_st = ParagraphStyle("cn", fontName="SansBold", fontSize=8.0, leading=9.6, textColor=hex_color("#0F172A"))
    role_st = ParagraphStyle("cr", fontName="Uni", fontSize=6.8, leading=8.5, textColor=hex_color("#475569"))
    quote_st = ParagraphStyle("cq", fontName="Uni", fontSize=6.7, leading=8.4, textColor=hex_color("#0F172A"))
    bio_st = ParagraphStyle("cb", fontName="Uni", fontSize=6.5, leading=8.2, textColor=hex_color("#334155"))

    for i in range(0, len(cast), 2):
        for j in range(2):
            if i + j >= len(cast):
                continue
            ch = cast[i + j]
            cx = ix + j * (cast_w + cast_gap)
            col = ch["color"]

            # Card background
            c.setFillColor(hex_color("#FFFFFF"))
            c.setStrokeColor(hex_color("#CBD5E1"))
            c.setLineWidth(0.85)
            c.roundRect(cx, y - cast_h, cast_w, cast_h, 5.5, fill=1, stroke=1)
            c.setFillColor(hex_color(col))
            c.rect(cx, y - cast_h, 4.5, cast_h, fill=1, stroke=0)

            # Circular vector character badge
            badge_r = 14.0
            bx = cx + 23.0
            by = y - 20.0
            c.setFillColor(hex_color(col))
            c.circle(bx, by, badge_r, fill=1, stroke=0)
            c.setStrokeColor(hex_color("#0F172A"))
            c.setLineWidth(1.1)
            c.circle(bx, by, badge_r, fill=0, stroke=1)
            c.setFillColor(hex_color("#FFFFFF"))
            c.setFont("SansBlack", 9.6)
            c.drawCentredString(bx, by - 3.4, CAST_BADGES.get(ch["id"], ch["name"][:2].upper()))

            # Name + Role + Species
            tx = cx + 42.0
            tw = cast_w - 48.0
            h_nm = draw_para_top(c, ch["name"], name_st, tx, y - 5.0, tw)
            draw_para_top(c, f"{ch['role']} · {ch['species']}", role_st, tx, y - 6.0 - h_nm, tw)

            # Catchphrase + Bio across full card width below header
            h_q = draw_para_top(c, f"“{ch['catchphrase']}”", quote_st, cx + 10.0, y - 36.5, cast_w - 16.0)
            draw_para_top(c, ch["bio_ms"], bio_st, cx + 10.0, y - 38.0 - h_q, cast_w - 16.0)

        y -= cast_h + cast_row_gap

    y -= 4.0

    # 3. Section 2: 16 Core Space Biology Glossary Concepts (2 x 8 grid)
    c.setFillColor(hex_color("#0F172A"))
    c.setFont("SansBold", 9.0)
    c.drawString(ix, y - 9, "SPACE BIOLOGY FIELD GLOSSARY — 16 CORE CONNECTING CONCEPTS")
    c.setFillColor(hex_color("#475569"))
    c.setFont("Uni", 7.2)
    c.drawRightString(ix + iw, y - 9, "Nodes of the Interactive CoSE Concept Constellation")
    c.setStrokeColor(hex_color("#7C3AED"))
    c.setLineWidth(1.4)
    c.line(ix, y - 12.5, ix + iw, y - 12.5)
    y -= 18.0

    g_gap = 7.5
    g_w = (iw - g_gap) / 2.0
    g_h = 41.2
    g_row_gap = 3.6

    gt_st = ParagraphStyle("gt", fontName="SansBold", fontSize=6.6, leading=8.2, textColor=hex_color("#0F172A"))
    gd_st = ParagraphStyle("gd", fontName="Uni", fontSize=6.4, leading=8.1, textColor=hex_color("#334155"))

    for i in range(0, len(concepts), 2):
        for j in range(2):
            if i + j >= len(concepts):
                continue
            item = concepts[i + j]
            gx = ix + j * (g_w + g_gap)
            col = item["color"]

            c.setFillColor(hex_color("#FFFFFF"))
            c.setStrokeColor(hex_color("#CBD5E1"))
            c.setLineWidth(0.75)
            c.roundRect(gx, y - g_h, g_w, g_h, 4.5, fill=1, stroke=1)
            c.setFillColor(hex_color(col))
            c.rect(gx, y - g_h, 3.8, g_h, fill=1, stroke=0)

            # Tag pill + Concept Name + NGSS badge
            tag_txt = item["tag"]
            tag_w = pdfmetrics.stringWidth(tag_txt, "SansBold", 6.0) + 7.5
            c.setFillColor(hex_color(col))
            c.roundRect(gx + 7.5, y - 13.5, tag_w, 10.2, 3, fill=1, stroke=0)
            c.setFillColor(hex_color("#FFFFFF"))
            c.setFont("SansBold", 6.0)
            c.drawString(gx + 11.2, y - 10.5, tag_txt)

            # Right-aligned NGSS code
            c.setFillColor(hex_color("#64748B"))
            c.setFont("SansBold", 5.7)
            c.drawRightString(gx + g_w - 6, y - 10.5, item["ngss"])

            # Concept title + concise classroom definition (dynamically offset if title wraps)
            name_x = gx + 7.5 + tag_w + 4.5
            ngss_w = pdfmetrics.stringWidth(item["ngss"], "SansBold", 5.7) + 9.0
            avail_title_w = max(60.0, g_w - (name_x - gx) - ngss_w)
            h_gt = draw_para_top(c, item["name"], gt_st, name_x, y - 4.2, avail_title_w)
            def_y = y - max(16.0, 6.0 + h_gt)
            draw_para_top(c, item["ms"], gd_st, gx + 7.5, def_y, g_w - 13.0)

        y -= g_h + g_row_gap

    # 4. Bottom Interactive Constellation & Portal Footer (34 pt)
    foot_h = 34.0
    foot_y = MARGIN_Y + 7.0
    c.setFillColor(hex_color("#0B1120"))
    c.roundRect(ix, foot_y, iw, foot_h, 5.5, fill=1, stroke=0)

    c.setFillColor(hex_color("#38BDF8"))
    c.setFont("SansBold", 7.6)
    c.drawString(ix + 10, foot_y + 20.5, "EXPLORE THE INTERACTIVE CONCEPT CONSTELLATION & ALL 10 GRAPHIC NOVELS ONLINE")
    c.setFillColor(hex_color("#E2E8F0"))
    c.setFont("Uni", 7.1)
    c.drawString(
        ix + 10,
        foot_y + 8.5,
        "https://dr-richard-barker.github.io/Comics/  ·  Live simulators, K–12 switcher & free 8.5\"×11\" PDFs",
    )
    c.setFillColor(hex_color("#FDE047"))
    c.setFont("SansBold", 7.0)
    c.drawRightString(ix + iw - 10, foot_y + 20.5, "Dr. Richard J. Barker · CoSE")
    c.setFillColor(hex_color("#94A3B8"))
    c.setFont("Uni", 6.6)
    c.drawRightString(ix + iw - 10, foot_y + 8.5, "NASA GeneLab Plant AWG Chair")

    c.linkURL(CONSTELLATION_URL, (ix, foot_y, ix + iw, foot_y + foot_h), relative=0)

    c.save()
    return OUT_PATH


if __name__ == "__main__":
    out = build_cast_glossary_poster()
    kb = out.stat().st_size / 1024.0
    print(f"[Cast & Glossary Poster PDF OK] -> {out.relative_to(ROOT)} (1 portrait 8.5x11 page, {kb:.1f} KB)")
