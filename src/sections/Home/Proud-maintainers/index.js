import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";

import Envoy from "../../../assets/images/service-mesh-icons/envoy/horizontal/color/envoy-horizontal-color.svg";
import Linkerd from "../../../assets/images/service-mesh-icons/linkerd/horizontal/color/linkerd-horizontal-color.svg";
import ServiceMesh from "../../../assets/images/service-mesh-icons/service-mesh.svg";
import Traefik from "../../../assets/images/service-mesh-icons/traefik.svg";
import Istio from "../../../assets/images/service-mesh-icons/istio.svg";
import OSM from "../../../assets/images/service-mesh-icons/open-service-mesh/stacked/color/openservicemesh-stacked-color.svg";
import SMI from "../../../assets/images/service-mesh-icons/service-mesh-interface/horizontal-stackedtext/color/servicemeshinterface-horizontal-stackedtext-color.svg";
import SMP from "../../../assets/images/service-mesh-performance/horizontal/smp-dark-text-side.svg";
import CNCF from "../../../assets/images/partners/cncf/horizontal/color/cncf-color.svg";
import Meshery from "../../../assets/images/meshery/full-logo/meshery-logo-light-text-side.svg";
import ImageHub from "../../../assets/images/image-hub/layer5-image-hub.svg";
import OAM from "../../../assets/images/partners/oam.svg";

import ProjectItemWrapper from "./proudMaintainers.style";

const ProudMaintainers = () => {
  return (
    <ProjectItemWrapper>
      <Container>
        <Row className="project-title">
          <SectionTitle
            UniWidth="75%"
          >
            <h4>Proudly maintaining and contributing</h4>
            <h2>
              <span>Open Source and Community First</span>.
            </h2>
          </SectionTitle>
          <p className="project-text">
            We are the world’s largest collection of service mesh practitioners and
            maintainers of leading open source projects
            We are open source contributors and maintainers.
          </p>
        </Row>
      </Container>
      <Row className="row">
        <Col xs={3} sm={3} md={3} lg={2}>
          <div className="proj_icon_1">
            <img src={CNCF} alt="CNCF" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2}>
          <div className="proj_icon_1">
            <img src={Envoy} alt="Envoy" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2}>
          <div className="proj_icon_1">
            <img src={Linkerd} alt="Linkerd" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2}>
          <div className="proj_icon_2">
            <img src={ServiceMesh} alt="Service Mesh" />
            <h4>Service Mesh</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2}>
          <div className="proj_icon_1">
            <img src={Meshery} alt="Meshery" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2}>
          <div className="proj_icon_1">
            <img src={OAM} alt="OAM" />
          </div>
        </Col>
      </Row>
      <Row className="row">
        <Col xs={3} sm={3} md={3} lg={2}>
          <div className="proj_icon_2">
            <img src={Istio} alt="Istio" />
            <h4>Istio</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2}>
          <div className="proj_icon_1">
            <img src={OSM} alt="OSM" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2}>
          <div className="proj_icon_1">
            <img src={SMP} alt="SMP" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2}>
          <div className="proj_icon_2">
            <img src={ImageHub} alt="ImageHub" />
            <h4>Image Hub</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2}>
          <div className="proj_icon_1">
            <img src={SMI} alt="SMI" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2}>
          <div className="proj_icon_2">
            <img src={Traefik} alt="Traefik" />
            <h4>Traefik Mesh</h4>
          </div>
        </Col>
      </Row>
      {/* <div className="project_icons_section">
        <div className="proj_icon">
          <img src={CNCF} alt="CNCF" />
        </div>
        <div className="proj_icon">
          <img src={Envoy} alt="Envoy" />
        </div>
        <div className="proj_icon">
          <img src={Linkerd} alt="Linkerd" />
        </div>
        <div className="proj_icon">
          <img src={ServiceMesh} alt="Service Mesh"/>
          <h4>Service Mesh</h4>
        </div>
        <div className="proj_icon">
          <img src={Meshery} alt="Meshery" />
        </div>
        <div className="proj_icon">
          <img src={OAM} alt="OAM" />
        </div>
        <div className="proj_icon istio">
          <img src={Istio} alt="Istio" />
          <h4>Istio</h4>
        </div>
        <div className="proj_icon">
          <img src={OSM} alt="OSM" />
        </div>
        <div className="proj_icon">
          <img src={SMP} alt="SMP" />
        </div>
        <div className="proj_icon">
          <img src={ImageHub} alt="ImageHub" />
          <h4>Image Hub</h4>
        </div>
        <div className="proj_icon">
          <img src={SMI} alt="SMI" />
        </div>
        <div className="proj_icon">
          <img src={Traefik} alt="Traefik" />
          <h4>Traefik Mesh</h4>
        </div>
      </div> */}
    </ProjectItemWrapper>
  );
};

export default ProudMaintainers;
