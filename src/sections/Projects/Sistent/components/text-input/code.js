import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { Input, SistentThemeProvider } from "@layer5/sistent";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "../button/code-block";

const codes = [
  ` <SistentThemeProvider>
       <Input placeholder="PlaceHolder" />
  </SistentThemeProvider>`,
  `This is for the search
  `,
  ` This is for the password
  `,
  ` <SistentThemeProvider>
       <Input placeholder="PlaceHolder" multiline />
  </SistentThemeProvider>`
];

export const TextInputCode = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();

  return (
    <SistentLayout title="Text Input">
      <div className="content">
        <a id="Identity">
          <h2>Text Input</h2>
        </a>
        <p>
          Text inputs are important elements that help users interact with an
          experience by providing text commands that will in turn return
          expected results. These commands can range from providing a free range
          of personal information to entering a limited number of characters for
          a use case.
        </p>
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
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <p>
              Text inputs allow users to enter information in the form of text in order to complete a task or flow or to receive
              expected information.
            </p>
            <a id="Basic Input">
              <h2>Basic Input</h2>
            </a>
            <p>The Input comes in several types: Defualt, Search, Password and Multiline.</p>
            <h3>Defualt Input</h3>
            <p>
              Defualt Text inputs are widely used across interfaces, from filling forms to entering text content.
              Icons are rarely needed but can be included if necessary.
            </p>
            <div className="showcase">
              <div className="items">
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Input placeholder="Placeholder" />
                </SistentThemeProvider>
              </div>
              <CodeBlock name="default-input" code={codes[0]} />
            </div>
            {/* <h3>Search</h3>
            <p>
              Search text input is used to input search text for a page or a given group
              of displayed information to select one or a few from the provided list.
              It makes use of two icons that appear across different states.
            </p> */}
            {/* <h3>Password</h3>
            <p>
              This text input functions for fields that require passwords only. With a corresponding
              icon to show or hide the any inputted text, this text input functions to receive only
              password inputs.
            </p> */}
            <h3>Multiline Input</h3>
            <p>
            Multiline text input functions for input that requires more than one line of text.
            This text input adjusts vertically based on the amount of lines of text entered into the text field.
            </p>
            <div className="showcase">
              <div className="items">
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Input placeholder="Placeholder goes here and adjusts the lines" multiline />
                </SistentThemeProvider>
              </div>
              <CodeBlock name="multi-line-input" code={codes[3]} />
            </div>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};
