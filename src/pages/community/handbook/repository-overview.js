import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import RepoPage from "../../../sections/Community/Handbook/repository";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import { darktheme } from "../../../theme/app/themeStyles";
import lighttheme from "../../../theme/app/themeStyles";


const CommunityRepository = () => {
  const [theme, setTheme] = useState();

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Repository Overview" description="A brief introduction to all of the Github repositories of Layer5 organization." />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <RepoPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default CommunityRepository;