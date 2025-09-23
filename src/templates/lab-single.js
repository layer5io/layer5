import React from "react";
import { graphql } from "gatsby";


import SEO from "../components/seo";


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

    <>


      <LabSinglePage frontmatter={data.mdx.frontmatter} body={data.mdx.body} />

    </>

  );
};

export default LabSingle;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} />;
};