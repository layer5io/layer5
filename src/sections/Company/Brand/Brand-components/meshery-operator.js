import React from "react";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";
import { Row, Col } from "../../../../reusecore/Layout";
import Button from "../../../../reusecore/Button";
import ColorBox from "../../../../components/ColorBox";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import MesheryOperatorDark from "../../../../assets/images/meshery-operator/meshery-operator.png";
import MesheryOperator from "../../../../assets/images/meshery-operator/meshery-operator-white.png";

const MesheryOperatorWrapper = styled.section`
    .sub-project {
        margin-top: -2rem;
    }
`;

const MesheryOperatorBrand = () => {
  return (
    <MesheryOperatorWrapper>
      <div className="post-content">
        <Row className="sub-project brand-section">
          <Col xs={12} sm={6}>
            <h2 className="layerH3">
            Meshery Operator
            </h2>
          </Col>
          <Col xs={12} sm={6} className="download-button">
            <a href="/brand/meshery-operator-brand-kit.zip">
              <Button primary title="Download Logo Assets" external={true}>
                <FiDownloadCloud size={21} className="icon-left" />
              </Button>
            </a>
          </Col>
          <Col>
            <p>
            The Meshery Operator mark includes the Meshery Operator name & logo, and any word,
            phrase, image, or other designation that identifies the source or
            origin of any Layer5 projects. Please don’t modify the marks or
            use them in a confusing way, including suggesting sponsorship or
            endorsement by Layer5, or in a way that confuses Layer5 with
            another brand (including your own).
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="layerH3 in">
            Logos
            </h3>
          </Col>
          <SRLWrapper>
            <Row Vcenter className="ImgDiv">
              <Col xs={12} sm={4}>
                <img src={MesheryOperatorDark} alt="MesheryOperatorDark Logo"/>
              </Col>
              <Col xs={12} sm={4} className="logo">
                <img src={MesheryOperator} alt="MesheryOperator Logo"/>
              </Col>
            </Row>
          </SRLWrapper>
        </Row>
        <Row>
          <Col>
            <h3 className="layerH3 in">
              Colors
            </h3>
          </Col>
          <Col>
            <p>
              The Meshery Operator color palette consists of the primary Meshery Operator color
              and additional shades. The Meshery Operator logo should be white or
              monochrome tonal when using a color background.
            </p>
          </Col>
          <Row className="color-code-wrapper">
            <ColorBox name="Charcoal" R="60" G="73" B="79" colorCode="#3C494F" />
            <ColorBox name="Keppel" R="0" G="179" B="159" colorCode="#00B39F" />
            <ColorBox name="Caribbean Green" R="0" G="211" B="169" colorCode="#00D3A9" />
            <ColorBox name="Blue Bayoux" R="100" G="120" B="129" colorCode="#647881" />
          </Row>
        </Row>
      </div>
    </MesheryOperatorWrapper>
  );
};

export default MesheryOperatorBrand;
