import React from "react";
import MembersGrid from "./index";
import DataWrapper from "./DataWrapper";

const ActiveMembers = (props) => {
  const data = props.allMembers.allMdx.nodes.filter(
    (member) => member.frontmatter.status == "Active"
  );

  return <MembersGrid data={data} {...props} />;
};

export default DataWrapper(ActiveMembers);
