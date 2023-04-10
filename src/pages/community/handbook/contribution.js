import React from "react";

import SEO from "../../../components/seo";
import ContributingPage from "../../../sections/Community/Handbook/contributing";

const Contributing = () => {
  return (
    <>
      <ContributingPage />

    </>
  );
};
export default Contributing;
export const Head = () => {
  return <SEO title="Contribution" description="A detailed contribution guide." />;
};