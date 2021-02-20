import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import SMIPage from "../../sections/Projects/SMI";
import Footer from "../../sections/General/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";
import seoimage from "../../assets/images/service-mesh-icons/service-mesh-interface/icon/color/servicemeshinterface-icon-color.png";

const SMI = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Service Mesh Interface (SMI)" description="Layer5 is the maker of Meshery and Service Mesh Performance (SMP) and maintainers of Service Mesh Interface (SMI).
  We are the largest collection of service mesh projects and their maintainers in the world. 
  Contact Layer5 for help with operating a service mesh." image={seoimage} />
      <Navigation />
      <SMIPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default SMI;
