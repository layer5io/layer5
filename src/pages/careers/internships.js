import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import InternshipPage from "../../sections/Careers/Careers-Internship-grid";

import { GlobalStyle } from "../../sections/app.style";
import darktheme from "../../theme/app/darkThemeStyles";
import lighttheme from "../../theme/app/themeStyles";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useState } from "react";

const Internships = () =>  {
  const [cookies, setCookie] = useCookies(["user"]);
  const [theme, setTheme] = useState(cookies.Theme);
  const [themeToggle, setthemeToggle] = useState("");
  const handle = () => {
    theme === "light" ? setthemeToggle(false) : setthemeToggle(true);
    setCookie("Theme", theme, { path: "/" });
  };
  useEffect(() => {
    
    handle();
  }, [theme]);
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return(
    <ThemeProvider theme={theme === "light" ? lighttheme : darktheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Open Source Internship Programs" description="The Service Mesh Community at Layer5 - Learn, Share, Engage.
  Join the largest collection of service mesh projects and their maintainers in the world." />
        <Navigation theme={theme} themeToggler={themeToggler} themeToggle={themeToggle}/>
        <InternshipPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default Internships;
