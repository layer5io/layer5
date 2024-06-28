import React from "react";

import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentLayout } from "./sistent-layout";
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
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="About Sistent">
      <div className="content">
        <a id="About Sistent">
          <h2>About Sistent</h2>
        </a>
        <p>
          Sistent is the Layer5 Design System - an open source design system that offers building blocks to create consistent, accessible, and user-friendly interfaces. It's aimed at developers who want to design applications aligned with the same brand and ensure a uniform user experience across different products.
        </p>
      </div>
      <div className="filterBtns"></div>
      <div className="main-content">
        <p>
          Sistent leverages Material UI libraries and provides a custom theme on top of it for a consistent look and
          feel. It includes components, icons, and design tokens that developers can readily integrate into their
          applications. By using Sistent, developers can save time and effort while maintaining a high-quality user
          experience throughout Layer5 products.
        </p>
        <p>
          <b>Sistent provides a consistent user experience across Layer5 projects and any frontend software projects
            that choose to use Sistent, too.</b>
        </p>
        <p>
          'Sistent' is a play on words to ensure that we have a <i>consistent</i> theme, components, design tokens, etc
          across all of the apps that will be using this library. Sistent is a design system that uses the <b>MUI v5
          components</b> and a <b>custom theme provider </b> instead of using the default theme from MUI v5.
        </p>

        <p>
          Sistent is built with Typescript and Reactjs and contains components and a large collection of icons that can
          be reused across projects. If you’re interested in joining the project (please do!), let us know, and we will
          help you get started on contributing.
        </p>
        <a id="Installation">
          <h2>Installation and Quickstart</h2>
        </a>
        <p>
          To install the Sistent NPM package, run:
        </p>
        <div className="showcase">
          <CodeBlock name="installation" code={codes[0]}/>
        </div>
        <p>
          After installation, you can import Sistent theme and any Sistent
          component from "@layer5/sistent". The component needs to be
          included inside "SistentThemeProvider".
        </p>
        <a id="Example">
          <h2>Taking button as an example:</h2>
        </a>
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
          <CodeBlock name="checkbox" code={codes[1]}/>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentAbout;
