import React, { useState } from "react";

import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";

import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import { GlobalStyle } from "../sections/app.style";
import DeployServiceMesh from "../sections/Deploy Service Mesh/index";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";
const DeployServiceMeshPage = () => {
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
      <GlobalStyle />
      <SEO title="when should i deploy service mesh" description="when should i deploy service mesh question form." />
      <Layout>
        <Navigation theme={theme} themeSetter={themeSetter} />
        <DeployServiceMesh />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default DeployServiceMeshPage;
