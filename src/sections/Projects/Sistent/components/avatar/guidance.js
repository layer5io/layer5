import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { SistentThemeProvider, Avatar, } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import Image from "../../../../../assets/images/avatar-images/avatar.png";
import Image1 from "../../../../../assets/images/avatar-images/avatar1.png";
import Image2 from "../../../../../assets/images/avatar-images/avatar2.png";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";


const CustomBadge = ({ children }) => {
  const badgeStyle = {
    position: "relative",
    display: "inline-block",
  };

  const dotStyle = {
    position: "absolute",
    bottom: "5%",
    right: "5%",
    width: "15%",
    height: "15%",
    backgroundColor: "#44b700",
    borderRadius: "50%",
    border: "2px solid #fff",
  };

  return (
    <div style={badgeStyle}>
      {children}
      <span style={dotStyle}></span>
    </div>
  );
};


export const AvatarGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Avatar">
      <div className="content">
        <a id="Identity">
          <h2>Avatar</h2>
        </a>
        <p>
        An avatar is a visual component used to represent a user or entity, typically through images, text, or icons. It is versatile and can be used in various contexts, like user profiles, chat apps, or contact lists.
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
          For proper application, avatars can be used in various contexts to help visually identify users or elements. They ensure a consistent and recognizable approach when representing entities across digital experiences. By providing immediate visual cues, avatars aid in enhancing user recognition, personalization, and context across different parts of a digital interface. This makes interactions smoother and more intuitive, supporting a cohesive user journey across the platform.
          </p>
          <a id="Function">
            <h2>Function</h2>
          </a>
          <p>
            The function of different buttons is what determines its usage and
            how well suited it is to be applied in a given scenario to solve an
            existing problem or complete a pending task. Functions or roles that
            can be assigned to buttons in a particular design include:
          </p>
          <h3>Primary Avatar</h3>
          <p>
            A primary avatar is the main visual identifier of a user or content. It’s typically used in profiles or lists to provide a recognizable image or symbol that users can associate with a person or entity.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar
                alt="Primary User"
                src={Image}
                sx={{ width: 56, height: 56, bgcolor: "primary.main" }}
              />
            </SistentThemeProvider>
          </Row>

          <h3>Supporting Avatar</h3>
          <p>
            Supporting avatars may be used in group contexts, where multiple entities are involved. They act as secondary identifiers, supporting the primary avatar by providing additional context.
          </p>

          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar
                alt="User 1"
                src={Image}
                sx={{ width: 40, height: 40 }}
              />
              <Avatar
                alt="User 2"
                src={Image1}
                sx={{ width: 40, height: 40 }}
              />
              <Avatar
                alt="User 3"
                src={Image2}
                sx={{ width: 40, height: 40 }}
              />
            </SistentThemeProvider>
          </Row>
          <h3>Notification Avatar</h3>
          <p>
            A notification avatar is used in alert-based components, offering visual cues related to important messages or changes. These avatars are typically smaller but maintain clarity and association with the user or content.
          </p>

          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <CustomBadge>
                <Avatar alt="User Dot Badge" src={Image} />
              </CustomBadge>
            </SistentThemeProvider>
          </Row>

          <a id="Labeling">
            <h2>Labeling</h2>
          </a>
          <p>
            The label of an avatar is essential in providing context and clarity. Avatar labels should be concise yet descriptive, giving users a clear understanding of the avatar’s purpose.
          </p>
          <h3>Case style</h3>
          <p>
            Consistent case styles across all avatars enhance readability and reduce distractions. Title case or another uniform style should be applied to maintain visual consistency.
          </p>
          <h3>Font Weight</h3>
          <p>
            Font weight should ensure legibility and clarity. Use readable fonts that are easy to interpret, without causing distractions or difficulty for users.
          </p>
          <h3>Content</h3>
          <p>
            Avatar labels should be short and to the point, typically words or brief phrases that summarize the avatar’s role. Avoid long sentences to maintain clarity and uniformity.
          </p>

        </div>
      </div>
    </SistentLayout>
  );
};
