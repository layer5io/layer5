#!/usr/bin/env python3
"""
Rasterize a hero SVG to the file the blog post actually ships.

The generator composes in SVG because that is the sane way to place vector
mascot art on a computed background. It must not *ship* SVG:

  - `og:image` / `twitter:image` resolve to the thumbnail's publicURL
    (src/templates/blog-single.js -> src/components/seo.js). X, LinkedIn,
    Facebook and Slack do not render SVG social cards, so an SVG thumbnail
    unfurls with no image anywhere.
  - `childImageSharp` is null for SVG, so src/components/image.js falls back to
    a bare <img src>. No srcset, no WebP/AVIF, no blur-up: the blog index card
    downloads the full-size file to paint a ~350px thumbnail.
  - Embedding Qanelas Soft as base64 made the font 73% of every hero file, and
    put the raw OTF of a commercially licensed face into a public repo once per
    post. Rasterizing bakes the glyphs and ships no font binary at all.

Format: JPEG by default. Measured on a representative hero - PNG 502KB,
PNG-8 155KB, JPEG q88 74KB, WebP q88 39KB. WebP is smallest but crawler
support for it in `og:image` is uneven, and JPEG q88 is visually
indistinguishable here (mean delta 1.1/255 against the PNG source). Shipping
JPEG keeps every crawler happy; on-page visitors still get WebP/AVIF because
gatsby-plugin-sharp reprocesses the raster.

Chrome (or any Chromium) does the rendering. Pillow is only needed to re-encode
the screenshot as JPEG/WebP; without it this degrades to a PNG and says so.
"""

import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

CHROME_CANDIDATES = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/snap/bin/chromium",
]
CHROME_ON_PATH = ["google-chrome", "google-chrome-stable", "chromium", "chromium-browser", "chrome"]


class RasterizeError(RuntimeError):
    """Rasterization could not complete. Message is user-facing and actionable."""


def resolve_chrome():
    for name in CHROME_ON_PATH:
        found = shutil.which(name)
        if found:
            return found
    for path in CHROME_CANDIDATES:
        if Path(path).exists():
            return path
    raise RasterizeError(
        "No Chrome/Chromium binary found. Install Google Chrome, or put a "
        "chromium binary on PATH. Checked PATH names "
        f"({', '.join(CHROME_ON_PATH)}) and standard install locations."
    )


def _screenshot(svg_path, png_path, width, height):
    """Render svg_path at exactly width x height into png_path."""
    svg_path = Path(svg_path).resolve()
    # The wrapper lives beside the SVG so a relative src works without needing
    # --allow-file-access-from-files.
    wrapper = svg_path.with_name(f".{svg_path.stem}.raster.html")
    wrapper.write_text(
        "<!doctype html><meta charset='utf-8'>"
        "<style>html,body{margin:0;padding:0;overflow:hidden;background:#fff}"
        f"img{{display:block;width:{width}px;height:{height}px}}</style>"
        f"<body><img src='{svg_path.name}'></body>"
    )
    try:
        result = subprocess.run(
            [
                resolve_chrome(), "--headless", "--disable-gpu", "--no-sandbox",
                "--hide-scrollbars", "--force-device-scale-factor=1",
                f"--window-size={width},{height}",
                "--virtual-time-budget=15000",
                f"--screenshot={png_path}",
                wrapper.as_uri(),
            ],
            capture_output=True, text=True, timeout=180,
        )
    finally:
        wrapper.unlink(missing_ok=True)

    if not Path(png_path).exists():
        tail = (result.stderr or "").strip().splitlines()[-3:]
        raise RasterizeError(
            "Chrome produced no screenshot. Last output:\n  " + "\n  ".join(tail)
        )


def rasterize(svg_path, out_path, width=1200, height=630, quality=88):
    """
    Render svg_path and write out_path, encoding by its suffix
    (.jpg/.jpeg, .png, .webp). Returns a short human-readable summary.
    """
    out_path = Path(out_path)
    suffix = out_path.suffix.lower()
    if suffix not in (".jpg", ".jpeg", ".png", ".webp"):
        raise RasterizeError(
            f"Unsupported hero image format '{suffix}'. Use .jpg (recommended), .png, or .webp."
        )
    out_path.parent.mkdir(parents=True, exist_ok=True)

    with tempfile.TemporaryDirectory() as tmp:
        shot = Path(tmp) / "shot.png"
        # Chrome only writes PNG, so shoot next to the SVG then re-encode.
        staged = Path(svg_path).with_suffix(".raster.png")
        _screenshot(svg_path, staged, width, height)
        shutil.move(str(staged), shot)

        if suffix == ".png":
            shutil.move(str(shot), out_path)
            return f"{out_path.name} ({width}x{height} PNG, {out_path.stat().st_size / 1024:.0f}KB)"

        try:
            from PIL import Image
        except ImportError:
            fallback = out_path.with_suffix(".png")
            shutil.move(str(shot), fallback)
            raise RasterizeError(
                f"Pillow is not installed, so {suffix} encoding is unavailable. "
                f"Wrote {fallback.name} instead, which is roughly 6x larger than "
                f"the intended JPEG. Install Pillow (pip install pillow) and rerun "
                f"to ship the smaller file."
            )

        image = Image.open(shot).convert("RGB")
        if image.size != (width, height):
            raise RasterizeError(
                f"Chrome rendered {image.size[0]}x{image.size[1]}, expected {width}x{height}."
            )
        if suffix == ".webp":
            image.save(out_path, "WEBP", quality=quality, method=6)
        else:
            image.save(out_path, "JPEG", quality=quality, optimize=True, progressive=True)

    fmt = "WebP" if suffix == ".webp" else "JPEG"
    return f"{out_path.name} ({width}x{height} {fmt} q{quality}, {out_path.stat().st_size / 1024:.0f}KB)"


if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit("usage: rasterize.py <input.svg> <output.jpg|png|webp> [width] [height]")
    w = int(sys.argv[3]) if len(sys.argv) > 3 else 1200
    h = int(sys.argv[4]) if len(sys.argv) > 4 else 630
    try:
        print(rasterize(sys.argv[1], sys.argv[2], w, h))
    except RasterizeError as exc:
        sys.exit(f"error: {exc}")
