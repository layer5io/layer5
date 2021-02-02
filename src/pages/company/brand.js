import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import Brand from "../../sections/Company/Brand";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const BrandPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <SEO title="Brand Kits" description="Layer5 brand kits with logos, color schemes, and approved usage of Meshery, Image Hub, and other Layer5 projects" />
      <Navigation />
      <Brand />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default BrandPage;
