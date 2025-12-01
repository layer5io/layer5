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

const OptimizedImage = props => {
  const imgSrc = typeof props.src === "object" ? props.src?.publicURL || props.src : props.src;

  return (
    <div style={{ width: "100%", height: "auto" }}>
      <img
        {...props}
        src={imgSrc}
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

const PreComponent = (props) => {
  const { children } = props;

  if (children && children.props) {
    const { className, children: codeString } = children.props;
    const language = className ? className.replace("language-", "") : "";

    return (
      <Code
        codeString={typeof codeString === "string" ? codeString.trim() : ""}
        language={language}
        {...children.props}
      />
    );
  }

  return <pre {...props} />;
};

const components = {
  pre: PreComponent,
  img: OptimizedImage,
  Link,
  Blockquote,
  BlockQuote: Blockquote,
  Button,
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
