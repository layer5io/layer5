import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";

const BackdropGuidance = () => {
  const location = useLocation();

  return (
    <SistentLayout title="Backdrop">
      <div className="content">
        <a id="Identity">
          <h2>Backdrop</h2>
        </a>
        <p>
          The Backdrop component is used to overlay a dimmed background across
          the screen, drawing attention to content in the foreground, such as
          modals, dialogs, or loading indicators. The backdrop signals that the
          background content is temporarily inaccessible.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/backdrop"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/backdrop")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/backdrop/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/backdrop/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/backdrop/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/backdrop/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The Backdrop component provides a clean and efficient way to overlay
            a backdrop layer to indicate that the background content is
            temporarily inactive or inaccessible. This component is primarily
            used in conjunction with modals, loading indicators, or popovers.
          </p>

          <a id="Function">
            <h2>Function</h2>
          </a>

          <p>The Backdrop component helps achieve the following functions:</p>
          <ul>
            <li>
              <strong>Modal Backdrop:</strong> Provides a visual overlay when a
              modal is open, dimming the background and focusing attention on
              the modal.
            </li>
            <li>
              <strong>Loading Indicator:</strong> Can be used with a loading
              spinner or indicator to notify users that content is being
              processed.
            </li>
            <li>
              <strong>Popover or Custom Select:</strong> Useful for making a
              popover or custom select component more noticeable by blocking
              interaction with the background.
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
                  <code>open*</code>
                </td>
                <td>
                  <code>bool</code>
                </td>
                <td>-</td>
                <td>
                  If <code>true</code>, the component is shown.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>children</code>
                </td>
                <td>
                  <code>node</code>
                </td>
                <td>-</td>
                <td>The content of the component.</td>
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
                  <code>component</code>
                </td>
                <td>
                  <code>elementType</code>
                </td>
                <td>-</td>
                <td>
                  The component used for the root node. Either a string to use
                  an HTML element or a component.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>components</code>
                </td>
                <td>
                  <code>Root?: elementType </code>
                </td>
                <td>
                  <code>{}</code>
                </td>
                <td>
                  The components used for each slot inside.
                  <strong>Deprecated</strong> — Use the <code>slots</code> prop
                  instead. This prop will be removed in v7. See Migrating from
                  deprecated APIs for more details.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>componentsProps</code>
                </td>
                <td>
                  <code>root?: object </code>
                </td>
                <td>
                  <code>{}</code>
                </td>
                <td>
                  The extra props for the slot components. You can override the
                  existing props or add new ones.
                  <strong>Deprecated</strong> — Use the <code>slotProps</code>{" "}
                  prop instead. This prop will be removed in v7.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>invisible</code>
                </td>
                <td>
                  <code>bool</code>
                </td>
                <td>
                  <code>false</code>
                </td>
                <td>
                  If <code>true</code>, the backdrop is invisible, useful for
                  popovers or custom selects.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>slotProps</code>
                </td>
                <td>
                  <code>root?: func | object, transition?: func | object</code>
                </td>
                <td>
                  <code>{}</code>
                </td>
                <td>The props used for each slot inside the component.</td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>slots</code>
                </td>
                <td>
                  <code>root?: elementType, transition?: elementType</code>
                </td>
                <td>
                  <code>{}</code>
                </td>
                <td>The components used for each slot inside.</td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>sx</code>
                </td>
                <td>
                  <code>Array&lt;func | object | bool&gt; | func | object</code>
                </td>
                <td>-</td>
                <td>
                  The system prop for defining system overrides and additional
                  CSS styles. See the{" "}
                  <a href="https://mui.com/system/sx/">sx page</a> for more
                  details.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>TransitionComponent</code>
                </td>
                <td>
                  <code>elementType</code>
                </td>
                <td>
                  <code>Fade</code>
                </td>
                <td>
                  The component used for the transition. Refer to the guide for
                  component requirements.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#121212" }}>
                <td>
                  <code>transitionDuration</code>
                </td>
                <td>
                  <code>
                    number | appear?: number, enter?: number, exit?: number{" "}
                  </code>
                </td>
                <td>-</td>
                <td>
                  Duration for the transition, in milliseconds. Specify a single
                  timeout or individual times.
                </td>
              </tr>
            </tbody>
          </table>

          <a id="Labeling">
            <h2>Labeling</h2>
          </a>

          <p>
            The Backdrop component provides a clear visual indication that
            content is temporarily inaccessible. It is typically used for
            displaying temporary UI elements, such as dialogs or loading
            indicators. It's important to ensure that the backdrop is not
            intrusive and is used in the appropriate context.
          </p>

          <p>
            It is also essential to consider accessibility and usability when
            implementing a backdrop. Ensure that users can interact with the
            content behind the backdrop when it is dismissed or closed, and
            ensure proper keyboard and screen reader support.
          </p>

          <a id="Responsive">
            <h2>Responsive Design</h2>
          </a>

          <p>
            The Backdrop component can be easily integrated into responsive
            designs, ensuring that it adapts to different screen sizes and
            layouts. It should be used in a way that works well on mobile
            devices, tablets, and desktops. Consider the size of the overlay and
            how it impacts the user experience across devices.
          </p>

          <p>
            You can adjust the backdrop's visibility, duration, and animation to
            suit different screen sizes and provide a smooth user experience on
            all devices.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default BackdropGuidance;