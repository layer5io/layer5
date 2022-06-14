import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import AboutSection from "../../sections/Company/About";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const About = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="About" description='At Layer5, we believe collaboration enables innovation, and infrastructure enables collaboration. We help organizations look at their infrastructure differently, asking it "what have you done for me lately?"' />
      <Navigation />
      <AboutSection />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default About;
