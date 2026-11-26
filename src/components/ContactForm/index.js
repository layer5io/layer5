import React, { useEffect, useRef, useState } from "react";
import Button from "../../reusecore/Button";
import { Field, Form, Formik } from "formik";
import logo from "../../assets/images/app/layer5.svg";
import ContactFormWrapper from "./contact-form.style";
import {
  MarketingHoneypot,
  MarketingStatus,
  useMarketingForm,
} from "../MarketingForm";

const ContactForm = ({ embedded = false }) => {
  const [submit, setSubmit] = useState(false);
  const confirmationRef = useRef(null);
  const { status, message, submit: submitForm } = useMarketingForm("contact");

  useEffect(() => {
    if (submit && confirmationRef.current) {
      confirmationRef.current.focus();
    }
  }, [submit]);

  if (submit) {
    const shownForm = document.querySelector(".showForm");
    if (shownForm) {
      shownForm.style.height = "20rem";
    }
    return (
      <ContactFormWrapper className={embedded ? "embedded" : ""}>
        <div className="form-submitted" role="status" aria-live="polite">
          <h2 className="text-2xl" tabIndex={-1} ref={confirmationRef}>
            Thanks for contacting us!
          </h2>
          <p className="text-md">We'll get back to you as soon as we can.</p>
        </div>
      </ContactFormWrapper>
    );
  }

  return (
    <ContactFormWrapper className={embedded ? "embedded" : ""}>
      <div className="form-data">
        <Formik
          initialValues={{
            subscribed: false,
            firstname: "",
            lastname: "",
            email: "",
            subject: "",
            message: "",
            scope: "",
            company_website: "",
            form: "contact",
          }}
          onSubmit={async (values) => {
            const result = await submitForm(values);
            if (result) {
              setSubmit(true);
              window.scrollTo(0, 700);
            }
          }}
        >
          <Form className="form" method="post">
            <div className="title">
              <img className="layer5-logo" src={logo} alt="Layer5 Logo" />
            </div>
            <label htmlFor="firstname" className="form-name">
              First Name <span className="required-sign">*</span>
            </label>
            <Field
              type="text"
              className="text-field"
              id="firstname"
              name="firstname"
              maxLength="32"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("Please fill-in this field")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <label htmlFor="lastname" className="form-name">
              Last Name <span className="required-sign">*</span>
            </label>
            <Field
              type="text"
              className="text-field"
              id="lastname"
              name="lastname"
              maxLength="32"
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
            <label htmlFor="message" className="form-name">
              Message <span className="required-sign">*</span>
            </label>
            <Field
              as="textarea"
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
            <label id="scope-label" className="form-name">
              Scope of Question <span className="required-sign">*</span>
            </label>
            <div role="radiogroup" aria-labelledby="scope-label">
              <label>
                <Field
                  className="radio-field"
                  type="radio"
                  name="scope"
                  value="Meshery"
                  required
                />
                Meshery
              </label>
              <br></br>
              <label>
                <Field
                  className="radio-field"
                  type="radio"
                  name="scope"
                  value="SMP"
                />
                SMP
              </label>
              <br></br>
              <label>
                <Field
                  className="radio-field"
                  type="radio"
                  name="scope"
                  value="SMI"
                />
                SMI
              </label>
              <br></br>
              <label>
                <Field
                  className="radio-field"
                  type="radio"
                  name="scope"
                  value="GetNighthawk"
                />
                GetNighthawk
              </label>
              <br></br>
              <label>
                <Field
                  className="radio-field"
                  type="radio"
                  name="scope"
                  value="Landscape"
                />
                Landscape
              </label>
              <br></br>
              <label>
                <Field
                  className="radio-field"
                  type="radio"
                  name="scope"
                  value="Community"
                />
                Community
              </label>
              <div className="newsletter">
                <label>
                  <Field
                    type="checkbox"
                    name="subscribed"
                    className="form-check"
                  />
                  <span>Subscribe to our newsletter</span>
                </label>
              </div>
              <MarketingHoneypot formik />
              <MarketingStatus
                status={status}
                message={status === "error" ? message : ""}
              />
              <div className="form-submit">
                <Button
                  $secondary
                  type="submit"
                  className="btn-next"
                  title="Submit"
                  disabled={status === "submitting"}
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </ContactFormWrapper>
  );
};

export default ContactForm;
