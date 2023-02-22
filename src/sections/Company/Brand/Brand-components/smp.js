import React from "react";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";
import { Row, Col } from "../../../../reusecore/Layout";
import Button from "../../../../reusecore/Button";
import ColorBox from "../../../../components/ColorBox";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import SmpDark from "../../../../assets/images/service-mesh-performance/icon/smp-dark.png";
import SmpLight from "../../../../assets/images/service-mesh-performance/icon/smp-light.png";
import SmpWhite from "../../../../assets/images/service-mesh-performance/icon/smp-white.png";
import SmPLightTextSide from "../../../../assets/images/service-mesh-performance/horizontal/smp-light-text-side.png";
import SmPDarkTextSide from "../../../../assets/images/service-mesh-performance/horizontal/smp-dark-text-side.png";
import SmPWhiteTextSide from "../../../../assets/images/service-mesh-performance/horizontal/smp-white-text-side.png";

const SMPWrap = styled.section`
    .smp-logo {
        margin: 0.5rem;
    }
`;

const SMPBrand = () => {
  return (
    <SMPWrap>
      <div className="post-content">
        <Row className="brand-section">
          <Col xs={12} sm={6}>
            <h1 className="layerH3">
              <strong>Service Mesh Performance</strong>
            </h1>
          </Col>
          <Col xs={12} sm={6} className="download-button">
            <a href="/brand/smp-brand-kit.zip">
              <Button primary title="Download Logo Assets" external={true}>
                <FiDownloadCloud size={21} className="icon-left" />
              </Button>
            </a>
          </Col>
          <Col>
            <p>
              The Service Mesh Performance mark includes SMP name & logo and any
              word, phrase, image, or other designation that identifies the
              source or origin of any Layer5 projects. PLease don't modify the
              marks or use them in a confusing way, including suggesting
              sponsorship or endorsement by Layer5 with another brand(including
              your own)
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="layerH3 in">
              Logos
            </h2>
          </Col>
          <SRLWrapper>
            <Row Vcenter className="ImgDiv smp-logo">
              <Col xs={12} sm={4}>
                <img src={SmpDark} alt="SmpDark Logo"/>
              </Col>
              <Col xs={12} sm={4}>
                <div className="logo">
                  <img src={SmpWhite} alt="SmpWhite Logo"/>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="logo">
                  <img src={SmpLight} alt="SmpLight Logo"/>
                </div>
              </Col>
            </Row>
            <Row Vcenter className="ImgDiv smp-logo">
              <Col xs={12} sm={4}>
                <img src={SmPDarkTextSide} alt="SmpDarkTextSide Logo"/>
              </Col>
              <Col xs={12} sm={4}>
                <div className="logo">
                  <img src={SmPWhiteTextSide} alt="SmPWhiteTextSide Logo"/>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="logo">
                  <img src={SmPLightTextSide} alt="SmPLightTextSide Logo"/>
                </div>
              </Col>
            </Row>
          </SRLWrapper>
        </Row>
        <Row>
          <Col>
            <h2 className="layerH3 in">
                            Colors
            </h2>
          </Col>
          <Col>
            <p>
                            The SMP color palette consists of gray, green and blue colors along with
                            additional shades. The SMP logo should be white or monochrome when
                            using project colors as the background.
            </p>
          </Col>
          <Row className="color-code-wrapper">
            <ColorBox name="Charcoal" R="60" G="73" B="79" colorCode="#3C494F" />
            <ColorBox name="Keppel" R="0" G="179" B="159" colorCode="#00B39F" />
            <ColorBox name="Caribbean Green" R="0" G="211" B="169" colorCode="#00D3A9" />
            <ColorBox name="Teal Blue" R="71" G="126" B="150" colorCode="#477E96" />
          </Row>
        </Row>
      </div>
    </SMPWrap>
  );
};

export default SMPBrand;
