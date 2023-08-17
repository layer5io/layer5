import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import PricingWrapper from "./pricing.style";
import { options } from "./data";
import FeatureDetails from "./collapsible-details";
import Button from "../../reusecore/Button";
import bgSvg from "../../assets/images/products/concentricCircle.svg";

const index = () => {
  return (
    <div>
      <PricingWrapper>
        <div className="freeTry">
          <img className="bgSvgLeft" src={bgSvg} alt="" />
          <img className="bgSvgRight" src={bgSvg} alt="" />
          <div className="headers rotate gap">
            <h1 className="header-heading"><span>Experience </span>Our Product/Service in Action!</h1>
            <p>Ready to transform? Don't miss this chance to elevate [specific use cases, e.g., marketing, project management, analytics]. Embrace innovation and see how [Product Name] revolutionizes [specific outcomes, e.g., customer engagement, project efficiency, data analysis].</p>
            <Button className="primary"   />
          </div>
        </div>
        <div className="headers">
          <h1 className="header-heading"><span>Plans</span> For Every Team Size</h1>
          <p>Discover the ideal plan to propel your goals forward. Unveil our pricing options and explore how our tailored solutions can enhance your [industry/field] journey. From startups to enterprises, we have a plan designed to fit your unique needs. Take the next step towards success and view our pricing and plans now.</p>
        </div>
        <Container>
          <Row Hcenter={true}>
            {options.map((x) => (
              <Col lg={4} md={6} key={x.tier}>
                <div className={`${x.featured ? "featured" : ""} pricing-table`}>
                  {x.featured ? <div className="pricing-label">Free Forever</div> : ""}
                  <div className="pricing_coming_soon">{x.pricing_coming_soon}</div>
                  <h2>{x.tier}</h2>
                  <h5 className="byline">{x.byline}</h5>
                  <div className="pricing-features">
                    {x.summary.map((t) => (
                      <div className="feature" key={t.id}><FeatureDetails category={t.category} description={t.description} /></div>
                    ))}
                  </div>
                  <Button primary className={x.button[0] === "Coming Soon" ? "price-button-disabled" : "price-button-link"} url={x.button[1]}>{x.button[0]}</Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <div className="headers gap">
          <h1 className="header-heading"><span>Experience </span>Our Product/Service in Action!</h1>
          {/* <p>See how our Product/Service can transform your Developer Experience today.</p> */}
          <p>Book a demo with us now! Our experts are eager to guide you through the incredible possibilities of [Product/Service]. Don't miss this chance to revolutionize your [specific outcome]! Click below to schedule your demo.</p>
          <Button className="primary"   />
        </div>
      </PricingWrapper>
    </div>
  );
};

export default index;