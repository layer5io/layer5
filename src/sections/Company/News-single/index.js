import React from "react";
// import { SRLWrapper } from "simple-react-lightbox";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import NewsSidebar from "./Sidebar";
import loadable from "@loadable/component";

import NewsPageWrapper from "./NewsSingle.style.js";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode.js";
const RelatedPosts = loadable(() => import("../../../components/Related-Posts"));


const NewsSingle = ({ data, children }) => {
  const { frontmatter, fields } = data.mdx;
  const newsData = useStaticQuery(
    graphql`query relatedNewsPosts {
  allMdx(
    sort: {frontmatter: {date: DESC}}
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
}`
  );
  const posts = newsData.allMdx.nodes;
  const relatedPosts = posts.filter(
    (post) => post.fields.slug !== fields.slug
  );
  const { isDark } = useStyledDarkMode();

  return (
    <NewsPageWrapper>
      <PageHeader
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        category={frontmatter.category}
        author={{ name: frontmatter.author }}
        thumbnail={ isDark && frontmatter.darkthumbnail && frontmatter.darkthumbnail.publicURL !== frontmatter.thumbnail.publicURL
          ? frontmatter.darkthumbnail : frontmatter.thumbnail}
        date={frontmatter.date}
      />
      <div className="single-post-wrapper">
        <Container>
          <div className="single-post-block">
            <Row>
              <Col $lg={9} $md={8} $xs={12}>
                {/* <SRLWrapper> */}
                { children }
                {/* </SRLWrapper> */}
              </Col>
              <Col $lg={3} $md={4} $xs={12}>
                <NewsSidebar kit={frontmatter.presskit} />
              </Col>
            </Row>
          </div>
          {
            frontmatter.eurl && (
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
