import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import RepoPage from "../../../sections/Community/Handbook/repository";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";


const CommunityRepository = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Repository Overview" description="A brief introduction to all of the Github repositories of Layer5 organization." />
      <Navigation />
      <RepoPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default CommunityRepository;