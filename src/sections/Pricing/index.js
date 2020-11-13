import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import { IoMdCheckmark } from "react-icons/io";

import particle1 from "../../assets/images/app/particle/14.png";
import particle2 from "../../assets/images/app/particle/15.png";

import data from "../../assets/data/pricing";

import PricingSectionWrapper from "./pricingSection.style";

const Pricing = () => {
    return (
        <PricingSectionWrapper id="pricing">
            <img className="section__particle one" src={particle1} alt="img" />
            <img className="section__particle two" src={particle2} alt="img" />
            <Container>
                <SectionTitle UniWidth="100%">
                    <h2>
                        <span>Meshery is the service mesh management plane.</span>
                    </h2>
                    <h4 className="liftup">Adopt and operate any service mesh with confidence using Meshery's management features.</h4>
                </SectionTitle>
                <Row>
                    {data.pricings.map((pricing, index) => (
                        <Col xs={12} sm={6} lg={4} key={index}>
                            <div className="pricing-block">
                                <div className="price-block">
                                    <h3>{pricing.name}</h3>
                                </div>
                                <p>{pricing.description}</p>
                                <div className="details-block">
                                    {pricing.services.map((service, index) => (
                                        <table className="table" key={index}>
                                            <tr>
                                                <td><IoMdCheckmark /></td>
                                                <td><h5>{service.content}</h5></td>
                                            </tr>
                                        </table>
                                    ))}
                                </div>
                                <div className="count-block">
                                    <h2 className="count">{pricing.count.value}</h2>
                                    <p className="count-desc">{pricing.count.description}</p>
                                </div>
                                {/* <Button className="pricing-btn">{pricing.btnText}</Button> */}
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </PricingSectionWrapper>
    );
};

export default Pricing;
