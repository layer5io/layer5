import React from "react";
import SEO from "../components/seo";
import KanvasCTA from "../sections/Kanvas/kanvas-cta";

import ContactSubscribeSection from "../components/ContactCard";
const SubscribeSection = () => {
  return (
    <>
      <ContactSubscribeSection />
      <KanvasCTA />
    </>
  );
};
export default SubscribeSection;
export const Head = () => {
  return <SEO title="Subscribe" description="Subscribe to Layer5 Mailing List" />;
};
