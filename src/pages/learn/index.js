import React from "react";

import SEO from "../../components/seo";
import LearnPage from "../../sections/Learn";

const LearnGridPage = () => {
  return (
    <>
      <LearnPage />

    </>
  );
};
export default LearnGridPage;
export const Head = () => {
  return  <SEO title="Learn DevOps and Cloud Native"
    description="Learn DevOps and Cloud Native: Kubernetes and all the CNCF projects."
    image="/images/workshops.webp" />;
};