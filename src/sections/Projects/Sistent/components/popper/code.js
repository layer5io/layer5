import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import {
  SistentThemeProvider,
  Popper,
  Button,
  Box,
  Grid,
} from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import { CodeBlock } from "../button/code-block";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `<Button
    variant="contained"
    label="Toggle Popper"
    size="medium"
    onClick={handleClick()}
  />
  <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <Popper open={open} anchorEl={anchorEl}>
      <Box sx={{ border: 1, p: 2, bgcolor: "background.paper" }}>
        The content of the Popper.
      </Box>
    </Popper>
  </SistentThemeProvider>`,
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <Popper open={open} anchorEl={anchorEl} placement={placement}>
      <Box sx={{ border: 1, p: 2, bgcolor: "background.paper" }}>
        The content of the Popper.
      </Box>
    </Popper>
  </SistentThemeProvider>
  <Box sx={{ width: 500 }}>
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid item>
        <Button
          variant="text"
          label="top-start"
          size="medium"
          onClick={handleClick("top-start")}
        />
        <Button
          variant="text"
          label="top"
          size="medium"
          onClick={handleClick("top")}
        />
        <Button
          variant="text"
          label="top-end"
          size="medium"
          onClick={handleClick("top-end")}
        />
      </Grid>
    </Grid>
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid item xs={6}>
        <Button
          variant="text"
          label="left-start"
          size="medium"
          onClick={handleClick("left-start")}
        />
        <br />
        <Button
          variant="text"
          label="left"
          size="medium"
          onClick={handleClick("left")}
        />
        <br />
        <Button
          variant="text"
          label="left-end"
          size="medium"
          onClick={handleClick("left-end")}
        />
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
            size="medium"
            onClick={handleClick("right-start")}
          />
        </Grid>
        <Grid item>
          <Button
            variant="text"
            label="right"
            size="medium"
            onClick={handleClick("right")}
          />
        </Grid>
        <Grid item>
          <Button
            variant="text"
            label="right-end"
            size="medium"
            onClick={handleClick("right-end")}
          />
        </Grid>
      </Grid>
    </Grid>
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid item>
        <Button
          variant="text"
          label="bottom-start"
          size="medium"
          onClick={handleClick("bottom-start")}
        />
        <Button
          variant="text"
          label="bottom"
          size="medium"
          onClick={handleClick("bottom")}
        />
        <Button
          variant="text"
          label="bottom-end"
          size="medium"
          onClick={handleClick("bottom-end")}
        />
      </Grid>
    </Grid>
  </Box>`,
];

const PooperCode = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);
  const [placement, setPlacement] = useState("bottom");
  const [open, setOpen] = useState(false);

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <SistentLayout title="Popper">
      <div className="content">
        <a id="Identity">
          <h2>Popper</h2>
        </a>
        <p>
          The Popper component provides a mechanism for positioning content
          dynamically relative to a reference element. It is commonly used for
          tooltips, dropdowns, and modals, enhancing the user experience by
          presenting contextual information without overcrowding the interface.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/popper"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/popper")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/popper/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/popper/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/popper/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/popper/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <p>
              Here’s a simple example of how to use the Popper component. In
              this example, clicking the button toggles the visibility of the
              popper:
            </p>
            <a id="Basic Popper">
              <h3>Basic Popper</h3>
            </a>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Popper open={open} anchorEl={anchorEl} placement={placement}>
                <Box sx={{ border: 1, p: 2, bgcolor: "background.paper" }}>
                  The content of the Popper.
                </Box>
              </Popper>
            </SistentThemeProvider>
            <div className="showcase">
              <div className="items">
                <Button
                  variant="contained"
                  label="Toggle Popper"
                  size="medium"
                  onClick={handleClick("bottom")}
                />
              </div>
              <CodeBlock name="basic-popper" code={codes[0]} />
            </div>
            <a id="Positioned Example">
              <h3>Positioned Example</h3>
            </a>
            <p>
              You can specify the position of the Popper using the{" "}
              <code>placement</code> prop. Here's an example of a Popper
              positioned above its anchor:
            </p>
            <div className="showcase">
              <div className="items">
                <Box sx={{ width: 500 }}>
                  <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item>
                      <Button
                        variant="text"
                        label="top-start"
                        size="medium"
                        onClick={handleClick("top-start")}
                      />
                      <Button
                        variant="text"
                        label="top"
                        size="medium"
                        onClick={handleClick("top")}
                      />
                      <Button
                        variant="text"
                        label="top-end"
                        size="medium"
                        onClick={handleClick("top-end")}
                      />
                    </Grid>
                  </Grid>
                  <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item xs={6}>
                      <Button
                        variant="text"
                        label="left-start"
                        size="medium"
                        onClick={handleClick("left-start")}
                      />
                      <br />
                      <Button
                        variant="text"
                        label="left"
                        size="medium"
                        onClick={handleClick("left")}
                      />
                      <br />
                      <Button
                        variant="text"
                        label="left-end"
                        size="medium"
                        onClick={handleClick("left-end")}
                      />
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
                          size="medium"
                          onClick={handleClick("right-start")}
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          variant="text"
                          label="right"
                          size="medium"
                          onClick={handleClick("right")}
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          variant="text"
                          label="right-end"
                          size="medium"
                          onClick={handleClick("right-end")}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item>
                      <Button
                        variant="text"
                        label="bottom-start"
                        size="medium"
                        onClick={handleClick("bottom-start")}
                      />
                      <Button
                        variant="text"
                        label="bottom"
                        size="medium"
                        onClick={handleClick("bottom")}
                      />
                      <Button
                        variant="text"
                        label="bottom-end"
                        size="medium"
                        onClick={handleClick("bottom-end")}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </div>
              <CodeBlock name="positioned-example" code={codes[1]} />
            </div>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};

export default PooperCode;
