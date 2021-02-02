import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import ProgramsGrid from "../../sections/Careers/Careers-Programs-grid";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const programs = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Open Source Internship Programs" description="The Service Mesh Community at Layer5 - Learn, Share, Engage. Join the largest collection of service mesh projects and their maintainers in the world." />
      <Navigation />
      <ProgramsGrid />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default programs;
