import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import SMPPage from "../../sections/Projects/SMP";
import Footer from "../../sections/General/Footer";

import { GlobalStyle } from "../../sections/app.style";
import lighttheme from "../../theme/app/themeStyles";
import { darktheme } from "../../theme/app/themeStyles";


const SMP = () => {
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
    return <div style={{ visibility: "hidden" }}>Prevent Flash</div>;
  }
  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Service Mesh Performance (SMP)"
          description="Measuring and indexing the performance, overhead, and value of the world's service mesh deployments."
          image="/images/smp-dark.png" />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <SMPPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default SMP;
