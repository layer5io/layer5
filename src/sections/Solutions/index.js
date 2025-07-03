import React from "react";
import { Container } from "../../reusecore/Layout";
import MinimizeComplexitySection from "./minimize-complexity-section";
import BannerSection from "./solutions-banner";
import IssuesSection from "./solutions-issues";
import SolutionsWrapper from "./solutions.style";
import ManageProcedures from "./manage-procedures";
import OrganizeDeployments from "./organize-deployments";
import Review from "./review";
import QASection from "./qa-section";
import WhatsNext from "./whats-next";

const Solutions = (props) => {
  return (
    <SolutionsWrapper>
      <Container>
        <BannerSection />
        <IssuesSection />
        <MinimizeComplexitySection />
        <ManageProcedures />
        <OrganizeDeployments/>
        <Review/>
        <QASection/>
        <WhatsNext/>
      </Container>
    </SolutionsWrapper>
  );
};

export default Solutions;
