import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/blog/themeStyles";
import { GlobalStyle } from "../../sections/app.style";

import SEO from "../../components/seo";
import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import Layout from "../../components/layout";
import MembersGrid from "../../sections/Members-grid";
import { graphql } from "gatsby";

export const query = graphql`
    query allMembers {
        allMdx(
            filter: { fields: { collection: { eq: "members" } } }
        ) {
            nodes {
                id
                frontmatter {
                    name
                    position
                    github
                    twitter
                    status
                    image_path{
                        childImageSharp{
                            fluid(maxWidth: 200){
                                ...GatsbyImageSharpFluid
                            }
                        }
                        extension
                        publicURL
                    }
                }
            }
        }
    }
`;


const MembersPage = ({data}) => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Members | Layer5 - The Service Mesh Company" />
            <Navigation />
            <MembersGrid data={data}/>
            <Footer/>
        </Layout>
    </ThemeProvider>
);

export default MembersPage;
