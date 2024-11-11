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

          <a id="Props">
            <h2>Props</h2>
          </a>
          <p>Props of the Fade component are also available.</p>

          <table>
            <thead>
              <tr style={{ backgroundColor: "#121212" }}>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>open*</code>
                </td>
                <td>
                  <code>bool</code>
                </td>
                <td>-</td>
                <td>
                  If <code>true</code>, the component is shown.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>children</code>
                </td>
                <td>
                  <code>node</code>
                </td>
                <td>-</td>
                <td>The content of the component.</td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>classes</code>
                </td>
                <td>
                  <code>object</code>
                </td>
                <td>-</td>
                <td>
                  Override or extend the styles applied to the component. See
                  CSS classes API below for more details.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>component</code>
                </td>
                <td>
                  <code>elementType</code>
                </td>
                <td>-</td>
                <td>
                  The component used for the root node. Either a string to use
                  an HTML element or a component.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>components</code>
                </td>
                <td>
                  <code>Root?: elementType </code>
                </td>
                <td>
                  <code>{}</code>
                </td>
                <td>
                  The components used for each slot inside.
                  <strong>Deprecated</strong> — Use the <code>slots</code> prop
                  instead. This prop will be removed in v7. See Migrating from
                  deprecated APIs for more details.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>componentsProps</code>
                </td>
                <td>
                  <code>root?: object </code>
                </td>
                <td>
                  <code>{}</code>
                </td>
                <td>
                  The extra props for the slot components. You can override the
                  existing props or add new ones.
                  <strong>Deprecated</strong> — Use the <code>slotProps</code>{" "}
                  prop instead. This prop will be removed in v7.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>invisible</code>
                </td>
                <td>
                  <code>bool</code>
                </td>
                <td>
                  <code>false</code>
                </td>
                <td>
                  If <code>true</code>, the backdrop is invisible, useful for
                  popovers or custom selects.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>slotProps</code>
                </td>
                <td>
                  <code>root?: func | object, transition?: func | object</code>
                </td>
                <td>
                  <code>{}</code>
                </td>
                <td>The props used for each slot inside the component.</td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>slots</code>
                </td>
                <td>
                  <code>root?: elementType, transition?: elementType</code>
                </td>
                <td>
                  <code>{}</code>
                </td>
                <td>The components used for each slot inside.</td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>sx</code>
                </td>
                <td>
                  <code>Array&lt;func | object | bool&gt; | func | object</code>
                </td>
                <td>-</td>
                <td>
                  The system prop for defining system overrides and additional
                  CSS styles. See the{" "}
                  <a href="https://mui.com/system/sx/">sx page</a> for more
                  details.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>TransitionComponent</code>
                </td>
                <td>
                  <code>elementType</code>
                </td>
                <td>
                  <code>Fade</code>
                </td>
                <td>
                  The component used for the transition. Refer to the guide for
                  component requirements.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>transitionDuration</code>
                </td>
                <td>
                  <code>
                    number | appear?: number, enter?: number, exit?: number{" "}
                  </code>
                </td>
                <td>-</td>
                <td>
                  Duration for the transition, in milliseconds. Specify a single
                  timeout or individual times.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentBackdrop;
