import { Link } from "gatsby";
import Button from "./src/reusecore/Button";
import Blockquote from "./src/reusecore/Blockquote";
import BlockquoteAlt from "./src/reusecore/Blockquote/Blockquote-alt-style";
import Code from "./src/components/CodeBlock";
import Col from "./src/reusecore/Layout/Col";
import CommonForm from "./src/components/CommonForm";
import CTA_Bottom from "./src/components/Call-To-Actions/CTA_Bottom";
import CTA_FullWidth from "./src/components/Call-To-Actions/CTA_FullWidth";
import CTA_ImageOnly from "./src/components/Call-To-Actions/CTA_ImageOnly";
import DockerExtensionCTA from "./src/sections/Docker-Meshery/docker-extension-CTA";
import FAQ from "./src/sections/General/Faq";
import Table from "./src/components/service-mesh-patterns-Table/Table.js";

import blogCategoryListTemplate from "./src/templates/blog-category-list.js";
import blogPostTemplate from "./src/templates/blog-single.js";
import blogTagListTemplate from "./src/templates/blog-tag-list.js";
import BookPostTemplate from "./src/templates/book-single.js";
import CareerPostTemplate from "./src/templates/career-single.js";
import chapterTemplate from "./src/templates/learn-chapter.js";
import courseListTemplate from "./src/templates/courses-list.js";
import courseOverviewTemplate from "./src/templates/course-overview.js";
import EventTemplate from "./src/templates/event-single.js";
import EventsTemplate from "./src/templates/events.js";
import integrationTemplate from "./src/templates/integrations.js";
import LabTemplate from "./src/templates/lab-single.js";
import MemberTemplate from "./src/templates/member-single.js";
import MemberBioTemplate from "./src/templates/executive-bio.js";
import MultiProgramPostTemplate from "./src/templates/program-multiple.js";
import NewsPostTemplate from "./src/templates/news-single.js";
import ProgramPostTemplate from "./src/templates/program-single.js";
import resourcePostTemplate from "./src/templates/resource-single.js";
import sectionTemplate from "./src/sections/Learn-Layer5/Section/index.js";
import WorkshopTemplate from "./src/templates/workshop-single.js";

import BlogWrapper from "./src/collections/blog/Blog.style.js";
import BookWrapper from "./src/collections/service-mesh-books/Book.style.js";
import CareerWrapper from "./src/collections/careers/Career.style.js";
import ChapterStyle from "./src/components/Learn-Components/Chapters-Style/chapters.style.js";
import EventWrapper from "./src/collections/events/Event.style.js";
import MeetTheMaintainer from "./src/collections/blog/MeetTheMaintainer.style";
import MeetTheMeshMate from "./src/collections/blog/MeetTheMeshMate.style";
import NewsWrapper from "./src/collections/news/News.style.js";
import PositionApply from "./src/collections/careers/how-to-apply.js";
import ProgramsWrapper from "./src/collections/programs/Programs.style.js";
import ProjectWrapper from "./src/collections/projects/Project.style.js";
import ResourcesWrapper from "./src/collections/resources/Resources.style.js";

//workaround to resolve build heap OOM error due to mdxv2 upgrade (ref: https://github.com/gatsbyjs/gatsby/issues/36899#issuecomment-1422616312), revisit with upgrade to gatsby v5 and gatsby-plugin-mdx if still applicable
// eslint-disable-next-line no-unused-vars
const MDXComponents = [
  Button,
  Blockquote,
  BlockquoteAlt,
  Code,
  Col,
  CommonForm,
  CTA_Bottom,
  CTA_FullWidth,
  CTA_ImageOnly,
  DockerExtensionCTA,
  FAQ,
  Link,
  Table,
  blogCategoryListTemplate,
  blogPostTemplate,
  blogTagListTemplate,
  BookPostTemplate,
  CareerPostTemplate,
  chapterTemplate,
  courseListTemplate,
  courseOverviewTemplate,
  EventTemplate,
  EventsTemplate,
  integrationTemplate,
  LabTemplate,
  MemberTemplate,
  MemberBioTemplate,
  MultiProgramPostTemplate,
  NewsPostTemplate,
  ProgramPostTemplate,
  resourcePostTemplate,
  sectionTemplate,
  WorkshopTemplate,
  BlogWrapper,
  BookWrapper,
  ChapterStyle,
  CareerWrapper,
  EventWrapper,
  MeetTheMaintainer,
  MeetTheMeshMate,
  NewsWrapper,
  PositionApply,
  ProgramsWrapper,
  ProjectWrapper,
  ResourcesWrapper,
];

export { onRenderBody } from "./onRenderBody";
export { wrapRootElement } from "./root-wrapper";
export { wrapPageElement } from "./page-wrapper";
