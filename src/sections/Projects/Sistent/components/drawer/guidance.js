import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { Button, SistentThemeProvider } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

export const DrawerGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Drawer">
      <div className="content">
        <a id="Identity">
          <h2>Drawer</h2>
        </a>
        <p>
        The Drawer component serves as a slide-out panel that provides additional content or navigation options without navigating away from the current page.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/drawer"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/drawer")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/drawer/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/drawer/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/drawer/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/drawer/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            For proper application, these Drawers can be used for different
            purposes to enable easier and consistent combination when guiding
            users across digital experiences.
          </p>
          <a id="Function">
            <h2>Function</h2>
          </a>
          <p>
          The function of different drawers is determined by their specific role in a
          design and how well they provide access to information, assist in navigation,
          or support task completion. Functions or roles that can be assigned to
          drawers in a particular design include:
          </p>

          <h3>Primary Drawer</h3>
            <p>
              The primary drawer is used to house the most important navigation options or
              frequently accessed content within an application. It typically includes core
              sections or main categories, helping users move efficiently through the app’s
              structure. The primary drawer is often persistent to ensure consistent access
              and can be especially helpful for users who need to switch between key areas
              regularly.
            </p>
    
          <h3>Secondary Drawer</h3>
            <p>
              Secondary drawers are used for supporting or auxiliary content, providing
              access to settings, options, or filters that enhance the user's experience
              without overwhelming the main interface. Secondary drawers are often
              temporary or slide out when needed, keeping the interface clean while still
              allowing quick access to additional functionality.
            </p>

            <h3>Persistent Drawer</h3>
            <p>
              A persistent drawer remains visible and accessible even as users interact
              with the main content. This type of drawer is beneficial for applications
              where constant navigation options are needed without taking the user away
              from their current task, helping maintain focus and accessibility.
            </p>

            <h3>Action Drawer</h3>
            <p>
              Action drawers are used for task-specific actions such as a shopping cart,
              notifications, or chat messages, allowing users to see real-time updates or
              make selections. These drawers often have their own unique styling to make
              them easily identifiable from other types and are designed to streamline
              specific workflows.
            </p>     
            
          <a id="Labeling">
            <h2>Labeling</h2>
          </a>
          <p>
            The drawer component provides an interactive way to display additional content or navigation options without navigating away from the current page. To ensure clarity and usability, the following guidelines should be considered:
          </p>

          <h3>Visibility and Accessibility</h3>
          <ul>
            <li>
              The drawer should be easily opened and closed, with visual indicators such as buttons or icons to indicate its function.
            </li>
            <li>
              Ensure that the drawer is accessible via keyboard navigation and screen readers to accommodate all users.
            </li>
          </ul>
          <h3>Content Organization</h3>
          <ul>
            <li>
              Content within the drawer should be well-organized and categorized, allowing users to find what they need quickly and efficiently.
            </li>
            <li>
              Use headings and dividers to separate different sections of content, making the drawer more scannable.
            </li>
          </ul>
          <h3>Visual Design</h3>
          <ul>
            <li>
              The drawer’s design should be consistent with the overall application theme, including colors, typography, and spacing.
            </li>
            <li>
              Consider the use of animations for opening and closing the drawer to enhance the user experience without causing distraction.
            </li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};
