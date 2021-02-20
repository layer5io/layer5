import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme/app/themeStyles";
import { GlobalStyle } from "../sections/app.style";

import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import Layout from "../components/layout";
import Subscribe from "../sections/subscribe/subscribe";

const SubscribeSection = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Service Mesh Newsletter" description="The Service Mesh Newsletter" />
      <Navigation />
      <Subscribe />
      <Footer />
    </Layout>
  </ThemeProvider>
);
export default SubscribeSection;
