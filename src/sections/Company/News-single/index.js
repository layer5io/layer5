import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SRLWrapper } from "simple-react-lightbox";
import { graphql, useStaticQuery} from "gatsby";
import { Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";

import NewsPageWrapper from "./NewsSingle.style.js";
import RelatedPosts from "../../../components/Related-Posts";

const NewsSingle = ({data}) => {
  const { frontmatter, body } = data.mdx;
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
  return (
    <NewsPageWrapper>
      <PageHeader
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        category={frontmatter.category}
        author={{ name: frontmatter.author }}
        thumbnail={frontmatter.thumbnail}
      />
      <div className="single-post-wrapper">
        <Container>
          <div className="single-post-block">
            <SRLWrapper>
              <MDXRenderer>{body}</MDXRenderer>
            </SRLWrapper>
          </div>
          <RelatedPosts 
            postType="news"
            relatedPosts={newsData.allMdx.nodes}
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
