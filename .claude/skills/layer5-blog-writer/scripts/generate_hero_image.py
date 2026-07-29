#!/usr/bin/env python3
"""
Layer5 Hero Image Generator

Creates branded 1200x630 SVG hero images for Layer5 blog posts.

Background: a genuine interpolated mesh gradient (inverse-distance weighting
over scattered brand-color control points), rendered as a small raster and
embedded as a base64 PNG <image> inside the SVG. The browser's own image
scaling upscales it to full canvas size, which is what gives the soft organic
blend - the same trick behind tools like Figma's mesh-gradient plugin. All
colors live in mesh_palette.py; nothing here is a hardcoded hex.

Mascot: a real Five SVG chosen by the caller (see references/mascot-five-index.md
for the full pose catalog and how to pick one) via --five-pose, composited at
large scale with a close-range light glow so the black line art reads clearly
against any background color.

No hard dependencies. The PNG encoder is hand-written against zlib/struct
(both stdlib) so this script needs nothing beyond Python 3 itself. Pillow is
only used, if present, as a font-loading nicety - the script runs identically
without it.

Usage:
    python3 generate_hero_image.py \\
        --title "Title" \\
        --subtitle "Optional subtitle" \\
        --category "Kubernetes" \\
        --five-pose "SVG/pondering-wondering-questioning-confused-thinking.svg" \\
        --date "July 17, 2026" \\
        --author "Layer5 Team" \\
        --output src/collections/blog/2026/07-17-my-post/hero-image.svg \\
        --repo-root /path/to/layer5/repo

    # --repo-root enables the Qanelas Soft brand font; without it the SVG
    # falls back to a system sans-serif. --five-pose defaults to the neutral
    # "means business" pose if omitted - always pick one deliberately instead.
"""

import argparse
import base64
import datetime
import random
import re
import struct
import sys
import zlib
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import mesh_palette as palette

SKILL_ROOT   = Path(__file__).resolve().parent.parent
MASCOT_DIR   = SKILL_ROOT / "assets" / "mascot-five"
# Neutral fallback when no pose is deliberately chosen: plain forward motion,
# no props/logos/iconography that could clash with an unrelated topic.
DEFAULT_POSE = "SVG/climbing-stairs-progress-moving-forward-upward-success-working-hard-diligent.svg"

# Maps a pose's filename to its blank-signage zone key in
# mesh_palette.SIGN_TEXT_ZONES. Only poses with genuinely empty signage belong
# here - see references/mascot-five-index.md for the full pose catalog.
POSE_FILENAME_TO_SIGN_ZONE = {
    "Artboard 23.svg": "blank-signpost",
    "Artboard 36.svg": "blank-book",
}


# ── Minimal stdlib PNG encoder ──────────────────────────────────────────────

def _png_chunk(tag, data):
    return (struct.pack(">I", len(data)) + tag + data +
            struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF))


def encode_png_rgb(width, height, rgb_bytes):
    """rgb_bytes: flat bytes, length width*height*3, row-major top-to-bottom."""
    sig = b"\x89PNG\r\n\x1a\n"
    ihdr = struct.pack(">IIBBBBB", width, height, 8, 2, 0, 0, 0)
    stride = width * 3
    raw = bytearray()
    for y in range(height):
        raw.append(0)  # filter type: None
        raw.extend(rgb_bytes[y * stride:(y + 1) * stride])
    idat = zlib.compress(bytes(raw), 9)
    return sig + _png_chunk(b"IHDR", ihdr) + _png_chunk(b"IDAT", idat) + _png_chunk(b"IEND", b"")


def hex_to_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


# ── Mesh gradient (inverse-distance weighting) ──────────────────────────────

def jitter_composition(composition, seed, amount):
    rnd = random.Random(seed)
    return [
        (x + rnd.uniform(-amount, amount), y + rnd.uniform(-amount, amount), color)
        for (x, y, color) in composition
    ]


