import React, { useState } from "react";
import { graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import IndividualIntegrations from "../sections/Meshery/Meshery-integrations/Individual-Integrations";
import Footer from "../sections/General/Footer";
import { GlobalStyle } from "../sections/app.style";
import lighttheme, { darktheme } from "../theme/app/themeStyles";

export const query = graphql`
  query IntegrationsBySlug($slug: String!) {
    mdx(fields:{slug:{eq: $slug}}) {
      body
      frontmatter {
        title
        subtitle
        howItWorks
        howItWorksDetails
        integrationIcon {
          childImageSharp {
            gatsbyImageData(width: 500, layout: CONSTRAINED)
          }
          extension
          publicURL
        }
        docURL
        category
        featureList
        workingSlides {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          extension
          publicURL
        }
      }
    }
  }
`;
const Integrations = ({ data }) => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <IndividualIntegrations theme={theme} data={data} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default Integrations;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.integrationIcon.publicURL} />;
};