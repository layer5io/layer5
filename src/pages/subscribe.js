import React from "react";
import SEO from "../components/seo";


import ContactSubscribeSection from "../components/ContactCard";
const SubscribeSection = () => {
  return (
    <>
      <ContactSubscribeSection />

    </>
  );
};
export default SubscribeSection;
export const Head = () => {
  return <SEO title="Service Mesh Newsletter" description="The Service Mesh Newsletter" />;
};