def render_mesh_raster(control_points, raster_w, raster_h, power, dither_amplitude, seed):
    """
    control_points: list of (x_fraction, y_fraction, hex_color) across the
    full canvas (fractions may extend slightly past 0-1).

    Returns flat RGB bytes for a raster_w x raster_h image, later upscaled by
    the browser when embedded into the full-size SVG canvas.
    """
    points = [(x, y, hex_to_rgb(c)) for (x, y, c) in control_points]
    rnd = random.Random(seed)
    pixels = bytearray(raster_w * raster_h * 3)
    idx = 0
    for j in range(raster_h):
        y = j / (raster_h - 1) if raster_h > 1 else 0.0
        for i in range(raster_w):
            x = i / (raster_w - 1) if raster_w > 1 else 0.0
            wsum = 0.0
            rsum = gsum = bsum = 0.0
            exact = None
            for (px, py, (pr, pg, pb)) in points:
                dx, dy = x - px, y - py
                d2 = dx * dx + dy * dy
                if d2 < 1e-9:
                    exact = (pr, pg, pb)
                    break
                w = 1.0 / (d2 ** power)
                wsum += w
                rsum += w * pr
                gsum += w * pg
                bsum += w * pb
            if exact is not None:
                r, g, b = exact
            else:
                r, g, b = rsum / wsum, gsum / wsum, bsum / wsum
            if dither_amplitude:
                d = rnd.uniform(-dither_amplitude, dither_amplitude)
                r, g, b = r + d, g + d, b + d
            pixels[idx] = max(0, min(255, int(r)))
            pixels[idx + 1] = max(0, min(255, int(g)))
            pixels[idx + 2] = max(0, min(255, int(b)))
            idx += 3
    return bytes(pixels)


def build_mesh_background(category, title, five_center_frac, W, H):
    """Returns (svg_image_element,) - a base64 PNG <image> covering the canvas."""
    composition = palette.CATEGORY_COMPOSITION.get(category, palette.DEFAULT_COMPOSITION)
    seed = hash(("mesh", title))
    jittered = jitter_composition(composition, seed, palette.JITTER_AMOUNT)

    cx, cy = five_center_frac
    clearing = [
        (cx, cy, palette.WHITE),
        (cx - 0.02, cy - 0.03, palette.OFF_WHITE),
    ]

    raster_w, raster_h = palette.MESH_RASTER_WIDTH, palette.MESH_RASTER_HEIGHT
    rgb = render_mesh_raster(
        jittered + clearing, raster_w, raster_h,
        palette.IDW_POWER, palette.DITHER_AMPLITUDE, seed,
    )
    png_bytes = encode_png_rgb(raster_w, raster_h, rgb)
    b64 = base64.b64encode(png_bytes).decode()

    image_el = (
        f'<image x="0" y="0" width="{W}" height="{H}" '
        f'preserveAspectRatio="none" '
        f'xlink:href="data:image/png;base64,{b64}"/>'
    )
    return image_el


# ── Close-range Five glow ─────────────────────────────────────────────────

FIVE_CLOSE_BLOBS = [
    # (rel_cx, rel_cy, rx_factor, ry_factor, color, opacity)
    (0.00, 0.00, 0.95, 0.90, palette.OFF_WHITE, 0.92),
    (0.00, -0.28, 0.55, 0.48, palette.WHITE, 0.78),
    (0.00, 0.33, 0.58, 0.50, palette.OFF_WHITE, 0.72),
    (-0.26, 0.05, 0.44, 0.52, "#E8F6F4", 0.58),
    (0.26, -0.16, 0.38, 0.40, "#B3E8E3", 0.44),
    (0.00, 0.00, 0.44, 0.54, palette.WHITE, 0.48),
]


def build_five_glow(filter_id, cx, cy, spread_x, spread_y):
    blur_std = max(spread_x, spread_y) * 0.085
    filter_def = (
        f'<filter id="{filter_id}" x="-80%" y="-80%" width="260%" height="260%">\n'
        f'      <feGaussianBlur stdDeviation="{blur_std:.1f}"/>\n'
        f'    </filter>'
    )
    ellipses = []
    for rx_f, ry_f, rx2_f, ry2_f, color, opacity in FIVE_CLOSE_BLOBS:
        bx, by = cx + rx_f * spread_x, cy + ry_f * spread_y
        brx, bry = rx2_f * spread_x, ry2_f * spread_y
        ellipses.append(
            f'    <ellipse cx="{bx:.1f}" cy="{by:.1f}" rx="{brx:.1f}" ry="{bry:.1f}" '
            f'fill="{color}" opacity="{opacity}"/>'
        )
    glow_group = (
        f'<!-- Close-range glow behind Five - extra contrast for black line art -->\n'
        f'  <g filter="url(#{filter_id})">\n' + "\n".join(ellipses) + "\n  </g>"
    )
    return filter_def, glow_group


