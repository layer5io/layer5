import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import img from "./forklift.svg";
import { MdPermContactCalendar, MdEmail } from "react-icons/md";

import ContactWrapper from "./contact.style";

const Contact = () => {
    return (
        <ContactWrapper id="contact">
            <div className="parentcard">
                <form name="contactform" method="post" action="#">
                    <SectionTitle className="section-title" UniWidth="100%">
                        <h2><span>Subscribe to stay meshy</span></h2>
                    </SectionTitle>
                    <Row>
                        <Col md={3}><img src={img} /></Col>
                        <Col md={9}>
                            <Row>
                                <Col className="nopad" md={1} xs={1}><MdPermContactCalendar className="contact-icon" size={30}></MdPermContactCalendar></Col>
                                <Col md={11} xs={11}>
                                    <Row>
                                        <Col className="firstcol" md={6} xs={6}><input className="inputrow" type="First Name" placeholder="First Name" /></Col>
                                        <Col className="lastcol" md={6} xs={6}><input className="inputrow" type="Last Name" placeholder="Last Name" /></Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="nopad" md={1} xs={1}><MdEmail className="contact-icon" size={30}></MdEmail></Col>
                                <Col md={11} xs={11}><input className="inputrow" type="email" placeholder="Email Address" /></Col>
                            </Row>
                            <Button>Subscribe</Button>
                        </Col>
                    </Row>
                </form>
            </div>
        </ContactWrapper>
    );
};

export default Contact;
