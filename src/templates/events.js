import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Meetups from "../sections/Events/index";

export const query = graphql`query allCategories($skip: Int!, $limit: Int!) {
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
            gatsbyImageData(width: 480, layout: CONSTRAINED)
          }
        }
        darkthumbnail {
          publicURL
          relativePath
          extension
          childImageSharp {
            gatsbyImageData(width: 480, layout: CONSTRAINED)
          }
        }
      }
    }
  }
  allMeetups: allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {fields: {collection: {eq: "events"}}, frontmatter: {type: {eq: "Meetups"}, published: {eq: true}}}
  ) {
    totalCount
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
        title
        eurl
        type
        date(formatString: "MMM Do, YYYY")
        thumbnail {
          publicURL
          relativePath
          extension
          childImageSharp {
            gatsbyImageData(width: 480, layout: CONSTRAINED)
          }
        }
        darkthumbnail {
          publicURL
          relativePath
          extension
          childImageSharp {
            gatsbyImageData(width: 480, layout: CONSTRAINED)
          }
        }
      }
    }
  }
  allWorkshops: allMdx(
    filter: {fields: {collection: {eq: "events"}}, frontmatter: {type: {eq: "Workshop"}, published: {eq: true}}}
  ) {
    nodes {
      id
      fields {
        slug
      }
      frontmatter {
        abstract
        eurl
        title
        date(formatString: "MMM Do, YYYY")
        thumbnail {
          publicURL
          relativePath
          extension
          childImageSharp {
            gatsbyImageData(width: 480, layout: CONSTRAINED)
          }
        }
        darkthumbnail {
          publicURL
          relativePath
          extension
          childImageSharp {
            gatsbyImageData(width: 480, layout: CONSTRAINED)
          }
        }
      }
    }
  }
  allEvents: allMdx(
    filter: {fields: {collection: {eq: "events"}}, frontmatter: {type: {eq: "Event"}, published: {eq: true}}}
  ) {
    nodes {
      id
      fields {
        slug
      }
      frontmatter {
        abstract
        eurl
        title
        date(formatString: "MMM Do, YYYY")
        thumbnail {
          publicURL
          relativePath
          extension
          childImageSharp {
            gatsbyImageData(width: 480, layout: CONSTRAINED)
          }
        }
        darkthumbnail {
          publicURL
          relativePath
          extension
          childImageSharp {
            gatsbyImageData(width: 480, layout: CONSTRAINED)
          }
        }
      }
    }
  }
  allUpcoming: allMdx(
    filter: {frontmatter: {upcoming: {eq: true}}, fields: {collection: {eq: "events"}}}
    sort: {frontmatter: {date: DESC}}
  ) {
    nodes {
      id

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
            gatsbyImageData(width: 480, layout: CONSTRAINED)
          }
        }
        darkthumbnail {
          publicURL
          relativePath
          extension
          childImageSharp {
            gatsbyImageData(width: 480, layout: CONSTRAINED)
          }
        }
      }
    }
  }
}`;

const Events = ({ data, pageContext }) => {
  return (
    <>
      <Meetups  data={data} pageContext={pageContext} />
    </>
  );
};

export default Events;

export const Head = () => {
  return <SEO title="Events" description="Join Layer5 at upcoming events." />;
};