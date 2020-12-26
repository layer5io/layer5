import React from "react";
import { graphql } from "gatsby";

import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import ProjectSingle from "../sections/Project-single";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

export const query = graphql`
    query ProjectsBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                subtitle
                thumbnail{
                    childImageSharp{
                        fluid(maxWidth: 500){
                            ...GatsbyImageSharpFluid
                        }
                    }
                    extension
                    publicURL
                }
            }
        }
    }
`;

const ProjectSinglePage = ({data}) => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <GlobalStyle />
                <SEO title={`${data.mdx.frontmatter.title}`} />
                <Navigation />
                <ProjectSingle data={data}/>
                <Footer />
            </Layout>
        </ThemeProvider>
    );};

export default ProjectSinglePage;
