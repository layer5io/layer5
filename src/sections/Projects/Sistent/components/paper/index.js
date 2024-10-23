import React from "react";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { Paper, SistentThemeProvider } from "@layer5/sistent";

export const SistentPaper = () => {
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
          <p>
            The Paper component is useful for designs that require elevated
            surfaces, such as cards or modals, and offers multiple configuration
            options like elevation, variants, and corner styles.
          </p>

          <a id="Types">
            <h2>Types</h2>
          </a>
          <p>
            Paper can be configured with different <code>elevation</code> levels
            to establish a visual hierarchy, and it also supports a flat,
            outlined variant.
          </p>

          <h3>Elevation</h3>
          <p>
            The elevation prop determines the shadow depth, with values ranging
            from 0 (no shadow) to 24 (maximum shadow).
          </p>

          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Paper elevation={3} style={{ padding: "16px", margin: "auto", width: "50%" }}>
              Paper with Elevation 3
            </Paper>
          </SistentThemeProvider>

          <h3>Outlined</h3>
          <p>
            For designs requiring minimal shadows, the <code>outlined</code>{" "}
            variant can be used instead of the default elevated one.
          </p>

          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Paper variant="outlined" style={{ padding: "16px", margin: "auto", width: "50%" }}>
              Outlined Paper Variant
            </Paper>
          </SistentThemeProvider>

          <a id="Corners">
            <h2>Corners</h2>
          </a>
          <p>
            The Paper component has rounded corners by default, but you can use
            the <code>square</code> prop to remove rounding.
          </p>

          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Paper square style={{ padding: "16px", margin: "auto", width: "50%" }}>
              Square Corners
            </Paper>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};
export default SistentPaper;
