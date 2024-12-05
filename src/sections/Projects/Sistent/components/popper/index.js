import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentThemeProvider, Popper, Button, Box } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentPopper = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

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
          <p>
            Poppers are critical for displaying information dynamically and can
            be used in various scenarios like tooltips, dropdowns, and menus. By
            anchoring the content to a reference element, Poppers provide users
            with relevant information as they interact with the interface.
          </p>
          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <p>
            The Popper component should be used in cases where context-sensitive
            information is necessary. Here are common use cases:
          </p>
          <ul>
            <li>Tooltips that provide additional information on hover.</li>
            <li>Dropdown menus for navigation or selections.</li>
            <li>Modals for confirmations or additional content.</li>
          </ul>
          <a id="Basic Example">
            <h3>Basic Example</h3>
          </a>
          <p>
            Below is a simple example of how to use the Popper component to
            display content relative to a button.
          </p>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Popper open={open} anchorEl={anchorEl} placement={placement}>
              <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                The content of the Popper.
              </Box>
            </Popper>
          </SistentThemeProvider>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button
                variant="contained"
                label="Toggle Popper"
                size="medium"
                onClick={handleClick("bottom")}
              />
            </SistentThemeProvider>
          </Row>
          <p>
            The `anchorEl` prop specifies the element to which the Popper will
            be anchored. The `open` prop controls its visibility.
          </p>
          <a id="Styling and Positioning">
            <h3>Styling and Positioning</h3>
          </a>
          <p>
            You can customize the positioning of the Popper using the
            `placement` prop to define where the Popper appears relative to the
            anchor element.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button
                variant="contained"
                label="Toggle Popper"
                size="medium"
                onClick={handleClick("right")}
              />
            </SistentThemeProvider>
          </Row>
          <p>
            The above example demonstrates a Popper positioned right the
            reference button, providing flexibility in its placement.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentPopper;
