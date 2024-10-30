import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider } from "@layer5/sistent";
import {CodeBlock} from '../button/code-block.js';
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { codes } from "./AppBars/data";
import BasicAppBar from "./AppBars/BasicAppBar";
import ResponsiveAppBar from "./AppBars/BasicAppBarResponsive";
import SearchAppBar from "./AppBars/AppBarSearch";
import BottomAppBar from "./AppBars/BottomAppbar";


export const AppBarCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="App Bar" >
      <div className="content">
        <a id="Identity">
          <h2>App Bar</h2>
        </a>
        <p>
          An App Bar is an interactive element that provides a consistent navigation framework within an application. It triggers specific actions, directs users to key areas of the app, and indicates the next steps in the user journey. The App Bar enhances usability by offering quick access to essential features and ensuring a seamless experience as users navigate through different sections.
        </p>

        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/appbar"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/appbar")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/appbar/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/appbar/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/appbar/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/identity/color/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
          An App Bar is an interactive element that provides a consistent navigation framework within an application.
          </p>
          <a id="Basic Button">
            <h2>App Bars</h2>
          </a>
          <p>The App Bars comes in various forms: </p>
          <h3>Basic App Bar</h3>
          <p>
            A Basic App Bar serves as a fundamental navigation tool in an application, offering users easy access to primary actions and features. It typically includes branding, navigation icons, and interactive elements to enhance the overall user experience.
          </p>

          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <BasicAppBar/>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="filled-button" code={codes[0]} />
          </div>
          <h3>Basic App Bar with Menu</h3>
          <p>
            A Basic App Bar with Menu provide users with additional navigation options and functionalities. This design allows for a cleaner interface by consolidating multiple links into a single, accessible menu, ensuring a more organized and efficient user experience.
          </p>

          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <ResponsiveAppBar/>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="outlined-button" code={codes[1]} />
          </div>
          <h3>Search App Bar</h3>
          <p>
          An App Bar with a search menu typically includes a top navigation bar that contains a search field for user input, along with icons or links for navigation. It allows users to quickly access a search feature while also providing key site navigation options.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <SearchAppBar/>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Search App Bar" code={codes[2]} />
          </div>
          <h3> Bottom App Bar</h3>
          <p>
          An App Bar with a search menu typically includes a top navigation bar that contains a search field for user input, along with icons or links for navigation. It allows users to quickly access a search feature while also providing key site navigation options.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <BottomAppBar/>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Bottom AppBar" code={codes[3]} />
          </div>

        </div>
      </div>
    </SistentLayout>
  );
};
