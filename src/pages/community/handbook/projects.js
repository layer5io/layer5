import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import ProjectsPage from "../../../sections/Community/Handbook/projects";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";

const CommunityProjects = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO
        title="Projects"
        description="Layer5 Projects: Layer5, Meshery, Service Mesh Performance and NightHawk"
      />
      <Navigation />
      <ProjectsPage />
      <Footer />
    </Layout>
  </ThemeProvider>
);
export default CommunityProjects;
