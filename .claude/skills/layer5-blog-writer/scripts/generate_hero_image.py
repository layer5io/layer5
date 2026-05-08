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


# ── Multi-Stop Gradient Background ────────────────────────────────────────
#
# Technique extracted from Layer5 reference SVGs (Artboard 1.svg):
#   - Overlapping full-canvas rectangles with multi-stop linear gradients
#   - 10-16 gradient stops per layer for rich, deep color transitions
#   - stop-opacity controls where each layer is visible vs transparent,
#     allowing underlying layers to show through
#   - Radial gradient for the white subject clearing (from chs-2-intro.svg)
#   - No blur filter needed — the many intermediate color stops create
#     smooth transitions naturally
#
# The signature Layer5 gradient ramp (from Artboard 1.svg) has 16 stops
# transitioning from Dark Jungle Green through Charcoal, six intermediate
# blue-greens, Keppel, to Caribbean Green — then back to Charcoal.
#
# Each composition layer dict:
#   type: "linear" or "radial"
#   For linear: x1, y1, x2, y2 (fractions of canvas W,H)
#   For radial: cx, cy (fractions), r (fraction of max(W,H))
#   stops: [(offset, color, stop_opacity), ...] — stop_opacity optional (default 1.0)

CORNER_WARMTH = [
    # Daytime: Saffron upper-left (sun), Keppel/Caribbean Green at right + bottom,
    # Dark Jungle Green base at lower-left, MASSIVE white clearing center-right.
    # Reference: "4000 members", "Recognition Program", "layer5-hero.webp"

    # Layer 1: Teal from the RIGHT — Keppel/Caribbean Green builds from right edge
    {"type": "linear",
     "x1": 0.0, "y1": 0.5, "x2": 1.0, "y2": 0.5,
     "stops": [
         (0.00, "#1E2117", 0.0),
         (0.20, "#1E2117", 0.0),
         (0.35, "#262C27", 0.15),
         (0.45, "#323B3B", 0.35),
         (0.52, "#3C494E", 0.50),
         (0.58, "#375154", 0.60),
         (0.63, "#305D5D", 0.70),
         (0.68, "#266E6A", 0.80),
         (0.73, "#1A847B", 0.88),
         (0.78, "#0B9E8F", 0.92),
         (0.82, "#00B39F", 0.96),
         (0.86, "#00B59F", 0.98),
         (0.89, "#00BDA2", 1.00),
         (0.92, "#00CAA6", 1.00),
         (0.95, "#00D3A9", 1.00),
         (1.00, "#3C494E", 0.90),
     ]},

    # Layer 2: Teal from the BOTTOM — ground plane
    {"type": "linear",
     "x1": 0.5, "y1": 0.0, "x2": 0.5, "y2": 1.0,
     "stops": [
         (0.00, "#1E2117", 0.0),
         (0.30, "#1E2117", 0.0),
         (0.45, "#262C27", 0.10),
         (0.55, "#323B3B", 0.25),
         (0.62, "#3C494E", 0.40),
         (0.68, "#375154", 0.55),
         (0.73, "#305D5D", 0.65),
         (0.78, "#266E6A", 0.75),
         (0.82, "#1A847B", 0.85),
         (0.86, "#0B9E8F", 0.90),
         (0.90, "#00B39F", 0.95),
         (0.93, "#00BDA2", 1.00),
         (0.96, "#00D3A9", 1.00),
         (1.00, "#3C494E", 0.85),
     ]},

    # Layer 3: Saffron from UPPER-LEFT — sun warmth
    {"type": "linear",
     "x1": -0.05, "y1": -0.05, "x2": 0.75, "y2": 0.75,
     "stops": [
         (0.00, "#FFF3C5", 0.92),
         (0.05, "#FAE6A0", 0.95),
         (0.10, "#F5D875", 0.95),
         (0.16, "#F0CB45", 0.95),
         (0.22, "#EBC017", 1.00),
         (0.28, "#D4AD15", 0.95),
         (0.34, "#BFA012", 0.88),
         (0.40, "#A5870E", 0.78),
         (0.46, "#886F0C", 0.65),
         (0.52, "#6D5B0D", 0.50),
         (0.58, "#56490E", 0.35),
         (0.64, "#45390F", 0.22),
         (0.70, "#352E11", 0.12),
         (0.78, "#2A2613", 0.05),
         (0.85, "#1E2117", 0.0),
     ]},

    # Layer 4: White clearing — radial, center-right where Five stands
    # Exact ramp from chs-2-intro.svg radialGradient (white→keppel halo)
    {"type": "radial", "cx": 0.58, "cy": 0.46, "r": 0.52,
     "stops": [
         (0.22, "#FFFFFF", 0.97),
         (0.32, "#F7FCFC", 0.92),
         (0.40, "#E2F6F4", 0.82),
         (0.48, "#BFEBE7", 0.68),
         (0.56, "#8FDDD4", 0.50),
         (0.64, "#52CBBE", 0.32),
         (0.74, "#12B8A6", 0.14),
         (0.85, "#00B39F", 0.05),
         (1.00, "#00B39F", 0.0),
     ]},
]

