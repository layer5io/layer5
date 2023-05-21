import React from "react";
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

// import theme from "../../theme/classic/themeStyles";

const ClassicPage = () => (


  <>
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

  </>

);
export default ClassicPage;

export const Head = () => {
  return <SEO />;
};
