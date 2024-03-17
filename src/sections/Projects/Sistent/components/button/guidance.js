import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { Button, SistentThemeProvider } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

export const ButtonGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Button">
      <div className="content">
        <a id="Identity">
          <h2>Button</h2>
        </a>
        <p>
          A button is an interactive element that triggers a specific action,
          takes users where they need to go, and points out what happens next in
          a given flow.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/button"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/button")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/button/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/button/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/button/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/button/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            For proper application, these buttons can be used for different
            purposes to enable easier and consistent combination when guiding
            users across digital experiences.
          </p>
          <a id="Function">
            <h2>Function</h2>
          </a>
          <p>
            The function of different buttons is what determines its usage and
            how well suited it is to be applied in a given scenario to solve an
            existing problem or complete a pending task. Functions or roles that
            can be assigned to buttons in a particular design include:
          </p>
          <h3>Primary Button</h3>
          <p>
            Primary buttons are used for the most important actions on a page.
            It should be the key button that helps the user navigate in a given
            flow or while trying to perform a specific action. This could apply
            in cases like when the user needs to submit a from, proceed to a new
            page, or complete an action. The filled button serves as the primary
            button.
          </p>
          <Row Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button
                variant="contained"
                label="Primary"
                color="primary"
                size="medium"
              />
            </SistentThemeProvider>
          </Row>
          <h3>Secondary Button</h3>
          <p>
            This is also used for important actions on a page, however, they
            mostly used as a supporting action for a primary button in order to
            provide options for users to select from. For instance, if the
            primary button offers the key action to be taken on a page, the
            secondary button offers a way to postpone that action or chose
            another which might either be of equal or lower importance than the
            option which the primary button highlights. The outlined button
            serves as the secondary button
          </p>
          <Row Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button
                variant="outlined"
                label="Secondary"
                color="secondary"
                size="medium"
              />
            </SistentThemeProvider>
          </Row>
          <h3>Tertiary Button</h3>
          <p>
            The tertiary button is used for subtle actions that do not have the
            most prominence in a given array of options for users to select
            from. They can stand alone or be paired with a primary button to
            offer an option of much less importance than the key action intended
            to be taken by the user. The text button serves as the tertiary
            button.
          </p>
          <Row Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button variant="text" label="Tertiary" size="medium" />
            </SistentThemeProvider>
          </Row>
          <h3>CTA (Call to Action) button</h3>
          <p>
            This button is used to point the user not necessarily in the
            direction of their current flow, but possibly to an offering,
            feature, or product that could be potentially useful in providing
            much needed solutions that users desire which can be either new or
            already existing ones. They usually stand out from the other button
            categories so for easy identification and additional styling can be
            added to them to achieve this necessary distinction.
          </p>
          <Row Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button color="warning" label="Call to Action" size="medium" />
            </SistentThemeProvider>
          </Row>
          <h3>Danger Button</h3>
          <p>
            Danger buttons are used primarily to indicate crucial events. The
            key role that they serve is to point out to the user that an
            irreversible action is about to take place and as such confirmation
            is required in order to proceed.
          </p>
          <Row Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button color="error" label="Danger" size="medium" />
            </SistentThemeProvider>
          </Row>

          <a id="Labeling">
            <h2>Labeling</h2>
          </a>
          <p>
            While the styling of a button gives quick indicators as to how it is
            to be used and what action it helps to complete, the key element
            that helps to provide a complete scope of the purpose of a button is
            the text label it contains. As such, button content should be
            concise and have as much description as possible to inform users of
            what the next step is.
          </p>
          <h3>Case style</h3>
          <p>
            Different case styles can be applied to buttons to serve as readable
            text that convey information. However, a rule of thumb is that all
            buttons follow one specific case style to enhance consistency and
            reduce distractions for the user. For all of our buttons, title case
            has been used as text labels.
          </p>
          <h3>Font Weight</h3>
          <p>
            Font weight can be used to good effect to provide proper emphasis to
            buttons as they convey the needed information. Chosen fonts should
            be legible with clear and readable characters that do not distract
            or cause difficulty while being read. Proper exploration should be
            carried out with the intended typeface to ensure it passes muster
            before proceeding to use it across all buttons.
          </p>
          <h3>Content</h3>
          <p>
            Characters in a button should not be full sentences. Instead, words
            or phrases that summarize the purpose of a button could suffice.
            Total text in a button is recommended to be an average of 20
            characters long, The language used in buttons should also be
            consistent. For instance, if a button has a text label of 'Create
            Design', this convention should be maintained and not changed to
            something like 'New Design' later on.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};
