#!/usr/bin/env python3
"""
Press-Ready 8.5" x 11" Portrait Comic-Book PDF Exporter for The CoSE Chronicles.

Produces authentic 8-page US Letter Portrait (612 x 792 pt) comic books tailored
for physical classroom printing, duplex stapling, 3-ring binders, and optional
2-up saddle-stitch folded booklet imposition (--booklet):
  Page 1 (Recto) : Full-Page 3:4 Newsstand Front Cover
  Page 2 (Verso) : Inside Front Cover — Mission Briefing, Cast & Big Finds
  Page 3 (Recto) : ACT I  — 2-Tier Stacked Comic Action Page (Beats 1 & 2 + HUDs)
  Page 4 (Verso) : ACT II — 2-Tier Stacked Comic Action Page (Beats 3 & 4 + HUDs)
  Page 5 (Recto) : ACT III — 2-Tier Stacked Comic Action Page (Beats 5 & 6 + HUDs)
  Page 6 (Verso) : Science Lab — 6-Equation Study Card, Inquiry & Director's Cut
  Page 7 (Recto) : Classroom Mission Protocol & Clickable Open-Source Repo Directory
  Page 8 (Verso) : Collectible Back Cover — Take-Home Poster & 10-Volume Checklist

Usage:
  python3 scripts/export_novels_pdf.py --level hs --only-complete
  python3 scripts/export_novels_pdf.py --level ms --only-complete
  python3 scripts/export_novels_pdf.py --level hs --only-complete --booklet
"""
from __future__ import annotations

import argparse
import io
import json
import re
from pathlib import Path
from xml.sax.saxutils import escape as xml_escape

import fitz  # PyMuPDF for optional saddle-stitch --booklet imposition
from PIL import Image, ImageOps
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"
OUT_DIR = ROOT / "exports" / "pdf"
BOOKLET_DIR = OUT_DIR / "booklets"

PAGE_W, PAGE_H = letter  # 612 x 792 pt (8.5 x 11.0 in Portrait)
MARGIN_TOP = 26.0
MARGIN_BOT = 26.0
GUTTER_INNER = 38.0      # 0.53 in binding/staple/hole-punch inner margin
GUTTER_OUTER = 24.0      # 0.33 in outer trim safety margin
LIVE_W = PAGE_W - GUTTER_INNER - GUTTER_OUTER   # 550.0 pt (7.64 in)
LIVE_H = PAGE_H - MARGIN_TOP - MARGIN_BOT       # 740.0 pt (10.28 in)

SPEAKER_COLORS = {
    "doc-b": "#0f7f9f",
    "sprout": "#15803d",
    "myco": "#d97706",
    "statolith": "#7c3aed",
    "pixel": "#0284c7",
    "astra": "#dc2626",
}

LEVEL_META = {
    "k5": ("K-5", "Elementary (Grades K–5 Explorer)", "Grades K–5 Explorer"),
    "ms": ("6-8", "Middle School (Grades 6–8 Investigator)", "Grades 6–8 Investigator"),
    "hs": ("9-12_Teacher", "High School & Educator (Grades 9–12 + Teacher Guide)", "Grades 9–12 + Teacher"),
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


def page_left_x(page_num: int, uniform: bool = False) -> float:
    """Alternating duplex binding gutter: odd (recto) left=38, even (verso) left=24."""
    if uniform:
        return (PAGE_W - LIVE_W) / 2.0
    return GUTTER_INNER if (page_num % 2 == 1) else GUTTER_OUTER


def load_image_fitted(rel_path: str, target_px: tuple[int, int] | None = None) -> ImageReader:
    p = ROOT / rel_path
    with Image.open(p) as im:
        rgb = im.convert("RGB")
        if target_px is not None:
            rgb = ImageOps.fit(rgb, target_px, method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))
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


def measure_para(text: str, style: ParagraphStyle, max_w: float) -> tuple[Paragraph, float, float]:
    p = Paragraph(xml_escape(text), style)
    w, h = p.wrap(max_w, 600)
    return p, w, h


def draw_para_top(
    c: canvas.Canvas,
    text: str,
    style: ParagraphStyle,
    x: float,
    y_top: float,
    max_w: float,
) -> float:
    p, _, h = measure_para(text, style, max_w)
    p.drawOn(c, x, y_top - h)
    return h


def draw_folio_footer(c: canvas.Canvas, novel: dict, page_num: int, lx: float, level: str, dark: bool = False) -> None:
    """Subtle outer-corner comic book folio number + series footer."""
    y = MARGIN_BOT + 3
    fg = hex_color("#94A3B8" if dark else "#475569")
    num_fg = hex_color("#F8FAFC" if dark else "#0F172A")
    is_recto = (page_num % 2 == 1)

    c.setFillColor(fg)
    c.setFont("Uni", 7.3)
    foot_txt = f"The CoSE Chronicles · Vol. {novel['volume']:02d}: {novel['title']} · {LEVEL_META[level][2]}"
    if is_recto:
        c.drawString(lx, y, foot_txt)
        c.setFillColor(num_fg)
        c.setFont("SansBlack", 8.8)
        c.drawRightString(lx + LIVE_W, y, f"{page_num:02d}")
    else:
        c.setFillColor(num_fg)
        c.setFont("SansBlack", 8.8)
        c.drawString(lx, y, f"{page_num:02d}")
        c.setFillColor(fg)
        c.setFont("Uni", 7.3)
        c.drawRightString(lx + LIVE_W, y, foot_txt)


