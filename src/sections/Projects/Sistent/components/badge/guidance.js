/* eslint-disable linebreak-style */
import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { Badge, SistentThemeProvider, Avatar } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const BadgeGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Badge">
      <div className="content">
        <a id="Identity">
          <h2>Badge</h2>
        </a>
        <p>
          A badge is a small piece of information that is used to convey a
          specific message or status. It is often used to provide additional
          context or information about an item, such as a notification count,
          status indicator, or label.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/badge"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/badge")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/badge/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/badge/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/badge/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/badge/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            For proper application, badges should be used consistently
            throughout the user interface to maintain clarity and user
            understanding.
          </p>
          <a id="Function">
            <h2>Function</h2>
          </a>
          <p>
            The function of badges determines how they should be used in
            different scenarios to provide users with additional context or
            information.
          </p>
          <h3>Notification Badge</h3>
          <p>
            Notification badges are commonly used to display counts of unread
            messages, alerts, or notifications. They typically appear as small
            circular indicators with numbers and are positioned at the top-right
            corner of icons, buttons, or user avatars.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon />
              </Badge>
            </SistentThemeProvider>
          </Row>
          <h3>Status Badge</h3>
          <p>
            Status badges indicate the current state of an item or user. They
            can show whether a user is online/offline, if a service is
            active/inactive, or if a process is pending/completed. Status badges
            often use color coding to convey meaning, such as green for "online"
            or red for "error."
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                  color="success"
                >
                  U
                </Badge>
              </Avatar>
            </SistentThemeProvider>
          </Row>
          <h3>Label Badge</h3>
          <p>
            Label badges categorize or tag elements in the interface. They might
            indicate features like "New," "Premium," or "Beta" to highlight
            special characteristics of an item. These badges are often
            rectangular and contain text rather than just a number or dot.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  padding: "10px",
                  border: "1px solid #ccc",
                }}
              >
                <div
                  style={{ position: "absolute", top: "-10px", right: "-10px" }}
                >
                  <Badge
                    badgeContent="NEW"
                    color="primary"
                    sx={{ padding: "0 8px" }}
                  />
                </div>
                Feature Item
              </div>
            </SistentThemeProvider>
          </Row>

          <a id="Color Usage">
            <h2>Color Usage</h2>
          </a>
          <p>
            Colors play a crucial role in communicating the meaning and
            importance of badges. Using consistent color patterns helps users
            quickly understand the information being presented.
          </p>
          <h3>Primary Color</h3>
          <p>
            Primary color badges are typically used for standard notifications
            or counts that don't have a specific urgency level.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Badge badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
            </SistentThemeProvider>
          </Row>
          <h3>Secondary Color</h3>
          <p>
            Secondary color badges can be used to differentiate between
            different types of notifications or to create visual hierarchy.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </SistentThemeProvider>
          </Row>
          <h3>Error Color</h3>
          <p>
            Error color badges (typically red) indicate important notifications
            that require immediate attention or critical status information.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </SistentThemeProvider>
          </Row>
          <h3>Warning Color</h3>
          <p>
            Warning color badges (typically yellow/orange) indicate
            notifications or status that requires attention but isn't critical.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Badge badgeContent={4} color="warning">
                <MailIcon />
              </Badge>
            </SistentThemeProvider>
          </Row>
          <h3>Success Color</h3>
          <p>
            Success color badges (typically green) indicate positive status or
            completed actions.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Badge badgeContent={4} color="success">
                <MailIcon />
              </Badge>
            </SistentThemeProvider>
          </Row>

          <a id="Best Practices">
            <h2>Best Practices</h2>
          </a>
          <p>
            When using badges in your interface, consider these guidelines to
            ensure they're effective and user-friendly:
          </p>
          <ul>
            <li>
              <strong>Keep it Simple:</strong> Badges should be concise and only
              display essential information. For notification counts, consider
              using "99+" for large numbers to save space.
            </li>
            <li>
              <strong>Consistent Positioning:</strong> Place badges in
              consistent locations relative to their parent elements to create a
              predictable pattern for users.
            </li>
            <li>
              <strong>Use Color Meaningfully:</strong> Choose badge colors
              purposefully to convey information about priority or status.
            </li>
            <li>
              <strong>Ensure Visibility:</strong> Make sure badges have
              sufficient contrast against their background to be easily visible.
            </li>
            <li>
              <strong>Avoid Overuse:</strong> Too many badges can create visual
              noise. Use them sparingly for important information only.
            </li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default BadgeGuidance;
