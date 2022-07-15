import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";
import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";
import MesheryIntegration from "../../../sections/Meshery/Meshery-integrations";

function integrations() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO
        title="Meshery Integrations Collection"
        description="A collection of supported Meshery Integrations."
      />
      <Layout>
        <Navigation />
        <MesheryIntegration />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default integrations;
