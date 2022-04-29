import React, { useRef, useState, useEffect } from "react";
import { Container, Row } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import Jobs_Icon from "../../../assets/images/contact/job.svg";
import Support_Icon from "../../../assets/images/contact/support.svg";
import Partner_Icon from "../../../assets/images/contact/partner.svg";
import Contact_Icon from "../../../assets/images/contact/contact.svg";
import CardOutline from "../../../components/Card-Outline";
import ContactPageWrapper from "./contactpage.style";
import Button from "../../../reusecore/Button";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import logo from "../../../assets/images/app/layer5.svg";

const CONTACT_FORM_URL =
  "https://us15.list-manage.com/contact-form?u=6b50be5aea3dfe1fd4c041d80&form_id=d0ffe17c92d8014ede6b721aa16096e8";

const ContactPage = () => {
  const expandForm = useRef();
  const [contactForm, setcontactForm] = useState({});
  const [submit, setSubmit] = useState(false);

  const toggleForm = () => {
    if (detectSafari() || !navigator.cookieEnabled) {
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
    if (chromeAgent && safariAgent) safariAgent = false;

    return safariAgent;
  };
  useEffect(() => {
    if (submit) {
      axios.post(
        "https://hook.integromat.com/6837rdde4mqpjj1e3pk3zfixjmfn514a",
        {
          contactForm,
        }
      );
    }
  }, [submit]);

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
              <div className="form-data">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                    areaofinterest: "",
                  }}
                  onSubmit={(values) => {
                    setcontactForm(values);
                  }}
                >
                  <Form className="form" method="post">
                    <div className="title">
                      <img
                        className="layer5-logo"
                        src={logo}
                        alt="Layer5 Logo"
                      />
                    </div>
                    <label htmlFor="name" className="form-name">
                      Name <span className="required-sign">*</span>
                    </label>
                    <Field
                      type="text"
                      className="text-field"
                      id="tname"
                      name="name"
                      maxLength="32"
                      pattern="^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)"
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Please fill-in this field")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                    <label htmlFor="email" className="form-name">
                      Email Address <span className="required-sign">*</span>
                    </label>
                    <Field
                      type="text"
                      className="text-field"
                      id="email"
                      name="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Please fill-in this field")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                    <label htmlFor="subject" className="form-name">
                      Subject <span className="required-sign">*</span>
                    </label>
                    <Field
                      type="text"
                      className="text-field"
                      id="subject"
                      name="subject"
                      
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Please fill-in this field")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                    <label htmlFor="subject" className="form-name">
                      Message <span className="required-sign">*</span>
                    </label>
                    <Field as = "textarea"
                      rows="8"
                      type="text"
                      className="text-field"
                      id="message"
                      name="message"
                      
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Please fill-in this field")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                    <label htmlFor="areaofinterest" className="form-name">
                      Area of Interest <span className="required-sign">*</span>
                    </label>
                    <div
                      
                      aria-labelledby="my-radio-group"
                    >
                      <label>
                        <Field className="radio-field"
                          type="radio"
                          name="areaofinterest"
                          value="Meshry"
                        />
                        Meshry
                      </label>
                      <br></br>
                      <label>
                        <Field className="radio-field" type="radio" name="areaofinterest" value="SMP" />
                        SMP
                      </label>
                      <br></br>
                      <label>
                        <Field className="radio-field" type="radio" name="areaofinterest" value="SMI" />
                        SMI
                      </label>
                      <br></br>
                      <label>
                        <Field className="radio-field"
                          type="radio"
                          name="areaofinterest"
                          value="GetNighthawk"
                        />
                        GetNighthawk
                      </label>
                      <br></br>
                      <label>
                        <Field className="radio-field"
                          type="radio"
                          name="areaofinterest"
                          value="Landscape"
                        />
                        Landscape
                      </label>
                      <br></br>
                      <label>
                        <Field className="radio-field"
                          type="radio"
                          name="areaofinterest"
                          value="Community"
                        />
                        Community
                      </label>
                      <div className="newsletter">
                        <label>
                          <Field
                            type="checkbox"
                            name="expect"
                            className="form-check"
                          />
                          <span>Subscribe to our newsletter</span>
                        </label>
                      </div>
                      <div className="form-submit">
                        <Button
                          secondary
                          type="submit"
                          className="btn-next"
                          title="Submit"
                        />
                      </div>
                    </div>
                  </Form>
                </Formik>
              </div>
            </Container>
          </div>
        </Row>
      </Container>
      <Helmet>
        <script src="https://v8hx52m354g0.statuspage.io/embed/script.js"></script>
      </Helmet>
    </ContactPageWrapper>
  );
};

export default ContactPage;
