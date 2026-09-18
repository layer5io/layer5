/* eslint-env node */

/**
 * rehype plugin: emit markup the HTML parser will not rearrange.
 *
 * React hydration compares the tree it renders against the DOM the browser
 * parsed from the server-rendered HTML. Where those disagree, hydration fails
 * ("Minified React error #418") and, with no Suspense boundary to recover into,
 * React discards the server markup and re-renders the whole root on the client
 * ("Minified React error #423"). Markup the parser silently restructures is
 * therefore a hydration bug, even when it renders the way the author intended.
 *
 * Two shapes show up in MDX content:
 *
 * 1. Block-level content inside a <p>. MDX parses the body of a multi-line JSX
 *    element as Markdown, so authoring
 *
 *      <p>
 *        Some text.
 *      </p>
 *
 *    compiles to `<p><p>Some text.</p></p>`, and the parser closes the outer <p>
 *    before the nested one. The same happens for a heading, list, table, <div>
 *    or code block written inside a hand-written <p>.
 *
 * 2. Table rows and cells written without their section. `<table><tr>` and
 *    `<thead><th>` are how people write tables by hand, but the parser inserts
 *    the implied <tbody> and <tr>, so every row lands one level deeper than
 *    React put it.
 *
 * This plugin applies the parser's own rules at build time - hoisting block
 * children out of paragraphs, and inserting the table sections and rows the
 * parser would - so the emitted HTML survives a round trip through it.
 */

// Elements whose start tag implicitly closes an open <p> (HTML Standard,
// "a p element's end tag can be omitted" plus the in-body insertion rules).
const BLOCK_LEVEL_TAGS = new Set([
  "address",
  "article",
  "aside",
  "blockquote",
  "center",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "hr",
  "li",
  "main",
  "menu",
  "nav",
  "ol",
  "p",
  "pre",
  "section",
  "summary",
  "table",
  "ul",
]);

// Components that render a single text element (<p> by default). MDX turns
// their multi-line body into a Markdown paragraph, which lands inside whatever
// element the component renders — invalid there for every variant it supports.
const PARAGRAPH_COMPONENTS = new Set(["Typography"]);

// Table structure the parser fills in when rows or cells are written bare.
const TABLE_SECTION_TAGS = new Set(["thead", "tbody", "tfoot"]);
const TABLE_CELL_TAGS = new Set(["td", "th"]);
// Stray text in any of these is "foster parented" out of the table entirely.
const TABLE_INTERNAL_TAGS = new Set(["table", "thead", "tbody", "tfoot", "tr"]);

const tagNameOf = (node) => {
  if (!node || typeof node !== "object") return null;
  if (node.type === "element") return node.tagName;
  if (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") {
    return node.name;
  }
  return null;
};

const lowerTagNameOf = (node) => (tagNameOf(node) || "").toLowerCase();

const isBlockLevel = (node) => {
  const tagName = tagNameOf(node);
  return (
    typeof tagName === "string" && BLOCK_LEVEL_TAGS.has(tagName.toLowerCase())
  );
};

const isParagraph = (node) => tagNameOf(node) === "p";

const isBlankText = (node) =>
  node &&
  node.type === "text" &&
  typeof node.value === "string" &&
  node.value.trim() === "";

// Whether a paragraph node carries markup worth keeping (a className, an id, …)
// when a redundant wrapper has to be dropped.
const hasAttributes = (node) => {
  if (node.type === "element") {
    return !!node.properties && Object.keys(node.properties).length > 0;
  }
  return Array.isArray(node.attributes) && node.attributes.length > 0;
};

// `<p><p class="lead">text</p></p>` keeps whichever of the two wrappers carries
// the attributes, so styling written by the author survives.
const collapseSoleNestedParagraph = (paragraph) => {
  let current = paragraph;
  for (;;) {
    const content = current.children.filter((child) => !isBlankText(child));
    if (content.length !== 1 || !isParagraph(content[0])) return current;

    const inner = content[0];
    if (hasAttributes(current) || !hasAttributes(inner)) {
      current.children = inner.children;
    } else {
      current = inner;
    }
  }
};

// `<Typography>` and friends render one text element, so a lone Markdown
// paragraph in their body is always misplaced. Only a sole paragraph is lifted:
// a body deliberately written as several paragraphs is left as the author wrote
// it, since the component would have to be given a block-level `component` prop
// for that to be valid anyway.
const isParagraphComponent = (node) => {
  const name = tagNameOf(node);
  return !!name && PARAGRAPH_COMPONENTS.has(name);
};

// `<Typography>` and friends render one text element, so a Markdown paragraph
// in their body is always misplaced. Each paragraph becomes its own copy of the
// component, which keeps the author's paragraph breaks and their styling: a
// body written as two paragraphs renders as two, rather than running together.
// A paragraph carrying its own markup is kept instead of the component wrapper,
// since the more specific attributes are the ones worth preserving.
const liftParagraphsFromComponent = (component) => {
  const content = component.children.filter((child) => !isBlankText(child));
  if (!content.length || !content.every(isParagraph)) return [component];

  return content.map((paragraph) =>
    hasAttributes(paragraph)
      ? paragraph
      : withChildren(component, paragraph.children),
  );
};

// A paragraph reached through inline wrappers is invalid too
// (`<p><em><p>text</p></em></p>`), so drop it and keep its content in place.
// Block-level children are left alone: they get hoisted out of the paragraph
// afterwards, and paragraphs are legal once inside them.
const unwrapInlineParagraphs = (node) => {
  if (!Array.isArray(node.children)) return;

  const children = [];
  for (const child of node.children) {
    if (isBlockLevel(child) && !isParagraph(child)) {
      children.push(child);
      continue;
    }
    unwrapInlineParagraphs(child);
    if (isParagraph(child)) children.push(...child.children);
    else children.push(child);
  }
  node.children = children;
};

