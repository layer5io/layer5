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

          <a id="When to Use">
            <h3>When to Use IconButtons</h3>
          </a>
          <ul>
            <li>
              <strong>Space-constrained interfaces:</strong> Toolbars, headers,
              and compact layouts
            </li>
            <li>
              <strong>Secondary actions:</strong> Edit, delete, share, or
              favorite actions
            </li>
            <li>
              <strong>Repetitive actions:</strong> Actions that appear multiple
              times in lists or tables
            </li>
            <li>
              <strong>Universal actions:</strong> Widely recognized actions like
              play, pause, or close
            </li>
            <li>
              <strong>Quick actions:</strong> Actions that don't require
              additional context
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

          <a id="When to Avoid">
            <h3>When to Avoid IconButtons</h3>
          </a>
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
            <li>
              <strong>First-time user flows:</strong> Where users need guidance
              and clarity
            </li>
            <li>
              <strong>Critical destructive actions:</strong> Important actions
              like "Delete Account"
            </li>
          </ul>

          <a id="Accessibility Best Practices">
            <h2>Accessibility Best Practices</h2>
          </a>

          <h3>Required Attributes</h3>
          <ul>
            <li>
              <strong>aria-label:</strong> Always provide descriptive labels
            </li>
            <li>
              <strong>Meaningful descriptions:</strong> Use specific,
              action-oriented labels
            </li>
            <li>
              <strong>Consistent labeling:</strong> Use the same label for the
              same action across your app
            </li>
          </ul>

          <h3>Touch and Click Targets</h3>
          <ul>
            <li>
              <strong>Minimum size:</strong> Ensure at least 44px touch targets
              for mobile
            </li>
            <li>
              <strong>Adequate spacing:</strong> Provide sufficient space
              between adjacent IconButtons
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
              from established icon libraries
            </li>
            <li>
              <strong>Consistent style:</strong> Maintain visual consistency
              across all icons
            </li>
            <li>
              <strong>Appropriate weight:</strong> Match icon weight to your
              overall design
            </li>
            <li>
              <strong>Scalable icons:</strong> Use vector icons that scale
              clearly at different sizes
            </li>
          </ul>

          <h3>Visual States</h3>
          <p>
            IconButtons should provide clear visual feedback for different
            interaction states:
          </p>
          <ul>
            <li>
              <strong>Default:</strong> Clear, recognizable icon with
              appropriate contrast
            </li>
            <li>
              <strong>Hover:</strong> Subtle background or color change to
              indicate interactivity
            </li>
            <li>
              <strong>Focus:</strong> Clear focus indicator for keyboard
              navigation
            </li>
            <li>
              <strong>Active:</strong> Pressed state feedback for better user
              experience
            </li>
            <li>
              <strong>Disabled:</strong> Reduced opacity or different styling
              for inactive states
            </li>
          </ul>

          <a id="Layout and Spacing">
            <h2>Layout and Spacing</h2>
          </a>

          <h3>Spacing Guidelines</h3>
          <ul>
            <li>
              <strong>Between IconButtons:</strong> Minimum 8px spacing to
              prevent accidental touches
            </li>
            <li>
              <strong>In toolbars:</strong> Consistent spacing aligned with grid
              system
            </li>
            <li>
              <strong>With other elements:</strong> Align with text baselines
              and other UI elements
            </li>
          </ul>

          <h3>Grouping</h3>
          <p>When grouping IconButtons, consider:</p>
          <ul>
            <li>
              <strong>Related actions:</strong> Group similar or related actions
              together
            </li>
            <li>
              <strong>Visual separation:</strong> Use dividers or spacing to
              separate different action groups
            </li>
            <li>
              <strong>Logical order:</strong> Arrange actions in a logical,
              predictable order
            </li>
          </ul>

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

          <a id="Interaction Patterns">
            <h2>Interaction Patterns</h2>
          </a>

          <h3>Toggle States</h3>
          <p>
            IconButtons can represent toggle states (like favorite/unfavorite)
            by:
          </p>
          <ul>
            <li>
              <strong>Color changes:</strong> Different colors for
              active/inactive states
            </li>
            <li>
              <strong>Icon variants:</strong> Filled vs. outlined icons
            </li>
            <li>
              <strong>Visual feedback:</strong> Clear indication of current
              state
            </li>
          </ul>

          <h3>Loading States</h3>
          <p>For actions that take time to complete:</p>
          <ul>
            <li>
              <strong>Disable during processing:</strong> Prevent multiple
              submissions
            </li>
            <li>
              <strong>Loading indicators:</strong> Show progress for longer
              operations
            </li>
            <li>
              <strong>Feedback messages:</strong> Confirm completion or show
              errors
            </li>
          </ul>

          <a id="Common Patterns">
            <h2>Common Patterns</h2>
          </a>

          <h3>Toolbar Actions</h3>
          <p>
            Edit, share, delete, and other common actions in toolbars and
            headers.
          </p>

          <h3>List Item Actions</h3>
          <p>Quick actions for items in lists, tables, or cards.</p>

          <h3>Media Controls</h3>
          <p>Play, pause, skip, and volume controls for media players.</p>

          <h3>Navigation</h3>
          <p>Back, forward, close, and menu toggle actions.</p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default IconButtonGuidance;
