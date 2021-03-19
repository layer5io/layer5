import React from "react";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";

import { FaMapMarkedAlt } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";

// import Banner3SectionWrapper from "./banner3.style";
import Backgroundsvg from "./assets/images/background.svg";

const Banner3 = () => {
  return (
    <React.Fragment>
      <img src={Backgroundsvg} className="background-svg" />
      <Container fullWidthSM>
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
            <div className="vintage-box-container">
              <VintageBox right={true} vintageOne={true} className="vintage-box">
                <Button primary className="banner-btn one" title="Join in" url="/community">
                  <FaMapMarkedAlt size={21} className="icon-left" />
                </Button>
                <Button primary className="banner-btn two" title="Run Meshery" url="/service-mesh-management/meshery">
                  <FiDownloadCloud size={21} className="icon-left" />
                </Button>
              </VintageBox>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Banner3;
