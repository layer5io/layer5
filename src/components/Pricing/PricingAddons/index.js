/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, CardHeader, Typography, FormControl, InputLabel, Select, MenuItem, Slider, Switch, FormControlLabel, Chip, Container, Link, Paper, SistentThemeProvider, CssBaseline, useTheme } from "@sistent/sistent";
import { Calculate, CheckCircle } from "@mui/icons-material";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";
import { getAddOns } from "./pricingData";
import FeatureDetails from "../PlanCard/collapsible-details";
import PlanCardWrapper from "../PlanCard/planCard.style";


/* eslint-disable indent */

export const PricingAddons = ({ isYearly = false }) => {
  const [selectedAddon, setSelectedAddon] = useState(null); // eslint-disable-next-line no-unused-vars
  const [quantity, setQuantity] = useState(1);
  const [selectedSubAddOns, setSelectedSubAddOns] = useState({}); // Track selected sub-addons by ID
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantityIndex, setQuantityIndex] = useState(0);
  const [isYearlyState, setIsYearlyState] = useState(isYearly);

  const { isDark } = useStyledDarkMode();
  const theme = useTheme();

  const addOns = React.useMemo(() => {
    return theme ? getAddOns(theme) : [];
  }, [theme]);

  useEffect(() => {
    if (selectedAddon) {
      let baseTotal = 0;
      if (selectedAddon.id === "academy") {
        // For academy, the base pricing comes from the Theoretical Learning sub-addon (always included)
        const theorySubAddon = selectedAddon.subAddOns?.find(sub => sub.id === "academy-theory");
        if (theorySubAddon?.pricing && theorySubAddon.pricing[quantityIndex]) {
          const currentLearnerOption = theorySubAddon.pricing[quantityIndex];
          const monthlyPerUserCost = currentLearnerOption.monthlyPerUser;
          const yearlyPerUserCost = currentLearnerOption.yearlyPerUser;
          baseTotal = isYearlyState
            ? yearlyPerUserCost * currentLearnerOption.learners
            : monthlyPerUserCost * currentLearnerOption.learners;
        }
      } else {
        // For other addons, use the standard pricing
        const addonPrice = isYearlyState ? selectedAddon.yearlyPrice : selectedAddon.monthlyPrice;
        baseTotal = addonPrice * quantity;
      }

      // Handle Academy Sub-AddOns (any selected sub-addons, excluding theory which is the base)
      let subAddOnTotal = 0;
      if (selectedAddon?.id === "academy" && selectedAddon.subAddOns) {
        selectedAddon.subAddOns.forEach(subAddOn => {
          // Skip academy-theory as it's included in the base price
          if (selectedSubAddOns[subAddOn.id] && subAddOn.id !== "academy-theory") {
            // Use the sub-addon's own pricing structure based on current learner selection
            const subAddOnPricing = subAddOn.pricing && subAddOn.pricing[quantityIndex];
            if (subAddOnPricing) {
              const subAddOnPerUserCost = isYearlyState ? subAddOnPricing.yearlyPerUser : subAddOnPricing.monthlyPerUser;
              subAddOnTotal += subAddOnPerUserCost * subAddOnPricing.learners;
            }
          }
        });
      }

      setTotalPrice(baseTotal + subAddOnTotal);
    } else {
      setTotalPrice(0);
    }
  }, [selectedAddon, quantity, quantityIndex, selectedSubAddOns, isYearlyState]);

  const handleAddonChange = (addonId) => {
    const addon = addOns.find((a) => a.id === addonId);
    setSelectedAddon(addon || null);
    setQuantity(1); // eslint-disable-next-line no-unused-vars

    // If Academy is selected, automatically include the "academy-theory" sub-addon
    if (addon?.id === "academy") {
      setSelectedSubAddOns({ "academy-theory": true });
    } else {
      setSelectedSubAddOns({}); // Reset sub-addons when changing main addon
    }
  };

  const handleSubAddOnToggle = (subAddOnId, isChecked) => {
    setSelectedSubAddOns(prev => ({
      ...prev,
      [subAddOnId]: isChecked
    }));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <CssBaseline>

      <Container maxWidth="md" sx={{ my: 2, px: 2 }}>
        <PlanCardWrapper>
          <Card
            elevation={2}
            sx={{
              maxWidth: 600,
              mx: "auto",
              border: "1px solid",
              borderColor: "primary.main",
              borderRadius: 2,
              zIndex: 1,
              marginTop: "24px",
            }}
          >
            <CardHeader
              avatar={<Calculate color="primary" sx={{ fontSize: 24, color: theme.palette.background.secondary }} />}
              title={
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 1 }}>
                  <Typography variant="h5" component="h3" fontWeight="bold" sx={{ fontSize: 16, fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
                    Enterprise Add-ons
                  </Typography>
                  {/* <Typography variant="h4" component="h4" fontWeight="bold" sx={{ fontSize: 18, fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
                    {isYearlyState ? "(Yearly)" : "(Monthly)"}
                  </Typography> */}
                  <Box sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    border: "1px solid",
                    borderColor: "primary.main",
                    borderRadius: "6px",
                    padding: "2px",
                    backgroundColor: "background.paper",
                    minWidth: "auto",
                    maxWidth: "140px",
                    height: "32px",
                  }}>
                    <Box
                      onClick={() => setIsYearlyState(false)}
                      sx={{
                        px: 1,
                        py: 0.5,
                        fontSize: "0.75rem",
                        fontWeight: !isYearlyState ? 600 : 400,
                        color: !isYearlyState ? "white" : "text.primary",
                        backgroundColor: !isYearlyState ? "primary.main" : "transparent",
                        borderRadius: "4px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
                        minWidth: "auto",
                        textAlign: "center",
                        "&:hover": {
                          backgroundColor: !isYearlyState ? "primary.dark" : "action.hover",
                        },
                      }}
                    >
                      Monthly
                    </Box>
                    <Box
                      onClick={() => setIsYearlyState(true)}
                      sx={{
                        px: 1,
                        py: 0.5,
                        fontSize: "0.75rem",
                        fontWeight: isYearlyState ? 600 : 400,
                        color: isYearlyState ? "white" : "text.primary",
                        backgroundColor: isYearlyState ? "primary.main" : "transparent",
                        borderRadius: "4px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
                        minWidth: "auto",
                        textAlign: "center",
                        "&:hover": {
                          backgroundColor: isYearlyState ? "primary.dark" : "action.hover",
                        },
                      }}
                    >
                      Yearly
                    </Box>
                  </Box>
                </Box>
              }
              sx={{
                background: "linear-gradient(135deg, rgba(0, 179, 159, 0.05) 0%, rgba(0, 179, 159, 0.1) 100%)",
                borderBottom: "1px solid",
                borderColor: "divider",
                py: 1.5,
                px: 2,
              }}
            />

            <CardContent sx={{ p: 2.5 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>

{/*

Add-on Selection

*/}


    <Box>
      <FormControl fullWidth>
        <InputLabel sx={{ fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>Optionally, choose one or more add-ons</InputLabel>
        <Select
          value={selectedAddon?.id || ""}
          onChange={(e) => handleAddonChange(e.target.value)}
          label="Optionally, choose one or more add-ons"
        >
          {addOns.map((addon) => (
            <MenuItem key={addon.id} value={addon.id}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, py: 1 }}>
                {addon.icon}
                <Box>
                  <Typography variant="body1" fontWeight="500" sx={{ fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
                    {addon.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", fontStyle: "italic", fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
                    {addon.id === "academy"
                      ? addon.description
                      : (() => {
                          const period = isYearlyState ? "/year" : "/month";
                          return `${formatPrice(isYearlyState ? addon.yearlyPrice : addon.monthlyPrice)} per ${addon.unitLabel.slice(0, -1)}${period}`;
                        })()
                    }
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>



{/* SELECTED ADD-ON DETAILS - Academy */}

  {selectedAddon?.id === "academy" && (
    <>
      <Box className="pricing-features" sx={{ marginTop: "-1rem" }}>
                <Box className="feature" sx={{ display: "flex", alignContent: "center", justifyContent: "space-evenly", flexWrap: "nowrap", gap: 1 }}>
          <FormControlLabel
            key="academy-theory"
            control={<Switch disabled
              checked={selectedSubAddOns["academy-theory"] || false}
              onChange={(e) => handleSubAddOnToggle("academy-theory", e.target.checked)}
              color="primary" />}
            // label="Theoretical Learning"
            sx={{ display: "block", alignContent: "flex-start", padding: 0, margin: 0 }}
          />
          <FeatureDetails
            sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
            category="Theoretical Learning"
            description="A comprehensive learning management system for creators and instructors on how to build, manage, and extend educational content like learning paths, challenges, and certifications."
          >
            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 1, my: 1, mt: 1 }}>
              {selectedAddon?.features?.map((feature, index) => (
                <Chip
                  key={`main-${index}`}
                  icon={<CheckCircle sx={{ fontSize: 12 }} />}
                  label={feature}
                  size="small"
                  sx={{
                    backgroundColor: "transparent",
                    color: "text.primary",
                    width: "fit-content",
                    "& .MuiChip-icon": { color: "primary.main" },
                  }} />
              ))}

              <Chip icon={<CheckCircle sx={{ height: "1rem" }} />}
                label="Hands-on Learning" size="large"                className="addon-chip"
              />
              <Chip icon={<CheckCircle sx={{ height: "1rem" }} />}
                label="Collaborative Instruction" size="large"     className="addon-chip"
              />
              <Chip icon={<CheckCircle sx={{ height: "1rem" }} />}
                label="Visual Design" size="large"                className="addon-chip"
              />
                <Chip icon={<CheckCircle sx={{ height: "1rem" }} />}
                label="Orchestrated Infrastructure" size="large" className="addon-chip"
              />
            </Box>
          </FeatureDetails>
        </Box>
        <Box className="feature" sx={{ display: "flex", flexWrap: "nowrap", alignItems: "flex-start", gap: 1,  }}>
          <FormControlLabel
            key="academy-practical"
            control={<Switch  sx={{ margin: 0, display: "flex", gap: 1, alignSelf: "flex-start" }}
              checked={selectedSubAddOns["academy-practical"] || false}
              onChange={(e) => handleSubAddOnToggle("academy-practical", e.target.checked)}
              color="primary" />}
            // label="Practical Learning"
            sx={{ display: "block", alignContent: "flex-start" }}
          />
          <FeatureDetails sx={{ marginTop: ".5rem", alignSelf: "flex-start" }}
            category="Practical Learning"
            description="An inclusive, collaborative, hands-on learning environment powered by Kanvas with labs for students."
          >
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, my: 1, mt: 1 }}>
              {selectedAddon?.features?.map((feature, index) => (
                <Chip
                  key={`main-${index}`}
                  icon={<CheckCircle sx={{ fontSize: 12 }} />}
                  label={feature}
                  size="small"
                  sx={{
                    backgroundColor: "transparent",
                    color: "text.primary",
                    "& .MuiChip-icon": { color: "primary.main" },
                  }} />
              ))}

                  <Chip icon={<CheckCircle sx={{ height: "1rem" }} />}
                    label="Learning Paths" size="large"                className="addon-chip"
                  />
                  <Chip icon={<CheckCircle sx={{ height: "1rem" }} />}
                    label="Challenges" size="large"                className="addon-chip"
                  />
                  <Chip icon={<CheckCircle sx={{ height: "1rem" }} />}
                    label="Certifications" size="large"                className="addon-chip"
                  />
                    <Chip icon={<CheckCircle sx={{ height: "1rem" }} />}
                    label="Instructor Console" size="large"                className="addon-chip"
                  />
            </Box>
          </FeatureDetails>
        </Box>
      </Box>

    {/* Academy Quantity Slider */}
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1, mt: 2 }}>
      <Typography variant="h6" sx={{ justifySelf: "center", textAlign: "center", width: "100%", fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>Learners</Typography>
        <Slider
          value={quantityIndex}
          onChange={(event, newValue) => setQuantityIndex(newValue)}
          min={0}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => {
            const theorySubAddon = selectedAddon?.subAddOns?.find(sub => sub.id === "academy-theory");
            if (theorySubAddon?.pricing && theorySubAddon.pricing[value]) {
              const option = theorySubAddon.pricing[value];
              const pricePerUser = isYearlyState ? option.yearlyPerUser : option.monthlyPerUser;
              const totalPrice = pricePerUser * option.learners;
              const period = isYearlyState ? "/year" : "/month";
              return `${option.learners} learners - ${formatPrice(totalPrice)}${period}`;
            }
            return "";
          }}
          max={selectedAddon?.subAddOns?.find(sub => sub.id === "academy-theory")?.pricing?.length - 1 || 0}
          step={null}
          sx={{
            mb: 2,
            width: "80%",
            display: "flex",
            justifyContent: "center",
            "& .MuiSlider-valueLabel": {
              backgroundColor: "#363F49",
              color: "white",
              fontSize: "1rem",
              fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
              borderRadius: "8px",
              padding: "8px 12px",
              "&:before": {
                borderTopColor: "#363F49",
              },
            },
            "& .MuiSlider-mark": {
              fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
            },
            "& .MuiSlider-markLabel": {
              fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
            },
          }}
          marks={selectedAddon?.subAddOns?.find(sub => sub.id === "academy-theory")?.pricing?.map((option, index) => ({
            value: index,
            label: (
              <Box sx={{ textAlign: "center", fontSize: "1.25rem" }}>
                <Box>{option.learners === "2500+" ? "2,500+" : option.learners}</Box>
              </Box>
            ),
          })) || []}
        />
      <Box sx={{ display: "flex", my: 2, justifyContent: "space-between" }}>
        {/* <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
          learners
        </Typography> */}
        <Typography variant="body2" sx={{ fontStyle: "italic", color: "text.secondary", fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
          Looking for a plan larger than 2,500 learners? Great! <Link to="/contact">Let us know</Link>.
          {/* {selectedAddon?.maxUnits} */}
        </Typography>
      </Box>
    </Box>
    </>
  )}

                  {/* SELECTED ADD-ON DETAILS - Other Plans */}
                  {selectedAddon !== null && selectedAddon.id !== "academy" && (
                    <>
                      <Box sx={{ mt: 2, justifyContent: "center",  }}>
                        <Typography variant="h6" fontWeight="600" sx={{ fontSize: "1rem", mb: 1, }}>
                          {/* <Box component="span" sx={{ fontWeight: "normal" }}>QUANTITY: </Box> */}
                          {quantity} {selectedAddon?.unitLabel}
                        </Typography>
                        <Slider
                          value={quantity}
                          onChange={(event, newValue) => setQuantity(newValue)}
                          min={1}
                          max={selectedAddon?.maxUnits || 50}
                          valueLabelDisplay="auto"
                          valueLabelFormat={(value) => {
                            const unitPrice = isYearlyState ? selectedAddon?.yearlyPrice : selectedAddon?.monthlyPrice;
                            const totalPrice = (unitPrice || 0) * value;
                            const period = isYearlyState ? "/year" : "/month";
                            return `${value} ${selectedAddon?.unitLabel?.slice(0, -1) || "unit"} - ${formatPrice(totalPrice)}${period}`;
                          }}
                          sx={{
                            mb: 2,
                            display: "flex",
                            justifyContent: "center",
                            "& .MuiSlider-valueLabel": {
                              backgroundColor: "#363F49",
                              color: "white",
                              fontSize: "14px",
                              fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
                              borderRadius: "8px",
                              padding: "8px 12px",
                              "&:before": {
                                borderTopColor: "#363F49",
                              },
                            },
                            "& .MuiSlider-mark": {
                              fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
                            },
                            "& .MuiSlider-markLabel": {
                              fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
                            },
                          }}
                          marks={[
                            {
                              value: 1,
                              label: (
                                <Box sx={{ textAlign: "center", fontSize: "0.75rem" }}>
                                  <Box>1</Box>
                                  <Box sx={{ color: "primary.main", fontWeight: "bold", mt: 0.5 }}>
                                    {formatPrice(isYearlyState ? selectedAddon?.yearlyPrice || 0 : selectedAddon?.monthlyPrice || 0)}
                                  </Box>
                                </Box>
                              )
                            },
                            {
                              value: Math.floor((selectedAddon?.maxUnits || 50) / 2),
                              label: (
                                <Box sx={{ textAlign: "center", fontSize: "1rem" }}>
                                  <Box>{Math.floor((selectedAddon?.maxUnits || 50) / 2)}</Box>
                                  <Box sx={{ color: "primary.main", fontWeight: "bold", mt: 0.5 }}>
                                    {formatPrice((isYearlyState ? selectedAddon?.yearlyPrice || 0 : selectedAddon?.monthlyPrice || 0) * Math.floor((selectedAddon?.maxUnits || 50) / 2))}
                                  </Box>
                                </Box>
                              )
                            },
                            {
                              value: selectedAddon?.maxUnits || 50,
                              label: (
                                <Box sx={{ textAlign: "center", fontSize: "1rem" }}>
                                  <Box>{selectedAddon?.maxUnits || 50}</Box>
                                  <Box sx={{ color: "primary.main", fontWeight: "bold", mt: 0.5 }}>
                                    {formatPrice((isYearlyState ? selectedAddon?.yearlyPrice || 0 : selectedAddon?.monthlyPrice || 0) * (selectedAddon?.maxUnits || 50))}
                                  </Box>
                                </Box>
                              )
                            }
                          ]}
                        />
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                          <Typography variant="body2" color="text.secondary">
                            1
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {selectedAddon?.maxUnits}
                          </Typography>
                        </Box>
                      </Box>
                    </>
                  )}

{/* Total Price Display */}
{selectedAddon && (
  <Paper
    elevation={1}
    sx={{
      p: 2.5,
      mt: 2,
      background: "linear-gradient(135deg, rgba(0, 179, 159, 0.08) 0%, rgba(0, 179, 159, 0.12) 100%)",
      border: "1px solid",
      borderColor: "primary.main",
      borderRadius: 2,
    }}
  >
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
      <Typography variant="h6" sx={{ fontSize: 12, textTransform: "uppercase", textAlign: "left", fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }} gutterBottom color="text.secondary" fontWeight="300">
        Add-on  ×  Quantity
      </Typography>
      <Typography variant="h6" sx={{ fontSize: 12, textAlign: "right", fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }} gutterBottom color="text.secondary" fontWeight="300">
      SUBTOTAL
  </Typography>
</Box>

{/* PRICES */}
  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 2 }}>
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Typography variant="body1" sx={{ marginLeft: .5, fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
        {selectedAddon?.id === "academy" ?
          `Theoretical Learning × ${selectedAddon?.subAddOns?.find(sub => sub.id === "academy-theory")?.pricing?.[quantityIndex]?.learners || 0}` :
          `${selectedAddon?.name} × ${quantity}`
        }
      </Typography>
      <Typography variant="body1" fontWeight="500" sx={{ marginRight: .5, fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
        {(() => {
          if (selectedAddon?.id === "academy") {
            const theorySubAddon = selectedAddon?.subAddOns?.find(sub => sub.id === "academy-theory");
            if (theorySubAddon?.pricing && theorySubAddon.pricing[quantityIndex]) {
              const currentLearnerOption = theorySubAddon.pricing[quantityIndex];
              const monthlyPerUserCost = currentLearnerOption.monthlyPerUser;
              const yearlyPerUserCost = currentLearnerOption.yearlyPerUser;
              const totalCost = isYearlyState
                ? yearlyPerUserCost * currentLearnerOption.learners
                : monthlyPerUserCost * currentLearnerOption.learners;
              return formatPrice(totalCost);
            }
            return formatPrice(0);
          } else {
            return formatPrice((isYearlyState ? selectedAddon?.yearlyPrice : selectedAddon?.monthlyPrice) * quantity);
          }
        })()}
      </Typography>
    </Box>

      {selectedAddon?.id === "academy" && selectedAddon.subAddOns?.map((subAddOn) => (
        // Only show sub-addons that are selected and not the theory (which is the base price)
        selectedSubAddOns[subAddOn.id] && subAddOn.id !== "academy-theory" && (
          <Box key={subAddOn.id} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body1" sx={{ marginLeft: .5, fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
              {subAddOn.name} × {subAddOn.pricing?.[quantityIndex]?.learners || 0}
            </Typography>``
            <Typography variant="body1" sx={{ marginRight: .5, fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }} fontWeight="500">
              {formatPrice(
                (() => {
                  const subAddOnPricing = subAddOn.pricing && subAddOn.pricing[quantityIndex];
                  if (subAddOnPricing) {
                    const subAddOnPerUserCost = isYearlyState ? subAddOnPricing.yearlyPerUser : subAddOnPricing.monthlyPerUser;
                    return subAddOnPerUserCost * subAddOnPricing.learners;
                  }
                  return 0;
                })()
              )}
            </Typography>
          </Box>
        )
      ))}
      <Typography variant="h6" sx={{ textTransform: "uppercase", fontSize: 12, textAlign: "right", margin: 0, fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }} gutterBottom color="text.secondary" fontWeight="300">
        TOTAL
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="body1" gutterBottom color="text.secondary"  fontWeight="300" sx={{ textTransform: "uppercase", fontSize: 14, textAlign: "left", margin: 0, fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif"  }}>
          {isYearlyState ? "Yearly" : "Monthly"} Cost
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
          {formatPrice(totalPrice)}
          <Typography variant="h4" component="span" style={{ fontSize: ".8rem", fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
            /{isYearlyState ? "annually" : "monthly"}
        </Typography>
      </Typography>
    </Box>
  </Box>

    <Typography sx={{ lineHeight: "1rem", fontSize: "0.8rem", fontStyle: "italic", fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }} color="text.secondary">
      *Prices shown are {isYearlyState ? "annual" : "monthly"} subscription costs. {isYearlyState ? "Monthly subscriptions are available at standard rates." : "Annual subscriptions receive a 15% discount."} Contact our sales team for enterprise pricing and custom configurations.
    </Typography>
  </Paper>
          )}

                </Box>
              </Box>
            </CardContent>
          </Card>
        </PlanCardWrapper>
      </Container>
      </CssBaseline>
    </SistentThemeProvider>
  );
};
