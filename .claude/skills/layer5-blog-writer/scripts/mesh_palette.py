"""
Layer5 hero-image palette, compositions, and layout variants.

Edit THIS file to change how hero images look. generate_hero_image.py imports
these constants and never hardcodes a color, control point, or layout itself -
if an image looks wrong (too muddy, wrong hue for a category, mascot in an
awkward spot), the fix lives here, not in the rendering code.

## Why there are ten compositions and four layouts

The previous version mapped 22 categories onto 2 compositions, jittered control
points by 0.05, and drew one invariant layout. Measured across eight generated
heroes, two posts in the *same* category differed by a mean of 8/255 (3%) -
below perceptual threshold - and every frame shared the same skeleton. The
result read as one template with the words swapped.

The fix is variety with editorial intent preserved. Category still picks a
*tone* (warm topics read warm, technical topics read cool), but which
composition and layout a post gets is drawn from a hash of its own title. Two
Kubernetes posts now land on different compositions and often different
layouts, while both still read as daytime-warm.
"""

# ── Brand hex values ────────────────────────────────────────────────────────

EERIE_BLACK = "#1E2117"   # deep shadow anchor
CHARCOAL    = "#3C494F"   # cool midtone, corner darkness
STEEL_TEAL  = "#477E96"   # cool blue-grey anchor
TEAL        = "#00B39F"   # Keppel - Layer5 primary
TEAL_LIGHT  = "#00D3A9"   # Caribbean Green - secondary anchor next to teal
SAFFRON     = "#EBC017"   # warm gold accent
BANANA      = "#FFF3C5"   # Banana Mania - pale warm transition
OFF_WHITE   = "#F8FFFC"   # subject-contrast zone, slight cool tint
WHITE       = "#FFFFFF"   # subject-contrast zone, full white

TEXT_WHITE     = "#FFFFFF"
TEXT_SUBTITLE  = "#C8DDD9"   # near-white with a slight teal tint, readable on dark scrim

# Category pill. White on TEAL measures 2.64:1, which fails WCAG AA for the
# 12px label (4.5:1 required). EERIE_BLACK on TEAL measures 6.19:1 and keeps
# the pill recognisably brand-teal.
PILL_BG   = TEAL
PILL_TEXT = EERIE_BLACK

# ── Mesh interpolation tuning ───────────────────────────────────────────────

# Inverse-distance-weighting power: how tightly each control point's color
# dominates its own neighborhood before blending into its neighbors.
# Raise it for more distinct color pools with sharper borders; lower it for a
# smoother, muddier blend (1.0-1.5 tends to look washed out - stay above 2.0).
IDW_POWER = 2.3

# Raster resolution the mesh is actually computed at, before the SVG <image>
# element scales it up to the full 1200x630 canvas. Low on purpose: the
# upscale is what gives the soft, organic mesh look (same trick tools like
# Figma's mesh-gradient plugin use), and it keeps this pure-Python renderer
# fast without needing numpy or Pillow.
MESH_RASTER_WIDTH  = 220
MESH_RASTER_HEIGHT = 116

# Per-pixel color jitter amplitude (0-255 scale) mixed in after interpolation,
# to avoid visible banding on smooth gradients. Keep small.
DITHER_AMPLITUDE = 4

# How far (as a fraction of canvas W/H) control points drift per post, seeded
# by the post title. At the old 0.05 this was doing essentially nothing on its
# own; it is now a secondary source of variation on top of composition choice,
# so it can afford to be larger.
JITTER_AMOUNT = 0.11

# ── Compositions ─────────────────────────────────────────────────────────
#
# Each composition is a list of (x_fraction, y_fraction, hex_color) control
# points across the 1200x630 canvas (fractions may go slightly outside 0-1 to
# push a color's influence off-canvas).
#
# Do NOT hand-place a white "clearing" point for the mascot. Earlier versions
# did, and combined with the glow it left 36% of the canvas near-white, which
# is what reduced the mesh to a thin rim of color around a white blob. Mascot
# contrast now comes solely from the contrast device (see CONTRAST_DEVICES),
# which is sized to the artwork rather than to the whole right-hand zone.

