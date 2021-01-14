import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import ProjectPage from "../../sections/Project-grid";
import Footer from "../../sections/Footer";

export const query = graphql`
  query allProjects {
    allMdx(
      filter: {
        fields: { collection: { eq: "projects" } }
        frontmatter: { published: { eq: true } }
      }
    ) {
      nodes {
        id
        frontmatter {
          title
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            extension
            publicURL
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;

const ProjectGridPage = ({ data }) => (
    <Layout>
        <SEO title="Projects" />
        <Navigation />
        <ProjectPage data={data} />
        <Footer />
    </Layout>
);
export default ProjectGridPage;
