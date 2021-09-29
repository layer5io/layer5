import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import LeadershipPage from "../../../sections/Community/Handbook/leadership";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";


const ContributorLadder = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Contributor Ladder" description="The purpose of the handbook is to provide an overview of the Layer5 community" />
      <Navigation />
      <LeadershipPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default ContributorLadder;