# ── Font helpers ───────────────────────────────────────────────────────────

def find_qanelas(repo_root, weight="Bold"):
    if repo_root:
        candidate = Path(repo_root).expanduser() / "static/fonts/qanelas-soft" / f"QanelasSoft{weight}.otf"
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
    path = find_qanelas(repo_root, weight)
    if path:
        return base64.b64encode(Path(path).read_bytes()).decode()
    return None


# ── Five SVG helpers ───────────────────────────────────────────────────────

def load_five_pose(five_pose_arg):
    """
    Resolve --five-pose (a path relative to assets/mascot-five/, e.g.
    "SVG/pondering-wondering-questioning-confused-thinking.svg") to a Path.
    Falls back to the neutral default pose if not given.
    """
    rel = five_pose_arg or DEFAULT_POSE
    path = MASCOT_DIR / rel
    if not path.exists():
        raise FileNotFoundError(
            f"--five-pose '{rel}' not found under {MASCOT_DIR}. "
            f"Pick a pose from references/mascot-five-index.md."
        )
    return path


def extract_five_inner(svg_text):
    """
    Strip the outer <svg> wrapper and return (viewBox, inner_xml). Five's
    illustrated colors (teal, near-black shading, incidental prop colors) are
    never modified here - contrast comes from the glow placed behind Five,
    not from recoloring the artwork.
    """
    vb_match = re.search(r'viewBox=["\']([^"\']+)["\']', svg_text)
    viewbox = vb_match.group(1) if vb_match else "0 0 612 792"
    inner = re.sub(r'<\?xml[^?]*\?>', '', svg_text)
    inner = re.sub(r'<svg[^>]*>', '', inner, count=1)
    inner = re.sub(r'</svg\s*>', '', inner)
    return viewbox, inner.strip()


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


def build_sign_text_overlay(five_pose_path, sign_text):
    """
    Returns an SVG <text> block (in the pose's own viewBox coordinates, so it
    inherits the same transform as the mascot) for a blank-signage pose, or ""
    if this pose has no calibrated zone / no text was requested.
    """
    if not sign_text:
        return ""
    zone_key = POSE_FILENAME_TO_SIGN_ZONE.get(five_pose_path.name)
    zone = palette.SIGN_TEXT_ZONES.get(zone_key) if zone_key else None
    if not zone:
        print(
            f"Warning: --sign-text given but '{five_pose_path.name}' has no calibrated "
            f"sign zone (see mesh_palette.SIGN_TEXT_ZONES); ignoring.",
            file=sys.stderr,
        )
        return ""

    max_chars = max(6, int(zone["max_width"] / (zone["font_size"] * 0.55)))
    lines = wrap_svg_text(sign_text, max_chars)[:3]
    line_height = zone["font_size"] * 1.15
    start_y = zone["cy"] - (len(lines) - 1) * line_height / 2

    rotation = zone.get("rotation", 0)
    transform = f' transform="rotate({rotation} {zone["cx"]} {zone["cy"]})"' if rotation else ""

    parts = [f'<g{transform}>']
    for i, line in enumerate(lines):
        y = start_y + i * line_height
        parts.append(
            f'<text x="{zone["cx"]}" y="{y:.1f}" text-anchor="middle" '
            f'font-family="\'QanelasSoft\', \'Helvetica Neue\', Arial, sans-serif" '
            f'font-size="{zone["font_size"]}" font-weight="bold" '
            f'fill="{zone["color"]}">{line}</text>'
        )
    parts.append('</g>')
    return "\n    ".join(parts)


# ── Main SVG generator ────────────────────────────────────────────────────

