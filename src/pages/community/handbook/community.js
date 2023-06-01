import React from "react";

import SEO from "../../../components/seo";
import CommunityPage from "../../../sections/Community/Handbook/community";
import Footer from "../../../sections/General/Footer";

const Community = ({ location }) => {
  return (
    <>
      <CommunityPage  />
      <Footer location={location} />

    </>
  );
};
export default Community;
export const Head = () => {
  return <SEO title="Community" description="Community guidelines" />;
};