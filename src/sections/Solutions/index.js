import React from "react";
import { Container } from "../../reusecore/Layout";
import BannerSection from "./solutions-banner";
import SolutionsWrapper from "./solutions.style";

const Solutions = (props) => {
  return (
    <SolutionsWrapper>
      <Container>
        <BannerSection />
      </Container>
    </SolutionsWrapper>
  );
};

export default Solutions;
