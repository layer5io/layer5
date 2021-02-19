import React from "react";
import { graphql } from "gatsby";

import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";

import Navigation from "../sections/General/Navigation";
import EventSingle from "../sections/Community/Event-single";
import Footer from "../sections/General/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

import SEO from "../components/seo";

export const query = graphql`
      query EventsBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
                body
                frontmatter {
                    attribute{
                        name
                        url
                    }
                    eurl
                    title
                    topic
                    speakers
                    date(formatString: "MMM Do, YYYY")
                    thumbnail {
                        publicURL
                        relativePath
                        extension
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            
        }
    }
`;

const EventSinglePage = ({data}) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title={`${data.mdx.frontmatter.title}`} />
        <Navigation />
        <EventSingle data={data}/>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default EventSinglePage;

