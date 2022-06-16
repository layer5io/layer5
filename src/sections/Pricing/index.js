import React, { useState } from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import PricingWrapper from "./pricing.style";
import Comparison from "./comparison";
import FAQ from "../General/Faq";
import Reviews from "./review-slider";
import Button from "../../reusecore/Button";
import { options } from "./data";
import { FiCheck } from "@react-icons/all-files/fi/FiCheck";
import ContactFormModal from "../../components/Contact-Modal";


const Pricing = () => {

  const[monthly, setMonthly] = useState(true);

  return (
    <PricingWrapper>

      <div className="headers">
        <h1 className="header-heading">Plans For Every Team Size</h1>

        {/* <svg className="header-svg" aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="white" points="0,100 100,0 100,100"/>
      <polygon fill="rgba(0,179,159,0.2)" points="50,50 100,0 100,100"/>
        </svg> */}
      </div>

      <div className="wrapper">
        <Container>
          <Row>
            <Col>
              <div className="subscription-duration">
                <h2>How often do you want to pay?</h2>
                <div className="subscriptionButtons">
                  <Button 
                    secondary 
                    className={monthly? "active button" : "inactive button"}
                    onClick={() => setMonthly(true)}
                  >
                    Monthly
                  </Button>
                  <Button 
                    secondary 
                    className={monthly? "inactive button" : "active button"}
                    onClick={() => setMonthly(false)} >
                    Yearly
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            {options.map((x) => (
              <Col md={4} key={x.tier}>
                <div className={`${x.featured ? "featured" : ""} pricing-table`}>
                  {x.featured ? <div className="pricing-label">Start Here</div> : ""}
                  <h2>{x.tier}</h2>
                  <h5>{x.byline}</h5>
                  <div className="pricing-features">
                    {x.summary.map((tier) => (
                      <div className="feature" key={tier}><FiCheck size={20} className="check" />{tier}</div>
                    ))}
                  </div>

                  <div className="price-tag">
                    <span className="symbol">$</span>
                    <span className="amount">{monthly? x.monthlyprice : x.yearlyprice}</span>
                    <span className="after">/user{monthly? "/month" : "/year"}</span>
                  </div>

                  <Button primary className={x.button[0]=== "Coming Soon" ? "price-button" : "price-button-link"} url={x.button[1]}>{x.button[0]}</Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="shapes_wrap"></div>
      <Comparison />
      <Reviews />
      <FAQ category={["Pricing", "Billing"]} />
    </PricingWrapper>
  );
};

// const resetPlanYearly = () => {
//   setMonthly(false);
// };
// const resetPlanMonthly = () => {
//   setMonthly(true);
// };

export default Pricing;
