import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";

import integrationImage1 from "../../../assets/images/app/integrations/integration-1.webp";
import integrationImage2 from "../../../assets/images/app/integrations/integration-2.webp";
import integrationImage3 from "../../../assets/images/app/integrations/integration-3.webp";
import integrationImage4 from "../../../assets/images/app/integrations/integration-4.webp";
import Icon from "../../../assets/images/app/integrations/arrow.webp";

import IntegrationItemWrapper from "./integrationSection.style";

const Integrations = () => {
  return (
    <IntegrationItemWrapper>
      <Container>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <div className="integration__block__wrap">
              <div className="integration__block">
                <div className="integration__block__inner">
                  <img src={integrationImage1} alt="appion integration" />
                  <h3>Mail Chimp</h3>
                  <p>Send Emails</p>
                  <Link to="#">
                    <img src={Icon} alt="appion app" />
                  </Link>
                </div>
                <div className="integration__block__inner">
                  <img src={integrationImage3} alt="appion integration" />
                  <h3>Instagram</h3>
                  <p>News Feed</p>
                  <Link to="#">
                    <img src={Icon} alt="appion app" />
                  </Link>
                </div>
              </div>
              <div className="integration__block right">
                <div className="integration__block__inner">
                  <img src={integrationImage2} alt="appion integration" />
                  <h3>Slack</h3>
                  <p>Messaging</p>
                  <Link to="#">
                    <img src={Icon} alt="appion app" />
                  </Link>
                </div>
                <div className="integration__block__inner">
                  <img src={integrationImage4} alt="appion integration" />
                  <h3>twitter</h3>
                  <p>News Feed</p>
                  <Link to="#">
                    <img src={Icon} alt="appion app" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} className="integration-content-wrap">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4>Integration</h4>

              <h2>
                <span>Uses for this app </span> In the perfect integration.
              </h2>
            </SectionTitle>
            <p className="integration-text">
                            One differences leaders, management-science so, best treat. Still
                            problems upper and anger devoting out. With hiding their boss
                            phase drops. A strenuous in ticket get write it by proposal.
            </p>
            <VintageBox
              right={true}
              vintageTwo={true}
              position="relative"
            >
              <Button className="integration-btn" title="Learn More" />
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </IntegrationItemWrapper>
  );
};

export default Integrations;
