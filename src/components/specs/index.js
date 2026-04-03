import React from "react";
import { Container, Col, Row } from "../../reusecore/Layout";
import DataCard from "./data-card";
import VintageBox from "../../reusecore/VintageBox";
import Button from "../../reusecore/Button";

import SpecsWrapper from "./specs.style";

const HowMesheryWorksSpecs = ({ title, desc, btnUrl }) => {
  return (
    <SpecsWrapper>
      <div className="management-plane">
        <Container>
          <Row $Vcenter>
            <Col className="text" xs={12} lg={6}>
              <h2>{title}</h2>
              <p>{desc}</p>
              <VintageBox left={true} vintageTwo={true}>
                <Button
                  $primary
                  $url={btnUrl}
                  title="Learn More"
                />
              </VintageBox>
            </Col>
            <Col className="card" xs={12} lg={6}>
              <DataCard />
            </Col>
          </Row>
        </Container>
      </div>
    </SpecsWrapper>
  );
};

export default HowMesheryWorksSpecs;
