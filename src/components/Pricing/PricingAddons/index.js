/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, CardHeader, Typography, FormControl, InputLabel, Select, MenuItem, Slider, Switch, FormControlLabel, Chip, Container, Paper, SistentThemeProvider, CssBaseline, useTheme } from "@sistent/sistent";
import { Calculate, CheckCircle } from "@mui/icons-material";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";
import { getAddOns } from "./pricingData";
import FeatureDetails from "../PlanCard/collapsible-details";
import PlanCardWrapper from "../PlanCard/planCard.style";
import Button from "../../../reusecore/Button";

export const PricingAddons = ({ isYearly = false, setIsYearly }) => {
  const [selectedAddon, setSelectedAddon] = useState(null);
  // const [quantity, setQuantity] = useState(1);
  const quantity = 1;
  const [selectedSubAddOns, setSelectedSubAddOns] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantityIndex, setQuantityIndex] = useState(0);

  const { isDark } = useStyledDarkMode();
  const theme = useTheme();

  const addOns = React.useMemo(() => {
    return theme ? getAddOns(theme) : [];
  }, [theme]);

  useEffect(() => {
    if (selectedAddon) {
      let baseTotal = 0;
      if (selectedAddon.id === "academy") {
        const theorySubAddon = selectedAddon.subAddOns?.find(sub => sub.id === "academy-theory");
        if (theorySubAddon?.pricing && theorySubAddon.pricing[quantityIndex]) {
          const currentLearnerOption = theorySubAddon.pricing[quantityIndex];
          const monthlyPerUserCost = currentLearnerOption.monthlyPerUser;
          const yearlyPerUserCost = currentLearnerOption.yearlyPerUser;
          baseTotal = isYearly
            ? yearlyPerUserCost * currentLearnerOption.learners
            : monthlyPerUserCost * currentLearnerOption.learners;
        }
      } else {
        if (selectedAddon.pricing && selectedAddon.pricing[quantityIndex]) {
          const currentOption = selectedAddon.pricing[quantityIndex];
          const monthlyPerUnitCost = currentOption.monthlyPerUnit;
          const yearlyPerUnitCost = currentOption.yearlyPerUnit;
          baseTotal = isYearly
            ? yearlyPerUnitCost * currentOption.units
            : monthlyPerUnitCost * currentOption.units;
        }
      }

      let subAddOnTotal = 0;
      if (selectedAddon?.id === "academy" && selectedAddon.subAddOns) {
        selectedAddon.subAddOns.forEach(subAddOn => {
          if (selectedSubAddOns[subAddOn.id] && subAddOn.id !== "academy-theory") {
            const subAddOnPricing = subAddOn.pricing && subAddOn.pricing[quantityIndex];
            if (subAddOnPricing) {
              const subAddOnPerUserCost = isYearly ? subAddOnPricing.yearlyPerUser : subAddOnPricing.monthlyPerUser;
              subAddOnTotal += subAddOnPerUserCost * subAddOnPricing.learners;
            }
          }
        });
      }

      setTotalPrice(baseTotal + subAddOnTotal);
    } else {
      setTotalPrice(0);
    }
  }, [selectedAddon, quantity, quantityIndex, selectedSubAddOns, isYearly]);

  const handleAddonChange = (addonId) => {
    const addon = addOns.find((a) => a.id === addonId);
    setSelectedAddon(addon || null);
    setQuantityIndex(0);

    if (addon?.id === "academy") {
      setSelectedSubAddOns({ "academy-theory": true });
    } else {
      setSelectedSubAddOns({});
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

  const getPlanLinkForAcademy = () => {
    if (!selectedAddon || selectedAddon.id !== "academy") {
      return { link: "#", name: "Subscribe" };
    }

    let targetSubAddon = null;
    let targetSubAddonName = "";

    if (selectedSubAddOns["academy-practical"]) {
      targetSubAddon = selectedAddon.subAddOns?.find(sub => sub.id === "academy-practical");
      targetSubAddonName = "with Practical Learning";
    } else {
      targetSubAddon = selectedAddon.subAddOns?.find(sub => sub.id === "academy-theory");
      targetSubAddonName = "";
    }

    if (!targetSubAddon?.planLink || !targetSubAddon.pricing?.[quantityIndex]) {
      return { link: "#", name: "Subscribe" };
    }

    const currentCadence = isYearly ? "yearly" : "monthly";
    const currentLearnerCount = targetSubAddon.pricing[quantityIndex].learners;

    const matchingPlanLink = targetSubAddon.planLink.find(
      plan => plan.cadence === currentCadence && plan.learners === currentLearnerCount
    );

    if (matchingPlanLink) {
      return {
        link: matchingPlanLink.link,
        name: `Subscribe (${currentLearnerCount} learners${targetSubAddonName ? " " + targetSubAddonName : ""})`
      };
    }

    return { link: "#", name: "Subscribe" };
  };

  const getPlanLinkForOtherAddons = () => {
    if (!selectedAddon || selectedAddon.id === "academy") {
      return { link: "#", name: "Subscribe" };
    }

    return {
      link: "#",
      name: `Subscribe to ${selectedAddon.name}`
    };
  };

  return (
    <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <CssBaseline>
        <Container maxWidth="md" sx={{ my: 2, px: 2, overflow: "visible" }}>
          <PlanCardWrapper>
            <Card
              elevation={2}
              sx={{
                overflow: "visible",
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
                        onClick={() => setIsYearly(false)}
                        sx={{
                          px: 1,
                          py: 0.5,
                          fontSize: "0.75rem",
                          fontWeight: !isYearly ? 600 : 400,
                          color: !isYearly ? "white" : "text.primary",
                          backgroundColor: !isYearly ? "primary.main" : "transparent",
                          borderRadius: "4px",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
                          minWidth: "auto",
                          textAlign: "center",
                          "&:hover": {
                            backgroundColor: !isYearly ? "primary.dark" : "action.hover",
                          },
                        }}
                      >
                        Monthly
                      </Box>
                      <Box
                        onClick={() => setIsYearly(true)}
                        sx={{
                          px: 1,
                          py: 0.5,
                          fontSize: "0.75rem",
                          fontWeight: isYearly ? 600 : 400,
                          color: isYearly ? "white" : "text.primary",
                          backgroundColor: isYearly ? "primary.main" : "transparent",
                          borderRadius: "4px",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
                          minWidth: "auto",
                          textAlign: "center",
                          "&:hover": {
                            backgroundColor: isYearly ? "primary.dark" : "action.hover",
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
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel sx={{ fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>Optionally, choose one or more add-ons</InputLabel>
                      <Select
                        fullWidth
                        value={selectedAddon?.id || ""}
                        onChange={(e) => handleAddonChange(e.target.value)}
                        label="Optionally, choose one or more add-ons"
                        MenuProps={{
                          disableScrollLock: true,
                          disablePortal: true,
                        }}
                      >
                        {addOns.map((addon) => (
                          <MenuItem key={addon.id} value={addon.id}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, py: 1, width: "100%" }}>
                              {addon.icon}
                              <Box  sx={{ minWidth: 0, flex: 1 }}>
                                <Typography noWrap variant="body1" fontWeight="500" sx={{ overflow: "hidden", textOverflow: "ellipsis",whiteSpace: "nowrap", fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
                                  {addon.name}
                                </Typography>
                                <Typography noWrap variant="body2" color="text.secondary" sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontStyle: "italic", fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
                                  {addon.id === "academy"
                                    ? addon.description
                                    : (() => {
                                        const period = isYearly ? "/year" : "/month";
                                        return `${formatPrice(isYearly ? addon.yearlyPrice : addon.monthlyPrice)} per ${addon.unitLabel.slice(0, -1)}${period}`;
                                      })()
                                  }
                                </Typography>
                              </Box>
                            </Box>
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>

                  {selectedAddon?.id === "academy" && (
                    <>
                      <Box className="pricing-features">
                        <Typography variant="h6" sx={{ marginBottom: 2, marginTop: -2 }}>
                          Add-On Features
                        </Typography>
                        <Box className="feature" sx={{ display: "flex", alignContent: "center", justifyContent: "flex-start", flexWrap: "nowrap", gap: 1 }}>
                          <FormControlLabel
                            key="academy-theory"
                            control={<Switch disabled
                              checked={selectedSubAddOns["academy-theory"] || false}
                              onChange={(e) => handleSubAddOnToggle("academy-theory", e.target.checked)}
                              color="primary" />}
                            sx={{ display: "flex", justifySelf: "flex-end", marginRight: -1, marginTop: "-0.5rem", marginLeft: 1, padding: 0, alignItems: "flex-start" }}
                          />
                          <FeatureDetails
                            sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
                            category="Theoretical Learning"
                            description="A comprehensive learning management system for creators and instructors on how to build, manage, and extend educational content like learning paths, challenges, and certifications."
                          >
                            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 1, my: 1, mt: 1 }}>
                              {selectedAddon?.subAddOns?.find(sub => sub.id === "academy-theory")?.features?.map((feature, index) => (
                                <Chip
                                  key={`theory-${index}`}
                                  icon={<CheckCircle />}
                                  label={feature}
                                  size="large"
                                  className="addon-chip"
                                  />
                              ))}
                            </Box>
                          </FeatureDetails>
                        </Box>
                        <Box className="feature" sx={{ display: "flex", flexWrap: "nowrap", justifyContent: "flex-end", alignItems: "flex-start", gap: 1, }}>
                          <FormControlLabel
                            key="academy-practical"
                            control={<Switch sx={{ margin: 0, display: "flex", gap: 1, alignSelf: "flex-end" }}
                                  checked={selectedSubAddOns["academy-practical"] || false}
                                  onChange={(e) => handleSubAddOnToggle("academy-practical", e.target.checked)}
                                  color="primary" />}
                            sx={{ display: "flex", justifySelf: "flex-end", marginRight: -1, marginTop: "-0.5rem", marginLeft: 1, padding: 0, alignItems: "flex-start" }}
                          />
                          <FeatureDetails
                            category="Practical Learning"
                            description="An inclusive, collaborative, hands-on learning environment powered by Kanvas with labs for students."
                          >
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, my: .5, mt: 1 }}>
                              {selectedAddon?.subAddOns?.find(sub => sub.id === "academy-practical")?.features?.map((feature, index) => (
                                <Chip
                                  key={`practical-${index}`}
                                  icon={<CheckCircle />}
                                  label={feature}
                                  size="large"
                                  className="addon-chip"
                                  />
                              ))}
                            </Box>
                          </FeatureDetails>
                        </Box>
                      </Box>

                      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1, mt: 2 }}>
                        <Typography variant="h6" sx={{ justifySelf: "center", textAlign: "center", width: "100%", fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
                          {(() => {
                            // Determine which sub-addon to show learner count for
                            let targetSubAddon = null;
                            if (selectedSubAddOns["academy-practical"]) {
                              targetSubAddon = selectedAddon?.subAddOns?.find(sub => sub.id === "academy-practical");
                            } else {
                              targetSubAddon = selectedAddon?.subAddOns?.find(sub => sub.id === "academy-theory");
                            }
                            return targetSubAddon?.pricing?.[quantityIndex]?.learners || 0;
                          })()} Learners
                        </Typography>
                        <Slider
                          value={quantityIndex}
                          onChange={(event, newValue) => setQuantityIndex(newValue)}
                          min={0}
                          valueLabelDisplay="auto"
                          valueLabelFormat={(value) => {
                            // Determine which sub-addon to show pricing for
                            let targetSubAddon = null;
                            if (selectedSubAddOns["academy-practical"]) {
                              targetSubAddon = selectedAddon?.subAddOns?.find(sub => sub.id === "academy-practical");
                            } else {
                              targetSubAddon = selectedAddon?.subAddOns?.find(sub => sub.id === "academy-theory");
                            }

                            if (targetSubAddon?.pricing && targetSubAddon.pricing[value]) {
                              const option = targetSubAddon.pricing[value];
                              const pricePerUser = isYearly ? option.yearlyPerUser : option.monthlyPerUser;
                              const totalPrice = pricePerUser * option.learners;
                              const period = isYearly ? "/year" : "/month";
                              return `${option.learners} learners - ${formatPrice(totalPrice)}${period}`;
                            }
                            return "";
                          }}
                          max={(() => {
                            // Determine which sub-addon to use for max value
                            let targetSubAddon = null;
                            if (selectedSubAddOns["academy-practical"]) {
                              targetSubAddon = selectedAddon?.subAddOns?.find(sub => sub.id === "academy-practical");
                            } else {
                              targetSubAddon = selectedAddon?.subAddOns?.find(sub => sub.id === "academy-theory");
                            }
                            return (targetSubAddon?.pricing?.length - 1) || 0;
                          })()}
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
                              whiteSpace: { xs: "normal", sm: "nowrap" },
                              maxWidth: { xs: "150px", sm: "none" },
                              textAlign: { xs: "center", sm: "left" },
                              overflowWrap: { xs: "break-word", sm: "normal" },
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
                          marks={(() => {
                            // Determine which sub-addon to show pricing for based on selection
                            let targetSubAddon = null;
                            if (selectedSubAddOns["academy-practical"]) {
                              targetSubAddon = selectedAddon?.subAddOns?.find(sub => sub.id === "academy-practical");
                            } else {
                              targetSubAddon = selectedAddon?.subAddOns?.find(sub => sub.id === "academy-theory");
                            }

                            return targetSubAddon?.pricing?.map((option, index) => ({
                              value: index,
                              label: (
                                <Box sx={{ textAlign: "center", fontSize: "1.25rem", fontWeight: "bold" }}>
                                  <Box>{option.learners === "2500+" ? "2,500+" : option.learners}</Box>
                                  <Box
                                    sx={{
                                      color: "text.secondary",
                                      mb: 1.5,
                                      fontSize: {
                                        xs: "0.75rem",
                                        sm: "0.9rem",
                                      }
                                    }}>
                                    {option.currency}{isYearly ? option.yearlyPerUser : option.monthlyPerUser}<br />{targetSubAddon.unitLabelSingular}/{isYearly ? "year" : "month"}
                                  </Box>
                                </Box>
                              ),
                            })) || [];
                          })()}
                        />
                        <Box sx={{ display: "flex", my: 8, justifyContent: "space-between" }}>
                          <Typography variant="body2" sx={{ fontStyle: "italic", color: "text.secondary", fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
                            Looking for a plan larger than 2,500 learners? Great! <a href="/company/contact">Let us know</a>.
                          </Typography>
                        </Box>
                      </Box>
                    </>
                  )}

                  {selectedAddon !== null && selectedAddon.id !== "academy" && (
                    <>
                      <Box sx={{ mt: 2, justifyContent: "center" }}>
                        <Typography variant="h6" fontWeight="600" sx={{ fontSize: "1rem", mb: 1 }}>
                          {selectedAddon.pricing?.[quantityIndex]?.units || 0} {selectedAddon?.unitLabel}
                        </Typography>
                        <Slider
                          value={quantityIndex}
                          onChange={(event, newValue) => setQuantityIndex(newValue)}
                          min={0}
                          max={selectedAddon?.pricing?.length - 1 || 0}
                          step={null}
                          valueLabelDisplay="auto"
                          valueLabelFormat={(value) => {
                            if (selectedAddon?.pricing && selectedAddon.pricing[value]) {
                              const option = selectedAddon.pricing[value];
                              const unitPrice = isYearly ? option.yearlyPerUnit : option.monthlyPerUnit;
                              const totalPrice = unitPrice * option.units;
                              const period = isYearly ? "/year" : "/month";
                              return `${option.units} ${selectedAddon?.unitLabel?.slice(0, -1) || "unit"} - ${formatPrice(totalPrice)}${period}`;
                            }
                            return "";
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
                          marks={selectedAddon?.pricing?.map((option, index) => ({
                            value: index,
                            label: (
                              <Box sx={{ textAlign: "center", fontSize: index === 0 ? "0.75rem" : "1rem" }}>
                                <Box>{option.units}</Box>
                                <Box sx={{ color: "primary.main", fontWeight: "bold", mt: 0.5 }}>
                                  {formatPrice(isYearly ? option.yearlyPerUnit * option.units : option.monthlyPerUnit * option.units)}
                                </Box>
                              </Box>
                            ),
                          })) || []}
                        />
                      </Box>
                    </>
                  )}

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
                                  const totalCost = isYearly
                                    ? yearlyPerUserCost * currentLearnerOption.learners
                                    : monthlyPerUserCost * currentLearnerOption.learners;
                                  return formatPrice(totalCost);
                                }
                                return formatPrice(0);
                              } else {
                                return formatPrice((isYearly ? selectedAddon?.yearlyPrice : selectedAddon?.monthlyPrice) * quantity);
                              }
                            })()}
                          </Typography>
                        </Box>

                        {selectedAddon?.id === "academy" && selectedAddon.subAddOns?.map((subAddOn) => (
                          selectedSubAddOns[subAddOn.id] && subAddOn.id !== "academy-theory" && (
                            <Box key={subAddOn.id} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <Typography variant="body1" sx={{ marginLeft: .5, fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
                                {subAddOn.name} × {subAddOn.pricing?.[quantityIndex]?.learners || 0}
                              </Typography>
                              <Typography variant="body1" sx={{ marginRight: .5, fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }} fontWeight="500">
                                {formatPrice(
                                  (() => {
                                    const subAddOnPricing = subAddOn.pricing && subAddOn.pricing[quantityIndex];
                                    if (subAddOnPricing) {
                                      const subAddOnPerUserCost = isYearly ? subAddOnPricing.yearlyPerUser : subAddOnPricing.monthlyPerUser;
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
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                          <Typography variant="body1" gutterBottom color="text.secondary" fontWeight="300" sx={{ textTransform: "uppercase", fontSize: 14, textAlign: "left", margin: 0, fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
                            {isYearly ? "Yearly" : "Monthly"} Cost
                          </Typography>
                          <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
                            {formatPrice(totalPrice)}
                            <Typography variant="h4" component="span" style={{ fontSize: ".8rem", fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }}>
                              /{isYearly ? "annually" : "monthly"}
                            </Typography>
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                          <Button
                            $primary
                            $url={selectedAddon?.id === "academy" ? getPlanLinkForAcademy().link : getPlanLinkForOtherAddons().link}
                          >
                            {selectedAddon?.id === "academy" ? getPlanLinkForAcademy().name : getPlanLinkForOtherAddons().name}
                          </Button>
                        </Box>
                      </Box>

                      <Typography sx={{ lineHeight: "1rem", fontSize: "0.8rem", fontStyle: "italic", fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif" }} color="text.secondary">
                        *Prices shown are {isYearly ? "annual" : "monthly"} subscription costs. {isYearly ? "Monthly subscriptions are available at standard rates." : "Annual subscriptions receive a 15% discount."} Contact our sales team for enterprise pricing and custom configurations.
                      </Typography>
                    </Paper>
                  )}
                </Box>
              </CardContent>
            </Card>
          </PlanCardWrapper>
        </Container>
      </CssBaseline>
    </SistentThemeProvider>
  );
};
