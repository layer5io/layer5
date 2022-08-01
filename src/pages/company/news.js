import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { graphql } from "gatsby";

import Navigation from "../../sections/General/Navigation";
import NewsPage from "../../sections/Company/News-grid";
import Footer from "../../sections/General/Footer";

import { GlobalStyle } from "../../sections/app.style";
import { darktheme } from "../../theme/app/themeStyles";
import lighttheme from "../../theme/app/themeStyles";

import SimpleReactLightbox from "simple-react-lightbox";

export const query = graphql`query allNews {
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fields: {collection: {eq: "news"}}, frontmatter: {published: {eq: true}}}
  ) {
    nodes {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        author
        category
        eurl
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

const NewsGridPage = ({ data }) => {
  const [theme, setTheme] = useState();

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>Prevent Flash</div>;
  }
  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="News" description="News and press about Layer5, the cloud native management company.
    Layer5 the company behind industry-leading, open source software." />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <SimpleReactLightbox>
          <NewsPage theme={theme} data={data} />
        </SimpleReactLightbox>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default NewsGridPage;
