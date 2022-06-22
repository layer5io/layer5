import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import CareersSection from "../../sections/Careers";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";
import { darktheme } from "../../theme/app/themeStyles";
import lighttheme from "../../theme/app/themeStyles";
const Careers = () => (
  <ThemeProvider theme={theme === "light" ? lighttheme : darktheme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Careers" description="Careers at Layer5. Come work with the largest collection of service mesh projects and their maintainers in the world." />
      <Navigation />
      <CareersSection />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default Careers;
