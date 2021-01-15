import React, { useRef } from "react";
import { Container, Row } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import Jobs_Icon from "../../assets/images/contact/job.svg";
import Support_Icon from "../../assets/images/contact/support.svg";
import Partner_Icon from "../../assets/images/contact/partner.svg";
import Contact_Icon from "../../assets/images/contact/contact.svg";
import CardOutline from "../../components/Card-Outline";
import ContactPageWrapper from "./contactpage.style";

const ContactPage = () => {

    const expandForm = useRef();

    const toggleForm = () => {
        expandForm.current.classList.toggle("showForm");
    };

    return (
        <ContactPageWrapper>
            <Container>
                <PageHeader 
                    title={"Get In Touch"}
                    subtitle={"Let us know how we help you."}
                />
                <Row>
                    <CardOutline 
                        link="/careers"
                        img={Jobs_Icon}
                        alt="Job"
                        title="Careers"
                        content="I'm interested in career opportunities at Layer5"
                    />
                    <CardOutline 
                        link="mailto:support@layer5.io"
                        img={Support_Icon}
                        alt="Support"
                        title="Support"
                        content="I need assistance with my cloud native infrastructure"
                    />
                    <CardOutline 
                        link="/partners"
                        img={Partner_Icon}
                        alt="Partner"
                        title="Partnership"
                        content="I would like to establish a partnership with Layer5"
                    />
                </Row>
                <Row className="contact-form-row" >
                    <Row
                        onClick={function() {toggleForm();}}
                    >
                        <CardOutline 
                            img={Contact_Icon}
                            alt="Contact"
                            title="Contact"
                            content="Send us your enquiry through a form"
                        />
                    </Row>
                    <div className="contact-form" ref={expandForm}>
                        <iframe
                            scrolling="no"
                            src="https://us15.list-manage.com/contact-form?u=6b50be5aea3dfe1fd4c041d80&form_id=d0ffe17c92d8014ede6b721aa16096e8"
                            className="form-frame"
                        />
                    </div>
                </Row>
            </Container>
        </ContactPageWrapper>
    );
};

export default ContactPage;