DEEP_SPACE = [
    # Night sky: darker overall. Steel Teal concentrated at upper edge,
    # fades quickly. Charcoal dominates lower 60%. Saffron accent upper-RIGHT.
    # White clearing is tighter — more dark space visible around it.
    # Reference: "Meet Five", "Adventures of Five Vol 2" cover

    # Layer 1: Steel Teal from the TOP — pulled back, fades by mid-canvas
    {"type": "linear",
     "x1": 0.5, "y1": -0.1, "x2": 0.5, "y2": 0.8,
     "stops": [
         (0.00, "#477E96", 1.00),
         (0.05, "#477E96", 1.00),
         (0.10, "#457A8E", 0.95),
         (0.16, "#436F82", 0.88),
         (0.22, "#406D7F", 0.78),
         (0.28, "#3C5F6D", 0.65),
         (0.35, "#375360", 0.50),
         (0.42, "#324854", 0.36),
         (0.50, "#2D3E49", 0.24),
         (0.58, "#29353E", 0.14),
         (0.68, "#252D33", 0.06),
         (0.80, "#1E2117", 0.0),
     ]},

    # Layer 2: Steel Teal from LEFT edge — subtle, fades quickly
    {"type": "linear",
     "x1": -0.1, "y1": 0.4, "x2": 0.8, "y2": 0.4,
     "stops": [
         (0.00, "#477E96", 0.75),
         (0.06, "#457A8E", 0.65),
         (0.14, "#406D7F", 0.50),
         (0.22, "#3C5F6D", 0.36),
         (0.30, "#375360", 0.24),
         (0.38, "#324854", 0.14),
         (0.48, "#2D3E49", 0.06),
         (0.60, "#1E2117", 0.0),
     ]},

    # Layer 3: Charcoal reinforcement — darker overall, starts earlier
    {"type": "linear",
     "x1": 0.5, "y1": 0.0, "x2": 0.5, "y2": 1.0,
     "stops": [
         (0.00, "#3C494F", 0.0),
         (0.25, "#3C494F", 0.10),
         (0.40, "#3C494F", 0.30),
         (0.50, "#3C494F", 0.55),
         (0.60, "#3C494F", 0.75),
         (0.72, "#3C494F", 0.90),
         (0.85, "#3C494F", 0.96),
         (1.00, "#3C494F", 1.00),
     ]},

    # Layer 4: Extra darkness from lower-left corner diagonal
    {"type": "linear",
     "x1": 0.9, "y1": -0.1, "x2": -0.1, "y2": 1.1,
     "stops": [
         (0.00, "#1E2117", 0.0),
         (0.35, "#1E2117", 0.0),
         (0.50, "#1E2117", 0.25),
         (0.65, "#1E2117", 0.55),
         (0.80, "#1E2117", 0.80),
         (1.00, "#1E2117", 0.95),
     ]},

    # Layer 5: Saffron star UPPER-RIGHT — warm accent
    {"type": "linear",
     "x1": 0.15, "y1": 0.80, "x2": 1.05, "y2": -0.10,
     "stops": [
         (0.00, "#1E2117", 0.0),
         (0.40, "#1E2117", 0.0),
         (0.50, "#45390F", 0.10),
         (0.56, "#6D5B0D", 0.25),
         (0.62, "#886F0C", 0.40),
         (0.68, "#A5870E", 0.58),
         (0.74, "#BFA012", 0.72),
         (0.80, "#D4AD15", 0.84),
         (0.85, "#EBC017", 0.94),
         (0.90, "#F0CB45", 0.96),
         (0.94, "#F5D875", 0.92),
         (0.97, "#FFF3C5", 0.85),
         (1.00, "#3C494E", 0.60),
     ]},

    # Layer 6: White clearing — tighter radius, less reach
    {"type": "radial", "cx": 0.56, "cy": 0.46, "r": 0.46,
     "stops": [
         (0.18, "#FFFFFF", 0.96),
         (0.28, "#F7FCFC", 0.88),
         (0.36, "#E2F6F4", 0.74),
         (0.44, "#BFEBE7", 0.56),
         (0.52, "#8FDDD4", 0.38),
         (0.62, "#52CBBE", 0.20),
         (0.72, "#12B8A6", 0.08),
         (0.84, "#00B39F", 0.02),
         (1.00, "#00B39F", 0.0),
     ]},
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
    Return (defs_block, background_svg) for the multi-stop gradient background.

    Uses the same technique as Layer5's official illustrations (Artboard 1.svg):
    overlapping layers with multi-stop gradients (10-16 stops per layer) and
    stop-opacity for compositing. No blur filter needed — the many intermediate
    color stops create smooth, rich transitions naturally.

    defs_block     — gradient definitions, goes inside the top-level <defs>
    background_svg — the base rect + gradient layers
    """
    composition = CATEGORY_COMPOSITION.get(category, CORNER_WARMTH)

    gradient_defs = []
    layer_rects = []

    for i, layer in enumerate(composition):
        grad_id = f"bgGrad{i}"

        # Build stop elements
        stop_lines = []
        for s in layer["stops"]:
            offset, color = s[0], s[1]
            opacity_attr = ""
            if len(s) > 2 and s[2] < 1.0:
                opacity_attr = f' stop-opacity="{s[2]}"'
            stop_lines.append(
                f'      <stop offset="{offset}" stop-color="{color}"{opacity_attr}/>'
            )
        stops_xml = "\n".join(stop_lines)

        if layer["type"] == "linear":
            x1 = layer["x1"] * W
            y1 = layer["y1"] * H
            x2 = layer["x2"] * W
            y2 = layer["y2"] * H
            gradient_defs.append(
                f'    <linearGradient id="{grad_id}" '
                f'gradientUnits="userSpaceOnUse" '
                f'x1="{x1:.0f}" y1="{y1:.0f}" x2="{x2:.0f}" y2="{y2:.0f}">\n'
                f'{stops_xml}\n'
                f'    </linearGradient>'
            )
        elif layer["type"] == "radial":
            cx = layer["cx"] * W
            cy = layer["cy"] * H
            r = layer["r"] * max(W, H)
            gradient_defs.append(
                f'    <radialGradient id="{grad_id}" '
                f'gradientUnits="userSpaceOnUse" '
                f'cx="{cx:.0f}" cy="{cy:.0f}" r="{r:.0f}">\n'
                f'{stops_xml}\n'
                f'    </radialGradient>'
            )

        layer_rects.append(
            f'    <rect width="{W}" height="{H}" fill="url(#{grad_id})"/>'
        )

    defs_block = "\n".join(gradient_defs)

    background_svg = (
        f'<!-- Base background -->\n'
        f'  <rect width="{W}" height="{H}" fill="{EERIE_BLACK}"/>\n'
        f'  <!-- Multi-stop gradient layers (Layer5 illustration technique) -->\n'
        f'  <g clip-path="url(#canvas)">\n'
        + '\n'.join(layer_rects)
        + '\n  </g>'
    )

    return defs_block, background_svg


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
    {bg_gradient_defs}
    {glow_filter_def}
    <!-- Note: bg_gradient_defs contains background gradient definitions -->
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
