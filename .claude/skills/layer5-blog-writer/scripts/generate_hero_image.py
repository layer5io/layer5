#!/usr/bin/env python3
"""
Layer5 Hero Image Generator

Creates branded 1200x630 SVG hero images for Layer5 blog posts.

The visual style follows Layer5's Illustration Background Style guide:
  - Base: Eerie Black (#1E2117)
  - 5-7 brand-color blobs with heavy Gaussian blur creating a freeform gradient
    (simulates Adobe Illustrator's Freeform Gradient tool)
  - White subject halo positioned where Five will be composed, with soft feathered
    edges blending organically into surrounding color zones
  - Dark tones at 1-3 edges/corners, never symmetrically around the perimeter
  - Full brand palette: Keppel teal, Caribbean Green, Saffron gold, Steel Teal,
    Charcoal, Banana Mania, White

Pillow (pip install Pillow) is used only for the font-loading fallback and the
optional PNG-only output mode. The main SVG path works with or without Pillow.

Usage:
    python3 generate_hero_image.py \\
        --title "Title" \\
        --subtitle "Optional subtitle" \\
        --category "Kubernetes" \\
        --output src/collections/blog/2026/04-01-my-post/hero-image.svg \\
        --repo-root /path/to/layer5/repo

    # --repo-root enables: Five mascot SVG, Qanelas Soft font, brand-accurate output
    # Without --repo-root: minimal SVG with no mascot and system font fallback
"""

import argparse
import base64
import random
import re
import sys
from pathlib import Path

# ── Layer5 Brand Palette ───────────────────────────────────────────────────
# Source: Layer5 Illustration Background Style guide
# Each color has a defined role in the background composition.

EERIE_BLACK  = "#1E2117"   # Base background fill; deep shadow anchor at periphery
CHARCOAL     = "#3C494F"   # Edge/corner darkness; atmosphere depth
STEEL_TEAL   = "#477E96"   # Cool blue-grey midtone anchor
TEAL         = "#00B39F"   # Keppel — Layer5 primary; major color anchor
TEAL_LIGHT   = "#00D3A9"   # Caribbean Green — secondary anchor adjacent to teal
SAFFRON      = "#EBC017"   # Warm gold; typically upper regions; "sunrise" warmth
BANANA       = "#FFF3C5"   # Banana Mania — pale yellow; warm transition near gold
OFF_WHITE    = "#F8FFFC"   # Slight cool tint; more natural than pure white for halos
WHITE        = "#FFFFFF"   # Subject contrast zone (critical for black stick figures)

# SVG text colors
TEAL_HEX        = "#00B39F"
WHITE_HEX       = "#FFFFFF"
SUBTITLE_HEX    = "#C8DDD9"   # near-white with a slight teal tint — readable on dark scrim


# ── Freeform Background Compositions ──────────────────────────────────────
#
# Each composition is a list of blob descriptors:
#   (cx_frac, cy_frac, rx_frac, ry_frac, color, opacity)
# Fractions are relative to canvas width/height (0.0–1.0).
# All blobs share a single heavy Gaussian blur filter.
#
# Three canonical patterns (from the style guide):
#
#   CORNER_WARMTH — Gold upper-left, teal right edge/bottom-right, dark
#                   bottom-left, white center-to-upper-center. Creates a
#                   sunrise or atmospheric glow effect.
#
#   DEEP_SPACE    — Dark blue-black majority, teal and gold accents pushed
#                   to corners, bright white-to-light zone at mid-canvas.
#                   Like looking through a clearing in a nebula.
#
# The white subject halo is always the LAST blob added (on top), positioned
# where Five will be composed (right 40% of the image, centered vertically).
# It is deliberately off-center and non-circular to feel organic, not like
# a spotlight.

