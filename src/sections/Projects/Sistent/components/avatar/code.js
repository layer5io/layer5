// import React from "react";
// import { Avatar, SistentThemeProvider } from "@layer5/sistent";
// import { SistentLayout } from "../../sistent-layout";
// import { CodeBlock } from "./code-block";
// import TabButton from "../../../../../reusecore/Button";
// import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

// const codes = [
//   `  <SistentThemeProvider>
//        <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="small" />
//   </SistentThemeProvider>`,
//   `  <SistentThemeProvider>
//        <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="medium" />
//   </SistentThemeProvider>`,
//   `  <SistentThemeProvider>
//        <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="large" />
//   </SistentThemeProvider>`
// ];

// const AvatarComponent = () => {
//   const { isDark } = useStyledDarkMode();

//   return (
//     <SistentLayout title="Avatar">
//       <div className="content">
//         <a id="Identity">
//           <h2>Avatar</h2>
//         </a>
//         <p>
//           The Avatar component is used to represent a user profile with an image or initials.
//         </p>
//         <div className="filterBtns">
//           <TabButton title="Overview" />
//           <TabButton title="Guidance" />
//           <TabButton title="Code" />
//         </div>
//         <div className="main-content">
//           <h3>Small Avatar</h3>
//           <div className="showcase">
//             <div className="items">
//               <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
//                 <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="small" />
//               </SistentThemeProvider>
//             </div>
//             <CodeBlock name="small-avatar" code={codes[0]} />
//           </div>
//           <h3>Medium Avatar</h3>
//           <div className="showcase">
//             <div className="items">
//               <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
//                 <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="medium" />
//               </SistentThemeProvider>
//             </div>
//             <CodeBlock name="medium-avatar" code={codes[1]} />
//           </div>
//           <h3>Large Avatar</h3>
//           <div className="showcase">
//             <div className="items">
//               <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
//                 <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="large" />
//               </SistentThemeProvider>
//             </div>
//             <CodeBlock name="large-avatar" code={codes[2]} />
//           </div>
//         </div>
//       </div>
//     </SistentLayout>
//   );
// };

// export default AvatarComponent;


















// import React, { useState } from "react";
// import { Avatar, SistentThemeProvider } from "@layer5/sistent";
// import { SistentLayout } from "../../sistent-layout";
// import TabButton from "../../../../../reusecore/Button";
// import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
// import { CodeBlock } from "./code-block";

// const codes = [
//   `  <SistentThemeProvider>
//        <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="small" />
//   </SistentThemeProvider>`,
//   `  <SistentThemeProvider>
//        <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="medium" />
//   </SistentThemeProvider>`,
//   `  <SistentThemeProvider>
//        <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="large" />
//   </SistentThemeProvider>`
// ];

// const AvatarComponent = () => {
//   const { isDark } = useStyledDarkMode();
//   const [activeTab, setActiveTab] = useState("Overview");

//   return (
//     <SistentLayout title="Avatar">
//       <div className="content">
//         <a id="Identity">
//           <h2>Avatar Component</h2>
//         </a>
//         <p>
//           The Avatar component represents users visually by displaying their profile picture, initials, or an icon.
//           It is commonly used in user profiles, chat applications, and dashboards. The component supports customization
//           options like different sizes, fallback content, and themes.
//         </p>
//         <p>
//           It ensures a consistent visual representation across applications and adapts to dark and light themes automatically.
//           Avatars can also be customized with borders, shapes, and additional styles to match design requirements.
//         </p>
//         <div className="filterBtns">
//           {"Overview Guidance Code".split(" ").map((tab) => (
//             <TabButton
//               key={tab}
//               title={tab}
//               className={activeTab === tab ? "active" : ""}
//               onClick={() => setActiveTab(tab)}
//             />
//           ))}
//         </div>
//         <div className="main-content">
//           {activeTab === "Overview" && <Overview isDark={isDark} />}
//           {activeTab === "Guidance" && <Guidance />}
//           {activeTab === "Code" && <Code />}
//         </div>

//         {/* Avatar Showcase */}
//         <div className="avatar-showcase">
//           <h3>Small Avatar</h3>
//           <div className="showcase">
//             <div className="items">
//               <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
//                 <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="small" />
//               </SistentThemeProvider>
//             </div>
//             <CodeBlock name="small-avatar" code={codes[0]} />
//           </div>

//           <h3>Medium Avatar</h3>
//           <div className="showcase">
//             <div className="items">
//               <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
//                 <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="medium" />
//               </SistentThemeProvider>
//             </div>
//             <CodeBlock name="medium-avatar" code={codes[1]} />
//           </div>

//           <h3>Large Avatar</h3>
//           <div className="showcase">
//             <div className="items">
//               <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
//                 <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="large" />
//               </SistentThemeProvider>
//             </div>
//             <CodeBlock name="large-avatar" code={codes[2]} />
//           </div>
//         </div>
//       </div>
//     </SistentLayout>
//   );
// };

// export default AvatarComponent;























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

        {/* Tabs Navigation */}
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

        {/* Component Description */}
        <p>
          The Avatar component provides a flexible visual representation of users
          or entities across digital interfaces, supporting images, initials, and icons.
        </p>

        {/* Code Tab Content */}
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

            <h3>Advanced Usage</h3>
            <div className="advanced-usage">
              <h4>Props and Customization</h4>
              <table>
                <thead>
                  <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>src</td>
                    <td>string</td>
                    <td>URL of the avatar image</td>
                  </tr>
                  <tr>
                    <td>alt</td>
                    <td>string</td>
                    <td>Alternate text for accessibility</td>
                  </tr>
                  <tr>
                    <td>size</td>
                    <td>small | medium | large</td>
                    <td>Predefined size variants</td>
                  </tr>
                  <tr>
                    <td>sx</td>
                    <td>object</td>
                    <td>Custom styling override</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </SistentLayout>
  );
};

export default AvatarComponent;