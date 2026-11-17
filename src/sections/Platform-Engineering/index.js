import React from "react";
import Header from "./header";
import Platform from "./platform";
import CaseStudyBanner from "../../components/Case-study-banner";

const PlatformEngineeringSolutionPage = () => {
  return (
    <>
      <Header />
      <Platform />
      <CaseStudyBanner caseStudy="infor" />
    </>
  );
};

export default PlatformEngineeringSolutionPage;
