import React from "react";

import SEO from "../../components/seo";

import FAQ from "../../sections/General/Faq";
import ProgramsGrid from "../../sections/Careers/Careers-Programs-grid";
const CareerPrograms = () => {
  return (
    <>
      <ProgramsGrid  />
      <FAQ category={["internships"]} />

    </>
  );
};
export default CareerPrograms;
export const Head = () => {
  return <SEO title="Open Source Internship Programs" description="Engage, Learn, Share. Join the award-winning, Layer5 open source community and projects." />;
};