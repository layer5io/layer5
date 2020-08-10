import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import BlogList from "../sections/Blog-list";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/blog/themeStyles";
import {graphql} from "gatsby";

export const query = graphql`
    query PostsByTags($tag: String!) {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            nodes {
                id
                frontmatter {
                    title
                    date(formatString: "Do MMMM YYYY")
                    author
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
                fields {
                    slug
                }
            }
        }
    }
`;

const BlogListPage = ({data}) => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Blog | Layer5 - The Service Mesh Company" />
            <Navigation />
            <BlogList posts={data.allMdx.nodes} />
            <Footer />
        </Layout>
    </ThemeProvider>
);
export default BlogListPage;
