import React from "react";
import { ThemeProvider } from "styled-components";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import ProjectPage from "../../sections/Projects/Project-grid";
import Footer from "../../sections/General/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

export const query = graphql`query allProjects {
  allMdx(
    filter: {fields: {collection: {eq: "projects"}}, frontmatter: {published: {eq: true}}}
  ) {
    nodes {
      id
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
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
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Innovative Cloud Native Projects"
        description="Layer5, empowerer of engineers. Layer5 is the maker of Meshery, Service Mesh Performance, Service Mesh Interface, and Nighthawk. At Layer5, we believe collaboration enables innovation, and infrastructure enables collaboration."
        image="/images/layer5-projects.png" />
      <Navigation />
      <ProjectPage data={data} />
      <Footer />
    </Layout>
  </ThemeProvider>
);
export default ProjectGridPage;
