import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
//import { Row } from "../../../../../reusecore/Layout";
//import { List,  ListItemText,ListItem,SistentThemeProvider } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
//import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";


export const ListGuidance = () => {
  const location = useLocation();
  //const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="List">
      <div className="content">
        <a id="Identity">
          <h2>List</h2>
        </a>
        <p>
          Lists are essential UI elements that allow items to be organized sequentially in a structured and readable way. They help users view, select, and interact with multiple items conveniently.
        </p>

        <div className="filterBtns">
          <TabButton
            className={location.pathname === "/projects/sistent/components/list" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/list")}
            title="Overview"
          />
          <TabButton
            className={location.pathname === "/projects/sistent/components/list/guidance" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/list/guidance")}
            title="Guidance"
          />
          <TabButton
            className={location.pathname === "/projects/sistent/components/list/code" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/list/code")}
            title="Code"
          />
        </div>

        <div className="main-content">
          <p>
            Lists can be used for various purposes, including displaying items, navigational menus, or highlighting features. The List component provides a flexible container for organizing related items in a vertical layout. It can be customized to display items with icons, buttons, avatars, and other interactive elements. This component is essential for organizing content in a structured, accessible format.
          </p>

          <a id="Usage Scenarios">
            <h2>Usage Scenarios</h2>
          </a>
          <ul>
            <li>Data Display : Present structured data like files, tasks, or messages using Lists.</li>
            <li>Navigational Menus : Combine List Items with Buttons or Links for intuitive menus.</li>
            <li>Interactive Content : Add action buttons to List Items for task management or settings. </li>
          </ul>

          <a id="Design Guidelines">
            <h2>Design Guidelines</h2>
          </a>

          <p>Consistency</p>
          <ul>
            <li>Maintain a uniform structure across all List Items.</li>
            <li>Use consistent padding and alignment for easy readability.</li>
          </ul>
          <p>Interactive Elements</p>
          <ul>
            <li>Use ListItemButton for click actions.</li>
            <li> Ensure hover states and focus indicators are visually prominent.</li>
          </ul>
          <p>Accessibility</p>
          <ul>
            <li>Provide descriptive labels for screen readers.</li>
            <li>Ensure all items are navigable via keyboard.</li>
          </ul>

          <a id="General Guidelines">
            <h2>General Guidelines</h2>
          </a>

          <p>1. Purpose & Context</p>
          <ul>
            <li>Clearly define the purpose of the List (e.g., data grouping, navigation, task management).</li>
            <li>Use Lists where a vertical layout enhances user understanding or accessibility.</li>
          </ul>
          <p>2. Spacing & Alignment</p>
          <ul>
            <li>Maintain consistent vertical spacing between items.</li>
            <li>Align text, icons, and avatars for a clean, organized appearance.</li>
            <li>Consistent spacing and alignment ensure list items are visually pleasing and easy to scan. Items should be aligned to the left, with adequate padding between elements.</li>
          </ul>
          <p>3. Interactive Design</p>
          <ul>
            <li>For interactive Lists, use actionable items like ListItemButton and ensure buttons or links have proper visual cues (hover/focus states).</li>
            <li>Add affordances like icons or colors to signify item state (e.g., completed, active, or disabled).</li>
          </ul>
          <p>4. Accessibility</p>
          <ul>
            <li>Label all List Items using aria-label or aria-labelledby attributes for screen readers.</li>
            <li>Ensure all interactive elements within a List are keyboard-navigable and have clear focus indicators.</li>
          </ul>


          <a id="Component-Specific Guidance">
            <h2>Component-Specific Guidance</h2>
          </a>
          <p>1. List</p>
          <ul>
            <li>Use the List component as a wrapper for items, ensuring adequate padding and structure.</li>
            <li>Keep Lists concise; avoid excessive scrolling by grouping items with ListSubheader.</li>
          </ul>
          <p>2. List Item</p>
          <ul>
            <li>Limit content to 1-2 lines of text for readability.</li>
            <li>Use secondary text sparingly to avoid visual clutter.</li>
          </ul>
          <p>3. List Item Button</p>
          <ul>
            <li>Ensure actionable buttons have a clear purpose, communicated via labels or icons.</li>
            <li>Avoid excessive buttons in a single List to prevent overwhelming users.</li>
          </ul>
          <p>4. List Item Icon</p>
          <ul>
            <li>Icons should be meaningful and contextually relevant (e.g., ✅ for completed tasks, 🔔 for notifications).</li>
            <li>Align and size icons appropriately relative to the text.</li>
          </ul>
          <p>5. List Item Avatar</p>
          <ul>
            <li>Use avatars to represent users or entities visually</li>
            <li>Provide accessible alternatives (e.g., initials or placeholders) when images are unavailable.</li>
          </ul>
          <p>6. List Item Text</p>
          <ul>
            <li>Maintain a clear hierarchy between primaryText (main content) and secondaryText (supporting details).</li>
            <li>Ensure text is legible and does not dominate the layout.</li>
          </ul>
          <p>7. List Subheader</p>
          <ul>
            <li>Subheaders should describe the group of items succinctly.</li>
            <li>Avoid excessive nesting of subheaders to prevent user confusion.</li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};
/*export const ButtonGuidance = () => {
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
          <Row $Hcenter className="image-container">
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
          <Row $Hcenter className="image-container">
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
          <Row $Hcenter className="image-container">
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
          <Row $Hcenter className="image-container">
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
          <Row $Hcenter className="image-container">
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
*/