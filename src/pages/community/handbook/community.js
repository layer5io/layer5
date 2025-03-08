import React from "react";

import SEO from "../../../components/seo";
import CommunityPage from "../../../sections/Community/Handbook/community";

const Community = () => {
  return (
    <>
      <CommunityPage  />

    </>
  );
};
export default Community;
export const Head = () => {
  return <SEO title="Community" description="Community guidelines" />;
};