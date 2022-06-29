import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";

import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";
import Meshmap from "../../sections/Meshmap/index";

const MeshmapPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SEO title="MeshMap" description="An extension plugin to Meshery" />
    <Layout>
      <Navigation />
      <Meshmap />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default MeshmapPage;