import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import ProjectPage from "../sections/Project-grid";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/blog/themeStyles";

export const query = graphql`
    query allProjects {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fields: { collection: { eq: "projects" } }, frontmatter: { published: { eq: true } } }
        ) {
            nodes {
                id
                frontmatter {
                    title
                    subtitle
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
            <SEO title="Blog | Layer5 - The Service Mesh Company" />
            <Navigation />
            <ProjectPage data={data} />
            <Footer/>
        </Layout>
    </ThemeProvider>
);
export default ProjectGridPage;
