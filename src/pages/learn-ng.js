import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import LearnPathsPage from "../sections/Learn-Layer5";
import Footer from "../sections/General/Footer";
import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";


const LearnLayer5Page = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Learn to Service Mesh"
          description="Learn Service Meshes: Istio, Linkerd, Envoy, Consul, Maesh, Kuma, App Mesh, Citrix, Tanzu Service Mesh"
          image="/images/workshops.png" />
        <Navigation />
        <LearnPathsPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default LearnLayer5Page;
