import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import BlogPage from "../sections/Blog-grid";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/blog/themeStyles";

import {graphql} from "gatsby";

export const query = graphql`
    query blogsGird {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
        ) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
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

const BlogGridPage = ({data}) => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Blog | Layer5 - The Service Mesh Company" />
            <Navigation />
            <BlogPage data={data}/>
            <Footer/>
        </Layout>
    </ThemeProvider>
);
export default BlogGridPage;
