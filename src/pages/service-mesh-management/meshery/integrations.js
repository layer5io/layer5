import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";
import { GlobalStyle } from "../../../sections/app.style";
import lighttheme, { darktheme } from "../../../theme/app/themeStyles";
import MesheryIntegration from "../../../sections/Meshery/Meshery-integrations";

const Integrations = () => {
  const [theme, setTheme] = React.useState();

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <GlobalStyle />
      <SEO title="Meshery Integrations"
        description="A collection of supported Meshery Integrations."
      />
      <Layout>
        <Navigation theme={theme} themeSetter={themeSetter} />
        <MesheryIntegration />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default Integrations;
