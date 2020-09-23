import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "../../reusecore/Layout"
import BrandPageWrapper from "./brandPage.style"
import Layer5CommunityWhite from "../../images/layer5/layer5-tag-white-bg.png"
import Layer5TagDark from "../../images/layer5/layer5-tag-community-white.png"
import ColorScheme from "../../images/layer5/layer5-color-scheme.png"
import PrintScheme from "../../images/layer5/layer5-print-color-scheme.png"
import Bookmarks from "../../images/layer5/bookmarks.png"
import MeshLogoLightText from "../../assets/images/meshery/meshery-logo-light-text.png"
import MeshLogoTagLightTextSide from "../../assets/images/meshery/meshery-logo-tag-light-text-side.png"
import MeshLogoLightTextSide from "../../assets/images/meshery/meshery-logo-light-text-side.png"
import MeshDarkText from "../../assets/images/meshery/meshery-dark-text.png"
import MeshDarkTagText from "../../assets/images/meshery/meshery-dark-tag-text.png"
import ImageHub from "../../assets/images/image-hub/layer5-image-hub.png"
import ImageHubWhite from "../../assets/images/image-hub/layer5-image-hub-white.png"
import SmpDark from "../../assets/images/smp/icon/smp-dark.png"
import SmpLight from "../../assets/images/smp/icon/smp-light.png"
import SmpWhite from "../../assets/images/smp/icon/smp-white.png"
import SmpColor from "../../assets/images/smp/color-scheme.png"
import SmPLightTextSide from "../../assets/images/smp/horizontal/smp-light-text-side.png"
import SmPDarkTextSide from "../../assets/images/smp/horizontal/smp-dark-text-side.png"
import SmPWhiteTextSide from "../../assets/images/smp/horizontal/smp-white-text-side.png"

