import React, { useState } from "react";
import { Popper, Button, Box, Grid } from "@sistent/sistent";

const PopperDemo = ({ type }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [placement, setPlacement] = useState("bottom");
  const [open, setOpen] = useState(false);

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleBasicClick = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => !prev);
  }

  if (type === "basic") {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            onClick={handleBasicClick}
            label="Toggle Popper"
          >
             Toggle Popper
          </Button>
          <Popper open={open} anchorEl={anchorEl} placement="bottom">
            <Box sx={{ border: 1, p: 2, bgcolor: "background.paper" }}>
              The content of the Popper.
            </Box>
          </Popper>
      </Box>
    );
  }

  if (type === "positioned") {
    return (
      <Box sx={{ width: 500, margin: 'auto' }}>
        <Popper open={open} anchorEl={anchorEl} placement={placement}>
          <Box sx={{ border: 1, p: 2, bgcolor: "background.paper" }}>
            The content of the Popper.
          </Box>
        </Popper>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item>
            <Button
              variant="text"
              label="top-start"
              onClick={handleClick("top-start")}
            > top-start </Button>
            <Button
              variant="text"
              label="top"
              onClick={handleClick("top")}
            > top </Button>
            <Button
              variant="text"
              label="top-end"
              onClick={handleClick("top-end")}
            > top-end </Button>
          </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={6}>
            <Button
              variant="text"
              label="left-start"
              onClick={handleClick("left-start")}
            > left-start </Button>
            <br />
            <Button
              variant="text"
              label="left"
              onClick={handleClick("left")}
            > left </Button>
            <br />
            <Button
              variant="text"
              label="left-end"
              onClick={handleClick("left-end")}
            > left-end </Button>
          </Grid>
          <Grid
            item
            container
            xs={6}
            direction="column"
            sx={{ alignItems: "flex-end" }}
          >
            <Grid item>
              <Button
                variant="text"
                label="right-start"
                onClick={handleClick("right-start")}
              > right-start </Button>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                label="right"
                onClick={handleClick("right")}
              > right </Button>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                label="right-end"
                onClick={handleClick("right-end")}
              > right-end </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item>
            <Button
              variant="text"
              label="bottom-start"
              onClick={handleClick("bottom-start")}
            > bottom-start </Button>
            <Button
              variant="text"
              label="bottom"
              onClick={handleClick("bottom")}
            > bottom </Button>
            <Button
              variant="text"
              label="bottom-end"
              onClick={handleClick("bottom-end")}
            > bottom-end </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }

  return null;
};

export default PopperDemo;
