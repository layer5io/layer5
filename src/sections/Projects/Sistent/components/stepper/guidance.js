import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { CustomizedStepper, useStepper, SistentThemeProvider, Box, Typography, Button } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import CodeIcon from "@mui/icons-material/Code";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

const StepOne = () => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h6" gutterBottom>
      User Information
    </Typography>
    <Typography variant="body1">
      Please provide your basic information to get started with the setup process.
    </Typography>
  </Box>
);

const StepTwo = () => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h6" gutterBottom>
      Account Settings
    </Typography>
    <Typography variant="body1">
      Configure your account preferences and notification settings.
    </Typography>
  </Box>
);

const StepThree = () => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h6" gutterBottom>
      Payment Information
    </Typography>
    <Typography variant="body1">
      Enter your payment details to complete the account setup.
    </Typography>
  </Box>
);


// How to use stepper components
const HowToStep1 = () => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h6" gutterBottom>
      1. Import Dependencies
    </Typography>
    <Typography variant="body1">
      Import CustomizedStepper, useStepper from @sistent/sistent and your icons
    </Typography>
  </Box>
);

const HowToStep2 = () => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h6" gutterBottom>
      2. Create Step Components
    </Typography>
    <Typography variant="body1">
      Define components for each step content (e.g., StepOne, StepTwo, StepThree)
    </Typography>
  </Box>
);

const HowToStep3 = () => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h6" gutterBottom>
      3. Configure useStepper Hook
    </Typography>
    <Typography variant="body1">
      Call useStepper with steps array containing label, component, and icon
    </Typography>
  </Box>
);

const HowToStep4 = () => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h6" gutterBottom>
      4. Render Stepper
    </Typography>
    <Typography variant="body1">
      Use CustomizedStepper with stepLabels, activeStep, icons and ActiveStepComponent
    </Typography>
  </Box>
);

const StepperGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  // Linear stepper example
  const {
    activeStep: linearActiveStep,
    handleNext: linearNext,
    goBack: linearBack,
    stepLabels: linearLabels,
    icons: linearIcons,
    activeStepComponent: LinearActiveComponent
  } = useStepper({
    steps: [
      { label: "User Info", component: StepOne, icon: PersonIcon },
      { label: "Settings", component: StepTwo, icon: SettingsIcon },
      { label: "Complete", component: StepThree, icon: CheckCircleIcon }
    ]
  });

  // How to use stepper example
  const {
    activeStep: howToActiveStep,
    handleNext: howToNext,
    goBack: howToBack,
    stepLabels: howToLabels,
    icons: howToIcons,
    activeStepComponent: HowToActiveComponent
  } = useStepper({
    steps: [
      { label: "Import", component: HowToStep1, icon: CodeIcon },
      { label: "Create Components", component: HowToStep2, icon: DescriptionIcon },
      { label: "Configure Hook", component: HowToStep3, icon: SettingsIcon },
      { label: "Render", component: HowToStep4, icon: IntegrationInstructionsIcon }
    ]
  });

  return (
    <SistentLayout title="Stepper">
      <div className="content">
        <a id="Identity">
          <h2>Stepper</h2>
        </a>
        <p>
          This guide provides comprehensive information on when and how to use
          steppers effectively in your applications.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/stepper"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/stepper")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/stepper/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/stepper/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/stepper/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/stepper/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>

            <a id="basic-stepper">
              <h2>Basic Stepper Example</h2>
            </a>
            <p>
              Simple 3-step workflow perfect for getting started with steppers. Ideal for linear processes.
            </p>

            <div className="showcase">
              <div className="items">
                <Box sx={{ maxWidth: 500, margin: "0 auto" }}>
                  <CustomizedStepper
                    stepLabels={linearLabels}
                    activeStep={linearActiveStep}
                    icons={linearIcons}
                  >
                    <LinearActiveComponent />
                  </CustomizedStepper>

                  <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                    <Button
                      onClick={linearBack}
                      disabled={linearActiveStep === 0}
                      variant="outlined"
                      size="small"
                    >
                      Back
                    </Button>
                    <Typography variant="caption" color="textSecondary" sx={{ alignSelf: "center" }}>
                      Step {linearActiveStep + 1} of {linearLabels.length}
                    </Typography>
                    <Button
                      onClick={linearNext}
                      disabled={linearActiveStep === linearLabels.length - 1}
                      variant="contained"
                      size="small"
                    >
                      {linearActiveStep === linearLabels.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Box>
                </Box>
              </div>
            </div>

            <a id="how-to-use">
              <h2>How to Use</h2>
            </a>
            <p>
              Step-by-step guide to implement steppers in application.
            </p>

            <div className="showcase">
              <div className="items">
                <Box sx={{ maxWidth: 500, margin: "0 auto" }}>
                  <CustomizedStepper
                    stepLabels={howToLabels}
                    activeStep={howToActiveStep}
                    icons={howToIcons}
                    orientation="vertical"
                  >
                    <HowToActiveComponent />
                  </CustomizedStepper>

                  <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                    <Button
                      onClick={howToBack}
                      disabled={howToActiveStep === 0}
                      variant="outlined"
                      size="small"
                    >
                      Previous
                    </Button>
                    <Typography variant="caption" color="textSecondary" sx={{ alignSelf: "center" }}>
                      Step {howToActiveStep + 1} of {howToLabels.length}
                    </Typography>
                    <Button
                      onClick={howToNext}
                      disabled={howToActiveStep === howToLabels.length - 1}
                      variant="contained"
                      size="small"
                    >
                      {howToActiveStep === howToLabels.length - 1 ? "Done" : "Next"}
                    </Button>
                  </Box>
                </Box>
              </div>
            </div>

            <a id="best-practices">
              <h2>Best Practices</h2>
            </a>
            <br/>
            <h3>Step Design</h3>
            <ul>
              <li>Keep step labels short and descriptive (1-3 words)</li>
              <li>Use meaningful icons that relate to step content</li>
              <li>Limit to 3-7 steps maximum for better usability</li>
              <li>Group related tasks into single steps</li>
            </ul>

            <h3>Navigation</h3>
            <ul>
              <li>Always provide a "Back" button (except on first step)</li>
              <li>Disable "Next" until current step is valid</li>
              <li>Use clear action labels: "Continue", "Next", "Finish"</li>
              <li>Show progress indicator (current step / total steps)</li>
            </ul>

            <h3>User Experience</h3>
            <ul>
              <li>Validate input before allowing progression</li>
              <li>Save progress automatically when possible</li>
              <li>Provide clear error messages with solutions</li>
              <li>Allow users to edit previous steps</li>
              <li>Show completion status for each step</li>
            </ul>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};

export default StepperGuidance;
