import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/seo";
import ProgramsSingle from "../sections/Careers/Careers-Programs-single";
import Button from "../reusecore/Button";
import { Link } from "gatsby";

const components = {
  Button,
  Link,
  p: (props) => <p {...props} style={{ color: "inherit" }} />,
};

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
    <MDXProvider components={components}>
      <ProgramsSingle data={data.mdx}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </ProgramsSingle>
    </MDXProvider>
  );
};

export default ProgramSinglePage;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} />;
};