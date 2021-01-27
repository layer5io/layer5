import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import c_icon from "./images/icon.svg";

import data from "./data";

import PricingSectionWrapper from "./pricingSection.style";


const Features = () => {
  return (
    <PricingSectionWrapper>
      <Container>
        <SectionTitle UniWidth="50%">
          <h4>ADOPT AND OPERATE ANY SERVICE MESH WITH CONFIDENCE USING MESHERY'S MANAGEMENT FEATURES</h4>
          <h2>
            <span>
              Meshery is the service <br/>
              <b>mesh management plane.</b>
            </span>
          </h2> 
        </SectionTitle>
        <Row className="feature-tables">
          {data.features.map((feature, index) => (
            <Col xs={12} sm={6} lg={4} key={index}>
              <div className="pricing-block">
                <div className="price-block">
                  <h3>{feature.name}</h3>
                </div>
                <p>{feature.description}</p>
                <div className="details-block">
                  {feature.services.map((service, index) => (
                    <table className="table" key={index}>
                      <tr>
                        <td className="icon"><img src={c_icon} /></td>
                        <td className="service">{service.content}</td>
                      </tr>
                    </table>
                  ))}
                </div>
                <div className="count-block">
                  <h1 className="count">{feature.count.value}</h1>
                  <p className="count-desc">{feature.count.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </PricingSectionWrapper>
  );
};

export default Features;
