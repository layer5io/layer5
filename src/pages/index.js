import React, { Suspense } from "react";
import SEO from "../components/seo";
import Partners from "../sections/Home/Partners-home";
import Integrations from "../sections/Home/Projects-home";
import Banner from "../sections/Home/Banner";
import CornerPopup from "../components/Corner-popup";
import Loading from "../components/loading";
import CloudNativeManagement from "../sections/Home/CloudNativeManagement";
import SubscribeSection from "../sections/subscribe/subscribe";
import ServiceMeshFocussed from "../sections/Home/Service-mesh-focussed";
import CaseStudyBanner from "../components/Case-study-banner";
import MesheryIntegration from "../sections/Meshery/Meshery-integrations";

// const CloudNativeManagement = React.lazy(() => import("../sections/Home/CloudNativeManagement"));
// const SubscribeSection = React.lazy(() => import("../sections/subscribe/subscribe"));
// const ServiceMeshFocussed = React.lazy(() => import("../sections/Home/Service-mesh-focussed"));
// const CaseStudyBanner = React.lazy(() => import("../components/Case-study-banner"));
// const SoSpecial = React.lazy(() => import("../sections/Home/So-Special-Section"));
// const MesheryIntegration = React.lazy(() => import("../sections/Meshery/Meshery-integrations"));

// import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";


const IndexPage = () => {
  return (
    <>
      <Banner />
      <Integrations />
      <Partners />
      <CornerPopup/>
      {/* <Features /> */}
      {/* <ServiceMeshManagement /> */}
      {/* <Suspense fallback={<Loading />}> */}
      <CloudNativeManagement />
      {/* </Suspense> */}
      {/* <Suspense fallback={<Loading />}> */}
      <MesheryIntegration  />
      {/* </Suspense> */}
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
      {/* <Suspense fallback={<Loading />}> */}
      <CaseStudyBanner/>
      {/* </Suspense> */}
      {/* <Suspense fallback={<Loading />}> */}
      <ServiceMeshFocussed bookName={"enterprise-path"} />
      {/* </Suspense> */}
      {/* <EngineerEnabler /> */}
      {/* <Suspense fallback={<Loading />}> */}
      <SubscribeSection />
      {/* </Suspense> */}

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
