import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, SistentThemeProvider } from "@sistent/sistent";
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
          <h2>Understanding the Dialog Component</h2>
        </a>
        <p>
          Dialogs are modal components that appear on top of the main content to convey critical information
          or to prompt the user for a decision. They block interaction with the rest of the interface until
          dismissed or confirmed. In user interface design, they serve an essential role in making applications
          interactive and responsive to user inputs.
        </p>
        <p>
          The Dialog component in the Sistent design system is flexible and customizable, providing developers
          with a consistent and accessible modal window to use across various parts of the application. It can be
          used for confirmations, forms, alerts, and even feature walkthroughs. Proper use of dialogs ensures that
          users are clearly guided in their interactions without overwhelming them.
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
            <h3>Basic Example</h3>
          </a>
          <p>
            The following example demonstrates a simple usage of the Dialog component. It includes a button
            that, when clicked, triggers a modal containing a title, some content, and two action buttons.
          </p>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Button onClick={handleOpen}>Open Dialog</Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogContent>This is a simple dialog box used for demonstration purposes.</DialogContent>
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
