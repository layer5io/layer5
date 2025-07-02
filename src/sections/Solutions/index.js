import React from "react";
import { Container } from "../../reusecore/Layout";
import ManageProcedures from "./manage-procedures";
import MinimizeComplexitySection from "./minimize-complexity-section";
import OrganizeDeployments from "./organize-deployments";
import Review from "./review";
import BannerSection from "./solutions-banner";
import IssuesSection from "./solutions-issues";
import SolutionsWrapper from "./solutions.style";

const Solutions = (props) => {
  return (
    <SolutionsWrapper>
      <Container>
        <BannerSection />
        <IssuesSection />
        <MinimizeComplexitySection />
        <ManageProcedures />
        <OrganizeDeployments />
        <Review />
      </Container>
    </SolutionsWrapper>
  );
};

export default Solutions;
