import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";

const CheckBoxGuidance = () => {
  const location = useLocation();

  return (
    <SistentLayout title="Checkbox">
      <div className="content">
        <a id="Identity">
          <h2>Checkbox</h2>
        </a>
        <p>
          The Checkbox component allows users to select one or multiple options from a list.
          It's commonly used in forms and settings.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/checkbox"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/checkbox")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
                "/projects/sistent/components/checkbox/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/checkbox/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/checkbox/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/checkbox/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The Checkbox component provides a simple and customizable way to capture
            boolean input from users. It is commonly used in forms, settings, and selection interfaces,
            allowing users to toggle between checked and unchecked states. The component
            supports features like indeterminate state, custom icons, and event handling
            for seamless integration into various UI scenarios.
          </p>

          <a id="Function">
            <h2>Function</h2>
          </a>

          <p>The Checkbox component helps achieve the following functions:</p>
          <ul>
            <li>
              <strong>Selection Control:</strong> Allows users to toggle between two states (checked or unchecked) for selecting options.
            </li>
            <li>
              <strong>Multi-Selection:</strong> Enables selecting multiple items in a group, commonly used in lists or filters.
            </li>
            <li>
              <strong>Form Input:</strong> Used in forms to collect boolean (true/false) input from users.
            </li>
            <li>
              <strong>Indeterminate State:</strong> Represents a partially selected state, often used in nested checkboxes where some child options are selected.
            </li>
            <li>
              <strong>Accessibility Support:</strong> Provides keyboard navigation and screen reader support for better usability.
            </li>
          </ul>


          <a id="Props">
            <h2>Props</h2>
          </a>
          <p>Props of the Fade component are also available.</p>

          <table>
            <thead>
              <tr style={{ backgroundColor: "#121212" }}>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>checked</code>
                </td>
                <td>
                  <code>bool</code>
                </td>
                <td>-</td>
                <td>
                  If <code>true</code>, the component is checked.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>checkedIcon</code>
                </td>
                <td>
                  <code>node</code>
                </td>
                <td><code>{"<CheckBoxIcon />"}</code></td>
                <td>The icon to display when the component is checked.</td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>classes</code>
                </td>
                <td>
                  <code>object</code>
                </td>
                <td>-</td>
                <td>
                  Override or extend the styles applied to the component. See
                  CSS classes API below for more details.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>color</code>
                </td>
                <td>
                  <code>'default'
                    | 'primary'
                    | 'secondary'
                    | 'error'
                    | 'info'
                    | 'success'
                    | 'warning'
                    | string</code>
                </td>
                <td><code>primary</code></td>
                <td>
                  The color of the component. It supports both default and custom theme colors.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>defaultChecked</code>
                </td>
                <td>
                  <code>bool</code>
                </td>
                <td>-</td>
                <td>
                  The default checked state. Use when the component is not controlled.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>disabled</code>
                </td>
                <td>
                  <code>bool</code>
                </td>
                <td>
                  <code>false</code>
                </td>
                <td>
                  If <code>true</code>, the component is disabled.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>disableRipple</code>
                </td>
                <td>
                  <code>bool</code>
                </td>
                <td>
                  <code>false</code>
                </td>
                <td>
                  If <code>true</code>, the ripple effect is disabled.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>icon</code>
                </td>
                <td>
                  <code>node</code>
                </td>
                <td>
                  <code>{"<CheckBoxOutlineBlankIcon />"}</code>
                </td>
                <td>
                  The icon to display when the component is unchecked..</td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>id</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>
                  <code>-</code>
                </td>
                <td>
                  If <code>true</code>, the component appears indeterminate.
                  This does not set the native input element to
                  indeterminate due to inconsistent behavior
                  across browsers.
                  However, we set a <code>data-indeterminate</code> attribute on the input.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>id</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>
                  <code>-</code>
                </td>
                <td>
                  If <code>true</code>, the component appears indeterminate.
                  This does not set the native input element to
                  indeterminate due to inconsistent behavior
                  across browsers.
                  However, we set a <code>data-indeterminate</code> attribute on the input.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td><code>indeterminate</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>
                  If <code>true</code>, the component appears indeterminate. This does not
                  set the native input element to indeterminate due to inconsistent browser
                  behavior. Instead, a <code>data-indeterminate</code> attribute is set.
                </td>
              </tr>

              <tr style={{ backgroundColor: "#121212" }}>
                <td><code>indeterminateIcon</code></td>
                <td><code>node</code></td>
                <td><code>&lt;IndeterminateCheckBoxIcon /&gt;</code></td>
                <td>The icon displayed when the component is in an indeterminate state.</td>
              </tr>

              <tr style={{ backgroundColor: "#121212" }}>
                <td><code>inputProps</code></td>
                <td><code>object</code></td>
                <td><code>-</code></td>
                <td>
                  Attributes applied to the <code>input</code> element.
                  <strong>Deprecated:</strong> Use <code>slotProps.input</code> instead.
                </td>
              </tr>

              <tr style={{ backgroundColor: "#121212" }}>
                <td><code>onChange</code></td>
                <td><code>func</code></td>
                <td><code>-</code></td>
                <td>
                  Callback fired when the state changes. Signature:
                  <code>{"function(event: React.ChangeEvent) => void"}</code>
                  Access the new checked state with <code>event.target.checked</code>.
                </td>
              </tr>

              <tr style={{ backgroundColor: "#121212" }}>
                <td><code>required</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>If <code>true</code>, the <code>input</code> element is required.</td>
              </tr>

              <tr style={{ backgroundColor: "#121212" }}>
                <td><code>size</code></td>
                <td><code>'medium' | 'small' | string</code></td>
                <td><code>'medium'</code></td>
                <td>
                  The size of the component. <code>small</code> is equivalent to dense checkbox styling.
                </td>
              </tr>

              <tr style={{ backgroundColor: "#121212" }}>
                <td><code>slotProps</code></td>
                <td><code>{"input ?: func | object, root ?: func | object"}</code></td>
                <td><code>{ }</code></td>
                <td>The props used for each slot inside.</td>
              </tr>

              <tr style={{ backgroundColor: "#121212" }}>
                <td><code>slots</code></td>
                <td><code>{"input ?: elementType, root ?: elementType"}</code></td>
                <td><code>{ }</code></td>
                <td>The components used for each slot inside.</td>
              </tr>

              <tr style={{ backgroundColor: "#121212" }}>
                <td><code>sx</code></td>
                <td><code>Array&lt;func | object | bool&gt; | func | object</code></td>
                <td><code>-</code></td>
                <td>
                  The system prop that allows defining system overrides as well as additional CSS styles.
                  See the <a href="#">sx page</a> for more details.
                </td>
              </tr>

              <tr style={{ backgroundColor: "#121212" }}>
                <td><code>value</code></td>
                <td><code>any</code></td>
                <td><code>-</code></td>
                <td>
                  The value of the component. The DOM API casts this to a string.
                  The browser uses <code>"on"</code> as the default value.
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </SistentLayout>
  );
};

export default CheckBoxGuidance;