const withChildren = (node, children) => {
  const copy = { ...node, children };
  delete copy.position;
  return copy;
};

// A block reached through inline wrappers (`<p><em>a<div>B</div>c</em></p>`)
// closes the paragraph just as a direct child would, so it has to be found at
// any inline depth.
const containsBlockLevel = (node) =>
  Array.isArray(node.children) &&
  node.children.some(
    (child) => isBlockLevel(child) || containsBlockLevel(child),
  );

// Separate a run of children into the inline pieces and block-level pieces the
// parser would end up with, splitting inline wrappers around any block they
// contain: `<em>a<div>B</div>c</em>` becomes `<em>a</em>`, `<div>B</div>`,
// `<em>c</em>`, which is what the parser builds when it reconstructs the
// formatting element after the block.
const partitionAroundBlocks = (children) => {
  const pieces = [];
  let inlineRun = [];
  const flushInlineRun = () => {
    if (inlineRun.length) {
      pieces.push({ inline: inlineRun });
      inlineRun = [];
    }
  };

  for (const child of children) {
    if (isBlockLevel(child)) {
      flushInlineRun();
      pieces.push({ block: child });
    } else if (containsBlockLevel(child)) {
      for (const piece of partitionAroundBlocks(child.children)) {
        if (piece.block) {
          flushInlineRun();
          pieces.push(piece);
        } else {
          inlineRun.push(withChildren(child, piece.inline));
        }
      }
    } else {
      inlineRun.push(child);
    }
  }
  flushInlineRun();

  return pieces;
};

// Turn one paragraph into the sequence of siblings a browser would produce:
// inline runs stay in a paragraph, block-level content becomes a sibling.
const splitParagraph = (paragraph) => {
  const siblings = [];
  let isFirstSegment = true;

  for (const piece of partitionAroundBlocks(paragraph.children)) {
    if (piece.block) {
      siblings.push(piece.block);
      continue;
    }
    if (piece.inline.every(isBlankText)) continue;

    if (isFirstSegment) {
      paragraph.children = piece.inline;
      siblings.push(paragraph);
      isFirstSegment = false;
    } else {
      siblings.push(withChildren(paragraph, piece.inline));
    }
  }

  return siblings;
};

// Group each run of children the parser would gather under an implied element.
const wrapRunsOfChildren = (node, belongsInWrapper, wrapperTagName) => {
  if (!node.children.some(belongsInWrapper)) return;

  const children = [];
  let run = [];
  const flushRun = () => {
    if (run.length) {
      children.push({
        type: "element",
        tagName: wrapperTagName,
        properties: {},
        children: run,
      });
      run = [];
    }
  };

  for (const child of node.children) {
    if (belongsInWrapper(child)) run.push(child);
    else {
      flushRun();
      children.push(child);
    }
  }
  flushRun();
  node.children = children;
};

// Insert the <tbody> and <tr> the parser would, so the markup round-trips.
const fixTableStructure = (node) => {
  const tagName = lowerTagNameOf(node);
  if (!TABLE_INTERNAL_TAGS.has(tagName)) return;

  const isCell = (child) => TABLE_CELL_TAGS.has(lowerTagNameOf(child));
  const isRow = (child) => lowerTagNameOf(child) === "tr";

  if (TABLE_SECTION_TAGS.has(tagName)) {
    wrapRunsOfChildren(node, isCell, "tr");
  } else if (tagName === "table") {
    // A bare cell implies a row as well as a section, so wrap cells first.
    wrapRunsOfChildren(node, isCell, "tr");
    wrapRunsOfChildren(node, isRow, "tbody");
  }
};

// Text between a table's rows and cells belongs to no cell, so the parser
// "foster parents" it: the text is moved out to just before the table. Doing
// the same here keeps the emitted markup and the parsed DOM in step. Whitespace
// is simply dropped, since it renders as nothing once outside the table.
const fosterParentStrayText = (table) => {
  const strayText = [];

  const collect = (node) => {
    if (!TABLE_INTERNAL_TAGS.has(lowerTagNameOf(node))) return;
    node.children = node.children.filter((child) => {
      if (child.type !== "text") {
        collect(child);
        return true;
      }
      if (!isBlankText(child)) strayText.push(child);
      return false;
    });
  };
  collect(table);

  return strayText;
};

// Depth-first, so a paragraph that only becomes invalid after its own children
// are normalised is still handled by its parent on the way back up.
const fixParagraphNesting = (node) => {
  if (!node || !Array.isArray(node.children)) return;

  node.children.forEach(fixParagraphNesting);
  fixTableStructure(node);

  const children = [];
  for (const child of node.children) {
    if (!Array.isArray(child.children)) {
      children.push(child);
      continue;
    }

    if (lowerTagNameOf(child) === "table") {
      children.push(...fosterParentStrayText(child), child);
      continue;
    }

    if (isParagraphComponent(child)) {
      children.push(...liftParagraphsFromComponent(child));
      continue;
    }

    if (!isParagraph(child)) {
      children.push(child);
      continue;
    }

    const paragraph = collapseSoleNestedParagraph(child);
    unwrapInlineParagraphs(paragraph);

    if (containsBlockLevel(paragraph))
      children.push(...splitParagraph(paragraph));
    else children.push(paragraph);
  }
  node.children = children;
};

const rehypeFixDomNesting = () => (tree) => {
  fixParagraphNesting(tree);
  return tree;
};

module.exports = rehypeFixDomNesting;
module.exports.BLOCK_LEVEL_TAGS = BLOCK_LEVEL_TAGS;
module.exports.PARAGRAPH_COMPONENTS = PARAGRAPH_COMPONENTS;