WARM_COMPOSITIONS = {
    "corner-warmth": [       # saffron corner, teal opposite edge
        (0.03, 0.05, SAFFRON),
        (0.18, 0.30, BANANA),
        (0.10, 0.92, EERIE_BLACK),
        (0.00, 0.55, CHARCOAL),
        (0.98, 0.12, TEAL_LIGHT),
        (0.92, 0.88, TEAL),
        (1.02, 0.50, TEAL_LIGHT),
    ],
    "golden-hour": [         # light floor, dark ceiling
        (0.20, 1.05, SAFFRON),
        (0.62, 0.98, BANANA),
        (0.95, 1.02, TEAL_LIGHT),
        (0.15, -0.05, EERIE_BLACK),
        (0.60, -0.10, CHARCOAL),
        (1.05, 0.05, STEEL_TEAL),
        (0.40, 0.45, TEAL),
    ],
    "citrus-teal": [         # banana top-right, teal bottom-left
        (0.95, 0.05, BANANA),
        (0.78, 0.22, SAFFRON),
        (0.05, 0.90, TEAL),
        (0.30, 1.02, TEAL_LIGHT),
        (0.02, 0.18, CHARCOAL),
        (0.55, 0.60, EERIE_BLACK),
        (1.03, 0.75, STEEL_TEAL),
    ],
    "dawn-band": [           # horizontal bands, light to dark
        (0.15, -0.06, BANANA),
        (0.85, -0.02, SAFFRON),
        (0.10, 0.42, TEAL_LIGHT),
        (0.90, 0.48, TEAL),
        (0.30, 1.04, EERIE_BLACK),
        (0.75, 1.06, CHARCOAL),
    ],
    "amber-edge": [          # dark core, warm rim
        (0.50, 0.50, EERIE_BLACK),
        (0.02, 0.02, SAFFRON),
        (0.98, 0.03, BANANA),
        (0.03, 0.97, TEAL),
        (0.97, 0.96, TEAL_LIGHT),
        (0.50, -0.10, CHARCOAL),
        (0.50, 1.10, CHARCOAL),
    ],
}

COOL_COMPOSITIONS = {
    "deep-space": [          # steel teal sky, black floor, one warm spark
        (0.45, -0.08, STEEL_TEAL),
        (0.05, 0.20, STEEL_TEAL),
        (0.92, 0.08, SAFFRON),
        (0.08, 0.95, EERIE_BLACK),
        (0.90, 0.98, CHARCOAL),
        (-0.05, 0.75, EERIE_BLACK),
        (1.00, 0.55, CHARCOAL),
    ],
    "midnight-teal": [       # teal rising from bottom-left into black
        (0.02, 1.02, TEAL),
        (0.28, 0.82, TEAL_LIGHT),
        (0.95, -0.05, EERIE_BLACK),
        (0.65, 0.15, CHARCOAL),
        (1.02, 0.60, STEEL_TEAL),
        (0.10, 0.30, EERIE_BLACK),
        (0.55, 1.05, CHARCOAL),
    ],
    "slate-drift": [         # charcoal field, steel streaks, saffron sliver
        (0.20, 0.10, CHARCOAL),
        (0.75, 0.30, STEEL_TEAL),
        (0.35, 0.70, CHARCOAL),
        (0.90, 0.92, EERIE_BLACK),
        (-0.02, 0.50, STEEL_TEAL),
        (1.04, 0.06, SAFFRON),
        (0.05, 1.02, TEAL),
    ],
    "abyss": [               # heavy black, single teal bloom lower-right
        (0.12, 0.08, EERIE_BLACK),
        (0.55, 0.02, CHARCOAL),
        (0.95, 0.30, EERIE_BLACK),
        (0.82, 0.88, TEAL),
        (1.05, 1.02, TEAL_LIGHT),
        (0.06, 0.92, CHARCOAL),
        (0.40, 0.55, STEEL_TEAL),
    ],
    "storm": [               # steel ceiling, charcoal floor, warm horizon
        (0.30, -0.10, STEEL_TEAL),
        (0.80, -0.06, STEEL_TEAL),
        (0.05, 0.50, SAFFRON),
        (1.02, 0.46, TEAL),
        (0.25, 1.05, EERIE_BLACK),
        (0.78, 1.02, CHARCOAL),
    ],
}

