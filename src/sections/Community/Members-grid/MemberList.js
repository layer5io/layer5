import React from "react";

// Components
import MembersGrid from "./index";
import DataWrapper from "./DataWrapper";

const AllMembers = (props) => {
  const selectedBadges = props.members;
  const data = [];

  props.allMembers.allMdx.nodes.forEach((member) => {
    let isApplicable = 0;

    selectedBadges.forEach(({ value: badge }) => {
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

      if (member.frontmatter.badges?.includes(badge)) isApplicable++;
    });

    if (isApplicable === selectedBadges.length) data.push(member);
  });

  return <MembersGrid data={[...new Set(data)]} {...props} />;
};

export default DataWrapper(AllMembers);
