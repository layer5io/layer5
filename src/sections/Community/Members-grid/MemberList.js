import React from "react";

// Components
import MembersGrid from "./index";
import DataWrapper from "./DataWrapper";

const MembersList = (props) => {
  const selectedBadges = props.members;
  let data = [];

  /**
   * Mapping through each member to verify
   * if the member has the selected badges
   */
  props.allMembers.allMdx.nodes.forEach((member) => {
    /**
     * A count storing the total number of badges
     * from the selected that the user has
     */
    let isApplicable = 0;

    selectedBadges.forEach(({ value: badge }) => {
      /**
       * Multiple checkes required as for each badge
       * different properties (maintainer, meshmate, badges)
       * are being verified
       */
      if (
        (badge === "active" || badge === "inactive") &&
        member.frontmatter.status ==
          `${badge.charAt(0).toUpperCase() + badge.slice(1)}`
      )
        isApplicable++;

      if (badge === "maintainers" && member.frontmatter.maintainer === "yes")
        isApplicable++;

      if (badge === "meshmates" && member.frontmatter.meshmate === "yes")
        isApplicable++;

      if (badge === "community_managers" && member.frontmatter.community_manager === "yes")
        isApplicable++;

      if (member.frontmatter.badges?.includes(badge)) isApplicable++;

      if (badge === "all") isApplicable++;
    });

    /**
     * Final check to determine if the count is
     * equal to the length of the selectedBadges array
     * showing that the user has all the required badges.
     * If so, add to the data array to be passed down.
     */
    if (isApplicable === selectedBadges.length) data.push(member);
  });

  return <MembersGrid data={[...new Set(data)]} {...props} />;
};

export default DataWrapper(MembersList);
