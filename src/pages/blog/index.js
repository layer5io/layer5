import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import BlogGrid from "../../sections/Blog/Blog-grid";
import Footer from "../../sections/General/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

import { graphql } from "gatsby";
import BlogList from "../../sections/Blog/Blog-list";
import { darktheme } from "../../theme/app/themeStyles";
import lighttheme from "../../theme/app/themeStyles";

export const query = graphql`
  query allBlogs {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { collection: { eq: "blog" } }
        frontmatter: { published: { eq: true } }
      }
    ) {
      nodes {
        id
        body
        frontmatter {
          title
          date(formatString: "MMM Do, YYYY")
          author
          thumbnail {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
            extension
            publicURL
          }
          darkthumbnail {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
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

const Blog = (props) => {
  const [isListView, setIsListView] = useState(false);

  const setListView = () => {
    setIsListView(true);
  };
  const setGridView = () => {
    setIsListView(false);
  };

  useEffect(() => {
    if (props.location.state) {
      if (props.location.state.isListView) setListView();
    }
  }, []);

  let BlogView = (props) => {
    if (isListView) return <BlogList {...props} />;
    return <BlogGrid {...props} />;
  };
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lighttheme : darktheme}>
      <Layout>
        <GlobalStyle />
        <SEO
          title="Blog"
          description="The latest news and announcements about Layer5, our products, and our ecosystem, as well as voices from across our community."
        />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <BlogView
          isListView={isListView}
          setListView={setListView}
          setGridView={setGridView}
          pageContext={props.pageContext}
          data={props.data}
          theme={theme}
        />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default Blog;
