import React from "react";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";
import { Row, Col } from "../../../../reusecore/Layout";
import Button from "../../../../reusecore/Button";
import ColorBox from "../../../../components/ColorBox";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import MeshmarkDark from "../../../../assets/images/meshmark/icon/meshmark-dark.png";
import MeshmarkLight from "../../../../assets/images/meshmark/icon/meshmark-light.png";
import MeshmarkWhite from "../../../../assets/images/meshmark/icon/meshmark-white.png";
import MeshmarkLightTextSide from "../../../../assets/images/meshmark/horizontal/meshmark-light-text-side.png";
import MeshmarkDarkTextSide from "../../../../assets/images/meshmark/horizontal/meshmark-dark-text-side.png";
import MeshmarkWhiteTextSide from "../../../../assets/images/meshmark/horizontal/meshmark-white-text-side.png";
import MeshmarkTextLight from "../../../../assets/images/meshmark/text/meshmark-light-text-charcoal.png";
import MeshmarkTextDark from "../../../../assets/images/meshmark/text/meshmark-dark-text.png";
import MeshmarkTextBlue from "../../../../assets/images/meshmark/text/meshmark-light-text-blue.png";

const SMPWrap = styled.section`
    .smp-logo {
        margin: 0.5rem;
    }
`;

const MeshMarkBrand = () => {
  return (
    <SMPWrap>
      <div className="post-content">
        <Row className="brand-section">
          <Col xs={12} sm={6}>
            <h1 className="layerH3">
              <strong>MeshMark</strong>
            </h1>
          </Col>
          <Col xs={12} sm={6} className="download-button">
            <a href="/brand/meshmark-brand-kit.zip">
              <Button primary title="Download Logo Assets" external={true}>
                <FiDownloadCloud size={21} className="icon-left" />
              </Button>
            </a>
          </Col>
          <Col>
            <p>
              The MeshMark mark includes MeshMark name & logo and any
              word, phrase, image, or other designation that identifies the
              source or origin of any Layer5 projects. PLease don't modify the
              marks or use them in a confusing way, including suggesting
              sponsorship or endorsement by Layer5 with another brand (including
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
                <img src={MeshmarkDark} alt="MeshmarkDark Logo"/>
              </Col>
              <Col xs={12} sm={4}>
                <div className="logo">
                  <img src={MeshmarkWhite} alt="MeshMarkWhite Logo"/>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="logo">
                  <img src={MeshmarkLight} alt="MeshmarkLightLogo"/>
                </div>
              </Col>
            </Row>
            <Row Vcenter className="ImgDiv MeshMark-logo">
              <Col xs={12} sm={4}>
                <img src={MeshmarkDarkTextSide} alt="MeshMarkDarkTextSide Logo"/>
              </Col>
              <Col xs={12} sm={4}>
                <div className="logo">
                  <img src={MeshmarkWhiteTextSide} alt="MeshMarkWhiteTextSide Logo"/>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="logo">
                  <img src={MeshmarkLightTextSide} alt="MeshmarkLightTextSide Logo"/>
                </div>
              </Col>
            </Row>
            <Row Vcenter className="ImgDiv smp-logo">
              <Col xs={12} sm={4}>
                <img src={MeshmarkTextLight} alt="MeshmarkTextLight Logo"/>
              </Col>
              <Col xs={12} sm={4}>
                <img src={MeshmarkTextBlue} alt="MeshMarkTextBlue Logo"/>
              </Col>
              <Col xs={12} sm={4}>
                <img src={MeshmarkTextDark} alt="MeshmarkTextDark Logo"/>
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
                            The MeshMark color palette consists of gray, green and blue colors along with
                            additional shades. The MeshMark logo should be white or monochrome when
                            using project colors as the background.
            </p>
          </Col>
          <Row className="color-code-wrapper">
            <ColorBox name="Charcoal" R="60" G="73" B="79" colorCode="#3C494F" />
            <ColorBox name="Keppel" R="0" G="179" B="159" colorCode="#00B39F" />
            <ColorBox name="Caribbean Green" R="0" G="211" B="169" colorCode="#00D3A9" />
            <ColorBox name="Teal Blue" R="71" G="126" B="150" colorCode="#477E96" />
            <ColorBox name="Blue Bayoux" R="100" G="120" B="129" colorCode="#647881" />
          </Row>
        </Row>
      </div>
    </SMPWrap>
  );
};

export default MeshMarkBrand;
