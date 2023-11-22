import React, { useContext } from "react";
import { ThemeManagerContext } from "../../../theme/app/ThemeManager";
import DesignEmbedWrapper from "./designEmbedds.style";
import { Col, Container, Row } from "../../../reusecore/Layout";
// import tempEmbedImage from "../../../assets/images/temp-embed-image/meshmap.jpg";

import SectionTitle from "../../../reusecore/SectionTitle";
import { Script } from "gatsby";
// import  embed from "../../../assets/data/embed-test/embedded-design-cypress-des-1-no-modify-by-me-copy-copy";

const DesignEmbedds = () => {
  const { isDark, didLoad } = useContext(ThemeManagerContext);
  if (!didLoad) {
    return null;
  }
  return (
    <DesignEmbedWrapper>
      <Container className="embed-container">
        <Row Hcenter Vcenter>
          <Col xs={12} lg={6}>
            {/* <div className="heading"> */}
            <SectionTitle
              UniWidth="100%"
            >
              <h2>
                <span className="embed-highlight">Showcase</span> your Designs
              </h2>
            </SectionTitle>
            {/* </div> */}
          </Col>

          <Col>
            <div className="browser-container">
              <div className="top-bar">
                <div className="browser-buttons">
                  <div className="browser-close browser-button"></div>
                  <div className="browser-min browser-button"></div>
                  <div className="browser-max browser-button"></div>
                </div>
              </div>
              <div className="browser-body">
                <div className="body-left">
                  <div className="left-top">
                    <div className="left-top-big"></div>
                    <div className="left-top-small">
                      <div className="skeleton-lines"></div>
                      <div className="skeleton-lines"></div>
                      <div className="skeleton-lines"></div>
                    </div>
                  </div>

                  <div className="left-middle">
                    <div className="skeleton-lines"></div>
                    <div className="skeleton-lines"></div>
                    <div className="skeleton-lines"></div>
                    <div className="skeleton-lines"></div>
                    <div className="skeleton-lines"></div>
                    <div className="skeleton-lines"></div>
                  </div>
                  <div className="left-bottom">
                    <div className="skeleton-lines"></div>
                    <div className="skeleton-lines"></div>
                    <div className="skeleton-lines"></div>
                    <div className="skeleton-lines"></div>
                    <div className="skeleton-lines"></div>
                    <div className="skeleton-lines"></div>
                  </div>
                </div>
                <div className="body-right">
                  {/*<div>*/}
                  <div className="skeleton-lines body-right-top"></div>
                  {/*</div>*/}
                  <div className="body-right-bottom">
                    {/*<img src={tempEmbedImage} alt={"temporary image"}/>*/}
                    <div id="embedded-design-168bf17a-9386-4a0e-8c32-dd2bc22c8fe9">
                    </div>
                    <Script
                      src="/embed-test/embedded-design-cypress-des-1-no-modify-by-me-copy-copy.js"
                      type="module" strategy={"post-hydrate"}></Script>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/*<Col>*/}
          {/*  <div id="embedded-design-168bf17a-9386-4a0e-8c32-dd2bc22c8fe9">*/}
          {/*  </div>*/}
          {/*  <Script*/}
          {/*    src="/embed-test/embedded-design-cypress-des-1-no-modify-by-me-copy-copy.js"*/}
          {/*    type="module"></Script>*/}





          {/*  /!*<div id="embedded-design-168bf17a-9386-4a0e-8c32-dd2bc22c8fe9">*!/*/}
          {/*  /!*</div>*!/*/}
          {/*  /!*<script*!/*/}
          {/*  /!*  src="../../../assets/data/embed-test/embedded-design-cypress-des-1-no-modify-by-me-copy-copy"*!/*/}
          {/*  /!*  type="module"></script>*!/*/}

          {/*  /!* <div> *!/*/}
          {/*  /!* <div id="embedded-design-168bf17a-9386-4a0e-8c32-dd2bc22c8fe9"> *!/*/}
          {/*  /!* <img src={ et } alt="	" /> *!/*/}
          {/*  /!* </div> *!/*/}
          {/*  /!* { embed } *!/*/}
          {/*  /!* <link src="../../../assets/data/embed-test/embedded-design-cypress-des-1-no-modify-by-me-copy-copy" type="module" ></script> *!/*/}
          {/*  /!* </div> *!/*/}
          {/*</Col>*/}
        </Row>
      </Container>
    </DesignEmbedWrapper>
  );
};

export default DesignEmbedds;