# =============================================================================
# PAGE 1 (RECTO) — FULL-PAGE 8.5" x 11" NEWSSTAND COMIC COVER
# =============================================================================
def draw_front_cover_page(c: canvas.Canvas, novel: dict, level: str, uniform: bool) -> None:
    theme = novel["theme_color"]
    accent = novel["accent_color"]
    is_manga = novel["art_style_family"] == "manga"
    lx = page_left_x(1, uniform)

    # Clean dark-ink comic paper margin backdrop
    c.setFillColor(hex_color("#0B1120"))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    # Exact 3:4 portrait live cover frame (550 x 733.3 pt) centered vertically
    cov_w = LIVE_W
    cov_h = round(cov_w * 1200.0 / 900.0, 2)  # 733.33 pt
    cov_x = lx
    cov_y = MARGIN_BOT + (LIVE_H - cov_h) / 2.0

    # Full-contrast cover artwork (explicitly reset alpha to 1.0!)
    c.setFillColor(hex_color("#FFFFFF", 1.0))
    img = load_image_fitted(novel["cover"]["path"])
    c.drawImage(img, cov_x, cov_y, width=cov_w, height=cov_h, preserveAspectRatio=False)

    # Top Masthead Scrim (dark gradient via layered translucent bands)
    for i in range(18):
        frac = 1.0 - (i / 18.0)
        band_h = 7.5
        c.setFillColor(hex_color("#020617", 0.88 * (frac ** 1.35)))
        c.rect(cov_x, cov_y + cov_h - (i + 1) * band_h, cov_w, band_h + 0.4, fill=1, stroke=0)

    # Top Series Eyebrow Strip
    strip_h = 18
    c.setFillColor(hex_color(theme, 0.96))
    c.rect(cov_x, cov_y + cov_h - strip_h, cov_w, strip_h, fill=1, stroke=0)
    c.setFillColor(hex_color("#FFFFFF"))
    c.setFont("SansBold", 8.2)
    c.drawString(cov_x + 10, cov_y + cov_h - 12.5, "THE COSE CHRONICLES  ·  SPACE BIOLOGY GRAPHIC NOVEL ANTHOLOGY")
    c.drawRightString(cov_x + cov_w - 10, cov_y + cov_h - 12.5, LEVEL_META[level][2].upper())

    # Classic Marvel Goldenrod / Manga Crisp-White Corner-Box
    cb_w, cb_h = 62, 66
    cb_x = cov_x + 12
    cb_y = cov_y + cov_h - strip_h - cb_h - 10
    c.setFillColor(hex_color("#09090B", 0.92))
    c.rect(cb_x + 3.5, cb_y - 3.5, cb_w, cb_h, fill=1, stroke=0)
    c.setFillColor(hex_color("#FFFFFF" if is_manga else "#FEF08A", 1.0))
    c.setStrokeColor(hex_color("#09090B"))
    c.setLineWidth(2.4)
    c.rect(cb_x, cb_y, cb_w, cb_h, fill=1, stroke=1)
    c.setFillColor(hex_color("#09090B"))
    c.setFont("SansBold", 8.5)
    c.drawCentredString(cb_x + cb_w / 2, cb_y + 49, "VOL")
    c.setFont("SansBlack", 25)
    c.drawCentredString(cb_x + cb_w / 2, cb_y + 21, f"{novel['volume']:02d}")
    c.setFont("SansBold", 6.8)
    c.drawCentredString(cb_x + cb_w / 2, cb_y + 8, "OF 10")

    # Hero Masthead Title & Subtitle Banner (right of Corner-Box)
    tx = cb_x + cb_w + 14
    tw = cov_x + cov_w - tx - 12
    ty = cov_y + cov_h - strip_h - 12

    # Crisp shadowed title
    t_size = 24 if len(novel["title"]) <= 24 else 20.5
    title_shadow = ParagraphStyle("ts", fontName="SansBlack", fontSize=t_size, leading=t_size + 2.5, textColor=hex_color("#020617"))
    title_front = ParagraphStyle("tf", fontName="SansBlack", fontSize=t_size, leading=t_size + 2.5, textColor=hex_color("#FFFFFF"))
    draw_para_top(c, novel["title"], title_shadow, tx + 2.2, ty - 2.2, tw)
    th = draw_para_top(c, novel["title"], title_front, tx, ty, tw)

    # Subtitle Pill
    sub_y = ty - th - 6
    sub_txt = novel["subtitle"].upper()
    sub_w = min(tw, pdfmetrics.stringWidth(sub_txt, "SansBold", 10.5) + 18)
    c.setFillColor(hex_color("#020617", 0.9))
    c.roundRect(tx + 2, sub_y - 20, sub_w, 19, 4, fill=1, stroke=0)
    c.setFillColor(hex_color(theme, 1.0))
    c.roundRect(tx, sub_y - 18, sub_w, 19, 4, fill=1, stroke=0)
    c.setFillColor(hex_color("#FFFFFF"))
    c.setFont("SansBold", 10.2)
    c.drawString(tx + 9, sub_y - 12, sub_txt)

    # Bottom Cover Scrim + Art-Style & Tagline Ribbon
    for i in range(14):
        frac = 1.0 - (i / 14.0)
        bh = 7.0
        c.setFillColor(hex_color("#020617", 0.90 * (frac ** 1.25)))
        c.rect(cov_x, cov_y + i * bh, cov_w, bh + 0.4, fill=1, stroke=0)

    # Bottom Tagline
    tag_style = ParagraphStyle("ctag", fontName="Uni", fontSize=9.6, leading=12.6, textColor=hex_color("#F8FAFC"))
    draw_para_top(c, f"“{novel['tagline']}”", tag_style, cov_x + 14, cov_y + 62, cov_w - 28)

    # Bottom Ribbon Bar
    rib_h = 26
    c.setFillColor(hex_color("#020617", 0.95))
    c.rect(cov_x, cov_y, cov_w, rib_h, fill=1, stroke=0)
    c.setFillColor(hex_color(accent, 1.0))
    c.rect(cov_x, cov_y + rib_h - 2.5, cov_w, 2.5, fill=1, stroke=0)
    fam = "MARVEL STYLE" if not is_manga else "MANGA DATA-STYLE"
    c.setFillColor(hex_color("#F8FAFC"))
    c.setFont("SansBold", 8.6)
    c.drawString(cov_x + 12, cov_y + 8.5, f"{fam}  ·  {novel['art_style_label'].upper()}")
    c.setFillColor(hex_color(accent))
    c.setFont("Uni", 8.3)
    c.drawRightString(
        cov_x + cov_w - 12,
        cov_y + 8.5,
        f"{' · '.join(novel['worlds'])}  |  {' + '.join(novel['perspectives'])}",
    )

    # Crisp outer ink frame around full cover
    c.setStrokeColor(hex_color("#FFFFFF", 0.85))
    c.setLineWidth(1.5)
    c.rect(cov_x, cov_y, cov_w, cov_h, fill=0, stroke=1)
    c.setStrokeColor(hex_color("#020617"))
    c.setLineWidth(3.0)
    c.rect(cov_x - 1.5, cov_y - 1.5, cov_w + 3, cov_h + 3, fill=0, stroke=1)

    c.showPage()


