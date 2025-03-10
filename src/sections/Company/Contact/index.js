import React, { useRef } from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import Jobs_Icon from "../../../assets/images/contact/job.svg";
import Support_Icon from "../../../assets/images/contact/support.svg";
import Partner_Icon from "../../../assets/images/contact/partner.svg";
import Contact_Icon from "../../../assets/images/contact/contact.svg";
import CardOutline from "../../../components/Card-Outline";
import ContactPageWrapper from "./contactpage.style";
import ContactForm from "../../../components/ContactForm";
import CommonForm from "../../../components/CommonForm";

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
          subtitle={"Let us know how we can help you."}
        />
        <Row style={{
          flexWrap: "wrap"
        }} className="cards-container">
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
            content="I need assistance managing my cloud native systems"
          />
          <CardOutline
            link="/partners"
            img={Partner_Icon}
            alt="Partner"
            title="Partnership"
            content="I would like to establish a partnership with Layer5"
          />
        </Row>
        <Row style={{
          flexWrap: "wrap"
        }} className="contact-form-row">
          <Row
            onClick={function () {
              toggleForm();
            }}
          >
            <CardOutline
              img={Contact_Icon}
              alt="Contact"
              title="Contact"
              content="We are here to help"
            />
          </Row>
          <div className="contact-form" ref={expandForm}>
            <Container>
              {/* <ContactForm /> */}
              <Col $lg={5} $md={6} $sm={12} style={{ padding: "0", marginLeft: "auto", marginRight: "auto" }}>
                <CommonForm
                  title="Contact us"
                  form="contact"
                  account_desc=""
                  submit_title="Thanks for contacting us!"
                  submit_body="We'll get back to you as soon as we can."
                  submit_button_title="Contact us"
                />
              </Col>
            </Container>
          </div>
        </Row>
      </Container>
    </ContactPageWrapper>
  );
};

export default ContactPage;