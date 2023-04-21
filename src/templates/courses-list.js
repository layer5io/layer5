import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";


import CoursesList from "../sections/Learn-Layer5/Courses-List";


export const query = graphql`
  query CoursesBySlug($learnpath: String!) {
    allMdx(
      filter: {
        fields: { learnpath: { eq: $learnpath } }
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
          order
          cardImage {
            childImageSharp {
              gatsbyImageData(width: 200, layout: CONSTRAINED)
            }
            extension
            publicURL
          }
        }
        fields {
          slug
          course
          learnpath
        }
      }
    }
  }
`;

const getTitle = (learnPathTitle) => {
  const learnPath = learnPathTitle.split("-");
  let str = learnPath.reduce((title, name, idx) => {
    if (idx == learnPath.length - 1)
      return title + name.charAt(0).toUpperCase() + name.slice(1);
    else
      return title + name.charAt(0).toUpperCase() + name.slice(1) + " ";
  }, "");
  return str;
};

const CoursesListTemplate = ({ data, pageContext }) => {

  const sortedCoursesList = data.allMdx.nodes.sort((first, second) => {
    let firstOrder = first.frontmatter?.order ? first.frontmatter.order : 100;
    let secondOrder = second.frontmatter?.order ? second.frontmatter.order : 100;
    return firstOrder - secondOrder;
  });

  const learnpath = getTitle(pageContext.learnpath);


  return (

    <>


      <CoursesList coursesData={sortedCoursesList} learnPath={learnpath} />

    </>

  );
};

export default CoursesListTemplate;

export const Head = ({  pageContext }) => {
  const learnpath = getTitle(pageContext.learnpath);
  return <SEO
    title={`${learnpath}`}
    description="Learn Service Meshes: Istio, Linkerd, Envoy, Consul, Traefik Mesh, Open Service Mesh, NGINX Service Mesh, Kuma, AWS App Mesh, Citrix, VMware Tanzu Service Mesh"
    canonical="https://layer5.io/learn/learning-paths"
  />;
};