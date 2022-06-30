import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import InternshipPage from "../../sections/Careers/Careers-Internship-grid";

import { GlobalStyle } from "../../sections/app.style";
import { darktheme } from "../../theme/app/themeStyles";
import lighttheme from "../../theme/app/themeStyles";


const Internships = () =>  {
  const [theme, setTheme] = useState("light");
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  return (
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Internship, Part-time, and Full-time Opportunities with Layer5" description="Engage, Learn, Share. Join the award-winning, Layer5 open source community and projects." />

        <Navigation theme={theme} themeSetter={themeSetter}/>
        <InternshipPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default Internships;