const Brand = () => {
  return (
    <BrandPageWrapper>
      <Container>
        <Row>
          <Col xs={4} sm={4} lg={4} xl={4}>
            <div className="brandHeader">
              <h2>Layer5 Brand Kits</h2>
            </div>
          </Col>
          <Col xs={8} sm={8} lg={8} xl={8}>
            <div className="post-content">
              <p>
                We’ve created some guidelines to help you use our brand and
                assets, including our logo, content and trademarks, without
                having to negotiate legal agreements for each use. To make any
                use of our marks in a way not covered by these guidelines,
                please contact us and include a visual mockup of intended use.
              </p>
              <p>
                <a href="mailto:community@layer5.io">
                  Questions about our brand? Contact us.
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="post-content">
          <Col xs={12} sm={6} lg={6} xl={6}>
            <h1 className="layerH3">
              <strong>Layer5</strong>
            </h1>
          </Col>
          <Col xs={12} sm={6} lg={6} xl={6}>
            <div className="post-content buttonPara">
              <a
                className="waves-effect waves-light btn darken-2 l5-dark-yellow z-depth-2"
                href="#"
              >
                DOWNLOAD LOGO ASSETS
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} lg={12} xl={12}>
            <Row>
              <p>
                The Layer5 mark includes the Layer5 name & logo, and any word,
                phrase, image, or other designation that identifies the source
                or origin of any Layer5 projects. Please don’t modify the marks
                or use them in a confusing way, including suggesting sponsorship
                or endorsement by Layer5, or in a way that confuses Layer5 with
                another brand (including your own).
              </p>
            </Row>
          </Col>
          <Row className="ImgDiv">
            <Col xs={12} sm={4} lg={4} xl={4}>
              <a href="#">
                <img src={Layer5CommunityWhite} />
              </a>
            </Col>
            <Col xs={12} sm={4} lg={4} xl={4}>
              <a href="#">
                <img className="Layer5TagDark" src={Layer5TagDark} />
              </a>
            </Col>
            <Col xs={12} sm={4} lg={4} xl={4}>
              <a href="#">
                <img src={Layer5CommunityWhite} />
              </a>
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
                Our community color palette consists of gray, green and colors
                representing each of our projects. The Layer5 logo should be
                white when using project colors as the background.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} lg={12} xl={12}>
              <h4 className="layerH3">Web</h4>
            </Col>
            <Col xs={12} sm={12} lg={12} xl={12}>
              <p className="layerH3">For use online:</p>
            </Col>
            <Col xs={12} sm={8} lg={8} xl={8}>
              <div>
                <img src={ColorScheme} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} lg={12} xl={12}>
              <h4 className="layerH3">Print</h4>
            </Col>
            <Col xs={12} sm={12} lg={12} xl={12}>
              <p className="layerH3">For use on printed media:</p>
            </Col>
            <Col xs={12} sm={8} lg={8} xl={8}>
              <div>
                <img src={PrintScheme} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} lg={12} xl={12}>
              <h4 className="layerH3">Bookmarks</h4>
            </Col>
            <Col xs={12} sm={12} lg={12} xl={12}>
              <p className="layerH3">
                Media available for print in the form of bookmarks.
              </p>
            </Col>
            <Col xs={8} sm={2} lg={2} xl={2}>
              <Link to="#">
                <img src={Bookmarks} />
              </Link>
            </Col>
          </Row>
        </Row>

        {/* MESHERY */}

        <Row className="post-content">
          <Col xs={12} sm={6} lg={6} xl={6}>
            <h1 className="layerH3">
              <strong>Meshery</strong>
            </h1>
          </Col>
          <Col xs={12} sm={6} lg={6} xl={6}>
            <div className="post-content buttonPara">
              <a
                className="waves-effect waves-light btn darken-2 l5-dark-yellow z-depth-2"
                href="#"
              >
                DOWNLOAD LOGO ASSETS
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} lg={12} xl={12}>
            <Row>
              <p>
                The Meshery mark includes the Meshery name & logo, and any word,
                phrase, image, or other designation that identifies the source
                or origin of any Layer5 projects. Please don’t modify the marks
                or use them in a confusing way, including suggesting sponsorship
                or endorsement by Layer5, or in a way that confuses Layer5 with
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
            <Col xs={12} sm={8} lg={8} xl={8}>
              <div>
                <img src={ColorScheme} />
              </div>
            </Col>
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

        {/* Image-Hub */}

        <Row className="post-content">
          <Col xs={12} sm={6} lg={6} xl={6}>
            <h1 className="layerH3">
              <strong>Image-Hub</strong>
            </h1>
          </Col>
          <Col xs={12} sm={6} lg={6} xl={6}>
            <div className="post-content buttonPara">
              <a
                className="waves-effect waves-light btn darken-2 l5-dark-yellow z-depth-2"
                href="#"
              >
                DOWNLOAD LOGO ASSETS
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} lg={12} xl={12}>
            <Row>
              <p>
                The Image-Hub mark includes the Image-Hub name & logo, and any
                word, phrase, image, or other designation that identifies the
                source or origin of any Layer5 projects. Please don’t modify the
                marks or use them in a confusing way, including suggesting
                sponsorship or endorsement by Layer5, or in a way that confuses
                Layer5 with another brand (including your own).
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
                The Image-Hub color palette consists of the primary Image-Hub
                color and additional shades. The Image-Hub logo should be white
                or monochrome tonal when using a color background.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} lg={12} xl={12}>
              <h4 className="layerH3">Web</h4>
            </Col>
            <Col xs={12} sm={12} lg={12} xl={12}>
              <p className="layerH3">Logos to use online:</p>
            </Col>
            <Row className="ImgDiv">
              <Col xs={12} sm={2} lg={2} xl={2}>
                <a href="#">
                  <img src={ImageHub} />
                </a>
              </Col>
              <Col xs={12} sm={2} lg={2} xl={2}>
                <div className="ImageHubWhite">
                  <a href="#">
                    <img src={ImageHubWhite} />
                  </a>
                </div>
              </Col>
            </Row>
          </Row>
        </Row>

        {/* SMP */}

        <Row className="post-content">
          <Col xs={12} sm={6} lg={6} xl={6}>
            <h1 className="layerH3">
              <strong>Service Mesh Performance</strong>
            </h1>
          </Col>
          <Col xs={12} sm={6} lg={6} xl={6}>
            <div className="post-content buttonPara">
              <a
                className="waves-effect waves-light btn darken-2 l5-dark-yellow z-depth-2"
                href="#"
              >
                DOWNLOAD LOGO ASSETS
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} lg={12} xl={12}>
            <Row>
              <p>
                The Service Mesh Performance mark includes SMP name & logo and
                any word, phrase, image, or other designation that identifies
                the source or origin of any Layer5 projects. PLease don't modify
                the marks or use them in a confusing way, including suggesting
                sponsorship or endorsement by Layer5 with another
                brand(including your own)
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
                additional shades. The SMP logo should be white or monochrome
                when using project colors as the background.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} lg={12} xl={12}>
              <h4 className="layerH3">Web</h4>
            </Col>
            <Row>
              <Col xs={12} sm={8} lg={8} xl={8}>
                <div>
                  <img src={SmpColor} />
                </div>
              </Col>
            </Row>
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
      </Container>
    </BrandPageWrapper>
  )
}

export default Brand
