import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Box } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import BasicAppBar from "./AppBars/BasicAppBar";
import BasicAppBarMenu from "./AppBars/BasicAppBarMenu";
import ResponsiveAppBar from "./AppBars/BasicAppBarResponsive";
import SearchAppBar from "./AppBars/AppBarSearch";
import BottomAppBar from "./AppBars/BottomAppbar";

const appBarProps = [
  {
    name: "children",
    type: "node",
    defaultValue: "",
    description: "Content to render inside the AppBar, usually a Toolbar.",
  },
  {
    name: "color",
    type: "\"default\" | \"inherit\" | \"primary\" | \"secondary\" | \"transparent\"",
    defaultValue: "\"primary\"",
    description: "Color of the component. Options are related to theme.",
  },
  {
    name: "enableColorOnDark",
    type: "boolean",
    defaultValue: "false",
    description: "Forces primary/secondary colors on dark background.",
  },
  {
    name: "position",
    type: "\"fixed\" | \"absolute\" | \"sticky\" | \"static\" | \"relative\"",
    defaultValue: "\"fixed\"",
    description: "Positioning type of the AppBar.",
  },
  {
    name: "sx",
    type: "object",
    defaultValue: "",
    description: "System prop to apply custom CSS styling.",
  },
  {
    name: "elevation",
    type: "number",
    defaultValue: "4",
    description: "Shadow depth of the AppBar.",
  },
  {
    name: "classes",
    type: "object",
    defaultValue: "",
    description: "Override/extend styles applied to the component.",
  },
  {
    name: "component",
    type: "elementType",
    defaultValue: "",
    description: "Specify an HTML element/custom component for rendering.",
  },
  {
    name: "variant",
    type: "\"elevated\" | \"outlined\"",
    defaultValue: "\"elevated\"",
    description: "Sets the style variant.",
  },
];

const SistentAppBar = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="App Bar" >
      <div className="content">
        <a id="Identity">
          <h2>App Bar</h2>
        </a>
        <p>
        An AppBar is an interactive element that provides users with navigation options, helps them access important actions, and organizes key information at the top of the interface, guiding them through the app's flow.
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
          AppBars are crucial and integral elements in an interface. They are primarily used to organize navigation and key actions, guiding users through different sections of an application. AppBars work in tandem with other elements to structure designs and enhance the overall digital experience.
          </p>
          <a id="Props ">
            <h2>Props </h2>
          </a>

          <p>
          The AppBar component comes with several customizable props that allow for flexibility in design and functionality. These props help in defining how the AppBar behaves and looks within an application, enabling developers to tailor it according to their specific needs.
          </p>

          <SistentThemeProvider initialMode="light">
            <Box sx={{ margin: "20px auto", maxWidth: "800px" }}>
              <div style={{ display: "table", width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                {/* Table Header */}
                <div style={{ display: "table-row", fontWeight: "bold" }}>
                  <div style={{ display: "table-cell", padding: "8px", border: "1px solid #ddd" }}>Prop</div>
                  <div style={{ display: "table-cell", padding: "8px", border: "1px solid #ddd" }}>Type</div>
                  <div style={{ display: "table-cell", padding: "8px", border: "1px solid #ddd" }}>Default</div>
                  <div style={{ display: "table-cell", padding: "8px", border: "1px solid #ddd" }}>Description</div>
                </div>

                {/* Table Body */}
                {appBarProps.map((prop) => (
                  <div style={{ display: "table-row" }} key={prop.name}>
                    <div style={{ display: "table-cell", padding: "8px", border: "1px solid #ddd" }}>{prop.name}</div>
                    <div style={{ display: "table-cell", padding: "8px", border: "1px solid #ddd" }}>{prop.type}</div>
                    <div style={{ display: "table-cell", padding: "8px", border: "1px solid #ddd" }}>{prop.defaultValue}</div>
                    <div style={{ display: "table-cell", padding: "8px", border: "1px solid #ddd" }}>{prop.description}</div>
                  </div>
                ))}
              </div>
            </Box>
          </SistentThemeProvider>
          <br/>
          <a id="Types ">
            <h2>Types</h2>
          </a>
          <p>
            The AppBar component can be configured in various ways to suit different design needs and enhance user experience. Below are some common types of AppBars, along with their features and implementations
          </p>
          <h3>Basic App Bar</h3>
          <p>
                A simple AppBar typically used for branding or navigation purposes.
          </p>
          <BasicAppBar/>
          <br/>
          <h3>App Bar with Menu</h3>
          <p>
                This AppBar includes a menu icon for additional navigation options.
          </p>
          <BasicAppBarMenu/>
          <br/>
          <h3> App Bar with Responsive Menu</h3>
          <p>
                A responsive AppBar that includes a drawer for mobile navigation.
          </p>
          <ResponsiveAppBar/>
          <br/>
          <h3>App Bar with search Menu</h3>
          <p>
                An App Bar with a search menu typically includes a top navigation bar that contains a search field for user input, along with icons or links for navigation. It allows users to quickly access a search feature while also providing key site navigation options.
          </p>

          <SearchAppBar/>
          <br/>
          <h3>Botton App Bar</h3>
          <p>
                An App Bar with a search menu typically includes a top navigation bar that contains a search field for user input, along with icons or links for navigation. It allows users to quickly access a search feature while also providing key site navigation options.
          </p>

          <BottomAppBar/>
          <br/>

          <a id="Adding App Bars">
            <h2>Adding App Bars</h2>
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

export default SistentAppBar;
