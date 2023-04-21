import React from "react";

import SEO from "../../../components/seo";
import LearnPage from "../../../sections/Community/Handbook/learn5";

const CommunityLearn = () => {
  return (
    <>
      <LearnPage />

    </>
  );
};
export default CommunityLearn;
export const Head = () => {
  return <SEO title="Learn Layer5" description="We have put together good learning materials and resources to guide you through learning about cloud native infrastucture." />;
};