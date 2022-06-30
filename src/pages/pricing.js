import React from "react";
import { ThemeProvider } from "styled-components";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { GlobalStyle } from "../sections/app.style";
import { useState } from "react";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import Layout from "../components/layout";
import PricingPage from "../sections/Pricing";

const Pricing = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if(cookies.Theme !== undefined)
      setTheme(cookies.Theme);
  }, []);
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  return(
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Pricing" description="Layer5 Pricing" />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <PricingPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default Pricing;
