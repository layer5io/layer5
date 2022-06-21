import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import LeadershipPage from "../../../sections/Community/Handbook/community-roles";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";


const ContributorJourney = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Contributor Journey" description="Description of the different roles in the Layer5 community" />
      <Navigation />
      <LeadershipPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default ContributorJourney;