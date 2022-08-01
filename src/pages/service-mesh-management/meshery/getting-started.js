import React, { useState } from "react";
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

const MesheryMainPage = () => {
  const [theme, setTheme] = useState();

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>Prevent Flash</div>;
  }
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
