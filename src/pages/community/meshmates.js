import React from "react";
import SEO from "../../components/seo";


import Meshmates from "../../sections/Community/Meshmates";
import seoImage from "../../assets/images/meshmate/meshmate-icon.png";
const MeshmatePage = () => {
  return (
    <>
      <Meshmates  />

    </>
  );
};
export default MeshmatePage;
export const Head = () => {
  return  <SEO title="Meshmates"
    description="MeshMates - the Layer5 contributor onboarding program.
          MeshMates is a collection of cloud native mentors."
    image={seoImage} />;
};