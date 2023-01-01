import React, { useRef } from "react";
import { Container, Row } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import Jobs_Icon from "../../../assets/images/contact/job.svg";
import Support_Icon from "../../../assets/images/contact/support.svg";
import Partner_Icon from "../../../assets/images/contact/partner.svg";
import Contact_Icon from "../../../assets/images/contact/contact.svg";
import CardOutline from "../../../components/Card-Outline";
import ContactPageWrapper from "./contactpage.style";
// import { Helmet } from "react-helmet";
import ContactForm from "../../../components/ContactForm";

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
        <Row className="cards-container">
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
        <Row className="contact-form-row">
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
              <ContactForm />
            </Container>
          </div>
        </Row>
      </Container>
      {/* <Helmet>
        <script src="https://v8hx52m354g0.statuspage.io/embed/script.js"></script>
      </Helmet> */}
    </ContactPageWrapper>
  );
};

export default ContactPage;
