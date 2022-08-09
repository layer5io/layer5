import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../sections/app.style";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Partner from "../sections/Partners";
import Footer from "../sections/General/Footer";
import Layout from "../components/layout";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";

const Partners = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Partners" description="Partner Program" />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <Partner theme={theme} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default Partners;
