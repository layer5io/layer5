import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentThemeProvider, Modal, Box, Button } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const ModalGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Modal">
      <div className="content">
        <a id="Identity">
          <h2>Modal</h2>
        </a>
        <p>
          A modal is a container that appears in front of the main content on a
          page, providing important information or an actionable piece of
          content for users to execute.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/modal"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/modal")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
                "/projects/sistent/components/modal/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/modal/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/modal/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/modal/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Modals provide a focused way to capture user attention for important
            actions or information. They temporarily disable the main interface
            until the user responds to the modal dialog.
          </p>

          <a id="When to Use">
            <h2>When to Use Modals</h2>
          </a>
          <p>
            Modals are powerful UI elements that command attention, but they should be used judiciously:
          </p>
          <ul style={{ paddingLeft: "30px" }}>
            <li style={{ marginBottom: "8px" }}><strong>Do use</strong> for important actions that require immediate attention</li>
            <li style={{ marginBottom: "8px" }}><strong>Do use</strong> when you need user confirmation before proceeding with a critical action</li>
            <li style={{ marginBottom: "8px" }}><strong>Do use</strong> for collecting focused input in a controlled context</li>
            <li style={{ marginBottom: "8px" }}><strong>Don't use</strong> for non-critical information that could be displayed inline</li>
            <li style={{ marginBottom: "8px" }}><strong>Don't use</strong> for complex multi-step processes that would be better as dedicated pages</li>
            <li style={{ marginBottom: "8px" }}><strong>Don't use</strong> multiple modals simultaneously or nested modals</li>
          </ul>

          <a id="Content Guidelines">
            <h2>Content Guidelines</h2>
          </a>
          <p>
            Effective modal content is concise and focused:
          </p>
          <ul style={{ paddingLeft: "30px" }}>
            <li style={{ marginBottom: "8px" }}>Use clear, action-oriented titles that describe the purpose of the modal</li>
            <li style={{ marginBottom: "8px" }}>Keep body content brief and directly related to the required action</li>
            <li style={{ marginBottom: "8px" }}>Label buttons clearly to indicate their action (e.g., "Save" instead of "OK")</li>
            <li style={{ marginBottom: "8px" }}>For confirmation modals, explicitly state the consequences of the action</li>
            <li style={{ marginBottom: "8px" }}>Use visual hierarchy to guide attention to the most important elements</li>
          </ul>

          <a id="Accessibility">
            <h2>Accessibility</h2>
          </a>
          <p>
            Modals must be accessible to all users:
          </p>
          <ul style={{ paddingLeft: "30px" }}>
            <li style={{ marginBottom: "8px" }}>When a modal opens, focus should automatically move to the first focusable element within the modal</li>
            <li style={{ marginBottom: "8px" }}>Focus should be trapped within the modal until it is closed</li>
            <li style={{ marginBottom: "8px" }}>When the modal closes, focus should return to the element that triggered the modal</li>
            <li style={{ marginBottom: "8px" }}>Provide keyboard navigation support, including ESC key to close the modal</li>
            <li style={{ marginBottom: "8px" }}>Ensure sufficient color contrast for all text within the modal</li>
            <li style={{ marginBottom: "8px" }}>Use ARIA attributes appropriately (aria-modal, aria-labelledby, aria-describedby)</li>
          </ul>

          <a id="Placement">
            <h2>Placement</h2>
          </a>
          <p>
            Modal placement should be consistent and visually balanced:
          </p>
          <ul style={{ paddingLeft: "30px" }}>
            <li style={{ marginBottom: "8px" }}>Center the modal both horizontally and vertically in the viewport for most cases</li>
            <li style={{ marginBottom: "8px" }}>Ensure the modal is visible without requiring scrolling when possible</li>
            <li style={{ marginBottom: "8px" }}>For content that exceeds the viewport height, make the modal body scrollable while keeping the header and footer fixed</li>
            <li style={{ marginBottom: "8px" }}>Maintain appropriate padding around content to avoid a cramped appearance</li>
          </ul>

          <a id="Visual Design">
            <h2>Visual Design</h2>
          </a>
          <p>
            The visual design of modals should follow these guidelines:
          </p>
          <ul style={{ paddingLeft: "30px" }}>
            <li style={{ marginBottom: "8px" }}>Use a semi-transparent overlay behind the modal to create depth and focus attention on the modal content</li>
            <li style={{ marginBottom: "8px" }}>Include a visible close button in a consistent location (typically top-right corner)</li>
            <li style={{ marginBottom: "8px" }}>Maintain consistent spacing and alignment of elements within the modal</li>
            <li style={{ marginBottom: "8px" }}>Use subtle entrance and exit animations to reinforce the modal's temporary nature</li>
            <li style={{ marginBottom: "8px" }}>Apply appropriate elevation (shadow) to clearly separate the modal from the background content</li>
          </ul>

          <a id="Behavior">
            <h2>Behavior</h2>
          </a>
          <p>
            Modal behavior should be predictable and intuitive:
          </p>
          <ul style={{ paddingLeft: "30px" }}>
            <li style={{ marginBottom: "8px" }}>Modals should block interaction with the underlying page until dismissed</li>
            <li style={{ marginBottom: "8px" }}>Provide multiple ways to dismiss the modal (close button, cancel button, clicking overlay, pressing ESC key)</li>
            <li style={{ marginBottom: "8px" }}>For forms within modals, validate input before submission and provide clear error messages</li>
            <li style={{ marginBottom: "8px" }}>Consider adding confirmation for destructive actions within modals</li>
            <li style={{ marginBottom: "8px" }}>For modals that trigger asynchronous operations, show appropriate loading indicators</li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ModalGuidance;
