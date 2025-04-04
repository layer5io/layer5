/* eslint-disable linebreak-style */
import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { Badge, SistentThemeProvider, Avatar } from "@layer5/sistent";
import { CodeBlock } from "./code-block";
import MailIcon from "@mui/icons-material/Mail";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `  <SistentThemeProvider>
       <Badge badgeContent={4} color="primary">
         <MailIcon />
       </Badge>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Badge variant="dot" color="secondary">
         <MailIcon />
       </Badge>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Badge badgeContent={4} color="primary" />
       <Badge badgeContent={4} color="secondary" />
       <Badge badgeContent={4} color="error" />
       <Badge badgeContent={4} color="warning" />
       <Badge badgeContent={4} color="success" />
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Badge 
         badgeContent={4} 
         color="primary"
         anchorOrigin={{
           vertical: 'top',
           horizontal: 'right',
         }}
       >
         <MailIcon />
       </Badge>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Avatar>
         <Badge
           overlap="circular"
           anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
           variant="dot"
           color="success"
         >
           U
         </Badge>
       </Avatar>
  </SistentThemeProvider>`,
];

const BadgeCode = () => {
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
            Badges display counts, small information indicators, or status
            markers that are attached to other interface elements.
          </p>
          <a id="Basic Badge">
            <h2>Basic Badge</h2>
          </a>
          <p>
            Examples of badges containing text, primarily using the badgeContent
            prop.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Badge badgeContent={4} color="primary">
                  <MailIcon />
                </Badge>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-badge" code={codes[0]} />
          </div>
          <h3>Dot Badge</h3>
          <p>The dot badge shows a small dot indicator without any content.</p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Badge variant="dot" color="secondary">
                  <MailIcon />
                </Badge>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="dot-badge" code={codes[1]} />
          </div>
          <h3>Badge Colors</h3>
          <p>Use the color prop to apply theme palette colors to badges.</p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <Badge badgeContent={4} color="primary">
                    <MailIcon />
                  </Badge>
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
                  <Badge badgeContent={4} color="warning">
                    <MailIcon />
                  </Badge>
                  <Badge badgeContent={4} color="success">
                    <MailIcon />
                  </Badge>
                </div>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="badge-colors" code={codes[2]} />
          </div>
          <a id="Badge Position">
            <h2>Badge Position</h2>
          </a>
          <p>Use the anchorOrigin prop to change the position of the badge.</p>
          <div className="showcase">
            <div className="items">
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
            </div>
            <CodeBlock name="badge-position" code={codes[3]} />
          </div>
          <a id="Badge with Avatar">
            <h2>Badge with Avatar</h2>
          </a>
          <p>Badges can be used with avatars to show user status.</p>
          <div className="showcase">
            <div className="items">
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
            </div>
            <CodeBlock name="badge-avatar" code={codes[4]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default BadgeCode;
