// import React from "react";
// import { navigate } from "gatsby";
// import { useLocation } from "@reach/router";
// import { SistentLayout } from "../../sistent-layout";
// import TabButton from "../../../../../reusecore/Button";
// import { Row } from "../../../../../reusecore/Layout";
// import { Avatar, AvatarGroup, SistentThemeProvider } from "@sistent/sistent";
// import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
//
// import user1 from "../../../../../assets/images/sistent/placeholder/user.webp";
// import user2 from "../../../../../assets/images/sistent/placeholder/user.webp";
// import user3 from "../../../../../assets/images/sistent/placeholder/user.webp";
// import user4 from "../../../../../assets/images/sistent/placeholder/user.webp";
//
// const AvatarGroupGuidance = () => {
//   const location = useLocation();
//   const { isDark } = useStyledDarkMode();
//
//   return (
//     <SistentLayout title="Avatar Group">
//       <div className="content">
//         <a id="Identity">
//           <h2>Avatar Group</h2>
//         </a>
//         <p>
//           The AvatarGroup component is used to represent a collection of users
//           or entities visually grouped together. It is ideal for team-based
//           representations, collaborative interfaces, or participant listings in
//           a compact form.
//         </p>
//
//         {/* Tab Navigation */}
//         <div className="filterBtns">
//           <TabButton
//             className={
//               location.pathname === "/projects/sistent/components/avatar-group"
//                 ? "active"
//                 : ""
//             }
//             onClick={() =>
//               navigate("/projects/sistent/components/avatar-group")
//             }
//             title="Overview"
//           />
//           <TabButton
//             className={
//               location.pathname ===
//               "/projects/sistent/components/avatar-group/guidance"
//                 ? "active"
//                 : ""
//             }
//             onClick={() =>
//               navigate("/projects/sistent/components/avatar-group/guidance")
//             }
//             title="Guidance"
//           />
//           <TabButton
//             className={
//               location.pathname ===
//               "/projects/sistent/components/avatar-group/code"
//                 ? "active"
//                 : ""
//             }
//             onClick={() =>
//               navigate("/projects/sistent/components/avatar-group/code")
//             }
//             title="Code"
//           />
//         </div>
//
//         <div className="main-content">
//           <p>
//             To use AvatarGroup effectively, consider the number of users, the
//             available space, and the visual emphasis. This ensures the grouping
//             is clear, non-intrusive, and enhances usability across contexts.
//           </p>
//
//           <a id="Usage">
//             <h2>Usage Patterns</h2>
//           </a>
//
//           <h3>Default Behavior</h3>
//           <p>
//             AvatarGroup automatically arranges avatars in a horizontal layout
//             with overlapping positioning for visual compactness. It's perfect
//             for showing contributors or team members.
//           </p>
//           <Row $Hcenter className="image-container">
//             <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
//               <AvatarGroup>
//                 <Avatar src={user1} alt="User 1" />
//                 <Avatar src={user2} alt="User 2" />
//                 <Avatar src={user3} alt="User 3" />
//               </AvatarGroup>
//             </SistentThemeProvider>
//           </Row>
//
//           <h3>Limiting Avatars (max)</h3>
//           <p>
//             Use the <code>max</code> prop to show a maximum number of avatars.
//             Any excess is summarized into a counter (e.g., +2) for cleaner
//             display.
//           </p>
//           <Row $Hcenter className="image-container">
//             <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
//               <AvatarGroup max={3}>
//                 <Avatar src={user1} />
//                 <Avatar src={user2} />
//                 <Avatar src={user3} />
//                 <Avatar src={user4} />
//               </AvatarGroup>
//             </SistentThemeProvider>
//           </Row>
//
//           <h3>Spacing</h3>
//           <p>
//             AvatarGroup supports adjustable spacing between avatars. Use the{" "}
//             <code>spacing</code> prop with values like <code>"small"</code>,{" "}
//             <code>"medium"</code>, or custom units to control layout density.
//           </p>
//           <Row $Hcenter className="image-container">
//             <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
//               <AvatarGroup spacing="medium">
//                 <Avatar src={user1} />
//                 <Avatar src={user2} />
//                 <Avatar src={user3} />
//               </AvatarGroup>
//             </SistentThemeProvider>
//           </Row>
//
//           <h3>Shape Variants</h3>
//           <p>
//             Each Avatar in the group can have a <code>variant</code> like{" "}
//             <code>rounded</code> or <code>square</code>, offering flexibility in
//             adapting to different visual styles.
//           </p>
//           <Row $Hcenter className="image-container">
//             <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
//               <AvatarGroup>
//                 <Avatar variant="rounded" src={user1} />
//                 <Avatar variant="square" src={user2} />
//                 <Avatar src={user3} />
//               </AvatarGroup>
//             </SistentThemeProvider>
//           </Row>
//
//           <h3>Accessibility</h3>
//           <p>
//             Always include <code>alt</code> text for each avatar to improve
//             accessibility. Use meaningful labels (e.g., full names or roles)
//             where possible.
//           </p>
//         </div>
//       </div>
//     </SistentLayout>
//   );
// };
//
// export default AvatarGroupGuidance;

