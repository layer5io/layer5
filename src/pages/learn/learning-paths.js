import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import LearnPathsPage from "../../sections/Learn-Layer5";
import Footer from "../../sections/General/Footer";
import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";


const LearningPathsPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Learning Paths"
          description="Learn to build an application using service meshes like Istio, Linkerd"
          image="/images/workshops.png" />
        <Navigation />
        <LearnPathsPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default LearningPathsPage;
