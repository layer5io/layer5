import React from "react";
import {Container, Col, Row} from "../../../../reusecore/Layout";
import MesheryWhiteLogo from "../../../../assets/images/meshery/icon-only/meshery-logo.svg";
import SpecsWrapper from "./specs.style";

const HowitworksSpecs = () => {
  return(
    <SpecsWrapper>
      <div className="management-plane">
        <Container>
          <Row Vcenter>
            <Col className="text" xs={12} lg={6}>
              {/*<img src={MesheryWhiteLogo} alt="meshery logo"/>*/}
              <h2>Meshery is the service mesh management plane</h2>
              <p>Adopt and operate any service mesh with confidence using Meshery's management features</p>
            </Col>
            <Col className="card" xs={12} lg={6}>
                            hhh
            </Col>
          </Row>
        </Container>
      </div>
    </SpecsWrapper>
  );
};

export default HowitworksSpecs;
