import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import Writers from "../../../sections/Community/Handbook/writing-program";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import { darktheme } from "../../../theme/app/themeStyles";
import lighttheme from "../../../theme/app/themeStyles";


const Faq = () => {
  const [theme, setTheme] = useState();

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Writing Program" description="Work with authors and technologists from around the world to share your knowledge of cloud native infrastructure, modern application management, Kubernetes, service meshes and related technologies." />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <Writers />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default Faq;