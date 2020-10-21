import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { graphql } from "gatsby";

import Navigation from "../../sections/Navigation";
import Meetups from "../../sections/Events";
import Footer from "../../sections/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/blog/themeStyles";

export const query = graphql`
query  {
    meetups: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { collection: { eq: "meetups" } } }
    ) {
        nodes {
            id
            frontmatter {
                title
                date(formatString: "Do MMMM YYYY")
                eurl
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
    events: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { collection: { eq: "events" } } }
    ) {
        nodes {
            id
            frontmatter {
                title
                date(formatString: "Do MMMM YYYY")
                eurl
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

const EventsGrid = ({data}) => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Events | Layer5 - The Service Mesh Company" />
            <Navigation />
            <Meetups data={data}/>
            <Footer/>
        </Layout>
    </ThemeProvider>
);
export default EventsGrid;
