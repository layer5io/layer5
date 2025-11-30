import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import Code from "./src/components/CodeBlock";
import CTA_ImageOnly from "./src/components/Call-To-Actions/CTA_ImageOnly";
import CTA_FullWidth from "./src/components/Call-To-Actions/CTA_FullWidth";
import CTA_Bottom from "./src/components/Call-To-Actions/CTA_Bottom";
import Blockquote from "./src/reusecore/Blockquote";
import Button from "./src/reusecore/Button";
import { ContextWrapper } from "./context-wrapper";

// Optimized image wrapper for MDX content
const OptimizedImage = (props) => {
  // Handle src that might be an object or component (from _svg fields)
  const src = props.src ? String(props.src) : "";

  return (
    <div style={{ width: "100%", height: "auto" }}>
      <img
        {...props}
        src={src}
        width={props.width || "100%"}
        height={props.height || "auto"}
        style={{
          objectFit: props.objectFit || "contain",
          margin: "20px 0px",
          ...props.style
        }}
        loading="lazy"
        alt={props.alt || "Blog content image"}
      />
    </div>
  );
};

// MDX v3 compatible code block handler
const PreComponent = (props) => {
  const { children } = props;

  // MDX v3: children is the code element directly
  if (children && children.props) {
    const { className, children: code } = children.props;
    const language = className ? className.replace("language-", "") : "";

    return (
      <Code
        codeString={typeof code === "string" ? code.trim() : ""}
        language={language}
        {...children.props}
      />
    );
  }

  return <pre {...props} />;
};

// MDX v3 components - simple object, no useMDXComponents hook
const components = {
  pre: PreComponent,
  img: OptimizedImage,
  // Provide common components globally for MDX files
  Link,
  a: (props) => {
    // Handle internal links with Gatsby Link
    if (props.href && props.href.startsWith("/")) {
      return <Link to={props.href} {...props} />;
    }
    return <a {...props} />;
  },
  Blockquote,
  BlockQuote: Blockquote,
  Button,
  CTA_ImageOnly,
  CTA_FullWidth,
  CTA_Bottom,
};

export const wrapRootElement = ({ element }) => (
  <ContextWrapper>
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  </ContextWrapper>
);