# =============================================================================
# PAGE 2 (VERSO) — INSIDE FRONT COVER: MISSION BRIEFING, CAST & BIG FINDS
# =============================================================================
def draw_inside_briefing_page(
    c: canvas.Canvas,
    novel: dict,
    cast_by_id: dict,
    level: str,
    uniform: bool,
) -> None:
    theme = novel["theme_color"]
    accent = novel["accent_color"]
    lx = page_left_x(2, uniform)

    # Warm archival comic paper background
    c.setFillColor(hex_color("#FAF8F2"))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    # Outer editorial ink border
    c.setStrokeColor(hex_color("#0F172A"))
    c.setLineWidth(1.4)
    c.rect(lx, MARGIN_BOT + 16, LIVE_W, LIVE_H - 16, fill=0, stroke=1)

    y = PAGE_H - MARGIN_TOP

    # Masthead Header Band (wraps long subtitle/tagline cleanly inside the box)
    hdr_h = 74
    c.setFillColor(hex_color("#0F172A"))
    c.rect(lx, y - hdr_h, LIVE_W, hdr_h, fill=1, stroke=0)
    c.setFillColor(hex_color(theme))
    c.rect(lx, y - hdr_h, LIVE_W, 4.5, fill=1, stroke=0)
    c.setFillColor(hex_color(accent))
    c.setFont("SansBold", 8.4)
    c.drawString(lx + 14, y - 15, f"MISSION BRIEFING & CREDITS  ·  VOLUME {novel['volume']:02d} OF 10  ·  {LEVEL_META[level][2].upper()}")
    c.setFillColor(hex_color("#FFFFFF"))
    c.setFont("SansBlack", 17.0)
    c.drawString(lx + 14, y - 35, novel["title"])
    sub_st = ParagraphStyle("p2sub", fontName="Uni", fontSize=9.0, leading=11.8, textColor=hex_color("#CBD5E1"))
    draw_para_top(c, f"{novel['subtitle']} — “{novel['tagline']}”", sub_st, lx + 14, y - 41, LIVE_W - 28)
    y -= hdr_h + 11

    # Mission Specs Strip
    spec_h = 44
    c.setFillColor(hex_color("#FFFFFF"))
    c.setStrokeColor(hex_color("#CBD5E1"))
    c.setLineWidth(1)
    c.roundRect(lx + 12, y - spec_h, LIVE_W - 24, spec_h, 6, fill=1, stroke=1)
    c.setFillColor(hex_color(theme))
    c.rect(lx + 12, y - spec_h, 5, spec_h, fill=1, stroke=0)

    sp_style = ParagraphStyle("sp", fontName="Uni", fontSize=8.5, leading=12.0, textColor=hex_color("#1E293B"))
    draw_para_top(
        c,
        f"Reading Edition: {LEVEL_META[level][1]}   |   NGSS: {novel['ngss']}",
        sp_style,
        lx + 24,
        y - 7,
        LIVE_W - 44,
    )
    draw_para_top(
        c,
        f"Worlds Visited: {' · '.join(novel['worlds'])}   |   Protagonist POV: {' + '.join(novel['perspectives'])}   |   Art Style: {novel['art_style_label']}",
        sp_style,
        lx + 24,
        y - 23.5,
        LIVE_W - 44,
    )
    y -= spec_h + 13

    # Section 1: Key Research Breakthroughs Synthesized
    c.setFillColor(hex_color("#0F172A"))
    c.setFont("SansBold", 10.2)
    c.drawString(lx + 12, y - 10, "KEY SCIENTIFIC BREAKTHROUGHS SYNTHESIZED IN THIS VOLUME")
    c.setStrokeColor(hex_color(theme))
    c.setLineWidth(1.6)
    c.line(lx + 12, y - 14, lx + LIVE_W - 12, y - 14)
    y -= 21

    bf_style = ParagraphStyle("bf2", fontName="Uni", fontSize=8.9, leading=12.4, textColor=hex_color("#1E293B"))
    for idx, bf in enumerate(novel["big_finds"], start=1):
        c.setFillColor(hex_color(theme))
        c.roundRect(lx + 12, y - 14, 18, 14, 3, fill=1, stroke=0)
        c.setFillColor(hex_color("#FFFFFF"))
        c.setFont("SansBold", 8.2)
        c.drawCentredString(lx + 21, y - 10.2, f"0{idx}")
        bh = draw_para_top(c, bf, bf_style, lx + 37, y - 1, LIVE_W - 52)
        y -= max(bh, 16) + 6.5

    y -= 5

    # Section 2: Starring Cast of the CoSE Space Lab (dynamic height prevents title/bio overlap)
    c.setFillColor(hex_color("#0F172A"))
    c.setFont("SansBold", 10.2)
    c.drawString(lx + 12, y - 10, "STARRING CAST")
    c.setStrokeColor(hex_color(theme))
    c.setLineWidth(1.6)
    c.line(lx + 12, y - 14, lx + LIVE_W - 12, y - 14)
    y -= 20

    cast_ids = novel["cast"]
    cols = 2
    gap = 10.0
    card_w = (LIVE_W - 24 - gap) / cols
    bio_key = f"bio_{level}"
    cast_name_st = ParagraphStyle("cn", fontName="SansBold", fontSize=8.2, leading=10.2, textColor=hex_color("#0F172A"))
    cast_bio_st = ParagraphStyle("cb", fontName="Uni", fontSize=7.4, leading=9.6, textColor=hex_color("#334155"))

    row_y = y
    for i in range(0, len(cast_ids), cols):
        row_items = [cast_by_id[cid] for cid in cast_ids[i : i + cols] if cid in cast_by_id]
        # Pre-measure each card in the row so both cards share a clean uniform height with zero overlap
        measured = []
        row_h = 48.0
        for ch in row_items:
            np_, _, nh = measure_para(f"{ch['name']}  ·  {ch['role']}", cast_name_st, card_w - 15)
            bp_, _, bh = measure_para(ch.get(bio_key, ch["bio_ms"]), cast_bio_st, card_w - 15)
            needed = nh + bh + 13.0
            row_h = max(row_h, needed)
            measured.append((ch, np_, nh, bp_, bh))

        for j, (ch, np_, nh, bp_, bh) in enumerate(measured):
            cx = lx + 12 + j * (card_w + gap)
            c.setFillColor(hex_color("#FFFFFF"))
            c.setStrokeColor(hex_color("#CBD5E1"))
            c.setLineWidth(0.9)
            c.roundRect(cx, row_y - row_h, card_w, row_h, 5, fill=1, stroke=1)
            c.setFillColor(hex_color(ch["color"]))
            c.rect(cx, row_y - row_h, 4.5, row_h, fill=1, stroke=0)
            np_.drawOn(c, cx + 10, row_y - 5.0 - nh)
            bp_.drawOn(c, cx + 10, row_y - 7.5 - nh - bh)
        row_y -= row_h + 6.5
    y = row_y - 5

    # Section 3: 3-Act Adventure Roadmap + Art Direction
    c.setFillColor(hex_color("#0F172A"))
    c.setFont("SansBold", 10.2)
    c.drawString(lx + 12, y - 10, "THREE-ACT STORY ROADMAP & VISUAL DIRECTION")
    c.setStrokeColor(hex_color(theme))
    c.setLineWidth(1.6)
    c.line(lx + 12, y - 14, lx + LIVE_W - 12, y - 14)
    y -= 20

    act_w = (LIVE_W - 24 - 16) / 3.0
    act_h = 70.0
    act_pairs = [
        ("PAGE 03", novel["pages"][0], novel["pages"][1]),
        ("PAGE 04", novel["pages"][2], novel["pages"][3]),
        ("PAGE 05", novel["pages"][4], novel["pages"][5]),
    ]
    act_hd_st = ParagraphStyle("ah", fontName="SansBold", fontSize=7.9, leading=10.0, textColor=hex_color(theme))
    act_bd_st = ParagraphStyle("ab", fontName="Uni", fontSize=7.4, leading=9.7, textColor=hex_color("#1E293B"))
    for idx, (pg_lbl, b1, b2) in enumerate(act_pairs):
        ax = lx + 12 + idx * (act_w + 8)
        c.setFillColor(hex_color("#FFFFFF"))
        c.setStrokeColor(hex_color("#CBD5E1"))
        c.setLineWidth(0.9)
        c.roundRect(ax, y - act_h, act_w, act_h, 5, fill=1, stroke=1)
        act_name = b1["act"].split("—")[0].strip()
        draw_para_top(c, f"{pg_lbl} · {act_name}", act_hd_st, ax + 8, y - 5.5, act_w - 14)
        b1_h = draw_para_top(c, f"1. {b1['beat_title']}", act_bd_st, ax + 8, y - 19, act_w - 14)
        draw_para_top(c, f"2. {b2['beat_title']}", act_bd_st, ax + 8, y - 22.5 - b1_h, act_w - 14)
    y -= act_h + 9

    # Art Direction Dark Banner anchored above bottom border
    ad_h = 54.0
    ad_y = max(MARGIN_BOT + 26, y - ad_h)
    c.setFillColor(hex_color("#0F172A"))
    c.roundRect(lx + 12, ad_y, LIVE_W - 24, ad_h, 6, fill=1, stroke=0)
    c.setFillColor(hex_color(accent))
    c.setFont("SansBold", 8.2)
    c.drawString(lx + 22, ad_y + ad_h - 14, f"ART DIRECTION ({novel['art_style_family'].upper()}) — {novel['art_style_label'].upper()}")
    ad_st = ParagraphStyle("adst", fontName="Uni", fontSize=8.1, leading=11.0, textColor=hex_color("#E2E8F0"))
    draw_para_top(c, novel["art_style_notes"], ad_st, lx + 22, ad_y + ad_h - 19, LIVE_W - 44)

    draw_folio_footer(c, novel, 2, lx, level, dark=False)
    c.showPage()


