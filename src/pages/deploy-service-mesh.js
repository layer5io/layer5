import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";

import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";
import DeployServiceMesh from "../sections/Deploy Service Mesh/index";

const DeployServiceMeshPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SEO title="when should i deploy service mesh" description="when should i deploy service mesh question form." />
    <Layout>
      <Navigation />
      <DeployServiceMesh />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default DeployServiceMeshPage;
