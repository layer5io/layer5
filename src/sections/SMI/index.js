import React from "react";

import Layout from "../../components/layout"; 

import SMIWrapper from "./smi.style";
import { Row, Col, Container } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";

import data from "./data";
import { IoMdCheckbox } from "react-icons/io";
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
                        <p className="desc-p"> 
                        In order to confidently operate a service mesh without locking into the specific service mesh's APIs, you will adopt SMI. How do you know if the service mesh you are using is SMI compatible, though
                        </p>
                        <Button primary title="Run SMI Conformance" /> 
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
                                                    <td><IoMdCheckbox size={36} /></td>
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
                
            </SMIWrapper>
        </Layout>
    );
};

export default SMIPage;