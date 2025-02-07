import React, { useState } from "react";
import { Avatar, SistentThemeProvider } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "../button/code-block";

const AvatarComponent = () => {
  const { isDark } = useStyledDarkMode();
  const [activeTab, setActiveTab] = useState("Overview");

  const avatarExamples = [
    {
      title: "Image Avatar",
      description: "Display user profile images",
      code: `<Avatar 
  src="/path/to/user-image.jpg" 
  alt="User Name"
/>`
    },
    {
      title: "Initials Avatar",
      description: "Use initials when image is unavailable",
      code: `<Avatar>
  JD
</Avatar>`
    },
    {
      title: "Icon Avatar",
      description: "Use icons for generic representation",
      code: `<Avatar>
  <UserIcon />
</Avatar>`
    },
    {
      title: "Sized Avatars",
      description: "Adjust avatar sizes for different contexts",
      code: `<Avatar size="small" />
<Avatar size="medium" />
<Avatar size="large" />`
    },
    {
      title: "Custom Styling",
      description: "Apply custom styles and themes",
      code: `<Avatar 
  src="/image.jpg"
  sx={{
    border: '2px solid primary.main',
    boxShadow: 2
  }}
/>`
    }
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
          The Avatar component provides a flexible visual representation of users
          or entities across digital interfaces, supporting images, initials, and icons.
        </p>
        {activeTab === "Code" && (
          <div className="code-examples">
            <h3>Avatar Implementation Variants</h3>
            {avatarExamples.map((example, index) => (
              <div key={index} className="code-example">
                <h4>{example.title}</h4>
                <p>{example.description}</p>
                <CodeBlock
                  name={`avatar-example-${index}`}
                  code={example.code}
                />
                <div className="live-preview">
                  <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                    {example.title === "Image Avatar" && (
                      <Avatar src="https://via.placeholder.com/150" alt="User Avatar" />
                    )}
                    {example.title === "Initials Avatar" && (
                      <Avatar>JD</Avatar>
                    )}
                    {example.title === "Icon Avatar" && (
                      <Avatar>👤</Avatar>
                    )}
                    {example.title === "Sized Avatars" && (
                      <>
                        <Avatar size="small" src="https://via.placeholder.com/50" />
                        <Avatar size="medium" src="https://via.placeholder.com/75" sx={{ mx: 2 }} />
                        <Avatar size="large" src="https://via.placeholder.com/100" />
                      </>
                    )}
                    {example.title === "Custom Styling" && (
                      <Avatar
                        src="https://via.placeholder.com/150"
                        sx={{
                          border: "2px solid primary.main",
                          boxShadow: 2
                        }}
                      />
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