#!/usr/bin/env python3
"""
Layer5 Hero Image Generator

Composes a 1200x630 blog hero in SVG and ships it as a raster.

Background: a genuine interpolated mesh gradient (inverse-distance weighting
over scattered brand-color control points), rendered as a small raster and
embedded as a base64 PNG <image> inside the working SVG. The browser's own
image scaling upscales it, which is what gives the soft organic blend - the
same trick behind tools like Figma's mesh-gradient plugin. All colors,
compositions, and layouts live in mesh_palette.py; nothing here is a hardcoded
hex or coordinate story.

Mascot: a real Five SVG chosen by the caller (see references/mascot-five-index.md
for the pose catalog) via --five-pose, placed and scaled from its *measured ink
box* rather than its Illustrator artboard - see assets/mascot-five/pose-bounds.json
and scripts/measure_pose_bounds.py.

Output: --output takes the final raster (.jpg recommended, .png and .webp also
accepted). SVG is an intermediate, not a deliverable; see rasterize.py for why
shipping SVG breaks social cards and Gatsby's image pipeline. Pass --keep-svg
to leave the working SVG beside the raster for debugging.

Determinism: every per-post choice (composition, layout, contrast device,
control-point jitter) is drawn from zlib.crc32 of the title. Python's builtin
hash() is salted per process, so the previous version produced a different
image on every run of the same command - regenerating a post's hero was
impossible. Same title now always yields byte-identical output.

Usage:
    python3 generate_hero_image.py \\
        --title "Title" \\
        --subtitle "Optional subtitle" \\
        --category "Kubernetes" \\
        --five-pose "SVG/pondering-wondering-questioning-confused-thinking.svg" \\
        --date "July 17, 2026" \\
        --author "Layer5 Team" \\
        --output src/collections/blog/2026/07-17-my-post/hero-image.jpg \\
        --repo-root /path/to/layer5/repo
"""

import argparse
import base64
import datetime
import hashlib
import json
import random
import re
import struct
import sys
import tempfile
import zlib
from pathlib import Path
from xml.sax.saxutils import escape as xml_escape

sys.path.insert(0, str(Path(__file__).resolve().parent))
import mesh_palette as palette
from rasterize import RasterizeError, rasterize

SKILL_ROOT   = Path(__file__).resolve().parent.parent
MASCOT_DIR   = SKILL_ROOT / "assets" / "mascot-five"
POSE_BOUNDS  = MASCOT_DIR / "pose-bounds.json"
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


# ── Deterministic per-post choices ──────────────────────────────────────────

def post_seed(title):
    """
    Stable across processes and machines, unlike builtin hash() on a str,
    which PEP 456 salts per interpreter run.
    """
    return zlib.crc32(title.encode("utf-8"))


def pick(sequence, seed, salt):
    """
    Deterministically choose one element, varying the choice by salt.

    blake2b rather than another crc32: CRC is linear over GF(2), so reducing it
    modulo a non-power-of-two list length can skew. Measured over 400 titles the
    three contrast devices came out 153/133/114 (chi-square p about 0.06) -
    not clearly broken, but not worth defending either. blake2b is stdlib,
    unsalted, and flat.
    """
    digest = hashlib.blake2b(
        salt.encode("utf-8") + struct.pack(">I", seed), digest_size=8
    ).digest()
    return sequence[int.from_bytes(digest, "big") % len(sequence)]


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


def build_mesh_background(composition_key, seed, W, H):
    """
    Returns (svg_image_element, mesh) where mesh is the raw raster kept for
    luminance sampling - the contrast device needs to know how dark the
    background actually is under the mascot.
    """
    composition = palette.COMPOSITIONS[composition_key]
    jittered = jitter_composition(composition, seed, palette.JITTER_AMOUNT)

    raster_w, raster_h = palette.MESH_RASTER_WIDTH, palette.MESH_RASTER_HEIGHT
    rgb = render_mesh_raster(
        jittered, raster_w, raster_h,
        palette.IDW_POWER, palette.DITHER_AMPLITUDE, seed,
    )
    b64 = base64.b64encode(encode_png_rgb(raster_w, raster_h, rgb)).decode()

    element = (
        f'<image x="0" y="0" width="{W}" height="{H}" '
        f'preserveAspectRatio="none" '
        f'xlink:href="data:image/png;base64,{b64}"/>'
    )
    return element, (rgb, raster_w, raster_h)


