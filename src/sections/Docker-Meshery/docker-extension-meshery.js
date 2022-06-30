import React, { useState, useEffect } from "react";
import { DockerMesheryWrapper } from "./dockerMeshery.style";
import { Row, Col, Container } from "../../reusecore/Layout";
import { Field, Formik, Form } from "formik";
import Button from "../../reusecore/Button";
import axios from "axios";

const Kubernetes = "./kubernetes-logo.svg";
import layer5_img from "../../assets/images/layer5/layer5-only/svg/layer5-white-no-trim.svg";
const mesheryworkdiagram =
  "../../assets/images/mesherywork-diagram/mesherywork-diagram.svg";
const dockercompose_logo =
  "../../assets/images/dockercompose-logo/dockercompose-logo.png";
const visual_topology =
  "../../assets/images/visual-topology/visual-topology.svg";
const dockerDesktop =
  "../../assets/images/docker-extension/docker-extension-meshery.png";

import { StaticImage } from "gatsby-plugin-image";

const DockerExtensionMeshery = () => {
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

  const errorRole = "Please select role as applicable";
  const errorAccounts = "Please provide at least one account";

  const nextStep = () => {
    if (stepNumber === 0) {
      setSubmit(true);
    }
    window.scrollTo(0, 600);
  };

  useEffect(() => {
    if (submit) {
      axios.post("https://hook.us1.make.com/gguommoyd14634ur9xs7l37widuoa7e9", {
        memberFormOne,
      });
    }
  }, [submit]);

  const DockerExtFormPage = () => {
    return (
      <Container>
        <Row>
          <h2 className="sectionTitle">
            Develop service mesh-ready apps using Docker Desktop and Meshery
          </h2>
          <p>
            The Docker Extension for Meshery extends Docker Desktop’s position
            as the cloud native developer’s go-to Kubernetes environment with
            easy access to the next layer of cloud native infrastructure:
            service meshes.
          </p>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <StaticImage
              src={dockerDesktop}
              alt="Meshery Docker Extension"
            />
            <p>Install Meshery Docker Extension and get:</p>

            <Row>
              <Col className="docker-extension-meshery" lg={2}>
                <StaticImage
                  src={dockercompose_logo}
                  alt="Docker Compose Logo"
                  width={250}
                  objectFit="contain"
                />
              </Col>
              <Col lg={10}>
                <div className="feature-title">Service mesh support for your Docker Compose apps</div> {" "}
                <i>
                  Import your Docker Compose apps. Configure and deploy them
                  to Kubernetes and any service mesh.
                </i>
              </Col>
            </Row>
            <Row className="extension-feature">
              <Col lg={10}>
                <div className="feature-title">Visual designer for cloud native applications and infrastructure</div> {" "}
                <i>
                  Early access to the Docker Extension for Meshery that
                  offers a visual topology for designing Docker Compose
                  applications, operating Kubernetes, service meshes, and
                  their workloads.
                </i>
              </Col>
              <Col className="docker-extension-meshery" lg={2}>
                <StaticImage
                  src={visual_topology}
                  alt="Visual Topology"
                  width={150}
                  objectFit="contain"
                />
              </Col>
            </Row>
            <Row className="extension-feature">
              <Col className="docker-extension-meshery" lg={2}>
                <StaticImage
                  src={mesheryworkdiagram}
                  alt="Single-click Istio deployment"
                  width={150}
                  objectFit="contain"
                />
              </Col>
              <Col lg={10}>
                <div className="feature-title">Single-click deployment of any service mesh</div> {" "}
                <i>
                  Support of 10 different service meshes to the fingertips
                  of developers in connection with Docker Desktop’s ability
                  to deliver Kubernetes locally.
                </i>
              </Col>
            </Row>
            <Row className="extension-feature">
              <Col lg={10}>
                <div className="feature-title">Detection of Kubernetes environments</div> {" "}
                <i>
                  Scan your kubeconfigs and select your current Kubernetes environment. Switch from one environment to another one.
                </i>
              </Col>
              <Col className="docker-extension-meshery" lg={2}>
                <StaticImage
                  src={Kubernetes}
                  alt="Kubernetes scan and MeshSync"
                  width={150}
                  objectFit="contain"
                />
              </Col>
            </Row>
            <Row className="extension-feature">
              <Col lg={10}>
                <div className="listed">
                  <strong>Resources</strong>
                  <p>
                    Layer5 presented two talks at DockerCon22 with HPE and HashiCorp, below are the links to the blog posts which covers the detailed overview of "Docker Extension for Meshery".
                  </p>
                  <ul>
                    <li>
                      <a href="https://layer5.io/blog/docker/extending-the-docker-compose-experience-to-service-mesh">Extending the Docker Compose Experience to Service Mesh</a>
                    </li>
                    <li>
                      <a href="https://layer5.io/blog/docker/extending-docker-with-meshery-spire-and-istio">Extending Docker with Meshery, SPIRE, and Istio</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={6} sm={12}>
            <h3 className="form-title">Learn All Meshery Docker Extension Features</h3>
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
                form : "docker-extension",
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
                  Organization / Company / School <span className="required-sign">*</span>
                </label>
                <Field
                  type="text"
                  className="text-field"
                  id="org"
                  name="org"
                  required
                />
                <div className="accounts">
                  <label className="form-name">Account(s) to Connect</label>
                  <p>
                    Selected participants will receive a free Meshery Cloud account and have full access to the Meshery Docker extension for each of the following user accounts that you provide. Please provide at least one account.
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
                <Button
                  secondary
                  type="submit"
                  className="btn"
                  title="Submit"
                />
              </Form>
            </Formik>
          </Col>
        </Row >
      </Container >
    );
  };
  const ThankYou = () => {
    return (
      <Container>
        <div className="black-box">
          <h2>Thank you for your interest in Meshery Docker Extension!</h2>
          <p>
            You will soon receive detailed guidance on the all of the extension's features. {" "}
          </p>
          <p>
            In the meantime, please visit our{" "}
            <a href="https://discuss.layer5.io">community forum</a> or join us
            in our <a href="https://slack.layer5.io">community Slack</a>.
          </p>
          <p className="white">
            - <img className="sign" src={layer5_img} alt="Layer5" /> <i>Team</i>
          </p>
        </div>
      </Container>
    );
  };
  return (
    <DockerMesheryWrapper>
      <div>
        {stepNumber === 0 && <DockerExtFormPage />}
        {stepNumber === 1 && <ThankYou />}
      </div>
    </DockerMesheryWrapper>
  );
};

export default DockerExtensionMeshery;
