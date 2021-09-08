import React from "react";
import MembersGrid from "./index";
import DataWrapper from "./DataWrapper";

const InactiveMembers = (props) => {
  const data = props.allMembers.allMdx.nodes.filter(
    (member) => member.frontmatter.status == "Inactive"
  );

  return <MembersGrid data={data} {...props} />;
};

export default DataWrapper(InactiveMembers);
