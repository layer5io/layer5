import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SRLWrapper } from "simple-react-lightbox";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import NewsSidebar from "./Sidebar";

import NewsPageWrapper from "./NewsSingle.style.js";
import RelatedPosts from "../../../components/Related-Posts";

const NewsSingle = ({ data }) => {
  const { frontmatter, body, fields } = data.mdx;
  const newsData = useStaticQuery(
    graphql`query relatedNewsPosts {
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fields: {collection: {eq: "news"}}, frontmatter: {published: {eq: true}}}
    limit: 6
  ) {
    nodes {
      frontmatter {
        title
        date(formatString: "MMM Do YYYY")
        author
        category
        tags
        eurl
        presskit
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
  const posts = newsData.allMdx.nodes;
  const relatedPosts = posts.filter(
    (post) => post.fields.slug !== fields.slug
  );

  return (
    <NewsPageWrapper>
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
          <div className="single-post-block">
            <Row>
              <Col lg={9} md={8} xs={12}>
                <SRLWrapper>
                  <MDXRenderer>{body}</MDXRenderer>
                </SRLWrapper>
              </Col>
              <Col lg={3} md={4} xs={12}>
                <NewsSidebar kit={frontmatter.presskit} />
              </Col>
            </Row>
          </div>
          {
            body && !body.slug && frontmatter.eurl && (
              <div style={{ display: "flex" }}>
                <h5>
                  Read the full article on <a href={frontmatter.eurl} target="_blank" rel="noopener noreferrer">{frontmatter.author}</a>
                </h5>
              </div>
            )
          }
          <RelatedPosts
            postType="news"
            relatedPosts={relatedPosts}
            mainHead="Latest News"
            lastCardHead="All News"
            linkToAllItems="/company/news"
          />
        </Container>
      </div>
    </NewsPageWrapper>
  );
};

export default NewsSingle;
