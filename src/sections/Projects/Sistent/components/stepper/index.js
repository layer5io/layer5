import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, CustomizedStepper, useStepper, Box, Typography } from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Col, Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StepOneDemo = () => (
  <Box sx={{ p: 2, textAlign: 'center' }}>
    <Typography variant="h6">User Information</Typography>
    <Typography variant="body2" color="textSecondary">
      Collect basic user details
    </Typography>
  </Box>
);

const StepTwoDemo = () => (
  <Box sx={{ p: 2, textAlign: 'center' }}>
    <Typography variant="h6">Account Settings</Typography>
    <Typography variant="body2" color="textSecondary">
      Configure preferences
    </Typography>
  </Box>
);

const StepThreeDemo = () => (
  <Box sx={{ p: 2, textAlign: 'center' }}>
    <Typography variant="h6">Complete Setup</Typography>
    <Typography variant="body2" color="textSecondary">
      Review and finish
    </Typography>
  </Box>
);

const SistentStepper = () => {
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
      { label: 'User Info', component: StepOneDemo, icon: PersonIcon },
      { label: 'Settings', component: StepTwoDemo, icon: SettingsIcon },
      { label: 'Complete', component: StepThreeDemo, icon: CheckCircleIcon }
    ]
  });

  return (
    <SistentLayout title="Stepper">
      <div className="content">
        <a id="Identity">
          <h2>Stepper</h2>
        </a>
        <p>
          Steppers guide users through multi-step processes by breaking complex tasks
          into manageable, sequential steps with clear progress indication.
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
            Steppers are essential for breaking down complex workflows into digestible pieces.
            They provide clear visual feedback about progress and help users understand
            what's required at each stage of a process.
          </p>
          
          <a id="Demo">
            <h2>Interactive Demo</h2>
          </a>
          <p>
            Experience how the stepper component works with this interactive example:
          </p>
          <Row $Hcenter className="image-container">
            <Col sm={12}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <CustomizedStepper
                  stepLabels={stepLabels}
                  activeStep={activeStep}
                  icons={icons}
                >
                  <ActiveStepComponent />
                </CustomizedStepper>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                  <TabButton
                    onClick={goBack}
                    disabled={activeStep === 0}
                    title="Previous"
                    style={{ 
                      opacity: activeStep === 0 ? 0.5 : 1,
                      cursor: activeStep === 0 ? 'not-allowed' : 'pointer'
                    }}
                  />
                  <TabButton
                    onClick={handleNext}
                    disabled={activeStep === stepLabels.length - 1}
                    title={activeStep === stepLabels.length - 1 ? 'Finish' : 'Next'}
                    style={{ 
                      opacity: activeStep === stepLabels.length - 1 ? 0.5 : 1,
                      cursor: activeStep === stepLabels.length - 1 ? 'not-allowed' : 'pointer'
                    }}
                  />
                </Box>
              </SistentThemeProvider>
            </Col>
          </Row>

          <a id="Key Features">
            <h2>Key Features</h2>
          </a>
          <p>
            The Sistent Stepper component provides several powerful features:
          </p>
          
          <h3>Linear Progress</h3>
          <p>
            Users complete steps in sequence, ensuring all required information
            is collected before proceeding to the next step.
          </p>
          
          <h3>Visual Progress Indication</h3>
          <p>
            Clear visual feedback shows completed steps, current step, and remaining
            steps, helping users understand their progress.
          </p>
          
          <h3>Customizable Icons</h3>
          <p>
            Each step can have a custom icon that represents its content or purpose,
            making the interface more intuitive and visually appealing.
          </p>
          
          <h3>Responsive Design</h3>
          <p>
            The stepper adapts to different screen sizes, maintaining usability
            across desktop and mobile devices.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentStepper;
