/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, CardHeader, Typography, FormControl, InputLabel, Select, MenuItem, Slider, Switch, FormControlLabel, Chip, Container, Paper, SistentThemeProvider, CssBaseline, useTheme
} from "@sistent/sistent";
import { Calculate, CloudOutlined, Group, CheckCircle } from "@mui/icons-material";
import AcademyIcon from "./AcademyIcon";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";
import FeatureDetails from "../PlanCard/collapsible-details";
import PlanCardWrapper from "../PlanCard/planCard.style";

const academyPlans = [
  // { learners: 0, monthlyPerUser: 0 },
  // { learners: 50, monthlyPerUser: 1.73, currency: "$" },
  // { learners: 150, monthlyPerUser: 1.73, currency: "$" },
  { learners: 250, monthlyPerUser: 1.29, yearlyPerUser: 1.05, currency: "$" },
  { learners: 500, monthlyPerUser: 0.80, yearlyPerUser: 0.67, currency: "$" },
  { learners: 1000, monthlyPerUser: 0.49, yearlyPerUser: 0.49, currency: "$" },
  { learners: 2500, monthlyPerUser: 0.44, yearlyPerUser: 0.44, currency: "$" },
];

export const PricingAddons = ({ isYearly = false }) => {
  const [selectedAddon, setSelectedAddon] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [theoryLearners, setTheoryLearners] = useState(false);
  const [labLearners, setLabLearners] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantityIndex, setQuantityIndex] = useState(0);

  const { isDark } = useStyledDarkMode();
  const theme = useTheme();

  // Create theme-aware addons with proper color references
  const getThemeAwareAddOns = () => [
    {
      id: "academy",
      name: "Academy",
      description: "A comprehensive learning management system for creators and instructors on how to build, manage, and extend educational content like learning paths, challenges, and certifications.",
      icon: <AcademyIcon
        primaryFill={theme.palette.background.secondary}
        secondaryFill={theme.palette.background.default}
      />,
      unitLabel: "learners",
      maxUnits: 5000,
      features: ["Learning Paths", "Challenges", "Certifications", "Instructor Console"],
      subAddOns: [
        {
          id: "academy-theory",
          name: "Theoretical Learning",
          description: "A comprehensive learning management system for creators and instructors on how to build, manage, and extend educational content like learning paths, challenges, and certifications.",
          unitLabel: "learners",
          maxUnits: 5000,
          features: ["Learning Paths", "Challenges", "Certifications", "Instructor Console"],
        },
        {
          id: "academy-practical",
          name: "Practical Learning",
          description: "An inclusive, collaborative, hands-on learning environment with labs for students.",
          maxUnits: 5000,
          features: ["Hands-on Learning", "Collaborative Instruction", "Visual Design", "Orchestrated Infrastructure"],
        }
      ],
    },
    {
      id: "meshery-server",
      name: "Managed Meshery Servers",
      description: "Managed cloud instances for comprehensive infrastructure configuration and lifecycle management",
      monthlyPrice: 64,
      yearlyPrice: 653, // ~15% discount for yearly
      icon: <CloudOutlined sx={{ color: theme.palette.background.inverse }} />,
      unitLabel: "servers",
      maxUnits: 50,
      features: ["Automated deployment", "Real-time monitoring", "Multi-cluster support", "Performance analytics"],
    },
    {
      id: "team-seats",
      name: "Dedicated WebRTC with Conflict-Free Collaboration",
      description: "This premium offering delivers a secure, high-performance WebRTC solution, purpose-built for real-time, multiplayer collaboration across distributed teams. Powered by Conflict-Free Replicated Data Types (CRDT), this feature ensures seamless, low-latency synchronization of cloud native designs, configurations, and operational workflows, even in complex multi-cluster Kubernetes and public Cloud environments.",
      monthlyPrice: 1.50,
      yearlyPrice: 15.30, // ~15% discount for yearly
      icon: <Group sx={{ color: theme.palette.background.secondary }} />,
      unitLabel: "collaborators",
      maxUnits: 200,
      features: ["Enhanced Security", "Guaranteed SLAs", "Conflict-Free Synchronization", "Real-Time Collaboration"],
    },
  ];

  const addOns = getThemeAwareAddOns();

  useEffect(() => {
    if (selectedAddon) {
      let baseTotal = 0;
      if (selectedAddon.id === "academy") {
        // For academy, use the learner options pricing
        const currentLearnerOption = academyPlans[quantityIndex];
        const monthlyPerUserCost = currentLearnerOption.monthlyPerUser;
        const yearlyPerUserCost = monthlyPerUserCost * 12 * 0.85; // 15% discount for yearly
        baseTotal = isYearly
          ? yearlyPerUserCost * currentLearnerOption.learners
          : monthlyPerUserCost * currentLearnerOption.learners;
      } else {
        // For other addons, use the standard pricing
        const addonPrice = isYearly ? selectedAddon.yearlyPrice : selectedAddon.monthlyPrice;
        baseTotal = addonPrice * quantity;
      }
      
      // Handle Academy Practical Learning (sub-addon)
      let supportTotal = 0;
      if (selectedAddon?.id === "academy" && labLearners) {
        const practicalLearning = selectedAddon.subAddOns.find(sub => sub.id === "academy-practical");
        if (practicalLearning) {
          const supportPrice = isYearly ? practicalLearning.yearlyPrice : practicalLearning.monthlyPrice;
          supportTotal = supportPrice;
        }
      }
      
      setTotalPrice(baseTotal + supportTotal);
    } else {
      setTotalPrice(0);
    }
  }, [selectedAddon, quantity, quantityIndex, labLearners, isYearly]);

  const handleAddonChange = (addonId) => {
    const addon = addOns.find((a) => a.id === addonId);
    setSelectedAddon(addon || null);
    setQuantity(1);
  };


  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <CssBaseline />

      <Container maxWidth="lg" sx={{ my: 4 }}>
        <PlanCardWrapper>
          <Card
            elevation={0}
            sx={{
              maxWidth: 800,
              mx: "auto",
              border: "1px solid",
              borderColor: "primary.main",
              borderRadius: 3,
            }}
          >
            <CardHeader
              avatar={<Calculate color="primary" sx={{ fontSize: 32, color: theme.palette.background.secondary }} />}
              title={
                <Typography variant="h4" component="h4" fontWeight="bold" sx={{ fontSize: 18 }}>
              Enterprise Add-ons
                </Typography>
              }
              // subheader={
              //   <Typography variant="body1" color="text.secondary" sx={{ mt: 1, fontStyle: "italic" }}>
              //   Optionally, configure enterprise add-ons.
              //   </Typography>
              // }
              sx={{
                background: "linear-gradient(135deg, rgba(0, 179, 159, 0.05) 0%, rgba(0, 179, 159, 0.1) 100%)",
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            />

            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {/* Add-on Selection */}
                <Box>
                  {/* <Typography variant="h6" gutterBottom fontWeight="600">
                Select Add-on
                </Typography> */}
                  <FormControl fullWidth>
                    <InputLabel>Optionally, choose one or more add-ons</InputLabel>
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
                              <Typography variant="body1" fontWeight="500">
                                {addon.name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
                                {addon.id === "academy"
                                  ? addon.subdescription
                                  : `${formatPrice(isYearly ? addon.yearlyPrice : addon.monthlyPrice)} per ${addon.unitLabel.slice(0, -1)}${isYearly ? "/year" : "/month"}`
                                }
                              </Typography>
                            </Box>
                          </Box>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

{/* SELECTED ADD-ON DETAILS */}
      {selectedAddon?.id === "academy" && (
      <>
      <Box className="pricing-features" sx={{ marginTop: "-2rem" }}>
        <FormControlLabel
        control={<Switch
          checked={theoryLearners}
          onChange={(e) => setTheoryLearners(e.target.checked)}
          color="primary" />}
        label="" />
          <Box className="feature">
            <FeatureDetails
              category={selectedAddon.name}
              description={selectedAddon.description}
            >
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                {selectedAddon.features.map((feature, index) => (
                  <Chip
                    key={index}
                    icon={<CheckCircle sx={{ fontSize: 12 }} />}
                    label={feature}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(0, 179, 159, 0.1)",
                      color: "text.primary",
                      "& .MuiChip-icon": { color: "primary.main" },
                    }} />
                ))}
              </Box>

{/* Quantity Slider */}
        {/* <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography variant="h6" fontWeight="600" sx={{ fontSize: "1.1rem" }}>
              <Box component="span" sx={{ fontWeight: "normal" }}></Box> {selectedAddon.id === "academy" ? academyPlans[quantityIndex].learners : quantity} {selectedAddon.unitLabel}
            </Typography>
            <Slider
              value={quantityIndex}
              onChange={(event, newValue) => setQuantityIndex(newValue)}
              min={0}
              valueLabelDisplay="auto"
              valueLabelFormat={() => `${academyPlans[quantityIndex].learners} ${selectedAddon.unitLabel}`}
              max={academyPlans.length - 1}
              step={null}
              marks={academyPlans.map((option, index) => ({
                value: index,
                label: option.learners === 1000 ? "1,000+" : option.learners,
              }))}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2" color="text.secondary">
            learners
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedAddon.maxUnits}
              </Typography>
            </Box>
          </Box>
         
        </Box> */}
            </FeatureDetails>
          </Box>
        </Box>
      </>
      )}
      </Box>
      
                {selectedAddon && (
                  <>
                    {/* Quantity Slider */}
                    <Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                        <Typography variant="h6" fontWeight="600" sx={{ fontSize: "1.1rem" }}>
                          <Box component="span" sx={{ fontWeight: "normal" }}>QUANTITY:</Box> {selectedAddon.id === "academy" ? academyPlans[quantityIndex].learners : quantity} {selectedAddon.unitLabel}
                        </Typography>
                        <Slider
                          value={quantityIndex}
                          onChange={(event, newValue) => setQuantityIndex(newValue)}
                          min={0}
                          max={academyPlans.length - 1}
                          step={null}
                          marks={academyPlans.map((option, index) => ({
                            value: index,
                            label: option.learners === 1000 ? "1,000+" : option.learners,
                          }))}
                        />
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                          <Typography variant="body2" color="text.secondary">
                        1
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {selectedAddon.maxUnits}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    {/* <Divider /> */}


                    {/* Total Price Display */}
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        background: "linear-gradient(135deg, rgba(0, 179, 159, 0.08) 0%, rgba(0, 179, 159, 0.12) 100%)",
                        border: "2px solid",
                        borderColor: "primary.main",
                        borderRadius: 3,
                      }}
                    >
                      <Typography variant="h6" gutterBottom fontWeight="600">
                    Subtotal
                      </Typography>

                      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <Typography variant="body1">
                            {selectedAddon.name} × {selectedAddon.id === "academy" ? academyPlans[quantityIndex].learners : quantity}
                          </Typography>
                          <Typography variant="body1" fontWeight="500">
                            {(() => {
                              if (selectedAddon.id === "academy") {
                                const currentLearnerOption = academyPlans[quantityIndex];
                                const monthlyPerUserCost = currentLearnerOption.monthlyPerUser;
                                const yearlyPerUserCost = monthlyPerUserCost * 12 * 0.85;
                                const totalCost = isYearly
                                  ? yearlyPerUserCost * currentLearnerOption.learners
                                  : monthlyPerUserCost * currentLearnerOption.learners;
                                return formatPrice(totalCost);
                              } else {
                                return formatPrice((isYearly ? selectedAddon.yearlyPrice : selectedAddon.monthlyPrice) * quantity);
                              }
                            })()}
                          </Typography>
                        </Box>

                        {labLearners && selectedAddon?.id === "academy" && (
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Typography variant="body1">
                              {selectedAddon.subAddOns.find(sub => sub.id === "academy-practical")?.name}
                            </Typography>
                            <Typography variant="body1" fontWeight="500">
                              {(() => {
                                const practicalLearning = selectedAddon.subAddOns.find(sub => sub.id === "academy-practical");
                                return formatPrice(isYearly ? practicalLearning?.yearlyPrice : practicalLearning?.monthlyPrice);
                              })()}
                            </Typography>
                          </Box>
                        )}

                        {/* <Divider /> */}

                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <Typography variant="h5" fontWeight="bold">
                        Total {isYearly ? "Annual" : "Monthly"} Cost
                          </Typography>
                          <Typography variant="h4" fontWeight="bold" color="primary.light">
                            {formatPrice(totalPrice)}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography variant="caption" sx={{ lineHeight: "1rem" }} color="text.secondary">
                    * Prices shown are {isYearly ? "annual" : "monthly"} subscription costs. {isYearly ? "Monthly subscriptions are available at standard rates." : "Annual subscriptions receive a 15% discount."} Contact our sales team for enterprise pricing and custom configurations.
                      </Typography>
                    </Paper>
                  </>
                )}
              </Box>
            </CardContent>
          </Card>
        </PlanCardWrapper>
      </Container>
      {/* <Chip
    label={labLearners ? formatPrice(isYearly ? secondaryOptions[0].yearlyPrice : secondaryOptions[0].price) : "Hands-on Learning disabled"}
    color={labLearners ? "success" : "default"}
    sx={{ minWidth: 100 }}
  /> */}

    </SistentThemeProvider>

  );

};

