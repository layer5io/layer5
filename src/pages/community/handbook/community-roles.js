import React from "react";

import SEO from "../../../components/seo";
import LeadershipPage from "../../../sections/Community/Handbook/community-roles";
import Footer from "../../../sections/General/Footer";

const ContributorJourney = ({ location }) => {
  return (
    <>
      <LeadershipPage />
      <Footer location={location} />
    </>
  );
};
export default ContributorJourney;
export const Head = () => {
  return <SEO title="Contributor Journey" description="Description of the different roles in the Layer5 community" />;
};