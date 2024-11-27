import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
import React from "react";

import { Container, SistentThemeProvider } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import { CodeBlock } from "../button/code-block";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

import { Backdrop, Button, CircularProgress } from "@layer5/sistent";

const codes = [
  `
  import { Backdrop, Button, CircularProgress } from "@layer5/sistent";

  // declare states and functions to handle open and close operation

  /*
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  */
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
</div>`,
];

const BackdropCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <SistentLayout title="Backdrop">
      <div className="content">
        <a id="Identity">
          <h2>Backdrop</h2>
        </a>
        <p></p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/backdrop"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/backdrop")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/backdrop/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/backdrop/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/backdrop/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/backdrop/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The Backdrop component overlays a dimmed background across the
            screen to direct focus to specific content in the foreground, like
            loading indicators, modals, or dialogs. It visually signals that the
            background content is temporarily inaccessible. The Backdrop can be
            closed when clicked, depending on the close action set in its props.
          </p>
          <a id="Backdrop">
            <h2>Backdrop Example</h2>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Container maxWidth="sm">
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
                </Container>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="container-fluid-sm" code={codes[0]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default BackdropCode;