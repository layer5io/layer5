import React from "react";
import { graphql } from "gatsby";



import Layout from "../components/layout";
import SEO from "../components/seo";


import ProgramsSingle from "../sections/Careers/Careers-Programs-single";
import Footer from "../sections/General/Footer";





export const query = graphql`
    query ProgramBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
            }
        }
    }
`;

const ProgramSinglePage = ({ data }) => {


  return (

    <Layout>


      <ProgramsSingle data={data.mdx} />
      <Footer />
    </Layout>

  );
};

export default ProgramSinglePage;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} />;
};