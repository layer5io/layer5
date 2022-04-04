import React, { useState, useEffect } from "react";
import { DockerMesheryWrapper } from "./dockerMeshery.style";
import { Row, Col, Container } from "../../reusecore/Layout";
import { Field, Formik, Form } from "formik";
import Button from "../../reusecore/Button";
import axios from "axios";


const dockerDesktop = "../../assets/images/docker-extension-for-meshery.png";
import { StaticImage } from "gatsby-plugin-image";

const DockerExtensionMeshery = () => {

  const [role, setRole] = useState("");

  // Form values
  const [memberFormOne, setmemberFormOne] = useState({});
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (submit) {
      axios.post("https://hook.integromat.com/bklgspwelgqkvbdj4coxompc62d78ngi", {
        memberFormOne,
      });
    }
  }, [submit]);

  return (
    <DockerMesheryWrapper>
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <h2>Docker Extension for Meshery</h2>
            <p>
                The Docker Extension for Meshery extends Docker Desktop’s position as the cloud native developer’s go-to Kubernetes environment with easy access to the next layer of cloud native infrastructure: service meshes. 
            </p>
            <StaticImage src={dockerDesktop} alt="Docker Extension for Meshery"/>
            <p>
                Join the beta program and get:
              <ul>
                <li>Early access to the Docker Extension for Meshery that offers a visual topology for designing Docker-Compose applications, operating Kubernetes, service meshes, and their workloads.</li>
                <li>Support of 10 different service meshes to the fingertips of developers in connection with Docker Desktop’s ability to deliver Kubernetes locally.</li>
                <li>Ability to provide feedback to Docker and Meshery’s product teams.</li>
                <li>Developer support and onboarding help from Layer5 community.</li>
              </ul>
                Apply now we'll get you started!
            </p>
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
              }}
              onSubmit={values => {
                setmemberFormOne(values);
              }}
            >
              <Form className="form" method="post" name="docker-extension">
                <label htmlFor="email" className="form-name">Email Address <span className="required-sign">*</span></label>
                <Field type="text" className="text-field" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                <label htmlFor="fname" className="form-name">First Name <span className="required-sign">*</span></label>
                <Field type="text" className="text-field" id="firstname" name="firstname" maxLength="32"  pattern="[A-Za-z]{1,32}" required />
                <label htmlFor="lname" className="form-name">Last Name <span className="required-sign">*</span></label>
                <Field type="text" className="text-field" id="lastname" name="lastname" maxLength="32"  pattern="[A-Za-z]{1,32}" required />
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
    </DockerMesheryWrapper>
  );
};


export default DockerExtensionMeshery;