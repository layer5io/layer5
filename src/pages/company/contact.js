import React, { useState } from "react";

import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";

import { GlobalStyle } from "../../sections/app.style";
import { darktheme } from "../../theme/app/themeStyles";
import lighttheme from "../../theme/app/themeStyles";

import ContactPage from "../../sections/Company/Contact";

const Contact = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <ContactPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default Contact;

export const Head = () => {
  return <SEO title="Contact" description="Contact Layer5 for help managing your cloud native infrastructre and apps. Layer5 is the maker of Meshery and service mesh standards." />;
};