import React from "react";
import SEO from "../../components/seo";


import NewcomersGuide from "../../sections/Community/Newcomers-guide";
const NewComers = () => {
  return (
    <>
      <NewcomersGuide />

    </>
  );
};
export default NewComers;
export const Head = () => {
  return <SEO title="Newcomers" description="Contributions from Newcomers are actively encouraged in Layer5. Find a Meshmate and start contributing!" />;
};