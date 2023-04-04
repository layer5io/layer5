import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import ProjectItemWrapper from "./proudMaintainers.style";
import Traefik from "../../../assets/images/service-mesh-icons/traefik.svg";
import Istio from "../../../assets/images/service-mesh-icons/istio.svg";
import ImageHub from "../../../assets/images/image-hub/layer5-image-hub.svg";

import { ReactComponent as CNCF } from "../../../assets/images/partners/cncf/horizontal/color/cncf-colorMode.svg";
import { ReactComponent as OAM } from "../../../assets/images/partners/oam-colorMode.svg";
import { ReactComponent as Linkerd } from "../../../assets/images/service-mesh-icons/linkerd/horizontal/color/linkerd-horizontal-colorMode.svg";
import { ReactComponent as Meshery } from "../../../assets/images/meshery/meshery-logo-colorMode.svg";
import { ReactComponent as Envoy } from "../../../assets/images/service-mesh-icons/envoy/horizontal/color/envoy-horizontal-colorMode.svg";
import { ReactComponent as OSM } from "../../../assets/images/service-mesh-icons/open-service-mesh/stacked/color/openservicemesh-stacked-colorMode.svg";
import { ReactComponent as SMP } from "../../../assets/images/service-mesh-performance/horizontal/smp-colorMode.svg";
import { ReactComponent as SMI } from "../../../assets/images/service-mesh-icons/service-mesh-interface/horizontal-stackedtext/color/servicemeshinterface-horizontal-stackedtext-colorMode.svg";

const ProudMaintainers = () => {
  return (
    <ProjectItemWrapper>
      <Container >
        <Row className="project-title">

          <SectionTitle UniWidth="100%">
            <h4>Proudly maintaining and contributing</h4>
            <h2>
              <span>Open Source and Community First</span>.
            </h2>
          </SectionTitle>

          <p className="project-text">
            We are the world’s largest collection of service mesh practitioners
            and maintainers of leading open source projects.
          </p>

        </Row>
      </Container>
      <Row className="row">
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <CNCF alt="CNCF" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1 ">
            <Envoy alt="Envoy" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <Linkerd alt="Linkerd" />
          </div>
        </Col>
        {/* <Col xs={3} sm={3} md={3} lg={2}>
          <div className="proj_icon_2">
            <img src={ServiceMesh} alt="Service Mesh" />
            <h4>Service Mesh</h4>
          </div>
        </Col> */}
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <Meshery alt="Meshery" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <OAM alt="OAM" />
          </div>
        </Col>
      </Row>
      <Row className="row row_2">
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_2">
            <img src={Istio} alt="Istio" />
            <h4>Istio</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_1">
            <OSM alt="OSM" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_1">
            <SMP alt="SMP" /></div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_2">
            <img src={ImageHub} alt="ImageHub" />
            <h4>Image Hub</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_1">
            <SMI alt="SMI" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_2">
            <img src={Traefik} alt="Traefik" />
            <h4>Traefik Mesh</h4>
          </div>
        </Col>
      </Row>
    </ProjectItemWrapper>
  );
};

export default ProudMaintainers;
