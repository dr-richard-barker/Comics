#!/usr/bin/env python3
"""
Press-Ready Print PDF Exporter for The CoSE Chronicles (10 Flagship Graphic Novels).

Generates publication-grade, 8-page US Letter Landscape (11x8.5 in) printable PDFs
with true selectable Unicode vector typography (zero missing math glyphs), crisp
Marvel/Manga comic lettering, Science Data HUD telemetry bars, and a dedicated
Grades 9-12 + Teacher Guide & Classroom Investigation page.

Usage:
  python3 scripts/export_novels_pdf.py --level hs --only-complete
  python3 scripts/export_novels_pdf.py --level hs --all
"""
from __future__ import annotations

import argparse
import io
import json
import re
import sys
from pathlib import Path
from xml.sax.saxutils import escape as xml_escape

from PIL import Image
from reportlab.lib import colors
from reportlab.lib.pagesizes import landscape, letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"
OUT_DIR = ROOT / "exports" / "pdf"

PAGE_W, PAGE_H = landscape(letter)  # 792 x 612 pt (11 x 8.5 in)
MARGIN = 24.0
CONTENT_W = PAGE_W - 2 * MARGIN     # 744 pt
CONTENT_H = PAGE_H - 2 * MARGIN     # 564 pt

SPEAKER_COLORS = {
    "doc-b": "#0f7f9f",
    "sprout": "#15803d",
    "myco": "#d97706",
    "statolith": "#7c3aed",
    "pixel": "#0284c7",
    "astra": "#dc2626",
}

LEVEL_META = {
    "k5": ("K-5", "Elementary (Grades K-5 Explorer)"),
    "ms": ("6-8", "Middle School (Grades 6-8 Investigator)"),
    "hs": ("9-12_Teacher", "High School & Educator (Grades 9-12 + Teacher Guide)"),
}


def register_fonts() -> None:
    font_map = {
        "Uni": "/Library/Fonts/Arial Unicode.ttf",
        "SansBold": "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "SansBlack": "/System/Library/Fonts/Supplemental/Arial Black.ttf",
        "Impact": "/System/Library/Fonts/Supplemental/Impact.ttf",
    }
    for name, path in font_map.items():
        if Path(path).exists():
            pdfmetrics.registerFont(TTFont(name, path))
        else:
            raise FileNotFoundError(f"Required system font not found: {path}")


def hex_color(h: str, alpha: float = 1.0) -> colors.Color:
    c = colors.HexColor(h)
    return colors.Color(c.red, c.green, c.blue, alpha=alpha)


def load_webp_reader(rel_path: str) -> ImageReader:
    p = ROOT / rel_path
    with Image.open(p) as im:
        rgb = im.convert("RGB")
        buf = io.BytesIO()
        rgb.save(buf, format="JPEG", quality=93, subsampling=0)
        buf.seek(0)
        return ImageReader(buf)


def safe_filename_slug(novel: dict, level: str) -> str:
    lvl_tag = LEVEL_META[level][0]
    raw = novel["title"].replace("'", "")
    words = re.findall(r"[A-Za-z0-9]+", raw)
    formatted = []
    for w in words:
        if w.upper() in ("III", "II", "IV", "ISS", "CFD", "DNA", "RNA", "G"):
            formatted.append(w.upper())
        else:
            formatted.append(w.capitalize())
    clean = "_".join(formatted)
    return f"CoSE_Chronicles_Vol{novel['volume']:02d}_{clean}_{lvl_tag}.pdf"


def draw_para_in_box(
    c: canvas.Canvas,
    text: str,
    style: ParagraphStyle,
    x: float,
    y_top: float,
    max_w: float,
) -> float:
    """Draws a Paragraph whose top edge is at y_top; returns rendered height."""
    p = Paragraph(xml_escape(text), style)
    w, h = p.wrap(max_w, 400)
    p.drawOn(c, x, y_top - h)
    return h


def measure_para(text: str, style: ParagraphStyle, max_w: float) -> tuple[Paragraph, float, float]:
    p = Paragraph(xml_escape(text), style)
    w, h = p.wrap(max_w, 400)
    return p, w, h


