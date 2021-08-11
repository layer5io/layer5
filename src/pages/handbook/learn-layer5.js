import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../components/layout";

import SEO from "../../components/seo";
import LearnPage from "../../sections/Community/Handbook/learn5";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";


const Learn = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Learn Layer5" description="The purpose of the handbook is to provide an overview of the Layer5 community" />
      <Navigation />
      <LearnPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default Learn;