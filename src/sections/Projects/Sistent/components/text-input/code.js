import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Input } from "@sistent/sistent";
import { CodeBlock } from "../button/code-block";


import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  "<Input placeholder=\"Enter your name\" />",
  `<Input
  label="Email Address"
  type="email"
  placeholder="example@domain.com"
  required
/>`,
  `<Input
  placeholder="Share your thoughts..."
  multiline
  rows={4}
/>`,
  `<Input color="primary" placeholder="Primary" />
<Input color="secondary" placeholder="Secondary" />
<Input color="success" placeholder="Success" />`,
  `<Input
  type="password"
  label="Password"
  placeholder="Enter password"
  required
/>
<Input
  type="number"
  label="Age"
  placeholder="25"
/>
<Input
  type="tel"
  label="Phone"
  placeholder="+1 (555) 123-4567"
/>`,
  `<Input
  label="Username"
  placeholder="Enter username"
  error
  helperText="Username is already taken"
/>`,
  `<Input
  label="Read-only Field"
  value="This field is disabled"
  disabled
/>`
];

const TextInputCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Text Input">
      <div className="content">
        <a id="Identity">
          <h2>Text Input</h2>
        </a>
        <p>
          Input components provide users with the ability to enter text data in forms and interfaces.
          They support various input types, validation states, and customization options for creating
          effective data collection experiences.
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
            The <code>Input</code> component is essential for collecting user data in forms.
            It provides immediate feedback during data entry, supports various input types,
            and maintains consistency with your application's design system.
          </p>

          <a id="Basic Input">
            <h2>Basic Text Input</h2>
          </a>
          <p>
            A simple input field for collecting single-line text data. This is the most common
            form of text input used across applications.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Input placeholder="Enter your name" />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="input-basic" code={codes[0]} />
          </div>

          <a id="Input with Label">
            <h2>Labeled Input</h2>
          </a>
          <p>
            Inputs with labels provide better accessibility and user guidance. Labels clearly
            identify the purpose of each input field and support screen readers.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="example@domain.com"
                  required
                />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="input-labeled" code={codes[1]} />
          </div>

          <a id="Multiline Input">
            <h2>Multiline Text Input</h2>
          </a>
          <p>
            For longer text content that may span multiple lines. The multiline input
            automatically expands to accommodate content and provides users with adequate space.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Input
                  placeholder="Share your thoughts..."
                  multiline
                  rows={4}
                />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="input-multiline" code={codes[2]} />
          </div>

          <a id="Color Options">
            <h2>Color Options</h2>
          </a>
          <p>
            Input components support various color themes to match your application's
            design system. Colors can convey different meanings or states within your interface.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
                  <Input color="primary" placeholder="Primary" />
                  <Input color="secondary" placeholder="Secondary" />
                  <Input color="success" placeholder="Success" />
                </div>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="input-colors" code={codes[3]} />
          </div>

          <a id="Input Types">
            <h2>Different Input Types</h2>
          </a>
          <p>
            Various input types provide specialized behavior and validation for different
            data formats. Choose the appropriate type to enhance user experience and data quality.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
                  <Input
                    type="password"
                    label="Password"
                    placeholder="Enter password"
                    required
                  />
                  <Input
                    type="number"
                    label="Age"
                    placeholder="25"
                  />
                  <Input
                    type="tel"
                    label="Phone"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="input-types" code={codes[4]} />
          </div>

          <a id="Error State">
            <h2>Error State</h2>
          </a>
          <p>
            Error states provide visual feedback when validation fails. Combined with helper text,
            they guide users toward resolving input issues effectively.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Input
                  label="Username"
                  placeholder="Enter username"
                  error
                  helperText="Username is already taken"
                />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="input-error" code={codes[5]} />
          </div>

          <a id="Disabled State">
            <h2>Disabled State</h2>
          </a>
          <p>
            Disabled inputs are non-interactive and typically used for read-only data
            or when certain conditions haven't been met to enable the input.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Input
                  label="Read-only Field"
                  value="This field is disabled"
                  disabled
                />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="input-disabled" code={codes[6]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default TextInputCode;