CORNER_WARMTH = [
    # cx,   cy,   rx,   ry,   color,       opacity
    #
    # Daytime: Saffron sun packed into upper-left corner, Steel Teal sweeping the
    # upper-right sky (prominent blue sky field — matching "Twitter post 2.ai" / Kubernetes
    # signpost reference), Keppel + Caribbean Green saturating the entire bottom edge,
    # large luminous white clearing center-right where Five stands.
    # Reference: Layer5 "Twitter post 2.ai" (Kubernetes signpost), "legos.ai", "worship.ai"
    (0.05,  0.06, 0.36, 0.30, SAFFRON,     1.00),   # deep saffron — upper-left sun, full
    (0.22,  0.14, 0.30, 0.26, BANANA,      0.90),   # banana mania — warm halo off the sun
    (0.82,  0.06, 0.46, 0.38, STEEL_TEAL,  0.92),   # steel teal — upper-right sky, prominent
    (0.08,  0.86, 0.32, 0.28, TEAL,        0.96),   # keppel — bottom-left, vivid
    (0.45,  0.94, 0.50, 0.24, TEAL,        0.98),   # keppel — bottom center, full-width band
    (0.88,  0.88, 0.42, 0.28, TEAL_LIGHT,  0.96),   # caribbean green — bottom-right, vivid
    (0.44,  0.36, 0.36, 0.30, STEEL_TEAL,  0.68),   # steel teal — mid-sky transition
    # Large luminous white clearing — center-right, where Five stands
    (0.66,  0.44, 0.54, 0.68, WHITE,       0.97),
]

DEEP_SPACE = [
    # Night sky: Charcoal anchors three corners for deep space darkness,
    # Steel Teal dominates the upper sky sweep, Saffron in upper-RIGHT as a
    # LARGE vivid color field (not just a corner dot) — matching "Bi-Weekly Meshery
    # Build & Release" where saffron occupies 40%+ of the canvas right side, and
    # "Newcomers Meeting" where saffron/gold is a dominant warm presence.
    # Reference: "Bi-Weekly Meshery Build & Release.ai", "Newcomers Meeting.ai",
    #            "Meet Five our intergalactic Cloud Native Hero" illustration
    (0.04,  0.06, 0.28, 0.30, CHARCOAL,    0.98),   # very dark — upper-left corner
    (0.04,  0.94, 0.26, 0.24, CHARCOAL,    0.95),   # very dark — lower-left corner
    (0.96,  0.94, 0.22, 0.20, CHARCOAL,    0.90),   # very dark — lower-right corner
    (0.88,  0.10, 0.46, 0.44, SAFFRON,     0.90),   # gold — upper-RIGHT, large vivid field
    (0.76,  0.08, 0.32, 0.28, BANANA,      0.68),   # banana — warm halo around the gold
    (0.44,  0.18, 0.70, 0.52, STEEL_TEAL,  0.90),   # steel teal — large upper-sky sweep
    (0.16,  0.52, 0.34, 0.46, STEEL_TEAL,  0.80),   # steel teal — mid-left depth layer
    # Large luminous clearing — generous, center-weighted where Five stands
    (0.60,  0.46, 0.54, 0.66, WHITE,       0.95),
    (0.65,  0.42, 0.24, 0.30, OFF_WHITE,   0.90),   # bright core
]

# Map category → composition. Corner Warmth is the warmer, more energetic look;
# Deep Space suits darker / more technical topics.
CATEGORY_COMPOSITION = {
    "Kubernetes":           CORNER_WARMTH,
    "Platform Engineering": CORNER_WARMTH,
    "Engineering":          CORNER_WARMTH,
    "Cloud Native":         CORNER_WARMTH,
    "Docker":               CORNER_WARMTH,
    "Open Source":          CORNER_WARMTH,
    "Community":            CORNER_WARMTH,
    "Events":               CORNER_WARMTH,
    "Announcements":        CORNER_WARMTH,
    "Partners":             CORNER_WARMTH,
    "AWS":                  CORNER_WARMTH,
    "GCP":                  CORNER_WARMTH,
    "Azure":                CORNER_WARMTH,
    "Performance":          CORNER_WARMTH,
    "Meshery":              DEEP_SPACE,
    "Kanvas":               DEEP_SPACE,
    "Observability":        DEEP_SPACE,
    "AI":                   DEEP_SPACE,
    "WebAssembly":          DEEP_SPACE,
    "Service Mesh":         DEEP_SPACE,
    "Security":             DEEP_SPACE,
    "Layer5 Cloud":         DEEP_SPACE,
}


