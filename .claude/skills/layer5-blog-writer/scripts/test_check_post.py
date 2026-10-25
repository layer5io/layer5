#!/usr/bin/env python3
"""
Regression tests for scripts/check_post.py.

Covers the 2.1 brand-check and structural-check fixes:

- link text that is the href's own repo/org slug is correctly lowercase and
  must not be flagged, while prose link text still is;
- frontmatter title/subtitle/description are prose and carry brand rules,
  while tags/paths stay exempt;
- JSX text-bearing attributes (quote, heading, content, alt, title) are
  checked as prose; route/file-path attributes are not;
- structural requirements must be real markup, not fenced code samples, and
  intro/outro tolerate extra attributes;
- titles/subtitles that do not fit the hero image fail the lint.

Run from the skill root:  python3 -m unittest discover -s scripts
"""

import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from check_post import check  # noqa: E402

BASE_TITLE = "Tuning Kubernetes Probes for Faster Recovery"
BASE_SUBTITLE = "A short subtitle"
BASE_DESC = "A fine description of exactly the right length for SEO purposes here."
BASE_TAGS = "  - Kubernetes\n  - Engineering"

POST_TEMPLATE = """---
title: "TITLE_HERE"
subtitle: "SUBTITLE_HERE"
date: 2026-04-01 10:00:00 -0500
author: Layer5 Team
thumbnail: ./hero-image.jpg
darkthumbnail: ./hero-image.jpg
description: "DESC_HERE"
type: Blog
category: Engineering
tags:
TAGS_HERE
featured: false
published: true
---

import { BlogWrapper } from "../../Blog.style.js";

<BlogWrapper>

INNER_HERE

</BlogWrapper>
"""

BASE_INNER = """<div className="intro">
  <p>Intro lede here.</p>
</div>

## Section

BODY_HERE

<Blockquote quote="A takeaway for the reader." />

<CTA_FullWidth
image="x"
heading="Get Started with Meshery"
alt="Meshery logo"
content="Meshery is the cloud native management plane."
button_text="Get Meshery"
url="/cloud-native-management/meshery"
external_link={false}
/>

<div className="outro">
  <p>Outro next step.</p>
</div>"""


class CheckPostTest(unittest.TestCase):
    def setUp(self):
        self._tmp = tempfile.TemporaryDirectory()
        self.dir = Path(self._tmp.name)
        (self.dir / "hero-image.jpg").write_bytes(b"fake")

    def tearDown(self):
        self._tmp.cleanup()

    def check_inner(self, inner, title=BASE_TITLE, subtitle=BASE_SUBTITLE,
                    desc=BASE_DESC, tags=BASE_TAGS):
        # SUBTITLE_HERE first: it contains TITLE_HERE as a substring.
        text = (POST_TEMPLATE
                .replace("SUBTITLE_HERE", subtitle)
                .replace("TITLE_HERE", title)
                .replace("DESC_HERE", desc)
                .replace("TAGS_HERE", tags)
                .replace("INNER_HERE", inner))
        path = self.dir / "index.mdx"
        path.write_text(text)
        return check(path)

    def check_body(self, body, **kwargs):
        return self.check_inner(BASE_INNER.replace("BODY_HERE", body), **kwargs)

    def messages(self, findings):
        return [message for _, message in findings]

    def test_clean_post_passes(self):
        findings = self.check_body("<p>Body copy about Kubernetes and Meshery.</p>")
        self.assertEqual(findings, [])

    def test_repo_slug_link_text_not_flagged(self):
        body = (
            '<p>See <a href="https://github.com/meshery/meshery" target="_blank" '
            'rel="noopener noreferrer">meshery/meshery</a> and '
            '<a href="https://github.com/meshery" target="_blank" '
            'rel="noopener noreferrer">meshery</a>.</p>'
        )
        self.assertEqual(self.check_body(body), [])

    def test_prose_brand_still_flagged(self):
        findings = self.check_body("<p>meshery makes this easy for operators.</p>")
        self.assertTrue(any("Meshery" in m for m in self.messages(findings)),
                        findings)

    def test_prose_link_text_still_flagged(self):
        body = '<p>Read the <a href="https://example.com/guide">meshery guide</a>.</p>'
        findings = self.check_body(body)
        self.assertTrue(any("Meshery" in m for m in self.messages(findings)),
                        findings)

    def test_frontmatter_title_brand_flagged(self):
        findings = self.check_body(
            "<p>Clean body.</p>", title="How meshery saves your weekend")
        self.assertTrue(any("Meshery" in m for m in self.messages(findings)),
                        findings)

    def test_frontmatter_description_brand_flagged(self):
        findings = self.check_body(
            "<p>Clean body.</p>", desc="How meshery saves your weekend on call")
        self.assertTrue(any("Meshery" in m for m in self.messages(findings)),
                        findings)

    def test_frontmatter_lowercase_tags_allowed(self):
        tags = "  - ai\n  - devops"
        findings = self.check_body("<p>Clean body.</p>", tags=tags)
        self.assertEqual(findings, [])

    def test_blockquote_quote_attr_brand_flagged(self):
        findings = self.check_body(
            '<Blockquote quote="meshery makes this easy for operators" />')
        self.assertTrue(any("Meshery" in m for m in self.messages(findings)),
                        findings)

    def test_alt_attr_brand_flagged(self):
        findings = self.check_body(
            '<img src={diagramImg} alt="meshery dashboard screenshot" />')
        self.assertTrue(any("Meshery" in m for m in self.messages(findings)),
                        findings)

    def test_route_attr_not_flagged(self):
        body = '<p>Join <Link to="/community/meshmates">MeshMates</Link>.</p>'
        self.assertEqual(self.check_body(body), [])

    def test_structure_only_in_fence_reports_missing(self):
        inner = ("```jsx\n<div className=\"intro\">x</div>\n"
                 "<Blockquote quote=\"x\" />\n<CTA_FullWidth />\n"
                 "<div className=\"outro\">y</div>\n```")
        findings = self.check_inner(inner)
        joined = " | ".join(self.messages(findings))
        self.assertIn("intro", joined)
        self.assertIn("outro", joined)
        self.assertIn("Blockquote", joined)
        self.assertIn("call to action", joined)

    def test_intro_with_extra_attr_accepted(self):
        inner = BASE_INNER.replace('<div className="intro">',
                                   '<div className="intro" id="lede">')
        inner = inner.replace("BODY_HERE", "<p>Clean body.</p>")
        findings = self.check_inner(inner)
        self.assertNotIn("missing opening lede wrapped in",
                         " | ".join(self.messages(findings)), findings)
        self.assertEqual(findings, [])

    def test_long_title_flagged_for_hero_fit(self):
        title = ("How Platform Engineering Teams Eliminate Toil with "
                 "Internal Developer Platforms at Scale")
        findings = self.check_body("<p>Clean body.</p>", title=title)
        self.assertTrue(any("hero image" in m for m in self.messages(findings)),
                        findings)

    def test_long_subtitle_flagged_for_hero_fit(self):
        # Past two lines even in the widest text column (112 chars).
        subtitle = ("A subtitle that runs far too long for the two lines the hero "
                    "image reserves for it and keeps going well past every limit")
        findings = self.check_body("<p>Clean body.</p>", subtitle=subtitle)
        self.assertTrue(any("hero image" in m for m in self.messages(findings)),
                        findings)


if __name__ == "__main__":
    unittest.main()
