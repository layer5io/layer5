import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";
import MesheryTerminal from "../../../sections/Meshery/Meshery-terminal";
import MesheryPlatforms from "../../../sections/Meshery/Meshery-platforms";
import MesheryManageMesh from "../../../sections/Meshery/Meshery-mange-mesh";
import MesheryQuotes from "../../../sections/Meshery/Meshery-quotes";
import { GlobalStyle } from "../../../sections/app.style";
import { darktheme } from "../../../theme/app/themeStyles";
import lighttheme from "../../../theme/app/themeStyles";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useState } from "react";
const MesheryMainPage = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (cookies.Theme !== undefined)
      setTheme(cookies.Theme);
  }, []);
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  return (
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Meshery Getting Started"
          description="How to get started with any service mesh. Adopting and operating a service mesh."
          image="/images/meshery-logo-dark-text.png"/>
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <MesheryTerminal/>
        <MesheryPlatforms/>
        <MesheryManageMesh/>
        <MesheryQuotes/>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default MesheryMainPage;
