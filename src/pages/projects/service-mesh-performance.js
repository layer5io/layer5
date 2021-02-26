import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import SMPPage from "../../sections/Projects/SMP";
import Footer from "../../sections/General/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";
import seoimage from "../../assets/images/service-mesh-performance/icon/smp-dark.png";

const SMP = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Service Mesh Performance (SMP)" description="Measuring and indexing the performance, overhead, and value of the world's service mesh deployments." image={seoimage} />
      <Navigation />
      <SMPPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default SMP;
