import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Avatar } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentAvatar = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Avatar">
      <div className="content">
        <a id="Identity">
          <h2>Avatar</h2>
        </a>
        <p>
          Avatars are versatile visual representations that provide instant
          visual identification for users, teams, or entities within digital
          interfaces. They serve as a quick and intuitive way to personalize
          and humanize digital experiences across various applications and
          platforms.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/avatar"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/avatar")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/avatar/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/avatar/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/avatar/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/avatar/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <h3>Core Functionality</h3>
          <p>
            Avatars are designed to be flexible and adaptable, supporting
            multiple representation methods:
          </p>
          <ul>
            <li>
              <strong>Profile Images:</strong> Display actual user or entity
              photographs for precise identification.
            </li>
            <li>
              <strong>Initials:</strong> Generate text-based avatars using
              user's name initials when images are unavailable.
            </li>
            <li>
              <strong>Icons:</strong> Use symbolic representations when specific
              images aren't applicable.
            </li>
          </ul>

          <h3>Image Avatar</h3>
          <p>
            Image avatars provide the most personalized representation by
            displaying actual profile pictures, organizational logos, or
            specific user imagery.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar src="https://via.placeholder.com/150" alt="User Avatar" />
            </SistentThemeProvider>
          </Row>

          <h3>Initials Avatar</h3>
          <p>
            When a profile image is unavailable, initials provide a
            professional and clean alternative for user identification.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar>JS</Avatar>
              <Avatar sx={{ ml: 2 }}>AB</Avatar>
              <Avatar sx={{ ml: 2 }}>CD</Avatar>
            </SistentThemeProvider>
          </Row>

          <h3>Icon Avatar</h3>
          <p>
            Icon avatars offer a universal visual representation when
            specific imagery isn't available or appropriate.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar>
                <span role="img" aria-label="user-icon">👤</span>
              </Avatar>
              <Avatar sx={{ ml: 2 }}>
                <span role="img" aria-label="team-icon">👥</span>
              </Avatar>
              <Avatar sx={{ ml: 2 }}>
                <span role="img" aria-label="robot-icon">🤖</span>
              </Avatar>
            </SistentThemeProvider>
          </Row>

          <h3>Flexible Sizing</h3>
          <p>
            Avatars can be dynamically sized to fit various design
            requirements and interface contexts.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar
                src="https://via.placeholder.com/150"
                alt="Small"
                sx={{ width: 32, height: 32, mr: 2 }}
              />
              <Avatar
                src="https://via.placeholder.com/150"
                alt="Medium"
                sx={{ width: 48, height: 48, mr: 2 }}
              />
              <Avatar
                src="https://via.placeholder.com/150"
                alt="Large"
                sx={{ width: 64, height: 64 }}
              />
            </SistentThemeProvider>
          </Row>

          <h3>Best Practices</h3>
          <ul>
            <li>
              Use high-quality, recognizable images when possible
            </li>
            <li>
              Ensure proper contrast and readability for initials
            </li>
            <li>
              Maintain consistent sizing within a specific interface context
            </li>
            <li>
              Provide meaningful alt text for accessibility
            </li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentAvatar;