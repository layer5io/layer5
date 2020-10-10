import React from "react";

// Images
import Jobs_White from "../../images/contact/jobs_white.svg";
import Support_White from "../../images/contact/support_white.svg";
import Partner_White from "../../images/contact/partner_white.svg";
import Contact_White from "../../images/contact/contact_white.svg";
import DataCenter from "../../images/contact/datacenter-crash.svg";

import ContactCard from "../../components/ContactCard/ContactCard";
import { Container, Col, Row} from "../../reusecore/Layout";
import ContactCardStyle from "./contactcard.style";


const ContactContent = () => {
  return (
  <ContactCardStyle>
    <Container>
      <Row Hcenter>
        <Col xs={12} md={4}>
          <ContactCard 
            link="/careers" 
            Imgsrc={Jobs_White}
            alt="jobs_white"
            title="Careers"
            content="I'm interested in career opportunities in Layer5"
          />
        </Col>

        <Col xs={12} md={4}>
          <ContactCard 
            link="mailto:support@layer5.io"
            Imgsrc={Support_White}
            alt="support_white"
            title="Support"
            content="I need assistance with my cloud native infrastructure."
          />
        </Col>

        <Col xs={12} md={4}>
          <ContactCard 
            link="/partners"
            Imgsrc={Partner_White}
            alt="partner_white"
            title="Partnership"
            content="I would like to establish a partnership with Layer5."
          />
        </Col>

        <Col xs={12} md={4}>
          <ContactCard 
            link="/about"
            Imgsrc={Contact_White}
            alt="Contact_White"
            title="Contact"
            content="I have a general question or enquiry"
          />
        </Col>

        <Col xs={12} md={8}>
          <img src={DataCenter} alt="datacenter" />
        </Col>

      </Row>
    </Container>
  </ContactCardStyle>
  )
};

export default ContactContent;
