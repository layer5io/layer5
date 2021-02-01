import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import BannerClassic from "../sections/z_other/Banner-classic";
import AboutClassic from "../sections/z_other/About-classic";
import FeaturesClassic from "../sections/z_other/Features-classic";
import FaqClassic from "../sections/z_other/Faq-Classic";
import Integrations from "../sections/z_other/Integrations";
import AppScreens from "../sections/z_other/AppScreens-classic";
import Counter from "../sections/Counters";
import Testimonial from "../sections/Testimonial";
import News from "../sections/Company/News";
import Getapp from "../sections/z_other/Getapp";
import Client from "../sections/Client";
import Footer from "../sections/z_other/Footer-classic";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/classic/themeStyles";

const ClassicPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <SEO title="Layer5 | The Service Mesh Company" />
      <Navigation />
      <BannerClassic />
      <AboutClassic />
      <Integrations />
      <FeaturesClassic />
      <AppScreens />
      <Counter />
      <Testimonial />
      <FaqClassic />
      <Getapp />
      <News />
      <Client />
      <Footer />
    </Layout>
  </ThemeProvider>
);
export default ClassicPage;
