import React from "react";
import { ThemeProvider } from "styled-components";
import { graphql } from "gatsby";

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
            <SEO title="Projects" />
            <Navigation />
            <ProjectPage data={data} />
            <Footer/>
        </Layout>
    </ThemeProvider>
);
export default ProjectGridPage;
