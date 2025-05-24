import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Meetups from "../sections/Events/index";

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allCategories: allMdx(
      sort: {frontmatter: {date: DESC}}
      filter: {fields: {collection: {eq: "events"}}, frontmatter: {published: {eq: true}}}
      skip: $skip
      limit: $limit
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          attribute {
            name
            url
          }
          eurl
          title
          type
          date(formatString: "MMM Do, YYYY")
          thumbnail {
            publicURL
            relativePath
            extension
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          darkthumbnail {
            publicURL
            relativePath
            extension
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
    allUpcoming: allMdx(
      filter: {frontmatter: {upcoming: {eq: true}}, fields: {collection: {eq: "events"}}}
      sort: {frontmatter: {date: DESC}}
    ) {
      nodes {
        id
        body
        fields {
          slug
        }
        frontmatter {
          title
          type
          upcoming
          eurl
          date(formatString: "MMM Do, YYYY")
          thumbnail {
            publicURL
            relativePath
            extension
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          darkthumbnail {
            publicURL
            relativePath
            extension
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;

const Events = ({ data, pageContext }) => {
  if (!data || !data.allCategories || !pageContext) {
    return (
      <div style={{ textAlign: "center", margin: "4rem auto" }}>
        <h2>Loading events...</h2>
      </div>
    );
  }

  // If we're on a page beyond the total number of pages, show a message
  if (pageContext.currentPage > pageContext.numEventPages) {
    return (
      <div style={{ textAlign: "center", margin: "4rem auto" }}>
        <h2>No events found on this page</h2>
        <p>There may be events on other pages.</p>
      </div>
    );
  }

  return (
    <>
      <Meetups data={data} pageContext={pageContext} />
    </>
  );
};

export default Events;

export const Head = () => {
  return <SEO title="Events" description="Join Layer5 at upcoming events." />;
};