def draw_cover_page(c: canvas.Canvas, novel: dict, level: str) -> None:
    theme = novel["theme_color"]
    accent = novel["accent_color"]
    is_manga = novel["art_style_family"] == "manga"
    lvl_label = LEVEL_META[level][1]

    # Archival warm paper page background
    c.setFillColor(hex_color("#F8F6F0"))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    # Outer print border frame
    c.setStrokeColor(hex_color("#0F172A"))
    c.setLineWidth(1.5)
    c.rect(MARGIN - 4, MARGIN - 4, CONTENT_W + 8, CONTENT_H + 8, fill=0, stroke=1)

    # Left: Full-Res 3:4 Portrait Cover Art (384 x 512 pt)
    cov_w = 384.0
    cov_h = 512.0
    cov_x = MARGIN + 6
    cov_y = MARGIN + (CONTENT_H - cov_h) / 2.0

    # Hard comic drop shadow behind cover
    c.setFillColor(hex_color("#09090B", 0.22))
    c.rect(cov_x + 5, cov_y - 5, cov_w, cov_h, fill=1, stroke=0)
    c.setFillColor(hex_color("#FFFFFF", 1.0))

    img = load_webp_reader(novel["cover"]["path"])
    c.drawImage(img, cov_x, cov_y, width=cov_w, height=cov_h, preserveAspectRatio=False)

    # Ink border around cover
    c.setStrokeColor(hex_color("#09090B"))
    c.setLineWidth(2.6)
    c.rect(cov_x, cov_y, cov_w, cov_h, fill=0, stroke=1)

    # Marvel / Manga Corner-Box at Top-Left of Cover
    cb_w, cb_h = 54, 54
    cb_x, cb_y = cov_x + 10, cov_y + cov_h - cb_h - 10
    c.setFillColor(hex_color("#09090B"))
    c.rect(cb_x + 3, cb_y - 3, cb_w, cb_h, fill=1, stroke=0)
    c.setFillColor(hex_color("#FFFFFF" if is_manga else "#FEF08A"))
    c.setStrokeColor(hex_color("#09090B"))
    c.setLineWidth(2)
    c.rect(cb_x, cb_y, cb_w, cb_h, fill=1, stroke=1)
    c.setFillColor(hex_color("#09090B"))
    c.setFont("SansBold", 9)
    c.drawCentredString(cb_x + cb_w / 2, cb_y + 36, "VOL")
    c.setFont("SansBlack", 21)
    c.drawCentredString(cb_x + cb_w / 2, cb_y + 13, f"{novel['volume']:02d}")

    # Bottom style ribbon on cover
    rib_h = 24
    c.setFillColor(hex_color("#09090B", 0.85))
    c.rect(cov_x, cov_y, cov_w, rib_h, fill=1, stroke=0)
    c.setFillColor(hex_color(accent))
    c.rect(cov_x, cov_y + rib_h - 2.5, cov_w, 2.5, fill=1, stroke=0)
    c.setFillColor(hex_color("#FFFFFF"))
    c.setFont("SansBold", 9.5)
    fam = "MARVEL STYLE" if not is_manga else "MANGA DATA-STYLE"
    c.drawCentredString(cov_x + cov_w / 2, cov_y + 7.5, f"{fam}  ·  {novel['art_style_label'].upper()}")

    # Right Info Column
    rx = cov_x + cov_w + 22
    rw = PAGE_W - MARGIN - rx - 4
    cy = cov_y + cov_h

    # Series & Edition Pill
    c.setFillColor(hex_color(theme))
    c.roundRect(rx, cy - 22, rw, 22, 5, fill=1, stroke=0)
    c.setFillColor(hex_color("#FFFFFF"))
    c.setFont("SansBold", 8.5)
    c.drawString(rx + 10, cy - 14.5, f"THE COSE CHRONICLES  ·  VOLUME {novel['volume']:02d} OF 10  ·  PRINT EDITION")
    cy -= 32

    # Main Title
    title_style = ParagraphStyle("covTitle", fontName="SansBlack", fontSize=20, leading=23, textColor=hex_color("#0F172A"))
    cy -= draw_para_in_box(c, novel["title"], title_style, rx, cy, rw) + 4

    # Subtitle
    sub_style = ParagraphStyle("covSub", fontName="Uni", fontSize=12.5, leading=16, textColor=hex_color(theme))
    cy -= draw_para_in_box(c, novel["subtitle"], sub_style, rx, cy, rw) + 6

    # Tagline
    tag_style = ParagraphStyle("covTag", fontName="Uni", fontSize=9.8, leading=13.5, textColor=hex_color("#334155"))
    cy -= draw_para_in_box(c, f"“{novel['tagline']}”", tag_style, rx, cy, rw) + 10

    # Metadata Grid Card
    meta_h = 68
    c.setFillColor(hex_color("#FFFFFF"))
    c.setStrokeColor(hex_color("#CBD5E1"))
    c.setLineWidth(1)
    c.roundRect(rx, cy - meta_h, rw, meta_h, 6, fill=1, stroke=1)
    c.setFillColor(hex_color(theme))
    c.rect(rx, cy - meta_h, 4, meta_h, fill=1, stroke=0)

    meta_style = ParagraphStyle("meta", fontName="Uni", fontSize=8.3, leading=12.2, textColor=hex_color("#1E293B"))
    meta_lines = (
        f"Reading Level: {lvl_label}\n"
        f"Worlds: {' · '.join(novel['worlds'])}   |   POV: {' + '.join(novel['perspectives'])}\n"
        f"NGSS Alignment: {novel['ngss']}\n"
        f"Art Style: {novel['art_style_label']}"
    )
    my = cy - 7
    for ln in meta_lines.split("\n"):
        my -= draw_para_in_box(c, ln, meta_style, rx + 11, my, rw - 16) + 2
    cy -= meta_h + 12

    # Key Scientific Breakthroughs Heading
    c.setFillColor(hex_color("#0F172A"))
    c.setFont("SansBold", 10)
    c.drawString(rx, cy - 10, "KEY RESEARCH DISCOVERIES SYNTHESIZED")
    c.setStrokeColor(hex_color(theme))
    c.setLineWidth(1.5)
    c.line(rx, cy - 14, rx + rw, cy - 14)
    cy -= 21

    bf_style = ParagraphStyle("bf", fontName="Uni", fontSize=8.4, leading=11.6, textColor=hex_color("#1E293B"))
    for bf in novel["big_finds"]:
        c.setFillColor(hex_color(theme))
        c.circle(rx + 4, cy - 5, 2.2, fill=1, stroke=0)
        h = draw_para_in_box(c, bf, bf_style, rx + 12, cy, rw - 14)
        cy -= h + 5

    # Art Direction Box anchored near bottom of right column
    art_box_h = 56
    art_box_y = cov_y
    c.setFillColor(hex_color("#0F172A"))
    c.roundRect(rx, art_box_y, rw, art_box_h, 6, fill=1, stroke=0)
    c.setFillColor(hex_color(accent))
    c.setFont("SansBold", 8)
    c.drawString(rx + 10, art_box_y + art_box_h - 13, "ART & DIRECTING NOTES")
    an_style = ParagraphStyle("an", fontName="Uni", fontSize=7.9, leading=10.6, textColor=hex_color("#E2E8F0"))
    draw_para_in_box(c, novel["art_style_notes"], an_style, rx + 10, art_box_y + art_box_h - 17, rw - 20)

    c.showPage()


