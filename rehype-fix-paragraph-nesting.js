/* eslint-env node */

/**
 * rehype plugin: keep block-level content out of <p> elements.
 *
 * MDX parses the body of a multi-line JSX element as Markdown, so authoring
 *
 *   <p>
 *     Some text.
 *   </p>
 *
 * compiles to `<p><p>Some text.</p></p>`. The same happens whenever a heading,
 * list, table, <div> or code block is written inside a hand-written <p>.
 *
 * That markup is invalid HTML. When the browser parses the server-rendered
 * page it silently closes the outer <p> before the block-level child, so the
 * parsed DOM no longer matches the tree React renders on the client. React then
 * fails hydration ("Minified React error #418") and, having no Suspense
 * boundary to recover into, discards the server markup and re-renders the whole
 * root on the client ("Minified React error #423").
 *
 * This plugin rewrites the tree so the emitted HTML is valid: nested paragraphs
 * are collapsed into their parent, and any other block-level child is hoisted
 * out of the paragraph the way the HTML parser would place it. The parsed DOM
 * then matches React's tree and hydration succeeds.
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

const tagNameOf = (node) => {
  if (!node || typeof node !== "object") return null;
  if (node.type === "element") return node.tagName;
  if (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") {
    return node.name;
  }
  return null;
};

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
const liftSoleParagraphFromComponent = (node) => {
  const name = tagNameOf(node);
  if (!name || !PARAGRAPH_COMPONENTS.has(name)) return;
  if (!Array.isArray(node.children)) return;

  const content = node.children.filter((child) => !isBlankText(child));
  if (
    content.length !== 1 ||
    !isParagraph(content[0]) ||
    hasAttributes(content[0])
  )
    return;

  node.children = content[0].children;
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

// Turn one paragraph into the sequence of siblings a browser would produce:
// inline runs stay in a paragraph, block-level children become siblings.
const splitParagraph = (paragraph) => {
  const siblings = [];
  let inlineRun = [];
  let isFirstSegment = true;

  const flushInlineRun = () => {
    if (inlineRun.some((child) => !isBlankText(child))) {
      if (isFirstSegment) {
        paragraph.children = inlineRun;
        siblings.push(paragraph);
      } else {
        const segment = { ...paragraph, children: inlineRun };
        delete segment.position;
        siblings.push(segment);
      }
      isFirstSegment = false;
    }
    inlineRun = [];
  };

  for (const child of paragraph.children) {
    if (isBlockLevel(child)) {
      flushInlineRun();
      siblings.push(child);
    } else {
      inlineRun.push(child);
    }
  }
  flushInlineRun();

  return siblings;
};

// Depth-first, so a paragraph that only becomes invalid after its own children
// are normalised is still handled by its parent on the way back up.
const fixParagraphNesting = (node) => {
  if (!node || !Array.isArray(node.children)) return;

  node.children.forEach(fixParagraphNesting);
  liftSoleParagraphFromComponent(node);

  const children = [];
  for (const child of node.children) {
    if (!isParagraph(child) || !Array.isArray(child.children)) {
      children.push(child);
      continue;
    }

    const paragraph = collapseSoleNestedParagraph(child);
    unwrapInlineParagraphs(paragraph);

    if (paragraph.children.some(isBlockLevel))
      children.push(...splitParagraph(paragraph));
    else children.push(paragraph);
  }
  node.children = children;
};

const rehypeFixParagraphNesting = () => (tree) => {
  fixParagraphNesting(tree);
  return tree;
};

module.exports = rehypeFixParagraphNesting;
module.exports.BLOCK_LEVEL_TAGS = BLOCK_LEVEL_TAGS;
module.exports.PARAGRAPH_COMPONENTS = PARAGRAPH_COMPONENTS;