def luminance(r, g, b):
    """Rec. 709 luma, sufficient for deciding how much light a region needs."""
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def mean_region_luma(mesh, box, W, H):
    """Mean luma of the mesh raster under a canvas-space box."""
    rgb, rw, rh = mesh
    x, y, w, h = box
    x0 = max(0, min(rw - 1, int(x / W * rw)))
    x1 = max(x0 + 1, min(rw, int((x + w) / W * rw)))
    y0 = max(0, min(rh - 1, int(y / H * rh)))
    y1 = max(y0 + 1, min(rh, int((y + h) / H * rh)))

    total, count = 0.0, 0
    for j in range(y0, y1):
        row = j * rw * 3
        for i in range(x0, x1):
            k = row + i * 3
            total += luminance(rgb[k], rgb[k + 1], rgb[k + 2])
            count += 1
    return total / count if count else 0.0


def solve_device_opacity(device, mesh, box, W, H):
    """
    Alpha needed for the device to lift the field behind Five to
    DEVICE_TARGET_LUMA. Compositing is alpha*device + (1-alpha)*background, so
    alpha = (target - background) / (device - background).
    """
    bg = mean_region_luma(mesh, box, W, H)
    dev = luminance(*hex_to_rgb(palette.DEVICE_FILL))
    if dev <= bg:
        return palette.DEVICE_MIN_OPACITY, bg
    alpha = (palette.DEVICE_TARGET_LUMA - bg) / (dev - bg)
    alpha *= device.get("weight", 1.0) * palette.DEVICE_BLUR_COMPENSATION
    return max(palette.DEVICE_MIN_OPACITY, min(palette.DEVICE_MAX_OPACITY, alpha)), bg


# ── Contrast device behind Five ────────────────────────────────────────────

def build_contrast_device(device, filter_id, box, op):
    """
    box: (x, y, w, h) of the mascot's placed ink on canvas. The device is sized
    from that, not from the mascot zone - sizing from the zone is what produced
    the identical white amoeba across every previous hero.
    """
    x, y, w, h = box
    ax, ay = device.get("aspect", (1.0, 1.0))
    pad = device["pad"]
    dw, dh = w * pad * ax, h * pad * ay

    # Ink boxes are wildly elongated - `pondering` is 113x542 (1:4.8) and the
    # seated-group pose is 498x261 (1.9:1). A device that simply hugs the box
    # becomes a glowing pillar or a letterbox slab, which reads as a sticker
    # rather than as light. Cap the proportion so every device stays a
    # plausible pool of light, growing the short axis rather than cropping the
    # long one.
    aspect = palette.DEVICE_MAX_ASPECT
    if dh > dw * aspect:
        dw = dh / aspect
    elif dw > dh * aspect:
        dh = dw / aspect

    cx = x + w / 2
    cy = y + h / 2 + dh * device.get("lift", 0.0)
    # Geometric mean, so feathering tracks the device's overall size instead of
    # collapsing on thin shapes or exploding on wide ones.
    blur = ((dw * dh) ** 0.5) * device["blur"]

    filter_def = (
        f'<filter id="{filter_id}" x="-60%" y="-60%" width="220%" height="220%">\n'
        f'      <feGaussianBlur stdDeviation="{blur:.1f}"/>\n'
        f'    </filter>'
    )

    if device["shape"] == "rect":
        rx = min(dw, dh) * 0.12
        body = (
            f'<rect x="{cx - dw / 2:.1f}" y="{cy - dh / 2:.1f}" width="{dw:.1f}" height="{dh:.1f}" '
            f'rx="{rx:.1f}" fill="{palette.DEVICE_FILL}" opacity="{op}"/>'
        )
        under = (
            f'<rect x="{cx - dw / 2 - dw * 0.03:.1f}" y="{cy - dh / 2 + dh * 0.03:.1f}" '
            f'width="{dw:.1f}" height="{dh:.1f}" rx="{rx:.1f}" '
            f'fill="{palette.DEVICE_TINT}" opacity="{op * 0.45:.2f}"/>'
        )
    else:
        body = (
            f'<ellipse cx="{cx:.1f}" cy="{cy:.1f}" rx="{dw / 2:.1f}" ry="{dh / 2:.1f}" '
            f'fill="{palette.DEVICE_FILL}" opacity="{op}"/>'
        )
        under = (
            f'<ellipse cx="{cx - 0.07 * dw:.1f}" cy="{cy + 0.06 * dh:.1f}" '
            f'rx="{dw / 2 * 0.92:.1f}" ry="{dh / 2 * 0.96:.1f}" '
            f'fill="{palette.DEVICE_TINT}" opacity="{op * 0.42:.2f}"/>'
        )

    group = (
        f'<!-- Contrast device ({device["name"]}) at alpha {op:.2f}, '
        f'sized to the mascot ink box -->\n'
        f'  <g filter="url(#{filter_id})">\n    {under}\n    {body}\n  </g>'
    )
    return filter_def, group


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
    if not rel.lower().endswith(".svg"):
        raise SystemExit(
            f"error: --five-pose must be an SVG under assets/mascot-five/SVG/, got '{rel}'. "
            f"The generator inlines vector paths; a raster pose cannot be composited."
        )
    path = MASCOT_DIR / rel
    if not path.exists():
        raise SystemExit(
            f"error: --five-pose '{rel}' not found under {MASCOT_DIR}. "
            f"Pick a pose from references/mascot-five-index.md."
        )
    return path


