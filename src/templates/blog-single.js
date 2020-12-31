import React from "react";
import { graphql } from "gatsby";

import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import BlogSingle from "../sections/Blog-single";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

export const query = graphql`
    query BlogsBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                subtitle
                date(formatString: "MMMM Do, YYYY")
                author
                category
                tags
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
`;

const BlogSinglePage = ({data}) => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <GlobalStyle />
                <SEO title={data.mdx.frontmatter.title} />
                <Navigation />
                <BlogSingle data={data}/>
                <Footer />
            </Layout>
        </ThemeProvider>
    );
};

export default BlogSinglePage;

