#!/usr/bin/env python3
"""
Builds data/graphic_novels.json, data/graphic_novels.js, and docs/STORY_BIBLE.md
for The CoSE Chronicles — 10 Flagship Illustrated Graphic Novels.

Cross-validates every linked comic ID against data/comics_catalog.json and attaches
asset metadata from data/novel_assets_manifest.json (raster WebP vs. Vector Art Studio).

Usage:
  python3 scripts/build_graphic_novels.py --verify
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"
DOCS_DIR = ROOT / "docs"
SCRIPTS_DIR = Path(__file__).resolve().parent

sys.path.insert(0, str(SCRIPTS_DIR))
from novels_data_part1 import NOVELS_PART_1
from novels_data_part2 import NOVELS_PART_2


def compile_story_bible_markdown(novels: list[dict], comics_by_id: dict) -> str:
    lines = [
        "# The CoSE Chronicles: Story Bible, Scripts & Director's Guide",
        "",
        "> **10 Flagship Educational Graphic Novels** synthesizing the biggest scientific discoveries across **114 open-source space biology research projects** by Dr. Richard J. Barker & the Collaborative Science Environment (CoSE).",
        ">",
        "> **Worlds Explored:** International Space Station (ISS) · The Moon (Artemis & Artemis City) · Earth (Mission Control, Helmholtz Labs, Rothamsted, Antarctica, Global Classrooms)",
        "> **Protagonist Perspectives:** Astronauts · Phytonauts (Spacefaring Plants & Fungi) · Mission Control Scientists",
        "> **Art Direction:** 6 Marvel-Core Graphic Novel Styles + 4 Specialized Manga Data-Storytelling Styles",
        "",
        "---",
        "",
        "## Anthology Roster",
        "",
        "| Vol. | Title | Worlds | POV | Art Style | Art Plates |",
        "| :---: | :--- | :--- | :--- | :--- | :--- |",
    ]
    for n in novels:
        raster_cnt = (1 if n["cover"]["has_raster"] else 0) + sum(1 for p in n["pages"] if p["art"]["has_raster"])
        plate_note = f"{raster_cnt}/7 AI WebP + {7 - raster_cnt}/7 Vector Art Studio"
        lines.append(
            f"| **{n['volume']:02d}** | **{n['title']}**: *{n['subtitle']}* | {', '.join(n['worlds'])} | {', '.join(n['perspectives'])} | {n['art_style_label']} | {plate_note} |"
        )

    lines.append("")
    lines.append("---")
    lines.append("")

    for n in novels:
        lines.extend([
            f"## Volume {n['volume']:02d} — {n['title']}: {n['subtitle']}",
            "",
            f"*{n['tagline']}*",
            "",
            f"- **Art Style ({n['art_style_family'].title()}):** {n['art_style_label']} — {n['art_style_notes']}",
            f"- **Worlds:** {', '.join(n['worlds'])} · **POV:** {', '.join(n['perspectives'])} · **NGSS:** `{n['ngss']}`",
            f"- **Take-Home Message:** “{n['take_home']}”",
            f"- **Hands-On Mission Activity:** {n['mission_activity']}",
            "",
            "### Key Research Breakthroughs Synthesized",
            "",
        ])
        for bf in n["big_finds"]:
            lines.append(f"- {bf}")
        lines.append("")
        lines.append("### Page-by-Page Script & Director's Notes")
        lines.append("")

        for p in n["pages"]:
            art_kind = "AI-Illustrated WebP" if p["art"]["has_raster"] else "Marvel/Manga Vector Art Studio"
            lines.extend([
                f"#### Page {p['page_number']} ({p['act']}) — {p['beat_title']}",
                f"- **Art Plate:** `{p['art']['path']}` ({art_kind}) · **SFX:** `{p['sfx']['text']}`",
                f"- **Director's Camera & Lighting:** {p['director']['shot']} {p['director']['lighting']}",
                f"- **Pacing & Data Story:** {p['director']['pacing']} *{p['director']['data_story_note']}*",
                f"- **Narration (6–8):** {p['caption']['ms']}",
            ])
            for b in p["bubbles"]:
                lines.append(f"  - **{b['speaker_name']}:** “{b['ms']}”")
            hud = p["data_hud"]
            lines.append(
                f"- **Science Data HUD:** **{hud['headline']}** — `{hud['equation']}` ({hud['metric']} · *{hud['dataset']}*)"
            )
            lines.append("")

        linked_titles = [
            f"`{cid}` ({comics_by_id[cid]['title']})" for cid in n["source_comic_ids"] if cid in comics_by_id
        ]
        lines.append("**Linked Archive Research Projects:** " + ", ".join(linked_titles))
        lines.append("")
        lines.append("---")
        lines.append("")

    return "\n".join(lines)


def main() -> None:
    catalog_path = DATA_DIR / "comics_catalog.json"
    if not catalog_path.exists():
        raise FileNotFoundError(f"Missing {catalog_path}")

    catalog = json.loads(catalog_path.read_text(encoding="utf-8"))
    comics_by_id = {c["id"]: c for c in catalog["comics"]}

    manifest = {}
    manifest_path = DATA_DIR / "novel_assets_manifest.json"
    if manifest_path.exists():
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))

    raw_novels = NOVELS_PART_1 + NOVELS_PART_2
    assert len(raw_novels) == 10, f"Expected 10 graphic novels, found {len(raw_novels)}"

    compiled_novels = []
    reverse_comic_to_novels: dict[str, list[dict]] = {}
    total_raster = 0
    total_vector = 0

    for novel in raw_novels:
        slug = novel["slug"]
        slug_manifest = manifest.get(slug, {})

        # Cover plate metadata
        cover_rel = f"assets/novels/{slug}/cover.webp"
        cover_exists = (ROOT / cover_rel).exists()
        cover_info = slug_manifest.get("cover", {})
        if cover_exists:
            total_raster += 1
        else:
            total_vector += 1

        cover_obj = {
            "path": cover_rel,
            "has_raster": cover_exists,
            "width": cover_info.get("width", 900),
            "height": cover_info.get("height", 1200),
            "scene_key": f"vol{novel['volume']:02d}_cover",
        }

        pages_out = []
        for p in novel["pages"]:
            pnum = p["page_number"]
            slot = f"page-{pnum:02d}"
            p_rel = f"assets/novels/{slug}/{slot}.webp"
            p_exists = (ROOT / p_rel).exists()
            p_info = slug_manifest.get(slot, {})
            if p_exists:
                total_raster += 1
            else:
                total_vector += 1

            # Attach live URL & repo URL from catalog for the page's Data HUD linked comic
            hud = dict(p["data_hud"])
            lcid = hud["linked_comic_id"]
            if lcid not in comics_by_id:
                raise KeyError(f"Novel {slug} page {pnum} links unknown comic_id: {lcid}")
            hud["linked_title"] = comics_by_id[lcid]["title"]
            hud["linked_url"] = comics_by_id[lcid]["url"]
            hud["linked_repo_url"] = comics_by_id[lcid]["repo_url"]

            page_obj = dict(p)
            page_obj["data_hud"] = hud
            page_obj["art"] = {
                "path": p_rel,
                "has_raster": p_exists,
                "width": p_info.get("width", 1400),
                "height": p_info.get("height", 788),
                "scene_key": p["scene_key"],
            }
            pages_out.append(page_obj)

        # Verify all source_comic_ids exist and enrich reverse lookup
        for scid in novel["source_comic_ids"]:
            if scid not in comics_by_id:
                raise KeyError(f"Novel {slug} source_comic_ids contains unknown comic_id: {scid}")
            reverse_comic_to_novels.setdefault(scid, []).append({
                "id": novel["id"],
                "volume": novel["volume"],
                "title": novel["title"],
                "subtitle": novel["subtitle"],
                "art_style_label": novel["art_style_label"],
                "theme_color": novel["theme_color"],
            })

        compiled = dict(novel)
        compiled["cover"] = cover_obj
        compiled["pages"] = pages_out
        compiled["raster_plate_count"] = (1 if cover_exists else 0) + sum(1 for p in pages_out if p["art"]["has_raster"])
        compiled_novels.append(compiled)

    payload = {
        "anthology_title": "The CoSE Chronicles: 10 Flagship Space Biology Graphic Novels",
        "anthology_subtitle": "Adventures across the ISS, the Moon, and Earth—through the eyes of Astronauts, Phytonauts, and Mission Control Scientists in Marvel & Manga Art Styles",
        "total_novels": len(compiled_novels),
        "total_pages": sum(len(n["pages"]) for n in compiled_novels),
        "total_plates": total_raster + total_vector,
        "raster_plates": total_raster,
        "vector_studio_plates": total_vector,
        "worlds": ["ISS", "Moon", "Earth"],
        "perspectives": ["Astronaut", "Phytonaut", "Mission Control"],
        "art_families": [
            {"id": "marvel", "label": "Marvel Core Styles (6)", "emoji": "💥"},
            {"id": "manga", "label": "Manga Data-Styles (4)", "emoji": "🗾"},
        ],
        "novels": compiled_novels,
        "comic_to_novels": reverse_comic_to_novels,
    }

    out_json = DATA_DIR / "graphic_novels.json"
    out_json.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")

    out_js = DATA_DIR / "graphic_novels.js"
    out_js.write_text(
        "/* Auto-generated by scripts/build_graphic_novels.py */\n"
        "window.COSE_GRAPHIC_NOVELS = " + json.dumps(payload, indent=2, ensure_ascii=False) + ";\n",
        encoding="utf-8",
    )

    DOCS_DIR.mkdir(parents=True, exist_ok=True)
    bible_md = compile_story_bible_markdown(compiled_novels, comics_by_id)
    (DOCS_DIR / "STORY_BIBLE.md").write_text(bible_md, encoding="utf-8")

    print(
        f"Built {len(compiled_novels)} flagship graphic novels ({payload['total_pages']} story pages, "
        f"{total_raster} AI-illustrated WebP plates + {total_vector} Marvel/Manga Vector Art Studio plates)."
    )
    print(f"Cross-linked {len(reverse_comic_to_novels)} unique research projects back to flagship graphic novels.")

    if "--verify" in sys.argv:
        seen_ids = set()
        for n in compiled_novels:
            assert n["id"] not in seen_ids, f"Duplicate novel id: {n['id']}"
            seen_ids.add(n["id"])
            assert len(n["pages"]) == 6, f"{n['id']} must have 6 pages"
            assert n["art_style_family"] in ("marvel", "manga"), f"Invalid art family in {n['id']}"
            assert len(n["big_finds"]) >= 3, f"{n['id']} needs >= 3 big finds"
            assert len(n["source_comic_ids"]) >= 5, f"{n['id']} needs >= 5 source repos"
            for p in n["pages"]:
                for lvl in ("k5", "ms", "hs"):
                    assert p["caption"].get(lvl), f"Missing {lvl} caption in {n['id']} p{p['page_number']}"
                assert len(p["bubbles"]) == 2, f"Expected 2 speech bubbles in {n['id']} p{p['page_number']}"
                for b in p["bubbles"]:
                    for lvl in ("k5", "ms", "hs"):
                        assert b.get(lvl), f"Missing {lvl} dialogue in {n['id']} p{p['page_number']}"
                assert p["director"]["shot"] and p["director"]["data_story_note"], f"Missing director notes in {n['id']} p{p['page_number']}"
                assert p["data_hud"]["equation"] and p["data_hud"]["linked_comic_id"] in comics_by_id
                if p["art"]["has_raster"]:
                    assert (ROOT / p["art"]["path"]).exists(), f"Missing raster plate: {p['art']['path']}"
        print("VERIFICATION PASSED: All 10 flagship graphic novels, 60 pages, 180 captions, 360 bubbles, director's notes, Data HUDs, and cross-links are 100% valid!")


if __name__ == "__main__":
    main()
