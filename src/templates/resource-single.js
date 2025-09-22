import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/seo";
import ResourceSingle from "../sections/Resources/Resource-single";
import SimpleReactLightbox from "simple-react-lightbox";
import Button from "../reusecore/Button";
import { Link } from "gatsby";

const components = {
  Button,
  Link,
  p: (props) => <p {...props} style={{ color: "inherit" }} />,
};

export const query = graphql`query ResourcesBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      title
      subtitle
      date(formatString: "MMMM Do, YYYY")
      author
      category
      tags
      description
      thumbnail {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
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

const ResourceSinglePage = ({ data }) => {
  return (
    <MDXProvider components={components}>
      <SimpleReactLightbox>
        <ResourceSingle data={data}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </ResourceSingle>
      </SimpleReactLightbox>
    </MDXProvider>
  );
};

export default ResourceSinglePage;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.thumbnail.publicURL} description={data.mdx.frontmatter.description}/>;
};