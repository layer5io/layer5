import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import AboutPage from "../../../sections/Community/Handbook/contributor-journey";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import { darktheme } from "../../../theme/app/themeStyles";
import lighttheme from "../../../theme/app/themeStyles";


const CommunityAbout = () => {
  const [theme, setTheme] = useState("light");
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  return (
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Community Handbook" description="Instructions to encourage and support first-time open-source contributors." />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <AboutPage />
        <Footer/>
      </Layout>
    </ThemeProvider>
  );
};
export default CommunityAbout;