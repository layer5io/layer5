import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Input } from "@sistent/sistent";

const DialogDemo = ({ type = "basic" }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (type === "form") {
    return (
      <>
        <Button variant="contained" onClick={handleOpen}>Open Form Dialog</Button>
        <Dialog open={open} onClose={handleClose}>
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
            <Button variant="contained" onClick={handleClose}>Cancel</Button>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

  if (type === "fullscreen") {
    return (
      <>
        <Button variant="contained" onClick={handleOpen}>Open Full-Screen Dialog</Button>
        <Dialog
          open={open}
          onClose={handleClose}
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
            <Button variant="contained" onClick={handleClose}>Cancel</Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>Delete</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

  return (
    <>
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
    </>
  );
};

export default DialogDemo;
