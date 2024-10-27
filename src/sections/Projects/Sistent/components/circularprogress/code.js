import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import {
  SistentThemeProvider,
  CircularProgress,
} from "@layer5/sistent";
import { Row } from "../../../../../reusecore/Layout";
import { SistentLayout } from "../../sistent-layout";
import { CodeBlock } from "../button/code-block";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `<SistentThemeProvider>
      <CircularProgress />
  </SistentThemeProvider>`,
  `const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  <SistentThemeProvider>
      <CircularProgress variant="determinate" value={progress} />
  </SistentThemeProvider>`,
  `<SistentThemeProvider>
      <CircularProgress size={24} value={75} />
      <CircularProgress size={40} value={75} />
      <CircularProgress size={56} value={75} />
  </SistentThemeProvider>`,
  `<SistentThemeProvider>
      <CircularProgress thickness={2} value={75} />
      <CircularProgress thickness={4} value={75} />
      <CircularProgress thickness={6} value={75} />
  </SistentThemeProvider>`,
  `<SistentThemeProvider>
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
  </SistentThemeProvider>`,

];

export const CircularprogressCode = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();

  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
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
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <a id="Basic Circular Progress">
              <h3>Basic CircularProgress</h3>
            </a>
            <p>
              This example shows a basic circular progress indicator with the default settings. No props are needed to render this simple loader, ideal for processes with unknown durations.
            </p>
            <br></br>
            <Row $Hcenter className="image-container">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <CircularProgress> </CircularProgress>
              </SistentThemeProvider>
            </Row>
            <br></br>
            <div className="showcase">
              <CodeBlock name="basic-circular-progress" code={codes[0]} />
            </div>

            <a id="Determinate Example">
              <h3>Determinate Example</h3>
            </a>
            <p>
              The determinate progress indicator is controlled by the <code>variant</code> and <code>value</code> props, allowing you to display a specific percentage of progress. Set <code>variant="determinate"</code> and <code>value</code> between 0 and 100 to indicate completion.
            </p>

            <br></br>
            <Row $Hcenter className="image-container">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <CircularProgress variant="determinate" value={progress} />
              </SistentThemeProvider>
            </Row>
            <div className="showcase">
              <CodeBlock name="determinate-circular-progress" code={codes[1]} />
            </div>

            <a id="Size Variation Examples">
              <h3>Size Variation Examples</h3>
            </a>
            <p>
              These examples adjust the size of the circular progress indicator using the <code>size</code> prop. Set <code>size</code> to change the diameter of the circle, accommodating different layout requirements.
            </p>


            <br></br>
            <Row $Hcenter className="image-container">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div style={{ marginRight: "50px", marginTop: "15px", display: "inline-block" }}>
                  <CircularProgress size={24} value={75} />
                </div>
                <div style={{ marginRight: "50px", marginTop: "10px", display: "inline-block" }}>
                  <CircularProgress size={40} value={75} />
                </div>
                <div style={{ display: "inline-block" }}>
                  <CircularProgress size={56} value={75} />
                </div>
              </SistentThemeProvider>
            </Row>
            <div className="showcase">
              <CodeBlock name="size-variation-circular-progress" code={codes[2]} />
            </div>

            <a id="Thickness Variation Examples">
              <h3>Thickness Variation Examples</h3>
            </a>
            <p>
              This variant modifies the width of the progress arc with the <code>thickness</code> prop. Use <code>thickness</code> to increase or decrease the line width, adding emphasis or subtlety to the indicator's appearance.
            </p>


            <br></br>
            <Row $Hcenter className="image-container">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div style={{ marginRight: "50px", display: "inline-block" }}>
                  <CircularProgress thickness={2} value={85} />
                </div>
                <div style={{ marginRight: "50px", display: "inline-block" }}>
                  <CircularProgress thickness={6} value={85} />
                </div>
                <div style={{ display: "inline-block" }}>
                  <CircularProgress thickness={8} value={85} />
                </div>
              </SistentThemeProvider>
            </Row>
            <div className="showcase">
              <CodeBlock name="thickness-variation-circular-progress" code={codes[3]} />
            </div>

            <a id="Circular Color Examples">
              <h3>Circular Color Examples</h3>
            </a>
            <p>
              Various color options are applied to the circular progress using the <code>color</code> prop. Customize the appearance by setting <code>color</code> to values like "secondary," "success," or "inherit" to align with theme requirements.
            </p>


            <br></br>
            <Row $Hcenter className="image-container">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div style={{ marginRight: "50px", display: "inline-block" }}>
                  <CircularProgress color="secondary" />
                </div>
                <div style={{ marginRight: "50px", display: "inline-block" }}>
                  <CircularProgress color="success" />
                </div>
                <div style={{ display: "inline-block" }}>
                  <CircularProgress color="inherit" />
                </div>
              </SistentThemeProvider>
            </Row>
            <div className="showcase">
              <CodeBlock name="color-variation-circular-progress" code={codes[4]} />
            </div>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};
