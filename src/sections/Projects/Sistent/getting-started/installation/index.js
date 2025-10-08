import React from "react";
import { Container } from "../../../../../reusecore/Layout";
import SistentWrapper from "../../sistent.style";
import TOC from "../../../../../components/SistentNavigation";
import IntraPage from "../../../../../components/handbook-navigation/intra-page";
import SistentPagination from "../../../../../components/SistentNavigation/pagination";
import Code from "../../../../../components/CodeBlock";

const contents = [
  { id: 0, link: "#overview", text: "Overview" },
  { id: 1, link: "#installation", text: "Installation" },
  { id: 2, link: "#quick-start", text: "Quick Start" },
  { id: 3, link: "#contributing", text: "Contributing" }
];

const codeExamples = {
  npmInstall: "npm install @sistent/sistent",

  yarnInstall: "yarn add @sistent/sistent",

  quickStart: `import { SistentThemeProvider, Button } from "@sistent/sistent";

  function App() {
    return (
      <SistentThemeProvider>
        <Button variant="contained" color="primary">
          Hello Sistent!
        </Button>
      </SistentThemeProvider>
    );
  }

  export default App;`,

  prerequisites: `{
  "peerDependencies": {
    "react": ">=17.0.0",
    "react-dom": ">=17.0.0"
  }
}`
};

const SistentInstallation = () => {
  return (
    <SistentWrapper>
      <div className="page-header-section">
        <h1>Installation</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <a id="overview">
              <h2>Overview</h2>
            </a>
            <p>
              Sistent is a React-based design system from Layer5. To get started, make sure your environment meets the following requirements:
            </p>
            <ul>
              <li>
                <strong>React:</strong> <code>&gt;=17.0.0</code> and <strong>React DOM:</strong> <code>&gt;=17.0.0</code>
              </li>
              <li>
                <strong>Node.js:</strong> <code>&gt;=16.x</code> (verified in CI on Node 16, Node 18, and Node 20)
              </li>
            </ul>
            <Code codeString={codeExamples.prerequisites} language="javascript" />
            <a id="installation">
              <h2>Installation</h2>
            </a>
            <p>
              Install Sistent using your preferred package manager:
            </p>
            <h3>Using npm</h3>
            <Code codeString={codeExamples.npmInstall} language="javascript" />
            <h3>Using yarn</h3>
            <Code codeString={codeExamples.yarnInstall} language="javascript" />
            <a id="quick-start">
              <h2>Quick Start</h2>
            </a>
            <p>
              Wrap your application with <code>SistentThemeProvider</code> to enable theming and start using components.
              The theme provider automatically handles light/dark mode switching based on system preferences.
            </p>
            <Code codeString={codeExamples.quickStart} language="javascript" />
            <p>
              <strong>That's it!</strong> Your Sistent components will automatically inherit the Layer5 design system with proper theming, spacing, and colors.
              Components such as <code>Button</code> will also respond to system dark mode changes automatically.
            </p>
            <a id="contributing">
              <h2>Contributing</h2>
            </a>
            <p>
              If you want to contribute or use it in your project locally, see our &nbsp;
              <a href="https://github.com/layer5io/sistent#contributing-to-sistent" target="_blank" rel="noopener noreferrer">
                Contributing Guide
              </a> for complete setup instructions.
            </p>
          </div>
          <SistentPagination />
        </Container>
        <IntraPage contents={contents} />
      </div>
    </SistentWrapper>
  );
};

export default SistentInstallation;