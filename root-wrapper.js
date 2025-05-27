import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Code from "./src/components/CodeBlock";
import CTA_ImageOnly from "./src/components/Call-To-Actions/CTA_ImageOnly";
import CTA_FullWidth from "./src/components/Call-To-Actions/CTA_FullWidth";
import CTA_Bottom from "./src/components/Call-To-Actions/CTA_Bottom";
import { ContextWrapper } from "./context-wrapper";

// Custom image component for better CLS scores
const OptimizedImage = props => {
  return (
    <div style={{ width: "100%", height: "auto", aspectRatio: props.aspectRatio || "16/9", overflow: "hidden" }}>
      <img
        {...props}
        width={props.width || "100%"}
        height={props.height || "auto"}
        style={{
          objectFit: props.objectFit || "cover",
          aspectRatio: props.aspectRatio || "16/9",
          ...props.style
        }}
        loading="lazy"
        alt={props.alt || "Blog content image"}
      />
    </div>
  );
};

const components = {
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
  CTA_ImageOnly,
  CTA_FullWidth,
  CTA_Bottom
};

export const wrapRootElement = ({ element }) => (
  <ContextWrapper>
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  </ContextWrapper>
);