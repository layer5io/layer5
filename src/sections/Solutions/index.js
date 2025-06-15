import React from "react";
import { Container } from "../../reusecore/Layout";
import BannerSection from "./solutions-banner";
import SolutionsWrapper from "./solutions.style";
import IssuesSection from "./solutions-issues";

const Solutions = (props) => {
  return (
    <SolutionsWrapper>
      <Container>
        <BannerSection />
        <IssuesSection />
      </Container>
    </SolutionsWrapper>
  );
};

export default Solutions;
