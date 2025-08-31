import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  SistentThemeProvider,
  Input
} from "@sistent/sistent";
import { Row } from "../../../../../reusecore/Layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const DialogGuidance = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();

  const [openBasic, setOpenBasic] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openFullScreen, setOpenFullScreen] = useState(false);

  return (
    <SistentLayout title="Dialog">
      <div className="content">
        <a id="Identity">
          <h2>Dialog</h2>
        </a>
        <p>
          The Dialog component is a modal window that appears on top of the main content to focus
          user attention on specific tasks or information. It provides a controlled way to present
          confirmations, forms, alerts, and detailed content without navigating away from the
          current context.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/dialog"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/dialog")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
                "/projects/sistent/components/dialog/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/dialog/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/dialog/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/dialog/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Proper usage of the Dialog component can enhance user experience by providing clear,
            focused interactions that guide users through important decisions and tasks. Below are
            guidelines and interactive examples to help you implement dialogs effectively.
          </p>

          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <p>
            To use the Dialog component, include it with the required props and structure. The component
            supports various configurations and styling options:
          </p>
          <ul>
            <li><code>open</code> to control visibility state</li>
            <li><code>onClose</code> for handling dialog closure</li>
            <li><code>fullScreen</code> for expanded display</li>
            <li><code>maxWidth</code> for size constraints</li>
          </ul>
          <br />

          <a id="Basic Dialog">
            <h3>Basic Dialog</h3>
          </a>
          <p>
            A simple confirmation dialog with title, content, and action buttons. This pattern
            is ideal for user confirmations and simple decision-making scenarios:
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button variant="contained" onClick={() => setOpenBasic(true)}>Open Basic Dialog</Button>
              <Dialog open={openBasic} onClose={() => setOpenBasic(false)}>
                <DialogTitle>Confirm Action</DialogTitle>
                <DialogContent>
                  Do you want to proceed with this action?
                </DialogContent>
                <DialogActions>
                  <Button variant="contained" onClick={() => setOpenBasic(false)}>Cancel</Button>
                  <Button variant="contained" color="primary" onClick={() => setOpenBasic(false)}>
                    Confirm
                  </Button>
                </DialogActions>
              </Dialog>
            </SistentThemeProvider>
          </Row>

          <br />
          <a id="Form Dialog">
            <h3>Dialog with Form</h3>
          </a>
          <p>
            Dialogs can contain forms for collecting user input without requiring navigation
            to a separate page. This pattern works well for quick data collection:
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button variant="contained" onClick={() => setOpenForm(true)}>Open Form Dialog</Button>
              <Dialog open={openForm} onClose={() => setOpenForm(false)}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem", minWidth: "300px" }}>
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                    <Input
                      label="Name"
                      type="text"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </DialogContent>
                <DialogActions>
                  <Button variant="contained" onClick={() => setOpenForm(false)}>Cancel</Button>
                  <Button variant="contained" color="primary" onClick={() => setOpenForm(false)}>
                    Subscribe
                  </Button>
                </DialogActions>
              </Dialog>
            </SistentThemeProvider>
          </Row>

          <br />
          <a id="Full Screen Dialog">
            <h3>Full-Screen Dialog</h3>
          </a>
          <p>
            Full-screen dialogs provide maximum space for complex content or forms. They're
            particularly useful on mobile devices or when extensive user input is required:
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button variant="contained" onClick={() => setOpenFullScreen(true)}>Open Full-Screen Dialog</Button>
              <Dialog
                open={openFullScreen}
                onClose={() => setOpenFullScreen(false)}
                fullScreen
                maxWidth="lg"
              >
                <DialogTitle>Full-Screen Dialog</DialogTitle>
                <DialogContent>
                  <p>
                    This dialog stretches to full screen. Use it when the user's
                    full attention is needed for complex tasks or on mobile devices.
                  </p>
                </DialogContent>
                <DialogActions style={{ justifyContent: "flex-start", paddingLeft: "24px" }}>
                  <Button variant="contained" onClick={() => setOpenFullScreen(false)}>Cancel</Button>
                  <Button variant="contained" color="secondary" onClick={() => setOpenFullScreen(false)}>Delete</Button>
                </DialogActions>
              </Dialog>
            </SistentThemeProvider>
          </Row>

          <a id="Best Practices">
            <h2>Best Practices</h2>
          </a>
          <br/>
          <h3>When to Use Dialogs</h3>
          <p>
            Use dialogs for critical user decisions, confirmations, and tasks that require
            immediate attention. Avoid overusing dialogs as they can interrupt workflow and
            frustrate users if used inappropriately.
          </p>

          <h3>Content Guidelines</h3>
          <p>
            Keep dialog content focused and concise. Use clear, action-oriented language
            for buttons and provide sufficient context without overwhelming the user.
          </p>

          <h3>Accessibility</h3>
          <p>
            Ensure proper focus management, keyboard navigation, and screen reader support.
            Always provide clear titles and meaningful action button labels.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default DialogGuidance;