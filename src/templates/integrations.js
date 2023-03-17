import React, { useState } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import IndividualIntegrations from "../sections/Meshery/Meshery-integrations/Individual-Integrations";
import Footer from "../sections/General/Footer";

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


  return (

    <Layout>


      <IndividualIntegrations  data={data} />
      <Footer />
    </Layout>

  );
};
export default Integrations;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.integrationIcon.publicURL} />;
};