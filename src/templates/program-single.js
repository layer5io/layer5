import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import ProgramsSingle from "../sections/Careers/Careers-Programs-single";

export const query = graphql`
    query ProgramBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
            }
        }
    }
`;

const ProgramSinglePage = ({ data, children }) => {

  return (
    <>
      <ProgramsSingle data={data.mdx}>
        { children }
      </ProgramsSingle>
    </>
  );
};

export default ProgramSinglePage;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} />;
};