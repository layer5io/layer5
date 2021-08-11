import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../components/layout";

import SEO from "../../components/seo";
import ConnectPage from "../../sections/Community/Handbook/connect";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";


const Connect = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Community Handbook" description="The purpose of the handbook is to provide an overview of the Layer5 community" />
      <Navigation />
      <ConnectPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default Connect;