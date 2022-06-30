import React, { useState } from "react";
import {ThemeProvider} from "styled-components";

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
  return(
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <GlobalStyle />
      <SEO title="MeshMap" description="An extension plugin to Meshery" />
      <Layout>
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <Meshmap />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default MeshmapPage;