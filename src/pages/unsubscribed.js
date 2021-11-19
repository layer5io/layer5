import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme/app/themeStyles";
import { GlobalStyle } from "../sections/app.style";

import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import Layout from "../components/layout";
import Unsubscribed from "../sections/unsubscribed/unsubscribed";

const UnsubscribedSection = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Service Mesh Newsletter" description="The Service Mesh Newsletter" />
      <Navigation />
      <Unsubscribed />
      <Footer />
    </Layout>
  </ThemeProvider>
);
export default UnsubscribedSection;
