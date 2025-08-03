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
            The Input component differs from other form elements in that it's designed to be lightweight and flexible.
            Unlike specialized components like Select or Checkbox, Input handles free-form text entry with minimal styling,
            making it ideal for various text collection needs across your application.
          </p>

          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <p>
            The Input component renders as a standard HTML input by default, but supports multiline text areas when needed.
            It integrates seamlessly with Sistent's theming system while maintaining native HTML input behavior.
          </p>

          <h3>Basic Input</h3>
          <p>
            The simplest form of the Input component for collecting single-line text data.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Input placeholder="Enter your name" />
            </SistentThemeProvider>
          </Row>

          <h3>Multiline Input</h3>
          <p>
            For longer text content, the multiline variant renders as a textarea that expands based on content.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Input
                placeholder="Enter your message..."
                multiline
              />
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentTextInput;