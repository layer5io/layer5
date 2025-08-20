import React, { useState } from "react";
import Button from "../../reusecore/Button";
import { Col, Row, Container } from "../../reusecore/Layout";
import PlanCardWrapper from "./planCard.style";
import FeatureDetails from "./collapsible-details";
import { Slider, Typography, Box, Switch, FormControlLabel } from "@mui/material";

const PlanCard = ({ planData, isYearly }) => {
  const [learnerIndex, setLearnerIndex] = useState(0); 
  const [includeHandsOn, setIncludeHandsOn] = useState(false); 

  if (!planData || !Array.isArray(planData) || planData.length === 0) {
    return <div>No plan data available</div>;
  }
  const planLink = {
    "Personal": "https://cloud.layer5.io/account/plans",
    "Team Designer": "https://cloud.layer5.io/account/plans/upgrade?plan=49b77ce8-eeea-4ec4-adf3-48979a14b140",
    "Team Operator": "https://cloud.layer5.io/account/plans/upgrade?plan=f7a5b2b5-b36b-421e-9211-f4dfb204e5b3",
    "Enterprise": "https://cloud.layer5.io/account/plans/upgrade?plan=ad68ce59-8c5a-42b0-955c-9b2b2f7c98e3"
  };

  const calculateAddOnPrice = (plan, index) => {
    if (!plan.addOnPricing || !Array.isArray(plan.addOnPricing.learnerOptions)) {
      return 0;
    }
    const selectedOption = plan.addOnPricing.learnerOptions[index];
    if (!selectedOption || !selectedOption.monthlyPerUser) {
      return 0;
    }
    const learners = selectedOption.learners === 1001 ? 1001 : selectedOption.learners;
    const basePrice = learners === 0 ? selectedOption.monthlyPerUser : learners * selectedOption.monthlyPerUser;
    return includeHandsOn ? basePrice * 2 : basePrice;
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

                {x.tier === "Enterprise" ? <div className="featured-label">Most Popular</div> : null}

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
                  aria-label={x.tier === "Personal" ? "Join for free" : `Subscribe to ${x.tier}`}
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

              {/* Add-On Card for Enterprise */}
              {x.tier === "Enterprise" && x.addOns && Array.isArray(x.addOns) && x.addOns.length > 0 && (
                <div className="pricing-table add-on">
                  <h2>Enterprise Add-On: Academy</h2>
                  <h5 className="byline">Enhance your Enterprise plan with advanced learning tools</h5>
                  <div className="price-container">
                    <div className="price">
                      <span className="price-amount">
                        <sup>$</sup>
                        {calculateAddOnPrice(x, learnerIndex).toFixed(2)}
                      </span>
                      <span className="currency">USD</span>
                      <span className="price-per">per user/month</span>
                    </div>
                  </div>
                  <Box sx={{ mt: 2, mb: 2, px: 2 }}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={includeHandsOn}
                          onChange={(event) => setIncludeHandsOn(event.target.checked)}
                          sx={{
                            "& .MuiSwitch-switchBase.Mui-checked": {
                              color: (theme) => theme.palette.primary.main,
                            },
                            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                              backgroundColor: (theme) => theme.palette.primary.main,
                            },
                          }}
                          aria-label="Toggle Academy Hands-on Learner"
                        />
                      }
                      label="Include Hands-on Learner"
                    />
                    <Typography variant="subtitle1" gutterBottom sx={{ mt: 1 }}>
                      Number of Theory Learners
                    </Typography>
                    <Slider
                      value={learnerIndex}
                      onChange={(event, newValue) => setLearnerIndex(newValue)}
                      marks={x.addOnPricing?.learnerOptions?.map((option, index) => ({
                        value: index,
                        label: option.learners === 1001 ? "1,000+" : `${option.learners}`,
                      }))}
                      step={null}
                      min={0}
                      max={x.addOnPricing?.learnerOptions?.length - 1 || 0}
                      valueLabelDisplay="auto"
                      valueLabelFormat={(value) =>
                        x.addOnPricing.learnerOptions[value].learners === 1001
                          ? "1,000+"
                          : x.addOnPricing.learnerOptions[value].learners
                      }
                      sx={{
                        color: (theme) => theme.palette.primary.main,
                        "& .MuiSlider-markLabel": {
                          color: (theme) => theme.palette.primary.main,
                        },
                      }}
                      aria-label="Number of theory learners for Academy add-on"
                    />
                  </Box>
                  <div className="pricing-features">
                    {x.addOns.map((addOn) => (
                      <div className="feature" key={addOn.id}>
                        <FeatureDetails
                          category={addOn.name}
                          description={addOn.description}
                          tier="Enterprise"
                          docs={addOn.docs}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </PlanCardWrapper>
  );
};

export default PlanCard;
