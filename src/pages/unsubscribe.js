import React from "react";
import SEO from "../components/seo";

import ContactUnSubscribeSection from "../components/ContactCard-unsubscribe";
import Footer from "../sections/General/Footer";
const UnSubscribeSection = ({ location }) => {
  return (
    <>
      <ContactUnSubscribeSection />
      <Footer location={location} />

    </>
  );
};
export default UnSubscribeSection;
export const Head = () => {
  return <SEO title="Layer5 Newsletter" description="Layer5 Newsletter" />;
};