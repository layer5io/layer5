import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/app/themeStyles";
import { GlobalStyle } from "../../sections/app.style";

import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import Layout from "../../components/layout";
import Conduct from "../../sections/Terms";

const codeofconduct = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Code of Conduct" description="Contact Layer5 for help with operating a service mesh. 
Layer5 is the makers of Meshery and service mesh standards. 
We are the largest collection of service mesh projects and their maintainers in the world." />
      <Navigation />
      <Conduct />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default codeofconduct;
