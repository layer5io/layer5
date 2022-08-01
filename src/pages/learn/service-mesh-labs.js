import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import ServiceMeshLabs from "../../sections/Learn/Service-Mesh-Labs";

import { GlobalStyle } from "../../sections/app.style";
import lighttheme from "../../theme/app/themeStyles";
import { darktheme } from "../../theme/app/themeStyles";


const ServiceMeshLabsPage = (props) => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (props.location.state && props.location.state.selectedIndex) {
      setSelectedIndex(props.location.state.selectedIndex);
    }
  }, []);
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
        <SEO title="Interactive DevOps, GitOps, and Cloud Native Labs" description="Learn to manage Kubernetes and Istio with experts from Layer5. Try an interactive service mesh lab." />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <ServiceMeshLabs selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default ServiceMeshLabsPage;
