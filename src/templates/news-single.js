import React, { useState } from "react";
import { graphql } from "gatsby";



import Layout from "../components/layout";
import SEO from "../components/seo";


import NewsSingle from "../sections/Company/News-single";
import Footer from "../sections/General/Footer";





export const query = graphql`query NewsBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      title
      subtitle
      date(formatString: "MMMM Do, YYYY")
      author
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
`;

const NewsSinglePage = ({ data }) => {
  const [theme, setTheme] = useState();

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (

    <Layout>


      <NewsSingle data={data} />
      <Footer />
    </Layout>

  );
};

export default NewsSinglePage;

export const Head = ({ data }) => {
  return  <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.thumbnail.publicURL} />;
};