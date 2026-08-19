#!/usr/bin/env python3
"""
Validate a finished blog post before it is committed.

Step 7 of this skill used to be a checklist of prose assertions - "no em
dashes", "tags match the approved list casing exactly", "thumbnail present" -
which an agent could tick by eye without ever testing. Checklists that cannot
fail do not catch anything. This runs the same intent as assertions.

    python3 scripts/check_post.py src/collections/blog/2026/08-12-my-post/index.mdx

Exit code 0 means clean, 1 means findings. Every finding names the line.
Approved categories and tags are parsed from references/tags-categories.md so
that file stays the single source of truth, and CATEGORY_TONE in
mesh_palette.py is cross-checked against it.

Scope: this gates posts *this skill writes*. Run across the existing 118-post
archive it flags 116 of them, overwhelmingly for structural conventions that
postdate the posts (`intro`/`outro` wrappers, a required Blockquote and CTA)
and for tags predating the approved list. That is expected and is not a backlog
this skill created. Two findings in the archive are real defects worth a
separate pass: 97 lines carrying en/em dashes, and
src/collections/blog/2023/09-05-layer5-and-intel-collaboration/index.mdx, whose
thumbnail is a partner logo SVG and therefore has the same broken social card
that motivated the raster switch. Converting a partner's logo is a branding
decision, so it is flagged rather than done here.
"""

import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import mesh_palette as palette

SKILL_ROOT = Path(__file__).resolve().parent.parent
TAXONOMY = SKILL_ROOT / "references" / "tags-categories.md"

RASTER_SUFFIXES = (".jpg", ".jpeg", ".png", ".webp")
REQUIRED_FIELDS = [
    "title", "date", "author", "thumbnail", "darkthumbnail",
    "description", "type", "category", "tags", "featured", "published",
]
DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} [+-]\d{4}$")
DASH_RE = re.compile(r"[–—]")

# Brand spellings that are routinely got wrong. Checked against prose only -
# see mask_prose(). Lowercase forms are correct inside URLs, package names, and
# code (`meshery.io`, `github.com/meshery/meshery`, the `devops` tag), so
# checking raw lines produces nothing but noise.
BRAND_RE = [
    (re.compile(r"\bMeshmates\b|\bmeshmates\b"), "MeshMates"),
    (re.compile(r"\bmeshery\b"), "Meshery"),
    (re.compile(r"\bKubecon\b|\bkubecon\b"), "KubeCon"),
    (re.compile(r"\bGitops\b|\bgitops\b"), "GitOps"),
    (re.compile(r"\bDevops\b"), "DevOps"),
    (re.compile(r"\bOpentelemetry\b"), "OpenTelemetry"),
    (re.compile(r"\bkanvas\b"), "Kanvas"),
]

# Authorship attribution only, and deliberately narrow.
#
# Naming an AI product is not a violation: Layer5 publishes posts *about*
# Claude Code, Copilot, and LLM-assisted contribution, where phrases like
# "pastes an AI-generated response" are the subject matter. Two earlier
# versions of this rule flagged exactly those sentences. Only a claim that
# something other than the author produced *this post* counts, so this matches
# attribution trailers and vendor-named byline phrasing, nothing looser.
# Judgement calls beyond that stay with the human reviewer.
AI_ATTRIBUTION_RE = re.compile(
    r"co-authored-by:\s*\S*\s*(claude|anthropic|copilot|chatgpt|openai)"
    r"|(generated|written|authored|drafted)\s+(with|by)\s+"
    r"(claude|anthropic|chatgpt|openai|copilot|gemini)\b"
    r"|\U0001F916",
    re.I,
)
UNPINNED_RE = re.compile(r"releases/latest|:latest\b")
FENCE_RE = re.compile(r"^\s*```")
INLINE_CODE_RE = re.compile(r"`[^`]*`")
URL_RE = re.compile(r"https?://\S+|\b[\w.-]+\.(?:io|com|org|dev|sh|net)\b(?:/\S*)?")
# JSX/HTML attribute values and import specifiers hold routes and file paths
# whose lowercase spelling is correct (`to="/community/meshmates"`,
# `assets/images/meshery/...`). Brand rules must never see them.
ATTR_RE = re.compile(r"""[\w-]+=\{?["'][^"']*["']\}?""")
IMPORT_RE = re.compile(r"^\s*import\s")


def mask_prose(line):
    """Blank out code, URLs, and attribute values so brand rules see only prose."""
    if IMPORT_RE.match(line):
        return ""
    masked = INLINE_CODE_RE.sub(" ", line)
    masked = ATTR_RE.sub(" ", masked)
    return URL_RE.sub(" ", masked)


def parse_taxonomy():
    text = TAXONOMY.read_text()

    cat_section = text.split("## Categories", 1)[1].split("\n## ", 1)[0]
    categories = set()
    for row in re.findall(r"^\|\s*([^|]+?)\s*\|", cat_section, re.M):
        if row and row != "Category" and not set(row) <= set("- "):
            categories.add(row)

    tag_section = text.split("## Tags", 1)[1].split("\n## ", 1)[0]
    tags = set(re.findall(r"`([^`]+)`", tag_section))

    return categories, tags


