import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import MesheryTerminal from "../../../sections/Meshery/Meshery-terminal";
import Navigation from "../../../sections/General/Navigation";
import { GlobalStyle } from "../../../sections/app.style";
import { darktheme } from "../../../theme/app/themeStyles";
import lighttheme from "../../../theme/app/themeStyles";
import loadable from "@loadable/component";

const MesheryPlatforms = loadable(() => import ("../../../sections/Meshery/Meshery-platforms"));
const MesheryManageMesh = loadable(() => import ("../../../sections/Meshery/Meshery-mange-mesh"));
const MesheryQuotes = loadable(() => import ("../../../sections/Meshery/Meshery-quotes"));
const Footer = loadable(() => import ("../../../sections/General/Footer"));

const MesheryMainPage = () => {
  const [theme, setTheme] = useState();

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Meshery Getting Started"
          description="How to get started with cloud native management. Adopting and operating your cloud native infrastructure."
          image="/images/meshery-logo-dark-text.png" />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <MesheryTerminal />
        <MesheryPlatforms />
        <MesheryManageMesh />
        <MesheryQuotes />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default MesheryMainPage;
