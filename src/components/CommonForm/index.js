import React, { useState, useEffect, useRef, forwardRef } from "react";
import Button from "../../reusecore/Button";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import CommonFormWrapper from "./commonForm.style";
import { Container } from "../../reusecore/Layout";
import layer5_img from "../../assets/images/layer5/layer5-only/svg/layer5-white-no-trim.svg";


const CommonForm = ({ form, title, submit_title, submit_body, submit_button_title }) => {

  const [stepNumber, setStepNumber] = useState(0);
  const [memberFormOne, setMemberFormOne] = useState({});
  const [submit, setSubmit] = useState(false);

  // Form values
  // const [validateAccounts, setValidateAccounts] = useState(false);
  const [validateRole, setValidateRole] = useState(false);
  const [validateEmail, setValidateEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [org, setOrg] = useState("");
  const [occupation, setOccupation] = useState("");
  const [role, setRole] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  // const [google, setGoogleAccount] = useState("");
  // const [github, setGithubAccount] = useState("");
  // const [twitter, setTwitterAccount] = useState("");
  // const [linkedin, setLinkedinAccount] = useState("");
  const errorRole = "Please select role as applicable";
  const confirmationMessageRef = useRef(null);  //set reference to confirmation message
  const navBarOffset = 120;
  const scrollElementIntoView = (element, offset) => {   //function to bring the confirmation message into view after submittion of form
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };
  // Validating role
  const isValidRole = (value) => {
    if (!value) {
      setValidateRole(true);
      return false;
    } else {
      setValidateRole(false);
      return true;
    }
  };
  /*
  Validating Email ----
  1. Check for email if it satisfies the standard forn for email
  2. Check for anonymous email address/domains. Currently It is checking for only 4 domains, we can add more to regex expression as we move ahead.
  */
  const isValidEmail = (value) => {
    const validEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value);
    if (!validEmail) {
      setValidateEmail(true);
      setErrorEmail("Please enter a valid email address");
      return false;
    } else if (validEmail && /.*(?=.*@(?:duck\.com|protonmail\.com|anonaddy\.me|tuta\.io)).*/.test(value)) {
      setValidateEmail(true);
      setErrorEmail("Use of this email address is not allowed. Please enter a non-anonymous email address / domain.");
      return false;
    } else {
      setValidateEmail(false);
      setErrorEmail("");
      return true;
    }
  };
  useEffect(() => {
    if (submit) {
      axios.post("https://hook.us1.make.com/7c1op88rysnmeitovt35fxzcv2spspp0", {
        memberFormOne,
      });
    }
  }, [submit, errorEmail, validateEmail, validateRole]);

  return (
    <CommonFormWrapper>
      {
        stepNumber === 0 &&
  <div className="form-body">
    { form !== "contact" && (
      <>
        <h2 className="form-title">{title}</h2>
      </>
    )}
    <Formik
      initialValues={{
        firstname: firstname,
        lastname: lastname,
        email: email,
        occupation: occupation,
        org: org,
        // google: google,
        // github: github,
        // twitter: twitter,
        // linkedin: linkedin,
        role: role,
        form: form,
      }}
      onSubmit={values => {
        if (isValidRole(values.role) && isValidEmail(values.email)) {
          setMemberFormOne(values);
          setStepNumber(1);
          setSubmit(true);
          // window.scrollTo(0,window.scrollY - 800);
          // confirmationMessageRef.current.scrollIntoView({ behavior: 'smooth' })
          scrollElementIntoView(confirmationMessageRef.current, navBarOffset);
        } else {
          // if (!(values.google || values.github || values.twitter || values.linkedin)) {
          //   setValidateAccounts(true);
          // } else {
          //   setValidateAccounts(false);
          // }
          setFirstName(values.firstname);
          setEmail(values.email);
          setLastName(values.lastname);
          setOccupation(values.occupation);
          setOrg(values.org);
          // setGoogleAccount(values.google);
          // setTwitterAccount(values.twitter);
          // setGithubAccount(values.github);
          // setLinkedinAccount(values.linkedin);
          setRole(values.role);
        }
      }}
    >
      <Form className="form" method="post">
        <label htmlFor="firstname" className="form-name">First Name <span className="required-sign">*</span></label>
        <Field type="text" className="text-field" id="firstname" name="firstname" maxLength="32" pattern="^[\p{L}]+('[\p{L}]*)?(?:-[\p{L}]+)*([\s][\p{L}]+('[\p{L}]*)?(?:-[\p{L}]+)*){0,31}$" required />
        <label htmlFor="lastname" className="form-name">Last Name <span className="required-sign">*</span></label>
        <Field type="text" className="text-field" id="lastname" name="lastname" maxLength="32" pattern="^[\p{L}]+('[\p{L}]*)?(?:-[\p{L}]+)*([\s][\p{L}]+('[\p{L}]*)?(?:-[\p{L}]+)*){0,31}$" required />
        <label htmlFor="email" className="form-name">Email Address <span className="required-sign">*</span></label>
        {validateEmail && <p style={{ margin: "0px", color: "red", fontSize: "16px" }}>{errorEmail}</p>}
        <Field type="email" className="text-field" id="email" name="email" pattern="([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$)" required />
        <label htmlFor="occupation" className="form-name">Occupation / Title <span className="required-sign">*</span></label>
        <Field type="text" className="text-field" id="occupation" name="occupation" required />
        <label htmlFor="org" className="form-name">Organization / Company / School <span className="required-sign">*</span></label>
        <Field type="text" className="text-field" id="org" name="org" />

        {/* <div className="accounts">
           <label className="form-name">Account(s) to Connect</label>
           <p>
             {account_desc}
           </p>
            {validateAccounts && <p style={{ margin: "0px", color: "red" }}>{errorAccounts}</p>}
            <div className="accounts_group">
             <label htmlFor="google" className="form-name">Google</label>
             <Field type="email" className="text-field" id="google" name="google" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
             <label htmlFor="github" className="form-name">GitHub</label>
             <Field type="text" className="text-field" id="github" name="github" pattern="[a-zA-Z0-9._.-]{1,32}" placeholder="Username" />
             <label htmlFor="twitter" className="form-name">Twitter</label>
             <Field type="text" className="text-field" id="twitter" pattern="[a-zA-Z0-9._.-]{1,32}" name="twitter" placeholder="Username"/>
             <label htmlFor="linkedin" className="form-name">Linkedin</label>
             <Field type="text" className="text-field" id="linkedin" name="linkedin" placeholder="email" />
            </div>
         </div> */}

        <label htmlFor="role" className="form-name">What role best identifies you? <span className="required-sign">*</span></label>
        {validateRole && <p style={{ margin: "0px", color: "red", fontSize: "16px" }}>{errorRole}</p>}
        <div role="group" className="formRight" aria-labelledby="select">
          <Field as="select" name="role">
            <option defaultValue hidden className="custom-arrow">Select your role</option>
            <option className="options" value="Architect">Architect</option>
            <option className="options" value="Backend Engineer">Backend Engineer</option>
            <option className="options" value="Business Operations">Business Operations</option>
            <option className="options" value="Data Analyst">Data Analyst</option>
            <option className="options" value="Designer">Designer</option>
            <option className="options" value="Developer">Developer</option>
            <option className="options" value="DevOps Engineer">DevOps Engineer / SysAdmin</option>
            <option className="options" value="Executive">Executive</option>
            <option className="options" value="Frontend Engineer">Frontend Engineer</option>
            <option className="options" value="Fullstack Engineer">Fullstack Engineer</option>
            <option className="options" value="IT Operations">IT Operations</option>
            <option className="options" value="Manager">Manager</option>
            <option className="options" value="Marketing">Marketing</option>
            <option className="options" value="Media/Analyst">Media/Analyst</option>
            <option className="options" value="Platform Engineer">Platform Engineer</option>
            <option className="options" value="Professor/Academic">Professor/Academic</option>
            <option className="options" value="Product Manager">Product Manager</option>
            <option className="options" value="Sales">Sales</option>
            <option className="options" value="Sales Engineer">Sales Engineer</option>
            <option className="options" value="Site Reliability Engineer">Site Reliability Engineer</option>
            <option className="options" value="Student">Student</option>
            <option className="options" value="Other">Other</option>
          </Field>
        </div>
        {form === "contact" && (
          <>
            <label htmlFor="subject" className="form-name">
              Subject <span className="required-sign">*</span>
            </label>
            <Field type="text" required className="text-field" id="subject" name="subject" />
            <label htmlFor="message" className="form-name">
            Message <span className="required-sign">*</span>
            </label>
            <Field as="textarea" required rows="8" type="text" className="text-field" id="message" name="message" />
            {/* <label>
              <Field
                type="checkbox"
                name="subscribed"
                className="form-check"
              />
              <span>Subscribe to our newsletter</span>
            </label> */}
            <div>By providing my contact information, I authorize Layer5 to contact me with communications about Layer5's products and services.</div>
          </>
        )}
        {form == "open-source-pricing" && (
          <>
            <label htmlFor="projectname" className="form-name">
             What is the name of your project? <span className="required-sign">*</span>
            </label>
            <Field type="text" className="text-field" id="projectname" name="projectname" />
            <label htmlFor="repository" className="form-name">
            Please link the public repository of your OSS organization (github, gitlab, etc.) <span className="required-sign">*</span>
            </label>
            <Field type="url" className="text-field" id="repository" name="repository" />
            <label htmlFor="website" className="form-name">
            Please provide a link to your project website. <span className="required-sign">*</span>
            </label>
            <Field type="url" className="text-field" id="website" name="website" />
            <label htmlFor="goal" className="form-name">
            What is the goal of this project? <span className="required-sign">*</span>
            </label>
            <Field type="text" className="text-field" id="goal" name="goal" />
            <label htmlFor="users" className="form-name">
            What types of user(s) benefit from this project? <span className="required-sign">*</span>
            </label>
            <Field type="text" className="text-field" id="users" name="users" />
            <label htmlFor="sponsors" className="form-name">
            Please list all sponsors for this project. <span className="required-sign">*</span>
            </label>
            <Field as="textarea" type="text" className="text-field" id="sponsors" name="sponsors" />
            <label htmlFor="commercialization" className="form-name">
            Path to Commercialization <span className="required-sign">*</span>
            </label>
            <div role="group" className="formRight" aria-labelledby="select">
              <Field as="select" id="commercialization" name="commercialization" aria-describedby="commercialization-description"
              >
                <option defaultValue hidden className="custom-arrow">Select an option</option>
                <option className="options" value="Yes">Yes</option>
                <option className="options" value="No">No</option>
                <option className="options" value="Maybe">Maybe</option>
              </Field>
            </div>
            <div role="group" className="formRight" aria-labelledby="select">
              <label htmlFor="license" className="form-name">
              What is the code distribution license for your OSS project? <span className="required-sign">*</span>
              </label>
              <Field as="select" id="license" name="license" className="large gfield_select">
                <option defaultValue hidden className="custom-arrow">Select a license</option>
                <option value="GNU Affero General Public License v3.0">GNU Affero General Public License v3.0</option>
                <option value="Apache 2.0">Apache 2.0</option>
                <option value="BSD 2-Clause license">BSD 2-Clause license</option>
                <option value="BSD-3-Clause license">BSD-3-Clause license</option>
                <option value="BSD 4-Clause">BSD 4-Clause</option>
                <option value="GNU General Public License v3.0">GNU General Public License v3.0</option>
                <option value="GNU Lesser General Public License v3.0">GNU Lesser General Public License v3.0</option>
                <option value="MIT License">MIT License</option>
                <option value="Mozilla Public License 2.0">Mozilla Public License 2.0</option>
                <option value="Boost Software License 1.0">Boost Software License 1.0</option>
                <option value="The Unlicense">The Unlicense</option>
                <option value="BSD Zero Clause">BSD Zero Clause</option>
                <option value="Academic Free License v3.0">Academic Free License v3.0</option>
                <option value="Creative Commons Attribution 4.0 International">Creative Commons Attribution 4.0 International</option>
                <option value="Creative Commons Attribution Share Alike 4.0 International">Creative Commons Attribution Share Alike 4.0 International</option>
                <option value="Creative Commons Zero v1.0 Universal">Creative Commons Zero v1.0 Universal</option>
                <option value="Eclipse Public License 2.0">Eclipse Public License 2.0</option>
                <option value="CeCILL Free Software License Agreement v2.1">CeCILL Free Software License Agreement v2.1</option>
                <option value="Educational Community License v2.0">Educational Community License v2.0</option>
                <option value="European Union Public License 1.2">European Union Public License 1.2</option>
                <option value="ISC License">ISC License</option>
                <option value="Microsoft Public License">Microsoft Public License</option>
                <option value="Open Data Commons Open Database License v1.0">Open Data Commons Open Database License v1.0</option>
                <option value="Common Development and Distribution License">Common Development and Distribution License</option>
                <option value="Eiffel Forum License 2.0">Eiffel Forum License 2.0</option>
                <option value="Adaptive Public License 1.0">Adaptive Public License 1.0</option>
                <option value="Mulan Permissive Software License, Version 2">Mulan Permissive Software License, Version 2</option>
              </Field>
            </div>
            <div>Does this project have a pathway to commercialization? Your organization can accept donations to sustain its work, but it can't seek to make a profit by selling services, by charging for enhancements or add-ons, or by other means specifically for this project. If you don't meet this criteria, Please reach out to Layer5 sales team who will assist you find a partner program that may better fit your needs.</div>
          </>
        )}


        <Button $secondary className="btn" title={submit_button_title || "Submit"} />
      </Form>
    </Formik>
  </div>
      }
      {
        stepNumber === 1 &&
                    <ThankYou title={submit_title} description={submit_body} ref={confirmationMessageRef} />
      }
    </CommonFormWrapper>
  );
};

const ThankYou = forwardRef(({ title, description }, ref) => {
  return (
    <Container>
      <div className="thank-you-box" ref={ref}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>In the meantime, please visit our <a href="https://discuss.layer5.io">community forum</a> or join us in our <a href="https://slack.layer5.io">community Slack</a>.</p>
        <h3 className="white">- Team <img src={layer5_img} alt="Layer5" width="125" /></h3>
      </div>
    </Container>
  );
});


export default CommonForm;