import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";

const AvatarGroupGuidance = () => {
  const location = useLocation();

  return (
    <SistentLayout title="Avatar Group">
      <div className="content">
        <a id="Identity">
          <h2>Avatar Group</h2>
        </a>
        <p>
          The <strong>AvatarGroup</strong> component displays a compact
          collection of avatar elements that represent a group of users or
          entities. It’s useful in collaborative spaces, team-based features, or
          user listings.
        </p>

        {/* Tabs */}
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/avatar-group"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/avatar-group")
            }
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/avatar-group/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/avatar-group/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/avatar-group/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/avatar-group/code")
            }
            title="Code"
          />
        </div>

        <div className="main-content">
          <h3>Design Guidelines and Best Practices</h3>
          <p>
            When implementing <code>AvatarGroup</code>, it's important to
            consider how it enhances collaboration and identity clarity without
            overwhelming the interface. Here are key best practices:
          </p>

          <ul>
            <li>
              <strong>Use to represent teams or shared ownership:</strong> Ideal
              for showing members of a project, contributors, or shared access
              groups in apps like dashboards or chat.
            </li>
            <li>
              <strong>Don’t overuse in dense interfaces:</strong> Too many
              avatars in a group can clutter the view. Use the <code>max</code>{" "}
              prop to collapse overflow into a <code>+N</code> indicator.
            </li>
            <li>
              <strong>Use consistent sizing and spacing:</strong> Align all
              avatars to the same size to maintain visual harmony. Use{" "}
              <code>spacing</code> options (or <code>sx</code>) for controlled
              overlap.
            </li>
            <li>
              <strong>
                Provide accessible <code>alt</code> text:
              </strong>{" "}
              Each avatar should have meaningful alternative text for screen
              readers. Avoid empty or redundant <code>alt</code> values.
            </li>
            <li>
              <strong>Avoid interactive behavior within AvatarGroup:</strong>{" "}
              The component is for display only. If avatars must be clickable,
              wrap each <code>&lt;Avatar&gt;</code> individually in buttons or
              links outside the group context.
            </li>
            <li>
              <strong>Keep it compact:</strong> AvatarGroup is not meant for
              long lists. For large user sets, link to a full view or show
              summary avatars only.
            </li>
            <li>
              <strong>Fallbacks matter:</strong> Always account for broken
              images by using initials or icons as fallback content within each{" "}
              <code>Avatar</code>.
            </li>
          </ul>

          <p>
            These practices ensure that <code>AvatarGroup</code> remains a
            helpful, visually tidy, and accessible interface element wherever
            user identity grouping is necessary.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default AvatarGroupGuidance;
