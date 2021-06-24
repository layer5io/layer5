import React from "react";
// import Card from "../../../components/Card";
// import { Container, Row, Col } from "../../../reusecore/Layout";

import { graphql } from "gatsby";

import { CourseWrapper } from "./courseoverview.style";
import CourseOverview from "../../../components/Learn-Components/Course-Overview-page";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Navigation from "../../General/Navigation";
import Footer from "../../General/Footer";
import { GlobalStyle } from "../../app.style";
import theme from "../../../theme/app/themeStyles";
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
        id
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
const Courses = (courseData) => {
  console.log(courseData);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO
          title="Learn Service Mesh"
          description="Learn Service Meshes: Istio, Linkerd, Envoy, Consul, Maesh, Kuma, App Mesh, Citrix, Tanzu Service Mesh"
          image="/images/workshops.png"
        />
        <Navigation />
        <CourseWrapper>
          <CourseOverview
            course={courseData.data.courseByTitle.nodes[0]}
            chapters={courseData.data.courseChapters.nodes}
          />
        </CourseWrapper>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default Courses;
