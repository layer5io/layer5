import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import { SistentThemeProvider, Button, Input } from "@sistent/sistent";
import { Row } from "../../../../../reusecore/Layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const TextInputGuidance = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();

  const [currentColor, setCurrentColor] = useState("primary");
  const [currentType, setCurrentType] = useState("text");

  const colors = ["primary", "secondary", "success", "error", "warning", "info"];
  const types = ["text", "email", "password", "number", "tel", "url", "search"];

  const getPlaceholderText = () => {
    switch (currentType) {
      case "email": return "example@domain.com";
      case "password": return "Enter password";
      case "number": return "123";
      case "tel": return "+1 (555) 123-4567";
      case "url": return "https://example.com";
      case "search": return "Search...";
      default: return "Enter text";
    }
  };

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
              location.pathname === "/projects/sistent/components/text-input/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/text-input/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Proper usage of the Input component can enhance user experience by providing clear,
            accessible, and visually consistent form controls. Below are guidelines and interactive
            examples to help you implement inputs effectively.
          </p>

          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <p>
            To use the Input component, include it in your form with the desired props. The component
            supports various input types and styling options:
          </p>
          <ul>
            <li><code>type</code> for input behavior (text, email, password, etc.)</li>
            <li><code>color</code> for theme colors</li>
            <li><code>multiline</code> for text areas</li>
            <li><code>disabled</code>, <code>error</code>, <code>required</code> for different states</li>
          </ul>
          <br />

          <a id="Colors">
            <h3>Colors</h3>
          </a>
          <p>
            Customize the color theme of the input component. Colors can convey different meanings
            or states within your interface:
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Input
                color={currentColor}
                placeholder={`${currentColor.charAt(0).toUpperCase() + currentColor.slice(1)} input`}
                label={`${currentColor.charAt(0).toUpperCase() + currentColor.slice(1)} Color`}
              />
            </SistentThemeProvider>
          </Row>
          <div style={{ marginTop: "15px", display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            {colors.map((color) => (
              <Button
                key={color}
                variant={currentColor === color ? "contained" : "outlined"}
                label={color.charAt(0).toUpperCase() + color.slice(1)}
                size="small"
                onClick={() => setCurrentColor(color)}
              />
            ))}
          </div>

          <br />
          <a id="Input Types">
            <h3>Input Types</h3>
          </a>
          <p>
            Different input types provide specialized behavior and validation for different
            data formats. The placeholder text automatically updates to match the selected type:
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Input
                type={currentType}
                placeholder={getPlaceholderText()}
                label={`${currentType.charAt(0).toUpperCase() + currentType.slice(1)} Input`}
              />
            </SistentThemeProvider>
          </Row>
          <div style={{ marginTop: "15px", display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            {types.map((type) => (
              <Button
                key={type}
                variant={currentType === type ? "contained" : "outlined"}
                label={type.charAt(0).toUpperCase() + type.slice(1)}
                size="small"
                onClick={() => setCurrentType(type)}
              />
            ))}
          </div>

          <br />
          <a id="States">
            <h3>Input States</h3>
          </a>
          <p>
            Input components support various states to provide feedback and control user interaction.
            These examples demonstrate different state combinations:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center", width: "100%" }}>
                <Input
                  placeholder="Normal state"
                  label="Normal Input"
                />
                <Input
                  placeholder="This field is required"
                  label="Required Input *"
                  required
                />
                <Input
                  placeholder="This input has an error"
                  label="Error Input"
                  error
                  helperText="This field has an error"
                />
                <Input
                  value="This field is disabled"
                  label="Disabled Input"
                  disabled
                />
                <Input
                  placeholder="Multi-line text area..."
                  label="Multiline Input"
                  multiline
                  rows={3}
                />
              </div>
            </SistentThemeProvider>
          </div>

          <a id="Best Practices">
            <h2>Best Practices</h2>
          </a>

          <h3>Accessibility</h3>
          <p>
            Always provide clear labels for screen readers and ensure sufficient color contrast.
            Use helper text to provide additional context and validation feedback.
          </p>

          <h3>Validation</h3>
          <p>
            Implement real-time validation when appropriate, but avoid being overly aggressive.
            Provide clear error messages that help users understand how to fix issues.
          </p>

          <h3>Placeholder Text</h3>
          <p>
            Use placeholder text to show examples of expected input format, but don't rely on it
            as the primary way to communicate requirements. Always include proper labels.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default TextInputGuidance;