import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import Navigation from "../../../sections/Navigation";
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
      <SEO title="Meshery Getting Started" description="How to get started with any service mesh. Adopting and operating a service mesh." />
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
