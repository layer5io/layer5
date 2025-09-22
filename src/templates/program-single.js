import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import SEO from "../components/seo";


import ProgramsSingle from "../sections/Careers/Careers-Programs-single";

export const query = graphql`
    query ProgramBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            id
            body
            frontmatter {
                title
                program
            }
        }
    }
`;

const ProgramSinglePage = ({ data }) => {

  return (
    <>
      <ProgramsSingle data={data.mdx}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </ProgramsSingle>

    </>
  );
};

export default ProgramSinglePage;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} />;
};