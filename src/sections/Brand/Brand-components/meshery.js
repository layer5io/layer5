import React from "react";
import styled from "styled-components";
import { Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import ColorBox from "../../../components/ColorBox";
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
                <Col xs={12} sm={6} lg={6} xl={6}>
                    <h1 className="layerH3">
                        <strong>Meshery</strong>
                    </h1>
                </Col>
                <Col xs={12} sm={6} lg={6} xl={6}>
                    <Button primary className="l5-dark-yellow" title="DOWNLOAD LOGO ASSETS" url="https://layer5.io/assets/resources/brand/meshery-brand-kit.zip" external="true" />
                </Col>
                <Col xs={12} sm={12} lg={12} xl={12}>
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
                </Col>
                <Row>
                    <Col xs={12} sm={6} lg={6} xl={6}>
                        <h3 className="layerH3">
                            <strong>Colors</strong>
                        </h3>
                    </Col>
                    <Col xs={12} sm={12} lg={12} xl={12}>
                        <p>
              The Meshery color palette consists of the primary Meshery color
              and additional shades. The Meshery logo should be white or
              monochrome tonal when using a color background.
                        </p>
                    </Col>
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
                <Row>
                    <Col xs={12} sm={12} lg={12} xl={12}>
                        <h4 className="layerH3">Web</h4>
                    </Col>
                    <Col xs={12} sm={12} lg={12} xl={12}>
                        <p className="layerH3">Logos to use online:</p>
                    </Col>
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
                </Row>
            </Row>
        </MesheryWrapper>
    );
};

export default MesheryBrand;
