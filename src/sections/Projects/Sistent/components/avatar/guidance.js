import React from "react";
import { SistentLayout } from "../../sistent-layout";

const AvatarGuidance = () => {
  return (
    <SistentLayout title="Avatar Guidance">
      <div className="content">
        <a id="Identity">
          <h2>Avatar Usage Guidelines</h2>
        </a>
        <p>
          The Avatar component is used to represent a user with an image, initials, or an icon. It is commonly used in user profiles, chat applications, and dashboards.
        </p>
        <h3>Best Practices</h3>
        <ul>
          <li>Ensure the avatar is visually distinguishable and represents the user clearly.</li>
          <li>Use high-quality images for a professional appearance.</li>
          <li>Fallback to initials or a placeholder image when the user image is unavailable.</li>
          <li>Keep the size appropriate to the UI layout (e.g., small for chat bubbles, large for profile pages).</li>
        </ul>
        <h3>Accessibility Considerations</h3>
        <ul>
          <li>Provide an <code>alt</code> attribute describing the avatar for screen readers.</li>
          <li>Ensure sufficient contrast between the avatar and background.</li>
          <li>Use tooltips or labels to provide additional context when necessary.</li>
        </ul>
        <h3>Examples of Usage</h3>
        <p>
          Avatars can be used in multiple scenarios, including:
        </p>
        <ul>
          <li>Displaying user profiles in a navigation bar.</li>
          <li>Representing senders in a messaging interface.</li>
          <li>Showing participants in a collaborative workspace.</li>
        </ul>
      </div>
    </SistentLayout>
  );
};

export default AvatarGuidance;
