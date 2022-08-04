import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import Navigation from "../../../sections/General/Navigation";
import MesheryOperatorPage from "../../../sections/Meshery/meshery-operator";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import { darktheme } from "../../../theme/app/themeStyles";
import lighttheme from "../../../theme/app/themeStyles";

const MesheryOperator = () => {
  const [theme, setTheme] = useState();

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Meshery Operator"
          description="Meshery Operator is the multi-service mesh operator that manages MeshSync and it’s messaging broker."
          image="/images/meshery-operator.png" />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <MesheryOperatorPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default MesheryOperator;
