import React from "react";
import { CustomizedStepper, useStepper, Box, Typography, Button } from "@sistent/sistent";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import CodeIcon from "@mui/icons-material/Code";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

const StepOne = () => (
  <Box sx={{ p: 2, textAlign: "center" }}>
    <Typography variant="h6">User Information</Typography>
    <Typography variant="body2" color="textSecondary">
      Collect basic user details
    </Typography>
  </Box>
);

const StepTwo = () => (
  <Box sx={{ p: 2, textAlign: "center" }}>
    <Typography variant="h6">Account Settings</Typography>
    <Typography variant="body2" color="textSecondary">
      Configure preferences
    </Typography>
  </Box>
);

const StepThree = () => (
  <Box sx={{ p: 2, textAlign: "center" }}>
    <Typography variant="h6">Complete Setup</Typography>
    <Typography variant="body2" color="textSecondary">
      Review and finish
    </Typography>
  </Box>
);

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
      Define components for each step content
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

const StepperDemo = ({ type }) => {
  const isHowTo = type === "howto";
  
  const steps = isHowTo 
    ? [
        { label: "Import", component: HowToStep1, icon: CodeIcon },
        { label: "Create Components", component: HowToStep2, icon: DescriptionIcon },
        { label: "Configure Hook", component: HowToStep3, icon: SettingsIcon },
        { label: "Render", component: HowToStep4, icon: IntegrationInstructionsIcon }
      ]
    : [
        { label: "User Info", component: StepOne, icon: PersonIcon },
        { label: "Settings", component: StepTwo, icon: SettingsIcon },
        { label: "Complete", component: StepThree, icon: CheckCircleIcon }
      ];

  const {
    activeStep,
    handleNext,
    goBack,
    stepLabels,
    icons,
    activeStepComponent: ActiveStepComponent
  } = useStepper({ steps });

  return (
    <Box sx={{ width: '100%' }}>
      <CustomizedStepper
        stepLabels={stepLabels}
        activeStep={activeStep}
        icons={icons}
        orientation={isHowTo ? "vertical" : "horizontal"}
      >
        <ActiveStepComponent />
      </CustomizedStepper>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button
          onClick={goBack}
          disabled={activeStep === 0}
          variant="outlined"
          title="Back"
        >
          Back
        </Button>
        <Typography variant="caption" color="textSecondary" sx={{ alignSelf: "center" }}>
           Step {activeStep + 1} of {stepLabels.length}
        </Typography>
        <Button
          onClick={handleNext}
          disabled={activeStep === stepLabels.length - 1}
          variant="contained"
           title={activeStep === stepLabels.length - 1 ? "Finish" : "Next"}
        >
          {activeStep === stepLabels.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};

export default StepperDemo;
