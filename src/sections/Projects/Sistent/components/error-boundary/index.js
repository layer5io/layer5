import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Button } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Col, Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentErrorBoundary = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Error Boundary">
      <div className="content">
        <a id="Identity">
          <h2>Error Boundary</h2>
        </a>
        <p>
        The ErrorBoundary component is designed to catch errors that occur within its child components and provide a customizable fallback UI when an error occurs.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/error-boundary"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/error-boundary")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/error-boundary/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/error-boundary/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <a id="Types">
            <h2>Error Boundary Components</h2>
          </a>
          <h3>ErrorBoundary</h3>
          <p>
          The ErrorBoundary component is designed to catch errors that occur within its child components and provide a customizable fallback UI when an error occurs.
          </p>
          <h6>Usage</h6>

        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentErrorBoundary;
