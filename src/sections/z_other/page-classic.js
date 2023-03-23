import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import BannerClassic from "./Banner-classic";
import AboutClassic from "./About-classic";
import FeaturesClassic from "./Features-classic";
import FaqClassic from "./Faq-Classic";
import Integrations from "./Integrations";
import AppScreens from "./AppScreens-classic";
import Counter from "../Counters";
import Testimonial from "../Testimonial";
import News from "../Company/News";
import Getapp from "./Getapp";
import Client from "../Client";
import Footer from "./Footer-classic";


import theme from "../../theme/classic/themeStyles";

const ClassicPage = () => (


  <Layout>
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

);
export default ClassicPage;

export const Head = () => {
  return <SEO />;
};
