import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Code from "./src/components/CodeBlock";
import { Slice } from "gatsby";
import { ContextWrapper } from "./context-wrapper";

// Custom image component for better CLS scores
const OptimizedImage = props => {
  return (
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
  CTA_ImageOnly: (props) => <Slice alias="cta-imageonly" sliceContext={props} />, // slice to avoid page rebuilds on CTA tweaks
  CTA_FullWidth: (props) => <Slice alias="cta-fullwidth" sliceContext={props} />, // slice to avoid page rebuilds on CTA tweaks
  CTA_Bottom: (props) => <Slice alias="cta-bottom" sliceContext={props} />
};

export const wrapRootElement = ({ element }) => (
  <ContextWrapper>
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  </ContextWrapper>
);