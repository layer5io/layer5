import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import InternshipPage from "../../sections/Careers/Careers-Internship-grid";

import { GlobalStyle } from "../../sections/app.style";
import { darktheme }from "../../theme/app/themeStyles";
import lighttheme from "../../theme/app/themeStyles";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useState } from "react";

const Internships = () =>  {
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
        <SEO title="Open Source Internship Programs" description="The Service Mesh Community at Layer5 - Learn, Share, Engage.
  Join the largest collection of service mesh projects and their maintainers in the world." />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <InternshipPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default Internships;
