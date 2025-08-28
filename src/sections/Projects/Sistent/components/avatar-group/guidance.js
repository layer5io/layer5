import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";

const AvatarGroupGuidance = () => {
  const location = useLocation();

  return (
    <SistentLayout title="Avatar Group">
      <div className="content">
        <a id="Identity">
          <h2>Avatar Group</h2>
        </a>
        <p>
          The <strong>AvatarGroup</strong> component displays a compact
          collection of avatar elements that represent a group of users or
          entities. It’s useful in collaborative spaces, team-based features, or
          user listings.
        </p>

        {/* Tabs */}
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/avatar-group"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/avatar-group")
            }
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/avatar-group/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/avatar-group/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/avatar-group/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/avatar-group/code")
            }
            title="Code"
          />
        </div>

        <div className="main-content">
          <h3>Design Guidelines and Best Practices</h3>
          <p>
            When implementing <code>AvatarGroup</code>, it's important to
            consider how it enhances collaboration and identity clarity without
            overwhelming the interface. Here are key best practices:
          </p>

          <ul>
            <li>
              <strong>Use to represent teams or shared ownership:</strong> Ideal
              for showing members of a project, contributors, or shared access
              groups in apps like dashboards or chat.
            </li>
            <li>
              <strong>Don’t overuse in dense interfaces:</strong> Too many
              avatars in a group can clutter the view. Use the <code>max</code>{" "}
              prop to collapse overflow into a <code>+N</code> indicator.
            </li>
            <li>
              <strong>Use consistent sizing and spacing:</strong> Align all
              avatars to the same size to maintain visual harmony. Use{" "}
              <code>spacing</code> options (or <code>sx</code>) for controlled
              overlap.
            </li>
            <li>
              <strong>
                Provide accessible <code>alt</code> text:
              </strong>{" "}
              Each avatar should have meaningful alternative text for screen
              readers. Avoid empty or redundant <code>alt</code> values.
            </li>
            <li>
              <strong>Avoid interactive behavior within AvatarGroup:</strong>{" "}
              The component is for display only. If avatars must be clickable,
              wrap each <code>&lt;Avatar&gt;</code> individually in buttons or
              links outside the group context.
            </li>
            <li>
              <strong>Keep it compact:</strong> AvatarGroup is not meant for
              long lists. For large user sets, link to a full view or show
              summary avatars only.
            </li>
            <li>
              <strong>Fallbacks matter:</strong> Always account for broken
              images by using initials or icons as fallback content within each{" "}
              <code>Avatar</code>.
            </li>
          </ul>

          <p>
            These practices ensure that <code>AvatarGroup</code> remains a
            helpful, visually tidy, and accessible interface element wherever
            user identity grouping is necessary.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default AvatarGroupGuidance;
