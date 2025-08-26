import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  SistentThemeProvider
} from "@sistent/sistent";
import { Row } from "../../../../../reusecore/Layout";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentDialog = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              location.pathname ===
              "/projects/sistent/components/dialog/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/dialog/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Dialog components provide modal windows that focus user attention on specific tasks
            or information. They overlay the main content and require user interaction before
            returning to the underlying interface.
          </p>
          <a id="Basic Example">
            <h3>Basic Example</h3>
          </a>
          <p>
            Below is a simple example of how to use the Dialog component.
          </p>
          <br />
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button variant="contained" onClick={handleOpen}>Open Dialog</Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Confirm Action</DialogTitle>
                <DialogContent>
                  Do you want to proceed with this action?
                </DialogContent>
                <DialogActions>
                  <Button variant="contained" onClick={handleClose}>Cancel</Button>
                  <Button variant="contained" color="primary" onClick={handleClose}>
                    Confirm
                  </Button>
                </DialogActions>
              </Dialog>
            </SistentThemeProvider>
          </Row>
          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <p>
            The component can be used in several main variants:
          </p>
          <ul>
            <li><p><b>Standard:</b> Basic modal dialog for confirmations and simple interactions</p></li>
            <li><p><b>Form:</b> Dialog containing input fields for data collection</p></li>
            <li><p><b>Full-screen:</b> Expanded dialog for complex forms or mobile interfaces</p></li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentDialog;