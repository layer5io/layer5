import React from "react";
import { Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import SubscribeWrapper from "./subscribe.style";

const subscribe = () => {
  return (
    <SubscribeWrapper>
      <div className="parentcard">
        <form name="contactform" method="post" action="https://calcotestudios.us15.list-manage.com/subscribe/post?u=6b50be5aea3dfe1fd4c041d80&amp;id=6bb65defeb">
          <Row>
            <Col md={6}>
              <SectionTitle className="section-title" UniWidth="100%">
                <h2><span className="meshy">Stay meshy </span>and subscribe!</h2>
              </SectionTitle>
            </Col>
            <Col md={6}>
              <Row className="email-cont">
                <Col md={6} xs={12} >
                  <input className="inputrow subscribe-email" type="email" placeholder="Email Address" name="EMAIL" id="mce-EMAIL" required onInvalid={e => e.target.setCustomValidity("Please fill-in this field")} onInput={e => e.target.setCustomValidity("")} />
                </Col>
                <div>
                  <Button secondary title="Subscribe" id="mc-embedded-subscribe" />
                </div>
              </Row>
            </Col>
          </Row>
        </form>
      </div>
    </SubscribeWrapper>
  );
};

export default subscribe;
