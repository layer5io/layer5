import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import PricingWrapper from "./pricing.style";
import Comparison from "./comparison";
import FAQ from "../General/Faq";
import Reviews from "./review-slider";
import Button from "../../reusecore/Button";
import { options } from "./data";
import FeatureDetails from "./collapsible-details";

const Pricing = () => {

  // const [monthly, setMonthly] = useState(false);

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
          {/* <Row>
            <Col>
              <div className="subscription-duration">
                <h2>Choose <b>annual pricing</b> and get <i>2 months free</i> every year.</h2>
                <div className="subscriptionButtons">
                  <Button
                    secondary
                    className={monthly ? "active button" : "inactive button"}
                    onClick={() => setMonthly(true)}
                  >
                    Monthly
                  </Button>
                  <Button
                    secondary
                    className={monthly ? "inactive button" : "active button"}
                    onClick={() => setMonthly(false)} >
                    Yearly
                  </Button>
                </div>
              </div>
            </Col>
          </Row> */}
          <Row Hcenter={true}>
            {options.map((x) => (
              <Col lg={4} md={6} key={x.tier}>
                <div className={`${x.featured ? "featured" : ""} pricing-table`}>
                  {x.featured ? <div className="pricing-label">Free Forever</div> : ""}
                  <h2>{x.tier}</h2>
                  <h5 className="byline">{x.byline}</h5>
                  <div className="pricing-features">
                    {x.summary.map((t) => (
                      <div className="feature" key={t.id}><FeatureDetails category={t.category} description={t.description} /></div>
                    ))}
                  </div>
                  {/*
                  <div className="price-tag">
                    <span className="symbol">$</span>
                    <span className="amount">{monthly? x.monthlyprice : x.yearlyprice}</span>
                    <span className="after">/user{monthly? "/month" : "/year"}</span>
                  </div> */}

                  <Button primary className={x.button[0] === "Coming Soon" ? "price-button-disabled" : "price-button-link"} url={x.button[1]}>{x.button[0]}</Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Comparison />
      <Reviews />
      <FAQ category={["Pricing", "Billing"]} />
    </PricingWrapper>
  );
};


export default Pricing;
