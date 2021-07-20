import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import FAQ from "../../sections/General/Faq";
import Footer from "../../sections/General/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";
import JoinCommunity from "../../sections/Community/Join-community";
import Lee_workshop from "../../sections/Community/Lee_Workshop.png"

const FAQPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="FAQs" description="Frequently Asked Questions" />
      <Navigation />
      <FAQ category = {["all"]} />
      <JoinCommunity image={Lee_workshop} className="newcomers-faq-join"/>
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default FAQPage;