COMPOSITIONS = {**WARM_COMPOSITIONS, **COOL_COMPOSITIONS}

WARM_KEYS = sorted(WARM_COMPOSITIONS)
COOL_KEYS = sorted(COOL_COMPOSITIONS)

# ── Category tone ───────────────────────────────────────────────────────────
#
# Category no longer selects a composition directly. It selects a tone, and the
# post's own hash selects a composition within that tone. Keep this in sync
# with references/tags-categories.md - generate_hero_image.py validates
# --category against these keys and errors on an unknown one rather than
# silently falling back, which is how "Internship Programs" and "Programs"
# previously ended up on the default palette without anyone noticing.

CATEGORY_TONE = {
    "AI":                   "cool",
    "Announcements":        "warm",
    "AWS":                  "warm",
    "Azure":                "warm",
    "Cloud Native":         "warm",
    "Community":            "warm",
    "Docker":               "warm",
    "Engineering":          "warm",
    "Events":               "warm",
    "GCP":                  "warm",
    "Internship Programs":  "warm",
    "Kanvas":               "cool",
    "Kubernetes":           "warm",
    "Layer5 Cloud":         "cool",
    "Meshery":              "cool",
    "Observability":        "cool",
    "Open Source":          "warm",
    "Partners":             "warm",
    "Performance":          "warm",
    "Platform Engineering": "warm",
    "Programs":             "warm",
    "Security":             "cool",
    "Service Mesh":         "cool",
    "WebAssembly":          "cool",
}

DEFAULT_TONE = "warm"

# ── Layout variants ─────────────────────────────────────────────────────────
#
# Selected per post by hash. `text_side` mirrors the whole composition;
# `mascot_anchor` decides whether the artwork sits centred in its zone or
# planted on the floor of the safe area. `zone` is the fraction of canvas
# width reserved for the mascot.
#
# `margin` is the gap (in px) kept between the artwork and the canvas edge.
# The old generator had none: the mascot zone ran to x=1200 exactly, so any
# pose whose ink reached its own viewBox edge got clipped by the frame.

LAYOUTS = [
    {"name": "mascot-right-centered", "text_side": "left",  "mascot_anchor": "center", "zone": 0.44},
    {"name": "mascot-left-centered",  "text_side": "right", "mascot_anchor": "center", "zone": 0.44},
    {"name": "mascot-right-grounded", "text_side": "left",  "mascot_anchor": "bottom", "zone": 0.48},
    {"name": "mascot-left-grounded",  "text_side": "right", "mascot_anchor": "bottom", "zone": 0.48},
]

MASCOT_MARGIN = 34          # px kept clear between artwork and canvas edge
FOOTER_HEIGHT = 50          # px reserved at the bottom for date/author
MASCOT_MAX_HEIGHT = 0.90    # fraction of the *safe* area height, not the canvas

