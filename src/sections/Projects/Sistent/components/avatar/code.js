import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Avatar, AvatarGroup, styled, Badge } from "@layer5/sistent";
import { CodeBlock } from "./code-block";
import { SistentLayout } from "../../sistent-layout";
import Image from "../../../../../assets/images/avatar-images/avatar.jpeg";
import Image1 from "../../../../../assets/images/avatar-images/avatar1.jpeg";
import Image2 from "../../../../../assets/images/avatar-images/avatar2.png";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));


const CustomBadge = ({ children, }) => {
  const badgeStyle = {
    position: "relative",
    display: "inline-block",
  };

  const dotStyle = {
    position: "absolute",
    bottom: "5%",
    right: "5%",
    width: "30%",
    height: "30%",
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

const codes = [
`<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
  <Avatar></Avatar>
</SistentThemeProvider>`,

`<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
  <Avatar>H</Avatar>
</SistentThemeProvider>`,

`<SistentThemeProvider initialMode=    {isDark ? "dark" : "light"}>
    <Avatar alt="User Name"  src = {Path to your image ,icon} />
</SistentThemeProvider>`,

` <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <Avatar variant="square" alt="Square Avatar" src={Path to your image ,icon} style={{ marginRight: "16px" }} />
  </SistentThemeProvider>
  <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <Avatar variant="rounded" alt="Rounded Avatar" src={Path to your image ,icon} />
  </SistentThemeProvider>`,

` <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <AvatarGroup>
      <Avatar alt="User 1" src={Image} />
      <Avatar alt="User 2" src={Image1} />
      <Avatar alt="User 3" src={Image2} />
    </AvatarGroup>
  </SistentThemeProvider>`,

`<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
  <AvatarGroup total={24}>
    <Avatar alt="Remy Sharp" src={Path to your image ,icon} />
    <Avatar alt="Travis Howard" src={Path to your image ,icon} />
    <Avatar alt="Agnes Walker" src={Path to your image ,icon} />
  </AvatarGroup>
</SistentThemeProvider>`,
    `
import { styled, Badge } from "@layer5/sistent";

const CustomBadge = ({ children, smallAvatarSrc }) => {
  const badgeStyle = {
    position: "relative",
    display: "inline-block",
  };

  const smallAvatarStyle = {
    position: "absolute",
    bottom: "-10%",
    right: "-10%",
    width: "35%",
    height: "35%",
    borderRadius: "50%",
    border: "2px solid #fff",
    overflow: "hidden",
  };

  const dotStyle = {
    position: "absolute",
    bottom: "5%",
    right: "5%",
    width: "30%",
    height: "30%",
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

<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
  <CustomBadge>
    <Avatar alt="User Dot Badge" src={Path to your image ,icon} />
  </CustomBadge>
</SistentThemeProvider>`,

`
import { Badge } from "@layer5/sistent";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: "2px solid ",
}));


<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
  <Badge
    overlap="circular"
    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    badgeContent={
      <SmallAvatar alt="Remy Sharp" src={Path to your image ,icon} />
      }
    >
    <Avatar alt="Travis Howard" src={Path to your image ,icon} />
  </Badge>
</SistentThemeProvider>`,

`<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
  <Avatar alt="User" src={Path to your image ,icon} style={{ width: "24px", height: "24px" }} />
</SistentThemeProvider>`,

`<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <Avatar alt="User" src={Path to your image ,icon} style={{ width: "40px", height: "40px" }} />
</SistentThemeProvider>`,

`<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <Avatar alt="User" src={Path to your image ,icon} style={{ width: "56px", height: "56px" }} />
  </SistentThemeProvider>`,

`<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <Avatar alt="User" src={Path to your image ,icon} style={{ width: "72px", height: "72px" }} />
</SistentThemeProvider>`,

];

export const AvatarCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Avatar" >
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
            // onClick={() => navigate("/projects/sistent/identity/color/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
          Avatars serve as visual identifiers in a user interface, enhancing user recognition and engagement. They can be strategically positioned throughout the interface, often representing users, groups, or content sources. By incorporating avatars, applications can create a more personalized and interactive experience, guiding users through actions and interactions in a visually appealing manner.
          </p>
          <a id="Basic Button">
            <h2>Types Of Avatars</h2>
          </a>
          {/* <p> If we do not pass anything as children in avatar then a default avatar comes</p> */}
          <h3>Default Avatars</h3>
          <p>
          If we do not pass anything as children in avatar then a default avatar comes
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Avatar></Avatar>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Default Avatars" code={codes[0]} />
          </div>
          <h3>Letter Avatars</h3>
          <p>
          Letter avatars use initials or characters to represent users when images aren't available
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Avatar>H</Avatar>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Letter Avatars" code={codes[1]} />
          </div>
          <h3>Image Avatars</h3>
          <p>
          Image avatars are graphical representations, typically used to display user profiles or identities in applications
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode=   {isDark ? "dark" : "light"}>
                <Avatar alt="User Name"  src = {Image} />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Image Avatars" code={codes[2]} />
          </div>
          <h3>Variants Avatars</h3>
          <p>
          Variant avatars allow flexibility in shape, often switching between circular, square, or rounded square designs.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Avatar variant="square" alt="Square Avatar" src={Image} style={{ marginRight: "16px" }} />
              </SistentThemeProvider>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Avatar variant="rounded" alt="Rounded Avatar" src={Image} />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Variants Avatars" code={codes[3]} />
          </div>
          <h3>Grouped Avatars</h3>
          <p>
          Image avatars are graphical representations, typically used to display user profiles or identities in applications
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <AvatarGroup>
                  <Avatar alt="User 1" src={Image} />
                  <Avatar alt="User 2" src={Image1} />
                  <Avatar alt="User 3" src={Image2} />
                </AvatarGroup>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Grouped Avatars" code={codes[4]} />
          </div>
          <h3>Total Avatars</h3>
          <p>
          If you need to control the total number of avatars not shown, you can use the total prop.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <AvatarGroup total={24}>
                  <Avatar alt="Remy Sharp" src={Image} />
                  <Avatar alt="Travis Howard" src={Image1} />
                  <Avatar alt="Agnes Walker" src={Image2} />
                </AvatarGroup>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Total Avatars" code={codes[5]} />
          </div>
          <h3>Avatars with Dot Badge</h3>
          <p>
            A small dot indicates presence or status, enhancing visibility without clutter
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <CustomBadge>
                  <Avatar alt="User Dot Badge" src={Image} />
                </CustomBadge>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Avatars with Dot Badge" code={codes[6]} />
          </div>
          <h3>Avatars with Content Badge</h3>
          <p>
            Displays a small avatar or numerical value, providing additional context or information.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  badgeContent={
                    <SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  }
                >
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </Badge>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Avatars with Content Badge" code={codes[7]} />
          </div>
          <a id="Sizes">
            <h2>Sizes</h2>
          </a>
          <p>
          Avatars come in various sizes, making them adaptable to different contexts and design needs. The size you choose depends on the layout and user interface.
          </p>
          <h3>Small</h3>
          <p>
          Usually 24x24 pixels, ideal for notifications or small UI elements
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Avatar alt="User" src={Image} style={{ width: "24px", height: "24px" }} />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="24x24" code={codes[8]} />
          </div>
          <h3>Medium</h3>
          <p>
          Typically 40x40 pixels, commonly used in lists or chat interfaces
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Avatar alt="User" src={Image} style={{ width: "40px", height: "40px" }} />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="40x40" code={codes[9]} />
          </div>
          <h3>Large</h3>
          <p>
          Generally 56x56 pixels, suitable for profile displays or main UI components
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Avatar alt="User" src={Image} style={{ width: "56px", height: "56px" }} />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="56x56" code={codes[10]} />
          </div>
          <h3>Extra Large</h3>
          <p>
          Often 72x72 pixels or larger, used for profile pages or featured sections
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Avatar alt="User" src={Image} style={{ width: "72px", height: "72px" }} />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="72x72" code={codes[11]} />
          </div>
          <a id="Adding Icons">
            <h2>Adding Icons</h2>
          </a>
          <p>
          Avatars are often used alongside labels to provide added visual cues for users, enhancing communication or reinforcing identity within an interface. Depending on the layout or context, avatars can be placed on the left or right side of the accompanying label
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};
