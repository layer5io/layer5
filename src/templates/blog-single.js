import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/seo";
import BlogSingle from "../sections/Blog/Blog-single";
import SimpleReactLightbox from "simple-react-lightbox";
import Button from "../reusecore/Button";
import { BlogWrapper } from "../collections/blog/Blog.style.js";
import { Link } from "gatsby";

const components = {
  Button,
  BlogWrapper,
  Link
};

export const query = graphql`query BlogsBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      title
      subtitle
      description
      date(formatString: "MMMM Do, YYYY")
      author
      category
      tags
      thumbnail {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
        extension
        publicURL
      }
      darkthumbnail {
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

const BlogSinglePage = ({ data }) => {
  return (
    <MDXProvider components={components}>
      <SimpleReactLightbox>
        <BlogSingle data={data}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </BlogSingle>
      </SimpleReactLightbox>
    </MDXProvider>
  );
};

export default BlogSinglePage;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.thumbnail.publicURL} description={data.mdx.frontmatter.description} />;
};