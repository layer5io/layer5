import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import AboutPage from "../../../sections/Community/Handbook/contributor-journey";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";


const CommunityAbout = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Community Handbook" description="Instructions to encourage and support first-time open-source contributors." />
      <Navigation />
      <AboutPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default CommunityAbout;