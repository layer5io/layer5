import React from "react";
import SEO from "../components/seo";


import Unsubscribed from "../sections/unsubscribed/unsubscribed";
import Footer from "../sections/General/Footer";
const UnsubscribedSection = ({ location }) => {
  return (
    <>
      <SEO title="Cloud Native Newsletter" description="The Layer5 Newsletter" />
      <Unsubscribed />
      <Footer location={location} />


    </>
  );
};
export default UnsubscribedSection;
