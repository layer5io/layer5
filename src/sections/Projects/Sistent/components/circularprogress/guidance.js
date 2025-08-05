import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import { SistentThemeProvider, Button, CircularProgress } from "@sistent/sistent";
import { Row } from "../../../../../reusecore/Layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const CircularprogressGuidance = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();

  const [size, setSize] = useState(40); // default size
  const [thickness, setThickness] = useState(4); // default thickness
  const [currentColor, setCurrentColor] = useState("primary"); // default color
  const maxSize = 80;
  const minSize = 20;
  const maxThickness = 10;
  const minThickness = 1;
  const colors = ["primary", "secondary", "success", "error", "warning", "info"];

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
            Proper usage of the Circular Progress component can enhance user experience by visually indicating progress status. Below are some guidelines to ensure effective implementation.
          </p>

          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <p>
            To use the Circular Progress component, include it in your layout with the desired <code>variant</code> prop to specify whether it should be determinate or indeterminate. For example:
          </p>
          <ul>
            <li><code>variant="indeterminate"</code> for continuous loading.</li>
            <li><code>variant="determinate"</code> for specific progress indication.</li>
          </ul>
          <p>
            The <code>value</code> prop is required for determinate progress to indicate how far along the task is, ranging from 0 to 100.
          </p>
          <br />
          <a id="Sizing">
            <h3>Sizing</h3>
          </a>
          <p>
            Adjust the size of the Circular Progress component using the <code>size</code> prop. For example, set <code>size={60}</code> to increase the diameter of the circular loader.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <CircularProgress size={size} />
              <div style={{ marginLeft: "20px", display: "flex", gap: "10px" }}>
                <Button
                  variant="contained"
                  label="Decrease Size"
                  size="medium"
                  onClick={() => {
                    if (size > minSize) {
                      setSize(size - 10);
                    }
                  }}
                  disabled={size <= minSize}
                />
                <Button
                  variant="contained"
                  label="Increase Size"
                  size="medium"
                  onClick={() => {
                    if (size < maxSize) {
                      setSize(size + 10);
                    }
                  }}
                  disabled={size >= maxSize}
                />
              </div>
            </SistentThemeProvider>
          </Row>

          <br />
          <a id="Thickness">
            <h3>Thickness</h3>
          </a>
          <p>
            Control the thickness of the circular progress arc using the <code>thickness</code> prop. This allows for customization of the loader's appearance. For instance:
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <CircularProgress thickness={thickness} />
              <div style={{ marginLeft: "20px", display: "flex", gap: "10px" }}>
                <Button
                  variant="contained"
                  label="Decrease Thickness"
                  size="medium"
                  onClick={() => {
                    if (thickness > minThickness) {
                      setThickness(thickness - 1);
                    }
                  }}
                  disabled={thickness <= minThickness}
                />
                <Button
                  variant="contained"
                  label="Increase Thickness"
                  size="medium"
                  onClick={() => {
                    if (thickness < maxThickness) {
                      setThickness(thickness + 1);
                    }
                  }}
                  disabled={thickness >= maxThickness}
                />
              </div>
            </SistentThemeProvider>
          </Row>

          <br />
          <a id="Colors">
            <h3>Colors</h3>
          </a>
          <p>
            Customize the color of the Circular Progress component using the <code>color</code> prop. Available colors include primary, secondary, success, error, warning, and info to match your design system.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <CircularProgress color={currentColor} />
              <div style={{ marginLeft: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {colors.map((color) => (
                  <Button
                    key={color}
                    variant={currentColor === color ? "contained" : "outlined"}
                    label={color.charAt(0).toUpperCase() + color.slice(1)}
                    size="small"
                    onClick={() => setCurrentColor(color)}
                  />
                ))}
              </div>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default CircularprogressGuidance;