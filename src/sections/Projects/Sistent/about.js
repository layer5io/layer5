import React, { useSyncExternalStore } from "react";
import { Container } from "../../../reusecore/Layout";
import SistentWrapper from "./sistent.style";
import TOC from "../../../components/SistentNavigation";
import IntraPage from "../../../components/handbook-navigation/intra-page";
import SistentPagination from "../../../components/SistentNavigation/pagination";

import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "./components/button/code-block";
import { SistentThemeProvider } from "@layer5/sistent";
import { Button } from "@layer5/sistent";

const contents = [{ id: 0, link: "#About Sistent", text: "About Sistent" }];

const codes = [
  "npm i @layer5/sistent",
  `  import { SistentThemeProvider } from "@layer5/sistent";
  import { Button } from "@layer5/sistent";
     
  <SistentThemeProvider>
    <div>
      <Button variant="contained">Filled</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </div>
  </SistentThemeProvider>`,
];

const SistentAbout = () => {
  const { isDark } = useStyledDarkMode();

  return (
    <SistentWrapper>
      <div className="page-header-section">
        <h1>About Sistent</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <a id="About Sistent">
              <h2>About Sistent</h2>
            </a>
            <p>
              We have several different React apps that heavily uses the
              Material UI v4 and v5 libraries, and this discrepancies led up to
              setting up the Sistent Design System.
            </p>
            <p>
              <b>
                We want to be able to have the source of truth of what Layer5.io
                and Meshery looks like.
              </b>
            </p>
            <p>
              'Sistent' is a play on word to ensure that we have a consistent
              theme, components, design tokens, etc across all of the apps that
              will be using this library. Sistent is a design system that uses
              the <b>MUI v5 components</b> and a <b>custom theme provider </b>
              instead of using the default theme from MUI v5.
            </p>
            <p>
              If you’re interested in joining, please let us know, and we can
              help you get started on contributing to the Sistent Design System.
            </p>
            <a id="Installation">
              <h2>Installation and Quickstart</h2>
            </a>
            <p>
              To install Sistent package, run:
            </p>
            <div className="showcase">
              <CodeBlock name="installation" code={codes[0]} />
            </div>
            <p>
              After installation, you can import Sistent theme and any Sistent
              component from "@layer5/sistent". The component needs to be
              included inside "SistentThemeProvider".
            </p>
            <p>Taking button as an example:</p>
            <div className="showcase">
              <div className="items">
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <div>
                    <Button variant="contained">Filled</Button>
                    <Button variant="outlined">Outlined</Button>
                    <Button variant="text">Text</Button>
                  </div>
                </SistentThemeProvider>
              </div>
              <CodeBlock name="checkbox" code={codes[1]} />
            </div>
          </div>
          <SistentPagination />
        </Container>
        <IntraPage contents={contents} />
      </div>
    </SistentWrapper>
  );
};

export default SistentAbout;
