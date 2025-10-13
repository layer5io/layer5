import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { IconButton, SistentThemeProvider } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaShare } from "@react-icons/all-files/fa/FaShare";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const IconButtonGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="IconButton">
      <div className="content">
        <a id="Identity">
          <h2>IconButton</h2>
        </a>
        <p>
          IconButton provides an interactive button component that displays only
          an icon, ideal for compact UIs where space is limited and actions are
          easily recognizable through iconography.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/iconbutton"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/iconbutton")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/iconbutton/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/iconbutton/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/iconbutton/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/iconbutton/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <a id="Usage Guidelines">
            <h2>Usage Guidelines</h2>
          </a>
          <p>
            IconButtons should be used when the action can be clearly
            communicated through iconography alone. They're perfect for common
            actions that users can easily recognize without accompanying text.
          </p>

          <h3>When to Use IconButtons</h3>
          <ul>
            <li>
              <strong>Space-constrained interfaces:</strong> Toolbars and
              compact layouts
            </li>
            <li>
              <strong>Secondary actions:</strong> Edit, delete, share, or
              favorite actions
            </li>
            <li>
              <strong>Universal actions:</strong> Widely recognized actions like
              play, pause, or close
            </li>
          </ul>

          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <IconButton aria-label="favorite" color="error">
                <FaHeart />
              </IconButton>
              <IconButton aria-label="share" color="primary">
                <FaShare />
              </IconButton>
            </SistentThemeProvider>
          </Row>

          <h3>When to Avoid IconButtons</h3>
          <ul>
            <li>
              <strong>Primary actions:</strong> Use regular buttons with text
              for main CTAs
            </li>
            <li>
              <strong>Complex actions:</strong> Actions that require explanation
              or context
            </li>
            <li>
              <strong>Ambiguous icons:</strong> When the icon meaning isn't
              universally clear
            </li>
          </ul>

          <a id="Accessibility Best Practices">
            <h2>Accessibility Best Practices</h2>
          </a>

          <h3>Essential Requirements</h3>
          <ul>
            <li>
              <strong>aria-label:</strong> Always provide descriptive labels
            </li>
            <li>
              <strong>Minimum size:</strong> Ensure at least 44px touch targets
              for mobile
            </li>
            <li>
              <strong>Visual feedback:</strong> Clear hover and focus states
            </li>
          </ul>

          <a id="Design Guidelines">
            <h2>Design Guidelines</h2>
          </a>

          <h3>Icon Selection</h3>
          <ul>
            <li>
              <strong>Recognizable icons:</strong> Use widely understood icons
              from established libraries
            </li>
            <li>
              <strong>Consistent style:</strong> Maintain visual consistency
              across all icons
            </li>
            <li>
              <strong>Scalable icons:</strong> Use vector icons that scale
              clearly at different sizes
            </li>
          </ul>

          <a id="Layout and Spacing">
            <h2>Layout and Spacing</h2>
          </a>

          <p>
            Maintain minimum 8px spacing between IconButtons and group related
            actions together with logical order.
          </p>

          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <div
                style={{ display: "flex", gap: "16px", alignItems: "center" }}
              >
                <IconButton aria-label="approve" color="success">
                  <FaCheck />
                </IconButton>
                <IconButton aria-label="reject" color="error">
                  <FaTimes />
                </IconButton>
              </div>
            </SistentThemeProvider>
          </Row>

          <a id="Common Patterns">
            <h2>Common Patterns</h2>
          </a>

          <p>
            <strong>Toolbar Actions:</strong> Edit, share, delete actions in
            toolbars. <strong>List Item Actions:</strong> Quick actions for
            items in lists or tables. <strong>Media Controls:</strong> Play,
            pause, skip controls. <strong>Navigation:</strong> Back, forward,
            close, menu toggles.
          </p>

          <a id="Props">
            <h2>Props</h2>
          </a>
          <p>
            The IconButton component accepts all standard button props plus
            additional customization options:
          </p>

          <div className="table-container">
            <table className="props-table">
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>children</td>
                  <td>node</td>
                  <td>-</td>
                  <td>The icon element to display inside the button</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>'small' | 'medium' | 'large'</td>
                  <td>'medium'</td>
                  <td>The size of the IconButton</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>
                    'inherit' | 'primary' | 'secondary' | 'error' | 'info' |
                    'success' | 'warning'
                  </td>
                  <td>'inherit'</td>
                  <td>The color of the IconButton</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>bool</td>
                  <td>false</td>
                  <td>If true, the IconButton is disabled</td>
                </tr>
                <tr>
                  <td>onClick</td>
                  <td>func</td>
                  <td>-</td>
                  <td>Callback fired when the IconButton is clicked</td>
                </tr>
                <tr>
                  <td>aria-label</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Accessibility label for screen readers (required)</td>
                </tr>
                <tr>
                  <td>sx</td>
                  <td>object</td>
                  <td>-</td>
                  <td>System prop for custom styling</td>
                </tr>
              </tbody>
            </table>
          </div>

          <a id="Best Practices">
            <h2>Best Practices</h2>
          </a>
          <ul>
            <li>
              <strong>Always include aria-label:</strong> Essential for
              accessibility and screen readers
            </li>
            <li>
              <strong>Use recognizable icons:</strong> Choose icons that clearly
              represent the action
            </li>
            <li>
              <strong>Maintain adequate spacing:</strong> Ensure sufficient
              space between IconButtons
            </li>
            <li>
              <strong>Consider touch targets:</strong> Use appropriate sizes for
              mobile interfaces
            </li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default IconButtonGuidance;
