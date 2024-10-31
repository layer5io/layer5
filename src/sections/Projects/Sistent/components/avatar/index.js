import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Avatar, AvatarGroup, Badge, styled } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Col, Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import Image from "../../../../../assets/images/avatar-images/avatar.png";
import Image1 from "../../../../../assets/images/avatar-images/avatar1.png";
import Image2 from "../../../../../assets/images/avatar-images/avatar2.png";

// removing merge conflicts

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


const SistentAvatar = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Avatar" >
      <div className="content">
        <a id="Identity">
          <h2>Avatar</h2>
        </a>
        <p>
        An avatar is a visual component used to represent a user or entity, typically through images, text, or icons. It is versatile and can be used in various contexts, like user profiles, chat apps, or contact lists. Avatars come in different sizes and shapes, such as circular or square, and can include badges or group displays. They help create a more personalized interface by visually identifying users or content sources in an application
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/componavatar"
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
          An avatar is a digital representation of a user or entity, commonly found in profiles, messaging apps, or directories. These can be images, initials, or symbols and come in various shapes, like circular or square. Avatars enhance user experience by offering visual cues for personalization and recognition, and may feature badges or group identifiers to create a more engaging interface.
          </p>
          <a id="Attributes">
            <h2>Avatar Attributes</h2>
          </a>
          <p>
            Avatar attributes are customizable properties that enhance their appearance and functionality. Key attributes include:
          </p>
          <ul>
            <li><strong>src</strong>: The URL for an image avatar.</li>
            <li><strong>alt</strong>: Text displayed when the image fails to load.</li>
            <li><strong>sx</strong>: Custom styles for color, shape, and size.</li>
            <li><strong>children</strong>: Used in letter avatars to show initials or characters.</li>
            <li><strong>variant</strong>: Controls the avatar's shape (circular or square).</li>
            <li><strong>sizes</strong>: Adjusts avatar size (small, medium, large).</li>
          </ul>
          <p>
            These attributes help avatars integrate into various UI designs and enhance personalization.
          </p>
          <a id="Types">
            <h2>Types</h2>
          </a>
          <p>
          To improve user interaction, image avatars showcase photos or illustrations for easy recognition in social platforms, while letter avatars represent users with initials or characters, ideal when images are unavailable. Both types can feature distinct background colors, enhancing personalization and engagement within applications. This diversity in avatars streamlines navigation and fosters a more engaging user experience
          </p>
          <h3>Default Avatars</h3>
          <p>
          If we do not pass anything as children in avatar then a default avatar comes
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar></Avatar>
            </SistentThemeProvider>
          </Row>
          <h3>Letter Avatars</h3>
          <p>
          Letter avatars use initials or characters to represent users when images aren't available. They are simple and can be customized with background colors, enhancing personalization and user recognition within the interface.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar>H</Avatar>
            </SistentThemeProvider>
          </Row>
          <h3>Image Avatars</h3>
          <p>
          Image avatars are graphical representations, typically used to display user profiles or identities in applications. They enhance user recognition and engagement, making interfaces more personalized.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode=    {isDark ? "dark" : "light"}>
              <Avatar alt="User Name"  src = {Image} />
            </SistentThemeProvider>
          </Row>
          <h3>Variants Avatars</h3>
          <p>
          Variant avatars allow flexibility in shape, often switching between circular, square, or rounded square designs. This variation provides adaptability for different design needs and user interfaces. To use a variant avatar, you can pass a variant prop, which typically accepts values like "circle," "square," or "rounded" to define the avatar's shape.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar variant="square" alt="Square Avatar" src={Image} style={{ marginRight: "16px" }} />
            </SistentThemeProvider>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar variant="rounded" alt="Rounded Avatar" src={Image} />
            </SistentThemeProvider>
          </Row>
          <h3>Grouped Avatars</h3>
          <p>
          Grouped avatars show multiple users together, highlighting connections like teams or friends. They can be customized to display a specific number of avatars, making recognition easy within the interface. To create grouped avatars, you pass an array of images or initials, which effectively conveys relationships among users
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <AvatarGroup>
                <Avatar alt="User 1" src={Image} />
                <Avatar alt="User 2" src={Image1} />
                <Avatar alt="User 3" src={Image2} />
              </AvatarGroup>
            </SistentThemeProvider>
          </Row>
          <h3>Total Avatars</h3>
          <p>
          If you need to control the total number of avatars not shown, you can use the total prop.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <AvatarGroup total={24}>
                <Avatar alt="Remy Sharp" src={Image} />
                <Avatar alt="Travis Howard" src={Image1} />
                <Avatar alt="Agnes Walker" src={Image2} />
              </AvatarGroup>
            </SistentThemeProvider>
          </Row>
          <h3>Avatars with Badge</h3>
          <p>
          Avatars with badges enhance user recognition by combining visual identity with additional context, such as notifications or status indicators. Badges can display vital information like unread messages or online presence, making the interface more informative. These elements can be integrated easily, providing users with quick insights while maintaining a clean design.
          </p>
          <ul>
            <li>
              <strong>Dot Badge</strong>: A small dot indicates presence or status, enhancing visibility without clutter.
              <Row $Hcenter className="image-container">
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <CustomBadge>
                    <Avatar alt="User Dot Badge" src={Image} />
                  </CustomBadge>
                </SistentThemeProvider>
              </Row>
            </li>
            <li>
              <strong>Content Badge</strong>: Displays a small avatar or numerical value, providing additional context or information.
              <Row $Hcenter className="image-container">
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    badgeContent={
                      <SmallAvatar alt="Remy Sharp" src={Image2} />
                    }
                  >
                    <Avatar alt="Travis Howard" src={Image} />
                  </Badge>
                </SistentThemeProvider>
              </Row>
            </li>

          </ul>
          <h3>Icon avatars</h3>
          <p>
          Icon avatars represent users or entities through symbols or icons rather than images or text. They are commonly used in apps or dashboards where space is limited, or images aren’t available. Icon avatars provide a sleek, minimalist approach to user representation.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>

            </SistentThemeProvider>
          </Row>

          <a id="Sizes">
            <h2>Sizes</h2>
          </a>
          <p>
          Avatars come in various sizes, making them adaptable to different contexts and design needs. The size you choose depends on the layout and user interface. Larger avatars are often used for profile displays or in places where more visual emphasis is needed, while smaller avatars work well in compact areas, such as lists or notifications. You can easily adjust the size using style properties or predefined classes, ensuring consistency in your design
          </p>
          <h3>Small</h3>
          <p>
          Usually 24x24 pixels, ideal for notifications or small UI elements
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar alt="User" src={Image} style={{ width: "24px", height: "24px" }} />
            </SistentThemeProvider>
          </Row>
          <h3>Medium</h3>
          <p>
          Typically 40x40 pixels, commonly used in lists or chat interfaces
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Avatar alt="User" src={Image} style={{ width: "40px", height: "40px" }} />
            </SistentThemeProvider>
          </Row>
          <h3>Large</h3>
          <p>
          Generally 56x56 pixels, suitable for profile displays or main UI components
          </p>
          <Row className="image-container" style={{ justifyContent: "center" }}>
            <Col sm={12} style={{ display: "flex", justifyContent: "center" }}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Avatar alt="User" src={Image} style={{ width: "56px", height: "56px" }} />
              </SistentThemeProvider>
            </Col>
          </Row>

          <h3>Extra Large</h3>
          <p>
          Often 72x72 pixels or larger, used for profile pages or featured sections
          </p>
          <Row className="image-container" style={{ justifyContent: "center" }}>
            <Col sm={12} style={{ display: "flex", justifyContent: "center" }}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Avatar alt="User" src={Image} style={{ width: "72px", height: "72px" }} />
              </SistentThemeProvider>
            </Col>
          </Row>
          <p>
            <strong>NOTE:</strong>
          </p>
          <p>
            These sizes are being specified with numerical values because though
            the same size is used across screen resolutions, they have different
            roles. On desktop for instance, the 56px button is a the default
            size, and 48px the small size, while on mobile, 56px is large and
            48px is the default size. Preferred button sizes (height) are
            usually arrived at through exploration and proper consideration of
            industry standards and best practices.
          </p>
          <a id="Adding Icons">
            <h2>Adding Icons</h2>
          </a>
          <p>
          Avatars are often used alongside labels to provide added visual cues for users, enhancing communication or reinforcing identity within an interface. Depending on the layout or context, avatars can be placed on the left or right side of the accompanying label. There are no strict rules for avatar placement, but spacing and alignment are important to maintain a clean, readable design. For full-width elements, avatars should be centered alongside labels to ensure proper balance and clarity in the overall presentation.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentAvatar;
