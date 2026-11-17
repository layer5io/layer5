import React from "react";
import Header from "./header";
import Platform from "./platform";
import { Container } from "../../reusecore/Layout";
import CaseStudyBanner from "../../components/Case-study-banner";

const PlatformEngineeringSolutionPage = () => {
  return (
    <>
      <Header />
      <Platform />
      <Container>
        <CaseStudyBanner caseStudy="infor" />
      </Container>
    </>
  );
};

export default PlatformEngineeringSolutionPage;