def parse_frontmatter(lines):
    """Minimal flat-YAML reader - enough for this frontmatter, no dependency."""
    if not lines or lines[0].strip() != "---":
        return None, None, None
    end = next((i for i, l in enumerate(lines[1:], 1) if l.strip() == "---"), None)
    if end is None:
        return None, None, None

    fields, order, key = {}, {}, None
    for i in range(1, end):
        raw = lines[i]
        stripped = raw.strip()
        if not stripped or stripped.startswith("#"):
            continue
        if stripped.startswith("- ") and key:
            fields[key].append(stripped[2:].strip().strip("\"'"))
            continue
        match = re.match(r"^([A-Za-z_][\w-]*):\s*(.*)$", stripped)
        if not match:
            continue
        key, value = match.group(1), match.group(2).strip()
        order[key] = i + 1
        if value == "":
            fields[key] = []
        elif value.startswith("[") and value.endswith("]"):
            fields[key] = [v.strip().strip("\"'") for v in value[1:-1].split(",") if v.strip()]
        else:
            fields[key] = value.strip("\"'")
    return fields, order, end


def check(path):
    path = Path(path)
    findings = []

    def flag(line, message):
        findings.append((line, message))

    if not path.exists():
        return [(0, f"{path} does not exist")]

    text = path.read_text()
    lines = text.splitlines()
    fields, order, fm_end = parse_frontmatter(lines)

    if fields is None:
        return [(1, "no parseable frontmatter block (must open and close with ---)")]

    categories, tags = parse_taxonomy()

    # Taxonomy and palette must agree, or hero images silently take the default tone.
    doc_only = categories - set(palette.CATEGORY_TONE)
    palette_only = set(palette.CATEGORY_TONE) - categories
    if doc_only:
        flag(0, f"categories in tags-categories.md but missing from mesh_palette.CATEGORY_TONE: "
                f"{sorted(doc_only)}")
    if palette_only:
        flag(0, f"categories in mesh_palette.CATEGORY_TONE but missing from tags-categories.md: "
                f"{sorted(palette_only)}")

    for field in REQUIRED_FIELDS:
        if field not in fields:
            flag(1, f"frontmatter is missing required field '{field}'")

    if "date" in fields and not DATE_RE.match(str(fields["date"])):
        flag(order.get("date", 1),
             f"date '{fields['date']}' must be YYYY-MM-DD HH:MM:SS +/-HHMM")

    for field in ("thumbnail", "darkthumbnail"):
        value = fields.get(field)
        if not value:
            continue
        line = order.get(field, 1)
        suffix = Path(value).suffix.lower()
        if suffix == ".svg":
            flag(line, f"{field} is an SVG. og:image and twitter:image resolve to this file's "
                       f"publicURL, and no major social platform renders SVG there. Generate a "
                       f"raster with scripts/generate_hero_image.py --output hero-image.jpg")
        elif suffix not in RASTER_SUFFIXES:
            flag(line, f"{field} '{value}' is not a supported image ({', '.join(RASTER_SUFFIXES)})")
        elif value.startswith("./") and not (path.parent / value[2:]).exists():
            flag(line, f"{field} points at '{value}', which does not exist next to the post")

    category = fields.get("category")
    if category and category not in categories:
        flag(order.get("category", 1),
             f"category '{category}' is not in references/tags-categories.md (case-sensitive)")

    post_tags = fields.get("tags") or []
    if isinstance(post_tags, str):
        post_tags = [post_tags]
    if not 2 <= len(post_tags) <= 5:
        flag(order.get("tags", 1), f"expected 2-5 tags, found {len(post_tags)}")
    for tag in post_tags:
        if tag not in tags:
            near = [t for t in tags if t.lower() == tag.lower()]
            hint = f" (did you mean '{near[0]}'? casing is significant)" if near else ""
            flag(order.get("tags", 1),
                 f"tag '{tag}' is not in references/tags-categories.md{hint}")

    body = "\n".join(lines[fm_end + 1:]) if fm_end else text
    for required, label in [
        ('<div className="intro">', 'opening lede wrapped in <div className="intro">'),
        ('<div className="outro">', 'closing next-steps wrapped in <div className="outro">'),
        ("<Blockquote", "at least one <Blockquote>"),
    ]:
        if required not in body:
            flag(fm_end + 1, f"missing {label}")
    if "<CTA_FullWidth" not in body and "<KanvasCTA" not in body:
        flag(fm_end + 1, "missing a call to action (<CTA_FullWidth> or <KanvasCTA>)")

    in_fence = False
    for i, line in enumerate(lines, 1):
        if FENCE_RE.match(line):
            in_fence = not in_fence
            continue

        if AI_ATTRIBUTION_RE.search(line):
            flag(i, "claims AI authorship; the post must read as the author's own work")
        if UNPINNED_RE.search(line):
            flag(i, "unpinned version (releases/latest or :latest); pin an explicit release")

        if in_fence:
            continue

        if DASH_RE.search(line):
            flag(i, "contains an en/em dash (U+2013/U+2014); Layer5 style is a plain hyphen")
        if re.search(r"<[A-Za-z][^>]*\sclass=", line):
            flag(i, "JSX uses class=; React requires className=")

        # Frontmatter carries deliberately lowercase tags and paths.
        if fm_end and i <= fm_end + 1:
            continue
        prose = mask_prose(line)
        for wrong, right in BRAND_RE:
            if wrong.search(prose):
                flag(i, f"brand capitalization: use '{right}'")

    return sorted(findings)


def main():
    if len(sys.argv) < 2:
        sys.exit("usage: check_post.py <path/to/index.mdx> [more.mdx ...]")

    total = 0
    for target in sys.argv[1:]:
        findings = check(target)
        total += len(findings)
        if findings:
            print(f"\n{target}")
            for line, message in findings:
                where = f"{target}:{line}" if line else target
                print(f"  {where}: {message}")
        else:
            print(f"{target}: clean")

    if total:
        print(f"\n{total} finding(s). Fix these before committing.")
    sys.exit(1 if total else 0)


if __name__ == "__main__":
    main()
