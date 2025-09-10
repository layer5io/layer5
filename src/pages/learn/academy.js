import React from "react";
import HeroSection from "../../components/Academy/Hero-Section/HeroSection";
import OutlinedFeatures from "../../components/Academy/Outlined-Features/OutlinedFeatures";
import AcademyFeatures from "../../components/Academy/Academy-Features/AcademyFeatures";

import SEO from "../../components/seo";

const AcademySection = () => {

  return (
    <div className="academy-page">
      <HeroSection />
      <OutlinedFeatures />
      <AcademyFeatures />
    </div>
  );
};

export default AcademySection;

export const Head = () => {
  return (
    <SEO
      title="Academy"
      description="Layer5 Academy - Learn cloud native technologies, service mesh, and infrastructure management with hands-on tutorials and expert guidance."
    />
  );
};