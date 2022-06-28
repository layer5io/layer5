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
      <SEO title="Internship, Part-time, and Full-time Opportunities with Layer5" description="Engage, Learn, Share. Join the award-winning, Layer5 open source community and projects." />
      <Navigation />
      <InternshipPage />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default Internships;
