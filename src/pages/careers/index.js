import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import Careers from "../../sections/Careers";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const careers = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Careers" />
      <Navigation />
      <Careers />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default careers;
