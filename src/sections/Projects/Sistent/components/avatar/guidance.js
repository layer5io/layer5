import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";

const Guidance = () => {
  const location = useLocation();

  const tabs = [
    { title: "Overview", path: "/projects/sistent/components/avatar/overview" },
    { title: "Guidance", path: "/projects/sistent/components/avatar/guidance" },
    { title: "Code", path: "/projects/sistent/components/avatar/code" }
  ];

  return (
    <SistentLayout title="Avatar">
      <div className="content">
        <h2 id="identity">Avatar Usage Guidelines</h2>
        <p>
          The Avatar component visually represents a user through an image, initials, or an icon.
          It enhances recognition and identity across digital platforms.
        </p>

        <div className="filterBtns">
          {tabs.map((tab) => (
            <TabButton
              key={tab.title}
              className={location.pathname === tab.path ? "active" : ""}
              onClick={() => navigate(tab.path)}
              title={tab.title}
            />
          ))}
        </div>

        <section>
          <h3 id="BestPractices">Best Practices</h3>
          <ul>
            <li><strong>Visual Clarity:</strong> Use clear, recognizable images for representation.</li>
            <li><strong>Fallback Mechanisms:</strong> Implement alternative displays when an image is unavailable.</li>
            <li><strong>Consistency:</strong> Maintain uniform avatar sizes and styles across your UI.</li>
            <li><strong>Performance:</strong> Optimize image resolution for better loading times.</li>
          </ul>
        </section>

        <section>
          <h3 id="Accessibility">Accessibility Considerations</h3>
          <ul>
            <li>Ensure meaningful <code>alt</code> text for screen readers.</li>
            <li>Maintain a 4.5:1 color contrast ratio for initials/icons.</li>
            <li>Use ARIA labels to provide additional context.</li>
          </ul>
        </section>

        <section>
          <h3 id="PerformanceOptimization">Performance Optimization</h3>
          <ul>
            <li>Utilize image compression techniques to reduce file sizes.</li>
            <li>Implement lazy loading to enhance page speed.</li>
            <li>Cache frequently used avatars to minimize network requests.</li>
          </ul>
        </section>

        <section>
          <h3 id="AdvancedCustomization">Advanced Customization</h3>
          <ul>
            <li>Enable theme-aware color generation for text-based avatars.</li>
            <li>Support user status indicators (online, offline, away).</li>
          </ul>
        </section>

        <section>
          <h3 id="IntegrationPatterns">Common Integration Patterns</h3>
          <ul>
            <li>Profile headers</li>
            <li>Team directories</li>
            <li>Comment sections</li>
            <li>Messaging applications</li>
          </ul>
        </section>

        <section>
          <h3 id="CodeSnippets">Code Snippet: Flexible Avatar Usage</h3>
          <pre><code>{`
// Image Avatar
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
`}</code></pre>
        </section>
      </div>
    </SistentLayout>
  );
};

export default Guidance;
