import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../sections/app.style";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import Layout from "../../components/layout";
import Meshmates from "../../sections/Community/Meshmates";
import seoImage from "../../assets/images/meshmate/meshmate-icon.png";
import { darktheme } from "../../theme/app/themeStyles";
import lighttheme from "../../theme/app/themeStyles";

const MeshmatePage = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Meshmates"
          description="MeshMates - the Layer5 contributor onboarding program.
          MeshMates is a collection of cloud native mentors."
          image={seoImage} />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <Meshmates theme={theme} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default MeshmatePage;
