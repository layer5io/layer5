import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import loadable from "@loadable/component";
import CloudNativeManagement from "../sections/Home/CloudNativeManagement";
import Partners from "../sections/Home/Partners-home";
import { GlobalStyle } from "../sections/app.style";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";

const Banner = loadable(() => import ("../sections/Home/Banner"));
const Navigation = loadable(() => import ("../sections/General/Navigation"));
const Integrations = loadable(() => import ("../sections/Home/Projects-home"));
const Statement = loadable(() => import ("../sections/Home/Layer5-statement"));
const StewardsOfIndustry = loadable(() => import ("../sections/Home/Stewards-of-industry/index"));
const ProudMaintainers = loadable(() => import ("../sections/Home/Proud-maintainers"));
const Partners = loadable(() => import ("../sections/Home/Partners-home"));
const Footer = loadable(() => import ("../sections/General/Footer"));
const ServiceMeshManagement = loadable(() => import ("../sections/Home/service-mesh-management"));
const SubscribeSection = loadable(() => import ("../sections/subscribe/subscribe"));
const ServiceMeshFocussed = loadable(() => import ("../sections/Home/Service-mesh-focussed"));
const CloudNativeLeaders = loadable(() => import ("../sections/Home/Cloud-Native"));
const SoSpecial = loadable(() => import ("../sections/Home/So-Special-Section"));
const MesheryIntegration = loadable(() => import ("..//sections/Meshery/Meshery-integrations"));
import { GlobalStyle } from "../sections/app.style";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";

const IndexPage = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Layer5",
    "url": "https://layer5.io/",
    "logo": "https://layer5.io/images/layer5-tag-dark-bg.png",
    "sameAs": [
      "https://twitter.com/layer5",
      "https://www.linkedin.com/company/layer5/",
      "https://github.com/layer5io",
      "https://www.youtube.com/c/Layer5io?sub_confirmation=1"
    ]
  };
  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <GlobalStyle />
      <SEO title="Layer5" description="An empowerer of engineers, Layer5 helps you extract more value from your infrastructure. Creator and maintainer of service mesh standards. Maker of Meshery, the cloud native management plane."
        schemaMarkup={schema} />
      <Layout >
        <Navigation theme={theme} themeSetter={themeSetter} />
        <Banner />
        <Integrations />
        <Partners />
        {/* <Features /> */}
        {/* <ServiceMeshManagement /> */}
        <CloudNativeManagement />
        <MesheryIntegration />
        {/* <Statement /> */}
        {/* <AppScreens /> */}
        {/* <Pricing /> */}
        {/* <Testimonial /> */}
        {/* <Getapp /> */}
        {/* <News /> */}
        {/* <Faq category = "all"/> */}
        {/*<ContactCard />*/}
        <SoSpecial theme={theme} />
        <CloudNativeLeaders />
        <ServiceMeshFocussed />
        {/* <EngineerEnabler /> */}
        <SubscribeSection />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
