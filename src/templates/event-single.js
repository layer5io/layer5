import React, { useState } from "react";
import { graphql } from "gatsby";



import Layout from "../components/layout";


import EventSingle from "../sections/Community/Event-single";
import Footer from "../sections/General/Footer";
import LearnServiceMeshCTA from "../sections/Learn/Learn-Service-Mesh-CTA";
import Subscribe from "../sections/subscribe/subscribe";





import SEO from "../components/seo";

export const query = graphql`query EventsBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      attribute {
        name
        url
      }
      eurl
      title
      type
      speakers
      register
      date(formatString: "MMM Do, YYYY")
      thumbnail {
        publicURL
        relativePath
        extension
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
}
`;

const EventSinglePage = ({ data }) => {
  const [theme, setTheme] = useState();

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (

    <Layout>


      <EventSingle data={data} />
      <LearnServiceMeshCTA />
      <Subscribe />
      <Footer />
    </Layout>

  );
};

export default EventSinglePage;


export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.thumbnail.publicURL} />;
};