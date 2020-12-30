import React from "react";
import styled from "styled-components";
import { Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import ColorBox from "../../../components/ColorBox";

import { FiDownloadCloud } from "react-icons/fi";
import SmpDark from "../../../assets/images/smp/icon/smp-dark.png";
import SmpLight from "../../../assets/images/smp/icon/smp-light.png";
import SmpWhite from "../../../assets/images/smp/icon/smp-white.png";
import SmPLightTextSide from "../../../assets/images/smp/horizontal/smp-light-text-side.png";
import SmPDarkTextSide from "../../../assets/images/smp/horizontal/smp-dark-text-side.png";
import SmPWhiteTextSide from "../../../assets/images/smp/horizontal/smp-white-text-side.png";

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
            <div className="post-content">
                <Row>
                    <h1 className="layerH3">
                        <strong>Service Mesh Performance</strong>
                    </h1>
                    <Button primary className="l5-dark-yellow" title="DOWNLOAD LOGO ASSETS" url="https://layer5.io/assets/resources/brand/smp-brand-kit.zip" external="true">
                        <FiDownloadCloud size={21} className="icon-left" />
                    </Button>
                </Row>
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
                <Row>
                    <h1 className="layerH3 in">
                            Logos
                    </h1>
                </Row>
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
                <Row>
                    <h1 className="layerH3 in">
                            Colors
                    </h1>
                </Row>
                <Row>
                    <p>
            The SMP color palette consists of gray, green and colors and
            additional shades. The SMP logo should be white or monochrome when
            using project colors as the background.
                    </p>
                </Row>
                <Row>
                    <div className="colors">
                        <Row>
                            <ColorBox R="R: 0" G="G: 211" B="B: 169" colorCode="#00d3a9" />
                            <ColorBox R="R: 0" G="G: 179" B="B: 159" colorCode="#00b39f" />
                            <ColorBox R="R: 71" G="G: 126" B="B: 150" colorCode="#477E96" />
                            <ColorBox R="R: 100" G="G: 120" B="B: 129" colorCode="#647881" />
                            <ColorBox R="R: 60" G="G: 73" B="B: 78" colorCode="#3C494E" />
                        </Row>
                    </div>
                </Row>
            </div>
        </SMPWrap>
    );
};

export default SMPBrand;
