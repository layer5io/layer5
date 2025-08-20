import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, CardHeader, Typography, FormControl, InputLabel, Select, MenuItem, Slider, Switch, FormControlLabel, Chip, Container, Paper, SistentThemeProvider, CssBaseline
} from "@sistent/sistent";
import { Calculate, CloudOutlined, Group, CheckCircle } from "@mui/icons-material";
import AcademyIcon from "./AcademyIcon";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";
import FeatureDetails from "../PlanCard/collapsible-details";
import PlanCardWrapper from "../PlanCard/planCard.style";

const learnerOptions = [
  { learners: 0, monthlyPerUser: 0 },
  { learners: 50, monthlyPerUser: 1.73 },
  { learners: 150, monthlyPerUser: 1.73 },
  { learners: 250, monthlyPerUser: 1.38 },
  { learners: 500, monthlyPerUser: 0.87 },
  { learners: 1000, monthlyPerUser: 0.59 },
];

const addOns = [
  {
    id: "academy",
    name: "Academy",
    description: "A comprehensive learning management system for creators and instructors on how to build, manage, and extend educational content like learning paths, challenges, and certifications.",
    monthlyPrice: 1,
    yearlyPrice: 10, // ~15% discount for yearly
    icon: <AcademyIcon primaryFill={"#eee"} secondaryFill={"#eee"} />,
    // icon: <AcademyIcon primaryFill={(theme) => theme.palette.background.inverselight} secondaryFill={(theme) => theme.palette.text.default} />,
    unitLabel: "learners",
    maxUnits: 5000,
    features: ["Learning Paths", "Challenges", "Certifications", "Instructor Console"],
  },
  {
    id: "meshery-server",
    name: "Managed Meshery Servers",
    description: "Managed cloud instances for comprehensive infrastructure configuration and lifecycle management",
    monthlyPrice: 64,
    yearlyPrice: 653, // ~15% discount for yearly
    icon: <CloudOutlined />,
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
    icon: <Group />,
    unitLabel: "collaborators",
    maxUnits: 200,
    features: ["Enhanced Security", "Guaranteed SLAs", "Conflict-Free Synchronization", "Real-Time Collaboration"],
  },
];

const secondaryOptions = [
  {
    name: "Academy Practical Learning",
    description: "An inclusive, collaborative, hands-on learning environment for students.",
    monthlyPrice: 299,
    yearlyPrice: 3050, // ~15% discount for yearly
    features: ["Hands-on Learning", "Collaborative Instruction", "Visual Design", "Orchestrated Infrastructure"],
  },
];

export const PricingAddons = ({ isYearly = false }) => {
  const [selectedAddon, setSelectedAddon] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [labLearners, setLabLearners] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantityIndex, setQuantityIndex] = useState(0);

  useEffect(() => {
    if (selectedAddon) {
      const addonPrice = isYearly ? selectedAddon.yearlyPrice : selectedAddon.monthlyPrice;
      const baseTotal = addonPrice * quantity;
      const supportPrice = isYearly ? secondaryOptions[0].yearlyPrice : secondaryOptions[0].monthlyPrice;
      const supportTotal = labLearners ? supportPrice : 0;
      setTotalPrice(baseTotal + supportTotal);
    } else {
      setTotalPrice(0);
    }
  }, [selectedAddon, quantity, labLearners, isYearly]);

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

  const { isDark } = useStyledDarkMode();

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
              avatar={<Calculate color="primary" sx={{ fontSize: 32, fill: "#eee" }} />}
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
                              <Typography variant="body2" color="text.secondary">
                                {formatPrice(isYearly ? addon.yearlyPrice : addon.monthlyPrice)} per {addon.unitLabel.slice(0, -1)}{isYearly ? "/year" : "/month"}
                              </Typography>
                            </Box>
                          </Box>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {selectedAddon && (
                    <Paper elevation={0} sx={{ mt: 2, p: 3, color: "primary.contrastText", borderRadius: 2 }}>
                      <div className="pricing-features">
                        <div className="feature">
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
                                  }}
                                />
                              ))}
                            </Box>
                          </FeatureDetails>
                        </div>
                      </div>
                    </Paper>
                  )}
                </Box>

                {selectedAddon && (
                  <>
                    {/* Quantity Slider */}
                    <Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                        <Typography variant="h6" fontWeight="600" sx={{ fontSize: "1.1rem" }}>
                          <Box component="span" sx={{ fontWeight: "normal" }}>QUANTITY:</Box> {quantity} {selectedAddon.unitLabel}
                        </Typography>
                        <Chip
                          label={formatPrice((isYearly ? selectedAddon.yearlyPrice : selectedAddon.monthlyPrice) * quantity)}
                          color="primary"
                          variant="outlined"
                          sx={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        />
                      </Box>

                      <Box sx={{ px: 1 }}>
                        <Slider
                          value={quantityIndex}
                          onChange={(event, newValue) => setQuantityIndex(newValue)}
                          min={0}
                          max={learnerOptions.length - 1}
                          step={null}
                          marks={learnerOptions.map((option, index) => ({
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

                    {/* Lab Learners Toggle */}
                    {selectedAddon?.id === "academy" && (
                      <>
                        <Box>
                          <div className="pricing-features">
                            <div className="feature">
                              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <FormControlLabel
                                  control={
                                    <Switch
                                      checked={labLearners}
                                      onChange={(e) => setLabLearners(e.target.checked)}
                                      color="primary"
                                    />
                                  }
                                  label=""
                                />
                                <div className="pricing-features">
                                  <div className="feature">
                                    <FeatureDetails
                                      category={secondaryOptions[0].name}
                                      description={secondaryOptions[0].description}
                                    >
                                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                                        {secondaryOptions[0].features.map((feature, index) => (
                                          <Chip
                                            key={index}
                                            icon={<CheckCircle sx={{ fontSize: 12 }} />}
                                            label={feature}
                                            size="small"
                                            variant="outlined"
                                            color="default"
                                          />
                                        ))}
                                      </Box>
                                    </FeatureDetails>
                                  </div>
                                </div>
                              </Box>
                            </div>
                          </div>
                          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, alignItems: { md: "center" } }}>
                          </Box>
                        </Box>
                      </>
                    )}

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
                            {selectedAddon.name} × {quantity}
                          </Typography>
                          <Typography variant="body1" fontWeight="500">
                            {formatPrice((isYearly ? selectedAddon.yearlyPrice : selectedAddon.monthlyPrice) * quantity)}
                          </Typography>
                        </Box>

                        {labLearners && secondaryOptions.length > 0 && (
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Typography variant="body1">
                              {secondaryOptions[0].name}
                            </Typography>
                            <Typography variant="body1" fontWeight="500">
                              {formatPrice(isYearly ? secondaryOptions[0].yearlyPrice : secondaryOptions[0].monthlyPrice)}
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

