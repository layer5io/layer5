import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import PricingWrapper from "./pricing.style";
import Comparison from "./comparison";
import FAQ from "../General/Faq";
import Reviews from "./review-slider";
import Button from "../../reusecore/Button";
import { options } from "./data";
import  { FiCheck } from "@react-icons/all-files/fi/FiCheck";


const Pricing = () => {

  return (
    <PricingWrapper>

      <div className="headers">
        <h1 className="header-heading">Layer5 Pricing</h1>
        {/* <svg className="header-svg" aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="white" points="0,100 100,0 100,100"/>
      <polygon fill="rgba(0,179,159,0.2)" points="50,50 100,0 100,100"/>
        </svg> */}
      </div>

      <div className="wrapper">
        <Container>
          <Row>
            {options.map((x) => (
              <Col md={4} key={x.tier}>
                <div className={`${x.featured ? "featured" : ""} pricing-table`}>
                  { x.featured ? <div className="pricing-label">Recommended</div> : "" }
                  <h2>{x.tier}</h2>
                  <h5>{x.byline}</h5>
                  <div className="pricing-features">
                    {x.summary.map((tier) => (
                      <div className="feature" key={tier}><FiCheck size={20} className="check"/>{tier}</div>
                    ))}
                  </div>
                  {x.price === 0 ? 
                    <div className="price-tag">
                      <span className="amount free">Free Forever</span>
                    </div>
                    :
                    <div className="price-tag">
                      <span className="symbol">$</span>
                      <span className="amount">{x.price}</span>
                      <span className="after">/month</span>
                    </div>
                  }
                  <Button primary className="price-button">Get Started</Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="shapes_wrap"></div>
      <Comparison />
      <Reviews />
      <FAQ category = {["Pricing"]} />
    </PricingWrapper>
  );
};

export default Pricing;
