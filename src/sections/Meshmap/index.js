import React, { useState, useEffect } from "react";
import MeshmapWrapper from "./meshmap.style";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/app/themeStyles";
import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import { Field, Formik, Form } from "formik";
import axios from "axios";
import Features from "../../components/Features-carousel";
import MeshmapModes from "./meshmap-modes";
import Catalog from "./meshmap-catalog";
import Platform from "./meshmap-platform";
import layer5_img from "../../assets/images/layer5/layer5-only/svg/layer5-white-no-trim.svg";
import MeshmapBanner from "./meshmap_banner";
import mesheryCloud from "../../assets/images/meshmap/MesheryCloud.png";
import designerImage from "../../assets/images/meshmap/MeshmapDesigner.png";
import visualizerImage from "../../assets/images/meshmap/MeshmapVisualizer.png";
import MeshMapDrafts from "./images/meshmap-draft-logos.png";
import MesheryAction from "./meshery-action";


const Meshmap = () => {

  const [stepNumber, setStepNumber] = useState(0);

  // Form values
  const [memberFormOne, setMemberFormOne] = useState({});

  const [submit, setSubmit] = useState(false);

  const [validateAccounts, setValidateAccounts] = useState(false);
  const [validateRole, setValidateRole] = useState(false);
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [org, setOrg] = useState("");
  const [occupation, setOccupation] = useState("");
  const [role, setRole] = useState("");
  const [google, setGoogleAccount] = useState("");
  const [github, setGithubAccount] = useState("");
  const [twitter, setTwitterAccount] = useState("");
  const [linkedin, setLinkedinAccount] = useState("");

  const errorAccounts = "Please provide at least one account";
  const errorRole = "Please select role as applicable";
  const nextStep = () => {
    if (stepNumber === 0) {
      setSubmit(true);
    }
    window.scrollTo(0, 800);
  };

  useEffect(() => {
    if (submit) {
      axios.post("https://hook.us1.make.com/gguommoyd14634ur9xs7l37widuoa7e9", {
        memberFormOne,
      });
    }
  }, [submit]);


  const MeshmapFormPage = () => {
    return (
      <div >
        <ThemeProvider theme={theme}>
          <MeshmapBanner />
        </ThemeProvider>
        <Container>
          <div className="mobile-modes">
            <Features
              heading="MeshMap Modes"
              features={[
                {
                  title : "Designer Mode",
                  description :
                    "Design a service mesh deployment with application and Envoy filter from scratch. Customize a service mesh deployment with application and Envoy filter from pattern.",
                  content : (
                    <img
                      src={designerImage}
                      alt="Designer Mode"
                      className="modes-image"
                    />
                  ),
                },
                {
                  title : "Visualizer Mode",
                  description :
                    "Patterns created in Designer can be deployed and viewed as running in your environment using Visualizer. Examine a visual topology of Kubernetes cluster and its services.",
                  content : (
                    <img
                      src={visualizerImage}
                      alt="Visualizer Mode"
                      className="modes-image"
                    />
                  ),
                },
              ]}
            />
          </div>
          <MeshmapModes />
          <Catalog />
          <MesheryAction />

          <div className="banner-background">

            <Container>

              <Row className="description">
                <Col lg={7} md={6} sm={12} className="desc-text">
                  <h1 className="heading-1">Signup for</h1>
                  <h1 className="heading-2">MeshMap Beta</h1>
                  <p className="desc-p">
                    Join the waiting list for participation in the beta program. Your request for access will be processed as quickly as possible. Due to the large influx of program participation requests, it may take some time before system access is granted. So that you can familiarize while you wait, the Layer5 team will send you additional information about beta program, MeshMap modes, and service mesh patterns.
                  </p>
                  <img src={mesheryCloud} className="meshery-hero-img" alt="Meshery Cloud" />
                  <div className="draft-logo">
                    <p>Help choose the best logo for MeshMap:</p>
                    <a href="https://twitter.com/layer5/status/1536832439833743363?s=20&t=oEDasGEBl8cvsA64P7NNTA">
                      <img src={MeshMapDrafts} alt="MeshMap Draft" /></a><br />
                    <p><a href="https://twitter.com/layer5/status/1536832439833743363?s=20&t=oEDasGEBl8cvsA64P7NNTA">Vote for your favorite design</a></p>
                  </div>
                </Col>

                <Col lg={5} md={6} sm={12}>
                  <h3 className="form-title">Join the Beta Program</h3>
                  <Formik
                    initialValues={{
                      firstname : firstname,
                      lastname : lastname,
                      email : email,
                      occupation : occupation,
                      org : org,
                      google : google,
                      github : github,
                      twitter : twitter,
                      linkedin : linkedin,
                      role : role,
                      form : "meshmap",
                    }}
                    onSubmit={values => {
                      if ((values.google || values.github || values.twitter || values.linkedin) && values.role) {
                        setMemberFormOne(values);
                        setStepNumber(1);
                        nextStep();
                      } else {
                        if (!values.role) {
                          setValidateRole(true);
                        } else {
                          setValidateRole(false);
                        }
                        if (!(values.google || values.github || values.twitter || values.linkedin)) {
                          setValidateAccounts(true);
                        } else {
                          setValidateAccounts(false);
                        }
                        setFirstName(values.firstname);
                        setEmail(values.email);
                        setLastName(values.lastname);
                        setOccupation(values.occupation);
                        setOrg(values.org);
                        setGoogleAccount(values.google);
                        setTwitterAccount(values.twitter);
                        setGithubAccount(values.github);
                        setLinkedinAccount(values.linkedin);
                        setRole(values.role);
                      }
                    }}
                  >
                    <Form className="form" method="post">
                      <label htmlFor="firstname" className="form-name">First Name <span className="required-sign">*</span></label>
                      <Field type="text" className="text-field" id="firstname" name="firstname" maxLength="32" pattern="[A-Za-z]{1,32}" required />
                      <label htmlFor="lastname" className="form-name">Last Name <span className="required-sign">*</span></label>
                      <Field type="text" className="text-field" id="lastname" name="lastname" maxLength="32" pattern="[A-Za-z]{1,32}" required />
                      <label htmlFor="email" className="form-name">Email Address <span className="required-sign">*</span></label>
                      <Field type="text" className="text-field" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                      <label htmlFor="occupation" className="form-name">Occupation / Title <span className="required-sign">*</span></label>
                      <Field type="text" className="text-field" id="occupation" name="occupation" required />
                      <label htmlFor="org" className="form-name">Organization / Company / School <span className="required-sign">*</span></label>
                      <Field type="text" className="text-field" id="org" name="org" />
                      <div className="accounts">
                        <label className="form-name">Account(s) to Connect</label>
                        <p>
                          Selected beta program participants will receive a free Meshery Cloud account and have full access MeshMap enabled for each of the following user accounts that you provide. Please provide at least one account.
                        </p>
                        {validateAccounts && <p style={{ margin : "0px", color : "red" }}>{errorAccounts}</p>}
                        <div className="accounts_group">
                          <label htmlFor="google" className="form-name">Google</label>
                          <Field type="email" className="text-field" id="google" name="google" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                          <label htmlFor="github" className="form-name">GitHub</label>
                          <Field type="text" className="text-field" id="github" name="github" />
                          <label htmlFor="twitter" className="form-name">Twitter</label>
                          <Field type="text" className="text-field" id="twitter" name="twitter" />
                          <label htmlFor="linkedin" className="form-name">Linkedin</label>
                          <Field type="text" className="text-field" id="linkedin" name="linkedin" />
                        </div>
                      </div>

                      <label htmlFor="role" className="form-name">What role best identifies you? <span className="required-sign">*</span></label>
                      {validateRole && <p style={{ margin : "0px", color : "red", fontSize : "12px" }}>{errorRole}</p>}
                      <div role="group" className="formRight" aria-labelledby="select">
                        <Field as="select" name="role">
                          <option selected hidden>Select your role</option>
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

                      <Button secondary type="submit" className="btn" title="Submit" />
                    </Form>
                  </Formik>
                </Col>
              </Row>
            </Container>
          </div>
          <Platform />
        </Container >
      </div >
    );
  };
  const ThankYou = () => {
    return (
      <Container>
        <div className="black-box">
          <h2>Thank you for your interest in Layer5 MeshMap!</h2>
          <p>You are now signed up for the Layer5 MeshMap beta program and your position on the waiting list is confirmed. Please patiently await your acceptance and start of the beta program. We are working through a growing waitlist </p>
          <p>In the meantime, please visit our <a href="https://discuss.layer5.io">community forum</a> or join us in our <a href="https://slack.layer5.io">community Slack</a>.</p>
          <h3 className="white">- Team <img src={layer5_img} alt="Layer5" width="125" /></h3>
        </div>
      </Container>
    );
  };
  return (
    <MeshmapWrapper>
      <div>
        {
          stepNumber === 0 &&

          <MeshmapFormPage />
        }
        {
          stepNumber === 1 &&
          <ThankYou />
        }

      </div>
    </MeshmapWrapper>
  );
};

export default Meshmap;
