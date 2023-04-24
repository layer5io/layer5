import React from "react";

import SEO from "../../components/seo";

import AboutSection from "../../sections/Company/About";
import StewardsOfIndustry from "../../sections/Company/Stewards-of-industry";
const About = () => {
  return (
    <>
      <AboutSection  />
      <StewardsOfIndustry />

    </>
  );
};
export default About;
export const Head = () => {
  return <SEO title="About" description='At Layer5, we believe collaboration enables innovation, and infrastructure enables collaboration. We help organizations look at their infrastructure differently, asking it "what have you done for me lately?"' />;
};