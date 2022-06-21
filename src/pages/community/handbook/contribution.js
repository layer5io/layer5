import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import ContributingPage from "../../../sections/Community/Handbook/contributing";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";


const Contributing = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Contribution" description="A detailed contribution guide." />
      <Navigation />
      <ContributingPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default Contributing;