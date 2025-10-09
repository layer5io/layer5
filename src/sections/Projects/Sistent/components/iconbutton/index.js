import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import {
  SistentThemeProvider,
  IconButton,
  KubernetesIcon,
  DesignIcon,
} from "@sistent/sistent";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Col, Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentIconButton = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="IconButton">
      <div className="content">
        <a id="Identity">
          <h2>IconButton</h2>
        </a>
        <p>
          IconButton provides an interactive button component that displays only
          an icon, ideal for compact UIs where space is limited and actions are
          easily recognizable through iconography.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/iconbutton"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/iconbutton")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/iconbutton/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/iconbutton/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/iconbutton/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/iconbutton/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            IconButtons are compact components that combine button functionality
            with icon clarity, perfect for space-efficient interfaces and
            universally recognized actions.
          </p>
          <a id="Types">
            <h2>Types</h2>
          </a>
          <p>
            IconButtons come in different visual styles to establish hierarchy
            and meet various interface needs.
          </p>
          <h3>Standard</h3>
          <p>
            Standard IconButtons provide a subtle interactive area around the
            icon with hover and focus states. They're ideal for secondary
            actions that don't need strong visual emphasis.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <IconButton aria-label="edit">
                <FaEdit />
              </IconButton>
            </SistentThemeProvider>
          </Row>
          <h3>With Background Color</h3>
          <p>
            IconButtons can be styled with background colors to create more
            prominent interactive elements while maintaining the compact
            icon-only interface.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <IconButton
                aria-label="favorite"
                sx={{
                  backgroundColor: "primary.main",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                }}
              >
                <FaHeart />
              </IconButton>
            </SistentThemeProvider>
          </Row>
          <a id="Sizes">
            <h2>Sizes</h2>
          </a>
          <p>
            IconButtons support multiple sizes to accommodate different contexts
            and touch target requirements.
          </p>
          <h3>Small</h3>
          <p>
            Small IconButtons (32px) are ideal for dense interfaces and
            secondary actions where space is limited.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <IconButton size="small" aria-label="search">
                <FaSearch />
              </IconButton>
            </SistentThemeProvider>
          </Row>
          <h3>Medium (Default)</h3>
          <p>
            Medium IconButtons (40px) provide the standard size, balancing
            compactness and accessibility.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <IconButton size="medium" aria-label="edit">
                <FaEdit />
              </IconButton>
            </SistentThemeProvider>
          </Row>
          <h3>Large</h3>
          <p>
            Large IconButtons (48px) are ideal for primary actions and mobile
            interfaces where easy touch interaction is essential.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <IconButton size="large" aria-label="delete">
                <FaTrash />
              </IconButton>
            </SistentThemeProvider>
          </Row>
          <a id="Icon Integration">
            <h2>Icon Integration</h2>
          </a>
          <p>
            IconButtons work seamlessly with various icon libraries and custom
            icons. They support React Icons, Material-UI icons, and custom SVG
            icons.
          </p>
          <h3>Using Sistent Icons</h3>
          <p>
            IconButtons work perfectly with Sistent's built-in icon library,
            maintaining design consistency across your application.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <IconButton aria-label="kubernetes">
                <KubernetesIcon />
              </IconButton>
              <IconButton aria-label="design">
                <DesignIcon />
              </IconButton>
            </SistentThemeProvider>
          </Row>
          <a id="Accessibility">
            <h2>Accessibility</h2>
          </a>
          <p>
            IconButtons include built-in accessibility features but require
            proper implementation to ensure they're usable by all users.
          </p>
          <h3>Essential Properties</h3>
          <ul>
            <li>
              <strong>aria-label:</strong> Always provide descriptive labels for
              screen readers
            </li>
            <li>
              <strong>Keyboard navigation:</strong> IconButtons are fully
              keyboard accessible by default
            </li>
            <li>
              <strong>Focus indicators:</strong> Clear visual focus states for
              keyboard users
            </li>
            <li>
              <strong>Touch targets:</strong> Minimum 44px touch targets for
              mobile accessibility
            </li>
          </ul>
          <p>
            <strong>Best Practice:</strong> When using IconButtons, always
            include meaningful aria-labels or aria-labelledby attributes to
            describe the action to assistive technologies.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentIconButton;
