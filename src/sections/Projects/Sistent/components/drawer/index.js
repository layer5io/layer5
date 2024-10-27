import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentThemeProvider } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { Table } from "@layer5/sistent";

import TemporaryDrawer from "./DrawerComponent/TempDrawer";
import PersistentDrawer from "./DrawerComponent/PersistentDrawer";
import MiniDrawer from "./DrawerComponent/miniVariant";
import PermanentDrawer from "./DrawerComponent/permanentDrawer";

const SistentDrawer = () => {
  const props = [
    {
      name: "anchor",
      type: "\"left\" | \"right\" | \"top\" | \"bottom\"",
      defaultValue: "\"left\"",
      description: "Determines which edge of the screen the drawer will slide in from.",
    },
    {
      name: "open",
      type: "boolean",
      defaultValue: "",
      description: "Controls whether the drawer is open or closed.",
    },
    {
      name: "onClose",
      type: "(event: MouseEvent | KeyboardEvent) => void",
      defaultValue: "",
      description: "Callback fired when the drawer requests to be closed.",
    },
    {
      name: "onOpen",
      type: "(event: MouseEvent | KeyboardEvent) => void",
      defaultValue: "",
      description: "Callback fired when the drawer requests to be opened (used in SwipeableDrawer).",
    },
    {
      name: "variant",
      type: "\"permanent\" | \"persistent\" | \"temporary\"",
      defaultValue: "\"temporary\"",
      description: "Defines the behavior of the drawer (e.g., persistent drawers stay open).",
    },
    {
      name: "ModalProps",
      type: "object",
      defaultValue: "",
      description: "Properties applied to the modal component used internally by the drawer.",
    },
    {
      name: "keepMounted",
      type: "boolean",
      defaultValue: "true",
      description: "When set to true, the drawer's contents remain mounted in the DOM when closed.",
    },
    {
      name: "disableBackdropTransition",
      type: "boolean",
      defaultValue: "false",
      description: "If true, disables the transition effect when the backdrop is shown or hidden.",
    },
    {
      name: "children",
      type: "ReactNode",
      defaultValue: "",
      description: "The content to be rendered inside the drawer.",
    },
    {
      name: "className",
      type: "string",
      defaultValue: "",
      description: "The CSS class applied to the drawer's root element.",
    },
    {
      name: "style",
      type: "object",
      defaultValue: "",
      description: "Inline styles applied to the drawer's root element.",
    },
  ];

  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Drawer" >
      <div className="content">
        <a id="Identity">
          <h2>Drawer</h2>
        </a>
        <p>
        A Drawer is an interactive component that serves as a sliding panel, providing users with quick access to additional content or navigation options. It helps streamline the user experience by allowing seamless transitions between different sections of an application or website, guiding users effortlessly through their tasks.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/drawer"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/drawer")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/drawer/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/drawer/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/drawer/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/drawer/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
              Drawers are essential components in a user interface, acting as expandable panels that provide quick access to additional content or navigation options. They enhance user experience by allowing seamless transitions between different sections of an application, keeping the main interface uncluttered.
          </p>
          <a id="Props">
            <h2>Props</h2>
          </a>
          <p>
              Here are the commonly used props for the Drawer component, including both standard and swipeable variants:
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Table>
                <div style={{ display: "table", width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                  {/* Table Header */}
                  <div style={{ display: "table-row", fontWeight: "bold" }}>
                    <div style={{ display: "table-cell", padding: "8px", border: "1px solid #ddd" }}>Prop</div>
                    <div style={{ display: "table-cell", padding: "8px", border: "1px solid #ddd" }}>Type</div>
                    <div style={{ display: "table-cell", padding: "8px", border: "1px solid #ddd" }}>Default</div>
                    <div style={{ display: "table-cell", padding: "8px", border: "1px solid #ddd" }}>Description</div>
                  </div>

                  {/* Table Body */}
                  {props.map((prop) => (
                    <div style={{ display: "table-row" }} key={prop.name}>
                      <div style={{ display: "table-cell", padding: "8px", border: "1px solid #ddd" }}>{prop.name}</div>
                      <div style={{ display: "table-cell", padding: "8px", border: "1px solid #ddd" }}>{prop.type}</div>
                      <div style={{ display: "table-cell", padding: "8px", border: "1px solid #ddd" }}>{prop.defaultValue}</div>
                      <div style={{ display: "table-cell", padding: "8px", border: "1px solid #ddd" }}>{prop.description}</div>
                    </div>
                  ))}
                </div>

              </Table>
            </SistentThemeProvider>
          </Row>
          <div style={{ marginBottom: "20px" }}>

            <a id="Types">
              <h2>Types</h2>
            </a>
            <p>
              Here's an explanation of the types of drawers you mentioned, along with their features and use cases:
            </p>
            <h3>Temporary Drawer</h3>
            <ul>
              <li>
                <p>
                Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected.
                The Drawer can be cancelled by clicking the overlay or pressing the Esc key. It closes when an item is selected, handled by controlling the open prop.
                </p>
              </li>
              <li>
                <div style={{ width: "100%", height: "570px", overflow: "hidden", }}>
                  <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                    <TemporaryDrawer/>
                  </SistentThemeProvider>
                </div>
              </li>
            </ul>


            <h3>Mini Variant drawer</h3>
            <ul>
              <li>
                <p>
              In this variation, the persistent navigation drawer changes its width. Its resting state is as a mini-drawer at the same elevation as the content, clipped by the app bar. When expanded, it appears as the standard persistent navigation drawer.
                </p>
              </li>
              <li>
                <p>
              The mini variant is recommended for apps sections that need quick selection access alongside content.
                </p>
              </li>
              <li>
                <div style={{ width: "100%", height: "570px", overflow: "hidden",  }}>
                  <MiniDrawer />
                </div>
              </li>
            </ul>

            <h3>Persistent drawer</h3>
            <ul>
              <li>
                <p>
              Persistent navigation drawers can toggle open or closed. The drawer sits on the same surface elevation as the content. It is closed by default and opens by selecting the menu icon, and stays open until closed by the user. The state of the drawer is remembered from action to action and session to session.
                </p>
              </li>
              <li>
                <p>
              Persistent navigation drawers are acceptable for all sizes larger than mobile. They are not recommended for apps with multiple levels of hierarchy that require using an up arrow for navigation.
                </p>
              </li>
              <li>
                <div style={{ width: "100%", height: "670px", overflow: "hidden",   marginBottom: "20px", }}>
                  <PersistentDrawer />
                </div>
              </li>

            </ul>
            <br/>
            <br/>

            <h3>Permanent drawer</h3>
            <ul>
              <li>
                <p>
              Permanent navigation drawers are always visible and pinned to the left edge, at the same elevation as the content or background. They cannot be closed.
                </p>
              </li>
              <li>
                <p>
              Permanent navigation drawers are the recommended default for desktop.
                </p>
              </li>
              <li>
                <div style={{ width: "100%", height: "570px", overflow: "hidden",   marginBottom: "20px", }}>
                  <PermanentDrawer />
                </div>
              </li>
            </ul>
          </div>

          <a id="Adding Drawers">
            <h2>Adding Drawers</h2>
          </a>
          <p>
            Sometimes, icons are used alongside labels in buttons to pass across
            specific information or relay added information for a higher level
            of understanding and better comprehension. Depending on the
            information being conveyed, the icons can be placed on the left side
            of the label text or on the right side of the label text. No
            specific rules apply apart from spacing tips which may be considered
            here. For full width buttons, if icons must be added, they should be
            centered in the button alongside the label text.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentDrawer;
