import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { ActionBox, DocsTable, TableHead, TableBody } from "../../sistent.style";

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

          <a id="API Reference">
            <h2>API Reference</h2>
          </a>
          <p>
            Below you'll find detailed information about the props and components of the Modal system.
          </p>

          <a id="Modal Props">
            <h3>Modal Props</h3>
          </a>
          <div className="table-responsive">
            <DocsTable>
              <TableHead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </TableHead>
              <TableBody>
                <tr>
                  <td><code>open</code></td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Controls the visibility of the modal</td>
                </tr>
                <tr>
                  <td><code>closeModal</code></td>
                  <td>function</td>
                  <td>required</td>
                  <td>Callback function triggered when the modal is closed</td>
                </tr>
                <tr>
                  <td><code>title</code></td>
                  <td>string</td>
                  <td>&quot;&quot;</td>
                  <td>Text displayed in the modal header</td>
                </tr>
                <tr>
                  <td><code>headerIcon</code></td>
                  <td>React.ReactNode</td>
                  <td>undefined</td>
                  <td>Icon to display in the modal header</td>
                </tr>
                <tr>
                  <td><code>reactNode</code></td>
                  <td>React.ReactNode</td>
                  <td>undefined</td>
                  <td>Content to be rendered inside the modal (alternative to children)</td>
                </tr>
                <tr>
                  <td><code>children</code></td>
                  <td>node</td>
                  <td>required</td>
                  <td>Content to be rendered inside the modal</td>
                </tr>
                <tr>
                  <td><code>maxWidth</code></td>
                  <td>string</td>
                  <td>'xs'</td>
                  <td>Controls the maximum width of the modal</td>
                </tr>
              </TableBody>
            </DocsTable>
          </div>

          <a id="Modal Body Props">
            <h3>ModalBody Props</h3>
          </a>
          <div className="table-responsive">
            <DocsTable>
              <TableHead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </TableHead>
              <TableBody>
                <tr>
                  <td><code>children</code></td>
                  <td>node</td>
                  <td>required</td>
                  <td>Content to display in the modal body</td>
                </tr>
                <tr>
                  <td><code>sx</code></td>
                  <td>object</td>
                  <td>{ }</td>
                  <td>Custom styles to apply to the modal body</td>
                </tr>
              </TableBody>
            </DocsTable>
          </div>

          <a id="Modal Footer Props">
            <h3>ModalFooter Props</h3>
          </a>
          <div className="table-responsive">
            <DocsTable>
              <TableHead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </TableHead>
              <TableBody>
                <tr>
                  <td><code>variant</code></td>
                  <td>string</td>
                  <td>&quot;transparent&quot;</td>
                  <td>Footer style variant. Options: &quot;filled&quot;, &quot;transparent&quot;</td>
                </tr>
                <tr>
                  <td><code>helpText</code></td>
                  <td>string</td>
                  <td>undefined</td>
                  <td>Help text to display with an info icon</td>
                </tr>
                <tr>
                  <td><code>children</code></td>
                  <td>node</td>
                  <td>required</td>
                  <td>Content to display in the footer, typically action buttons</td>
                </tr>
              </TableBody>
            </DocsTable>
          </div>

          <a id="Modal Button Components">
            <h3>Modal Button Components</h3>
          </a>
          <div className="table-responsive">
            <DocsTable>
              <TableHead>
                <tr>
                  <th>Component</th>
                  <th>Description</th>
                </tr>
              </TableHead>
              <TableBody>
                <tr>
                  <td><code>ModalButtonPrimary</code></td>
                  <td>Primary action button, typically used for confirming actions. Styled with the brand's primary color.</td>
                </tr>
                <tr>
                  <td><code>ModalButtonSecondary</code></td>
                  <td>Secondary action button, typically used for cancellation. Styled as an outlined button with white text.</td>
                </tr>
                <tr>
                  <td><code>ModalButtonTertiary</code></td>
                  <td>Tertiary action button, used for less important actions. Styled as a text button with inverse text color.</td>
                </tr>
                <tr>
                  <td><code>ModalButtonDanger</code></td>
                  <td>Danger action button, used for destructive actions like delete. Styled with error color.</td>
                </tr>
                <tr>
                  <td><code>PrimaryActionButtons</code></td>
                  <td>A convenience component that renders a primary and secondary button side by side.</td>
                </tr>
              </TableBody>
            </DocsTable>
          </div>

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