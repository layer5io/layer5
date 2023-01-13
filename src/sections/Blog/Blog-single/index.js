import React, { useState, useEffect } from "react";
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
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { IoIosCopy } from "@react-icons/all-files/io/IoIosCopy";
import { useLocation } from "@reach/router";
import { CTA_Bottom } from "../../../components/Call-To-Actions/CTA_Bottom";

import AboutTheAuthor from "./author";

const BlogSingle = ({ theme, data }) => {
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
            darkthumbnail {
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

  const posts = blogData.nodes;
  const relatedPosts = new RelatedPostsFactory(
    posts, fields.slug
  ).setMaxPosts(6)
    .setCategory(frontmatter.category)
    .setTags(frontmatter.tags)
    .getPosts();

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  const authorInformation = authors.nodes.filter((author) => author.frontmatter.name === frontmatter.author)[0];

  const shareQuote = `Check out this post from layer5 "${frontmatter.title}"`;

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
            thumbnail={(theme === "dark" ? frontmatter.darkthumbnail : frontmatter.thumbnail)}
            darkthumbnail={frontmatter.thumbnail}
            date={frontmatter.date}
            theme={theme}
          />
          <div className="single-post-wrapper">
            <SRLWrapper>
              <MDXRenderer>{body}</MDXRenderer>
            </SRLWrapper>
            <BlogPostSignOff
              author={{ name: frontmatter.author }}
            />
            <div className="post-tag-container">
              <div className="post-share-mobile">
                <div className="share-icons-container">
                  <h4>Share Post:</h4>
                  <TwitterShareButton url={location.href} title={shareQuote}>
                    <AiOutlineTwitter />
                  </TwitterShareButton>
                  <FacebookShareButton url={location.href} quote={shareQuote}>
                    <FaFacebookF />
                  </FacebookShareButton>
                  <LinkedinShareButton url={location.href}>
                    <FaLinkedin />
                  </LinkedinShareButton>
                  <CopyToClipboard text={location.href} title="Copy link" onCopy={() => setCopied(true)}>
                    <IoIosCopy />
                  </CopyToClipboard>
                </div>
                {copied ? <p className="link-copied-container">
                  Copied
                </p> : ""}
              </div>
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
                <CTA_Bottom
                  category={"Docker"}
                />
              </div>
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
