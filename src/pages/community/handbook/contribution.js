import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import ContributingPage from "../../../sections/Community/Handbook/contributing";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import { darktheme } from "../../../theme/app/themeStyles";
import lighttheme from "../../../theme/app/themeStyles";

const Contributing = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Contribution" description="A detailed contribution guide." />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <ContributingPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default Contributing;