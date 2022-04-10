import React, { useState, useEffect } from "react";
import { DockerMesheryWrapper } from "./dockerMeshery.style";
import { Row, Col, Container } from "../../reusecore/Layout";
import { Field, Formik, Form } from "formik";
import Button from "../../reusecore/Button";
import axios from "axios";

import layer5_img from "../../assets/images/layer5/layer5-only/svg/layer5-white-no-trim.svg";
const dockerDesktop = "../../assets/images/docker-extension-for-meshery.png";
import { StaticImage } from "gatsby-plugin-image";

const DockerExtensionMeshery = () => {

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

  const DockerExtFormPage = () => {
    return (
      <Container>
        <Row>
          <h2 className="sectionTitle">Develop service mesh-ready apps using Docker Desktop and Meshery</h2>
          <p>
            The Docker Extension for Meshery extends Docker Desktop’s position as the cloud native developer’s go-to Kubernetes environment with easy access to the next layer of cloud native infrastructure: service meshes.
          </p>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <StaticImage src={dockerDesktop} alt="Docker Extension for Meshery" />
            <p>
              Join the beta program and get:</p>
            <ol>
              <li><b>Service mesh support for your Docker Compose apps</b> - <i>Import your Docker Compose apps. Configure and deploy them to Kubernetes and any service mesh.</i></li>
              <li><b>Visual designer for Docker Compose apps</b> - <i>Early access to the Docker Extension for Meshery that offers a visual topology for designing Docker Compose applications, operating Kubernetes, service meshes, and their workloads.</i></li>
              <li><b>Single-click deployment of any service mesh</b> - <i>Support of 10 different service meshes to the fingertips of developers in connection with Docker Desktop’s ability to deliver Kubernetes locally.</i></li>
            </ol>
            You will also be able to:
            <ul>
              <li>Provide early feedback to Docker and Meshery’s product teams.</li>
              <li>Receive support and onboarding help from Layer5.</li>
            </ul>
            <p className="uppercase">Let's get you started!</p>

          </Col>
          <Col md={6} sm={12}>
            <h3 className="form-title">Apply For the Beta Program</h3>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                occupation: "",
                org: "",
                form: "docker-extension",
              }}
              onSubmit={values => {
                setMemberFormOne(values);
                setStepNumber(1);
                nextStep();
              }}
            >
              <Form className="form" method="post">
                <Field type="hidden" id="form" name="form" value="docker-extension" />
                <label htmlFor="fname" className="form-name">First Name <span className="required-sign">*</span></label>
                <Field type="text" className="text-field" id="firstname" name="firstname" maxLength="32" pattern="[A-Za-z]{1,32}" required />
                <label htmlFor="lname" className="form-name">Last Name <span className="required-sign">*</span></label>
                <Field type="text" className="text-field" id="lastname" name="lastname" maxLength="32" pattern="[A-Za-z]{1,32}" required />
                <label htmlFor="email" className="form-name">Email Address <span className="required-sign">*</span></label>
                <Field type="text" className="text-field" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                <label htmlFor="occupation" className="form-name">Occupation / Title<span className="required-sign">*</span></label>
                <Field type="text" className="text-field" id="occupation" name="occupation" />
                <label htmlFor="org" className="form-name">Organization / Company / School<span className="required-sign">*</span></label>
                <Field type="text" className="text-field" id="org" name="org" />
                <Button secondary type="submit" className="btn" title="Submit" />
              </Form>
            </Formik>
          </Col>
        </Row>
      </Container>

    );
  };
  const ThankYou = () => {
    return (
      <Container>
        <div className="black-box">
          <h2>Thank you for your interest in Meshery Docker Extension!</h2>
          <p>You are now signed up for the Meshery Docker Extension beta program and your position on the waiting list is confirmed. Please patiently await your acceptance and start of the beta program.  We are working through a growing waitlist. </p>
          <p>If you have any questions in the meantime, please email <a href="mailto:community@layer5.io">community@layer5.io</a>.</p>
          <p className="white">- <img className="sign" src={layer5_img} alt="Layer5"/> <i>Team</i></p>
        </div>
      </Container>
    );
  };
  return (
    <DockerMesheryWrapper>
      <div>
        {
          stepNumber === 0 &&

          <DockerExtFormPage />
        }
        {
          stepNumber === 1 &&
          <ThankYou />
        }

      </div>
    </DockerMesheryWrapper>
  );
};

export default DockerExtensionMeshery;