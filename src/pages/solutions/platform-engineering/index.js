import React from "react";

import SEO from "../../../components/seo";
import PlatformEngineeringSolutionPage from "../../../sections/Platform-Engineering";


const PlatformEngineeringSolutions = () => {
  return (
    <>
      <PlatformEngineeringSolutionPage />
    </>
  );
};
export default PlatformEngineeringSolutions;
export const Head = () => {
  return <SEO title="Platform Engineering"
    description="Empower Your Teams with Platform Engineering. Streamline development, enhance collaboration, and accelerate innovation in cloud-native environments."
    image="/images/solutions-devrel.png" />;
};