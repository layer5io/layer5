import React, { useState, useEffect } from "react";
import MeshmapWrapper from "./meshmap.style";
import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import PageHeader from "../../reusecore/PageHeader";
import { Field, Formik, Form } from "formik";
import axios from "axios";
import mesheryCloud from "./meshery-cloud.png";
import meshmapImage from "./MeshMap.png";
import serviceMesh from "./service-mesh.svg";
import DiscussCallout from "../../sections/Discuss-Callout";
import layer5_img from "../../assets/images/layer5/layer5-only/svg/layer5-white-no-trim.svg";
import { Link } from "gatsby";


const Meshmap = () => {

  const [stepNumber, setStepNumber] = useState(0);

  // Form values
  const [memberFormOne, setMemberFormOne] = useState({});

  const [submit, setSubmit] = useState(false);

  const nextStep = () => {
    if (stepNumber === 0) {
      setSubmit(true);
    }
    window.scrollTo(0, 0);
  };


  useEffect(() => {
    if (submit) {
      axios.post("https://hook.integromat.com/bklgspwelgqkvbdj4coxompc62d78ngi", {
        memberFormOne,
      });
    }
  }, [submit]);


  const MeshmapFormPage = () => {
    return (
        
      <Container>
        <PageHeader title="MeshMap" />   
        <Row>
          <Col lg={6} md={6} sm={12}>
            <p className= "para">As an extensible platform, Meshery has many extension points, MeshMap being a prominent example of a Meshery plugin. MeshMap has two modes: Visualizer and Designer. Patterns created in Designer can be deployed and viewed as running in your environment using Visualizer. MeshMap is centered around service mesh patterns. </p>
            <p>Create and share your own Kubernetes deployments and service mesh patterns in MeshMap Designer or import from the <Link to="/books/service-mesh-patterns"> patterns catalog </Link>. </p>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <img className="meshmapImage" src={meshmapImage} />
          </Col>
          <Col lg={6} md={6} sm={12}>
            <h4><img className="bullet-image" src={serviceMesh} /> Visualizer Mode</h4>
            <ul className="bullet">
              <li> Examine a visual topology of Kubernetes cluster and its services.</li>
              <li> View and search streams of your pod container logs.</li>
              <li> Connect an interactive terminal to instances of your containers.</li>
            </ul>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <h4><img className="bullet-image" src={serviceMesh} /> Designer Mode </h4>
            <ul className="bullet">
              <li> Design a service mesh deployment with application and Envoy filter from scratch.</li>
              <li> Customize a service mesh deployment with application and Envoy filter from pattern.</li>
            </ul>
          </Col>
        </Row>
        <div className="banner-background">
          <Container>
            <div className="hero-section">
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <p style={{paddingTop: "4.5rem"}}> Choose between Twitter, Google, LinkedIn, and GitHub, provide the username/handle of your user account for your preferred identity provider. Selected beta program participants will receive a free Meshery Cloud account and have full access MeshMap enabled for each of the following user accounts that you provide. Please provide at least one account.</p>
                  <img src={mesheryCloud} className="logo" />
                  <p className="para"> Deploy your designs and manage your infrastructure using MeshMap Visualizer. Enter your name (as soon as possible) into the waiting list for participant in the beta program. Your request for access will be processed as quickly as possible. Due to the large influx of program participation requests, it may take some time before system access is granted. So that you can familiarize while you wait, the Layer5 team will send you additional information about beta program, MeshMap modes, and service mesh patterns.</p>
                  <DiscussCallout />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div className="hero-text">
                    <h3 className="title" id="meshmap-beta">MeshMap Beta Waiting List</h3>
                    <Formik
                      initialValues={{
                        firstname: "",
                        lastname: "",
                        email: "",
                        occupation: "",
                        org: "",
                        github: "",
                        twitter: "",
                        linkedin: "",
                        role: "",
                      }}
                      onSubmit={values => {
                        setMemberFormOne(values);
                        setStepNumber(1);
                        nextStep();
                      }}
                    >
                      <Form className="form" method="post">
                        <label htmlFor="email" className="form-name">Email Address <span className="required-sign">*</span></label>
                        <Field type="text" className="text-field" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                        <label htmlFor="fname" className="form-name">First Name <span className="required-sign">*</span></label>
                        <Field type="text" className="text-field" id="firstname" name="firstname" maxlength="32"  pattern="[A-Za-z]{1,32}" required />
                        <label htmlFor="lname" className="form-name">Last Name <span className="required-sign">*</span></label>
                        <Field type="text" className="text-field" id="lastname" name="lastname" maxlength="32"  pattern="[A-Za-z]{1,32}" required />
                        <label htmlFor="occupation" className="form-name">Occupation / Title<span className="required-sign">*</span></label>
                        <Field type="text" className="text-field" id="occupation" name="occupation" />
                        <label htmlFor="org" className="form-name">Organization / Company / School<span className="required-sign">*</span></label>
                        <Field type="text" className="text-field" id="org" name="org" />
                        <label htmlFor="github" className="form-name">GitHub</label>
                        <Field type="url" placeholder="https://github.com/" className="text-field" id="github" name="github" pattern="http(s?)(:\/\/)((www.)?)github.com(\/)([a-zA-z0-9\-_]+)" />
                        <label htmlFor="twitter" className="form-name">Twitter</label>
                        <Field type="url" placeholder="https://twitter.com/" className="text-field" id="twitter" name="twitter" pattern="http(s?)(:\/\/)((www.)?)twitter.com(\/)([a-zA-z0-9\-_]+)" />
                        <label htmlFor="linkedin" className="form-name">Linkedin</label>
                        <Field type="url" placeholder="https://www.linkedin.com/" className="text-field" id="linkedin" name="linkedin" />
                        <label htmlFor="role" className="form-name">What role best identifies you?<span className="required-sign">*</span></label>
                        <div role="group" aria-labelledby="my-radio-group">
                          <label>
                            <Field type="radio" name="role" value="Architect" />
                            Architect
                          </label>
                          <label>
                            <Field type="radio" name="role" value="Business Operations" />
                            Business Operations
                          </label>
                          <label>
                            <Field type="radio" name="role" value="Developer" />
                            Developer
                          </label>
                          <label>
                            <Field type="radio" name="role" value="DevOps" />
                            DevOps/SRE/Sysadmin
                          </label>
                          <label>
                            <Field type="radio" name="role" value="Executive" />
                            Executive
                          </label>
                          <label>
                            <Field type="radio" name="role" value="IT Operations" />
                            IT Operations
                          </label>
                          <label>
                            <Field type="radio" name="role" value="Media" />
                            Media/Analyst
                          </label>
                          <label>
                            <Field type="radio" name="role" value="Product Manager" />
                            Product Manager
                          </label>
                          <label>
                            <Field type="radio" name="role" value="Professor" />
                            Professor/Academic
                          </label>
                          <label>
                            <Field type="radio" name="role" value="Sales Marketing" />
                            Sales Marketing
                          </label>
                          <label>
                            <Field type="radio" name="role" value="Student" />
                            Student
                          </label>
                          <label>
                            <Field type="radio" name="role" value="Other" />
                            Other
                          </label>
                        </div>
                        <br />
                        <Button secondary type="submit" className="btn" title="Submit" />
                      </Form>
                    </Formik>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </Container>
    );
  };
  const ThankYou = () => {
    return (
      <Container>
        <div className="black-box">
          <h2>Thank you for your interest in Layer5 MeshMap!</h2>
          <p>You are now signed up for the Layer5 MeshMap beta program and your position on the waiting list is confirmed. Please patiently await your acceptance and start of the beta program.  We are working through a growing waitlist. </p>
          <p>If you have any questions in the meantime, please email <a href="mailto:meshmap@layer5.io">meshmap@layer5.io</a>.</p>
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