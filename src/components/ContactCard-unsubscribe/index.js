import React from "react";
import { Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import ContactWrapper from "./contact.style";
import { StaticImage } from "gatsby-plugin-image";

const service_mesh_img = "../../assets/images/service-mesh-icons/service-mesh.svg";

const ContactCard = () => {
  return (
    <ContactWrapper id="contact">
      <div className="parentcard">
        <form name="contactform" method="post" action="https://hook.us1.make.com/vdgxvbnugbgiwrb8j9uiukrg1yto8rii">
          <SectionTitle className="section-title" UniWidth="100%">
            <h3><span>Layer5 Newsletter</span></h3>
          </SectionTitle>
          <Row>
            <Col md={3}><StaticImage src={service_mesh_img} alt="Service Mesh Icon" /></Col>
            <Col md={9}>
              <Row>
                <Col className="nopad" md={1} xs={1}><MdEmail className="contact-icon" size={30}></MdEmail></Col>
                <Col md={11} xs={11}><input className="inputrow" type="email" placeholder="Email Address" name="EMAIL" id="mce-EMAIL" required /></Col>
              </Row>
              <Button title="Unsubscribe" id="mc-embedded-subscribe" />
            </Col>
          </Row>
        </form>
      </div>
    </ContactWrapper>
  );
};

export default ContactCard;
