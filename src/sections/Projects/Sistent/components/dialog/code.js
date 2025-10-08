import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  SistentThemeProvider,
  Input
} from "@sistent/sistent";

import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { CodeBlock } from "../button/code-block";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `const [open, setOpen] = useState(false);

const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

<Button onClick={handleOpen}>Open Dialog</Button>
<Dialog open={open} onClose={handleClose}>
  <DialogTitle>Confirm Action</DialogTitle>
  <DialogContent>
    Do you want to proceed with this action?
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button color="primary" onClick={handleClose}>
      Confirm
    </Button>
  </DialogActions>
</Dialog>`,
  `const [openFull, setOpenFull] = useState(false);

<Button onClick={() => setOpenFull(true)}>
  Open Full-Screen Dialog
</Button>
<Dialog
  open={openFull}
  onClose={() => setOpenFull(false)}
  fullScreen
  maxWidth="lg"
>
  <DialogTitle>Full-Screen Dialog</DialogTitle>
  <DialogContent>
    <p>
      This dialog stretches to full screen. Use it when the 
      user's full attention is needed.
    </p>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpenFull(false)}>Cancel</Button>
    <Button color="primary" onClick={() => setOpenFull(false)}>
      Save
    </Button>
  </DialogActions>
</Dialog>`,
  `const [openForm, setOpenForm] = useState(false);

<Button onClick={() => setOpenForm(true)}>
  Open Form Dialog
</Button>
<Dialog open={openForm} onClose={() => setOpenForm(false)}>
  <DialogTitle>Subscribe</DialogTitle>
  <DialogContent>
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
    <Button onClick={() => setOpenForm(false)}>Cancel</Button>
    <Button color="primary" onClick={() => setOpenForm(false)}>
      Subscribe
    </Button>
  </DialogActions>
</Dialog>`
];

const DialogCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [open, setOpen] = useState(false);
  const [openFull, setOpenFull] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SistentLayout title="Dialog">
      <div className="content">
        <a id="Identity">
          <h2>Dialog</h2>
        </a>
        <p>
          Dialog components provide modal windows that focus user attention on specific tasks
          or information. They overlay the main content and require user interaction before
          returning to the underlying interface.
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
              location.pathname === "/projects/sistent/components/dialog/guidance"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/dialog/guidance")}
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
            The <code>Dialog</code> component is essential for creating focused user experiences
            that require immediate attention. It provides a controlled way to present forms,
            confirmations, and detailed information without navigating away from the current context.
          </p>

          <a id="Basic Dialog">
            <h2>Basic Dialog</h2>
          </a>
          <p>
            A simple modal dialog with title, content, and action buttons. This is the most
            common pattern for confirmations and simple interactions.
          </p>
          <div className="showcase">
            <div className="items">
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
            </div>
            <CodeBlock name="dialog-basic" code={codes[0]} />
          </div>

          <a id="Full Screen Dialog">
            <h2>Full-Screen Dialog</h2>
          </a>
          <p>
            Full-screen dialogs are useful for complex forms or when you need the user's
            complete attention. They take up the entire viewport and are ideal for mobile devices.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button variant="contained" onClick={() => setOpenFull(true)}>
                  Open Full-Screen Dialog
                </Button>
                <Dialog
                  open={openFull}
                  onClose={() => setOpenFull(false)}
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
                    <Button variant="contained" onClick={() => setOpenFull(false)}>Cancel</Button>
                    <Button variant="contained" color="primary" onClick={() => setOpenFull(false)}>
                      Save
                    </Button>
                  </DialogActions>
                </Dialog>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="dialog-fullscreen" code={codes[1]} />
          </div>

          <a id="Form Dialog">
            <h2>Dialog with Form</h2>
          </a>
          <p>
            Dialogs can contain forms for collecting user input. This pattern is common
            for creating, editing, or subscribing workflows that don't require a full page.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button variant="contained" onClick={() => setOpenForm(true)}>
                  Open Form Dialog
                </Button>
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
            </div>
            <CodeBlock name="dialog-form" code={codes[2]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default DialogCode;