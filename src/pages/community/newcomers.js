import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/app/themeStyles";
import { GlobalStyle } from "../../sections/app.style";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import Layout from "../../components/layout";
import NewcomersGuide from "../../sections/Community/Newcomers-guide";

const newComers = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Newcomers" description="Contributions from Newcomers are actively encouraged in Layer5. Find a Meshmate and start contributing!" />
        <Navigation />
        <NewcomersGuide />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default newComers;
