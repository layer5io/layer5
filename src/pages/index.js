import React from "react";

import SEO from "../components/seo";
import Partners from "../sections/Home/Partners-home";
import Integrations from "../sections/Home/Playground-home";
import Banner from "../sections/Home/Banner";
import loadable from "@loadable/component";
import CornerPopup from "../components/Corner-popup";
const CloudNativeManagement = loadable(() => import("../sections/Home/CloudNativeManagement"));
const SubscribeSection = loadable(() => import("../sections/subscribe/subscribe"));
const ServiceMeshFocussed = loadable(() => import("../sections/Home/Service-mesh-focussed"));
import CaseStudyBanner from "../components/Case-study-banner";

const EngineerEnabler = loadable(() => import("../sections/Home/Engineer-enabler"));
const SoSpecial = loadable(() => import("../sections/Home/So-Special-Section"));
const MesheryIntegration = loadable(() => import("../sections/Meshery/Meshery-integrations"));
const FeaturesContainer = loadable(() => import("../sections/Home/FeaturesContainer"));

// import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";


const IndexPage = () => {
  return (
    <>
      <Banner />
      <FeaturesContainer />
      <Integrations />
      <Partners />
      <CornerPopup/>
      {/* <ServiceMeshManagement /> */}
      <CloudNativeManagement />
      <MesheryIntegration  />
      {/* <Statement /> */}
      {/* <AppScreens /> */}
      {/* <Pricing /> */}
      {/* <Testimonial /> */}
      {/* <Getapp /> */}
      {/* <News /> */}
      {/* <Faq category = "all"/> */}
      {/*<ContactCard />*/}
      {/* <SoSpecial  /> */}
      {/* <CloudNativeLeaders /> */}
      <CaseStudyBanner/>
      {/* <ServiceMeshFocussed bookName={"enterprise-path"} /> */}
      {/* <EngineerEnabler /> */}
      <SubscribeSection />

    </>
  );
};
export const Head = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Layer5",
    "url": "https://layer5.io/",
    "logo": "https://layer5.io/images/layer5-gradient.webp",
    "sameAs": [
      "https://twitter.com/layer5",
      "https://www.linkedin.com/company/layer5/",
      "https://github.com/layer5io",
      "https://www.youtube.com/c/Layer5io?sub_confirmation=1"
    ]
  };
  return (
    <SEO title="Layer5" description="An empowerer of engineers, Layer5 helps you extract more value from your infrastructure. Creator and maintainer of cloud native standards. Maker of Meshery, the cloud native manager."
      schemaMarkup={schema} />
  );
};
export default IndexPage;
