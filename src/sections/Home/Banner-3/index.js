import React from "react";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";

import { FaMapMarkedAlt } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";

import Backgroundsvg from "./assets/images/background.svg";

const Banner3 = () => {
  return (
    <Container fullWidthSM>
      <img src={Backgroundsvg} className="background-svg" />
      <Row>
        <Col sm={8} lg={8} className="section-title-wrapper">

          <SectionTitle
            className="section-title"
            leftAlign={true}
            UniWidth="100%"
          >
            <h1>The service mesh company</h1>
            <h2>
              representing <span>every</span> service mesh
            </h2>
          </SectionTitle>
          <p>
            The Layer5 community represents the largest collection of service mesh projects and their maintainers in the world.
          </p>
          <span className="vintage-box-container">
            <VintageBox right={true} vintageOne={true}>
              <Button primary className="banner-btn one" title="Join in" url="/community">
                <FaMapMarkedAlt size={21} className="icon-left" />
              </Button>
              <Button primary className="banner-btn two" title="Run Meshery" url="/service-mesh-management/meshery">
                <FiDownloadCloud size={21} className="icon-left" />
              </Button>
            </VintageBox>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner3;
