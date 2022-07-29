import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";
import MesheryTerminal from "../../../sections/Meshery/Meshery-terminal";
import MesheryPlatforms from "../../../sections/Meshery/Meshery-platforms";
import MesheryManageMesh from "../../../sections/Meshery/Meshery-mange-mesh";
import MesheryQuotes from "../../../sections/Meshery/Meshery-quotes";
import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";

const MesheryMainPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Meshery Getting Started"
        description="How to get started with cloud native management. Adopting and operating your cloud native infrastructure."
        image="/images/meshery-logo-dark-text.png"/>
      <Navigation />
      <MesheryTerminal/>
      <MesheryPlatforms/>
      <MesheryManageMesh/>
      <MesheryQuotes/>
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default MesheryMainPage;
