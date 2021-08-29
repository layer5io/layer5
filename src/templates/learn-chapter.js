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
            meshesYouLearn {
            imagepath {
              childImageSharp {
                gatsbyImageData(width: 50, layout: CONSTRAINED)
              }
              extension
              publicURL
            }
            name
          }
        }
          fields {
            slug
          }
        }
    }

    TOC: allMdx(
      filter: {fields: {course: {eq: $course}, pageType: {eq: "chapter"}}}
    ) {
        nodes {
          frontmatter{
            order
            chapterTitle
          }
          fields {
            section
            chapter
          }
        }
    }

  serviceMeshesList: allMdx(
    filter: {fields: {course: {eq: $course}, pageType: {eq: "chapter"}}}
  ){
      nodes {
        fields {
          section
        }
      }
    }
}
`;

const SingleChapter = ({data, location}) => {

  const sortedTOCData = data.TOC.nodes.sort((first, second) => {
    let firstOrder = first.frontmatter?.order ? first.frontmatter.order : 100;
    let secondOrder = second.frontmatter?.order ? second.frontmatter.order : 100;
    return firstOrder - secondOrder;
  }); 
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title={data.chapter.frontmatter.chapterTitle} />
        <Navigation />
        <Chapters chapterData={data.chapter} TOCData={sortedTOCData} courseData={data.course.nodes[0]} location={location} serviceMeshesList={data.serviceMeshesList.nodes}/>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default SingleChapter;

