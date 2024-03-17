import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { Row } from "../../../../../reusecore/Layout";
import { SistentThemeProvider, Input } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
export const TextInputGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

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
          <p>
            Although we have only one type of text input to be used, there are
            different roles that they can function in that ensure that these
            inputs prove sufficient for multiple use cases.
          </p>
          <a id="Function">
            <h2>Function</h2>
          </a>
          <p></p>
          <h3>Default</h3>
          <p>
            Default text inputs are used for most of the input needs across an
            interface. From filling up forms to entering text content in
            provided form fields to complete an action or a task. this text
            input is mostly utilized. Icons are not seldom required in this text
            input, however, they can included when extremely necessary.
          </p>
          <Row Hcenter>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Input placeholder="Placeholder goes here" />
            </SistentThemeProvider>
          </Row>
          <h3>Multiline</h3>
          <p>
            Multiline text input functions for input that requires more than one
            line of text. This text input adjusts vertically based on the amount
            of lines of text entered into the text field.
          </p>
          <Row Hcenter>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Input placeholder="Placeholder goes here" multiline />
            </SistentThemeProvider>
          </Row>
          <a id="Labelling">
            <h2>Labelling</h2>
          </a>
          <p>
            A couple of elements come together to support the input field
            depending on the context in is being used. These elements either
            provide added information or provide much needed support to ensure
            users are able to complete intended tasks.
          </p>
          <h3>Label</h3>
          <p>
            The label is an optional feature that can accompany the text input.
            It an be used to point out what is required in the input field.
          </p>
          <h3>Required</h3>
          <p>
            This type of label that is usually applied in forms to inform users
            of a compulsary information that is to be provided in order to
            complete the form. It is represented by an asterisk mark (*) that
            appears after the label text.
          </p>
          <h3>Helper text</h3>
          <p>
            Helper text appears at the bottom of the input field and it is
            primarily to serve as an alert for the user to inform them based on
            the input they have entered but only where necessary.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};
