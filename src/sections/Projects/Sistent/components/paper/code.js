import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { SistentThemeProvider, Paper } from "@layer5/sistent";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "../button/code-block";

const codes = [
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <Paper elevation={1} style={{ padding: "16px" }}>
        Default Paper with Elevation 1
      </Paper>
  </SistentThemeProvider>`,
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <Paper
      elevation={0}
      style={{ padding: "16px" }}
    >
      Elevation 0 (No shadow)
    </Paper>
    <Paper
      elevation={3}
      style={{ padding: "16px" }}
    >
      Elevation 3
    </Paper>
    <Paper
      elevation={8}
      style={{ padding: "16px" }}
    >
      Elevation 8
    </Paper>
  </SistentThemeProvider>`,
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <Paper
      variant="elevation"
      style={{ padding: "16px" }}
    >
      Elevation Variant (Default)
    </Paper>
    <Paper
      variant="outlined"
      style={{ padding: "16px", borderColor: "#ccc" }}
    >
      Outlined Variant (No shadow)
    </Paper>
  </SistentThemeProvider>`,
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <Paper
        square={false}
        style={{ padding: "16px" }}
        >
        Rounded Corners (Default)
        </Paper>
      <Paper square style={{ padding: "16px" }}>
        Square Corners
      </Paper>
    </SistentThemeProvider>`,
];
const PaperCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Paper">
      <div className="content">
        <a id="Identity">
          <h2>Paper</h2>
        </a>
        <p>
          The Paper component provides an elevated surface for displaying
          content. It mimics the behavior of real-world surfaces with shadow
          effects, supporting Material Design's elevation system.
        </p>

        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/paper"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/paper")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/paper/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/paper/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/paper/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/paper/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <a id="Basic Example">
            <h3>Basic Example</h3>
          </a>
          <p>
            Here’s a simple example of a Paper component with default elevation.
            This creates a surface with a subtle shadow.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Paper elevation={1} style={{ padding: "16px" }}>
                  Default Paper with Elevation 1
                </Paper>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-example" code={codes[0]} />
          </div>

          <a id="Elevation Example">
            <h3>Elevation Example</h3>
          </a>
          <p>
            The <code>elevation</code> prop controls the shadow depth. Use
            values from 0 to 24 to create varying levels of elevation:
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Paper elevation={0} style={{ padding: "16px" }}>
                  Elevation 0 (No shadow)
                </Paper>
                <Paper elevation={3} style={{ padding: "16px" }}>
                  Elevation 3
                </Paper>
                <Paper elevation={8} style={{ padding: "16px" }}>
                  Elevation 8
                </Paper>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="elevation-example" code={codes[1]} />
          </div>
          <a id="Variant Example">
            <h3>Variant Example</h3>
          </a>
          <p>
            The Paper component supports two variants: <code>elevation</code>{" "}
            (default) and <code>outlined</code>. The outlined variant removes
            shadows and adds a border instead:
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Paper variant="elevation" style={{ padding: "16px" }}>
                  Elevation Variant (Default)
                </Paper>
                <Paper
                  variant="outlined"
                  style={{ padding: "16px", borderColor: "#ccc" }}
                >
                  Outlined Variant (No shadow)
                </Paper>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="variant-example" code={codes[2]} />
          </div>

          <a id="Corners Example">
            <h3>Square and Rounded Corners</h3>
          </a>
          <p>
            By default, the Paper component has rounded corners. You can make it
            square by setting the <code>square</code> prop to <code>true</code>.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Paper square={false} style={{ padding: "16px" }}>
                  Rounded Corners (Default)
                </Paper>
                <Paper square style={{ padding: "16px" }}>
                  Square Corners
                </Paper>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="corners-example" code={codes[3]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default PaperCode;
