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
            <Row className="post-content">
                <Row>
                    <h1 className="layerH3">
                        <strong>Meshery</strong>
                    </h1>
                    <Button primary className="l5-dark-yellow" title="Donwload Logo Assets" url="https://layer5.io/assets/resources/brand/layer5-brand-kit.zip" external="true">
                        <FiDownloadCloud size={21} className="icon-left" />
                    </Button>
                </Row>
                <Row>
                    <p>
                    The Meshery mark includes the Meshery name & logo, and any word,
                    phrase, image, or other designation that identifies the source or
                    origin of any Layer5 projects. Please don’t modify the marks or
                    use them in a confusing way, including suggesting sponsorship or
                    endorsement by Layer5, or in a way that confuses Layer5 with
                    another brand (including your own).
                    </p>
                </Row>
                <Row>
                    <h1 className="layerH3 in">
                            Logos
                    </h1>
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
                    <h1 className="layerH3 in">
                            Colors
                    </h1>
                </Row>
                <Row>
                    <p>
            The Meshery color palette consists of the primary Meshery color
            and additional shades. The Meshery logo should be white or
            monochrome tonal when using a color background.
                    </p>
                </Row>
                <Row>
                    <div className="colors">
                        <Row>
                            <ColorBox R="R: 60" G="G: 73" B="B: 79" colorCode="#3c494f" />
                            <ColorBox R="R: 0" G="G: 179" B="B: 159" colorCode="#00b39f" />
                            <ColorBox R="R: 0" G="G: 211" B="B: 169" colorCode="#00d3a9" />
                        </Row>
                    </div>
                </Row>
            </Row>
        </MesheryWrapper>
    );
};

export default MesheryBrand;
