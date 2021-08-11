import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../components/layout";

import SEO from "../../components/seo";
import RepoPage from "../../sections/Community/Handbook/repository";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";


const Repository = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Repository Overview" description="The purpose of the handbook is to provide an overview of the Layer5 community" />
      <Navigation />
      <RepoPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default Repository;