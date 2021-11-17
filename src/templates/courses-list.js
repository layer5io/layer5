import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";
import { ThemeProvider } from "styled-components";
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
const CoursesListTemplate = ({data, pageContext}) => {
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
  const learnpath = getTitle(pageContext.learnpath);
  const sortedCoursesList = data.allMdx.nodes.sort((first, second) => {
    let firstOrder = first.frontmatter?.order ? first.frontmatter.order : 100;
    let secondOrder = second.frontmatter?.order ? second.frontmatter.order : 100;
    return firstOrder - secondOrder;
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO
          title={`${learnpath}`}
          description="Learn Service Meshes: Istio, Linkerd, Envoy, Consul, Traefik Mesh, Open Service Mesh, NGINX Service Mesh, Kuma, AWS App Mesh, Citrix, VMware Tanzu Service Mesh"
        />
        <Navigation />
        <CoursesList coursesData={sortedCoursesList} learnPath={learnpath} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default CoursesListTemplate;
