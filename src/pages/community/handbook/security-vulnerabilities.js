import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import SecurityVulnerabilitiesPage from "../../../sections/Community/Handbook/security-vulnerabilities";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import { darktheme } from "../../../theme/app/themeStyles";
import lighttheme from "../../../theme/app/themeStyles";


const SecurtyVulnerabilities = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <SecurityVulnerabilitiesPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default SecurtyVulnerabilities;

export const Head = () => {
  return <SEO title="Securty Vulnerabilities" description="Reporting a vulnerability" />;
};