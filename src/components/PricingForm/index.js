import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import PricingFormWrapper from "./pricingForm.style";

const PricingForm = () => {
  const [memberFormOne, setMemberFormOne] = useState({});
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (submit) {
      axios
        .post("https://hook.us1.make.com/7c1op88rysnmeitovt35fxzcv2spspp0", {
          memberFormOne,
        })
        .catch((err) => {
          console.error("Error submitting the form:", err);
        });
    }
  }, [submit, memberFormOne]);

  return (
    <PricingFormWrapper>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          workEmail: "",
          companyName: "",
          companySize: "",
          summary: "",
        }}
        onSubmit={(values) => {
          setMemberFormOne(values);
          setSubmit(true);
        }}
      >
        {() => (
          <Form className="pricing-form">
            {/* Scrollable Form Fields */}
            <div className="form-content">
              {/* All form fields here */}
              <div className="form-field">
                <label htmlFor="firstName">First Name</label>
                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Your First Name"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Your Last Name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="workEmail">Work Email</label>
                <Field
                  id="workEmail"
                  name="workEmail"
                  type="email"
                  placeholder="Your Work Email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
                />
              </div>

              <div className="form-field">
                <label htmlFor="companyName">Company Name</label>
                <Field
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder="Your Company Name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="companySize">Company Size / Number of Employees</label>
                <Field
                  id="companySize"
                  name="companySize"
                  type="number"
                  placeholder="Number of Employees"
                  required
                  min="1"
                />
              </div>
              <div className="form-field">
                <label htmlFor="summary">Summary</label>
                <Field
                  id="summary"
                  name="summary"
                  as="textarea"
                  placeholder="Briefly describe your inquiry or needs"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-footer">
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </PricingFormWrapper>
  );
};

export default PricingForm;

