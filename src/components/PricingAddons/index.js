import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Switch,
  FormControlLabel,
  Chip,
  Divider,
  Container,
  Paper,
  SistentThemeProvider,
  CssBaseline
} from "@sistent/sistent";
import {
  Calculate, CloudOutlined,
  Group,
  CheckCircle,
} from "@mui/icons-material";
import AcademyIcon from "./AcademyIcon";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";

const addOns = [
  {
    id: "academy",
    name: "Academy",
    description: "A comprehensive learning management system for creators and instructors on how to build, manage, and extend educational content like learning paths, challenges, and certifications.",
    basePrice: 1,
    icon: <AcademyIcon primaryFill={(theme) => theme.palette.background.inverselight} secondaryFill={(theme) => theme.palette.text.default} />,
    unitLabel: "learners",
    maxUnits: 5000,
    features: ["Learning Paths", "Challenges", "Certifications", "Instructor Console"],
  },
  {
    id: "meshery-server",
    name: "Managed Meshery Servers",
    description: "Managed cloud instances for comprehensive service mesh operations and monitoring",
    basePrice: 64,
    icon: <CloudOutlined />,
    unitLabel: "servers",
    maxUnits: 100,
    features: ["Automated deployment", "Real-time monitoring", "Multi-cluster support", "Performance analytics"],
  },
  {
    id: "team-seats",
    name: "Team Collaboration Seats",
    description: "Additional seats for enhanced team collaboration and workspace management",
    basePrice: 16,
    icon: <Group />,
    unitLabel: "seats",
    maxUnits: 200,
    features: ["Shared workspaces", "Role-based access", "Team analytics", "Collaboration tools"],
  },
];

const secondaryOptions = [
  {
    name: "Lab Learners",
    description: "An inclusive, collaborative, hands-on learning environment for students.",
    price: 299,
    features: ["Hands-on Learning", "Collaborative Instruction", "Visual Design", "Orchestrated Infrastructure"],
  },
];

export const PricingAddons = () => {
  const [selectedAddon, setSelectedAddon] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [labLearners, setLabLearners] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (selectedAddon) {
      const baseTotal = selectedAddon.basePrice * quantity;
      const supportTotal = labLearners ? secondaryOptions[0].price : 0;
      setTotalPrice(baseTotal + supportTotal);
    } else {
      setTotalPrice(0);
    }
  }, [selectedAddon, quantity, labLearners]);

  const handleAddonChange = (addonId) => {
    const addon = addOns.find((a) => a.id === addonId);
    setSelectedAddon(addon || null);
    setQuantity(1);
  };

  const handleQuantityChange = (_, newValue) => {
    setQuantity(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const ColorGuidance = () => {
    const { isDark } = useStyledDarkMode();
    return isDark ? "dark" : "light";
  };
  return (
    <SistentThemeProvider initialMode={ColorGuidance()}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ my: 4 }}>
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
                              {formatPrice(addon.basePrice)} per {addon.unitLabel.slice(0, -1)}
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {selectedAddon && (
                  <Paper
                    elevation={0}
                    sx={{
                      mt: 2,
                      p: 3,
                      backgroundColor: "primary.light",
                      color: "primary.contrastText",
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {selectedAddon.description}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {selectedAddon.features.map((feature, index) => (
                        <Chip
                          key={index}
                          icon={<CheckCircle sx={{ fontSize: 16 }} />}
                          label={feature}
                          size="small"
                          sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            color: "white",
                            "& .MuiChip-icon": { color: "white" },
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                )}
              </Box>

              {selectedAddon && (
                <>
                  {/* Quantity Slider */}
                  <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                      <Typography variant="h6" fontWeight="600">
                      Quantity: {quantity} {selectedAddon.unitLabel}
                      </Typography>
                      <Chip
                        label={formatPrice(selectedAddon.basePrice * quantity)}
                        color="primary"
                        variant="outlined"
                        sx={{ fontWeight: "bold", fontSize: "0.9rem" }}
                      />
                    </Box>

                    <Box sx={{ px: 1 }}>
                      <Slider
                        value={quantity}
                        onChange={handleQuantityChange}
                        min={1}
                        max={selectedAddon.maxUnits}
                        step={1}
                        valueLabelDisplay="auto"
                        sx={{ mb: 2 }}
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

                  <Divider />

                  {/* Lab Learners Toggle */}
                  {selectedAddon?.id === "academy" && (
                    <>
                      <Box>
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, alignItems: { md: "center" } }}>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" fontWeight="600" gutterBottom>
                                        Lab Learners
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                              {secondaryOptions[0].description}
                            </Typography>
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                              {secondaryOptions[0].features.map((feature, index) => (
                                <Chip
                                  key={index}
                                  icon={<CheckCircle sx={{ fontSize: 16 }} />}
                                  label={feature}
                                  size="small"
                                  variant="outlined"
                                  color="default"
                                />
                              ))}
                            </Box>
                          </Box>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Chip
                              label={labLearners ? formatPrice(secondaryOptions[0].price) : "Disabled"}
                              color={labLearners ? "success" : "default"}
                              sx={{ minWidth: 100 }}
                            />
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
                          </Box>
                        </Box>
                      </Box>
                      <Divider />
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
                    Price Breakdown
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography variant="body1">
                          {selectedAddon.name} × {quantity}
                        </Typography>
                        <Typography variant="body1" fontWeight="500">
                          {formatPrice(selectedAddon.basePrice * quantity)}
                        </Typography>
                      </Box>

                      {labLearners && secondaryOptions.length > 0 && (
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <Typography variant="body1">
                            {secondaryOptions[0].name}
                          </Typography>
                          <Typography variant="body1" fontWeight="500">
                            {formatPrice(secondaryOptions[0].price)}
                          </Typography>
                        </Box>
                      )}

                      <Divider />

                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography variant="h5" fontWeight="bold">
                        Total Monthly Cost
                        </Typography>
                        <Typography variant="h4" fontWeight="bold" color="primary.main">
                          {formatPrice(totalPrice)}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="caption" color="text.secondary">
                    * Prices shown are monthly subscription costs. Annual subscriptions receive a 15% discount.
                    Contact our sales team for enterprise pricing and custom configurations.
                    </Typography>
                  </Paper>
                </>
              )}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </SistentThemeProvider>
  );
};
