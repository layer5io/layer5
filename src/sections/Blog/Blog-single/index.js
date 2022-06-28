import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SRLWrapper } from "simple-react-lightbox";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import { useLocation } from "@reach/router";
import slugify from "../../../utils/slugify";
import { Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import RelatedPosts from "../../../components/Related-Posts";
import BlogPageWrapper from "./blogSingle.style";
import BlogPostSignOff from "../BlogPostSignOff";
import RelatedPostsFactory from "../../../components/Related-Posts/relatedPostsFactory";
import { CTA_Bottom } from "../../../components/Call-To-Actions/CTA_Bottom";

import Image from "../../../components/image";

const BlogSingle = ({data}) => {
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

  const location = useLocation();
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
    <div className={`${authorInformation ? "post-container" : ""}`}>
      <PageHeader
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        category={frontmatter.category}
        author={{ name: frontmatter.author }}
        thumbnail={frontmatter.thumbnail}
        date={frontmatter.date}
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
            {/* <CTA_Bottom
              category={"Community"}
            /> */}
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
      {authorInformation && (
        <div className="author-info-section">
          <div className="authors-info-container">
            <h3>About the author</h3>
            <div className="authors-head-shot">
              <Link to={`/community/members/${authorInformation.slug}`}>
                <Image {...authorInformation?.frontmatter?.image_path} imgStyle={{ objectFit: "cover" }} alt={authorInformation.frontmatter?.name} className="authors-image" />
              </Link>
            </div>
            <h5>{authorInformation.frontmatter?.name}</h5>
            <p>
              {authorInformation.frontmatter?.bio}
            </p>
            <div className="authors-info-meshery">
              <h6>MeshMap</h6>
              <p>MeshMap is the world's only visual designer for Kubernetes and service mesh deployments.</p>
              <Link to="/service-mesh-management/meshery">Get Started</Link>
            </div>
            <div className="share-section">
              <p>Share</p>
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
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </BlogPageWrapper>
  );
};

export default BlogSingle;
