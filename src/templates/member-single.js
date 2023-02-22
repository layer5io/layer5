import React, { useState } from "react";
import { graphql } from "gatsby";

import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import MemberSingle from "../sections/Community/Member-single";
import Footer from "../sections/General/Footer";

import { GlobalStyle } from "../sections/app.style";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";

export const query = graphql`query MemberBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    frontmatter {
      name
      position
      github
      twitter
      meshmate
      linkedin
      location
      badges
      bio
      executive_bio
      image_path {
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

const MemberSinglePage = ({ data }) => {
  const [theme, setTheme] = useState();

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <MemberSingle
          frontmatter={data.mdx.frontmatter}
        />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default MemberSinglePage;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.name} image={data.mdx.frontmatter.image_path.publicURL} />;
};