import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import Community from "../../sections/Community";

import { GlobalStyle } from "../../sections/app.style";
import lighttheme from "../../theme/app/themeStyles";
import { darktheme } from "../../theme/app/themeStyles";


const CommunityIndex = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lighttheme : darktheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Cloud Native, Kubernetes, and Service Mesh Community"
          description="The Cloud Native Management Community at Layer5 - Learn, Share, Engage.
           Join the award-winning open source community - the warmest and most welcoming open source community around."
        />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <Community theme={theme} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default CommunityIndex;
