import React from "react"
import { useStaticQuery, graphql } from "gatsby";

import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from "../sections/Navigation"
import BlogSingle from "../sections/Blog-single"
import Footer from "../sections/Footer"

import { GlobalStyle } from "../sections/app.style"
import theme from "../theme/blog/themeStyles"

const BlogSinglePage = ({data}) => {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyle />
          <SEO title="Blog | Layer5 - The Service Mesh Company" />
          <Navigation />
          <BlogSingle data={data}/>
          <Footer />
        </Layout>
      </ThemeProvider>
)};

export default BlogSinglePage

export const query = graphql`
    query PostsBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                date(formatString: "YYYY MMMM Do")
            }
        }
    }
`;
