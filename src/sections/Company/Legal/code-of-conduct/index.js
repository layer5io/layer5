import React from "react";

import { Container, Row, Col } from "../../../../reusecore/Layout";
import PageHeader from "../../../../reusecore/PageHeader";

import TermsWrapper from "../terms.style";

const Conduct = () => {
  return (
    <TermsWrapper>
      <PageHeader title="Layer5 Code Of Conduct"
        path="Terms > Code Of Conduct"
      />
      <Container>
        <Row>
          <Col xs={12} sm={12} lg={12}>
            <div leftAlign={true} className="conduct_heading">
              <h2>Introduction</h2>
            </div>
            <div>
                            We are dedicated to providing a harassment­ free experience for everyone, and we do not tolerate harassment of participants in any form. We ask you to be considerate of others and behave professionally and respectfully to all other participants.
                            This code and related procedures also apply to unacceptable behavior occurring outside the scope of community activities, in all community venues— online and in-person— as well as in all one-on-one communications, and anywhere such behavior has the potential to adversely affect the safety and well-being of community members. Exhibitors, speakers, sponsors, staff and all other attendees at events organized by Layer5, Inc (virtual and in-person events, meetups, user groups) or held at Layer5,
                            Inc facilities are subject to these Community Guidelines and Code of Conduct.
            </div>
            <br />
            <div>
                            Diversity and inclusion make the Layer5 community strong.
                            We encourage participation from the most varied and diverse backgrounds possible and want to be very clear about where we stand.
            </div>
            <br />
            <div>
                            Our goal is to maintain a safe, helpful and friendly Layer5 community for everyone, regardless of experience, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, nationality, or other protected categories under applicable law.
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} lg={12}>
            <div leftAlign={true} className="conduct_heading">
              <h2>Expected Behavior</h2>
            </div>
            <div>
              <ul>
                <li>Be professional.</li>
                <li>Be responsible.</li>
                <li>Be welcoming.</li>
                <li>Be kind.</li>
                <li>Be respectful of other viewpoints and ideas.</li>
                <li>Be supportive and look out for each other.</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} lg={12}>
            <div leftAlign={true} className="conduct_heading">
              <h2>Unacceptable Behavior</h2>
            </div>
            <div>
                            Harassment may include but not limited to the following:
              <ul>
                <li>Offensive, inappropriate, or unwanted comments related to gender, gender identity or expression, sexual orientation, disability, physical appearance, body size, race, ethnicity, national origin, religion, or age, or other protected categories under applicable law.</li>
                <li>Visual harassment eg. sexual imagery or use of sexual language at Layer5 community events.</li>
                <li>Disrespect towards differences of opinion.</li>
                <li>Deliberate intimidation, stalking, harassing photography or recording.</li>
                <li>Sustained disruption of talks or other events.</li>
                <li>Inappropriate or unwanted physical contact.</li>
                <li>Intimidation or bullying (online or in-person).</li>
                <li>Unwelcome sexual attention.</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} lg={12}>
            <div leftAlign={true} className="conduct_heading">
              <h2>Reporting and Enforcement</h2>
            </div>
            <ul>
              <li>If you are the subject of, or witness to any violations of this Code of Conduct, please contact us by submitting an <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWzC5HjlHugFjB0TtaAVnSkPPqsRQ3JRYjdwyDXf0oyRxcdQ/viewform">incident report</a>, or email community@layer5.io.</li>
              <li>If necessary, staff are empowered to take appropriate actions that may include, but are not limited to, warnings, expulsion from the conference without refund, and referrals to venue security or local law enforcement.</li>
            </ul>
            <p>Portions derived from the <a href="https://github.com/docker/code-of-conduct">Docker Community Code of Conduct</a>, <a href="https://api.slack.com/docs/community-code-of-conduct">Slack Developer Community Code of Conduct</a>, <a href="https://adainitiative.org/2014/02/18/howto-design-a-code-of-conduct-for-your-community/">The Ada Initiative</a>,
              <a href="https://geekfeminism.org/about/code-of-conduct/">geekfeminism.org</a> and <a href="https://events.drupal.org/dublin2016/code-conduct">Drupal Events Code of Conduct</a></p>
            <p>This work is licensed under a Creative Commons Attribution 3.0 Unported License For attribution requirements:</p>
            <p>“@Layer5 Code of Conduct” © 2021 Layer5, Inc, used under a Creative Commons Attribution Unported license: <a href="http://creativecommons.org/licenses/by/3.0/">http://creativecommons.org/licenses/by/3.0/ </a></p>
          </Col>
        </Row>
      </Container>
    </TermsWrapper>
  );
};

export default Conduct;