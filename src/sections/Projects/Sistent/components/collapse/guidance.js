import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";

const Guidance = () => {
  const location = useLocation();

  return (
    <SistentLayout title="Collapse">
      <div className="content" style={{ padding: "2rem 0" }}>
        <a id="Identity" style={{ display: "block", marginBottom: "1.5rem" }}>
          <h2 style={{ marginBottom: "1.5rem" }}>Collapse</h2>
        </a>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The Collapse component provides a smooth, animated transition for showing and hiding content.
          It's an essential UI pattern for managing content density and progressive disclosure of information.
        </p>

        <div className="filterBtns" style={{ marginBottom: "2.5rem" }}>
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/collapse"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/collapse")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/collapse/guidance"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/collapse/guidance")}
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/collapse/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/collapse/code")}
            title="Code"
          />
        </div>

        <div className="main-content" style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <section>
            <a id="Best Practices" style={{ display: "block" }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid #e0e0e0" }}>Best Practices</h2>
            </a>
            <ul style={{ marginTop: "1rem", marginBottom: "0.5rem", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Clear Triggers:</strong> Always use clear, descriptive labels for collapse triggers that indicate the action and content.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Progressive Disclosure:</strong> Use collapse to hide secondary content or advanced options that aren't immediately needed.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Performance:</strong> For large content, consider using <code>unmountOnExit</code> to improve performance by unmounting content when collapsed.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Animation Timing:</strong> Adjust the <code>timeout</code> prop to match your application's animation speed for a cohesive feel.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Consistent Behavior:</strong> Maintain consistent behavior across your application - don't mix different animation patterns for similar interactions.
              </li>
            </ul>

          </section>

          <section>
            <a id="Accessibility Considerations" style={{ display: "block" }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid #e0e0e0" }}>Accessibility Considerations</h2>
            </a>
            <ul style={{ marginTop: "1rem", marginBottom: "0.5rem", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Keyboard Navigation:</strong> Ensure the collapse trigger is keyboard accessible and can be activated with both Enter and Space keys.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>ARIA Attributes:</strong> The component automatically handles <code>aria-expanded</code> and <code>aria-controls</code> attributes.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Focus Management:</strong> Consider managing focus when content is expanded/collapsed, especially for screen reader users.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Screen Reader Announcements:</strong> Use <code>aria-live</code> regions to announce state changes to screen reader users.
              </li>
            </ul>

          </section>

          <section>
            <a id="When to Use" style={{ display: "block" }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid #e0e0e0" }}>When to Use</h2>
            </a>
            <ul style={{ marginTop: "1rem", marginBottom: "0.5rem", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.75rem" }}>FAQs and help sections</li>
              <li style={{ marginBottom: "0.75rem" }}>Forms with optional or advanced fields</li>
              <li style={{ marginBottom: "0.75rem" }}>Content that can be toggled on/off</li>
              <li style={{ marginBottom: "0.75rem" }}>Accordion interfaces</li>
              <li style={{ marginBottom: "0.75rem" }}>Mobile navigation menus</li>
            </ul>

          </section>

          <section>
            <a id="When to Consider Something Else" style={{ display: "block" }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid #e0e0e0" }}>When to Consider Something Else</h2>
            </a>
            <ul style={{ marginTop: "1rem", marginBottom: "0.5rem", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.75rem" }}>For simple show/hide without animation, consider conditional rendering</li>
              <li style={{ marginBottom: "0.75rem" }}>For modal dialogs or overlays, use the Dialog component instead</li>
              <li style={{ marginBottom: "0.75rem" }}>For tabbed interfaces, consider using the Tabs component</li>
            </ul>

          </section>

          <section>
            <a id="Performance Optimization" style={{ display: "block" }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid #e0e0e0" }}>Performance Optimization</h2>
            </a>
            <ul style={{ marginTop: "1rem", marginBottom: "0.5rem", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.75rem" }}>Use <code>unmountOnExit</code> for better performance with large content</li>
              <li style={{ marginBottom: "0.75rem" }}>Consider code-splitting for complex content within collapsible sections</li>
              <li style={{ marginBottom: "0.75rem" }}>Memoize the content if it includes expensive computations</li>
            </ul>

          </section>

          <section>
            <a id="Common Patterns" style={{ display: "block" }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid #e0e0e0" }}>Common Patterns</h2>
            </a>
            <ul style={{ marginTop: "1rem", marginBottom: "0.5rem", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.75rem" }}><strong>Accordion:</strong> Multiple collapsible sections where only one can be open at a time</li>
              <li style={{ marginBottom: "0.75rem" }}><strong>Expandable Cards:</strong> Cards with a summary that can be expanded for more details</li>
              <li style={{ marginBottom: "0.75rem" }}><strong>Progressive Disclosure:</strong> Show advanced options or additional information on demand</li>
              <li style={{ marginBottom: "0.75rem" }}><strong>Mobile Navigation:</strong> Collapsible menus for mobile views</li>
            </ul>
          </section>
        </div>
      </div>
    </SistentLayout>
  );
};

export default Guidance;