# =============================================================================
# PAGES 3, 4, 5 — CLASSIC 2-TIER STACKED 8.5" x 11" COMIC ACTION PAGES
# =============================================================================
def draw_comic_tier(
    c: canvas.Canvas,
    novel: dict,
    beat: dict,
    x: float,
    y_bottom: float,
    w: float,
    art_h: float,
    hud_h: float,
    level: str,
) -> None:
    theme = novel["theme_color"]
    is_manga = novel["art_style_family"] == "manga"

    hud_y = y_bottom
    art_y = y_bottom + hud_h

    # 1. Full-Width Comic Panel Artwork (fit cleanly to 1400 x 718 -> 550 x 282 pt)
    c.setFillColor(hex_color("#FFFFFF", 1.0))
    target_px = (1400, int(round(1400 * art_h / w)))
    img = load_image_fitted(beat["art"]["path"], target_px=target_px)
    c.drawImage(img, x, art_y, width=w, height=art_h, preserveAspectRatio=False)

    # Crisp Comic/Manga Ink Border
    c.setStrokeColor(hex_color("#09090B"))
    c.setLineWidth(2.2 if not is_manga else 2.8)
    c.rect(x, art_y, w, art_h, fill=0, stroke=1)

    pad = 8.0

    # 2. Top-Left Narration Caption Box
    cap_text = beat["caption"][level]
    cap_st = ParagraphStyle("tcap", fontName="Uni", fontSize=7.5, leading=9.8, textColor=hex_color("#09090B"))
    cap_w = 326.0
    cap_p, _, cap_th = measure_para(cap_text, cap_st, cap_w - 15)
    cap_h = cap_th + 10.0
    cap_x = x + pad
    cap_y = art_y + art_h - pad - cap_h

    c.setFillColor(hex_color("#09090B", 0.82))
    c.rect(cap_x + 2.8, cap_y - 2.8, cap_w, cap_h, fill=1, stroke=0)
    c.setFillColor(hex_color("#FFFFFF" if is_manga else "#FEF3C7", 0.96))
    c.setStrokeColor(hex_color("#09090B"))
    c.setLineWidth(1.5)
    c.rect(cap_x, cap_y, cap_w, cap_h, fill=1, stroke=1)
    if is_manga:
        c.setFillColor(hex_color(theme))
        c.rect(cap_x, cap_y, 4.5, cap_h, fill=1, stroke=0)
    cap_p.drawOn(c, cap_x + (9 if is_manga else 7.5), cap_y + 5.0)

    # 3. Top-Right Slanted Comic/Manga SFX
    sfx = beat.get("sfx", {})
    if sfx.get("text"):
        c.saveState()
        c.translate(x + w - 12, art_y + art_h - 24)
        c.rotate(-(sfx.get("rotate", -4)))
        c.setFont("Impact", 15.5)
        stxt = sfx["text"]
        c.setFillColor(hex_color("#09090B"))
        for dx, dy in [(-1.3, 0), (1.3, 0), (0, -1.3), (0, 1.3), (1.8, -1.8)]:
            c.drawRightString(dx, dy, stxt)
        c.setFillColor(hex_color("#FFFFFF" if is_manga else "#FDE047"))
        c.drawRightString(0, 0, stxt)
        c.restoreState()

    # 4. Bottom-Left & Bottom-Right Speech Balloons
    bub_st = ParagraphStyle("tbub", fontName="Uni", fontSize=7.3, leading=9.5, textColor=hex_color("#0F172A"))
    bub_w = 260.0
    for idx, b in enumerate(beat["bubbles"][:2]):
        b_txt = f"“{b[level]}”"
        bp, _, bth = measure_para(b_txt, bub_st, bub_w - 14)
        bh = bth + 22.0
        bx = x + pad if idx == 0 else x + w - pad - bub_w
        by = art_y + pad

        c.setFillColor(hex_color("#09090B", 0.80))
        c.roundRect(bx + 2.5, by - 2.5, bub_w, bh, 9, fill=1, stroke=0)
        c.setFillColor(hex_color("#FFFFFF", 0.95))
        c.setStrokeColor(hex_color("#09090B"))
        c.setLineWidth(1.5)
        c.roundRect(bx, by, bub_w, bh, 9, fill=1, stroke=1)

        sp_col = SPEAKER_COLORS.get(b["speaker"], theme)
        sp_lbl = b["speaker_name"].upper()
        sp_w = pdfmetrics.stringWidth(sp_lbl, "SansBold", 6.4) + 11
        c.setFillColor(hex_color(sp_col))
        c.roundRect(bx + 7, by + bh - 15.2, sp_w, 11.2, 5.5, fill=1, stroke=0)
        c.setFillColor(hex_color("#FFFFFF"))
        c.setFont("SansBold", 6.4)
        c.drawString(bx + 12.5, by + bh - 12.0, sp_lbl)

        bp.drawOn(c, bx + 7, by + 5.0)

    # 5. Slim Dark Science Data HUD Strip Directly Beneath Artwork (58 pt)
    hud = beat["data_hud"]
    c.setFillColor(hex_color("#0F172A"))
    c.rect(x, hud_y, w, hud_h, fill=1, stroke=0)
    c.setStrokeColor(hex_color("#09090B"))
    c.setLineWidth(1.6)
    c.rect(x, hud_y, w, hud_h, fill=0, stroke=1)
    c.setFillColor(hex_color(theme))
    c.rect(x, hud_y + hud_h - 2.6, w, 2.6, fill=1, stroke=0)

    # Row 1: Beat Number + HUD Headline + Dataset
    r1_y = hud_y + hud_h - 13.5
    c.setFillColor(hex_color("#F8FAFC"))
    c.setFont("SansBold", 7.8)
    c.drawString(x + 8, r1_y, f"BEAT {beat['page_number']} DATA HUD — {hud['headline']}")
    c.setFillColor(hex_color("#94A3B8"))
    c.setFont("Uni", 6.9)
    c.drawRightString(x + w - 8, r1_y, hud["dataset"])

    # Row 2: Governing Equation Pill + Key Metric
    r2_y = r1_y - 14.5
    eq_txt = hud["equation"]
    eq_w = min(295.0, pdfmetrics.stringWidth(eq_txt, "Uni", 7.3) + 13)
    c.setFillColor(hex_color("#1E293B"))
    c.setStrokeColor(hex_color("#38BDF8", 0.55))
    c.setLineWidth(0.7)
    c.roundRect(x + 8, r2_y - 2.8, eq_w, 12.5, 3, fill=1, stroke=1)
    c.setFillColor(hex_color("#38BDF8"))
    c.setFont("Uni", 7.3)
    c.drawString(x + 14, r2_y + 0.6, eq_txt)

    c.setFillColor(hex_color("#FDE047"))
    c.setFont("Uni", 7.1)
    c.drawString(x + 8 + eq_w + 8, r2_y + 0.6, hud["metric"])

    # Row 3: Concise Explanation (up to 2 lines cleanly fitted)
    exp_st = ParagraphStyle("hexp", fontName="Uni", fontSize=7.1, leading=9.2, textColor=hex_color("#E2E8F0"))
    draw_para_top(c, hud["explanation"], exp_st, x + 8, r2_y - 5.0, w - 16)


