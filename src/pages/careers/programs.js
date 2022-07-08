import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import FAQ from "../../sections/General/Faq";
import ProgramsGrid from "../../sections/Careers/Careers-Programs-grid";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const CareerPrograms = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Open Source Internship Programs" description="Engage, Learn, Share. Join the award-winning, Layer5 open source community and projects." />
      <Navigation />
      <ProgramsGrid />
      <FAQ category={["internships"]} />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default CareerPrograms;
