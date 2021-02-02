import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/General/Navigation";
import BlogGrid from "../sections/Blog/Blog-grid";
import Footer from "../sections/General/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

import {graphql} from "gatsby";
import BlogList from "../sections/Blog/Blog-list";

export const query = graphql`
    query allBlogs($skip: Int!, $limit: Int!) {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fields: { collection: { eq: "blog" } }, frontmatter: { published: { eq: true } } }
            skip: $skip
            limit: $limit
        ) {
            nodes {
                id
                frontmatter {
                    title
                    date(formatString: "MMM Do, YYYY")
                    author
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

const Blog = props => {
  const [isListView, setIsListView] = useState(false);

  const setListView = () => {
    setIsListView(true);
  };

  const setGridView = () => {
    setIsListView(false);
  };

  useEffect(() => {
    if (props.location.state){
      if (props.location.state.isListView) setListView();
    }
  }, []);

  let BlogView = props => {
    if (isListView)
      return (<BlogList {...props} />);
    return (<BlogGrid {...props} />);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Blog" description="Articles how to service mesh from the world's largest service mesh community.
              Service mesh how-tos and cloud native ecosystem news." />
        <Navigation />
        <BlogView data={props.data} isListView={isListView}
          setListView={setListView} setGridView={setGridView}
          pageContext={props.pageContext}
        />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default Blog;
