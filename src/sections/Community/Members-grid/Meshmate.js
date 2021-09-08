import React from "react";
import MembersGrid from "./index";
import DataWrapper from "./DataWrapper";

const Meshmate = (props) => {
  const data = props.allMembers.allMdx.nodes.filter(
    (member) => member.frontmatter.meshmate == "yes"
  );

  return <MembersGrid data={data} {...props} />;
};

export default DataWrapper(Meshmate);
