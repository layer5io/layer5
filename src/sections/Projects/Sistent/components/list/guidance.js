import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";

const ListGuidance = () => {
  const location = useLocation();

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
            <li>Icons should be meaningful and contextually relevant (e.g., CheckIcon for completed tasks, NotificationsIcon for notifications).</li>
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
export default ListGuidance;