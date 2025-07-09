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
const [open, setOpen] = useState(false);

const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

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
  const [openFull, setOpenFull] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SistentLayout title="Dialog Code Examples">
      <div className="content">
        <a id="Dialog Code">
          <h2>Dialog Code Implementation</h2>
        </a>
        <p>
          The code section demonstrates how to use the Dialog component programmatically. We define state variables
          to control its visibility and bind open/close handlers to button actions. This is the typical pattern when
          using modal components in React applications.
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
          <p>Here is a live example of the Dialog component in action:</p>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Button onClick={handleOpen}>Open Dialog</Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Confirm Action</DialogTitle>
              <DialogContent>Do you want to proceed with this action?</DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button color="primary" onClick={handleClose}>Confirm</Button>
              </DialogActions>
            </Dialog>
          </SistentThemeProvider>

          <h3 style={{ marginTop: "2rem" }}>Code Snippet</h3>
          <CodeBlock name="dialog-basic" code={dialogCodeExample} />

          {/* Full Screen Dialog */}
          <h3 style={{ marginTop: "3rem" }}>Full-Screen Dialog Example</h3>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Button onClick={() => setOpenFull(true)}>Open Full-Screen Dialog</Button>
            <Dialog
              open={openFull}
              onClose={() => setOpenFull(false)}
              style={{ width: "100%", height: "100vh", maxWidth: "none" }}
            >
              <DialogTitle>Full-Screen Dialog</DialogTitle>
              <DialogContent>
                <p>This dialog stretches to full screen. Use it when the user's full attention is needed.</p>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenFull(false)}>Cancel</Button>
                <Button color="primary" onClick={() => setOpenFull(false)}>Save</Button>
              </DialogActions>
            </Dialog>
          </SistentThemeProvider>

          {/* Form Inside Dialog */}
          <h3 style={{ marginTop: "3rem" }}>Dialog with Form Example</h3>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Button onClick={() => setOpenForm(true)}>Open Form Dialog</Button>
            <Dialog open={openForm} onClose={() => setOpenForm(false)}>
              <DialogTitle>Subscribe</DialogTitle>
              <DialogContent>
                <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <label>
                    Email Address:
                    <input type="email" placeholder="you@example.com" style={{ width: "100%", padding: "0.5rem" }} />
                  </label>
                  <label>
                    Name:
                    <input type="text" placeholder="John Doe" style={{ width: "100%", padding: "0.5rem" }} />
                  </label>
                </form>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenForm(false)}>Cancel</Button>
                <Button color="primary" onClick={() => setOpenForm(false)}>Subscribe</Button>
              </DialogActions>
            </Dialog>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};

export default DialogCode;