def draw_story_page(c: canvas.Canvas, novel: dict, page: dict, level: str) -> None:
    theme = novel["theme_color"]
    accent = novel["accent_color"]
    is_manga = novel["art_style_family"] == "manga"

    # Crisp dark comic gutter background inside margin
    c.setFillColor(hex_color("#FFFFFF"))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    top_bar_h = 22.0
    hud_h = 114.0
    art_w = CONTENT_W                       # 744 pt
    art_h = CONTENT_H - top_bar_h - hud_h   # 428 pt (very close to 744*9/16 = 418.5 pt)

    # Keep exact 16:9 art ratio (744 x 418.5) and give extra 9.5 pt to HUD!
    art_h = round(art_w * 788.0 / 1400.0, 2)  # 418.77 pt
    hud_h = CONTENT_H - top_bar_h - art_h     # 123.23 pt

    top_bar_y = PAGE_H - MARGIN - top_bar_h
    art_y = top_bar_y - art_h
    hud_y = MARGIN

    # 1. Top Story Bar
    c.setFillColor(hex_color("#060A12"))
    c.rect(MARGIN, top_bar_y, CONTENT_W, top_bar_h, fill=1, stroke=0)
    c.setFillColor(hex_color(accent))
    c.setFont("SansBold", 8.8)
    c.drawString(MARGIN + 10, top_bar_y + 7, f"VOL {novel['volume']:02d} · {novel['title']}  |  {page['act'].upper()}")
    c.setFillColor(hex_color("#E2E8F0"))
    c.setFont("Uni", 8.5)
    c.drawRightString(
        MARGIN + CONTENT_W - 10,
        top_bar_y + 7,
        f"Page {page['page_number']} of 6: {page['beat_title']}  ·  Grades 9–12 + Teacher",
    )

    # 2. Full-Bleed 16:9 Artwork Plate
    img = load_webp_reader(page["art"]["path"])
    c.drawImage(img, MARGIN, art_y, width=art_w, height=art_h, preserveAspectRatio=False)

    # Crisp comic ink border around artwork
    c.setStrokeColor(hex_color("#09090B"))
    c.setLineWidth(2.4 if not is_manga else 3.0)
    c.rect(MARGIN, art_y, art_w, art_h, fill=0, stroke=1)

    # 3. Comic / Manga Lettering Overlays (9-12+ Teacher `hs` text)
    pad = 10.0

    # Top-Left Narration Box
    cap_text = page["caption"][level]
    cap_style = ParagraphStyle("cap", fontName="Uni", fontSize=8.5, leading=11.4, textColor=hex_color("#09090B"))
    cap_box_w = 408.0
    cap_p, _, cap_th = measure_para(cap_text, cap_style, cap_box_w - 18)
    cap_box_h = cap_th + 13
    cap_x = MARGIN + pad
    cap_y = art_y + art_h - pad - cap_box_h

    # Drop shadow
    c.setFillColor(hex_color("#09090B", 0.82))
    c.rect(cap_x + 3.5, cap_y - 3.5, cap_box_w, cap_box_h, fill=1, stroke=0)
    # Fill box
    c.setFillColor(hex_color("#FFFFFF" if is_manga else "#FEF3C7", 0.96))
    c.setStrokeColor(hex_color("#09090B"))
    c.setLineWidth(1.8)
    c.rect(cap_x, cap_y, cap_box_w, cap_box_h, fill=1, stroke=1)
    if is_manga:
        c.setFillColor(hex_color(theme))
        c.rect(cap_x, cap_y, 5.5, cap_box_h, fill=1, stroke=0)
    cap_p.drawOn(c, cap_x + (11 if is_manga else 9), cap_y + 6.5)

    # Top-Right Stylized SFX Stamp
    sfx = page.get("sfx", {})
    if sfx.get("text"):
        c.saveState()
        c.translate(MARGIN + art_w - 16, art_y + art_h - 32)
        c.rotate(-(sfx.get("rotate", -4)))
        c.setFont("Impact", 20)
        txt = sfx["text"]
        # Ink outline via 4-way offset
        c.setFillColor(hex_color("#09090B"))
        for dx, dy in [(-1.6, 0), (1.6, 0), (0, -1.6), (0, 1.6), (2.2, -2.2)]:
            c.drawRightString(dx, dy, txt)
        c.setFillColor(hex_color("#FFFFFF" if is_manga else "#FDE047"))
        c.drawRightString(0, 0, txt)
        c.restoreState()

    # Bottom Speech Balloons (Left & Right)
    bub_style = ParagraphStyle("bub", fontName="Uni", fontSize=8.3, leading=11.0, textColor=hex_color("#0F172A"))
    bub_w = 342.0
    for idx, b in enumerate(page["bubbles"][:2]):
        b_text = f"“{b[level]}”"
        bp, _, bth = measure_para(b_text, bub_style, bub_w - 18)
        bub_h = bth + 27.0
        bx = MARGIN + pad if idx == 0 else MARGIN + art_w - pad - bub_w
        by = art_y + pad

        # Hard comic drop shadow
        c.setFillColor(hex_color("#09090B", 0.80))
        c.roundRect(bx + 3.2, by - 3.2, bub_w, bub_h, 11, fill=1, stroke=0)
        # Balloon card
        c.setFillColor(hex_color("#FFFFFF", 0.95))
        c.setStrokeColor(hex_color("#09090B"))
        c.setLineWidth(1.8)
        c.roundRect(bx, by, bub_w, bub_h, 11, fill=1, stroke=1)

        # Speaker Pill Tag
        sp_col = SPEAKER_COLORS.get(b["speaker"], theme)
        sp_label = b["speaker_name"].upper()
        sp_tw = pdfmetrics.stringWidth(sp_label, "SansBold", 7.2) + 14
        c.setFillColor(hex_color(sp_col))
        c.roundRect(bx + 9, by + bub_h - 18.5, sp_tw, 13.5, 6.5, fill=1, stroke=0)
        c.setFillColor(hex_color("#FFFFFF"))
        c.setFont("SansBold", 7.2)
        c.drawString(bx + 16, by + bub_h - 14.5, sp_label)

        # Dialogue Text
        bp.drawOn(c, bx + 9, by + 6.5)

    # 4. Bottom Science Data HUD & Director's Note Strip (Zero Overlap!)
    hud = page["data_hud"]
    c.setFillColor(hex_color("#0F172A"))
    c.rect(MARGIN, hud_y, CONTENT_W, hud_h, fill=1, stroke=0)
    c.setStrokeColor(hex_color("#09090B"))
    c.setLineWidth(1.8)
    c.rect(MARGIN, hud_y, CONTENT_W, hud_h, fill=0, stroke=1)
    # Top Theme Accent Bar
    c.setFillColor(hex_color(theme))
    c.rect(MARGIN, hud_y + hud_h - 3.5, CONTENT_W, 3.5, fill=1, stroke=0)

    # HUD Header Row
    hy = hud_y + hud_h - 17.5
    c.setFillColor(hex_color("#F8FAFC"))
    c.setFont("SansBold", 9.4)
    c.drawString(MARGIN + 11, hy, f"SCIENCE DATA HUD — {hud['headline']}")
    c.setFillColor(hex_color("#94A3B8"))
    c.setFont("Uni", 8.0)
    c.drawRightString(MARGIN + CONTENT_W - 11, hy, f"Dataset / Repo: {hud['dataset']}")

    # Equation & Metric Pill Row
    eq_y = hy - 21
    eq_text = hud["equation"]
    eq_w = min(410, pdfmetrics.stringWidth(eq_text, "Uni", 8.6) + 18)
    c.setFillColor(hex_color("#1E293B"))
    c.setStrokeColor(hex_color("#38BDF8", 0.55))
    c.setLineWidth(0.9)
    c.roundRect(MARGIN + 11, eq_y - 4, eq_w, 16, 4, fill=1, stroke=1)
    c.setFillColor(hex_color("#38BDF8"))
    c.setFont("Uni", 8.6)
    c.drawString(MARGIN + 19, eq_y + 0.5, eq_text)

    c.setFillColor(hex_color("#FDE047"))
    c.setFont("Uni", 8.4)
    metric_x = MARGIN + 11 + eq_w + 12
    c.drawString(metric_x, eq_y + 0.5, f"Key Metric: {hud['metric']}")

    # Explanation Paragraph
    exp_top = eq_y - 11
    exp_style = ParagraphStyle("exp", fontName="Uni", fontSize=8.4, leading=11.4, textColor=hex_color("#E2E8F0"))
    exp_h = draw_para_in_box(c, hud["explanation"], exp_style, MARGIN + 11, exp_top, CONTENT_W - 22)

    # Director's Camera & Data-Story Note Footer (strictly below explanation!)
    div_y = exp_top - exp_h - 6
    c.setStrokeColor(hex_color("#334155"))
    c.setLineWidth(0.7)
    c.line(MARGIN + 11, div_y, MARGIN + CONTENT_W - 11, div_y)
    dir_style = ParagraphStyle("dir", fontName="Uni", fontSize=7.5, leading=9.8, textColor=hex_color("#CBD5E1"))
    dir_text = f"Director's Note: {page['director']['shot']}  |  Data Story: {page['director']['data_story_note']}"
    draw_para_in_box(c, dir_text, dir_style, MARGIN + 11, div_y - 5, CONTENT_W - 22)

    c.showPage()


