import React from "react";
import {ThemeProvider} from "styled-components";

import Layout from "../components/layout";

import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import { GlobalStyle } from "../sections/app.style";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import WebBasedForm from "../sections/Community/Web-based-from";
import { useState } from "react";
const NewcomersPage = () => {
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
      <GlobalStyle />
      <SEO title="Layer5 Community Member Form" description="Layer5 newcomers form for contributors, users and visitors" image="/images/community.png" />
      <Layout>
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <WebBasedForm />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default NewcomersPage;
