import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";
import Terms from "../../../sections/Company/Legal/terms-of-service";

import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";

const TermsOfService = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Terms of Service" description="Layer5's cloud native application and infrastructure management software enables organizations to expect more from their infrastructure.
  Layer5 is the makers of Meshery and service mesh standards.
" />
      <Navigation />
      <Terms />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default TermsOfService;
