import React from "react";
import {ThemeProvider} from "styled-components";

import Layout from "../components/layout";

import SEO from "../components/seo";
import Navigation from "../sections/Navigation";
import Banner from "../sections/Home/Banner-default";
import Features from "../sections/Features";
import Faq from "../sections/Faq";
import Integrations from "../sections/Projects-home";
import Statement from "../sections/Home/Layer5-statement";
import Pricing from "../sections/Pricing";
import Testimonial from "../sections/Testimonial";
import ContactCard from "../components/ContactCard";
import Footer from "../sections/Footer";
import Partners from "../sections/Partners-home";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SEO meta="Making service meshes available to the rest of us. Open source software for management of service meshes. Allowing developers to focus on business logic, not infrastructure concerns. Empowering operators to confidentally run modern infrastructure."/>
    <Layout>
      <Navigation />
      <Banner />
      <Partners />
      <Integrations />
      <Features />
      {/* <AppScreens /> */}
      {/* <Counters />  */}
      <Statement />
      <Pricing />
      <Testimonial />
      {/* <Getapp /> */}
      {/* <News /> */}
      <Faq category = "all"/>
      <ContactCard />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
