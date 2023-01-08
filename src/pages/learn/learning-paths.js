import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import LearnPathsPage from "../../sections/Learn-Layer5";
import Footer from "../../sections/General/Footer";
import { GlobalStyle } from "../../sections/app.style";
import lighttheme from "../../theme/app/themeStyles";
import { darktheme } from "../../theme/app/themeStyles";


const LearningPathsPage = () => {
  const [theme, setTheme] = useState();

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <LearnPathsPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default LearningPathsPage;


export const Head = () => {
  return <SEO title="DevOps, GitOps, and Cloud Native Learning Paths"
    description="Learn to build an application using service meshes like Istio, Linkerd"
    image="/images/workshops.png" />;
};