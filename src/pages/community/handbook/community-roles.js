import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import LeadershipPage from "../../../sections/Community/Handbook/community-roles";
import Footer from "../../../sections/General/Footer";
const ContributorJourney = () => {
  return (
    <Layout>
      <LeadershipPage />
      <Footer />
    </Layout>
  );
};
export default ContributorJourney;
export const Head = () => {
  return <SEO title="Contributor Journey" description="Description of the different roles in the Layer5 community" />;
};