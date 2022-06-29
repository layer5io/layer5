import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import FAQ from "../../sections/General/Faq";
import ProgramsGrid from "../../sections/Careers/Careers-Programs-grid";

import { GlobalStyle } from "../../sections/app.style";

import { darktheme } from "../../theme/app/themeStyles";
import lighttheme from "../../theme/app/themeStyles";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useState } from "react";
const CareerPrograms = () => {
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
        <SEO title="Open Source Internship Programs" description="Engage, Learn, Share. Join the award-winning, Layer5 open source community and projects." />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <ProgramsGrid />
        <FAQ category = {["internships"]} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default CareerPrograms;
