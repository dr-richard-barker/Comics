#!/usr/bin/env python3
"""
Asset Optimizer & Integrity Verifier for CoSE Flagship Graphic Novels.

Converts raw generated PNG comic plates into web-optimized WebP assets under
assets/novels/<slug>/{cover,page-01..page-06}.webp with deterministic sizing,
clean aspect ratios, and a JSON manifest recording exact width/height for
zero-CLS responsive rendering.

Usage:
  python3 scripts/optimize_novel_assets.py --manifest-map <map.json>
  python3 scripts/optimize_novel_assets.py --verify
"""
from __future__ import annotations

import argparse
import json
import shutil
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
NOVELS_ASSET_DIR = ROOT / "assets" / "novels"
MANIFEST_PATH = ROOT / "data" / "novel_assets_manifest.json"

EXPECTED_SLUGS = [
    "vol-01-breathless-in-zero-g",
    "vol-02-artemis-three-one-small-sprout",
    "vol-03-ghost-in-the-genome",
    "vol-04-kirbys-quantum-shield",
    "vol-05-lightning-without-a-brain",
    "vol-06-the-red-robin-harvest",
    "vol-07-alchemists-of-moon-dust",
    "vol-08-crew-vital",
    "vol-09-mission-control-everywhere",
    "vol-10-the-closed-loop-frontier",
]

EXPECTED_SLOTS = [
    "cover",
    "page-01",
    "page-02",
    "page-03",
    "page-04",
    "page-05",
    "page-06",
]

# Target max dimensions (preserves natural aspect ratio via ImageOps.contain or clean crop)
COVER_TARGET = (900, 1200)   # 3:4 comic book cover
PAGE_TARGET = (1400, 788)    # 16:9 widescreen comic spread
WEBP_QUALITY = 82
MAX_KB_PER_PLATE = 450


def convert_plate(src: Path, dst: Path, is_cover: bool) -> dict:
    dst.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im).convert("RGB")
        target_w, target_h = COVER_TARGET if is_cover else PAGE_TARGET
        # Fit cleanly to exact comic-plate aspect ratio with slight center crop if needed
        fitted = ImageOps.fit(im, (target_w, target_h), method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))
        fitted.save(dst, format="WEBP", quality=WEBP_QUALITY, method=6)
        size_bytes = dst.stat().st_size
        return {
            "path": str(dst.relative_to(ROOT)).replace("\\", "/"),
            "width": fitted.width,
            "height": fitted.height,
            "bytes": size_bytes,
            "kb": round(size_bytes / 1024, 1),
        }


def ingest_from_map(map_path: Path) -> None:
    mapping = json.loads(map_path.read_text(encoding="utf-8"))
    manifest = {}
    if MANIFEST_PATH.exists():
        try:
            manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
        except Exception:
            manifest = {}

    total_converted = 0
    for slug, slots in mapping.items():
        manifest.setdefault(slug, {})
        for slot, raw_path_str in slots.items():
            src = Path(raw_path_str)
            if not src.exists():
                raise FileNotFoundError(f"Missing raw image for {slug}/{slot}: {src}")
            dst = NOVELS_ASSET_DIR / slug / f"{slot}.webp"
            info = convert_plate(src, dst, is_cover=(slot == "cover"))
            manifest[slug][slot] = info
            total_converted += 1
            print(f"  [OK] {slug}/{slot}.webp -> {info['width']}x{info['height']} ({info['kb']} KB)")

    MANIFEST_PATH.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Converted {total_converted} plates and updated {MANIFEST_PATH.relative_to(ROOT)}")


def verify_all() -> None:
    missing = []
    oversized = []
    total_bytes = 0
    manifest = {}

    for slug in EXPECTED_SLUGS:
        manifest[slug] = {}
        for slot in EXPECTED_SLOTS:
            p = NOVELS_ASSET_DIR / slug / f"{slot}.webp"
            if not p.exists():
                missing.append(str(p.relative_to(ROOT)))
                continue
            with Image.open(p) as im:
                im.verify()
            with Image.open(p) as im:
                w, h = im.size
            sz = p.stat().st_size
            total_bytes += sz
            kb = round(sz / 1024, 1)
            if kb > MAX_KB_PER_PLATE:
                oversized.append(f"{p.relative_to(ROOT)} ({kb} KB)")
            manifest[slug][slot] = {
                "path": str(p.relative_to(ROOT)).replace("\\", "/"),
                "width": w,
                "height": h,
                "bytes": sz,
                "kb": kb,
            }

    if missing:
        print(f"ERROR: Missing {len(missing)} plates:")
        for m in missing:
            print("  -", m)
        sys.exit(1)

    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8")
    total_mb = total_bytes / (1024 * 1024)
    print(f"VERIFICATION PASSED: All 70 WebP comic plates exist & decode cleanly ({total_mb:.2f} MB total).")
    if oversized:
        print(f"WARNING: {len(oversized)} plates exceed {MAX_KB_PER_PLATE} KB: {', '.join(oversized[:5])}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Optimize & verify CoSE Graphic Novel plates.")
    parser.add_argument("--manifest-map", type=Path, help="JSON mapping {slug: {slot: raw_image_path}}")
    parser.add_argument("--verify", action="store_true", help="Verify all 70 WebP plates")
    args = parser.parse_args()

    if args.manifest_map:
        ingest_from_map(args.manifest_map)
    if args.verify:
        verify_all()
    if not args.manifest_map and not args.verify:
        parser.print_help()


if __name__ == "__main__":
    main()
