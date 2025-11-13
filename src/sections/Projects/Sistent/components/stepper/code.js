import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { CustomizedStepper, useStepper, SistentThemeProvider, Box, Typography, Button } from "@sistent/sistent";
import { CodeBlock } from "../button/code-block";
import { SistentLayout } from "../../sistent-layout";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const StepExample = ({ title, content }) => (
  <Box sx={{ p: 2, textAlign: "center" }}>
    <Typography variant="h6">{title}</Typography>
    <Typography variant="body2" color="textSecondary">
      {content}
    </Typography>
  </Box>
);

const codes = [
  `import { CustomizedStepper, useStepper, Button, Box } from '@sistent/sistent';

const { 
  activeStep, 
  handleNext, 
  goBack, 
  stepLabels, 
  icons, 
  activeStepComponent: ActiveStepComponent 
} = useStepper({ steps: [
  { label: 'User Info', component: StepOne, icon: PersonIcon },
  { label: 'Settings', component: StepTwo, icon: SettingsIcon },
  { label: 'Complete', component: StepThree, icon: CheckCircleIcon }
] });

return (
  <div>
    <CustomizedStepper stepLabels={stepLabels} activeStep={activeStep} icons={icons}>
      <ActiveStepComponent />
    </CustomizedStepper>
    
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
      <Button onClick={goBack} disabled={activeStep === 0}>Back</Button>
      <Button onClick={handleNext}>Next</Button>
    </Box>
  </div>
);`
];

const StepperCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  const {
    activeStep,
    handleNext,
    goBack,
    stepLabels,
    icons,
    activeStepComponent: ActiveStepComponent
  } = useStepper({
    steps: [
      {
        label: "User Info",
        component: () => <StepExample title="User Information" content="Enter your personal details" />,
        icon: PersonIcon
      },
      {
        label: "Settings",
        component: () => <StepExample title="Account Settings" content="Configure your preferences" />,
        icon: SettingsIcon
      },
      {
        label: "Complete",
        component: () => <StepExample title="Setup Complete" content="Review and finish" />,
        icon: CheckCircleIcon
      }
    ]
  });

  return (
    <SistentLayout title="Stepper">
      <div className="content">
        <a id="Identity">
          <h2>Stepper</h2>
        </a>
        <p>
          Code examples for implementing the Stepper component.
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
          <p>
            The Stepper component uses the <code>useStepper</code> hook for state management
            and the <code>CustomizedStepper</code> component for rendering.
          </p>

          <a id="stepper-with-navigation">
            <h2>Stepper with Navigation</h2>
          </a>
          <p>
            Enhanced stepper with navigation controls for user interaction.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ maxWidth: 500, margin: "0 auto" }}>
                  <CustomizedStepper
                    stepLabels={stepLabels}
                    activeStep={activeStep}
                    icons={icons}
                  >
                    <ActiveStepComponent />
                  </CustomizedStepper>

                  <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                    <Button
                      onClick={goBack}
                      disabled={activeStep === 0}
                      variant="outlined"
                      size="small"
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
                      size="small"
                    >
                      {activeStep === stepLabels.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Box>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="stepper-navigation" code={codes[0]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default StepperCode;
