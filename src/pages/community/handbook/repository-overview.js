import React from "react";

import SEO from "../../../components/seo";
import RepoPage from "../../../sections/Community/Handbook/repository";

const CommunityRepository = () => {
  return (
    <>
      <RepoPage />

    </>
  );
};
export default CommunityRepository;
export const Head = () => {
  return <SEO title="Repository Overview" description="A brief introduction to all of the Github repositories of Layer5 organization." />;
};