import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";

const TextInputCode = () => {
  const location = useLocation();

  const codeSnippet = `
import React from "react";
import { Input, SistentThemeProvider } from "@layer5/sistent";

const MyComponent = () => {
  return (
    <SistentThemeProvider initialMode="light">
      <Input placeholder="Enter text..." type="text" />
    </SistentThemeProvider>
  );
};
  `.trim();

  return (
    <SistentLayout title="Text Input - Code">
      <div className="content">
        <a id="Identity">
          <h2>Text Input - Code</h2>
        </a>
        <p>This is an example usage of the TextInput component:</p>

        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/text-input"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/text-input")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/text-input/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/text-input/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/text-input/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/text-input/code")
            }
            title="Code"
          />
        </div>

        <div className="main-content">
          <pre
            style={{
              backgroundColor: "#1e1e1e",
              color: "#ffffff",
              padding: "1rem",
              borderRadius: "8px",
              overflowX: "auto",
            }}
          >
            <code>{codeSnippet}</code>
          </pre>
        </div>
      </div>
    </SistentLayout>
  );
};

export default TextInputCode;
