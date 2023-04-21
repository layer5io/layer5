import React from "react";

import SEO from "../../components/seo";

import InternshipPage from "../../sections/Careers/Careers-Internship-grid";
const Internships = () => {
  return (
    <>
      <InternshipPage />

    </>
  );
};
export default Internships;
export const Head = () => {
  return  <SEO title="Internship, Part-time, and Full-time Opportunities with Layer5" description="Engage, Learn, Share. Join the award-winning, Layer5 open source community and projects." />;
};
