import React from "react";
import { Avatar, AvatarGroup, SistentThemeProvider } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import { CodeBlock } from "./code-block";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `  <SistentThemeProvider>
       <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="small" />
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="medium" />
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="large" />
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <AvatarGroup max={3}>
         <Avatar src="https://via.placeholder.com/150" alt="User 1" />
         <Avatar src="https://via.placeholder.com/150" alt="User 2" />
         <Avatar src="https://via.placeholder.com/150" alt="User 3" />
         <Avatar src="https://via.placeholder.com/150" alt="User 4" />
       </AvatarGroup>
  </SistentThemeProvider>`
];

const AvatarComponent = () => {
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Avatar">
      <div className="content">
        <a id="Identity">
          <h2>Avatar</h2>
        </a>
        <p>
          The Avatar component is used to represent a user profile with an image or initials.
        </p>
        <div className="filterBtns">
          <TabButton title="Overview" />
          <TabButton title="Guidance" />
          <TabButton title="Code" />
        </div>
        <div className="main-content">
          <h3>Small Avatar</h3>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="small" />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="small-avatar" code={codes[0]} />
          </div>
          <h3>Medium Avatar</h3>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="medium" />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="medium-avatar" code={codes[1]} />
          </div>
          <h3>Large Avatar</h3>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="large" />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="large-avatar" code={codes[2]} />
          </div>
          <h3>Avatar Group</h3>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <AvatarGroup max={3}>
                  <Avatar src="https://via.placeholder.com/150" alt="User 1" />
                  <Avatar src="https://via.placeholder.com/150" alt="User 2" />
                  <Avatar src="https://via.placeholder.com/150" alt="User 3" />
                  <Avatar src="https://via.placeholder.com/150" alt="User 4" />
                </AvatarGroup>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="avatar-group" code={codes[3]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default AvatarComponent;
