import React from "react";
import MembersGrid from "./index";
import DataWrapper from "./DataWrapper";

const Landscape = (props) => {
  const data = props.allMembers.allMdx.nodes.filter((member) =>
    member.frontmatter.badges?.includes("landscape")
  );

  return <MembersGrid data={data} {...props} />;
};

export default DataWrapper(Landscape);
