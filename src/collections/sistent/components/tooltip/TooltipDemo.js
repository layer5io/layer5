import React from "react";
import { CustomTooltip, Button, Box, Grid, Typography } from "@sistent/sistent";

const TooltipDemo = ({ type }) => {
  if (type === "basic") {
    return (
      <CustomTooltip title="Submit">
        <span>
            <Button variant="contained" label="Submit" size="medium" />
        </span>
      </CustomTooltip>
    );
  }

  if (type === "custom-position") {
     return (
        <CustomTooltip title="Top Tooltip" placement="top">
            <span>
                <Button variant="contained" size="medium">
                Delete
                </Button>
            </span>
        </CustomTooltip>
     );
  }

  if (type === "disabled") {
      return (
        <CustomTooltip title="Disabled Tooltip">
            <span>
                <Button variant="text" size="medium" disabled>
                Disabled Button
                </Button>
            </span>
        </CustomTooltip>
      );
  }
  
  if (type === "offset") {
      return (
        <CustomTooltip
            title="Add"
            slotProps={{
            popper: {
                modifiers: [
                {
                    name: "offset",
                    options: {
                    offset: [0, -14],
                    },
                },
                ],
            },
            }}
        >
            <span>
                <Button variant="contained" size="medium">
                    Offset
                </Button>
            </span>
        </CustomTooltip>
      );
  }
  
  if (type === "variable-width") {
      return (
        <Box
            sx={{
            display: "flex",
            "& > *": {
                m: 1,
            },
            }}
        >
            <CustomTooltip title="Add" variant="standard">
            <span>
                <Button variant="contained" size="medium">
                standard
                </Button>
            </span>
            </CustomTooltip>
            <CustomTooltip title="Add" variant="small">
            <span>
                <Button variant="contained" size="medium">
                small
                </Button>
            </span>
            </CustomTooltip>
        </Box>
      );
  }

  if (type === "follow-cursor") {
      return (
        <CustomTooltip title="Follow Cursor" followCursor>
            <span>
                <Button variant="contained" size="medium">
                Button
                </Button>
            </span>
        </CustomTooltip>
      );
  }
  
  if (type === "show-hide") {
      return (
        <CustomTooltip title="Add" enterDelay={500} leaveDelay={200}>
            <span>
                <Button variant="text" size="medium">
                [500MS, 200MS]
                </Button>
            </span>
        </CustomTooltip>
      );
  }
  
  if (type === "styled") {
      return (
        <CustomTooltip
            title={<Typography color="GrayText">Custom Tooltip</Typography>}
        >
            <span>
                <Button variant="text" label="Button" size="medium" />
            </span>
        </CustomTooltip>
      );
  }
  
  if (type === "html") {
      return (
        <CustomTooltip
            title={
            <React.Fragment>
                <Typography color="inherit">
                Tooltip with HTML Support
                </Typography>
                <em>{"And here's"}</em> <b>{"some"}</b>{" "}
                <a href="#">{"amazing content"}</a>. {"It's very engaging. Right?"}
            </React.Fragment>
            }
        >
            <span>
            <Button variant="text" label="Customize" size="medium" />
            </span>
        </CustomTooltip>
      );
  }

  if (type === "markdown") {
      return (
        <CustomTooltip
            title={`### Tooltip with Markdown 
*And here's* **some** [amazing content](#) 
It's very engaging. Right?`}
        >
            <span>
                <Button variant="text" label="Customize" size="medium" />
            </span>
        </CustomTooltip>
      );
  }

  if (type === "triggers") {
      return (
        <Grid container sx={{ justifyContent: "space-evenly" }}>
            <Grid item>
                <CustomTooltip disableFocusListener title="Add">
                <span>
                    <Button variant="contained" size="medium">
                    Hover or touch
                    </Button>
                </span>
                </CustomTooltip>
            </Grid>
            <Grid item>
                <CustomTooltip disableHoverListener title="Add">
                <span>
                    <Button variant="contained" size="medium">
                    Focus or touch
                    </Button>
                </span>
                </CustomTooltip>
            </Grid>
            <Grid item>
                <CustomTooltip disableTouchListener title="Add">
                <span>
                    <Button variant="contained" size="medium">
                    Hover or Focus
                    </Button>
                </span>
                </CustomTooltip>
            </Grid>
        </Grid>
      );
  }

  if (type === "positioned") {
    return (
      <Box sx={{ width: 500 }}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item>
            <CustomTooltip title="Add" placement="top-start">
              <span>
                <Button>top-start</Button>
              </span>
            </CustomTooltip>
            <CustomTooltip title="Add" placement="top">
              <span>
                <Button>top</Button>
              </span>
            </CustomTooltip>
            <CustomTooltip title="Add" placement="top-end">
              <span>
                <Button>top-end</Button>
              </span>
            </CustomTooltip>
          </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={6}>
            <CustomTooltip title="Add" placement="left-start">
              <span>
                <Button>left-start</Button>
              </span>
            </CustomTooltip>
            <br />
            <CustomTooltip title="Add" placement="left">
              <span>
                <Button>left</Button>
              </span>
            </CustomTooltip>
            <br />
            <CustomTooltip title="Add" placement="left-end">
              <span>
                <Button>left-end</Button>
              </span>
            </CustomTooltip>
          </Grid>
          <Grid
            item
            container
            xs={6}
            direction="column"
            sx={{ alignItems: "flex-end" }}
          >
            <Grid item>
              <CustomTooltip title="Add" placement="right-start">
                <span>
                  <Button>right-start</Button>
                </span>
              </CustomTooltip>
            </Grid>
            <Grid item>
              <CustomTooltip title="Add" placement="right">
                <span>
                  <Button>right</Button>
                </span>
              </CustomTooltip>
            </Grid>
            <Grid item>
              <CustomTooltip title="Add" placement="right-end">
                <span>
                  <Button>right-end</Button>
                </span>
              </CustomTooltip>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item>
            <CustomTooltip title="Add" placement="bottom-start">
              <span>
                <Button>bottom-start</Button>
              </span>
            </CustomTooltip>
            <CustomTooltip title="Add" placement="bottom">
              <span>
                <Button>bottom</Button>
              </span>
            </CustomTooltip>
            <CustomTooltip title="Add" placement="bottom-end">
              <span>
                <Button>bottom-end</Button>
              </span>
            </CustomTooltip>
          </Grid>
        </Grid>
      </Box>
    );
  }

  return null;
};

export default TooltipDemo;
