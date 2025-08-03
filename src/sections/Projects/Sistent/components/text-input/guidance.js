import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { Row } from "../../../../../reusecore/Layout";
import { SistentThemeProvider, Input } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const TextInputGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Text Input">
      <div className="content">
        <a id="Identity">
          <h2>Text Input</h2>
        </a>
        <p>
          The Input component is a fundamental form element that enables efficient text data collection.
          It adapts to different content types and user contexts while maintaining accessibility and usability standards.
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
            Input components are essential elements in user interfaces, enabling users to enter and edit text data.
            Their design and implementation are crucial for creating effective forms and data collection experiences.
          </p>

          <a id="Function">
            <h2>Function</h2>
          </a>
          <p>Input components serve various functions in user interfaces:</p>

          <h3>Single-line Text Input</h3>
          <p>
            These inputs collect brief text data such as names, emails, or search queries.
            They should be appropriately sized and provide clear visual feedback to users.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Input placeholder="Enter your email" type="email" />
            </SistentThemeProvider>
          </Row>

          <h3>Multi-line Text Input</h3>
          <p>
            Multi-line inputs accommodate longer text content like comments, descriptions, or messages.
            They automatically expand to fit content and provide users with adequate space for expression.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Input
                placeholder="Share your feedback..."
                multiline
              />
            </SistentThemeProvider>
          </Row>
          <a id="Placeholder Guidelines">
            <h2>Placeholder Guidelines</h2>
          </a>
          <p>
            Placeholder text is crucial for guiding users and setting expectations.
            Effective placeholders improve usability and reduce form completion errors.
          </p>

          <h3>Descriptive Text</h3>
          <p>
            Use clear, descriptive placeholder text that indicates the expected input format or provides helpful examples.
            Avoid generic placeholders that don't add value to the user experience.
          </p>

          <h3>Concise Language</h3>
          <p>
            Keep placeholder text brief and to the point. Long placeholders can be truncated on smaller screens
            and may overwhelm the input field visually.
          </p>

          <h3>Accessibility Considerations</h3>
          <p>
            Ensure placeholder text has sufficient contrast and doesn't rely solely on color to convey information.
            Placeholders should complement, not replace, proper form labels for screen reader accessibility.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default TextInputGuidance;