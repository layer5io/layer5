import React, { useState } from "react";
import { graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import { GlobalStyle } from "../sections/app.style";
import lighttheme, { darktheme } from "../theme/app/themeStyles";
import { MDXRenderer } from "gatsby-plugin-mdx";
import CTA from "../components/Call-To-Actions/CTA_Book";
import RelatedIntegration from "../sections/Meshery/Meshery-integrations/relatedIntegration";
import FAQ from "../sections/Meshery/Meshery-integrations/faq";

export const query = graphql`
  query IntegrationsBySlug($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        faqQues
        faqAns
      }
    }
  }
`;
const IntegrationsList = ({ data }) => {
  console.log(data.mdx.frontmatter.sliderImg_1);
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  console.log(data.mdx.frontmatter.faqs);

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title={data.mdx.frontmatter.title} />
        <Navigation
          theme={theme}
          themeSetter={themeSetter}
        />
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <RelatedIntegration category="Platforms" />
        <FAQ questions={data.mdx.frontmatter.faqQues} answers={data.mdx.frontmatter.faqAns}/>
        <CTA />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default IntegrationsList;
