import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { ContextWrapper } from "./context-wrapper";
import Code from "./src/components/CodeBlock";

import CTA_ImageOnly from "./src/components/Call-To-Actions/CTA_ImageOnly";
import CTA_FullWidth from "./src/components/Call-To-Actions/CTA_FullWidth";
import CTA_Bottom from "./src/components/Call-To-Actions/CTA_Bottom";
import FAQ from "./src/sections/General/Faq";
import { Link } from "gatsby";
import { BlogWrapper } from "./src/collections/blog/Blog.style.js";
import { CareerWrapper } from "./src/collections/careers/Career.style.js";
import { BookWrapper } from "./src/collections/service-mesh-books/Book.style.js";
import { NewsWrapper } from "./src/collections/news/News.style.js";
import { ProjectWrapper } from "./src/collections/projects/Project.style.js";
import { ResourcesWrapper } from "./src/collections/resources/Resources.style.js";
import { ProgramsWrapper } from "./src/collections/programs/Programs.style.js";
import { ChapterStyle } from "./src/components/Learn-Components/Chapters-Style/chapters.style.js";
import { Col } from "./src/reusecore/Layout";
import Button from "./src/reusecore/Button";
import Blockquote from "./src/reusecore/Blockquote";
import BlockquoteAlt from "./src/reusecore/Blockquote/Blockquote-alt-style";

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
  CTA_Bottom,
  Col,
  FAQ,
  Link,
  Button,
  Blockquote,
  BlockquoteAlt,
  BlogWrapper,
  BookWrapper,
  ChapterStyle,
  CareerWrapper,
  NewsWrapper,
  ProgramsWrapper,
  ProjectWrapper,
  ResourcesWrapper,
};

export const wrapRootElement = ({ element }) => (
  <ContextWrapper>
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  </ContextWrapper>
);