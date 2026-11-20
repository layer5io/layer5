import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";


import BlogSingle from "../sections/Blog/Blog-single";



import SimpleReactLightbox from "simple-react-lightbox";
export const query = graphql`query BlogsBySlug($slug: String!, $relatedSlugs: [String], $author: String) {
  mdx(fields: {slug: {eq: $slug}}) {

    frontmatter {
      title
      subtitle
      description
      date(formatString: "MMMM Do, YYYY")
      author
      category
      tags
      thumbnail {
        extension
        publicURL
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      darkthumbnail {
        extension
        publicURL
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      thumbnail_svg {
        extension
        publicURL
      }
      darkthumbnail_svg {
        extension
        publicURL
      }
    }
    fields {
      slug
    }
  }
  relatedPosts: allMdx(filter: {fields: {slug: {in: $relatedSlugs}}}) {
    nodes {
      frontmatter {
        title
        date(formatString: "MMM Do YYYY")
        author
        category
        tags
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 480, layout: CONSTRAINED)
          }
          extension
          publicURL
        }
        darkthumbnail {
          childImageSharp {
            gatsbyImageData(width: 480, layout: CONSTRAINED)
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
  author: mdx(
    fields: {collection: {eq: "members"}}
    frontmatter: {name: {eq: $author}, published: {eq: true}}
  ) {
    frontmatter {
      bio
      name
      image_path {
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

const BlogSinglePage = ({ data, pageContext, children }) => {


  return (

    <>


      <SimpleReactLightbox>
        <BlogSingle  data={data} pageContext={pageContext} >
          {children}
        </BlogSingle>
      </SimpleReactLightbox>

    </>

  );
};

export default BlogSinglePage;


export const Head = ({ data }) => {
  const { frontmatter } = data.mdx;
  const image = frontmatter.thumbnail?.publicURL
    || frontmatter.thumbnail_svg?.publicURL
    || frontmatter.darkthumbnail?.publicURL
    || frontmatter.darkthumbnail_svg?.publicURL;

  return <SEO title={frontmatter.title} image={image} description={frontmatter.description} />;
};