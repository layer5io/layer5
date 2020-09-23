import React from "react";
import { graphql } from "gatsby";

import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import BookSingle from "../sections/Book-single";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/blog/themeStyles";

export const query = graphql`
    query BookBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                author
            }
        }
    }
`;

const BookSinglePage = ({data}) => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <GlobalStyle />
                <SEO title={data.mdx.frontmatter.title} />
                <Navigation />
                <BookSingle data={data}/>
                <Footer />
            </Layout>
        </ThemeProvider>
    );
};

export default BookSinglePage;

