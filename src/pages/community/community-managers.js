import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/app/themeStyles";
import { GlobalStyle } from "../../sections/app.style";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import Layout from "../../components/layout";
import CommunityManagers from "../../sections/Community/CommunityManagers";
import seoImage from "../../assets/images/meshmate/meshmate-icon.png";


const ManagersPage=() => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Managers"
          description="Layer5 Community Managers have an innate drive to contribute to the community's prosperity and that of our individual contributors' prosperity."
          image={seoImage}/>
        <Navigation />
        <CommunityManagers />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default ManagersPage;
