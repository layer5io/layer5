import React from "react";
// import Card from "../../../components/Card";
// import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";

import { LearnPathWrapper } from "./learningpath.style";

const LearningPathGrid = (data) => {
  return (
    <LearnPathWrapper>
      <PageHeader title="Learn Layer5 Paths"/>
    </LearnPathWrapper>
  );
};

export default LearningPathGrid;
