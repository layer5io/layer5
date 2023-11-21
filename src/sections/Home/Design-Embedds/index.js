import React, { useContext } from "react";
import { ThemeManagerContext } from "../../../theme/app/ThemeManager";
import DesignEmbedWrapper from "./designEmbedds.style";
import { Col, Container, Row } from "../../../reusecore/Layout";

import SectionTitle from "../../../reusecore/SectionTitle";
// import { Helmet } from "react-helmet";
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
          {/* <div className="bb"> */}
          {/* </div> */}
          <Col>
            <div id="embedded-design-168bf17a-9386-4a0e-8c32-dd2bc22c8fe9" >
            </div>
            <script
              src="../../../assets/data/embed-test/embedded-design-cypress-des-1-no-modify-by-me-copy-copy"
              type="module"></script>

            {/* <div> */}
            {/* <div id="embedded-design-168bf17a-9386-4a0e-8c32-dd2bc22c8fe9"> */}
            {/* <img src={ et } alt="	" /> */}
            {/* </div> */}
            {/* { embed } */}
            {/* <link src="../../../assets/data/embed-test/embedded-design-cypress-des-1-no-modify-by-me-copy-copy" type="module" ></script> */}
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </DesignEmbedWrapper>
  );
};

export default DesignEmbedds;