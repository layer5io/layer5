import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { Stack, SistentThemeProvider } from "@layer5/sistent";
import { CodeBlock } from "../button/code-block";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `<SistentThemeProvider>
      <Stack direction="row" spacing={2}>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
      </Stack>
  </SistentThemeProvider>`,
  `<SistentThemeProvider>
      <Stack direction="column" spacing={3}>
          <div>Item A</div>
          <div>Item B</div>
      </Stack>
  </SistentThemeProvider>`,
  `<SistentThemeProvider>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
          <div>Left</div>
          <div>Right</div>
      </Stack>
  </SistentThemeProvider>`,
];

const StackCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Stack">
      <div className="content">
        <a id="Identity">
          <h2>Stack</h2>
        </a>
        <p>
          The Stack component is a flexible container that helps to arrange child elements
          in a row or column layout with spacing and alignment options.
        </p>
        <div className="filterBtns">
          <TabButton
            className={location.pathname === "/projects/sistent/components/stack" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/stack")}
            title="Overview"
          />
          <TabButton
            className={location.pathname === "/projects/sistent/components/stack/guidance" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/stack/guidance")}
            title="Guidance"
          />
          <TabButton
            className={location.pathname === "/projects/sistent/components/stack/code" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/stack/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <h3>Horizontal Stack</h3>
          <p>Stacks elements horizontally with spacing.</p>
          <div className="showcase">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Stack direction="row" spacing={2}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
              </Stack>
            </SistentThemeProvider>
            <CodeBlock name="horizontal-stack" code={codes[0]} />
          </div>

          <h3>Vertical Stack</h3>
          <p>Stacks elements vertically with larger spacing.</p>
          <div className="showcase">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Stack direction="column" spacing={3}>
                <div>Item A</div>
                <div>Item B</div>
              </Stack>
            </SistentThemeProvider>
            <CodeBlock name="vertical-stack" code={codes[1]} />
          </div>

          <h3>Alignment & Justification</h3>
          <p>Stack items can be aligned and justified.</p>
          <div className="showcase">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <div>Left</div>
                <div>Right</div>
              </Stack>
            </SistentThemeProvider>
            <CodeBlock name="alignment-justification" code={codes[2]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default StackCode;
