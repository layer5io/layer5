import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { SistentThemeProvider } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import ResponsiveAppBar from "./AppBars/BasicAppBarResponsive";
import BasicAppBar from "./AppBars/BasicAppBar";
import SearchAppBar from "./AppBars/AppBarSearch";


export const AppBarGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="App Bar">
      <div className="content">
        <a id="Identity">
          <h2>App Bar</h2>
        </a>
        <p>
        An app bar is a user interface component that serves as a primary navigation and action area in an application. Typically positioned at the top of the screen, it provides access to essential features such as navigation menus, search functions, and action buttons.
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
            onClick={() => navigate("/projects/sistent/components/appbar/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
          For proper application, the App Bar can be used for different purposes to enable easier and consistent navigation when guiding users across digital experiences.
          </p>
          <a id="Function">
            <h2>Function</h2>
          </a>
          <p>
          The function of the App Bar determines its usage and how well suited it is to provide a cohesive navigation experience in a given scenario. Functions or roles that can be assigned to elements in an App Bar include:
          </p>
          <h3>Primary Navigation</h3>
          <p>
          The primary navigation items in the App Bar are used for the most important actions or destinations within the application. It should include key options that help the user navigate through the app effectively. This could apply in cases like when the user needs to access their profile, the home page, or significant features of the app.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <BasicAppBar/>
            </SistentThemeProvider>
          </Row>
          <br/>
          <h3>Secondary Navigation</h3>
          <p>
          Secondary navigation items in the App Bar support the primary navigation by providing additional options or related actions. For instance, if the primary navigation includes 'Settings', the secondary navigation may include 'Profile' or 'Account Management' options that enhance user experience without overshadowing the primary actions.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <ResponsiveAppBar/>
            </SistentThemeProvider>
          </Row>
          <br/>
          <h3>Utility Actions</h3>
          <p>
          Utility actions in the App Bar are used for less prominent but still necessary features such as search, notifications, or help. These elements provide users with quick access to essential tools or information without cluttering the primary navigation.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <SearchAppBar/>
            </SistentThemeProvider>
          </Row>
          <br/>

          <a id="Labeling">
            <h2>Labeling</h2>
          </a>
          <p>
            While the styling of an App Bar gives quick indicators as to how it is
            to be used and what action it helps to complete, the key element
            that helps to provide a complete scope of the purpose of the App Bar is
            the labels it contains. As such, the content of the App Bar should be
            concise and descriptive to inform users of their navigation options and actions.
          </p>
          <h3>Case Style</h3>
          <p>
            Different case styles can be applied to labels in the App Bar to serve as readable
            text that conveys information. However, a rule of thumb is that all
            labels follow one specific case style to enhance consistency and
            reduce distractions for the user. For all of our App Bar labels, title case
            has been used as text labels.
          </p>
          <h3>Font Weight</h3>
          <p>
            Font weight can be used effectively to provide proper emphasis to the
            labels in the App Bar as they convey needed information. Chosen fonts should
            be legible with clear and readable characters that do not distract
            or cause difficulty while being read. Proper exploration should be
            carried out with the intended typeface to ensure it meets standards
            before proceeding to use it across all App Bar labels.
          </p>
          <h3>Content</h3>
          <p>
            Characters in the App Bar should not be full sentences. Instead, words
            or phrases that summarize the purpose of the labels could suffice.
            Total text in an App Bar label is recommended to be an average of 20
            characters long. The language used in the App Bar should also be
            consistent. For instance, if a label has a text of 'Home', this convention
            should be maintained and not changed to something like 'Main Page' later on.
          </p>

        </div>
      </div>
    </SistentLayout>
  );
};
