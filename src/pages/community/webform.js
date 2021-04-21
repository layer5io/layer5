import React from "react";
import {ThemeProvider} from "styled-components";

import Layout from "../../components/layout";

import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";
import WebBasedForm from "../../sections/Community/Web-based-from";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SEO title="Layer5 newcomers form" description="Layer5 newcomers form for contributors, users and visitors" />
    <Layout>
      <Navigation />
      <WebBasedForm />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
