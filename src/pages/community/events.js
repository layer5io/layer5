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
    {
        allCategories: allMdx(
                filter: {fields: {collection: {eq: "events"}}},
                sort: {fields: frontmatter___date, order: DESC},
                limit: 12
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
                    date(formatString: "DD MMMM YYYY")
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
        allMeetups: allMdx(filter: {frontmatter: {topic: {eq: "meetups"}}}) {
            nodes {
                id
                fields {
                    slug
                }
                frontmatter {
                    abstract
                    eurl
                    title
                    date(formatString: "Do MMMM YYYY")
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
        allWorkshops: allMdx(filter: {frontmatter: {topic: {eq: "workshop"}}}) {
            nodes {
                id
                fields {
                    slug
                }
                frontmatter {
                    abstract
                    eurl
                    title
                    date(formatString: "Do MMMM YYYY")
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
        allEvents: allMdx(filter: {frontmatter: {topic: {eq: "event"}}}) {
            nodes {
                id
                fields {
                    slug
                }
                frontmatter {
                    abstract
                    eurl
                    title
                    date(formatString: "Do MMMM YYYY")
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
    }
`;

const EventsGrid = ({data}) => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Events" />
            <Navigation />
            <Meetups data={data}/>
            <Footer/>
        </Layout>
    </ThemeProvider>
);
export default EventsGrid;