def draw_two_tier_comic_page(
    c: canvas.Canvas,
    novel: dict,
    beat_top: dict,
    beat_bot: dict,
    page_num: int,
    level: str,
    uniform: bool,
) -> None:
    accent = novel["accent_color"]
    lx = page_left_x(page_num, uniform)

    # Crisp comic paper background
    c.setFillColor(hex_color("#FFFFFF"))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    # Top Running Act Header Bar (20 pt)
    bar_h = 20.0
    bar_y = PAGE_H - MARGIN_TOP - bar_h
    c.setFillColor(hex_color("#060A12"))
    c.rect(lx, bar_y, LIVE_W, bar_h, fill=1, stroke=0)
    c.setFillColor(hex_color(accent))
    c.setFont("SansBold", 8.2)
    c.drawString(lx + 9, bar_y + 6.5, f"VOL {novel['volume']:02d} · {novel['title']}  |  {beat_top['act'].upper()}")
    c.setFillColor(hex_color("#E2E8F0"))
    c.setFont("Uni", 7.8)
    c.drawRightString(
        lx + LIVE_W - 9,
        bar_y + 6.5,
        f"Beats {beat_top['page_number']}–{beat_bot['page_number']} of 6  ·  {LEVEL_META[level][2]}",
    )

    # Exact 2-Tier Vertical Allocation:
    # top_bar (20) + gap (6) + Tier1 (282+58=340) + gutter (12) + Tier2 (282+58=340) + folio (22) = 740 pt!
    art_h = 282.0
    hud_h = 58.0
    tier_h = art_h + hud_h  # 340 pt
    gutter = 12.0

    t1_y = bar_y - 6.0 - tier_h
    t2_y = t1_y - gutter - tier_h

    draw_comic_tier(c, novel, beat_top, lx, t1_y, LIVE_W, art_h, hud_h, level)
    draw_comic_tier(c, novel, beat_bot, lx, t2_y, LIVE_W, art_h, hud_h, level)

    draw_folio_footer(c, novel, page_num, lx, level, dark=False)
    c.showPage()


# =============================================================================
# PAGE 6 (VERSO) — SCIENCE LAB: 6-EQUATION STUDY CARD, INQUIRY & DIRECTOR'S CUT
# =============================================================================
def draw_science_lab_page(
    c: canvas.Canvas,
    novel: dict,
    comics_by_id: dict,
    level: str,
    uniform: bool,
) -> None:
    theme = novel["theme_color"]
    accent = novel["accent_color"]
    lx = page_left_x(6, uniform)

    c.setFillColor(hex_color("#FFFFFF"))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setStrokeColor(hex_color("#0F172A"))
    c.setLineWidth(1.3)
    c.rect(lx, MARGIN_BOT + 16, LIVE_W, LIVE_H - 16, fill=0, stroke=1)

    y = PAGE_H - MARGIN_TOP

    # Header Banner
    hdr_h = 44
    c.setFillColor(hex_color("#0F172A"))
    c.rect(lx, y - hdr_h, LIVE_W, hdr_h, fill=1, stroke=0)
    c.setFillColor(hex_color(theme))
    c.rect(lx, y - hdr_h, LIVE_W, 4, fill=1, stroke=0)
    c.setFillColor(hex_color(accent))
    c.setFont("SansBold", 8.0)
    c.drawString(lx + 12, y - 14, f"SCIENCE LAB & DIRECTOR'S CUT  ·  {LEVEL_META[level][2].upper()}")
    c.setFillColor(hex_color("#FFFFFF"))
    c.setFont("SansBlack", 13.5)
    c.drawString(lx + 12, y - 33, f"Governing Equations, Inquiry Prompts & Storyboard Notes — Vol. {novel['volume']:02d}")
    y -= hdr_h + 12

    # Block 1: 2x3 Governing Equations & Datasets Quick-Reference Card
    c.setFillColor(hex_color("#0F172A"))
    c.setFont("SansBold", 9.5)
    c.drawString(lx + 12, y - 9, "COMPLETE GOVERNING EQUATIONS & QUANTITATIVE BENCHMARKS (BEATS 1–6)")
    c.setStrokeColor(hex_color(theme))
    c.setLineWidth(1.4)
    c.line(lx + 12, y - 13, lx + LIVE_W - 12, y - 13)
    y -= 20

    eq_cols = 2
    eq_gap = 8.0
    eq_w = (LIVE_W - 24 - eq_gap) / eq_cols
    eq_h = 54.0
    eh_st = ParagraphStyle("eh", fontName="SansBold", fontSize=7.4, leading=9.2, textColor=hex_color("#F8FAFC"))
    eq_st = ParagraphStyle("eq", fontName="Uni", fontSize=7.2, leading=9.2, textColor=hex_color("#38BDF8"))
    em_st = ParagraphStyle("em", fontName="Uni", fontSize=6.8, leading=8.8, textColor=hex_color("#CBD5E1"))

    for i in range(0, 6, 2):
        for j in range(2):
            p = novel["pages"][i + j]
            hud = p["data_hud"]
            ex = lx + 12 + j * (eq_w + eq_gap)
            c.setFillColor(hex_color("#0F172A"))
            c.roundRect(ex, y - eq_h, eq_w, eq_h, 4.5, fill=1, stroke=0)
            c.setFillColor(hex_color(theme))
            c.rect(ex, y - eq_h, 3.5, eq_h, fill=1, stroke=0)
            draw_para_top(c, f"Beat {p['page_number']}: {hud['headline']}", eh_st, ex + 8, y - 4.5, eq_w - 13)
            draw_para_top(c, hud["equation"], eq_st, ex + 8, y - 18.5, eq_w - 13)
            draw_para_top(c, f"{hud['metric']} · {hud['dataset']}", em_st, ex + 8, y - 34.5, eq_w - 13)
        y -= eq_h + 6

    y -= 8

    # Block 2: Level-Matched Inquiry Prompts (top 3 linked comics)
    inq_heading = (
        "9–12+ QUANTITATIVE MECHANISMS & SEMINAR INQUIRY PROMPTS"
        if level == "hs"
        else "6–8 INVESTIGATOR DISCOVERIES & DISCUSSION PROMPTS"
        if level == "ms"
        else "K–5 WONDER QUESTIONS & DISCOVERIES"
    )
    detail_lbl = "9–12+ Quantitative Detail" if level == "hs" else "Key Scientific Discovery"

    c.setFillColor(hex_color("#0F172A"))
    c.setFont("SansBold", 9.5)
    c.drawString(lx + 12, y - 9, inq_heading)
    c.setStrokeColor(hex_color(theme))
    c.setLineWidth(1.4)
    c.line(lx + 12, y - 13, lx + LIVE_W - 12, y - 13)
    y -= 20

    qh_st = ParagraphStyle("qh6", fontName="SansBold", fontSize=8.1, leading=10.2, textColor=hex_color(theme))
    qb_st = ParagraphStyle("qb6", fontName="Uni", fontSize=7.7, leading=10.2, textColor=hex_color("#1E293B"))

    for cid in novel["source_comic_ids"][:3]:
        cm = comics_by_id.get(cid)
        if not cm:
            continue
        card_top = y
        detail_txt = cm["hs_detail"] if level == "hs" else cm["discovery"]
        h1 = draw_para_top(c, f"{cm['title']} (Archive Issue #{cm['issue_number']:02d})", qh_st, lx + 20, y - 5, LIVE_W - 40)
        h2 = draw_para_top(c, f"Inquiry Prompt: {cm['wonder_q']}", qb_st, lx + 20, y - 7 - h1, LIVE_W - 40)
        h3 = draw_para_top(c, f"{detail_lbl}: {detail_txt}", qb_st, lx + 20, y - 9 - h1 - h2, LIVE_W - 40)
        bh = h1 + h2 + h3 + 14
        c.setStrokeColor(hex_color("#CBD5E1"))
        c.setLineWidth(0.8)
        c.roundRect(lx + 12, card_top - bh, LIVE_W - 24, bh, 5, fill=0, stroke=1)
        y -= bh + 7

    y -= 6

    # Block 3: Director's Camera & Data-Storytelling Log (Compact 6-Beat Table)
    if y > MARGIN_BOT + 120:
        c.setFillColor(hex_color("#0F172A"))
        c.setFont("SansBold", 9.5)
        c.drawString(lx + 12, y - 9, "DIRECTOR'S CAMERA & DATA-STORYTELLING NOTES")
        c.setStrokeColor(hex_color(theme))
        c.setLineWidth(1.4)
        c.line(lx + 12, y - 13, lx + LIVE_W - 12, y - 13)
        y -= 19

        dn_st = ParagraphStyle("dn6", fontName="Uni", fontSize=7.1, leading=9.3, textColor=hex_color("#334155"))
        for p in novel["pages"]:
            if y < MARGIN_BOT + 30:
                break
            line_txt = f"Beat {p['page_number']} ({p['beat_title']}): {p['director']['data_story_note']}"
            dh = draw_para_top(c, line_txt, dn_st, lx + 14, y, LIVE_W - 28)
            y -= dh + 3.5

    draw_folio_footer(c, novel, 6, lx, level, dark=False)
    c.showPage()


