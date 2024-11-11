import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";

export const BackdropGuidance = () => {
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
