import React, { useContext } from "react";
import { ThemeManagerContext } from "../../../theme/app/ThemeManager";
import { Col, Container, Row } from "../../../reusecore/Layout";
// import tempEmbedImage from "../../../assets/images/temp-embed-image/meshmap.jpg";

import SectionTitle from "../../../reusecore/SectionTitle";
import WhiteboardShowcaseWrapper from "./whiteboardShowcase.style";
// import  embed from "../../../assets/data/embed-test/embedded-design-cypress-des-1-no-modify-by-me-copy-copy";

const WhiteboardShowcase = () => {
  const { isDark, didLoad } = useContext(ThemeManagerContext);
  if (!didLoad) {
    return null;
  }
  return (
    <WhiteboardShowcaseWrapper>
      <Container className="whiteboard-container">
        <Row Hcenter Vcenter>
          {/*<Col xs={12} lg={6} className={"heading"}>*/}
          {/*  <SectionTitle*/}
          {/*    UniWidth="100%"*/}
          {/*  >*/}
          {/*    <h2>*/}
          {/*      <b>Whiteboard</b> with <b>Meshery</b>*/}
          {/*    </h2>*/}
          {/*  </SectionTitle>*/}
          {/*</Col>*/}
          <div className={"whiteboard-text-container"}>
            <div className={"whiteboard-text"}></div>
          </div>
          {/*<div className={"bottom-margin"}></div>*/}
          <div className={"whiteboard-image"}></div>
        </Row>
      </Container>
    </WhiteboardShowcaseWrapper>
  );
};

export default WhiteboardShowcase;