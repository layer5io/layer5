import React from "react";
import { Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
// import { MdPermContactCalendar } from "@react-icons/all-files/md/MdPermContactCalendar";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import ContactWrapper from "./contact.style";
import { StaticImage } from "gatsby-plugin-image";

const service_mesh_img = "../../assets/images/service-mesh-icons/service-mesh.svg";

const ContactCard = () => {
  return (
    <ContactWrapper id="contact">
      <div className="parentcard">
        <form id="mc-unsubscribe-form" action="https://layer5.us15.list-manage.com/unsubscribe/post" method="POST">
          <SectionTitle className="section-title" UniWidth="100%">
            <input type="hidden" name="u" value="6b50be5aea3dfe1fd4c041d80" />
            <input type="hidden" name="id" value="6bb65defeb" />
            <h3><span>Unsubscribe</span></h3>
          </SectionTitle>
          <Row>
            <Col md={3}><StaticImage src={service_mesh_img} alt="Service Mesh Icon" /></Col>
            <Col md={9}>
              <Row>
                <Col className="nopad" md={1} xs={1}><MdEmail className="contact-icon" size={30}></MdEmail></Col>
                <Col md={11} xs={11}><input className="inputrow" type="email" placeholder="Email Address" name="EMAIL" id="email-address" required /></Col>
              </Row>
              <Button title="Unsubscribe" type="submit" value="Unsubscribe" id="mc-embedded-subscribe" />
            </Col>
          </Row>
        </form>
      </div>
    </ContactWrapper>
  );
};

export default ContactCard;
