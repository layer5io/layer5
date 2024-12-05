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
            <Col xl={4} lg={3} md={2} sm={1} key={x.tier}>
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
                      <span className="price-amount"><sup>$</sup>
                        {x.monthlyprice === 0
                          ? "0"
                          : x.monthlyprice.toFixed(0)}
                      </span>
                      <span className="currency">USD</span>
                      <span className="price-per">per user/month</span>
                    </div>
                  ) : (
                    <div className="pricing_coming_soon">
                      {x.pricing_coming_soon}
                    </div>
                  )}
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

                <h6>{x.byline2}</h6>

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

              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </PlanCardWrapper>
  );
};

export default PlanCard;
