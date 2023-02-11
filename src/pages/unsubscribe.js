import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../sections/app.style";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import Layout from "../components/layout";
import ContactUnSubscribeSection from "../components/ContactCard-unsubscribe";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";

const UnSubscribeSection = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <ContactUnSubscribeSection />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default UnSubscribeSection;

export const Head = () => {
  return <SEO title="Layer5 Newsletter" description="Layer5 Newsletter" />;
};