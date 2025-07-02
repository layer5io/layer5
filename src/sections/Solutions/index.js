import React from "react";
import { Container } from "../../reusecore/Layout";
import MinimizeComplexitySection from "./minimize-complexity-section";
import BannerSection from "./solutions-banner";
import IssuesSection from "./solutions-issues";
import SolutionsWrapper from "./solutions.style";
import ManageProcedures from "./manage-procedures";

const Solutions = (props) => {
  return (
    <SolutionsWrapper>
      <Container>
        <BannerSection />
        <IssuesSection />
        <MinimizeComplexitySection />
        <ManageProcedures />
      </Container>
    </SolutionsWrapper>
  );
};

export default Solutions;
