import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentThemeProvider, CircularProgress } from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentCircularprogress = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Circular Progress">
      <div className="content">
        <a id="Identity">
          <h2>Circular Progress</h2>
        </a>
        <p>
          The Circular Progress component displays a circular loading indicator that represents
          either determinate or indeterminate progress in your application. It's commonly used
          to show loading states, progress of operations, or completion percentages.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/circularprogress"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/circularprogress")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
                "/projects/sistent/components/circularprogress/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/circularprogress/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/circularprogress/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/circularprogress/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Circular Progress indicators inform users about the status of ongoing processes,
            such as loading an application, submitting a form, or updating data. They help
            maintain user engagement by providing visual feedback about the progress of operations.
          </p>
          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <p>
            The component can be used in two main variants:
          </p>
          <ul>
            <li><p><b>Determinate:</b> Shows definite progress with a specific percentage value</p></li>
            <li><p><b>Indeterminate:</b> Shows an animation indicating an unspecified wait time</p></li>
          </ul>
          <a id="Basic Example">
            <h3>Basic Example</h3>
          </a>
          <p>
            Below is a simple example of how to use the CircularProgress component.
          </p>
          <br />
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <CircularProgress />
            </SistentThemeProvider>
          </Row>
          <br />
          <a id="Key Features">
            <h2>Key Features</h2>
          </a>
          <p>
            You can customize the appearance of the Circular Progress using
            various props to define how the component
            renders relative to its container element.
          </p>
          <h3>Variants</h3>
          <ul>
            <li><p><b>Determinate:</b> Displays specific progress percentage</p></li>
            <li><p><b>Indeterminate:</b> Shows continuous animation for unknown duration processes</p></li>
          </ul>
          <h3>Customization Options</h3>
          <ul>
            <li><p><b>Size:</b> Adjustable diameter of the progress circle</p></li>
            <li><p><b>Thickness:</b> Controllable width of the progress arc</p></li>
            <li><p><b>Color:</b> Customizable colors for both track and progress</p></li>
            <li><p><b>Value:</b> Percentage complete (0-100) for determinate variant</p></li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentCircularprogress;