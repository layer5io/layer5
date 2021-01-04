import React from "react";

import Layout from "../../components/layout"; 

import SMIWrapper from "./smi.style";
import { Row, Col, Container } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";

import data from "./data";
import c_icon from "./c-icon.svg";
import { IoMdCheckbox } from "react-icons/io";
import smi from "./smi.svg";
import Faq from "../Faq";
import FeaturesTable from "../Pricing";

const SMIPage = () => {
    return (
        <Layout>
            <SMIWrapper>
                <Row className="description">
                    <Col className="desc-text" lg={6} md={12} sm={12}>
                        <h6> Why does conformance matter? </h6>
                        <h1> Service Mesh Interface Conformance</h1>
                        <h5 className="desc-p"> 
                        In order to confidently operate a service mesh without locking into the specific service mesh's APIs, you will adopt SMI. How do you know if the service mesh you are using is SMI compatible, though
                        </h5>
                        <Button primary title="Run SMI Conformance" /> 
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <div className="hero-img">
                            <img src={smi}></img>
                        </div>
                    </Col>
                </Row>
                <Row className="description">
                    <div className="section-title">
                        <h1>Purpose and Overview</h1>
                        <p>The scope of this initiative includes all service mesh projects participating in the Service Mesh Interface specification. It’s important to acknowledge that conformance consists of both capabilities and compliance status.</p>
                    </div>
                    <Row className="feature-table">
                        {data.pricings.map((pricing, index) => (
                            <Col xs={12} sm={6} lg={6} key={index}>
                                <div className="pricing-block">
                                    <div className="price-block">
                                        <h2>{pricing.name}</h2>
                                    </div>
                                    <div className="details-block">
                                        {pricing.services.map((service, index) => (
                                            <table className="table" key={index}>
                                                <tr>
                                                    <td className="icon"><img src={c_icon} /></td>
                                                    <td><p>{service.content}</p></td>
                                                </tr>
                                            </table>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Row>
                <Row className="section-3">
                    <div className="card">
                        <h2> Validating Conformance</h2>
                        <Row>
                            <Col lg={8}>
                                <p>
                                Conformance to SMI specifications will be done through
                                use of a service mesh’s workload. A sample application 
                                is used as the workload to test. To facilitate a common 
                                set of tests, a sample application has been developed
                                for purposes of providing a consistent workload to apply 
                                SMI specs against. A deployment of the Learn Layer5 
                                sample application being fitted to each service mesh.
                                </p>
                            </Col>
                            <Col lg={4}>
                                <Button primary title="Run SMI Conformance"></Button>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </SMIWrapper>
        </Layout>
    );
};

export default SMIPage;