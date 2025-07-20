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
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { Row } from "../../../../../reusecore/Layout";

const DialogGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [open, setOpen] = React.useState(false);

  return (
    <SistentLayout title="Dialog Guidance">
      <div className="content">
        <a id="Functionality">
          <h2>Design Guidelines and Best Practices</h2>
        </a>
        <p>
          When designing dialog components, it is crucial to consider their impact on user experience. Dialogs
          should be used thoughtfully to avoid frustrating users. Below are some best practices for implementing dialogs:
        </p>
        <ul>
          <li>Use dialogs for critical user decisions such as confirmations, deletions, and irreversible actions.</li>
          <li>Keep dialog content focused and brief. Do not overload with unnecessary information.</li>
          <li>Ensure accessibility by including focus management and keyboard navigation.</li>
          <li>Provide clear and distinct action buttons such as "Cancel" and "Confirm" with appropriate labels.</li>
          <li>Do not use dialogs for casual notifications—use banners or toast messages instead.</li>
        </ul>

        <div className="filterBtns">
          <TabButton
            title="Overview"
            className={location.pathname === "/projects/sistent/components/dialog" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/dialog")}
          />
          <TabButton
            title="Guidance"
            className={location.pathname === "/projects/sistent/components/dialog/guidance" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/dialog/guidance")}
          />
          <TabButton
            title="Code"
            className={location.pathname === "/projects/sistent/components/dialog/code" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/dialog/code")}
          />
        </div>

        <Row $Hcenter className="image-container">
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Button onClick={() => setOpen(true)}>Open Dialog</Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Delete Item</DialogTitle>
              <DialogContent>Are you sure you want to delete this item? This action cannot be undone.</DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button color="secondary" onClick={() => setOpen(false)}>Delete</Button>
              </DialogActions>
            </Dialog>
          </SistentThemeProvider>
        </Row>
      </div>
    </SistentLayout>
  );
};

export default DialogGuidance;
