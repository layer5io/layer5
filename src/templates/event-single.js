import React from "react";
import { graphql } from "gatsby";

import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";

import Navigation from "../sections/General/Navigation";
import EventSingle from "../sections/Community/Event-single";
import Footer from "../sections/General/Footer";
import LearnServiceMeshCTA from "../sections/Learn/Learn-Service-Mesh-CTA";
import Subscribe from "../sections/subscribe/subscribe";

import { GlobalStyle } from "../sections/app.style";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useState } from "react";
import SEO from "../components/seo";

export const query = graphql`query EventsBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      attribute {
        name
        url
      }
      eurl
      title
      type
      speakers
      date(formatString: "MMM Do, YYYY")
      thumbnail {
        publicURL
        relativePath
        extension
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
}
`;

const EventSinglePage = ({ data }) => {
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
        <EventSingle data={data}/>
        <LearnServiceMeshCTA />
        <Subscribe />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default EventSinglePage;

