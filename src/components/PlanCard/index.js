import React from "react";
import Button from "../../reusecore/Button";
import { Col, Row, Container } from "../../reusecore/Layout";
import PlanCardWrapper from "./planCard.style";
import FeatureDetails from "./collapsible-details";

const PlanCard = (props) => {
  return (

    <PlanCardWrapper>
      <Container>
        <Row $Hcenter={true}>
          {props.planData.map((x) => (
            <Col lg={4} md={6} key={x.tier}>
              <div
                className={`${x.featured ? "featured" : ""} pricing-table`}
              >
                {x.featured ? (
                  <div className="pricing-label">Free Forever</div>
                ) : (
                  ""
                )}
                <div className="pricing_coming_soon">
                  {x.pricing_coming_soon}
                </div>
                <h2>{x.tier}</h2>
                <h5 className="byline">{x.byline}</h5>
                <div className="pricing-features">
                  {x.summary.map((t) => (
                    <div className="feature" key={t.id}>
                      <FeatureDetails
                        category={t.category}
                        description={t.description}
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