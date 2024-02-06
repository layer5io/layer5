import React from "react";

import SEO from "../../../components/seo";
import GitHubProcessPage from "../../../sections/Community/Handbook/github-process";

const GitHubProcess = () => {
  return (
    <>
      <GitHubProcessPage />

    </>
  );
};
export default GitHubProcess;
export const Head = () => {
  return <SEO title="GitHub Process" description="Streamlining continuous integration to reduce overhead across the growing repository collection." />;
};
