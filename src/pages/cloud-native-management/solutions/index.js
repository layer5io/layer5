import React from "react";

import SEO from "../../../components/seo";

import Solutions from "../../../sections/Solutions/index";

const SolutionsPage = () => {
  return (
    <>
      <Solutions/>
    </>
  );
};
export default SolutionsPage;
export const Head = () => {
  return <SEO title="Solutions" description="Collaboratively design and manage your Kubernetes workloads and Cloud services, infrastructure, and cloud native apps. Confidently configure your systems with Kanvas's visual topology and built-in design patterns." />;
};
