import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import Banner from "../sections/z_other/Banner-hosting";
import About from "../sections/z_other/About-hosting";
import Features from "../sections/z_other/Features-hosting";
import CTAHosting from "../sections/CTA-hosting";
import Faq from "../sections/z_other/Faq-hosting";
import Counters from "../sections/Counters";
import Testimonial from "../sections/Testimonial";
import News from "../sections/Company/News";
import ContactCard from "../components/ContactCard";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/hosting/themeStyles";

const HostingPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <SEO title="Layer5 | The Service Mesh Company" />
      <Navigation />
      <Banner />
      <About />
      <Features />
      <CTAHosting />
      <Counters />
      <Testimonial />
      <Faq />
      <News />
      <ContactCard />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default HostingPage;
