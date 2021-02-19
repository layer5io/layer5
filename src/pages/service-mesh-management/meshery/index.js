import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import Navigation from "../../../sections/General/Navigation";
import MesheryPage from "../../../sections/Meshery";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";
import seoimage from "../../../assets/images/meshery/full-logo/meshery-logo-dark-text.png";

const Meshery = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Meshery Overview" description="Lifecycle, performance, and configuration management for Istio, Linkerd, Envoy, App Mesh, Consul Connect, Network Service Mesh, Citrix CPX, VMware Tanzu Service Mesh,
Octarine, Traefik Mesh, Open Service Mesh, and Kuma.
Service mesh comparison. Service mesh patterns and best practices." image={seoimage} />
      <Navigation />
      <MesheryPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default Meshery;
