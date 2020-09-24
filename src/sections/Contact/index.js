import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Img from "gatsby-image";
import Button from "../../reusecore/Button";
import img from "./forklift.svg";

import ContactWrapper from "./contact.style";

const Contact = () => {
    return (
        <ContactWrapper id="contact">
            <Container>
                <form name="contactform" method="post" action="#">
                    <SectionTitle className="section-title" UniWidth="55%">
                        <h2><span>Subscribe to stay meshy</span></h2>
                    </SectionTitle>
                    <Row>
                        <Col md={3}><img src={img} /></Col>
                        <Col md={9}>
                            <Row>
                                <Col md={6}><input className="inputrow" type="First Name" placeholder="First Name" /></Col>
                                <Col md={6}><input className="inputrow" type="Last Name" placeholder="Last Name" /></Col>
                            </Row>
                            <input className="inputrow" type="email" placeholder="Email Address" />
                            <Button>Send Now</Button>
                        </Col>
                    </Row>
                </form>
            </Container>
        </ContactWrapper>
    );
};

export default Contact;
