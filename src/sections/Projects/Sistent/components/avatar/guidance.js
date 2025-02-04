// import React from "react";
// import { SistentLayout } from "../../sistent-layout";

// const Guidance = () => {
//   return (
//     <SistentLayout title="Avatar">
//       <div className="content">
//         <a id="identity">
//           <h2>Avatar Usage Guidelines</h2>
//         </a>
//         <p>
//           The Avatar component represents a user using an image, initials, or an icon.
//           It is commonly used in user profiles, chat applications, and dashboards to provide a clear visual identity.
//         </p>

//         <h3>Best Practices</h3>
//         <ul>
//           <li>Ensure avatars are visually distinguishable to represent users effectively.</li>
//           <li>Use high-resolution images to maintain a professional and sharp appearance.</li>
//           <li>Implement a fallback mechanism (e.g., initials or placeholder image) when an image is unavailable.</li>
//           <li>Adjust the avatar size according to the UI context (e.g., small for chat bubbles, larger for profiles).</li>
//           <li>Maintain a consistent shape (circular or square) for better UI uniformity.</li>
//         </ul>

//         <h3>Accessibility Considerations</h3>
//         <ul>
//           <li>Always provide an <code>alt</code> attribute for avatars to ensure screen reader accessibility.</li>
//           <li>Ensure sufficient color contrast between the avatar and its background for visibility.</li>
//           <li>Use tooltips or labels when avatars are used in interactive elements.</li>
//           <li>Provide keyboard accessibility if avatars include interactive elements (e.g., profile menus).</li>
//         </ul>

//         <h3>Common Use Cases</h3>
//         <p>Avatars are used in various UI components, including:</p>
//         <ul>
//           <li>User profiles in navigation bars or dashboards.</li>
//           <li>Message senders in chat applications.</li>
//           <li>Collaborator icons in shared workspaces.</li>
//           <li>Representing account or user settings in applications.</li>
//         </ul>

//         <h3>Customization Options</h3>
//         <p>The Avatar component can be customized to match different UI designs:</p>
//         <ul>
//           <li>Different shapes (circle, rounded, or square) based on the design language.</li>
//           <li>Support for themes, adapting to both light and dark modes.</li>
//           <li>Custom sizes to fit various UI contexts (e.g., small, medium, large).</li>
//           <li>Border styles, shadows, or badges for status indication.</li>
//         </ul>
//       </div>
//     </SistentLayout>
//   );
// };

// export default Guidance;














import React from "react";
import { SistentLayout } from "../../sistent-layout";

const Guidance = () => {
  return (
    <SistentLayout title="Avatar">
      <div className="content">
        <a id="identity">
          <h2>Avatar Usage Guidelines</h2>
        </a>
        <p>
          The Avatar component represents a user using an image, initials, or an icon.
          It is a crucial UI element for providing visual identity across digital platforms.
        </p>

        <h3>Best Practices</h3>
        <ul>
          <li>
            <strong>Visual Representation:</strong> Choose clear, recognizable images that authentically represent the user or entity.
          </li>
          <li>
            <strong>Fallback Mechanisms:</strong> Implement robust fallback strategies:
            <code>
              {`<Avatar 
  src={userImage} 
  alt={userName}
  fallback={<Avatar>{userInitials}</Avatar>}
/>`}
            </code>
          </li>
          <li>Maintain consistent avatar sizing and style across the application.</li>
          <li>Optimize image resolution for performance and clarity.</li>
        </ul>

        <h3>Accessibility Considerations</h3>
        <ul>
          <li>Mandatory <code>alt</code> text for screen reader compatibility.</li>
          <li>Ensure 4.5:1 color contrast ratio for initials and icons.</li>
          <li>Add meaningful aria labels for context.</li>
        </ul>

        <h3>Performance Optimization</h3>
        <ul>
          <li>Use image compression techniques</li>
          <li>Implement lazy loading for avatar images</li>
          <li>Cache avatar images to reduce network requests</li>
          <li>
            Example lazy loading implementation:
            <code>
              {`<Avatar 
  loading="lazy"
  src="/path/to/optimized/image.jpg"
/>`}
            </code>
          </li>
        </ul>

        <h3>Advanced Customization</h3>
        <ul>
          <li>Theme-aware color generation for initial avatars</li>
          <li>Status indicators (online/offline/away)</li>
          <li>
            Status badge example:
            <code>
              {`<Avatar 
  src={userImage}
  status="online"
  statusProps={{
    color: 'green',
    position: 'bottom-right'
  }}
/>`}
            </code>
          </li>
        </ul>

        <h3>Common Integration Patterns</h3>
        <ul>
          <li>User profile headers</li>
          <li>Team member lists</li>
          <li>Comment and messaging interfaces</li>
          <li>Collaboration platform user representations</li>
        </ul>

        <h3>Code Snippet: Flexible Avatar Usage</h3>
        <pre><code>
{`// Image Avatar
<Avatar src="/user-profile.jpg" alt="John Doe" />

// Initials Avatar
<Avatar>JD</Avatar>

// Icon Avatar
<Avatar>
  <UserIcon />
</Avatar>

// Sized Avatars
<Avatar size="small" />
<Avatar size="medium" />
<Avatar size="large" />
`}
        </code></pre>
      </div>
    </SistentLayout>
  );
};

export default Guidance;