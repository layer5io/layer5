import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/app/themeStyles";
import { GlobalStyle } from "../../sections/app.style";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import Layout from "../../components/layout";
import Meshmates from "../../sections/Community/Meshmates";
import seoImage from "../../assets/images/meshmate/meshmate-icon.png";

const MeshmatePage=() => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Meshmates"
          description="MeshMates - the Layer5 contributor onboarding program.
                MeshMates is a collection of cloud native mentors."
          image={seoImage}/>
        <Navigation />
        <Meshmates />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default MeshmatePage;
