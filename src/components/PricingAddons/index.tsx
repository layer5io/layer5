import React from 'react';
import { PricingAddons } from '.';
// import heroImage from '../../assets/images/adventure-five/layer_five.png';

import { SistentThemeProvider, Box, Typography, Container,CssBaseline } from "@sistent/sistent";

import { SistentLayout } from "../../sections/Projects/Sistent/sistent-layout";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";


const Index: React.FC = () => {
  const ColorGuidance = () => {
    const { isDark } = useStyledDarkMode();
    return isDark ? "dark" : "light";
  };
  return (
    <SistentThemeProvider initialMode={ColorGuidance()}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
        {/* Header Section */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #00B39F 0%, #00A08F 100%)',
            color: 'white',
            py: 8,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Layer5 Add-on
                  <br />
                  <span style={{ opacity: 0.9 }}>Pricing Calculator</span>
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600 }}>
                  Configure your Layer5 infrastructure add-ons with real-time pricing. 
                  Scale your cloud-native operations with confidence using our MUI-based Sistent design system.
                </Typography>
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 8, height: 8, bgcolor: '#38A169', borderRadius: '50%' }} />
                    Real-time calculations
                  </Typography>
                  <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 8, height: 8, bgcolor: '#38A169', borderRadius: '50%' }} />
                    Layer5 Sistent components
                  </Typography>
                  <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 8, height: 8, bgcolor: '#38A169', borderRadius: '50%' }} />
                    Flexible scaling
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                {/* <img 
                  src={heroImage} 
                  alt="Layer5 pricing tool interface"
                  style={{ 
                    maxWidth: 400, 
                    borderRadius: 12, 
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' 
                  }}
                /> */}
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Pricing Tool Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" gutterBottom fontWeight="bold">
              Configure Your Add-ons
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
              Choose from our range of cloud-native infrastructure add-ons built with Layer5 Sistent. 
              Adjust quantities and enable premium features with real-time pricing updates.
            </Typography>
          </Box>
          
          <PricingAddons />
        </Container>
      </Box>
    </SistentThemeProvider>
  );
};

export default Index;