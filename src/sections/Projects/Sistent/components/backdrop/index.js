import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import {
  SistentThemeProvider,
  Button,
  Backdrop,
  CircularProgress,
} from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentBackdrop = () => {
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
        <p>
          The Backdrop component overlays a dimmed background across the screen
          to direct focus to specific content in the foreground, like loading
          indicators, modals, or dialogs. It visually signals that the
          background content is temporarily inaccessible. The Backdrop can be
          closed when clicked, depending on the close action set in its props.
        </p>
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
            The Backdrop component in React is used to overlay a dimmed
            background across the entire screen, guiding the user's focus to a
            specific element or content in the foreground. This component is
            often utilized for scenarios that require a change in the
            application’s state, such as showing loading indicators, modals,
            dialogs, or other focused content.
          </p>
          <p>
            In its simplest use, a Backdrop dims the background, enhancing the
            visibility of what’s in the foreground while signaling that the
            underlying content is temporarily inaccessible. When Backdrop is
            open, users can click on it to close it, depending on how the close
            action is handled in the component’s props.
          </p>
          <a id="Usage">
            <h2>How to use</h2>
          </a>
          <p>
            The demo below shows a basic Backdrop with a Circular Progress
            component in the foreground to indicate a loading state. After
            clicking Show Backdrop, you can click anywhere on the page to close
            it.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
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
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentBackdrop;
