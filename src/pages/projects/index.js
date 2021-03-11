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

export const query = graphql`
    query allProjects {
        allMdx(
            filter: { fields: { collection: { eq: "projects" } }, frontmatter: { published: { eq: true } } }
        ) {
            nodes {
                id
                frontmatter {
                    title
                    thumbnail{
                        childImageSharp{
                            fluid(maxWidth: 1000){
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

const ProjectGridPage = ({data}) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Innovative Service Mesh Projects"
        description="Layer5 - The Service Mesh Company. Layer5 is the maker of Meshery and Service Mesh Performance (SMP)
           and maintainers of Service Mesh Interface (SMI). We are the largest collection of service mesh projects and their maintainers in the world.
           Contact Layer5 for help with operating a service mesh."
        image="/images/layer5-projects.png" />
      <Navigation />
      <ProjectPage data={data} />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default ProjectGridPage;
