import React, { useState, useEffect, useRef, forwardRef } from "react";
import Button from "../../reusecore/Button";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import CommonFormWrapper from "./commonForm.style";
import { Container } from "../../reusecore/Layout";
import layer5_img from "../../assets/images/layer5/layer5-only/svg/layer5-white-no-trim.svg";


const CommonForm = ({ form, title, submit_title, submit_body }) => {

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
    var offsetPosition = elementPosition + window.pageYOffset - offset;

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
      axios.post("https://hook.us1.make.com/r5qgpjel5tlhtyndcgjvkrdkoc65417y", {
        memberFormOne,
      });
    }
  }, [submit, errorEmail, validateEmail, validateRole]);

  return (
    <CommonFormWrapper>
      {
        stepNumber === 0 &&
  <div className="form-body">
    <h2 className="form-title">{title}</h2>
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
            <option defaultValue hidden>Select your role</option>
            <option value="Architect">Architect</option>
            <option value="Business Operations">Business Operations</option>
            <option value="Developer">Developer</option>
            <option value="DevOps">DevOps/SRE/Sysadmin </option>
            <option value="Executive">Executive</option>
            <option value="IT Operations">IT Operations</option>
            <option value="Media"> Media/Analyst</option>
            <option value="Product Manage">Product Manager</option>
            <option value="Professor">Professor/Academic</option>
            <option value="Sales Marketing">Sales Marketing</option>
            <option value="Student">Student</option>
            <option value="Other">Other</option>
          </Field>
        </div>

        <Button secondary className="btn" title="Submit" />
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
