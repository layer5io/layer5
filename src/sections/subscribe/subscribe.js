import React from "react";
import { Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import {
  MarketingHoneypot,
  MarketingStatus,
  useMarketingForm,
} from "../../components/MarketingForm";
import SubscribeWrapper from "./subscribe.style";

const subscribe = ({ msg = "Layer5" }) => {
  const { status, message, handleSubmit } =
    useMarketingForm("footer-subscribe");

  return (
    <SubscribeWrapper>
      <div className="parentcard">
        <form name="contactform" method="post" onSubmit={handleSubmit}>
          <Row $Vcenter>
            <Col $md={6}>
              <SectionTitle className="section-title" $UniWidth="100%">
                <h2>
                  Join the <span className="meshy">{msg}</span> community.
                  Subscribe.
                </h2>
              </SectionTitle>
            </Col>
            <Col $md={6}>
              {status === "success" ? (
                <MarketingStatus status={status} message={message} />
              ) : (
                <Row className="email-cont">
                  <Col $md={6} $xs={12}>
                    <input
                      className="inputrow subscribe-email"
                      type="email"
                      placeholder="Email Address"
                      name="EMAIL"
                      id="mce-EMAIL"
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Please fill-in this field")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                  </Col>
                  <div>
                    <MarketingHoneypot />
                    <Button
                      $secondary
                      type="submit"
                      title="Subscribe"
                      id="mc-embedded-subscribe"
                      disabled={status === "submitting"}
                    />
                  </div>
                  <MarketingStatus
                    status={status}
                    message={message}
                    pendingMessage="Subscribing…"
                  />
                </Row>
              )}
            </Col>
          </Row>
        </form>
      </div>
    </SubscribeWrapper>
  );
};

export default subscribe;
