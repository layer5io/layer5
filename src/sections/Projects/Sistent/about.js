import React from "react";
import { Container } from "../../../reusecore/Layout";
import SistentWrapper from "./sistent.style";
import TOC from "../../../components/SistentNavigation";
import IntraPage from "../../../components/handbook-navigation/intra-page";
import SistentPagination from "../../../components/SistentNavigation/pagination";

import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "./components/button/code-block";
import Code from "../../../components/CodeBlock";
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

            <a id="Using local Sistent">
              <h2>Using your Local Sistent Fork in a Project</h2>
            </a>
            <br />
            <ul>
              <li>
                <h3>Method 1: File Installation</h3>
              </li>
              <ol>
                <li>
                  <b>Install your local Sistent package in the project</b>
                  <Code codeString="npm install &lt;path-to-sistent-on-local-machine&gt;" />
                  <p>Example:</p>
                  <Code
                    codeString={`# relative path\nnpm install ../../sistent\n\n# absolute path\nnpm install /home/five/code/sistent`}
                  />
                  <p>This will update your Sistent dependency to:</p>
                  <Code codeString={"\"@layer5/sistent\" : \"file:../../sistent\""} />
                </li>
                <li>
                  <b>Build your local Sistent fork</b>
                  <p>
                    After making changes to your fork, run this command in your local Sistent package.
                  </p>
                  <Code codeString="make build" />
                </li>
                <li>
                  <b>
                    Run the build command in the project where your local Sistent fork is installed
                  </b>
                  <p>Example for Meshery UI:</p>
                  <Code codeString="make ui-build" />
                </li>
              </ol>
              <p>
                Now, your project should reflect changes from your local Sistent fork.
              </p>
              <p>
                If you want to remove the local Sistent fork from your project, run:
              </p>
              <Code codeString="npm uninstall @layer5/sistent" />
              <p>
                This will remove the local Sistent package from your project. You will have to install the standard package again after running this command:
              </p>
              <Code codeString="npm install @layer5/sistent" />


              <li>
                <h3>Method 2: Using npm link</h3>
                <p>
                  This method allows you to link your local Sistent fork globally for easier development. Follow these steps:
                </p>
                <ol>
                  <li>
                    <b>Link your local Sistent package globally</b>
                    <p>In your local Sistent repo, run the following command:</p>
                    <Code codeString={`cd <path-to-sistent-on-local-machine>\nnpm link`} />
                  </li>
                  <li>
                    <b>Link Sistent in your project</b>
                    <p>In the project where you want to use your local Sistent fork, run:</p>
                    <Code codeString="npm link @layer5/sistent" />
                    <p>This will create a symlink in your project's node_modules, pointing to your local Sistent package.</p>
                  </li>
                  <li>
                    <b>Build your local Sistent fork</b>
                    <p>After making changes to your fork, run this command in your local Sistent package.</p>
                    <Code codeString="make build" />
                  </li>
                  <li>
                    <b>Run the build command in the project where your local Sistent fork is installed</b>
                    <p>Example for Meshery-UI:</p>
                    <Code codeString="make ui-build" />
                  </li>
                  <li>
                    <p>
                      Verify that your local fork is correctly linked by running:
                    </p>
                    <Code codeString={`npm ls -g\n\n# expected output:\n├── @layer5/sistent@0.14.11 -> ./../../../../<path-to-local-sistent-fork>`}/>
                    <p>
                      You can also try this command to verify that your fork is correctly linked:
                    </p>
                    <Code codeString={`ls -l node_modules/@layer5/sistent\n\n# expected output:\nnode_modules/@layer5/sistent -> ../../../../../sistent`} />
                  </li>
                  <li>
                    <p>
                      To revert back to the official version of Sistent, run:
                    </p>
                    <Code codeString="npm unlink @layer5/sistent" />
                    <p>
                      Then reinstall the official version, using this command:
                    </p>
                    <Code codeString="npm install @layer5/sistent" />
                  </li>
                </ol>
              </li>
            </ul>

            <p>
              To contribute to projects using Sistent e.g.{" "}
              <a href="https://github.com/meshery/meshery/issues?q=is%3Aissue%20state%3Aopen%20label%3Acomponent%2Fui">
                meshery-ui
              </a>{" "}
              and others, you can refer to the {" "}
              <a href="https://github.com/layer5io/sistent?tab=readme-ov-file#installation">
                Sistent set-up guide
              </a>, {" "}
              <a href="https://discuss.layer5.io/t/hands-on-training-session-migrating-components-to-mui-v5-and-sistent/6589">Hands-on Training Session: Migrating Components to MUI v5 and Sistent</a>, {" "}
              <a href="https://www.youtube.com/live/lsw9KA__iu4?si=o8gpZdSHcqO2OKxE">
                Training: contributing to Sistent,
              </a>{" "}
              and{" "}
              <a href="https://www.youtube.com/live/yiXkxbibLUU?si=Dybj5qr0VLhLWEpl">
                Websites call
              </a>{" "}
              , where experienced contributors demonstrate how to use Sistent in various projects.
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
