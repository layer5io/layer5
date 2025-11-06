import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { IconButton, SistentThemeProvider } from "@sistent/sistent";
import { CodeBlock } from "../button/code-block";
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
            IconButtons provide compact action triggers using iconography,
            essential for clean, space-efficient interfaces.
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
            large (48px). Choose based on interface requirements and
            accessibility needs.
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
        </div>
      </div>
    </SistentLayout>
  );
};

export default IconButtonCode;