def draw_teacher_guide_page(c: canvas.Canvas, novel: dict, comics_by_id: dict, level: str) -> None:
    theme = novel["theme_color"]
    accent = novel["accent_color"]

    # Crisp clean print background
    c.setFillColor(hex_color("#FFFFFF"))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setStrokeColor(hex_color("#0F172A"))
    c.setLineWidth(1.5)
    c.rect(MARGIN - 4, MARGIN - 4, CONTENT_W + 8, CONTENT_H + 8, fill=0, stroke=1)

    # Top Banner
    ban_h = 46
    ban_y = PAGE_H - MARGIN - ban_h
    c.setFillColor(hex_color("#0F172A"))
    c.rect(MARGIN, ban_y, CONTENT_W, ban_h, fill=1, stroke=0)
    c.setFillColor(hex_color(theme))
    c.rect(MARGIN, ban_y, CONTENT_W, 4, fill=1, stroke=0)

    c.setFillColor(hex_color(accent))
    c.setFont("SansBold", 8.5)
    c.drawString(MARGIN + 12, ban_y + 31, f"GRADES 9–12 + TEACHER GUIDE & MISSION DEBRIEF  ·  VOLUME {novel['volume']:02d} OF 10")
    c.setFillColor(hex_color("#FFFFFF"))
    c.setFont("SansBlack", 14.5)
    c.drawString(MARGIN + 12, ban_y + 12, f"{novel['title']}: {novel['subtitle']}")
    c.setFillColor(hex_color("#CBD5E1"))
    c.setFont("Uni", 8.5)
    c.drawRightString(MARGIN + CONTENT_W - 12, ban_y + 15, f"NGSS Standards: {novel['ngss']}")

    y = ban_y - 12

    # Take-Home Quote + Classroom Mission Investigation Box
    th_h = 84
    c.setFillColor(hex_color("#FEFCE8"))
    c.setStrokeColor(hex_color(theme))
    c.setLineWidth(1.5)
    c.roundRect(MARGIN, y - th_h, CONTENT_W, th_h, 6, fill=1, stroke=1)
    c.setFillColor(hex_color(theme))
    c.rect(MARGIN, y - th_h, 6, th_h, fill=1, stroke=0)

    c.setFillColor(hex_color(theme))
    c.setFont("SansBold", 8.5)
    c.drawString(MARGIN + 15, y - 14, "KEY TAKE-HOME MESSAGE & HANDS-ON CLASSROOM INVESTIGATION")
    q_style = ParagraphStyle("q", fontName="Uni", fontSize=10.2, leading=13.4, textColor=hex_color("#0F172A"))
    qh = draw_para_in_box(c, f"“{novel['take_home']}”", q_style, MARGIN + 15, y - 20, CONTENT_W - 30)
    act_style = ParagraphStyle("act", fontName="Uni", fontSize=8.6, leading=11.8, textColor=hex_color("#1E293B"))
    draw_para_in_box(c, f"Lab / Classroom Protocol: {novel['mission_activity']}", act_style, MARGIN + 15, y - 24 - qh, CONTENT_W - 30)

    y -= th_h + 14

    # Two-Column Lower Layout: Left = Quantitative 9-12 Inquiry Notes, Right = Linked Open-Source Repos & Live Tools
    col_gap = 16.0
    left_w = 342.0
    right_w = CONTENT_W - left_w - col_gap
    lx = MARGIN
    rx = MARGIN + left_w + col_gap
    footer_y = MARGIN + 22

    # Left Column Header
    c.setFillColor(hex_color("#0F172A"))
    c.setFont("SansBold", 9.5)
    c.drawString(lx, y - 10, "9–12+ QUANTITATIVE MECHANISMS & INQUIRY PROMPTS")
    c.setStrokeColor(hex_color(theme))
    c.setLineWidth(1.4)
    c.line(lx, y - 14, lx + left_w, y - 14)

    ly = y - 22
    q_head = ParagraphStyle("qh", fontName="SansBold", fontSize=8.3, leading=10.8, textColor=hex_color(theme))
    q_body = ParagraphStyle("qb", fontName="Uni", fontSize=7.8, leading=10.5, textColor=hex_color("#1E293B"))

    # Pull top 4 source comics for rich HS quantitative inquiry prompts
    for cid in novel["source_comic_ids"][:4]:
        cm = comics_by_id.get(cid)
        if not cm or ly < footer_y + 52:
            continue
        card_top = ly
        h1 = draw_para_in_box(c, f"{cm['title']}  (Issue #{cm['issue_number']:02d})", q_head, lx + 8, ly - 5, left_w - 14)
        h2 = draw_para_in_box(c, f"Discussion Prompt: {cm['wonder_q']}", q_body, lx + 8, ly - 7 - h1, left_w - 14)
        h3 = draw_para_in_box(c, f"9–12+ Quantitative Detail: {cm['hs_detail']}", q_body, lx + 8, ly - 9 - h1 - h2, left_w - 14)
        box_h = h1 + h2 + h3 + 16
        c.setStrokeColor(hex_color("#CBD5E1"))
        c.setLineWidth(0.8)
        c.roundRect(lx, card_top - box_h, left_w, box_h, 5, fill=0, stroke=1)
        ly -= box_h + 7

    # Right Column Header
    c.setFillColor(hex_color("#0F172A"))
    c.setFont("SansBold", 9.5)
    c.drawString(rx, y - 10, f"LINKED OPEN-SOURCE REPOSITORIES & LIVE TOOLS ({len(novel['source_comic_ids'])})")
    c.setStrokeColor(hex_color(theme))
    c.setLineWidth(1.4)
    c.line(rx, y - 14, rx + right_w, y - 14)

    ry = y - 22
    r_title = ParagraphStyle("rt", fontName="SansBold", fontSize=8.0, leading=10.0, textColor=hex_color("#0F172A"))
    r_meta = ParagraphStyle("rm", fontName="Uni", fontSize=7.4, leading=9.6, textColor=hex_color("#334155"))
    r_url = ParagraphStyle("ru", fontName="Uni", fontSize=7.0, leading=9.0, textColor=hex_color("#0369A1"))

    for cid in novel["source_comic_ids"]:
        cm = comics_by_id.get(cid)
        if not cm or ry < footer_y + 34:
            continue
        row_h = 34
        c.setFillColor(hex_color("#F8FAFC"))
        c.setStrokeColor(hex_color("#CBD5E1"))
        c.setLineWidth(0.7)
        c.roundRect(rx, ry - row_h, right_w, row_h, 4, fill=1, stroke=1)
        c.setFillColor(hex_color(theme))
        c.rect(rx, ry - row_h, 3, row_h, fill=1, stroke=0)

        draw_para_in_box(c, f"#{cm['issue_number']:02d} · {cm['title']}", r_title, rx + 8, ry - 4, right_w - 14)
        draw_para_in_box(c, cm["metric_badge"], r_meta, rx + 8, ry - 14, right_w - 14)
        draw_para_in_box(c, cm["url"], r_url, rx + 8, ry - 23.5, right_w - 14)
        ry -= row_h + 4.5

    # Bottom Colophon Footer
    c.setStrokeColor(hex_color("#CBD5E1"))
    c.setLineWidth(0.8)
    c.line(MARGIN, footer_y + 4, MARGIN + CONTENT_W, footer_y + 4)
    c.setFillColor(hex_color("#475569"))
    c.setFont("Uni", 7.6)
    c.drawString(
        MARGIN,
        MARGIN + 9,
        "CoSE Science Comics: The Space Biology Chronicles · Created by Dr. Richard J. Barker (CoSE / NASA GeneLab Plant AWG Chair)",
    )
    c.drawRightString(
        MARGIN + CONTENT_W,
        MARGIN + 9,
        "Interactive Portal & Open Source Code: https://dr-richard-barker.github.io/Comics/",
    )

    c.showPage()


