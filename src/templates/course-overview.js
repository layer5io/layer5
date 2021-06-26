import React from "react";
import { graphql } from "gatsby";

import CourseOverview from "../sections/Learn-Layer5/Course-Overview";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";
import { ThemeProvider } from "styled-components";

export const query = graphql`
  query eachCourse($course: String!) {
    courseByTitle: allMdx(
      filter: {
        fields: { course: { eq: $course } }
        frontmatter: { docType: { eq: "Course" } }
      }
    ) {
      nodes {
        frontmatter {
          courseTitle
          description
					themeColor
          videos
          lectures

          cardImage {
            childImageSharp {
              gatsbyImageData(width: 200, layout: CONSTRAINED)
            }
            extension
            publicURL
          }
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
          course
          learnpath
        }
      }
    }
    courseChapters: allMdx(
      filter: {
        fields: { course: { eq: $course } }
        frontmatter: { docType: { eq: "Chapter" } }
      }
    ) {
      nodes {
        id
        frontmatter {
          chapterTitle
          description
          videos
          lectures
        }
        fields {
          slug
          course
          learnpath
          chapter
        }
      }
    }
  }
`;
const CourseOverviewTemplate = ({ data, pageContext }) => {
  console.log(data, pageContext);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO
          title={`Learn ${data.courseByTitle.nodes[0].frontmatter.courseTitle}`}
          description="Learn Service Meshes: Istio, Linkerd, Envoy, Consul, Maesh, Kuma, App Mesh, Citrix, Tanzu Service Mesh"
        />
        <Navigation />
        <CourseOverview
          course={data.courseByTitle.nodes[0]}
          chapters={data.courseChapters.nodes}
        />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default CourseOverviewTemplate;
