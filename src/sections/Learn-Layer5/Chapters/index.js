import React from "react";
// import Card from "../../../components/Card";
// import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";

import { SectionsWrapper } from "./chapters.style";

const Sections = (data) => {
  return (
    <SectionsWrapper>
      <PageHeader title="Learn Layer5 Chpaters"/>
    </SectionsWrapper>
  );
};

export default Sections;
