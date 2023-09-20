/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// added GlobalStyle in Layout as recommended: https://www.gatsbyjs.com/docs/how-to/styling/global-css/

import React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import Navigation from "../sections/General/Navigation";
import { MDXProvider } from "@mdx-js/react";
import { GlobalStyle } from "../sections/app.style";
import { Link } from "gatsby";

const Footer = loadable(() => import("../sections/General/Footer"));
const ScrollToTopBtn = loadable(() => import("./Scrolltotop-button"));

const Button = loadable(() => import("../reusecore/Button"));
const Blockquote = loadable(() => import("../reusecore/Blockquote"));
const BlockquoteAlt = loadable(() => import("../reusecore/Blockquote/Blockquote-alt-style"));
const Code = loadable(() => import("./CodeBlock"));
const Col = loadable(() => import("../reusecore/Layout/Col"));
const CommonForm = loadable(() => import("./CommonForm"));
const CTA_Bottom = loadable(() => import("./Call-To-Actions/CTA_Bottom"));
const CTA_FullWidth = loadable(() => import("./Call-To-Actions/CTA_FullWidth"));
const CTA_ImageOnly = loadable(() => import("./Call-To-Actions/CTA_ImageOnly"));
const DockerExtensionCTA = loadable(() => import("../sections/Docker-Meshery/docker-extension-CTA"));
const PlaygroundCTA = loadable(() => import("../sections/Playground/playground-CTA"));
const FAQ = loadable(() => import("../sections/General/Faq"));
const Table = loadable(() => import("./service-mesh-patterns-Table/Table.js"));

const BlogWrapper = loadable(() => import("../collections/blog/Blog.style.js"));
const BookWrapper = loadable( () => import("../collections/service-mesh-books/Book.style.js"));
const CareerWrapper = loadable( () => import("../collections/careers/Career.style.js"));
const ChapterStyle = loadable( () => import("./Learn-Components/Chapters-Style/chapters.style.js"));
const EventWrapper = loadable( () => import("../collections/events/Event.style.js"));
const MeetTheMaintainer = loadable( () => import("../collections/blog/MeetTheMaintainer.style"));
const MeetTheMeshMate = loadable( () => import("../collections/blog/MeetTheMeshMate.style"));
const NewsWrapper = loadable( () => import("../collections/news/News.style.js"));
const PositionApply = loadable(() => import("../collections/careers/how-to-apply.js"));
const ProgramsWrapper = loadable( () => import("../collections/programs/Programs.style.js"));
const ProjectWrapper = loadable( () => import("../collections/projects/Project.style.js"));
const ResourcesWrapper = loadable( () => import("../collections/resources/Resources.style.js"));

const Layout = ({ children }) => {

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
    PlaygroundCTA,
    FAQ,
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

  return (
    <>
      <GlobalStyle />
      <Navigation/>
      <MDXProvider components={components}>
        {children}
      </MDXProvider>
      <ScrollToTopBtn />
      <Footer location={children.props.location} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;