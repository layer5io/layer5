import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { ContextWrapper } from "./context-wrapper";
import { Link } from "gatsby";
import loadable from "@loadable/component";


const Button = loadable(() => import("./src/reusecore/Button"));
const Blockquote = loadable(() => import("./src/reusecore/Blockquote"));
const BlockquoteAlt = loadable(() => import("./src/reusecore/Blockquote/Blockquote-alt-style"));
const Code = loadable(() => import("./src/components/CodeBlock"));
const Col = loadable(() => import("./src/reusecore/Layout/Col"));
const CommonForm = loadable(() => import("./src/components/CommonForm"));
const CTA_Bottom = loadable(() => import("./src/components/Call-To-Actions/CTA_Bottom"));
const CTA_FullWidth = loadable(() => import("./src/components/Call-To-Actions/CTA_FullWidth"));
const CTA_ImageOnly = loadable(() => import("./src/components/Call-To-Actions/CTA_ImageOnly"));
const DockerExtensionCTA = loadable(() => import("./src/sections/Docker-Meshery/docker-extension-CTA"));
const FAQ = loadable(() => import("./src/sections/General/Faq"));
const InlineQuotes = loadable(() => import("./src/components/Inline-quotes"));
const Table = loadable(() => import("./src/components/service-mesh-patterns-Table/Table.js"));

const BlogWrapper = loadable(() => import("./src/collections/blog/Blog.style.js"));
const BookWrapper = loadable( () => import("./src/collections/service-mesh-books/Book.style.js"));
const CareerWrapper = loadable( () => import("./src/collections/careers/Career.style.js"));
const ChapterStyle = loadable( () => import("./src/components/Learn-Components/Chapters-Style/chapters.style.js"));
const EventWrapper = loadable( () => import("./src/collections/events/Event.style.js"));
const MeetTheMaintainer = loadable( () => import("./src/collections/blog/MeetTheMaintainer.style"));
const MeetTheMeshMate = loadable( () => import("./src/collections/blog/MeetTheMeshMate.style"));
const NewsWrapper = loadable( () => import("./src/collections/news/News.style.js"));
const PositionApply = loadable(() => import("./src/collections/careers/how-to-apply.js"));
const ProgramsWrapper = loadable( () => import("./src/collections/programs/Programs.style.js"));
const ProjectWrapper = loadable( () => import("./src/collections/projects/Project.style.js"));
const ResourcesWrapper = loadable( () => import("./src/collections/resources/Resources.style.js"));

const components = {
  pre: ({ children: { props, type } }) => {
    if (type === "code") {
      return (
        <Code
          codeString={props.children.trim()}
          language={
            props.className && props.className.replace("language-", "").trim()
          }
          {...props}
        />
      );
    }
  },
  Button,
  Blockquote,
  BlockquoteAlt,
  Col,
  CommonForm,
  CTA_Bottom,
  CTA_FullWidth,
  CTA_ImageOnly,
  DockerExtensionCTA,
  FAQ,
  InlineQuotes,
  Link,
  Table,
  BlogWrapper,
  BookWrapper,
  CareerWrapper,
  ChapterStyle,
  EventWrapper,
  MeetTheMaintainer,
  MeetTheMeshMate,
  NewsWrapper,
  PositionApply,
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