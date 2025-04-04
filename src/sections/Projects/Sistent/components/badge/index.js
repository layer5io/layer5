/* eslint-disable linebreak-style */
import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Badge, Avatar } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Col, Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import MailIcon from "@mui/icons-material/Mail";

const SistentBadge = () => {
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
            Badges are small, often circular or rectangular elements that can
            display a number, status, or label. They are typically used to draw
            attention to specific information or to indicate the status of an
            item. Badges can be used in various contexts, such as notifications,
            labels, or status indicators.
          </p>
          <a id="Types">
            <h2>Types</h2>
          </a>
          <p>
            Different types of badges serve different purposes in user
            interfaces. The visual distinction helps users quickly understand
            the context and importance of the information being presented.
          </p>
          <h3>Standard Badge</h3>
          <p>
            Standard badges display a small circular notification indicator.
            They are commonly used to show counts or statuses on icons, buttons,
            or other UI elements.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Badge badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
            </SistentThemeProvider>
          </Row>
          <h3>Dot Badge</h3>
          <p>
            Dot badges are minimalist indicators that show a small dot rather
            than a number. They're useful when you just need to indicate the
            presence of notifications without specifying the count.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Badge variant="dot" color="secondary">
                <MailIcon />
              </Badge>
            </SistentThemeProvider>
          </Row>
          <h3>Status Badge</h3>
          <p>
            Status badges can be used to indicate the state of an item or
            component. They typically use different colors to represent
            different statuses such as online/offline, active/inactive, or
            success/error.
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
          <a id="Colors">
            <h2>Colors</h2>
          </a>
          <p>
            Badges come in different colors to help convey specific meanings.
            The color choice should be consistent across your application to
            maintain a clear visual language for users.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Badge
                badgeContent={4}
                color="primary"
                style={{ margin: "0 10px" }}
              >
                <MailIcon />
              </Badge>
              <Badge
                badgeContent={4}
                color="secondary"
                style={{ margin: "0 10px" }}
              >
                <MailIcon />
              </Badge>
              <Badge
                badgeContent={4}
                color="error"
                style={{ margin: "0 10px" }}
              >
                <MailIcon />
              </Badge>
              <Badge
                badgeContent={4}
                color="warning"
                style={{ margin: "0 10px" }}
              >
                <MailIcon />
              </Badge>
              <Badge
                badgeContent={4}
                color="success"
                style={{ margin: "0 10px" }}
              >
                <MailIcon />
              </Badge>
            </SistentThemeProvider>
          </Row>
          <a id="Positioning">
            <h2>Positioning</h2>
          </a>
          <p>
            Badges can be positioned in different locations around their parent
            element. The default position is top-right, but they can be adjusted
            to appear at various anchor points based on design requirements.
          </p>
          <Row $Hcenter className="image-container">
            <Col sm={12}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <Badge
                    badgeContent={4}
                    color="primary"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <MailIcon />
                  </Badge>
                  <Badge
                    badgeContent={4}
                    color="primary"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MailIcon />
                  </Badge>
                  <Badge
                    badgeContent={4}
                    color="primary"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                  >
                    <MailIcon />
                  </Badge>
                  <Badge
                    badgeContent={4}
                    color="primary"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <MailIcon />
                  </Badge>
                </div>
              </SistentThemeProvider>
            </Col>
          </Row>
          <a id="Visibility">
            <h2>Visibility</h2>
          </a>
          <p>
            Badges can be shown or hidden based on their content or specific
            conditions. For example, a badge might only appear when there are
            unread notifications and disappear when all notifications have been
            viewed.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Badge badgeContent={0} color="primary" showZero>
                <MailIcon />
              </Badge>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentBadge;
