import React from "react";
import SEO from "../../components/seo";


import CommunityManagers from "../../sections/Community/CommunityManagers";
import Footer from "../../sections/General/Footer";
const ManagersPage = ({ location }) => {
  return (
    <>
      <CommunityManagers />

      <Footer location={location} />

    </>
  );
};
export default ManagersPage;
export const Head = () => {
  return <SEO title="Community Managers"
    description="Layer5 Community Managers have an innate drive to contribute to the community's prosperity and that of our individual contributors' prosperity."
  />;
};