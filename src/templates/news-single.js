import React from "react";
import { graphql } from "gatsby";

import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import NewsSingle from "../sections/News-single";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/blog/themeStyles";

export const query = graphql`
    query NewsBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                subtitle
                date(formatString: "YYYY MMMM Do")
                author
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
        }
    }
`;

const NewsSinglePage = ({data}) => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <GlobalStyle />
                <SEO title={data.mdx.frontmatter.title} />
                <Navigation />
                <NewsSingle data={data}/>
                <Footer />
            </Layout>
        </ThemeProvider>
    );
};

export default NewsSinglePage;

