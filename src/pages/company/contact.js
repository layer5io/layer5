import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";
import ContactPage from "../../sections/Company/Contact";

const Contact = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Contact" description="Contact Layer5 for help managing your cloud native infrastructre and apps. Layer5 is the maker of Meshery and service mesh standards." />
      <Navigation />
      <ContactPage />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default Contact;
