import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";

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
          <p>Props of the Fade component are also available.</p>

          <table>
            <thead>
              <tr style={{ backgroundColor: "#121212" }}>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>children</code>
                </td>
                <td>
                  <code>node</code>
                </td>
                <td>
                  The content of the component.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>defaultValue</code>
                </td>
                <td>
                  <code>any</code>
                </td>
                <td>The default value. Use when the component is not controlled.</td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
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
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>onChange</code>
                </td>
                <td>
                  <code>func</code>
                </td>
                <td>
                  Callback fired when a radio button is selected.
                  <strong>Signature:</strong>
                  <code>
                    {"function(event: React.ChangeEvent, value: string) => void"}
                  </code>

                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
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
        </div>
      </div>
    </SistentLayout>
  );
};

export default RadioGroupGuidance;