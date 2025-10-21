import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentThemeProvider, KubernetesIcon, DesignIcon } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "../button/code-block";

const codes = [
  `  <SistentThemeProvider>
       <KubernetesIcon />
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <DesignIcon width={40} height={40} />
  </SistentThemeProvider>`,
];

const IconsCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Icons">
      <div className="content">
        <a id="Identity">
          <h2>Icons</h2>
        </a>
        <p>
          Icons are visual symbols used to represent ideas, objects, or actions.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/icons"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/icons")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/icons/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/icons/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/icons/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/icons/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <a id="Basic Usage">
            <h2>Basic Usage</h2>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <KubernetesIcon />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-icon" code={codes[0]} />
          </div>

          <a id="Custom Size">
            <h2>Custom Size</h2>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <DesignIcon 
                  width={40} 
                  height={40}
                />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="sized-icon" code={codes[1]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default IconsCode;