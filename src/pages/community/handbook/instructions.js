import React from "react";

import SEO from "../../../components/seo";
import GitHubOrgMembership from "../../../sections/Community/Handbook/instructions";

const GithubOrgMember = () => {
  return (
    <>
      <GitHubOrgMembership />

    </>
  );
};
export default GithubOrgMember;
export const Head = () => {
  return <SEO title="Instructions" description="Layer5 readily recognizes and publicly appreciates its community members." />;
};