# =============================================================================
# PAGE 7 (RECTO) — CLASSROOM MISSION PROTOCOL & CLICKABLE REPO DIRECTORY
# =============================================================================
def draw_classroom_repos_page(
    c: canvas.Canvas,
    novel: dict,
    comics_by_id: dict,
    level: str,
    uniform: bool,
) -> None:
    theme = novel["theme_color"]
    accent = novel["accent_color"]
    lx = page_left_x(7, uniform)

    c.setFillColor(hex_color("#FFFFFF"))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setStrokeColor(hex_color("#0F172A"))
    c.setLineWidth(1.3)
    c.rect(lx, MARGIN_BOT + 16, LIVE_W, LIVE_H - 16, fill=0, stroke=1)

    y = PAGE_H - MARGIN_TOP

    # Header Banner
    hdr_h = 44
    c.setFillColor(hex_color("#0F172A"))
    c.rect(lx, y - hdr_h, LIVE_W, hdr_h, fill=1, stroke=0)
    c.setFillColor(hex_color(theme))
    c.rect(lx, y - hdr_h, LIVE_W, 4, fill=1, stroke=0)
    c.setFillColor(hex_color(accent))
    c.setFont("SansBold", 8.0)
    c.drawString(lx + 12, y - 14, f"HANDS-ON INVESTIGATION & OPEN-SOURCE TOOLS  ·  NGSS: {novel['ngss']}")
    c.setFillColor(hex_color("#FFFFFF"))
    c.setFont("SansBlack", 13.5)
    c.drawString(lx + 12, y - 33, f"Classroom Lab Protocol & Linked Research Directory — Vol. {novel['volume']:02d}")
    y -= hdr_h + 12

    # Hands-On Classroom Mission Protocol Card
    proto_h = 118
    c.setFillColor(hex_color("#FEFCE8"))
    c.setStrokeColor(hex_color(theme))
    c.setLineWidth(1.4)
    c.roundRect(lx + 12, y - proto_h, LIVE_W - 24, proto_h, 6, fill=1, stroke=1)
    c.setFillColor(hex_color(theme))
    c.rect(lx + 12, y - proto_h, 6, proto_h, fill=1, stroke=0)

    c.setFillColor(hex_color(theme))
    c.setFont("SansBold", 8.8)
    c.drawString(lx + 24, y - 15, f"HANDS-ON MISSION ACTIVITY ({LEVEL_META[level][2].upper()})")
    act_st = ParagraphStyle("act7", fontName="Uni", fontSize=8.8, leading=12.0, textColor=hex_color("#0F172A"))
    ah = draw_para_top(c, novel["mission_activity"], act_st, lx + 24, y - 21, LIVE_W - 44)

    # 4-Step Classroom Facilitation Checklist inside the card
    chk_st = ParagraphStyle("chk7", fontName="Uni", fontSize=7.7, leading=10.3, textColor=hex_color("#334155"))
    steps = [
        "1. Predict: Read Act I (Page 03) and formulate a testable hypothesis before opening the live simulator.",
        "2. Experiment: Launch the interactive browser tool below and sweep the primary environmental/biological variable.",
        "3. Quantify: Compare your simulated outputs against the governing equations and NASA OSDR metrics on Page 06.",
        f"4. Connect ({novel['ngss']}): Explain how this mechanism links Earth biology to sustainable ISS or lunar habitats.",
    ]
    cy = y - 27 - ah
    for st in steps:
        cy -= draw_para_top(c, st, chk_st, lx + 24, cy, LIVE_W - 44) + 2.5

    y -= proto_h + 16

    # Linked Open-Source Repositories & Live Simulators Directory (with clickable PDF links!)
    c.setFillColor(hex_color("#0F172A"))
    c.setFont("SansBold", 9.8)
    c.drawString(lx + 12, y - 9, f"LINKED OPEN-SOURCE REPOSITORIES & LIVE BROWSER SIMULATORS ({len(novel['source_comic_ids'])})")
    c.setStrokeColor(hex_color(theme))
    c.setLineWidth(1.4)
    c.line(lx + 12, y - 13, lx + LIVE_W - 12, y - 13)
    y -= 21

    rt_st = ParagraphStyle("rt7", fontName="SansBold", fontSize=8.3, leading=10.2, textColor=hex_color("#0F172A"))
    rm_st = ParagraphStyle("rm7", fontName="Uni", fontSize=7.6, leading=9.8, textColor=hex_color("#334155"))
    ru_st = ParagraphStyle("ru7", fontName="Uni", fontSize=7.3, leading=9.4, textColor=hex_color("#0369A1"))

    n_repos = len(novel["source_comic_ids"])
    avail_h = y - (MARGIN_BOT + 26)
    row_h = min(44.0, max(34.0, (avail_h - (n_repos - 1) * 4.5) / max(1, n_repos)))

    for cid in novel["source_comic_ids"]:
        cm = comics_by_id.get(cid)
        if not cm or y - row_h < MARGIN_BOT + 22:
            continue
        c.setFillColor(hex_color("#F8FAFC"))
        c.setStrokeColor(hex_color("#CBD5E1"))
        c.setLineWidth(0.75)
        c.roundRect(lx + 12, y - row_h, LIVE_W - 24, row_h, 4.5, fill=1, stroke=1)
        c.setFillColor(hex_color(theme))
        c.rect(lx + 12, y - row_h, 3.5, row_h, fill=1, stroke=0)

        draw_para_top(c, f"Issue #{cm['issue_number']:02d} · {cm['title']}", rt_st, lx + 21, y - 4.5, LIVE_W - 40)
        draw_para_top(c, cm["metric_badge"], rm_st, lx + 21, y - 15.5, LIVE_W - 40)
        draw_para_top(c, f"Live App: {cm['url']}   |   Code: {cm['repo_url']}", ru_st, lx + 21, y - 26.0, LIVE_W - 40)
        # Real clickable PDF hyperlink on the whole card!
        c.linkURL(cm["url"], (lx + 12, y - row_h, lx + LIVE_W - 12, y), relative=0)
        y -= row_h + 4.5

    draw_folio_footer(c, novel, 7, lx, level, dark=False)
    c.showPage()


