import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Banner from "../sections/Home/Banner";
// import Faq from "../sections/General/Faq";
import Integrations from "../sections/Home/Projects-home";
import Statement from "../sections/Home/Layer5-statement";
import StewardsOfIndustry from "../sections/Home/Stewards-of-industry/index";
import ProudMaintainers from "../sections/Home/Proud-maintainers";
/*import ContactCard from "../components/ContactCard";*/
import Partners from "../sections/Home/Partners-home";
import Footer from "../sections/General/Footer";
import ServiceMeshManagement from "../sections/Home/service-mesh-management";
import { GlobalStyle } from "../sections/app.style";
import SubscribeSection from "../sections/subscribe/subscribe";
import ServiceMeshFocussed from "../sections/Home/Service-mesh-focussed";
import CloudNativeLeaders from "../sections/Home/Cloud-Native";
import SoSpecial from "../sections/Home/So-Special-Section";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";

const IndexPage = () => {
  const [theme, setTheme] = useState("light");
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>Preventing mismatched Screen</div>;
  }
  const schema= {
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
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <GlobalStyle />
      <SEO title="Layer5" description="Making service meshes available to the rest of us. Open source software for management of service meshes. Allowing developers to focus on business logic, not infrastructure concerns. Empowering operators to confidentally run modern infrastructure."
        schemaMarkup={schema} />
      <Layout >
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <Banner />
        <Partners />
        <Integrations />
        {/* <Features /> */}
        <ServiceMeshManagement />
        <Statement />
        <ProudMaintainers />
        {/* <AppScreens /> */}
        {/* <Pricing /> */}
        {/* <Testimonial /> */}
        <CloudNativeLeaders />
        <StewardsOfIndustry />
        {/* <Getapp /> */}
        {/* <News /> */}
        {/* <Faq category = "all"/> */}
        {/*<ContactCard />*/}
        <SoSpecial />
        <ServiceMeshFocussed />
        {/* <EngineerEnabler /> */}
        <SubscribeSection />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