def export_novel_pdf(novel: dict, comics_by_id: dict, level: str, out_dir: Path) -> Path:
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / safe_filename_slug(novel, level)

    c = canvas.Canvas(str(out_path), pagesize=landscape(letter))
    c.setTitle(f"CoSE Chronicles Vol. {novel['volume']:02d}: {novel['title']} ({LEVEL_META[level][1]})")
    c.setAuthor("Dr. Richard J. Barker — Collaborative Science Environment (CoSE)")
    c.setSubject(f"{novel['subtitle']} | NGSS: {novel['ngss']}")

    # Page 1: Cover & Scientific Overview
    draw_cover_page(c, novel, level)

    # Pages 2-7: 6 Illustrated Story Spreads
    for page in novel["pages"]:
        draw_story_page(c, novel, page, level)

    # Page 8: 9-12+ Teacher Guide & Mission Debrief
    draw_teacher_guide_page(c, novel, comics_by_id, level)

    c.save()
    return out_path


def main() -> None:
    parser = argparse.ArgumentParser(description="Export print-ready PDFs for CoSE Flagship Graphic Novels.")
    parser.add_argument("--level", choices=["k5", "ms", "hs"], default="hs", help="Reading level (default: hs = 9-12+ Teacher)")
    parser.add_argument("--only-complete", action="store_true", help="Export only volumes with all 7/7 AI-illustrated WebP plates")
    parser.add_argument("--all", action="store_true", help="Export all 10 volumes (requires raster plates)")
    args = parser.parse_args()

    register_fonts()

    novels_data = json.loads((DATA_DIR / "graphic_novels.json").read_text(encoding="utf-8"))
    catalog_data = json.loads((DATA_DIR / "comics_catalog.json").read_text(encoding="utf-8"))
    comics_by_id = {c["id"]: c for c in catalog_data["comics"]}

    only_complete = args.only_complete or not args.all
    exported = []
    skipped = []

    for novel in novels_data["novels"]:
        is_complete = novel["cover"]["has_raster"] and all(p["art"]["has_raster"] for p in novel["pages"])
        if only_complete and not is_complete:
            skipped.append(f"Vol {novel['volume']:02d} ({novel['raster_plate_count']}/7 plates)")
            continue
        if not is_complete:
            skipped.append(f"Vol {novel['volume']:02d} (missing raster plates)")
            continue
        pdf_path = export_novel_pdf(novel, comics_by_id, args.level, OUT_DIR)
        size_mb = pdf_path.stat().st_size / (1024 * 1024)
        exported.append((novel["volume"], pdf_path, size_mb))
        print(f"  [PDF OK] Vol {novel['volume']:02d} -> {pdf_path.relative_to(ROOT)} (8 pages, {size_mb:.2f} MB)")

    print(f"\nExported {len(exported)} print-ready {LEVEL_META[args.level][1]} PDF(s) to {OUT_DIR.relative_to(ROOT)}/")
    if skipped:
        print(f"Skipped incomplete volumes awaiting final art pass: {', '.join(skipped)}")


if __name__ == "__main__":
    main()
