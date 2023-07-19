import React from "react";
import { graphql } from "gatsby";
import CourseOverview from "../sections/Learn-Layer5/Course-Overview";

import SEO from "../components/seo";


import SimpleReactLightbox from "simple-react-lightbox";

export const query = graphql`
  query eachCourse($course: String!) {
    courseByTitle: allMdx(
      filter: {
        fields: { course: { eq: $course } }
        frontmatter: { docType: { eq: "Course" } }
      }
    ) {
      nodes {
        body
        frontmatter {
          courseTitle
          description
					themeColor
          toc

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
const CourseOverviewTemplate = ({ data }) => {


  return (

    <>


      <SimpleReactLightbox>
        <CourseOverview
          course={data.courseByTitle.nodes[0]}
          chapters={data.courseChapters.nodes}
          serviceMeshesList={data.serviceMeshesList.nodes}
          canonical="https://layer5.io/learn/learning-paths"
        />
      </SimpleReactLightbox>

    </>

  );
};

export default CourseOverviewTemplate;

export const Head = ({ data }) => {
  return <SEO
    title={`${data.courseByTitle.nodes[0].frontmatter.courseTitle}`}
    description="Learn Service Meshes: Istio, Linkerd, Envoy, Consul, Traefik Mesh, Open Service Mesh, NGINX Service Mesh, Kuma, AWS App Mesh, Citrix, VMware Tanzu Service Mesh"
  />;
};