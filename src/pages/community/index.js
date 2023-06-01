import React from "react";

import SEO from "../../components/seo";
import Community from "../../sections/Community";
import Footer from "../../sections/General/Footer";
const CommunityIndex = ({ location }) => {
  return (
    <>
      <Community  />
      <Footer location={location} />

    </>
  );
};
export default CommunityIndex;
export const Head = () => {
  return  <SEO title="Award-winning Open Source Community"
    description="The Cloud Native Management Community at Layer5 - Learn, Share, Engage.
           Join the award-winning open source community - the warmest and most welcoming open source community around."
  />;
};