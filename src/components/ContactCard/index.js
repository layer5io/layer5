import React from "react";
import { Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import { MdPermContactCalendar } from "@react-icons/all-files/md/MdPermContactCalendar";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import ContactWrapper from "./contact.style";
import { StaticImage } from "gatsby-plugin-image";

const service_mesh_img = "../../assets/images/service-mesh-icons/service-mesh.svg";

const ContactCard = () => {
  return (
    <ContactWrapper id="contact">
      <div className="parentcard">
        <form name="contactform" method="post" action="https://calcotestudios.us15.list-manage.com/subscribe/post?u=6b50be5aea3dfe1fd4c041d80&amp;id=6bb65defeb">
          <SectionTitle className="section-title" UniWidth="100%">
            <h3><span>Stay meshy. Subscribe.</span></h3>
          </SectionTitle>
          <Row>
            <Col md={3}><StaticImage src={service_mesh_img} alt="Service Mesh Icon" /></Col>
            <Col md={9}>
              <Row>
                <Col className="nopad" md={1} xs={1}><MdPermContactCalendar className="contact-icon" size={30}></MdPermContactCalendar></Col>
                <Col md={11} xs={11}>
                  <Row>
                    <Col className="firstcol" md={6} xs={6}><input className="inputrow" type="text" placeholder="First Name" name="FNAME" id="mce-FNAME" /></Col>
                    <Col className="lastcol" md={6} xs={6}><input className="inputrow" type="text" placeholder="Last Name" name="LNAME" id="mce-LNAME" /></Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className="nopad" md={1} xs={1}><MdEmail className="contact-icon" size={30}></MdEmail></Col>
                <Col md={11} xs={11}><input className="inputrow" type="email" placeholder="Email Address" name="EMAIL" id="mce-EMAIL" required /></Col>
              </Row>
              <Button title="Subscribe" id="mc-embedded-subscribe" />
            </Col>
          </Row>
        </form>
      </div>
    </ContactWrapper>
  );
};

export default ContactCard;
