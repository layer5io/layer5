import React, { useState } from "react";
import { Avatar, AvatarGroup, SistentThemeProvider } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { CodeBlock } from "../button/code-block";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

import user1 from "../../../../../assets/images/sistent/placeholder/user.webp";
import user2 from "../../../../../assets/images/sistent/placeholder/user.webp";
import user3 from "../../../../../assets/images/sistent/placeholder/user.webp";
import user4 from "../../../../../assets/images/sistent/placeholder/user.webp";

const TABS = ["Overview", "Guidance", "Code"];

const avatarGroupExamples = [
  {
    title: "Basic AvatarGroup",
    description: "Display a horizontal group of avatars with default overlap.",
    element: (
      <AvatarGroup>
        <Avatar src={user1} alt="User 1" />
        <Avatar src={user2} alt="User 2" />
        <Avatar src={user3} alt="User 3" />
      </AvatarGroup>
    ),
    code: `<AvatarGroup>
  <Avatar src="/user1.jpg" alt="User 1" />
  <Avatar src="/user2.jpg" alt="User 2" />
  <Avatar src="/user3.jpg" alt="User 3" />
</AvatarGroup>`,
    id: "basic-group",
  },
  {
    title: "Max Avatars",
    description: "Limit the number of visible avatars using the `max` prop.",
    element: (
      <AvatarGroup max={3}>
        <Avatar src={user1} alt="User 1" />
        <Avatar src={user2} alt="User 2" />
        <Avatar src={user3} alt="User 3" />
        <Avatar src={user4} alt="User 4" />
      </AvatarGroup>
    ),
    code: `<AvatarGroup max={3}>
  <Avatar src="/user1.jpg" />
  <Avatar src="/user2.jpg" />
  <Avatar src="/user3.jpg" />
  <Avatar src="/user4.jpg" />
</AvatarGroup>`,
    id: "max-group",
  },
  {
    title: "Custom Spacing",
    description: "Control the spacing between avatars.",
    element: (
      <AvatarGroup spacing="medium">
        <Avatar src={user1} />
        <Avatar src={user2} />
        <Avatar src={user3} />
      </AvatarGroup>
    ),
    code: `<AvatarGroup spacing="medium">
  <Avatar src="/user1.jpg" />
  <Avatar src="/user2.jpg" />
  <Avatar src="/user3.jpg" />
</AvatarGroup>`,
    id: "spacing-group",
  },
  {
    title: "Shape Variants",
    description: "Mix avatar shape variants like square and rounded.",
    element: (
      <AvatarGroup>
        <Avatar variant="rounded" src={user1} />
        <Avatar variant="square" src={user2} />
        <Avatar src={user3} />
      </AvatarGroup>
    ),
    code: `<AvatarGroup>
  <Avatar variant="rounded" src="/user1.jpg" />
  <Avatar variant="square" src="/user2.jpg" />
  <Avatar src="/user3.jpg" />
</AvatarGroup>`,
    id: "variant-group",
  },
  {
    title: "Total Avatars",
    description:
      "You can indicate the total number of avatars using the `total` prop, even if not all are rendered.",
    element: (
      <AvatarGroup total={7}>
        <Avatar src={user1} />
        <Avatar src={user2} />
        <Avatar src={user3} />
      </AvatarGroup>
    ),
    code: `<AvatarGroup total={7}>
  <Avatar src="/user1.jpg" />
  <Avatar src="/user2.jpg" />
  <Avatar src="/user3.jpg" />
</AvatarGroup>`,
    id: "total-avatars",
  },
  {
    title: "Custom Surplus Renderer",
    description:
      "Customize the overflow display using the `renderSurplus` prop for more control over surplus appearance.",
    element: (
      <AvatarGroup
        max={2}
        renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
        total={4251}
      >
        <Avatar src={user1} />
        <Avatar src={user2} />
        <Avatar src={user3} />
        <Avatar src={user4} />
      </AvatarGroup>
    ),
    code: `<AvatarGroup
  max={2}
  renderSurplus={(surplus) => (
    <Avatar sx={{ bgcolor: 'secondary.main' }}>{\`+\${surplus} more\`}</Avatar>
  )}
>
  <Avatar src="/user1.jpg" />
  <Avatar src="/user2.jpg" />
  <Avatar src="/user3.jpg" />
  <Avatar src="/user4.jpg" />
</AvatarGroup>`,
    id: "custom-surplus",
  },
];

const AvatarGroupComponent = () => {
  const { isDark } = useStyledDarkMode();
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <SistentLayout title="Avatar Group">
      <section className="content">
        <a id="Identity">
          <h2>Avatar Group</h2>
        </a>
        <p>
          Below are practical implementation examples of the
          <code>AvatarGroup</code> component, showcasing different
          configurations such as max user limit, spacing, variant styling, and
          accessibility-friendly usage. These examples are designed to help you
          apply <code>AvatarGroup</code> effectively across team or user-related
          interfaces.
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
          The AvatarGroup component helps visually group multiple avatars in a
          compact and meaningful layout, often representing users in a shared
          context.
        </p>

        {activeTab === "Code" && (
          <div className="code-examples">
            <h3>AvatarGroup Implementation Variants</h3>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              {avatarGroupExamples.map(
                ({ title, description, element, code, id }) => (
                  <section key={id}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div className="showcase">
                      <div className="items">{element}</div>
                      <CodeBlock name={id} code={code} />
                    </div>
                  </section>
                ),
              )}
            </SistentThemeProvider>
          </div>
        )}

        {activeTab === "Overview" && (
          <div className="overview">
            <h3>Usage</h3>
            <p>
              Use AvatarGroup when you want to display a group of users or
              entities visually. It's useful for team indicators,
              collaborations, or contributors. You can adjust overlap, limit
              display with `max`, or even indicate a total with `total`.
            </p>
          </div>
        )}

        {activeTab === "Guidance" && (
          <div className="guidance">
            <h3>Design Guidance</h3>
            <p>
              Keep avatar count minimal (ideally &lt; 5) to reduce clutter.
              Surplus avatars should indicate remaining count clearly (e.g.
              "+3"). Consider consistent shapes, sizes, and padding across your
              app.
            </p>
            <ul>
              <li>
                Use `max` and `total` for clear grouping when avatars exceed
                space.
              </li>
              <li>
                Use `renderSurplus` to match branding or add tooltips/custom UI.
              </li>
              <li>Maintain consistent alt texts for accessibility.</li>
            </ul>
          </div>
        )}
      </section>
    </SistentLayout>
  );
};

export default AvatarGroupComponent;
