import React from "react";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";
import { Row, Col } from "../../../../reusecore/Layout";
import Button from "../../../../reusecore/Button";
import ColorBox from "../../../../components/ColorBox";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import AcademyIcon from "../../../../assets/images/academy/academy-layer5.svg";
import AcademyLight from "../../../../assets/images/academy/academy-layer5-light.svg";

const AcademyWrapper = styled.section`
  @media (max-width: 575px) {
    .brandHeader {
      padding: 3rem 0;
    }
  }
`;

const AcademyBrand = () => {
  return (
    <AcademyWrapper>
      <div className="post-content">
        <Row style={{
          flexWrap: "wrap"
        }} className="brand-section"
        >
          <Col $xs={12} $sm={6}>
            <h1 className="layerH3">
              Academy
            </h1>
          </Col>
          <Col $xs={12} $sm={6} className="download-button">
            <a href="/brand/academy-brand-kit.zip">
              <Button $primary title="Download Logo Assets" $external={true}>
                <FiDownloadCloud size={21} className="icon-left" />
              </Button>
            </a>
          </Col>
          <Col>
            <p>
              The Academy mark includes the Academy name & logo, and any word,
              phrase, image, or other designation that identifies the source or
              origin of any Layer5 projects. Please don't modify the marks or
              use them in a confusing way, including suggesting sponsorship or
              endorsement by Layer5, or in a way that confuses Layer5 with
              another brand (including your own).
            </p>
          </Col>
        </Row>
        <Row style={{
          flexWrap: "wrap"
        }}
        >
          <Col>
            <h2 className="layerH3 in">
              Logos
            </h2>
          </Col>
          <SRLWrapper>
            <Row $Vcenter className="ImgDiv">
              <Col $xs={12} $sm={4}>
                <img src={AcademyIcon} style={{ minWidth: "200px" }} alt="Academy Logo" />
              </Col>
              <Col $xs={12} $sm={4}>
                <img src={AcademyLight} style={{ minWidth: "200px" }} alt="AcademyLight Logo" />
              </Col>
            </Row>
          </SRLWrapper>
        </Row>
        <Row style={{
          flexWrap: "wrap"
        }}
        >
          <Col $xs={12}>
            <h2 className="layerH3 in">
              Colors
            </h2>
          </Col>
          <Col $xs={12}>
            <p>
              The Academy color palette consists of the primary Academy color
              and additional shades. The Academy logo should be white or
              monochrome tonal when using a color background.
            </p>
          </Col>
          <Row style={{
            flexWrap: "wrap"
          }} className="color-code-wrapper"
          >
            <ColorBox name="Keppel" R="0" G="179" B="159" colorCode="#00B39F" />
            <ColorBox name="Caribbean Green" R="0" G="211" B="169" colorCode="#00D3A9" />
            <div className="white-color-box">
              <ColorBox name="White" R="255" G="255" B="255" dark colorCode="#FFFFFF" />
            </div>
          </Row>
        </Row>
      </div>
    </AcademyWrapper>
  );
};

export default AcademyBrand;
