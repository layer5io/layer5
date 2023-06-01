import React from "react";

import SEO from "../../../components/seo";
import MentorshipPage from "../../../sections/Community/Handbook/mentorships";
import Footer from "../../../sections/General/Footer";

const Mentorship = ({ location }) => {
  return (
    <>
      <MentorshipPage />
      <Footer location={location} />

    </>
  );
};
export default Mentorship;
export const Head = () => {
  return <SEO title="Mentorship Programs" description="As an open-source organization and a community, we participate in different mentorships programs." />;
};