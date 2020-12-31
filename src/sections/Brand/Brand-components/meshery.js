import React from "react";
import styled from "styled-components";
import { Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import ColorBox from "../../../components/ColorBox";
import { FiDownloadCloud } from "react-icons/fi";
import MeshLogoLightText from "../../../assets/images/meshery/meshery-logo-light-text.png";
import MeshLogoTagLightTextSide from "../../../assets/images/meshery/meshery-logo-tag-light-text-side.png";
import MeshLogoLightTextSide from "../../../assets/images/meshery/meshery-logo-light-text-side.png";
import MeshDarkText from "../../../assets/images/meshery/meshery-dark-text.png";
import MeshDarkTagText from "../../../assets/images/meshery/meshery-dark-tag-text.png";

const MesheryWrapper = styled.section`
.colors{
    padding-left:25px;
  }

@media (max-width:425px){
    .colors{
      padding-left:50px;
    }
}
`;

const MesheryBrand = () => {
    return (
        <MesheryWrapper>
            <div className="post-content">
                <Row>
                    <Col lg={6} md={6} sm={6}>
                        <h1 className="layerH3">
                            Meshery
                        </h1>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <Button primary className="l5-dark-yellow" title="Donwload Logo Assets" url="https://layer5.io/assets/resources/brand/meshery-brand-kit.zip" external="true">
                            <FiDownloadCloud size={21} className="icon-left" />
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                The Meshery mark includes the Meshery name & logo, and any word,
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
                        <h1 className="layerH3 in">
                                Logos
                        </h1>
                    </Col>
                </Row>
                <Row className="ImgDiv">
                    <Col xs={12} sm={4} lg={4} xl={4}>
                        <a href="#">
                            <img src={MeshDarkText} />
                        </a>
                    </Col>
                    <Col xs={12} sm={4} lg={4} xl={4}>
                        <a href="#">
                            <img src={MeshDarkTagText} />
                        </a>
                    </Col>
                </Row>
                <Row className="ImgDiv">
                    <Col xs={12} sm={4} lg={4} xl={4}>
                        <a href="#">
                            <img src={MeshLogoLightText} />
                        </a>
                    </Col>
                    <Col xs={12} sm={4} lg={4} xl={4}>
                        <a href="#">
                            <img src={MeshLogoTagLightTextSide} />
                        </a>
                    </Col>
                    <Col xs={12} sm={4} lg={4} xl={4}>
                        <a href="#">
                            <img src={MeshLogoLightTextSide} />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className="layerH3 in">
                                Colors
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                The Meshery color palette consists of the primary Meshery color
                and additional shades. The Meshery logo should be white or
                monochrome tonal when using a color background.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <ColorBox name="Charcoal" R="60" G="73" B="79" colorCode="#3C494F" />
                    <ColorBox name="Keppel" R="0" G="179" B="159" colorCode="#00B39F" />
                    <ColorBox name="Caribbean Green" R="0" G="211" B="169" colorCode="#00D3A9" />
                </Row>
            </div>
        </MesheryWrapper>
    );
};

export default MesheryBrand;
