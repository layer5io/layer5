import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import LearnPage from "../../sections/Learn";
import Footer from "../../sections/General/Footer";
import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";


const LearnGridPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Learn Service Mesh"
          description="Learn Service Meshes: Istio, Linkerd, Envoy, Consul, Maesh, Kuma, App Mesh, Citrix, Tanzu Service Mesh"
          image="/images/workshops.png" />
        <Navigation />
        <LearnPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default LearnGridPage;
