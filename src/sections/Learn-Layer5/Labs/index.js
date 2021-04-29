import React from "react";
// import Card from "../../../components/Card";
// import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";

import { LearnLabsWrapper } from "./labs.style";

const LearnLabs = (data) => {
  return (
    <LearnLabsWrapper>
      <PageHeader title="Learn Layer5 Labs"/>
    </LearnLabsWrapper>
  );
};

export default LearnLabs;
