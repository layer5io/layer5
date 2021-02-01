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
      <SEO title="Service Mesh Interface (SMI)" description="Layer5 is the maker of Meshery and Service Mesh Performance (SMP) and maintainers of Service Mesh Interface (SMI).
  We are the largest collection of service mesh projects and their maintainers in the world. 
  Contact Layer5 for help with operating a service mesh." />
      <Navigation />
      <SMIPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default SMI;
