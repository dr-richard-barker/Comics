#!/usr/bin/env python3
"""
Extract a clean Markdown transcript from a saved Gemini chat page.

Only the real conversation content is kept:
  * user prompts   -> text inside <user-query>
  * Gemini answers -> text inside <message-content> of each <model-response>
Gemini UI chrome (status/"thinking" lines, buttons, menus, disclaimers,
account details) is discarded.

Usage:
  python3 scripts/astro_botanica/extract_conversation.py \
      docs/astro-botanica/_raw/gemini_v2.html \
      --out docs/astro-botanica/source/conversation.md \
      --json docs/astro-botanica/source/turns.json
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

# Elements whose contents are never conversation text.
SKIP_TAGS = {
    "script", "style", "svg", "noscript", "head", "mat-icon", "button",
    "gem-icon", "gem-icon-button", "mat-menu", "message-actions", "sources-list",
    "election-info-disclaimer", "finance-info-disclaimer",
    "sensitive-memories-banner", "freemium-rag-disclaimer", "gem-popover",
    "thumb-up-button", "thumb-down-button", "copy-button",
}
VOID_TAGS = {"br", "hr", "img", "input", "meta", "link", "source", "wbr", "col"}


class GeminiParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.turns: list[dict] = []
        self.skip = 0
        self.role: str | None = None      # "user" | "gemini"
        self.role_depth = 0               # nesting of the current role tag
        self.capture = 0                  # >0 while inside capturable content
        self.buf: list[str] = []
        self.list_stack: list[str] = []
        self.in_pre = 0
        self.table: list[list[str]] | None = None
        self.cell: list[str] | None = None

    # ---- helpers -------------------------------------------------------
    def emit(self, text: str) -> None:
        if self.cell is not None:
            self.cell.append(text)
        else:
            self.buf.append(text)

    def flush_turn(self) -> None:
        text = "".join(self.buf)
        text = re.sub(r"[ \t]+\n", "\n", text)
        text = re.sub(r"\n{3,}", "\n\n", text).strip()
        if text:
            if self.turns and self.turns[-1]["role"] == self.role:
                self.turns[-1]["text"] += "\n\n" + text
            else:
                self.turns.append({"role": self.role, "text": text})
        self.buf = []

    # ---- parser callbacks ---------------------------------------------
    def handle_starttag(self, tag, attrs):
        if tag in VOID_TAGS:
            if self.capture and not self.skip and tag == "br":
                self.emit("\n")
            return
        if tag in SKIP_TAGS:
            self.skip += 1
            return
        if self.skip:
            return

        if tag == "user-query":
            if self.role is None:
                self.role, self.role_depth, self.capture = "user", 1, 1
            elif self.role == "user":
                self.role_depth += 1
            return
        if tag == "model-response":
            if self.role is None:
                self.role, self.role_depth = "gemini", 1
            elif self.role == "gemini":
                self.role_depth += 1
            return
        if tag == "message-content" and self.role == "gemini":
            self.capture += 1
            return
        if not self.capture:
            return

        if tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
            self.emit("\n\n" + "#" * int(tag[1]) + " ")
        elif tag == "p":
            # <li><p>…</p></li>: keep paragraph text on the bullet line.
            target = self.cell if self.cell is not None else self.buf
            tail = "".join(target[-3:])
            if not re.search(r"(^|\n)[ \t]*-[ \t]*$", tail):
                self.emit("\n\n")
        elif tag in ("ul", "ol"):
            self.list_stack.append(tag)
            self.emit("\n")
        elif tag == "li":
            indent = "  " * max(0, len(self.list_stack) - 1)
            self.emit(f"\n{indent}- ")
        elif tag in ("b", "strong") and not self.in_pre:
            self.emit("**")
        elif tag in ("i", "em") and not self.in_pre:
            self.emit("*")
        elif tag == "code" and not self.in_pre:
            self.emit("`")
        elif tag == "pre":
            self.in_pre += 1
            self.emit("\n\n```\n")
        elif tag == "table":
            self.table = []
        elif tag == "tr" and self.table is not None:
            self.table.append([])
        elif tag in ("td", "th") and self.table is not None:
            self.cell = []

    def handle_endtag(self, tag):
        if tag in VOID_TAGS:
            return
        if tag in SKIP_TAGS:
            self.skip = max(0, self.skip - 1)
            return
        if self.skip:
            return

        if tag in ("user-query", "model-response") and self.role:
            expected = "user" if tag == "user-query" else "gemini"
            if self.role == expected:
                self.role_depth -= 1
                if self.role_depth == 0:
                    self.flush_turn()
                    self.role, self.capture = None, 0
            return
        if tag == "message-content" and self.role == "gemini":
            self.capture = max(0, self.capture - 1)
            self.emit("\n\n")
            return
        if not self.capture:
            return

        if tag in ("h1", "h2", "h3", "h4", "h5", "h6", "p"):
            self.emit("\n")
        elif tag in ("ul", "ol"):
            if self.list_stack:
                self.list_stack.pop()
            self.emit("\n")
        elif tag in ("b", "strong") and not self.in_pre:
            self.emit("**")
        elif tag in ("i", "em") and not self.in_pre:
            self.emit("*")
        elif tag == "code" and not self.in_pre:
            self.emit("`")
        elif tag == "pre":
            self.in_pre = max(0, self.in_pre - 1)
            self.emit("\n```\n\n")
        elif tag in ("td", "th") and self.table is not None and self.cell is not None:
            self.table[-1].append(re.sub(r"\s+", " ", "".join(self.cell)).strip().replace("|", "\\|"))
            self.cell = None
        elif tag == "table" and self.table is not None:
            rows = [r for r in self.table if r]
            self.table = None
            if rows:
                width = max(len(r) for r in rows)
                rows = [r + [""] * (width - len(r)) for r in rows]
                md = ["| " + " | ".join(rows[0]) + " |", "|" + "---|" * width]
                md += ["| " + " | ".join(r) + " |" for r in rows[1:]]
                self.emit("\n\n" + "\n".join(md) + "\n\n")

    def handle_data(self, data):
        if self.skip or not self.capture:
            return
        if self.in_pre:
            self.emit(data)
        else:
            self.emit(re.sub(r"\s+", " ", data))


def clean_user_text(text: str) -> str:
    """Gemini renders each prompt twice ('You said <preview>' + full text)."""
    text = re.sub(r"^\s*(#+\s*)?You said\s.*?(\n|$)", "", text, count=1).strip()
    return text


EMAIL_RE = re.compile(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}")
# Gemini UI phrases that occasionally leak into message-content.
UI_LINES = re.compile(r"^(Gemini said|Copy code|Download code|Expand text|Complete)\s*$", re.M)


def extract(html_path: Path) -> list[dict]:
    parser = GeminiParser()
    parser.feed(html_path.read_text(encoding="utf-8", errors="ignore"))
    turns = []
    for t in parser.turns:
        text = clean_user_text(t["text"]) if t["role"] == "user" else t["text"]
        text = UI_LINES.sub("", text)
        text = EMAIL_RE.sub("[redacted-email]", text)
        text = re.sub(r"\n{3,}", "\n\n", text).strip()
        if text:
            turns.append({"index": len(turns), "role": t["role"], "text": text})
    return turns


def to_markdown(turns: list[dict]) -> str:
    out = [
        "# ASTRO-BOTANICA: ZERO-G ROOTS — Source Transcript",
        "",
        "> Cleaned transcript of the Gemini showrunner session (saved 2026-11-22).",
        "> Generated by `scripts/astro_botanica/extract_conversation.py`; do not edit by hand.",
        "",
    ]
    for t in turns:
        label = "USER" if t["role"] == "user" else "GEMINI"
        out += ["", "---", "", f"## Turn {t['index']:03d} — {label}", "", t["text"], ""]
    return "\n".join(out).rstrip() + "\n"


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("html", type=Path)
    ap.add_argument("--out", type=Path, default=ROOT / "docs/astro-botanica/source/conversation.md")
    ap.add_argument("--json", type=Path, default=ROOT / "docs/astro-botanica/source/turns.json")
    args = ap.parse_args()

    turns = extract(args.html)
    users = sum(t["role"] == "user" for t in turns)
    print(f"turns={len(turns)} user={users} gemini={len(turns) - users}", file=sys.stderr)

    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(to_markdown(turns), encoding="utf-8")
    args.json.write_text(json.dumps(turns, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"wrote {args.out.relative_to(ROOT)} and {args.json.relative_to(ROOT)}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
