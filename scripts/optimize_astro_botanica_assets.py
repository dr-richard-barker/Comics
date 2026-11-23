#!/usr/bin/env python3
"""
Asset Optimizer & Manifest Generator for ASTRO-BOTANICA Manga Covers.

Converts raw generated cover images into web-optimized WebP assets under
assets/astro_botanica/covers/vol-{XX}.webp with deterministic sizing (900x1200),
clean aspect ratios, and records metadata in data/astro_botanica_covers_manifest.json
for zero-CLS responsive rendering.

Usage:
  python3 scripts/optimize_astro_botanica_assets.py --ingest <map.json>
  python3 scripts/optimize_astro_botanica_assets.py --verify
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
COVERS_DIR = ROOT / "assets" / "astro_botanica" / "covers"
MANIFEST_PATH = ROOT / "data" / "astro_botanica_covers_manifest.json"

COVER_TARGET = (900, 1200)
WEBP_QUALITY = 84


def convert_cover(src: Path, dst: Path) -> dict:
    dst.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im).convert("RGB")
        fitted = ImageOps.fit(im, COVER_TARGET, method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))
        fitted.save(dst, format="WEBP", quality=WEBP_QUALITY, method=6)
        size_bytes = dst.stat().st_size
        return {
            "path": str(dst.relative_to(ROOT)).replace("\\", "/"),
            "width": fitted.width,
            "height": fitted.height,
            "bytes": size_bytes,
            "kb": round(size_bytes / 1024, 1),
            "has_raster": True,
        }


def ingest_from_map(mapping: dict[int, str]) -> None:
    manifest = {}
    if MANIFEST_PATH.exists():
        try:
            manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
        except Exception:
            manifest = {}

    converted = 0
    for vol_num_raw, raw_path_str in mapping.items():
        vol_num = int(vol_num_raw)
        src = Path(raw_path_str)
        if not src.exists():
            raise FileNotFoundError(f"Source image not found for Vol {vol_num}: {src}")
        dst = COVERS_DIR / f"vol-{vol_num:02d}.webp"
        info = convert_cover(src, dst)
        manifest[str(vol_num)] = info
        converted += 1
        print(f"  [OK] Vol {vol_num:02d} -> {dst.relative_to(ROOT)} ({info['width']}x{info['height']}, {info['kb']} KB)")

    MANIFEST_PATH.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Successfully converted {converted} cover plates and updated {MANIFEST_PATH.relative_to(ROOT)}")


def verify() -> int:
    if not MANIFEST_PATH.exists():
        print(f"Manifest missing: {MANIFEST_PATH.relative_to(ROOT)}", file=sys.stderr)
        return 1
    manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    errors = []
    for vol_str, info in manifest.items():
        p = ROOT / info["path"]
        if not p.exists():
            errors.append(f"Missing file for Vol {vol_str}: {p}")
        elif p.stat().st_size == 0:
            errors.append(f"Empty file for Vol {vol_str}: {p}")
    if errors:
        for e in errors:
            print("ERROR:", e, file=sys.stderr)
        return 1
    print(f"VERIFICATION PASSED: All {len(manifest)} manifest covers exist and are valid.")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--ingest", help="Path to JSON file mapping vol_num -> source_image_path")
    parser.add_argument("--verify", action="store_true", help="Verify all manifest covers exist")
    args = parser.parse_args()

    if args.ingest:
        mapping_data = json.loads(Path(args.ingest).read_text(encoding="utf-8"))
        ingest_from_map(mapping_data)
        return 0
    elif args.verify:
        return verify()
    else:
        parser.print_help()
        return 0


if __name__ == "__main__":
    raise SystemExit(main())
