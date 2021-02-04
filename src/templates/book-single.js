import React from "react";
import { graphql } from "gatsby";

import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";

import Navigation from "../sections/General/Navigation";
import BookSingle from "../sections/Learn/Book-single";
import Footer from "../sections/General/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

export const query = graphql`
    query BookBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                author
                abstract
            }
        }
    }
`;

const BookSinglePage = ({data}) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <Navigation />
        <BookSingle data={data}/>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default BookSinglePage;

