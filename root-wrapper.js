import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Code from "./src/components/CodeBlock";
import CTA_ImageOnly from "./src/components/Call-To-Actions/CTA_ImageOnly";
import CTA_FullWidth from "./src/components/Call-To-Actions/CTA_FullWidth";
import CTA_Bottom from "./src/components/Call-To-Actions/CTA_Bottom";
import { ContextWrapper } from "./context-wrapper";

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

// Inline code component with copy-on-hover button
const InlineCode = ({ children }) => {
  const [copied, setCopied] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
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
      <code>{children}</code>
      <button
        onClick={handleCopy}
        title="Copy to clipboard"
        style={{
          marginLeft: "4px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "2px 4px",
          fontSize: "12px",
          color: "inherit",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s ease",
          borderRadius: "3px",
        }}
        aria-label="Copy to clipboard"
      >
        {copied ? "✅" : "📋"}
      </button>
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
