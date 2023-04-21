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
  return <SEO title="Code of Conduct" description="Contact Layer5 for help with operating a service mesh.
  Layer5 is the makers of Meshery and service mesh standards.
  We are the largest collection of service mesh projects and their maintainers in the world." />;
};