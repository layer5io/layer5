import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import WorkshopsPage from "../../sections/Learn/Workshop-grid";
import Footer from "../../sections/General/Footer";
import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";


const WorkshopsGridPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Workshops" description="Workshops and tutorials for Istio, Envoy, Linkerd, Consul, App Mesh, Open Service Mesh" />
        <Navigation />
        <WorkshopsPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default WorkshopsGridPage;
