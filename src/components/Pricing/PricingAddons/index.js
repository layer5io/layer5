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
  getSliderStyle
} from "./styles";
import { formatAndConvertPrice, formatSliderPrice } from "../../../utils/currencies";

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

  const formatLearners = (learners) => {
  if (typeof learners === "string") return learners;
  return learners.toLocaleString("en-US");
};

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

    if (selectedSubAddOns["academy-practical"]) {
      targetSubAddon = selectedAddon.subAddOns?.find(sub => sub.id === "academy-practical");
    } else {
      targetSubAddon = selectedAddon.subAddOns?.find(sub => sub.id === "academy-theory");
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
        name: "Subscribe"
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
      name: "Subscribe"
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
                              const multiplier = selectedSubAddOns["academy-practical"] ? 2 : 1;
                              const totalPrice = pricePerUser * option.learners * multiplier;
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
                          sx={getSliderStyle(sliderStyles.base, "1rem")}
                          marks={(() => {
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
                                                <Box>{formatLearners(option.learners)}</Box> {/* Changed from ternary */}
                                                <Box
                                                  sx={{
                                                    color: "text.secondary",
                                                    mb: 1.5,
                                                    fontSize: { xs: "0.75rem", sm: "0.9rem" },
                                                  }}
                                                >
                                                  {formatSliderPrice(
                                                    (isYearly ? option.yearlyPerUser : option.monthlyPerUser) * (selectedSubAddOns["academy-practical"] ? 2 : 1),
                                                    currency
                                                  )}
                                                  <br />
                                                  {targetSubAddon.unitLabelSingular}/{isYearly ? "year" : "month"}
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
                                  {formatSliderPrice(isYearly ? option.yearlyPerUnit * option.units : option.monthlyPerUnit * option.units, currency)}
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
                <Box sx={{ ...boxStyles.flexBetween, ...boxStyles.pricingHeader }}>
                  <Typography variant="h6" sx={typographyStyles.subheading} gutterBottom>
                    Add-on  ×  Quantity / per Subscription Duration
                  </Typography>
                  <Typography variant="h6" sx={typographyStyles.subheading} gutterBottom>
                    SUBTOTAL
                  </Typography>
                </Box>

                <Box sx={{ ...boxStyles.flexColumn, ...boxStyles.pricingItems }}>
                  <Box sx={boxStyles.flexBetween}>
                    <Typography variant="body1" sx={typographyStyles.pricingItemLeft}>
                      {selectedAddon?.id === "academy"
                        ? `Theoretical Learning × ${selectedAddon?.subAddOns?.find(sub => sub.id === "academy-theory")?.pricing?.[quantityIndex]?.learners || 0}`
                        : `${selectedAddon?.name} × ${selectedAddon?.pricing?.[quantityIndex]?.units || 0}`
                      }
                    </Typography>
                    <Typography variant="body1" fontWeight="500" sx={typographyStyles.pricingItemRight}>
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
                          if (selectedAddon?.pricing && selectedAddon.pricing[quantityIndex]) {
                            const currentOption = selectedAddon.pricing[quantityIndex];
                            const monthlyPerUnitCost = currentOption.monthlyPerUnit;
                            const yearlyPerUnitCost = currentOption.yearlyPerUnit;
                            const totalCost = isYearly
                              ? yearlyPerUnitCost * currentOption.units
                              : monthlyPerUnitCost * currentOption.units;
                            return formatPrice(totalCost);
                          }
                          return formatPrice(0);
                        }
                      })()}/{isYearly ? "yearly" : "monthly"}
                    </Typography>
                  </Box>

                  {selectedAddon?.id === "academy" && selectedAddon.subAddOns?.map((subAddOn) => (
                    selectedSubAddOns[subAddOn.id] && subAddOn.id !== "academy-theory" && (
                      <Box key={subAddOn.id} sx={boxStyles.flexBetween}>
                        <Typography variant="body1" sx={typographyStyles.pricingItemLeft}>
                          {subAddOn.name} × {subAddOn.pricing?.[quantityIndex]?.learners || 0}
                        </Typography>
                        <Typography variant="body1" sx={typographyStyles.pricingItemRight} fontWeight="500">
                          {(
                            (() => {
                              const subAddOnPricing = subAddOn.pricing && subAddOn.pricing[quantityIndex];
                              if (subAddOnPricing) {
                                const subAddOnPerUserCost = isYearly ? subAddOnPricing.yearlyPerUser : subAddOnPricing.monthlyPerUser;
                                const totalCost = subAddOnPerUserCost * subAddOnPricing.learners;
                                return formatPrice(totalCost);
                              }
                              return 0;
                            })()
                          )}/{isYearly ? "yearly" : "monthly"}
                        </Typography>
                      </Box>
                    )
                  ))}

                  <Box sx={boxStyles.flexBetween}>
                    <Box sx={boxStyles.enterpriseUserSection}>
                      <Typography variant="body1" sx={typographyStyles.pricingItemLeft}>
                        Enterprise User ×
                      </Typography>
                      <TextField
                        type="number"
                        value={enterpriseUsers}
                        onChange={(e) => {
                          const val = parseInt(e.target.value, 10);
                          if (isNaN(val) || (val >= 1 && val <= 2500)) {
                            setEnterpriseUsers(val);
                          }
                        }}
                        sx={boxStyles.enterpriseUserInput}
                      />
                    </Box>
                    <Typography variant="body1" fontWeight="500" sx={typographyStyles.pricingItemRight}>
                      {formatPrice((isYearly ? enterprisePlan.yearlyprice : enterprisePlan.monthlyprice) * (enterpriseUsers > 0 ? enterpriseUsers : 1))}/{isYearly ? "yearly" : "monthly"}
                    </Typography>
                  </Box>

                  <Box sx={boxStyles.flexBetween}>
                    <Typography variant="body1" gutterBottom sx={typographyStyles.subheading}>
                      Total Cost
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" sx={typographyStyles.qanelasFont}>
                      {formatPrice(totalPrice)}
                      <Typography variant="h4" component="span" style={boxStyles.priceComponent}>
                        /{isYearly ? "yearly" : "monthly"}
                      </Typography>
                    </Typography>
                  </Box>
                  <Box sx={boxStyles.buttonSection}>
                    <Button
                      $primary
                      $url={selectedAddon?.id === "academy" ? getPlanLinkForAcademy().link : getPlanLinkForOtherAddons().link}
                    >
                      {selectedAddon?.id === "academy" ? getPlanLinkForAcademy().name : getPlanLinkForOtherAddons().name}
                    </Button>
                  </Box>
                </Box>

                <Typography sx={typographyStyles.priceDisclaimer}>
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
