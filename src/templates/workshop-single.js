import React, { useState } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Footer from "../sections/General/Footer";



import WorkshopSinglePage from "../sections/Learn/Workshop-single/index";

export const query = graphql`query WorkshopBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      title
      date(formatString: "MMMM Do, YYYY")
      slack
      abstract
      status
      labs
      video
      eurl
      thumbnail {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
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
`;

const WorkshopSingle = ({ data }) => {
  const [theme, setTheme] = useState();

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (

    <Layout>


      <WorkshopSinglePage frontmatter={data.mdx.frontmatter} body={data.mdx.body} />
      <Footer />
    </Layout>

  );
};

export default WorkshopSingle;

export const Head = ({ data }) => {
  return  <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.thumbnail.publicURL} />;
};