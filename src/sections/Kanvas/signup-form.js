import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../reusecore/Layout";

import CommonForm from "../../components/CommonForm";

const SignupFormWrapper = styled.div`
  .desc-text {
    display: flex;
    flex-direction: column;
  }

  .kanvas-video {
    /* box-shadow: 0px 5px 5px 2px #b3b3b3; */
    height: 28rem;
    text-align: center;

    @media screen and (max-width: 1200px) {
      height: 26rem;
    }
    @media screen and (max-width: 992px) {
      height: 23rem;
    }
  }
`;
const SignupForm = ({ targetRef }) => {
  return (
    <SignupFormWrapper>
      <div className="banner-background" ref={targetRef}>
        <Container style={{ marginBottom: "4rem", padding: "0" }}>
          <Row className="description">
            <Col $lg={7} $md={6} $sm={12} className="desc-text">
              <h1 className="heading-1">Signup for</h1>
              <h1 className="heading-2">Kanvas Beta</h1>
              <p className="desc-p">
                Join the waiting list for participation in the beta program.
                Your request for access will be processed as quickly as
                possible. Due to the large influx of program participation
                requests, it may take some time before system access is granted.
                So that you can familiarize while you wait, the Layer5 team will
                send you additional information about beta program, Kanvas
                modes, and cloud native design patterns.
              </p>
              <div className="kanvas-video">
                {/* <p>Help choose the best logo for Kanvas:</p>
                <a target="_blank" href="https://twitter.com/layer5/status/1536832439833743363?s=20&t=oEDasGEBl8cvsA64P7NNTA" rel="noreferrer">
                  <img src={KanvasDrafts} alt="Kanvas Draft" /></a><br />
                <p><a target="_blank" href="https://twitter.com/layer5/status/1536832439833743363?s=20&t=oEDasGEBl8cvsA64P7NNTA" rel="noreferrer">Vote for your favorite design</a></p> */}
                <iframe
                  width="95%"
                  height="100%"
                  src="https://www.youtube.com/embed/034nVaQUyME?si=Xip0JqrwiG2QY5vp"
                  allow="autoplay"
                  style={{ border: "0" }}
                  allowfullscreen
                />
              </div>
            </Col>

            <Col $lg={5} $md={6} $sm={12} style={{ padding: "0" }}>
              <CommonForm
                title="Join the Beta Program"
                form="kanvas"
                account_desc="Selected beta program participants will receive a free Layer5 Cloud account and have full access Kanvas enabled for each of the following user accounts that you provide. Please provide at least one account."
                submit_title="Thank you for your interest in Layer5 Kanvas!"
                submit_body="You are now signed up for the Layer5 Kanvaseta program and your position on the waiting list is confirmed. Please patiently await your acceptance and start of the beta program. We are working through a growing waitlist"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </SignupFormWrapper>
  );
};

export default SignupForm;
