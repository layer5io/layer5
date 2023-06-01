import React from "react";

import SEO from "../../../components/seo";
import ConductPage from "../../../sections/Community/Handbook/conduct";
import Footer from "../../../sections/General/Footer";

const CommunityConduct = ({ location }) => {
  return (
    <>
      <ConductPage />
      <Footer location={location} />
    </>
  );
};
export default CommunityConduct;
export const Head = () => {
  return <SEO title="Code Of Conduct" description="Layer5 follows the CNCF Code of Conduct" />;
};