import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme/app/themeStyles";
import { GlobalStyle } from "../sections/app.style";

import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import Layout from "../components/layout";
import Partner from "../sections/Partners";

const Partners = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Partners" description="Partner Program" />
      <Navigation />
      <Partner />
      <Footer />
    </Layout>
  </ThemeProvider>
);
export default Partners;
