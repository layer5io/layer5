import React, { useState } from "react";
import Button from "../../reusecore/Button";
import { Col, Row, Container } from "../../reusecore/Layout";
import PlanCardWrapper from "./planCard.style";
import FeatureDetails from "./collapsible-details";


const PlanCard = ({ planData , isYearly }) => {


  if (!planData || !Array.isArray(planData) || planData.length === 0) {
    return <div>No plan data available</div>;
  }
  const planLink = {
    "Personal": "https://cloud.layer5.io/account/plans",
    "Team Designer": "https://cloud.layer5.io/account/plans/upgrade?plan=49b77ce8-eeea-4ec4-adf3-48979a14b140",
    "Team Operator": "https://cloud.layer5.io/account/plans/upgrade?plan=f7a5b2b5-b36b-421e-9211-f4dfb204e5b3",
    "Enterprise": "https://cloud.layer5.io/account/plans/upgrade?plan=ad68ce59-8c5a-42b0-955c-9b2b2f7c98e3"
  };

  return (
    <PlanCardWrapper>
      <Container>
        <Row $Hcenter>
          {planData.map((x) => (
            // <Col $xl={4} $lg={2} $md={1} $sm={1} key={x.tier}>
            <Col key={x.tier}>
              <div className={`${x.featured ? "featured" : ""} pricing-table`}>

                {x.tier === "Personal" ? <div className="pricing-label">Free Forever</div> : null}

                {x.tier === "Team Designer" ? <div className="featured-label">Most Popular</div> : null}

                {/* {x.pricing_coming_soon && (
                  <div className="pricing_coming_soon">
                    {x.pricing_coming_soon}
                  </div>
                )} */}

                <h2>{x.tier}</h2>
                <h5 className="byline">{x.byline}</h5>

                <div className="price-container">
                  {isYearly ? (
                    x.yearlyprice !== undefined ? (
                      <div className="price">
                        <span className="price-amount"><sup>$</sup>
                          {x.yearlyprice === 0
                            ? "0"
                            : x.yearlyprice.toFixed(0)}
                        </span>
                        <span className="currency">USD</span>
                        <span className="price-per">per user/year</span>
                      </div>
                    ) : (
                      <div className="pricing_coming_soon">
                        {x.pricing_coming_soon}
                      </div>
                    )
                  ) : (
                    x.monthlyprice !== undefined ? (
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
                    )
                  )}
                </div>


                <Button
                  // disabled={x.tier === "Team Operator"}
                  $primary
                  className={
                    x.button[0] === "Coming Soon"
                      ? "price-button-disabled"
                      : "price-button-link"
                  }
                  $url={planLink[x.tier] ?? "https://cloud.layer5.io/account/plans"}
                >
                  {x.tier === "Personal" ? "Join for Free" : "Subscribe"}
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
