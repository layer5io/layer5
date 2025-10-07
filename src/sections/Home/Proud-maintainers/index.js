import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import ProjectItemWrapper from "./proudMaintainers.style";
import Traefik from "../../../assets/images/service-mesh-icons/traefik.svg";
import Istio from "../../../assets/images/service-mesh-icons/istio.svg";
import ImageHub from "../../../assets/images/image-hub/layer5-image-hub.svg";

import CNCF from "../../../assets/images/partners/cncf/horizontal/color/cncf-colorMode.svg";
import OAM from "../../../assets/images/partners/oam-colorMode.svg";
import Linkerd from "../../../assets/images/service-mesh-icons/linkerd/horizontal/color/linkerd-horizontal-colorMode.svg";
import Meshery from "../../../assets/images/meshery/meshery-logo-colorMode.svg";
import Envoy from "../../../assets/images/service-mesh-icons/envoy/horizontal/color/envoy-horizontal-colorMode.svg";
import OSM from "../../../assets/images/service-mesh-icons/open-service-mesh/stacked/color/openservicemesh-stacked-colorMode.svg";
import SMP from "../../../assets/images/service-mesh-performance/horizontal/smp-colorMode.svg";
import SMI from "../../../assets/images/service-mesh-icons/service-mesh-interface/horizontal-stackedtext/color/servicemeshinterface-horizontal-stackedtext-colorMode.svg";

const ProudMaintainers = () => {
  return (
    <ProjectItemWrapper>
      <Container >
        <Row className="project-title">

          <SectionTitle $UniWidth="100%">
            <h4>Proudly maintaining and contributing</h4>
            <h2>
              <span>Open Source and Community First</span>.
            </h2>
          </SectionTitle>

          <p className="project-text">
            At Layer5, we champion developer-defined infrastructure, giving engineers the power to reshape application delivery. We empower operators in reimagining how they manage modern infrastructure: collaboratively.
          </p>

        </Row>
      </Container>
      <Row className="row">
        <Col $xs={3} $sm={3} $md={3} $lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <img src={CNCF} alt="CNCF" />
          </div>
        </Col>
        <Col $xs={3} $sm={3} $md={3} $lg={3} className="proj_row_1_col">
          <div className="proj_icon_1 ">
            <img src={Envoy} alt="Envoy" />
          </div>
        </Col>
        <Col $xs={3} $sm={3} $md={3} $lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <img src={Linkerd} alt="Linkerd" />
          </div>
        </Col>
        <Col $xs={3} $sm={3} $md={3} $lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <img src={Meshery} alt="Meshery" />
          </div>
        </Col>
        <Col $xs={3} $sm={3} $md={3} $lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <img src={OAM} alt="OAM" />
          </div>
        </Col>
      </Row>
      <Row className="row row_2">
        <Col $xs={3} $sm={3} $md={3} $lg={2} className="proj_row_2_col">
          <div className="proj_icon_2">
            <img src={Istio} alt="Istio" />
            <h4>Istio</h4>
          </div>
        </Col>
        <Col $xs={3} $sm={3} $md={3} $lg={2} className="proj_row_2_col">
          <div className="proj_icon_1">
            <img src={OSM} alt="OSM" />
          </div>
        </Col>
        <Col $xs={3} $sm={3} $md={3} $lg={2} className="proj_row_2_col">
          <div className="proj_icon_1">
            <img src={SMP} alt="SMP" /></div>
        </Col>
        <Col $xs={3} $sm={3} $md={3} $lg={2} className="proj_row_2_col">
          <div className="proj_icon_2">
            <img src={ImageHub} alt="ImageHub" />
            <h4>Image Hub</h4>
          </div>
        </Col>
        <Col $xs={3} $sm={3} $md={3} $lg={2} className="proj_row_2_col">
          <div className="proj_icon_1">
            <img src={SMI} alt="SMI" />
          </div>
        </Col>
        <Col $xs={3} $sm={3} $md={3} $lg={2} className="proj_row_2_col">
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
