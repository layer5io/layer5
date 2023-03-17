import React, { useState } from "react";
import { graphql } from "gatsby";



import Layout from "../components/layout";
import SEO from "../components/seo";


import Chapters from "../sections/Learn-Layer5/Chapters";
import Footer from "../sections/General/Footer";





import SimpleReactLightbox from "simple-react-lightbox";

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

const SingleChapter = ({ data, location }) => {

  const sortedTOCData = data.TOC.nodes.sort((first, second) => {
    let firstOrder = first.frontmatter?.order ? first.frontmatter.order : 100;
    let secondOrder = second.frontmatter?.order ? second.frontmatter.order : 100;
    return firstOrder - secondOrder;
  });
  const [theme, setTheme] = useState();

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (

    <Layout>


      <SimpleReactLightbox>
        <Chapters chapterData={data.chapter} TOCData={sortedTOCData} courseData={data.course.nodes[0]} location={location} serviceMeshesList={data.serviceMeshesList.nodes} />
      </SimpleReactLightbox>
      <Footer />
    </Layout>

  );
};

export default SingleChapter;

export const Head = ({ data }) => {
  return <SEO
    title={data.chapter.frontmatter.chapterTitle}
    canonical="https://layer5.io/learn/learning-paths"
  />;
};