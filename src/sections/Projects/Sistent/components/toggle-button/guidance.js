import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { ToggleButton, ToggleButtonGroup, SistentThemeProvider } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const ToggleButtonGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="ToggleButton">
      <div className="content">
        <a id="Identity">
          <h2>ToggleButton</h2>
        </a>
        <p>
        The `ToggleButton` and `ToggleButtonGroup` are versatile components
            that can be used for a wide range of applications. Their intuitive
            design ensures users can make selections easily and confidently.
            Whether it's enabling a setting, selecting a mode, or choosing
            multiple options, these components are built to enhance user
            experience across different scenarios.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/toggle-button"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/toggle-button")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/toggle-button/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/toggle-button/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/toggle-button/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/toggle-button/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <a id="Function">
            <h2>Functionality</h2>
          </a>
          <p>
            The purpose of `ToggleButton` and `ToggleButtonGroup` components is
            to streamline user interactions where toggling between states or
            selecting options is necessary. Below are some of their most common
            applications:
          </p>
          <h3>Single Toggle</h3>
          <p>
            A single `ToggleButton` is used to represent a binary choice, such
            as enabling or disabling a feature. For example, a toggle button can
            be used to switch between "Dark Mode" and "Light Mode" or enable/disable notifications.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <ToggleButton value="darkMode" selected>
                Dark Mode
              </ToggleButton>
            </SistentThemeProvider>
          </Row>
          <h3>Grouped Toggle Buttons (Single Selection)</h3>
          <p>
            Use a `ToggleButtonGroup` to group multiple related options when only one
            selection is allowed at a time. For instance, allowing a user to select a view type,
            such as "Grid View" or "List View."
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <ToggleButtonGroup value={["listView"]}>
                <ToggleButton value="gridView">Grid View</ToggleButton>
                <ToggleButton value="listView">List View</ToggleButton>
              </ToggleButtonGroup>
            </SistentThemeProvider>
          </Row>
          <h3>Grouped Toggle Buttons (Multiple Selection)</h3>
          <p>
            Enable multi-selection by using the `allowMultiple` prop in a `ToggleButtonGroup`.
            This is particularly useful for scenarios where users need to select multiple
            options simultaneously, such as filtering categories or choosing multiple features to enable.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <ToggleButtonGroup value={["feature1", "feature3"]} allowMultiple>
                <ToggleButton value="feature1">Feature 1</ToggleButton>
                <ToggleButton value="feature2">Feature 2</ToggleButton>
                <ToggleButton value="feature3">Feature 3</ToggleButton>
              </ToggleButtonGroup>
            </SistentThemeProvider>
          </Row>

          <a id="Styling">
            <h2>Styling Guidelines</h2>
          </a>
          <h3>Colors</h3>
          <p>
            Always use the pre-defined theme styles for colors, such as `primary` or `secondary`.
            This ensures consistency across the application and makes it easy to switch between
            light and dark themes without additional effort.
          </p>
          <h3>Size</h3>
          <p>
            The size of the `ToggleButton` can be adjusted using the `size` prop to fit
            different screen sizes and contexts. Use `small`, `medium`, or `large` as
            values for this property.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <ToggleButton value="smallSize" size="small">
                Small
              </ToggleButton>
              <ToggleButton value="mediumSize" size="medium">
                Medium
              </ToggleButton>
              <ToggleButton value="largeSize" size="large">
                Large
              </ToggleButton>
            </SistentThemeProvider>
          </Row>
          <h3>Icon Integration</h3>
          <p>
            Toggle buttons can include icons to make their purpose clearer. Icons
            should complement the label text and not replace it entirely. For example,
            a grid icon can visually reinforce the "Grid View" label in a toggle button.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <ToggleButton value="gridView" startIcon={<i className="icon-grid" />}>
                Grid View
              </ToggleButton>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ToggleButtonGuidance;
