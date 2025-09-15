/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Paper,
  Switch,
  FormControlLabel,
  Chip,
  CssBaseline,
  TextField,
  useTheme,
  SistentThemeProvider
} from "@sistent/sistent";
import { Calculate, CheckCircle, Cloud, Group } from "@mui/icons-material";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";
import { getAddOns } from "./pricingData";
import FeatureDetails from "../PlanCard/collapsible-details";
import PlanCardWrapper from "../PlanCard/planCard.style";
import Button from "../../../reusecore/Button";
import AcademyIcon from "./AcademyIcon";
import {
  typographyStyles,
  boxStyles,
  toggleButtonStyles,
  sliderStyles,
  cardStyles,
  formControlStyles,
  featureDetailsStyles,
  getToggleButtonStyle,
  getSliderStyle,
  QANELAS_FONT
} from "./styles";

import { formatAndConvertPrice } from "../../../utils/currencies";

export const PricingAddons = ({ isYearly = false, setIsYearly, currency, enterprisePlan }) => {

  const [selectedAddon, setSelectedAddon] = useState(null);
  // const [quantity, setQuantity] = useState(1);
  const quantity = 1;
  const [selectedSubAddOns, setSelectedSubAddOns] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantityIndex, setQuantityIndex] = useState(0);
  const [enterpriseUsers, setEnterpriseUsers] = useState(1);

  const { isDark } = useStyledDarkMode();
  const theme = useTheme();

  const addOns = React.useMemo(() => {
    return getAddOns();
  }, []);

  // Helper function to render icons based on type
  const renderIcon = (iconType) => {
    switch (iconType) {
      case "academy":
        return <AcademyIcon
          primaryFill={theme?.palette?.background?.inverse || "#00B39F"}
          secondaryFill={theme?.palette?.background?.inverse || "#eee"}
        />;
      case "cloud":
        return <Cloud />;
      case "group":
        return <Group />;
      default:
        return null;
    }
  };

  const formatPrice = (price) => {
    return formatAndConvertPrice(price, currency);
  };

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

      const enterpriseUsersCost = (isYearly ? enterprisePlan.yearlyprice : enterprisePlan.monthlyprice) * (enterpriseUsers > 0 ? enterpriseUsers : 1);

      setTotalPrice(baseTotal + subAddOnTotal + enterpriseUsersCost);
    } else {
      setTotalPrice(0);
    }
  }, [selectedAddon, quantity, quantityIndex, selectedSubAddOns, isYearly, enterpriseUsers, enterprisePlan]);

  const handleAddonChange = (addonId) => {
    const addon = addOns.find((a) => a.id === addonId);
    setSelectedAddon(addon || null);
    setQuantityIndex(0);

    // Always select "academy-theory" if academy is chosen
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
      const enterpriseUserSeats = enterpriseUsers > 0 ? ` and ${enterpriseUsers} enterprise user${enterpriseUsers > 1 ? "s" : ""}` : "";
      return {
        link: matchingPlanLink.link,
        name: `Subscribe (${currentLearnerCount} learners${targetSubAddonName ? " " + targetSubAddonName : ""}${enterpriseUserSeats})`
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
        <Container maxWidth="md" sx={boxStyles.container}>
          <PlanCardWrapper>
            <Card
              elevation={2}
              sx={cardStyles.main}
            >
              <CardHeader
                avatar={<Calculate color="primary" />}
                title={
                  <Box sx={boxStyles.cardHeaderTitle}>
                    <Typography variant="h5" component="h3" fontWeight="bold" sx={typographyStyles.headerTitle}>
                      Enterprise Add-ons
                    </Typography>
                    <Box sx={toggleButtonStyles.container}>
                      <Box
                        onClick={() => setIsYearly(false)}
                        sx={getToggleButtonStyle(!isYearly, toggleButtonStyles.base)}
                      >
                        Monthly
                      </Box>
                      <Box
                        onClick={() => setIsYearly(true)}
                        sx={getToggleButtonStyle(isYearly, toggleButtonStyles.base)}
                      >
                        Yearly
                      </Box>
                    </Box>
                  </Box>
                }
                sx={cardStyles.header}
              />
              <CardContent sx={boxStyles.cardContent}>
                <Box sx={boxStyles.cardContentInner}>
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel sx={typographyStyles.qanelasFont}>Optionally, choose one or more add-ons</InputLabel>
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
                            <Box sx={boxStyles.menuItem}>
                              {renderIcon(addon.iconType)}
                              <Box sx={{ minWidth: 0, flex: 1 }}>
                                <Typography noWrap variant="body1" fontWeight="500" sx={typographyStyles.ellipsisText}>
                                  {addon.name}
                                </Typography>
                                <Typography nowrap variant="body2" color="text.secondary" sx={typographyStyles.ellipsisText}>
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
                        <Box className="feature" sx={boxStyles.featureContainer}>
                          <FormControlLabel
                            key="academy-theory"
                            control={<Switch disabled
                              checked={selectedSubAddOns["academy-theory"] || false}
                              onChange={(e) => handleSubAddOnToggle("academy-theory", e.target.checked)}
                              color="primary" />}
                            sx={formControlStyles.base}
                          />
                          <FeatureDetails
                            sx={featureDetailsStyles.base}
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
                        <Box className="feature" sx={boxStyles.featureContainerEnd}>
                          <FormControlLabel
                            key="academy-practical"
                            control={<Switch sx={formControlStyles.switch}
                              checked={selectedSubAddOns["academy-practical"] || false}
                              onChange={(e) => handleSubAddOnToggle("academy-practical", e.target.checked)}
                              color="primary" />}
                            sx={formControlStyles.base}
                          />
                          <FeatureDetails
                            category="Practical Learning"
                            description="An inclusive, collaborative, hands-on learning environment powered by Kanvas with labs for students."
                          >
                            <Box sx={boxStyles.featureChipsPractical}>
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

                      <Box sx={boxStyles.learnerSection}>
                        <Typography variant="h6" sx={typographyStyles.learnerCount}>
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
                              const period = isYearly ? "/month" : "/month";
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
                          sx={getSliderStyle(sliderStyles.base, "1rem")}
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
                                    {formatPrice(isYearly ? option.yearlyPerUser : option.monthlyPerUser)}<br />{targetSubAddon.unitLabelSingular}/{isYearly ? "year" : "month"}
                                  </Box>
                                </Box>
                              ),
                            })) || [];
                          })()}
                        />
                        <Box sx={boxStyles.disclaimerSection}>
                          <Typography variant="body2" sx={typographyStyles.italic}>
                            Looking for a plan larger than 2,500 learners? Great! <a href="/company/contact">Let us know</a>.
                          </Typography>
                        </Box>
                      </Box>
                    </>
                  )}

                  {selectedAddon !== null && selectedAddon.id !== "academy" && (
                    <>
                      <Box sx={boxStyles.unitQuantitySection}>
                        <Typography variant="h6" fontWeight="600" sx={boxStyles.unitQuantityTitle}>
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
                          sx={getSliderStyle(sliderStyles.baseOther, "14px")}
                          marks={selectedAddon?.pricing?.map((option, index) => ({
                            value: index,
                            label: (
                              <Box sx={boxStyles.sliderMarks}>
                                <Box>{option.units}</Box>
                                <Box sx={boxStyles.sliderPriceText}>
                                  {formatPrice(isYearly ? option.yearlyPerUnit * option.units : option.monthlyPerUnit * option.units)}
                                </Box>
                              </Box>
                            ),
                          })) || []}
                        />
                      </Box>
                    </>
                  )}
                </Box>
              </CardContent>
            </Card>
          </PlanCardWrapper>
          {selectedAddon && (
            <Box>
              <Paper
                elevation={1}
                sx={boxStyles.pricingPaper}
              >
                <Box sx={{
                  textAlign: "center",
                  borderBottom: (theme) => `2px dashed ${theme.palette.divider}`,
                  pb: 2,
                  mb: 2
                }}>
                  <Typography variant="h5" sx={{
                    fontWeight: "bold",
                    letterSpacing: 2,
                    font: QANELAS_FONT
                  }}>
                    PRICING SUMMARY
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Box sx={{
                    display: "grid",
                    gridTemplateColumns: "3fr 1fr 1fr 1fr",
                    gap: 1,
                    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                    pb: 1,
                    mb: 2,
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    color: "text.secondary"
                  }}>
                    <Typography sx={{ fontWeight: "bold", font: QANELAS_FONT }}>ADD-ON </Typography>
                    <Typography sx={{ textAlign: "center", fontWeight: "bold", font: QANELAS_FONT }}>QTY</Typography>
                    <Typography sx={{ textAlign: "right", fontWeight: "bold", font: QANELAS_FONT }}>RATE</Typography>
                    <Typography sx={{ textAlign: "right", fontWeight: "bold", font: QANELAS_FONT }}>AMOUNT</Typography>
                  </Box>

                  {/* Main Add-on Item */}
                  <Box sx={{
                    display: "grid",
                    gridTemplateColumns: "3fr 1fr 1fr 1fr",
                    gap: 1,
                    py: 1,
                    borderBottom: (theme) => `1px dotted ${theme.palette.divider}`,
                    fontSize: "0.85rem",
                    alignItems: "center"
                  }}>
                    <Box>
                      <Typography sx={{ fontWeight: "500", ...typographyStyles.body }}>
                        {selectedAddon?.id === "academy" ? "Theoretical Learning" : selectedAddon?.name}
                      </Typography>
                      {selectedAddon?.id !== "academy" && (
                        <Typography sx={{
                          fontSize: "0.7rem",
                          color: "text.secondary",
                          ...typographyStyles.body
                        }}>
                          {selectedAddon?.cadence && `${selectedAddon.cadence} subscription`}
                        </Typography>
                      )}
                    </Box>

                    <Typography sx={{
                      textAlign: "center",
                      ...typographyStyles.body
                    }}>
                      {selectedAddon?.id === "academy"
                        ? selectedAddon?.subAddOns?.find(sub => sub.id === "academy-theory")?.pricing?.[quantityIndex]?.learners || 0
                        : quantity
                      }
                    </Typography>

                    <Typography sx={{
                      textAlign: "right",
                      ...typographyStyles.body
                    }}>
                      {(() => {
                        if (selectedAddon?.id === "academy") {
                          const theorySubAddon = selectedAddon?.subAddOns?.find(sub => sub.id === "academy-theory");
                          if (theorySubAddon?.pricing && theorySubAddon.pricing[quantityIndex]) {
                            const currentLearnerOption = theorySubAddon.pricing[quantityIndex];
                            const perUserCost = isYearly ? currentLearnerOption.yearlyPerUser : currentLearnerOption.monthlyPerUser;
                            return formatPrice(perUserCost);
                          }
                          return formatPrice(0);
                        } else {
                          return formatPrice(isYearly ? selectedAddon?.yearlyPrice : selectedAddon?.monthlyPrice);
                        }
                      })()}
                    </Typography>

                    <Typography sx={{
                      textAlign: "right",
                      fontWeight: "500",
                      ...typographyStyles.body
                    }}>
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
                      <Box key={subAddOn.id} sx={{
                        display: "grid",
                        gridTemplateColumns: "3fr 1fr 1fr 1fr",
                        gap: 1,
                        py: 1,
                        borderBottom: (theme) => `1px dotted ${theme.palette.divider}`,
                        fontSize: "0.85rem",
                        alignItems: "center"
                      }}>
                        <Box>
                          <Typography sx={{ fontWeight: "500", ...typographyStyles.body }}>
                            {subAddOn.name}
                          </Typography>
                          <Typography sx={{
                            fontSize: "0.7rem",
                            color: "text.secondary",
                            ...typographyStyles.body
                          }}>
                            {isYearly ? "Yearly" : "Monthly"} subscription
                          </Typography>
                        </Box>

                        <Typography sx={{
                          textAlign: "center",
                          ...typographyStyles.body
                        }}>
                          {subAddOn.pricing?.[quantityIndex]?.learners || 0}
                        </Typography>

                        <Typography sx={{
                          textAlign: "right",
                          ...typographyStyles.body
                        }}>
                          {(() => {
                            const subAddOnPricing = subAddOn.pricing && subAddOn.pricing[quantityIndex];
                            if (subAddOnPricing) {
                              const perUserCost = isYearly ? subAddOnPricing.yearlyPerUser : subAddOnPricing.monthlyPerUser;
                              return formatPrice(perUserCost);
                            }
                            return formatPrice(0);
                          })()}
                        </Typography>

                        <Typography sx={{
                          textAlign: "right",
                          fontWeight: "500",
                          ...typographyStyles.body
                        }}>
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

                  <Box sx={{
                    display: "grid",
                    gridTemplateColumns: "3fr 1fr 1fr 1fr",
                    gap: 1,
                    py: 1,
                    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                    fontSize: "0.85rem",
                    alignItems: "center"
                  }}>
                    <Box>
                      <Typography sx={{ fontWeight: "500", ...typographyStyles.body }}>
                        Enterprise Users
                      </Typography>
                      <Typography sx={{
                        fontSize: "0.7rem",
                        color: "text.secondary",
                        ...typographyStyles.body
                      }}>
                        Monthly subscription
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <TextField
                        type="number"
                        value={enterpriseUsers}
                        onChange={(e) => setEnterpriseUsers(parseInt(e.target.value, 10))}
                        inputProps={{
                          min: 1,
                          style: {
                            textAlign: "center",
                            fontSize: "0.85rem",
                            width: "50px",
                            padding: "4px",
                            fontFamily: typographyStyles.qanelasFont.fontFamily,
                          }
                        }}
                        sx={{
                          width: "60px",
                          "& .MuiInputBase-root": {
                            height: "30px"
                          },
                        }}
                      />
                    </Box>

                    <Typography sx={{
                      textAlign: "right",
                      ...typographyStyles.body
                    }}>
                      {formatPrice(isYearly ? enterprisePlan.yearlyprice : enterprisePlan.monthlyprice)}
                    </Typography>

                    <Typography sx={{
                      textAlign: "right",
                      fontWeight: "500",
                      ...typographyStyles.body
                    }}>
                      {formatPrice((isYearly ? enterprisePlan.yearlyprice : enterprisePlan.monthlyprice) * (enterpriseUsers > 0 ? enterpriseUsers : 1))}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{
                  pt: 2,
                }}>
                  <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                    borderTop: (theme) => `2px solid ${theme.palette.divider}`,
                    pt: 2
                  }}>
                    <Typography sx={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      ...typographyStyles.body
                    }}>
                      TOTAL ({isYearly ? "YEARLY" : "MONTHLY"})
                    </Typography>
                    <Typography sx={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      ...typographyStyles.body
                    }}>
                      {formatPrice(totalPrice)}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={boxStyles.buttonSection}>
                  <Button
                    $primary
                    $url={selectedAddon?.id === "academy" ? getPlanLinkForAcademy().link : getPlanLinkForOtherAddons().link}
                  >
                    <span style={{ fontFamily: typographyStyles.qanelasFont.fontFamily }}>
                      {selectedAddon?.id === "academy" ? getPlanLinkForAcademy().name : getPlanLinkForOtherAddons().name}
                    </span>
                  </Button>
                </Box>
                <Typography sx={{ ...typographyStyles.priceDisclaimer }}>
                  *Prices shown are {isYearly ? "annual" : "monthly"} subscription costs. {isYearly ? "Monthly subscriptions are available at standard rates." : "Annual subscriptions receive a 15% discount."} Contact our sales team for enterprise pricing and custom configurations.
                </Typography>
              </Paper>
            </Box>
          )}
        </Container>
      </CssBaseline>
    </SistentThemeProvider>
  );
};
