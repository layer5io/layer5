import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Footer from "../sections/General/Footer";
import LabSinglePage from "../sections/Learn/Lab-single/index";

export const query = graphql`
    query LabBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } } ) {
            body
            frontmatter {
                title
            }
            fields {
                slug
            }
        }
    }
`;

const LabSingle = ({ data }) => {


  return (

    <Layout>


      <LabSinglePage frontmatter={data.mdx.frontmatter} body={data.mdx.body} />
      <Footer />
    </Layout>

  );
};

export default LabSingle;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} />;
};