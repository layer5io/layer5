import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";
import ContactPage from "../../sections/Company/Contact";

class Contact extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyle />
          <SEO title="Contact" description="Contact Layer5 for help with operating a service mesh. 
  Layer5 is the makers of Meshery and service mesh standards. 
  We are the largest collection of service mesh projects and their maintainers in the world." />
          <Navigation />
          <ContactPage />
          <Footer />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default Contact;
