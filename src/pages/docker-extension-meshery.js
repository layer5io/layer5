import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import DockerMesheryPage from "../sections/Docker-Meshery";
import Footer from "../sections/General/Footer";
import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";


const MesheryDocker = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Docker Extension for Meshery"
          description="The Docker Extension for Meshery extends Docker Desktop’s position as the cloud native developer’s go-to Kubernetes environment with easy access to the next layer of cloud native infrastructure: service meshes."
          image="/images/meshery-logo-dark-text.png" />
        <Navigation />
        <DockerMesheryPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default MesheryDocker;
