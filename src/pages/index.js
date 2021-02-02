import React from "react";
import {ThemeProvider} from "styled-components";

import Layout from "../components/layout";

import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Banner from "../sections/Home/Banner-default";
import Features from "../sections/Features";
import Faq from "../sections/General/Faq";
import Integrations from "../sections/Home/Projects-home";
import Statement from "../sections/Home/Layer5-statement";
import StewardsOfIndustry from "../sections/Home/Stewards-of-industry/index";
import Testimonial from "../sections/Testimonial";
import ProudMaintainers from "../sections/Home/Proud-maintainers";
/*import ContactCard from "../components/ContactCard";*/
import Footer from "../sections/General/Footer";
import ServiceMeshManagement from "../sections/Home/service-mesh-management";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";
import EngineerEnabler from "../sections/Home/Engineer-enabler";
import SubscribeSection from "../sections/subscribe/subscribe";
import ServiceMeshFocussed from "../sections/Home/Service-mesh-focussed";
import CloudNativeLeaders from "../sections/Home/Cloud-Native";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SEO description="Making service meshes available to the rest of us. Open source software for management of service meshes. Allowing developers to focus on business logic, not infrastructure concerns. Empowering operators to confidentally run modern infrastructure." />
    <Layout>
      <Navigation />
      <Banner />
      <Integrations />
      <Features />
      <ServiceMeshManagement />
      <ProudMaintainers />
      {/* <AppScreens /> */}
      {/* <Counters />  */}
      <Statement />
      {/* <Pricing /> */}
      <Testimonial />
      <CloudNativeLeaders />
      <StewardsOfIndustry />
      {/* <Getapp /> */}
      {/* <News /> */}
      <Faq category = "all"/>
      {/*<ContactCard />*/}
      <ServiceMeshFocussed />
      <EngineerEnabler />
      <SubscribeSection />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
