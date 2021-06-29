import React from "react";
import { graphql } from "gatsby";

import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/General/Navigation";
import Chapters from "../sections/Learn-Layer5/Chapters";
import Footer from "../sections/General/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

export const query = graphql`
  query chapters($slug: String!, $course: String!) {
    chapter: mdx(fields: {slug: {eq: $slug}}) {
        body
        frontmatter {
          chapterTitle
          description
        }
        fields {
          slug
          course
          learnpath
          chapter
        }
    }
    course: allMdx(
      filter: {fields: {course: {eq: $course}}, frontmatter:{ docType:{eq:"Course"}}}
    ) {
        nodes {
          frontmatter {
            courseTitle
            toc
          }
          fields {
            slug
          }
        }
    }
}
`;

const SingleChapter = ({data, location}) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title={data.chapter.frontmatter.chapterTitle} />
        <Navigation />
        <Chapters chapterData={data.chapter} courseData={data.course.nodes[0]} location={location} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default SingleChapter;

