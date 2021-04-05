import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import Community from "../../sections/Community";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const community = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Service Mesh Community"
        description="The Service Mesh Community at Layer5 - Learn, Share, Engage.
           Join the largest collection of service mesh projects and their maintainers in the world."
        image="/images/layer5-tag-community-dark-bg.png" />
      <Navigation />
      <Community />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default community;
