import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Partners from "../sections/Home/Partners-home";
import Integrations from "../sections/Home/Projects-home";
import Banner from "../sections/Home/Banner";
import loadable from "@loadable/component";
const CloudNativeManagement = loadable(() => import("../sections/Home/CloudNativeManagement"));
const SubscribeSection = loadable(() => import("../sections/subscribe/subscribe"));
const ServiceMeshFocussed = loadable(() => import("../sections/Home/Service-mesh-focussed"));
const CloudNativeLeaders = loadable(() => import("../sections/Company/Cloud-Native"));
import Testimonial from "../sections/Testimonial";
const SoSpecial = loadable(() => import("../sections/Home/So-Special-Section"));
const MesheryIntegration = loadable(() => import("../sections/Meshery/Meshery-integrations"));
const Footer = loadable(() => import("../sections/General/Footer"));
const HomePageQuotes = loadable(() => import("./homePage-testimonials"));
import { GlobalStyle } from "../sections/app.style";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";


const IndexPage = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };


  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <GlobalStyle />

      <Layout >
        <Navigation theme={theme} themeSetter={themeSetter} />
        <Banner />
        <Integrations />
        <Partners />
        {/* <Features /> */}
        {/* <ServiceMeshManagement /> */}
        <CloudNativeManagement />
        <MesheryIntegration theme={theme} />
        {/* <Statement /> */}
        {/* <AppScreens /> */}
        {/* <Pricing /> */}
        {/* <Getapp /> */}
        {/* <News /> */}
        {/* <Faq category = "all"/> */}
        {/*<ContactCard />*/}
        <SoSpecial theme={theme} />
        {/* <Testimonial /> */}
        <HomePageQuotes />
        {/* <CloudNativeLeaders /> */}
        <ServiceMeshFocussed />
        {/* <EngineerEnabler /> */}
        <SubscribeSection />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export const Head = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Layer5",
    "url": "https://layer5.io/",
    "logo": "https://layer5.io/images/layer5-gradient.png",
    "sameAs": [
      "https://twitter.com/layer5",
      "https://www.linkedin.com/company/layer5/",
      "https://github.com/layer5io",
      "https://www.youtube.com/c/Layer5io?sub_confirmation=1"
    ]
  };
  return (
    <SEO title="Layer5" description="An empowerer of engineers, Layer5 helps you extract more value from your infrastructure. Creator and maintainer of service mesh standards. Maker of Meshery, the cloud native management plane."
      schemaMarkup={schema} />
  );
};

export default IndexPage;
