import React, { useState } from "react";
import Button from "../../reusecore/Button";
import { Field, Form, Formik } from "formik";
import CommonFormWrapper from "./commonForm.style";
import {
  MarketingHoneypot,
  MarketingStatus,
  useMarketingForm,
} from "../MarketingForm";
import { Container } from "../../reusecore/Layout";
import layer5_img from "../../assets/images/layer5/layer5-only/svg/layer5-white-no-trim.svg";

const EventForm = ({ form, title, submit_title, submit_body }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const { status, message, submit } = useMarketingForm(form);

  // Form values
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [org, setOrg] = useState("");
  const [occupation, setOccupation] = useState("");

  return (
    <CommonFormWrapper>
      {stepNumber === 0 && (
        <div className="form-body">
          <h3 className="form-title">{title}</h3>
          <Formik
            initialValues={{
              firstname: firstname,
              lastname: lastname,
              email: email,
              occupation: occupation,
              org: org,
              company_website: "",
              form: form,
            }}
            onSubmit={async (values) => {
              const result = await submit(values);
              if (!result) {
                setFirstName(values.firstname);
                setEmail(values.email);
                setLastName(values.lastname);
                setOccupation(values.occupation);
                setOrg(values.org);
                return;
              }
              setStepNumber(1);
              window.scrollTo(0, window.scrollY - 800);
            }}
          >
            <Form className="form" method="post">
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
              />
              <label htmlFor="occupation" className="form-name">
                Occupation / Title <span className="required-sign">*</span>
              </label>
              <Field
                type="text"
                className="text-field"
                id="occupation"
                name="occupation"
                required
              />
              <label htmlFor="org" className="form-name">
                Organization / Company / School{" "}
                <span className="required-sign">*</span>
              </label>
              <Field type="text" className="text-field" id="org" name="org" />

              <MarketingHoneypot formik />
              <MarketingStatus
                status={status}
                message={status === "error" ? message : ""}
              />
              <Button
                $secondary
                className="btn"
                type="submit"
                title="Submit"
                disabled={status === "submitting"}
              />
            </Form>
          </Formik>
        </div>
      )}
      {stepNumber === 1 && (
        <ThankYou title={submit_title} description={submit_body} />
      )}
    </CommonFormWrapper>
  );
};

const ThankYou = ({ title, description }) => {
  return (
    <Container>
      <div className="thank-you-box">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          In the meantime, please visit our{" "}
          <a href="https://discuss.meshery.io">community forum</a> or join us in
          our <a href="https://slack.layer5.io">community Slack</a>.
        </p>
        <h3 className="white">
          - Team <img src={layer5_img} alt="Layer5" width="125" />
        </h3>
      </div>
    </Container>
  );
};

export default EventForm;
