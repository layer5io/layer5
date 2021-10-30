import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SRLWrapper } from "simple-react-lightbox";
import slugify from "../../../utils/slugify";
import { Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import RelatedTopics from "../../../components/Related-Topics";
import TopicPageWrapper from "./topicSingle.style";
import RelatedTopicsFactory from "../../../components/Related-Topics/relatedTopicsFactory";

const TopicSingle = ({data}) => {
  const { frontmatter, body, fields } = data.mdx;
  const topicData = useStaticQuery(
    graphql`query relatedTopics {
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fields: {collection: {eq: "topics"}}, frontmatter: {published: {eq: true}}}
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
  
  const posts = topicData.allMdx.nodes;
  const relatedTopics = new RelatedTopicsFactory (
    posts, fields.slug
  ).setMaxTopics(6)
    .setCategory(frontmatter.category)
    .setTags(frontmatter.tags)
    .getTopics();

  return (
    <TopicPageWrapper>
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
          <div className="post-info-block">
            <div className="tags">
              <span>Tags:</span>
              <div>
                {frontmatter.tags && frontmatter.tags.map(tag => (
                  <Link key={`${frontmatter.title}-${tag}`}
                    to={`/topics/tag/${slugify(tag)}`}>{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <RelatedTopics
            postType="topics"
            relatedTopics={relatedTopics}
            mainHead="Related Topics" 
            lastCardHead="All Topics" 
            linkToAllItems="/topics"
          />
        </Container>
      </div>
    </TopicPageWrapper>
  );
};

export default TopicSingle;
