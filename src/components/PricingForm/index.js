import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import PricingFormWrapper from "./pricingForm.style";

const PricingForm = () => {
  // Use the same naming convention as your other forms
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
      <h2>Sign Up for More Pricing Info</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        onSubmit={(values) => {
          // Store the form values in the memberFormOne state
          setMemberFormOne(values);
          // Trigger the effect to POST the data
          setSubmit(true);
        }}
      >
        {() => (
          <Form className="pricing-form">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </PricingFormWrapper>
  );
};

export default PricingForm;
