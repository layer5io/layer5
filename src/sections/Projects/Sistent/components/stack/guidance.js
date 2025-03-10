import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";

const StackGuidance = () => {
  const location = useLocation();

  return (
    <SistentLayout title="Stack">
      <div className="content">
        <a id="Identity">
          <h2>Stack</h2>
        </a>
        <p>
          The Stack component arranges elements in a row or column with
          consistent spacing and alignment. It’s best used for simple,
          repetitive layouts, especially when you need uniform spacing between
          items.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/stack"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/stack")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/stack/guidance"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/stack/guidance")}
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/stack/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/stack/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <h3>Best Practices</h3>
          <ul>
            <li>
              <strong>Use Stack for simple layouts:</strong> For more complex
              grids or responsive breakpoints, consider other layout components
              (e.g., Grid).
            </li>
            <li>
              <strong>Spacing control:</strong> Leverage <code>spacing</code> to
              maintain consistent gaps between items.
            </li>
            <li>
              <strong>Direction:</strong> Use <code>direction="row"</code> for
              horizontal layouts or <code>direction="column"</code> for vertical
              layouts.
            </li>
            <li>
              <strong>Alignment:</strong> Combine <code>alignItems</code> and{" "}
              <code>justifyContent</code> to position items. For instance,{" "}
              <code>alignItems="center"</code> and{" "}
              <code>justifyContent="space-between"</code>.
            </li>
          </ul>

          <h3>Styling & Customization</h3>
          <p>
            Stack itself is a layout tool. For visual flair, wrap child elements
            (e.g., <code>Box</code>) with backgrounds, borders, or other custom
            styling. This approach keeps layout concerns (Stack) separate from
            presentation (child components).
          </p>

          <h3>Real-World Usage</h3>
          <ul>
            <li>
              <strong>Form Layouts:</strong> Stacking labels and inputs
              vertically with consistent spacing.
            </li>
            <li>
              <strong>Card Groups:</strong> Displaying multiple cards or panels
              horizontally with even spacing.
            </li>
            <li>
              <strong>Toolbar or Header:</strong> Aligning icons and navigation
              links in a row with <code>justifyContent="space-between"</code>.
            </li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default StackGuidance;
