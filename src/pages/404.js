import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/General/Navigation";
import L404 from "../sections/404";
import Footer from "../sections/General/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="What a mesh!" />
      <Navigation />
      <L404 />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default NotFoundPage;
