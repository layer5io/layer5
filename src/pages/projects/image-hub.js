import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import ImageHubPage from "../../sections/Projects/Image-Hub";
import Footer from "../../sections/General/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";
import seoimage from "../../assets/images/image-hub/layer5-image-hub.png";

const ImageHub = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Image Hub" description="Image Hub is a sample application written to run on Consul for exploring WebAssembly modules used as Envoy filters." image={seoimage} />
      <Navigation />
      <ImageHubPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default ImageHub;