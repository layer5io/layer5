import React from "react";

import SEO from "../../../components/seo";

import Conduct from "../../../sections/Company/Legal/code-of-conduct";
const CodeOfConduct = () => {
  return (
    <>
      <Conduct />
    </>
  );
};
export default CodeOfConduct;
export const Head = () => {
  return <SEO title="Code of Conduct" description="Contact Layer5 for help with operating platform engineering. Layer5 is the maker of Kanvas and Meshery, native application and infrastructure management software for engineers who expect more from their infrastructure." />;
};