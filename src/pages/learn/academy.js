import React from "react";
import HeroSection from "../../components/Academy/Hero-Section/HeroSection";
import LearnerSection from "../../components/Academy/Learners-Section/LearnerSection";
import EnterpriseSection from "../../components/Academy/Enterprise-Section/EnterpriseSection";
import SEO from "../../components/seo";

const AcademySection = () => {

  return (
    <div className="academy-page">
      <HeroSection />
      <LearnerSection />
      <EnterpriseSection />
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
