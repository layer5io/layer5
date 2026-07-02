import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Code from "./src/components/CodeBlock";
import CTA_ImageOnly from "./src/components/Call-To-Actions/CTA_ImageOnly";
import CTA_FullWidth from "./src/components/Call-To-Actions/CTA_FullWidth";
import CTA_Bottom from "./src/components/Call-To-Actions/CTA_Bottom";
import { ContextWrapper } from "./context-wrapper";
import { IoIosCopy } from "@react-icons/all-files/io/IoIosCopy";
import { IoIosCheckmark } from "@react-icons/all-files/io/IoIosCheckmark";

// Custom image component for better CLS scores
const OptimizedImage = (props) => {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <img
        {...props}
        width={props.width || "100%"}
        height={props.height || "auto"}
        style={{
          objectFit: props.objectFit || "contain",
          margin: "20px 0px",
          ...props.style,
        }}
        loading="lazy"
        alt={props.alt || "Blog content image"}
      />
    </div>
  );
};

// Returns true only for commands like `npm install`, `npx skill install`
// Returns false for paths like `~/.claude/skills/`, flags like `-sfn`
const isCommand = (text) => {
  const str = String(text).trim();
  return !/^[~/.]/.test(str);
};

// Inline code component with copy-on-hover button
const InlineCode = ({ children }) => {
  const [copied, setCopied] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const codeRef = React.useRef(null);

  const showCopyButton = isCommand(children);

  const handleCopy = () => {
    const text = codeRef.current?.textContent || children;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <code ref={codeRef}>{children}</code>
      {showCopyButton && (
        <span
          style={{
            display: "inline-block",
            width: hovered ? "22px" : "0px",
            marginLeft: hovered ? "4px" : "0px",
            overflow: "hidden",
            transition: "width 0.2s ease, margin 0.2s ease",
            verticalAlign: "middle",
          }}
        >
          <button
            onClick={handleCopy}
            title="Copy to clipboard"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "2px 2px",
              color: "inherit",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.2s ease",
              borderRadius: "3px",
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Copy to clipboard"
          >
            {copied ? <IoIosCheckmark size={16} /> : <IoIosCopy size={14} />}
          </button>
        </span>
      )}
    </span>
  );
};

const components = {
  pre: ({ children: { props } }) => {
    if (props.mdxType === "code") {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace("language-", "")}
          {...props}
        />
      );
    }
  },
  img: OptimizedImage,
  code: InlineCode,
  CTA_ImageOnly,
  CTA_FullWidth,
  CTA_Bottom,
};

export const wrapRootElement = ({ element }) => (
  <ContextWrapper>
    <MDXProvider components={components}>{element}</MDXProvider>
  </ContextWrapper>
);
