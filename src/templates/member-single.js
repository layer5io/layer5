import React from "react";
import { graphql } from "gatsby";

import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/Navigation";
import MemberSingle from "../sections/Member-single";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/blog/themeStyles";

export const query = graphql`
    query MemberBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            frontmatter {
                name
                position
                github
                twitter
                meshmate
                image_path{
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

const MemberSinglePage = ({data}) => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <GlobalStyle />
                <SEO title={`${data.mdx.frontmatter.name} | Layer5`} />
                <Navigation />
                <MemberSingle frontmatter={data.mdx.frontmatter}/>
                <Footer />
            </Layout>
        </ThemeProvider>
    );
};

export default MemberSinglePage;

