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
          Avatars are used to represent users and entities. They can display
          images, icons, or initials based on the context.
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
          <h3>Image Avatar</h3>
          <p>
            Image avatars display profile pictures, logos, or other user
            images.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar src="https://via.placeholder.com/150" alt="User Avatar" />
            </SistentThemeProvider>
          </Row>
          <h3>Initials Avatar</h3>
          <p>
            When an image is unavailable, avatars can display user initials.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar>JS</Avatar>
            </SistentThemeProvider>
          </Row>
          <h3>Icon Avatar</h3>
          <p>
            Avatars can also use icons when representing users or objects.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar>
                <span role="img" aria-label="user-icon">
                  👤
                </span>
              </Avatar>
            </SistentThemeProvider>
          </Row>
          <h3>Sizes</h3>
          <p>Avatars come in different sizes to suit various use cases.</p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar src="https://via.placeholder.com/150" alt="Small" sx={{ width: 32, height: 32 }} />
              <Avatar src="https://via.placeholder.com/150" alt="Medium" sx={{ width: 48, height: 48 }} />
              <Avatar src="https://via.placeholder.com/150" alt="Large" sx={{ width: 64, height: 64 }} />
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentAvatar;