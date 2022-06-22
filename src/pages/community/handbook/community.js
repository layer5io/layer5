import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import CommunityPage from "../../../sections/Community/Handbook/community";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";


const Community = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Community" description="Community guidelines" />
      <Navigation />
      <CommunityPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default Community;