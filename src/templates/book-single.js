import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import BookSingle from "../sections/Learn/Book-single";
import DockerExtensionCTA from "../sections/Docker-Meshery/docker-extension-CTA";
import SEO from "../components/seo";
import Button from "../reusecore/Button";
import { Link } from "gatsby";

const components = {
  Button,
  Link,
  p: (props) => <p {...props} style={{ color: "inherit" }} />,
};

export const query = graphql`query BookBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      title
      abstract
      thumbnail {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
        extension
        publicURL
      }
    }
  }
}
`;

const BookSinglePage = ({ data }) => {
  return (
    <MDXProvider components={components}>
      <BookSingle data={data}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </BookSingle>
      <DockerExtensionCTA />
    </MDXProvider>
  );
};

export default BookSinglePage;


export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.thumbnail.publicURL} description={data.mdx.frontmatter.abstract}/>;
};