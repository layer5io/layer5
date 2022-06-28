import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import LearnPage from "../../../sections/Community/Handbook/learn5";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";


const CommunityLearn = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Learn Layer5" description="We have put together good learning materials and resources to guide you through learning about cloud native infrastucture." />
      <Navigation />
      <LearnPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default CommunityLearn;