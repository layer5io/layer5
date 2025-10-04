import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { Chip, SistentThemeProvider, DesignIcon } from "@sistent/sistent";
import { CodeBlock } from "../button/code-block";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `  <SistentThemeProvider>
       <Chip label="Basic Chip" />
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Chip label="Clickable" clickable />
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Chip label="Deletable" onDelete={() => {}} />
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Chip label="Filled" variant="filled" />
       <Chip label="Outlined" variant="outlined" />
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Chip label="Small" size="small" />
       <Chip label="Medium" size="medium" />
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Chip label="Design" variant="outlined" icon={<DesignIcon />} />
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Chip label="Primary" color="primary" />
       <Chip label="Secondary" color="secondary" />
       <Chip label="Success" color="success" />
       <Chip label="Error" color="error" />
  </SistentThemeProvider>`,
];

const ChipCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Chip">
      <div className="content">
        <a id="Identity">
          <h2>Chip</h2>
        </a>
        <p>
          Chips are compact elements that represent an input, attribute, or action.
          They allow users to enter information, make selections, filter content, or trigger actions.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/chip"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/chip")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/chip/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/chip/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/chip/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/chip/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Chips can be used to display information, enable user interaction,
            and provide a way to input or filter data.
          </p>
          <a id="Basic Chip">
            <h2>Basic Chip</h2>
          </a>
          <p>The chip comes in different types: Basic, Clickable, and Deletable.</p>
          <h3>Basic Chip</h3>
          <p>
            Basic chips display simple information and are typically non-interactive.
            They're useful for showing tags, categories, or labels.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Chip label="Basic Chip" />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-chip" code={codes[0]} />
          </div>
          <h3>Clickable Chip</h3>
          <p>
            Clickable chips respond to user interaction and can trigger actions
            when clicked.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Chip label="Clickable" clickable />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="clickable-chip" code={codes[1]} />
          </div>
          <h3>Deletable Chip</h3>
          <p>
            Deletable chips include a delete icon that allows users to remove them.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Chip label="Deletable" onDelete={() => {}} />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="deletable-chip" code={codes[2]} />
          </div>
          <a id="Variants">
            <h2>Variants</h2>
          </a>
          <p>
            Chips come in different visual styles: filled and outlined.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Chip label="Filled" variant="filled" />
                <Chip label="Outlined" variant="outlined" />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="chip-variants" code={codes[3]} />
          </div>
          <a id="Sizes">
            <h2>Sizes</h2>
          </a>
          <p>
            Chips are available in different sizes: small and medium.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Chip label="Small" size="small" />
                <Chip label="Medium" size="medium" />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="chip-sizes" code={codes[4]} />
          </div>
          <a id="Logo Chip">
            <h2>Logo Chip</h2>
          </a>
          <p>
            Chips can display icons alongside text labels for enhanced visual identification.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Chip
                  label="Design"
                  variant="outlined"
                  icon={<DesignIcon style={{ marginLeft: "8px", marginRight: "8px" }} />}
                  style={{ paddingLeft: "4px", margin: "0 8px" }}
                />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="logo-chip" code={codes[5]} />
          </div>
          <a id="Colors">
            <h2>Colors</h2>
          </a>
          <p>
            Chips can use different colors to convey meaning or status.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Chip label="Primary" color="primary" />
                <Chip label="Secondary" color="secondary" />
                <Chip label="Success" color="success" />
                <Chip label="Error" color="error" />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="chip-colors" code={codes[6]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ChipCode;
