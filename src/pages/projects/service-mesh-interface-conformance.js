import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import SMIPage from "../../sections/SMI";
import Footer from "../../sections/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const SMI = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="SMI" />
      <Navigation />
      <SMIPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default SMI;
