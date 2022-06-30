import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import WorkshopsPage from "../../sections/Learn/Workshop-grid";
import Footer from "../../sections/General/Footer";
import { GlobalStyle } from "../../sections/app.style";
import { useState } from "react";
import lighttheme from "../../theme/app/themeStyles";
import { darktheme } from "../../theme/app/themeStyles";
import { useCookies } from "react-cookie";
import { useEffect } from "react";


const WorkshopsGridPage = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (cookies.Theme !== undefined)
      setTheme(cookies.Theme);
  }, []);
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  return (
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Service Mesh Workshops" description="Service mesh workshops and tutorials for Istio, Envoy, Linkerd, Consul, App Mesh, Open Service Mesh" />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <WorkshopsPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default WorkshopsGridPage;
