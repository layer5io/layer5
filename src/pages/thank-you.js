import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../sections/app.style";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import Layout from "../components/layout";
import ThankYou from "../sections/thank-you/thank-you";

const ThankYouSection = () => {
  const [theme, setTheme] = useState("light");
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  return(
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Service Mesh Newsletter" description="The Service Mesh Newsletter" />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <ThankYou />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default ThankYouSection;
