import React from "react";

import SEO from "../../../components/seo";
import DevrelSolutionsPage from "../../../sections/Devrel-platform";


const DevrelSolutions = () => {
  return (
    <>
      <DevrelSolutionsPage />
    </>
  );
};
export default DevrelSolutions;
export const Head = () => {
  return <SEO title="Devrel Platform for Cloud Native Content"
    description="Amplify Your Voice in the Cloud Native Community. Build, share, innovate with CNCF project-curated best practices."
    image="/images/solutions-devrel.png" />;
};
