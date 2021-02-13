import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import About from "../../sections/Company/About";
import WhoWeAre from "../../sections/Company/WhoWeAre";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const about = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="About" description="Contact Layer5 for help with operating a service mesh. 
  Layer5 is the makers of Meshery and service mesh standards. 
  We are the largest collection of service mesh projects and their maintainers in the world." />
      <Navigation />
      <About />
      <WhoWeAre />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default about;
