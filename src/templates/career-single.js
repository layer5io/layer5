import React from "react";
import { graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import CareerSingle from "../sections/Careers/Career-single";
import Footer from "../sections/General/Footer";
import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

export const query = graphql`
    query CareerBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title,
                type,
                location,
                start_date,
                duration,
                salary,
                apply_by
            }
        }
    }
`;

const CareerSinglePage = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title={data.mdx.frontmatter.title} />
        <Navigation />
        <CareerSingle data={data}/>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default CareerSinglePage;

