import React from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SRLWrapper } from "simple-react-lightbox";
import slugify from "../../../utils/slugify";
import { Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import RelatedPosts from "../Related-Posts";
import BlogPageWrapper from "./blogSingle.style";
import BlogPostSignOff from "../BlogPostSignOff";

const BlogSingle = ({data}) => {
  const { frontmatter, body, fields } = data.mdx;
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
            category={frontmatter.category}
            tags={frontmatter.tags}
            currentPostSlug={fields.slug}
          />
        </Container>
      </div>
    </BlogPageWrapper>
  );
};

export default BlogSingle;