def bg_blobs_svg(category, W, H):
    """
    Return (filter_def, background_svg) for the full-canvas freeform gradient.

    filter_def       — goes inside the top-level <defs> block
    background_svg   — the base rect + blurred color blobs

    Blur stdDeviation scales with canvas width: ~10% of width for a
    1200px canvas gives stdDeviation=120, matching the style guide reference.
    """
    composition = CATEGORY_COMPOSITION.get(category, CORNER_WARMTH)
    blur_std = round(W * 0.10)   # 120px at 1200px canvas — wide, smooth color transitions

    filter_def = (
        f'<filter id="bgBlur" x="-100%" y="-100%" width="300%" height="300%">\n'
        f'      <feGaussianBlur stdDeviation="{blur_std}"/>\n'
        f'    </filter>'
    )

    ellipses = []
    for cx_f, cy_f, rx_f, ry_f, color, opacity in composition:
        cx  = cx_f * W
        cy  = cy_f * H
        rx  = rx_f * W
        ry  = ry_f * H
        ellipses.append(
            f'    <ellipse cx="{cx:.0f}" cy="{cy:.0f}" '
            f'rx="{rx:.0f}" ry="{ry:.0f}" '
            f'fill="{color}" opacity="{opacity}"/>'
        )

    background_svg = (
        f'<!-- Base background -->\n'
        f'  <rect width="{W}" height="{H}" fill="{EERIE_BLACK}"/>\n'
        f'  <!-- Freeform gradient blobs (all share heavy Gaussian blur) -->\n'
        f'  <g filter="url(#bgBlur)" clip-path="url(#canvas)">\n'
        + '\n'.join(ellipses)
        + '\n  </g>'
    )

    return filter_def, background_svg


# ── Close-range Five glow ─────────────────────────────────────────────────
#
# A second, tighter set of blobs sits between the background and Five.
# These provide extra brightness immediately around the mascot so even
# the finest black line art reads clearly. Same multi-blob technique,
# smaller blur radius, centered on Five's body position.
#
# Colors stay light — white, off-white, very light teal — so they
# brighten the zone without introducing hue contrast that would clash
# with Five's black skeleton.

FIVE_CLOSE_BLOBS = [
    # (rel_cx, rel_cy, rx_factor, ry_factor, color, opacity)
    # Positions relative to Five's visual center; spread_x/y scale them.
    ( 0.00,  0.00, 0.95, 0.90, OFF_WHITE,  0.92),  # bright near-white core
    ( 0.00, -0.28, 0.55, 0.48, WHITE,      0.78),  # upper body brightness
    ( 0.00,  0.33, 0.58, 0.50, OFF_WHITE,  0.72),  # lower body
    (-0.26,  0.05, 0.44, 0.52, "#E8F6F4",  0.58),  # left — very light teal
    ( 0.26, -0.16, 0.38, 0.40, "#B3E8E3",  0.44),  # right — light teal
    ( 0.00,  0.00, 0.44, 0.54, WHITE,      0.48),  # secondary white core
]


def build_five_glow(filter_id, cx, cy, spread_x, spread_y):
    """
    Return (filter_def, glow_group) for the close-range light field behind Five.
    """
    blur_std = max(spread_x, spread_y) * 0.085

    filter_def = (
        f'<filter id="{filter_id}" x="-80%" y="-80%" width="260%" height="260%">\n'
        f'      <feGaussianBlur stdDeviation="{blur_std:.1f}"/>\n'
        f'    </filter>'
    )

    ellipses = []
    for rx_f, ry_f, rx2_f, ry2_f, color, opacity in FIVE_CLOSE_BLOBS:
        bx  = cx + rx_f  * spread_x
        by  = cy + ry_f  * spread_y
        brx = rx2_f * spread_x
        bry = ry2_f * spread_y
        ellipses.append(
            f'    <ellipse cx="{bx:.1f}" cy="{by:.1f}" '
            f'rx="{brx:.1f}" ry="{bry:.1f}" '
            f'fill="{color}" opacity="{opacity}"/>'
        )

    glow_group = (
        f'<!-- Close-range glow behind Five — extra contrast for black line art -->\n'
        f'  <g filter="url(#{filter_id})">\n'
        + '\n'.join(ellipses)
        + '\n  </g>'
    )

    return filter_def, glow_group


