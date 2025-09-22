import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/seo";
import LabSinglePage from "../sections/Learn/Lab-single/index";
import Button from "../reusecore/Button";
import { Link } from "gatsby";

const components = {
  Button,
  Link,
  p: (props) => <p {...props} style={{ color: "inherit" }} />,
};

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
    <MDXProvider components={components}>
      <LabSinglePage frontmatter={data.mdx.frontmatter}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </LabSinglePage>
    </MDXProvider>
  );
};

export default LabSingle;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} />;
};