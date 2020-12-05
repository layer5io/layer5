import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Code from "./src/components/CodeBlock";
import { PagerProvider } from "./src/context/PagerContext";

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
    }
};

export const wrapRootElement = ({ element }) => (
    <>
        <PagerProvider>{element}</PagerProvider>
        <MDXProvider components={components}>{element}</MDXProvider>
    </>
);
