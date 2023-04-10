import React from "react";

import SEO from "../../../components/seo";
import MentorshipPage from "../../../sections/Community/Handbook/mentorships";

const Mentorship = () => {
  return (
    <>
      <MentorshipPage />

    </>
  );
};
export default Mentorship;
export const Head = () => {
  return <SEO title="Mentorship Programs" description="As an open-source organization and a community, we participate in different mentorships programs." />;
};