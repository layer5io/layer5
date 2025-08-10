import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, CircularProgress } from "@sistent/sistent";
import { CodeBlock } from "../button/code-block";


import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  "<CircularProgress />",
  "<CircularProgress variant=\"determinate\" value={75} />",
  `<CircularProgress size={24} variant="determinate" value={75} />
<CircularProgress size={40} variant="determinate" value={75} />
<CircularProgress size={56} variant="determinate" value={75} />`,
  `<CircularProgress thickness={2} variant="determinate" value={85} />
<CircularProgress thickness={4} variant="determinate" value={85} />
<CircularProgress thickness={6} variant="determinate" value={85} />`,
  `<CircularProgress color="primary" />
<CircularProgress color="secondary" />
<CircularProgress color="success" />`,
];

const SistentCircularProgress = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <SistentLayout title="Circular Progress">
      <div className="content">
        <a id="Identity">
          <h2>Circular Progress</h2>
        </a>
        <p>
          Circular progress indicators provide visual feedback about ongoing processes,
          helping users understand that their request is being processed. They can show
          either determinate progress (specific completion percentage) or indeterminate
          progress (unknown duration).
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
              location.pathname ===
              "/projects/sistent/components/circularprogress/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/circularprogress/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The <code>CircularProgress</code> component is essential for communicating
            system status to users. It provides immediate feedback during loading
            states, file uploads, data processing, and other time-consuming operations.
          </p>
          <a id="Basic Example">
            <h2>Basic Circular Progress</h2>
          </a>
          <p>
            A simple indeterminate circular progress indicator that shows continuous loading.
            This is the default behavior when no variant or value props are provided.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <CircularProgress />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="circular-progress-basic" code={codes[0]} />
          </div>

          <a id="Determinate Progress">
            <h2>Determinate Progress</h2>
          </a>
          <p>
            The determinate variant shows specific progress completion using the
            value prop (0-100). This variant is perfect for file uploads,
            downloads, or any process with measurable progress.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <CircularProgress variant="determinate" value={progress} />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="circular-progress-determinate" code={codes[1]} />
          </div>

          <a id="Different Sizes">
            <h2>Size Variations</h2>
          </a>
          <p>
            Circular progress indicators can be scaled to different sizes using
            the size prop. This flexibility allows them to fit various layout
            requirements, from small inline indicators to prominent loading states.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
                  <CircularProgress size={24} variant="determinate" value={75} />
                  <CircularProgress size={40} variant="determinate" value={75} />
                  <CircularProgress size={56} variant="determinate" value={75} />
                </div>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="circular-progress-sizes" code={codes[2]} />
          </div>

          <a id="Thickness Variations">
            <h2>Thickness Variations</h2>
          </a>
          <p>
            The thickness prop controls the width of the progress arc, allowing
            you to create subtle or bold visual emphasis depending on your design
            requirements. Thicker lines provide more visual weight and prominence.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
                  <CircularProgress thickness={2} variant="determinate" value={85} />
                  <CircularProgress thickness={4} variant="determinate" value={85} />
                  <CircularProgress thickness={6} variant="determinate" value={85} />
                </div>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="circular-progress-thickness" code={codes[3]} />
          </div>

          <a id="Color Options">
            <h2>Color Options</h2>
          </a>
          <p>
            Circular progress indicators support various color themes to match
            your application's design system. Colors can convey different meanings
            or states, such as success, warning, or error conditions.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
                  <CircularProgress color="primary" />
                  <CircularProgress color="secondary" />
                  <CircularProgress color="success" />
                </div>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="circular-progress-colors" code={codes[4]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentCircularProgress;