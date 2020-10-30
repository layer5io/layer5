import React from "react";
import styled from "styled-components";
import { Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/NewButton";
import ColorBox from "../../../components/ColorBox";

import SmpDark from "../../../assets/images/smp/icon/smp-dark.png";
import SmpLight from "../../../assets/images/smp/icon/smp-light.png";
import SmpWhite from "../../../assets/images/smp/icon/smp-white.png";
import SmPLightTextSide from "../../../assets/images/smp/horizontal/smp-light-text-side.png";
import SmPDarkTextSide from "../../../assets/images/smp/horizontal/smp-dark-text-side.png";
import SmPWhiteTextSide from "../../../assets/images/smp/horizontal/smp-white-text-side.png";
import { Link } from "gatsby";

const SMPWrap = styled.section`
  .SmpWhite {
    background-color: #000000;
  }
  .smpDark {
    background-color: #3c494e;
  }
  .colors{
    padding-left:25px;
  }
  
  @media (max-width:425px){
    .colors{
      padding-left:50px;
    }
}
`;

const SMPBrand = () => {
    return (
        <SMPWrap>
            <Row className="post-content">
                <Col xs={12} sm={6} lg={6} xl={6}>
                    <h1 className="layerH3">
                        <strong>Service Mesh Performance</strong>
                    </h1>
                </Col>
                <Col xs={12} sm={6} lg={6} xl={6}>
                    <Button className="l5-dark-yellow" title="DOWNLOAD LOGO ASSETS" url="https://layer5.io/assets/resources/brand/smp-brand-kit.zip" external="true" />
                </Col>
                <Col xs={12} sm={12} lg={12} xl={12}>
                    <Row>
                        <p>
              The Service Mesh Performance mark includes SMP name & logo and any
              word, phrase, image, or other designation that identifies the
              source or origin of any Layer5 projects. PLease don't modify the
              marks or use them in a confusing way, including suggesting
              sponsorship or endorsement by Layer5 with another brand(including
              your own)
                        </p>
                    </Row>
                </Col>
                <Row className="ImgDiv">
                    <Col xs={12} sm={4} lg={4} xl={4}>
                        <a href="#">
                            <img src={SmpDark} />
                        </a>
                    </Col>
                    <Col xs={12} sm={4} lg={4} xl={4}>
                        <div className="SmpWhite">
                            <a href="#">
                                <img src={SmpWhite} />
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} sm={4} lg={4} xl={4}>
                        <div className="SmpWhite">
                            <a href="#">
                                <img src={SmpLight} />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} lg={6} xl={6}>
                        <h3 className="layerH3">
                            <strong>Colors</strong>
                        </h3>
                    </Col>
                    <Col xs={12} sm={12} lg={12} xl={12}>
                        <p>
              The SMP color palette consists of gray, green and colors and
              additional shades. The SMP logo should be white or monochrome when
              using project colors as the background.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} lg={12} xl={12}>
                        <h4 className="layerH3">Web</h4>
                    </Col>
                    <div className="colors">
                        <Row>
                            <ColorBox R="R: 0" G="G: 211" B="B: 169" colorCode="#00d3a9" />
                            <ColorBox R="R: 0" G="G: 179" B="B: 159" colorCode="#00b39f" />
                            <ColorBox R="R: 71" G="G: 126" B="B: 150" colorCode="#477E96" />
                            <ColorBox R="R: 100" G="G: 120" B="B: 129" colorCode="#647881" />
                            <ColorBox R="R: 60" G="G: 73" B="B: 78" colorCode="#3C494E" />
                        </Row>
                    </div>
                    <Col xs={12} sm={12} lg={12} xl={12}>
                        <p className="layerH3">Logos to use online:</p>
                    </Col>
                    <Row className="ImgDiv">
                        <Col xs={12} sm={4} lg={4} xl={4}>
                            <a href="#">
                                <img src={SmPDarkTextSide} />
                            </a>
                        </Col>
                        <Col xs={12} sm={4} lg={4} xl={4}>
                            <div className="SmpWhite">
                                <a href="#">
                                    <img src={SmPWhiteTextSide} />
                                </a>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} lg={4} xl={4}>
                            <div className="SmpWhite">
                                <a href="#">
                                    <img src={SmPLightTextSide} />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Row>
        </SMPWrap>
    );
};

export default SMPBrand;
