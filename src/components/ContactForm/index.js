import React, { useState, useEffect } from "react";
import Button from "../../reusecore/Button";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import logo from "../../assets/images/app/layer5.svg";
import ContactFormWrapper from "./contact-form.style";

const ContactForm = () => {
  const [memberFormOne, setmemberFormOne] = useState({});
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (submit) {
      // Webhook to handle all event forms and all signup forms, except for the community member form.
      axios.post("https://hook.us1.make.com/gguommoyd14634ur9xs7l37widuoa7e9", {
        memberFormOne,
      });
      window.scrollTo(0, 700);
    }
  }, [submit]);

  if (submit) {
    return (
      <ContactFormWrapper>
        <div className="form-submitted">
          <h2 className="text-2xl">Thanks for contacting us!</h2>
          <p className="text-md">We'll get back to you as soon as we can.</p>
        </div>
      </ContactFormWrapper>
    );
  }

  return (
    <ContactFormWrapper>
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
            form: "contact",
          }}
          onSubmit={(values) => {
            setmemberFormOne(values);
            setSubmit(true);
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
              pattern="[A-Za-z]{1,32}"
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
              pattern="[A-Za-z]{1,32}"
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
            <label htmlFor="scope" className="form-name">
              Scope of Question <span className="required-sign">*</span>
            </label>
            <div aria-labelledby="my-radio-group">
              <label>
                <Field
                  className="radio-field"
                  type="radio"
                  name="scope"
                  value="Meshery"
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
    </ContactFormWrapper>
  );
};

export default ContactForm;
