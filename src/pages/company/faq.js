import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import FAQ from "../../sections/General/Faq";
import Footer from "../../sections/General/Footer";
import DiscussCallout from "../../sections/Discuss-Callout";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const FAQPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="FAQs" description="Frequently Asked Questions" />
      <Navigation />
      <FAQ category = {["all"]} />
      <DiscussCallout />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default FAQPage;