# ── Contrast devices ────────────────────────────────────────────────────────
#
# Five is black line art and needs a lighter field behind it. The old approach
# was six stacked ellipses scaled to the mascot *zone*, which produced an
# identical white amoeba covering a third of every canvas. These are sized to
# the artwork's measured ink box instead, so they hug the figure, and there are
# three of them so consecutive posts do not repeat.
#
#   halo  - soft elliptical bloom, tight to the figure
#   beam  - taller, narrower bloom lifted slightly, like a shaft of light
#   panel - soft-edged rounded rectangle, editorial/poster feel
#
# Every device is feathered. An earlier pass used a hard-edged circle and a
# crisp rounded rectangle; both read as a white sticker pasted behind Five
# rather than light falling behind him, and the circle's edge sliced visibly
# through ground detail on poses that have any. `blur` is a fraction of the
# device's own size, so it scales with the artwork.
#
# Opacity is NOT a per-device constant. Five is black line art, so what has to
# hold is a floor on the luminance behind him, and the mesh under the mascot
# varies enormously between compositions - `amber-edge` puts pale banana there
# while `abyss` puts near-black. A constant either punches a needless white
# hole through the light compositions or leaves the figure unreadable on the
# dark ones; both happened while tuning this. The generator samples the mesh it
# just rendered and solves for the alpha that reaches DEVICE_TARGET_LUMA, so
# bright backgrounds get a whisper and dark ones get a real light source.
#
# `pad` multiplies the ink box; `lift` offsets the device vertically as a
# fraction of its height; `weight` nudges the solved alpha per device.

CONTRAST_DEVICES = [
    {"name": "halo",  "pad": 1.20, "weight": 1.00, "blur": 0.125, "lift": 0.00, "shape": "ellipse"},
    {"name": "beam",  "pad": 1.12, "weight": 1.06, "blur": 0.165, "lift": -0.06, "shape": "ellipse",
     "aspect": (0.90, 1.12)},
    {"name": "panel", "pad": 1.10, "weight": 0.97, "blur": 0.075, "lift": 0.00, "shape": "rect"},
]

# Widest a contrast device may get relative to its other axis. Mascot ink boxes
# run from 1:4.8 to 1.9:1; without a cap the device mirrors that and stops
# reading as light.
DEVICE_MAX_ASPECT = 1.7

# Luminance (0-255) the field behind Five should reach after compositing.
# Black line art on 206 clears WCAG AA against its own strokes with room to
# spare, while still letting the mesh tint the field.
DEVICE_TARGET_LUMA = 206
DEVICE_MIN_OPACITY = 0.52
DEVICE_MAX_OPACITY = 0.94
# Feathering spreads the shape's alpha, so the painted centre lands below the
# nominal value. Measured against rendered output; raise if figures look thin.
DEVICE_BLUR_COMPENSATION = 1.12

DEVICE_FILL = OFF_WHITE
DEVICE_TINT = "#E8F6F4"     # cool secondary wash layered under the main shape

# ── Text scrim ──────────────────────────────────────────────────────────────
#
# Title and subtitle sit on the mesh, which varies per post, so they need a
# guaranteed dark field underneath. Width is a fraction of canvas width.

SCRIM_WIDTH   = 0.52
SCRIM_OPACITY = (0.62, 0.34, 0.0)   # inner, mid, outer stops

# ── Blank-signage overlay zones ─────────────────────────────────────────────
#
# Bounding box for --sign-text, in the POSE's OWN viewBox coordinate space
# (not canvas pixels) - it inherits the same transform used to place the
# mascot, so these numbers don't change if the canvas layout changes. cx/cy =
# text block center, max_width = wrap width, font_size in viewBox units,
# rotation in degrees (signs are rarely level). Calibrated by rendering each
# pose with placeholder text and eyeballing it - see Step 6 in SKILL.md before
# adding a new zone.

SIGN_TEXT_ZONES = {
    "blank-signpost": {   # SVG/Artboard 23.svg, viewBox 0 0 612 792
        "cx": 310, "cy": 300, "max_width": 260, "font_size": 34, "rotation": 0,
        "color": CHARCOAL,
    },
    "blank-book": {   # SVG/Artboard 36.svg, viewBox 0 0 529.17 622.85
        "cx": 268, "cy": 305, "max_width": 190, "font_size": 22, "rotation": 0,
        "color": EERIE_BLACK,
    },
}
