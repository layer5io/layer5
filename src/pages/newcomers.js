import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";

import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";
import WebBasedForm from "../sections/Community/Web-based-from";

const NewcomersPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SEO title="Layer5 Community Member Form" description="Layer5 newcomers form for contributors, users and visitors" image="/images/community.png" />
    <Layout>
      <Navigation />
      <WebBasedForm />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default NewcomersPage;
