import React from "react";
import MembersGrid from "./index";
import DataWrapper from "./DataWrapper";

const Community = (props) => {
  const data = props.allMembers.allMdx.nodes.filter((member) =>
    member.frontmatter.badges?.includes("community")
  );

  return <MembersGrid data={data} {...props} />;
};

export default DataWrapper(Community);
