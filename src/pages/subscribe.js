import React from "react";
import SEO from "../components/seo";

import ContactSubscribeSection from "../components/ContactCard";
import Footer from "../sections/General/Footer";
const SubscribeSection = ({ location }) => {
  return (
    <>
      <ContactSubscribeSection />
      <Footer location={location} />

    </>
  );
};
export default SubscribeSection;
export const Head = () => {
  return <SEO title="Service Mesh Newsletter" description="The Service Mesh Newsletter" />;
};