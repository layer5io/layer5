import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Code from "./src/components/CodeBlock";
import { CTA_ImageOnly } from "./src/components/Call-To-Actions/CTA_ImageOnly";
import { CTA_FullWidth } from "./src/components/Call-To-Actions/CTA_FullWidth";
import { CTA_Bottom } from "./src/components/Call-To-Actions/CTA_Bottom";

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
  CTA_ImageOnly,
  CTA_FullWidth,
  CTA_Bottom
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
