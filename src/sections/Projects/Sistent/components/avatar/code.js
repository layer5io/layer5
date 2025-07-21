import React, { useState } from "react";

import { Avatar, SistentThemeProvider } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "../button/code-block";
import user from "../../../../../assets/images/sistent/placeholder/user.webp";
const AvatarComponent = () => {
  const { isDark } = useStyledDarkMode();
  const [activeTab, setActiveTab] = useState("Overview");

  const codes = [
    "<Avatar src='/path/to/user-image.jpg' alt='User Name' />",
    `<Avatar>
  JD
</Avatar>`,
    //     },
    //     {
    //       title: "Icon Avatar",
    //       description: "Use icons for generic representation",
    //       code: (
    //         <Avatar>
    //           <FaUser />
    //         </Avatar>
    //       ),
    //       snippet: `<Avatar>
    //   <UserIcon />
    // </Avatar>`,
    //     },
    //     {
    //       title: "Sized Avatars",
    //       description: "Adjust avatar sizes for different contexts",
    //       code: `<Avatar size="small" />
    // <Avatar size="medium" />
    // <Avatar size="large" />`,
    //     },
    //     {
    //       title: "Custom Styling",
    //       description: "Apply custom styles and themes",
    //       code: `<Avatar
    //   src="/image.jpg"
    //   sx={{
    //     border: 'px solid primary.main',
    //     boxShadow: 2
    //   }}
    // />`,
    //     },
  ];
  return (
    <SistentLayout title="Avatar">
      <div className="content">
        <a id="Identity">
          <h2>Avatar Component</h2>
        </a>
        <div className="filterBtns">
          {"Overview Guidance Code".split(" ").map((tab) => (
            <TabButton
              key={tab}
              title={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>
        <p>
          The Avatar component provides a flexible visual representation of
          users or entities across digital interfaces, supporting images,
          initials, and icons.
        </p>

        {activeTab === "Code" && (
          <div className="code-examples">
            <h3>Avatar Implementation Variants</h3>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <h4>Image Avatar</h4>
              <p>Display user profile images</p>
              <div className="showcase">
                <div className="items">
                  <Avatar src={user} alt="User Name" />
                </div>
                <CodeBlock name="image-avatar" code={codes[0]} />
              </div>

              <h4>Initials Avatar</h4>
              <p>Use initials when image is unavailable</p>
              <div className="showcase">
                <div className="items">
                  <Avatar>JD</Avatar>
                </div>
                <CodeBlock name="initials-avatar" code={codes[1]} />
              </div>
            </SistentThemeProvider>
          </div>
        )}
      </div>
    </SistentLayout>
  );
};

export default AvatarComponent;
