import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BookPage from "../sections/Books-grid";
import Navigation from "../sections/Navigation";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/blog/themeStyles";
import {graphql} from "gatsby";

export const query = graphql`
    query allBooks {
        allMdx(
            filter: { fields: { collection: { eq: "books" } }, frontmatter: { published: { eq: true } } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            nodes {
                id
                frontmatter {
                    title
                    date(formatString: "Do MMMM YYYY")
                    author
                    abstract
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


const BooksGridPage = ({data}) => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Books | Layer5 - The Service Mesh Company" />
            <Navigation />
            <BookPage data={data}/>
            <Footer/>
        </Layout>
    </ThemeProvider>
);
export default BooksGridPage;
