import React, { useState } from "react";
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
import { CodeBlock } from "../button/code-block";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const dialogCodeExample = `
<Button onClick={handleOpen}>Open Dialog</Button>
<Dialog open={open} onClose={handleClose}>
  <DialogTitle>Dialog Title</DialogTitle>
  <DialogContent>This is a dialog example.</DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button color="primary" onClick={handleClose}>Confirm</Button>
  </DialogActions>
</Dialog>
`;

const DialogCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [open, setOpen] = useState(false);

  return (
    <SistentLayout title="Dialog Code">
      <div className="content">
        <a id="Identity">
          <h2>Dialog</h2>
        </a>
        <p>
          This section provides code examples and snippets to help you implement Dialogs quickly.
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
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Button onClick={() => setOpen(true)}>Launch Dialog</Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Sample Dialog</DialogTitle>
              <DialogContent>This is the content of the dialog.</DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button color="primary" onClick={() => setOpen(false)}>Ok</Button>
              </DialogActions>
            </Dialog>
          </SistentThemeProvider>

          <CodeBlock name="dialog-basic" code={dialogCodeExample} />
        </div>
      </div>
    </SistentLayout>
  );
};

export default DialogCode;