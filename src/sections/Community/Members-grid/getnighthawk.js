import React from "react";
import MembersGrid from "./index";
import DataWrapper from "./DataWrapper";

const GetNightHawk = (props) => {
  const data = props.allMembers.allMdx.nodes.filter((member) =>
    member.frontmatter.badges?.includes("getnighthawk")
  );

  return <MembersGrid data={data} {...props} />;
};

export default DataWrapper(GetNightHawk);
