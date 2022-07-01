import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";

import { GlobalStyle } from "../sections/app.style";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";

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
      }
    }
  }
  allMeetups: allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {type: {eq: "Meetups"}}}
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
      }
    }
  }
  allEvents: allMdx(filter: {frontmatter: {type: {eq: "Event"}}}) {
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
      }
    }
  }
}
`;

const Events = ({ data, pageContext }) => {
  const [theme, setTheme] = useState("light");

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>Hello there</div>;
  }
  return (
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Events" description="Join Layer5 at upcoming events." />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <Meetups data={data} pageContext={pageContext} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default Events;
