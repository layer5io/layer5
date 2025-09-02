import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import styled from "styled-components";

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 0;
  padding-left: 1px; /* Fix for left edge cutoff */
  
  table {
    margin-left: 4px; /* Extra spacing on left edge */
    min-width: 600px; /* Ensures minimum width for better mobile view */
  }
  
  th:first-child, td:first-child {
    padding-left: 8px; /* Extra padding on first column */
  }
`;

const RadioGroupGuidance = () => {
  const location = useLocation();

  return (
    <SistentLayout title="RadioGroup">
      <div className="content">
        <a id="Identity">
          <h2>RadioGroup</h2>
        </a>
        <p>
        The Radio Group allows the user to select one option from a set.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/radiogroup"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/radiogroup")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
                "/projects/sistent/components/radiogroup/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/radiogroup/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/radiogroup/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/radiogroup/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The RadioGroup component in React is used to present a set of
            mutually exclusive options, where only one option can be selected
            at a time. It is commonly used in forms and settings.
          </p>
          <a id="Function">
            <h2>Function</h2>
          </a>
          <p>The RadioGroup component helps achieve the following functions:</p>
          <ul>
            <li>
              <strong>Single Selection:</strong> Ensures that only one option
              can be selected at a time, making it ideal for mutually exclusive
              choices.
            </li>
            <li>
              <strong>Form Inputs:</strong> Commonly used in forms where users
              need to select from predefined options, such as survey questions
              or settings.
            </li>
            <li>
              <strong>Custom UI Controls:</strong> Can be styled and customized
              to fit different design requirements and themes.
            </li>
          </ul>

          <a id="Props">
            <h2>Props</h2>
          </a>
          <p>
            The RadioGroup component accepts the following props to customize its behavior and appearance.
          </p>

          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>children</code>
                  </td>
                  <td>
                    <code>node</code>
                  </td>
                  <td>
                    The content of the component, typically a set of FormControlLabel elements.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>defaultValue</code>
                  </td>
                  <td>
                    <code>any</code>
                  </td>
                  <td>The default value. Use when the component is not controlled.</td>
                </tr>
                <tr>
                  <td>
                    <code>name</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>
                    The name used to reference the value of the control.
                    If you don't provide this prop, it falls back to a randomly generated name.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>onChange</code>
                  </td>
                  <td>
                    <code>func</code>
                  </td>
                  <td>
                    Callback fired when a radio button is selected.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>row</code>
                  </td>
                  <td>
                    <code>bool</code>
                  </td>
                  <td>
                    If <code>true</code>, the radio buttons will be arranged horizontally.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>size</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>
                    The size of the component. One of: <code>'small'</code>, <code>'medium'</code> (default).
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>value</code>
                  </td>
                  <td>
                    <code>any</code>
                  </td>
                  <td>
                    Value of the selected radio button. The DOM API casts this to a string.
                  </td>
                </tr>
              </tbody>
            </table>
          </TableContainer>

          <a id="BestPractices">
            <h2>Best Practices</h2>
          </a>
          <ul>
            <li><strong>Single-choice only:</strong> Use RadioGroup when users must select just one option from a set. For multiple selections, use checkboxes instead.</li>
            <li><strong>Clear labeling:</strong> Provide short, descriptive labels for each radio option to help users understand their choices quickly.</li>
            <li><strong>Logical grouping:</strong> Visually and semantically group related radio options together to improve clarity and accessibility.</li>
            <li><strong>Default selection:</strong> Set a sensible default value to guide users and streamline their decision-making process.</li>
            <li><strong>Horizontal layout:</strong> Use the <code>row</code> prop for horizontal alignment when space is limited or when options are closely related.</li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default RadioGroupGuidance;