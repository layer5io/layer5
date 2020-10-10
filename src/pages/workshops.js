import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

import Navigation from "../sections/Navigation";
import WorkshopsPage from "../sections/Workshop-grid";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/blog/themeStyles";

export const query = graphql`
  query allWorkshops {
    allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { collection: { eq: "workshops" } }, frontmatter: { status: { eq: "delivered" } } }
    ) {
        nodes {
            id
            frontmatter {
              title
              slack
              slides
              eurl
              labs
              abstract
              video
              date(formatString: "YYYY MMMM DD")
              thumbnail{
                childImageSharp{
                    fluid(maxWidth: 1000){
                        ...GatsbyImageSharpFluid_withWebp
                    }
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
`;

const WorkshopsGridPage = ({data}) => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Workshops | Layer5 - The Service Mesh Company" />
            <Navigation />
            <WorkshopsPage data={data}/>
            <Footer/>
        </Layout>
    </ThemeProvider>
);
export default WorkshopsGridPage;
