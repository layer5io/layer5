import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/General/Navigation";
import BlogList from "../sections/Blog/Blog-list";
import Footer from "../sections/General/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";
import {graphql} from "gatsby";

export const query = graphql`
    query BlogsByCategory($category: String!, $skip: Int!, $limit: Int!) {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fields: { collection: { eq: "blog" } }, frontmatter: { category: { eq: $category }, published: { eq: true } } }
            skip: $skip
            limit: $limit
        ) {
            totalCount
            nodes {
                id
                frontmatter {
                    title
                    subtitle
                    date(formatString: "MMMM Do, YYYY")
                    author
                    thumbnail{
                        childImageSharp{
                            fluid(maxWidth: 1000){
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

const BlogListPage = ({ pageContext, data }) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Blog" description="Articles how to service mesh from the world's largest service mesh community.
              Service mesh how-tos and cloud native ecosystem news." />
      <Navigation />
      <BlogList data={data} pageContext={pageContext} />
      <Footer />
    </Layout>
  </ThemeProvider>
);
export default BlogListPage;
