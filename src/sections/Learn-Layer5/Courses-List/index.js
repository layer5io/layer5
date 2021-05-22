import React from "react";
// import Card from "../../../components/Card";
// import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";

import { LearnPathWrapper } from "./courseslist.style";

const LearningPathGrid = (data) => {
  return (
    <LearnPathWrapper>
      <PageHeader title="Learn Layer5 Courses List"/>
    </LearnPathWrapper>
  );
};

export default LearningPathGrid;
