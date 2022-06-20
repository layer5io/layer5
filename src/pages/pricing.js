import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme/app/themeStyles";
import { GlobalStyle } from "../sections/app.style";

import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import Layout from "../components/layout";
import PricingPage from "../sections/Pricing";

const Pricing = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Pricing" description="Layer5 Pricing" />
      <Navigation />
      <PricingPage />
      <Footer />
    </Layout>
  </ThemeProvider>
);
export default Pricing;
