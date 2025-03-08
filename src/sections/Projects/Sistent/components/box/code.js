import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Box } from "@layer5/sistent";
import { CodeBlock } from "../button/code-block";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `<Box sx={{ bgcolor: "#ffeb3b", padding: 4, height: "50vh" }}>
    <p>
      This is a Box component with custom background and padding.
    </p>
</Box>`,
  `<Box
    sx={{
      bgcolor: { xs: "#cfe8fc", md: "#ffeb3b" },
      padding: { xs: 2, md: 4 },
      height: "50vh",
    }}
  >
    <p style={{ color: "black" }}>
      This Box is responsive, changing style based on screen size.
    </p>
</Box>`,
  `<Box
    sx={{
      bgcolor: { xs: "#cfe8fc", md: "#ffeb3b" },
      padding: { xs: 2, md: 4 },
      height: "50vh",
    }}
    >
    <p style={{ color: "black" }}>
      This Box is responsive, changing style based on screen size.
    </p>
</Box>`,
  `<Box
    sx={{
      bgcolor: "#cfe8fc",
      height: "50vh",
      padding: 4,
      transition: "0.3s",
      "&:hover": {
        bgcolor: "#ffeb3b",
        cursor: "pointer",
      },
    }}
    >
      <p style={{ color: "black" }}>Hover over this Box to see the interactive effect.</p>
</Box>`,
];

const BoxCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Box">
      <div className="content">
        <a id="Identity">
          <h2>Box</h2>
        </a>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/box"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/box")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/box/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/box/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/box/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/box/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The <code>Box</code> component is a flexible and foundational
            container in Sistent, designed to structure and style content. It
            provides quick access to the theme and CSS utilities, allowing for
            easy customization and responsive design. Using the sx prop,
            developers can apply CSS styles directly with theme-aware
            properties, making Box ideal for layouts, spacing, and other UI
            adjustments. It can render as any HTML element using the component
            prop, offering high versatility in both structure and styling.
          </p>
          <a id="Basic Box">
            <h2>Basic Box Example</h2>
          </a>
          <p>
            A simple Box component can be used to contain and structure other
            elements. Here, the Box serves as a basic container without any
            styling applied.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box>
                  <p>This is a basic Box component.</p>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="box-basic" code={codes[0]} />
          </div>
          <a id="Styled Box">
            <h2>Styled Box Example</h2>
          </a>
          <p>
            You can add custom styles to a Box component by applying{" "}
            <code>sx</code>
            properties. In this example, the Box has a background color,
            padding, and a defined height.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ bgcolor: "#ffeb3b", padding: 4, height: "50vh" }}>
                  <p style={{ color: "black" }}>
                    This is a Box component with custom background and padding.
                  </p>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="box-styled" code={codes[1]} />
          </div>
          <a id="Responsive Box">
            <h2>Responsive Box Example</h2>
          </a>
          <p>
            The Box component also supports responsive styling using the{" "}
            <code>sx</code> prop. In this example, the Box adjusts its padding
            and background color based on screen size.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box
                  sx={{
                    bgcolor: { xs: "#cfe8fc", md: "#ffeb3b" },
                    padding: { xs: 2, md: 4 },
                    height: "50vh",
                  }}
                >
                  <p style={{ color: "black" }}>
                    This Box is responsive, changing style based on screen size.
                  </p>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="box-responsive" code={codes[2]} />
          </div>
          <a id="Interactive Box">
            <h2>Interactive Box Example</h2>
          </a>
          <p>
            Here’s an example where the Box component includes hover effects to
            create a more interactive experience. This is useful for buttons,
            cards, and other clickable elements.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box
                  sx={{
                    bgcolor: "#cfe8fc",
                    height: "50vh",
                    padding: 4,
                    transition: "0.3s",
                    "&:hover": {
                      bgcolor: "#ffeb3b",
                      cursor: "pointer",
                    },
                  }}
                >
                  <p style={{ color: "black" }}>
                    Hover over this Box to see the interactive effect.
                  </p>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="box-interactive" code={codes[3]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default BoxCode;