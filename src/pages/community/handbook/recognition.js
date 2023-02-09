import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import RecognitionPage from "../../../sections/Community/Handbook/recognition";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import { darktheme } from "../../../theme/app/themeStyles";
import lighttheme from "../../../theme/app/themeStyles";



const Recognition = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <RecognitionPage theme={theme} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default Recognition;

export const Head = () => {
  return <SEO title="Recognizing and Appreciating Open Source Community Members" description="Layer5 readily recognizes and publicly appreciates its community members." />;

};