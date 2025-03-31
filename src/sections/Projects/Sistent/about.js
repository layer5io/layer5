import React from "react";
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
    <Button variant="contained">Filled</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="text">Text</Button>
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
              Sistent is the Layer5 Design System - an open source design system
              that offers building blocks to create consistent, accessible, and
              user-friendly interfaces. It's aimed at developers who want to
              design applications aligned with the same brand and ensure a
              uniform user experience across different products.
            </p>
            <p>
              Sistent leverages Material UI libraries and provides a custom
              theme on top of it for a consistent look and feel. It includes
              components, icons, and design tokens that developers can readily
              integrate into their applications. By using Sistent, developers
              can save time and effort while maintaining a high-quality user
              experience throughout Layer5 products.
            </p>
            <p>
              <b>
                Sistent provides a consistent user experience across Layer5
                projects and any frontend software projects that choose to use
                Sistent, too.
              </b>
            </p>
            <p>
              'Sistent' is a play on words to ensure that we have a{" "}
              <i>consistent</i> theme, components, design tokens, etc across all
              of the apps that will be using this library. Sistent is a design
              system that uses the <b>MUI v5 components</b> and a{" "}
              <b>custom theme provider </b> instead of using the default theme
              from MUI v5.
            </p>

            <p>
              Sistent is built with Typescript and Reactjs and contains
              components and a large collection of icons that can be reused
              across projects. If you’re interested in joining the project
              (please do!), let us know, and we will help you get started on
              contributing.
            </p>
            <a id="Installation">
              <h2>Installation and Quickstart</h2>
            </a>
            <p>To install the Sistent NPM package, run:</p>
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
                  <Button variant="contained">Filled</Button>
                  <Button variant="outlined">Outlined</Button>
                  <Button variant="text">Text</Button>
                </SistentThemeProvider>
              </div>
              <CodeBlock name="checkbox" code={codes[1]} />
            </div>

            <p>
              To contribute to Layer5 projects' UI using Sistent e.g. <a href="https://github.com/meshery/meshery/issues?q=is%3Aissue%20state%3Aopen%20label%3Acomponent%2Fui">meshery-ui</a> and others, You can
              refer to {" "}
              <a href="https://github.com/layer5io/sistent?tab=readme-ov-file#installation">
                sistent set-up guide
              </a>, {" "}
              <a href="https://discuss.layer5.io/t/hands-on-training-session-migrating-components-to-mui-v5-and-sistent/6589">Hands-on Training Session: Migrating Components to MUI v5 and Sistent</a>, {" "}
              <a href="https://www.youtube.com/live/lsw9KA__iu4?si=o8gpZdSHcqO2OKxE">
                Training: contributing to Sistent
              </a>{" "}
              and{" "}
              <a href="https://www.youtube.com/live/yiXkxbibLUU?si=Dybj5qr0VLhLWEpl">
                Websites call
              </a>{" "}
              where experienced contributors have taught how to use sistent in
              various Layer5 projects.
            </p>
          </div>
          <SistentPagination />
        </Container>
        <IntraPage contents={contents} />
      </div>
    </SistentWrapper>
  );
};

export default SistentAbout;
