import React from "react";

import { Container, Row, Col } from "../../../reusecore/Layout";
import c_icon from "./checkmark-box_green.svg";

import data from "./data";

import FeaturesColSectionWrapper from "./featuresColSection.style";
import Counter from "../../../reusecore/Counter";


const Features = () => {
  return (
    <FeaturesColSectionWrapper>
      <Container>
        <div className="title">
          <h1>
            <span className="light">Your</span> full-service<span className="light"> mesh manager</span>
          </h1>
        </div>
        <Row className="features-row">
          {data.features.map((feature, index) => (
            <Col xs={12} sm={6} lg={4} key={index} className="features-col">
              <div className="features-block">
                Management
                <div className="feature-block">
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
                  <h1 className="count">
                    <Counter
                      duration={6}
                      separator=","
                      end={feature.count.value}
                      suffix={feature.count.description!="performance tests run" ? "" : "+"} />
                  </h1>
                  <p className="count-desc">{feature.count.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </FeaturesColSectionWrapper>
  );
};

export default Features;
