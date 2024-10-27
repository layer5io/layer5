import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider } from "@layer5/sistent";
import { CodeBlock } from "../button/code-block";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { codes } from "./DrawerComponent/data";
import TemporaryDrawer from "./DrawerComponent/TempDrawer";
import MiniVariantDrawer from "./DrawerComponent/miniVariant";
import PersistentDrawer from "./DrawerComponent/PersistentDrawer";
import PermanentDrawer from "./DrawerComponent/permanentDrawer";

export const DrawerCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Drawer" >
      <div className="content">
        <a id="Identity">
          <h2>Drawer</h2>
        </a>
        <p>
        A drawer is a navigation component that slides in from the side of the screen, providing quick access to additional content or options without disrupting the main view. It helps users explore different sections or perform actions while keeping the primary content accessible and uninterrupted.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/anchor"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/anchor")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/anchor/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/anchor/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/anchor/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/identity/color/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
          Drawers provide a convenient way to organize and display additional content or navigation options. They can be placed in various locations within the user interface, allowing users to access essential information and actions as needed.
          </p>
          <a id="Drawers">
            <h2>Drawers</h2>
          </a>
          <p>
            The button comes in Various types:
          </p>
          <h3>Temporary Drawers</h3>
          <p>
              Temporary drawers are a type of navigation panel that slides in from the edge of the screen and overlays the main content.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <TemporaryDrawer/>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Temporary Drawers" code={codes[0]} />
          </div>
          <h3>Mini-Variant Drawers</h3>
          <p>
              Mini-variant drawers are compact versions of side navigation drawers that provide quick access to essential items while occupying minimal screen space.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <MiniVariantDrawer/>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Mini-Variant Drawers" code={codes[1]} />
          </div>
          <h3>Persistent Drawer</h3>
          <p>
          Persistent navigation drawers can toggle open or closed. The drawer sits on the same surface elevation as the content.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <PersistentDrawer/>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Persistent Drawer" code={codes[2]} />
          </div>

          <h3>Permanent Drawer</h3>
          <p>
              Permanent navigation drawers are always visible and pinned to the left edge, at the same elevation as the content or background. They cannot be closed.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <PermanentDrawer/>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Permanent Drawer" code={codes[2]} />
          </div>


          <h3>Modal Drawer</h3>
          <p>
              Permanent navigation drawers are always visible and pinned to the left edge, at the same elevation as the content or background. They cannot be closed.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                {/* <ModalDrawer/> */}
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Permanent Drawer" code={codes[2]} />
          </div>

        </div>
      </div>
    </SistentLayout>
  );
};
