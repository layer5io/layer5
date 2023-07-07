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

import blogPostTemplate from "./src/templates/blog-single.js";
import blogCategoryListTemplate from "./src/templates/blog-category-list.js";
import blogTagListTemplate from "./src/templates/blog-tag-list.js";
import EventsTemplate from "./src/templates/events.js";
import EventTemplate from "./src/templates/event-single.js";
import NewsPostTemplate from "./src/templates/news-single.js";
import BookPostTemplate from "./src/templates/book-single.js";
import ProgramPostTemplate from "./src/templates/program-single.js";
import MultiProgramPostTemplate from "./src/templates/program-multiple.js";
import CareerPostTemplate from "./src/templates/career-single.js";
import MemberTemplate from "./src/templates/member-single.js";
import MemberBioTemplate from "./src/templates/executive-bio.js";
import WorkshopTemplate from "./src/templates/workshop-single.js";
import LabTemplate from "./src/templates/lab-single.js";
import resourcePostTemplate from "./src/templates/resource-single.js";
import integrationTemplate from "./src/templates/integrations.js";
import sectionTemplate from "./src/sections/Learn-Layer5/Section/index.js";
import chapterTemplate from "./src/templates/learn-chapter.js";
import courseOverviewTemplate from "./src/templates/course-overview.js";
import courseListTemplate from "./src/templates/courses-list.js";
//
// import from "./src/sections/Careers/Careers-Programs-grid/index.js""
// );

//workaround to resolve build heap OOM error due to mdxv2 upgrade (ref: https://github.com/gatsbyjs/gatsby/issues/36899#issuecomment-1422616312), revisit with upgrade to gatsby v5 and gatsby-plugin-mdx if still applicable
// eslint-disable-next-line no-unused-vars
const MDXComponents = [
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
  CTA_ImageOnly,
  CTA_FullWidth,
  CTA_Bottom,
  blogPostTemplate,
  blogCategoryListTemplate,
  blogTagListTemplate,
  EventsTemplate,
  EventTemplate,
  NewsPostTemplate,
  BookPostTemplate,
  ProgramPostTemplate,
  MultiProgramPostTemplate,
  CareerPostTemplate,
  MemberTemplate,
  MemberBioTemplate,
  WorkshopTemplate,
  LabTemplate,
  resourcePostTemplate,
  integrationTemplate,
  sectionTemplate,
  chapterTemplate,
  courseOverviewTemplate,
  courseListTemplate
];

export { onRenderBody } from "./onRenderBody";
export { wrapRootElement } from "./root-wrapper";
export { wrapPageElement } from "./page-wrapper";
