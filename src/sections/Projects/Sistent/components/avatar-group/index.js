import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Avatar, AvatarGroup, SistentThemeProvider } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

import user1 from "../../../../../assets/images/sistent/placeholder/user.webp";
import user2 from "../../../../../assets/images/sistent/placeholder/user.webp";
import user3 from "../../../../../assets/images/sistent/placeholder/user.webp";
import user4 from "../../../../../assets/images/sistent/placeholder/user.webp";

const SistentAvatarGroup = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="AvatarGroup">
      <div className="content">
        <a id="Identity">
          <h2>Avatar Group</h2>
        </a>

        <p>
          The <code>AvatarGroup</code> component is used to visually represent a
          collection of users or entities in a compact and organized layout.
          It's ideal for showcasing team members, collaborators, or
          participants, and is often used in dashboards, cards, and
          collaborative tools. AvatarGroup handles overlapping, spacing, and
          overflow logic to ensure clarity even with limited space.
        </p>
        {/* Navigation Tabs */}
        <div className="filterBtns">
          <TabButton
            title="Overview"
            className={
              location.pathname === "/projects/sistent/components/avatar-group"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/avatar-group")
            }
          />
          <TabButton
            title="Guidance"
            className={
              location.pathname ===
              "/projects/sistent/components/avatar-group/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/avatar-group/guidance")
            }
          />
          <TabButton
            title="Code"
            className={
              location.pathname ===
              "/projects/sistent/components/avatar-group/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/avatar-group/code")
            }
          />
        </div>

        <div className="main-content">
          <p>
            <strong>AvatarGroup</strong> is used to display a collection of user
            avatars together, typically for showing team members or participants
            in collaborative features.
          </p>

          {/* Basic Avatar Group */}
          <h3>Basic Avatar Group</h3>
          <p>
            The simplest use case: showing multiple avatars grouped
            horizontally.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <AvatarGroup>
                <Avatar alt="User 1" src={user1} />
                <Avatar alt="User 2" src={user2} />
                <Avatar alt="User 3" src={user3} />
              </AvatarGroup>
            </SistentThemeProvider>
          </Row>

          {/* Max Displayed Avatars */}
          <h3>Limiting Displayed Avatars</h3>
          <p>
            You can limit the number of avatars shown using the <code>max</code>{" "}
            prop. Additional avatars are collapsed into a counter (e.g. +2).
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <AvatarGroup max={3}>
                <Avatar alt="User 1" src={user1} />
                <Avatar alt="User 2" src={user2} />
                <Avatar alt="User 3" src={user3} />
                <Avatar alt="User 4" src={user4} />
              </AvatarGroup>
            </SistentThemeProvider>
          </Row>

          {/* Custom Spacing */}
          <h3>Custom Spacing</h3>
          <p>
            Customize the gap between avatars using the <code>spacing</code>{" "}
            prop.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <AvatarGroup spacing="medium">
                <Avatar alt="User 1" src={user1} />
                <Avatar alt="User 2" src={user2} />
                <Avatar alt="User 3" src={user3} />
              </AvatarGroup>
            </SistentThemeProvider>
          </Row>

          {/* Variant Styling */}
          <h3>Avatar Variants in Group</h3>
          <p>
            You can combine avatar shape variants like <code>rounded</code> and{" "}
            <code>square</code> inside the group.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <AvatarGroup>
                <Avatar variant="rounded" src={user1} alt="Rounded" />
                <Avatar variant="square" src={user2} alt="Square" />
                <Avatar src={user3} alt="Default" />
              </AvatarGroup>
            </SistentThemeProvider>
          </Row>

          {/* Custom surplus */}
          <h3>Custom Surplus Renderer</h3>
          <p>
            Customize the overflow display using the `renderSurplus` prop for
            more control over surplus appearance.
          </p>

          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <AvatarGroup
                max={3}
                renderSurplus={(surplus) => (
                  <span>+{surplus.toString()[0]}k</span>
                )}
                total={4251}
              >
                <Avatar src={user1} />
                <Avatar src={user2} />
                <Avatar src={user3} />
              </AvatarGroup>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentAvatarGroup;
