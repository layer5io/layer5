import React from "react";


import Layout from "../components/layout";
import SEO from "../components/seo";


import Footer from "../sections/General/Footer";





import { graphql } from "gatsby";
import Meetups from "../sections/Events/index";

export const query = graphql`query allCategories($skip: Int!, $limit: Int!) {
  allCategories: allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
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
  }
  allMeetups: allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {type: {eq: "Meetups"}, published: {eq: true}}}
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
  allWorkshops: allMdx(
    filter: {frontmatter: {type: {eq: "Workshop"}, published: {eq: true}}}
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
  allEvents: allMdx(filter: {frontmatter: {type: {eq: "Event"}, published: {eq: true}}}) {
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
  allUpcoming: allMdx(
    filter: {frontmatter: {upcoming: {eq: true}}, fields: {collection: {eq: "events"}}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    nodes {
      id
      body
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


  return (

    <Layout>


      <Meetups  data={data} pageContext={pageContext} />
      <Footer />
    </Layout>

  );
};

export default Events;

export const Head = () => {
  return <SEO title="Events" description="Join Layer5 at upcoming events." />;
};