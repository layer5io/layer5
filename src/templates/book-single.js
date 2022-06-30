import React from "react";
import { graphql } from "gatsby";

import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";

import Navigation from "../sections/General/Navigation";
import BookSingle from "../sections/Learn/Book-single";
import DockerExtensionCTA from "../sections/Docker-Meshery/docker-extension-CTA";
// import LearnServiceMeshCTA from "../sections/Learn/Learn-Service-Mesh-CTA";
import Footer from "../sections/General/Footer";

import { GlobalStyle } from "../sections/app.style";
import SEO from "../components/seo";
import { useState } from "react";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
export const query = graphql`query BookBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      title
      abstract
      thumbnail {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
        extension
        publicURL
      }
    }
  }
}
`;

const BookSinglePage = ({ data }) => {
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
        <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.thumbnail.publicURL} />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <BookSingle data={data} />
        <DockerExtensionCTA />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default BookSinglePage;

