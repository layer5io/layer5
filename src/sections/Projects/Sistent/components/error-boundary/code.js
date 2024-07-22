import React from "react";
import { SistentLayout } from "../../sistent-layout";
import { useState } from "react";
import {
  Button,
  SistentThemeProvider,
  ErrorBoundary,
  withErrorBoundary,
  withSuppressedErrorBoundary,
} from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "../button/code-block";


const codes = [
  `import { ErrorBoundary } from '@layer5/sistent';
  const MyComponent = () => {
    // Your component logic

      return <ErrorBoundary>{/* Your component JSX */}</ErrorBoundary>;
  };`,
  `const MyComponent = () => {
    // Your component logic

    return (
      <ErrorBoundary customFallback={CustomFallbackComponent}>
        {/* Your component JSX */}
      </ErrorBoundary>
    );
  };`,
  `import { withErrorBoundary } from '@layer5/sistent';
    const MyComponent = withErrorBoundary(() => {
      return {
        /* Your component JSX */
      };
    });`,
  `import { withSuppressedErrorBoundary } from '@layer5/sistent';
    const MyComponent = withSuppressedErrorBoundary(() => {
      return {
        /* Your component JSX */
      };
    });`
];

function MyComponent() {
  // Simulate an error for demonstration purposes
  if (Math.random() > 0.5) {
    throw new Error("An error occurred in MyComponent");
  }

  // Component logic here
  return <div>This is MyComponent</div>;
}

const ErrorThrowingComponent = () => {
  const triggerError = () => {
    throw new Error("This is a deliberate error!");
  };
  return (
    <div>
      <Button variant="contained" onClick={triggerError}>
        Open ErrorBoundary
      </Button>
    </div>
  );
};

const CustomFallbackComponent = () => {
  return (
    <div>
      <h2>This is the Custom Fallback Component !!</h2>
    </div>
  );
};

export const ErrorBoundaryCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  // const WrappedComponent = withErrorBoundary(ErrorThrowingComponent());
  // const SuppressedComponent = withSuppressedErrorBoundary({ Component: ErrorThrowingComponent });

  return (
    <SistentLayout title="ErrorBoundary">
      <div className="content">
        <a id="Identity">
          <h2>ErrorBoundary</h2>
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
          {/* <TabButton
            className={
              location.pathname ===
                "/projects/sistent/components/modal/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/modal/guidance")
            }
            title="Guidance"
          /> */}
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/error-boundary/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/identity/color/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <a id="ErrorBoundary">
              <h2>ErrorBoundary</h2>
            </a>
            <p>Wrap your component with the ErrorBoundary:</p>
            <div className="showcase">
              <div className="items">
                <ErrorBoundary>
                  <MyComponent/>
                </ErrorBoundary>
              </div>
              <CodeBlock name="errorBoundary" code={codes[0]} />
            </div>
            <a id="Custom Fallback">
              <h2>Custom Fallback</h2>
            </a>
            <p>You can provide a custom fallback component to ErrorBoundary:</p>
            <div className="showcase">
              <div className="items">
                <ErrorBoundary customFallback={CustomFallbackComponent}>
                  <MyComponent />
                </ErrorBoundary>
              </div>
              <CodeBlock name="customFallback" code={codes[1]} />
            </div>
            <a id="withErrorBoundary">
              <h2>withErrorBoundary</h2>
            </a>
            <p>It is a higher-order component (HOC) that simplifies wrapping a component with ErrorBoundary. It uses default fallback component. This can be useFul to wrap child components.</p>
            <p>Wrap your component using withErrorBoundary:</p>
            <div className="showcase">
              <div className="items">
                {/* <WrappedComponent/>  */}
              </div>
              <CodeBlock name="withErrorboundaryCode" code={codes[2]} />
            </div>
            <a id="withSuppressedErrorBoundary">
              <h2>withSuppressedErrorBoundary</h2>
            </a>
            <p>withSuppressedErrorBoundary is another HOC that suppresses the error in browser's console instead of displaying fallback component to users, this can be useFull for errors that are not critical and can be avoided.</p>
            <p>Wrap your component using withSuppressedErrorBoundary:</p>
            <div className="showcase">
              <div className="items">
                {/* <Button variant="contained" onClick={trigerError}>
                    Open withSuppressedErrorBoundary
                </Button> */}
              </div>
              <CodeBlock name="withSuppressedErrorBoundaryCode" code={codes[3]} />
            </div>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ErrorBoundaryCode;