def load_ink_box(pose_path, viewbox_wh):
    """
    Visible-ink box for a pose, in its own user space. Falls back to the full
    viewBox if the pose is missing from pose-bounds.json, which only happens
    when someone adds a pose without rerunning scripts/measure_pose_bounds.py.
    """
    if POSE_BOUNDS.exists():
        bounds = json.loads(POSE_BOUNDS.read_text())
        entry = bounds.get(pose_path.name)
        if entry:
            return tuple(entry["ink"])
    print(
        f"Warning: '{pose_path.name}' is missing from pose-bounds.json; placing by "
        f"artboard instead of artwork. Run scripts/measure_pose_bounds.py to fix.",
        file=sys.stderr,
    )
    return (0.0, 0.0, viewbox_wh[0], viewbox_wh[1])


def extract_five_inner(svg_text):
    """
    Strip the outer <svg> wrapper and return (viewBox, inner_xml). Five's
    illustrated colors (teal, near-black shading, incidental prop colors) are
    never modified here - contrast comes from the device placed behind Five,
    never from recoloring the artwork.
    """
    vb_match = re.search(r'viewBox=["\']([^"\']+)["\']', svg_text)
    viewbox = vb_match.group(1) if vb_match else "0 0 612 792"
    inner = re.sub(r'<\?xml[^?]*\?>', '', svg_text)
    inner = re.sub(r'<svg[^>]*>', '', inner, count=1)
    inner = re.sub(r'</svg\s*>', '', inner)
    return viewbox, inner.strip()


def wrap_svg_text(text, max_chars):
    words, lines, line = text.split(), [], []
    for word in words:
        candidate = " ".join(line + [word])
        if line and len(candidate) > max_chars:
            lines.append(" ".join(line))
            line = [word]
        else:
            line.append(word)
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
            f'fill="{zone["color"]}">{xml_escape(line)}</text>'
        )
    parts.append('</g>')
    return "\n    ".join(parts)


# ── Layout ─────────────────────────────────────────────────────────────────

def place_mascot(layout, ink, W, H):
    """
    Return (scale, translate_x, translate_y, placed_box).

    Scales from the artwork's ink box, keeps MASCOT_MARGIN clear of every
    canvas edge, and never intrudes on the footer band. The previous version
    scaled by viewBox and set the mascot zone flush to x=W, so poses whose ink
    reached their own artboard edge were clipped by the frame, and poses with
    large empty artboards rendered a fraction of the intended size.
    """
    ix, iy, iw, ih = ink
    margin = palette.MASCOT_MARGIN

    zone_w = W * layout["zone"]
    zone_x0 = (W - zone_w) if layout["text_side"] == "left" else 0.0

    avail_x0 = zone_x0 + margin
    avail_w = zone_w - 2 * margin
    avail_y0 = margin
    avail_y1 = H - palette.FOOTER_HEIGHT - margin
    avail_h = (avail_y1 - avail_y0) * palette.MASCOT_MAX_HEIGHT

    scale = min(avail_w / iw, avail_h / ih)
    pw, ph = iw * scale, ih * scale

    px = avail_x0 + (avail_w - pw) / 2
    if layout["mascot_anchor"] == "bottom":
        py = avail_y1 - ph
    else:
        py = avail_y0 + ((avail_y1 - avail_y0) - ph) / 2

    # Translate so the ink box's own origin lands at (px, py); this also
    # absorbs any non-zero viewBox origin.
    return scale, px - ix * scale, py - iy * scale, (px, py, pw, ph)


