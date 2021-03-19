import React from "react";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";
// import ParticleComponent from "../../../reusecore/Particle";

import { FaMapMarkedAlt } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";

// import BannerSectionWrapper from "./banner.style";

const BannerDefault = ({Style_element}) => {
  return (
    <Style_element>
      {/* <ParticleComponent /> */}
      <Container fullWidthSM>
        <Row>
          <Col sm={8} lg={8} className="section-title-wrapper">

            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4>Cloud Native Management</h4>
              <h1>
                Representing <span>every</span> service mesh
              </h1>
            </SectionTitle>
            <p>
              The Layer5 community represents the largest collection of service mesh projects and their maintainers in the world.
            </p>
            <VintageBox right={true} vintageOne={true}>
              <Button primary className="banner-btn one" title="Join in" url="/community">
                <FaMapMarkedAlt size={21} className="icon-left" />
              </Button>
              <Button primary className="banner-btn two" title="Run Meshery" url="/service-mesh-management/meshery">
                <FiDownloadCloud size={21} className="icon-left" />
              </Button>
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </Style_element>
  );
};

export default BannerDefault;
