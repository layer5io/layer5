import React from "react";
import MembersGrid from "./index";
import DataWrapper from "./DataWrapper";

const MesheryOperator = (props) => {
  const data = props.allMembers.allMdx.nodes.filter((member) =>
    member.frontmatter.badges?.includes("meshery-operator")
  );

  return <MembersGrid data={data} {...props} />;
};

export default DataWrapper(MesheryOperator);
