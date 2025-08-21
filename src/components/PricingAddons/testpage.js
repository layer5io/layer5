import React from "react";
import { PricingAddons } from ".";
// import heroImage from "../../assets/images/adventure-five/layer_five.png";

import { SistentThemeProvider, Box, Typography, Container, CssBaseline } from "@sistent/sistent";

import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";


const TestPage = () => {
  const ColorGuidance = () => {
    const { isDark } = useStyledDarkMode();
    return isDark ? "dark" : "light";
  };
  return (
    <SistentThemeProvider initialMode={ColorGuidance()}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
        {/* Header Section */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #00B39F 0%, #00A08F 100%)",
            color: "white",
            py: 8,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h1" gutterBottom sx={{ fontWeight: "bold" }}>
                  Layer5 Add-on
                  <br />
                  <span style={{ opacity: 0.9 }}>Pricing Calculator</span>
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600 }}>
                  Configure your Layer5 infrastructure add-ons with real-time pricing.
                  Scale your cloud-native operations with confidence using our MUI-based Sistent design system.
                </Typography>
                <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                  <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ width: 8, height: 8, bgcolor: "#38A169", borderRadius: "50%" }} />
                    Real-time calculations
                  </Typography>
                  <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ width: 8, height: 8, bgcolor: "#38A169", borderRadius: "50%" }} />
                    Layer5 Sistent components
                  </Typography>
                  <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ width: 8, height: 8, bgcolor: "#38A169", borderRadius: "50%" }} />
                    Flexible scaling
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                {/* <img
                  src={heroImage}
                  alt="Layer5 pricing tool interface"
                  style={{
                    maxWidth: 400,
                    borderRadius: 12,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                  }}
                /> */}
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Pricing Tool Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <PricingAddons />
        </Container>

        {/* Footer CTA */}
        <Box sx={{ bgcolor: "grey.50", py: 6 }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", maxWidth: 600, mx: "auto" }}>
              <Typography variant="h4" gutterBottom fontWeight="bold">
                Ready to Scale Your Infrastructure?
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Contact our team to discuss custom pricing for enterprise deployments
                and get personalized recommendations for your use case.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                <Typography variant="button" sx={{ px: 4, py: 1.5, bgcolor: "#00B39F", color: "white", borderRadius: 2, textDecoration: "none", "&:hover": { bgcolor: "#00A08F" } }}>
                  Contact Sales
                </Typography>
                <Typography variant="button" sx={{ px: 4, py: 1.5, border: "1px solid", borderColor: "#00B39F", color: "#00B39F", borderRadius: 2, textDecoration: "none", "&:hover": { bgcolor: "rgba(0, 179, 159, 0.04)" } }}>
                  View Documentation
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </SistentThemeProvider>
  );
};

export default TestPage;