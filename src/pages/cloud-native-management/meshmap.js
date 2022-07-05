import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";

import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import { GlobalStyle } from "../../sections/app.style";
import { darktheme } from "../../theme/app/themeStyles";
import lighttheme from "../../theme/app/themeStyles";
import Meshmap from "../../sections/Meshmap/index";

const MeshmapPage = () => {
  const [theme, setTheme] = useState("light");
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>Hello there</div>;
  }
  return (
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <GlobalStyle />
      <SEO title="MeshMap" description="Collaboratively design and manage your Kubernetes clusters, service mesh deployments, and cloud native apps. Confidently configure your systems with MeshMap's visual topology and built-in design patterns." />
      <Layout>
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <Meshmap />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default MeshmapPage;