# ── Font helpers ───────────────────────────────────────────────────────────

def find_qanelas(repo_root, weight="Bold"):
    """Find Qanelas Soft OTF in the Layer5 repo, with system fallbacks."""
    if repo_root:
        font_dir = Path(repo_root).expanduser() / "static/fonts/qanelas-soft"
        candidate = font_dir / f"QanelasSoft{weight}.otf"
        if candidate.exists():
            return str(candidate)
    fallbacks = {
        "Bold":    ["/System/Library/Fonts/Helvetica.ttc",
                    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"],
        "Regular": ["/System/Library/Fonts/Helvetica.ttc",
                    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"],
    }
    for path in fallbacks.get(weight, fallbacks["Regular"]):
        if Path(path).exists():
            return path
    return None


def b64_font(repo_root, weight="Bold"):
    """Return base64-encoded font bytes, or None if not found."""
    path = find_qanelas(repo_root, weight)
    if path:
        return base64.b64encode(Path(path).read_bytes()).decode()
    return None


# ── Five SVG helpers ───────────────────────────────────────────────────────

def find_five_svg(repo_root, seed=None):
    """
    Pick one of the curated standalone Five pose SVGs.

    Only simple, standalone poses are included — no complex scenes with
    vehicles, props, or group compositions that extend beyond the hero frame.
    """
    if not repo_root:
        return None
    five_dir = Path(repo_root).expanduser() / "src/assets/images/five/SVG"

    # Curated list: clean standalone poses only.
    # Excluded: 1, 3, 4, 5 (car), 9, 10, 13, 15, 16 — complex scenes.
    SIMPLE_POSES = ["2", "6", "7", "8", "11", "12", "14", "17", "18", "19"]
    candidates = [five_dir / f"{n}.svg" for n in SIMPLE_POSES
                  if (five_dir / f"{n}.svg").exists()]
    if not candidates:
        candidates = sorted(five_dir.glob("[0-9]*.svg"))
    if not candidates:
        return None
    return random.Random(seed).choice(candidates)


def extract_five_inner(svg_text):
    """
    Strip the outer <svg> wrapper and return (viewBox, inner_xml).
    Five's colors are never modified — black skeleton, teal (#00B39F) accents.
    Contrast comes from the light zone placed behind Five, not color inversion.
    """
    vb_match = re.search(r'viewBox=["\']([^"\']+)["\']', svg_text)
    viewbox  = vb_match.group(1) if vb_match else "0 0 612 792"
    inner    = re.sub(r'<\?xml[^?]*\?>', '', svg_text)
    inner    = re.sub(r'<svg[^>]*>',     '', inner, count=1)
    inner    = re.sub(r'</svg\s*>',      '', inner)
    return viewbox, inner.strip()


# ── SVG text helpers ───────────────────────────────────────────────────────

def wrap_svg_text(text, max_chars=24):
    words, lines, line = text.split(), [], []
    for word in words:
        if sum(len(w) + 1 for w in line) + len(word) <= max_chars:
            line.append(word)
        else:
            if line:
                lines.append(" ".join(line))
            line = [word]
    if line:
        lines.append(" ".join(line))
    return lines


# ── Main SVG generator ────────────────────────────────────────────────────

def generate_hero_svg(title, subtitle, category, output_path, repo_root,
                      img_width=1200, img_height=630):
    """
    Generate a 1200x630 SVG hero image following Layer5's illustration style.

    Background: full-canvas freeform gradient (heavy-blurred color blobs).
    Mascot: real Five SVG from the repo, at 95% image height, with a
            close-range white/off-white glow for black-line-art contrast.
    Typography: Qanelas Soft (base64-embedded from the repo).
    """
    W, H = img_width, img_height

    # ── Font embedding ────────────────────────────────────────────────────
    bold_b64 = b64_font(repo_root, "Bold") or b64_font(repo_root, "ExtraBold")
    reg_b64  = b64_font(repo_root, "Regular") or b64_font(repo_root, "Medium")
    font_face_bold = (
        f"@font-face {{ font-family: 'QanelasSoft'; font-weight: bold; "
        f"src: url('data:font/otf;base64,{bold_b64}') format('opentype'); }}"
    ) if bold_b64 else ""
    font_face_reg = (
        f"@font-face {{ font-family: 'QanelasSoft'; font-weight: normal; "
        f"src: url('data:font/otf;base64,{reg_b64}') format('opentype'); }}"
    ) if reg_b64 else ""
    font_stack = "'QanelasSoft', 'Helvetica Neue', Arial, sans-serif"

    # ── Background (freeform gradient) ───────────────────────────────────
    bg_filter_def, bg_svg = bg_blobs_svg(category, W, H)

    # ── Five mascot ───────────────────────────────────────────────────────
    five_path      = find_five_svg(repo_root, seed=hash(title))
    five_group_svg = ""
    glow_filter_def = ""
    glow_group_svg  = ""

    if five_path:
        try:
            viewbox, five_inner = extract_five_inner(five_path.read_text())
            vb_parts = [float(x) for x in viewbox.split()]
            vb_w = vb_parts[2] if len(vb_parts) >= 3 else 612
            vb_h = vb_parts[3] if len(vb_parts) >= 4 else 792

            # Five at 95% image height — large and dominant.
            target_h = H * 0.95
            scale    = target_h / vb_h
            target_w = vb_w * scale

            # Position: right 42% of the image, vertically centered.
            right_zone_start = W * 0.57
            right_zone_w     = W - right_zone_start
            x_pos = right_zone_start + max(0, (right_zone_w - target_w) / 2)
            y_pos = (H - target_h) / 2

            # Five's visual body center in canvas coords.
            five_center_x = x_pos + (vb_w * 0.50) * scale
            five_center_y = y_pos + (vb_h * 0.48) * scale
            spread_x      = target_w * 0.62
            spread_y      = target_h * 0.52

            glow_filter_def, glow_group_svg = build_five_glow(
                "fiveGlowBlur", five_center_x, five_center_y, spread_x, spread_y
            )

            five_group_svg = (
                f"<!-- Five mascot — black skeleton, teal accents, colors preserved -->\n"
                f"  <!-- Pose: {five_path.name} -->\n"
                f"  <g transform=\"translate({x_pos:.1f},{y_pos:.1f}) scale({scale:.4f})\">\n"
                f"    {five_inner}\n"
                f"  </g>"
            )
        except Exception as e:
            five_group_svg = f"<!-- Five SVG error: {e} -->"

    # ── Text layout ───────────────────────────────────────────────────────
    cat_label     = (category or "LAYER5").upper()
    margin        = 52
    pill_y        = 44
    pill_h        = 28
    pill_pad_x    = 14   # horizontal padding each side inside the pill
    # Estimate rendered width: bold caps at font-size 12 ≈ 7.2px/char + 2px letter-spacing
    pill_w        = int(len(cat_label) * 9.5) + pill_pad_x * 2

    max_title_chars  = 22
    title_lines      = wrap_svg_text(title, max_title_chars)[:3]
    title_font_size  = 52 if len(title_lines) <= 2 else 42
    line_height      = title_font_size + 14
    title_block_h    = len(title_lines) * line_height
    text_block_h     = title_block_h + (50 if subtitle else 0)
    title_y_start    = max(130, (H - text_block_h) // 2 - 10)

    title_svg = ""
    for i, line in enumerate(title_lines):
        y = title_y_start + i * line_height + title_font_size
        title_svg += (
            f'\n  <text x="{margin}" y="{y}" font-family="{font_stack}" '
            f'font-size="{title_font_size}" font-weight="bold" fill="{WHITE_HEX}">'
            f'{line}</text>'
        )

    subtitle_svg = ""
    if subtitle:
        sub_y = title_y_start + title_block_h + 28
        for i, sl in enumerate(wrap_svg_text(subtitle, 38)[:2]):
            subtitle_svg += (
                f'\n  <text x="{margin}" y="{sub_y + i*30}" font-family="{font_stack}" '
                f'font-size="21" fill="{SUBTITLE_HEX}">{sl}</text>'
            )

    bar_top     = H - 50
    footer_text = "layer5.io  -  Making Engineers Expect More from Their Infrastructure"

    # ── Text-side scrim width (left 58% of canvas) ───────────────────────
    scrim_w = int(W * 0.52)

    # ── Compose SVG ───────────────────────────────────────────────────────
    svg_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     width="{W}" height="{H}" viewBox="0 0 {W} {H}">
  <defs>
    <style>
      {font_face_bold}
      {font_face_reg}
    </style>
    <clipPath id="canvas">
      <rect width="{W}" height="{H}"/>
    </clipPath>
    <!-- Left-to-right dark scrim — text contrast without killing color vibrancy -->
    <linearGradient id="textScrim" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%"   stop-color="{EERIE_BLACK}" stop-opacity="0.48"/>
      <stop offset="55%"  stop-color="{EERIE_BLACK}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="{EERIE_BLACK}" stop-opacity="0"/>
    </linearGradient>
    {bg_filter_def}
    {glow_filter_def}
  </defs>

  {bg_svg}

  <!-- Orbital ring accent (upper right) -->
  <ellipse cx="{W - 70}" cy="-50" rx="310" ry="310"
           fill="none" stroke="{TEAL_HEX}" stroke-opacity="0.07" stroke-width="1"/>
  <ellipse cx="{W - 70}" cy="-50" rx="380" ry="380"
           fill="none" stroke="{TEAL_HEX}" stroke-opacity="0.04" stroke-width="1"/>

  {glow_group_svg}

  {five_group_svg}

  <!-- Text-side scrim: dark left-to-right gradient so text is always legible -->
  <rect x="0" y="0" width="{scrim_w}" height="{H}" fill="url(#textScrim)"/>

  <!-- Left teal accent bar -->
  <rect x="0" y="0" width="8" height="{H}" fill="{TEAL_HEX}" opacity="0.95"/>

  <!-- Category pill — solid teal background, white text for maximum contrast -->
  <rect x="{margin}" y="{pill_y}" width="{pill_w}" height="{pill_h}" rx="4"
        fill="{TEAL_HEX}" fill-opacity="1"/>
  <text x="{margin + pill_pad_x}" y="{pill_y + pill_h // 2}"
        dominant-baseline="middle"
        font-family="{font_stack}" font-size="12" font-weight="bold"
        letter-spacing="2" fill="{WHITE_HEX}">{cat_label}</text>

  <!-- Separator — teal to match the pill above, same width as the pill -->
  <rect x="{margin}" y="{pill_y + pill_h + 12}" width="{pill_w}" height="1"
        fill="{TEAL_HEX}" opacity="0.55"/>

  {title_svg}
  {subtitle_svg}

  <!-- Bottom bar -->
  <rect x="0" y="{bar_top}" width="{W}" height="50" fill="{EERIE_BLACK}" opacity="0.88"/>
  <rect x="0" y="{bar_top}" width="{W}" height="4" fill="{TEAL_HEX}" opacity="0.90"/>
  <text x="{margin}" y="{H - 15}" font-family="{font_stack}" font-size="13"
        fill="{SUBTITLE_HEX}" opacity="0.7">{footer_text}</text>

</svg>"""

    out = Path(output_path)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(svg_content, encoding="utf-8")
    print(f"Hero image saved: {out}  ({W}x{H} SVG)")


# ── CLI ────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Layer5 blog hero image generator")
    parser.add_argument("--title",      required=True,  help="Post title")
    parser.add_argument("--subtitle",   default="",     help="Optional subtitle")
    parser.add_argument("--category",   default="",     help="Post category (used for color palette)")
    parser.add_argument("--output",     required=True,  help="Output SVG path")
    parser.add_argument("--repo-root",  default=None,   help="Layer5 repo root (for Five SVG + Qanelas font)")
    args = parser.parse_args()

    generate_hero_svg(
        title       = args.title,
        subtitle    = args.subtitle,
        category    = args.category,
        output_path = args.output,
        repo_root   = args.repo_root,
    )


if __name__ == "__main__":
    main()
