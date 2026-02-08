import React, { useState } from "react";
import { Backdrop, Button, CircularProgress } from "@sistent/sistent";

const BackdropDemo = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop
        sx={(theme) => ({
          color: "#fff",
          zIndex: theme.zIndex.drawer + 1,
        })}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default BackdropDemo;
