import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { SistentThemeProvider, KubernetesIcon, DesignIcon, PublishIcon } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const IconsGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Icons">
      <div className="content">
        <a id="Identity">
          <h2>Icons</h2>
        </a>
        <p>
          Icons are visual symbols used to represent ideas, objects, or actions.
          They communicate messages at a glance, afford interactivity, and draw
          attention to important information.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/icons"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/icons")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/icons/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/icons/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/icons/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/icons/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <a id="Best Practices">
            <h2>Best Practices</h2><br />
          </a>
          <h3>Clarity and Recognition</h3>
          <p>
            Use icons that are universally recognized or easily understood within your
            target audience. Avoid using obscure or overly abstract symbols that may
            confuse users.
          </p>
          <h3>Consistency</h3>
          <p>
            Maintain visual consistency across all icons in your interface. Icons should
            share similar visual weight, style, and proportions to create a cohesive
            design system.
          </p>
          <h3>Size and Spacing</h3>
          <p>
            Ensure icons are sized appropriately for their context and maintain adequate
            spacing from surrounding elements. Icons should be large enough to be easily
            tapped or clicked, especially on touch devices (minimum 24x24px for touch targets).
          </p>
          <h3>Color and Contrast</h3>
          <p>
            Use colors that provide sufficient contrast with the background for accessibility.
            Consider how icons appear in both light and dark themes, and ensure they remain
            visible and recognizable in all contexts.
          </p>
          <h3>Labels and Tooltips</h3>
          <p>
            When icons might be ambiguous, always provide text labels or tooltips. This is
            especially important for critical actions or less common functions. Labels help
            users understand functionality without having to guess.
          </p>
          <h3>Accessibility</h3>
          <p>
            Ensure icons are accessible to all users, including those using screen readers.
            Provide appropriate aria-labels and alt text where needed. Never rely solely on
            color to convey meaning.
          </p>

          <a id="Usage Guidelines">
            <h2>Usage Guidelines</h2><br />
          </a>
          <h3>When to Use Icons</h3>
          <p>
            Icons work best when they enhance understanding rather than obscure it. Use icons
            when they add visual interest, save space, or make interfaces more scannable.
            Avoid using icons just for decoration if they don't serve a functional purpose.
          </p>
          <h3>Icon Placement</h3>
          <p>
            Position icons where users expect to find them. Common placements include navigation
            menus, buttons, form fields, and action bars. Ensure icons are aligned properly with
            accompanying text or other elements.
          </p>
          <h3>Combining Icons with Text</h3>
          <p>
            When combining icons with text, ensure proper spacing and alignment. Icons typically
            work well when placed to the left of text labels in left-to-right languages. For
            buttons, icons can appear on either side of the label depending on the action.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default IconsGuidance;