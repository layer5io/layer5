import React from "react";
import {ThemeProvider} from "styled-components";

import Layout from "../components/layout";

import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";
import DeployServiceMesh from "../sections/Deploy Service Mesh/index";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SEO title="When should I deploy a service mesh?" description="When should a service mesh be used? When should I deploy a service mesh? How to adopt a service mesh? How to run a service mesh?" />
    <Layout>
      <Navigation />
      <DeployServiceMesh />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
