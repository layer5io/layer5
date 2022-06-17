import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import LearnPathsPage from "../../sections/Learn-Layer5";
import Footer from "../../sections/General/Footer";
import { useState } from "react";
import { GlobalStyle } from "../../sections/app.style";
import lighttheme from "../../theme/app/themeStyles";
import darktheme from "../../theme/app/darkThemeStyles";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

const LearningPathsPage = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if(cookies.Theme !== undefined)
      setTheme(cookies.Theme);
  }, []);
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  return (
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Learn Service Mesh"
          description="Learn to build an application using service meshes like Istio, Linkerd"
          image="/images/workshops.png" />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <LearnPathsPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default LearningPathsPage;