# =============================================================================
# PAGE 8 (VERSO) — COLLECTIBLE BACK COVER: TAKE-HOME POSTER & 10-VOL CHECKLIST
# =============================================================================
def draw_back_cover_page(
    c: canvas.Canvas,
    novel: dict,
    all_novels: list[dict],
    level: str,
    uniform: bool,
) -> None:
    theme = novel["theme_color"]
    accent = novel["accent_color"]
    lx = page_left_x(8, uniform)

    # Rich deep-space comic back cover
    c.setFillColor(hex_color("#070B14"))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    # Outer accent border
    c.setStrokeColor(hex_color(theme))
    c.setLineWidth(2.4)
    c.rect(lx, MARGIN_BOT + 18, LIVE_W, LIVE_H - 18, fill=0, stroke=1)

    y = PAGE_H - MARGIN_TOP - 14

    # Top Imprint Eyebrow
    c.setFillColor(hex_color(accent))
    c.setFont("SansBold", 9.0)
    c.drawCentredString(lx + LIVE_W / 2, y, "THE COSE CHRONICLES  ·  ILLUSTRATED SPACE BIOLOGY ANTHOLOGY")
    y -= 24

    # Giant Hero Take-Home Poster Card
    th_h = 138
    c.setFillColor(hex_color("#0F172A"))
    c.setStrokeColor(hex_color(accent))
    c.setLineWidth(1.8)
    c.roundRect(lx + 18, y - th_h, LIVE_W - 36, th_h, 10, fill=1, stroke=1)
    c.setFillColor(hex_color(theme))
    c.roundRect(lx + 18 + (LIVE_W - 36 - 170) / 2, y - 11, 170, 20, 10, fill=1, stroke=0)
    c.setFillColor(hex_color("#FFFFFF"))
    c.setFont("SansBold", 8.2)
    c.drawCentredString(lx + LIVE_W / 2, y - 4, "KEY TAKE-HOME MESSAGE")

    quote_st = ParagraphStyle(
        "bcq",
        fontName="Uni",
        fontSize=14.0,
        leading=19.5,
        textColor=hex_color("#F8FAFC"),
        alignment=1,
    )
    qh = draw_para_top(c, f"“{novel['take_home']}”", quote_st, lx + 34, y - 28, LIVE_W - 68)
    sub_q_st = ParagraphStyle("bcsq", fontName="Uni", fontSize=8.8, leading=12.0, textColor=hex_color("#94A3B8"), alignment=1)
    draw_para_top(
        c,
        f"— Volume {novel['volume']:02d}: {novel['title']} ({novel['subtitle']})",
        sub_q_st,
        lx + 34,
        y - 36 - qh,
        LIVE_W - 68,
    )
    y -= th_h + 24

    # Complete 10-Volume Collector's Checklist
    c.setFillColor(hex_color("#F8FAFC"))
    c.setFont("SansBlack", 12.0)
    c.drawCentredString(lx + LIVE_W / 2, y, "COLLECT ALL 10 VOLUMES OF THE COSE CHRONICLES")
    c.setFillColor(hex_color("#94A3B8"))
    c.setFont("Uni", 8.4)
    c.drawCentredString(lx + LIVE_W / 2, y - 14, "6 Marvel-Core Graphic Novels  +  4 Specialized Manga Data-Stories  ·  ISS · Moon · Earth")
    y -= 30

    row_h = 33.5
    for item in all_novels:
        is_this = item["volume"] == novel["volume"]
        bg = hex_color(theme, 0.28) if is_this else hex_color("#0F172A")
        bd = hex_color(accent if is_this else "#334155")
        c.setFillColor(bg)
        c.setStrokeColor(bd)
        c.setLineWidth(1.4 if is_this else 0.8)
        c.roundRect(lx + 18, y - row_h, LIVE_W - 36, row_h, 5, fill=1, stroke=1)

        # Volume pill
        c.setFillColor(hex_color(item["theme_color"]))
        c.roundRect(lx + 24, y - row_h + 7, 36, 19, 4, fill=1, stroke=0)
        c.setFillColor(hex_color("#FFFFFF"))
        c.setFont("SansBlack", 8.8)
        c.drawCentredString(lx + 42, y - row_h + 13.5, f"V{item['volume']:02d}")

        # Title & Subtitle
        c.setFillColor(hex_color("#FFFFFF"))
        c.setFont("SansBold", 8.6)
        c.drawString(lx + 68, y - 12.5, f"{item['title']} — {item['subtitle']}")
        c.setFillColor(hex_color("#CBD5E1"))
        c.setFont("Uni", 7.4)
        fam_tag = "Marvel" if item["art_style_family"] == "marvel" else "Manga"
        c.drawString(
            lx + 68,
            y - 24.5,
            f"{fam_tag}: {item['art_style_label']}  ·  {' · '.join(item['worlds'])}  ·  {' + '.join(item['perspectives'])}",
        )

        # Right status badge
        if is_this:
            pill_w, pill_h = 66, 15.5
            pill_x = lx + LIVE_W - 25 - pill_w
            pill_y = y - row_h / 2 - pill_h / 2
            c.setFillColor(hex_color(accent))
            c.roundRect(pill_x, pill_y, pill_w, pill_h, 7.5, fill=1, stroke=0)
            c.setFillColor(hex_color("#070B14"))
            c.setFont("SansBlack", 7.1)
            c.drawCentredString(pill_x + pill_w / 2, pill_y + 5.0, "THIS ISSUE")
        else:
            c.setStrokeColor(hex_color("#64748B"))
            c.setLineWidth(1.1)
            c.rect(lx + LIVE_W - 38, y - 22, 11, 11, fill=0, stroke=1)

        y -= row_h + 4.5

    # Bottom CoSE Open-Science Imprint Box (Comic Back-Cover UPC style)
    box_h = 66
    box_y = MARGIN_BOT + 28
    c.setFillColor(hex_color("#0F172A"))
    c.setStrokeColor(hex_color("#475569"))
    c.setLineWidth(1.0)
    c.roundRect(lx + 18, box_y, LIVE_W - 36, box_h, 6, fill=1, stroke=1)

    c.setFillColor(hex_color("#F8FAFC"))
    c.setFont("SansBold", 9.0)
    c.drawString(lx + 30, box_y + 47, "COLLABORATIVE SCIENCE ENVIRONMENT (CoSE) · OPEN SCIENCE FOR ALL")
    c.setFillColor(hex_color("#CBD5E1"))
    c.setFont("Uni", 7.8)
    c.drawString(lx + 30, box_y + 33, "Created by Dr. Richard J. Barker · Director, CoSE · Chair, NASA GeneLab Plant Analysis Working Group")
    c.drawString(lx + 30, box_y + 21, "All 10 Flagship Graphic Novels & 114 Research Comics are grounded in open-source code and NASA OSDR FAIR datasets.")
    c.setFillColor(hex_color("#38BDF8"))
    c.setFont("SansBold", 8.2)
    c.drawString(lx + 30, box_y + 8, "Explore Interactive Web Edition & Live Simulators: https://dr-richard-barker.github.io/Comics/")
    c.linkURL("https://dr-richard-barker.github.io/Comics/", (lx + 18, box_y, lx + LIVE_W - 18, box_y + box_h), relative=0)

    draw_folio_footer(c, novel, 8, lx, level, dark=True)
    c.showPage()


