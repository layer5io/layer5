import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import { GlobalStyle } from "../sections/app.style";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";
import WebBasedForm from "../sections/Community/Web-based-from";

const NewcomersPage = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <GlobalStyle />
      <SEO title="Layer5 Community Member Form" description="New member form for Layer5 community members: contributors, users and visitors" image="/images/layer5-community-sign.png" />
      <Layout>
        <Navigation theme={theme} themeSetter={themeSetter} />
        <WebBasedForm />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default NewcomersPage;
