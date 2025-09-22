import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/seo";
import CareerSingle from "../sections/Careers/Career-single";
import Button from "../reusecore/Button";
import { Link } from "gatsby";

const components = {
  Button,
  Link,
  p: (props) => <p {...props} style={{ color: "inherit" }} />,
};

export const query = graphql`
    query CareerBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title,
                type,
                location,
                abstract,
                start_date,
                duration,
                salary,
                apply_by
            }
        }
    }
`;

const CareerSinglePage = ({ data }) => {
  return (
    <MDXProvider components={components}>
      <CareerSingle data={data}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </CareerSingle>
    </MDXProvider>
  );
};

export default CareerSinglePage;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} description={data.mdx.frontmatter.abstract}/>;
};