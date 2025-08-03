import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Input } from "@sistent/sistent";
import { CodeBlock } from "../button/code-block";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  "<Input placeholder=\"Enter your name\" />",
  `<Input
  placeholder="Share your thoughts..."
  multiline
/>`,
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
          The <code>Input</code> component enables users to enter text data in forms and interfaces.
          It provides a clean, accessible way to collect user information with support for different input types and multiline text.
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
            The Input component provides flexible text input capabilities with minimal configuration.
            It integrates with Sistent's theming system while maintaining native HTML input behavior
            for optimal performance and accessibility.
          </p>

          <a id="Basic Input">
            <h2>Basic Input</h2>
          </a>
          <p>
            A simple input field for collecting single-line text data. This is the most common form of text input.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Input placeholder="Enter your name" />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-input" code={codes[0]} />
          </div>

          <a id="Multiline Input">
            <h2>Multiline Input</h2>
          </a>
          <p>
            For longer text content that may span multiple lines. The input automatically expands vertically as users type.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Input
                  placeholder="Share your thoughts..."
                  multiline
                />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="multiline-input" code={codes[1]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default TextInputCode;