def generate_hero_svg(title, subtitle, category, five_pose_arg, sign_text,
                       date_str, author, output_path, repo_root,
                       img_width=1200, img_height=630):
    W, H = img_width, img_height

    # ── Font embedding ────────────────────────────────────────────────────
    bold_b64 = b64_font(repo_root, "Bold") or b64_font(repo_root, "ExtraBold")
    reg_b64 = b64_font(repo_root, "Regular") or b64_font(repo_root, "Medium")
    font_face_bold = (
        f"@font-face {{ font-family: 'QanelasSoft'; font-weight: bold; "
        f"src: url('data:font/otf;base64,{bold_b64}') format('opentype'); }}"
    ) if bold_b64 else ""
    font_face_reg = (
        f"@font-face {{ font-family: 'QanelasSoft'; font-weight: normal; "
        f"src: url('data:font/otf;base64,{reg_b64}') format('opentype'); }}"
    ) if reg_b64 else ""
    font_stack = "'QanelasSoft', 'Helvetica Neue', Arial, sans-serif"

    # ── Five mascot: load + compute placement (fit by height AND width, so
    #    both portrait and landscape-framed poses stay inside the right zone
    #    without overlapping the text column) ──────────────────────────────
    five_path = load_five_pose(five_pose_arg)
    viewbox, five_inner = extract_five_inner(five_path.read_text())
    vb_parts = [float(x) for x in viewbox.split()]
    vb_w = vb_parts[2] if len(vb_parts) >= 3 else 612
    vb_h = vb_parts[3] if len(vb_parts) >= 4 else 792

    right_zone_start = W * 0.55
    right_zone_w = W - right_zone_start
    scale = min((H * 0.92) / vb_h, right_zone_w / vb_w)
    target_w, target_h = vb_w * scale, vb_h * scale
    x_pos = right_zone_start + max(0, (right_zone_w - target_w) / 2)
    y_pos = (H - target_h) / 2

    five_center_x = x_pos + vb_w * 0.50 * scale
    five_center_y = y_pos + vb_h * 0.48 * scale
    spread_x, spread_y = target_w * 0.62, target_h * 0.52

    glow_filter_def, glow_group_svg = build_five_glow(
        "fiveGlowBlur", five_center_x, five_center_y, spread_x, spread_y
    )

    sign_text_svg = build_sign_text_overlay(five_path, sign_text)

    five_group_svg = (
        f"<!-- Five mascot: {five_path.name} -->\n"
        f'  <g transform="translate({x_pos:.1f},{y_pos:.1f}) scale({scale:.4f})">\n'
        f"    {five_inner}\n"
        f"    {sign_text_svg}\n"
        f"  </g>"
    )

    # ── Background: real mesh gradient, clearing centered on Five ─────────
    mesh_image_svg = build_mesh_background(
        category, title, (five_center_x / W, five_center_y / H), W, H
    )

    # ── Text layout ─────────────────────────────────────────────────────
    cat_label = (category or "LAYER5").upper()
    margin = 52
    pill_y, pill_h, pill_pad_x = 44, 28, 14
    pill_w = int(len(cat_label) * 9.5) + pill_pad_x * 2

    max_title_chars = 22
    title_lines = wrap_svg_text(title, max_title_chars)[:3]
    title_font_size = 52 if len(title_lines) <= 2 else 42
    line_height = title_font_size + 14
    title_block_h = len(title_lines) * line_height
    text_block_h = title_block_h + (50 if subtitle else 0)
    title_y_start = max(130, (H - text_block_h) // 2 - 10)

    title_svg = ""
    for i, line in enumerate(title_lines):
        y = title_y_start + i * line_height + title_font_size
        title_svg += (
            f'\n  <text x="{margin}" y="{y}" font-family="{font_stack}" '
            f'font-size="{title_font_size}" font-weight="bold" fill="{palette.TEXT_WHITE}">'
            f'{line}</text>'
        )

    subtitle_svg = ""
    if subtitle:
        sub_y = title_y_start + title_block_h + 28
        for i, sl in enumerate(wrap_svg_text(subtitle, 38)[:2]):
            subtitle_svg += (
                f'\n  <text x="{margin}" y="{sub_y + i * 30}" font-family="{font_stack}" '
                f'font-size="21" fill="{palette.TEXT_SUBTITLE}">{sl}</text>'
            )

    bar_top = H - 50
    footer_date = date_str or datetime.date.today().strftime("%B %d, %Y")
    footer_author = author or "Layer5 Team"

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
    <linearGradient id="textScrim" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%"   stop-color="{palette.EERIE_BLACK}" stop-opacity="0.48"/>
      <stop offset="55%"  stop-color="{palette.EERIE_BLACK}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="{palette.EERIE_BLACK}" stop-opacity="0"/>
    </linearGradient>
    {glow_filter_def}
  </defs>

  <!-- Mesh-gradient background (see mesh_palette.py to change colors) -->
  <g clip-path="url(#canvas)">
    {mesh_image_svg}
  </g>

  <!-- Orbital ring accent (upper right) -->
  <ellipse cx="{W - 70}" cy="-50" rx="310" ry="310"
           fill="none" stroke="{palette.TEAL}" stroke-opacity="0.07" stroke-width="1"/>
  <ellipse cx="{W - 70}" cy="-50" rx="380" ry="380"
           fill="none" stroke="{palette.TEAL}" stroke-opacity="0.04" stroke-width="1"/>

  {glow_group_svg}

  {five_group_svg}

  <!-- Text-side scrim -->
  <rect x="0" y="0" width="{scrim_w}" height="{H}" fill="url(#textScrim)"/>

  <!-- Left teal accent bar -->
  <rect x="0" y="0" width="8" height="{H}" fill="{palette.TEAL}" opacity="0.95"/>

  <!-- Category pill -->
  <rect x="{margin}" y="{pill_y}" width="{pill_w}" height="{pill_h}" rx="4"
        fill="{palette.TEAL}" fill-opacity="1"/>
  <text x="{margin + pill_pad_x}" y="{pill_y + pill_h // 2}"
        dominant-baseline="middle"
        font-family="{font_stack}" font-size="12" font-weight="bold"
        letter-spacing="2" fill="{palette.TEXT_WHITE}">{cat_label}</text>

  <rect x="{margin}" y="{pill_y + pill_h + 12}" width="{pill_w}" height="1"
        fill="{palette.TEAL}" opacity="0.55"/>

  {title_svg}
  {subtitle_svg}

  <!-- Bottom bar: publish date (left), author (right) -->
  <rect x="0" y="{bar_top}" width="{W}" height="50" fill="{palette.EERIE_BLACK}" opacity="0.88"/>
  <rect x="0" y="{bar_top}" width="{W}" height="4" fill="{palette.TEAL}" opacity="0.90"/>
  <text x="{margin}" y="{H - 15}" font-family="{font_stack}" font-size="13"
        fill="{palette.TEXT_SUBTITLE}" opacity="0.8">{footer_date}</text>
  <text x="{W - margin}" y="{H - 15}" text-anchor="end" font-family="{font_stack}" font-size="13"
        fill="{palette.TEXT_SUBTITLE}" opacity="0.8">{footer_author}</text>

</svg>"""

    out = Path(output_path)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(svg_content, encoding="utf-8")
    print(f"Hero image saved: {out}  ({W}x{H} SVG, pose={five_path.name})")


# ── CLI ────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Layer5 blog hero image generator")
    parser.add_argument("--title", required=True, help="Post title")
    parser.add_argument("--subtitle", default="", help="Optional subtitle")
    parser.add_argument("--category", default="", help="Post category (used for gradient palette)")
    parser.add_argument("--five-pose", default=None,
                         help="Path relative to assets/mascot-five/, e.g. "
                              "'SVG/pondering-wondering-questioning-confused-thinking.svg'. "
                              "Pick one from references/mascot-five-index.md. "
                              "Defaults to the neutral means-business pose.")
    parser.add_argument("--sign-text", default=None,
                         help="Text to place on a blank-signage pose "
                              "(blank-signpost / blank-book only - see mascot-five-index.md).")
    parser.add_argument("--date", default=None, help="Publish date shown in the footer (left)")
    parser.add_argument("--author", default=None, help="Author name shown in the footer (right)")
    parser.add_argument("--output", required=True, help="Output SVG path")
    parser.add_argument("--repo-root", default=None,
                         help="Layer5 repo root, used only to find the Qanelas Soft brand font")
    args = parser.parse_args()

    generate_hero_svg(
        title=args.title,
        subtitle=args.subtitle,
        category=args.category,
        five_pose_arg=args.five_pose,
        sign_text=args.sign_text,
        date_str=args.date,
        author=args.author,
        output_path=args.output,
        repo_root=args.repo_root,
    )


if __name__ == "__main__":
    main()
