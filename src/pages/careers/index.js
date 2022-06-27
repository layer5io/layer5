import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import CareersSection from "../../sections/Careers";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const Careers = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Careers" description="Careers at Layer5. Come work with the  the award-winning, Layer5 open source community and projects." />
      <Navigation />
      <CareersSection />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default Careers;
