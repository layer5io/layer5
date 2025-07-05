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
    <SistentLayout title="Dialog">
      <div className="content">
        <a id="Functionality">
          <h2>Dialog Functionality</h2>
        </a>
        <p>
          Dialogs interrupt users with critical information or actions. 
          Use them for alerts, confirmations, or forms that require immediate attention.
        </p>

        <Row $Hcenter className="image-container">
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Button onClick={() => setOpen(true)}>Open Dialog</Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Delete Item</DialogTitle>
              <DialogContent>Are you sure you want to delete this item?</DialogContent>
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