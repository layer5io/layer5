import React from "react";

import SEO from "../../../components/seo";
import ConductPage from "../../../sections/Community/Handbook/conduct";

const CommunityConduct = () => {
  return (
    <>
      <ConductPage />

    </>
  );
};
export default CommunityConduct;
export const Head = () => {
  return <SEO title="Code Of Conduct" description="Layer5 follows the CNCF Code of Conduct" />;
};