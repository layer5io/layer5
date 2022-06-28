import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import DockerMesheryPage from "../sections/Docker-Meshery";
import Footer from "../sections/General/Footer";
import { GlobalStyle } from "../sections/app.style";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useState } from "react";
import LearnServiceMeshCTA from "../sections/Learn/Learn-Service-Mesh-CTA";


const MesheryDocker = () => {
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
        <SEO title="Docker Extension for Meshery"
          description="The Docker Extension for Meshery extends Docker Desktop’s position as the cloud native developer’s go-to Kubernetes environment with easy access to the next layer of cloud native infrastructure: service meshes."
          image="/images/meshery-logo-dark-text.png" />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <DockerMesheryPage />
        <LearnServiceMeshCTA />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default MesheryDocker;
