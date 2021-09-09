import React from "react";
import MembersGrid from "./index";
import DataWrapper from "./DataWrapper";

const AllMembers = (props) => {
  const selectedBadges = props.members;
  const data = [];
  props.allMembers.allMdx.nodes.forEach((member) => {
    selectedBadges.forEach(({ value: badge }) => {
      if (
        (badge === "active" || badge === "inactive") &&
        member.frontmatter.status ==
          `${badge.charAt(0).toUpperCase() + badge.slice(1)}`
      ) {
        data.push(member);
      } else if (
        badge === "maintainers" &&
        member.frontmatter.maintainer === "yes"
      ) {
        data.push(member);
      } else if (
        badge === "meshmates" &&
        member.frontmatter.meshmate === "yes"
      ) {
        data.push(member);
      } else if (member.frontmatter.badges?.includes(badge)) {
        data.push(member);
      }
    });
  });

  return <MembersGrid data={[...new Set(data)]} {...props} />;
};

export default DataWrapper(AllMembers);