# ── Main SVG generator ────────────────────────────────────────────────────

def compose_hero_svg(title, subtitle, category, five_pose_arg, sign_text,
                     date_str, author, repo_root, W=1200, H=630):
    seed = post_seed(title)

    tone = palette.CATEGORY_TONE.get(category, palette.DEFAULT_TONE) if category else palette.DEFAULT_TONE
    keys = palette.WARM_KEYS if tone == "warm" else palette.COOL_KEYS
    composition_key = pick(keys, seed, "composition")
    layout = pick(palette.LAYOUTS, seed, "layout")
    device = pick(palette.CONTRAST_DEVICES, seed, "device")

    # ── Font embedding (baked into pixels by rasterize.py; no font binary
    #    reaches the repo) ───────────────────────────────────────────────────
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

    # ── Mascot: load, measure, place ──────────────────────────────────────
    five_path = load_five_pose(five_pose_arg)
    viewbox, five_inner = extract_five_inner(five_path.read_text())
    vb_parts = [float(x) for x in viewbox.replace(",", " ").split()]
    vb_w = vb_parts[2] if len(vb_parts) >= 3 else 612
    vb_h = vb_parts[3] if len(vb_parts) >= 4 else 792

    ink = load_ink_box(five_path, (vb_w, vb_h))
    scale, tx, ty, placed = place_mascot(layout, ink, W, H)

    # Mesh first: the contrast device's alpha is solved against the background
    # it actually has to lift, not guessed.
    mesh_image_svg, mesh = build_mesh_background(composition_key, seed, W, H)
    device_op, bg_luma = solve_device_opacity(device, mesh, placed, W, H)

    device_filter_def, device_group = build_contrast_device(
        device, "fiveDevice", placed, device_op
    )
    sign_text_svg = build_sign_text_overlay(five_path, sign_text)

    five_group_svg = (
        f"<!-- Five mascot: {five_path.name} -->\n"
        f'  <g transform="translate({tx:.1f},{ty:.1f}) scale({scale:.4f})">\n'
        f"    {five_inner}\n"
        f"    {sign_text_svg}\n"
        f"  </g>"
    )

    # ── Text column, mirrored with the layout ────────────────────────────
    margin = 52
    text_side = layout["text_side"]
    zone_w = W * layout["zone"]
    text_x = margin if text_side == "left" else zone_w + margin
    text_col_w = (W - zone_w) - margin - 24

    cat_label = (category or "LAYER5").upper()
    pill_y, pill_h, pill_pad_x = 44, 28, 14
    pill_w = int(len(cat_label) * 9.5) + pill_pad_x * 2

    title_font_size = 52
    max_title_chars = max(12, int(text_col_w / (title_font_size * 0.50)))
    title_lines = wrap_svg_text(title, max_title_chars)[:3]
    if len(title_lines) > 2:
        title_font_size = 42
        max_title_chars = max(12, int(text_col_w / (title_font_size * 0.50)))
        title_lines = wrap_svg_text(title, max_title_chars)[:3]

    line_height = title_font_size + 14
    title_block_h = len(title_lines) * line_height
    text_block_h = title_block_h + (50 if subtitle else 0)
    title_y_start = max(130, (H - palette.FOOTER_HEIGHT - text_block_h) // 2 - 10)

    title_svg = ""
    for i, line in enumerate(title_lines):
        y = title_y_start + i * line_height + title_font_size
        title_svg += (
            f'\n  <text x="{text_x}" y="{y}" font-family="{font_stack}" '
            f'font-size="{title_font_size}" font-weight="bold" fill="{palette.TEXT_WHITE}">'
            f'{xml_escape(line)}</text>'
        )

    subtitle_svg = ""
    if subtitle:
        sub_y = title_y_start + title_block_h + 28
        sub_chars = max(16, int(text_col_w / (21 * 0.50)))
        for i, sl in enumerate(wrap_svg_text(subtitle, sub_chars)[:2]):
            subtitle_svg += (
                f'\n  <text x="{text_x}" y="{sub_y + i * 30}" font-family="{font_stack}" '
                f'font-size="21" fill="{palette.TEXT_SUBTITLE}">{xml_escape(sl)}</text>'
            )

    # Scrim runs from the text edge inward, so it mirrors with the layout.
    scrim_w = int(W * palette.SCRIM_WIDTH)
    inner, mid, outer = palette.SCRIM_OPACITY
    if text_side == "left":
        scrim_x, grad_x1, grad_x2 = 0, "0", "1"
        accent_x = 0
        ring_cx = W - 70
    else:
        scrim_x, grad_x1, grad_x2 = W - scrim_w, "1", "0"
        accent_x = W - 8
        ring_cx = 70

    ring_r = 280 + (seed % 5) * 26

    bar_top = H - palette.FOOTER_HEIGHT
    footer_date = date_str or datetime.date.today().strftime("%B %d, %Y")
    footer_author = author or "Layer5 Team"

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
    <clipPath id="mascotClip">
      <rect x="0" y="0" width="{W}" height="{H}"/>
    </clipPath>
    <linearGradient id="textScrim" x1="{grad_x1}" x2="{grad_x2}" y1="0" y2="0">
      <stop offset="0%"   stop-color="{palette.EERIE_BLACK}" stop-opacity="{inner}"/>
      <stop offset="55%"  stop-color="{palette.EERIE_BLACK}" stop-opacity="{mid}"/>
      <stop offset="100%" stop-color="{palette.EERIE_BLACK}" stop-opacity="{outer}"/>
    </linearGradient>
    {device_filter_def}
  </defs>

  <!-- Mesh-gradient background: composition '{composition_key}' ({tone}) -->
  <g clip-path="url(#canvas)">
    {mesh_image_svg}
  </g>

  <!-- Orbital ring accent, opposite the text column -->
  <ellipse cx="{ring_cx}" cy="-50" rx="{ring_r}" ry="{ring_r}"
           fill="none" stroke="{palette.TEAL}" stroke-opacity="0.09" stroke-width="1"/>
  <ellipse cx="{ring_cx}" cy="-50" rx="{ring_r + 70}" ry="{ring_r + 70}"
           fill="none" stroke="{palette.TEAL}" stroke-opacity="0.05" stroke-width="1"/>

  <!-- Layout: {layout["name"]} -->
  <g clip-path="url(#mascotClip)">
    {device_group}

    {five_group_svg}
  </g>

  <!-- Text-side scrim -->
  <rect x="{scrim_x}" y="0" width="{scrim_w}" height="{H}" fill="url(#textScrim)"/>

  <!-- Teal accent bar on the text edge -->
  <rect x="{accent_x}" y="0" width="8" height="{H}" fill="{palette.TEAL}" opacity="0.95"/>

  <!-- Category pill -->
  <rect x="{text_x}" y="{pill_y}" width="{pill_w}" height="{pill_h}" rx="4"
        fill="{palette.PILL_BG}" fill-opacity="1"/>
  <text x="{text_x + pill_pad_x}" y="{pill_y + pill_h // 2}"
        dominant-baseline="middle"
        font-family="{font_stack}" font-size="12" font-weight="bold"
        letter-spacing="2" fill="{palette.PILL_TEXT}">{xml_escape(cat_label)}</text>

  <rect x="{text_x}" y="{pill_y + pill_h + 12}" width="{pill_w}" height="1"
        fill="{palette.TEAL}" opacity="0.55"/>

  {title_svg}
  {subtitle_svg}

  <!-- Bottom bar: publish date (left), author (right) -->
  <rect x="0" y="{bar_top}" width="{W}" height="{palette.FOOTER_HEIGHT}"
        fill="{palette.EERIE_BLACK}" opacity="0.88"/>
  <rect x="0" y="{bar_top}" width="{W}" height="4" fill="{palette.TEAL}" opacity="0.90"/>
  <text x="{margin}" y="{H - 15}" font-family="{font_stack}" font-size="13"
        fill="{palette.TEXT_SUBTITLE}" opacity="0.8">{xml_escape(footer_date)}</text>
  <text x="{W - margin}" y="{H - 15}" text-anchor="end" font-family="{font_stack}" font-size="13"
        fill="{palette.TEXT_SUBTITLE}" opacity="0.8">{xml_escape(footer_author)}</text>

</svg>"""

    summary = {
        "pose": five_path.name,
        "composition": composition_key,
        "tone": tone,
        "layout": layout["name"],
        "device": device["name"],
        "device_alpha": round(device_op, 2),
        "bg_luma": round(bg_luma),
    }
    return svg_content, summary


def generate_hero_image(title, subtitle, category, five_pose_arg, sign_text,
                        date_str, author, output_path, repo_root,
                        keep_svg=False, quality=88, img_width=1200, img_height=630):
    svg_content, summary = compose_hero_svg(
        title, subtitle, category, five_pose_arg, sign_text,
        date_str, author, repo_root, img_width, img_height,
    )

    out = Path(output_path)
    out.parent.mkdir(parents=True, exist_ok=True)

    if out.suffix.lower() == ".svg":
        raise SystemExit(
            "error: --output must be a raster (.jpg recommended, .png or .webp accepted). "
            "SVG heroes break social cards - og:image and twitter:image resolve to the "
            "thumbnail's publicURL, and no major platform renders SVG there. Use --keep-svg "
            "if you want the working SVG alongside the raster."
        )

    svg_dir = out.parent if keep_svg else Path(tempfile.mkdtemp())
    svg_path = svg_dir / (out.stem + ".svg")
    svg_path.write_text(svg_content, encoding="utf-8")

    try:
        detail = rasterize(svg_path, out, img_width, img_height, quality)
    except RasterizeError as exc:
        kept = out.with_suffix(".svg")
        if not keep_svg:
            kept.write_text(svg_content, encoding="utf-8")
        raise SystemExit(
            f"error: could not rasterize the hero image.\n  {exc}\n"
            f"  The working SVG was left at {kept} so no work is lost."
        )

    print(
        f"Hero image saved: {out}  ({detail})\n"
        f"  pose={summary['pose']}  composition={summary['composition']} ({summary['tone']})  "
        f"layout={summary['layout']}  device={summary['device']}@{summary['device_alpha']} "
        f"(bg luma {summary['bg_luma']})"
    )
    if keep_svg:
        print(f"  working SVG kept at {svg_path} - do not commit it")
    return summary


# ── CLI ────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Layer5 blog hero image generator")
    parser.add_argument("--title", required=True, help="Post title")
    parser.add_argument("--subtitle", default="", help="Optional subtitle")
    parser.add_argument("--category", default="",
                        help="Post category. Must match references/tags-categories.md exactly; "
                             "selects the palette tone.")
    parser.add_argument("--five-pose", default=None,
                        help="Path relative to assets/mascot-five/, e.g. "
                             "'SVG/pondering-wondering-questioning-confused-thinking.svg'. "
                             "Pick one from references/mascot-five-index.md. "
                             "Defaults to the neutral climbing-stairs pose.")
    parser.add_argument("--sign-text", default=None,
                        help="Text to place on a blank-signage pose "
                             "(blank-signpost / blank-book only - see mascot-five-index.md).")
    parser.add_argument("--date", default=None, help="Publish date shown in the footer (left)")
    parser.add_argument("--author", default=None, help="Author name shown in the footer (right)")
    parser.add_argument("--output", required=True,
                        help="Output raster path: hero-image.jpg (recommended), .png, or .webp")
    parser.add_argument("--repo-root", default=None,
                        help="Layer5 repo root, used only to find the Qanelas Soft brand font")
    parser.add_argument("--keep-svg", action="store_true",
                        help="Leave the working SVG beside the raster for debugging. "
                             "Never commit it.")
    parser.add_argument("--quality", type=int, default=88,
                        help="JPEG/WebP quality (default 88, visually lossless for these heroes)")
    args = parser.parse_args()

    if args.category and args.category not in palette.CATEGORY_TONE:
        known = ", ".join(sorted(palette.CATEGORY_TONE))
        raise SystemExit(
            f"error: unknown --category '{args.category}'. Categories are case-sensitive "
            f"and must match references/tags-categories.md.\n  Known: {known}"
        )

    generate_hero_image(
        title=args.title,
        subtitle=args.subtitle,
        category=args.category,
        five_pose_arg=args.five_pose,
        sign_text=args.sign_text,
        date_str=args.date,
        author=args.author,
        output_path=args.output,
        repo_root=args.repo_root,
        keep_svg=args.keep_svg,
        quality=args.quality,
    )


if __name__ == "__main__":
    main()
