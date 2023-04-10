import React from "react";

import SEO from "../../../components/seo";
import AboutPage from "../../../sections/Community/Handbook/contributor-journey";

const CommunityAbout = () => {
  return (
    <>
      <AboutPage />

    </>
  );
};
export default CommunityAbout;
export const Head = () => {
  return <SEO title="Community Handbook" description="Instructions to encourage and support first-time open-source contributors." />;
};