import React from "react";
import { graphql } from "gatsby";

import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/General/Navigation";
import ResourceSingle from "../sections/Resources/Resource-single";
import Footer from "../sections/General/Footer";

import { GlobalStyle } from "../sections/app.style";
import SimpleReactLightbox from "simple-react-lightbox";
import { useState } from "react";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

export const query = graphql`query ResourcesBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      title
      subtitle
      date(formatString: "MMMM Do, YYYY")
      author
      category
      tags
      thumbnail {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
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

const ResourceSinglePage = ({ data }) => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (cookies.Theme !== undefined)
      setTheme(cookies.Theme);
  }, []);
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  return (
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.thumbnail.publicURL}/>
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <SimpleReactLightbox>
          <ResourceSingle data={data}/>
        </SimpleReactLightbox>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default ResourceSinglePage;

