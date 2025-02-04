import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";

const Guidance = () => {
  const location = useLocation();

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

        {/* Tab Navigation */}
        <div className="filterBtns">
          <TabButton
            className={location.pathname === "/projects/sistent/components/avatar/guidance" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/avatar/guidance")}
            title="Guidance"
          />
          <TabButton
            className={location.pathname === "/projects/sistent/components/avatar/code" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/avatar/code")}
            title="Code"
          />
        </div>

        {/* Tab Content */}
        <div className="main-content">
          <a id="BestPractices">
            <h3>Best Practices</h3>
          </a>
          <ul>
            <li>
              <strong>Visual Representation:</strong> Choose clear, recognizable images that authentically represent the user or entity.
            </li>
            <li>
              <strong>Fallback Mechanisms:</strong> Implement robust fallback strategies:
              <code>
                {"<Avatar src={userImage} alt={userName} fallback={<Avatar>{userInitials}</Avatar>}/>"}
              </code>
            </li>
            <li>Maintain consistent avatar sizing and style across the application.</li>
            <li>Optimize image resolution for performance and clarity.</li>
          </ul>

          <a id="Accessibility">
            <h3>Accessibility Considerations</h3>
          </a>
          <ul>
            <li>Mandatory <code>alt</code> text for screen reader compatibility.</li>
            <li>Ensure 4.5:1 color contrast ratio for initials and icons.</li>
            <li>Add meaningful aria labels for context.</li>
          </ul>

          <a id="PerformanceOptimization">
            <h3>Performance Optimization</h3>
          </a>
          <ul>
            <li>Use image compression techniques.</li>
            <li>Implement lazy loading for avatar images.</li>
            <li>Cache avatar images to reduce network requests.</li>
            <li>
              Example lazy loading implementation:
              <code>
                {"<Avatar loading=\"lazy\" src=\"/path/to/optimized/image.jpg\"/>"}
              </code>
            </li>
          </ul>

          <a id="AdvancedCustomization">
            <h3>Advanced Customization</h3>
          </a>
          <ul>
            <li>Theme-aware color generation for initial avatars.</li>
            <li>Status indicators (online/offline/away).</li>
            <li>
              Example status badge:
              <code>
                {"<Avatar src={userImage} status=\"online\" statusProps={{ color: 'green', position: 'bottom-right' }}/>"}
              </code>
            </li>
          </ul>

          <a id="IntegrationPatterns">
            <h3>Common Integration Patterns</h3>
          </a>
          <ul>
            <li>User profile headers</li>
            <li>Team member lists</li>
            <li>Comment and messaging interfaces</li>
            <li>Collaboration platform user representations</li>
          </ul>

          <a id="CodeSnippets">
            <h3>Code Snippet: Flexible Avatar Usage</h3>
          </a>
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
      </div>
    </SistentLayout>
  );
};

export default Guidance;
