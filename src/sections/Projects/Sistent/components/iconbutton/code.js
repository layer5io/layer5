import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { IconButton, SistentThemeProvider } from "@sistent/sistent";
import { CodeBlock } from "./code-block";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaShare } from "@react-icons/all-files/fa/FaShare";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `  <SistentThemeProvider>
    <IconButton aria-label="edit">
      <FaEdit />
    </IconButton>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
    <IconButton size="small" aria-label="search">
      <FaSearch />
    </IconButton>
    <IconButton size="medium" aria-label="edit">
      <FaEdit />
    </IconButton>
    <IconButton size="large" aria-label="delete">
      <FaTrash />
    </IconButton>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
    <IconButton color="primary" aria-label="share">
      <FaShare />
    </IconButton>
    <IconButton color="error" aria-label="delete">
      <FaTrash />
    </IconButton>
    <IconButton color="success" aria-label="favorite">
      <FaHeart />
    </IconButton>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
    <IconButton 
      aria-label="favorite"
      sx={{ 
        backgroundColor: 'primary.main', 
        color: 'white',
        '&:hover': {
          backgroundColor: 'primary.dark',
        }
      }}
    >
      <FaHeart />
    </IconButton>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
    <IconButton 
      disabled
      aria-label="edit"
    >
      <FaEdit />
    </IconButton>
  </SistentThemeProvider>`,
];

const IconButtonCode = () => {
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
            IconButtons provide a compact way to trigger actions using only
            iconography. They're essential for creating clean, space-efficient
            interfaces.
          </p>
          <a id="Basic IconButton">
            <h2>Basic IconButton</h2>
          </a>
          <p>
            The most basic form of an IconButton with an icon and proper
            accessibility attributes.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <IconButton aria-label="edit">
                  <FaEdit />
                </IconButton>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-iconbutton" code={codes[0]} />
          </div>

          <a id="IconButton Sizes">
            <h2>IconButton Sizes</h2>
          </a>
          <p>
            IconButtons come in three sizes: small (32px), medium (40px), and
            large (48px). Choose the appropriate size based on your interface
            requirements and accessibility needs.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <IconButton size="small" aria-label="search">
                  <FaSearch />
                </IconButton>
                <IconButton size="medium" aria-label="edit">
                  <FaEdit />
                </IconButton>
                <IconButton size="large" aria-label="delete">
                  <FaTrash />
                </IconButton>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="iconbutton-sizes" code={codes[1]} />
          </div>

          <a id="Colored IconButtons">
            <h2>Colored IconButtons</h2>
          </a>
          <p>
            IconButtons can be colored using the color prop to convey different
            meanings or align with your design system's color palette.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <IconButton color="primary" aria-label="share">
                  <FaShare />
                </IconButton>
                <IconButton color="error" aria-label="delete">
                  <FaTrash />
                </IconButton>
                <IconButton color="success" aria-label="favorite">
                  <FaHeart />
                </IconButton>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="colored-iconbuttons" code={codes[2]} />
          </div>

          <a id="Custom Styled IconButton">
            <h2>Custom Styled IconButton</h2>
          </a>
          <p>
            You can customize IconButtons using the sx prop to apply custom
            styling, including background colors, borders, and hover effects.
          </p>
          <div className="showcase">
            <div className="items">
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
            </div>
            <CodeBlock name="custom-styled-iconbutton" code={codes[3]} />
          </div>

          <a id="Disabled IconButton">
            <h2>Disabled IconButton</h2>
          </a>
          <p>
            IconButtons can be disabled to prevent user interaction when an
            action is not available or appropriate.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <IconButton disabled aria-label="edit">
                  <FaEdit />
                </IconButton>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="disabled-iconbutton" code={codes[4]} />
          </div>

          <a id="Props">
            <h2>Props</h2>
          </a>
          <p>
            The IconButton component accepts all standard button props plus
            additional customization options:
          </p>

          <div className="table-container">
            <table className="props-table">
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>children</td>
                  <td>node</td>
                  <td>-</td>
                  <td>The icon element to display inside the button</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>'small' | 'medium' | 'large'</td>
                  <td>'medium'</td>
                  <td>The size of the IconButton</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>
                    'inherit' | 'primary' | 'secondary' | 'error' | 'info' |
                    'success' | 'warning'
                  </td>
                  <td>'inherit'</td>
                  <td>The color of the IconButton</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>bool</td>
                  <td>false</td>
                  <td>If true, the IconButton is disabled</td>
                </tr>
                <tr>
                  <td>onClick</td>
                  <td>func</td>
                  <td>-</td>
                  <td>Callback fired when the IconButton is clicked</td>
                </tr>
                <tr>
                  <td>aria-label</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Accessibility label for screen readers (required)</td>
                </tr>
                <tr>
                  <td>sx</td>
                  <td>object</td>
                  <td>-</td>
                  <td>System prop for custom styling</td>
                </tr>
              </tbody>
            </table>
          </div>

          <a id="Best Practices">
            <h2>Best Practices</h2>
          </a>
          <ul>
            <li>
              <strong>Always include aria-label:</strong> Essential for
              accessibility and screen readers
            </li>
            <li>
              <strong>Use recognizable icons:</strong> Choose icons that clearly
              represent the action
            </li>
            <li>
              <strong>Maintain adequate spacing:</strong> Ensure sufficient
              space between IconButtons
            </li>
            <li>
              <strong>Provide hover feedback:</strong> Clear visual feedback for
              interactive states
            </li>
            <li>
              <strong>Consider touch targets:</strong> Use appropriate sizes for
              mobile interfaces
            </li>
            <li>
              <strong>Test with users:</strong> Verify that icon meanings are
              clear to your target audience
            </li>
          </ul>

          <a id="Common Use Cases">
            <h2>Common Use Cases</h2>
          </a>
          <ul>
            <li>
              <strong>Toolbar actions:</strong> Edit, delete, share, and other
              quick actions
            </li>
            <li>
              <strong>Navigation:</strong> Back, forward, close, and menu
              toggles
            </li>
            <li>
              <strong>Media controls:</strong> Play, pause, skip, and volume
              controls
            </li>
            <li>
              <strong>List item actions:</strong> Quick actions for items in
              lists or tables
            </li>
            <li>
              <strong>Toggle states:</strong> Favorite, bookmark, or
              follow/unfollow actions
            </li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default IconButtonCode;
