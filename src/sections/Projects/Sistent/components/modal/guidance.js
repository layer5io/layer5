import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
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
            until the user interacts with the modal.
          </p>

          <a id="When to Use">
            <h2>When to Use Modals</h2>
          </a>
          <p>
            Use modals strategically to avoid disrupting the user experience:
          </p>
          <ul className="guidance-list">
            <li className="guidance-list-item"><strong>Use for</strong> important actions requiring immediate attention</li>
            <li className="guidance-list-item"><strong>Use for</strong> confirmations before critical actions</li>
            <li className="guidance-list-item"><strong>Use for</strong> collecting focused input</li>
            <li className="guidance-list-item"><strong>Avoid using for</strong> non-critical information that could be displayed inline</li>
            <li className="guidance-list-item"><strong>Avoid using for</strong> complex multi-step processes</li>
            <li className="guidance-list-item"><strong>Avoid</strong> multiple or nested modals</li>
          </ul>

          <a id="Content Guidelines">
            <h2>Content Guidelines</h2>
          </a>
          <p>
            Keep modal content focused and clear:
          </p>
          <ul className="guidance-list">
            <li className="guidance-list-item">Use clear titles that describe what the modal is for</li>
            <li className="guidance-list-item">Keep content brief and directly related to the action</li>
            <li className="guidance-list-item">Use specific button labels (e.g., "Save" instead of "OK")</li>
            <li className="guidance-list-item">For confirmations, clearly state what will happen</li>
            <li className="guidance-list-item">Highlight the most important information</li>
          </ul>

          <a id="Accessibility">
            <h2>Accessibility</h2>
          </a>
          <p>
            Make modals accessible to all users:
          </p>
          <ul className="guidance-list">
            <li className="guidance-list-item">Focus should move to the first interactive element when modal opens</li>
            <li className="guidance-list-item">Trap focus within the modal until it's closed</li>
            <li className="guidance-list-item">Return focus to the triggering element when modal closes</li>
            <li className="guidance-list-item">Support keyboard navigation including ESC key to close</li>
            <li className="guidance-list-item">Ensure good color contrast for all text</li>
            <li className="guidance-list-item">Use proper ARIA attributes (aria-modal, aria-labelledby, aria-describedby)</li>
          </ul>

          <a id="Design">
            <h2>Design Guidelines</h2>
          </a>
          <p>
            Follow these design best practices:
          </p>
          <ul className="guidance-list">
            <li className="guidance-list-item">Center the modal in the viewport</li>
            <li className="guidance-list-item">Use a semi-transparent overlay to focus attention on the modal</li>
            <li className="guidance-list-item">Include a clear close button (usually in the top-right corner)</li>
            <li className="guidance-list-item">For long content, make the modal body scrollable while keeping headers and footers fixed</li>
            <li className="guidance-list-item">Use consistent spacing and padding</li>
            <li className="guidance-list-item">Apply subtle animations for opening and closing</li>
          </ul>

          <a id="Behavior">
            <h2>Behavior</h2>
          </a>
          <p>
            Ensure intuitive modal behavior:
          </p>
          <ul className="guidance-list">
            <li className="guidance-list-item">Block interaction with the page behind the modal</li>
            <li className="guidance-list-item">Provide multiple ways to dismiss (close button, cancel button, ESC key, clicking overlay)</li>
            <li className="guidance-list-item">Validate form inputs before submission</li>
            <li className="guidance-list-item">Show confirmation for destructive actions</li>
            <li className="guidance-list-item">Display loading indicators for operations that take time</li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ModalGuidance;