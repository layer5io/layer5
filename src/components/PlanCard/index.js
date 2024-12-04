import React from "react";
import Button from "../../reusecore/Button";
import { Col, Row, Container } from "../../reusecore/Layout";
import PlanCardWrapper from "./planCard.style";
import FeatureDetails from "./collapsible-details";

const PlanCard = ({ planData }) => {
  if (!planData || !Array.isArray(planData) || planData.length === 0) {
    return <div>No plan data available</div>;
  }

  return (
    <PlanCardWrapper>
      <Container>
        <Row $Hcenter>
          {planData.map((x) => (
            <Col lg={4} md={6} key={x.tier}>
              <div className={`${x.featured ? "featured" : ""} pricing-table`}>

                {x.tier === "Personal" ? <div className="pricing-label">Free Forever</div> : null}

                {x.pricing_coming_soon && (
                  <div className="pricing_coming_soon">
                    {x.pricing_coming_soon}
                  </div>
                )}

                <h2>{x.tier}</h2>
                <h5 className="byline">{x.byline}</h5>

                <div className="price-container">
                  {x.monthlyprice !== undefined ? (
                    <div className="price">
                      <span className="currency-symbol">$</span>
                      <span className="price-value">
                        {x.monthlyprice === 0
                          ? "0"
                          : x.monthlyprice.toFixed(0)}
                      </span>
                      <span className="price-text">
                        USD <sup className="usd-sup">per user/month</sup>
                      </span>
                    </div>
                  ) : (
                    <div className="pricing_coming_soon">
                      {x.pricing_coming_soon}
                    </div>
                  )}
                </div>

                <div className="pricing-features">
                  {x.summary &&
                    x.summary.map((t) => (
                      <div className="feature" key={t.id}>
                        <FeatureDetails
                          category={t.category}
                          description={t.description}
                          tier={t.tier}
                        />
                      </div>
                    ))}
                </div>

                <Button
                  $primary
                  className={
                    x.button[0] === "Coming Soon"
                      ? "price-button-disabled"
                      : "price-button-link"
                  }
                  $url={x.button[1]}
                >
                  {x.button[0]}
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </PlanCardWrapper>
  );
};

export default PlanCard;
