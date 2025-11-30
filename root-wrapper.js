import React from "react";
import { MDXProvider, useMDXComponents } from "@mdx-js/react";
import { Link } from "gatsby";
import Code from "./src/components/CodeBlock";
import CTA_ImageOnly from "./src/components/Call-To-Actions/CTA_ImageOnly";
import CTA_FullWidth from "./src/components/Call-To-Actions/CTA_FullWidth";
import CTA_Bottom from "./src/components/Call-To-Actions/CTA_Bottom";
import Blockquote from "./src/reusecore/Blockquote";
import Button from "./src/reusecore/Button";
import { ContextWrapper } from "./context-wrapper";

// Optimized image wrapper
const OptimizedImage = props => (
  <div style={{ width: "100%", height: "auto" }}>
    <img
      {...props}
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

// MDX v5: use useMDXComponents()
function MDXComponentsWrapper({ children }) {
  const all = useMDXComponents({
    pre: ({ children: { props } }) => {
      if (props.mdxType === "code") {
        return (
          <Code
            codeString={props.children.trim()}
            language={
              props.className && props.className.replace("language-", "")
            }
            {...props}
          />
        );
      }
    },
    img: OptimizedImage,
    Link,
    Blockquote,
    BlockQuote: Blockquote,
    Button,
    CTA_ImageOnly,
    CTA_FullWidth,
    CTA_Bottom
  });

  return <MDXProvider components={all}>{children}</MDXProvider>;
}

export const wrapRootElement = ({ element }) => (
  <ContextWrapper>
    <MDXComponentsWrapper>{element}</MDXComponentsWrapper>
  </ContextWrapper>
);
