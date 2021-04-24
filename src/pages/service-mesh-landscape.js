import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LandscapeGrid from "../sections/Landscape";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

const LandscapeGridPage=() => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO
        title="Service Mesh Landscape"
        description="Compare service meshes like Istio, Linkerd, App Mesh, Maesh, Kuma, Network Service Mesh,
            Consul, Kuma, Citrix and VMware Tanzu Service Mesh. What is the best service mesh? What's the difference between Istio and Envoy?"
        image="/images/landscape.png" />
      <Navigation />
      <LandscapeGrid />
      <Footer />
    </Layout>
  </ThemeProvider>
);
export default LandscapeGridPage;
