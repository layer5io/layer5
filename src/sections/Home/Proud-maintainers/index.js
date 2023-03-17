import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import ProjectItemWrapper from "./proudMaintainers.style";
import Traefik from "../../../assets/images/service-mesh-icons/traefik.svg";
import Istio from "../../../assets/images/service-mesh-icons/istio.svg";
import ImageHub from "../../../assets/images/image-hub/layer5-image-hub.svg";
import CNCF from "../../../assets/images/partners/cncf/horizontal/color/cncf-color.svg";
import CNCF_dark from "../../../assets/images/partners/cncf/horizontal/white/cncf-white2.svg";
import OAM_dark from "../../../assets/images/partners/oamWhite.svg";
import OAM from "../../../assets/images/partners/oam.svg";
import Linkerd_dark from "../../../assets/images/service-mesh-icons/linkerd/horizontal/white/linkerd-horizontal-white2.svg";
import Linkerd from "../../../assets/images/service-mesh-icons/linkerd/horizontal/color/linkerd-horizontal-color.svg";
import Meshery_dark from "../../../assets/images/meshery/meshery-logo-white-side.svg";
import Meshery from "../../../assets/images/meshery/full-logo/meshery-logo-light-text-side.svg";
import Envoy_dark from "../../../assets/images/service-mesh-icons/envoy/horizontal/color/envoy-horizontal-white-text.svg";
import Envoy from "../../../assets/images/service-mesh-icons/envoy/horizontal/color/envoy-horizontal-color.svg";
import OSM_dark from "../../../assets/images/service-mesh-icons/open-service-mesh/stacked/white/openservicemesh-stacked-white2.svg";
import OSM from "../../../assets/images/service-mesh-icons/open-service-mesh/stacked/color/openservicemesh-stacked-color.svg";
import SMP_dark from "../../../assets/images/service-mesh-performance/horizontal/smp-light-text-side.svg";
import SMP from "../../../assets/images/service-mesh-performance/horizontal/smp-dark-text-side.svg";
import SMI_dark from "../../../assets/images/service-mesh-icons/service-mesh-interface/horizontal-stackedtext/white/servicemeshinterface-horizontal-stackedtext-white2.svg";
import SMI from "../../../assets/images/service-mesh-icons/service-mesh-interface/horizontal-stackedtext/color/servicemeshinterface-horizontal-stackedtext-color.svg";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";

const ProudMaintainers = () => {

  const { isDark } = useStyledDarkMode();
  const theme = (typeof isDark === "boolean" && isDark) ? "dark" : "light";

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
            <img src={theme === "dark" ? CNCF_dark : CNCF} alt="CNCF" />  </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1 ">
            <img src={theme === "dark" ? Envoy_dark : Envoy} alt="Envoy" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <img src={theme === "dark" ? Linkerd_dark : Linkerd} alt="Linkerd" />
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
            <img src={theme === "dark" ? Meshery_dark : Meshery} alt="Meshery" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <img src={theme === "dark" ? OAM_dark : OAM} alt="OAM" />
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
            <img src={theme === "dark" ? OSM_dark : OSM} alt="OSM" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_1">
            <img src={theme === "dark" ? SMP_dark : SMP} alt="SMP" /></div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_2">
            <img src={ImageHub} alt="ImageHub" />
            <h4>Image Hub</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_1">
            <img src={theme === "dark" ? SMI_dark : SMI} alt="SMI" />
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
