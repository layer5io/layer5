import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import Faqs from "../../../sections/Community/Handbook/faq";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";


const Faq = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="FAQ" description="Frequently Asked Questions" />
      <Navigation />
      <Faqs />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default Faq;