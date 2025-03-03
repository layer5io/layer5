import React, { useState } from "react";
import { Avatar, SistentThemeProvider } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "../button/code-block";

const avatarExamples = [
  {
    title: "Image Avatar",
    description: "Display user profile images",
    code: `<Avatar src="/path/to/user-image.jpg" alt="User Name" />`
  },
  {
    title: "Initials Avatar",
    description: "Use initials when image is unavailable",
    code: `<Avatar>JD</Avatar>`
  },
  {
    title: "Icon Avatar",
    description: "Use icons for generic representation",
    code: `<Avatar><UserIcon /></Avatar>`
  },
  {
    title: "Sized Avatars",
    description: "Adjust avatar sizes for different contexts",
    code: `<Avatar size="small" />\n<Avatar size="medium" />\n<Avatar size="large" />`
  },
  {
    title: "Custom Styling",
    description: "Apply custom styles and themes",
    code: `<Avatar src="/image.jpg" sx={{ border: '2px solid primary.main', boxShadow: 2 }} />`
  }
];

const AvatarComponent = () => {
  const { isDark } = useStyledDarkMode();
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <SistentLayout title="Avatar">
      <div className="content">
        <a id="Identity">
          <h2>Avatar Component</h2>
        </a>
        <div className="filterBtns">
          {["Overview", "Guidance", "Code"].map((tab) => (
            <TabButton
              key={tab}
              title={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>
        <p>
          The Avatar component provides a flexible visual representation of users
          or entities across digital interfaces, supporting images, initials, and icons.
        </p>
        {activeTab === "Code" && (
          <div className="code-examples">
            <h3>Avatar Implementation Variants</h3>
            {avatarExamples.map(({ title, description, code }, index) => (
              <div key={index} className="code-example">
                <h4>{title}</h4>
                <p>{description}</p>
                <CodeBlock name={`avatar-example-${index}`} code={code} />
                <div className="live-preview">
                  <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                    {title === "Image Avatar" && <Avatar src="https://via.placeholder.com/150" alt="User Avatar" />}
                    {title === "Initials Avatar" && <Avatar>JD</Avatar>}
                    {title === "Icon Avatar" && <Avatar>👤</Avatar>}
                    {title === "Sized Avatars" && (
                      <>
                        <Avatar size="small" src="https://via.placeholder.com/50" />
                        <Avatar size="medium" src="https://via.placeholder.com/75" sx={{ mx: 2 }} />
                        <Avatar size="large" src="https://via.placeholder.com/100" />
                      </>
                    )}
                    {title === "Custom Styling" && (
                      <Avatar src="https://via.placeholder.com/150" sx={{ border: "2px solid primary.main", boxShadow: 2 }} />
                    )}
                  </SistentThemeProvider>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </SistentLayout>
  );
};

export default AvatarComponent;
