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

const SistentDialog = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();
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
          The `Dialog` component provides a modal UI that interrupts the user's flow to display important content or interactions.
          It's commonly used for confirmations, forms, or alerts.
        </p>
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

        <div className="main-content">
          <a id="Basic Usage">
            <h3>Basic Usage</h3>
          </a>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Button onClick={handleOpen}>Open Dialog</Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogContent>This is a simple dialog box.</DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose} color="primary">Confirm</Button>
              </DialogActions>
            </Dialog>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentDialog;