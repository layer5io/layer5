#!/usr/bin/env python3
"""
Measure the visible-ink bounding box of every Five pose.

Why this exists: a pose's `viewBox` is the Illustrator artboard, not the
artwork. Several poses use a fraction of their artboard - `pondering` paints
113 units of ink inside a 529-unit-wide viewBox (21%). A generator that scales
by viewBox therefore renders that pose roughly four times smaller than one
whose art fills its box, which is why mascot scale used to wobble from post to
post. Placement must key off the ink, so the ink has to be measured once and
cached.

`getBBox()` alone is not enough: at least one pose (Artboard 46) carries an
invisible `fill:none` guide path that stretches far outside the artboard and
would inflate the box by 93%. This walks the painting leaves instead and skips
anything that renders nothing.

Requires a Chromium/Chrome binary (see rasterize.py, which resolves the same
one). Output is committed, so contributors only rerun this when poses change:

    python3 scripts/measure_pose_bounds.py
"""

import json
import re
import subprocess
import sys
import threading
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from rasterize import resolve_chrome  # noqa: E402

SKILL_ROOT = Path(__file__).resolve().parent.parent
POSE_DIR = SKILL_ROOT / "assets" / "mascot-five" / "SVG"
OUTPUT = SKILL_ROOT / "assets" / "mascot-five" / "pose-bounds.json"

# Union the client rects of leaves that actually paint. Elements whose fill and
# stroke are both none contribute geometry to getBBox() but no pixels, so they
# are skipped - that is the Artboard 46 guide-path case.
PROBE_JS = """
const files = %s;
const PAINTERS = ['path','polygon','polyline','circle','ellipse','rect','line','text','image'];
(async () => {
  const results = {};
  for (const f of files) {
    const txt = await (await fetch(encodeURIComponent(f))).text();
    const doc = new DOMParser().parseFromString(txt, 'image/svg+xml');
    const svg = document.importNode(doc.documentElement, true);
    const vb = doc.documentElement.getAttribute('viewBox');
    const [vx, vy, vw, vh] = (vb || '0 0 612 792').split(/[\\s,]+/).map(Number);
    // 1 CSS pixel == 1 user unit, so client rects read back as user units.
    svg.setAttribute('width', vw);
    svg.setAttribute('height', vh);
    svg.style.position = 'absolute';
    svg.style.left = '0px';
    svg.style.top = '0px';
    document.body.appendChild(svg);
    const origin = svg.getBoundingClientRect();

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const el of svg.querySelectorAll(PAINTERS.join(','))) {
      if (el.closest('defs, clipPath, mask, marker, pattern, symbol')) continue;
      const cs = getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden') continue;
      if (parseFloat(cs.opacity) === 0) continue;
      const paintsFill = cs.fill && cs.fill !== 'none';
      const paintsStroke = cs.stroke && cs.stroke !== 'none' && parseFloat(cs.strokeWidth) > 0;
      if (!paintsFill && !paintsStroke) continue;
      const r = el.getBoundingClientRect();
      if (!r.width && !r.height) continue;
      minX = Math.min(minX, r.left - origin.left);
      minY = Math.min(minY, r.top - origin.top);
      maxX = Math.max(maxX, r.right - origin.left);
      maxY = Math.max(maxY, r.bottom - origin.top);
    }
    svg.remove();
    if (!isFinite(minX)) { minX = 0; minY = 0; maxX = vw; maxY = vh; }
    results[f] = {
      viewBox: [vx, vy, vw, vh],
      // Ink expressed in the pose's own user space, so the generator can
      // translate by -ink.x/-ink.y regardless of the viewBox origin.
      ink: [
        +(vx + minX).toFixed(2), +(vy + minY).toFixed(2),
        +(maxX - minX).toFixed(2), +(maxY - minY).toFixed(2),
      ],
    };
  }
  document.title = 'DONE';
  document.getElementById('out').textContent = JSON.stringify(results);
})();
"""


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


def main():
    poses = sorted(p.name for p in POSE_DIR.glob("*.svg"))
    if not poses:
        sys.exit(f"No poses found under {POSE_DIR}")

    probe = POSE_DIR / "_bounds_probe.html"
    probe.write_text(
        "<!doctype html><meta charset='utf-8'><body><pre id='out'></pre>"
        "<script>" + (PROBE_JS % json.dumps(poses)) + "</script></body>"
    )

    server = ThreadingHTTPServer(
        ("127.0.0.1", 0), partial(QuietHandler, directory=str(POSE_DIR))
    )
    threading.Thread(target=server.serve_forever, daemon=True).start()
    port = server.server_address[1]

    try:
        chrome = resolve_chrome()
        dom = subprocess.run(
            [
                chrome, "--headless", "--disable-gpu", "--no-sandbox",
                "--virtual-time-budget=30000", "--dump-dom",
                f"http://127.0.0.1:{port}/_bounds_probe.html",
            ],
            capture_output=True, text=True, timeout=180,
        ).stdout
    finally:
        server.shutdown()
        probe.unlink(missing_ok=True)

    match = re.search(r'<pre id="out">(.*?)</pre>', dom, re.S)
    if not match or not match.group(1).strip():
        sys.exit("Bounds probe returned nothing - is the Chrome binary usable?")

    data = json.loads(match.group(1).replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">"))
    missing = [p for p in poses if p not in data]
    if missing:
        sys.exit(f"Probe skipped {len(missing)} pose(s): {missing[:5]}")

    OUTPUT.write_text(json.dumps(data, indent=2, sort_keys=True) + "\n")
    print(f"Wrote {OUTPUT.relative_to(SKILL_ROOT)} for {len(data)} poses")

    tight = sorted(
        ((v["ink"][2] * v["ink"][3]) / (v["viewBox"][2] * v["viewBox"][3]), k)
        for k, v in data.items()
    )
    print("\nLowest artboard fill (these are the poses that used to render small):")
    for frac, name in tight[:5]:
        print(f"  {frac:5.0%}  {name}")


if __name__ == "__main__":
    main()