def export_novel_pdf(
    novel: dict,
    all_novels: list[dict],
    comics_by_id: dict,
    cast_by_id: dict,
    level: str,
    out_dir: Path,
    uniform: bool = False,
) -> Path:
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / safe_filename_slug(novel, level)

    c = canvas.Canvas(str(out_path), pagesize=letter)  # 8.5 x 11 in Portrait
    c.setTitle(f"CoSE Chronicles Vol. {novel['volume']:02d}: {novel['title']} ({LEVEL_META[level][1]})")
    c.setAuthor("Dr. Richard J. Barker — Collaborative Science Environment (CoSE)")
    c.setSubject(f"{novel['subtitle']} | 8.5x11 Print Comic | NGSS: {novel['ngss']}")

    # 8-Page Classic 2-Tier 8.5" x 11" Comic Book
    draw_front_cover_page(c, novel, level, uniform)
    draw_inside_briefing_page(c, novel, cast_by_id, level, uniform)
    draw_two_tier_comic_page(c, novel, novel["pages"][0], novel["pages"][1], 3, level, uniform)
    draw_two_tier_comic_page(c, novel, novel["pages"][2], novel["pages"][3], 4, level, uniform)
    draw_two_tier_comic_page(c, novel, novel["pages"][4], novel["pages"][5], 5, level, uniform)
    draw_science_lab_page(c, novel, comics_by_id, level, uniform)
    draw_classroom_repos_page(c, novel, comics_by_id, level, uniform)
    draw_back_cover_page(c, novel, all_novels, level, uniform)

    c.save()
    return out_path


def impose_saddle_stitch_booklet(src_pdf: Path, out_dir: Path) -> Path:
    """
    Imposes an 8-page portrait PDF onto 4 two-up landscape sheets (11 x 8.5 in)
    in authentic saddle-stitch printer order: [8|1], [2|7], [6|3], [4|5].
    Print double-sided (flip on short edge), fold in half, staple down the spine!
    """
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / src_pdf.name.replace(".pdf", "_Booklet_11x8.5.pdf")

    src = fitz.open(src_pdf)
    assert len(src) == 8, f"Expected 8 pages for booklet imposition, got {len(src)}"

    dst = fitz.open()
    sheet_w, sheet_h = 792.0, 612.0  # 11 x 8.5 in landscape
    half_w = sheet_w / 2.0           # 396 pt per half-letter panel

    # Saddle-stitch pairs (1-based page numbers -> 0-based indices)
    pairs = [(7, 0), (1, 6), (5, 2), (3, 4)]
    for left_idx, right_idx in pairs:
        page = dst.new_page(width=sheet_w, height=sheet_h)
        page.show_pdf_page(fitz.Rect(0, 0, half_w, sheet_h), src, left_idx, keep_proportion=True)
        page.show_pdf_page(fitz.Rect(half_w, 0, sheet_w, sheet_h), src, right_idx, keep_proportion=True)

    dst.save(out_path, deflate=True)
    dst.close()
    src.close()
    return out_path


def main() -> None:
    parser = argparse.ArgumentParser(description="Export 8.5x11 Portrait Print Comic PDFs for CoSE Flagship Graphic Novels.")
    parser.add_argument("--level", choices=["k5", "ms", "hs"], default="hs", help="Reading level (default: hs = 9-12+ Teacher)")
    parser.add_argument("--only-complete", action="store_true", help="Export only volumes with all 7/7 AI-illustrated WebP plates")
    parser.add_argument("--all", action="store_true", help="Export all 10 volumes (requires raster plates)")
    parser.add_argument("--uniform-margins", action="store_true", help="Use uniform left/right margins instead of alternating duplex gutters")
    parser.add_argument("--booklet", action="store_true", help="Also generate 2-up saddle-stitch folded booklet PDFs in exports/pdf/booklets/")
    args = parser.parse_args()

    register_fonts()

    novels_data = json.loads((DATA_DIR / "graphic_novels.json").read_text(encoding="utf-8"))
    catalog_data = json.loads((DATA_DIR / "comics_catalog.json").read_text(encoding="utf-8"))
    concepts_data = json.loads((DATA_DIR / "concepts.json").read_text(encoding="utf-8"))

    comics_by_id = {c["id"]: c for c in catalog_data["comics"]}
    cast_by_id = {c["id"]: c for c in concepts_data["cast"]}
    all_novels = novels_data["novels"]

    only_complete = args.only_complete or not args.all
    exported = []
    skipped = []

    for novel in all_novels:
        is_complete = novel["cover"]["has_raster"] and all(p["art"]["has_raster"] for p in novel["pages"])
        if only_complete and not is_complete:
            skipped.append(f"Vol {novel['volume']:02d} ({novel['raster_plate_count']}/7 plates)")
            continue
        if not is_complete:
            skipped.append(f"Vol {novel['volume']:02d} (missing raster plates)")
            continue

        pdf_path = export_novel_pdf(novel, all_novels, comics_by_id, cast_by_id, args.level, OUT_DIR, uniform=args.uniform_margins)
        size_mb = pdf_path.stat().st_size / (1024 * 1024)
        extra = ""
        if args.booklet:
            bk_path = impose_saddle_stitch_booklet(pdf_path, BOOKLET_DIR)
            extra = f" + booklet {bk_path.name}"
        exported.append((novel["volume"], pdf_path, size_mb))
        print(f"  [8.5x11 PDF OK] Vol {novel['volume']:02d} -> {pdf_path.relative_to(ROOT)} (8 portrait pages, {size_mb:.2f} MB){extra}")

    print(f"\nExported {len(exported)} print-ready 8.5\"x11\" Portrait Comic PDF(s) [{LEVEL_META[args.level][1]}] to {OUT_DIR.relative_to(ROOT)}/")
    if skipped:
        print(f"Skipped incomplete volumes awaiting final art pass: {', '.join(skipped)}")


if __name__ == "__main__":
    main()
