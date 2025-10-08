import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { Chip, SistentThemeProvider,DesignIcon ,MesheryFilterIcon } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const ChipGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Chip">
      <div className="content">
        <a id="Identity">
          <h2>Chip</h2>
        </a>
        <p>
          Chips are compact elements that represent an input, attribute, or action.
          They allow users to enter information, make selections, filter content, or trigger actions.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/chip"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/chip")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/chip/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/chip/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/chip/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/chip/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Chips provide a compact way to display information and enable user
            interaction. They should be used thoughtfully to enhance the user
            experience without overwhelming the interface.
          </p>
          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <p>
            Chips serve various purposes in user interfaces and can be applied
            in different contexts to improve usability and information display.
          </p>
          <h3>Filters</h3>
          <p>
            Chips are excellent for displaying active filters in search results,
            data tables, or content lists. They provide a clear visual indication
            of what filters are applied and allow easy removal.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Chip label="Active Filter" onDelete={() => {}} color="primary" style={{ margin: "0 8px" }} />
            </SistentThemeProvider>
          </Row>
          <h3>Tags and Categories</h3>
          <p>
            Use chips to display tags, categories, or labels associated with content.
            They help users quickly understand the nature or classification of items.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Chip label="React" variant="outlined" style={{ margin: "0 8px" }} />
              <Chip label="JavaScript" variant="outlined" style={{ margin: "0 8px" }} />
              <Chip label="Frontend" variant="outlined" style={{ margin: "0 8px" }} />
            </SistentThemeProvider>
          </Row>
          <h3>Logo Chip</h3>
          <p>
            Chips can display icons alongside text labels for enhanced visual identification.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Chip
                label="Design"
                variant="outlined"
                icon={<DesignIcon style={{ marginLeft: "8px", marginRight: "5px" }} />}
                style={{ paddingLeft: "4px", margin: "0 8px" }}
              />
              <Chip
                label="WASM"
                variant="outlined"
                icon={<MesheryFilterIcon style={{ marginLeft: "8px", marginRight: "5px" ,width: "16px",height: "16px" }} />}
                style={{ paddingLeft: "4px" ,margin: "0 8px" }}
              />
            </SistentThemeProvider>
          </Row>
          <h3>Status Indicators</h3>
          <p>
            Use colored chips to indicate status, priority, or state of items.
            The color should be meaningful and consistent with your design system.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Chip label="Active" color="success" style={{ margin: "0 8px" }} />
              <Chip label="Pending" color="warning" style={{ margin: "0 8px" }} />
              <Chip label="Error" color="error" style={{ margin: "0 8px" }} />
            </SistentThemeProvider>
          </Row>
          <a id="Best Practices">
            <h2>Best Practices</h2>
          </a>
          <ul>
            <li>Keep chips simple and easy to understand.</li>
            <li>Use short, clear labels for each chip.</li>
            <li>Only add icons or colors when they add real value or meaning.</li>
            <li>Group related chips together for better organization.</li>
            <li>Maintain consistent spacing and alignment between chips.</li>
            <li>Avoid cluttering the interface with too many chips or styles.</li>
            <li>Ensure interactive chips have clear hover, focus, and active states.</li>
            <li>Use colors meaningfully and consistently (e.g., green for success, red for errors).</li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ChipGuidance;
