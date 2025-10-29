import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";

const MenuGuidance = () => {
  const location = useLocation();

  return (
    <SistentLayout title="Menu">
      <div className="content">
        <a id="Identity">
          <h2>Menu</h2>
        </a>
        <p>
          The Menu component presents a list of actions or options on a temporary surface. It is
          typically anchored to a trigger (e.g., a button) and remains open until an item is
          selected or the user dismisses it.
        </p>

        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/menu" ? "active" : ""
            }
            onClick={() => navigate("/projects/sistent/components/menu")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/menu/guidance" ? "active" : ""
            }
            onClick={() => navigate("/projects/sistent/components/menu/guidance")}
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/menu/code" ? "active" : ""
            }
            onClick={() => navigate("/projects/sistent/components/menu/code")}
            title="Code"
          />
        </div>

        <div className="main-content">
          <a id="Usage" style={{ marginTop: "3rem" }}>
            <h2>Usage</h2>
          </a>
          <ul>
            <li><strong>Contextual actions:</strong> Offer actions related to a selected item.</li>
            <li><strong>Navigation:</strong> Provide quick navigation choices within a workflow.</li>
            <li><strong>Dense choices:</strong> Present multiple related options without overwhelming the UI.</li>
          </ul>

          <a id="Behavior" style={{ marginTop: "3rem" }}>
            <h2>Behavior</h2>
          </a>
          <ul>
            <li>Menus are anchored to an element via <code>anchorEl</code>.</li>
            <li>Set <code>open</code> to control visibility and provide <code>onClose</code> to handle dismissal.</li>
            <li>Keyboard navigation is supported: Arrow keys to move, Enter/Space to select, Esc to close.</li>
            <li>Clicking outside the menu or selecting an item should close the menu.</li>
          </ul>

          <a id="Design Guidelines" style={{ marginTop: "3rem" }}>
            <h2>Design Guidelines</h2>
          </a>
          <ul>
            <li><strong>Anchoring:</strong> Align menus to their trigger using <code>anchorOrigin</code> and <code>transformOrigin</code>.</li>
            <li><strong>Density:</strong> Prefer concise labels. Avoid nesting menus deeply.</li>
            <li><strong>States:</strong> Communicate selected or disabled states via styling.</li>
            <li><strong>Responsiveness:</strong> Ensure menus don’t overflow the viewport; adjust positioning as needed.</li>
          </ul>

          <a id="Accessibility" style={{ marginTop: "3rem" }}>
            <h2>Accessibility</h2>
          </a>
          <ul>
            <li>Provide an accessible trigger with an appropriate label and <code>aria-controls</code>/<code>aria-haspopup</code> when applicable.</li>
            <li>Ensure focus is managed when the menu opens and returns to the trigger on close.</li>
            <li>Use clear, descriptive text in <code>MenuItem</code> labels; avoid ambiguous wording.</li>
          </ul>

          <a id="When to use" style={{ marginTop: "3rem" }}>
            <h2>When to use</h2>
          </a>
          <ul>
            <li>When a user needs to pick from a short list of related actions.</li>
            <li>When actions are secondary and should not be permanently visible.</li>
          </ul>

          <a id="When not to use" style={{ marginTop: "3rem" }}>
            <h2>When not to use</h2>
          </a>
          <ul>
            <li>For primary navigation across the site (use Tabs, Sidebar, or Navigation components instead).</li>
            <li>For long or scrollable lists of options; consider a Select or Dialog instead.</li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default MenuGuidance;

