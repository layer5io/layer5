#!/usr/bin/env python3
"""
Regression tests for scripts/generate_hero_image.py.

Covers the 2.1 hero-fit and failure-hygiene fixes:

- fit_title/fit_subtitle wrap exactly as the renderer does and report dropped
  words instead of silently slicing them away;
- composing a hero with an over-long title warns on stderr;
- a `.svg` --output is refused before anything is created on disk;
- a rasterize failure without --keep-svg leaves no temp directory behind.

Run from the skill root:  python3 -m unittest discover -s scripts
"""

import io
import sys
import tempfile
import unittest
from contextlib import redirect_stderr
from pathlib import Path
from unittest import mock

sys.path.insert(0, str(Path(__file__).resolve().parent))

import generate_hero_image as gen  # noqa: E402
from generate_hero_image import (  # noqa: E402
    fit_subtitle,
    fit_title,
    generate_hero_image,
    pick,
    post_seed,
    text_column_width,
)
import mesh_palette as palette  # noqa: E402
from rasterize import RasterizeError  # noqa: E402

LONG_TITLE = ("How Platform Engineering Teams Eliminate Toil with "
              "Internal Developer Platforms at Scale")
LONG_SUBTITLE = ("A subtitle that runs far too long for the two lines the hero "
                 "image reserves for it and keeps going well past every limit")


class HeroFitTest(unittest.TestCase):
    def test_short_title_keeps_full_size(self):
        lines, font_size, dropped = fit_title("Meshery Test Hero", 548)
        self.assertEqual(dropped, [])
        self.assertEqual(font_size, 52)
        self.assertEqual(lines, ["Meshery Test Hero"])

    def test_title_shrinks_past_two_lines(self):
        title = "How Meshery Cut Our Incident Response Time in Half Today"
        _, font_size, dropped = fit_title(title, 548)
        self.assertEqual(font_size, 42)
        self.assertEqual(dropped, [])

    def test_long_title_reports_dropped_words(self):
        kept, font_size, dropped = fit_title(LONG_TITLE, 548)
        self.assertEqual(font_size, 42)
        self.assertEqual(len(kept), 3)
        self.assertTrue(dropped, "expected dropped words for a 90-char title")
        self.assertEqual(" ".join(kept + dropped).split(), LONG_TITLE.split())

    def test_short_subtitle_fits(self):
        kept, dropped = fit_subtitle("A short subtitle", 548)
        self.assertEqual(dropped, [])
        self.assertEqual(kept, ["A short subtitle"])

    def test_long_subtitle_reports_dropped_words(self):
        kept, dropped = fit_subtitle(LONG_SUBTITLE, 548)
        self.assertEqual(len(kept), 2)
        self.assertTrue(dropped, "expected dropped words for a long subtitle")

    def test_selection_is_deterministic(self):
        seed = post_seed("Some Title")
        first = (pick(palette.WARM_KEYS, seed, "composition"),
                 pick(palette.LAYOUTS, seed, "layout"))
        seed_again = post_seed("Some Title")
        second = (pick(palette.WARM_KEYS, seed_again, "composition"),
                  pick(palette.LAYOUTS, seed_again, "layout"))
        self.assertEqual(first, second)

    def test_text_column_width_matches_layout(self):
        layout = {"zone": 0.44}
        self.assertEqual(text_column_width(layout), (1200 - 1200 * 0.44) - 52 - 24)

    def test_compose_warns_on_dropped_title(self):
        buf = io.StringIO()
        with redirect_stderr(buf):
            gen.compose_hero_svg(LONG_TITLE, "", "Meshery", None, None,
                                 "September 21, 2026", "Layer5 Team", None)
        self.assertIn("dropping", buf.getvalue())

    def test_compose_silent_when_title_fits(self):
        buf = io.StringIO()
        with redirect_stderr(buf):
            gen.compose_hero_svg("Meshery Test Hero", "", "Meshery", None, None,
                                 "September 21, 2026", "Layer5 Team", None)
        self.assertNotIn("dropping", buf.getvalue())

    def test_compose_warns_on_dropped_subtitle(self):
        buf = io.StringIO()
        with redirect_stderr(buf):
            gen.compose_hero_svg("Meshery Test Hero", LONG_SUBTITLE, "Meshery",
                                 None, None, "September 21, 2026",
                                 "Layer5 Team", None)
        self.assertIn("dropping", buf.getvalue())


class FailureHygieneTest(unittest.TestCase):
    def setUp(self):
        self._tmp = tempfile.TemporaryDirectory()
        self.dir = Path(self._tmp.name)

    def tearDown(self):
        self._tmp.cleanup()

    def _leftover_hero_tmps(self):
        return [p for p in Path(tempfile.gettempdir()).glob("layer5-hero-*")]

    def test_svg_output_refused_before_mkdir(self):
        out = self.dir / "new-post-dir" / "hero-image.svg"
        with self.assertRaises(SystemExit):
            generate_hero_image("Meshery Test Hero", "", "Meshery", None, None,
                                "September 21, 2026", "Layer5 Team",
                                str(out), None)
        self.assertFalse(out.parent.exists(),
                         "refused .svg output must not create directories")

    def test_temp_dir_cleaned_on_rasterize_failure(self):
        out = self.dir / "post" / "hero-image.png"
        before = set(self._leftover_hero_tmps())
        with mock.patch.object(gen, "rasterize",
                               side_effect=RasterizeError("boom")):
            with self.assertRaises(SystemExit):
                generate_hero_image("Meshery Test Hero", "", "Meshery", None,
                                    None, "September 21, 2026", "Layer5 Team",
                                    str(out), None)
        self.assertEqual(set(self._leftover_hero_tmps()), before)
        self.assertFalse((out.parent / "hero-image.svg").exists())

    def test_keep_svg_preserves_working_file_on_failure(self):
        out = self.dir / "post" / "hero-image.png"
        with mock.patch.object(gen, "rasterize",
                               side_effect=RasterizeError("boom")):
            with self.assertRaises(SystemExit):
                generate_hero_image("Meshery Test Hero", "", "Meshery", None,
                                    None, "September 21, 2026", "Layer5 Team",
                                    str(out), None, keep_svg=True)
        self.assertTrue((out.parent / "hero-image.svg").exists())


if __name__ == "__main__":
    unittest.main()
