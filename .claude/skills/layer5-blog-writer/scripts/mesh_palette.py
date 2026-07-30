"""
Layer5 hero-image mesh-gradient palette.

Edit THIS file to change hero-image colors. generate_hero_image.py imports these
constants and never hardcodes a color itself - if a hero image looks wrong (too
muddy, too dark, wrong hue for a category), the fix lives here, not in the
generator's interpolation/rendering code.
"""

# ── Brand hex values ────────────────────────────────────────────────────────

EERIE_BLACK = "#1E2117"   # deep shadow anchor
CHARCOAL    = "#3C494F"   # cool midtone, corner darkness
STEEL_TEAL  = "#477E96"   # cool blue-grey anchor (Deep Space compositions)
TEAL        = "#00B39F"   # Keppel - Layer5 primary
TEAL_LIGHT  = "#00D3A9"   # Caribbean Green - secondary anchor next to teal
SAFFRON     = "#EBC017"   # warm gold accent
BANANA      = "#FFF3C5"   # Banana Mania - pale warm transition
OFF_WHITE   = "#F8FFFC"   # subject-contrast zone, slight cool tint
WHITE       = "#FFFFFF"   # subject-contrast zone, full white

TEXT_WHITE     = "#FFFFFF"
TEXT_SUBTITLE  = "#C8DDD9"   # near-white with a slight teal tint, readable on dark scrim

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

# How far (as a fraction of canvas W/H) control points are allowed to drift
# per post, seeded by the post title, so two posts in the same category don't
# render an identical background.
JITTER_AMOUNT = 0.05

# ── Compositions ─────────────────────────────────────────────────────────
#
# Each composition is a list of (x_fraction, y_fraction, hex_color) control
# points across the 1200x630 canvas (fractions may go slightly outside 0-1 to
# push a color's influence off-canvas). The generator ALWAYS adds two more
# WHITE/OFF_WHITE points at wherever Five actually ends up standing, so don't
# hand-place a clearing point here - just keep this list to the color story.

CORNER_WARMTH = [   # daytime / warm - lighter, energetic topics
    (0.03, 0.05, SAFFRON),
    (0.18, 0.30, BANANA),
    (0.10, 0.92, EERIE_BLACK),
    (0.00, 0.55, CHARCOAL),
    (0.98, 0.12, TEAL_LIGHT),
    (0.92, 0.88, TEAL),
    (1.02, 0.50, TEAL_LIGHT),
]

DEEP_SPACE = [   # night / cool - darker, more technical topics
    (0.45, -0.08, STEEL_TEAL),
    (0.05, 0.20, STEEL_TEAL),
    (0.92, 0.08, SAFFRON),
    (0.08, 0.95, EERIE_BLACK),
    (0.90, 0.98, CHARCOAL),
    (-0.05, 0.75, EERIE_BLACK),
    (1.00, 0.55, CHARCOAL),
]

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

DEFAULT_COMPOSITION = CORNER_WARMTH

# ── Blank-signage overlay zones ─────────────────────────────────────────────
#
# Bounding box for --sign-text, in the POSE's OWN viewBox coordinate space
# (not canvas pixels) - it inherits the same translate+scale transform used to
# place the mascot, so these numbers don't need to change if the overall
# canvas layout changes. cx/cy = text block center, max_width = wrap width,
# font_size in viewBox units, rotation in degrees (signs are rarely level).
# Calibrated by rendering each pose with placeholder text and eyeballing it -
# see Step 6 in SKILL.md before adding a new zone.

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
