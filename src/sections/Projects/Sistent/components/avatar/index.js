import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import profilePicture from "../../../../../assets/images/sistent/placeholder/user.webp";
import { SistentThemeProvider, Avatar } from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
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
          An Avatar component is used to visually represent a user, profile, or
          entity, typically through an image, initials, or icon. It is commonly
          used in interfaces to indicate identity.
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
          <p>
            Avatars are versatile visual representations that provide instant
            visual identification for users, teams, or entities within digital
            interfaces. They serve as a quick and intuitive way to personalize
            and humanize digital experiences across various applications and
            platforms.
          </p>
          <h3>Image Avatars</h3>
          <p>
            Image avatars provide the most personalized representation by
            displaying actual profile pictures, organizational logos, or
            specific user imagery.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar alt="Profile picture" src={profilePicture} />
            </SistentThemeProvider>
          </Row>
          <h3>Initials Avatar</h3>
          <p>
            When a profile image is unavailable, initials provide a professional
            and clean alternative for user identification.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar src="/broken.jpg">JS</Avatar>
              <Avatar sx={{ ml: 2 }}>AB</Avatar>
              <Avatar sx={{ ml: 2 }}>CD</Avatar>
            </SistentThemeProvider>
          </Row>
          <h3>Icon Avatar</h3>
          <p>
            Icon avatars offer a universal visual representation when specific
            imagery isn't available or appropriate.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar>
                <FaUser />
              </Avatar>
            </SistentThemeProvider>
          </Row>
          <h3>Flexible Sizing</h3>
          <p>
            Avatars can be dynamically sized to fit various design requirements
            and interface contexts.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar alt="Small" sx={{ width: 32, height: 32, mr: 2 }} />
              <Avatar alt="Medium" sx={{ width: 48, height: 48, mr: 2 }} />
              <Avatar alt="Large" sx={{ width: 64, height: 64 }} />
            </SistentThemeProvider>
          </Row>
          <h3>Variants</h3>
          <p>If you need square or rounded avatars, use the variant prop.</p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar alt="Square" variant="square" />
              <Avatar alt="Rounded" variant="rounded" sx={{ ml: 2 }} />
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentAvatar;
