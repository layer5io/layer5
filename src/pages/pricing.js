import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";
import { GlobalStyle } from "../sections/app.style";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import Layout from "../components/layout";
import PricingPage from "../sections/Pricing";

const Pricing = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <PricingPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default Pricing;

export const Head = () => {
  return  <SEO title="Pricing" description="Layer5 Pricing" />;
};