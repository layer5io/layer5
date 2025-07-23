import React, { useState } from "react";
import { Avatar, SistentThemeProvider } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "../button/code-block";
import user from "../../../../../assets/images/sistent/placeholder/user.webp";
import { FaUser } from "@react-icons/all-files/fa/FaUser";

const TABS = ["Overview", "Guidance", "Code"];

const avatarExamples = [
  {
    title: "Image Avatar",
    description: "Display user profile images.",
    element: <Avatar src={user} alt="User Name" />,
    code: "<Avatar src=\"/path/to/user-image.jpg\" alt=\"User Name\" />",
    id: "image-avatar",
  },
  {
    title: "Initials Avatar",
    description: "Use initials when an image is unavailable.",
    element: <Avatar>JD</Avatar>,
    code: "<Avatar>JD</Avatar>",
    id: "initials-avatar",
  },
  {
    title: "Icon Avatar",
    description: "Use icons for generic representation.",
    element: (
      <Avatar>
        <FaUser />
      </Avatar>
    ),
    code: "<Avatar><UserIcon /></Avatar>",
    id: "icon-avatar",
  },
  {
    title: "Sized Avatars",
    description: "Adjust avatar sizes to fit various contexts.",
    element: (
      <>
        <Avatar size="small" />
        <Avatar size="medium" />
        <Avatar size="large" />
      </>
    ),
    code: `<>
  <Avatar size="small" />
  <Avatar size="medium" />
  <Avatar size="large" />
</>`,
    id: "sized-avatar",
  },
  {
    title: "Custom Styling",
    description: "Apply custom styles using the sx prop.",
    element: (
      <Avatar
        src="/image.jpg"
        alt="Styled Avatar"
        sx={{
          border: "1px solid",
          boxShadow: 2,
        }}
      />
    ),
    code: `<Avatar
  src="/image.jpg"
  sx={{
    border: '1px solid',
    boxShadow: 2,
  }}
/>`,
    id: "custom-avatar",
  },
];

const AvatarComponent = () => {
  const { isDark } = useStyledDarkMode();
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <SistentLayout title="Avatar">
      <section className="content">
        <a id="Identity">
          <h2>Avatar</h2>
        </a>
        <p>
          Below are code examples demonstrating different ways to use the{" "}
          <code>Avatar</code> component—including image-based avatars, initials,
          icons, sizing variations, and custom styling. These implementations
          showcase the flexibility and adaptability of the component across
          various interface needs.
        </p>
        <div className="filterBtns">
          {TABS.map((tab) => (
            <TabButton
              key={tab}
              title={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>

        <p>
          The Avatar component offers a flexible visual representation of users
          or entities, supporting profile images, initials, icons, and
          customizable styles.
        </p>

        {activeTab === "Code" && (
          <div className="code-examples">
            <h3>Avatar Implementation Variants</h3>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              {avatarExamples.map(
                ({ title, description, element, code, id }) => (
                  <section className="showcase" key={id}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div className="items">{element}</div>
                    <CodeBlock name={id} code={code} />
                  </section>
                ),
              )}
            </SistentThemeProvider>
          </div>
        )}
      </section>
    </SistentLayout>
  );
};

export default AvatarComponent;
