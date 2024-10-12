import React, { useRef, useState } from "react";
import { navigate } from "gatsby";
import { SistentThemeProvider, Popper, Button } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import { CodeBlock } from "../button/code-block";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `<Button
    variant="contained"
    label="Toggle Popper"
    size="medium"
    onClick={handleClick}
    ref={anchorRef}
  />
  <Popper
    open={open}
    anchorEl={anchorRef.current}
    placement="top"
  >
    <div
      style={{
        padding: "10px",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      I'm positioned above!
    </div>
  </Popper>`,
  `<Button
    variant="contained"
    label="Toggle Popper"
    size="medium"
    onClick={handleClick}
    ref={anchorRef}
  />
  <Popper
    open={open}
    anchorEl={anchorRef.current}
    placement="top"
  >
    <div
      style={{
        padding: "10px",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      I'm positioned above!
    </div>
  </Popper>`,
];

export const PooperCode = () => {
  const { isDark } = useStyledDarkMode();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
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
            <div className="showcase">
              <div className="items">
                <Button
                  variant="contained"
                  label="Toggle Popper"
                  size="medium"
                  onClick={handleClick}
                  ref={anchorRef}
                />
                <Popper open={open}>
                  <div
                    style={{
                      padding: "10px",
                      backgroundColor: "#fff",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  >
                    Hello, I'm a Popper!
                  </div>
                </Popper>
              </div>
              <CodeBlock name="Basic Popper" code={codes[0]} />
            </div>
            <a id="PositionedExample">
              <h3>Positioned Example</h3>
            </a>
            <p>
              You can specify the position of the Popper using the{" "}
              <code>placement</code> prop. Here's an example of a Popper
              positioned above its anchor:
            </p>
            <div className="showcase">
              <div className="items">
                <Button
                  variant="contained"
                  label="Toggle Popper"
                  size="medium"
                  onClick={handleClick}
                  ref={anchorRef}
                />
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  placement="top"
                >
                  <div
                    style={{
                      padding: "10px",
                      backgroundColor: "#fff",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  >
                    I'm positioned above!
                  </div>
                </Popper>
              </div>
              <CodeBlock name="PositionedExample" code={codes[1]} />
            </div>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};
