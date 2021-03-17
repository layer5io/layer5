import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import GetNighthawk from "../../sections/Projects/GetNighthawk";
import Footer from "../../sections/General/Footer";
import Subscribe from "../../sections/subscribe/subscribe";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const SMI = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="GetNighthawk"
        description="Layer5 is the maker of Meshery,  Service Mesh Performance (SMP), GetNighthawk and maintainers of Service Mesh Interface (SMI).
            We are the largest collection of service mesh projects and their maintainers in the world.
            Contact Layer5 for help with operating a service mesh."
      />
      <Navigation />
      <GetNighthawk />
      <Subscribe/>
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default SMI;
