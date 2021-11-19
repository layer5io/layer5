import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import InternshipPage from "../../sections/Careers/Careers-Internship-grid";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const Internships = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Open Source Internship Programs" description="The Service Mesh Community at Layer5 - Learn, Share, Engage.
  Join the largest collection of service mesh projects and their maintainers in the world." />
      <Navigation />
      <InternshipPage />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default Internships;
