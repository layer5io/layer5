import React from "react";
import { graphql } from "gatsby";

import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import MemberSingle from "../sections/Community/Member-single";
import Footer from "../sections/General/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

export const query = graphql`
    query MemberBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            frontmatter {
                name
                position
                github
                twitter
                meshmate
                linkedin
                location
                badges
                bio
                image_path{
                    childImageSharp{
                        fluid(maxWidth: 500){
                            ...GatsbyImageSharpFluid
                        }
                    }
                    extension
                    publicURL
                }
            }
        }
    }
`;

const MemberSinglePage = ({data}) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title={data.mdx.frontmatter.name} />
        <Navigation />
        <MemberSingle frontmatter={data.mdx.frontmatter}/>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default MemberSinglePage;

