import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import LearnPage from "../../sections/Learn";
import Footer from "../../sections/General/Footer";
import { GlobalStyle } from "../../sections/app.style";
import { darktheme } from "../../theme/app/themeStyles";
import lighttheme from "../../theme/app/themeStyles";
import { useState } from "react";

const LearnGridPage = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lighttheme : darktheme}>
      <Layout>
        <GlobalStyle />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <LearnPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default LearnGridPage;

export const Head = () => {
  return  <SEO title="Learn Service Mesh"
    description="Learn Service Meshes: Istio, Linkerd, Envoy, Consul, Open Service Mesh, Traefik Mesh, Kuma, AWS App Mesh, Citrix, VMware Tanzu Service Mesh"
    image="/images/workshops.png" />;
};