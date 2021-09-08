import React from "react";
import MembersGrid from "./index";
import DataWrapper from "./DataWrapper";

const SMP = (props) => {
  const data = props.allMembers.allMdx.nodes.filter((member) =>
    member.frontmatter.badges?.includes("smp")
  );

  return <MembersGrid data={data} {...props} />;
};

export default DataWrapper(SMP);
