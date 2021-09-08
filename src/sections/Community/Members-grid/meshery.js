import React from "react";
import MembersGrid from "./index";
import DataWrapper from "./DataWrapper";

const Meshery = (props) => {
  const data = props.allMembers.allMdx.nodes.filter((member) =>
    member.frontmatter.badges?.includes("meshery")
  );

  return <MembersGrid data={data} {...props} />;
};

export default DataWrapper(Meshery);
