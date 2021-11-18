import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SRLWrapper } from "simple-react-lightbox";
import slugify from "../../../utils/slugify";
import { Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import RelatedPosts from "../../../components/Related-Posts";
import BlogPageWrapper from "./blogSingle.style";
import BlogPostSignOff from "../BlogPostSignOff";
import RelatedPostsFactory from "../../../components/Related-Posts/relatedPostsFactory";

const BlogSingle = ({data}) => {
  const { frontmatter, body, fields } = data.mdx;
  const blogData = useStaticQuery(
    graphql`query relatedPosts {
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fields: {collection: {eq: "blog"}}, frontmatter: {published: {eq: true}}}
  ) {
    nodes {
      frontmatter {
        title
        date(formatString: "MMM Do YYYY")
        author
        category
        tags
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
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
}
`
  );
  
  const posts = blogData.allMdx.nodes;
  const relatedPosts = new RelatedPostsFactory (
    posts, fields.slug
  ).setMaxPosts(6)
    .setCategory(frontmatter.category)
    .setTags(frontmatter.tags)
    .getPosts();

  return (
    <BlogPageWrapper>
      <PageHeader
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        category={frontmatter.category}
        author={{ name: frontmatter.author }}
        thumbnail={frontmatter.thumbnail}
      />
      <div className="single-post-wrapper">
        <Container>
          <SRLWrapper>
            <MDXRenderer>{body}</MDXRenderer>
          </SRLWrapper>
          <BlogPostSignOff
            author={{ name: frontmatter.author }}
          />
          <div className="post-info-block">
            <div className="tags">
              <span>Tags:</span>
              <div>
                {frontmatter.tags && frontmatter.tags.map(tag => (
                  <Link key={`${frontmatter.title}-${tag}`}
                    to={`/blog/tag/${slugify(tag)}`}>{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <RelatedPosts
            postType="blogs"
            relatedPosts={relatedPosts}
            mainHead="Related Blogs" 
            lastCardHead="All Blogs" 
            linkToAllItems="/blog"
          />
        </Container>
      </div>
    </BlogPageWrapper>
  );
};

export default BlogSingle;
