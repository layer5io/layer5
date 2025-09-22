import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/seo";
import WorkshopSinglePage from "../sections/Learn/Workshop-single/index";
import Button from "../reusecore/Button";
import { Link } from "gatsby";

const components = {
  Button,
  Link,
  p: (props) => <p {...props} style={{ color: "inherit" }} />,
};

export const query = graphql`query WorkshopBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      title
      date(formatString: "MMMM Do, YYYY")
      slack
      abstract
      status
      labs
      video
      eurl
      thumbnail {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
        extension
        publicURL
      }
    }
    fields {
      slug
    }
  }
}
`;

const WorkshopSingle = ({ data }) => {
  return (
    <MDXProvider components={components}>
      <WorkshopSinglePage frontmatter={data.mdx.frontmatter}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </WorkshopSinglePage>
    </MDXProvider>
  );
};

export default WorkshopSingle;

export const Head = ({ data }) => {
  return  <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.thumbnail.publicURL} description={data.mdx.frontmatter.abstract}/>;
};