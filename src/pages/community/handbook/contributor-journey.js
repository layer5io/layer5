import React from "react";

import SEO from "../../../components/seo";
import AboutPage from "../../../sections/Community/Handbook/contributor-journey";
import Footer from "../../../sections/General/Footer";

const CommunityAbout = ({ location }) => {
  return (
    <>
      <AboutPage />
      <Footer location={location} />
    </>
  );
};
export default CommunityAbout;
export const Head = () => {
  return <SEO title="Community Handbook" description="Instructions to encourage and support first-time open-source contributors." />;
};