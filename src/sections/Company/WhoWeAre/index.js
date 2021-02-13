import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";
import WhoWeAreSectionWrapper from "./whoweare.style.js";
import checkCircle from "./images/check-circle_lightgreen.svg";



const WhoWeAre = () => {
  return (
    <WhoWeAreSectionWrapper id="whoweare">
      <Container fullWidthSM className="whoweare">
        <Row Vcenter={true}>
          <Col xs={12} sm={12}>
            <SectionTitle
              className="section-title"
              leftAlign={false}
              UniWidth="100%"
            >
              <h2>We are collaborators</h2>
              <h1>from around the globe</h1>

              <h3>Join the community and collaborate on our projects</h3>
              <VintageBox left={true} vintageTwo={true} >
                <Button
                  primary
                  className="whoweare-button"
                  url="/community"
                  title="Start Contributing"
                  external={false}
                />
              </VintageBox>
              <img src={checkCircle} className="check-circle" />
            </SectionTitle>
          </Col>
        </Row>
        <Row>
          <Col>
            Open standards creators.
            Industry stewards.
          </Col>
        </Row>
      </Container >
    </WhoWeAreSectionWrapper >
  );
};

export default WhoWeAre;
