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
          <code>Menu</code> is the anchored container that manages positioning, anchoring, focus, and
          open/close behavior. It typically wraps a <code>MenuList</code>, which renders the list of
          <code> MenuItem</code> options and manages their keyboard navigation and accessibility roles.
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
            <li><strong>Anchoring and visibility (Menu):</strong> Use <code>anchorEl</code> and <code>open</code>; handle dismissal via <code>onClose</code>.</li>
            <li><strong>Positioning (Menu):</strong> Control placement with <code>anchorOrigin</code> and <code>transformOrigin</code>; uses <code>Popover</code> internally.</li>
            <li><strong>Keyboard navigation (MenuList):</strong> Arrow keys and Home/End move focus across items; Enter/Space selects; Esc closes via Menu.</li>
            <li><strong>Dismissal:</strong> Clicking outside or selecting an item should close the menu and return focus to the trigger.</li>
          </ul>

          <a id="Design Guidelines" style={{ marginTop: "3rem" }}>
            <h2>Design Guidelines</h2>
          </a>
          <ul>
            <li><strong>Anchoring (Menu):</strong> Align to the trigger using <code>anchorOrigin</code> and <code>transformOrigin</code>.</li>
            <li><strong>Content (MenuList):</strong> Keep item labels concise; avoid deep nesting; communicate <code>selected</code>/<code>disabled</code> states.</li>
            <li><strong>Responsiveness (Menu):</strong> Ensure the surface doesn’t overflow the viewport; constrain with <code>PaperProps</code>.</li>
          </ul>

          <a id="Accessibility" style={{ marginTop: "3rem" }}>
            <h2>Accessibility</h2>
          </a>
          <ul>
            <li>Provide an accessible trigger with appropriate labeling and <code>aria-haspopup="menu"</code>/<code>aria-controls</code> when applicable.</li>
            <li><strong>Roles:</strong> <code>Menu</code> surface hosts a <code>MenuList</code> with <code>role="menu"</code>; items use <code>role="menuitem"</code>.</li>
            <li>Ensure focus is moved into the menu on open and returned to the trigger on close.</li>
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

          <a id="MenuItem" style={{ marginTop: "3rem" }}>
            <h2>MenuItem</h2>
          </a>
          <ul>
            <li><strong>Purpose:</strong> Actionable item inside a menu or menu-like list.</li>
            <li><strong>Common props:</strong> <code>selected</code>, <code>disabled</code>, <code>autoFocus</code>, <code>dense</code>, <code>divider</code>, <code>disableGutters</code>.</li>
            <li><strong>Navigation:</strong> Render as a link using <code>component="a"</code> with <code>href</code>.</li>
            <li><strong>Accessibility:</strong> Uses appropriate ARIA roles when inside a menu; ensure meaningful labels.</li>
          </ul>

          <a id="MenuList" style={{ marginTop: "3rem" }}>
            <h2>MenuList</h2>
          </a>
          <ul>
            <li><strong>Purpose:</strong> Manages keyboard focus and selection among nested <code>MenuItem</code> elements.</li>
            <li><strong>Common props:</strong> <code>autoFocus</code>, <code>autoFocusItem</code>, <code>dense</code>, <code>disableListWrap</code>, <code>variant</code>.</li>
            <li><strong>Usage:</strong> Used internally by <code>Menu</code>, or standalone when you don't need an anchored surface. <em>Does not handle positioning or anchoring</em>.</li>
            <li><strong>Accessibility:</strong> Typically uses <code>role="menu"</code>; ensure correct context and focus return to trigger.</li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default MenuGuidance;

