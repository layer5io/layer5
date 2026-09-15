import React, { useEffect, useRef, useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import styled from "styled-components";
import { copyToClipboard } from "./copy-to-clipboard";

// Code is always rendered on the Night Owl palette, independent of the site
// theme, so the panel and the Copy button take their colors from it.
const codeTheme = themes.nightOwl;
const commentColor = codeTheme.styles.find(({ types }) =>
  types.includes("comment"),
).style.color;

// Inset of the Copy button from the top-right corner. It also centers the
// button on the first line of code, so single-line blocks look balanced.
const COPY_BUTTON_INSET = "0.625rem";
const COPY_BUTTON_RADIUS = "4px";
// Width kept clear of the code where the button cannot hide itself on hover.
const COPY_BUTTON_RESERVE = "4.5rem";

const COPY_LABEL = "Copy";
const COPIED_LABEL = "Copied!";
const COPY_FAILED_LABEL = "Copy failed";
const COPY_FEEDBACK_MS = 1500;

// Owns the block's vertical rhythm and the positioning context for the Copy
// button. A <div> rather than a <pre>: <pre> may only contain phrasing content.
export const CodeBlockWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 1em 0;
  border-radius: 6px;
  overflow: hidden;
  background-color: ${codeTheme.plain.backgroundColor};

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 0;
  padding: 0.75rem 1rem;
  overflow-x: auto;

  /* Without hover the Copy button is always visible, so keep the code clear
     of it: margin, not padding, because a scroll container's end padding is
     not part of its scrollable area (Chrome), so padding would still leave
     the last characters under the button at full scroll. Pointer devices
     reveal the button on hover instead and keep the full width. */
  @media (hover: none) {
    margin-right: ${COPY_BUTTON_RESERVE};
  }

  /* Doubled class so page-level "* { font-family }" rules (e.g. the
     handbook's) cannot turn the tokens into a proportional font. */
  &&,
  && * {
    font-family: "Courier New", Courier, monospace;
  }

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

export const CopyButton = styled.button`
  position: absolute;
  top: ${COPY_BUTTON_INSET};
  right: ${COPY_BUTTON_INSET};
  z-index: 1;
  padding: 0.125rem 0.5rem;
  border: 1px solid ${commentColor};
  border-radius: ${COPY_BUTTON_RADIUS};
  /* Opaque, backed out to the block's right edge (the wrapper clips the
     overflow) and faded on its left edge, so a long line running under the
     button never shows through, beside, or against the label. */
  background-color: ${codeTheme.plain.backgroundColor};
  box-shadow:
    calc(${COPY_BUTTON_INSET} + ${COPY_BUTTON_RADIUS}) 0 0 0
      ${codeTheme.plain.backgroundColor},
    -0.75rem 0 0.5rem -0.25rem ${codeTheme.plain.backgroundColor};
  color: ${codeTheme.plain.color};
  font-family: inherit;
  font-size: 0.75rem;
  line-height: 1.25rem;
  cursor: pointer;
  transition: opacity 0.15s ease, color 0.2s ease, border-color 0.2s ease;

  /* Revealed on hover or keyboard focus, so it never covers code at rest.
     Devices without hover always show it (see Pre's reserved padding). */
  @media (hover: hover) {
    opacity: 0;

    ${CodeBlockWrapper}:hover &,
    &:focus-visible {
      opacity: 1;
    }
  }

  &:hover,
  &:focus-visible {
    color: ${(props) => props.theme.keppelColor};
    border-color: ${(props) => props.theme.keppelColor};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.keppelColor};
    outline-offset: 2px;
  }
`;

const HighlightedCode = ({ code, language }) => {
  const [copyText, setCopyText] = useState(COPY_LABEL);
  const resetTimer = useRef(null);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const showFeedback = (label) => {
    setCopyText(label);
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(
      () => setCopyText(COPY_LABEL),
      COPY_FEEDBACK_MS,
    );
  };

  const handleCopy = () => {
    copyToClipboard(code)
      .then(() => showFeedback(COPIED_LABEL))
      .catch((error) => {
        console.error("CodeBlock: failed to copy code to clipboard", error);
        showFeedback(COPY_FAILED_LABEL);
      });
  };

  return (
    <Highlight code={code} language={language} theme={codeTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        // A lone "1" numbers nothing and costs width a one-line shell command
        // can use, so number only blocks that have lines to tell apart.
        const showLineNumbers = tokens.length > 1;

        return (
          <CodeBlockWrapper>
            <CopyButton type="button" onClick={handleCopy} aria-live="polite">
              {copyText}
            </CopyButton>
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {showLineNumbers && <LineNo>{i + 1}</LineNo>}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </Pre>
          </CodeBlockWrapper>
        );
      }}
    </Highlight>
  );
};

const Code = ({
  codeString,
  code,
  language = "jsx",
  collapsible = false,
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // Trailing blank lines would render as empty numbered lines, and would make
  // a one-line snippet look multi-line. Only line breaks and the whitespace of
  // blank lines are dropped: indentation and trailing spaces on the last line
  // of content are part of the code and are copied verbatim.
  const finalCode = (codeString || code || "").replace(
    /(?:\r?\n[^\S\r\n]*)+$/,
    "",
  );

  if (!collapsible) {
    return <HighlightedCode code={finalCode} language={language} />;
  }

  return (
    <div className="show-code">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <input
          type="checkbox"
          id={`toggle-${name}`}
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
          style={{ marginRight: "0.5rem" }}
        />
        <label
          htmlFor={`toggle-${name}`}
          style={{ cursor: "pointer", userSelect: "none" }}
        >
          Show Code
        </label>
      </div>
      {isOpen && <HighlightedCode code={finalCode} language={language} />}
    </div>
  );
};

export default Code;
