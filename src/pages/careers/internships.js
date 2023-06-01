import React from "react";

import SEO from "../../components/seo";

import InternshipPage from "../../sections/Careers/Careers-Internship-grid";
import Footer from "../../sections/General/Footer";
const Internships = ({ location }) => {
  return (
    <>
      <InternshipPage />
      <Footer location={location} />

    </>
  );
};
export default Internships;
export const Head = () => {
  return  <SEO title="Internship, Part-time, and Full-time Opportunities with Layer5" description="Engage, Learn, Share. Join the award-winning, Layer5 open source community and projects." />;
};
