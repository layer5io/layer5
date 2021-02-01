import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import Careers from "../../sections/Careers";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const careers = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Careers" description="Careers at Layer5. Come work with the largest collection of service mesh projects and their maintainers in the world." />
      <Navigation />
      <Careers />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default careers;
