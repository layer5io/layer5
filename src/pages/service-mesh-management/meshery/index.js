import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import Navigation from "../../../sections/General/Navigation";
import MesheryPage from "../../../sections/Meshery";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import { darktheme } from "../../../theme/app/themeStyles";
import lighttheme from "../../../theme/app/themeStyles";


const Meshery = () => {
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
        <SEO title="Meshery"
          description="Lifecycle, performance, and configuration management for Istio, Linkerd, Envoy, App Mesh, Consul Connect, Network Service Mesh, Citrix CPX, VMware Tanzu Service Mesh,
                 Traefik Mesh, Cilium Service Mesh, Open Service Mesh, and Kuma.
                Service mesh comparison. Service mesh patterns and best practices."
          image="/images/meshery-logo-dark-text.png" />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <MesheryPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default Meshery;
