import React from "react";
import { graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/Navigation";
import Footer from "../sections/Footer";
import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";
import WorkshopSinglePage from "../sections/Workshop-single/index";

export const query = graphql`
    query WorkshopBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } } ) {
            body
            frontmatter {
                title
                date(formatString: "MMMM Do, YYYY")
                slack
                abstract
                status
                labs
                video
                eurl
                thumbnail {
                    childImageSharp {
                        fluid (maxWidth: 1000) {
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
`;

const WorkshopSingle = ({ data }) => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <GlobalStyle />
                <SEO title={`${data.mdx.frontmatter.title}`} />
                <Navigation />
                <WorkshopSinglePage frontmatter={data.mdx.frontmatter} body={data.mdx.body} />
                <Footer />
            </Layout>
        </ThemeProvider>
    );
};

export default WorkshopSingle;
