import React, { useRef } from "react";
import { Container, Row } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import Jobs_Icon from "../../../assets/images/contact/job.svg";
import Support_Icon from "../../../assets/images/contact/support.svg";
import Partner_Icon from "../../../assets/images/contact/partner.svg";
import Contact_Icon from "../../../assets/images/contact/contact.svg";
import CardOutline from "../../../components/Card-Outline";
import ContactPageWrapper from "./contactpage.style";

const CONTACT_FORM_URL = "https://us15.list-manage.com/contact-form?u=6b50be5aea3dfe1fd4c041d80&form_id=d0ffe17c92d8014ede6b721aa16096e8";

const ContactPage = () => {

  const expandForm = useRef();

  const toggleForm = () => {

    if(detectSafari() || !navigator.cookieEnabled) {
      window.open(CONTACT_FORM_URL);
      return;
    }

    expandForm.current.classList.toggle("showForm");
  };

  /**
   * Finds if the given agent is the 
   * browser's agent
   * @param {string} agent
   * @returns {boolean}
   */
  const findAgent = (agent) => navigator.userAgent.indexOf(agent) > -1;

  
  const detectSafari = () => {
    
    let safariAgent = findAgent("Safari");
    let chromeAgent = findAgent("Chrome");
  
    // Discard Safari since it also matches Chrome
    if ((chromeAgent) && (safariAgent)) safariAgent = false;

    return safariAgent;
  };


  return (
    <ContactPageWrapper>
      <Container>
        <PageHeader 
          title={"Get In Touch"}
          subtitle={"Let us know how we can help you."}
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
        <Row className="contact-form-row" >
          <Row
            onClick={function() {
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
            <iframe
              scrolling="no"
              src= {CONTACT_FORM_URL}
              className="form-frame"
            />
          </div>
        </Row>
      </Container>
    </ContactPageWrapper>
  );
};

export default ContactPage;
