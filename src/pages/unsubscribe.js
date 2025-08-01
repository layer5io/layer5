import React from "react";
import SEO from "../components/seo";
import KanvasCTA from "../sections/Kanvas/kanvas-cta";

import ContactUnSubscribeSection from "../components/ContactCard-unsubscribe";
const UnSubscribeSection = () => {
  return (
    <>
      <ContactUnSubscribeSection />
      <KanvasCTA />
    </>
  );
};
export default UnSubscribeSection;
export const Head = () => {
  return <SEO title="Layer5 Newsletter" description="Layer5 Newsletter" />;
};