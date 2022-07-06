import React, { useState } from "react";
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
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import { AiOutlineShareAlt } from "@react-icons/all-files/ai/AiOutlineShareAlt";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { useLocation } from "@reach/router";

import AboutTheAuthor from "./author";

const BlogSingle = ({ data }) => {
  const location = useLocation();
  const { frontmatter, body, fields } = data.mdx;
  const { relatedPosts: blogData, authors } = useStaticQuery(
    graphql`query relatedPosts {
      relatedPosts: allMdx(
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
      authors: allMdx(
        sort: { fields: [frontmatter___name], order: ASC }
        filter: {
          fields: { collection: { eq: "members" } }
          frontmatter: { published: { eq: true } }
        }
      ) {
        nodes {
          frontmatter{
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
          slug
        }
      }
    }  `
  );

  const [showShareContainer, setShowShareContainer] = useState(false);

  const posts = blogData.nodes;
  const relatedPosts = new RelatedPostsFactory (
    posts, fields.slug
  ).setMaxPosts(6)
    .setCategory(frontmatter.category)
    .setTags(frontmatter.tags)
    .getPosts();

  const authorInformation = authors.nodes.filter((author) => author.frontmatter.name === frontmatter.author)[0];

  const shareQuote = `Check out this post from layer5 ${frontmatter.title}`;

  return (
    <BlogPageWrapper>
      <Container>
        <AboutTheAuthor authorInformation={authorInformation} shareQuote={shareQuote} />
        <div>
          <PageHeader
            title={frontmatter.title}
            subtitle={frontmatter.subtitle}
            category={frontmatter.category}
            author={{ name: frontmatter.author }}
            thumbnail={frontmatter.thumbnail}
            date={frontmatter.date}
          />
          <div className="single-post-wrapper">
            <SRLWrapper>
              <MDXRenderer>{body}</MDXRenderer>
            </SRLWrapper>
            <BlogPostSignOff
              author={{ name: frontmatter.author }}
            />
            <div className="post-tag-container">
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
                {/* <CTA_Bottom
              category={"Community"}
            /> */}
              </div>
              <div className="post-share-mobile" onClick={() => setShowShareContainer(!showShareContainer)}>
                <AiOutlineShareAlt />
              </div>
              {showShareContainer ?
                <div className="share-icons-container">
                  <TwitterShareButton url={location.href} title={shareQuote}>
                    <AiOutlineTwitter />
                  </TwitterShareButton>
                  <FacebookShareButton url={location.href} quote={shareQuote}>
                    <FaFacebookF />
                  </FacebookShareButton>
                  <LinkedinShareButton url={location.href}>
                    <FaLinkedin />
                  </LinkedinShareButton>
                </div> : ""}
            </div>
            <RelatedPosts
              postType="blogs"
              relatedPosts={relatedPosts}
              mainHead="Related Blogs"
              lastCardHead="All Blogs"
              linkToAllItems="/blog"
            />
          </div>
        </div>
      </Container>
    </BlogPageWrapper>
  );
};

export default BlogSingle;
