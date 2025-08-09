import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Input } from "@sistent/sistent";
import { Row } from "../../../../../reusecore/Layout";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentTextInput = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Text Input">
      <div className="content">
        <a id="Identity">
          <h2>Text Input</h2>
        </a>
        <p>
          The Input component is a versatile form control that enables users to enter and edit text data.
          It supports various input types, validation states, and customization options to create
          accessible and user-friendly data collection experiences.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/text-input"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/text-input")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/text-input/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/text-input/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/text-input/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/text-input/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Input components are fundamental building blocks for forms and data collection interfaces.
            They provide immediate feedback to users and help maintain data quality through validation
            and formatting features. The component adapts to different content types while maintaining
            consistency with your design system.
          </p>
          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <p>
            The component can be used in several main variants:
          </p>
          <ul>
            <li><p><b>Standard:</b> Single-line text input for basic data collection</p></li>
            <li><p><b>Multiline:</b> Multi-line text area for longer content</p></li>
          </ul>
          <a id="Basic Example">
            <h3>Basic Example</h3>
          </a>
          <p>
            Below is a simple example of how to use the Input component.
          </p>
          <br />
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Input placeholder="Enter your name" />
            </SistentThemeProvider>
          </Row>
          <br />
          <a id="Key Features">
            <h2>Key Features</h2>
          </a>
          <p>
            You can customize the appearance and behavior of the Input component using
            various props to define how the component renders and interacts with users.
          </p>
          <h3>Input Types</h3>
          <ul>
            <li><p><b>Text:</b> Standard text input for general text data</p></li>
            <li><p><b>Email:</b> Email input with built-in validation</p></li>
            <li><p><b>Password:</b> Password input with hidden text</p></li>
            <li><p><b>Number:</b> Numeric input with increment/decrement controls</p></li>
            <li><p><b>Tel:</b> Telephone number input</p></li>
            <li><p><b>URL:</b> URL input with validation</p></li>
            <li><p><b>Search:</b> Search input with optimized styling</p></li>
          </ul>
          <h3>Visual Features</h3>
          <ul>
            <li><p><b>Standard:</b> Clean, minimalist input styling</p></li>
            <li><p><b>Multiline:</b> Expandable text area for longer content</p></li>
          </ul>
          <h3>Customization Options</h3>
          <ul>
            <li><p><b>Color:</b> Primary, secondary, success, error, warning color themes</p></li>
            <li><p><b>Label:</b> Descriptive labels for accessibility</p></li>
            <li><p><b>Helper Text:</b> Additional guidance or validation messages</p></li>
            <li><p><b>Placeholder:</b> Hint text showing expected input format</p></li>
            <li><p><b>Disabled State:</b> Non-interactive state for read-only contexts</p></li>
            <li><p><b>Required:</b> Indicates mandatory fields</p></li>
            <li><p><b>Error State:</b> Visual feedback for validation errors</p></li>
            <li><p><b>Start/End Adornments:</b> Icons or text before/after input content</p></li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentTextInput;