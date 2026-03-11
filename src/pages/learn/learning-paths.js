import React from "react";

import SEO from "../../components/seo";
import LearnPathsPage from "../../sections/Learn-Layer5";
import workshopsImg from "../../assets/images/workshops/workshops.webp";

const LearningPathsPage = () => {
  return (
    <>
      <LearnPathsPage />

    </>
  );
};
export default LearningPathsPage;
export const Head = () => {
  return(
    <SEO
    title="DevOps, GitOps, and Cloud Native Learning Paths"
    description="Learning Paths offer a structured approach to learning, combining theoretical cloud native knowledge with hands-on, practical experience."
    image={workshopsImg}
  />
  );
};
