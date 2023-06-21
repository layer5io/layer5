import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import CareerSingle from "../sections/Careers/Career-single";

export const query = graphql`
    query CareerBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title,
                type,
                location,
                start_date,
                duration,
                salary,
                apply_by
            }
        }
    }
`;

const CareerSinglePage = ({ data, children }) => {

  return (
    <>
      <CareerSingle  data={data} >
        { children }
      </CareerSingle>
    </>
  );
};

export default CareerSinglePage;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} />;
};